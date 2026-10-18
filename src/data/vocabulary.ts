import type { VocabularyWord } from '../types';

export const VOCABULARY_DATA: VocabularyWord[] = [
  // ===================== HSK 1 =====================
  {
    id: 'v-hsk1-01',
    level: 'hsk1',
    hanzi: '学校',
    pinyin: 'xuéxiào',
    meaning: {
      en: 'school',
      fr: 'école',
      zh: '学校',
    },
    partOfSpeech: 'noun',
    exampleSentence: {
      hanzi: '我每天去学校学习汉语。',
      pinyin: 'Wǒ měitiān qù xuéxiào xuéxí Hànyǔ.',
      translation: {
        en: 'I go to school every day to learn Chinese.',
        fr: 'Je vais à l\'école tous les jours pour apprendre le chinois.',
        zh: '我每天去学校学习汉语。',
      },
    },
    relatedWords: [
      { hanzi: '学生', pinyin: 'xuésheng', meaning: { en: 'student', fr: 'étudiant', zh: '学生' } },
      { hanzi: '老师', pinyin: 'lǎoshī', meaning: { en: 'teacher', fr: '老师', zh: '老师' } },
    ],
    strokeCount: 16,
    tags: ['education', 'places', 'daily'],
  },
  {
    id: 'v-hsk1-02',
    level: 'hsk1',
    hanzi: '谢谢',
    pinyin: 'xièxie',
    meaning: {
      en: 'thank you / thanks',
      fr: 'merci / remercier',
      zh: '谢谢',
    },
    partOfSpeech: 'verb',
    exampleSentence: {
      hanzi: '谢谢你帮助我！',
      pinyin: 'Xièxie nǐ bāngzhù wǒ!',
      translation: {
        en: 'Thank you for helping me!',
        fr: 'Merci de m\'avoir aidé !',
        zh: '谢谢你帮助我！',
      },
    },
    relatedWords: [
      { hanzi: '不客气', pinyin: 'bú kèqi', meaning: { en: 'you are welcome', fr: 'de rien', zh: '不客气' } },
      { hanzi: '再见', pinyin: 'zàijiàn', meaning: { en: 'goodbye', fr: 'au revoir', zh: '再见' } },
    ],
    strokeCount: 12,
    tags: ['greetings', 'politeness'],
  },
  {
    id: 'v-hsk1-03',
    level: 'hsk1',
    hanzi: '苹果',
    pinyin: 'píngguǒ',
    meaning: {
      en: 'apple',
      fr: 'pomme',
      zh: '苹果',
    },
    partOfSpeech: 'noun',
    exampleSentence: {
      hanzi: '我想买三个大苹果。',
      pinyin: 'Wǒ xiǎng mǎi sān ge dà píngguǒ.',
      translation: {
        en: 'I want to buy three big apples.',
        fr: 'Je veux acheter trois grosses pommes.',
        zh: '我想买三个大苹果。',
      },
    },
    relatedWords: [
      { hanzi: '水果', pinyin: 'shuǐguǒ', meaning: { en: 'fruit', fr: 'fruit', zh: '水果' } },
      { hanzi: '吃', pinyin: 'chī', meaning: { en: 'to eat', fr: 'manger', zh: '吃' } },
    ],
    strokeCount: 16,
    tags: ['food', 'shopping'],
  },
  {
    id: 'v-hsk1-04',
    level: 'hsk1',
    hanzi: '朋友',
    pinyin: 'péngyou',
    meaning: {
      en: 'friend',
      fr: 'ami',
      zh: '朋友',
    },
    partOfSpeech: 'noun',
    exampleSentence: {
      hanzi: '他是我的中国朋友。',
      pinyin: 'Tā shì wǒ de Zhōngguó péngyou.',
      translation: {
        en: 'He is my Chinese friend.',
        fr: 'Il est mon ami chinois.',
        zh: '他是我的中国朋友。',
      },
    },
    relatedWords: [
      { hanzi: '同学', pinyin: 'tóngxué', meaning: { en: 'classmate', fr: 'camarade de classe', zh: '同学' } },
      { hanzi: '认识', pinyin: 'rènshi', meaning: { en: 'to know / meet', fr: 'connaître', zh: '认识' } },
    ],
    strokeCount: 8,
    tags: ['people', 'social'],
  },
  {
    id: 'v-hsk1-05',
    level: 'hsk1',
    hanzi: '喝水',
    pinyin: 'hē shuǐ',
    meaning: {
      en: 'to drink water',
      fr: 'boire de l\'eau',
      zh: '喝水',
    },
    partOfSpeech: 'phrase / verb',
    exampleSentence: {
      hanzi: '天气很热，请多喝水。',
      pinyin: 'Tiānqì hěn rè, qǐng duō hē shuǐ.',
      translation: {
        en: 'The weather is very hot, please drink more water.',
        fr: 'Il fait très chaud, buvez beaucoup d\'eau s\'il vous plaît.',
        zh: '天气很热，请多喝水。',
      },
    },
    relatedWords: [
      { hanzi: '茶', pinyin: 'chá', meaning: { en: 'tea', fr: 'thé', zh: '茶' } },
      { hanzi: '杯子', pinyin: 'bēizi', meaning: { en: 'cup', fr: 'verre / tasse', zh: '杯子' } },
    ],
    strokeCount: 16,
    tags: ['daily', 'health', 'actions'],
  },
  {
    id: 'v-hsk1-06',
    level: 'hsk1',
    hanzi: '医生',
    pinyin: 'yīshēng',
    meaning: {
      en: 'doctor',
      fr: 'médecin / docteur',
      zh: '医生',
    },
    partOfSpeech: 'noun',
    exampleSentence: {
      hanzi: '李医生在医院工作。',
      pinyin: 'Lǐ yīshēng zài yīyuàn gōngzuò.',
      translation: {
        en: 'Dr. Li works at the hospital.',
        fr: 'Le docteur Li travaille à l\'hôpital.',
        zh: '李医生在医院工作。',
      },
    },
    relatedWords: [
      { hanzi: '医院', pinyin: 'yīyuàn', meaning: { en: 'hospital', fr: 'hôpital', zh: '医院' } },
      { hanzi: '身体', pinyin: 'shēntǐ', meaning: { en: 'body / health', fr: 'corps / santé', zh: '身体' } },
    ],
    strokeCount: 12,
    tags: ['jobs', 'health'],
  },
  {
    id: 'v-hsk1-07',
    level: 'hsk1',
    hanzi: '漂亮',
    pinyin: 'piàoliang',
    meaning: {
      en: 'pretty / beautiful',
      fr: 'joli / beau',
      zh: '漂亮',
    },
    partOfSpeech: 'adjective',
    exampleSentence: {
      hanzi: '这件衣服真漂亮！',
      pinyin: 'Zhè jiàn yīfu zhēn piàoliang!',
      translation: {
        en: 'These clothes are really beautiful!',
        fr: 'Ce vêtement est vraiment magnifique !',
        zh: '这件衣服真漂亮！',
      },
    },
    relatedWords: [
      { hanzi: '高兴', pinyin: 'gāoxìng', meaning: { en: 'happy', fr: 'heureux', zh: '高兴' } },
      { hanzi: '好看', pinyin: 'hǎokàn', meaning: { en: 'good-looking', fr: 'agréable à regarder', zh: '好看' } },
    ],
    strokeCount: 22,
    tags: ['descriptions', 'adjectives'],
  },

  // ===================== HSK 2 =====================
  {
    id: 'v-hsk2-01',
    level: 'hsk2',
    hanzi: '准备',
    pinyin: 'zhǔnbèi',
    meaning: {
      en: 'to prepare / to get ready',
      fr: 'préparer / se préparer',
      zh: '准备',
    },
    partOfSpeech: 'verb',
    exampleSentence: {
      hanzi: '我正在准备明天的HSK考试。',
      pinyin: 'Wǒ zhèngzài zhǔnbèi míngtiān de HSK kǎoshì.',
      translation: {
        en: 'I am preparing for tomorrow\'s HSK exam.',
        fr: 'Je prépare l\'examen HSK de demain.',
        zh: '我正在准备明天的HSK考试。',
      },
    },
    relatedWords: [
      { hanzi: '考试', pinyin: 'kǎoshì', meaning: { en: 'exam', fr: 'examen', zh: '考试' } },
      { hanzi: '开始', pinyin: 'kāishǐ', meaning: { en: 'to begin', fr: 'commencer', zh: '开始' } },
    ],
    strokeCount: 20,
    tags: ['study', 'actions', 'exam'],
  },
  {
    id: 'v-hsk2-02',
    level: 'hsk2',
    hanzi: '帮助',
    pinyin: 'bāngzhù',
    meaning: {
      en: 'to help / assistance',
      fr: 'aider / aide',
      zh: '帮助',
    },
    partOfSpeech: 'verb / noun',
    exampleSentence: {
      hanzi: '多亏了老师的帮助，我通过了测试。',
      pinyin: 'Duōkuī le lǎoshī de bāngzhù, wǒ tōngguò le cèshì.',
      translation: {
        en: 'Thanks to the teacher\'s help, I passed the test.',
        fr: 'Grâce à l\'aide du professeur, j\'ai réussi le test.',
        zh: '多亏了老师的帮助，我通过了测试。',
      },
    },
    relatedWords: [
      { hanzi: '介绍', pinyin: 'jièshào', meaning: { en: 'to introduce', fr: 'présenter', zh: '介绍' } },
      { hanzi: '希望', pinyin: 'xīwàng', meaning: { en: 'to hope', fr: 'espérer', zh: '希望' } },
    ],
    strokeCount: 16,
    tags: ['communication', 'social'],
  },
  {
    id: 'v-hsk2-03',
    level: 'hsk2',
    hanzi: '旅游',
    pinyin: 'lǚyóu',
    meaning: {
      en: 'to travel / tourism',
      fr: 'voyager / tourisme',
      zh: '旅游',
    },
    partOfSpeech: 'verb / noun',
    exampleSentence: {
      hanzi: '我们计划今年夏天去北京旅游。',
      pinyin: 'Wǒmen jìhuà jīnnián xiàtiān qù Běijīng lǚyóu.',
      translation: {
        en: 'We plan to travel to Beijing this summer.',
        fr: 'Nous prévoyons de voyager à Pékin cet été.',
        zh: '我们计划今年夏天去北京旅游。',
      },
    },
    relatedWords: [
      { hanzi: '宾馆', pinyin: 'bīnguǎn', meaning: { en: 'hotel', fr: 'hôtel', zh: '宾馆' } },
      { hanzi: '飞机', pinyin: 'fēijī', meaning: { en: 'airplane', fr: 'avion', zh: '飞机' } },
    ],
    strokeCount: 20,
    tags: ['travel', 'lifestyle'],
  },
  {
    id: 'v-hsk2-04',
    level: 'hsk2',
    hanzi: '便宜',
    pinyin: 'piányi',
    meaning: {
      en: 'cheap / inexpensive',
      fr: 'bon marché / pas cher',
      zh: '便宜',
    },
    partOfSpeech: 'adjective',
    exampleSentence: {
      hanzi: '这家商店的水果非常便宜。',
      pinyin: 'Zhè jiā shāngdiàn de shuǐguǒ fēicháng piányi.',
      translation: {
        en: 'The fruit in this store is very cheap.',
        fr: 'Les fruits de ce magasin sont très bon marché.',
        zh: '这家商店的水果非常便宜。',
      },
    },
    relatedWords: [
      { hanzi: '贵', pinyin: 'guì', meaning: { en: 'expensive', fr: 'cher', zh: '贵' } },
      { hanzi: '买', pinyin: 'mǎi', meaning: { en: 'to buy', fr: 'acheter', zh: '买' } },
    ],
    strokeCount: 16,
    tags: ['shopping', 'adjectives'],
  },
  {
    id: 'v-hsk2-05',
    level: 'hsk2',
    hanzi: '运动',
    pinyin: 'yùndòng',
    meaning: {
      en: 'sports / to exercise',
      fr: 'sport / faire du sport',
      zh: '运动',
    },
    partOfSpeech: 'noun / verb',
    exampleSentence: {
      hanzi: '跑步是我最喜欢的运动。',
      pinyin: 'Pǎobù shì wǒ zuì xǐhuan de yùndòng.',
      translation: {
        en: 'Running is my favorite sport.',
        fr: 'La course à pied est mon sport favori.',
        zh: '跑步是我最喜欢的运动。',
      },
    },
    relatedWords: [
      { hanzi: '跑步', pinyin: 'pǎobù', meaning: { en: 'to run', fr: 'courir', zh: '跑步' } },
      { hanzi: '游泳', pinyin: 'yóuyǒng', meaning: { en: 'to swim', fr: 'nager', zh: '游泳' } },
    ],
    strokeCount: 15,
    tags: ['health', 'sports'],
  },

  // ===================== HSK 3 =====================
  {
    id: 'v-hsk3-01',
    level: 'hsk3',
    hanzi: '解决',
    pinyin: 'jiějué',
    meaning: {
      en: 'to solve / to resolve',
      fr: 'résoudre / régler',
      zh: '解决',
    },
    partOfSpeech: 'verb',
    exampleSentence: {
      hanzi: '我们必须尽快解决这个难题。',
      pinyin: 'Wǒmen bìxū jǐnkuài jiějué zhè ge nántí.',
      translation: {
        en: 'We must solve this difficult problem as soon as possible.',
        fr: 'Nous devons résoudre ce problème difficile au plus vite.',
        zh: '我们必须尽快解决这个难题。',
      },
    },
    relatedWords: [
      { hanzi: '问题', pinyin: 'wèntí', meaning: { en: 'problem / question', fr: 'problème / question', zh: '问题' } },
      { hanzi: '办法', pinyin: 'bànfǎ', meaning: { en: 'method / solution', fr: 'méthode / solution', zh: '办法' } },
    ],
    strokeCount: 19,
    tags: ['academic', 'work', 'advanced'],
  },
  {
    id: 'v-hsk3-02',
    level: 'hsk3',
    hanzi: '热情',
    pinyin: 'rèqíng',
    meaning: {
      en: 'enthusiastic / warm-hearted',
      fr: 'chaleureux / enthousiaste',
      zh: '热情',
    },
    partOfSpeech: 'adjective / noun',
    exampleSentence: {
      hanzi: '这里的服务员对客人非常热情。',
      pinyin: 'Zhèlǐ de fúwùyuán duì kèrén fēicháng rèqíng.',
      translation: {
        en: 'The waiters here are very warm and friendly to guests.',
        fr: 'Les serveurs ici sont très chaleureux avec les clients.',
        zh: '这里的服务员对客人非常热情。',
      },
    },
    relatedWords: [
      { hanzi: '客人', pinyin: 'kèrén', meaning: { en: 'guest / customer', fr: 'client / invité', zh: '客人' } },
      { hanzi: '习惯', pinyin: 'xíguàn', meaning: { en: 'habit / custom', fr: 'habitude', zh: '习惯' } },
    ],
    strokeCount: 21,
    tags: ['personality', 'feelings'],
  },
  {
    id: 'v-hsk3-03',
    level: 'hsk3',
    hanzi: '提高',
    pinyin: 'tígāo',
    meaning: {
      en: 'to improve / to raise / to enhance',
      fr: 'améliorer / augmenter',
      zh: '提高',
    },
    partOfSpeech: 'verb',
    exampleSentence: {
      hanzi: '每天听汉语录音可以提高听力水平。',
      pinyin: 'Měitiān tīng Hànyǔ lùyīn kěyǐ tígāo tīnglì shuǐpíng.',
      translation: {
        en: 'Listening to Chinese recordings daily can improve your listening skill.',
        fr: 'Écouter des enregistrements en chinois chaque jour améliore la compréhension orale.',
        zh: '每天听汉语录音可以提高听力水平。',
      },
    },
    relatedWords: [
      { hanzi: '水平', pinyin: 'shuǐpíng', meaning: { en: 'level / standard', fr: 'niveau', zh: '水平' } },
      { hanzi: '练习', pinyin: 'liànxí', meaning: { en: 'to practice', fr: 's\'exercer', zh: '练习' } },
    ],
    strokeCount: 22,
    tags: ['study', 'progress'],
  },
  {
    id: 'v-hsk3-04',
    level: 'hsk3',
    hanzi: '清楚',
    pinyin: 'qīngchu',
    meaning: {
      en: 'clear / distinct / to understand clearly',
      fr: 'clair / distinct / comprendre clairement',
      zh: '清楚',
    },
    partOfSpeech: 'adjective / verb',
    exampleSentence: {
      hanzi: '老师讲得很清楚，大家都听懂了。',
      pinyin: 'Lǎoshī jiǎng de hěn qīngchu, dàjiā dōu tīngdǒng le.',
      translation: {
        en: 'The teacher explained very clearly, and everyone understood.',
        fr: 'Le professeur a expliqué très clairement et tout le monde a compris.',
        zh: '老师讲得很清楚，大家都听懂了。',
      },
    },
    relatedWords: [
      { hanzi: '明白', pinyin: 'míngbai', meaning: { en: 'to understand', fr: 'comprendre', zh: '明白' } },
      { hanzi: '简单', pinyin: 'jiǎndān', meaning: { en: 'simple', fr: 'simple', zh: '简单' } },
    ],
    strokeCount: 23,
    tags: ['descriptions', 'communication'],
  },
  {
    id: 'v-hsk3-05',
    level: 'hsk3',
    hanzi: '影响',
    pinyin: 'yǐngxiǎng',
    meaning: {
      en: 'influence / effect / to affect',
      fr: 'influence / impact / influencer',
      zh: '影响',
    },
    partOfSpeech: 'noun / verb',
    exampleSentence: {
      hanzi: '环境对人的学习有很大影响。',
      pinyin: 'Huánjìng duì rén de xuéxí yǒu hěn dà yǐngxiǎng.',
      translation: {
        en: 'The environment has a great influence on one\'s study.',
        fr: 'L\'environnement a une grande influence sur l\'apprentissage.',
        zh: '环境对人的学习有很大影响。',
      },
    },
    relatedWords: [
      { hanzi: '环境', pinyin: 'huánjìng', meaning: { en: 'environment', fr: 'environnement', zh: '环境' } },
      { hanzi: '关系', pinyin: 'guānxi', meaning: { en: 'relationship', fr: 'relation', zh: '关系' } },
    ],
    strokeCount: 27,
    tags: ['academic', 'formal'],
  },
];
