# Majorca & Ibiza Pre-F(x) 2026

Static landing page for the MIT Sloan incoming first-years trip to Majorca and Ibiza (Aug 23–29, 2026).

## Stack

- Next.js (App Router)
- Tailwind CSS v4
- Framer Motion (scroll reveal)
- Lucide React

## Security

This site is **fully static** (`output: "export"`). There are no API routes, databases, or server-side form handlers. Captain contacts use `tel:` and external Instagram links only.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Publish (GitHub + Vercel)

From the project root, after [GitHub CLI](https://cli.github.com/) and [Vercel CLI](https://vercel.com/docs/cli) are logged in:

```bash
gh auth login -h github.com
npx vercel login

./scripts/publish.sh
```

Or manually:

```bash
gh repo create majorca-ibiza-prefx --public --source=. --remote=origin --push
npx vercel deploy --prod --yes
```

Expected repo: `https://github.com/kamiquaziii/majorca-ibiza-prefx`
