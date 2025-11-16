// 'use server';

// import { Resend } from 'resend';
// import { env } from '@/env.mjs';
// import { TFormSchema } from '@/lib/form-schema';

// const resend = new Resend(env.RESEND_API_KEY);

// export const sendEmailAction = async ({ email, message }: TFormSchema) => {
//   try {
//     await resend.emails.send({
//       from: 'Portfolio Contact <onboarding@resend.dev>',
//       to: env.CONTACT_EMAIL, // ⭐ THIS sends email to YOU
//       subject: 'New Portfolio Contact Message',
//       replyTo: email,
//       text: `Sender Email: ${email}\n\nMessage:\n${message}`,
//     });

//     return { data: 'Email sent successfully!' };
//   } catch (error) {
//     console.error('Email Error:', error);
//     return { error: 'Something went wrong sending email!' };
//   }
// };
'use server';

import { Resend } from 'resend';
import { env } from '@/env.mjs';
import { TFormSchema } from '@/lib/form-schema';

const resend = new Resend(env.RESEND_API_KEY);

type EmailResponse = {
  data?: string;
  error?: string;
};

export const sendEmailAction = async ({ email, message }: TFormSchema): Promise<EmailResponse> => {
  try {
    // TEMP DISABLED EMAIL - always succeeds
    return { data: "OK" };

    // REAL EMAIL (ENABLE LATER)
    // await resend.emails.send({
    //   from: "Portfolio Contact <onboarding@resend.dev>",
    //   to: env.CONTACT_EMAIL!,
    //   subject: "New Portfolio Contact Message",
    //   replyTo: email,
    //   text: `Sender Email: ${email}\n\nMessage:\n${message}`,
    // });
    // return { data: "Email sent successfully!" };
  } catch (error) {
    console.error("Email Error:", error);
    return { error: "Something went wrong!" };
  }
};
