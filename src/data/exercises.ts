import type { QuizQuestion, MultiLingualText } from '../types';

export const PRACTICE_EXERCISES: QuizQuestion[] = [
  // ==================== VOCABULARY ====================
  {
    id: 'quiz-v-01',
    level: 'hsk1',
    skill: 'vocabulary',
    prompt: {
      en: 'What does this word mean?',
      fr: 'Que signifie ce mot ?',
      zh: '这个词语的意思是什么？',
    },
    hanzi: '学校',
    pinyin: 'xuéxiào',
    audioText: '学校',
    options: [
      { id: 'opt-1', text: 'Teacher', pinyin: 'lǎoshī', hanzi: '老师' },
      { id: 'opt-2', text: 'School', pinyin: 'xuéxiào', hanzi: '学校' },
      { id: 'opt-3', text: 'Student', pinyin: 'xuésheng', hanzi: '学生' },
      { id: 'opt-4', text: 'Hospital', pinyin: 'yīyuàn', hanzi: '医院' },
    ],
    correctAnswerId: 'opt-2',
    explanation: {
      en: '学校 (xuéxiào) means "school". 老师 is teacher, 学生 is student, and 医院 is hospital.',
      fr: '学校 (xuéxiào) signifie "école". 老师 est professeur, 学生 est étudiant et 医院 est hôpital.',
      zh: '学校（xuéxiào）指供学习的场所。老师为教师，学生为求学者，医院为就医处。',
    },
    points: 10,
  },
  {
    id: 'quiz-v-02',
    level: 'hsk1',
    skill: 'vocabulary',
    prompt: {
      en: 'Select the correct Chinese character for "friend":',
      fr: 'Sélectionnez le caractère correspondant à "ami" :',
      zh: '选择表示“朋友”的正确词语：',
    },
    options: [
      { id: 'opt-1', text: '朋友 (péngyou)' },
      { id: 'opt-2', text: '苹果 (píngguǒ)' },
      { id: 'opt-3', text: '飞机 (fēijī)' },
      { id: 'opt-4', text: '衣服 (yīfu)' },
    ],
    correctAnswerId: 'opt-1',
    explanation: {
      en: '朋友 (péngyou) means "friend". 苹果 is apple, 飞机 is airplane, and 衣服 is clothing.',
      fr: '朋友 (péngyou) signifie "ami". 苹果 est pomme, 飞机 est avion et 衣服 est vêtement.',
      zh: '朋友（péngyou）表示彼此有交情的人。苹果为水果，飞机为交通工具，衣服为服饰。',
    },
    points: 10,
  },
  {
    id: 'quiz-v-03',
    level: 'hsk2',
    skill: 'vocabulary',
    prompt: {
      en: 'Which word means "to prepare / to get ready"?',
      fr: 'Quel mot signifie "préparer / se préparer" ?',
      zh: '哪个词语的意思是“预先安排或筹备”？',
    },
    hanzi: '准备',
    pinyin: 'zhǔnbèi',
    audioText: '准备',
    options: [
      { id: 'opt-1', text: '旅游 (lǚyóu)' },
      { id: 'opt-2', text: '准备 (zhǔnbèi)' },
      { id: 'opt-3', text: '帮助 (bāngzhù)' },
      { id: 'opt-4', text: '介绍 (jièshào)' },
    ],
    correctAnswerId: 'opt-2',
    explanation: {
      en: '准备 (zhǔnbèi) translates to "to prepare". 旅游 is to travel, 帮助 is to help, 介绍 is to introduce.',
      fr: '准备 (zhǔnbèi) se traduit par "préparer". 旅游 est voyager, 帮助 est aider, 介绍 est présenter.',
      zh: '准备（zhǔnbèi）表示预先安排。旅游为出行游玩，帮助为协助他人，介绍为引见。',
    },
    points: 10,
  },
  {
    id: 'quiz-v-04',
    level: 'hsk3',
    skill: 'vocabulary',
    prompt: {
      en: 'What does "热情 (rèqíng)" mean in this context?',
      fr: 'Que signifie "热情 (rèqíng)" dans ce contexte ?',
      zh: '“热情”在此语境中的含义是？',
    },
    hanzi: '热情',
    pinyin: 'rèqíng',
    audioText: '这里的服务员对客人非常热情。',
    options: [
      { id: 'opt-1', text: 'Strict & serious' },
      { id: 'opt-2', text: 'Enthusiastic & warm-hearted' },
      { id: 'opt-3', text: 'Careless & hurried' },
      { id: 'opt-4', text: 'Quiet & calm' },
    ],
    correctAnswerId: 'opt-2',
    explanation: {
      en: '热情 (rèqíng) means "warm-hearted / enthusiastic / friendly hospitality".',
      fr: '热情 (rèqíng) signifie "chaleureux / enthousiaste / accueillant".',
      zh: '热情（rèqíng）指对人热烈关切、富有诚意与活力的态度。',
    },
    points: 10,
  },

  // ==================== GRAMMAR ====================
  {
    id: 'quiz-g-01',
    level: 'hsk1',
    skill: 'grammar',
    prompt: {
      en: 'Choose the correct measure word (量词) to fill in the blank:',
      fr: 'Choisissez le classificateur correct pour compléter la phrase :',
      zh: '选择正确的量词填空：',
    },
    hanzi: '我想买三 ____ 苹果。',
    pinyin: 'Wǒ xiǎng mǎi sān ____ píngguǒ.',
    options: [
      { id: 'opt-1', text: '个 (ge)' },
      { id: 'opt-2', text: '本 (běn)' },
      { id: 'opt-3', text: '只 (zhī)' },
      { id: 'opt-4', text: '张 (zhāng)' },
    ],
    correctAnswerId: 'opt-1',
    explanation: {
      en: '个 (ge) is the general measure word used for apples (苹果). 本 is for books, 只 for small animals, and 张 for flat objects like paper or tables.',
      fr: '个 (ge) est le classificateur général utilisé pour les pommes. 本 est pour les livres, 只 pour les petits animaux, 张 pour les objets plats.',
      zh: '苹果使用通用量词“个”。“本”用于书籍，“只”多用于动物，“张”用于平面物品。',
    },
    points: 10,
  },
  {
    id: 'quiz-g-02',
    level: 'hsk2',
    skill: 'grammar',
    prompt: {
      en: 'Choose the correct structure for comparison using 比 (bǐ):',
      fr: 'Choisissez la structure comparative correcte avec 比 (bǐ) :',
      zh: '选择正确的“比”字句比较结构：',
    },
    options: [
      { id: 'opt-1', text: '今天比昨天很热。' },
      { id: 'opt-2', text: '今天比昨天热。' },
      { id: 'opt-3', text: '比今天昨天热。' },
      { id: 'opt-4', text: '今天很热比昨天。' },
    ],
    correctAnswerId: 'opt-2',
    explanation: {
      en: 'In Chinese 比 sentences (A 比 B + Adj), adverbs of degree like 很 (hěn) or 非常 cannot precede the adjective. Option 2 is standard and correct.',
      fr: 'Dans les structures avec 比 (A 比 B + Adj), on n\'utilise pas les adverbes de degré comme 很. L\'option 2 est correcte.',
      zh: '“比”字句（A 比 B + 形容词）中，谓语形容词前不能加“很”、“非常”等程度副词。',
    },
    points: 10,
  },

  // ==================== LISTENING ====================
  {
    id: 'quiz-l-01',
    level: 'hsk1',
    skill: 'listening',
    prompt: {
      en: 'Listen to the audio and choose the correct matching statement:',
      fr: 'Écoutez l\'audio et sélectionnez l\'énoncé correspondant :',
      zh: '仔细听录音并选择相符的表达：',
    },
    audioText: '喂，李老师在学校吗？',
    options: [
      { id: 'opt-1', text: 'Calling to ask if Teacher Li is at school.' },
      { id: 'opt-2', text: 'Asking the doctor for advice.' },
      { id: 'opt-3', text: 'Buying tickets at the train station.' },
      { id: 'opt-4', text: 'Ordering dishes in a restaurant.' },
    ],
    correctAnswerId: 'opt-1',
    explanation: {
      en: 'The speaker says "Wèi, Lǐ lǎoshī zài xuéxiào ma?" which means "Hello, is Teacher Li at school?".',
      fr: 'L\'interlocuteur dit "Wèi, Lǐ lǎoshī zài xuéxiào ma?" (Allô, le professeur Li est-il à l\'école ?).',
      zh: '录音内容为“喂，李老师在学校吗？”，表示打电话询问李老师是否在校。',
    },
    points: 10,
  },
  {
    id: 'quiz-l-02',
    level: 'hsk2',
    skill: 'listening',
    prompt: {
      en: 'Listen to the dialogue and determine where the speakers are:',
      fr: 'Écoutez le dialogue et déterminez où se trouvent les personnes :',
      zh: '听录音，判断对话发生的地点：',
    },
    audioText: '服务员，请问这件衣服可以试一下吗？',
    options: [
      { id: 'opt-1', text: 'At a clothing store (商场 / 衣服店)' },
      { id: 'opt-2', text: 'At the airport (飞机场)' },
      { id: 'opt-3', text: 'At a hospital (医院)' },
      { id: 'opt-4', text: 'In a cinema (电影院)' },
    ],
    correctAnswerId: 'opt-1',
    explanation: {
      en: 'The dialogue asks "Waiter, may I try on these clothes?" which takes place in a clothing store.',
      fr: 'La personne demande "Serveur, puis-je essayer ce vêtement ?", ce qui se déroule dans un magasin de vêtements.',
      zh: '对话中提及“服务员，这件衣服可以试一下吗？”，表明地点在服装店/商场。',
    },
    points: 10,
  },

  // ==================== READING ====================
  {
    id: 'quiz-r-01',
    level: 'hsk2',
    skill: 'reading',
    prompt: {
      en: 'Read the short text and answer the question:',
      fr: 'Lisez le court texte et répondez à la question :',
      zh: '阅读短文并回答问题：',
    },
    passage: '王朋是个医生，他每天早上七点去医院工作，晚上六点回家。他很喜欢帮助病人。',
    passagePinyin: 'Wáng Péng shì ge yīshēng, tā měitiān zǎoshang qī diǎn qù yīyuàn gōngzuò, wǎnshang liù diǎn huí jiā. Tā hěn xǐhuan bāngzhù bìngrén.',
    hanzi: '王朋几点去医院工作？',
    pinyin: 'Wáng Péng jǐ diǎn qù yīyuàn gōngzuò?',
    options: [
      { id: 'opt-1', text: '早上六点 (6:00 AM)' },
      { id: 'opt-2', text: '早上七点 (7:00 AM)' },
      { id: 'opt-3', text: '晚上六点 (6:00 PM)' },
      { id: 'opt-4', text: '晚上七点 (7:00 PM)' },
    ],
    correctAnswerId: 'opt-2',
    explanation: {
      en: 'The text states: "每天早上七点去医院工作" (goes to hospital at 7:00 AM every morning).',
      fr: 'Le texte précise : "每天早上七点去医院工作" (part travailler à l\'hôpital à 7h00 du matin).',
      zh: '文中明确交代“他每天早上七点去医院工作”。',
    },
    points: 10,
  },

  // ==================== CHARACTERS & WRITING ====================
  {
    id: 'quiz-c-01',
    level: 'hsk1',
    skill: 'characters',
    prompt: {
      en: 'Which character has the radical 氵 (three dots of water, related to liquid)?',
      fr: 'Quel caractère comporte la clé de l\'eau 氵 (trois points d\'eau) ?',
      zh: '哪个汉字含有与水相关的偏旁部首“氵”？',
    },
    options: [
      { id: 'opt-1', text: '喝 (hē)' },
      { id: 'opt-2', text: '海 (hǎi)' },
      { id: 'opt-3', text: '林 (lín)' },
      { id: 'opt-4', text: '语 (yǔ)' },
    ],
    correctAnswerId: 'opt-2',
    explanation: {
      en: '海 (sea) contains the 氵 water radical on the left. 喝 has 口 (mouth), 林 has 木 (wood), and 语 has 讠 (speech).',
      fr: '海 (mer) contient la clé de l\'eau 氵 sur la gauche. 喝 a la clé de la bouche 口, 林 la clé du bois 木, et 语 la clé de la parole 讠.',
      zh: '“海”字左侧为三点水（氵）。“喝”为口字旁，“林”为木字旁，“语”为言字旁。',
    },
    points: 10,
  },
  {
    id: 'quiz-v-05',
    level: 'hsk1',
    skill: 'vocabulary',
    prompt: {
      en: 'What is the correct Chinese character for "to drink"?',
      fr: 'Quel est le caractère chinois pour "boire" ?',
      zh: '表示“喝”的正确汉字是？',
    },
    questionText: 'Select the Chinese character for "to drink (hē)":',
    options: [
      { id: 'opt-1', text: '喝 (hē)' },
      { id: 'opt-2', text: '吃 (chī)' },
      { id: 'opt-3', text: '读 (dú)' },
      { id: 'opt-4', text: '写 (xiě)' },
    ],
    correctAnswerId: 'opt-1',
    explanation: {
      en: '喝 (hē) means to drink. 吃 is to eat, 读 is to read, and 写 is to write.',
      fr: '喝 (hē) signifie boire. 吃 est manger, 读 est lire et 写 est écrire.',
      zh: '“喝（hē）”为饮用。吃为进食，读为朗诵/阅读，写为书写。',
    },
    points: 10,
  },
  {
    id: 'quiz-v-06',
    level: 'hsk2',
    skill: 'vocabulary',
    prompt: {
      en: 'Choose the antonym (opposite) of "便宜 (piányi - cheap)":',
      fr: 'Choisissez le contraire de "便宜 (piányi - bon marché)" :',
      zh: '选择“便宜”的反义词：',
    },
    questionText: 'What is the opposite of 便宜 (piányi)?',
    hanzi: '便宜',
    pinyin: 'piányi',
    options: [
      { id: 'opt-1', text: '贵 (guì - expensive)' },
      { id: 'opt-2', text: '新 (xīn - new)' },
      { id: 'opt-3', text: '大 (dà - big)' },
      { id: 'opt-4', text: '远 (yuǎn - far)' },
    ],
    correctAnswerId: 'opt-1',
    explanation: {
      en: '贵 (guì) means expensive, which is the opposite of 便宜 (piányi - cheap).',
      fr: '贵 (guì) signifie cher/coûteux, le contraire de 便宜 (bon marché).',
      zh: '“贵”表示价格高，与“便宜”互为反义词。',
    },
    points: 10,
  },
  {
    id: 'quiz-g-03',
    level: 'hsk2',
    skill: 'grammar',
    prompt: {
      en: 'Fill in the blank with the correct aspect particle:',
      fr: 'Complétez avec la particule d\'aspect correcte :',
      zh: '选择正确的动态助词填空：',
    },
    questionText: 'Choose the particle indicating past experience:',
    hanzi: '我去 ____ 一次北京，那里的烤鸭很好吃。',
    pinyin: 'Wǒ qù ____ yí cì Běijīng, nàlǐ de kǎoyā hěn hǎochī.',
    options: [
      { id: 'opt-1', text: '过 (guo - experiential)' },
      { id: 'opt-2', text: '着 (zhe - continuous)' },
      { id: 'opt-3', text: '得 (de - complement)' },
      { id: 'opt-4', text: '把 (bǎ - object marker)' },
    ],
    correctAnswerId: 'opt-1',
    explanation: {
      en: '过 (guo) marks past experiential aspect (have been to / have experienced).',
      fr: '过 (guo) indique une expérience passée (avoir déjà fait quelque chose).',
      zh: '动词后加“过”表示曾经有过某种经历。',
    },
    points: 10,
  },
  {
    id: 'quiz-g-04',
    level: 'hsk3',
    skill: 'grammar',
    prompt: {
      en: 'Select the correct word to complete the "不但...而且..." (not only... but also...) construction:',
      fr: 'Sélectionnez le terme correct pour compléter la structure "不但...而且..." :',
      zh: '选择恰当的关联词完成递进复句：',
    },
    questionText: 'Complete the sentence: 他不但会说汉语，____ 会写汉字。',
    hanzi: '他不但会说汉语，____ 会写汉字。',
    pinyin: 'Tā búdàn huì shuō Hànyǔ, ____ huì xiě Hànzì.',
    options: [
      { id: 'opt-1', text: '而且 (érqiě - moreover/also)' },
      { id: 'opt-2', text: '虽然 (suīrán - although)' },
      { id: 'opt-3', text: '因为 (yīnwèi - because)' },
      { id: 'opt-4', text: '如果 (rúguǒ - if)' },
    ],
    correctAnswerId: 'opt-1',
    explanation: {
      en: '不但 (búdàn)... 而且 (érqiě)... is the standard paired conjunction for progressive clauses (not only... but also...).',
      fr: '不但... 而且... forme la corrélation "non seulement... mais aussi...".',
      zh: '“不但……而且……”是标准的递进关系关联词搭配。',
    },
    points: 10,
  },
  {
    id: 'quiz-w-01',
    level: 'hsk3',
    skill: 'writing',
    prompt: {
      en: 'Assemble the words into the correct grammatically ordered sentence:',
      fr: 'Remettez les mots dans l\'ordre grammatical correct :',
      zh: '将下列词语连成完整的陈述句：',
    },
    questionText: 'Put the sentence components into correct word order:',
    passage: '① 这个问题   ② 我们   ③ 解决了   ④ 已经',
    options: [
      { id: 'opt-1', text: '我们已经解决了这个问题。' },
      { id: 'opt-2', text: '这个问题已经我们解决了。' },
      { id: 'opt-3', text: '已经我们解决了这个问题。' },
      { id: 'opt-4', text: '解决了我们已经这个问题。' },
    ],
    correctAnswerId: 'opt-1',
    explanation: {
      en: 'Standard S-Adv-V-O structure: 主语 (我们) + 状语 (已经) + 谓语 (解决+了) + 宾语 (这个问题).',
      fr: 'Structure standard Sujet-Adverbe-Verbe-Objet : 我们 (nous) + 已经 (déjà) + 解决了 (résolu) + 这个问题 (ce problème).',
      zh: '符合现代汉语规范主谓宾语序：主语（我们）+ 副词状语（已经）+ 动词谓语（解决+了）+ 宾语（这个问题）。',
    },
    points: 10,
  },
];

// Specialized collections for quizzes & drills
export const HSK2_QUIZ_QUESTIONS: QuizQuestion[] = PRACTICE_EXERCISES;
export const VOCAB_QUIZ_QUESTIONS: QuizQuestion[] = PRACTICE_EXERCISES.filter((q) => q.skill === 'vocabulary');
export const GRAMMAR_QUIZ_QUESTIONS: QuizQuestion[] = PRACTICE_EXERCISES.filter((q) => q.skill === 'grammar');

// Listening Practice Module
export interface ListeningExerciseItem {
  id: string;
  level: 'hsk1' | 'hsk2' | 'hsk3';
  audioText: string;
  pinyin: string;
  question: string;
  options: Array<{ id: string; text: string; pinyin?: string; hanzi?: string }>;
  correctAnswerId: string;
  explanation: MultiLingualText;
  points: number;
}

export const LISTENING_EXERCISES: ListeningExerciseItem[] = [
  {
    id: 'lis-01',
    level: 'hsk1',
    audioText: '喂，请问王医生在医院吗？',
    pinyin: 'Wèi, qǐngwèn Wáng yīshēng zài yīyuàn ma?',
    question: 'What is the speaker asking on the phone?',
    options: [
      { id: 'A', text: 'Is Doctor Wang at the hospital?' },
      { id: 'B', text: 'Is Teacher Wang in the classroom?' },
      { id: 'C', text: 'Where is the nearest train station?' },
      { id: 'D', text: 'What time does the store open?' },
    ],
    correctAnswerId: 'A',
    explanation: {
      en: 'The speaker asks "Wèi, qǐngwèn Wáng yīshēng zài yīyuàn ma?" (Hello, is Doctor Wang at the hospital?).',
      fr: 'L\'interlocuteur demande si le docteur Wang est à l\'hôpital.',
      zh: '录音问话：“喂，请问王医生在医院吗？”。',
    },
    points: 20,
  },
  {
    id: 'lis-02',
    level: 'hsk2',
    audioText: '我们周六下午两点在图书馆门口见，怎么样？',
    pinyin: 'Wǒmen zhōuliù xiàwǔ liǎng diǎn zài túshūguǎn ménkǒu jiàn, zěnmeyàng?',
    question: 'Where and when do the speakers agree to meet?',
    options: [
      { id: 'A', text: 'Saturday at 2:00 PM at the library gate' },
      { id: 'B', text: 'Sunday at 10:00 AM at the bookstore' },
      { id: 'C', text: 'Friday evening in the restaurant' },
      { id: 'D', text: 'Saturday morning at the park' },
    ],
    correctAnswerId: 'A',
    explanation: {
      en: 'They agreed to meet on Saturday at 2 PM at the library entrance (周六下午两点在图书馆门口).',
      fr: 'Rendez-vous fixé le samedi à 14h devant la bibliothèque.',
      zh: '对话约定周六下午两点在图书馆门口见。',
    },
    points: 20,
  },
  {
    id: 'lis-03',
    level: 'hsk3',
    audioText: '虽然今天下大雨，但是所有的学生都按时到了教室。',
    pinyin: 'Suīrán jīntiān xià dà yǔ, dànshì suǒyǒu de xuésheng dōu ànshí dào le jiàoshì.',
    question: 'What happened despite the heavy rain?',
    options: [
      { id: 'A', text: 'All students arrived at the classroom on time' },
      { id: 'B', text: 'The class was cancelled until tomorrow' },
      { id: 'C', text: 'Several students were delayed by traffic' },
      { id: 'D', text: 'The exam was postponed' },
    ],
    correctAnswerId: 'A',
    explanation: {
      en: '"所有的学生都按时到了教室" confirms all students arrived on time.',
      fr: 'Tous les étudiants sont arrivés à l\'heure en classe malgré la forte pluie.',
      zh: '转折分句指明所有学生均按时到达教室。',
    },
    points: 20,
  },
];

// Reading Practice Module
export interface ReadingExerciseItem {
  id: string;
  level: 'hsk1' | 'hsk2' | 'hsk3';
  passage: string;
  pinyin: string;
  question: string;
  options: Array<{ id: string; text: string }>;
  correctAnswerId: string;
  explanation: MultiLingualText;
}

export const READING_EXERCISES: ReadingExerciseItem[] = [
  {
    id: 'read-01',
    level: 'hsk1',
    passage: '我叫李明，我是北京大学的留学生。我很喜欢喝中国茶，每天早上都要喝一杯绿茶。',
    pinyin: 'Wǒ jiào Lǐ Míng, wǒ shì Běijīng Dàxué de liúxuéshēng. Wǒ hěn xǐhuan hē Zhōngguó chá, měitiān zǎoshang dōu yào hē yì bēi lǜchá.',
    question: 'What does Li Ming drink every morning?',
    options: [
      { id: 'opt-1', text: 'Coffee (咖啡)' },
      { id: 'opt-2', text: 'A cup of green tea (一杯绿茶)' },
      { id: 'opt-3', text: 'Milk (牛奶)' },
      { id: 'opt-4', text: 'Fruit juice (果汁)' },
    ],
    correctAnswerId: 'opt-2',
    explanation: {
      en: 'The passage explicitly says "每天早上都要喝一杯绿茶" (drinks a cup of green tea every morning).',
      fr: 'Le texte précise qu\'il boit une tasse de thé vert chaque matin.',
      zh: '短文中明确表述“每天早上都要喝一杯绿茶”。',
    },
  },
  {
    id: 'read-02',
    level: 'hsk2',
    passage: '昨天是我朋友大卫的生日。我们十几个同学一起去中国饭馆吃火锅，还给他送了一个大蛋糕。大卫非常高兴。',
    pinyin: 'Zuótiān shì wǒ péngyou Dàwèi de shēngrì. Wǒmen shí jǐ ge tóngxué yìqǐ qù Zhōngguó fànguǎn chī huǒguō, hái gěi tā sòng le yí ge dà dàngāo. Dàwèi fēicháng gāoxìng.',
    question: 'How did the classmates celebrate David\'s birthday?',
    options: [
      { id: 'opt-1', text: 'Ate hotpot together at a Chinese restaurant and gave a cake' },
      { id: 'opt-2', text: 'Went to watch a movie at the shopping mall' },
      { id: 'opt-3', text: 'Took a high-speed train trip to Shanghai' },
      { id: 'opt-4', text: 'Stayed in the library preparing for exams' },
    ],
    correctAnswerId: 'opt-1',
    explanation: {
      en: 'They ate hotpot at a Chinese restaurant and gave a big cake (吃火锅，还给他送了一个大蛋糕).',
      fr: 'Ils ont mangé une fondue chinoise au restaurant et offert un gâteau.',
      zh: '文段记述大家一起吃火锅并赠送大蛋糕为大卫庆生。',
    },
  },
  {
    id: 'read-03',
    level: 'hsk3',
    passage: '运动不仅能让我们保持健康的身体，还能帮助我们减轻工作和学习的压力。无论多忙，每天抽出半小时散步都是非常有益的。',
    pinyin: 'Yùndòng bùjǐn néng ràng wǒmen bǎochí jiànkāng de shēntǐ, hái néng bāngzhù wǒmen jiǎnqīng gōngzuò hé xuéxí de yālì. Wúlùn duō máng, měitiān chōuchū bàn xiǎoshí sànbù dōu shì fēicháng yǒuyì de.',
    question: 'According to the passage, what is a key benefit of daily physical activity?',
    options: [
      { id: 'opt-1', text: 'Maintains health and relieves study & work stress' },
      { id: 'opt-2', text: 'Allows you to work without sleep' },
      { id: 'opt-3', text: 'Replaces the need to eat balanced meals' },
      { id: 'opt-4', text: 'Saves money on transportation' },
    ],
    correctAnswerId: 'opt-1',
    explanation: {
      en: 'The text highlights keeping a healthy body and relieving stress (保持健康，减轻压力).',
      fr: 'L\'exercice préserve la santé physique et soulage le stress.',
      zh: '文段强调运动不仅保持健康，还能减轻学习与工作压力。',
    },
  },
];

// Writing Sentence Ordering Practice Module
export interface WritingSentenceExercise {
  id: string;
  level: 'hsk1' | 'hsk2' | 'hsk3';
  translation: MultiLingualText;
  scrambledTokens: string[];
  correctOrder: string[];
  pinyin: string;
  explanation: MultiLingualText;
}

export const WRITING_SENTENCE_EXERCISES: WritingSentenceExercise[] = [
  {
    id: 'w-01',
    level: 'hsk2',
    translation: {
      en: 'He went to the airport by taxi.',
      fr: 'Il est allé à l\'aéroport en taxi.',
      zh: '他是坐出租车去机场的。',
    },
    scrambledTokens: ['去机场的', '坐出租车', '他是'],
    correctOrder: ['他是', '坐出租车', '去机场的'],
    pinyin: 'Tā shì zuò chūzūchē qù jīchǎng de.',
    explanation: {
      en: 'Emphasis construction 是...的 for manner/method of transportation.',
      fr: 'Structure d\'emphase 是...的 indiquant le mode de transport.',
      zh: '“是……的”结构用来强调出行方式。',
    },
  },
  {
    id: 'w-02',
    level: 'hsk3',
    translation: {
      en: 'Please hand the homework over to me.',
      fr: 'Veuillez me remettre vos devoirs s\'il vous plaît.',
      zh: '请把作业交给我。',
    },
    scrambledTokens: ['交给我', '请把', '作业'],
    correctOrder: ['请把', '作业', '交给我'],
    pinyin: 'Qǐng bǎ zuòyè jiāo gěi wǒ.',
    explanation: {
      en: 'Standard 把 structure: 请 + 把 + Object (作业) + Verb phrase (交给我).',
      fr: 'Structure en 把 : 请 + 把 + Objet (作业) + Verbe (交给我).',
      zh: '规范“把”字句结构：请 + 把 + 作业 + 交给我。',
    },
  },
  {
    id: 'w-03',
    level: 'hsk3',
    translation: {
      en: 'We have already solved this difficult issue.',
      fr: 'Nous avons déjà résolu ce problème complexe.',
      zh: '我们已经解决了这个问题。',
    },
    scrambledTokens: ['这个问题', '已经解决了', '我们'],
    correctOrder: ['我们', '已经解决了', '这个问题'],
    pinyin: 'Wǒmen yǐjīng jiějué le zhè ge wèntí.',
    explanation: {
      en: 'Standard S-Adv-V-O order in Mandarin.',
      fr: 'Ordre canonique Sujet - Adverbe - Verbe - Complément.',
      zh: '标准主谓宾语序：主语（我们）+ 状语动词（已经解决+了）+ 宾语（这个问题）。',
    },
  },
];

