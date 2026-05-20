# Majorca & Ibiza Pre-F(x) 2026

Static landing page for the MIT Sloan incoming first-years trip to Majorca and Ibiza (Aug 23–29, 2026).

## Stack

- Next.js (App Router)
- Tailwind CSS v4
- Framer Motion (scroll reveal)
- Lucide React

## Security

This site is **fully static** (`output: "export"`). There are no API routes, databases, or server-side form handlers. Captain contacts use `tel:` links only.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

1. Push this repo to GitHub.
2. Import the project in [Vercel](https://vercel.com/new).
3. Framework preset: **Next.js** (default build `npm run build` works with static export).

Or via CLI:

```bash
npx vercel
```

## Branch

Active feature branch: `feature/landing-page`
