import type { VercelRequest, VercelResponse } from '@vercel/node';
import { getDailyChinese } from '../server/dailyChinese.js';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const q = req.query as Record<string, string | undefined>;
  const b = (req.body || {}) as Record<string, string | undefined>;
  const data = await getDailyChinese({
    level: q.level || b.level || 'hsk2',
    category: q.category || b.category || 'mixed',
    language: q.language || b.language || 'en',
  });
  res.setHeader('Cache-Control', 's-maxage=1800, stale-while-revalidate=3600');
  res.status(200).json(data);
}
