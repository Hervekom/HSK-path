import { GoogleGenAI } from '@google/genai';

let aiClient: GoogleGenAI | null = null;
function getGenAI(): GoogleGenAI | null {
  if (!aiClient && process.env.GEMINI_API_KEY) {
    aiClient = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  }
  return aiClient;
}

// Fallback curated library in case offline or API key is not present
export const FALLBACK_SNIPPETS = [
  {
    id: 'daily-tea-culture',
    date: new Date().toISOString().split('T')[0],
    level: 'hsk1',
    category: 'tradition',
    title: {
      hanzi: '中国人的茶文化',
      pinyin: 'Zhōngguórén de chá wénhuà',
      translation: {
        en: 'Chinese Tea Culture & Hospitality',
        fr: "La culture du thé et l'hospitalité chinoise",
        zh: '中国茶文化与待客之道',
      },
    },
    content: {
      hanzi: '中国人非常喜欢喝茶。有客人来家里时，主人会请客人喝热茶。绿茶和红茶都很受欢迎。',
      pinyin: 'Zhōngguórén fēicháng xǐhuan hē chá. Yǒu kèrén lái jiālǐ shí, zhǔrén huì qǐng kèrén hē rè chá. Lǜchá hé hóngchá dōu hěn shòu huānyíng.',
      translation: {
        en: 'Chinese people like drinking tea very much. When guests visit the home, the host serves hot tea to welcome them. Both green tea and black tea are very popular.',
        fr: "Les Chinois aiment beaucoup boire du thé. Lorsque des invités viennent à la maison, l'hôte leur offre du thé chaud. Le thé vert et le thé noir sont tous deux très populaires.",
        zh: '中国人非常喜欢喝茶。家中来客时，主人会倒上热茶以示欢迎。绿茶与红茶皆深受大众喜爱。',
      },
    },
    vocabulary: [
      {
        hanzi: '喝茶',
        pinyin: 'hē chá',
        partOfSpeech: 'verb phrase',
        meaning: { en: 'to drink tea', fr: 'boire du thé', zh: '喝茶' },
      },
      {
        hanzi: '客人',
        pinyin: 'kèrén',
        partOfSpeech: 'noun',
        meaning: { en: 'guest / visitor', fr: 'invité / client', zh: '客人' },
      },
      {
        hanzi: '欢迎',
        pinyin: 'huānyíng',
        partOfSpeech: 'verb',
        meaning: { en: 'to welcome / popular', fr: 'accueillir / apprécié', zh: '欢迎' },
      },
      {
        hanzi: '非常',
        pinyin: 'fēicháng',
        partOfSpeech: 'adverb',
        meaning: { en: 'extremely / very', fr: 'très / extrêmement', zh: '非常' },
      },
    ],
    culturalInsight: {
      en: 'In traditional Chinese etiquette, when someone pours tea for you, you can lightly tap your index and middle fingers on the table to express silent gratitude (叩指礼, kòuzhǐ lǐ).',
      fr: "Dans la tradition chinoise, lorsque quelqu'un vous sert du thé, vous pouvez tapoter doucement la table avec deux doigts pliés pour exprimer un remerciement discret (叩指礼, kòuzhǐ lǐ).",
      zh: '在传统茶道礼仪中，别人为你倒茶时，可用食指与中指轻叩桌面以示感谢，此礼节称为“叩指礼”。',
    },
    sourceQuery: 'Chinese tea etiquette and hospitality traditions',
    sourceTitle: 'Chinese Tea Heritage & Daily Rituals',
  },
  {
    id: 'daily-gaotie-speed',
    date: new Date().toISOString().split('T')[0],
    level: 'hsk2',
    category: 'lifestyle',
    title: {
      hanzi: '中国的快速高铁',
      pinyin: 'Zhōngguó de kuàisù gāotiě',
      translation: {
        en: "China's High-Speed Rail Network",
        fr: 'Le réseau de train à grande vitesse en Chine',
        zh: '中国的高速铁路与现代出行',
      },
    },
    content: {
      hanzi: '在中国，坐高铁旅行非常方便。从北京到上海有一千三百多公里，坐高铁只需要四个多小时。车厢里不仅干净，而且很安静。',
      pinyin: 'Zài Zhōngguó, zuò gāotiě lǚxíng fēicháng fāngbiàn. Cóng Běijīng dào Shànghǎi yǒu yīqiān sānbǎi duō gōnglǐ, zuò gāotiě zhǐ xūyào sì gè duō xiǎoshí. Chēxiāng lǐ bùjǐn gānjìng, érqiě hěn ānjìng.',
      translation: {
        en: 'In China, traveling by high-speed train is very convenient. It is over 1,300 kilometers from Beijing to Shanghai, but the high-speed rail only takes around 4.5 hours. The carriages are not only clean, but also very quiet.',
        fr: 'En Chine, voyager en train à grande vitesse (Gaotie) est très pratique. Il y a plus de 1 300 km entre Pékin et Shanghai, mais le train ne met qu\'environ 4 heures et demie. Les wagons sont non seulement propres, mais aussi calmes.',
        zh: '在中国乘坐高铁出行极其便捷。京沪线全长1300多公里，高铁仅需4个多小时即可抵达。车厢内整洁舒适、平稳安静。',
      },
    },
    vocabulary: [
      {
        hanzi: '高铁',
        pinyin: 'gāotiě',
        partOfSpeech: 'noun',
        meaning: { en: 'high-speed rail', fr: 'train à grande vitesse', zh: '高铁' },
      },
      {
        hanzi: '方便',
        pinyin: 'fāngbiàn',
        partOfSpeech: 'adjective',
        meaning: { en: 'convenient / handy', fr: 'pratique / commode', zh: '方便' },
      },
      {
        hanzi: '安静',
        pinyin: 'ānjìng',
        partOfSpeech: 'adjective',
        meaning: { en: 'quiet / peaceful', fr: 'calme / silencieux', zh: '安静' },
      },
    ],
    culturalInsight: {
      en: 'High-speed trains reach speeds of 300–350 km/h. Passengers often balance a coin upright on the windowsill to showcase how smooth the ride is.',
      fr: 'Les trains à grande vitesse roulent entre 300 et 350 km/h. Les passagers s\'amusent souvent à poser une pièce sur la tranche pour illustrer la stabilité remarquable du train.',
      zh: '中国高铁时速达300至350公里，列车行驶时极高的平稳度广为人知。',
    },
    sourceQuery: 'China high speed rail modern travel facts',
    sourceTitle: 'China Railway High-Speed (CRH) Experience',
  },
  {
    id: 'daily-panda-conservation',
    date: new Date().toISOString().split('T')[0],
    level: 'hsk2',
    category: 'culture',
    title: {
      hanzi: '国宝大熊猫的生活',
      pinyin: 'Guóbǎo dàxióngmāo de shēnghuó',
      translation: {
        en: 'The Life of Giant Pandas',
        fr: 'La vie du trésor national : le grand panda',
        zh: '国宝大熊猫的生态与生活',
      },
    },
    content: {
      hanzi: '大熊猫是中国的“国宝”，它们主要生活在四川省的竹林里。一只成年大熊猫每天要吃很多新鲜的竹子，还会花很多时间睡觉。全世界的人都非常喜欢它们。',
      pinyin: 'Dàxióngmāo shì Zhōngguó de "guóbǎo", tāmen zhǔyào shēnghuó zài Sìchuān shěng de zhúlín lǐ. Yì zhī chéngnián dàxióngmāo měitiān yào chī hěn duō xīnxian de zhúzi, hái huì huā hěn duō shíjiān shuìjiào. Quán shìjiè de rén dōu fēicháng xǐhuan tāmen.',
      translation: {
        en: 'Giant pandas are China\'s "national treasure." They mainly live in the bamboo forests of Sichuan Province. An adult panda eats plenty of fresh bamboo each day and spends lots of time sleeping. People all around the world love them.',
        fr: 'Les pandas géants sont le trésor national de la Chine. Ils vivent dans les forêts de bambous du Sichuan. Un panda adulte mange beaucoup de bambou frais et dort beaucoup.',
        zh: '大熊猫是中国的国宝，主要栖息在四川省的竹林中，在全球深受喜爱。',
      },
    },
    vocabulary: [
      {
        hanzi: '大熊猫',
        pinyin: 'dàxióngmāo',
        partOfSpeech: 'noun',
        meaning: { en: 'giant panda', fr: 'panda géant', zh: '大熊猫' },
      },
      {
        hanzi: '新鲜',
        pinyin: 'xīnxian',
        partOfSpeech: 'adjective',
        meaning: { en: 'fresh', fr: 'frais', zh: '新鲜' },
      },
    ],
    culturalInsight: {
      en: 'In Chinese, "Panda" is 大熊猫 (literally "big bear cat"). Pandas symbolize peace and biodiversity protection worldwide.',
      fr: 'En chinois, panda s\'écrit 大熊猫 (littéralement grand ours-chat). Il est un symbole d\'amitié et de protection de la faune.',
      zh: '在汉语中，“大熊猫”兼具熊与猫的字面形态，是自然保护与友谊的象征。',
    },
    sourceQuery: 'Chengdu Giant Panda base research and sanctuary news',
    sourceTitle: 'Sichuan Giant Panda Habitats',
  },
  {
    id: 'daily-mid-autumn-tradition',
    date: new Date().toISOString().split('T')[0],
    level: 'hsk3',
    category: 'culture',
    title: {
      hanzi: '中秋节与团圆赏月',
      pinyin: 'Zhōngqiūjié yǔ tuányuán shǎng yuè',
      translation: {
        en: 'Mid-Autumn Festival & Moon Gazing',
        fr: 'La Fête de la Mi-Automne et la pleine lune',
        zh: '中秋佳节与赏月团圆',
      },
    },
    content: {
      hanzi: '农历八月十五是中秋节。这一天，全家人会聚在一起吃团圆饭、吃月饼和赏月。圆圆的月亮象征着幸福与团圆。',
      pinyin: 'Nónglì bā yuè shíwǔ shì Zhōngqiūjié. Zhè yì tiān, quán jiārén huì jù zài yìqǐ chī tuányuán fàn, chī yuèbǐng hé shǎng yuè. Yuányuán de yuèliang xiàngzhēng zhe xìngfú yǔ tuányuán.',
      translation: {
        en: 'The 15th day of the eighth lunar month is the Mid-Autumn Festival. On this day, the whole family gathers together to eat a reunion dinner, share mooncakes, and admire the full moon. The round moon symbolizes happiness and reunion.',
        fr: 'Le 15e jour du 8e mois lunaire est la Fête de la Mi-Automne. Toute la famille se réunit pour partager un repas, déguster des gâteaux de lune et admirer la pleine lune, symbole d\'harmonie et d\'unité.',
        zh: '农历八月十五为中秋节。全家团聚品尝月饼、观赏圆月，寓意吉祥团圆。',
      },
    },
    vocabulary: [
      {
        hanzi: '中秋节',
        pinyin: 'Zhōngqiūjié',
        partOfSpeech: 'noun',
        meaning: { en: 'Mid-Autumn Festival', fr: 'Fête de la Mi-Automne', zh: '中秋节' },
      },
      {
        hanzi: '团圆',
        pinyin: 'tuányuán',
        partOfSpeech: 'verb / adj',
        meaning: { en: 'to reunite / reunion', fr: 'se réunir / retrouvailles', zh: '团圆' },
      },
      {
        hanzi: '月饼',
        pinyin: 'yuèbǐng',
        partOfSpeech: 'noun',
        meaning: { en: 'mooncake', fr: 'gâteau de lune', zh: '月饼' },
      },
    ],
    culturalInsight: {
      en: 'The traditional greeting for this festival is "中秋快乐" (Zhōngqiū kuàilè - Happy Mid-Autumn Festival) or "花好月圆" (blossoming flowers and full moon, wishing family bliss).',
      fr: 'Le vœu traditionnel est "中秋快乐" (Joyeuse Fête de la Mi-Automne) ou "花好月圆" (souhaitant bonheur familial et plénitude).',
      zh: '中秋常用祝福语包括“中秋快乐”与成语“花好月圆”。',
    },
    sourceQuery: 'Mid autumn festival mooncakes traditions China',
    sourceTitle: 'Chinese Mid-Autumn Cultural Traditions',
  },
];

export interface DailyParams {
  level: string;
  category: string;
  language: string;
}

export async function getDailyChinese({ level, category }: DailyParams): Promise<Record<string, unknown>> {
  try {
    const ai = getGenAI();

    if (!ai) {
      // Return matching curated fallback if no API key configured
      const filtered = FALLBACK_SNIPPETS.filter((item) =>
        level === 'all' ? true : item.level === level
      );
      const chosen = filtered.length > 0 ? filtered[Math.floor(Math.random() * filtered.length)] : FALLBACK_SNIPPETS[0];
      return ({ success: true, data: chosen, isFallback: true });
    }

    const todayDate = new Date().toISOString().split('T')[0];

    // Search topics variety
    const topics = [
      'authentic Chinese food traditions & table manners',
      'famous historical landmarks in China (e.g. Forbidden City, Great Wall, West Lake Hangzhou)',
      'traditional Chinese festivals, tea ceremonies, or calligraphy arts',
      'modern lifestyle trends in China (high-speed rail, digital payments, park culture, electric bikes)',
      'interesting Chinese idioms (成语 chéngyǔ) with daily life usage',
      'nature and wildlife in China (giant pandas, Yunnan tea mountains, bamboo forests)',
      'contemporary friendly cultural news from China or Chinese language fun facts',
    ];

    const selectedTopic = topics[Math.floor(Math.random() * topics.length)];

    const targetHskLevel = level === 'all' ? 'HSK 2' : level.toUpperCase();

    const prompt = `Use Google Search to find an authentic, interesting cultural fact, daily lifestyle snippet, traditional custom, or positive cultural news story from China or the Chinese-speaking world related to: "${selectedTopic}".

Create a short Chinese Language Daily reading passage tailored for learners at the ${targetHskLevel} proficiency level.

Requirements:
1. Target level: ${targetHskLevel} (keep grammar and sentence structure clear, accessible, and natural).
2. The Chinese passage must be 2 to 4 sentences long (about 40-70 Chinese characters).
3. Provide accurate Pinyin with tone marks for every character in the title and content.
4. Provide translations in English, French, and Chinese.
5. Highlight 3-4 key vocabulary words with their Hanzi, Pinyin, part of speech, and English/French/Chinese definitions.
6. Include a concise "culturalInsight" (1-2 sentences) explaining the cultural background or etiquette.
7. Return ONLY valid JSON with no markdown formatting wraps (no \`\`\`json code fences), matching this exact JSON schema:

{
  "id": "daily-${Date.now()}",
  "date": "${todayDate}",
  "level": "${level === 'all' ? 'hsk2' : level}",
  "category": "${category === 'news' ? 'news' : category === 'culture' ? 'culture' : 'tradition'}",
  "title": {
    "hanzi": "string (4-10 characters)",
    "pinyin": "string with tone marks",
    "translation": {
      "en": "English title",
      "fr": "French title",
      "zh": "Chinese title"
    }
  },
  "content": {
    "hanzi": "string (2-4 simple natural sentences in Chinese characters)",
    "pinyin": "string (complete pinyin with tone marks)",
    "translation": {
      "en": "English translation",
      "fr": "French translation",
      "zh": "Chinese summary"
    }
  },
  "vocabulary": [
    {
      "hanzi": "string",
      "pinyin": "string",
      "partOfSpeech": "noun | verb | adjective | adverb | conjunction",
      "meaning": {
        "en": "English meaning",
        "fr": "French meaning",
        "zh": "Chinese meaning"
      }
    }
  ],
  "culturalInsight": {
    "en": "English explanation of cultural context",
    "fr": "French explanation of cultural context",
    "zh": "Chinese explanation of cultural context"
  },
  "sourceQuery": "exact search term used",
  "sourceTitle": "short title or topic found via search"
}`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.7-flash',
      contents: prompt,
      config: {
        tools: [{ googleSearch: {} }],
      },
    });

    const rawText = response.text || '';
    
    // Clean up code blocks if model wrapped output in ```json
    let cleanedJson = rawText.trim();
    if (cleanedJson.startsWith('```json')) {
      cleanedJson = cleanedJson.substring(7);
    } else if (cleanedJson.startsWith('```')) {
      cleanedJson = cleanedJson.substring(3);
    }
    if (cleanedJson.endsWith('```')) {
      cleanedJson = cleanedJson.substring(0, cleanedJson.length - 3);
    }
    cleanedJson = cleanedJson.trim();

    const parsedData = JSON.parse(cleanedJson);

    return ({
      success: true,
      data: parsedData,
      isFallback: false,
    });
  } catch (error: any) {
    console.error('Gemini Google Search Grounding Error:', error);
    // Fallback gracefully on any API or parsing error
    const filtered = FALLBACK_SNIPPETS.filter((item) =>
      level === 'all' ? true : item.level === level
    );
    const fallbackItem =
      filtered.length > 0
        ? filtered[Math.floor(Math.random() * filtered.length)]
        : FALLBACK_SNIPPETS[0];

    return ({
      success: true,
      data: fallbackItem,
      isFallback: true,
      errorNotice: error?.message || 'Generated using offline verified cultural library',
    });
  }
}
