# HumanizeAI

HumanizeAI is a modern SaaS-style Next.js app that rewrites AI-generated or robotic-sounding text into natural, fluent writing while preserving the original meaning.

## Tech stack

- Next.js with App Router
- TypeScript
- Tailwind CSS
- Mock AI provider via a server-side route for development
- Ready for Vercel deployment

## Project structure

```text
.
├── app
│   ├── api
│   │   └── humanize
│   │       └── route.ts
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components
│   └── humanizer-panel.tsx
├── lib
│   └── humanizer
│       ├── index.ts
│       ├── mock-provider.ts
│       └── types.ts
├── .env.example
├── .gitignore
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── README.md
└── tsconfig.json
```

## Environment variables

No environment variables are required for local development right now. The app uses a mock rewrite provider so the UI and API flow can be tested without external services.

## Run locally

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000)

## How it works

- Users paste text into the demo area
- The app sends the text and selected tone to `/api/humanize`
- The route calls a mock provider that lightly rewrites the text for readability during development
- The rewritten text is returned to the client and shown in the output panel

## Deploy on Vercel

1. Push the project to GitHub
2. Import the repository into [Vercel](https://vercel.com)
3. Deploy

Vercel will automatically detect Next.js and build the app.

## Provider notes

The current API route uses a mock provider located under `lib/humanizer/`. The route only depends on the provider interface, so a real AI integration can be added later by introducing another provider and swapping the implementation in `getHumanizerProvider()`.
