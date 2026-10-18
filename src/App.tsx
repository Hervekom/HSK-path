import React, { useCallback, useEffect, useRef, useState } from 'react';
import { tr } from './locales/tr';
import { LanguageProvider, useI18n } from './locales';
import { ToastProvider, useToast } from './components/ui/Toast';
import { AppLayout } from './components/layout/AppLayout';

// Views
import { LandingView } from './views/LandingView';
import { LoginView } from './views/LoginView';
import { SignUpView } from './views/SignUpView';
import { DashboardView } from './views/DashboardView';
import { HskLevelsView } from './views/HskLevelsView';
import { HskLevelDetailView } from './views/HskLevelDetailView';
import { LearnHubView } from './views/LearnHubView';
import { VocabularyListView } from './views/VocabularyListView';
import { PracticeHubView } from './views/PracticeHubView';
import { QuizView } from './views/QuizView';
import { ListeningPracticeView } from './views/ListeningPracticeView';
import { ReadingPracticeView } from './views/ReadingPracticeView';
import { WritingPracticeView } from './views/WritingPracticeView';
import { MockTestsListView } from './views/MockTestsListView';
import { MockTestIntroView } from './views/MockTestIntroView';
import { MockTestExamView } from './views/MockTestExamView';
import { TestResultsView } from './views/TestResultsView';
import { ReviewMistakesView } from './views/ReviewMistakesView';
import { ProgressAnalyticsView } from './views/ProgressAnalyticsView';
import { ProfileSettingsView } from './views/ProfileSettingsView';
import { AdminView } from './views/AdminView';
import { PhrasesView } from './views/PhrasesView';

// Data & Types
import { VOCABULARY_DATA } from './data/vocabulary';
import { HSK2_QUIZ_QUESTIONS, VOCAB_QUIZ_QUESTIONS, GRAMMAR_QUIZ_QUESTIONS } from './data/exercises';
import { MOCK_TESTS_CATALOG, INITIAL_TEST_RESULTS } from './data/mockTests';
import { INITIAL_USER_PROFILE } from './data/progressData';
import { supabase } from './lib/supabase';
import { loadProgress, saveProgress, computeStreak, fetchIsAdmin } from './lib/progressStore';
import { SRS_STORAGE_KEY } from './utils/srs';
import type { User } from '@supabase/supabase-js';
import type { AppState, UserProfile, VocabularyWord, MockTest, TestResult, SkillType, QuizQuestion } from './types';

const ALL_VIEWS: AppState['currentView'][] = [
  'landing', 'login', 'signup', 'dashboard', 'hsk-levels', 'hsk-detail', 'learn', 'vocabulary',
  'practice-hub', 'quiz', 'listening-practice', 'reading-practice', 'writing-practice', 'mock-tests',
  'mock-test-intro', 'mock-test-exam', 'test-results', 'review-mistakes', 'progress', 'profile', 'admin', 'phrases',
];
const PUBLIC_VIEWS: AppState['currentView'][] = ['landing', 'login', 'signup', 'hsk-levels', 'hsk-detail'];

function viewFromHash(): AppState['currentView'] | null {
  const h = window.location.hash.replace(/^#\/?/, '');
  return (ALL_VIEWS as string[]).includes(h) ? (h as AppState['currentView']) : null;
}

function HskPathApp() {
  const { t } = useI18n();
  const { addToast } = useToast();

  // Navigation & User State
  const [currentView, setCurrentView] = useState<AppState['currentView']>(() => viewFromHash() || 'landing');
  const [isDemo, setIsDemo] = useState<boolean>(() => {
    try {
      return sessionStorage.getItem('hsk_demo') === '1';
    } catch {
      return false;
    }
  });
  const [user, setUser] = useState<UserProfile>(INITIAL_USER_PROFILE);
  const [streakDays, setStreakDays] = useState(7);
  const [weeklyMinutes, setWeeklyMinutes] = useState(222); // 3h 42m

  // Selected Level for Detail View
  const [selectedLevel, setSelectedLevel] = useState<'hsk1' | 'hsk2' | 'hsk3'>('hsk2');

  // Vocabulary Data State (with in-memory learned / favorite toggle)
  const [vocabList, setVocabList] = useState<VocabularyWord[]>(VOCABULARY_DATA);
  // Everyday phrases marked as known (stored in learnedIds with a "phrase:" prefix)
  const [learnedPhraseIds, setLearnedPhraseIds] = useState<Set<string>>(new Set());
  const handleTogglePhrase = (key: string) => {
    setLearnedPhraseIds((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  // Mock Test State
  const [activeTest, setActiveTest] = useState<MockTest>(MOCK_TESTS_CATALOG[1]); // Default HSK 2 Mock Test A
  const [testHistory, setTestHistory] = useState<TestResult[]>(INITIAL_TEST_RESULTS);
  const [latestResult, setLatestResult] = useState<TestResult | null>(INITIAL_TEST_RESULTS[0]);

  // Active Quiz State
  const [activeQuizTitle, setActiveQuizTitle] = useState('Daily Adaptive Drill');
  const [activeQuizQuestions, setActiveQuizQuestions] = useState<QuizQuestion[]>(HSK2_QUIZ_QUESTIONS);

  // Handlers for Vocabulary
  const handleToggleLearned = (id: string) => {
    setVocabList((prev) =>
      prev.map((w) => {
        if (w.id === id) {
          const next = !w.isLearned;
          addToast(next ? `Marked "${w.hanzi}" as learned!` : `Unmarked "${w.hanzi}"`, 'success');
          return { ...w, isLearned: next };
        }
        return w;
      })
    );
  };

  const handleToggleFavorite = (id: string) => {
    setVocabList((prev) =>
      prev.map((w) => {
        if (w.id === id) {
          const next = !w.isFavorite;
          addToast(next ? `Added "${w.hanzi}" to favorites` : `Removed "${w.hanzi}" from favorites`, 'info');
          return { ...w, isFavorite: next };
        }
        return w;
      })
    );
  };

  // ---------- Authentication & cloud persistence (Supabase) ----------
  const [authUserId, setAuthUserId] = useState<string | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const [authChecked, setAuthChecked] = useState(!supabase);
  const lastActiveRef = useRef<string | null>(null);
  const [srsTick, setSrsTick] = useState(0);

  const resetToDemoData = () => {
    setUser(INITIAL_USER_PROFILE);
    setStreakDays(7);
    setWeeklyMinutes(222);
    setVocabList(VOCABULARY_DATA);
    setLearnedPhraseIds(new Set());
    setTestHistory(INITIAL_TEST_RESULTS);
    setLatestResult(INITIAL_TEST_RESULTS[0]);
  };

  const hydrateFromCloud = useCallback(async (authUser: User) => {
    setHydrated(false);
    const stored = await loadProgress(authUser.id);
    const meta = (authUser.user_metadata || {}) as Record<string, any>;
    const baseProfile: UserProfile = {
      ...INITIAL_USER_PROFILE,
      name: meta.name || authUser.email?.split('@')[0] || tr("Student"),
      email: authUser.email || '',
      currentHsk: meta.currentHsk || 'hsk1',
      dailyGoalMinutes: meta.dailyGoalMinutes || 20,
      studyGoal: '',
      isProUser: false,
    };
    const profile: UserProfile = {
      ...baseProfile,
      ...(stored?.profile || {}),
      email: authUser.email || '',
      isProUser: Boolean(stored?.isPro),
    };
    fetchIsAdmin().then(setIsAdmin);
    const learned = new Set(stored?.learnedIds || []);
    const favs = new Set(stored?.favoriteIds || []);
    const { streak, today } = computeStreak(stored?.streakDays ?? 0, stored?.lastActiveDate ?? null);
    lastActiveRef.current = today;

    try {
      if (stored?.srs && Object.keys(stored.srs).length > 0) {
        localStorage.setItem(SRS_STORAGE_KEY, JSON.stringify(stored.srs));
      } else {
        localStorage.removeItem(SRS_STORAGE_KEY);
      }
    } catch {
      // ignore
    }

    setUser(profile);
    setVocabList(VOCABULARY_DATA.map((w) => ({ ...w, isLearned: learned.has(w.id), isFavorite: favs.has(w.id) })));
    setLearnedPhraseIds(new Set([...learned].filter((id) => id.startsWith('phrase:'))));
    setTestHistory(stored?.testHistory || []);
    setLatestResult(stored?.testHistory?.[0] || null);
    setStreakDays(streak);
    setWeeklyMinutes(stored?.weeklyMinutes ?? 0);
    setAuthUserId(authUser.id);
    setHydrated(true);
  }, []);

  // Restore session on load + react to auth events
  useEffect(() => {
    if (!supabase) return;
    let cancelled = false;
    supabase.auth.getSession().then(async ({ data }) => {
      if (cancelled) return;
      if (data.session?.user) {
        await hydrateFromCloud(data.session.user);
        setCurrentView((v) => (v === 'landing' || v === 'login' || v === 'signup' ? 'dashboard' : v));
      }
      setAuthChecked(true);
    });
    const { data: sub } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === 'PASSWORD_RECOVERY') {
        const pwd = window.prompt(t('auth.newPassword'));
        if (pwd && pwd.length >= 6) {
          const { error } = await supabase!.auth.updateUser({ password: pwd });
          addToast(error ? error.message : t('auth.passwordUpdated'), error ? 'warning' : 'success');
        }
      }
      if (event === 'SIGNED_OUT') {
        setIsAdmin(false);
        setAuthUserId(null);
        setHydrated(false);
      }
      if (event === 'SIGNED_IN' && session?.user && !cancelled) {
        // handled by explicit login flow / getSession; covers email-confirmation redirects
        setAuthUserId((current) => {
          if (current !== session.user.id) {
            hydrateFromCloud(session.user).then(() =>
              setCurrentView((v) => (v === 'landing' || v === 'login' || v === 'signup' ? 'dashboard' : v))
            );
          }
          return current;
        });
      }
    });
    return () => {
      cancelled = true;
      sub.subscription.unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hydrateFromCloud]);

  // SRS state lives in localStorage; get notified when it changes
  useEffect(() => {
    const onSrs = () => setSrsTick((n) => n + 1);
    window.addEventListener('hsk-srs-changed', onSrs);
    return () => window.removeEventListener('hsk-srs-changed', onSrs);
  }, []);

  // Debounced autosave of the signed-in user's progress
  useEffect(() => {
    if (!authUserId || !hydrated) return;
    const handle = window.setTimeout(() => {
      let srs: Record<string, unknown> | null = null;
      try {
        const raw = localStorage.getItem(SRS_STORAGE_KEY);
        srs = raw ? JSON.parse(raw) : null;
      } catch {
        srs = null;
      }
      saveProgress(authUserId, {
        profile: user,
        learnedIds: [...vocabList.filter((w) => w.isLearned).map((w) => w.id), ...learnedPhraseIds],
        favoriteIds: vocabList.filter((w) => w.isFavorite).map((w) => w.id),
        testHistory,
        streakDays,
        weeklyMinutes,
        lastActiveDate: lastActiveRef.current,
        srs,
      });
    }, 800);
    return () => window.clearTimeout(handle);
  }, [authUserId, hydrated, user, vocabList, learnedPhraseIds, testHistory, streakDays, weeklyMinutes, srsTick]);

  // Handlers for Authentication
  const handleLoginSuccess = async () => {
    if (supabase) {
      const { data } = await supabase.auth.getUser();
      if (data.user) await hydrateFromCloud(data.user);
    }
    setCurrentView('dashboard');
    addToast(tr("Welcome back! Ready for today's study session."), 'success');
  };

  const handleDemoLogin = () => {
    setIsDemo(true);
    try {
      sessionStorage.setItem('hsk_demo', '1');
    } catch {
      // ignore
    }
    setAuthUserId(null);
    setHydrated(false);
    resetToDemoData();
    setCurrentView('dashboard');
    addToast(tr("Demo mode — progress is not saved."), 'info');
  };

  const handleSignUpSuccess = async (profileData: Partial<UserProfile>) => {
    if (supabase) {
      const { data } = await supabase.auth.getUser();
      if (data.user) await hydrateFromCloud(data.user);
    } else {
      setUser((prev) => ({ ...prev, ...profileData }));
    }
    setCurrentView('dashboard');
    addToast(tr("Account created successfully! Let's begin."), 'success');
  };

  const handleSignOut = async () => {
    if (supabase && authUserId) {
      await supabase.auth.signOut();
    }
    setAuthUserId(null);
    setIsAdmin(false);
    setHydrated(false);
    try {
      localStorage.removeItem(SRS_STORAGE_KEY);
    } catch {
      // ignore
    }
    resetToDemoData();
    setIsDemo(false);
    try {
      sessionStorage.removeItem('hsk_demo');
    } catch {
      // ignore
    }
    setCurrentView('landing');
  };

  // Keep the URL hash in sync with the current view (browser/phone back button works)
  useEffect(() => {
    const target = `#/${currentView}`;
    if (window.location.hash !== target) {
      window.history.pushState(null, '', currentView === 'landing' ? window.location.pathname : target);
    }
    window.scrollTo({ top: 0 });
  }, [currentView]);

  useEffect(() => {
    const onPop = () => setCurrentView(viewFromHash() || 'landing');
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  // Protected views need a session (or demo mode)
  useEffect(() => {
    if (!authChecked) return;
    if (!PUBLIC_VIEWS.includes(currentView) && !authUserId && !isDemo) {
      setCurrentView('login');
    }
  }, [authChecked, currentView, authUserId, isDemo]);

  // Navigation guard: signed-in users skip the auth screens
  const navigate = (view: AppState['currentView']) => {
    if (authUserId && (view === 'login' || view === 'signup')) {
      setCurrentView('dashboard');
      return;
    }
    setCurrentView(view);
  };

  // Practice starter
  const handleStartPractice = (skill: SkillType | 'mixed') => {
    if (skill === 'listening') {
      setCurrentView('listening-practice');
    } else if (skill === 'reading') {
      setCurrentView('reading-practice');
    } else if (skill === 'writing') {
      setCurrentView('writing-practice');
    } else if (skill === 'grammar') {
      setActiveQuizTitle('Grammar Patterns Drill');
      setActiveQuizQuestions(GRAMMAR_QUIZ_QUESTIONS);
      setCurrentView('quiz');
    } else if (skill === 'vocabulary') {
      setActiveQuizTitle('Core Vocabulary Quiz');
      setActiveQuizQuestions(VOCAB_QUIZ_QUESTIONS);
      setCurrentView('quiz');
    } else {
      setActiveQuizTitle('Daily Mixed Drill (HSK 1–3)');
      setActiveQuizQuestions(HSK2_QUIZ_QUESTIONS);
      setCurrentView('quiz');
    }
  };

  // Mock Test Submission Handler
  const handleSubmitMockTest = (userAnswers: Record<string, string>, timeSpentSeconds: number) => {
    // Calculate total score based on questions
    let score = 0;
    const listeningAnswers = activeTest.questions.filter((q) => q.section === 'listening');
    const readingAnswers = activeTest.questions.filter((q) => q.section === 'reading');
    const writingAnswers = activeTest.questions.filter((q) => q.section === 'writing');

    let listeningScore = 0;
    let readingScore = 0;
    let writingScore = 0;

    activeTest.questions.forEach((q) => {
      if (userAnswers[q.id] === q.correctAnswerId) {
        score += q.points;
        if (q.section === 'listening') listeningScore += q.points;
        if (q.section === 'reading') readingScore += q.points;
        if (q.section === 'writing') writingScore += q.points;
      }
    });

    const isPassed = score >= activeTest.passingScore;

    const sectionScores: Array<{
      section: 'listening' | 'reading' | 'writing';
      score: number;
      maxScore: number;
    }> = [
      {
        section: 'listening',
        score: listeningScore,
        maxScore: activeTest.sections.find((s) => s.type === 'listening')?.maxScore || 100,
      },
      {
        section: 'reading',
        score: readingScore,
        maxScore: activeTest.sections.find((s) => s.type === 'reading')?.maxScore || 100,
      },
    ];

    if (writingAnswers.length > 0) {
      sectionScores.push({
        section: 'writing',
        score: writingScore,
        maxScore: activeTest.sections.find((s) => s.type === 'writing')?.maxScore || 100,
      });
    }


    const newResult: TestResult = {
      id: `res-${Date.now()}`,
      testId: activeTest.id,
      testTitle: activeTest.title,
      level: activeTest.level,
      score,
      totalScore: activeTest.totalScore,
      passingScore: activeTest.passingScore,
      isPassed,
      date: 'Today',
      timeSpentSeconds,
      sectionScores,
      userAnswers,
    };

    setTestHistory((prev) => [newResult, ...prev]);
    setWeeklyMinutes((m) => m + Math.max(1, Math.round(timeSpentSeconds / 60)));
    setLatestResult(newResult);
    setCurrentView('test-results');
    addToast(isPassed ? tr("Congratulations! You passed the mock test!") : tr("Exam completed! Review your mistakes to reinforce weak spots."), isPassed ? 'success' : 'warning');
  };

  // Render View Routing Logic
  const renderViewContent = () => {
    switch (currentView) {
      case 'landing':
        return (
          <LandingView
            onNavigate={navigate}
            onSelectLevel={(lvl) => {
              setSelectedLevel(lvl);
              setCurrentView('hsk-detail');
            }}
          />
        );

      case 'login':
        return (
          <LoginView
            onNavigate={navigate}
            onLoginSuccess={handleLoginSuccess}
            onDemoLogin={handleDemoLogin}
          />
        );

      case 'signup':
        return (
          <SignUpView
            onNavigate={navigate}
            onSignUpSuccess={handleSignUpSuccess}
          />
        );

      case 'dashboard':
        return (
          <AppLayout
            onSignOut={handleSignOut}
            isAdmin={isAdmin}
            currentView={currentView}
            onNavigate={navigate}
            user={user}
            streakDays={streakDays}
          >
            <DashboardView
              user={user}
              streakDays={streakDays}
              weeklyMinutes={weeklyMinutes}
              learnedWordCount={vocabList.filter((w) => w.isLearned).length}
              showSampleData={!authUserId}
              testHistory={testHistory}
              onNavigate={navigate}
              onSelectLevel={(lvl) => {
                setSelectedLevel(lvl);
                setCurrentView('hsk-detail');
              }}
              onStartPractice={handleStartPractice}
            />
          </AppLayout>
        );

      case 'hsk-levels':
        return (
          <AppLayout
            onSignOut={handleSignOut}
            isAdmin={isAdmin}
            currentView={currentView}
            onNavigate={navigate}
            user={user}
            streakDays={streakDays}
          >
            <HskLevelsView
              user={user}
              onNavigate={navigate}
              onSelectLevel={(lvl) => {
                setSelectedLevel(lvl);
                setCurrentView('hsk-detail');
              }}
            />
          </AppLayout>
        );

      case 'hsk-detail':
        return (
          <AppLayout
            onSignOut={handleSignOut}
            isAdmin={isAdmin}
            currentView={currentView}
            onNavigate={navigate}
            user={user}
            streakDays={streakDays}
          >
            <HskLevelDetailView
              selectedLevel={selectedLevel}
              onNavigate={navigate}
              onSelectLevel={setSelectedLevel}
              onStartPractice={handleStartPractice}
              isProUser={user.isProUser}
              onSelectTest={(test) => {
                setActiveTest(test);
                setCurrentView('mock-test-intro');
              }}
            />
          </AppLayout>
        );

      case 'learn':
        return (
          <AppLayout
            onSignOut={handleSignOut}
            isAdmin={isAdmin}
            currentView={currentView}
            onNavigate={navigate}
            user={user}
            streakDays={streakDays}
          >
            <LearnHubView
              onNavigate={navigate}
              onStartPractice={handleStartPractice}
            />
          </AppLayout>
        );

      case 'vocabulary':
        return (
          <AppLayout
            onSignOut={handleSignOut}
            isAdmin={isAdmin}
            currentView={currentView}
            onNavigate={navigate}
            user={user}
            streakDays={streakDays}
          >
            <VocabularyListView
              words={vocabList}
              onToggleLearned={handleToggleLearned}
              onToggleFavorite={handleToggleFavorite}
              onNavigate={navigate}
            />
          </AppLayout>
        );

      case 'phrases':
        return (
          <AppLayout
            onSignOut={handleSignOut}
            isAdmin={isAdmin}
            currentView={currentView}
            onNavigate={navigate}
            user={user}
            streakDays={streakDays}
          >
            <PhrasesView learnedPhraseIds={learnedPhraseIds} onToggleLearned={handleTogglePhrase} onNavigate={navigate} />
          </AppLayout>
        );

      case 'practice-hub':
        return (
          <AppLayout
            onSignOut={handleSignOut}
            isAdmin={isAdmin}
            currentView={currentView}
            onNavigate={navigate}
            user={user}
            streakDays={streakDays}
          >
            <PracticeHubView
              onNavigate={navigate}
              onStartPractice={handleStartPractice}
            />
          </AppLayout>
        );

      case 'quiz':
        return (
          <AppLayout
            onSignOut={handleSignOut}
            isAdmin={isAdmin}
            currentView={currentView}
            onNavigate={navigate}
            user={user}
            streakDays={streakDays}
          >
            <QuizView
              title={activeQuizTitle}
              questions={activeQuizQuestions}
              onFinishQuiz={(score, total) => {
                addToast(`Drill complete! ${score}/${total} correct.`, 'success');
              }}
              onExit={() => setCurrentView('practice-hub')}
            />
          </AppLayout>
        );

      case 'listening-practice':
        return (
          <AppLayout
            onSignOut={handleSignOut}
            isAdmin={isAdmin}
            currentView={currentView}
            onNavigate={navigate}
            user={user}
            streakDays={streakDays}
          >
            <ListeningPracticeView onExit={() => setCurrentView('practice-hub')} />
          </AppLayout>
        );

      case 'reading-practice':
        return (
          <AppLayout
            onSignOut={handleSignOut}
            isAdmin={isAdmin}
            currentView={currentView}
            onNavigate={navigate}
            user={user}
            streakDays={streakDays}
          >
            <ReadingPracticeView onExit={() => setCurrentView('practice-hub')} />
          </AppLayout>
        );

      case 'writing-practice':
        return (
          <AppLayout
            onSignOut={handleSignOut}
            isAdmin={isAdmin}
            currentView={currentView}
            onNavigate={navigate}
            user={user}
            streakDays={streakDays}
          >
            <WritingPracticeView onExit={() => setCurrentView('practice-hub')} />
          </AppLayout>
        );

      case 'mock-tests':
        return (
          <AppLayout
            onSignOut={handleSignOut}
            isAdmin={isAdmin}
            currentView={currentView}
            onNavigate={navigate}
            user={user}
            streakDays={streakDays}
          >
            <MockTestsListView
              testHistory={testHistory}
              onNavigate={navigate}
              isProUser={user.isProUser}
              onSelectTest={(test) => {
                setActiveTest(test);
                setCurrentView('mock-test-intro');
              }}
            />
          </AppLayout>
        );

      case 'mock-test-intro':
        return (
          <AppLayout
            onSignOut={handleSignOut}
            isAdmin={isAdmin}
            currentView={currentView}
            onNavigate={navigate}
            user={user}
            streakDays={streakDays}
          >
            <MockTestIntroView
              test={activeTest}
              onStartExam={() => setCurrentView('mock-test-exam')}
              onBack={() => setCurrentView('mock-tests')}
            />
          </AppLayout>
        );

      case 'mock-test-exam':
        return (
          <AppLayout
            onSignOut={handleSignOut}
            isAdmin={isAdmin}
            currentView={currentView}
            onNavigate={navigate}
            user={user}
            streakDays={streakDays}
          >
            <MockTestExamView
              test={activeTest}
              onSubmitTest={handleSubmitMockTest}
              onExit={() => setCurrentView('mock-tests')}
            />
          </AppLayout>
        );

      case 'test-results':
        return (
          <AppLayout
            onSignOut={handleSignOut}
            isAdmin={isAdmin}
            currentView={currentView}
            onNavigate={navigate}
            user={user}
            streakDays={streakDays}
          >
            {latestResult ? (
              <TestResultsView
                result={latestResult}
                test={activeTest}
                onReviewMistakes={() => setCurrentView('review-mistakes')}
                onRetake={() => setCurrentView('mock-test-intro')}
                onNavigate={navigate}
              />
            ) : (
              <div className="text-center py-12">
                <p>{tr("No recent test results found.")}</p>
                <button
                  onClick={() => setCurrentView('mock-tests')}
                  className="mt-2 text-rose-700 font-bold"
                >
                  {tr("Go to Mock Tests")}
                </button>
              </div>
            )}
          </AppLayout>
        );

      case 'review-mistakes':
        return (
          <AppLayout
            onSignOut={handleSignOut}
            isAdmin={isAdmin}
            currentView={currentView}
            onNavigate={navigate}
            user={user}
            streakDays={streakDays}
          >
            {latestResult ? (
              <ReviewMistakesView
                test={activeTest}
                result={latestResult}
                onBackToResults={() => setCurrentView('test-results')}
              />
            ) : (
              <div className="text-center py-12">
                <p>{tr("No recent test found to review.")}</p>
              </div>
            )}
          </AppLayout>
        );

      case 'progress':
        return (
          <AppLayout
            onSignOut={handleSignOut}
            isAdmin={isAdmin}
            currentView={currentView}
            onNavigate={navigate}
            user={user}
            streakDays={streakDays}
          >
            <ProgressAnalyticsView
              showSampleData={!authUserId}
              user={user}
              streakDays={streakDays}
              testHistory={testHistory}
              onNavigate={navigate}
              onReviewTest={(res) => {
                const matchedTest = MOCK_TESTS_CATALOG.find((t) => t.id === res.testId) || activeTest;
                setActiveTest(matchedTest);
                setLatestResult(res);
                setCurrentView('test-results');
              }}
            />
          </AppLayout>
        );

      case 'profile':
        return (
          <AppLayout
            onSignOut={handleSignOut}
            isAdmin={isAdmin}
            currentView={currentView}
            onNavigate={navigate}
            user={user}
            streakDays={streakDays}
          >
            <ProfileSettingsView
              user={user}
              onUpdateProfile={(updated) => {
                setUser((prev) => ({ ...prev, ...updated }));
                addToast(tr("Profile updated!"), 'success');
              }}
              onResetProgress={() => {
                setStreakDays(1);
                addToast(tr("Progress reset to day 1"), 'info');
              }}
            />
          </AppLayout>
        );

      case 'admin':
        return (
          <AppLayout
            onSignOut={handleSignOut}
            isAdmin={isAdmin}
            currentView={currentView}
            onNavigate={navigate}
            user={user}
            streakDays={streakDays}
          >
            {isAdmin ? (
              <AdminView />
            ) : (
              <div className="py-20 text-center text-sm text-stone-500">{t('admin.restricted')}</div>
            )}
          </AppLayout>
        );

      default:
        return (
          <LandingView
            onNavigate={navigate}
            onSelectLevel={(lvl) => {
              setSelectedLevel(lvl);
              setCurrentView('hsk-detail');
            }}
          />
        );
    }
  };

  if (!authChecked) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FAF8F5]">
        <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center animate-pulse">
          <span className="font-hanzi font-bold text-rose-400">道</span>
        </div>
      </div>
    );
  }

  return <div className="min-h-screen font-sans antialiased text-slate-900">{renderViewContent()}</div>;
}

export default function App() {
  return (
    <LanguageProvider>
      <ToastProvider>
        <HskPathApp />
      </ToastProvider>
    </LanguageProvider>
  );
}
