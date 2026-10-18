import React, { useEffect, useMemo, useState } from 'react';
import {
  Users,
  Activity,
  Crown,
  FileCheck,
  Search,
  RefreshCw,
  X,
  Flame,
  BookOpen,
  Trophy,
  ChevronRight,
  ShieldCheck,
} from '../components/icons';
import { useI18n } from '../locales';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { fetchAllStudents, adminSetPro, type AdminStudentRow } from '../lib/progressStore';
import { useToast } from '../components/ui/Toast';
import type { TestResult } from '../types';

type LevelFilter = 'all' | 'hsk1' | 'hsk2' | 'hsk3';
type SortKey = 'recent' | 'newest' | 'words' | 'score';

const DAY = 24 * 60 * 60 * 1000;

function daysAgo(iso: string | null | undefined): number | null {
  if (!iso) return null;
  const d = new Date(iso).getTime();
  if (Number.isNaN(d)) return null;
  return Math.floor((Date.now() - d) / DAY);
}

function bestScore(tests: TestResult[]): number | null {
  if (!tests.length) return null;
  return Math.max(...tests.map((r) => Math.round((r.score / (r.totalScore || 100)) * 100)));
}

export const AdminView: React.FC = () => {
  const { t, language } = useI18n();
  const { addToast } = useToast();
  const [rows, setRows] = useState<AdminStudentRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState('');
  const [level, setLevel] = useState<LevelFilter>('all');
  const [sort, setSort] = useState<SortKey>('recent');
  const [selected, setSelected] = useState<AdminStudentRow | null>(null);
  const [busyId, setBusyId] = useState<string | null>(null);

  const fmtDate = (iso: string | null | undefined) => {
    if (!iso) return '—';
    const locale = language === 'fr' ? 'fr-FR' : language === 'zh' ? 'zh-CN' : 'en-GB';
    return new Date(iso).toLocaleDateString(locale, { day: '2-digit', month: 'short', year: 'numeric' });
  };

  const relative = (iso: string | null | undefined) => {
    const d = daysAgo(iso);
    if (d === null) return '—';
    if (d <= 0) return t('admin.today');
    if (d === 1) return t('admin.yesterday');
    return t('admin.daysAgo', { days: d });
  };

  const load = async () => {
    setLoading(true);
    setError(null);
    try {
      setRows(await fetchAllStudents());
    } catch (e: any) {
      setError(e?.message || 'Error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  // ---------- KPIs ----------
  const stats = useMemo(() => {
    const allTests = rows.flatMap((r) => r.test_history || []);
    const active7 = rows.filter((r) => (daysAgo(r.updated_at) ?? 999) < 7).length;
    const new7 = rows.filter((r) => (daysAgo(r.created_at) ?? 999) < 7).length;
    const pro = rows.filter((r) => r.is_pro).length;
    const passed = allTests.filter((x) => x.isPassed).length;
    const avg = allTests.length
      ? Math.round(allTests.reduce((s, x) => s + (x.score / (x.totalScore || 100)) * 100, 0) / allTests.length)
      : null;
    const byLevel = (['hsk1', 'hsk2', 'hsk3'] as const).map((l) => ({
      level: l,
      count: rows.filter((r) => (r.profile?.currentHsk || 'hsk1') === l).length,
    }));
    const recentTests = rows
      .flatMap((r) => (r.test_history || []).map((x) => ({ ...x, student: r })))
      .sort((a, b) => (b.id > a.id ? 1 : -1))
      .slice(0, 6);
    return {
      total: rows.length,
      active7,
      new7,
      pro,
      tests: allTests.length,
      passRate: allTests.length ? Math.round((passed / allTests.length) * 100) : null,
      avg,
      byLevel,
      recentTests,
    };
  }, [rows]);

  // ---------- Filtered list ----------
  const list = useMemo(() => {
    const q = query.trim().toLowerCase();
    const filtered = rows.filter((r) => {
      const name = (r.profile?.name || '').toLowerCase();
      const email = (r.profile?.email || '').toLowerCase();
      const okQ = !q || name.includes(q) || email.includes(q);
      const okL = level === 'all' || (r.profile?.currentHsk || 'hsk1') === level;
      return okQ && okL;
    });
    const sorted = [...filtered];
    if (sort === 'newest') sorted.sort((a, b) => b.created_at.localeCompare(a.created_at));
    if (sort === 'words') sorted.sort((a, b) => (b.learned_ids?.length || 0) - (a.learned_ids?.length || 0));
    if (sort === 'score') sorted.sort((a, b) => (bestScore(b.test_history || []) ?? -1) - (bestScore(a.test_history || []) ?? -1));
    return sorted;
  }, [rows, query, level, sort]);

  const togglePro = async (r: AdminStudentRow) => {
    setBusyId(r.user_id);
    try {
      await adminSetPro(r.user_id, !r.is_pro);
      setRows((prev) => prev.map((x) => (x.user_id === r.user_id ? { ...x, is_pro: !r.is_pro } : x)));
      setSelected((s) => (s && s.user_id === r.user_id ? { ...s, is_pro: !r.is_pro } : s));
      addToast(!r.is_pro ? t('admin.proGranted') : t('admin.proRemoved'), 'success');
    } catch (e: any) {
      addToast(e?.message || 'Error', 'warning');
    } finally {
      setBusyId(null);
    }
  };

  const kpis = [
    { label: t('admin.kpiStudents'), value: stats.total, sub: t('admin.kpiNew7', { count: stats.new7 }), icon: Users, tone: 'bg-stone-900 text-white' },
    { label: t('admin.kpiActive'), value: stats.active7, sub: stats.total ? `${Math.round((stats.active7 / stats.total) * 100)}%` : '—', icon: Activity, tone: 'bg-emerald-50 text-emerald-700 border border-emerald-200' },
    { label: t('admin.kpiPro'), value: stats.pro, sub: stats.total ? `${Math.round((stats.pro / stats.total) * 100)}%` : '—', icon: Crown, tone: 'bg-amber-50 text-amber-700 border border-amber-200' },
    { label: t('admin.kpiTests'), value: stats.tests, sub: stats.passRate === null ? '—' : t('admin.kpiPassRate', { rate: stats.passRate }), icon: FileCheck, tone: 'bg-rose-50 text-[#C52828] border border-rose-200' },
  ];

  const maxLevel = Math.max(1, ...stats.byLevel.map((b) => b.count));

  return (
    <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-150">
      {/* Title */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
        <div>
          <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-[#C52828] mb-1.5">
            <ShieldCheck className="w-3.5 h-3.5" />
            {t('admin.badge')}
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">{t('admin.title')}</h1>
          <p className="text-sm text-stone-500 mt-1">{t('admin.subtitle')}</p>
        </div>
        <Button variant="outline" size="sm" onClick={load} disabled={loading} icon={<RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />}>
          {t('admin.refresh')}
        </Button>
      </div>

      {error && (
        <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-sm text-rose-800">
          {t('admin.loadError')} <span className="font-mono text-xs">{error}</span>
        </div>
      )}

      {/* KPI cards */}
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-4">
        {kpis.map((k) => {
          const Icon = k.icon;
          return (
            <Card key={k.label} className="!p-4 sm:!p-5">
              <div className="flex items-start justify-between gap-2">
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-stone-500 leading-tight">{k.label}</span>
                <span className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${k.tone}`}>
                  <Icon className="w-4 h-4" />
                </span>
              </div>
              <div className="mt-2 text-2xl sm:text-3xl font-extrabold text-stone-950 tabular-nums">{loading ? '…' : k.value}</div>
              <div className="text-xs text-stone-500 mt-0.5">{loading ? '' : k.sub}</div>
            </Card>
          );
        })}
      </div>

      {/* Level distribution + recent results */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        <Card className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold text-stone-900">{t('admin.byLevel')}</h2>
            <span className="text-xs text-stone-500">{t('admin.avgScore')}: <strong className="text-stone-900">{stats.avg === null ? '—' : `${stats.avg}%`}</strong></span>
          </div>
          <div className="space-y-3">
            {stats.byLevel.map((b) => (
              <div key={b.level} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs font-semibold">
                  <Badge variant={b.level as any} size="sm">{b.level.toUpperCase()}</Badge>
                  <span className="text-stone-700 tabular-nums">{b.count}</span>
                </div>
                <div className="h-2.5 rounded-full bg-stone-100 overflow-hidden">
                  <div
                    className={`h-full rounded-full ${b.level === 'hsk1' ? 'bg-emerald-500' : b.level === 'hsk2' ? 'bg-amber-500' : 'bg-[#C52828]'}`}
                    style={{ width: `${(b.count / maxLevel) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="lg:col-span-3 space-y-3">
          <h2 className="text-sm font-bold text-stone-900">{t('admin.recentTests')}</h2>
          {stats.recentTests.length === 0 ? (
            <p className="text-sm text-stone-500 py-6 text-center">{t('admin.noTests')}</p>
          ) : (
            <ul className="divide-y divide-stone-100">
              {stats.recentTests.map((x) => (
                <li key={x.student.user_id + x.id} className="py-2.5 flex items-center gap-3">
                  <span className={`w-2 h-2 rounded-full shrink-0 ${x.isPassed ? 'bg-emerald-500' : 'bg-amber-500'}`} />
                  <div className="min-w-0 flex-1">
                    <div className="text-sm font-semibold text-stone-900 truncate">{x.student.profile?.name || x.student.profile?.email}</div>
                    <div className="text-xs text-stone-500 truncate">{x.testTitle}</div>
                  </div>
                  <span className="text-sm font-bold tabular-nums text-stone-900 shrink-0">
                    {x.score}/{x.totalScore}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </Card>
      </div>

      {/* Students */}
      <div className="space-y-3">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          <h2 className="text-lg font-bold text-stone-950">
            {t('admin.students')} <span className="text-stone-400 font-semibold">({list.length})</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t('admin.searchPlaceholder')}
                className="w-full pl-9 pr-3 py-2 rounded-xl border border-[#E0D7CB] bg-white text-sm outline-none focus:border-stone-900 focus:ring-2 focus:ring-stone-900/10"
              />
            </div>
            <div className="flex gap-2">
              <div className="inline-flex p-1 bg-[#ECE4D8] rounded-xl border border-[#DFD5C6] shrink-0">
                {(['all', 'hsk1', 'hsk2', 'hsk3'] as const).map((l) => (
                  <button
                    key={l}
                    onClick={() => setLevel(l)}
                    className={`px-2.5 py-1 text-xs font-bold rounded-lg cursor-pointer transition-all ${
                      level === l ? 'bg-white text-stone-900 shadow-xs' : 'text-stone-600 hover:text-stone-900'
                    }`}
                  >
                    {l === 'all' ? t('admin.all') : l.toUpperCase()}
                  </button>
                ))}
              </div>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as SortKey)}
                className="flex-1 sm:flex-none px-2.5 py-1.5 rounded-xl border border-[#E0D7CB] bg-white text-xs font-semibold text-stone-700 outline-none cursor-pointer"
                aria-label={t('admin.sortBy')}
              >
                <option value="recent">{t('admin.sortRecent')}</option>
                <option value="newest">{t('admin.sortNewest')}</option>
                <option value="words">{t('admin.sortWords')}</option>
                <option value="score">{t('admin.sortScore')}</option>
              </select>
            </div>
          </div>
        </div>

        {loading ? (
          <Card className="text-center text-sm text-stone-500 py-10">{t('admin.loading')}</Card>
        ) : list.length === 0 ? (
          <Card className="text-center text-sm text-stone-500 py-10">{t('admin.empty')}</Card>
        ) : (
          <>
            {/* Desktop / tablet table */}
            <Card className="hidden md:block !p-0 overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-[#FAF8F5] text-[11px] uppercase tracking-wider text-stone-500">
                  <tr>
                    <th className="text-left font-bold px-5 py-3">{t('admin.colStudent')}</th>
                    <th className="text-left font-bold px-3 py-3">{t('admin.colLevel')}</th>
                    <th className="text-right font-bold px-3 py-3">{t('admin.colWords')}</th>
                    <th className="text-right font-bold px-3 py-3">{t('admin.colTests')}</th>
                    <th className="text-right font-bold px-3 py-3">{t('admin.colBest')}</th>
                    <th className="text-left font-bold px-3 py-3 hidden lg:table-cell">{t('admin.colLastActive')}</th>
                    <th className="text-center font-bold px-5 py-3">Pro</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {list.map((r) => {
                    const best = bestScore(r.test_history || []);
                    return (
                      <tr key={r.user_id} onClick={() => setSelected(r)} className="hover:bg-[#FFFDFB] cursor-pointer">
                        <td className="px-5 py-3">
                          <div className="flex items-center gap-3 min-w-0">
                            <span className="w-8 h-8 rounded-full bg-stone-900 text-white text-xs font-bold flex items-center justify-center shrink-0">
                              {(r.profile?.name || r.profile?.email || '?').charAt(0).toUpperCase()}
                            </span>
                            <div className="min-w-0">
                              <div className="font-semibold text-stone-900 truncate max-w-[220px]">{r.profile?.name || '—'}</div>
                              <div className="text-xs text-stone-500 truncate max-w-[220px]">{r.profile?.email}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-3 py-3">
                          <Badge variant={(r.profile?.currentHsk || 'hsk1') as any} size="sm">
                            {(r.profile?.currentHsk || 'hsk1').toUpperCase()}
                          </Badge>
                        </td>
                        <td className="px-3 py-3 text-right tabular-nums">{r.learned_ids?.length || 0}</td>
                        <td className="px-3 py-3 text-right tabular-nums">{r.test_history?.length || 0}</td>
                        <td className="px-3 py-3 text-right tabular-nums font-semibold">{best === null ? '—' : `${best}%`}</td>
                        <td className="px-3 py-3 text-stone-600 hidden lg:table-cell">{relative(r.updated_at)}</td>
                        <td className="px-5 py-3 text-center" onClick={(e) => e.stopPropagation()}>
                          <ProSwitch on={Boolean(r.is_pro)} busy={busyId === r.user_id} onToggle={() => togglePro(r)} />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </Card>

            {/* Mobile cards */}
            <div className="md:hidden space-y-2.5">
              {list.map((r) => {
                const best = bestScore(r.test_history || []);
                return (
                  <div
                    key={r.user_id}
                    onClick={() => setSelected(r)}
                    className="p-4 rounded-2xl bg-white border border-[#E8E2D8] shadow-2xs active:bg-[#FFFDFB] cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-9 h-9 rounded-full bg-stone-900 text-white text-sm font-bold flex items-center justify-center shrink-0">
                        {(r.profile?.name || r.profile?.email || '?').charAt(0).toUpperCase()}
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-1.5">
                          <span className="font-semibold text-stone-900 truncate">{r.profile?.name || '—'}</span>
                          {r.is_pro && <Crown className="w-3.5 h-3.5 text-amber-500 shrink-0" />}
                        </div>
                        <div className="text-xs text-stone-500 truncate">{r.profile?.email}</div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-stone-400 shrink-0" />
                    </div>
                    <div className="mt-3 grid grid-cols-4 gap-2 text-center">
                      <MiniStat label={t('admin.colLevel')} value={(r.profile?.currentHsk || 'hsk1').toUpperCase()} />
                      <MiniStat label={t('admin.colWords')} value={r.learned_ids?.length || 0} />
                      <MiniStat label={t('admin.colTests')} value={r.test_history?.length || 0} />
                      <MiniStat label={t('admin.colBest')} value={best === null ? '—' : `${best}%`} />
                    </div>
                    <div className="mt-2 text-[11px] text-stone-500">
                      {t('admin.colLastActive')}: {relative(r.updated_at)}
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>

      {/* Student detail drawer (bottom sheet on phone, side panel on desktop) */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-end md:items-stretch md:justify-end" role="dialog" aria-modal="true">
          <div className="absolute inset-0 bg-stone-950/40 backdrop-blur-[2px]" onClick={() => setSelected(null)} />
          <div className="relative w-full md:w-[440px] max-h-[88vh] md:max-h-none md:h-full bg-[#FAF8F5] rounded-t-3xl md:rounded-none md:rounded-l-3xl shadow-2xl overflow-y-auto">
            <div className="sticky top-0 bg-[#FAF8F5]/95 backdrop-blur px-5 pt-4 pb-3 border-b border-[#E8E2D8] flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-stone-900 text-white font-bold flex items-center justify-center shrink-0">
                {(selected.profile?.name || selected.profile?.email || '?').charAt(0).toUpperCase()}
              </span>
              <div className="min-w-0 flex-1">
                <div className="font-bold text-stone-950 truncate">{selected.profile?.name || '—'}</div>
                <div className="text-xs text-stone-500 truncate">{selected.profile?.email}</div>
              </div>
              <button onClick={() => setSelected(null)} className="p-2 rounded-xl hover:bg-[#EFE8DE] cursor-pointer" aria-label="Close">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-5 space-y-5" style={{ paddingBottom: 'calc(1.25rem + env(safe-area-inset-bottom))' }}>
              <div className="flex items-center justify-between p-4 rounded-2xl bg-white border border-[#E8E2D8]">
                <div>
                  <div className="text-sm font-bold text-stone-900 flex items-center gap-1.5">
                    <Crown className="w-4 h-4 text-amber-500" /> {t('admin.proAccess')}
                  </div>
                  <div className="text-xs text-stone-500">{t('admin.proAccessDesc')}</div>
                </div>
                <ProSwitch on={Boolean(selected.is_pro)} busy={busyId === selected.user_id} onToggle={() => togglePro(selected)} />
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                <DetailStat icon={BookOpen} label={t('admin.colWords')} value={selected.learned_ids?.length || 0} />
                <DetailStat icon={Flame} label={t('admin.streak')} value={`${selected.streak_days || 0} ${t('admin.daysShort')}`} />
                <DetailStat icon={FileCheck} label={t('admin.colTests')} value={selected.test_history?.length || 0} />
                <DetailStat
                  icon={Trophy}
                  label={t('admin.colBest')}
                  value={bestScore(selected.test_history || []) === null ? '—' : `${bestScore(selected.test_history || [])}%`}
                />
              </div>

              <dl className="rounded-2xl bg-white border border-[#E8E2D8] divide-y divide-stone-100 text-sm">
                <Row label={t('admin.colLevel')} value={(selected.profile?.currentHsk || 'hsk1').toUpperCase()} />
                <Row label={t('admin.dailyGoal')} value={`${selected.profile?.dailyGoalMinutes || 20} min`} />
                <Row label={t('admin.signedUp')} value={fmtDate(selected.created_at)} />
                <Row label={t('admin.colLastActive')} value={`${relative(selected.updated_at)} · ${fmtDate(selected.updated_at)}`} />
                <Row label={t('admin.favorites')} value={selected.favorite_ids?.length || 0} />
              </dl>

              <div className="space-y-2">
                <h3 className="text-sm font-bold text-stone-900">{t('admin.testHistory')}</h3>
                {(selected.test_history || []).length === 0 ? (
                  <p className="text-sm text-stone-500">{t('admin.noTests')}</p>
                ) : (
                  <ul className="space-y-2">
                    {(selected.test_history || []).map((x) => (
                      <li key={x.id} className="p-3 rounded-xl bg-white border border-[#E8E2D8] flex items-center gap-3">
                        <span className={`w-2 h-2 rounded-full shrink-0 ${x.isPassed ? 'bg-emerald-500' : 'bg-amber-500'}`} />
                        <div className="min-w-0 flex-1">
                          <div className="text-sm font-semibold text-stone-900 truncate">{x.testTitle}</div>
                          <div className="text-xs text-stone-500">
                            {x.date} · {Math.round(x.timeSpentSeconds / 60)} min
                          </div>
                        </div>
                        <span className="text-sm font-bold tabular-nums">{x.score}/{x.totalScore}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const ProSwitch: React.FC<{ on: boolean; busy: boolean; onToggle: () => void }> = ({ on, busy, onToggle }) => (
  <button
    type="button"
    role="switch"
    aria-checked={on}
    disabled={busy}
    onClick={onToggle}
    className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors cursor-pointer disabled:opacity-50 ${
      on ? 'bg-amber-500' : 'bg-stone-300'
    }`}
  >
    <span className={`inline-block h-5 w-5 rounded-full bg-white shadow transition-transform ${on ? 'translate-x-5' : 'translate-x-0.5'}`} />
  </button>
);

const MiniStat: React.FC<{ label: string; value: React.ReactNode }> = ({ label, value }) => (
  <div className="rounded-xl bg-[#FAF8F5] border border-[#EFE8DE] py-1.5 px-1 min-w-0">
    <div className="text-sm font-bold text-stone-900 tabular-nums truncate">{value}</div>
    <div className="text-[9.5px] uppercase tracking-wide text-stone-500 font-semibold truncate">{label}</div>
  </div>
);

const DetailStat: React.FC<{ icon: React.ComponentType<{ className?: string }>; label: string; value: React.ReactNode }> = ({
  icon: Icon,
  label,
  value,
}) => (
  <div className="p-3 rounded-2xl bg-white border border-[#E8E2D8]">
    <Icon className="w-4 h-4 text-stone-400" />
    <div className="mt-1 text-lg font-extrabold text-stone-950 tabular-nums">{value}</div>
    <div className="text-[11px] text-stone-500 font-semibold">{label}</div>
  </div>
);

const Row: React.FC<{ label: string; value: React.ReactNode }> = ({ label, value }) => (
  <div className="flex items-center justify-between gap-3 px-4 py-2.5">
    <dt className="text-stone-500">{label}</dt>
    <dd className="font-semibold text-stone-900 text-right">{value}</dd>
  </div>
);
