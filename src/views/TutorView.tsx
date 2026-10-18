import React, { useEffect, useMemo, useRef, useState } from 'react';
import { tr } from '../locales/tr';
import { useI18n } from '../locales';
import { supabase } from '../lib/supabase';
import { Button } from '../components/ui/Button';
import { Send, Settings, RotateCcw, Eye, EyeOff, X, Lightbulb, AlertCircle, ExternalLink, Info } from '../components/icons';
import type { AppState, UserProfile } from '../types';

type Level = 'hsk1' | 'hsk2' | 'hsk3';
type OwnProvider = 'groq' | 'gemini';

interface TutorReply {
  reply: string;
  translation: string;
  correction: { original: string; corrected: string; explanation: string } | null;
  tip: string | null;
}

interface ChatMessage {
  id: string;
  role: 'user' | 'laoshi';
  text: string; // user text, or Laoshi's Chinese reply
  history?: string; // compact Laoshi text sent back as context
  reply?: TutorReply;
  error?: string;
  local?: boolean; // greeting written by the app, not sent as history
}

interface TutorViewProps {
  user: UserProfile;
  isSignedIn: boolean;
  knownWords: string[];
  onNavigate: (view: AppState['currentView']) => void;
}

const CHAT_KEY = 'laoshi_chat_v1';
const OWN_KEY = 'laoshi_own_key_v1';
const MAX_CHARS = 300;

const GREETINGS: Record<Level, { zh: string; en: string; fr: string; zhTr: string }> = {
  hsk1: {
    zh: '你好！我是老师。你叫什么名字？',
    en: "Hello! I'm Laoshi. What's your name?",
    fr: "Bonjour ! Je suis Laoshi. Comment vous appelez-vous ?",
    zhTr: '你好！我是老师。你叫什么名字？',
  },
  hsk2: {
    zh: '你好！我是老师。你今天过得怎么样？',
    en: "Hello! I'm Laoshi. How has your day been?",
    fr: "Bonjour ! Je suis Laoshi. Comment s'est passée votre journée ?",
    zhTr: '你好！我是老师。今天过得好吗？',
  },
  hsk3: {
    zh: '你好！我是老师。最近你在忙什么？我们用中文聊聊吧。',
    en: "Hello! I'm Laoshi. What have you been busy with lately? Let's chat in Chinese.",
    fr: "Bonjour ! Je suis Laoshi. Qu'est-ce qui vous occupe en ce moment ? Discutons en chinois.",
    zhTr: '你好！我是老师。最近忙什么呢？我们用中文聊天吧。',
  },
};

const STARTERS: Array<{ label: string; message: string }> = [
  { label: 'Say hello', message: '你好，老师！' },
  { label: 'Give me an exercise', message: '老师，请给我一个练习。' },
  { label: 'Talk about my day', message: '老师，我想说说我的一天。' },
  { label: 'At the restaurant', message: '我们练习在饭馆点菜，好吗？' },
];

const KEY_LINKS: Record<OwnProvider, string> = {
  groq: 'https://console.groq.com/keys',
  gemini: 'https://aistudio.google.com/apikey',
};

function loadJson<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function saveJson(key: string, value: unknown) {
  try {
    if (value === null) localStorage.removeItem(key);
    else localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // storage unavailable: the chat still works for this visit
  }
}

function greeting(level: Level, language: string): ChatMessage {
  const g = GREETINGS[level];
  const translation = language === 'fr' ? g.fr : language === 'zh' ? g.zhTr : g.en;
  return {
    id: `greet-${level}`,
    role: 'laoshi',
    text: g.zh,
    local: true,
    reply: { reply: g.zh, translation, correction: null, tip: null },
  };
}

function errorText(code: string, data: Record<string, unknown> = {}): string {
  const fill = (s: string) => s.replace('{used}', String(data.used ?? '')).replace('{limit}', String(data.limit ?? ''));
  switch (code) {
    case 'quota_user':
      return fill(tr("You have used your {used}/{limit} free messages today. Come back tomorrow, or add your own free API key in Laoshi's settings."));
    case 'quota_global':
      return tr("Laoshi's free messages for today are all used on HSK Path. Come back tomorrow, or use your own free API key.");
    case 'provider_busy':
      return tr('Laoshi is very busy right now (free service limit). Wait a minute and try again.');
    case 'own_key_rate_limited':
      return tr('Your own API key has reached its free limit. Wait a moment or try again tomorrow.');
    case 'own_key_invalid':
    case 'own_key_rejected':
      return tr("Your API key was refused. Check it in Laoshi's settings.");
    case 'auth_required':
      return tr('Please sign in again to talk with Laoshi.');
    case 'not_configured':
      return tr('Laoshi is not available yet: no AI key is configured on the server.');
    case 'timeout':
      return tr('Laoshi took too long to answer. Please try again.');
    case 'quota_unavailable':
      return tr("Laoshi cannot check today's message allowance right now. Please try again later.");
    case 'message_too_long':
      return tr('Your message is too long (300 characters max).');
    case 'network':
      return tr('Network error. Check your connection and try again.');
    default:
      return tr('Something went wrong. Please try again.');
  }
}

const PUNCTUATION: Record<string, string> = { '。': '.', '！': '!', '？': '?', '，': ',', '、': ',', '；': ';', '：': ':', '…': '…', '（': '(', '）': ')', '“': '"', '”': '"' };

/** "hěn hǎo ！ nǐ" → "hěn hǎo! nǐ" */
function tidyPinyin(text: string): string {
  return text
    .replace(/\s*([。！？，、；：…）”])\s*/g, (_, p) => `${PUNCTUATION[p] || p} `)
    .replace(/\s*([（“])\s*/g, (_, p) => ` ${PUNCTUATION[p] || p}`)
    .replace(/\s+([.!?,;:])/g, '$1')
    .replace(/\s{2,}/g, ' ')
    .trim();
}

/** Pinyin is generated in the browser (more reliable than asking the model). */
function usePinyin() {
  const [fn, setFn] = useState<((text: string) => string) | null>(null);
  useEffect(() => {
    let alive = true;
    import('pinyin-pro')
      .then((mod) => {
        if (alive) setFn(() => (text: string) => tidyPinyin(mod.pinyin(text, { toneType: 'symbol', nonZh: 'consecutive' })));
      })
      .catch(() => {
        // pinyin stays hidden if the library cannot load
      });
    return () => {
      alive = false;
    };
  }, []);
  return fn;
}

const ChineseLine: React.FC<{ text: string; pinyin: ((t: string) => string) | null; showPinyin: boolean; big?: boolean }> = ({
  text,
  pinyin,
  showPinyin,
  big,
}) => (
  <div>
    <p className={`font-hanzi text-stone-900 leading-relaxed break-words ${big ? 'text-lg sm:text-xl' : 'text-base'}`} lang="zh-CN">
      {text}
    </p>
    {showPinyin && pinyin && <p className="text-[13px] text-[#9A3412] leading-snug mt-0.5 break-words">{pinyin(text)}</p>}
  </div>
);

export const TutorView: React.FC<TutorViewProps> = ({ user, isSignedIn, knownWords, onNavigate }) => {
  const { language } = useI18n();
  const pinyin = usePinyin();

  // A saved conversation keeps its own level; otherwise start at the student's HSK level.
  const [saved] = useState(() => loadJson<{ level: Level; messages: ChatMessage[] } | null>(CHAT_KEY, null));
  const [level, setLevel] = useState<Level>(() =>
    saved?.messages?.length && saved.level ? saved.level : user.currentHsk || 'hsk1'
  );
  const [messages, setMessages] = useState<ChatMessage[]>(() =>
    saved?.messages?.length ? saved.messages : [greeting(user.currentHsk || 'hsk1', language)]
  );
  const [input, setInput] = useState('');
  const [sending, setSending] = useState(false);
  const [showPinyin, setShowPinyin] = useState(true);
  const [showTranslation, setShowTranslation] = useState(true);
  const [quota, setQuota] = useState<{ used: number; limit: number } | null>(null);
  const [ownKey, setOwnKey] = useState<{ provider: OwnProvider; key: string } | null>(() => loadJson(OWN_KEY, null));
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [draftProvider, setDraftProvider] = useState<OwnProvider>(ownKey?.provider || 'groq');
  const [draftKey, setDraftKey] = useState('');
  const [keyNotice, setKeyNotice] = useState<string | null>(null);

  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    saveJson(CHAT_KEY, { level, messages: messages.slice(-40) });
  }, [level, messages]);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, sending]);

  // Today's allowance on the shared key.
  useEffect(() => {
    if (!supabase || !isSignedIn) return;
    supabase.rpc('tutor_quota_status').then(({ data }) => {
      const q = data as { used?: number; limit?: number } | null;
      if (q && typeof q.used === 'number' && typeof q.limit === 'number') setQuota({ used: q.used, limit: q.limit });
    });
  }, [isSignedIn]);

  const startNew = (nextLevel: Level = level) => {
    setMessages([greeting(nextLevel, language)]);
    setInput('');
  };

  const changeLevel = (next: Level) => {
    if (next === level) return;
    setLevel(next);
    startNew(next);
  };

  const history = useMemo(
    () =>
      messages
        .filter((m) => !m.local && !m.error)
        .map((m) => ({ role: m.role === 'user' ? 'user' : 'assistant', content: m.role === 'user' ? m.text : m.history || m.text })),
    [messages]
  );

  const send = async (text: string) => {
    const message = text.trim().slice(0, MAX_CHARS);
    if (!message || sending || !isSignedIn || !supabase) return;
    const userMsg: ChatMessage = { id: `u-${Date.now()}`, role: 'user', text: message };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setSending(true);

    try {
      const { data: sessionData } = await supabase.auth.getSession();
      const token = sessionData.session?.access_token;
      if (!token) throw Object.assign(new Error('auth'), { code: 'auth_required' });

      const headers: Record<string, string> = { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` };
      if (ownKey?.key) {
        headers['X-Laoshi-Key'] = ownKey.key;
        headers['X-Laoshi-Provider'] = ownKey.provider;
      }
      let res: Response;
      try {
        res = await fetch('/api/tutor', {
          method: 'POST',
          headers,
          body: JSON.stringify({ message, history, level, language, knownWords }),
        });
      } catch {
        throw Object.assign(new Error('network'), { code: 'network' });
      }
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data?.ok) throw Object.assign(new Error('api'), { code: data?.error || 'unknown', data });

      if (data.quota) setQuota(data.quota);
      setMessages((prev) => [
        ...prev,
        {
          id: `l-${Date.now()}`,
          role: 'laoshi',
          text: data.reply,
          history: data.history,
          reply: { reply: data.reply, translation: data.translation, correction: data.correction, tip: data.tip },
        },
      ]);
    } catch (err: any) {
      if (err?.code === 'quota_user' && err?.data) setQuota({ used: err.data.used, limit: err.data.limit });
      setMessages((prev) => [
        ...prev,
        { id: `e-${Date.now()}`, role: 'laoshi', text: '', error: errorText(err?.code || 'unknown', err?.data || {}) },
      ]);
    } finally {
      setSending(false);
      inputRef.current?.focus();
    }
  };

  const saveOwnKey = () => {
    const key = draftKey.trim();
    if (!/^[\w.-]{20,200}$/.test(key)) {
      setKeyNotice(tr('This key does not look valid.'));
      return;
    }
    const value = { provider: draftProvider, key };
    setOwnKey(value);
    saveJson(OWN_KEY, value);
    setDraftKey('');
    setKeyNotice(tr('Key saved'));
  };

  const removeOwnKey = () => {
    setOwnKey(null);
    saveJson(OWN_KEY, null);
    setKeyNotice(tr('Key removed'));
  };

  const onlyGreeting = messages.length === 1 && messages[0].local;

  return (
    <div className="flex flex-col h-[calc(100dvh-10.5rem)] sm:h-[calc(100dvh-11.5rem)] lg:h-[calc(100dvh-8rem)] min-h-[440px] animate-in fade-in duration-150">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-11 h-11 shrink-0 rounded-xl bg-[#1C1917] border border-stone-800 flex items-center justify-center relative overflow-hidden">
            <span className="font-hanzi-serif font-bold text-xl text-[#FAF8F5]">师</span>
            <div className="absolute inset-x-0 bottom-0 h-0.5 bg-[#C52828]" />
          </div>
          <div className="min-w-0">
            <h1 className="text-lg sm:text-xl font-extrabold text-stone-950 tracking-tight leading-tight">
              {tr('Laoshi')} <span className="font-hanzi-serif text-[#C52828]">老师</span>
            </h1>
            <p className="text-xs text-stone-500 truncate">
              {ownKey ? tr('Using your own API key') : quota ? tr('{used}/{limit} free messages today').replace('{used}', String(quota.used)).replace('{limit}', String(quota.limit)) : tr('Your AI Chinese teacher')}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          <div className="flex rounded-xl border border-[#E6DFD3] bg-white p-0.5" role="group" aria-label={tr('Level')}>
            {(['hsk1', 'hsk2', 'hsk3'] as Level[]).map((l) => (
              <button
                key={l}
                onClick={() => changeLevel(l)}
                className={`px-2.5 py-1 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                  level === l ? 'bg-[#1C1917] text-white' : 'text-stone-600 hover:text-stone-900'
                }`}
                aria-pressed={level === l}
              >
                {l.toUpperCase().replace('HSK', 'HSK ')}
              </button>
            ))}
          </div>
          <button
            onClick={() => setShowPinyin((v) => !v)}
            className={`h-9 px-2.5 rounded-xl border text-xs font-bold cursor-pointer transition-colors ${
              showPinyin ? 'border-[#E6DFD3] bg-white text-[#9A3412]' : 'border-[#E6DFD3] bg-white text-stone-400'
            }`}
            title={showPinyin ? tr('Hide Pinyin') : tr('Show Pinyin')}
            aria-label={showPinyin ? tr('Hide Pinyin') : tr('Show Pinyin')}
          >
            pīn
          </button>
          <button
            onClick={() => setShowTranslation((v) => !v)}
            className="h-9 w-9 flex items-center justify-center rounded-xl border border-[#E6DFD3] bg-white text-stone-600 hover:text-stone-900 cursor-pointer"
            title={showTranslation ? tr('Hide Translation') : tr('Show Translation')}
            aria-label={showTranslation ? tr('Hide Translation') : tr('Show Translation')}
          >
            {showTranslation ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
          </button>
          <button
            onClick={() => startNew()}
            className="h-9 w-9 flex items-center justify-center rounded-xl border border-[#E6DFD3] bg-white text-stone-600 hover:text-stone-900 cursor-pointer"
            title={tr('New conversation')}
            aria-label={tr('New conversation')}
          >
            <RotateCcw className="w-4 h-4" />
          </button>
          <button
            onClick={() => {
              setSettingsOpen(true);
              setKeyNotice(null);
            }}
            className={`h-9 w-9 flex items-center justify-center rounded-xl border bg-white cursor-pointer ${
              ownKey ? 'border-[#0F766E] text-[#0F766E]' : 'border-[#E6DFD3] text-stone-600 hover:text-stone-900'
            }`}
            title={tr('Settings')}
            aria-label={tr('Settings')}
          >
            <Settings className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Conversation */}
      <div className="flex-1 min-h-0 flex flex-col rounded-2xl border border-[#E6DFD3] bg-white overflow-hidden">
        <div ref={listRef} className="flex-1 min-h-0 overflow-y-auto px-3 sm:px-5 py-4 space-y-4" aria-live="polite">
          {messages.map((m) =>
            m.role === 'user' ? (
              <div key={m.id} className="flex justify-end">
                <div className="max-w-[85%] sm:max-w-[70%] rounded-2xl rounded-br-md bg-[#1C1917] text-[#FAF8F5] px-4 py-2.5">
                  <p className="font-hanzi text-base leading-relaxed break-words whitespace-pre-wrap" lang="zh-CN">
                    {m.text}
                  </p>
                </div>
              </div>
            ) : m.error ? (
              <div key={m.id} className="flex">
                <div className="max-w-[90%] sm:max-w-[75%] flex gap-2 rounded-2xl rounded-bl-md border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
                  <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>{m.error}</span>
                </div>
              </div>
            ) : (
              <div key={m.id} className="flex gap-2.5">
                <div className="w-8 h-8 shrink-0 rounded-lg bg-[#1C1917] flex items-center justify-center mt-0.5">
                  <span className="font-hanzi-serif font-bold text-sm text-[#FAF8F5]">师</span>
                </div>
                <div className="max-w-[88%] sm:max-w-[75%] space-y-2 min-w-0">
                  {m.reply?.correction && (
                    <div className="rounded-xl border border-[#F2D3CC] bg-[#FDF3F1] px-3.5 py-2.5 space-y-1.5">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-[#C52828]">{tr('Correction')}</p>
                      {m.reply.correction.original && (
                        <p className="text-sm text-stone-500">
                          <span className="font-semibold">{tr('You wrote:')} </span>
                          <span className="font-hanzi line-through decoration-[#C52828]/60" lang="zh-CN">
                            {m.reply.correction.original}
                          </span>
                        </p>
                      )}
                      <div className="flex gap-1.5 items-start">
                        <span className="text-sm font-semibold text-[#0F766E] shrink-0">{tr('Better:')}</span>
                        <ChineseLine text={m.reply.correction.corrected} pinyin={pinyin} showPinyin={showPinyin} />
                      </div>
                      {m.reply.correction.explanation && <p className="text-sm text-stone-700 leading-relaxed">{m.reply.correction.explanation}</p>}
                    </div>
                  )}
                  <div className="rounded-2xl rounded-tl-md bg-[#FAF8F5] border border-[#EFE9DF] px-4 py-3 space-y-1.5">
                    <ChineseLine text={m.text} pinyin={pinyin} showPinyin={showPinyin} big />
                    {showTranslation && m.reply?.translation && (
                      <p className="text-sm text-stone-500 leading-relaxed border-t border-[#EFE9DF] pt-1.5">{m.reply.translation}</p>
                    )}
                  </div>
                  {m.reply?.tip && (
                    <div className="flex gap-2 rounded-xl bg-[#F0F7F6] border border-[#CFE5E2] px-3.5 py-2 text-sm text-[#134E4A]">
                      <Lightbulb className="w-4 h-4 mt-0.5 shrink-0" />
                      <span className="leading-relaxed">{m.reply.tip}</span>
                    </div>
                  )}
                </div>
              </div>
            )
          )}

          {sending && (
            <div className="flex gap-2.5 items-center text-sm text-stone-500">
              <div className="w-8 h-8 shrink-0 rounded-lg bg-[#1C1917] flex items-center justify-center">
                <span className="font-hanzi-serif font-bold text-sm text-[#FAF8F5]">师</span>
              </div>
              <span className="inline-flex gap-1" aria-label={tr('Laoshi is writing…')}>
                <span className="w-1.5 h-1.5 rounded-full bg-stone-400 animate-bounce [animation-delay:-0.3s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-stone-400 animate-bounce [animation-delay:-0.15s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-stone-400 animate-bounce" />
              </span>
            </div>
          )}

          {!isSignedIn && (
            <div className="rounded-2xl border border-[#E6DFD3] bg-[#FAF8F5] p-4 text-sm text-stone-700 space-y-3">
              <p>{tr('Sign in to talk with Laoshi. Your conversations need an account so we can protect the free service.')}</p>
              <Button size="sm" onClick={() => onNavigate('login')}>
                {tr('Sign in')}
              </Button>
            </div>
          )}
        </div>

        {/* Starters */}
        {onlyGreeting && isSignedIn && (
          <div className="px-3 sm:px-5 pb-2 flex gap-2 overflow-x-auto">
            {STARTERS.map((s) => (
              <button
                key={s.label}
                onClick={() => send(s.message)}
                disabled={sending}
                className="shrink-0 px-3 py-1.5 rounded-full border border-[#E6DFD3] bg-[#FAF8F5] text-xs font-semibold text-stone-700 hover:border-[#C52828] hover:text-[#C52828] cursor-pointer transition-colors"
              >
                {tr(s.label)}
              </button>
            ))}
          </div>
        )}

        {/* Composer */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            send(input);
          }}
          className="border-t border-[#EFE9DF] p-2.5 sm:p-3 flex items-end gap-2"
        >
          <div className="flex-1 min-w-0">
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value.slice(0, MAX_CHARS))}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey && !e.nativeEvent.isComposing) {
                  e.preventDefault();
                  send(input);
                }
              }}
              rows={1}
              placeholder={tr('Write in Chinese…')}
              disabled={!isSignedIn}
              lang="zh-CN"
              className="w-full resize-none max-h-32 min-h-[44px] rounded-xl border border-[#E6DFD3] bg-[#FAF8F5] px-3.5 py-2.5 text-base font-hanzi text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#C52828]/30 focus:border-[#C52828] disabled:opacity-50"
            />
            {input.length > MAX_CHARS - 50 && (
              <p className="text-[11px] text-stone-400 text-right pr-1">
                {input.length}/{MAX_CHARS}
              </p>
            )}
          </div>
          <Button
            type="submit"
            disabled={!input.trim() || sending || !isSignedIn}
            className="h-11 shrink-0"
            icon={<Send className="w-4 h-4" weight="fill" />}
            aria-label={tr('Send')}
          >
            <span className="hidden sm:inline">{tr('Send')}</span>
          </Button>
        </form>
      </div>

      <p className="pt-2 text-[11px] text-stone-400 text-center leading-snug">
        {tr('Laoshi is an AI: he can make mistakes. Conversations stay in this browser and are not saved by HSK Path.')}
      </p>

      {/* Own key settings */}
      {settingsOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-stone-950/40 p-0 sm:p-4" onClick={() => setSettingsOpen(false)}>
          <div
            className="w-full sm:max-w-lg max-h-[90dvh] overflow-y-auto rounded-t-3xl sm:rounded-3xl bg-white p-5 sm:p-6 space-y-4 shadow-xl"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={tr('Your own API key (optional)')}
          >
            <div className="flex items-start justify-between gap-3">
              <h2 className="text-lg font-extrabold text-stone-950">{tr('Your own API key (optional)')}</h2>
              <button onClick={() => setSettingsOpen(false)} className="p-1 text-stone-500 hover:text-stone-900 cursor-pointer" aria-label={tr('Close')}>
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-sm text-stone-600 leading-relaxed">
              {tr('Laoshi gives every student a few free messages a day. For more, create a free key with Groq or Google AI Studio (no bank card needed) and paste it here. Your messages then use your own free quota.')}
            </p>

            {ownKey && (
              <div className="flex items-center justify-between gap-3 rounded-xl border border-[#CFE5E2] bg-[#F0F7F6] px-3.5 py-2.5 text-sm text-[#134E4A]">
                <span className="truncate">
                  {ownKey.provider === 'groq' ? 'Groq' : 'Google Gemini'} · ••••{ownKey.key.slice(-4)}
                </span>
                <button onClick={removeOwnKey} className="text-xs font-bold text-[#C52828] hover:underline cursor-pointer shrink-0">
                  {tr('Remove key')}
                </button>
              </div>
            )}

            <div className="space-y-1.5">
              <p className="text-xs font-bold uppercase tracking-wider text-stone-500">{tr('Provider')}</p>
              <div className="grid grid-cols-2 gap-2">
                {(['groq', 'gemini'] as OwnProvider[]).map((p) => (
                  <button
                    key={p}
                    onClick={() => setDraftProvider(p)}
                    className={`rounded-xl border px-3 py-2 text-sm font-semibold cursor-pointer ${
                      draftProvider === p ? 'border-[#1C1917] bg-[#1C1917] text-white' : 'border-[#E6DFD3] text-stone-700'
                    }`}
                  >
                    {p === 'groq' ? 'Groq' : 'Google Gemini'}
                  </button>
                ))}
              </div>
              <a
                href={KEY_LINKS[draftProvider]}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-[#C52828] hover:underline"
              >
                {tr('Get a free key')} <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="laoshi-key" className="text-xs font-bold uppercase tracking-wider text-stone-500">
                {tr('API key')}
              </label>
              <input
                id="laoshi-key"
                type="password"
                autoComplete="off"
                spellCheck={false}
                value={draftKey}
                onChange={(e) => {
                  setDraftKey(e.target.value);
                  setKeyNotice(null);
                }}
                placeholder={tr('Paste your key')}
                className="w-full rounded-xl border border-[#E6DFD3] bg-[#FAF8F5] px-3.5 py-2.5 text-sm font-mono placeholder:font-sans focus:outline-none focus:ring-2 focus:ring-[#C52828]/30 focus:border-[#C52828]"
              />
              {keyNotice && <p className="text-xs text-stone-600">{keyNotice}</p>}
            </div>

            <Button onClick={saveOwnKey} disabled={!draftKey.trim()} className="w-full">
              {tr('Save key')}
            </Button>

            <div className="space-y-2 text-xs text-stone-500 leading-relaxed">
              <p className="flex gap-2">
                <Info className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                <span>{tr("Your key is kept only in this browser. It is sent securely with each message to reach the AI provider and is never stored or logged by HSK Path. Usage follows the provider's own terms.")}</span>
              </p>
              <p className="flex gap-2">
                <Info className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                <span>{tr('In mainland China, creating a Groq or Google account usually needs a VPN. Once the key is saved, Laoshi works without one.')}</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
