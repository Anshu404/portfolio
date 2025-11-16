'use client';

import React, { Suspense, useRef, useMemo } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
// ERROR FIX: Isse temporarily comment kar raha hoon.
// Asli fix ke liye neeche diye gaye instructions padhein.
// import { EffectComposer, Bloom } from '@react-three/postprocessing';


// --- 1. NEW: 3D Text Component ---
// Humne NirmaanLogo ko iss naye component se replace kar diya hai
function ThreeDText() {
    const groupRef = useRef<THREE.Group>(null!);

    // YEH IMPORTANT HAI:
    // Yeh same useFrame logic hai jo aapke NirmaanLogo mein tha.
    // Isse text bhi waise hi float aur rotate karega.
    useFrame((state) => {
        if (groupRef.current) {
            const t = state.clock.getElapsedTime();
            groupRef.current.rotation.y = Math.sin(t * 0.2) * 0.4;
            groupRef.current.rotation.x = Math.cos(t * 0.1) * 0.2;
            groupRef.current.position.y = Math.sin(t * 0.5) * 5; // Floating effect
        }
    });

    const textProps = {
        color: "#ffffff",
        anchorX: "center",
        anchorY: "middle",
        emissive: "#ff6600", // Isse text Bloom karega (glow)
        emissiveIntensity: 3,
        metalness: 0.8,
        roughness: 0.4,
    };

    return (
        // Hum text ko ek group mein daal rahe hain taaki poora group animate ho
        <group ref={groupRef} position={[0, 0, -20]}>
            <Text
                fontSize={30}
                {...textProps}
                position={[0, 20, 0]} // Line 1
            >
                HI, I'M [AAPKA NAAM]
            </Text>
            <Text
                fontSize={20}
                {...textProps}
                position={[0, -15, 0]} // Line 2
                color="#cccccc"
                emissive="#00aaff"
                emissiveIntensity={2}
            >
                A FULL STACK DEVELOPER
            </Text>
        </group>
    );
}

// --- 2. Floating Particles Component (Koi Change Nahi) ---
function Particles({ count = 3000 }) {
    const pointsRef = useRef<THREE.Points>(null!);
    const particleColor = '#ffffff';

    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            const t = Math.random() * 100;
            const factor = 20 + Math.random() * 100;
            const speed = 0.01 + Math.random() / 200;
            const x = -500 + Math.random() * 1000;
            const y = -500 + Math.random() * 1000;
            const z = -500 + Math.random() * 1000;
            temp.push({ t, factor, speed, x, y, z });
        }
        return temp;
    }, [count]);

    const particlePositions = useMemo(() => {
        const positions = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            positions[i * 3] = particles[i].x;
            positions[i * 3 + 1] = particles[i].y;
            positions[i * 3 + 2] = particles[i].z;
        }
        return positions;
    }, [count, particles]);
    
    useFrame(() => {
        if (!pointsRef.current) return;
        const positions = (pointsRef.current.geometry.attributes.position as THREE.BufferAttribute).array as Float32Array;
        for (let i = 0; i < particles.length; i++) {
            const { factor, speed } = particles[i];
            particles[i].t += speed;
            const t = particles[i].t;
            positions[i * 3 + 1] += Math.sin(t) * factor * 0.0005;
            if (positions[i * 3 + 1] < -500) {
                 positions[i * 3 + 1] = 500;
            }
        }
        pointsRef.current.geometry.attributes.position.needsUpdate = true;
    });

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={particlePositions.length / 3}
                    array={particlePositions}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial size={0.7} color={particleColor} sizeAttenuation />
        </points>
    );
}

// --- 3. Construction-inspired Wireframes (Koi Change Nahi) ---
function ConstructionElements() {
    const groupRef = useRef<THREE.Group>(null!);
    useFrame((state) => {
        if(groupRef.current) groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    });

    const scaffoldEmissive = '#0077ff';
    const blockColor = '#ffffff';

    const elements = useMemo(() => {
        const items = [];
        for (let i = 0; i < 8; i++) {
            items.push(
                <mesh key={`scaffold-${i}`} position={[(Math.random() - 0.5) * 600, (Math.random() - 0.5) * 400, (Math.random() - 0.5) * 600]}>
                    <boxGeometry args={[50 + Math.random() * 100, 50 + Math.random() * 100, 50 + Math.random() * 100]} />
                    <meshStandardMaterial color="orange" emissive={scaffoldEmissive} emissiveIntensity={0.5} wireframe />
                </mesh>
             );
        }
        for (let i = 0; i < 10; i++) {
            items.push(
                <mesh key={`block-${i}`} position={[(Math.random() - 0.5) * 800, (Math.random() - 0.5) * 500, (Math.random() - 0.5) * 800]}>
                    <boxGeometry args={[10 + Math.random() * 20, 10 + Math.random() * 20, 10 + Math.random() * 20]} />
                    <meshStandardMaterial color={blockColor} wireframe opacity={0.3} transparent />
                </mesh>
             );
        }
        return items;
    }, []);

    return <group ref={groupRef}>{elements}</group>;
}

// --- 4. Camera Controller (Koi Change Nahi) ---
function Rig() {
    useFrame((state) => {
        state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, state.pointer.x * 30, 0.05);
        state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, state.pointer.y * 20, 0.05);
        state.camera.position.z = 350 + Math.cos(state.clock.getElapsedTime() * 0.1) * 20;
        state.camera.lookAt(0, 0, 0);
    });
    return null;
}

// --- 5. Scene Animator (Koi Change Nahi) ---
function SceneAnimator({ groupRef }) {
    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, state.pointer.x * 0.2, 0.1);
            groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -state.pointer.y * 0.2, 0.1);
        }
    });
    return null;
}

// --- Main Hero Section Component ---
export default function Hero() {
    const sceneGroupRef = useRef<THREE.Group>(null!);

    return (
        <div className="relative w-full h-[85vh] bg-black">
            {/* --- MODIFIED: HTML Overlay ---
             Maine yahaan text aur buttons daal diye hain.
             CRITICAL: Maine 'pointer-events-none' hata diya hai taaki buttons clickable hon.
            */}
            <div className="absolute top-0 left-0 w-full h-full z-10 flex items-center justify-center text-center">
                <div className="flex flex-col items-center gap-4 p-4">
                    <h1 className="text-4xl md:text-6xl font-bold text-white tracking-wider" style={{ textShadow: '0 0 15px rgba(0,0,0,0.7)' }}>
                        Hi, I'm [Aapka Naam]
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300" style={{ textShadow: '0 0 10px rgba(0,0,0,0.7)' }}>
                        I'm a Frontend Developer based in [Aapka Sheher].
                    </p>
                    
                    {/* Yahaan aapke portfolio ke buttons hain */}
                    <div className="flex gap-4 mt-4 pointer-events-auto">
                        <a 
                            href="#contact" 
                            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
                        >
                            Get in touch
                        </a>
                        <a 
                            href="/resume.pdf" // Ensure your CV is in public/resume.pdf
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-2 bg-gray-700 text-white font-semibold rounded-lg shadow-lg hover:bg-gray-800 transition-colors"
                        >
                            Download CV
                        </a>
                    </div>
                </div>
            </div>

            {/* --- 3D Canvas --- */}
            <Canvas camera={{ position: [0, 0, 250], fov: 75 }}>
                <color attach="background" args={['#050505']} />
                <fog attach="fog" args={['#050505', 100, 700]} />
                <ambientLight intensity={0.5} />
                <pointLight position={[150, 150, 150]} intensity={0.8} color="#ff8800" />
                <pointLight position={[-150, -150, -50]} intensity={1.5} color="#00aaff" />
                <directionalLight position={[0, 200, 100]} intensity={1} />

                <Suspense fallback={null}>
                    <group ref={sceneGroupRef}>
                        {/* REPLACED: Yahaan NirmaanLogo ki jagah naya 3D text aa gaya */}
                        <ThreeDText />
                        <Particles />
                        <ConstructionElements />
                    </group>
                    
                    {/* ERROR FIX: Isse temporarily comment kar raha hoon.
                        Run `npm install @react-three/postprocessing`
                        aur phir inn comments ko hata dein.
                    <EffectComposer>
                        <Bloom
                            luminanceThreshold={0.1}
                            luminanceSmoothing={0.9}
                            height={300}
                            intensity={0.8}
                        />
                    </EffectComposer>
                    */}
                </Suspense>
                
                <Rig />
                <SceneAnimator groupRef={sceneGroupRef} />
            </Canvas>
        </div>
    );
}