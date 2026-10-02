This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

## Callback email setup

The callback form posts to `/api/callback`. A server-side Nodemailer transport sends all form details to `hi@growdart.com`, with the learner's email as the Reply-To address.

Copy `.env.example` to `.env.local` and set `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, and `SMTP_FROM` using your email provider's SMTP settings. `SMTP_FROM` must be authorized by that provider. Use port 587 for STARTTLS or 465 for implicit TLS. Restart the development server after configuring credentials. Add the same server-only variables to your deployment environment.

Never commit `.env.local` or expose credentials with a `NEXT_PUBLIC_` prefix. Without SMTP credentials, the form displays an unavailable message rather than claiming the request was sent. Success means the provider accepted the message; inbox delivery depends on the provider.

Run `node --test tests/callback.test.mjs` to verify validation, email composition, and failure handling without sending real email.

## Run locally

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
