// Runtime imports keep the .js extension: the Laoshi API (Vercel, Node ESM) loads this file too.
import type { HskLesson, HskLessonExtras } from '../types';
import { buildGeneratedLessons, buildVocabQuiz } from './generatedLessons.js';
import { LESSON_CONTENT } from './lessonContent.js';
import { HSK1_EXTRAS, HSK1_ORDER } from './hsk1Course.js';
import { HSK2_EXTRAS, HSK2_ORDER, HSK3_EXTRAS, HSK3_ORDER } from './hsk23Course.js';
import { LESSON_SCENES } from './lessonScenes.js';

const HAND_WRITTEN_LESSONS: HskLesson[] = [
  // =========================================================================
  // HSK 1 LESSONS (100% FREE - ALL LESSONS INCLUDED)
  // =========================================================================
  {
    id: 'lesson-hsk1-01',
    level: 'hsk1',
    lessonNumber: 1,
    isFree: true,
    estimatedMinutes: 20,
    wordCount: 6,
    title: {
      en: 'Lesson 1: Hello & Greetings',
      fr: 'Leçon 1 : Bonjour & Salutations',
      zh: '第1课：你好与基础问候',
    },
    subtitle: {
      en: 'Essential greetings, polite phrases, and basic pinyin tones',
      fr: 'Salutations indispensables, politesse et tons pinyin de base',
      zh: '核心问候语、礼貌用语与基础声调',
    },
    description: {
      en: 'Learn standard greetings (你好, 谢谢, 再见), subject pronouns, and how to introduce yourself respectfully.',
      fr: 'Apprenez les salutations de base (你好, 谢谢, 再见), les pronoms sujets et comment vous présenter.',
      zh: '学习基本问候语（你好、谢谢、再见）、人称代词以及基础礼貌表达。',
    },
    vocabulary: [
      { hanzi: '你好', pinyin: 'nǐ hǎo', meaning: { en: 'Hello', fr: 'Bonjour', zh: '你好' } },
      { hanzi: '您好', pinyin: 'nín hǎo', meaning: { en: 'Hello (polite / formal)', fr: 'Bonjour (poli / formel)', zh: '您好' } },
      { hanzi: '谢谢', pinyin: 'xièxie', meaning: { en: 'Thank you', fr: 'Merci', zh: '感谢' } },
      { hanzi: '不客气', pinyin: 'bú kèqi', meaning: { en: "You're welcome", fr: 'De rien / Je vous en prie', zh: '不客气' } },
      { hanzi: '再见', pinyin: 'zàijiàn', meaning: { en: 'Goodbye', fr: 'Au revoir', zh: '再见' } },
      { hanzi: '对不起', pinyin: 'duìbuqǐ', meaning: { en: 'Sorry / Excuse me', fr: 'Pardon / Désolé', zh: '抱歉' } },
      { hanzi: '没关系', pinyin: 'méi guānxi', meaning: { en: "It doesn't matter / That's alright", fr: "Ce n'est rien / Pas grave", zh: '没关系' } },
    ],
    grammarPoints: [
      {
        title: {
          en: 'Tone Sandhi: Third Tone + Third Tone',
          fr: 'Changement de ton : 3e ton + 3e ton',
          zh: '三声变调规则',
        },
        structure: '3rd tone + 3rd tone ➔ 2nd tone + 3rd tone (nǐ + hǎo ➔ ní hǎo)',
        explanation: {
          en: 'When two third tones appear together, the first one is pronounced as a second (rising) tone.',
          fr: 'Lorsque deux 3e tons se suivent, le premier se prononce au 2e ton montant.',
          zh: '两个三声字连读时，前一个字变为二声。',
        },
        example: {
          hanzi: '你好！',
          pinyin: 'Nǐ hǎo!',
          translation: { en: 'Hello!', fr: 'Bonjour !', zh: '你好！' },
        },
      },
    ],
    dialogue: [
      {
        speaker: '王老师',
        hanzi: '你好！欢迎来到中文班。',
        pinyin: 'Nǐ hǎo! Huānyíng lái dào Zhōngwén bān.',
        meaning: {
          en: 'Hello! Welcome to the Chinese class.',
          fr: 'Bonjour ! Bienvenue dans le cours de chinois.',
          zh: '你好！欢迎来到中文班。',
        },
        audioText: '你好！欢迎来到中文班。',
      },
      {
        speaker: '大卫',
        hanzi: '老师您好！谢谢老师。',
        pinyin: 'Lǎoshī nín hǎo! Xièxie lǎoshī.',
        meaning: {
          en: 'Hello teacher! Thank you, teacher.',
          fr: 'Bonjour professeur ! Merci professeur.',
          zh: '老师您好！谢谢老师。',
        },
        audioText: '老师您好！谢谢老师。',
      },
      {
        speaker: '王老师',
        hanzi: '不客气，请坐！',
        pinyin: 'Bú kèqi, qǐng zuò!',
        meaning: {
          en: "You're welcome, please sit down!",
          fr: 'De rien, asseyez-vous s\'il vous plaît !',
          zh: '不客气，请坐！',
        },
        audioText: '不客气，请坐！',
      },
    ],
    quickQuiz: [
      {
        id: 'l1-q1',
        level: 'hsk1',
        skill: 'vocabulary',
        prompt: {
          en: 'What is the polite response to "谢谢 (xièxie)"?',
          fr: 'Quelle est la réponse polie à "谢谢 (xièxie)" ?',
          zh: '听到“谢谢”时的礼貌回答是？',
        },
        options: [
          { id: 'A', text: '不客气 (Bú kèqi)' },
          { id: 'B', text: '对不起 (Duìbuqǐ)' },
          { id: 'C', text: '再见 (Zàijiàn)' },
          { id: 'D', text: '没关系 (Méi guānxi)' },
        ],
        correctAnswerId: 'A',
        explanation: {
          en: '不客气 (Bú kèqi) means "You\'re welcome" in response to 谢谢.',
          fr: '不客气 (Bú kèqi) signifie "De rien" en réponse à 谢谢.',
          zh: '“不客气”用于回应他人的感谢。',
        },
        points: 10,
      },
    ],
  },
  {
    id: 'lesson-hsk1-02',
    level: 'hsk1',
    lessonNumber: 2,
    isFree: true,
    estimatedMinutes: 25,
    wordCount: 6,
    title: {
      en: 'Lesson 2: Numbers & Time',
      fr: 'Leçon 2 : Chiffres & Heure',
      zh: '第2课：数字与时间表达',
    },
    subtitle: {
      en: 'Count from 1 to 100, tell clock time, and express dates',
      fr: 'Compter de 1 à 100, donner l\'heure et exprimer la date',
      zh: '掌握 1-100 计数、钟点表达与日期常识',
    },
    description: {
      en: 'Master numbers (一, 二, 三, 十, 百), clock time (点, 分), days of the week, and asking for time.',
      fr: 'Maîtrisez les nombres (一 à 百), l\'heure (点, 分), les jours de la semaine et demander l\'heure.',
      zh: '掌握基数词、钟点（点、分）、星期与问时间句型。',
    },
    vocabulary: [
      { hanzi: '现在', pinyin: 'xiànzài', meaning: { en: 'Now', fr: 'Maintenant', zh: '现在' } },
      { hanzi: '点', pinyin: 'diǎn', meaning: { en: "o'clock / dot", fr: 'Heure (horloge)', zh: '点钟' } },
      { hanzi: '分', pinyin: 'fēn', meaning: { en: 'Minute', fr: 'Minute', zh: '分钟' } },
      { hanzi: '今天', pinyin: 'jīntiān', meaning: { en: 'Today', fr: "Aujourd'hui", zh: '今天' } },
      { hanzi: '明天', pinyin: 'míngtiān', meaning: { en: 'Tomorrow', fr: 'Demain', zh: '明天' } },
      { hanzi: '昨天', pinyin: 'zuótiān', meaning: { en: 'Yesterday', fr: 'Hier', zh: '昨天' } },
    ],
    grammarPoints: [
      {
        title: {
          en: 'Asking the Time in Mandarin',
          fr: 'Demander l\'heure en chinois',
          zh: '询问时间的句型',
        },
        structure: '现在几点了？ (Xiànzài jǐ diǎn le?) ➔ 现在 + [Number] + 点',
        explanation: {
          en: 'Use "几点 (jǐ diǎn)" to ask for the hour.',
          fr: 'Utilisez "几点 (jǐ diǎn)" pour demander quelle heure il est.',
          zh: '使用疑问代词“几”询问钟点。',
        },
        example: {
          hanzi: '现在上午十点三十分。',
          pinyin: 'Xiànzài shàngwǔ shí diǎn sānshí fēn.',
          translation: { en: "It is 10:30 AM right now.", fr: 'Il est 10h30 du matin actuellement.', zh: '现在上午十点三十分。' },
        },
      },
    ],
    dialogue: [
      {
        speaker: '李朋',
        hanzi: '请问，现在几点了？',
        pinyin: 'Qǐngwèn, xiànzài jǐ diǎn le?',
        meaning: { en: 'Excuse me, what time is it now?', fr: 'Excusez-moi, quelle heure est-il ?', zh: '请问，现在几点了？' },
        audioText: '请问，现在几点了？',
      },
      {
        speaker: '王芳',
        hanzi: '现在下午两点十分。',
        pinyin: 'Xiànzài xiàwǔ liǎng diǎn shí fēn.',
        meaning: { en: 'It is 2:10 in the afternoon.', fr: 'Il est 14h10.', zh: '现在下午两点十分。' },
        audioText: '现在下午两点十分。',
      },
    ],
    quickQuiz: [
      {
        id: 'l2-q1',
        level: 'hsk1',
        skill: 'vocabulary',
        prompt: {
          en: 'How do you say "3:00 PM" in Chinese?',
          fr: 'Comment dit-on "15h00" en chinois ?',
          zh: '“下午三点”的正确汉语是？',
        },
        options: [
          { id: 'A', text: '下午三点 (Xiàwǔ sān diǎn)' },
          { id: 'B', text: '上午三点 (Shàngwǔ sān diǎn)' },
          { id: 'C', text: '中午三点 (Zhōngwǔ sān diǎn)' },
          { id: 'D', text: '晚上三点 (Wǎnshang sān diǎn)' },
        ],
        correctAnswerId: 'A',
        explanation: {
          en: '下午 (afternoon) + 三点 (3:00).',
          fr: '下午 (après-midi) + 三点 (3 heures).',
          zh: '下午指午后时间。',
        },
        points: 10,
      },
    ],
  },
  {
    id: 'lesson-hsk1-03',
    level: 'hsk1',
    lessonNumber: 3,
    isFree: true,
    estimatedMinutes: 25,
    wordCount: 2,
    title: {
      en: 'Lesson 3: Family & Nationality',
      fr: 'Leçon 3 : Famille & Nationalités',
      zh: '第3课：家庭成员与国籍',
    },
    subtitle: {
      en: 'Introduce your family members, countries, and nationalities',
      fr: 'Présenter sa famille, ses origines et nationalités',
      zh: '介绍家庭成员、国家与国籍归属',
    },
    description: {
      en: 'Learn words like 爸爸, 妈妈, 儿子, 女儿, and express nationalities using [Country] + 人.',
      fr: 'Apprenez les membres de la famille et exprimez la nationalité avec [Pays] + 人.',
      zh: '学习亲属称谓与以“[国家] + 人”构成国籍表达法。',
    },
    vocabulary: [
      { hanzi: '爸爸', pinyin: 'bàba', meaning: { en: 'Father', fr: 'Père', zh: '爸爸' } },
      { hanzi: '妈妈', pinyin: 'māma', meaning: { en: 'Mother', fr: 'Mère', zh: '妈妈' } },
      { hanzi: '中国人', pinyin: 'Zhōngguó rén', meaning: { en: 'Chinese person', fr: 'Chinois(e)', zh: '中国人' } },
      { hanzi: '法国人', pinyin: 'Fǎguó rén', meaning: { en: 'French person', fr: 'Français(e)', zh: '法国人' } },
    ],
    grammarPoints: [
      {
        title: { en: 'Possessive Particle "的 (de)"', fr: 'Particule de possession "的 (de)"', zh: '结构助词“的”' },
        structure: 'Noun / Pronoun + 的 + Noun (我 的 朋友 = My friend)',
        explanation: {
          en: 'Use "的" to link a possessor to an object.',
          fr: 'La particule "的" indique l\'appartenance.',
          zh: '“的”连接定语与中心语表示领属。',
        },
        example: {
          hanzi: '这是我的汉语老师。',
          pinyin: 'Zhè shì wǒ de Hànyǔ lǎoshī.',
          translation: { en: 'This is my Chinese teacher.', fr: 'C\'est mon professeur de chinois.', zh: '这是我的汉语老师。' },
        },
      },
    ],
    dialogue: [
      {
        speaker: '安娜',
        hanzi: '你是哪国人？',
        pinyin: 'Nǐ shì nǎ guó rén?',
        meaning: { en: 'Which country are you from?', fr: 'De quelle nationalité es-tu ?', zh: '你是哪国人？' },
        audioText: '你是哪国人？',
      },
      {
        speaker: '王明',
        hanzi: '我是中国人。你是法国人吗？',
        pinyin: 'Wǒ shì Zhōngguó rén. Nǐ shì Fǎguó rén ma?',
        meaning: { en: 'I am Chinese. Are you French?', fr: 'Je suis chinois. Es-tu française ?', zh: '我是中国人。你是法国人吗？' },
        audioText: '我是中国人。你是法国人吗？',
      },
    ],
    quickQuiz: [],
  },

  // =========================================================================
  // HSK 2 LESSONS (LESSON 1 & LESSON 2 ARE FREE PREVIEWS, 3+ ARE PRO)
  // =========================================================================
  {
    id: 'lesson-hsk2-01',
    level: 'hsk2',
    lessonNumber: 1,
    isFree: true, // FREE LESSON 1
    estimatedMinutes: 30,
    wordCount: 5,
    title: {
      en: 'Lesson 1: Daily Routine & Transport',
      fr: 'Leçon 1 : Routine quotidienne & Transports',
      zh: '第1课：日常作息与交通出行',
    },
    subtitle: {
      en: 'Describe how you travel, compare transport speeds, and schedule days',
      fr: 'Décrire ses déplacements, comparer la vitesse et organiser sa journée',
      zh: '描述出行方式、交通工具对比与日常时刻表',
    },
    description: {
      en: 'Master everyday transportation vocabulary (出租车, 公共汽车, 火车站, 飞机) and the essential comparison structure (比).',
      fr: 'Maîtrisez les transports et la structure fondamentale de comparaison (比).',
      zh: '掌握出行高频词与“比”字比较句。',
    },
    vocabulary: [
      { hanzi: '出租车', pinyin: 'chūzūchē', meaning: { en: 'Taxi', fr: 'Taxi', zh: '出租车' } },
      { hanzi: '公共汽车', pinyin: 'gōnggòng qìchē', meaning: { en: 'Bus', fr: 'Bus', zh: '公交车' } },
      { hanzi: '机场', pinyin: 'jīchǎng', meaning: { en: 'Airport', fr: 'Aéroport', zh: '机场' } },
      { hanzi: '快', pinyin: 'kuài', meaning: { en: 'Fast', fr: 'Rapide', zh: '快捷' } },
      { hanzi: '慢', pinyin: 'màn', meaning: { en: 'Slow', fr: 'Lent', zh: '缓慢' } },
      { hanzi: '便宜', pinyin: 'piányi', meaning: { en: 'Cheap / Inexpensive', fr: 'Bon marché', zh: '便宜' } },
    ],
    grammarPoints: [
      {
        title: {
          en: 'Comparison with 比 (bǐ)',
          fr: 'La comparaison avec 比 (bǐ)',
          zh: '“比”字比较句',
        },
        structure: 'A + 比 + B + Adjective (+ 得多 / 一点儿)',
        explanation: {
          en: 'To say A is more [adj] than B, use A + 比 + B + Adjective.',
          fr: 'Pour exprimer que A est plus [adj] que B, utilisez A + 比 + B + Adjectif.',
          zh: '表示两者比较差异，采用 A 比 B + 形容词。',
        },
        example: {
          hanzi: '坐地铁比坐公共汽车快得多。',
          pinyin: 'Zuò dìtiě bǐ zuò gōnggòng qìchē kuài de duō.',
          translation: {
            en: 'Taking the subway is much faster than taking the bus.',
            fr: 'Prendre le métro est beaucoup plus rapide que le bus.',
            zh: '坐地铁比坐公共汽车快得多。',
          },
        },
      },
    ],
    dialogue: [
      {
        speaker: '小林',
        hanzi: '我们怎么去飞机场？坐出租车还是坐地铁？',
        pinyin: 'Wǒmen zěnme qù fēijīchǎng? Zuò chūzūchē háishi zuò dìtiě?',
        meaning: {
          en: 'How do we go to the airport? By taxi or by subway?',
          fr: 'Comment allons-nous à l\'aéroport ? En taxi ou en métro ?',
          zh: '我们怎么去飞机场？坐出租车还是坐地铁？',
        },
        audioText: '我们怎么去飞机场？坐出租车还是坐地铁？',
      },
      {
        speaker: '大卫',
        hanzi: '坐地铁吧，现在路上堵车，地铁比出租车快得多。',
        pinyin: 'Zuò dìtiě ba, xiànzài lùshang dǔchē, dìtiě bǐ chūzūchē kuài de duō.',
        meaning: {
          en: 'Let\'s take the subway. There is traffic now, the subway is much faster than a taxi.',
          fr: 'Prenons le métro, il y a des bouchons, le métro est bien plus rapide.',
          zh: '坐地铁吧，现在路上堵车，地铁比出租车快得多。',
        },
        audioText: '坐地铁吧，现在路上堵车，地铁比出租车快得多。',
      },
    ],
    quickQuiz: [
      {
        id: 'h2-l1-q1',
        level: 'hsk2',
        skill: 'grammar',
        prompt: {
          en: 'Which sentence correctly says "Apples are cheaper than watermelons"?',
          fr: 'Quelle phrase dit correctement "Les pommes sont moins chères que les pastèques" ?',
          zh: '表示“苹果比西瓜便宜”的正确语序是？',
        },
        options: [
          { id: 'A', text: '苹果比西瓜便宜。' },
          { id: 'B', text: '比苹果西瓜便宜。' },
          { id: 'C', text: '西瓜苹果比便宜。' },
          { id: 'D', text: '苹果西瓜便宜比。' },
        ],
        correctAnswerId: 'A',
        explanation: {
          en: 'Subject A (苹果) + 比 + Subject B (西瓜) + Adjective (便宜).',
          fr: 'Sujet A (苹果) + 比 + Sujet B (西瓜) + Adjectif (便宜).',
          zh: '“比”字句规范句型为 A 比 B + 形容词。',
        },
        points: 10,
      },
    ],
  },
  {
    id: 'lesson-hsk2-02',
    level: 'hsk2',
    lessonNumber: 2,
    isFree: true, // FREE LESSON 2
    estimatedMinutes: 30,
    wordCount: 2,
    title: {
      en: 'Lesson 2: Shopping & Dining Out',
      fr: 'Leçon 2 : Achats & Restaurant',
      zh: '第2课：购物与餐厅点餐',
    },
    subtitle: {
      en: 'Ask for prices, order dishes, express preferences and quantities',
      fr: 'Demander l\'addition, commander des plats et exprimer ses goûts',
      zh: '点餐交流、询问价格与喜好表达',
    },
    description: {
      en: 'Learn how to order food (服务员, 点菜, 菜单), ask for the bill (买单), and use auxiliary verbs like 想 and 要.',
      fr: 'Apprenez à commander au restaurant, demander l\'addition et employer 想 / 要.',
      zh: '掌握餐厅高频词汇与能愿动词用法。',
    },
    vocabulary: [
      { hanzi: '服务员', pinyin: 'fúwùyuán', meaning: { en: 'Waiter / Server', fr: 'Serveur / Serveuse', zh: '服务员' } },
      { hanzi: '菜单', pinyin: 'càidān', meaning: { en: 'Menu', fr: 'Menu / Carte', zh: '菜单' } },
      { hanzi: '好吃', pinyin: 'hǎochī', meaning: { en: 'Delicious', fr: 'Délicieux', zh: '美味' } },
      { hanzi: '买单', pinyin: 'mǎidān', meaning: { en: 'Pay the bill', fr: 'Régler l\'addition', zh: '结账' } },
      { hanzi: '双', pinyin: 'shuāng', meaning: { en: 'Pair (measure word)', fr: 'Paire (classificateur)', zh: '双' } },
      { hanzi: '件', pinyin: 'jiàn', meaning: { en: 'Piece (measure for clothes)', fr: 'Pièce (vêtements)', zh: '件' } },
    ],
    grammarPoints: [
      {
        title: {
          en: 'Optative Verbs: 想 (xiǎng) vs 要 (yào)',
          fr: 'Verbes de volonté : 想 (xiǎng) vs 要 (yào)',
          zh: '能愿动词“想”与“要”的辨析',
        },
        structure: 'Subject + 想 / 要 + Verb + Object',
        explanation: {
          en: '“想” expresses a wish or desire ("would like to"). “要” expresses determination or necessity ("want to / will").',
          fr: '“想” exprime un souhait ("aimerait"). “要” exprime une décision ferme ou un besoin ("vouloir / devoir").',
          zh: '“想”多表愿望与想法，“要”多表决意与将要做。',
        },
        example: {
          hanzi: '我想尝尝这个北京烤鸭。',
          pinyin: 'Wǒ xiǎng chángchang zhè ge Běijīng kǎoyā.',
          translation: {
            en: 'I would like to taste this Peking duck.',
            fr: 'J\'aimerais goûter ce canard laqué de Pékin.',
            zh: '我想尝尝这个北京烤鸭。',
          },
        },
      },
    ],
    dialogue: [
      {
        speaker: '顾客',
        hanzi: '服务员，请给我们看一份菜单。',
        pinyin: 'Fúwùyuán, qǐng gěi wǒmen kàn yí fèn càidān.',
        meaning: { en: 'Waiter, please show us a menu.', fr: 'Serveur, pouvez-vous nous apporter le menu ?', zh: '服务员，请给我们看一份菜单。' },
        audioText: '服务员，请给我们看一份菜单。',
      },
      {
        speaker: '服务员',
        hanzi: '好的，这是菜单。请问您想喝点儿什么？',
        pinyin: 'Hǎo de, zhè shì càidān. Qǐngwèn nín xiǎng hē diǎnr shénme?',
        meaning: { en: 'Sure, here is the menu. What would you like to drink?', fr: 'Très bien, voici la carte. Que désirez-vous boire ?', zh: '好的，这是菜单。请问您想喝点儿什么？' },
        audioText: '好的，这是菜单。请问您想喝点儿什么？',
      },
    ],
    quickQuiz: [
      {
        id: 'h2-l2-q1',
        level: 'hsk2',
        skill: 'vocabulary',
        prompt: {
          en: 'What is the measure word for a pair of shoes (鞋)?',
          fr: 'Quel est le spécificatif pour une paire de chaussures (鞋) ?',
          zh: '一____ 鞋子（填入恰当量词）：',
        },
        options: [
          { id: 'A', text: '双 (shuāng)' },
          { id: 'B', text: '件 (jiàn)' },
          { id: 'C', text: '个 (gè)' },
          { id: 'D', text: '本 (běn)' },
        ],
        correctAnswerId: 'A',
        explanation: {
          en: '双 (shuāng) is the measure word for pairs (shoes, chopsticks).',
          fr: '双 (shuāng) est le classificateur pour les paires.',
          zh: '成双成对的物品（如鞋、筷子）用量词“双”。',
        },
        points: 10,
      },
    ],
  },
  {
    id: 'lesson-hsk2-03',
    level: 'hsk2',
    lessonNumber: 3,
    isFree: false, // PRO ONLY
    estimatedMinutes: 35,
    wordCount: 11,
    title: {
      en: 'Lesson 3: Health & Doctor Visit',
      fr: 'Leçon 3 : Santé & Consultation médicale',
      zh: '第3课：身体健康与就医',
    },
    subtitle: {
      en: 'Describe symptoms, understand medical advice, and talk about weather health',
      fr: 'Décrire des symptômes, comprendre les conseils d\'un médecin',
      zh: '描述身体不适、理解医嘱与健康建议',
    },
    description: {
      en: 'Learn words like 生病, 疼, 药, 舒服, and structures for giving advice (要, 别).',
      fr: 'Apprenez le vocabulaire de la santé (生病, 疼, 药, 舒服) et les tournures de conseil (别, 要).',
      zh: '掌握就医核心词汇（生病、疼、药、舒服）与医嘱建议句型（要、别）。',
    },
    vocabulary: [
      { hanzi: '生病', pinyin: 'shēngbìng', meaning: { en: 'to fall ill', fr: 'tomber malade', zh: '生病' } },
      { hanzi: '病', pinyin: 'bìng', meaning: { en: 'illness; to be ill', fr: 'maladie; être malade', zh: '病' } },
      { hanzi: '医生', pinyin: 'yīshēng', meaning: { en: 'doctor', fr: 'médecin', zh: '医生' } },
      { hanzi: '医院', pinyin: 'yīyuàn', meaning: { en: 'hospital', fr: 'hôpital', zh: '医院' } },
      { hanzi: '药', pinyin: 'yào', meaning: { en: 'medicine', fr: 'médicament', zh: '药' } },
      { hanzi: '身体', pinyin: 'shēntǐ', meaning: { en: 'body; health', fr: 'corps; santé', zh: '身体' } },
      { hanzi: '疼', pinyin: 'téng', meaning: { en: 'sore; to hurt', fr: 'douloureux; avoir mal', zh: '疼' } },
      { hanzi: '舒服', pinyin: 'shūfu', meaning: { en: 'comfortable', fr: 'confortable; se sentir bien', zh: '舒服' } },
      { hanzi: '休息', pinyin: 'xiūxi', meaning: { en: 'to rest', fr: 'se reposer', zh: '休息' } },
      { hanzi: '睡觉', pinyin: 'shuìjiào', meaning: { en: 'to sleep; to go to bed', fr: 'dormir; se coucher', zh: '睡觉' } },
      { hanzi: '别', pinyin: 'bié', meaning: { en: 'don\'t', fr: 'ne… pas (défense)', zh: '别' } },
    ],
    grammarPoints: [],
    dialogue: [],
    quickQuiz: [],
  },
  {
    id: 'lesson-hsk2-04',
    level: 'hsk2',
    lessonNumber: 4,
    isFree: false, // PRO ONLY
    estimatedMinutes: 35,
    wordCount: 15,
    title: {
      en: 'Lesson 4: Hobbies, Sports & Leisure',
      fr: 'Leçon 4 : Loisirs, Sports & Passe-temps',
      zh: '第4课：兴趣爱好与文体活动',
    },
    subtitle: {
      en: 'Talk about soccer, swimming, dancing, and weekend plans',
      fr: 'Parler de football, natation, danse et projets du week-end',
      zh: '谈论足球、游泳、跳舞与周末文娱规划',
    },
    description: {
      en: 'Master verbs for leisure activities (踢足球, 游泳, 唱, 跳舞) and the aspect particle 过.',
      fr: 'Maîtrisez les loisirs et la particule d\'expérience passée 过.',
      zh: '掌握文体活动表达与动态助词“过”。',
    },
    vocabulary: [
      { hanzi: '爱好', pinyin: 'àihào', meaning: { en: 'hobby; to like', fr: 'loisir; aimer', zh: '爱好' } },
      { hanzi: '运动', pinyin: 'yùndòng', meaning: { en: 'sport; to exercise', fr: 'sport; faire du sport', zh: '运动' } },
      { hanzi: '跑步', pinyin: 'pǎobù', meaning: { en: 'to run; to jog', fr: 'courir; faire du jogging', zh: '跑步' } },
      { hanzi: '游泳', pinyin: 'yóuyǒng', meaning: { en: 'to swim; swimming', fr: 'nager; natation', zh: '游泳' } },
      { hanzi: '踢', pinyin: 'tī', meaning: { en: 'to kick', fr: 'donner un coup de pied; jouer (au foot)', zh: '踢' } },
      { hanzi: '足球', pinyin: 'zúqiú', meaning: { en: 'football; soccer', fr: 'football', zh: '足球' } },
      { hanzi: '篮球', pinyin: 'lánqiú', meaning: { en: 'basketball', fr: 'basket-ball', zh: '篮球' } },
      { hanzi: '跳舞', pinyin: 'tiàowǔ', meaning: { en: 'to dance', fr: 'danser', zh: '跳舞' } },
      { hanzi: '唱', pinyin: 'chàng', meaning: { en: 'to sing', fr: 'chanter', zh: '唱' } },
      { hanzi: '画', pinyin: 'huà', meaning: { en: 'to draw; painting', fr: 'dessiner; peinture', zh: '画' } },
      { hanzi: '旅游', pinyin: 'lǚyóu', meaning: { en: 'to travel; tourism', fr: 'voyager; tourisme', zh: '旅游' } },
      { hanzi: '有意思', pinyin: 'yǒu yìsi', meaning: { en: 'interesting', fr: 'intéressant', zh: '有意思' } },
      { hanzi: '一起', pinyin: 'yìqǐ', meaning: { en: 'together', fr: 'ensemble', zh: '一起' } },
      { hanzi: '球', pinyin: 'qiú', meaning: { en: 'ball', fr: 'balle; ballon', zh: '球' } },
      { hanzi: '玩', pinyin: 'wán', meaning: { en: 'to play; to have fun', fr: 'jouer; s\'amuser', zh: '玩' } },
    ],
    grammarPoints: [],
    dialogue: [],
    quickQuiz: [],
  },

  // =========================================================================
  // HSK 3 LESSONS (LESSON 1 & LESSON 2 ARE FREE PREVIEWS, 3+ ARE PRO)
  // =========================================================================
  {
    id: 'lesson-hsk3-01',
    level: 'hsk3',
    lessonNumber: 1,
    isFree: true, // FREE LESSON 1
    estimatedMinutes: 35,
    wordCount: 5,
    title: {
      en: 'Lesson 1: Travel Plans & Reservations',
      fr: 'Leçon 1 : Projets de voyage & Réservations',
      zh: '第1课：旅行规划与酒店机票预订',
    },
    subtitle: {
      en: 'Book hotel rooms, navigate flight schedules, and express conditional plans',
      fr: 'Réserver un hôtel, gérer les horaires de vol et exprimer des conditions',
      zh: '预订酒店客房、咨询航班时刻与表达假设计划',
    },
    description: {
      en: 'Master travel expressions (预订, 宾馆, 护照, 行李, 打算) and conditional structures (如果...就...).',
      fr: 'Maîtrisez le vocabulaire de voyage et la structure conditionnelle (如果...就...).',
      zh: '掌握出行核心词汇与“如果……就……”假设复句。',
    },
    vocabulary: [
      { hanzi: '预订', pinyin: 'yùdìng', meaning: { en: 'To book / reserve', fr: 'Réserver', zh: '预订' } },
      { hanzi: '宾馆', pinyin: 'bīnguǎn', meaning: { en: 'Hotel', fr: 'Hôtel', zh: '宾馆' } },
      { hanzi: '护照', pinyin: 'hùzhào', meaning: { en: 'Passport', fr: 'Passeport', zh: '护照' } },
      { hanzi: '行李', pinyin: 'xíngli', meaning: { en: 'Luggage', fr: 'Bagages', zh: '行李' } },
      { hanzi: '打算', pinyin: 'dǎsuan', meaning: { en: 'To plan / intention', fr: 'Projeter / Intention', zh: '打算' } },
      { hanzi: '环境', pinyin: 'huánjìng', meaning: { en: 'Environment / surroundings', fr: 'Environnement', zh: '环境' } },
    ],
    grammarPoints: [
      {
        title: {
          en: 'Conditional: 如果...就... (rúguǒ... jiù...)',
          fr: 'La condition : 如果...就...',
          zh: '假设关联词“如果……就……”',
        },
        structure: '如果 + Condition, (主语) + 就 + Result',
        explanation: {
          en: 'Expresses "If [condition], then [result]".',
          fr: 'Permet d\'exprimer "Si [condition], alors [résultat]".',
          zh: '表达假设与紧随的结果。',
        },
        example: {
          hanzi: '如果明天不下雨，我们就去爬山。',
          pinyin: 'Rúguǒ míngtiān bú xiàyǔ, wǒmen jiù qù páshān.',
          translation: {
            en: "If it doesn't rain tomorrow, we will go hiking.",
            fr: "S'il ne pleut pas demain, nous irons faire de la randonnée.",
            zh: '如果明天不下雨，我们就去爬山。',
          },
        },
      },
    ],
    dialogue: [
      {
        speaker: '王经理',
        hanzi: '大卫，你下个月的中国旅行计划准备得怎么样了？',
        pinyin: 'Dàwèi, nǐ xià ge yuè de Zhōngguó lǚxíng jìhuà zhǔnbèi de zěnmeyàng le?',
        meaning: {
          en: 'David, how are your preparations for next month\'s trip to China coming along?',
          fr: 'David, comment avancent tes préparatifs pour ton voyage en Chine le mois prochain ?',
          zh: '大卫，你下个月的中国旅行计划准备得怎么样了？',
        },
        audioText: '大卫，你下个月的中国旅行计划准备得怎么样了？',
      },
      {
        speaker: '大卫',
        hanzi: '机票和宾馆都已经预订好了，我昨天刚把护照和签证办好。',
        pinyin: 'Jīpiào hé bīnguǎn dōu yǐjīng yùdìng hǎo le, wǒ zuótiān gāng bǎ hùzhào hé qiānzhèng bànhǎo.',
        meaning: {
          en: 'Plane tickets and hotel are already booked. Yesterday I just got my passport and visa in order.',
          fr: 'Les billets et l\'hôtel sont réservés. J\'ai finalisé mon passeport et visa hier.',
          zh: '机票和宾馆都已经预订好了，我昨天刚把护照和签证办好。',
        },
        audioText: '机票和宾馆都已经预订好了，我昨天刚把护照和签证办好。',
      },
    ],
    quickQuiz: [
      {
        id: 'h3-l1-q1',
        level: 'hsk3',
        skill: 'grammar',
        prompt: {
          en: 'Complete the sentence: "____ 你有时间，我们 ____ 一起去书店。"',
          fr: 'Complétez la phrase : "____ 你有时间，我们 ____ 一起去书店。"',
          zh: '选择恰当关联词填空：“____ 你有时间，我们 ____ 一起去书店。”',
        },
        options: [
          { id: 'A', text: '如果……就…… (If... then...)' },
          { id: 'B', text: '虽然……但是…… (Although... but...)' },
          { id: 'C', text: '因为……所以…… (Because... therefore...)' },
          { id: 'D', text: '不但……而且…… (Not only... but also...)' },
        ],
        correctAnswerId: 'A',
        explanation: {
          en: '"如果...就..." expresses condition ("If you have time, we then go together").',
          fr: '"如果...就..." marque l\'hypothèse et la conséquence.',
          zh: '有时间为假设条件，用“如果……就……”。',
        },
        points: 10,
      },
    ],
  },
  {
    id: 'lesson-hsk3-02',
    level: 'hsk3',
    lessonNumber: 2,
    isFree: true, // FREE LESSON 2
    estimatedMinutes: 35,
    wordCount: 5,
    title: {
      en: 'Lesson 2: Workplace & Office Communication',
      fr: 'Leçon 2 : Travail en entreprise & Bureau',
      zh: '第2课：职场交流与办公协作',
    },
    subtitle: {
      en: 'Coordinate project deadlines, report to managers, and express professional requests',
      fr: 'Gérer les délais, faire un rapport et formuler des demandes professionnelles',
      zh: '对接工作进度、汇报项目成果与礼貌提出工作要求',
    },
    description: {
      en: 'Master the iconic 把 (bǎ) disposal sentence structure and essential professional terminology (会议, 报告, 解决, 经理, 认真).',
      fr: 'Maîtrisez la structure en 把 et le vocabulaire professionnel essentiel.',
      zh: '重点攻克“把”字句结构与核心办公词汇。',
    },
    vocabulary: [
      { hanzi: '报告', pinyin: 'bàogào', meaning: { en: 'Report / Presentation', fr: 'Rapport / Compte-rendu', zh: '报告' } },
      { hanzi: '会议', pinyin: 'huìyì', meaning: { en: 'Meeting / Conference', fr: 'Réunion', zh: '会议' } },
      { hanzi: '解决', pinyin: 'jiějué', meaning: { en: 'To resolve / solve', fr: 'Résoudre', zh: '解决' } },
      { hanzi: '认真', pinyin: 'rènzhēn', meaning: { en: 'Conscientious / Serious', fr: 'Sérieux / Appliqué', zh: '认真' } },
      { hanzi: '同事', pinyin: 'tóngshì', meaning: { en: 'Colleague', fr: 'Collègue', zh: '同事' } },
      { hanzi: '完成', pinyin: 'wánchéng', meaning: { en: 'To complete / accomplish', fr: 'Accomplir / Achever', zh: '完成' } },
    ],
    grammarPoints: [
      {
        title: {
          en: 'The 把 Construction (把字句)',
          fr: 'La structure en 把 (bǎ)',
          zh: '“把”字句基本结构',
        },
        structure: 'Subject + 把 + Object + Verb + Complement / Result (了 / 给 / 在 / 到)',
        explanation: {
          en: 'The "把" structure emphasizes the disposal of or action done to an object resulting in a change of state or location.',
          fr: 'La structure en "把" met en valeur l\'action exercée sur l\'objet et son résultat ou déplacement.',
          zh: '“把”字句表示对宾语施加处置并产生某种结果或状态改变。',
        },
        example: {
          hanzi: '请把这份文件打印两份。',
          pinyin: 'Qǐng bǎ zhè fèn wénjiàn dǎyìn liǎng fèn.',
          translation: {
            en: 'Please print two copies of this document.',
            fr: 'Veuillez imprimer deux exemplaires de ce document s\'il vous plaît.',
            zh: '请把这份文件打印两份。',
          },
        },
      },
    ],
    dialogue: [
      {
        speaker: '刘经理',
        hanzi: '小张，请把上个季度的销售总结发到我的邮箱。',
        pinyin: 'Xiǎo Zhāng, qǐng bǎ shàng ge jìdù de xiāoshòu zǒngjié fā dào wǒ de yóuxiāng.',
        meaning: {
          en: 'Xiao Zhang, please send last quarter\'s sales summary to my email.',
          fr: 'Xiao Zhang, merci d\'envoyer le bilan des ventes du trimestre passé sur ma boîte mail.',
          zh: '小张，请把上个季度的销售总结发到我的邮箱。',
        },
        audioText: '小张，请把上个季度的销售总结发到我的邮箱。',
      },
      {
        speaker: '小张',
        hanzi: '好的刘经理，我已经把数据整理好了，五分钟后发给您。',
        pinyin: 'Hǎo de Liú jīnglǐ, wǒ yǐjīng bǎ shùjù zhěnglǐ hǎo le, wǔ fēnzhōng hòu fā gěi nín.',
        meaning: {
          en: 'Sure Manager Liu, I have already organized the data and will send it to you in 5 minutes.',
          fr: 'Bien Manager Liu, j\'ai déjà ordonné les données et vous les transmets dans 5 minutes.',
          zh: '好的刘经理，我已经把数据整理好了，五分钟后发给您。',
        },
        audioText: '好的刘经理，我已经把数据整理好了，五分钟后发给您。',
      },
    ],
    quickQuiz: [
      {
        id: 'h3-l2-q1',
        level: 'hsk3',
        skill: 'grammar',
        prompt: {
          en: 'Which sentence correctly uses the 把 structure?',
          fr: 'Quelle phrase utilise correctement la structure en 把 ?',
          zh: '下列“把”字句语序完全正确的是：',
        },
        options: [
          { id: 'A', text: '请把作业交给我。' },
          { id: 'B', text: '请把交给我作业。' },
          { id: 'C', text: '作业请把我交给。' },
          { id: 'D', text: '把我请交给作业。' },
        ],
        correctAnswerId: 'A',
        explanation: {
          en: 'Subject/Polite phrase (请) + 把 + Object (作业) + Verb + Complement (交给我).',
          fr: 'Formule de politesse (请) + 把 + Objet (作业) + Verbe + Complément (交给我).',
          zh: '“把”字句基本语序：主语/祈使词 + 把 + 宾语 + 动词 + 补语。',
        },
        points: 10,
      },
    ],
  },
  {
    id: 'lesson-hsk3-03',
    level: 'hsk3',
    lessonNumber: 3,
    isFree: false, // PRO ONLY
    estimatedMinutes: 40,
    wordCount: 15,
    title: {
      en: 'Lesson 3: Feelings, Relationships & Advice',
      fr: 'Leçon 3 : Sentiments, Relations & Conseils',
      zh: '第3课：人际交往、情感表达与建议',
    },
    subtitle: {
      en: 'Express gratitude, handle misunderstandings, and describe psychological states',
      fr: 'Exprimer sa gratitude, surmonter des quiproquos et décrire ses émotions',
      zh: '表达感谢与歉意、处理人际沟通与心理状态描摹',
    },
    description: {
      en: 'Master emotional vocabulary (满意, 难过, 担心, 放心, 热情) and passive 被 structures.',
      fr: 'Vocabulaire des émotions et structure passive en 被.',
      zh: '掌握心理状态词与“被”字被动句。',
    },
    vocabulary: [
      { hanzi: '满意', pinyin: 'mǎnyì', meaning: { en: 'satisfied', fr: 'satisfait', zh: '满意' } },
      { hanzi: '难过', pinyin: 'nánguò', meaning: { en: 'sad', fr: 'triste', zh: '难过' } },
      { hanzi: '担心', pinyin: 'dānxīn', meaning: { en: 'to worry', fr: 's\'inquiéter', zh: '担心' } },
      { hanzi: '放心', pinyin: 'fàngxīn', meaning: { en: 'to be at ease', fr: 'être rassuré', zh: '放心' } },
      { hanzi: '热情', pinyin: 'rèqíng', meaning: { en: 'warm; enthusiastic', fr: 'chaleureux; enthousiaste', zh: '热情' } },
      { hanzi: '关心', pinyin: 'guānxīn', meaning: { en: 'to care about', fr: 'se soucier de', zh: '关心' } },
      { hanzi: '相信', pinyin: 'xiāngxìn', meaning: { en: 'to believe', fr: 'croire', zh: '相信' } },
      { hanzi: '生气', pinyin: 'shēngqì', meaning: { en: 'to get angry', fr: 'se fâcher', zh: '生气' } },
      { hanzi: '开心', pinyin: 'kāixīn', meaning: { en: 'happy', fr: 'content', zh: '开心' } },
      { hanzi: '害怕', pinyin: 'hàipà', meaning: { en: 'to be afraid', fr: 'avoir peur', zh: '害怕' } },
      { hanzi: '着急', pinyin: 'zháojí', meaning: { en: 'worried; in a hurry', fr: 'inquiet; pressé', zh: '着急' } },
      { hanzi: '关系', pinyin: 'guānxì', meaning: { en: 'relationship', fr: 'relation', zh: '关系' } },
      { hanzi: '帮助', pinyin: 'bāngzhù', meaning: { en: 'to help; help', fr: 'aider; aide', zh: '帮助' } },
      { hanzi: '愿意', pinyin: 'yuànyì', meaning: { en: 'to be willing', fr: 'vouloir bien', zh: '愿意' } },
      { hanzi: '照顾', pinyin: 'zhàogù', meaning: { en: 'to take care of', fr: 's\'occuper de', zh: '照顾' } },
    ],
    grammarPoints: [],
    dialogue: [],
    quickQuiz: [],
  },
  {
    id: 'lesson-hsk3-04',
    level: 'hsk3',
    lessonNumber: 4,
    isFree: false, // PRO ONLY
    estimatedMinutes: 40,
    wordCount: 15,
    title: {
      en: 'Lesson 4: Social Issues & Modern Life',
      fr: 'Leçon 4 : Société contemporaine & Vie moderne',
      zh: '第4课：现代生活与社会观察',
    },
    subtitle: {
      en: 'Discuss environmental protection, technology habits, and community life',
      fr: 'Discuter d\'écologie, d\'usages technologiques et de vie citadine',
      zh: '讨论环境保护、科技日常与城市生活变迁',
    },
    description: {
      en: 'Talk about city life and modern habits: 环境, 发展, 变化, 方便, 上网.',
      fr: 'Parler de la vie en ville et des habitudes modernes : 环境, 发展, 变化, 方便, 上网.',
      zh: '谈论城市生活与现代习惯：环境、发展、变化、方便、上网。',
    },
    vocabulary: [
      { hanzi: '环境', pinyin: 'huánjìng', meaning: { en: 'environment', fr: 'environnement', zh: '环境' } },
      { hanzi: '生活', pinyin: 'shēnghuó', meaning: { en: 'life; to live', fr: 'vie; vivre', zh: '生活' } },
      { hanzi: '城市', pinyin: 'chéngshì', meaning: { en: 'city', fr: 'ville', zh: '城市' } },
      { hanzi: '邻居', pinyin: 'línjū', meaning: { en: 'neighbor', fr: 'voisin', zh: '邻居' } },
      { hanzi: '发展', pinyin: 'fāzhǎn', meaning: { en: 'to develop; development', fr: 'développer; développement', zh: '发展' } },
      { hanzi: '变化', pinyin: 'biànhuà', meaning: { en: 'change; to change', fr: 'changement; changer', zh: '变化' } },
      { hanzi: '方便', pinyin: 'fāngbiàn', meaning: { en: 'convenient', fr: 'pratique', zh: '方便' } },
      { hanzi: '安全', pinyin: 'ānquán', meaning: { en: 'safe; safety', fr: 'sûr; sécurité', zh: '安全' } },
      { hanzi: '健康', pinyin: 'jiànkāng', meaning: { en: 'healthy; health', fr: 'en bonne santé; santé', zh: '健康' } },
      { hanzi: '重要', pinyin: 'zhòngyào', meaning: { en: 'important', fr: 'important', zh: '重要' } },
      { hanzi: '新闻', pinyin: 'xīnwén', meaning: { en: 'news', fr: 'actualités; nouvelles', zh: '新闻' } },
      { hanzi: '世界', pinyin: 'shìjiè', meaning: { en: 'world', fr: 'monde', zh: '世界' } },
      { hanzi: '影响', pinyin: 'yǐngxiǎng', meaning: { en: 'to influence; influence', fr: 'influencer; influence', zh: '影响' } },
      { hanzi: '上网', pinyin: 'shàngwǎng', meaning: { en: 'to go online', fr: 'aller sur Internet', zh: '上网' } },
      { hanzi: '网上', pinyin: 'wǎngshang', meaning: { en: 'online', fr: 'en ligne', zh: '网上' } },
    ],
    grammarPoints: [],
    dialogue: [],
    quickQuiz: [],
  },
];

// Hand-written lessons that still lack a dialogue, grammar or quiz get them from the shared content.
const completeLesson = (l: HskLesson): HskLesson => ({
  ...l,
  grammarPoints: l.grammarPoints?.length ? l.grammarPoints : LESSON_CONTENT[l.id]?.grammarPoints ?? [],
  dialogue: l.dialogue?.length ? l.dialogue : LESSON_CONTENT[l.id]?.dialogue ?? [],
  quickQuiz: l.quickQuiz?.length
    ? l.quickQuiz
    : buildVocabQuiz(l.level, l.id, l.vocabulary.map((v) => ({ hanzi: v.hanzi, pinyin: v.pinyin, en: v.meaning.en, fr: v.meaning.fr }))),
});

const countFor = (level: HskLesson['level']) => HAND_WRITTEN_LESSONS.filter((l) => l.level === level).length;

// Hand-written lessons first, then thematic lessons that cover the rest of the official list.
// HSK 1 stays fully free; beyond the two free lessons, HSK 2 and HSK 3 are Pro.
// Lesson numbers live in the titles ("Lesson 4: …", "Leçon 4 : …", "第4课：…").
const renumber = (l: HskLesson, n: number): HskLesson => ({
  ...l,
  lessonNumber: n,
  title: {
    en: l.title.en.replace(/^Lesson \d+/, `Lesson ${n}`),
    fr: l.title.fr.replace(/^Leçon \d+/, `Leçon ${n}`),
    zh: l.title.zh.replace(/^第\d+课/, `第${n}课`),
  },
});

// Each level follows a course-book progression (HSK 1: greetings and pronunciation first,
// then names, numbers, family…; HSK 2 and 3: grammar in textbook order). Ids never change,
// so saved progress is kept, and the two free lessons of HSK 2 and 3 stay first.
const COURSE: Record<HskLesson['level'], { order: string[]; extras: Record<string, HskLessonExtras> }> = {
  hsk1: { order: HSK1_ORDER, extras: HSK1_EXTRAS },
  hsk2: { order: HSK2_ORDER, extras: HSK2_EXTRAS },
  hsk3: { order: HSK3_ORDER, extras: HSK3_EXTRAS },
};

// Lessons told in scenes: the scenes become the lesson text (and its dialogue, line by line).
const withScenes = (l: HskLesson): HskLesson => {
  const sc = LESSON_SCENES[l.id];
  if (!sc?.scenes?.length) return l;
  return { ...l, scenes: sc.scenes, story: sc.story, dialogue: sc.scenes.flatMap((s) => s.lines) };
};

const applyCourse = (level: HskLesson['level'], lessons: HskLesson[]): HskLesson[] => {
  const { order, extras } = COURSE[level];
  const rank = (id: string) => (order.includes(id) ? order.indexOf(id) : order.length);
  return [...lessons]
    .sort((a, b) => rank(a.id) - rank(b.id) || a.lessonNumber - b.lessonNumber)
    .map((l, i) => renumber(withScenes({ ...l, ...extras[l.id] }), i + 1));
};

// Hand-written lessons first, then thematic lessons that cover the rest of the official list.
// HSK 1 stays fully free; beyond the two free lessons, HSK 2 and HSK 3 are Pro.
export const HSK_LESSONS_DATA: HskLesson[] = (['hsk1', 'hsk2', 'hsk3'] as const).flatMap((level) =>
  applyCourse(level, [
    ...HAND_WRITTEN_LESSONS.filter((l) => l.level === level).map(completeLesson),
    ...buildGeneratedLessons(level, countFor(level) + 1, level === 'hsk1'),
  ])
);
