import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    SITE_URL: z.string().url(),
    GOOGLE_SITE_VERIFICATION_ID: z.string(),
    RESEND_API_KEY: z.string(),
    CONTACT_EMAIL: z.string().email(), // ⭐ NOT OPTIONAL
  },
  runtimeEnv: {
    SITE_URL: process.env.SITE_URL!,
    GOOGLE_SITE_VERIFICATION_ID: process.env.GOOGLE_SITE_VERIFICATION_ID!,
    RESEND_API_KEY: process.env.RESEND_API_KEY!,
    CONTACT_EMAIL: process.env.CONTACT_EMAIL!,   // ⭐ NOT OPTIONAL
  },
});
