# HSK Path

E-learning SaaS to prepare HSK 1–3: vocabulary (SRS), listening, reading, writing, mock exams and progress tracking. UI in English, French and Chinese.

## Stack
- React 19 + Vite + Tailwind 4
- Supabase (auth + `user_progress` table, see `supabase/schema.sql`)
- Vercel (static site + serverless `/api/daily-chinese`, optional Gemini key)
- Laoshi, AI tutor: `/api/tutor` (`server/tutor*.ts`, `server/ai/provider.ts`), free Groq key `GROQ_API_KEY`, daily quota in `supabase/tutor.sql`; students can add their own Groq/Gemini key

## Local dev
```bash
npm install
cp .env.example .env.local   # fill in Supabase URL + key
npm run dev                  # http://localhost:3000
```

Without Supabase env vars the app runs in demo-only mode.
