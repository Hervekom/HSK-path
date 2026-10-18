import React, { useState } from 'react';
import { Modal } from './Modal';
import { Button } from './Button';
import { Badge } from './Badge';
import { SpeechButton } from './SpeechButton';
import { BookOpen, MessageSquare, Award, CheckCircle2, XCircle, ArrowRight, Lightbulb } from 'lucide-react';
import type { HskLesson } from '../../types';
import { useI18n } from '../../locales';

interface LessonStudyModalProps {
  lesson: HskLesson | null;
  isOpen: boolean;
  onClose: () => void;
  onCompleteLesson?: (lessonId: string) => void;
}

export const LessonStudyModal: React.FC<LessonStudyModalProps> = ({
  lesson,
  isOpen,
  onClose,
  onCompleteLesson,
}) => {
  const { language, getLocalized } = useI18n();
  const [activeTab, setActiveTab] = useState<'dialogue' | 'grammar' | 'vocab' | 'quiz'>('dialogue');
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  if (!lesson) return null;

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
                {lesson.isFree ? (language === 'fr' ? 'Leçon Gratuite' : language === 'zh' ? '免费体验课' : 'Free Lesson') : 'Pro Lesson'}
              </Badge>
              <span className="text-xs uppercase tracking-wider text-stone-500 font-semibold">
                {lesson.level.toUpperCase()} &bull; {lesson.estimatedMinutes} min
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900">
              {getLocalized(lesson.title)}
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              {getLocalized(lesson.subtitle)}
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex items-center gap-1.5 p-1 bg-[#ECE4D8] rounded-xl self-start sm:self-center overflow-x-auto max-w-full">
            <button
              onClick={() => setActiveTab('dialogue')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                activeTab === 'dialogue'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <MessageSquare className="w-3.5 h-3.5" />
              {language === 'fr' ? 'Dialogue' : language === 'zh' ? '情境对话' : 'Dialogue'}
            </button>
            <button
              onClick={() => setActiveTab('grammar')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                activeTab === 'grammar'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <Lightbulb className="w-3.5 h-3.5" />
              {language === 'fr' ? 'Grammaire' : language === 'zh' ? '核心语法' : 'Grammar'}
            </button>
            <button
              onClick={() => setActiveTab('vocab')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                activeTab === 'vocab'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              {language === 'fr' ? 'Vocabulaire' : language === 'zh' ? '重点生词' : 'Vocab'}
            </button>
            {lesson.quickQuiz && lesson.quickQuiz.length > 0 && (
              <button
                onClick={() => setActiveTab('quiz')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                  activeTab === 'quiz'
                    ? 'bg-white text-stone-900 shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <Award className="w-3.5 h-3.5 text-[#C52828]" />
                {language === 'fr' ? 'Quiz' : language === 'zh' ? '随堂测验' : 'Quiz'}
              </button>
            )}
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
                      <div className="text-base font-bold text-stone-900 font-chinese">
                        {w.hanzi}
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
                            <span>{opt.text}</span>
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
