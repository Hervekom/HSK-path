import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { getDailyChinese } from './server/dailyChinese';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());

// Health endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// API endpoint: Chinese Language Daily (with Google Search Grounding)
app.all('/api/daily-chinese', async (req, res) => {
  const level = (req.query.level || req.body?.level || 'hsk2') as string;
  const category = (req.query.category || req.body?.category || 'mixed') as string;
  const language = (req.query.language || req.body?.language || 'en') as string;
  res.json(await getDailyChinese({ level, category, language }));
});

async function startServer() {
  // Vite middleware setup for dev vs production
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`HSK Path server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
