import React, { useEffect, useState } from 'react';
import { tr } from '../../locales/tr';
import { Modal } from './Modal';
import { Button } from './Button';
import { Badge } from './Badge';
import { SpeechButton } from './SpeechButton';
import { BookOpen, MessageSquare, Award, CheckCircle2, XCircle, ArrowRight, Lightbulb, Volume2, PenTool, Globe, Target, Sparkles } from '../icons';
import type { HskLesson } from '../../types';
import { isSyllabusWord, type CoreLevel } from '../../data/hskWordCounts';
import { useI18n } from '../../locales';

interface LessonStudyModalProps {
  lesson: HskLesson | null;
  isOpen: boolean;
  onClose: () => void;
  onCompleteLesson?: (lessonId: string) => void;
  /** Opens Laoshi with this lesson's speaking task. */
  onPractice?: (lesson: HskLesson) => void;
}

type LessonTab = 'dialogue' | 'grammar' | 'vocab' | 'sounds' | 'hanzi' | 'culture' | 'saying' | 'quiz' | 'practice';

export const LessonStudyModal: React.FC<LessonStudyModalProps> = ({
  lesson,
  isOpen,
  onClose,
  onCompleteLesson,
  onPractice,
}) => {
  const { language, getLocalized } = useI18n();
  const [activeTab, setActiveTab] = useState<LessonTab>('dialogue');
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  const hasDialogue = !!lesson?.dialogue?.length;
  const hasGrammar = !!lesson?.grammarPoints?.length;
  // Open each lesson on its first tab that actually has content.
  useEffect(() => {
    if (!lesson) return;
    setActiveTab(lesson.dialogue?.length ? 'dialogue' : lesson.grammarPoints?.length ? 'grammar' : 'vocab');
    setSelectedAnswers({});
    setIsCompleted(false);
  }, [lesson?.id]);

  if (!lesson) return null;

  // Speaking task already passed with Laoshi (stored by the tutor page).
  let missionDone = false;
  try {
    missionDone = !!JSON.parse(localStorage.getItem('hskpath_missions_v1') || '{}')[lesson.id];
  } catch {
    /* storage unavailable */
  }

  const L = (en: string, fr: string, zh: string) => (language === 'fr' ? fr : language === 'zh' ? zh : en);
  const tabs: Array<{ id: LessonTab; label: string; icon: React.ComponentType<{ className?: string }> }> = [
    ...(hasDialogue ? [{ id: 'dialogue' as const, label: L('Dialogue', 'Dialogue', '情境对话'), icon: MessageSquare }] : []),
    ...(hasGrammar ? [{ id: 'grammar' as const, label: L('Grammar', 'Grammaire', '核心语法'), icon: Lightbulb }] : []),
    { id: 'vocab', label: L('Vocab', 'Vocabulaire', '重点生词'), icon: BookOpen },
    ...(lesson.pronunciation ? [{ id: 'sounds' as const, label: L('Pinyin', 'Pinyin', '拼音'), icon: Volume2 }] : []),
    ...(lesson.characters ? [{ id: 'hanzi' as const, label: L('Characters', 'Caractères', '汉字'), icon: PenTool }] : []),
    ...(lesson.saying ? [{ id: 'saying' as const, label: L('Saying', 'Proverbe', '俗语'), icon: Sparkles }] : []),
    ...(lesson.culture ? [{ id: 'culture' as const, label: L('Culture', 'Culture', '文化'), icon: Globe }] : []),
    ...(lesson.quickQuiz?.length ? [{ id: 'quiz' as const, label: L('Quiz', 'Quiz', '随堂测验'), icon: Award }] : []),
    ...(lesson.practice ? [{ id: 'practice' as const, label: L('Speak', 'Pratique', '运用'), icon: Target }] : []),
  ];

  const handleSelectAnswer = (qId: string, optId: string) => {
    setSelectedAnswers((prev) => ({ ...prev, [qId]: optId }));
  };

  const handleFinish = () => {
    setIsCompleted(true);
    if (onCompleteLesson) {
      onCompleteLesson(lesson.id);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      maxWidth="xl"
      id="lesson-study-modal"
    >
      <div className="flex flex-col h-full max-h-[85vh]">
        {/* Modal Top Bar */}
        <div className="p-5 sm:p-6 border-b border-[#EAE2D5] bg-[#FAF8F5] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Badge variant={lesson.isFree ? 'success' : 'primary'} size="sm">
                {lesson.isFree ? (language === 'fr' ? 'Leçon Gratuite' : language === 'zh' ? '免费体验课' : 'Free Lesson') : tr("Pro Lesson")}
              </Badge>
              <span className="text-xs uppercase tracking-wider text-stone-500 font-semibold">
                {lesson.level.toUpperCase()} &bull; {lesson.estimatedMinutes}{" "}{tr("min")}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900">
              {getLocalized(lesson.title)}
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              {getLocalized(lesson.subtitle)}
            </p>
          </div>

          {/* Tab Navigation: wraps on small screens so every section stays visible */}
          <div className="flex flex-wrap items-center gap-1 p-1 bg-[#ECE4D8] rounded-xl self-start sm:self-center max-w-full">
            {tabs.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                  activeTab === id ? 'bg-white text-stone-900 shadow-xs' : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${id === 'quiz' ? 'text-[#C52828]' : ''}`} />
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-8 space-y-6">
          {/* TAB 1: DIALOGUE */}
          {activeTab === 'dialogue' && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/70 text-xs text-amber-900">
                <p className="font-semibold">{getLocalized(lesson.description)}</p>
              </div>

              <div className="space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-stone-500">
                  {language === 'fr' ? 'Dialogue interactif avec prononciation' : language === 'zh' ? '情景会话与标准发音' : 'Interactive Dialogue with Audio'}
                </h3>

                {lesson.dialogue.map((line, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-[#F8F5F0] border border-[#EBE3D7] hover:border-[#DFD5C6] transition-all space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#C52828] px-2 py-0.5 rounded-md bg-[#C52828]/10">
                        {line.speaker}
                      </span>
                      <SpeechButton text={line.audioText || line.hanzi} size="sm" />
                    </div>
                    <div className="text-lg sm:text-xl font-bold text-stone-900 font-chinese tracking-wide">
                      {line.hanzi}
                    </div>
                    <div className="text-xs sm:text-sm text-stone-500 font-medium font-sans">
                      {line.pinyin}
                    </div>
                    <div className="text-xs sm:text-sm text-stone-700 pt-1 border-t border-[#EAE1D3]">
                      {getLocalized(line.meaning)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: GRAMMAR */}
          {activeTab === 'grammar' && (
            <div className="space-y-6">
              {lesson.grammarPoints.map((gp, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white border border-[#E2D8CC] shadow-xs space-y-4"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#C52828] text-white text-xs font-bold flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <h3 className="text-base font-bold text-stone-900">
                      {getLocalized(gp.title)}
                    </h3>
                  </div>

                  <div className="p-3 bg-[#F5EFEB] rounded-xl font-mono text-xs sm:text-sm text-[#8E2828] font-bold">
                    {gp.structure}
                  </div>

                  <p className="text-sm text-stone-700 leading-relaxed">
                    {getLocalized(gp.explanation)}
                  </p>

                  <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#ECE3D8] space-y-2">
                    <div className="text-xs uppercase tracking-wider font-bold text-stone-500 flex items-center justify-between">
                      <span>{language === 'fr' ? 'Exemple officiel' : language === 'zh' ? '典型例句' : 'Official Example'}</span>
                      <SpeechButton text={gp.example.hanzi} size="sm" />
                    </div>
                    <div className="text-base font-bold text-stone-900 font-chinese">
                      {gp.example.hanzi}
                    </div>
                    <div className="text-xs text-stone-500 font-medium">
                      {gp.example.pinyin}
                    </div>
                    <div className="text-xs text-stone-700 italic">
                      {getLocalized(gp.example.translation)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 3: VOCABULARY */}
          {activeTab === 'vocab' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {lesson.vocabulary.map((w, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E7DDD0] flex items-center justify-between gap-3"
                  >
                    <div>
                      <div className="text-base font-bold text-stone-900 font-chinese flex items-center gap-2">
                        {w.hanzi}
                        {!isSyllabusWord(w.hanzi, lesson.level as CoreLevel) && (
                          <span
                            className="text-[10px] font-semibold font-sans px-1.5 py-0.5 rounded-md bg-stone-100 text-stone-500 border border-stone-200"
                            title={tr('Useful word outside the official HSK 3.0 list for this level: not counted in the level total.')}
                          >
                            {tr('bonus')}
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-stone-500 font-medium">
                        {w.pinyin}
                      </div>
                      <div className="text-xs text-stone-700 mt-0.5">
                        {getLocalized(w.meaning)}
                      </div>
                    </div>
                    <SpeechButton text={w.hanzi} size="sm" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* PINYIN */}
          {activeTab === 'sounds' && lesson.pronunciation && (
            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-white border border-[#E2D8CC] space-y-3">
                <h3 className="text-base sm:text-lg font-bold text-stone-900">{getLocalized(lesson.pronunciation.title)}</h3>
                <p className="text-sm text-stone-700 leading-relaxed">{getLocalized(lesson.pronunciation.explanation)}</p>
              </div>
              <div className="grid grid-cols-2 gap-2.5">
                {lesson.pronunciation.examples.map((ex) => (
                  <div key={ex.hanzi} className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#EAE2D5] flex items-center justify-between gap-2">
                    <div className="min-w-0">
                      <div className="text-xl font-hanzi-serif font-bold text-stone-900">{ex.hanzi}</div>
                      <div className="text-sm text-[#9A3412]">{ex.pinyin}</div>
                    </div>
                    <SpeechButton text={ex.hanzi} size="sm" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CHARACTERS */}
          {activeTab === 'hanzi' && lesson.characters && (
            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-white border border-[#E2D8CC] space-y-3">
                <h3 className="text-base sm:text-lg font-bold text-stone-900">{getLocalized(lesson.characters.title)}</h3>
                <p className="text-sm text-stone-700 leading-relaxed">{getLocalized(lesson.characters.explanation)}</p>
              </div>
              <div className="space-y-2.5">
                {lesson.characters.components.map((c) => (
                  <div key={c.component} className="p-4 rounded-xl bg-[#FAF8F5] border border-[#EAE2D5] flex items-center gap-4">
                    <div className="w-14 h-14 shrink-0 rounded-xl bg-white border border-[#E2D8CC] flex items-center justify-center text-3xl font-hanzi-serif font-bold text-[#C52828]">
                      {c.component}
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-semibold text-stone-800">{language === 'fr' ? c.meaning.fr : c.meaning.en}</div>
                      <div className="flex flex-wrap gap-1.5 mt-1.5">
                        {c.examples.map((e) => (
                          <span key={e} className="px-2 py-0.5 rounded-md bg-white border border-[#E2D8CC] text-lg font-hanzi-serif text-stone-900">{e}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SAYING */}
          {activeTab === 'saying' && lesson.saying && (
            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#E2D8CC] space-y-3">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <div className="text-2xl sm:text-3xl font-hanzi-serif font-bold text-stone-900 leading-snug">{lesson.saying.hanzi}</div>
                  <div className="text-sm text-[#9A3412] mt-1">{lesson.saying.pinyin}</div>
                </div>
                <SpeechButton text={lesson.saying.hanzi} size="sm" />
              </div>
              <p className="text-sm sm:text-base font-semibold text-stone-800">{getLocalized(lesson.saying.meaning)}</p>
              {language !== 'zh' && <p className="text-sm text-stone-500">{lesson.saying.meaning.zh}</p>}
            </div>
          )}

          {/* CULTURE */}
          {activeTab === 'culture' && lesson.culture && (
            <div className="p-5 rounded-2xl bg-white border border-[#E2D8CC] space-y-3">
              <h3 className="text-base sm:text-lg font-bold text-stone-900">{getLocalized(lesson.culture.title)}</h3>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed">{getLocalized(lesson.culture.body)}</p>
            </div>
          )}

          {/* SPEAKING TASK WITH LAOSHI */}
          {activeTab === 'practice' && lesson.practice && (
            <div className="p-5 rounded-2xl bg-white border border-[#E2D8CC] space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 shrink-0 rounded-xl bg-[#1C1917] flex items-center justify-center">
                  <span className="font-hanzi-serif font-bold text-[#FAF8F5]">师</span>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider font-semibold text-stone-500">{L('Your mission', 'Ta mission', '任务')}</div>
                  <p className="text-sm sm:text-base font-semibold text-stone-900 leading-relaxed">{getLocalized(lesson.practice.task)}</p>
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#EAE2D5]">
                <div className="text-xs font-semibold text-stone-500 mb-1">{L('You can start with:', 'Tu peux commencer par :', '你可以这样开始：')}</div>
                <div className="text-lg font-hanzi-serif text-stone-900">{lesson.practice.starter}</div>
              </div>
              {missionDone && (
                <div className="flex items-center gap-2 p-3 rounded-xl bg-[#F0FDF4] border border-[#BBF7D0] text-sm font-semibold text-[#14532D]">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  {L('Mission complete! You can practise it again anytime.', 'Mission réussie ! Tu peux la refaire quand tu veux.', '任务已完成！可以随时再练习。')}
                </div>
              )}
              {onPractice && (
                <Button onClick={() => onPractice(lesson)} iconRight={<ArrowRight className="w-4 h-4" />}>
                  {missionDone ? L('Practise again', 'Refaire la mission', '再练一次') : L('Practise with Laoshi', 'Pratiquer avec Laoshi', '和老师练习')}
                </Button>
              )}
              <p className="text-xs text-stone-500">
                {L(
                  'Chat with Laoshi in Chinese, then press “Check my mission”: he tells you if you succeeded or gives you tips to try again.',
                  'Discute en chinois avec Laoshi, puis appuie sur « Vérifier ma mission » : il te dit si c’est réussi ou te donne des conseils pour réessayer.',
                  '先和老师用中文聊天，再点“检查任务”：老师会告诉你是否完成，或者给你建议再试一次。'
                )}
              </p>
            </div>
          )}

          {/* TAB 4: QUIZ */}
          {activeTab === 'quiz' && (
            <div className="space-y-6">
              {lesson.quickQuiz.map((q) => {
                const userChoice = selectedAnswers[q.id];
                const isSelected = !!userChoice;
                const isCorrect = userChoice === q.correctAnswerId;

                return (
                  <div
                    key={q.id}
                    className="p-5 rounded-2xl bg-white border border-[#E2D8CC] shadow-xs space-y-4"
                  >
                    <h4 className="text-sm sm:text-base font-bold text-stone-900">
                      {getLocalized(q.prompt)}
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {q.options.map((opt) => {
                        let btnStyle = 'border-[#E2D8CC] hover:bg-[#F8F5F0] text-stone-800';
                        if (isSelected) {
                          if (opt.id === q.correctAnswerId) {
                            btnStyle = 'border-emerald-500 bg-emerald-50 text-emerald-900 font-bold';
                          } else if (opt.id === userChoice) {
                            btnStyle = 'border-rose-500 bg-rose-50 text-rose-900';
                          }
                        }

                        return (
                          <button
                            key={opt.id}
                            onClick={() => !isSelected && handleSelectAnswer(q.id, opt.id)}
                            className={`p-3 rounded-xl border text-left text-xs sm:text-sm transition-all cursor-pointer flex items-center justify-between ${btnStyle}`}
                          >
                            <span>{tr(opt.text)}</span>
                            {isSelected && opt.id === q.correctAnswerId && (
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                            )}
                            {isSelected && opt.id === userChoice && opt.id !== q.correctAnswerId && (
                              <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {isSelected && (
                      <div className={`p-3.5 rounded-xl text-xs space-y-1 ${
                        isCorrect ? 'bg-emerald-50 border border-emerald-200 text-emerald-900' : 'bg-rose-50 border border-rose-200 text-rose-900'
                      }`}>
                        <div className="font-bold flex items-center gap-1.5">
                          {isCorrect ? <CheckCircle2 className="w-4 h-4 text-emerald-600" /> : <XCircle className="w-4 h-4 text-rose-600" />}
                          <span>{isCorrect ? (language === 'fr' ? 'Excellente réponse !' : language === 'zh' ? '回答正确！' : 'Correct!') : (language === 'fr' ? 'Pas tout à fait' : language === 'zh' ? '回答错误' : 'Incorrect')}</span>
                        </div>
                        {q.explanation && (
                          <p className="pt-1">{getLocalized(q.explanation)}</p>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 border-t border-[#EAE2D5] bg-[#FAF8F5] flex items-center justify-between">
          <Button variant="outline" size="sm" onClick={onClose}>
            {language === 'fr' ? 'Fermer' : language === 'zh' ? '关闭' : 'Close'}
          </Button>

          <Button
            variant="primary"
            size="sm"
            onClick={handleFinish}
            iconRight={<ArrowRight className="w-4 h-4" />}
          >
            {isCompleted 
              ? (language === 'fr' ? 'Leçon Terminée' : language === 'zh' ? '已完成学习' : 'Lesson Completed') 
              : (language === 'fr' ? 'Marquer comme appris' : language === 'zh' ? '完成本课' : 'Mark as Learned')}
          </Button>
        </div>
      </div>
    </Modal>
  );
};
