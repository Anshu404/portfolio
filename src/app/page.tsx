import { About } from '@/components/about';
import { Contact } from '@/components/contact';
import { Experience } from '@/components/experience';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Intro } from '@/components/intro';
import { Projects } from '@/components/projects';
import { SectionDivider } from '@/components/section-divider';
import { ThemeToggle } from '@/components/theme-toggle';
// 👇 1. Import the Certificates component
import Certificates from '@/components/certificates'; 

const HomePage = async () => {
  return (
    <>
      <div className="w-full max-w-6xl mx-auto px-4 flex flex-col items-center">
        <Header />
        <Intro />
        <SectionDivider />
        <About />
        
        {/* Note: Ensure this order matches your lib/data.ts links order for smooth scrolling */}
        <Experience />
        <Projects />
        
        {/* 👇 2. Add the Certificates section here */}
        <Certificates />

        <Contact />
        <Footer />
      </div>
      <ThemeToggle className="bg-background hidden sm:fixed sm:bottom-8 sm:right-8 sm:flex" />
    </>
  );
};

export default HomePage;