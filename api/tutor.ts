import type { VercelRequest, VercelResponse } from '@vercel/node';
import { handleTutor } from '../server/tutorHandler.js';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'method_not_allowed' });
  }
  const result = await handleTutor(req.body, req.headers);
  res.status(result.status).json(result.body);
}
