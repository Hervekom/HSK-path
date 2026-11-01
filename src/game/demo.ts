// Sample game state for demo mode: a 6-day streak at risk today, a few badges.
import { dayKey, shiftDay, type GameState } from './engine';

export function demoGame(): GameState {
  const today = dayKey();
  const xp: Record<string, number> = { [today]: 10 };
  const pattern = [45, 52, 41, 60, 44, 48, 0, 0, 35, 50, 42, 0, 38, 47];
  pattern.forEach((v, i) => {
    if (v) xp[shiftDay(today, -(i + 1))] = v;
  });
  const earned = shiftDay(today, -5);
  return {
    v: 1,
    xp,
    total: 1240,
    streak: { count: 6, last: shiftDay(today, -1), best: 9 },
    stats: { pron: 34, srs: 120, lesson: 4, quiz: 6, laoshi: 12, goalDays: 15, exam: 2, word: 60 },
    badges: { 'streak-3': earned, 'streak-7': shiftDay(today, -20), 'words-50': earned, 'pron-1': earned, 'lesson-1': earned, 'exam-1': earned, 'srs-100': shiftDay(today, -2), 'xp-1000': shiftDay(today, -3) },
    seen: {},
  };
}
