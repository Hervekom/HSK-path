import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  Search,
  RefreshCw,
  Volume2,
  Eye,
  EyeOff,
  BookOpen,
  Compass,
  Lightbulb,
  ExternalLink,
  Check,
  Copy,
  Calendar,
  Layers,
  ChevronDown,
  ChevronUp,
} from './icons';
import { useI18n } from '../locales';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';
import { Button } from './ui/Button';
import { SpeechButton } from './ui/SpeechButton';
import { CURATED_DAILY_CHINESE } from '../data/dailyChinese';
import type { DailyChineseItem } from '../types';

interface DailyChineseWidgetProps {
  userLevel?: 'hsk1' | 'hsk2' | 'hsk3';
  className?: string;
}

export const DailyChineseWidget: React.FC<DailyChineseWidgetProps> = ({
  userLevel = 'hsk2',
  className = '',
}) => {
  const { language, getLocalized } = useI18n();

  const [selectedLevel, setSelectedLevel] = useState<'all' | 'hsk1' | 'hsk2' | 'hsk3'>(userLevel);
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'culture' | 'news'>('all');
  const [dailyData, setDailyData] = useState<DailyChineseItem>(() => {
    // Try reading cached daily snippet from localStorage
    try {
      const cached = localStorage.getItem(`hsk_daily_chinese_${userLevel}`);
      if (cached) {
        return JSON.parse(cached);
      }
    } catch (e) {
      // ignore
    }
    const initialMatch = CURATED_DAILY_CHINESE.find((item) => item.level === userLevel) || CURATED_DAILY_CHINESE[0];
    return initialMatch;
  });

  const [isLoading, setIsLoading] = useState(false);
  const [showPinyin, setShowPinyin] = useState(true);
  const [showTranslation, setShowTranslation] = useState(true);
  const [isCopied, setIsCopied] = useState(false);
  const [isGroundedLive, setIsGroundedLive] = useState(true);

  // Fetch daily Chinese snippet with Google Search grounding from backend API
  const fetchDailySnippet = async (targetLvl = selectedLevel, targetCat = selectedCategory, forceRefresh = false) => {
    setIsLoading(true);
    try {
      const queryParams = new URLSearchParams({
        level: targetLvl,
        category: targetCat,
        language: language || 'en',
        refresh: forceRefresh ? 'true' : 'false',
      });

      const res = await fetch(`/api/daily-chinese?${queryParams.toString()}`);
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const json = await res.json();
      if (json.success && json.data) {
        setDailyData(json.data);
        setIsGroundedLive(!json.isFallback);
        try {
          localStorage.setItem(`hsk_daily_chinese_${targetLvl}`, JSON.stringify(json.data));
        } catch (e) {
          // ignore storage error
        }
      }
    } catch (err) {
      console.warn('Failed to fetch from /api/daily-chinese, using verified fallback data:', err);
      const filtered = CURATED_DAILY_CHINESE.filter((item) =>
        targetLvl === 'all' ? true : item.level === targetLvl
      );
      const fallback =
        filtered.length > 0
          ? filtered[Math.floor(Math.random() * filtered.length)]
          : CURATED_DAILY_CHINESE[0];
      setDailyData(fallback);
      setIsGroundedLive(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchDailySnippet(selectedLevel, selectedCategory, false);
  }, [selectedLevel, selectedCategory]);

  const handleCopyText = () => {
    const textToCopy = `${dailyData.title.hanzi} (${dailyData.title.pinyin})\n\n${dailyData.content.hanzi}\n${dailyData.content.pinyin}\n\n${getLocalized(dailyData.content.translation)}`;
    navigator.clipboard.writeText(textToCopy);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <Card variant="elevated" className={`p-6 sm:p-7 space-y-6 relative overflow-hidden ${className}`}>
      {/* Decorative gradient highlight on top edge */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#C52828]" />

      {/* Widget Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="p-1.5 rounded-lg bg-[#F4EFE8] text-stone-800 border border-[#E6DED2] flex items-center justify-center">
              <Compass className="w-4 h-4" />
            </span>
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-950 tracking-tight flex items-center gap-2">
              Chinese Language Daily
            </h2>
            <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50/90 text-blue-700 border border-blue-200/80 text-[11px] font-bold">
              <Search className="w-3 h-3 text-blue-500" />
              <span>Google Search Grounded</span>
            </div>
          </div>
          <p className="text-xs text-slate-500">
            Fresh authentic cultural stories, daily news, and idioms tailored for your HSK reading practice
          </p>
        </div>

        {/* Action Controls: Refresh & Level Filters */}
        <div className="flex items-center gap-2 self-start sm:self-auto">
          {/* Level Filter Pills */}
          <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200/70 text-xs font-bold">
            {(['all', 'hsk1', 'hsk2', 'hsk3'] as const).map((lvl) => (
              <button
                key={lvl}
                type="button"
                onClick={() => setSelectedLevel(lvl)}
                className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                  selectedLevel === lvl
                    ? 'bg-white text-slate-900 shadow-2xs font-bold'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                {lvl === 'all' ? 'All' : lvl.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Refresh Snippet Button */}
          <Button
            variant="outline"
            size="sm"
            onClick={() => fetchDailySnippet(selectedLevel, selectedCategory, true)}
            disabled={isLoading}
            className="text-xs shrink-0"
            icon={<RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin text-rose-600' : ''}`} />}
          >
            <span className="hidden sm:inline">New Fact</span>
          </Button>
        </div>
      </div>

      {/* Main Snippet Container */}
      <div className="p-5 sm:p-6 rounded-2xl bg-slate-50/90 border border-slate-200/90 space-y-5 transition-all">
        {/* Title, Level, Category & Date */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-200/70">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Badge variant={dailyData.level as any}>{dailyData.level.toUpperCase()}</Badge>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 px-2 py-0.5 rounded-md bg-white border border-slate-200">
                {dailyData.category === 'tradition'
                  ? 'Tradition & Heritage'
                  : dailyData.category === 'news'
                  ? 'Daily News'
                  : dailyData.category === 'lifestyle'
                  ? 'Modern Lifestyle'
                  : 'Cultural Fact'}
              </span>
              <span className="text-[11px] text-slate-400 font-mono hidden md:inline">
                {dailyData.date}
              </span>
            </div>
            <h3 className="font-hanzi font-bold text-xl sm:text-2xl text-slate-900 leading-snug">
              {dailyData.title.hanzi}
            </h3>
            {showPinyin && dailyData.title.pinyin && (
              <p className="text-xs font-semibold text-rose-800">
                {dailyData.title.pinyin}
              </p>
            )}
            <p className="text-xs font-medium text-slate-600">
              {getLocalized(dailyData.title.translation)}
            </p>
          </div>

          {/* Quick Toggle Controls */}
          <div className="flex items-center gap-1.5 self-end sm:self-start shrink-0">
            <button
              type="button"
              onClick={() => setShowPinyin(!showPinyin)}
              className={`p-2 rounded-xl border text-xs font-semibold flex items-center gap-1 cursor-pointer transition-colors ${
                showPinyin
                  ? 'bg-white border-slate-200 text-slate-800'
                  : 'bg-slate-100 border-transparent text-slate-400'
              }`}
              title={showPinyin ? 'Hide Pinyin' : 'Show Pinyin'}
            >
              {showPinyin ? <Eye className="w-3.5 h-3.5 text-rose-600" /> : <EyeOff className="w-3.5 h-3.5" />}
              <span className="text-[11px]">Pinyin</span>
            </button>

            <button
              type="button"
              onClick={() => setShowTranslation(!showTranslation)}
              className={`p-2 rounded-xl border text-xs font-semibold flex items-center gap-1 cursor-pointer transition-colors ${
                showTranslation
                  ? 'bg-white border-slate-200 text-slate-800'
                  : 'bg-slate-100 border-transparent text-slate-400'
              }`}
              title={showTranslation ? 'Hide Translation' : 'Show Translation'}
            >
              <BookOpen className="w-3.5 h-3.5 text-blue-600" />
              <span className="text-[11px]">Meaning</span>
            </button>

            <button
              type="button"
              onClick={handleCopyText}
              className="p-2 rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 cursor-pointer transition-colors"
              title="Copy Chinese text"
            >
              {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Chinese Content Passage */}
        <div className="space-y-3">
          <p className="font-hanzi font-normal text-lg sm:text-xl text-slate-900 leading-relaxed tracking-wide">
            {dailyData.content.hanzi}
          </p>

          {showPinyin && dailyData.content.pinyin && (
            <p className="text-xs sm:text-sm font-medium text-slate-600 leading-relaxed font-sans bg-white/70 p-3 rounded-xl border border-slate-200/60">
              {dailyData.content.pinyin}
            </p>
          )}

          {showTranslation && dailyData.content.translation && (
            <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-100/90 text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
              <span className="font-bold text-blue-900 block mb-0.5 text-xs">Translation:</span>
              {getLocalized(dailyData.content.translation)}
            </div>
          )}

          {/* Audio Playback Station */}
          <div className="pt-2 flex items-center justify-between">
            <SpeechButton
              text={dailyData.content.hanzi}
              size="md"
              showLabel
              label="Listen to Native Pronunciation"
              allowSpeedToggle
              className="bg-slate-900 text-white font-bold text-xs shadow-xs"
            />
            <span className="text-[11px] font-medium text-slate-400">
              Pacing: 1.0x / 0.8x (Slow)
            </span>
          </div>
        </div>

        {/* Key Vocabulary Chips */}
        {dailyData.vocabulary && dailyData.vocabulary.length > 0 && (
          <div className="space-y-2 pt-3 border-t border-slate-200/70">
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700 uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5 text-indigo-600" />
              <span>Key Vocabulary in this Snippet</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
              {dailyData.vocabulary.map((vocab, index) => (
                <div
                  key={index}
                  className="p-3 rounded-xl bg-white border border-slate-200/80 hover:border-slate-300 shadow-2xs space-y-1 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-hanzi font-bold text-base text-slate-950">
                      {vocab.hanzi}
                    </span>
                    <SpeechButton text={vocab.hanzi} size="sm" />
                  </div>
                  <div className="text-xs font-semibold text-rose-800">
                    {vocab.pinyin}
                  </div>
                  <div className="text-xs text-slate-600 truncate font-medium">
                    {getLocalized(vocab.meaning)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Cultural & Linguistic Insight Card */}
        {dailyData.culturalInsight && (
          <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200/80 space-y-1.5">
            <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900 uppercase tracking-wider">
              <Lightbulb className="w-4 h-4 text-amber-600 shrink-0" />
              <span>Cultural & Linguistic Insight</span>
            </div>
            <p className="text-xs text-amber-950 leading-relaxed font-medium">
              {getLocalized(dailyData.culturalInsight)}
            </p>
          </div>
        )}

        {/* Grounding Source Attribution Footer */}
        <div className="pt-2 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-500 border-t border-slate-200/60">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>
              {isGroundedLive ? 'Google Search Real-Time Query: ' : 'Verified Cultural Snippet: '}
              <strong className="text-slate-700">{dailyData.sourceTitle || dailyData.sourceQuery || 'Authentic Chinese News & Culture'}</strong>
            </span>
          </div>
          <span className="font-medium text-slate-400">
            Updated Daily · HSK Language Lab
          </span>
        </div>
      </div>
    </Card>
  );
};
