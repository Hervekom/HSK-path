// Grammar points and dialogues for the thematic lessons (and the Pro lessons that had none).
// Pinyin generated from the official HSK 3.0 readings (src/data/hsk30Words.ts), then reviewed.
import type { HskLesson } from '../types';

export const LESSON_CONTENT: Record<string, Pick<HskLesson, 'grammarPoints' | 'dialogue'>> = {
  "lesson-hsk1-04": {
    "grammarPoints": [
      {
        "title": {
          "en": "Asking “how many” with 几 and 多少",
          "fr": "Demander « combien » avec 几 et 多少",
          "zh": "用“几”和“多少”问数字"
        },
        "structure": "几 + measure word + noun (small numbers) · 多少 (+ measure word) + noun (any number)",
        "explanation": {
          "en": "几 is used when the expected answer is small (usually under 10) and needs a measure word; 多少 works for any number, and the measure word is optional.",
          "fr": "几 s'emploie quand on attend un petit nombre (en général moins de 10) et demande un classificateur ; 多少 convient à tous les nombres, et le classificateur est facultatif.",
          "zh": "“几”多用于问十以内的数，后面要加量词；“多少”可以问任何数，量词可以省略。"
        },
        "example": {
          "hanzi": "你们学校有多少学生？",
          "pinyin": "Nǐmen xuéxiào yǒu duōshao xuéshēng?",
          "translation": {
            "en": "How many students are there at your school?",
            "fr": "Combien d'élèves y a-t-il dans ton école ?",
            "zh": "你们学校有多少学生？"
          }
        }
      }
    ],
    "dialogue": [
      {
        "speaker": "安娜",
        "hanzi": "你家有几口人？",
        "pinyin": "Nǐ jiā yǒu jǐ kǒu rén?",
        "meaning": {
          "en": "How many people are in your family?",
          "fr": "Combien de personnes y a-t-il dans ta famille ?",
          "zh": "你家有几口人？"
        },
        "audioText": "你家有几口人？"
      },
      {
        "speaker": "大卫",
        "hanzi": "我家有五口人。你呢？",
        "pinyin": "Wǒ jiā yǒu wǔ kǒu rén. Nǐ ne?",
        "meaning": {
          "en": "There are five of us. And you?",
          "fr": "Nous sommes cinq. Et toi ?",
          "zh": "我家有五口人。你呢？"
        },
        "audioText": "我家有五口人。你呢？"
      },
      {
        "speaker": "安娜",
        "hanzi": "三口人。你们学校有多少学生？",
        "pinyin": "Sān kǒu rén. Nǐmen xuéxiào yǒu duōshao xuéshēng?",
        "meaning": {
          "en": "Three. How many students are there at your school?",
          "fr": "Trois. Combien d'élèves y a-t-il dans ton école ?",
          "zh": "三口人。你们学校有多少学生？"
        },
        "audioText": "三口人。你们学校有多少学生？"
      },
      {
        "speaker": "大卫",
        "hanzi": "两千零八十个。",
        "pinyin": "Liǎngqiānlíngbāshí ge.",
        "meaning": {
          "en": "Two thousand and eighty.",
          "fr": "Deux mille quatre-vingts.",
          "zh": "两千零八十个。"
        },
        "audioText": "两千零八十个。"
      },
      {
        "speaker": "安娜",
        "hanzi": "真多！我们学校有九百六十个学生，一半是中国人。",
        "pinyin": "Zhēn duō! Wǒmen xuéxiào yǒu jiǔbǎiliùshí ge xuéshēng, yíbàn shì Zhōngguó rén.",
        "meaning": {
          "en": "That's a lot! Our school has nine hundred and sixty students; half of them are Chinese.",
          "fr": "C'est beaucoup ! Notre école compte neuf cent soixante élèves, dont la moitié sont chinois.",
          "zh": "真多！我们学校有九百六十个学生，一半是中国人。"
        },
        "audioText": "真多！我们学校有九百六十个学生，一半是中国人。"
      },
      {
        "speaker": "大卫",
        "hanzi": "我们班有十七个人，有八个是中国人。",
        "pinyin": "Wǒmen bān yǒu shíqī ge rén, yǒu bā ge shì Zhōngguó rén.",
        "meaning": {
          "en": "There are seventeen people in my class, and eight are Chinese.",
          "fr": "Dans ma classe, nous sommes dix-sept, dont huit Chinois.",
          "zh": "我们班有十七个人，有八个是中国人。"
        },
        "audioText": "我们班有十七个人，有八个是中国人。"
      }
    ]
  },
  "lesson-hsk1-05": {
    "grammarPoints": [
      {
        "title": {
          "en": "Dropping 的 before family members",
          "fr": "Omettre 的 devant les membres de la famille",
          "zh": "亲属称谓前可以省略“的”"
        },
        "structure": "Pronoun + (的) + family member: 我妈妈 = 我的妈妈",
        "explanation": {
          "en": "Before family members and close relationships, 的 is usually left out: 我哥哥, 你家. With other nouns, keep it: 我的书.",
          "fr": "Devant un membre de la famille ou un lien proche, on omet généralement 的 : 我哥哥, 你家. Avec les autres noms, on le garde : 我的书.",
          "zh": "人称代词后面是亲属称谓或“家”时，一般省略“的”，如“我哥哥”“你家”；其他名词前要用“的”，如“我的书”。"
        },
        "example": {
          "hanzi": "这是我姐姐，那是她女儿。",
          "pinyin": "Zhè shì wǒ jiějie, nà shì tā nǚ'ér.",
          "translation": {
            "en": "This is my older sister, and that is her daughter.",
            "fr": "Voici ma grande sœur, et voilà sa fille.",
            "zh": "这是我姐姐，那是她女儿。"
          }
        }
      }
    ],
    "dialogue": [
      {
        "speaker": "小明",
        "hanzi": "大家好！这是我家人。",
        "pinyin": "Dàjiā hǎo! Zhè shì wǒ jiārén.",
        "meaning": {
          "en": "Hello everyone! This is my family.",
          "fr": "Bonjour à tous ! Voici ma famille.",
          "zh": "大家好！这是我家人。"
        },
        "audioText": "大家好！这是我家人。"
      },
      {
        "speaker": "安娜",
        "hanzi": "这个小朋友是你弟弟吗？",
        "pinyin": "Zhège xiǎopéngyǒu shì nǐ dìdi ma?",
        "meaning": {
          "en": "Is this little one your younger brother?",
          "fr": "Ce petit, c'est ton petit frère ?",
          "zh": "这个小朋友是你弟弟吗？"
        },
        "audioText": "这个小朋友是你弟弟吗？"
      },
      {
        "speaker": "小明",
        "hanzi": "不是，他是我哥哥的儿子。",
        "pinyin": "Bú shì, tā shì wǒ gēge de érzi.",
        "meaning": {
          "en": "No, he's my older brother's son.",
          "fr": "Non, c'est le fils de mon grand frère.",
          "zh": "不是，他是我哥哥的儿子。"
        },
        "audioText": "不是，他是我哥哥的儿子。"
      },
      {
        "speaker": "安娜",
        "hanzi": "你有姐姐吗？",
        "pinyin": "Nǐ yǒu jiějie ma?",
        "meaning": {
          "en": "Do you have an older sister?",
          "fr": "Tu as une grande sœur ?",
          "zh": "你有姐姐吗？"
        },
        "audioText": "你有姐姐吗？"
      },
      {
        "speaker": "小明",
        "hanzi": "有，我有一个姐姐和一个妹妹。姐姐有两个孩子，一男一女。",
        "pinyin": "Yǒu, wǒ yǒu yí ge jiějie hé yí ge mèimei. Jiějie yǒu liǎng ge háizi, yì nán yì nǚ.",
        "meaning": {
          "en": "Yes, I have an older sister and a younger sister. My older sister has two children, a boy and a girl.",
          "fr": "Oui, j'ai une grande sœur et une petite sœur. Ma grande sœur a deux enfants, un garçon et une fille.",
          "zh": "有，我有一个姐姐和一个妹妹。姐姐有两个孩子，一男一女。"
        },
        "audioText": "有，我有一个姐姐和一个妹妹。姐姐有两个孩子，一男一女。"
      },
      {
        "speaker": "安娜",
        "hanzi": "她先生是老师吗？",
        "pinyin": "Tā xiānsheng shì lǎoshī ma?",
        "meaning": {
          "en": "Is her husband a teacher?",
          "fr": "Son mari est enseignant ?",
          "zh": "她先生是老师吗？"
        },
        "audioText": "她先生是老师吗？"
      },
      {
        "speaker": "小明",
        "hanzi": "是，他是我们学校的老师。",
        "pinyin": "Shì, tā shì wǒmen xuéxiào de lǎoshī.",
        "meaning": {
          "en": "Yes, he teaches at our school.",
          "fr": "Oui, il enseigne dans notre école.",
          "zh": "是，他是我们学校的老师。"
        },
        "audioText": "是，他是我们学校的老师。"
      }
    ]
  },
  "lesson-hsk1-06": {
    "grammarPoints": [
      {
        "title": {
          "en": "Making plurals with 们",
          "fr": "Le pluriel avec 们",
          "zh": "用“们”表示复数"
        },
        "structure": "我/你/他/她/它 + 们 · 同学们、朋友们 (people only)",
        "explanation": {
          "en": "Add 们 to a pronoun or to a noun for people to make it plural. Nouns for things never take 们, and 们 is dropped after a number: 三个同学, not 三个同学们.",
          "fr": "On ajoute 们 à un pronom ou à un nom de personne pour former le pluriel. Les noms de choses ne le prennent jamais, et on l'omet après un nombre : 三个同学 et non 三个同学们.",
          "zh": "人称代词或指人的名词后加“们”表示复数。指物的名词不加“们”；前面有数量词时也不加，如“三个同学”。"
        },
        "example": {
          "hanzi": "同学们，你们好！",
          "pinyin": "Tóngxuémen, nǐmen hǎo!",
          "translation": {
            "en": "Hello, everyone!",
            "fr": "Bonjour à tous !",
            "zh": "同学们，你们好！"
          }
        }
      }
    ],
    "dialogue": [
      {
        "speaker": "王老师",
        "hanzi": "同学们好！",
        "pinyin": "Tóngxuémen hǎo!",
        "meaning": {
          "en": "Hello, everyone!",
          "fr": "Bonjour à tous !",
          "zh": "同学们好！"
        },
        "audioText": "同学们好！"
      },
      {
        "speaker": "同学们",
        "hanzi": "老师好！",
        "pinyin": "Lǎoshī hǎo!",
        "meaning": {
          "en": "Hello, teacher!",
          "fr": "Bonjour, professeur !",
          "zh": "老师好！"
        },
        "audioText": "老师好！"
      },
      {
        "speaker": "王老师",
        "hanzi": "他是谁？你们认识他吗？",
        "pinyin": "Tā shì shéi? Nǐmen rènshi tā ma?",
        "meaning": {
          "en": "Who is he? Do you know him?",
          "fr": "Qui est-ce ? Vous le connaissez ?",
          "zh": "他是谁？你们认识他吗？"
        },
        "audioText": "他是谁？你们认识他吗？"
      },
      {
        "speaker": "安娜",
        "hanzi": "他是我朋友大卫，是我们的新同学。",
        "pinyin": "Tā shì wǒ péngyou Dàwèi, shì wǒmen de xīn tóngxué.",
        "meaning": {
          "en": "He's my friend David, our new classmate.",
          "fr": "C'est mon ami David, notre nouveau camarade.",
          "zh": "他是我朋友大卫，是我们的新同学。"
        },
        "audioText": "他是我朋友大卫，是我们的新同学。"
      },
      {
        "speaker": "大卫",
        "hanzi": "王老师，您好！我是大卫。",
        "pinyin": "Wáng lǎoshī, nín hǎo! Wǒ shì Dàwèi.",
        "meaning": {
          "en": "Hello, Mr Wang! I'm David.",
          "fr": "Bonjour, professeur Wang ! Je suis David.",
          "zh": "王老师，您好！我是大卫。"
        },
        "audioText": "王老师，您好！我是大卫。"
      },
      {
        "speaker": "王老师",
        "hanzi": "你好！她们也是你的朋友吗？",
        "pinyin": "Nǐ hǎo! Tāmen yě shì nǐ de péngyou ma?",
        "meaning": {
          "en": "Hello! Are they your friends too?",
          "fr": "Bonjour ! Elles sont aussi tes amies ?",
          "zh": "你好！她们也是你的朋友吗？"
        },
        "audioText": "你好！她们也是你的朋友吗？"
      },
      {
        "speaker": "大卫",
        "hanzi": "是，她是我女朋友，她是我同学。",
        "pinyin": "Shì, tā shì wǒ nǚpéngyou, tā shì wǒ tóngxué.",
        "meaning": {
          "en": "Yes: she's my girlfriend, and she's my classmate.",
          "fr": "Oui : elle, c'est ma petite amie, et elle, c'est ma camarade.",
          "zh": "是，她是我女朋友，她是我同学。"
        },
        "audioText": "是，她是我女朋友，她是我同学。"
      }
    ]
  },
  "lesson-hsk1-07": {
    "grammarPoints": [
      {
        "title": {
          "en": "This, that, which: 这/那/哪 + measure word",
          "fr": "Ceci, cela, lequel : 这/那/哪 + classificateur",
          "zh": "这、那、哪 + 量词 + 名词"
        },
        "structure": "这/那/哪 + measure word + noun: 这个人、那本书、哪个老师 · places: 这儿、那儿、哪儿",
        "explanation": {
          "en": "这 points to something near, 那 to something far, and 哪 asks “which”. Before a noun they need a measure word. For places, use 这儿/这里, 那儿/那里 and 哪儿/哪里.",
          "fr": "这 désigne ce qui est proche, 那 ce qui est loin, et 哪 demande « lequel ». Devant un nom, il faut un classificateur. Pour les lieux : 这儿/这里, 那儿/那里 et 哪儿/哪里.",
          "zh": "“这”指近处，“那”指远处，“哪”用来提问。后面接名词时要加量词。问地方用“这儿/这里、那儿/那里、哪儿/哪里”。"
        },
        "example": {
          "hanzi": "你要哪个？我要这个。",
          "pinyin": "Nǐ yào nǎge? Wǒ yào zhège.",
          "translation": {
            "en": "Which one do you want? I want this one.",
            "fr": "Lequel veux-tu ? Je veux celui-ci.",
            "zh": "你要哪个？我要这个。"
          }
        }
      }
    ],
    "dialogue": [
      {
        "speaker": "大卫",
        "hanzi": "请问，这里是哪儿？",
        "pinyin": "Qǐngwèn, zhèlǐ shì nǎr?",
        "meaning": {
          "en": "Excuse me, where are we?",
          "fr": "Excusez-moi, où sommes-nous ?",
          "zh": "请问，这里是哪儿？"
        },
        "audioText": "请问，这里是哪儿？"
      },
      {
        "speaker": "安娜",
        "hanzi": "这儿是学校的书店。",
        "pinyin": "Zhèr shì xuéxiào de shūdiàn.",
        "meaning": {
          "en": "This is the school bookshop.",
          "fr": "Ici, c'est la librairie de l'école.",
          "zh": "这儿是学校的书店。"
        },
        "audioText": "这儿是学校的书店。"
      },
      {
        "speaker": "大卫",
        "hanzi": "那边那些人在做什么？",
        "pinyin": "Nàbiān nàxiē rén zài zuò shénme?",
        "meaning": {
          "en": "What are those people over there doing?",
          "fr": "Que font ces gens là-bas ?",
          "zh": "那边那些人在做什么？"
        },
        "audioText": "那边那些人在做什么？"
      },
      {
        "speaker": "安娜",
        "hanzi": "他们在买书。你要买什么书？",
        "pinyin": "Tāmen zài mǎi shū. Nǐ yào mǎi shénme shū?",
        "meaning": {
          "en": "They're buying books. What book do you want to buy?",
          "fr": "Ils achètent des livres. Quel livre veux-tu acheter ?",
          "zh": "他们在买书。你要买什么书？"
        },
        "audioText": "他们在买书。你要买什么书？"
      },
      {
        "speaker": "大卫",
        "hanzi": "汉语书。哪些书好？",
        "pinyin": "Hànyǔ shū. Nǎxiē shū hǎo?",
        "meaning": {
          "en": "Chinese books. Which ones are good?",
          "fr": "Des livres de chinois. Lesquels sont bien ?",
          "zh": "汉语书。哪些书好？"
        },
        "audioText": "汉语书。哪些书好？"
      },
      {
        "speaker": "安娜",
        "hanzi": "这些都很好。那个老师在那儿，你可以问他。",
        "pinyin": "Zhèxiē dōu hěn hǎo. Nàge lǎoshī zài nàr, nǐ kěyǐ wèn tā.",
        "meaning": {
          "en": "These are all good. That teacher is over there; you can ask him.",
          "fr": "Ceux-ci sont tous bien. Ce professeur est là-bas, tu peux lui demander.",
          "zh": "这些都很好。那个老师在那儿，你可以问他。"
        },
        "audioText": "这些都很好。那个老师在那儿，你可以问他。"
      }
    ]
  },
  "lesson-hsk1-08": {
    "grammarPoints": [
      {
        "title": {
          "en": "Date order: year, month, day, weekday",
          "fr": "L'ordre de la date : année, mois, jour, jour de la semaine",
          "zh": "日期的顺序：年、月、日、星期"
        },
        "structure": "二〇二六年十月二十八日（号），星期三",
        "explanation": {
          "en": "Chinese dates go from the largest unit to the smallest. Years are read digit by digit, 号 is used in speech and 日 in writing, and weekdays are 星期 + 一 to 六, with 星期日 or 星期天 for Sunday.",
          "fr": "En chinois, la date va de la plus grande unité à la plus petite. L'année se lit chiffre par chiffre, 号 s'emploie à l'oral et 日 à l'écrit, et les jours de la semaine sont 星期 + 一 à 六, avec 星期日 ou 星期天 pour dimanche.",
          "zh": "汉语日期从大到小：年、月、日、星期。年份一个数字一个数字地读；口语说“号”，书面语用“日”；星期一到星期六，星期日也说星期天。"
        },
        "example": {
          "hanzi": "今天是十月二十八号，星期三。",
          "pinyin": "Jīntiān shì shí yuè èrshíbā hào, xīngqīsān.",
          "translation": {
            "en": "Today is Wednesday 28 October.",
            "fr": "Aujourd'hui, c'est le mercredi 28 octobre.",
            "zh": "今天是十月二十八号，星期三。"
          }
        }
      }
    ],
    "dialogue": [
      {
        "speaker": "安娜",
        "hanzi": "今天几月几号？",
        "pinyin": "Jīntiān jǐ yuè jǐ hào?",
        "meaning": {
          "en": "What's the date today?",
          "fr": "Quelle est la date aujourd'hui ?",
          "zh": "今天几月几号？"
        },
        "audioText": "今天几月几号？"
      },
      {
        "speaker": "大卫",
        "hanzi": "今天九月十号，星期五。",
        "pinyin": "Jīntiān jiǔ yuè shí hào, xīngqīwǔ.",
        "meaning": {
          "en": "Today is Friday 10 September.",
          "fr": "Aujourd'hui, c'est le vendredi 10 septembre.",
          "zh": "今天九月十号，星期五。"
        },
        "audioText": "今天九月十号，星期五。"
      },
      {
        "speaker": "安娜",
        "hanzi": "明天星期六，你有时间吗？",
        "pinyin": "Míngtiān xīngqīliù, nǐ yǒu shíjiān ma?",
        "meaning": {
          "en": "Tomorrow is Saturday. Are you free?",
          "fr": "Demain, c'est samedi. Tu as le temps ?",
          "zh": "明天星期六，你有时间吗？"
        },
        "audioText": "明天星期六，你有时间吗？"
      },
      {
        "speaker": "大卫",
        "hanzi": "上午没有，下午有两个小时。",
        "pinyin": "Shàngwǔ méiyǒu, xiàwǔ yǒu liǎng ge xiǎoshí.",
        "meaning": {
          "en": "Not in the morning, but I have two hours in the afternoon.",
          "fr": "Pas le matin, mais l'après-midi j'ai deux heures.",
          "zh": "上午没有，下午有两个小时。"
        },
        "audioText": "上午没有，下午有两个小时。"
      },
      {
        "speaker": "安娜",
        "hanzi": "你去年来中国了吗？",
        "pinyin": "Nǐ qùnián lái Zhōngguó le ma?",
        "meaning": {
          "en": "Did you come to China last year?",
          "fr": "Tu es venu en Chine l'année dernière ?",
          "zh": "你去年来中国了吗？"
        },
        "audioText": "你去年来中国了吗？"
      },
      {
        "speaker": "大卫",
        "hanzi": "是，去年九月。明年我回家。",
        "pinyin": "Shì, qùnián jiǔ yuè. Míngnián wǒ huí jiā.",
        "meaning": {
          "en": "Yes, last September. Next year I'm going home.",
          "fr": "Oui, en septembre dernier. L'année prochaine, je rentre chez moi.",
          "zh": "是，去年九月。明年我回家。"
        },
        "audioText": "是，去年九月。明年我回家。"
      },
      {
        "speaker": "安娜",
        "hanzi": "好，那我们星期天下午见！",
        "pinyin": "Hǎo, nà wǒmen xīngqītiān xiàwǔ jiàn!",
        "meaning": {
          "en": "OK, see you on Sunday afternoon then!",
          "fr": "D'accord, à dimanche après-midi alors !",
          "zh": "好，那我们星期天下午见！"
        },
        "audioText": "好，那我们星期天下午见！"
      }
    ]
  },
  "lesson-hsk1-09": {
    "grammarPoints": [
      {
        "title": {
          "en": "Time words go before the verb",
          "fr": "Les mots de temps se placent avant le verbe",
          "zh": "时间词放在动词前"
        },
        "structure": "Subject + time + verb (+ object) · Time + subject + verb",
        "explanation": {
          "en": "In Chinese, when something happens comes before the action: 我早上七点起床, never at the end as in English. The time word can also open the sentence.",
          "fr": "En chinois, le moment se place avant l'action : 我早上七点起床, jamais à la fin comme en français. Il peut aussi ouvrir la phrase.",
          "zh": "时间词放在动词前面，可以在主语后，也可以在句首，如“我早上七点起床”“晚上我在家”。"
        },
        "example": {
          "hanzi": "我中午在学校吃午饭。",
          "pinyin": "Wǒ zhōngwǔ zài xuéxiào chī wǔfàn.",
          "translation": {
            "en": "I have lunch at school at noon.",
            "fr": "Je déjeune à l'école à midi.",
            "zh": "我中午在学校吃午饭。"
          }
        }
      }
    ],
    "dialogue": [
      {
        "speaker": "小明",
        "hanzi": "你早上几点起床？",
        "pinyin": "Nǐ zǎoshang jǐ diǎn qǐchuáng?",
        "meaning": {
          "en": "What time do you get up?",
          "fr": "À quelle heure te lèves-tu le matin ?",
          "zh": "你早上几点起床？"
        },
        "audioText": "你早上几点起床？"
      },
      {
        "speaker": "安娜",
        "hanzi": "我六点半起床，七点吃早饭。",
        "pinyin": "Wǒ liù diǎn bàn qǐchuáng, qī diǎn chī zǎofàn.",
        "meaning": {
          "en": "I get up at half past six and have breakfast at seven.",
          "fr": "Je me lève à six heures et demie et je prends le petit-déjeuner à sept heures.",
          "zh": "我六点半起床，七点吃早饭。"
        },
        "audioText": "我六点半起床，七点吃早饭。"
      },
      {
        "speaker": "小明",
        "hanzi": "真早！上午你做什么？",
        "pinyin": "Zhēn zǎo! Shàngwǔ nǐ zuò shénme?",
        "meaning": {
          "en": "So early! What do you do in the morning?",
          "fr": "C'est tôt ! Que fais-tu le matin ?",
          "zh": "真早！上午你做什么？"
        },
        "audioText": "真早！上午你做什么？"
      },
      {
        "speaker": "安娜",
        "hanzi": "上午上课，中午在学校吃午饭，下午去书店。",
        "pinyin": "Shàngwǔ shàngkè, zhōngwǔ zài xuéxiào chī wǔfàn, xiàwǔ qù shūdiàn.",
        "meaning": {
          "en": "Classes in the morning, lunch at school at noon, and the bookshop in the afternoon.",
          "fr": "Cours le matin, déjeuner à l'école à midi, et la librairie l'après-midi.",
          "zh": "上午上课，中午在学校吃午饭，下午去书店。"
        },
        "audioText": "上午上课，中午在学校吃午饭，下午去书店。"
      },
      {
        "speaker": "小明",
        "hanzi": "晚上呢？",
        "pinyin": "Wǎnshang ne?",
        "meaning": {
          "en": "And in the evening?",
          "fr": "Et le soir ?",
          "zh": "晚上呢？"
        },
        "audioText": "晚上呢？"
      },
      {
        "speaker": "安娜",
        "hanzi": "晚上七点做晚饭，十一点睡觉。白天太忙了！",
        "pinyin": "Wǎnshang qī diǎn zuò wǎnfàn, shíyī diǎn shuìjiào. Báitiān tài máng le!",
        "meaning": {
          "en": "I cook dinner at seven and go to bed at eleven. The days are so busy!",
          "fr": "Je prépare le dîner à sept heures et je me couche à onze heures. Les journées sont si chargées !",
          "zh": "晚上七点做晚饭，十一点睡觉。白天太忙了！"
        },
        "audioText": "晚上七点做晚饭，十一点睡觉。白天太忙了！"
      }
    ]
  },
  "lesson-hsk1-10": {
    "grammarPoints": [
      {
        "title": {
          "en": "Question words stay in place: 什么",
          "fr": "Les mots interrogatifs restent en place : 什么",
          "zh": "疑问词“什么”留在原位"
        },
        "structure": "Subject + verb + 什么 (+ noun)?  →  我吃米饭。",
        "explanation": {
          "en": "To ask a question, put 什么 where the answer will go. The word order does not change: 你吃什么？ – 我吃饺子。",
          "fr": "Pour poser une question, on met 什么 à la place de la réponse attendue, sans changer l'ordre des mots : 你吃什么？ – 我吃饺子。",
          "zh": "用“什么”提问时，语序不变，把“什么”放在答案的位置上：你吃什么？——我吃饺子。"
        },
        "example": {
          "hanzi": "你喝什么？我喝水。",
          "pinyin": "Nǐ hē shénme? Wǒ hē shuǐ.",
          "translation": {
            "en": "What are you drinking? I'm drinking water.",
            "fr": "Que bois-tu ? Je bois de l'eau.",
            "zh": "你喝什么？我喝水。"
          }
        }
      }
    ],
    "dialogue": [
      {
        "speaker": "妈妈",
        "hanzi": "小明，你中午想吃什么？",
        "pinyin": "Xiǎomíng, nǐ zhōngwǔ xiǎng chī shénme?",
        "meaning": {
          "en": "Xiaoming, what do you want for lunch?",
          "fr": "Xiaoming, qu'est-ce que tu veux manger à midi ?",
          "zh": "小明，你中午想吃什么？"
        },
        "audioText": "小明，你中午想吃什么？"
      },
      {
        "speaker": "小明",
        "hanzi": "我想吃饺子。",
        "pinyin": "Wǒ xiǎng chī jiǎozi.",
        "meaning": {
          "en": "I'd like dumplings.",
          "fr": "J'aimerais des raviolis.",
          "zh": "我想吃饺子。"
        },
        "audioText": "我想吃饺子。"
      },
      {
        "speaker": "妈妈",
        "hanzi": "家里没有饺子，有面条儿和包子。",
        "pinyin": "Jiā li méiyǒu jiǎozi, yǒu miàntiáor hé bāozi.",
        "meaning": {
          "en": "We have no dumplings at home, but we have noodles and steamed buns.",
          "fr": "On n'a pas de raviolis à la maison, mais il y a des nouilles et des brioches.",
          "zh": "家里没有饺子，有面条儿和包子。"
        },
        "audioText": "家里没有饺子，有面条儿和包子。"
      },
      {
        "speaker": "小明",
        "hanzi": "那我吃包子，再吃一个鸡蛋。",
        "pinyin": "Nà wǒ chī bāozi, zài chī yí ge jīdàn.",
        "meaning": {
          "en": "Then I'll have buns, and an egg too.",
          "fr": "Alors je prends des brioches, et aussi un œuf.",
          "zh": "那我吃包子，再吃一个鸡蛋。"
        },
        "audioText": "那我吃包子，再吃一个鸡蛋。"
      },
      {
        "speaker": "妈妈",
        "hanzi": "好，我去做饭。你还要米饭吗？",
        "pinyin": "Hǎo, wǒ qù zuò fàn. Nǐ hái yào mǐfàn ma?",
        "meaning": {
          "en": "OK, I'll cook. Do you want rice as well?",
          "fr": "D'accord, je vais cuisiner. Tu veux aussi du riz ?",
          "zh": "好，我去做饭。你还要米饭吗？"
        },
        "audioText": "好，我去做饭。你还要米饭吗？"
      },
      {
        "speaker": "小明",
        "hanzi": "不要了。妈妈做的菜真好吃！",
        "pinyin": "Búyào le. Māma zuò de cài zhēn hǎochī!",
        "meaning": {
          "en": "No thanks. Your cooking is delicious, Mum!",
          "fr": "Non merci. Ta cuisine est délicieuse, maman !",
          "zh": "不要了。妈妈做的菜真好吃！"
        },
        "audioText": "不要了。妈妈做的菜真好吃！"
      }
    ]
  },
  "lesson-hsk1-11": {
    "grammarPoints": [
      {
        "title": {
          "en": "Talking about money: 块 and 元",
          "fr": "Parler d'argent : 块 et 元",
          "zh": "钱的说法：块和元"
        },
        "structure": "number + 块 (spoken) / 元 (written) (+ 钱) · ……多少钱？",
        "explanation": {
          "en": "Prices are asked with 多少钱？. In speech the yuan is 块; 元 is the written form seen on price tags. Before 块, 二 becomes 两: 两块.",
          "fr": "On demande un prix avec 多少钱？. À l'oral, le yuan se dit 块 ; 元 est la forme écrite des étiquettes. Devant 块, on dit 两 et non 二 : 两块.",
          "zh": "问价钱用“多少钱？”。口语说“块”，书面语用“元”。“二”在“块”前说“两”：两块。"
        },
        "example": {
          "hanzi": "这杯茶多少钱？十五块。",
          "pinyin": "Zhè bēi chá duōshao qián? Shíwǔ kuài.",
          "translation": {
            "en": "How much is this cup of tea? Fifteen yuan.",
            "fr": "Combien coûte cette tasse de thé ? Quinze yuans.",
            "zh": "这杯茶多少钱？十五块。"
          }
        }
      }
    ],
    "dialogue": [
      {
        "speaker": "安娜",
        "hanzi": "请问，这个杯子多少钱？",
        "pinyin": "Qǐngwèn, zhège bēizi duōshao qián?",
        "meaning": {
          "en": "Excuse me, how much is this cup?",
          "fr": "Excusez-moi, combien coûte cette tasse ?",
          "zh": "请问，这个杯子多少钱？"
        },
        "audioText": "请问，这个杯子多少钱？"
      },
      {
        "speaker": "店员",
        "hanzi": "三十八块。",
        "pinyin": "Sānshíbā kuài.",
        "meaning": {
          "en": "Thirty-eight yuan.",
          "fr": "Trente-huit yuans.",
          "zh": "三十八块。"
        },
        "audioText": "三十八块。"
      },
      {
        "speaker": "安娜",
        "hanzi": "太贵了！超市的杯子很便宜。",
        "pinyin": "Tài guì le! Chāoshì de bēizi hěn piányi.",
        "meaning": {
          "en": "Too expensive! Cups are cheap at the supermarket.",
          "fr": "C'est trop cher ! Au supermarché, les tasses ne sont pas chères.",
          "zh": "太贵了！超市的杯子很便宜。"
        },
        "audioText": "太贵了！超市的杯子很便宜。"
      },
      {
        "speaker": "店员",
        "hanzi": "我们的杯子很好。你还买什么东西？",
        "pinyin": "Wǒmen de bēizi hěn hǎo. Nǐ hái mǎi shénme dōngxi?",
        "meaning": {
          "en": "Our cups are good quality. What else are you buying?",
          "fr": "Nos tasses sont de bonne qualité. Vous achetez autre chose ?",
          "zh": "我们的杯子很好。你还买什么东西？"
        },
        "audioText": "我们的杯子很好。你还买什么东西？"
      },
      {
        "speaker": "安娜",
        "hanzi": "我还要买茶和牛奶。",
        "pinyin": "Wǒ hái yào mǎi chá hé niúnǎi.",
        "meaning": {
          "en": "I also want to buy tea and milk.",
          "fr": "Je veux aussi acheter du thé et du lait.",
          "zh": "我还要买茶和牛奶。"
        },
        "audioText": "我还要买茶和牛奶。"
      },
      {
        "speaker": "店员",
        "hanzi": "好，茶二十块，牛奶八块。",
        "pinyin": "Hǎo, chá èrshí kuài, niúnǎi bā kuài.",
        "meaning": {
          "en": "OK, the tea is twenty yuan and the milk is eight.",
          "fr": "D'accord, le thé fait vingt yuans et le lait huit.",
          "zh": "好，茶二十块，牛奶八块。"
        },
        "audioText": "好，茶二十块，牛奶八块。"
      },
      {
        "speaker": "安娜",
        "hanzi": "给你钱。这个商店卖书吗？",
        "pinyin": "Gěi nǐ qián. Zhège shāngdiàn mài shū ma?",
        "meaning": {
          "en": "Here's the money. Does this shop sell books?",
          "fr": "Voici l'argent. Ce magasin vend des livres ?",
          "zh": "给你钱。这个商店卖书吗？"
        },
        "audioText": "给你钱。这个商店卖书吗？"
      },
      {
        "speaker": "店员",
        "hanzi": "不卖，书店在那边。",
        "pinyin": "Bú mài, shūdiàn zài nàbiān.",
        "meaning": {
          "en": "No, the bookshop is over there.",
          "fr": "Non, la librairie est là-bas.",
          "zh": "不卖，书店在那边。"
        },
        "audioText": "不卖，书店在那边。"
      }
    ]
  },
  "lesson-hsk1-12": {
    "grammarPoints": [
      {
        "title": {
          "en": "Saying where you do something: 在 + place + verb",
          "fr": "Dire où l'on fait quelque chose : 在 + lieu + verbe",
          "zh": "“在”+地点+动词"
        },
        "structure": "Subject + 在 + place + verb (+ object)",
        "explanation": {
          "en": "The place comes before the action, introduced by 在: 我在大学学习. Saying 我学习在大学 is wrong.",
          "fr": "Le lieu se place avant l'action, introduit par 在 : 我在大学学习. « 我学习在大学 » est incorrect.",
          "zh": "表示动作发生的地点，“在+地点”要放在动词前面：我在大学学习，不能说“我学习在大学”。"
        },
        "example": {
          "hanzi": "我妹妹在小学上学。",
          "pinyin": "Wǒ mèimei zài xiǎoxué shàngxué.",
          "translation": {
            "en": "My younger sister goes to primary school.",
            "fr": "Ma petite sœur va à l'école primaire.",
            "zh": "我妹妹在小学上学。"
          }
        }
      }
    ],
    "dialogue": [
      {
        "speaker": "大卫",
        "hanzi": "你是大学生吗？",
        "pinyin": "Nǐ shì dàxuéshēng ma?",
        "meaning": {
          "en": "Are you a university student?",
          "fr": "Tu es étudiant à l'université ?",
          "zh": "你是大学生吗？"
        },
        "audioText": "你是大学生吗？"
      },
      {
        "speaker": "小明",
        "hanzi": "不是，我是中学生。你呢？",
        "pinyin": "Bú shì, wǒ shì zhōngxuéshēng. Nǐ ne?",
        "meaning": {
          "en": "No, I'm at secondary school. And you?",
          "fr": "Non, je suis collégien. Et toi ?",
          "zh": "不是，我是中学生。你呢？"
        },
        "audioText": "不是，我是中学生。你呢？"
      },
      {
        "speaker": "大卫",
        "hanzi": "我在大学学习汉语。",
        "pinyin": "Wǒ zài dàxué xuéxí Hànyǔ.",
        "meaning": {
          "en": "I study Chinese at university.",
          "fr": "J'étudie le chinois à l'université.",
          "zh": "我在大学学习汉语。"
        },
        "audioText": "我在大学学习汉语。"
      },
      {
        "speaker": "小明",
        "hanzi": "你们几点上课？",
        "pinyin": "Nǐmen jǐ diǎn shàngkè?",
        "meaning": {
          "en": "What time do your classes start?",
          "fr": "À quelle heure commencent vos cours ?",
          "zh": "你们几点上课？"
        },
        "audioText": "你们几点上课？"
      },
      {
        "speaker": "大卫",
        "hanzi": "八点上课，十二点下课。老师很好，学生也很多。",
        "pinyin": "Bā diǎn shàngkè, shí'èr diǎn xiàkè. Lǎoshī hěn hǎo, xuéshēng yě hěn duō.",
        "meaning": {
          "en": "Class starts at eight and ends at twelve. The teachers are good, and there are lots of students.",
          "fr": "Les cours commencent à huit heures et finissent à midi. Les profs sont bien et il y a beaucoup d'étudiants.",
          "zh": "八点上课，十二点下课。老师很好，学生也很多。"
        },
        "audioText": "八点上课，十二点下课。老师很好，学生也很多。"
      },
      {
        "speaker": "小明",
        "hanzi": "我妹妹是小学生，她也很喜欢上学。",
        "pinyin": "Wǒ mèimei shì xiǎoxuéshēng, tā yě hěn xǐhuan shàngxué.",
        "meaning": {
          "en": "My younger sister is at primary school; she loves going to school too.",
          "fr": "Ma petite sœur est à l'école primaire ; elle aussi adore aller à l'école.",
          "zh": "我妹妹是小学生，她也很喜欢上学。"
        },
        "audioText": "我妹妹是小学生，她也很喜欢上学。"
      }
    ]
  },
  "lesson-hsk1-13": {
    "grammarPoints": [
      {
        "title": {
          "en": "Measure words: 一本书, 一个字",
          "fr": "Les classificateurs : 一本书, 一个字",
          "zh": "量词：一本书、一个字"
        },
        "structure": "number + measure word + noun: 一本书、两个汉字、三个问题",
        "explanation": {
          "en": "Between a number (or 这/那) and a noun, Chinese always needs a measure word. 本 is for books and notebooks; 个 is the general one, used for characters, questions and people.",
          "fr": "Entre un nombre (ou 这/那) et un nom, le chinois exige un classificateur. 本 sert pour les livres et les cahiers ; 个 est le classificateur général : caractères, questions, personnes.",
          "zh": "数词（或“这、那”）和名词之间要用量词。“本”用于书、本子；“个”是最常用的量词，可用于字、问题、人等。"
        },
        "example": {
          "hanzi": "我有两本汉语书。",
          "pinyin": "Wǒ yǒu liǎng běn Hànyǔ shū.",
          "translation": {
            "en": "I have two Chinese books.",
            "fr": "J'ai deux livres de chinois.",
            "zh": "我有两本汉语书。"
          }
        }
      }
    ],
    "dialogue": [
      {
        "speaker": "大卫",
        "hanzi": "老师，我有一个问题。",
        "pinyin": "Lǎoshī, wǒ yǒu yí ge wèntí.",
        "meaning": {
          "en": "Teacher, I have a question.",
          "fr": "Professeur, j'ai une question.",
          "zh": "老师，我有一个问题。"
        },
        "audioText": "老师，我有一个问题。"
      },
      {
        "speaker": "王老师",
        "hanzi": "请说。",
        "pinyin": "Qǐng shuō.",
        "meaning": {
          "en": "Go ahead.",
          "fr": "Je t'écoute.",
          "zh": "请说。"
        },
        "audioText": "请说。"
      },
      {
        "speaker": "大卫",
        "hanzi": "这个字怎么读？",
        "pinyin": "Zhège zì zěnme dú?",
        "meaning": {
          "en": "How do you read this character?",
          "fr": "Comment se lit ce caractère ?",
          "zh": "这个字怎么读？"
        },
        "audioText": "这个字怎么读？"
      },
      {
        "speaker": "王老师",
        "hanzi": "这个字读“书”，读书的“书”。",
        "pinyin": "Zhège zì dú \"shū\", dúshū de \"shū\".",
        "meaning": {
          "en": "It's read “shū”, as in 读书.",
          "fr": "Il se lit « shū », comme dans 读书.",
          "zh": "这个字读“书”，读书的“书”。"
        },
        "audioText": "这个字读“书”，读书的“书”。"
      },
      {
        "speaker": "大卫",
        "hanzi": "汉字真不好写，我今天写了十个。",
        "pinyin": "Hànzì zhēn bù hǎo xiě, wǒ jīntiān xiě le shí ge.",
        "meaning": {
          "en": "Chinese characters are really hard to write. I wrote ten today.",
          "fr": "Les caractères chinois ne sont vraiment pas faciles à écrire. J'en ai écrit dix aujourd'hui.",
          "zh": "汉字真不好写，我今天写了十个。"
        },
        "audioText": "汉字真不好写，我今天写了十个。"
      },
      {
        "speaker": "王老师",
        "hanzi": "多听，多说，多读，你的中文会很好。",
        "pinyin": "Duō tīng, duō shuō, duō dú, nǐ de Zhōngwén huì hěn hǎo.",
        "meaning": {
          "en": "Listen, speak and read a lot, and your Chinese will be very good.",
          "fr": "Écoute, parle et lis beaucoup, et ton chinois sera très bon.",
          "zh": "多听，多说，多读，你的中文会很好。"
        },
        "audioText": "多听，多说，多读，你的中文会很好。"
      },
      {
        "speaker": "大卫",
        "hanzi": "谢谢老师！我买了一本汉语书。",
        "pinyin": "Xièxie lǎoshī! Wǒ mǎi le yì běn Hànyǔ shū.",
        "meaning": {
          "en": "Thank you! I've bought a Chinese book.",
          "fr": "Merci professeur ! J'ai acheté un livre de chinois.",
          "zh": "谢谢老师！我买了一本汉语书。"
        },
        "audioText": "谢谢老师！我买了一本汉语书。"
      }
    ]
  },
  "lesson-hsk1-14": {
    "grammarPoints": [
      {
        "title": {
          "en": "Actions in progress: 正在",
          "fr": "L'action en cours : 正在",
          "zh": "“正在”表示动作进行"
        },
        "structure": "Subject + 正在/在 + verb (+ object) (+ 呢)",
        "explanation": {
          "en": "正在 (or just 在) before a verb shows the action is happening right now; 呢 is often added at the end.",
          "fr": "正在 (ou simplement 在) devant un verbe indique que l'action est en train de se dérouler ; on ajoute souvent 呢 en fin de phrase.",
          "zh": "“正在”或“在”放在动词前，表示动作正在进行，句末常加“呢”。"
        },
        "example": {
          "hanzi": "我正在工作呢。",
          "pinyin": "Wǒ zhèngzài gōngzuò ne.",
          "translation": {
            "en": "I'm working right now.",
            "fr": "Je suis en train de travailler.",
            "zh": "我正在工作呢。"
          }
        }
      }
    ],
    "dialogue": [
      {
        "speaker": "小明",
        "hanzi": "喂，姐姐，你在做什么？",
        "pinyin": "Wèi, jiějie, nǐ zài zuò shénme?",
        "meaning": {
          "en": "Hello, sis, what are you doing?",
          "fr": "Allô, grande sœur, tu fais quoi ?",
          "zh": "喂，姐姐，你在做什么？"
        },
        "audioText": "喂，姐姐，你在做什么？"
      },
      {
        "speaker": "姐姐",
        "hanzi": "我正在公司工作呢。",
        "pinyin": "Wǒ zhèngzài gōngsī gōngzuò ne.",
        "meaning": {
          "en": "I'm working at the office.",
          "fr": "Je suis en train de travailler au bureau.",
          "zh": "我正在公司工作呢。"
        },
        "audioText": "我正在公司工作呢。"
      },
      {
        "speaker": "小明",
        "hanzi": "你几点下班？",
        "pinyin": "Nǐ jǐ diǎn xiàbān?",
        "meaning": {
          "en": "What time do you finish work?",
          "fr": "À quelle heure tu finis le travail ?",
          "zh": "你几点下班？"
        },
        "audioText": "你几点下班？"
      },
      {
        "speaker": "姐姐",
        "hanzi": "六点。今天很忙，没有时间休息。",
        "pinyin": "Liù diǎn. Jīntiān hěn máng, méiyǒu shíjiān xiūxi.",
        "meaning": {
          "en": "At six. I'm very busy today, no time to rest.",
          "fr": "À six heures. Je suis très occupée aujourd'hui, pas le temps de me reposer.",
          "zh": "六点。今天很忙，没有时间休息。"
        },
        "audioText": "六点。今天很忙，没有时间休息。"
      },
      {
        "speaker": "小明",
        "hanzi": "我有事找你。你现在住在哪儿？",
        "pinyin": "Wǒ yǒu shì zhǎo nǐ. Nǐ xiànzài zhù zài nǎr?",
        "meaning": {
          "en": "I need to see you about something. Where do you live now?",
          "fr": "J'ai besoin de te voir pour quelque chose. Tu habites où maintenant ?",
          "zh": "我有事找你。你现在住在哪儿？"
        },
        "audioText": "我有事找你。你现在住在哪儿？"
      },
      {
        "speaker": "姐姐",
        "hanzi": "我住在公司那边。明天我上班前你来吧。",
        "pinyin": "Wǒ zhù zài gōngsī nàbiān. Míngtiān wǒ shàngbān qián nǐ lái ba.",
        "meaning": {
          "en": "Near the office. Come tomorrow before I start work.",
          "fr": "Près du bureau. Viens demain avant que je commence le travail.",
          "zh": "我住在公司那边。明天我上班前你来吧。"
        },
        "audioText": "我住在公司那边。明天我上班前你来吧。"
      }
    ]
  },
  "lesson-hsk1-15": {
    "grammarPoints": [
      {
        "title": {
          "en": "Coming and going: 来 and 去",
          "fr": "Venir et aller : 来 et 去",
          "zh": "“来”和“去”表示方向"
        },
        "structure": "来 + place (towards the speaker) · 去 + place (away from the speaker) · 回 + place (back)",
        "explanation": {
          "en": "来 is movement towards the speaker and 去 movement away from them; 回 means going back to where you belong. The place goes straight after the verb: 去书店, 回家.",
          "fr": "来 indique un mouvement vers celui qui parle, 去 un mouvement qui s'en éloigne ; 回 signifie retourner chez soi ou à son point de départ. Le lieu suit directement le verbe : 去书店, 回家.",
          "zh": "“来”表示向说话人的方向移动，“去”表示离开说话人；“回”表示回到原来的地方。地点直接放在动词后面：去书店、回家。"
        },
        "example": {
          "hanzi": "你什么时候回家？",
          "pinyin": "Nǐ shénme shíhou huí jiā?",
          "translation": {
            "en": "When are you going home?",
            "fr": "Quand rentres-tu chez toi ?",
            "zh": "你什么时候回家？"
          }
        }
      }
    ],
    "dialogue": [
      {
        "speaker": "安娜",
        "hanzi": "小明，你去哪儿？",
        "pinyin": "Xiǎomíng, nǐ qù nǎr?",
        "meaning": {
          "en": "Xiaoming, where are you going?",
          "fr": "Xiaoming, où vas-tu ?",
          "zh": "小明，你去哪儿？"
        },
        "audioText": "小明，你去哪儿？"
      },
      {
        "speaker": "小明",
        "hanzi": "我去书店。书店在学校外边。",
        "pinyin": "Wǒ qù shūdiàn. Shūdiàn zài xuéxiào wàibian.",
        "meaning": {
          "en": "To the bookshop. It's outside the school.",
          "fr": "À la librairie. Elle est à l'extérieur de l'école.",
          "zh": "我去书店。书店在学校外边。"
        },
        "audioText": "我去书店。书店在学校外边。"
      },
      {
        "speaker": "安娜",
        "hanzi": "在学校前边吗？",
        "pinyin": "Zài xuéxiào qiánbian ma?",
        "meaning": {
          "en": "Is it in front of the school?",
          "fr": "Elle est devant l'école ?",
          "zh": "在学校前边吗？"
        },
        "audioText": "在学校前边吗？"
      },
      {
        "speaker": "小明",
        "hanzi": "不在前边，在后边。你来吗？",
        "pinyin": "Bú zài qiánbian, zài hòubian. Nǐ lái ma?",
        "meaning": {
          "en": "Not in front—behind. Are you coming?",
          "fr": "Pas devant, derrière. Tu viens ?",
          "zh": "不在前边，在后边。你来吗？"
        },
        "audioText": "不在前边，在后边。你来吗？"
      },
      {
        "speaker": "安娜",
        "hanzi": "我不去了，我要回家。",
        "pinyin": "Wǒ bú qù le, wǒ yào huí jiā.",
        "meaning": {
          "en": "I won't, I'm going home.",
          "fr": "Je n'y vais pas, je rentre à la maison.",
          "zh": "我不去了，我要回家。"
        },
        "audioText": "我不去了，我要回家。"
      },
      {
        "speaker": "小明",
        "hanzi": "好，我到了书店给你打电话。",
        "pinyin": "Hǎo, wǒ dào le shūdiàn gěi nǐ dǎ diànhuà.",
        "meaning": {
          "en": "OK, I'll call you when I get to the bookshop.",
          "fr": "D'accord, je t'appelle quand j'arrive à la librairie.",
          "zh": "好，我到了书店给你打电话。"
        },
        "audioText": "好，我到了书店给你打电话。"
      }
    ]
  },
  "lesson-hsk1-16": {
    "grammarPoints": [
      {
        "title": {
          "en": "Taking transport: 坐 and 开",
          "fr": "Prendre un moyen de transport : 坐 et 开",
          "zh": "“坐”和“开”交通工具"
        },
        "structure": "坐 + 飞机/火车/出租车 (as a passenger) · 开 + 车 (as the driver) · 坐/开 + vehicle + 去 + place",
        "explanation": {
          "en": "As a passenger you 坐 (sit in) a vehicle; as the driver you 开 it. To say how you travel, put it before the destination: 坐火车去.",
          "fr": "Passager, on 坐 (s'assied dans) un véhicule ; conducteur, on le 开. Le moyen de transport se place avant la destination : 坐火车去.",
          "zh": "乘坐交通工具用“坐”，驾驶用“开”。表示怎么去，把交通方式放在“去+地方”前面：坐火车去。"
        },
        "example": {
          "hanzi": "我坐飞机去中国。",
          "pinyin": "Wǒ zuò fēijī qù Zhōngguó.",
          "translation": {
            "en": "I'm flying to China.",
            "fr": "Je vais en Chine en avion.",
            "zh": "我坐飞机去中国。"
          }
        }
      }
    ],
    "dialogue": [
      {
        "speaker": "大卫",
        "hanzi": "明天你怎么去饭店？",
        "pinyin": "Míngtiān nǐ zěnme qù fàndiàn?",
        "meaning": {
          "en": "How are you getting to the hotel tomorrow?",
          "fr": "Comment vas-tu à l'hôtel demain ?",
          "zh": "明天你怎么去饭店？"
        },
        "audioText": "明天你怎么去饭店？"
      },
      {
        "speaker": "安娜",
        "hanzi": "我坐出租车去。你呢？",
        "pinyin": "Wǒ zuò chūzūchē qù. Nǐ ne?",
        "meaning": {
          "en": "I'm taking a taxi. And you?",
          "fr": "Je prends un taxi. Et toi ?",
          "zh": "我坐出租车去。你呢？"
        },
        "audioText": "我坐出租车去。你呢？"
      },
      {
        "speaker": "大卫",
        "hanzi": "我哥哥开车去，你坐我们的车吧。",
        "pinyin": "Wǒ gēge kāichē qù, nǐ zuò wǒmen de chē ba.",
        "meaning": {
          "en": "My older brother is driving—come in our car.",
          "fr": "Mon grand frère y va en voiture, viens avec nous.",
          "zh": "我哥哥开车去，你坐我们的车吧。"
        },
        "audioText": "我哥哥开车去，你坐我们的车吧。"
      },
      {
        "speaker": "安娜",
        "hanzi": "太好了！你们怎么来中国的？",
        "pinyin": "Tài hǎo le! Nǐmen zěnme lái Zhōngguó de?",
        "meaning": {
          "en": "Great! How did you come to China?",
          "fr": "Super ! Comment êtes-vous venus en Chine ?",
          "zh": "太好了！你们怎么来中国的？"
        },
        "audioText": "太好了！你们怎么来中国的？"
      },
      {
        "speaker": "大卫",
        "hanzi": "我们坐飞机来的。哥哥住在饭店，他的房间很大。",
        "pinyin": "Wǒmen zuò fēijī lái de. Gēge zhù zài fàndiàn, tā de fángjiān hěn dà.",
        "meaning": {
          "en": "By plane. My brother is staying at the hotel; his room is big.",
          "fr": "En avion. Mon frère loge à l'hôtel, sa chambre est grande.",
          "zh": "我们坐飞机来的。哥哥住在饭店，他的房间很大。"
        },
        "audioText": "我们坐飞机来的。哥哥住在饭店，他的房间很大。"
      }
    ]
  },
  "lesson-hsk1-17": {
    "grammarPoints": [
      {
        "title": {
          "en": "Degree words: 很, 非常, 太…了",
          "fr": "Les adverbes d'intensité : 很, 非常, 太…了",
          "zh": "程度副词：很、非常、太……了"
        },
        "structure": "Subject + 很/非常/真 + adjective · 太 + adjective + 了",
        "explanation": {
          "en": "Adjectives work like verbs in Chinese and usually take a degree word: 今天很冷 (no 是). 非常 is stronger than 很, 真 shows surprise, and 太…了 means “too” or “so”.",
          "fr": "En chinois, l'adjectif fonctionne comme un verbe et prend en général un adverbe d'intensité : 今天很冷 (sans 是). 非常 est plus fort que 很, 真 marque la surprise et 太…了 signifie « trop » ou « tellement ».",
          "zh": "形容词作谓语时一般不用“是”，前面常加程度副词：今天很冷。“非常”比“很”程度高，“真”表示感叹，“太……了”表示程度过高或赞叹。"
        },
        "example": {
          "hanzi": "今天太热了！",
          "pinyin": "Jīntiān tài rè le!",
          "translation": {
            "en": "It's so hot today!",
            "fr": "Il fait tellement chaud aujourd'hui !",
            "zh": "今天太热了！"
          }
        }
      }
    ],
    "dialogue": [
      {
        "speaker": "安娜",
        "hanzi": "今天天气怎么样？",
        "pinyin": "Jīntiān tiānqì zěnmeyàng?",
        "meaning": {
          "en": "What's the weather like today?",
          "fr": "Quel temps fait-il aujourd'hui ?",
          "zh": "今天天气怎么样？"
        },
        "audioText": "今天天气怎么样？"
      },
      {
        "speaker": "小明",
        "hanzi": "非常冷，外边在下雪。",
        "pinyin": "Fēicháng lěng, wàibian zài xià xuě.",
        "meaning": {
          "en": "Very cold—it's snowing outside.",
          "fr": "Très froid, il neige dehors.",
          "zh": "非常冷，外边在下雪。"
        },
        "audioText": "非常冷，外边在下雪。"
      },
      {
        "speaker": "安娜",
        "hanzi": "真的吗？太好了！我很喜欢雪。",
        "pinyin": "Zhēn de ma? Tài hǎo le! Wǒ hěn xǐhuan xuě.",
        "meaning": {
          "en": "Really? Great! I love snow.",
          "fr": "C'est vrai ? Génial ! J'adore la neige.",
          "zh": "真的吗？太好了！我很喜欢雪。"
        },
        "audioText": "真的吗？太好了！我很喜欢雪。"
      },
      {
        "speaker": "小明",
        "hanzi": "我不喜欢冷天。明天下雨吗？",
        "pinyin": "Wǒ bù xǐhuan lěng tiān. Míngtiān xià yǔ ma?",
        "meaning": {
          "en": "I don't like cold days. Will it rain tomorrow?",
          "fr": "Je n'aime pas les jours froids. Il pleut demain ?",
          "zh": "我不喜欢冷天。明天下雨吗？"
        },
        "audioText": "我不喜欢冷天。明天下雨吗？"
      },
      {
        "speaker": "安娜",
        "hanzi": "明天不下雨，也不冷。",
        "pinyin": "Míngtiān bú xià yǔ, yě bù lěng.",
        "meaning": {
          "en": "No rain tomorrow, and it won't be cold.",
          "fr": "Pas de pluie demain, et il ne fera pas froid.",
          "zh": "明天不下雨，也不冷。"
        },
        "audioText": "明天不下雨，也不冷。"
      },
      {
        "speaker": "小明",
        "hanzi": "那太好了，明天我们去玩儿吧！",
        "pinyin": "Nà tài hǎo le, míngtiān wǒmen qù wánr ba!",
        "meaning": {
          "en": "Great—let's go out and have fun tomorrow!",
          "fr": "Super, allons nous amuser demain !",
          "zh": "那太好了，明天我们去玩儿吧！"
        },
        "audioText": "那太好了，明天我们去玩儿吧！"
      }
    ]
  },
  "lesson-hsk1-18": {
    "grammarPoints": [
      {
        "title": {
          "en": "Wanting: 想 and 要",
          "fr": "Vouloir : 想 et 要",
          "zh": "“想”和“要”"
        },
        "structure": "想 + verb (would like to) · 要 + verb / noun (want, will)",
        "explanation": {
          "en": "想 is a softer wish (“would like to”); 要 is firmer (“want to, am going to”) and can also take a noun directly: 我要这个. The negative of both is usually 不想.",
          "fr": "想 exprime un souhait plus doux (« aimerais ») ; 要 est plus ferme (« veux, vais ») et peut aussi précéder directement un nom : 我要这个. La négation des deux est en général 不想.",
          "zh": "“想”表示希望、打算，语气较委婉；“要”表示意愿坚决，也可直接带名词，如“我要这个”。两者的否定一般都用“不想”。"
        },
        "example": {
          "hanzi": "我想去中国玩儿。",
          "pinyin": "Wǒ xiǎng qù Zhōngguó wánr.",
          "translation": {
            "en": "I'd like to go to China for fun.",
            "fr": "J'aimerais aller me promener en Chine.",
            "zh": "我想去中国玩儿。"
          }
        }
      }
    ],
    "dialogue": [
      {
        "speaker": "安娜",
        "hanzi": "你看，这件衣服怎么样？",
        "pinyin": "Nǐ kàn, zhè jiàn yīfu zěnmeyàng?",
        "meaning": {
          "en": "Look, what do you think of this?",
          "fr": "Regarde, qu'est-ce que tu penses de ce vêtement ?",
          "zh": "你看，这件衣服怎么样？"
        },
        "audioText": "你看，这件衣服怎么样？"
      },
      {
        "speaker": "大卫",
        "hanzi": "很好看！是新的吗？",
        "pinyin": "Hěn hǎokàn! Shì xīn de ma?",
        "meaning": {
          "en": "It looks great! Is it new?",
          "fr": "Il est très joli ! Il est neuf ?",
          "zh": "很好看！是新的吗？"
        },
        "audioText": "很好看！是新的吗？"
      },
      {
        "speaker": "安娜",
        "hanzi": "是。我觉得有点儿大。",
        "pinyin": "Shì. Wǒ juéde yǒudiǎnr dà.",
        "meaning": {
          "en": "Yes. I think it's a bit big.",
          "fr": "Oui. Je trouve qu'il est un peu grand.",
          "zh": "是。我觉得有点儿大。"
        },
        "audioText": "是。我觉得有点儿大。"
      },
      {
        "speaker": "大卫",
        "hanzi": "不大，很漂亮。你想买小的吗？",
        "pinyin": "Bú dà, hěn piàoliang. Nǐ xiǎng mǎi xiǎo de ma?",
        "meaning": {
          "en": "It's not big, it's lovely. Would you like a smaller one?",
          "fr": "Pas du tout, il est très beau. Tu veux en acheter un plus petit ?",
          "zh": "不大，很漂亮。你想买小的吗？"
        },
        "audioText": "不大，很漂亮。你想买小的吗？"
      },
      {
        "speaker": "安娜",
        "hanzi": "不想，我要这件。我很高兴！",
        "pinyin": "Bù xiǎng, wǒ yào zhè jiàn. Wǒ hěn gāoxìng!",
        "meaning": {
          "en": "No, I want this one. I'm so happy!",
          "fr": "Non, je veux celui-ci. Je suis très contente !",
          "zh": "不想，我要这件。我很高兴！"
        },
        "audioText": "不想，我要这件。我很高兴！"
      },
      {
        "speaker": "大卫",
        "hanzi": "买了衣服，我们去玩儿吧！",
        "pinyin": "Mǎi le yīfu, wǒmen qù wánr ba!",
        "meaning": {
          "en": "Now you've got your clothes, let's go and have fun!",
          "fr": "Maintenant que tu as ton vêtement, allons nous amuser !",
          "zh": "买了衣服，我们去玩儿吧！"
        },
        "audioText": "买了衣服，我们去玩儿吧！"
      }
    ]
  },
  "lesson-hsk1-19": {
    "grammarPoints": [
      {
        "title": {
          "en": "Result complement 见: 看见, 听见",
          "fr": "Le complément de résultat 见 : 看见, 听见",
          "zh": "结果补语“见”：看见、听见"
        },
        "structure": "看/听 + 见 (+ object) · 没 + 看见/听见",
        "explanation": {
          "en": "看 means “to look” and 听 “to listen”; adding 见 says you actually saw or heard something. The negative uses 没: 我没看见他.",
          "fr": "看 signifie « regarder » et 听 « écouter » ; avec 见, on dit qu'on a effectivement vu ou entendu. La négation se fait avec 没 : 我没看见他.",
          "zh": "“看、听”表示动作，“看见、听见”表示动作有了结果。否定用“没”：我没看见他。"
        },
        "example": {
          "hanzi": "你听见了吗？有人打电话。",
          "pinyin": "Nǐ tīngjiàn le ma? Yǒu rén dǎ diànhuà.",
          "translation": {
            "en": "Did you hear that? Someone is calling.",
            "fr": "Tu as entendu ? Quelqu'un appelle.",
            "zh": "你听见了吗？有人打电话。"
          }
        }
      }
    ],
    "dialogue": [
      {
        "speaker": "妈妈",
        "hanzi": "喂，小明，你在哪儿？",
        "pinyin": "Wèi, Xiǎomíng, nǐ zài nǎr?",
        "meaning": {
          "en": "Hello, Xiaoming, where are you?",
          "fr": "Allô, Xiaoming, tu es où ?",
          "zh": "喂，小明，你在哪儿？"
        },
        "audioText": "喂，小明，你在哪儿？"
      },
      {
        "speaker": "小明",
        "hanzi": "我在电影院，正在看电影。",
        "pinyin": "Wǒ zài diànyǐngyuàn, zhèngzài kàn diànyǐng.",
        "meaning": {
          "en": "At the cinema, watching a film.",
          "fr": "Au cinéma, je regarde un film.",
          "zh": "我在电影院，正在看电影。"
        },
        "audioText": "我在电影院，正在看电影。"
      },
      {
        "speaker": "妈妈",
        "hanzi": "我打电话，你没听见吗？",
        "pinyin": "Wǒ dǎ diànhuà, nǐ méi tīngjiàn ma?",
        "meaning": {
          "en": "I called you—didn't you hear?",
          "fr": "Je t'ai appelé, tu n'as pas entendu ?",
          "zh": "我打电话，你没听见吗？"
        },
        "audioText": "我打电话，你没听见吗？"
      },
      {
        "speaker": "小明",
        "hanzi": "没听见。你看见我的电脑了吗？",
        "pinyin": "Méi tīngjiàn. Nǐ kànjiàn wǒ de diànnǎo le ma?",
        "meaning": {
          "en": "No, I didn't. Have you seen my computer?",
          "fr": "Non. Tu as vu mon ordinateur ?",
          "zh": "没听见。你看见我的电脑了吗？"
        },
        "audioText": "没听见。你看见我的电脑了吗？"
      },
      {
        "speaker": "妈妈",
        "hanzi": "看见了，在电视前边。",
        "pinyin": "Kànjiàn le, zài diànshì qiánbian.",
        "meaning": {
          "en": "Yes, it's in front of the TV.",
          "fr": "Oui, il est devant la télé.",
          "zh": "看见了，在电视前边。"
        },
        "audioText": "看见了，在电视前边。"
      },
      {
        "speaker": "小明",
        "hanzi": "好，晚上见！",
        "pinyin": "Hǎo, wǎnshang jiàn!",
        "meaning": {
          "en": "OK, see you tonight!",
          "fr": "D'accord, à ce soir !",
          "zh": "好，晚上见！"
        },
        "audioText": "好，晚上见！"
      }
    ]
  },
  "lesson-hsk1-20": {
    "grammarPoints": [
      {
        "title": {
          "en": "Two verbs in a row: 去医院看病",
          "fr": "Deux verbes à la suite : 去医院看病",
          "zh": "连动句：去医院看病"
        },
        "structure": "Subject + 去/来 + place + verb (+ object)",
        "explanation": {
          "en": "Chinese can line up two actions in the order they happen; the second one gives the purpose of the first: 去医院看病 “go to the hospital to see a doctor”.",
          "fr": "Le chinois peut enchaîner deux actions dans l'ordre où elles se produisent ; la seconde exprime le but de la première : 去医院看病 « aller à l'hôpital consulter un médecin ».",
          "zh": "连动句中两个动作按发生的先后排列，后一个动作常表示前一个动作的目的，如“去医院看病”。"
        },
        "example": {
          "hanzi": "我去商店买衣服。",
          "pinyin": "Wǒ qù shāngdiàn mǎi yīfu.",
          "translation": {
            "en": "I'm going to the shop to buy clothes.",
            "fr": "Je vais au magasin acheter des vêtements.",
            "zh": "我去商店买衣服。"
          }
        }
      }
    ],
    "dialogue": [
      {
        "speaker": "安娜",
        "hanzi": "大卫，你怎么了？",
        "pinyin": "Dàwèi, nǐ zěnme le?",
        "meaning": {
          "en": "David, what's wrong?",
          "fr": "David, qu'est-ce qui ne va pas ?",
          "zh": "大卫，你怎么了？"
        },
        "audioText": "大卫，你怎么了？"
      },
      {
        "speaker": "大卫",
        "hanzi": "我生病了，有点儿冷。",
        "pinyin": "Wǒ shēngbìng le, yǒudiǎnr lěng.",
        "meaning": {
          "en": "I'm ill and feel a bit cold.",
          "fr": "Je suis malade et j'ai un peu froid.",
          "zh": "我生病了，有点儿冷。"
        },
        "audioText": "我生病了，有点儿冷。"
      },
      {
        "speaker": "安娜",
        "hanzi": "多穿一件衣服吧。我们去医院看病。",
        "pinyin": "Duō chuān yí jiàn yīfu ba. Wǒmen qù yīyuàn kànbìng.",
        "meaning": {
          "en": "Put on another layer. Let's go to the hospital and see a doctor.",
          "fr": "Mets un vêtement de plus. Allons à l'hôpital voir un médecin.",
          "zh": "多穿一件衣服吧。我们去医院看病。"
        },
        "audioText": "多穿一件衣服吧。我们去医院看病。"
      },
      {
        "speaker": "医生",
        "hanzi": "你好，请坐。你病了几天了？",
        "pinyin": "Nǐ hǎo, qǐng zuò. Nǐ bìng le jǐ tiān le?",
        "meaning": {
          "en": "Hello, please sit down. How many days have you been ill?",
          "fr": "Bonjour, asseyez-vous. Depuis combien de jours êtes-vous malade ?",
          "zh": "你好，请坐。你病了几天了？"
        },
        "audioText": "你好，请坐。你病了几天了？"
      },
      {
        "speaker": "大卫",
        "hanzi": "两天了。",
        "pinyin": "Liǎng tiān le.",
        "meaning": {
          "en": "Two days.",
          "fr": "Deux jours.",
          "zh": "两天了。"
        },
        "audioText": "两天了。"
      },
      {
        "speaker": "医生",
        "hanzi": "不是大病。回家多喝水，多睡觉。",
        "pinyin": "Bú shì dà bìng. Huí jiā duō hē shuǐ, duō shuìjiào.",
        "meaning": {
          "en": "It's nothing serious. Go home, drink plenty of water and get lots of sleep.",
          "fr": "Ce n'est pas grave. Rentrez chez vous, buvez beaucoup d'eau et dormez beaucoup.",
          "zh": "不是大病。回家多喝水，多睡觉。"
        },
        "audioText": "不是大病。回家多喝水，多睡觉。"
      }
    ]
  },
  "lesson-hsk1-21": {
    "grammarPoints": [
      {
        "title": {
          "en": "Softening a request with 一下",
          "fr": "Adoucir une demande avec 一下",
          "zh": "“一下”使语气委婉"
        },
        "structure": "(请 +) verb + 一下 (+ object)",
        "explanation": {
          "en": "一下 after a verb means “a bit, quickly” and makes a request sound lighter and more polite, especially with 请: 请看一下.",
          "fr": "一下 après un verbe signifie « un peu, rapidement » et rend la demande plus légère et plus polie, surtout avec 请 : 请看一下.",
          "zh": "动词后加“一下”表示动作短暂、轻松，使请求更委婉礼貌，常和“请”一起用，如“请看一下”。"
        },
        "example": {
          "hanzi": "请问一下，这是什么字？",
          "pinyin": "Qǐngwèn yíxià, zhè shì shénme zì?",
          "translation": {
            "en": "Excuse me, what character is this?",
            "fr": "Excusez-moi, quel est ce caractère ?",
            "zh": "请问一下，这是什么字？"
          }
        }
      }
    ],
    "dialogue": [
      {
        "speaker": "大卫",
        "hanzi": "你好！请问，你叫什么名字？",
        "pinyin": "Nǐ hǎo! Qǐngwèn, nǐ jiào shénme míngzi?",
        "meaning": {
          "en": "Hello! May I ask your name?",
          "fr": "Bonjour ! Comment vous appelez-vous ?",
          "zh": "你好！请问，你叫什么名字？"
        },
        "audioText": "你好！请问，你叫什么名字？"
      },
      {
        "speaker": "小明",
        "hanzi": "我叫李小明。你呢？",
        "pinyin": "Wǒ jiào Lǐ Xiǎomíng. Nǐ ne?",
        "meaning": {
          "en": "I'm Li Xiaoming. And you?",
          "fr": "Je m'appelle Li Xiaoming. Et vous ?",
          "zh": "我叫李小明。你呢？"
        },
        "audioText": "我叫李小明。你呢？"
      },
      {
        "speaker": "大卫",
        "hanzi": "我叫大卫。认识你很高兴！",
        "pinyin": "Wǒ jiào Dàwèi. Rènshi nǐ hěn gāoxìng!",
        "meaning": {
          "en": "I'm David. Nice to meet you!",
          "fr": "Je m'appelle David. Enchanté !",
          "zh": "我叫大卫。认识你很高兴！"
        },
        "audioText": "我叫大卫。认识你很高兴！"
      },
      {
        "speaker": "小明",
        "hanzi": "你会说汉语，真好！你知道王老师在哪儿吗？",
        "pinyin": "Nǐ huì shuō Hànyǔ, zhēn hǎo! Nǐ zhīdào Wáng lǎoshī zài nǎr ma?",
        "meaning": {
          "en": "You speak Chinese—great! Do you know where Mr Wang is?",
          "fr": "Tu parles chinois, c'est super ! Tu sais où est le professeur Wang ?",
          "zh": "你会说汉语，真好！你知道王老师在哪儿吗？"
        },
        "audioText": "你会说汉语，真好！你知道王老师在哪儿吗？"
      },
      {
        "speaker": "大卫",
        "hanzi": "不知道。我可以给他打一下电话。",
        "pinyin": "Bù zhīdào. Wǒ kěyǐ gěi tā dǎ yíxià diànhuà.",
        "meaning": {
          "en": "No idea. I can give him a quick call.",
          "fr": "Je ne sais pas. Je peux l'appeler rapidement.",
          "zh": "不知道。我可以给他打一下电话。"
        },
        "audioText": "不知道。我可以给他打一下电话。"
      },
      {
        "speaker": "小明",
        "hanzi": "谢谢！能请你给他看一下这本书吗？",
        "pinyin": "Xièxie! Néng qǐng nǐ gěi tā kàn yíxià zhè běn shū ma?",
        "meaning": {
          "en": "Thanks! Could you show him this book?",
          "fr": "Merci ! Tu peux lui montrer ce livre ?",
          "zh": "谢谢！能请你给他看一下这本书吗？"
        },
        "audioText": "谢谢！能请你给他看一下这本书吗？"
      },
      {
        "speaker": "大卫",
        "hanzi": "可以。明天你再来吧。",
        "pinyin": "Kěyǐ. Míngtiān nǐ zài lái ba.",
        "meaning": {
          "en": "Sure. Come back tomorrow.",
          "fr": "Bien sûr. Reviens demain.",
          "zh": "可以。明天你再来吧。"
        },
        "audioText": "可以。明天你再来吧。"
      }
    ]
  },
  "lesson-hsk1-22": {
    "grammarPoints": [
      {
        "title": {
          "en": "Questions with 吗 and 呢",
          "fr": "Poser des questions avec 吗 et 呢",
          "zh": "用“吗”和“呢”提问"
        },
        "structure": "Statement + 吗？ (yes/no) · Noun/pronoun + 呢？ (and…?) · Suggestion + 吧",
        "explanation": {
          "en": "Add 吗 to a statement to make a yes/no question. 呢 after a noun or pronoun asks “what about…?”. 吧 makes a suggestion or checks a guess.",
          "fr": "吗 ajouté à une affirmation donne une question fermée. 呢 après un nom ou un pronom demande « et… ? ». 吧 sert à suggérer ou à vérifier une supposition.",
          "zh": "陈述句加“吗”构成是非问句；名词或代词后加“呢”表示“……怎么样”；“吧”表示建议或推测。"
        },
        "example": {
          "hanzi": "你是学生吗？我是，你呢？",
          "pinyin": "Nǐ shì xuéshēng ma? Wǒ shì, nǐ ne?",
          "translation": {
            "en": "Are you a student? I am—and you?",
            "fr": "Tu es étudiant ? Moi oui, et toi ?",
            "zh": "你是学生吗？我是，你呢？"
          }
        }
      }
    ],
    "dialogue": [
      {
        "speaker": "安娜",
        "hanzi": "你有汉语书吗？",
        "pinyin": "Nǐ yǒu Hànyǔ shū ma?",
        "meaning": {
          "en": "Do you have a Chinese book?",
          "fr": "Tu as un livre de chinois ?",
          "zh": "你有汉语书吗？"
        },
        "audioText": "你有汉语书吗？"
      },
      {
        "speaker": "小明",
        "hanzi": "没有，我和朋友都没有。你呢？",
        "pinyin": "Méiyǒu, wǒ hé péngyou dōu méiyǒu. Nǐ ne?",
        "meaning": {
          "en": "No, neither my friend nor I have one. And you?",
          "fr": "Non, ni mon ami ni moi. Et toi ?",
          "zh": "没有，我和朋友都没有。你呢？"
        },
        "audioText": "没有，我和朋友都没有。你呢？"
      },
      {
        "speaker": "安娜",
        "hanzi": "我也没有。我们去书店买吧。",
        "pinyin": "Wǒ yě méiyǒu. Wǒmen qù shūdiàn mǎi ba.",
        "meaning": {
          "en": "Me neither. Let's go and buy one at the bookshop.",
          "fr": "Moi non plus. Allons en acheter un à la librairie.",
          "zh": "我也没有。我们去书店买吧。"
        },
        "audioText": "我也没有。我们去书店买吧。"
      },
      {
        "speaker": "小明",
        "hanzi": "不要去了，书店还没开门。",
        "pinyin": "Búyào qù le, shūdiàn hái méi kāi mén.",
        "meaning": {
          "en": "Let's not go—the bookshop isn't open yet.",
          "fr": "N'y allons pas, la librairie n'est pas encore ouverte.",
          "zh": "不要去了，书店还没开门。"
        },
        "audioText": "不要去了，书店还没开门。"
      },
      {
        "speaker": "安娜",
        "hanzi": "是吗？那我们明天去吧。",
        "pinyin": "Shì ma? Nà wǒmen míngtiān qù ba.",
        "meaning": {
          "en": "Really? Then let's go tomorrow.",
          "fr": "Ah bon ? Alors allons-y demain.",
          "zh": "是吗？那我们明天去吧。"
        },
        "audioText": "是吗？那我们明天去吧。"
      },
      {
        "speaker": "小明",
        "hanzi": "好，没事。",
        "pinyin": "Hǎo, méishì.",
        "meaning": {
          "en": "OK, no problem.",
          "fr": "D'accord, pas de souci.",
          "zh": "好，没事。"
        },
        "audioText": "好，没事。"
      }
    ]
  },
  "lesson-hsk1-23": {
    "grammarPoints": [
      {
        "title": {
          "en": "有点儿 vs 一点儿",
          "fr": "有点儿 ou 一点儿",
          "zh": "“有点儿”和“一点儿”"
        },
        "structure": "有点儿 + adjective (a bit, often unwelcome) · adjective / verb + 一点儿 (a little)",
        "explanation": {
          "en": "有点儿 goes before an adjective and usually expresses something unwelcome: 有点儿贵. 一点儿 goes after an adjective to ask for a change (便宜一点儿), or before a noun: 喝一点儿水.",
          "fr": "有点儿 se place devant un adjectif et exprime souvent un léger inconvénient : 有点儿贵. 一点儿 se place après un adjectif pour demander un changement (便宜一点儿), ou devant un nom : 喝一点儿水.",
          "zh": "“有点儿”放在形容词前，多表示不如意：有点儿贵。“一点儿”放在形容词后表示希望改变，如“便宜一点儿”，也可放在名词前：喝一点儿水。"
        },
        "example": {
          "hanzi": "这个有点儿贵，能便宜一点儿吗？",
          "pinyin": "Zhège yǒudiǎnr guì, néng piányi yìdiǎnr ma?",
          "translation": {
            "en": "This is a bit expensive—can you make it a little cheaper?",
            "fr": "C'est un peu cher, vous pouvez baisser un peu le prix ?",
            "zh": "这个有点儿贵，能便宜一点儿吗？"
          }
        }
      }
    ],
    "dialogue": [
      {
        "speaker": "大卫",
        "hanzi": "你儿子几岁了？",
        "pinyin": "Nǐ érzi jǐ suì le?",
        "meaning": {
          "en": "How old is your son?",
          "fr": "Quel âge a ton fils ?",
          "zh": "你儿子几岁了？"
        },
        "audioText": "你儿子几岁了？"
      },
      {
        "speaker": "王女士",
        "hanzi": "他八岁，这是他第一次来中国。",
        "pinyin": "Tā bā suì, zhè shì tā dì yī cì lái Zhōngguó.",
        "meaning": {
          "en": "He's eight; it's his first time in China.",
          "fr": "Il a huit ans, c'est la première fois qu'il vient en Chine.",
          "zh": "他八岁，这是他第一次来中国。"
        },
        "audioText": "他八岁，这是他第一次来中国。"
      },
      {
        "speaker": "大卫",
        "hanzi": "他会说一点儿汉语吗？",
        "pinyin": "Tā huì shuō yìdiǎnr Hànyǔ ma?",
        "meaning": {
          "en": "Can he speak a little Chinese?",
          "fr": "Il parle un peu chinois ?",
          "zh": "他会说一点儿汉语吗？"
        },
        "audioText": "他会说一点儿汉语吗？"
      },
      {
        "speaker": "王女士",
        "hanzi": "会说一些，有的字他不会写。",
        "pinyin": "Huì shuō yìxiē, yǒude zì tā bú huì xiě.",
        "meaning": {
          "en": "He speaks some, but there are characters he can't write.",
          "fr": "Un peu, mais il y a des caractères qu'il ne sait pas écrire.",
          "zh": "会说一些，有的字他不会写。"
        },
        "audioText": "会说一些，有的字他不会写。"
      },
      {
        "speaker": "大卫",
        "hanzi": "他觉得学汉语怎么样？",
        "pinyin": "Tā juéde xué Hànyǔ zěnmeyàng?",
        "meaning": {
          "en": "What does he think of learning Chinese?",
          "fr": "Qu'est-ce qu'il pense de l'apprentissage du chinois ?",
          "zh": "他觉得学汉语怎么样？"
        },
        "audioText": "他觉得学汉语怎么样？"
      },
      {
        "speaker": "王女士",
        "hanzi": "他很喜欢，就是有点儿累。你要喝一点儿茶吗？",
        "pinyin": "Tā hěn xǐhuan, jiù shì yǒudiǎnr lèi. Nǐ yào hē yìdiǎnr chá ma?",
        "meaning": {
          "en": "He loves it, he's just a bit tired. Would you like a little tea?",
          "fr": "Il adore ça, il est juste un peu fatigué. Tu veux un peu de thé ?",
          "zh": "他很喜欢，就是有点儿累。你要喝一点儿茶吗？"
        },
        "audioText": "他很喜欢，就是有点儿累。你要喝一点儿茶吗？"
      },
      {
        "speaker": "大卫",
        "hanzi": "好，谢谢，我喝一点儿。",
        "pinyin": "Hǎo, xièxie, wǒ hē yìdiǎnr.",
        "meaning": {
          "en": "Yes, thanks, I'll have a little.",
          "fr": "Oui, merci, j'en prendrai un peu.",
          "zh": "好，谢谢，我喝一点儿。"
        },
        "audioText": "好，谢谢，我喝一点儿。"
      }
    ]
  },
  "lesson-hsk2-03": {
    "grammarPoints": [
      {
        "title": {
          "en": "Telling someone not to: 别",
          "fr": "Dire de ne pas faire : 别",
          "zh": "用“别”劝阻"
        },
        "structure": "别 + verb (= 不要 + verb) · 别 + verb + 了 (stop doing)",
        "explanation": {
          "en": "别 means “don't” and gives advice or a gentle order; it is shorter and more spoken than 不要. 别…了 asks someone to stop doing something.",
          "fr": "别 signifie « ne… pas » pour conseiller ou demander gentiment ; il est plus court et plus oral que 不要. 别…了 demande d'arrêter de faire quelque chose.",
          "zh": "“别”表示劝阻或禁止，相当于“不要”，更口语化。“别……了”表示让对方停止做某事。"
        },
        "example": {
          "hanzi": "你生病了，别去上班了。",
          "pinyin": "Nǐ shēngbìng le, bié qù shàngbān le.",
          "translation": {
            "en": "You're ill—don't go to work.",
            "fr": "Tu es malade, ne va pas au travail.",
            "zh": "你生病了，别去上班了。"
          }
        }
      }
    ],
    "dialogue": [
      {
        "speaker": "医生",
        "hanzi": "你哪儿不舒服？",
        "pinyin": "Nǐ nǎr bù shūfu?",
        "meaning": {
          "en": "What's the matter?",
          "fr": "Qu'est-ce qui ne va pas ?",
          "zh": "你哪儿不舒服？"
        },
        "audioText": "你哪儿不舒服？"
      },
      {
        "speaker": "大卫",
        "hanzi": "我头疼，身体也很累。",
        "pinyin": "Wǒ tóu téng, shēntǐ yě hěn lèi.",
        "meaning": {
          "en": "I have a headache and I feel very tired.",
          "fr": "J'ai mal à la tête et je suis très fatigué.",
          "zh": "我头疼，身体也很累。"
        },
        "audioText": "我头疼，身体也很累。"
      },
      {
        "speaker": "医生",
        "hanzi": "昨天晚上睡觉睡得好吗？",
        "pinyin": "Zuótiān wǎnshang shuìjiào shuì de hǎo ma?",
        "meaning": {
          "en": "Did you sleep well last night?",
          "fr": "Vous avez bien dormi hier soir ?",
          "zh": "昨天晚上睡觉睡得好吗？"
        },
        "audioText": "昨天晚上睡觉睡得好吗？"
      },
      {
        "speaker": "大卫",
        "hanzi": "不太好，只睡了四个小时。",
        "pinyin": "Bú tài hǎo, zhǐ shuìle sì ge xiǎoshí.",
        "meaning": {
          "en": "Not really, only four hours.",
          "fr": "Pas très bien, seulement quatre heures.",
          "zh": "不太好，只睡了四个小时。"
        },
        "audioText": "不太好，只睡了四个小时。"
      },
      {
        "speaker": "医生",
        "hanzi": "不是大病。这个药一天吃三次，多休息。",
        "pinyin": "Bú shì dà bìng. Zhège yào yì tiān chī sān cì, duō xiūxi.",
        "meaning": {
          "en": "It's nothing serious. Take this medicine three times a day and get plenty of rest.",
          "fr": "Ce n'est pas grave. Prenez ce médicament trois fois par jour et reposez-vous beaucoup.",
          "zh": "不是大病。这个药一天吃三次，多休息。"
        },
        "audioText": "不是大病。这个药一天吃三次，多休息。"
      },
      {
        "speaker": "大卫",
        "hanzi": "我明天能去上班吗？",
        "pinyin": "Wǒ míngtiān néng qù shàngbān ma?",
        "meaning": {
          "en": "Can I go to work tomorrow?",
          "fr": "Je peux aller travailler demain ?",
          "zh": "我明天能去上班吗？"
        },
        "audioText": "我明天能去上班吗？"
      },
      {
        "speaker": "医生",
        "hanzi": "别去了，在家休息两天吧。",
        "pinyin": "Bié qù le, zài jiā xiūxi liǎng tiān ba.",
        "meaning": {
          "en": "Better not—rest at home for two days.",
          "fr": "Non, reposez-vous deux jours à la maison.",
          "zh": "别去了，在家休息两天吧。"
        },
        "audioText": "别去了，在家休息两天吧。"
      }
    ]
  },
  "lesson-hsk2-04": {
    "grammarPoints": [
      {
        "title": {
          "en": "Past experiences with 过",
          "fr": "L'expérience passée avec 过",
          "zh": "用“过”表示经历"
        },
        "structure": "Verb + 过 (+ object) · 没(有) + verb + 过",
        "explanation": {
          "en": "过 after a verb says you have done something at least once before. The negative is 没(有)…过: 我没去过中国.",
          "fr": "过 après un verbe indique qu'on a déjà fait quelque chose au moins une fois. Négation : 没(有)…过 : 我没去过中国.",
          "zh": "动词后加“过”表示曾经有过某种经历。否定形式是“没（有）+动词+过”：我没去过中国。"
        },
        "example": {
          "hanzi": "你踢过足球吗？",
          "pinyin": "Nǐ tīguo zúqiú ma?",
          "translation": {
            "en": "Have you ever played football?",
            "fr": "As-tu déjà joué au football ?",
            "zh": "你踢过足球吗？"
          }
        }
      }
    ],
    "dialogue": [
      {
        "speaker": "小明",
        "hanzi": "你的爱好是什么？",
        "pinyin": "Nǐ de àihào shì shénme?",
        "meaning": {
          "en": "What are your hobbies?",
          "fr": "Quels sont tes loisirs ?",
          "zh": "你的爱好是什么？"
        },
        "audioText": "你的爱好是什么？"
      },
      {
        "speaker": "安娜",
        "hanzi": "我喜欢运动，每天早上跑步。你呢？",
        "pinyin": "Wǒ xǐhuan yùndòng, měi tiān zǎoshang pǎobù. Nǐ ne?",
        "meaning": {
          "en": "I like sport and I run every morning. And you?",
          "fr": "J'aime le sport, je cours tous les matins. Et toi ?",
          "zh": "我喜欢运动，每天早上跑步。你呢？"
        },
        "audioText": "我喜欢运动，每天早上跑步。你呢？"
      },
      {
        "speaker": "小明",
        "hanzi": "我喜欢踢足球和打篮球。你游过泳吗？",
        "pinyin": "Wǒ xǐhuan tī zúqiú hé dǎ lánqiú. Nǐ yóuguo yǒng ma?",
        "meaning": {
          "en": "I like playing football and basketball. Have you ever been swimming?",
          "fr": "J'aime jouer au foot et au basket. Tu as déjà nagé ?",
          "zh": "我喜欢踢足球和打篮球。你游过泳吗？"
        },
        "audioText": "我喜欢踢足球和打篮球。你游过泳吗？"
      },
      {
        "speaker": "安娜",
        "hanzi": "游过，但是游得不好。我还喜欢跳舞和唱歌。",
        "pinyin": "Yóuguo, dànshì yóu de bù hǎo. Wǒ hái xǐhuan tiàowǔ hé chàng gē.",
        "meaning": {
          "en": "Yes, but I'm not a good swimmer. I also like dancing and singing.",
          "fr": "Oui, mais je nage mal. J'aime aussi danser et chanter.",
          "zh": "游过，但是游得不好。我还喜欢跳舞和唱歌。"
        },
        "audioText": "游过，但是游得不好。我还喜欢跳舞和唱歌。"
      },
      {
        "speaker": "小明",
        "hanzi": "星期六我们一起去旅游吧！",
        "pinyin": "Xīngqīliù wǒmen yìqǐ qù lǚyóu ba!",
        "meaning": {
          "en": "Let's go on a trip together on Saturday!",
          "fr": "Partons en voyage ensemble samedi !",
          "zh": "星期六我们一起去旅游吧！"
        },
        "audioText": "星期六我们一起去旅游吧！"
      },
      {
        "speaker": "安娜",
        "hanzi": "好啊，一定很有意思！",
        "pinyin": "Hǎo a, yídìng hěn yǒu yìsi!",
        "meaning": {
          "en": "Sure, it'll be great fun!",
          "fr": "Avec plaisir, ce sera sûrement sympa !",
          "zh": "好啊，一定很有意思！"
        },
        "audioText": "好啊，一定很有意思！"
      }
    ]
  },
  "lesson-hsk2-05": {
    "grammarPoints": [
      {
        "title": {
          "en": "Leaving out the noun: 红色的",
          "fr": "Omettre le nom : 红色的",
          "zh": "“的”字结构：红色的"
        },
        "structure": "adjective / noun / pronoun + 的 (= the … one): 红色的、我的、新的",
        "explanation": {
          "en": "When it's clear what you are talking about, drop the noun and keep 的: 我要红色的 “I want the red one”.",
          "fr": "Quand on sait de quoi on parle, on omet le nom et on garde 的 : 我要红色的 « je veux le rouge ».",
          "zh": "在上下文清楚时，可以省略名词，用“……的”代替，如“我要红色的”。"
        },
        "example": {
          "hanzi": "这个书包是我的，那个是我弟弟的。",
          "pinyin": "Zhège shūbāo shì wǒ de, nàge shì wǒ dìdi de.",
          "translation": {
            "en": "This school bag is mine; that one is my little brother's.",
            "fr": "Ce cartable est à moi, celui-là est à mon petit frère.",
            "zh": "这个书包是我的，那个是我弟弟的。"
          }
        }
      }
    ],
    "dialogue": [
      {
        "speaker": "安娜",
        "hanzi": "你喜欢什么颜色？",
        "pinyin": "Nǐ xǐhuan shénme yánsè?",
        "meaning": {
          "en": "What colour do you like?",
          "fr": "Quelle couleur aimes-tu ?",
          "zh": "你喜欢什么颜色？"
        },
        "audioText": "你喜欢什么颜色？"
      },
      {
        "speaker": "小明",
        "hanzi": "我喜欢黑色和绿色。",
        "pinyin": "Wǒ xǐhuan hēisè hé lǜsè.",
        "meaning": {
          "en": "I like black and green.",
          "fr": "J'aime le noir et le vert.",
          "zh": "我喜欢黑色和绿色。"
        },
        "audioText": "我喜欢黑色和绿色。"
      },
      {
        "speaker": "安娜",
        "hanzi": "这条裤子是白色的，很好看。",
        "pinyin": "Zhè tiáo kùzi shì báisè de, hěn hǎokàn.",
        "meaning": {
          "en": "These trousers are white—they look nice.",
          "fr": "Ce pantalon est blanc, il est joli.",
          "zh": "这条裤子是白色的，很好看。"
        },
        "audioText": "这条裤子是白色的，很好看。"
      },
      {
        "speaker": "小明",
        "hanzi": "白色的不好洗，我要黑色的。",
        "pinyin": "Báisè de bù hǎo xǐ, wǒ yào hēisè de.",
        "meaning": {
          "en": "White is hard to wash; I'll take the black ones.",
          "fr": "Le blanc est difficile à laver, je prends le noir.",
          "zh": "白色的不好洗，我要黑色的。"
        },
        "audioText": "白色的不好洗，我要黑色的。"
      },
      {
        "speaker": "安娜",
        "hanzi": "这个红色的包是谁的？",
        "pinyin": "Zhège hóngsè de bāo shì shéi de?",
        "meaning": {
          "en": "Whose is this red bag?",
          "fr": "À qui est ce sac rouge ?",
          "zh": "这个红色的包是谁的？"
        },
        "audioText": "这个红色的包是谁的？"
      },
      {
        "speaker": "小明",
        "hanzi": "是我妹妹的。她的手表也是红色的。",
        "pinyin": "Shì wǒ mèimei de. Tā de shǒubiǎo yě shì hóngsè de.",
        "meaning": {
          "en": "It's my little sister's. Her watch is red too.",
          "fr": "C'est celui de ma petite sœur. Sa montre est rouge aussi.",
          "zh": "是我妹妹的。她的手表也是红色的。"
        },
        "audioText": "是我妹妹的。她的手表也是红色的。"
      }
    ]
  },
  "lesson-hsk2-06": {
    "grammarPoints": [
      {
        "title": {
          "en": "Describing someone: 他个子很高",
          "fr": "Décrire quelqu'un : 他个子很高",
          "zh": "主谓谓语句：他个子很高"
        },
        "structure": "Person + body part + (很) + adjective",
        "explanation": {
          "en": "To describe someone, put the person first, then the body part and the adjective: 她眼睛很大 “she has big eyes” (literally “she, eyes are big”).",
          "fr": "Pour décrire quelqu'un, on cite la personne, puis la partie du corps et l'adjectif : 她眼睛很大 « elle a de grands yeux » (littéralement « elle, les yeux sont grands »).",
          "zh": "描述人的外貌常用“人+身体部位+形容词”，如“她眼睛很大”“他个子很高”。"
        },
        "example": {
          "hanzi": "我奶奶眼睛很大。",
          "pinyin": "Wǒ nǎinai yǎnjing hěn dà.",
          "translation": {
            "en": "My grandmother has big eyes.",
            "fr": "Ma grand-mère a de grands yeux.",
            "zh": "我奶奶眼睛很大。"
          }
        }
      }
    ],
    "dialogue": [
      {
        "speaker": "安娜",
        "hanzi": "这个小孩儿是谁？",
        "pinyin": "Zhège xiǎoháir shì shéi?",
        "meaning": {
          "en": "Who's this child?",
          "fr": "Qui est cet enfant ?",
          "zh": "这个小孩儿是谁？"
        },
        "audioText": "这个小孩儿是谁？"
      },
      {
        "speaker": "小明",
        "hanzi": "是我。那时候我个子很小。",
        "pinyin": "Shì wǒ. Nà shíhou wǒ gèzi hěn xiǎo.",
        "meaning": {
          "en": "It's me. I was little back then.",
          "fr": "C'est moi. J'étais petit à l'époque.",
          "zh": "是我。那时候我个子很小。"
        },
        "audioText": "是我。那时候我个子很小。"
      },
      {
        "speaker": "安娜",
        "hanzi": "你笑得真好看！这两个人是你爷爷奶奶吗？",
        "pinyin": "Nǐ xiào de zhēn hǎokàn! Zhè liǎng ge rén shì nǐ yéye nǎinai ma?",
        "meaning": {
          "en": "You have a lovely smile! Are these two your grandparents?",
          "fr": "Tu as un beau sourire ! Ce sont tes grands-parents ?",
          "zh": "你笑得真好看！这两个人是你爷爷奶奶吗？"
        },
        "audioText": "你笑得真好看！这两个人是你爷爷奶奶吗？"
      },
      {
        "speaker": "小明",
        "hanzi": "对。爷爷个子很高，奶奶眼睛很大。",
        "pinyin": "Duì. Yéye gèzi hěn gāo, nǎinai yǎnjing hěn dà.",
        "meaning": {
          "en": "Yes. Grandpa is tall and Grandma has big eyes.",
          "fr": "Oui. Grand-père est grand et grand-mère a de grands yeux.",
          "zh": "对。爷爷个子很高，奶奶眼睛很大。"
        },
        "audioText": "对。爷爷个子很高，奶奶眼睛很大。"
      },
      {
        "speaker": "安娜",
        "hanzi": "那个女孩儿呢？",
        "pinyin": "Nàge nǚháir ne?",
        "meaning": {
          "en": "And that girl?",
          "fr": "Et cette fille ?",
          "zh": "那个女孩儿呢？"
        },
        "audioText": "那个女孩儿呢？"
      },
      {
        "speaker": "小明",
        "hanzi": "她是我姐姐。现在她有丈夫，也有自己的家了。",
        "pinyin": "Tā shì wǒ jiějie. Xiànzài tā yǒu zhàngfu, yě yǒu zìjǐ de jiā le.",
        "meaning": {
          "en": "She's my older sister. Now she has a husband and a home of her own.",
          "fr": "C'est ma grande sœur. Maintenant, elle a un mari et sa propre famille.",
          "zh": "她是我姐姐。现在她有丈夫，也有自己的家了。"
        },
        "audioText": "她是我姐姐。现在她有丈夫，也有自己的家了。"
      }
    ]
  },
  "lesson-hsk2-07": {
    "grammarPoints": [
      {
        "title": {
          "en": "Saying how far: 离",
          "fr": "Exprimer la distance : 离",
          "zh": "用“离”说距离"
        },
        "structure": "A 离 B + 远/近 · 往 + direction + 走",
        "explanation": {
          "en": "离 gives the distance between two places: 我家离学校很近 “my home is close to school”. 往 + direction tells you which way to go: 往前走 “go straight ahead”.",
          "fr": "离 indique la distance entre deux lieux : 我家离学校很近 « ma maison est près de l'école ». 往 + direction indique où aller : 往前走 « allez tout droit ».",
          "zh": "“离”表示两地之间的距离：我家离学校很近。“往+方向”表示动作的方向：往前走。"
        },
        "example": {
          "hanzi": "医院离这儿远吗？",
          "pinyin": "Yīyuàn lí zhèr yuǎn ma?",
          "translation": {
            "en": "Is the hospital far from here?",
            "fr": "L'hôpital est loin d'ici ?",
            "zh": "医院离这儿远吗？"
          }
        }
      }
    ],
    "dialogue": [
      {
        "speaker": "大卫",
        "hanzi": "请问，超市离这儿远吗？",
        "pinyin": "Qǐngwèn, chāoshì lí zhèr yuǎn ma?",
        "meaning": {
          "en": "Excuse me, is the supermarket far from here?",
          "fr": "Excusez-moi, le supermarché est loin d'ici ?",
          "zh": "请问，超市离这儿远吗？"
        },
        "audioText": "请问，超市离这儿远吗？"
      },
      {
        "speaker": "小明",
        "hanzi": "不远，很近。往前走，在路的右边。",
        "pinyin": "Bù yuǎn, hěn jìn. Wǎng qián zǒu, zài lù de yòubian.",
        "meaning": {
          "en": "No, it's very close. Go straight ahead; it's on the right side of the road.",
          "fr": "Non, c'est tout près. Allez tout droit, c'est à droite de la route.",
          "zh": "不远，很近。往前走，在路的右边。"
        },
        "audioText": "不远，很近。往前走，在路的右边。"
      },
      {
        "speaker": "大卫",
        "hanzi": "是在书店旁边吗？",
        "pinyin": "Shì zài shūdiàn pángbiān ma?",
        "meaning": {
          "en": "Is it next to the bookshop?",
          "fr": "C'est à côté de la librairie ?",
          "zh": "是在书店旁边吗？"
        },
        "audioText": "是在书店旁边吗？"
      },
      {
        "speaker": "小明",
        "hanzi": "对，书店在左边，超市在右边。",
        "pinyin": "Duì, shūdiàn zài zuǒbian, chāoshì zài yòubian.",
        "meaning": {
          "en": "Yes, the bookshop is on the left and the supermarket on the right.",
          "fr": "Oui, la librairie est à gauche et le supermarché à droite.",
          "zh": "对，书店在左边，超市在右边。"
        },
        "audioText": "对，书店在左边，超市在右边。"
      },
      {
        "speaker": "大卫",
        "hanzi": "超市里面有水果吗？",
        "pinyin": "Chāoshì lǐmiàn yǒu shuǐguǒ ma?",
        "meaning": {
          "en": "Do they have fruit in the supermarket?",
          "fr": "Il y a des fruits dans le supermarché ?",
          "zh": "超市里面有水果吗？"
        },
        "audioText": "超市里面有水果吗？"
      },
      {
        "speaker": "小明",
        "hanzi": "有，水果在前面，水在后面。",
        "pinyin": "Yǒu, shuǐguǒ zài qiánmiàn, shuǐ zài hòumiàn.",
        "meaning": {
          "en": "Yes—fruit at the front, water at the back.",
          "fr": "Oui, les fruits sont devant et l'eau au fond.",
          "zh": "有，水果在前面，水在后面。"
        },
        "audioText": "有，水果在前面，水在后面。"
      }
    ]
  },
  "lesson-hsk2-08": {
    "grammarPoints": [
      {
        "title": {
          "en": "Direction complements: 进来, 出去",
          "fr": "Les compléments de direction : 进来, 出去",
          "zh": "趋向补语：进来、出去"
        },
        "structure": "Verb + 来 (towards the speaker) / 去 (away from the speaker): 进来、出去、回来、上去",
        "explanation": {
          "en": "来 and 去 after a movement verb show its direction relative to the speaker: 进来 “come in”, 出去 “go out”, 回来 “come back”.",
          "fr": "来 et 去 après un verbe de mouvement indiquent la direction par rapport à celui qui parle : 进来 « entrer (vers moi) », 出去 « sortir », 回来 « revenir ».",
          "zh": "动词后加“来”或“去”表示动作的方向：朝着说话人用“来”，离开说话人用“去”，如“进来、出去、回来”。"
        },
        "example": {
          "hanzi": "外面冷，快进来吧！",
          "pinyin": "Wàimiàn lěng, kuài jìnlái ba!",
          "translation": {
            "en": "It's cold outside—come in quickly!",
            "fr": "Il fait froid dehors, entre vite !",
            "zh": "外面冷，快进来吧！"
          }
        }
      }
    ],
    "dialogue": [
      {
        "speaker": "妈妈",
        "hanzi": "小明，你在楼下吗？快上来！",
        "pinyin": "Xiǎomíng, nǐ zài lóu xià ma? Kuài shànglái!",
        "meaning": {
          "en": "Xiaoming, are you downstairs? Come up, quick!",
          "fr": "Xiaoming, tu es en bas ? Monte vite !",
          "zh": "小明，你在楼下吗？快上来！"
        },
        "audioText": "小明，你在楼下吗？快上来！"
      },
      {
        "speaker": "小明",
        "hanzi": "好，我上来了。",
        "pinyin": "Hǎo, wǒ shànglái le.",
        "meaning": {
          "en": "OK, I'm coming up.",
          "fr": "D'accord, je monte.",
          "zh": "好，我上来了。"
        },
        "audioText": "好，我上来了。"
      },
      {
        "speaker": "妈妈",
        "hanzi": "你什么时候出去的？",
        "pinyin": "Nǐ shénme shíhou chūqù de?",
        "meaning": {
          "en": "When did you go out?",
          "fr": "Quand es-tu sorti ?",
          "zh": "你什么时候出去的？"
        },
        "audioText": "你什么时候出去的？"
      },
      {
        "speaker": "小明",
        "hanzi": "下午三点出去跑步，现在回来了。",
        "pinyin": "Xiàwǔ sān diǎn chūqù pǎobù, xiànzài huílái le.",
        "meaning": {
          "en": "I went out for a run at three, and now I'm back.",
          "fr": "Je suis sorti courir à quinze heures, et me voilà revenu.",
          "zh": "下午三点出去跑步，现在回来了。"
        },
        "audioText": "下午三点出去跑步，现在回来了。"
      },
      {
        "speaker": "妈妈",
        "hanzi": "进来吧，坐下来休息一下。",
        "pinyin": "Jìnlái ba, zuò xialai xiūxi yíxià.",
        "meaning": {
          "en": "Come in, sit down and have a rest.",
          "fr": "Entre, assieds-toi et repose-toi un peu.",
          "zh": "进来吧，坐下来休息一下。"
        },
        "audioText": "进来吧，坐下来休息一下。"
      },
      {
        "speaker": "小明",
        "hanzi": "晚上我想和朋友出去走走，可以吗？",
        "pinyin": "Wǎnshang wǒ xiǎng hé péngyou chūqù zǒuzou, kěyǐ ma?",
        "meaning": {
          "en": "Can I go out for a walk with friends this evening?",
          "fr": "Je peux sortir me promener avec des amis ce soir ?",
          "zh": "晚上我想和朋友出去走走，可以吗？"
        },
        "audioText": "晚上我想和朋友出去走走，可以吗？"
      },
      {
        "speaker": "妈妈",
        "hanzi": "可以，九点前回来。",
        "pinyin": "Kěyǐ, jiǔ diǎn qián huílái.",
        "meaning": {
          "en": "Yes, be back before nine.",
          "fr": "Oui, rentre avant neuf heures.",
          "zh": "可以，九点前回来。"
        },
        "audioText": "可以，九点前回来。"
      }
    ]
  },
  "lesson-hsk2-09": {
    "grammarPoints": [
      {
        "title": {
          "en": "Asking how: 怎么 + verb",
          "fr": "Demander comment : 怎么 + verbe",
          "zh": "“怎么”问方式"
        },
        "structure": "去 + place + 怎么走？ · 怎么 + 去/坐/买…？",
        "explanation": {
          "en": "怎么 before a verb asks how to do something: 去车站怎么走？ “How do I get to the station?”.",
          "fr": "怎么 devant un verbe demande la manière de faire : 去车站怎么走？ « Comment va-t-on à la gare ? ».",
          "zh": "“怎么+动词”询问方式，如“去车站怎么走？”"
        },
        "example": {
          "hanzi": "去酒店怎么走？",
          "pinyin": "Qù jiǔdiàn zěnme zǒu?",
          "translation": {
            "en": "How do I get to the hotel?",
            "fr": "Comment va-t-on à l'hôtel ?",
            "zh": "去酒店怎么走？"
          }
        }
      }
    ],
    "dialogue": [
      {
        "speaker": "大卫",
        "hanzi": "请问，去火车站怎么走？",
        "pinyin": "Qǐngwèn, qù huǒchē zhàn zěnme zǒu?",
        "meaning": {
          "en": "Excuse me, how do I get to the railway station?",
          "fr": "Excusez-moi, comment va-t-on à la gare ?",
          "zh": "请问，去火车站怎么走？"
        },
        "audioText": "请问，去火车站怎么走？"
      },
      {
        "speaker": "路人",
        "hanzi": "坐地铁吧，地铁站在商场门口。",
        "pinyin": "Zuò dìtiě ba, dìtiě zhàn zài shāngchǎng ménkǒu.",
        "meaning": {
          "en": "Take the underground—the station is at the entrance of the shopping centre.",
          "fr": "Prenez le métro, la station est à l'entrée du centre commercial.",
          "zh": "坐地铁吧，地铁站在商场门口。"
        },
        "audioText": "坐地铁吧，地铁站在商场门口。"
      },
      {
        "speaker": "大卫",
        "hanzi": "走路要多长时间？",
        "pinyin": "Zǒulù yào duō cháng shíjiān?",
        "meaning": {
          "en": "How long does it take on foot?",
          "fr": "Combien de temps faut-il à pied ?",
          "zh": "走路要多长时间？"
        },
        "audioText": "走路要多长时间？"
      },
      {
        "speaker": "路人",
        "hanzi": "走路要四十分钟，路上车很多。你也可以打车。",
        "pinyin": "Zǒulù yào sìshí fēnzhōng, lùshang chē hěn duō. Nǐ yě kěyǐ dǎchē.",
        "meaning": {
          "en": "Forty minutes on foot, and there's a lot of traffic. You could also take a taxi.",
          "fr": "Quarante minutes à pied, et il y a beaucoup de circulation. Vous pouvez aussi prendre un taxi.",
          "zh": "走路要四十分钟，路上车很多。你也可以打车。"
        },
        "audioText": "走路要四十分钟，路上车很多。你也可以打车。"
      },
      {
        "speaker": "大卫",
        "hanzi": "谢谢！这里有药店和洗手间吗？",
        "pinyin": "Xièxie! Zhèlǐ yǒu yàodiàn hé xǐshǒujiān ma?",
        "meaning": {
          "en": "Thanks! Is there a pharmacy and a toilet here?",
          "fr": "Merci ! Il y a une pharmacie et des toilettes ici ?",
          "zh": "谢谢！这里有药店和洗手间吗？"
        },
        "audioText": "谢谢！这里有药店和洗手间吗？"
      },
      {
        "speaker": "路人",
        "hanzi": "有，在那个酒店旁边，饭馆楼下。",
        "pinyin": "Yǒu, zài nàge jiǔdiàn pángbiān, fànguǎn lóu xià.",
        "meaning": {
          "en": "Yes, next to that hotel, below the restaurant.",
          "fr": "Oui, à côté de cet hôtel, sous le restaurant.",
          "zh": "有，在那个酒店旁边，饭馆楼下。"
        },
        "audioText": "有，在那个酒店旁边，饭馆楼下。"
      }
    ]
  },
  "lesson-hsk2-10": {
    "grammarPoints": [
      {
        "title": {
          "en": "How often: 次 and 每",
          "fr": "À quelle fréquence : 次 et 每",
          "zh": "动量词“次”和“每”"
        },
        "structure": "Verb + (过/了) + number + 次 · 每 + time word (+ 都) + verb",
        "explanation": {
          "en": "次 counts how many times an action happens and goes after the verb: 我去过三次 “I've been three times”. 每 + time word says how often: 每天, 每周.",
          "fr": "次 compte le nombre de fois et se place après le verbe : 我去过三次 « j'y suis allé trois fois ». 每 + mot de temps indique la fréquence : 每天, 每周.",
          "zh": "“次”表示动作的次数，放在动词后面：我去过三次。“每+时间词”表示频率，如“每天、每周”。"
        },
        "example": {
          "hanzi": "我每周去两次超市。",
          "pinyin": "Wǒ měi zhōu qù liǎng cì chāoshì.",
          "translation": {
            "en": "I go to the supermarket twice a week.",
            "fr": "Je vais au supermarché deux fois par semaine.",
            "zh": "我每周去两次超市。"
          }
        }
      }
    ],
    "dialogue": [
      {
        "speaker": "安娜",
        "hanzi": "你经常去看电影吗？",
        "pinyin": "Nǐ jīngcháng qù kàn diànyǐng ma?",
        "meaning": {
          "en": "Do you often go to the cinema?",
          "fr": "Tu vas souvent au cinéma ?",
          "zh": "你经常去看电影吗？"
        },
        "audioText": "你经常去看电影吗？"
      },
      {
        "speaker": "小明",
        "hanzi": "不经常，有时一个月去一次。",
        "pinyin": "Bù jīngcháng, yǒushí yí ge yuè qù yí cì.",
        "meaning": {
          "en": "Not often—sometimes once a month.",
          "fr": "Pas souvent, parfois une fois par mois.",
          "zh": "不经常，有时一个月去一次。"
        },
        "audioText": "不经常，有时一个月去一次。"
      },
      {
        "speaker": "安娜",
        "hanzi": "我每周去一次，这个月已经去了三次。",
        "pinyin": "Wǒ měi zhōu qù yí cì, zhège yuè yǐjīng qù le sān cì.",
        "meaning": {
          "en": "I go once a week; I've already been three times this month.",
          "fr": "J'y vais une fois par semaine ; ce mois-ci, j'y suis déjà allée trois fois.",
          "zh": "我每周去一次，这个月已经去了三次。"
        },
        "audioText": "我每周去一次，这个月已经去了三次。"
      },
      {
        "speaker": "小明",
        "hanzi": "电影快要开始了，我们准备走吧。",
        "pinyin": "Diànyǐng kuàiyào kāishǐ le, wǒmen zhǔnbèi zǒu ba.",
        "meaning": {
          "en": "The film is about to start—let's get ready to go.",
          "fr": "Le film va bientôt commencer, préparons-nous à partir.",
          "zh": "电影快要开始了，我们准备走吧。"
        },
        "audioText": "电影快要开始了，我们准备走吧。"
      },
      {
        "speaker": "安娜",
        "hanzi": "等一会儿，我还没吃完饭。",
        "pinyin": "Děng yíhuìr, wǒ hái méi chī wán fàn.",
        "meaning": {
          "en": "Wait a moment, I haven't finished eating.",
          "fr": "Attends un peu, je n'ai pas fini de manger.",
          "zh": "等一会儿，我还没吃完饭。"
        },
        "audioText": "等一会儿，我还没吃完饭。"
      },
      {
        "speaker": "小明",
        "hanzi": "好。下周五是我的生日，你来吗？",
        "pinyin": "Hǎo. Xià zhōu wǔ shì wǒ de shēngrì, nǐ lái ma?",
        "meaning": {
          "en": "OK. Next Friday is my birthday—are you coming?",
          "fr": "D'accord. Vendredi prochain, c'est mon anniversaire, tu viens ?",
          "zh": "好。下周五是我的生日，你来吗？"
        },
        "audioText": "好。下周五是我的生日，你来吗？"
      },
      {
        "speaker": "安娜",
        "hanzi": "我会来的！",
        "pinyin": "Wǒ huì lái de!",
        "meaning": {
          "en": "I'll be there!",
          "fr": "Je viendrai !",
          "zh": "我会来的！"
        },
        "audioText": "我会来的！"
      }
    ]
  },
  "lesson-hsk2-11": {
    "grammarPoints": [
      {
        "title": {
          "en": "Because… so…; although… but…",
          "fr": "Parce que… donc… ; bien que… mais…",
          "zh": "因为……所以……；虽然……但是……"
        },
        "structure": "因为 + cause，所以 + result · 虽然 + fact，但是 + contrast",
        "explanation": {
          "en": "Chinese often uses pairs: 因为 introduces the cause and 所以 the result; 虽然 “although” is followed by 但是 “but”. Either word of a pair can be dropped.",
          "fr": "Le chinois emploie souvent des paires : 因为 introduit la cause et 所以 la conséquence ; 虽然 « bien que » est suivi de 但是 « mais ». On peut omettre l'un des deux mots.",
          "zh": "“因为……所以……”表示因果，“虽然……但是……”表示转折。两个词可以只用一个。"
        },
        "example": {
          "hanzi": "因为下雨，所以我没去。",
          "pinyin": "Yīnwèi xià yǔ, suǒyǐ wǒ méi qù.",
          "translation": {
            "en": "Because it was raining, I didn't go.",
            "fr": "Comme il pleuvait, je n'y suis pas allé.",
            "zh": "因为下雨，所以我没去。"
          }
        }
      }
    ],
    "dialogue": [
      {
        "speaker": "大卫",
        "hanzi": "你为什么这么累？",
        "pinyin": "Nǐ wèi shénme zhème lèi?",
        "meaning": {
          "en": "Why are you so tired?",
          "fr": "Pourquoi es-tu si fatigué ?",
          "zh": "你为什么这么累？"
        },
        "audioText": "你为什么这么累？"
      },
      {
        "speaker": "小明",
        "hanzi": "因为昨天考试，所以我睡得很晚。",
        "pinyin": "Yīnwèi zuótiān kǎoshì, suǒyǐ wǒ shuì de hěn wǎn.",
        "meaning": {
          "en": "I had an exam yesterday, so I went to bed late.",
          "fr": "Comme j'avais un examen hier, je me suis couché tard.",
          "zh": "因为昨天考试，所以我睡得很晚。"
        },
        "audioText": "因为昨天考试，所以我睡得很晚。"
      },
      {
        "speaker": "大卫",
        "hanzi": "考得怎么样？",
        "pinyin": "Kǎo de zěnmeyàng?",
        "meaning": {
          "en": "How did it go?",
          "fr": "Comment ça s'est passé ?",
          "zh": "考得怎么样？"
        },
        "audioText": "考得怎么样？"
      },
      {
        "speaker": "小明",
        "hanzi": "虽然题很多，但是我都会做。",
        "pinyin": "Suīrán tí hěn duō, dànshì wǒ dōu huì zuò.",
        "meaning": {
          "en": "There were lots of questions, but I could do them all.",
          "fr": "Il y avait beaucoup de questions, mais j'ai pu toutes les faire.",
          "zh": "虽然题很多，但是我都会做。"
        },
        "audioText": "虽然题很多，但是我都会做。"
      },
      {
        "speaker": "大卫",
        "hanzi": "你比我好！这样吧，晚上我请你吃饭。",
        "pinyin": "Nǐ bǐ wǒ hǎo! Zhèyàng ba, wǎnshang wǒ qǐng nǐ chī fàn.",
        "meaning": {
          "en": "You did better than me! Tell you what, I'll buy you dinner tonight.",
          "fr": "Tu t'en sors mieux que moi ! Bon, ce soir je t'invite à dîner.",
          "zh": "你比我好！这样吧，晚上我请你吃饭。"
        },
        "audioText": "你比我好！这样吧，晚上我请你吃饭。"
      },
      {
        "speaker": "小明",
        "hanzi": "太好了！我正想吃饺子呢。",
        "pinyin": "Tài hǎo le! Wǒ zhèng xiǎng chī jiǎozi ne.",
        "meaning": {
          "en": "Great! I was just thinking about dumplings.",
          "fr": "Génial ! J'avais justement envie de raviolis.",
          "zh": "太好了！我正想吃饺子呢。"
        },
        "audioText": "太好了！我正想吃饺子呢。"
      }
    ]
  },
  "lesson-hsk2-12": {
    "grammarPoints": [
      {
        "title": {
          "en": "Result complements: 听懂, 写完, 写错",
          "fr": "Les compléments de résultat : 听懂, 写完, 写错",
          "zh": "结果补语：懂、完、错"
        },
        "structure": "Verb + 懂/完/错/好 · 没 + verb + result",
        "explanation": {
          "en": "A second verb or adjective after the main verb gives its result: 听懂 “understand (what you hear)”, 写完 “finish writing”, 写错 “write wrongly”. The negative uses 没.",
          "fr": "Un second verbe ou adjectif après le verbe principal en indique le résultat : 听懂 « comprendre ce qu'on entend », 写完 « finir d'écrire », 写错 « mal écrire ». La négation se fait avec 没.",
          "zh": "动词后加“懂、完、错”等表示动作的结果，如“听懂、写完、写错”。否定用“没”：我没听懂。"
        },
        "example": {
          "hanzi": "你听懂老师的问题了吗？",
          "pinyin": "Nǐ tīng dǒng lǎoshī de wèntí le ma?",
          "translation": {
            "en": "Did you understand the teacher's question?",
            "fr": "As-tu compris la question du professeur ?",
            "zh": "你听懂老师的问题了吗？"
          }
        }
      }
    ],
    "dialogue": [
      {
        "speaker": "王老师",
        "hanzi": "同学们，明天考试，大家准备好了吗？",
        "pinyin": "Tóngxuémen, míngtiān kǎoshì, dàjiā zhǔnbèi hǎo le ma?",
        "meaning": {
          "en": "Class, there's an exam tomorrow—is everyone ready?",
          "fr": "Chers élèves, il y a un examen demain, tout le monde est prêt ?",
          "zh": "同学们，明天考试，大家准备好了吗？"
        },
        "audioText": "同学们，明天考试，大家准备好了吗？"
      },
      {
        "speaker": "安娜",
        "hanzi": "老师，这个词是什么意思？我没听懂。",
        "pinyin": "Lǎoshī, zhège cí shì shénme yìsi? Wǒ méi tīng dǒng.",
        "meaning": {
          "en": "Teacher, what does this word mean? I didn't understand.",
          "fr": "Professeur, que veut dire ce mot ? Je n'ai pas compris.",
          "zh": "老师，这个词是什么意思？我没听懂。"
        },
        "audioText": "老师，这个词是什么意思？我没听懂。"
      },
      {
        "speaker": "王老师",
        "hanzi": "这个词是“记得”，就是“没忘”。",
        "pinyin": "Zhège cí shì \"jìde\", jiù shì \"méi wàng\".",
        "meaning": {
          "en": "The word is 记得—it means “haven't forgotten”.",
          "fr": "Ce mot, c'est 记得, c'est-à-dire « ne pas avoir oublié ».",
          "zh": "这个词是“记得”，就是“没忘”。"
        },
        "audioText": "这个词是“记得”，就是“没忘”。"
      },
      {
        "speaker": "安娜",
        "hanzi": "懂了，谢谢！考试要带什么？",
        "pinyin": "Dǒng le, xièxie! Kǎoshì yào dài shénme?",
        "meaning": {
          "en": "Got it, thanks! What should we bring to the exam?",
          "fr": "Compris, merci ! Que faut-il apporter à l'examen ?",
          "zh": "懂了，谢谢！考试要带什么？"
        },
        "audioText": "懂了，谢谢！考试要带什么？"
      },
      {
        "speaker": "王老师",
        "hanzi": "带笔就可以。别忘了写姓名。",
        "pinyin": "Dài bǐ jiù kěyǐ. Bié wàng le xiě xìngmíng.",
        "meaning": {
          "en": "Just a pen. Don't forget to write your name.",
          "fr": "Juste un stylo. N'oubliez pas d'écrire vos nom et prénom.",
          "zh": "带笔就可以。别忘了写姓名。"
        },
        "audioText": "带笔就可以。别忘了写姓名。"
      },
      {
        "speaker": "安娜",
        "hanzi": "好的。我写完了可以走吗？",
        "pinyin": "Hǎo de. Wǒ xiě wán le kěyǐ zǒu ma?",
        "meaning": {
          "en": "OK. Can I leave when I've finished?",
          "fr": "D'accord. Je peux partir quand j'ai fini ?",
          "zh": "好的。我写完了可以走吗？"
        },
        "audioText": "好的。我写完了可以走吗？"
      },
      {
        "speaker": "王老师",
        "hanzi": "可以，但是别写错名字！",
        "pinyin": "Kěyǐ, dànshì bié xiě cuò míngzi!",
        "meaning": {
          "en": "Yes, but don't get your name wrong!",
          "fr": "Oui, mais ne te trompe pas de nom !",
          "zh": "可以，但是别写错名字！"
        },
        "audioText": "可以，但是别写错名字！"
      }
    ]
  },
  "lesson-hsk2-13": {
    "grammarPoints": [
      {
        "title": {
          "en": "Asking and helping: 让 and 帮",
          "fr": "Faire faire et aider : 让 et 帮",
          "zh": "“让”和“帮”"
        },
        "structure": "A 让 B + verb · A 帮 B + verb",
        "explanation": {
          "en": "让 means “let” or “make (someone do)”: 妈妈让我买菜. 帮 + person + verb means “help someone do”: 我帮你拿.",
          "fr": "让 signifie « laisser » ou « faire faire » : 妈妈让我买菜. 帮 + personne + verbe signifie « aider quelqu'un à faire » : 我帮你拿.",
          "zh": "“让”表示使令，“A让B做某事”：妈妈让我买菜。“帮+人+动词”表示帮助别人做事：我帮你拿。"
        },
        "example": {
          "hanzi": "老师让我们写汉字。",
          "pinyin": "Lǎoshī ràng wǒmen xiě Hànzì.",
          "translation": {
            "en": "The teacher asked us to write characters.",
            "fr": "Le professeur nous a demandé d'écrire des caractères.",
            "zh": "老师让我们写汉字。"
          }
        }
      }
    ],
    "dialogue": [
      {
        "speaker": "安娜",
        "hanzi": "不好意思，你能帮我一个忙吗？",
        "pinyin": "Bù hǎoyìsi, nǐ néng bāng wǒ yí ge máng ma?",
        "meaning": {
          "en": "Sorry to bother you—could you do me a favour?",
          "fr": "Excuse-moi, tu peux me rendre un service ?",
          "zh": "不好意思，你能帮我一个忙吗？"
        },
        "audioText": "不好意思，你能帮我一个忙吗？"
      },
      {
        "speaker": "小明",
        "hanzi": "可以啊，什么事？",
        "pinyin": "Kěyǐ a, shénme shì?",
        "meaning": {
          "en": "Sure, what is it?",
          "fr": "Bien sûr, de quoi s'agit-il ?",
          "zh": "可以啊，什么事？"
        },
        "audioText": "可以啊，什么事？"
      },
      {
        "speaker": "安娜",
        "hanzi": "我的东西太多了，你帮我拿一下吧。",
        "pinyin": "Wǒ de dōngxi tài duō le, nǐ bāng wǒ ná yíxià ba.",
        "meaning": {
          "en": "I've got too many things—help me carry them.",
          "fr": "J'ai trop de choses, aide-moi à les porter.",
          "zh": "我的东西太多了，你帮我拿一下吧。"
        },
        "audioText": "我的东西太多了，你帮我拿一下吧。"
      },
      {
        "speaker": "小明",
        "hanzi": "没问题。你要送到哪儿？",
        "pinyin": "Méi wèntí. Nǐ yào sòng dào nǎr?",
        "meaning": {
          "en": "No problem. Where are you taking them?",
          "fr": "Pas de problème. Tu les apportes où ?",
          "zh": "没问题。你要送到哪儿？"
        },
        "audioText": "没问题。你要送到哪儿？"
      },
      {
        "speaker": "安娜",
        "hanzi": "王老师让我送到教室。我跟你一起去。",
        "pinyin": "Wáng lǎoshī ràng wǒ sòng dào jiàoshì. Wǒ gēn nǐ yìqǐ qù.",
        "meaning": {
          "en": "Mr Wang asked me to take them to the classroom. I'll come with you.",
          "fr": "Le professeur Wang m'a demandé de les apporter en classe. Je viens avec toi.",
          "zh": "王老师让我送到教室。我跟你一起去。"
        },
        "audioText": "王老师让我送到教室。我跟你一起去。"
      },
      {
        "speaker": "小明",
        "hanzi": "好，你等我一下。我给你介绍一个朋友，他可能也能帮忙。",
        "pinyin": "Hǎo, nǐ děng wǒ yíxià. Wǒ gěi nǐ jièshào yí ge péngyou, tā kěnéng yě néng bāngmáng.",
        "meaning": {
          "en": "OK, wait for me. I'll introduce you to a friend—he might be able to help too.",
          "fr": "D'accord, attends-moi. Je vais te présenter un ami, il pourra peut-être aider aussi.",
          "zh": "好，你等我一下。我给你介绍一个朋友，他可能也能帮忙。"
        },
        "audioText": "好，你等我一下。我给你介绍一个朋友，他可能也能帮忙。"
      },
      {
        "speaker": "安娜",
        "hanzi": "你真不错！谢谢啊。",
        "pinyin": "Nǐ zhēn búcuò! Xièxie a.",
        "meaning": {
          "en": "You're great! Thanks.",
          "fr": "Tu es vraiment sympa ! Merci.",
          "zh": "你真不错！谢谢啊。"
        },
        "audioText": "你真不错！谢谢啊。"
      }
    ]
  },
  "lesson-hsk2-14": {
    "grammarPoints": [
      {
        "title": {
          "en": "Offering a choice: 还是",
          "fr": "Proposer un choix : 还是",
          "zh": "选择问句：“还是”"
        },
        "structure": "A 还是 B？",
        "explanation": {
          "en": "In a question offering a choice, link the options with 还是: 你喝咖啡还是喝茶？ No 吗 is needed at the end.",
          "fr": "Dans une question à choix, on relie les options avec 还是 : 你喝咖啡还是喝茶？ Pas de 吗 à la fin.",
          "zh": "选择问句用“还是”连接两个选项，句末不用“吗”：你喝咖啡还是喝茶？"
        },
        "example": {
          "hanzi": "你要红茶还是绿茶？",
          "pinyin": "Nǐ yào hóngchá háishi lǜchá?",
          "translation": {
            "en": "Would you like black tea or green tea?",
            "fr": "Tu veux du thé noir ou du thé vert ?",
            "zh": "你要红茶还是绿茶？"
          }
        }
      }
    ],
    "dialogue": [
      {
        "speaker": "服务员",
        "hanzi": "您好，几位？",
        "pinyin": "Nín hǎo, jǐ wèi?",
        "meaning": {
          "en": "Hello, how many of you?",
          "fr": "Bonjour, vous êtes combien ?",
          "zh": "您好，几位？"
        },
        "audioText": "您好，几位？"
      },
      {
        "speaker": "大卫",
        "hanzi": "两位。我们要点喝的。",
        "pinyin": "Liǎng wèi. Wǒmen yào diǎn hē de.",
        "meaning": {
          "en": "Two. We'd like to order drinks.",
          "fr": "Deux. Nous voudrions commander à boire.",
          "zh": "两位。我们要点喝的。"
        },
        "audioText": "两位。我们要点喝的。"
      },
      {
        "speaker": "服务员",
        "hanzi": "您要咖啡还是茶？",
        "pinyin": "Nín yào kāfēi háishi chá?",
        "meaning": {
          "en": "Coffee or tea?",
          "fr": "Café ou thé ?",
          "zh": "您要咖啡还是茶？"
        },
        "audioText": "您要咖啡还是茶？"
      },
      {
        "speaker": "大卫",
        "hanzi": "我要一杯红茶，她要奶茶。",
        "pinyin": "Wǒ yào yì bēi hóngchá, tā yào nǎichá.",
        "meaning": {
          "en": "A black tea for me, and a milk tea for her.",
          "fr": "Un thé noir pour moi, et un thé au lait pour elle.",
          "zh": "我要一杯红茶，她要奶茶。"
        },
        "audioText": "我要一杯红茶，她要奶茶。"
      },
      {
        "speaker": "服务员",
        "hanzi": "好的。吃的呢？我们的鱼和肉都很好吃。",
        "pinyin": "Hǎo de. Chī de ne? Wǒmen de yú hé ròu dōu hěn hǎochī.",
        "meaning": {
          "en": "Certainly. And to eat? Our fish and meat are both delicious.",
          "fr": "Très bien. Et à manger ? Notre poisson et notre viande sont délicieux.",
          "zh": "好的。吃的呢？我们的鱼和肉都很好吃。"
        },
        "audioText": "好的。吃的呢？我们的鱼和肉都很好吃。"
      },
      {
        "speaker": "大卫",
        "hanzi": "来一条鱼，再要两碗面条。",
        "pinyin": "Lái yì tiáo yú, zài yào liǎng wǎn miàntiáo.",
        "meaning": {
          "en": "One fish, and two bowls of noodles.",
          "fr": "Un poisson, et deux bols de nouilles.",
          "zh": "来一条鱼，再要两碗面条。"
        },
        "audioText": "来一条鱼，再要两碗面条。"
      },
      {
        "speaker": "安娜",
        "hanzi": "别点太多，我们不能花太多钱。",
        "pinyin": "Bié diǎn tài duō, wǒmen bù néng huā tài duō qián.",
        "meaning": {
          "en": "Don't order too much—we can't spend too much money.",
          "fr": "N'en commande pas trop, on ne peut pas dépenser trop d'argent.",
          "zh": "别点太多，我们不能花太多钱。"
        },
        "audioText": "别点太多，我们不能花太多钱。"
      }
    ]
  },
  "lesson-hsk2-15": {
    "grammarPoints": [
      {
        "title": {
          "en": "了 for a new situation",
          "fr": "了 pour une situation nouvelle",
          "zh": "句末“了”表示变化"
        },
        "structure": "adjective / verb (+ object) + 了 (at the end of the sentence)",
        "explanation": {
          "en": "了 at the end of a sentence shows that something has changed: 天晴了 “it has cleared up”, 我累了 “I'm tired now”.",
          "fr": "了 en fin de phrase indique un changement : 天晴了 « le ciel s'est dégagé », 我累了 « je suis fatigué (maintenant) ».",
          "zh": "句末的“了”表示情况发生了变化：天晴了、我累了。"
        },
        "example": {
          "hanzi": "下午天阴了。",
          "pinyin": "Xiàwǔ tiān yīn le.",
          "translation": {
            "en": "It clouded over in the afternoon.",
            "fr": "Le ciel s'est couvert l'après-midi.",
            "zh": "下午天阴了。"
          }
        }
      }
    ],
    "dialogue": [
      {
        "speaker": "安娜",
        "hanzi": "你看，天晴了！",
        "pinyin": "Nǐ kàn, tiān qíng le!",
        "meaning": {
          "en": "Look, it's cleared up!",
          "fr": "Regarde, le ciel s'est dégagé !",
          "zh": "你看，天晴了！"
        },
        "audioText": "你看，天晴了！"
      },
      {
        "speaker": "小明",
        "hanzi": "太好了，我们出去走走吧。",
        "pinyin": "Tài hǎo le, wǒmen chūqù zǒuzou ba.",
        "meaning": {
          "en": "Great, let's go out for a walk.",
          "fr": "Super, allons faire un tour.",
          "zh": "太好了，我们出去走走吧。"
        },
        "audioText": "太好了，我们出去走走吧。"
      },
      {
        "speaker": "安娜",
        "hanzi": "外面的花都开了，鸟也在飞。",
        "pinyin": "Wàimiàn de huā dōu kāi le, niǎo yě zài fēi.",
        "meaning": {
          "en": "The flowers outside are all out, and the birds are flying.",
          "fr": "Dehors, les fleurs sont toutes écloses et les oiseaux volent.",
          "zh": "外面的花都开了，鸟也在飞。"
        },
        "audioText": "外面的花都开了，鸟也在飞。"
      },
      {
        "speaker": "小明",
        "hanzi": "你看那只鸟，它不动了。",
        "pinyin": "Nǐ kàn nà zhī niǎo, tā bú dòng le.",
        "meaning": {
          "en": "Look at that bird—it's stopped moving.",
          "fr": "Regarde cet oiseau, il ne bouge plus.",
          "zh": "你看那只鸟，它不动了。"
        },
        "audioText": "你看那只鸟，它不动了。"
      },
      {
        "speaker": "安娜",
        "hanzi": "它可能累了。",
        "pinyin": "Tā kěnéng lèi le.",
        "meaning": {
          "en": "Maybe it's tired.",
          "fr": "Il est peut-être fatigué.",
          "zh": "它可能累了。"
        },
        "audioText": "它可能累了。"
      },
      {
        "speaker": "小明",
        "hanzi": "我也累了。今天出来玩儿真快乐！",
        "pinyin": "Wǒ yě lèi le. Jīntiān chūlái wánr zhēn kuàilè!",
        "meaning": {
          "en": "I'm tired too. Today's outing was so much fun!",
          "fr": "Moi aussi je suis fatigué. Cette sortie aujourd'hui était vraiment sympa !",
          "zh": "我也累了。今天出来玩儿真快乐！"
        },
        "audioText": "我也累了。今天出来玩儿真快乐！"
      }
    ]
  },
  "lesson-hsk2-16": {
    "grammarPoints": [
      {
        "title": {
          "en": "Describing how well: verb + 得 + comment",
          "fr": "Dire comment on fait : verbe + 得 + appréciation",
          "zh": "程度补语“得”"
        },
        "structure": "Verb + 得 + (很) + adjective · (Verb +) object + verb + 得 + adjective",
        "explanation": {
          "en": "To say how an action is done, put 得 after the verb and then the comment: 他说得很好. If there's an object, repeat the verb: 他说汉语说得很好.",
          "fr": "Pour dire comment une action est faite, on place 得 après le verbe puis l'appréciation : 他说得很好. Avec un complément d'objet, on répète le verbe : 他说汉语说得很好.",
          "zh": "动词后加“得”，再加评价，表示动作进行得怎么样：他说得很好。有宾语时要重复动词：他说汉语说得很好。"
        },
        "example": {
          "hanzi": "她跑得很快。",
          "pinyin": "Tā pǎo de hěn kuài.",
          "translation": {
            "en": "She runs fast.",
            "fr": "Elle court vite.",
            "zh": "她跑得很快。"
          }
        }
      }
    ],
    "dialogue": [
      {
        "speaker": "小明",
        "hanzi": "你从哪个国家来？",
        "pinyin": "Nǐ cóng nǎge guójiā lái?",
        "meaning": {
          "en": "Which country are you from?",
          "fr": "De quel pays viens-tu ?",
          "zh": "你从哪个国家来？"
        },
        "audioText": "你从哪个国家来？"
      },
      {
        "speaker": "大卫",
        "hanzi": "我从一个很远的国家来，出国已经两年了。",
        "pinyin": "Wǒ cóng yí ge hěn yuǎn de guójiā lái, chūguó yǐjīng liǎng nián le.",
        "meaning": {
          "en": "From a country far away. I've been abroad for two years now.",
          "fr": "D'un pays très lointain. Je suis à l'étranger depuis deux ans.",
          "zh": "我从一个很远的国家来，出国已经两年了。"
        },
        "audioText": "我从一个很远的国家来，出国已经两年了。"
      },
      {
        "speaker": "小明",
        "hanzi": "你汉语说得真好！",
        "pinyin": "Nǐ Hànyǔ shuō de zhēn hǎo!",
        "meaning": {
          "en": "Your Chinese is really good!",
          "fr": "Tu parles vraiment bien chinois !",
          "zh": "你汉语说得真好！"
        },
        "audioText": "你汉语说得真好！"
      },
      {
        "speaker": "大卫",
        "hanzi": "谢谢！我每天上网学习，网上有很多好课。",
        "pinyin": "Xièxie! Wǒ měi tiān shàngwǎng xuéxí, wǎngshang yǒu hěn duō hǎo kè.",
        "meaning": {
          "en": "Thanks! I study online every day; there are lots of good courses online.",
          "fr": "Merci ! J'étudie en ligne tous les jours, il y a beaucoup de bons cours sur internet.",
          "zh": "谢谢！我每天上网学习，网上有很多好课。"
        },
        "audioText": "谢谢！我每天上网学习，网上有很多好课。"
      },
      {
        "speaker": "小明",
        "hanzi": "你经常给家里打电话吗？",
        "pinyin": "Nǐ jīngcháng gěi jiā li dǎ diànhuà ma?",
        "meaning": {
          "en": "Do you often call home?",
          "fr": "Tu appelles souvent ta famille ?",
          "zh": "你经常给家里打电话吗？"
        },
        "audioText": "你经常给家里打电话吗？"
      },
      {
        "speaker": "大卫",
        "hanzi": "经常。打开手机就能看见家人。",
        "pinyin": "Jīngcháng. Dǎkāi shǒujī jiù néng kànjiàn jiārén.",
        "meaning": {
          "en": "Often. I just open my phone and I can see my family.",
          "fr": "Souvent. J'ouvre mon téléphone et je vois ma famille.",
          "zh": "经常。打开手机就能看见家人。"
        },
        "audioText": "经常。打开手机就能看见家人。"
      }
    ]
  },
  "lesson-hsk3-03": {
    "grammarPoints": [
      {
        "title": {
          "en": "Towards someone: 对",
          "fr": "Envers quelqu'un : 对",
          "zh": "介词“对”：对……很热情"
        },
        "structure": "A 对 B + (很) + adjective / verb: 对人很热情、对工作很满意",
        "explanation": {
          "en": "对 introduces the person or thing an attitude is aimed at: 她对客人很热情 “she is warm towards guests”, 我对成绩很满意 “I'm satisfied with my results”.",
          "fr": "对 introduit la personne ou la chose visée par une attitude : 她对客人很热情 « elle est chaleureuse avec les invités », 我对成绩很满意 « je suis satisfait de mes résultats ».",
          "zh": "“对”引出动作或态度的对象：她对客人很热情；我对成绩很满意。"
        },
        "example": {
          "hanzi": "老师对我们非常关心。",
          "pinyin": "Lǎoshī duì wǒmen fēicháng guānxīn.",
          "translation": {
            "en": "The teacher cares a lot about us.",
            "fr": "Le professeur se soucie beaucoup de nous.",
            "zh": "老师对我们非常关心。"
          }
        }
      }
    ],
    "dialogue": [
      {
        "speaker": "安娜",
        "hanzi": "你怎么了？看起来很难过。",
        "pinyin": "Nǐ zěnme le? Kàn qilai hěn nánguò.",
        "meaning": {
          "en": "What's wrong? You look sad.",
          "fr": "Qu'est-ce qui ne va pas ? Tu as l'air triste.",
          "zh": "你怎么了？看起来很难过。"
        },
        "audioText": "你怎么了？看起来很难过。"
      },
      {
        "speaker": "小明",
        "hanzi": "我妈妈生病了，我很担心。",
        "pinyin": "Wǒ māma shēngbìng le, wǒ hěn dānxīn.",
        "meaning": {
          "en": "My mum is ill and I'm very worried.",
          "fr": "Ma mère est malade, je m'inquiète beaucoup.",
          "zh": "我妈妈生病了，我很担心。"
        },
        "audioText": "我妈妈生病了，我很担心。"
      },
      {
        "speaker": "安娜",
        "hanzi": "别着急，医生会照顾好她的。",
        "pinyin": "Bié zháojí, yīshēng huì zhàogù hǎo tā de.",
        "meaning": {
          "en": "Don't worry, the doctors will take good care of her.",
          "fr": "Ne t'en fais pas, les médecins vont bien s'occuper d'elle.",
          "zh": "别着急，医生会照顾好她的。"
        },
        "audioText": "别着急，医生会照顾好她的。"
      },
      {
        "speaker": "小明",
        "hanzi": "我相信医生，但是我还是害怕。",
        "pinyin": "Wǒ xiāngxìn yīshēng, dànshì wǒ háishi hàipà.",
        "meaning": {
          "en": "I trust the doctors, but I'm still scared.",
          "fr": "Je fais confiance aux médecins, mais j'ai quand même peur.",
          "zh": "我相信医生，但是我还是害怕。"
        },
        "audioText": "我相信医生，但是我还是害怕。"
      },
      {
        "speaker": "安娜",
        "hanzi": "我愿意帮助你。周末我们一起去看她，好吗？",
        "pinyin": "Wǒ yuànyì bāngzhù nǐ. Zhōumò wǒmen yìqǐ qù kàn tā, hǎo ma?",
        "meaning": {
          "en": "I'm happy to help. Let's go and see her together at the weekend, OK?",
          "fr": "Je veux bien t'aider. Allons la voir ensemble ce week-end, d'accord ?",
          "zh": "我愿意帮助你。周末我们一起去看她，好吗？"
        },
        "audioText": "我愿意帮助你。周末我们一起去看她，好吗？"
      },
      {
        "speaker": "小明",
        "hanzi": "谢谢你对我这么关心，有你这个朋友我很开心。",
        "pinyin": "Xièxie nǐ duì wǒ zhème guānxīn, yǒu nǐ zhège péngyou wǒ hěn kāixīn.",
        "meaning": {
          "en": "Thank you for caring so much about me. I'm glad to have a friend like you.",
          "fr": "Merci de t'inquiéter autant pour moi. Je suis content d'avoir une amie comme toi.",
          "zh": "谢谢你对我这么关心，有你这个朋友我很开心。"
        },
        "audioText": "谢谢你对我这么关心，有你这个朋友我很开心。"
      },
      {
        "speaker": "安娜",
        "hanzi": "没关系，放心吧！",
        "pinyin": "Méi guānxi, fàngxīn ba!",
        "meaning": {
          "en": "Don't mention it—don't worry!",
          "fr": "Ce n'est rien, ne t'inquiète pas !",
          "zh": "没关系，放心吧！"
        },
        "audioText": "没关系，放心吧！"
      }
    ]
  },
  "lesson-hsk3-04": {
    "grammarPoints": [
      {
        "title": {
          "en": "More and more: 越来越",
          "fr": "De plus en plus : 越来越",
          "zh": "越来越 + 形容词"
        },
        "structure": "Subject + 越来越 + adjective / verb",
        "explanation": {
          "en": "越来越 shows a steady change over time: 城市越来越大 “the city is getting bigger and bigger”. Don't add 很 after it.",
          "fr": "越来越 exprime un changement progressif : 城市越来越大 « la ville devient de plus en plus grande ». On n'ajoute pas 很 après.",
          "zh": "“越来越+形容词/动词”表示程度随时间不断变化：城市越来越大。后面不能再加“很”。"
        },
        "example": {
          "hanzi": "生活越来越方便了。",
          "pinyin": "Shēnghuó yuè lái yuè fāngbiàn le.",
          "translation": {
            "en": "Life is getting more and more convenient.",
            "fr": "La vie devient de plus en plus pratique.",
            "zh": "生活越来越方便了。"
          }
        }
      }
    ],
    "dialogue": [
      {
        "speaker": "爷爷",
        "hanzi": "这几年我们城市的变化真大！",
        "pinyin": "Zhè jǐ nián wǒmen chéngshì de biànhuà zhēn dà!",
        "meaning": {
          "en": "Our city has changed so much in the last few years!",
          "fr": "Notre ville a tellement changé ces dernières années !",
          "zh": "这几年我们城市的变化真大！"
        },
        "audioText": "这几年我们城市的变化真大！"
      },
      {
        "speaker": "小明",
        "hanzi": "是啊，城市发展得很快，生活越来越方便了。",
        "pinyin": "Shì a, chéngshì fāzhǎn de hěn kuài, shēnghuó yuè lái yuè fāngbiàn le.",
        "meaning": {
          "en": "Yes, it's developing fast, and life is getting more and more convenient.",
          "fr": "Oui, elle se développe vite et la vie devient de plus en plus pratique.",
          "zh": "是啊，城市发展得很快，生活越来越方便了。"
        },
        "audioText": "是啊，城市发展得很快，生活越来越方便了。"
      },
      {
        "speaker": "爷爷",
        "hanzi": "现在买东西、看新闻都在网上。",
        "pinyin": "Xiànzài mǎi dōngxi, kàn xīnwén dōu zài wǎngshang.",
        "meaning": {
          "en": "Now people shop and read the news online.",
          "fr": "Maintenant, on fait ses achats et on lit les infos en ligne.",
          "zh": "现在买东西、看新闻都在网上。"
        },
        "audioText": "现在买东西、看新闻都在网上。"
      },
      {
        "speaker": "小明",
        "hanzi": "上网可以了解世界上的事。",
        "pinyin": "Shàngwǎng kěyǐ liǎojiě shìjiè shang de shì.",
        "meaning": {
          "en": "Online you can find out what's going on in the world.",
          "fr": "En ligne, on peut savoir ce qui se passe dans le monde.",
          "zh": "上网可以了解世界上的事。"
        },
        "audioText": "上网可以了解世界上的事。"
      },
      {
        "speaker": "爷爷",
        "hanzi": "可是环境也很重要，车太多对健康有影响。",
        "pinyin": "Kěshì huánjìng yě hěn zhòngyào, chē tài duō duì jiànkāng yǒu yǐngxiǎng.",
        "meaning": {
          "en": "But the environment matters too—too many cars affect our health.",
          "fr": "Mais l'environnement compte aussi : trop de voitures, ça nuit à la santé.",
          "zh": "可是环境也很重要，车太多对健康有影响。"
        },
        "audioText": "可是环境也很重要，车太多对健康有影响。"
      },
      {
        "speaker": "小明",
        "hanzi": "您说得对。我们的邻居现在都骑自行车，又健康又安全。",
        "pinyin": "Nín shuō de duì. Wǒmen de línjū xiànzài dōu qí zìxíngchē, yòu jiànkāng yòu ānquán.",
        "meaning": {
          "en": "You're right. Our neighbours all cycle now—it's healthy and safe.",
          "fr": "Vous avez raison. Nos voisins font tous du vélo maintenant, c'est sain et sûr.",
          "zh": "您说得对。我们的邻居现在都骑自行车，又健康又安全。"
        },
        "audioText": "您说得对。我们的邻居现在都骑自行车，又健康又安全。"
      }
    ]
  },
  "lesson-hsk3-05": {
    "grammarPoints": [
      {
        "title": {
          "en": "Some…, others…: 有的……有的……",
          "fr": "Certains…, d'autres… : 有的……有的……",
          "zh": "“有的……，有的……”"
        },
        "structure": "有的 (+ noun) + verb，有的 (+ noun) + verb",
        "explanation": {
          "en": "Use 有的 two or more times to split a group: 有的是留学生，有的是游客 “some are international students, others are tourists”.",
          "fr": "On emploie 有的 deux fois ou plus pour répartir un groupe : 有的是留学生，有的是游客 « certains sont étudiants étrangers, d'autres touristes ».",
          "zh": "用两个或几个“有的”把一个群体分成几部分：有的是留学生，有的是游客。"
        },
        "example": {
          "hanzi": "我们班的同学有的是男生，有的是女生。",
          "pinyin": "Wǒmen bān de tóngxué yǒude shì nánshēng, yǒude shì nǚshēng.",
          "translation": {
            "en": "In our class, some are boys and some are girls.",
            "fr": "Dans notre classe, certains sont des garçons et d'autres des filles.",
            "zh": "我们班的同学有的是男生，有的是女生。"
          }
        }
      }
    ],
    "dialogue": [
      {
        "speaker": "安娜",
        "hanzi": "今天来的客人真多！",
        "pinyin": "Jīntiān lái de kèrén zhēn duō!",
        "meaning": {
          "en": "So many guests came today!",
          "fr": "Il y a tellement d'invités aujourd'hui !",
          "zh": "今天来的客人真多！"
        },
        "audioText": "今天来的客人真多！"
      },
      {
        "speaker": "小明",
        "hanzi": "是啊，有的是留学生，有的是游客。",
        "pinyin": "Shì a, yǒude shì liúxuéshēng, yǒude shì yóukè.",
        "meaning": {
          "en": "Yes—some are international students, some are tourists.",
          "fr": "Oui, certains sont étudiants étrangers, d'autres touristes.",
          "zh": "是啊，有的是留学生，有的是游客。"
        },
        "audioText": "是啊，有的是留学生，有的是游客。"
      },
      {
        "speaker": "安娜",
        "hanzi": "那位叔叔是谁？",
        "pinyin": "Nà wèi shūshu shì shéi?",
        "meaning": {
          "en": "Who's that man?",
          "fr": "Qui est ce monsieur ?",
          "zh": "那位叔叔是谁？"
        },
        "audioText": "那位叔叔是谁？"
      },
      {
        "speaker": "小明",
        "hanzi": "他是我们学校的校长，旁边的阿姨是他爱人。",
        "pinyin": "Tā shì wǒmen xuéxiào de xiàozhǎng, pángbiān de āyí shì tā àiren.",
        "meaning": {
          "en": "He's our headmaster; the lady next to him is his wife.",
          "fr": "C'est le directeur de notre école ; la dame à côté de lui est sa femme.",
          "zh": "他是我们学校的校长，旁边的阿姨是他爱人。"
        },
        "audioText": "他是我们学校的校长，旁边的阿姨是他爱人。"
      },
      {
        "speaker": "安娜",
        "hanzi": "那个高个子的男人呢？",
        "pinyin": "Nàge gāo gèzi de nánrén ne?",
        "meaning": {
          "en": "And that tall man?",
          "fr": "Et cet homme grand ?",
          "zh": "那个高个子的男人呢？"
        },
        "audioText": "那个高个子的男人呢？"
      },
      {
        "speaker": "小明",
        "hanzi": "他是运动员，很有名。他旁边的女人是一位画家。",
        "pinyin": "Tā shì yùndòngyuán, hěn yǒumíng. Tā pángbiān de nǚrén shì yí wèi huàjiā.",
        "meaning": {
          "en": "He's an athlete, quite famous. The woman next to him is a painter.",
          "fr": "C'est un sportif, assez connu. La femme à côté de lui est peintre.",
          "zh": "他是运动员，很有名。他旁边的女人是一位画家。"
        },
        "audioText": "他是运动员，很有名。他旁边的女人是一位画家。"
      },
      {
        "speaker": "安娜",
        "hanzi": "今天的名人真多！",
        "pinyin": "Jīntiān de míngrén zhēn duō!",
        "meaning": {
          "en": "So many celebrities today!",
          "fr": "Que de célébrités aujourd'hui !",
          "zh": "今天的名人真多！"
        },
        "audioText": "今天的名人真多！"
      }
    ]
  },
  "lesson-hsk3-06": {
    "grammarPoints": [
      {
        "title": {
          "en": "Both… and…: 又……又……",
          "fr": "À la fois… et… : 又……又……",
          "zh": "“又……又……”"
        },
        "structure": "又 + adjective，又 + adjective",
        "explanation": {
          "en": "又…又… links two qualities of the same person or thing: 她又聪明又可爱 “she is both clever and cute”. Both qualities should go the same way, both good or both bad.",
          "fr": "又…又… relie deux qualités d'une même personne ou chose : 她又聪明又可爱 « elle est à la fois intelligente et mignonne ». Les deux qualités vont dans le même sens, positives ou négatives.",
          "zh": "“又……又……”表示两种性质同时存在：她又聪明又可爱。两个词的意思通常都是好的或都是不好的。"
        },
        "example": {
          "hanzi": "他的弟弟又高又瘦。",
          "pinyin": "Tā de dìdi yòu gāo yòu shòu.",
          "translation": {
            "en": "His younger brother is tall and thin.",
            "fr": "Son petit frère est grand et mince.",
            "zh": "他的弟弟又高又瘦。"
          }
        }
      }
    ],
    "dialogue": [
      {
        "speaker": "安娜",
        "hanzi": "你的新同学长什么样？",
        "pinyin": "Nǐ de xīn tóngxué zhǎng shénme yàng?",
        "meaning": {
          "en": "What does your new classmate look like?",
          "fr": "À quoi ressemble ton nouveau camarade ?",
          "zh": "你的新同学长什么样？"
        },
        "audioText": "你的新同学长什么样？"
      },
      {
        "speaker": "小明",
        "hanzi": "他又高又瘦，身高一米八五。",
        "pinyin": "Tā yòu gāo yòu shòu, shēngāo yì mǐ bā wǔ.",
        "meaning": {
          "en": "He's tall and thin—1.85 m.",
          "fr": "Il est grand et mince, il mesure un mètre quatre-vingt-cinq.",
          "zh": "他又高又瘦，身高一米八五。"
        },
        "audioText": "他又高又瘦，身高一米八五。"
      },
      {
        "speaker": "安娜",
        "hanzi": "年轻吗？",
        "pinyin": "Niánqīng ma?",
        "meaning": {
          "en": "Is he young?",
          "fr": "Il est jeune ?",
          "zh": "年轻吗？"
        },
        "audioText": "年轻吗？"
      },
      {
        "speaker": "小明",
        "hanzi": "很年轻，头发很短，耳朵有点儿大。",
        "pinyin": "Hěn niánqīng, tóufa hěn duǎn, ěrduo yǒudiǎnr dà.",
        "meaning": {
          "en": "Very young, with short hair and slightly big ears.",
          "fr": "Très jeune, avec les cheveux courts et des oreilles un peu grandes.",
          "zh": "很年轻，头发很短，耳朵有点儿大。"
        },
        "audioText": "很年轻，头发很短，耳朵有点儿大。"
      },
      {
        "speaker": "安娜",
        "hanzi": "他人怎么样？",
        "pinyin": "Tā rén zěnmeyàng?",
        "meaning": {
          "en": "What's he like as a person?",
          "fr": "Il est comment, comme personne ?",
          "zh": "他人怎么样？"
        },
        "audioText": "他人怎么样？"
      },
      {
        "speaker": "小明",
        "hanzi": "又聪明又安静，就是有点儿奇怪，不爱说话。",
        "pinyin": "Yòu cōngmíng yòu ānjìng, jiù shì yǒudiǎnr qíguài, bú ài shuōhuà.",
        "meaning": {
          "en": "Clever and quiet, just a bit odd—he doesn't like to talk.",
          "fr": "Intelligent et calme, juste un peu bizarre : il n'aime pas parler.",
          "zh": "又聪明又安静，就是有点儿奇怪，不爱说话。"
        },
        "audioText": "又聪明又安静，就是有点儿奇怪，不爱说话。"
      },
      {
        "speaker": "安娜",
        "hanzi": "安静的人也很可爱啊！",
        "pinyin": "Ānjìng de rén yě hěn kě'ài a!",
        "meaning": {
          "en": "Quiet people are lovely too!",
          "fr": "Les gens calmes sont adorables aussi !",
          "zh": "安静的人也很可爱啊！"
        },
        "audioText": "安静的人也很可爱啊！"
      }
    ]
  },
  "lesson-hsk3-07": {
    "grammarPoints": [
      {
        "title": {
          "en": "Doubling verbs: 打扫打扫",
          "fr": "Le redoublement des verbes : 打扫打扫",
          "zh": "动词重叠：打扫打扫"
        },
        "structure": "one syllable: 扫扫、看看 · two syllables: 打扫打扫 (ABAB)",
        "explanation": {
          "en": "Doubling a verb makes the action sound short, light or casual: 你扫扫地 “give the floor a quick sweep”. Two-syllable verbs double as ABAB: 打扫打扫.",
          "fr": "Redoubler un verbe rend l'action brève, légère ou détendue : 你扫扫地 « donne un petit coup de balai ». Les verbes de deux syllabes se redoublent en ABAB : 打扫打扫.",
          "zh": "动词重叠表示动作时间短、轻松或尝试，如“扫扫地”。双音节动词按ABAB重叠：打扫打扫。"
        },
        "example": {
          "hanzi": "明天搬家，今天我们打扫打扫房子吧。",
          "pinyin": "Míngtiān bānjiā, jīntiān wǒmen dǎsǎo dǎsǎo fángzi ba.",
          "translation": {
            "en": "We're moving tomorrow—let's give the house a clean today.",
            "fr": "On déménage demain, faisons un peu de ménage aujourd'hui.",
            "zh": "明天搬家，今天我们打扫打扫房子吧。"
          }
        }
      }
    ],
    "dialogue": [
      {
        "speaker": "妈妈",
        "hanzi": "下个月我们就要搬家了。",
        "pinyin": "Xià ge yuè wǒmen jiù yào bānjiā le.",
        "meaning": {
          "en": "We're moving next month.",
          "fr": "On déménage le mois prochain.",
          "zh": "下个月我们就要搬家了。"
        },
        "audioText": "下个月我们就要搬家了。"
      },
      {
        "speaker": "小明",
        "hanzi": "新房子在哪个小区？几层？",
        "pinyin": "Xīn fángzi zài nǎge xiǎoqū? Jǐ céng?",
        "meaning": {
          "en": "Which residential compound is the new place in? Which floor?",
          "fr": "Le nouvel appartement est dans quelle résidence ? À quel étage ?",
          "zh": "新房子在哪个小区？几层？"
        },
        "audioText": "新房子在哪个小区？几层？"
      },
      {
        "speaker": "妈妈",
        "hanzi": "在学校附近的小区，十二层，有电梯。",
        "pinyin": "Zài xuéxiào fùjìn de xiǎoqū, shí'èr céng, yǒu diàntī.",
        "meaning": {
          "en": "In the compound near the school, on the twelfth floor, with a lift.",
          "fr": "Dans la résidence près de l'école, au douzième étage, avec ascenseur.",
          "zh": "在学校附近的小区，十二层，有电梯。"
        },
        "audioText": "在学校附近的小区，十二层，有电梯。"
      },
      {
        "speaker": "小明",
        "hanzi": "太好了，不用走楼梯了！冰箱和洗衣机都要搬吗？",
        "pinyin": "Tài hǎo le, búyòng zǒu lóutī le! Bīngxiāng hé xǐyījī dōu yào bān ma?",
        "meaning": {
          "en": "Great, no more stairs! Are we moving the fridge and the washing machine too?",
          "fr": "Génial, plus d'escaliers ! On déménage aussi le frigo et la machine à laver ?",
          "zh": "太好了，不用走楼梯了！冰箱和洗衣机都要搬吗？"
        },
        "audioText": "太好了，不用走楼梯了！冰箱和洗衣机都要搬吗？"
      },
      {
        "speaker": "妈妈",
        "hanzi": "新房子里有空调和沙发，冰箱和洗衣机要带走。",
        "pinyin": "Xīn fángzi li yǒu kōngtiáo hé shāfā, bīngxiāng hé xǐyījī yào dài zǒu.",
        "meaning": {
          "en": "The new place has air conditioning and a sofa; we're taking the fridge and the washing machine.",
          "fr": "Le nouvel appartement a la clim et un canapé ; on emporte le frigo et la machine à laver.",
          "zh": "新房子里有空调和沙发，冰箱和洗衣机要带走。"
        },
        "audioText": "新房子里有空调和沙发，冰箱和洗衣机要带走。"
      },
      {
        "speaker": "小明",
        "hanzi": "那这个屋子要不要打扫打扫？",
        "pinyin": "Nà zhège wūzi yào bu yào dǎsǎo dǎsǎo?",
        "meaning": {
          "en": "So should we give this room a clean?",
          "fr": "Alors, on fait un peu de ménage dans cette pièce ?",
          "zh": "那这个屋子要不要打扫打扫？"
        },
        "audioText": "那这个屋子要不要打扫打扫？"
      },
      {
        "speaker": "妈妈",
        "hanzi": "要，地太脏了，你扫扫地吧，扫干净一点儿。",
        "pinyin": "Yào, dì tài zāng le, nǐ sǎosao dì ba, sǎo gānjìng yìdiǎnr.",
        "meaning": {
          "en": "Yes, the floor is filthy. Give it a sweep, and do it properly.",
          "fr": "Oui, le sol est trop sale. Passe un coup de balai, et fais-le bien.",
          "zh": "要，地太脏了，你扫扫地吧，扫干净一点儿。"
        },
        "audioText": "要，地太脏了，你扫扫地吧，扫干净一点儿。"
      }
    ]
  },
  "lesson-hsk3-08": {
    "grammarPoints": [
      {
        "title": {
          "en": "Everything / nothing: 什么都…",
          "fr": "Tout / rien : 什么都…",
          "zh": "疑问词表示全部：什么都……"
        },
        "structure": "什么/哪儿/谁 + 都 + verb (all) · 什么/哪儿/谁 + 都 + 不/没 + verb (none)",
        "explanation": {
          "en": "A question word followed by 都 means “every…”: 我什么都想吃 “I want to eat everything”. With a negative it means “no…”: 我什么都没吃 “I haven't eaten anything”.",
          "fr": "Un mot interrogatif suivi de 都 signifie « tout… » : 我什么都想吃 « j'ai envie de tout manger ». Avec une négation, il signifie « rien… » : 我什么都没吃 « je n'ai rien mangé ».",
          "zh": "疑问代词加“都”表示任指，没有例外：我什么都想吃。加否定表示全部否定：我什么都没吃。"
        },
        "example": {
          "hanzi": "我饿了，今天什么都没吃。",
          "pinyin": "Wǒ è le, jīntiān shénme dōu méi chī.",
          "translation": {
            "en": "I'm hungry—I haven't eaten anything today.",
            "fr": "J'ai faim, je n'ai rien mangé aujourd'hui.",
            "zh": "我饿了，今天什么都没吃。"
          }
        }
      }
    ],
    "dialogue": [
      {
        "speaker": "小明",
        "hanzi": "我又渴又饿！",
        "pinyin": "Wǒ yòu kě yòu è!",
        "meaning": {
          "en": "I'm thirsty and hungry!",
          "fr": "J'ai soif et faim !",
          "zh": "我又渴又饿！"
        },
        "audioText": "我又渴又饿！"
      },
      {
        "speaker": "安娜",
        "hanzi": "你看看菜单，想吃什么？",
        "pinyin": "Nǐ kànkan càidān, xiǎng chī shénme?",
        "meaning": {
          "en": "Have a look at the menu—what do you fancy?",
          "fr": "Regarde la carte, qu'est-ce qui te fait envie ?",
          "zh": "你看看菜单，想吃什么？"
        },
        "audioText": "你看看菜单，想吃什么？"
      },
      {
        "speaker": "小明",
        "hanzi": "我什么都想吃！先要一碗米饭，还要吃鸡。",
        "pinyin": "Wǒ shénme dōu xiǎng chī! Xiān yào yì wǎn mǐfàn, hái yào chī jī.",
        "meaning": {
          "en": "I want everything! A bowl of rice first, and some chicken too.",
          "fr": "J'ai envie de tout ! D'abord un bol de riz, et aussi du poulet.",
          "zh": "我什么都想吃！先要一碗米饭，还要吃鸡。"
        },
        "audioText": "我什么都想吃！先要一碗米饭，还要吃鸡。"
      },
      {
        "speaker": "安娜",
        "hanzi": "喝什么饮料？矿泉水还是啤酒？",
        "pinyin": "Hē shénme yǐnliào? Kuàngquánshuǐ háishi píjiǔ?",
        "meaning": {
          "en": "What would you like to drink? Mineral water or beer?",
          "fr": "Qu'est-ce que tu bois ? De l'eau minérale ou de la bière ?",
          "zh": "喝什么饮料？矿泉水还是啤酒？"
        },
        "audioText": "喝什么饮料？矿泉水还是啤酒？"
      },
      {
        "speaker": "小明",
        "hanzi": "矿泉水吧，我不喝酒。你尝尝这个西瓜，又新鲜又甜。",
        "pinyin": "Kuàngquánshuǐ ba, wǒ bù hē jiǔ. Nǐ chángchang zhège xīguā, yòu xīnxiān yòu tián.",
        "meaning": {
          "en": "Mineral water—I don't drink alcohol. Try this watermelon; it's fresh and sweet.",
          "fr": "De l'eau minérale, je ne bois pas d'alcool. Goûte cette pastèque, elle est fraîche et sucrée.",
          "zh": "矿泉水吧，我不喝酒。你尝尝这个西瓜，又新鲜又甜。"
        },
        "audioText": "矿泉水吧，我不喝酒。你尝尝这个西瓜，又新鲜又甜。"
      },
      {
        "speaker": "安娜",
        "hanzi": "真好吃！吃完饭再要一个蛋糕吧。",
        "pinyin": "Zhēn hǎochī! Chī wán fàn zài yào yí ge dàngāo ba.",
        "meaning": {
          "en": "Delicious! Let's get a cake after the meal.",
          "fr": "Délicieuse ! Prenons un gâteau après le repas.",
          "zh": "真好吃！吃完饭再要一个蛋糕吧。"
        },
        "audioText": "真好吃！吃完饭再要一个蛋糕吧。"
      },
      {
        "speaker": "小明",
        "hanzi": "我已经饱了，什么都吃不下了。",
        "pinyin": "Wǒ yǐjīng bǎo le, shénme dōu chī bu xià le.",
        "meaning": {
          "en": "I'm already full—I can't eat another thing.",
          "fr": "Je n'ai plus faim, je ne peux plus rien avaler.",
          "zh": "我已经饱了，什么都吃不下了。"
        },
        "audioText": "我已经饱了，什么都吃不下了。"
      }
    ]
  },
  "lesson-hsk3-09": {
    "grammarPoints": [
      {
        "title": {
          "en": "Yes-no questions: 合适不合适？",
          "fr": "Les questions affirmatif-négatif : 合适不合适？",
          "zh": "正反疑问句：合适不合适？"
        },
        "structure": "verb/adjective + 不 + verb/adjective？ · 能不能、要不要、合适不合适",
        "explanation": {
          "en": "Another way to ask a yes/no question is to put the positive and negative forms side by side, with no 吗: 这件衬衫合适不合适？",
          "fr": "Une autre façon de poser une question fermée consiste à accoler la forme affirmative et la forme négative, sans 吗 : 这件衬衫合适不合适？",
          "zh": "把肯定和否定形式并列起来也可以提问，句末不用“吗”：这件衬衫合适不合适？"
        },
        "example": {
          "hanzi": "这里能不能用信用卡？",
          "pinyin": "Zhèlǐ néng bu néng yòng xìnyòngkǎ?",
          "translation": {
            "en": "Can I use a credit card here?",
            "fr": "Est-ce qu'on peut payer par carte de crédit ici ?",
            "zh": "这里能不能用信用卡？"
          }
        }
      }
    ],
    "dialogue": [
      {
        "speaker": "安娜",
        "hanzi": "这件衬衫我能试试吗？",
        "pinyin": "Zhè jiàn chènshān wǒ néng shìshi ma?",
        "meaning": {
          "en": "Can I try this shirt on?",
          "fr": "Je peux essayer cette chemise ?",
          "zh": "这件衬衫我能试试吗？"
        },
        "audioText": "这件衬衫我能试试吗？"
      },
      {
        "speaker": "店员",
        "hanzi": "可以。您看看，合适不合适？",
        "pinyin": "Kěyǐ. Nín kànkan, héshì bu héshì?",
        "meaning": {
          "en": "Of course. Take a look—does it fit?",
          "fr": "Bien sûr. Regardez, elle vous va ?",
          "zh": "可以。您看看，合适不合适？"
        },
        "audioText": "可以。您看看，合适不合适？"
      },
      {
        "speaker": "安娜",
        "hanzi": "有点儿大，能不能换一件小的？",
        "pinyin": "Yǒudiǎnr dà, néng bu néng huàn yí jiàn xiǎo de?",
        "meaning": {
          "en": "It's a bit big. Could I swap it for a smaller one?",
          "fr": "Elle est un peu grande. Je peux l'échanger contre une plus petite ?",
          "zh": "有点儿大，能不能换一件小的？"
        },
        "audioText": "有点儿大，能不能换一件小的？"
      },
      {
        "speaker": "店员",
        "hanzi": "没问题。这条裙子也很好看，您要不要试试？",
        "pinyin": "Méi wèntí. Zhè tiáo qúnzi yě hěn hǎokàn, nín yào bu yào shìshi?",
        "meaning": {
          "en": "No problem. This skirt is lovely too—would you like to try it?",
          "fr": "Pas de problème. Cette jupe est jolie aussi, vous voulez l'essayer ?",
          "zh": "没问题。这条裙子也很好看，您要不要试试？"
        },
        "audioText": "没问题。这条裙子也很好看，您要不要试试？"
      },
      {
        "speaker": "安娜",
        "hanzi": "不用了。我选这件衬衫，再买一双鞋。能不能用信用卡？",
        "pinyin": "Búyòng le. Wǒ xuǎn zhè jiàn chènshān, zài mǎi yì shuāng xié. Néng bu néng yòng xìnyòngkǎ?",
        "meaning": {
          "en": "No thanks. I'll take this shirt and a pair of shoes. Can I pay by credit card?",
          "fr": "Non merci. Je prends cette chemise et une paire de chaussures. Je peux payer par carte de crédit ?",
          "zh": "不用了。我选这件衬衫，再买一双鞋。能不能用信用卡？"
        },
        "audioText": "不用了。我选这件衬衫，再买一双鞋。能不能用信用卡？"
      },
      {
        "speaker": "店员",
        "hanzi": "可以，银行卡也可以。",
        "pinyin": "Kěyǐ, yínhángkǎ yě kěyǐ.",
        "meaning": {
          "en": "Yes, and bank cards too.",
          "fr": "Oui, et la carte bancaire aussi.",
          "zh": "可以，银行卡也可以。"
        },
        "audioText": "可以，银行卡也可以。"
      }
    ]
  },
  "lesson-hsk3-10": {
    "grammarPoints": [
      {
        "title": {
          "en": "About to happen: (快)要…了",
          "fr": "Bientôt : (快)要…了",
          "zh": "“（快）要……了”"
        },
        "structure": "(快)要 + verb / adjective + 了",
        "explanation": {
          "en": "(快)要…了 says that something is about to happen: 冬天快要到了 “winter is almost here”.",
          "fr": "(快)要…了 indique qu'une chose va bientôt arriver : 冬天快要到了 « l'hiver arrive bientôt ».",
          "zh": "“（快）要……了”表示事情很快就要发生：冬天快要到了。"
        },
        "example": {
          "hanzi": "要下雨了，带上伞吧。",
          "pinyin": "Yào xià yǔ le, dài shàng sǎn ba.",
          "translation": {
            "en": "It's going to rain—take an umbrella.",
            "fr": "Il va pleuvoir, prends un parapluie.",
            "zh": "要下雨了，带上伞吧。"
          }
        }
      }
    ],
    "dialogue": [
      {
        "speaker": "大卫",
        "hanzi": "这里一年有四个季节吗？",
        "pinyin": "Zhèlǐ yì nián yǒu sì ge jìjié ma?",
        "meaning": {
          "en": "Do you have four seasons here?",
          "fr": "Il y a quatre saisons ici ?",
          "zh": "这里一年有四个季节吗？"
        },
        "audioText": "这里一年有四个季节吗？"
      },
      {
        "speaker": "小明",
        "hanzi": "有。春天花开，夏天很热，秋天最凉快。",
        "pinyin": "Yǒu. Chūntiān huā kāi, xiàtiān hěn rè, qiūtiān zuì liángkuai.",
        "meaning": {
          "en": "Yes. Flowers bloom in spring, summer is hot, and autumn is the coolest.",
          "fr": "Oui. Les fleurs éclosent au printemps, l'été est chaud et l'automne est la saison la plus fraîche.",
          "zh": "有。春天花开，夏天很热，秋天最凉快。"
        },
        "audioText": "有。春天花开，夏天很热，秋天最凉快。"
      },
      {
        "speaker": "大卫",
        "hanzi": "冬天呢？",
        "pinyin": "Dōngtiān ne?",
        "meaning": {
          "en": "And winter?",
          "fr": "Et l'hiver ?",
          "zh": "冬天呢？"
        },
        "audioText": "冬天呢？"
      },
      {
        "speaker": "小明",
        "hanzi": "冬天很冷，经常刮风，河上都是冰。",
        "pinyin": "Dōngtiān hěn lěng, jīngcháng guā fēng, hé shang dōu shì bīng.",
        "meaning": {
          "en": "Winter is cold and often windy, and the river freezes over.",
          "fr": "L'hiver est froid, il y a souvent du vent et la rivière est couverte de glace.",
          "zh": "冬天很冷，经常刮风，河上都是冰。"
        },
        "audioText": "冬天很冷，经常刮风，河上都是冰。"
      },
      {
        "speaker": "大卫",
        "hanzi": "你最喜欢哪个季节？",
        "pinyin": "Nǐ zuì xǐhuan nǎge jìjié?",
        "meaning": {
          "en": "Which season do you like best?",
          "fr": "Quelle saison préfères-tu ?",
          "zh": "你最喜欢哪个季节？"
        },
        "audioText": "你最喜欢哪个季节？"
      },
      {
        "speaker": "小明",
        "hanzi": "秋天。白天有太阳也不热，晚上可以看月亮。你看，天阴了，要下雨了。",
        "pinyin": "Qiūtiān. Báitiān yǒu tàiyáng yě bú rè, wǎnshang kěyǐ kàn yuèliang. Nǐ kàn, tiān yīn le, yào xià yǔ le.",
        "meaning": {
          "en": "Autumn. It's sunny but not hot in the day, and you can see the moon at night. Look, it's clouding over—it's going to rain.",
          "fr": "L'automne. Il y a du soleil sans chaleur la journée, et le soir on peut voir la lune. Regarde, le ciel se couvre, il va pleuvoir.",
          "zh": "秋天。白天有太阳也不热，晚上可以看月亮。你看，天阴了，要下雨了。"
        },
        "audioText": "秋天。白天有太阳也不热，晚上可以看月亮。你看，天阴了，要下雨了。"
      },
      {
        "speaker": "大卫",
        "hanzi": "没关系，我带伞了。",
        "pinyin": "Méi guānxi, wǒ dài sǎn le.",
        "meaning": {
          "en": "No problem, I've brought an umbrella.",
          "fr": "Pas grave, j'ai pris un parapluie.",
          "zh": "没关系，我带伞了。"
        },
        "audioText": "没关系，我带伞了。"
      }
    ]
  },
  "lesson-hsk3-11": {
    "grammarPoints": [
      {
        "title": {
          "en": "Saying what is where: 山上有很多树",
          "fr": "Dire ce qu'il y a quelque part : 山上有很多树",
          "zh": "存在句：山上有很多树"
        },
        "structure": "Place (+ 上/里/边) + 有 + something · Known thing + 在 + place",
        "explanation": {
          "en": "To say what exists somewhere, start with the place and use 有: 河里有鱼 “there are fish in the river”. To say where a known thing is, start with the thing and use 在: 大熊猫在动物园.",
          "fr": "Pour dire ce qui se trouve quelque part, on commence par le lieu et on emploie 有 : 河里有鱼 « il y a des poissons dans la rivière ». Pour situer une chose connue, on commence par elle et on emploie 在 : 大熊猫在动物园.",
          "zh": "说某处存在什么，用“处所+有+事物”：河里有鱼。说已知的事物在哪儿，用“事物+在+处所”：大熊猫在动物园。"
        },
        "example": {
          "hanzi": "公园里有很多花和草。",
          "pinyin": "Gōngyuán li yǒu hěn duō huā hé cǎo.",
          "translation": {
            "en": "There are lots of flowers and grass in the park.",
            "fr": "Il y a beaucoup de fleurs et d'herbe dans le parc.",
            "zh": "公园里有很多花和草。"
          }
        }
      }
    ],
    "dialogue": [
      {
        "speaker": "安娜",
        "hanzi": "周末我们去哪儿玩儿？",
        "pinyin": "Zhōumò wǒmen qù nǎr wánr?",
        "meaning": {
          "en": "Where shall we go this weekend?",
          "fr": "Où va-t-on ce week-end ?",
          "zh": "周末我们去哪儿玩儿？"
        },
        "audioText": "周末我们去哪儿玩儿？"
      },
      {
        "speaker": "小明",
        "hanzi": "去爬山吧！山上有很多树，山下有一条河。",
        "pinyin": "Qù pá shān ba! Shān shang yǒu hěn duō shù, shān xià yǒu yì tiáo hé.",
        "meaning": {
          "en": "Let's go up the mountain! There are lots of trees on it and a river at the bottom.",
          "fr": "Allons en montagne ! Il y a beaucoup d'arbres, et une rivière en bas.",
          "zh": "去爬山吧！山上有很多树，山下有一条河。"
        },
        "audioText": "去爬山吧！山上有很多树，山下有一条河。"
      },
      {
        "speaker": "安娜",
        "hanzi": "我想去动物园看大熊猫。",
        "pinyin": "Wǒ xiǎng qù dòngwùyuán kàn dàxióngmāo.",
        "meaning": {
          "en": "I'd like to go to the zoo to see the giant pandas.",
          "fr": "J'aimerais aller au zoo voir les pandas géants.",
          "zh": "我想去动物园看大熊猫。"
        },
        "audioText": "我想去动物园看大熊猫。"
      },
      {
        "speaker": "小明",
        "hanzi": "动物园在公园旁边，里面还有马、牛和羊。",
        "pinyin": "Dòngwùyuán zài gōngyuán pángbiān, lǐmiàn hái yǒu mǎ, niú hé yáng.",
        "meaning": {
          "en": "The zoo is next to the park; there are horses, cows and sheep there too.",
          "fr": "Le zoo est à côté du parc ; il y a aussi des chevaux, des vaches et des moutons.",
          "zh": "动物园在公园旁边，里面还有马、牛和羊。"
        },
        "audioText": "动物园在公园旁边，里面还有马、牛和羊。"
      },
      {
        "speaker": "安娜",
        "hanzi": "太好了！我小时候养过一只羊。",
        "pinyin": "Tài hǎo le! Wǒ xiǎoshíhou yǎngguo yì zhī yáng.",
        "meaning": {
          "en": "Great! I kept a sheep when I was little.",
          "fr": "Génial ! J'ai élevé un mouton quand j'étais petite.",
          "zh": "太好了！我小时候养过一只羊。"
        },
        "audioText": "太好了！我小时候养过一只羊。"
      },
      {
        "speaker": "小明",
        "hanzi": "真的？那我们上午去动物园，下午去花园，坐在草地上休息。",
        "pinyin": "Zhēn de? Nà wǒmen shàngwǔ qù dòngwùyuán, xiàwǔ qù huāyuán, zuò zài cǎodì shang xiūxi.",
        "meaning": {
          "en": "Really? Then the zoo in the morning, and in the afternoon the garden, where we can rest on the grass.",
          "fr": "C'est vrai ? Alors le zoo le matin, et l'après-midi le jardin, où on se reposera sur la pelouse.",
          "zh": "真的？那我们上午去动物园，下午去花园，坐在草地上休息。"
        },
        "audioText": "真的？那我们上午去动物园，下午去花园，坐在草地上休息。"
      }
    ]
  },
  "lesson-hsk3-12": {
    "grammarPoints": [
      {
        "title": {
          "en": "Points of the compass",
          "fr": "Les points cardinaux",
          "zh": "方位词：东边、北方"
        },
        "structure": "东/南/西/北 + 边/方 · east or west first: 东北、西南",
        "explanation": {
          "en": "Directions combine with 边 (side) or 方 (region): 东边 “the east side”, 北方 “the north”. In compound directions, east or west comes first: 东北 “north-east”, 西南 “south-west”.",
          "fr": "Les directions se combinent avec 边 (côté) ou 方 (région) : 东边 « le côté est », 北方 « le nord ». Dans les directions composées, l'est ou l'ouest vient en premier : 东北 « nord-est », 西南 « sud-ouest ».",
          "zh": "方位词可以加“边”或“方”：东边、北方。组合方向时“东、西”在前：东北、西南。"
        },
        "example": {
          "hanzi": "学校在公园的东边。",
          "pinyin": "Xuéxiào zài gōngyuán de dōngbian.",
          "translation": {
            "en": "The school is east of the park.",
            "fr": "L'école est à l'est du parc.",
            "zh": "学校在公园的东边。"
          }
        }
      }
    ],
    "dialogue": [
      {
        "speaker": "大卫",
        "hanzi": "你是哪里人？北方人还是南方人？",
        "pinyin": "Nǐ shì nǎlǐ rén? Běifāng rén háishi nánfāng rén?",
        "meaning": {
          "en": "Where are you from—the north or the south?",
          "fr": "D'où viens-tu ? Du nord ou du sud ?",
          "zh": "你是哪里人？北方人还是南方人？"
        },
        "audioText": "你是哪里人？北方人还是南方人？"
      },
      {
        "speaker": "小明",
        "hanzi": "我是东北人，现在在外地工作。",
        "pinyin": "Wǒ shì dōngběi rén, xiànzài zài wàidì gōngzuò.",
        "meaning": {
          "en": "I'm from the north-east; now I work in another region.",
          "fr": "Je viens du nord-est, maintenant je travaille dans une autre région.",
          "zh": "我是东北人，现在在外地工作。"
        },
        "audioText": "我是东北人，现在在外地工作。"
      },
      {
        "speaker": "大卫",
        "hanzi": "你看地图，我们现在在哪儿？",
        "pinyin": "Nǐ kàn dìtú, wǒmen xiànzài zài nǎr?",
        "meaning": {
          "en": "Look at the map—where are we now?",
          "fr": "Regarde la carte, où sommes-nous ?",
          "zh": "你看地图，我们现在在哪儿？"
        },
        "audioText": "你看地图，我们现在在哪儿？"
      },
      {
        "speaker": "小明",
        "hanzi": "我们在城市的中间。银行在西边，火车站在南边。",
        "pinyin": "Wǒmen zài chéngshì de zhōngjiān. Yínháng zài xībian, huǒchē zhàn zài nánbian.",
        "meaning": {
          "en": "We're in the middle of the city. The bank is to the west and the station to the south.",
          "fr": "Nous sommes au centre-ville. La banque est à l'ouest et la gare au sud.",
          "zh": "我们在城市的中间。银行在西边，火车站在南边。"
        },
        "audioText": "我们在城市的中间。银行在西边，火车站在南边。"
      },
      {
        "speaker": "大卫",
        "hanzi": "附近有饭馆吗？我不知道方向。",
        "pinyin": "Fùjìn yǒu fànguǎn ma? Wǒ bù zhīdào fāngxiàng.",
        "meaning": {
          "en": "Are there any restaurants nearby? I've lost my bearings.",
          "fr": "Il y a des restaurants près d'ici ? Je ne sais pas m'orienter.",
          "zh": "附近有饭馆吗？我不知道方向。"
        },
        "audioText": "附近有饭馆吗？我不知道方向。"
      },
      {
        "speaker": "小明",
        "hanzi": "就在你面前！往东走五分钟就到了。",
        "pinyin": "Jiù zài nǐ miànqián! Wǎng dōng zǒu wǔ fēnzhōng jiù dào le.",
        "meaning": {
          "en": "Right in front of you! Walk east for five minutes and you're there.",
          "fr": "Juste devant toi ! Marche cinq minutes vers l'est et tu y es.",
          "zh": "就在你面前！往东走五分钟就到了。"
        },
        "audioText": "就在你面前！往东走五分钟就到了。"
      }
    ]
  },
  "lesson-hsk3-13": {
    "grammarPoints": [
      {
        "title": {
          "en": "Heading somewhere: 向 / 往",
          "fr": "Se diriger : 向 / 往",
          "zh": "介词“向/往”+方向"
        },
        "structure": "向/往 + direction + verb: 往前走、向左边看",
        "explanation": {
          "en": "向 and 往 introduce the direction of a movement and come before the verb: 往前走 “go straight on”, 向左边看 “look to the left”.",
          "fr": "向 et 往 introduisent la direction d'un mouvement et se placent avant le verbe : 往前走 « allez tout droit », 向左边看 « regardez à gauche ».",
          "zh": "“向、往”引出动作的方向，放在动词前：往前走、向左边看。"
        },
        "example": {
          "hanzi": "过了红绿灯往右走。",
          "pinyin": "Guò le hóng-lǜdēng wǎng yòu zǒu.",
          "translation": {
            "en": "Go right after the traffic lights.",
            "fr": "Après le feu, allez à droite.",
            "zh": "过了红绿灯往右走。"
          }
        }
      }
    ],
    "dialogue": [
      {
        "speaker": "安娜",
        "hanzi": "我们的高铁几点出发？",
        "pinyin": "Wǒmen de gāotiě jǐ diǎn chūfā?",
        "meaning": {
          "en": "What time does our high-speed train leave?",
          "fr": "À quelle heure part notre train à grande vitesse ?",
          "zh": "我们的高铁几点出发？"
        },
        "audioText": "我们的高铁几点出发？"
      },
      {
        "speaker": "大卫",
        "hanzi": "十点半，九点开始检票。",
        "pinyin": "Shí diǎn bàn, jiǔ diǎn kāishǐ jiǎnpiào.",
        "meaning": {
          "en": "Half past ten; boarding opens at nine.",
          "fr": "À dix heures et demie, le contrôle des billets commence à neuf heures.",
          "zh": "十点半，九点开始检票。"
        },
        "audioText": "十点半，九点开始检票。"
      },
      {
        "speaker": "安娜",
        "hanzi": "我们骑自行车去还是坐汽车去？",
        "pinyin": "Wǒmen qí zìxíngchē qù háishi zuò qìchē qù?",
        "meaning": {
          "en": "Shall we cycle or go by car?",
          "fr": "On y va à vélo ou en voiture ?",
          "zh": "我们骑自行车去还是坐汽车去？"
        },
        "audioText": "我们骑自行车去还是坐汽车去？"
      },
      {
        "speaker": "大卫",
        "hanzi": "带着箱子，骑车不方便。叫一辆出租车吧。",
        "pinyin": "Dàizhe xiāngzi, qí chē bù fāngbiàn. Jiào yí liàng chūzūchē ba.",
        "meaning": {
          "en": "With suitcases, cycling isn't practical. Let's get a taxi.",
          "fr": "Avec les valises, le vélo n'est pas pratique. Prenons un taxi.",
          "zh": "带着箱子，骑车不方便。叫一辆出租车吧。"
        },
        "audioText": "带着箱子，骑车不方便。叫一辆出租车吧。"
      },
      {
        "speaker": "司机",
        "hanzi": "你们去火车站吗？前面路口车很多，我们往左走，经过那条街。",
        "pinyin": "Nǐmen qù huǒchē zhàn ma? Qiánmiàn lùkǒu chē hěn duō, wǒmen wǎng zuǒ zǒu, jīngguò nà tiáo jiē.",
        "meaning": {
          "en": "Going to the station? There's a lot of traffic at the junction ahead, so we'll turn left and go along that street.",
          "fr": "Vous allez à la gare ? Il y a beaucoup de voitures au carrefour devant, on va prendre à gauche par cette rue.",
          "zh": "你们去火车站吗？前面路口车很多，我们往左走，经过那条街。"
        },
        "audioText": "你们去火车站吗？前面路口车很多，我们往左走，经过那条街。"
      },
      {
        "speaker": "安娜",
        "hanzi": "好的。我朋友的飞机晚点了，下午我还要去接她。",
        "pinyin": "Hǎo de. Wǒ péngyou de fēijī wǎndiǎn le, xiàwǔ wǒ hái yào qù jiē tā.",
        "meaning": {
          "en": "OK. My friend's plane is delayed; I've still got to pick her up this afternoon.",
          "fr": "D'accord. L'avion de mon amie a du retard ; je dois encore aller la chercher cet après-midi.",
          "zh": "好的。我朋友的飞机晚点了，下午我还要去接她。"
        },
        "audioText": "好的。我朋友的飞机晚点了，下午我还要去接她。"
      }
    ]
  },
  "lesson-hsk3-14": {
    "grammarPoints": [
      {
        "title": {
          "en": "Not yet: 还没…呢",
          "fr": "Pas encore : 还没…呢",
          "zh": "“还没……呢”"
        },
        "structure": "还没(有) + verb (+ 呢)",
        "explanation": {
          "en": "还没…呢 says that something hasn't happened yet but is expected to: 作业还没写完呢. There is no 了 in this negative.",
          "fr": "还没…呢 indique qu'une chose n'est pas encore arrivée mais qu'elle est attendue : 作业还没写完呢. Pas de 了 dans cette négation.",
          "zh": "“还没……呢”表示事情到现在还没发生或完成：作业还没写完呢。这种否定句中不用“了”。"
        },
        "example": {
          "hanzi": "我还没复习呢。",
          "pinyin": "Wǒ hái méi fùxí ne.",
          "translation": {
            "en": "I haven't revised yet.",
            "fr": "Je n'ai pas encore révisé.",
            "zh": "我还没复习呢。"
          }
        }
      }
    ],
    "dialogue": [
      {
        "speaker": "妈妈",
        "hanzi": "放学了，作业写完了吗？",
        "pinyin": "Fàngxué le, zuòyè xiě wán le ma?",
        "meaning": {
          "en": "School's out—have you finished your homework?",
          "fr": "Les cours sont finis, tu as fini tes devoirs ?",
          "zh": "放学了，作业写完了吗？"
        },
        "audioText": "放学了，作业写完了吗？"
      },
      {
        "speaker": "小明",
        "hanzi": "还没写完呢。数学作业有五页。",
        "pinyin": "Hái méi xiě wán ne. Shùxué zuòyè yǒu wǔ yè.",
        "meaning": {
          "en": "Not yet. The maths homework is five pages long.",
          "fr": "Pas encore. Les devoirs de maths font cinq pages.",
          "zh": "还没写完呢。数学作业有五页。"
        },
        "audioText": "还没写完呢。数学作业有五页。"
      },
      {
        "speaker": "妈妈",
        "hanzi": "课文复习了吗？",
        "pinyin": "Kèwén fùxí le ma?",
        "meaning": {
          "en": "Have you revised the text?",
          "fr": "Tu as révisé le texte ?",
          "zh": "课文复习了吗？"
        },
        "audioText": "课文复习了吗？"
      },
      {
        "speaker": "小明",
        "hanzi": "复习了，我在笔记本上写了很多笔记。",
        "pinyin": "Fùxí le, wǒ zài bǐjìběn shang xiě le hěn duō bǐjì.",
        "meaning": {
          "en": "Yes, I wrote lots of notes in my notebook.",
          "fr": "Oui, j'ai pris beaucoup de notes dans mon cahier.",
          "zh": "复习了，我在笔记本上写了很多笔记。"
        },
        "audioText": "复习了，我在笔记本上写了很多笔记。"
      },
      {
        "speaker": "妈妈",
        "hanzi": "这个学期你是初中二年级了，要多练习。",
        "pinyin": "Zhège xuéqī nǐ shì chūzhōng èr niánjí le, yào duō liànxí.",
        "meaning": {
          "en": "This term you're in year two of junior high; you need to practise more.",
          "fr": "Ce semestre, tu es en deuxième année de collège, il faut t'entraîner davantage.",
          "zh": "这个学期你是初中二年级了，要多练习。"
        },
        "audioText": "这个学期你是初中二年级了，要多练习。"
      },
      {
        "speaker": "小明",
        "hanzi": "知道了。我的铅笔和纸用完了，明天能买一本字典吗？",
        "pinyin": "Zhīdào le. Wǒ de qiānbǐ hé zhǐ yòng wán le, míngtiān néng mǎi yì běn zìdiǎn ma?",
        "meaning": {
          "en": "I know. I've run out of pencils and paper—can we buy a dictionary tomorrow?",
          "fr": "Je sais. Je n'ai plus de crayons ni de papier, on peut acheter un dictionnaire demain ?",
          "zh": "知道了。我的铅笔和纸用完了，明天能买一本字典吗？"
        },
        "audioText": "知道了。我的铅笔和纸用完了，明天能买一本字典吗？"
      },
      {
        "speaker": "妈妈",
        "hanzi": "可以，我们去书店买一本词典。",
        "pinyin": "Kěyǐ, wǒmen qù shūdiàn mǎi yì běn cídiǎn.",
        "meaning": {
          "en": "Sure, let's buy one at the bookshop.",
          "fr": "Oui, allons en acheter un à la librairie.",
          "zh": "可以，我们去书店买一本词典。"
        },
        "audioText": "可以，我们去书店买一本词典。"
      }
    ]
  },
  "lesson-hsk3-15": {
    "grammarPoints": [
      {
        "title": {
          "en": "Can or can't: 听得懂 / 听不懂",
          "fr": "Pouvoir ou non : 听得懂 / 听不懂",
          "zh": "可能补语：听得懂 / 听不懂"
        },
        "structure": "verb + 得 + result (can) · verb + 不 + result (can't)",
        "explanation": {
          "en": "Put 得 or 不 between a verb and its result to say whether the result can be reached: 听得懂 “can understand (what you hear)”, 看不清楚 “can't see clearly”.",
          "fr": "On insère 得 ou 不 entre le verbe et son résultat pour dire si ce résultat est possible : 听得懂 « arriver à comprendre ce qu'on entend », 看不清楚 « ne pas arriver à voir clairement ».",
          "zh": "在动词和结果补语之间加“得”或“不”，表示能不能实现：听得懂、看不清楚。"
        },
        "example": {
          "hanzi": "老师讲的句子我都听得懂。",
          "pinyin": "Lǎoshī jiǎng de jùzi wǒ dōu tīng de dǒng.",
          "translation": {
            "en": "I can understand all the sentences the teacher says.",
            "fr": "Je comprends toutes les phrases du professeur.",
            "zh": "老师讲的句子我都听得懂。"
          }
        }
      }
    ],
    "dialogue": [
      {
        "speaker": "王老师",
        "hanzi": "安娜，最近你的汉语水平提高得很快。",
        "pinyin": "Ānnà, zuìjìn nǐ de Hànyǔ shuǐpíng tígāo de hěn kuài.",
        "meaning": {
          "en": "Anna, your Chinese has been improving fast lately.",
          "fr": "Anna, ton niveau de chinois progresse vite ces derniers temps.",
          "zh": "安娜，最近你的汉语水平提高得很快。"
        },
        "audioText": "安娜，最近你的汉语水平提高得很快。"
      },
      {
        "speaker": "安娜",
        "hanzi": "谢谢老师！我每天都坚持练习对话。",
        "pinyin": "Xièxie lǎoshī! Wǒ měi tiān dōu jiānchí liànxí duìhuà.",
        "meaning": {
          "en": "Thank you! I keep practising dialogues every day.",
          "fr": "Merci ! Je m'entraîne aux dialogues tous les jours, sans relâche.",
          "zh": "谢谢老师！我每天都坚持练习对话。"
        },
        "audioText": "谢谢老师！我每天都坚持练习对话。"
      },
      {
        "speaker": "王老师",
        "hanzi": "我讲的课文你都听得懂吗？",
        "pinyin": "Wǒ jiǎng de kèwén nǐ dōu tīng de dǒng ma?",
        "meaning": {
          "en": "Can you understand all the texts I explain?",
          "fr": "Tu comprends tous les textes que j'explique ?",
          "zh": "我讲的课文你都听得懂吗？"
        },
        "audioText": "我讲的课文你都听得懂吗？"
      },
      {
        "speaker": "安娜",
        "hanzi": "简单的句子听得懂，难的还听不懂。",
        "pinyin": "Jiǎndān de jùzi tīng de dǒng, nán de hái tīng bu dǒng.",
        "meaning": {
          "en": "I can understand the simple sentences, but not the hard ones yet.",
          "fr": "Je comprends les phrases simples, mais pas encore les difficiles.",
          "zh": "简单的句子听得懂，难的还听不懂。"
        },
        "audioText": "简单的句子听得懂，难的还听不懂。"
      },
      {
        "speaker": "王老师",
        "hanzi": "没关系，学语言不容易。有难题可以问我。",
        "pinyin": "Méi guānxi, xué yǔyán bù róngyì. Yǒu nántí kěyǐ wèn wǒ.",
        "meaning": {
          "en": "That's fine—learning a language isn't easy. Ask me if you get stuck.",
          "fr": "Ce n'est pas grave, apprendre une langue n'est pas facile. Si tu bloques, demande-moi.",
          "zh": "没关系，学语言不容易。有难题可以问我。"
        },
        "audioText": "没关系，学语言不容易。有难题可以问我。"
      },
      {
        "speaker": "安娜",
        "hanzi": "好的！我会努力，下次考试成绩一定更好。",
        "pinyin": "Hǎo de! Wǒ huì nǔlì, xià cì kǎoshì chéngjì yídìng gèng hǎo.",
        "meaning": {
          "en": "OK! I'll work hard, and my next exam results will definitely be better.",
          "fr": "D'accord ! Je vais travailler dur, mes prochains résultats seront sûrement meilleurs.",
          "zh": "好的！我会努力，下次考试成绩一定更好。"
        },
        "audioText": "好的！我会努力，下次考试成绩一定更好。"
      }
    ]
  },
  "lesson-hsk3-16": {
    "grammarPoints": [
      {
        "title": {
          "en": "Being interested in: 对……感兴趣",
          "fr": "S'intéresser à : 对……感兴趣",
          "zh": "“对……感兴趣”"
        },
        "structure": "A 对 B (很/不) 感兴趣",
        "explanation": {
          "en": "To say what interests you, use 对 + topic + 感兴趣: 我对音乐很感兴趣. Don't say 我感兴趣音乐.",
          "fr": "Pour dire ce qui vous intéresse : 对 + sujet + 感兴趣 : 我对音乐很感兴趣. On ne dit pas « 我感兴趣音乐 ».",
          "zh": "表示对某事有兴趣用“对……感兴趣”：我对音乐很感兴趣。不能说“我感兴趣音乐”。"
        },
        "example": {
          "hanzi": "他对体育很感兴趣。",
          "pinyin": "Tā duì tǐyù hěn gǎn xìngqù.",
          "translation": {
            "en": "He's very interested in sport.",
            "fr": "Il s'intéresse beaucoup au sport.",
            "zh": "他对体育很感兴趣。"
          }
        }
      }
    ],
    "dialogue": [
      {
        "speaker": "小明",
        "hanzi": "下午学校开运动会，你参加什么比赛？",
        "pinyin": "Xiàwǔ xuéxiào kāi yùndònghuì, nǐ cānjiā shénme bǐsài?",
        "meaning": {
          "en": "It's the school sports day this afternoon—which events are you in?",
          "fr": "Cet après-midi, c'est la journée sportive de l'école, à quelles épreuves participes-tu ?",
          "zh": "下午学校开运动会，你参加什么比赛？"
        },
        "audioText": "下午学校开运动会，你参加什么比赛？"
      },
      {
        "speaker": "大卫",
        "hanzi": "我参加网球比赛。你呢？",
        "pinyin": "Wǒ cānjiā wǎngqiú bǐsài. Nǐ ne?",
        "meaning": {
          "en": "Tennis. And you?",
          "fr": "Le tennis. Et toi ?",
          "zh": "我参加网球比赛。你呢？"
        },
        "audioText": "我参加网球比赛。你呢？"
      },
      {
        "speaker": "小明",
        "hanzi": "我对体育不太感兴趣，我去体育馆拍照。",
        "pinyin": "Wǒ duì tǐyù bú tài gǎn xìngqù, wǒ qù tǐyùguǎn pāizhào.",
        "meaning": {
          "en": "I'm not very interested in sport—I'm going to the sports hall to take photos.",
          "fr": "Le sport ne m'intéresse pas trop, je vais au gymnase prendre des photos.",
          "zh": "我对体育不太感兴趣，我去体育馆拍照。"
        },
        "audioText": "我对体育不太感兴趣，我去体育馆拍照。"
      },
      {
        "speaker": "大卫",
        "hanzi": "你的相机真好！帮我照几张相吧。",
        "pinyin": "Nǐ de xiàngjī zhēn hǎo! Bāng wǒ zhào jǐ zhāng xiàng ba.",
        "meaning": {
          "en": "Your camera is great! Take a few pictures of me.",
          "fr": "Ton appareil photo est super ! Prends-moi quelques photos.",
          "zh": "你的相机真好！帮我照几张相吧。"
        },
        "audioText": "你的相机真好！帮我照几张相吧。"
      },
      {
        "speaker": "小明",
        "hanzi": "没问题。晚上还有音乐表演和游戏。",
        "pinyin": "Méi wèntí. Wǎnshang hái yǒu yīnyuè biǎoyǎn hé yóuxì.",
        "meaning": {
          "en": "No problem. In the evening there's a music show and games too.",
          "fr": "Pas de problème. Le soir, il y a aussi un spectacle musical et des jeux.",
          "zh": "没问题。晚上还有音乐表演和游戏。"
        },
        "audioText": "没问题。晚上还有音乐表演和游戏。"
      },
      {
        "speaker": "大卫",
        "hanzi": "太好了！如果我得分了，你一定要拍下来。",
        "pinyin": "Tài hǎo le! Rúguǒ wǒ défēn le, nǐ yídìng yào pāi xialai.",
        "meaning": {
          "en": "Great! If I score a point, you must get it on camera.",
          "fr": "Super ! Si je marque un point, tu dois absolument le prendre en photo.",
          "zh": "太好了！如果我得分了，你一定要拍下来。"
        },
        "audioText": "太好了！如果我得分了，你一定要拍下来。"
      }
    ]
  },
  "lesson-hsk3-17": {
    "grammarPoints": [
      {
        "title": {
          "en": "Stressing when, where or how: 是……的",
          "fr": "Insister sur quand, où ou comment : 是……的",
          "zh": "“是……的”强调"
        },
        "structure": "Subject + 是 + time / place / manner + verb + 的",
        "explanation": {
          "en": "For something that has already happened, 是…的 highlights the detail you want to talk about: when, where, how or with whom: 我是2000年出生的.",
          "fr": "Pour un fait passé, 是…的 met en relief le détail dont on parle : quand, où, comment ou avec qui : 我是2000年出生的.",
          "zh": "对已经发生的事，用“是……的”强调时间、地点、方式等：我是2000年出生的。"
        },
        "example": {
          "hanzi": "你是什么时候结婚的？",
          "pinyin": "Nǐ shì shénme shíhou jiéhūn de?",
          "translation": {
            "en": "When did you get married?",
            "fr": "Quand t'es-tu marié ?",
            "zh": "你是什么时候结婚的？"
          }
        }
      }
    ],
    "dialogue": [
      {
        "speaker": "安娜",
        "hanzi": "快过节了，你们什么时候放假？",
        "pinyin": "Kuài guòjié le, nǐmen shénme shíhou fàngjià?",
        "meaning": {
          "en": "The holidays are coming—when do you get time off?",
          "fr": "Les fêtes approchent, quand êtes-vous en congé ?",
          "zh": "快过节了，你们什么时候放假？"
        },
        "audioText": "快过节了，你们什么时候放假？"
      },
      {
        "speaker": "小明",
        "hanzi": "新年放三天假。你呢？",
        "pinyin": "Xīnnián fàng sān tiān jiǎ. Nǐ ne?",
        "meaning": {
          "en": "Three days off for New Year. And you?",
          "fr": "Trois jours de congé pour le Nouvel An. Et toi ?",
          "zh": "新年放三天假。你呢？"
        },
        "audioText": "新年放三天假。你呢？"
      },
      {
        "speaker": "安娜",
        "hanzi": "我请了两天假，假期一共五天。",
        "pinyin": "Wǒ qǐng le liǎng tiān jiǎ, jiàqī yígòng wǔ tiān.",
        "meaning": {
          "en": "I've asked for two extra days off, so five days in all.",
          "fr": "J'ai demandé deux jours de congé en plus, donc cinq jours en tout.",
          "zh": "我请了两天假，假期一共五天。"
        },
        "audioText": "我请了两天假，假期一共五天。"
      },
      {
        "speaker": "小明",
        "hanzi": "我们公司晚上有新年晚会，欢迎你来做客！",
        "pinyin": "Wǒmen gōngsī wǎnshang yǒu xīnnián wǎnhuì, huānyíng nǐ lái zuòkè!",
        "meaning": {
          "en": "My company has a New Year party this evening—you're welcome to come!",
          "fr": "Mon entreprise organise une soirée du Nouvel An ce soir, tu es la bienvenue !",
          "zh": "我们公司晚上有新年晚会，欢迎你来做客！"
        },
        "audioText": "我们公司晚上有新年晚会，欢迎你来做客！"
      },
      {
        "speaker": "安娜",
        "hanzi": "谢谢！我要带什么礼物吗？",
        "pinyin": "Xièxie! Wǒ yào dài shénme lǐwù ma?",
        "meaning": {
          "en": "Thanks! Should I bring a present?",
          "fr": "Merci ! Je dois apporter un cadeau ?",
          "zh": "谢谢！我要带什么礼物吗？"
        },
        "audioText": "谢谢！我要带什么礼物吗？"
      },
      {
        "speaker": "小明",
        "hanzi": "不用。对了，你姐姐是什么时候结婚的？",
        "pinyin": "Búyòng. Duì le, nǐ jiějie shì shénme shíhou jiéhūn de?",
        "meaning": {
          "en": "No need. By the way, when did your sister get married?",
          "fr": "Pas besoin. Au fait, quand ta sœur s'est-elle mariée ?",
          "zh": "不用。对了，你姐姐是什么时候结婚的？"
        },
        "audioText": "不用。对了，你姐姐是什么时候结婚的？"
      },
      {
        "speaker": "安娜",
        "hanzi": "她是去年结婚的，今年她的孩子出生了。",
        "pinyin": "Tā shì qùnián jiéhūn de, jīnnián tā de háizi chūshēng le.",
        "meaning": {
          "en": "She got married last year, and her baby was born this year.",
          "fr": "Elle s'est mariée l'année dernière, et son bébé est né cette année.",
          "zh": "她是去年结婚的，今年她的孩子出生了。"
        },
        "audioText": "她是去年结婚的，今年她的孩子出生了。"
      }
    ]
  },
  "lesson-hsk3-18": {
    "grammarPoints": [
      {
        "title": {
          "en": "As soon as: 一……就……",
          "fr": "Dès que : 一……就……",
          "zh": "“一……就……”"
        },
        "structure": "Subject + 一 + action 1，(subject +) 就 + action 2",
        "explanation": {
          "en": "一…就… shows that the second action follows immediately after the first, or always follows it: 我一回家就洗澡 “I shower as soon as I get home”.",
          "fr": "一…就… indique que la seconde action suit immédiatement la première, ou la suit toujours : 我一回家就洗澡 « je me douche dès que je rentre ».",
          "zh": "“一……就……”表示两个动作紧接着发生，或者前一个情况出现，后一个情况总会出现：我一回家就洗澡。"
        },
        "example": {
          "hanzi": "他一感冒就发烧。",
          "pinyin": "Tā yì gǎnmào jiù fāshāo.",
          "translation": {
            "en": "Whenever he catches a cold, he gets a fever.",
            "fr": "Dès qu'il s'enrhume, il a de la fièvre.",
            "zh": "他一感冒就发烧。"
          }
        }
      }
    ],
    "dialogue": [
      {
        "speaker": "医生",
        "hanzi": "你哪儿不舒服？",
        "pinyin": "Nǐ nǎr bù shūfu?",
        "meaning": {
          "en": "What's the matter?",
          "fr": "Qu'est-ce qui ne va pas ?",
          "zh": "你哪儿不舒服？"
        },
        "audioText": "你哪儿不舒服？"
      },
      {
        "speaker": "大卫",
        "hanzi": "我感冒了，晚上一睡觉就发烧。",
        "pinyin": "Wǒ gǎnmào le, wǎnshang yí shuìjiào jiù fāshāo.",
        "meaning": {
          "en": "I've got a cold, and I get a fever as soon as I go to bed at night.",
          "fr": "J'ai un rhume, et dès que je me couche le soir, j'ai de la fièvre.",
          "zh": "我感冒了，晚上一睡觉就发烧。"
        },
        "audioText": "我感冒了，晚上一睡觉就发烧。"
      },
      {
        "speaker": "医生",
        "hanzi": "我给你检查一下。不需要住院，回家多喝水。",
        "pinyin": "Wǒ gěi nǐ jiǎnchá yíxià. Bù xūyào zhùyuàn, huí jiā duō hē shuǐ.",
        "meaning": {
          "en": "Let me examine you. You don't need to be admitted—go home and drink plenty of water.",
          "fr": "Je vais vous examiner. Pas besoin d'hospitalisation, rentrez chez vous et buvez beaucoup d'eau.",
          "zh": "我给你检查一下。不需要住院，回家多喝水。"
        },
        "audioText": "我给你检查一下。不需要住院，回家多喝水。"
      },
      {
        "speaker": "大卫",
        "hanzi": "我能洗澡吗？",
        "pinyin": "Wǒ néng xǐzǎo ma?",
        "meaning": {
          "en": "Can I take a shower?",
          "fr": "Je peux me doucher ?",
          "zh": "我能洗澡吗？"
        },
        "audioText": "我能洗澡吗？"
      },
      {
        "speaker": "医生",
        "hanzi": "可以，但是要注意，洗完马上穿衣服。",
        "pinyin": "Kěyǐ, dànshì yào zhùyì, xǐ wán mǎshàng chuān yīfu.",
        "meaning": {
          "en": "Yes, but be careful—get dressed straight afterwards.",
          "fr": "Oui, mais faites attention, habillez-vous tout de suite après.",
          "zh": "可以，但是要注意，洗完马上穿衣服。"
        },
        "audioText": "可以，但是要注意，洗完马上穿衣服。"
      },
      {
        "speaker": "大卫",
        "hanzi": "好的。我朋友上星期住院了，他什么时候能出院？",
        "pinyin": "Hǎo de. Wǒ péngyou shàng xīngqī zhùyuàn le, tā shénme shíhou néng chūyuàn?",
        "meaning": {
          "en": "OK. My friend was admitted last week—when can he go home?",
          "fr": "D'accord. Mon ami a été hospitalisé la semaine dernière, quand pourra-t-il sortir ?",
          "zh": "好的。我朋友上星期住院了，他什么时候能出院？"
        },
        "audioText": "好的。我朋友上星期住院了，他什么时候能出院？"
      },
      {
        "speaker": "医生",
        "hanzi": "他明天就可以出院了。",
        "pinyin": "Tā míngtiān jiù kěyǐ chūyuàn le.",
        "meaning": {
          "en": "He can go home tomorrow.",
          "fr": "Il pourra sortir demain.",
          "zh": "他明天就可以出院了。"
        },
        "audioText": "他明天就可以出院了。"
      }
    ]
  },
  "lesson-hsk3-19": {
    "grammarPoints": [
      {
        "title": {
          "en": "Reaching a result: 收到, 找到",
          "fr": "Atteindre un résultat : 收到, 找到",
          "zh": "结果补语“到”：收到、找到"
        },
        "structure": "verb + 到 (+ object) · 没 + verb + 到",
        "explanation": {
          "en": "到 after a verb shows the action reached its goal: 收到 “receive”, 找到 “find”, 买到 “manage to buy”.",
          "fr": "到 après un verbe indique que l'action a atteint son but : 收到 « recevoir », 找到 « trouver », 买到 « réussir à acheter ».",
          "zh": "动词后加“到”表示动作达到了目的：收到、找到、买到。"
        },
        "example": {
          "hanzi": "你收到我的邮件了吗？",
          "pinyin": "Nǐ shōudào wǒ de yóujiàn le ma?",
          "translation": {
            "en": "Did you get my email?",
            "fr": "As-tu reçu mon e-mail ?",
            "zh": "你收到我的邮件了吗？"
          }
        }
      }
    ],
    "dialogue": [
      {
        "speaker": "经理",
        "hanzi": "小王，你收到我发的邮件了吗？",
        "pinyin": "Xiǎo Wáng, nǐ shōudào wǒ fā de yóujiàn le ma?",
        "meaning": {
          "en": "Xiao Wang, did you get the email I sent?",
          "fr": "Xiao Wang, tu as reçu l'e-mail que j'ai envoyé ?",
          "zh": "小王，你收到我发的邮件了吗？"
        },
        "audioText": "小王，你收到我发的邮件了吗？"
      },
      {
        "speaker": "小王",
        "hanzi": "还没收到。您发到哪个邮箱了？",
        "pinyin": "Hái méi shōudào. Nín fā dào nǎge yóuxiāng le?",
        "meaning": {
          "en": "Not yet. Which address did you send it to?",
          "fr": "Pas encore. Vous l'avez envoyé à quelle adresse ?",
          "zh": "还没收到。您发到哪个邮箱了？"
        },
        "audioText": "还没收到。您发到哪个邮箱了？"
      },
      {
        "speaker": "经理",
        "hanzi": "公司网站上的那个。你的手机号码是多少？我给你打电话也没人接。",
        "pinyin": "Gōngsī wǎngzhàn shang de nàge. Nǐ de shǒujī hàomǎ shì duōshao? Wǒ gěi nǐ dǎ diànhuà yě méi rén jiē.",
        "meaning": {
          "en": "The one on the company website. What's your mobile number? When I called, nobody answered.",
          "fr": "Celle du site de l'entreprise. Quel est ton numéro de portable ? Quand j'ai appelé, personne n'a répondu.",
          "zh": "公司网站上的那个。你的手机号码是多少？我给你打电话也没人接。"
        },
        "audioText": "公司网站上的那个。你的手机号码是多少？我给你打电话也没人接。"
      },
      {
        "speaker": "小王",
        "hanzi": "不好意思，手机没电，关机了。",
        "pinyin": "Bù hǎoyìsi, shǒujī méi diàn, guānjī le.",
        "meaning": {
          "en": "Sorry, my phone ran out of battery and switched off.",
          "fr": "Désolé, mon téléphone n'avait plus de batterie, il s'est éteint.",
          "zh": "不好意思，手机没电，关机了。"
        },
        "audioText": "不好意思，手机没电，关机了。"
      },
      {
        "speaker": "经理",
        "hanzi": "开机以后看一下，我也给你写了一封信。",
        "pinyin": "Kāijī yǐhòu kàn yíxià, wǒ yě gěi nǐ xiě le yì fēng xìn.",
        "meaning": {
          "en": "Have a look when you switch it back on; I've written you a letter too.",
          "fr": "Regarde quand tu le rallumes ; je t'ai aussi écrit une lettre.",
          "zh": "开机以后看一下，我也给你写了一封信。"
        },
        "audioText": "开机以后看一下，我也给你写了一封信。"
      },
      {
        "speaker": "小王",
        "hanzi": "好的，我现在就去看。",
        "pinyin": "Hǎo de, wǒ xiànzài jiù qù kàn.",
        "meaning": {
          "en": "OK, I'll go and look right now.",
          "fr": "D'accord, je vais regarder tout de suite.",
          "zh": "好的，我现在就去看。"
        },
        "audioText": "好的，我现在就去看。"
      }
    ]
  },
  "lesson-hsk3-20": {
    "grammarPoints": [
      {
        "title": {
          "en": "Giving to someone: 借给, 还给",
          "fr": "Donner à quelqu'un : 借给, 还给",
          "zh": "“给”作补语：借给、还给"
        },
        "structure": "verb (借/还/送/发) + 给 + person (+ thing)",
        "explanation": {
          "en": "给 after verbs such as 借, 还, 送 or 发 introduces the person who receives: 我借给你一本书 “I'll lend you a book”, 请还给我 “please give it back to me”.",
          "fr": "给 après des verbes comme 借, 还, 送 ou 发 introduit la personne qui reçoit : 我借给你一本书 « je te prête un livre », 请还给我 « rends-le-moi ».",
          "zh": "“借、还、送、发”等动词后加“给”引出接受的人：我借给你一本书；请还给我。"
        },
        "example": {
          "hanzi": "这本书明天还给你。",
          "pinyin": "Zhè běn shū míngtiān huán gěi nǐ.",
          "translation": {
            "en": "I'll give this book back to you tomorrow.",
            "fr": "Je te rendrai ce livre demain.",
            "zh": "这本书明天还给你。"
          }
        }
      }
    ],
    "dialogue": [
      {
        "speaker": "小明",
        "hanzi": "经理，下午几点开会？",
        "pinyin": "Jīnglǐ, xiàwǔ jǐ diǎn kāihuì?",
        "meaning": {
          "en": "What time is the meeting this afternoon?",
          "fr": "À quelle heure est la réunion cet après-midi ?",
          "zh": "经理，下午几点开会？"
        },
        "audioText": "经理，下午几点开会？"
      },
      {
        "speaker": "经理",
        "hanzi": "三点，在我的办公室。你先查一下名单，看看谁来。",
        "pinyin": "Sān diǎn, zài wǒ de bàngōngshì. Nǐ xiān chá yíxià míngdān, kànkan shéi lái.",
        "meaning": {
          "en": "Three o'clock, in my office. Check the list first to see who's coming.",
          "fr": "À quinze heures, dans mon bureau. Vérifie d'abord la liste pour voir qui vient.",
          "zh": "三点，在我的办公室。你先查一下名单，看看谁来。"
        },
        "audioText": "三点，在我的办公室。你先查一下名单，看看谁来。"
      },
      {
        "speaker": "小明",
        "hanzi": "好的。我的笔记本电脑丢了，能借给我用一下吗？",
        "pinyin": "Hǎo de. Wǒ de bǐjìběn diànnǎo diū le, néng jiè gěi wǒ yòng yíxià ma?",
        "meaning": {
          "en": "OK. I've lost my laptop—could you lend me one for a bit?",
          "fr": "D'accord. J'ai perdu mon ordinateur portable, vous pouvez m'en prêter un un moment ?",
          "zh": "好的。我的笔记本电脑丢了，能借给我用一下吗？"
        },
        "audioText": "好的。我的笔记本电脑丢了，能借给我用一下吗？"
      },
      {
        "speaker": "经理",
        "hanzi": "可以，用完了还给我，放在桌子上就行。",
        "pinyin": "Kěyǐ, yòng wán le huán gěi wǒ, fàng zài zhuōzi shang jiù xíng.",
        "meaning": {
          "en": "Sure. Give it back when you're done—just leave it on the desk.",
          "fr": "Bien sûr. Rends-le-moi quand tu as fini, pose-le simplement sur le bureau.",
          "zh": "可以，用完了还给我，放在桌子上就行。"
        },
        "audioText": "可以，用完了还给我，放在桌子上就行。"
      },
      {
        "speaker": "小明",
        "hanzi": "谢谢！还有，一个留学生想来公司了解中国文化和历史。",
        "pinyin": "Xièxie! Hái yǒu, yí ge liúxuéshēng xiǎng lái gōngsī liǎojiě Zhōngguó wénhuà hé lìshǐ.",
        "meaning": {
          "en": "Thanks! Also, an international student would like to come to the company to learn about Chinese culture and history.",
          "fr": "Merci ! Autre chose : un étudiant étranger aimerait venir dans l'entreprise pour découvrir la culture et l'histoire chinoises.",
          "zh": "谢谢！还有，一个留学生想来公司了解中国文化和历史。"
        },
        "audioText": "谢谢！还有，一个留学生想来公司了解中国文化和历史。"
      },
      {
        "speaker": "经理",
        "hanzi": "很好，会外语的人很有用。把他加到名单上吧。",
        "pinyin": "Hěn hǎo, huì wàiyǔ de rén hěn yǒuyòng. Bǎ tā jiā dào míngdān shang ba.",
        "meaning": {
          "en": "Great—people who speak foreign languages are useful. Add him to the list.",
          "fr": "Très bien, les gens qui parlent des langues étrangères sont utiles. Ajoute-le à la liste.",
          "zh": "很好，会外语的人很有用。把他加到名单上吧。"
        },
        "audioText": "很好，会外语的人很有用。把他加到名单上吧。"
      }
    ]
  },
  "lesson-hsk3-21": {
    "grammarPoints": [
      {
        "title": {
          "en": "Just now: 刚 and 刚才",
          "fr": "À l'instant : 刚 et 刚才",
          "zh": "“刚”和“刚才”"
        },
        "structure": "刚 + verb (adverb) · 刚才 (time word, can open the sentence)",
        "explanation": {
          "en": "Both mean “just”. 刚 is an adverb placed right before the verb and can refer to a longer recent period: 我刚来中国. 刚才 is a time word for a few minutes ago and can start the sentence: 刚才你去哪儿了？",
          "fr": "Les deux signifient « venir de ». 刚 est un adverbe placé juste avant le verbe et peut couvrir une période plus longue : 我刚来中国. 刚才 est un mot de temps pour « il y a quelques minutes » et peut ouvrir la phrase : 刚才你去哪儿了？",
          "zh": "“刚”是副词，放在动词前，时间可长可短：我刚来中国。“刚才”是时间名词，指不久以前，可以放在句首：刚才你去哪儿了？"
        },
        "example": {
          "hanzi": "我刚到，你刚才给我打电话了吗？",
          "pinyin": "Wǒ gāng dào, nǐ gāngcái gěi wǒ dǎ diànhuà le ma?",
          "translation": {
            "en": "I've just arrived—did you call me just now?",
            "fr": "Je viens d'arriver, tu m'as appelé tout à l'heure ?",
            "zh": "我刚到，你刚才给我打电话了吗？"
          }
        }
      }
    ],
    "dialogue": [
      {
        "speaker": "安娜",
        "hanzi": "你怎么才来？你又迟到了！",
        "pinyin": "Nǐ zěnme cái lái? Nǐ yòu chídào le!",
        "meaning": {
          "en": "Why are you only getting here now? You're late again!",
          "fr": "Pourquoi tu arrives seulement maintenant ? Tu es encore en retard !",
          "zh": "你怎么才来？你又迟到了！"
        },
        "audioText": "你怎么才来？你又迟到了！"
      },
      {
        "speaker": "大卫",
        "hanzi": "对不起，路上车太多，我刚刚到。",
        "pinyin": "Duìbuqǐ, lùshang chē tài duō, wǒ gānggāng dào.",
        "meaning": {
          "en": "Sorry, the traffic was awful; I've only just arrived.",
          "fr": "Désolé, il y avait trop de circulation, je viens tout juste d'arriver.",
          "zh": "对不起，路上车太多，我刚刚到。"
        },
        "audioText": "对不起，路上车太多，我刚刚到。"
      },
      {
        "speaker": "安娜",
        "hanzi": "电影刚才已经开始了，我等了你半天。",
        "pinyin": "Diànyǐng gāngcái yǐjīng kāishǐ le, wǒ děng le nǐ bàntiān.",
        "meaning": {
          "en": "The film started a moment ago—I waited ages for you.",
          "fr": "Le film a déjà commencé tout à l'heure, je t'ai attendu une éternité.",
          "zh": "电影刚才已经开始了，我等了你半天。"
        },
        "audioText": "电影刚才已经开始了，我等了你半天。"
      },
      {
        "speaker": "大卫",
        "hanzi": "好久没看电影了，最近太忙了。",
        "pinyin": "Hǎojiǔ méi kàn diànyǐng le, zuìjìn tài máng le.",
        "meaning": {
          "en": "I haven't seen a film for ages; I've been so busy lately.",
          "fr": "Ça fait longtemps que je n'ai pas vu de film, j'ai été trop occupé ces derniers temps.",
          "zh": "好久没看电影了，最近太忙了。"
        },
        "audioText": "好久没看电影了，最近太忙了。"
      },
      {
        "speaker": "安娜",
        "hanzi": "以后早点儿出门。电影马上就结束了！",
        "pinyin": "Yǐhòu zǎo diǎnr chūmén. Diànyǐng mǎshàng jiù jiéshù le!",
        "meaning": {
          "en": "Leave earlier next time. The film's about to finish!",
          "fr": "La prochaine fois, pars plus tôt. Le film va bientôt finir !",
          "zh": "以后早点儿出门。电影马上就结束了！"
        },
        "audioText": "以后早点儿出门。电影马上就结束了！"
      },
      {
        "speaker": "大卫",
        "hanzi": "知道了，以后一定不迟到。",
        "pinyin": "Zhīdào le, yǐhòu yídìng bù chídào.",
        "meaning": {
          "en": "Got it—I won't be late again.",
          "fr": "Compris, je ne serai plus en retard.",
          "zh": "知道了，以后一定不迟到。"
        },
        "audioText": "知道了，以后一定不迟到。"
      }
    ]
  },
  "lesson-hsk3-22": {
    "grammarPoints": [
      {
        "title": {
          "en": "Thinking: 认为 vs 以为",
          "fr": "Penser : 认为 ou 以为",
          "zh": "“认为”和“以为”"
        },
        "structure": "认为 + opinion · 以为 + belief that turned out wrong",
        "explanation": {
          "en": "认为 gives an opinion: 我认为他说得对. 以为 means you thought something that turned out to be wrong: 我以为你不来了 “I thought you weren't coming (but you did)”.",
          "fr": "认为 exprime une opinion : 我认为他说得对. 以为 signifie qu'on croyait une chose qui s'est révélée fausse : 我以为你不来了 « je croyais que tu ne viendrais pas (mais tu es venu) ».",
          "zh": "“认为”表示看法：我认为他说得对。“以为”表示原来的看法与事实不符：我以为你不来了。"
        },
        "example": {
          "hanzi": "我以为今天会下雨，其实是晴天。",
          "pinyin": "Wǒ yǐwéi jīntiān huì xià yǔ, qíshí shì qíng tiān.",
          "translation": {
            "en": "I thought it would rain today, but it's actually sunny.",
            "fr": "Je croyais qu'il pleuvrait aujourd'hui, mais en fait il fait beau.",
            "zh": "我以为今天会下雨，其实是晴天。"
          }
        }
      }
    ],
    "dialogue": [
      {
        "speaker": "小明",
        "hanzi": "你怎么哭了？",
        "pinyin": "Nǐ zěnme kū le?",
        "meaning": {
          "en": "Why are you crying?",
          "fr": "Pourquoi tu pleures ?",
          "zh": "你怎么哭了？"
        },
        "audioText": "你怎么哭了？"
      },
      {
        "speaker": "安娜",
        "hanzi": "我以为考试没考好，心里很急。",
        "pinyin": "Wǒ yǐwéi kǎoshì méi kǎo hǎo, xīnlǐ hěn jí.",
        "meaning": {
          "en": "I thought I'd done badly in the exam, and I was really anxious.",
          "fr": "Je croyais avoir raté l'examen, j'étais très angoissée.",
          "zh": "我以为考试没考好，心里很急。"
        },
        "audioText": "我以为考试没考好，心里很急。"
      },
      {
        "speaker": "小明",
        "hanzi": "其实你考得很好啊！我看见成绩了。",
        "pinyin": "Qíshí nǐ kǎo de hěn hǎo a! Wǒ kànjiàn chéngjì le.",
        "meaning": {
          "en": "Actually you did really well! I've seen the results.",
          "fr": "En fait, tu as très bien réussi ! J'ai vu les résultats.",
          "zh": "其实你考得很好啊！我看见成绩了。"
        },
        "audioText": "其实你考得很好啊！我看见成绩了。"
      },
      {
        "speaker": "安娜",
        "hanzi": "真的吗？看来我不应该这么怕。",
        "pinyin": "Zhēn de ma? Kànlái wǒ bù yīnggāi zhème pà.",
        "meaning": {
          "en": "Really? Looks like I shouldn't have been so worried.",
          "fr": "C'est vrai ? Visiblement, je n'aurais pas dû avoir aussi peur.",
          "zh": "真的吗？看来我不应该这么怕。"
        },
        "audioText": "真的吗？看来我不应该这么怕。"
      },
      {
        "speaker": "小明",
        "hanzi": "当然。我认为你一定能上一个好大学。",
        "pinyin": "Dāngrán. Wǒ rènwéi nǐ yídìng néng shàng yí ge hǎo dàxué.",
        "meaning": {
          "en": "Of course. I think you'll definitely get into a good university.",
          "fr": "Bien sûr. Je pense que tu entreras sûrement dans une bonne université.",
          "zh": "当然。我认为你一定能上一个好大学。"
        },
        "audioText": "当然。我认为你一定能上一个好大学。"
      },
      {
        "speaker": "安娜",
        "hanzi": "我已经决定了，明年去中国留学。爸爸妈妈也同意了。",
        "pinyin": "Wǒ yǐjīng juédìng le, míngnián qù Zhōngguó liúxué. Bàba māma yě tóngyì le.",
        "meaning": {
          "en": "I've already decided: I'm going to study in China next year. My parents have agreed.",
          "fr": "J'ai déjà décidé : l'année prochaine, je pars étudier en Chine. Mes parents sont d'accord.",
          "zh": "我已经决定了，明年去中国留学。爸爸妈妈也同意了。"
        },
        "audioText": "我已经决定了，明年去中国留学。爸爸妈妈也同意了。"
      }
    ]
  },
  "lesson-hsk3-23": {
    "grammarPoints": [
      {
        "title": {
          "en": "Comparing: 比, 更, 一样",
          "fr": "Comparer : 比, 更, 一样",
          "zh": "比较：比、更、一样"
        },
        "structure": "A 比 B (更/还) + adjective (+ 一点儿/多了) · A 跟 B 一样 (+ adjective)",
        "explanation": {
          "en": "比 compares two things: 今天比昨天冷. Add 更 for “even more”, or 一点儿 / 多了 after the adjective for the degree. 跟…一样 means “the same as”. Never use 很 in a 比 sentence.",
          "fr": "比 compare deux éléments : 今天比昨天冷. On ajoute 更 pour « encore plus », ou 一点儿 / 多了 après l'adjectif pour le degré. 跟…一样 signifie « pareil que ». Jamais de 很 dans une phrase avec 比.",
          "zh": "“A比B+形容词”表示比较：今天比昨天冷。可以加“更”，或在形容词后加“一点儿、多了”。“A跟B一样”表示相同。比较句中不能用“很”。"
        },
        "example": {
          "hanzi": "这个房间比那个大一点儿。",
          "pinyin": "Zhège fángjiān bǐ nàge dà yìdiǎnr.",
          "translation": {
            "en": "This room is a little bigger than that one.",
            "fr": "Cette chambre est un peu plus grande que celle-là.",
            "zh": "这个房间比那个大一点儿。"
          }
        }
      }
    ],
    "dialogue": [
      {
        "speaker": "大卫",
        "hanzi": "这两个手机差不多，你买哪个？",
        "pinyin": "Zhè liǎng ge shǒujī chàbuduō, nǐ mǎi nǎge?",
        "meaning": {
          "en": "These two phones are about the same—which one are you buying?",
          "fr": "Ces deux téléphones se ressemblent, lequel vas-tu acheter ?",
          "zh": "这两个手机差不多，你买哪个？"
        },
        "audioText": "这两个手机差不多，你买哪个？"
      },
      {
        "speaker": "安娜",
        "hanzi": "大小一样，可是这个比那个便宜一百块。",
        "pinyin": "Dàxiǎo yíyàng, kěshì zhège bǐ nàge piányi yìbǎi kuài.",
        "meaning": {
          "en": "They're the same size, but this one is a hundred yuan cheaper.",
          "fr": "Ils ont la même taille, mais celui-ci coûte cent yuans de moins.",
          "zh": "大小一样，可是这个比那个便宜一百块。"
        },
        "audioText": "大小一样，可是这个比那个便宜一百块。"
      },
      {
        "speaker": "大卫",
        "hanzi": "那个颜色更好看，我觉得挺不错的。",
        "pinyin": "Nàge yánsè gèng hǎokàn, wǒ juéde tǐng búcuò de.",
        "meaning": {
          "en": "That one's colour is nicer—I think it's pretty good.",
          "fr": "La couleur de celui-là est plus jolie, je le trouve plutôt bien.",
          "zh": "那个颜色更好看，我觉得挺不错的。"
        },
        "audioText": "那个颜色更好看，我觉得挺不错的。"
      },
      {
        "speaker": "安娜",
        "hanzi": "别的店有没有更便宜的？",
        "pinyin": "Biéde diàn yǒu méiyǒu gèng piányi de?",
        "meaning": {
          "en": "Are there cheaper ones in other shops?",
          "fr": "Il y en a de moins chers dans d'autres magasins ?",
          "zh": "别的店有没有更便宜的？"
        },
        "audioText": "别的店有没有更便宜的？"
      },
      {
        "speaker": "大卫",
        "hanzi": "大概没有，这里已经比其他店便宜多了。",
        "pinyin": "Dàgài méiyǒu, zhèlǐ yǐjīng bǐ qítā diàn piányi duō le.",
        "meaning": {
          "en": "Probably not—it's already much cheaper here than in other shops.",
          "fr": "Probablement pas, c'est déjà beaucoup moins cher ici qu'ailleurs.",
          "zh": "大概没有，这里已经比其他店便宜多了。"
        },
        "audioText": "大概没有，这里已经比其他店便宜多了。"
      },
      {
        "speaker": "安娜",
        "hanzi": "好，那我买这个。别人都说这个手机好极了！",
        "pinyin": "Hǎo, nà wǒ mǎi zhège. Biérén dōu shuō zhège shǒujī hǎo jí le!",
        "meaning": {
          "en": "OK, I'll buy this one. Everyone says it's excellent!",
          "fr": "D'accord, je prends celui-ci. Tout le monde dit qu'il est excellent !",
          "zh": "好，那我买这个。别人都说这个手机好极了！"
        },
        "audioText": "好，那我买这个。别人都说这个手机好极了！"
      }
    ]
  },
  "lesson-hsk3-24": {
    "grammarPoints": [
      {
        "title": {
          "en": "If… then…; as long as…",
          "fr": "Si… alors… ; du moment que…",
          "zh": "“如果……就……”；“只要……就……”"
        },
        "structure": "如果 (……的话)，(subject) 就 + result · 只要 + condition，就 + result",
        "explanation": {
          "en": "如果 introduces a condition and 就 the result; 的话 can be added at the end of the condition. 只要…就… means “as long as… then”.",
          "fr": "如果 introduit une condition et 就 la conséquence ; on peut ajouter 的话 à la fin de la condition. 只要…就… signifie « du moment que… alors ».",
          "zh": "“如果……（的话），就……”表示假设；“只要……就……”表示只要有这个条件，就会有这个结果。"
        },
        "example": {
          "hanzi": "如果明天下雨的话，我们就不去了。",
          "pinyin": "Rúguǒ míngtiān xià yǔ dehuà, wǒmen jiù bú qù le.",
          "translation": {
            "en": "If it rains tomorrow, we won't go.",
            "fr": "S'il pleut demain, nous n'irons pas.",
            "zh": "如果明天下雨的话，我们就不去了。"
          }
        }
      }
    ],
    "dialogue": [
      {
        "speaker": "大卫",
        "hanzi": "周末我们去爬山或者看电影，你选吧。",
        "pinyin": "Zhōumò wǒmen qù pá shān huòzhě kàn diànyǐng, nǐ xuǎn ba.",
        "meaning": {
          "en": "This weekend we could go hiking or see a film—you choose.",
          "fr": "Ce week-end, randonnée ou cinéma, à toi de choisir.",
          "zh": "周末我们去爬山或者看电影，你选吧。"
        },
        "audioText": "周末我们去爬山或者看电影，你选吧。"
      },
      {
        "speaker": "安娜",
        "hanzi": "如果天气好的话，就去爬山。",
        "pinyin": "Rúguǒ tiānqì hǎo dehuà, jiù qù pá shān.",
        "meaning": {
          "en": "If the weather's good, let's go hiking.",
          "fr": "S'il fait beau, allons faire de la randonnée.",
          "zh": "如果天气好的话，就去爬山。"
        },
        "audioText": "如果天气好的话，就去爬山。"
      },
      {
        "speaker": "大卫",
        "hanzi": "好。除了小明，还有谁去？",
        "pinyin": "Hǎo. Chúle Xiǎomíng, hái yǒu shéi qù?",
        "meaning": {
          "en": "OK. Apart from Xiaoming, who else is coming?",
          "fr": "D'accord. À part Xiaoming, qui d'autre vient ?",
          "zh": "好。除了小明，还有谁去？"
        },
        "audioText": "好。除了小明，还有谁去？"
      },
      {
        "speaker": "安娜",
        "hanzi": "只有我们三个。小明不但喜欢爬山，而且很会拍照。",
        "pinyin": "Zhǐyǒu wǒmen sān ge. Xiǎomíng búdàn xǐhuan pá shān, érqiě hěn huì pāizhào.",
        "meaning": {
          "en": "Just the three of us. Xiaoming not only likes hiking, he's also great at taking photos.",
          "fr": "Juste nous trois. Xiaoming aime la randonnée, et en plus il prend très bien les photos.",
          "zh": "只有我们三个。小明不但喜欢爬山，而且很会拍照。"
        },
        "audioText": "只有我们三个。小明不但喜欢爬山，而且很会拍照。"
      },
      {
        "speaker": "大卫",
        "hanzi": "为了早点儿出发，我们七点见面吧。",
        "pinyin": "Wèile zǎo diǎnr chūfā, wǒmen qī diǎn jiànmiàn ba.",
        "meaning": {
          "en": "So that we can leave early, let's meet at seven.",
          "fr": "Pour partir tôt, retrouvons-nous à sept heures.",
          "zh": "为了早点儿出发，我们七点见面吧。"
        },
        "audioText": "为了早点儿出发，我们七点见面吧。"
      },
      {
        "speaker": "安娜",
        "hanzi": "可以，只要你不迟到就行！",
        "pinyin": "Kěyǐ, zhǐyào nǐ bù chídào jiù xíng!",
        "meaning": {
          "en": "Fine, as long as you're not late!",
          "fr": "D'accord, du moment que tu n'es pas en retard !",
          "zh": "可以，只要你不迟到就行！"
        },
        "audioText": "可以，只要你不迟到就行！"
      }
    ]
  },
  "lesson-hsk3-25": {
    "grammarPoints": [
      {
        "title": {
          "en": "Early or late: 就 vs 才",
          "fr": "Tôt ou tard : 就 ou 才",
          "zh": "“就”和“才”"
        },
        "structure": "time + 就 + verb + 了 (sooner than expected) · time + 才 + verb (later than expected)",
        "explanation": {
          "en": "After a time expression, 就 means sooner or more easily than expected (他八点就来了), while 才 means later or with more difficulty than expected (他十点才来).",
          "fr": "Après une indication de temps, 就 signifie plus tôt ou plus facilement que prévu (他八点就来了), et 才 plus tard ou plus difficilement que prévu (他十点才来).",
          "zh": "时间词后用“就”表示早、快、顺利：他八点就来了；用“才”表示晚、慢、不顺利：他十点才来。"
        },
        "example": {
          "hanzi": "电影八点开始，他九点才来。",
          "pinyin": "Diànyǐng bā diǎn kāishǐ, tā jiǔ diǎn cái lái.",
          "translation": {
            "en": "The film started at eight, but he didn't arrive until nine.",
            "fr": "Le film commençait à huit heures, mais il n'est arrivé qu'à neuf heures.",
            "zh": "电影八点开始，他九点才来。"
          }
        }
      }
    ],
    "dialogue": [
      {
        "speaker": "小明",
        "hanzi": "你知道吗？我昨天在路上遇到了大卫。",
        "pinyin": "Nǐ zhīdào ma? Wǒ zuótiān zài lùshang yùdào le Dàwèi.",
        "meaning": {
          "en": "Guess what? I ran into David in the street yesterday.",
          "fr": "Tu sais quoi ? Hier, j'ai croisé David dans la rue.",
          "zh": "你知道吗？我昨天在路上遇到了大卫。"
        },
        "audioText": "你知道吗？我昨天在路上遇到了大卫。"
      },
      {
        "speaker": "安娜",
        "hanzi": "真的？他离开学校以后，我们一直没见面。",
        "pinyin": "Zhēn de? Tā líkāi xuéxiào yǐhòu, wǒmen yìzhí méi jiànmiàn.",
        "meaning": {
          "en": "Really? We haven't seen each other since he left school.",
          "fr": "C'est vrai ? Depuis qu'il a quitté l'école, on ne s'est jamais revus.",
          "zh": "真的？他离开学校以后，我们一直没见面。"
        },
        "audioText": "真的？他离开学校以后，我们一直没见面。"
      },
      {
        "speaker": "小明",
        "hanzi": "他变了很多，变成大人了，现在常常参加比赛。",
        "pinyin": "Tā biàn le hěn duō, biànchéng dàren le, xiànzài chángcháng cānjiā bǐsài.",
        "meaning": {
          "en": "He's changed a lot—he's grown up, and now he often takes part in competitions.",
          "fr": "Il a beaucoup changé, il est devenu adulte, et maintenant il participe souvent à des compétitions.",
          "zh": "他变了很多，变成大人了，现在常常参加比赛。"
        },
        "audioText": "他变了很多，变成大人了，现在常常参加比赛。"
      },
      {
        "speaker": "安娜",
        "hanzi": "他平时总是很忙吧？",
        "pinyin": "Tā píngshí zǒngshì hěn máng ba?",
        "meaning": {
          "en": "He must always be busy, right?",
          "fr": "Il doit toujours être très occupé, non ?",
          "zh": "他平时总是很忙吧？"
        },
        "audioText": "他平时总是很忙吧？"
      },
      {
        "speaker": "小明",
        "hanzi": "是啊。他说比赛下午三点就结束了，可是他晚上十点才到家。",
        "pinyin": "Shì a. Tā shuō bǐsài xiàwǔ sān diǎn jiù jiéshù le, kěshì tā wǎnshang shí diǎn cái dào jiā.",
        "meaning": {
          "en": "Yes. He said the competition was over by three, but he didn't get home until ten at night.",
          "fr": "Oui. Il a dit que la compétition s'était terminée dès quinze heures, mais qu'il n'était rentré qu'à vingt-deux heures.",
          "zh": "是啊。他说比赛下午三点就结束了，可是他晚上十点才到家。"
        },
        "audioText": "是啊。他说比赛下午三点就结束了，可是他晚上十点才到家。"
      },
      {
        "speaker": "安娜",
        "hanzi": "他又得到第一名了吗？",
        "pinyin": "Tā yòu dédào dì yī míng le ma?",
        "meaning": {
          "en": "Did he win first place again?",
          "fr": "Il a encore remporté la première place ?",
          "zh": "他又得到第一名了吗？"
        },
        "audioText": "他又得到第一名了吗？"
      },
      {
        "speaker": "小明",
        "hanzi": "对，他受到了大家的欢迎。",
        "pinyin": "Duì, tā shòudào le dàjiā de huānyíng.",
        "meaning": {
          "en": "Yes, and everyone gave him a warm welcome.",
          "fr": "Oui, et tout le monde l'a chaleureusement accueilli.",
          "zh": "对，他受到了大家的欢迎。"
        },
        "audioText": "对，他受到了大家的欢迎。"
      }
    ]
  },
  "lesson-hsk3-26": {
    "grammarPoints": [
      {
        "title": {
          "en": "Describing a noun with 的",
          "fr": "Décrire un nom avec 的",
          "zh": "定语和“的”"
        },
        "structure": "description (adjective / verb phrase / clause) + 的 + noun",
        "explanation": {
          "en": "In Chinese, anything that describes a noun comes before it, linked by 的: 很有名的图书馆 “a very famous library”, 我昨天看的节目 “the programme I watched yesterday”.",
          "fr": "En chinois, tout ce qui décrit un nom se place devant lui, relié par 的 : 很有名的图书馆 « une bibliothèque très célèbre », 我昨天看的节目 « l'émission que j'ai regardée hier ».",
          "zh": "汉语中修饰名词的成分都放在名词前面，用“的”连接：很有名的图书馆、我昨天看的节目。"
        },
        "example": {
          "hanzi": "这是我最喜欢的故事。",
          "pinyin": "Zhè shì wǒ zuì xǐhuan de gùshi.",
          "translation": {
            "en": "This is my favourite story.",
            "fr": "C'est mon histoire préférée.",
            "zh": "这是我最喜欢的故事。"
          }
        }
      }
    ],
    "dialogue": [
      {
        "speaker": "大卫",
        "hanzi": "这个市有什么有名的地方？",
        "pinyin": "Zhège shì yǒu shénme yǒumíng de dìfang?",
        "meaning": {
          "en": "What famous places are there in this city?",
          "fr": "Quels sont les endroits célèbres de cette ville ?",
          "zh": "这个市有什么有名的地方？"
        },
        "audioText": "这个市有什么有名的地方？"
      },
      {
        "speaker": "小明",
        "hanzi": "市图书馆很有名，那里的服务也很好。",
        "pinyin": "Shì túshūguǎn hěn yǒumíng, nàlǐ de fúwù yě hěn hǎo.",
        "meaning": {
          "en": "The city library is famous, and the service there is good too.",
          "fr": "La bibliothèque municipale est célèbre, et le service y est bon aussi.",
          "zh": "市图书馆很有名，那里的服务也很好。"
        },
        "audioText": "市图书馆很有名，那里的服务也很好。"
      },
      {
        "speaker": "大卫",
        "hanzi": "图书馆里能看报纸吗？",
        "pinyin": "Túshūguǎn li néng kàn bàozhǐ ma?",
        "meaning": {
          "en": "Can you read newspapers in the library?",
          "fr": "On peut lire les journaux à la bibliothèque ?",
          "zh": "图书馆里能看报纸吗？"
        },
        "audioText": "图书馆里能看报纸吗？"
      },
      {
        "speaker": "小明",
        "hanzi": "能。二楼有很多报纸，三楼有讲故事的节目。",
        "pinyin": "Néng. Èr lóu yǒu hěn duō bàozhǐ, sān lóu yǒu jiǎng gùshi de jiémù.",
        "meaning": {
          "en": "Yes. There are lots of newspapers on the first floor, and storytelling sessions on the second.",
          "fr": "Oui. Il y a beaucoup de journaux au premier étage, et des séances de contes au deuxième.",
          "zh": "能。二楼有很多报纸，三楼有讲故事的节目。"
        },
        "audioText": "能。二楼有很多报纸，三楼有讲故事的节目。"
      },
      {
        "speaker": "大卫",
        "hanzi": "我想去听，在什么地点？",
        "pinyin": "Wǒ xiǎng qù tīng, zài shénme dìdiǎn?",
        "meaning": {
          "en": "I'd like to go—where is it?",
          "fr": "J'aimerais y aller, c'est où ?",
          "zh": "我想去听，在什么地点？"
        },
        "audioText": "我想去听，在什么地点？"
      },
      {
        "speaker": "小明",
        "hanzi": "三楼301室。这是一个学习汉语的好机会！",
        "pinyin": "Sān lóu 301 shì. Zhè shì yí ge xuéxí Hànyǔ de hǎo jīhuì!",
        "meaning": {
          "en": "Room 301 on the second floor. It's a great chance to learn Chinese!",
          "fr": "Salle 301, au deuxième étage. C'est une excellente occasion d'apprendre le chinois !",
          "zh": "三楼301室。这是一个学习汉语的好机会！"
        },
        "audioText": "三楼301室。这是一个学习汉语的好机会！"
      }
    ]
  },
  "lesson-hsk3-27": {
    "grammarPoints": [
      {
        "title": {
          "en": "Sentences with 把 and 被",
          "fr": "Les phrases en 把 et en 被",
          "zh": "“把”字句和“被”字句"
        },
        "structure": "A 把 B + verb + other element · B 被 A + verb + other element",
        "explanation": {
          "en": "把 brings the object before the verb to say what was done to it: 我把书放在桌子上. 被 makes a passive, often for something unwelcome: 我的手机被弟弟拿走了. In both, the verb must be followed by something (a result, a place, 了…).",
          "fr": "把 place l'objet avant le verbe pour dire ce qu'on en a fait : 我把书放在桌子上. 被 forme un passif, souvent pour un fait désagréable : 我的手机被弟弟拿走了. Dans les deux cas, le verbe doit être suivi d'un élément (résultat, lieu, 了…).",
          "zh": "“把”字句把宾语提到动词前，说明对它做了什么：我把书放在桌子上。“被”字句表示被动，多用于不如意的事：我的手机被弟弟拿走了。两种句子的动词后面都要有其他成分。"
        },
        "example": {
          "hanzi": "我把作业写完了。",
          "pinyin": "Wǒ bǎ zuòyè xiě wán le.",
          "translation": {
            "en": "I've finished my homework.",
            "fr": "J'ai fini mes devoirs.",
            "zh": "我把作业写完了。"
          }
        }
      }
    ],
    "dialogue": [
      {
        "speaker": "妈妈",
        "hanzi": "小明，你把那张桌子搬到哪儿去了？",
        "pinyin": "Xiǎomíng, nǐ bǎ nà zhāng zhuōzi bān dào nǎr qù le?",
        "meaning": {
          "en": "Xiaoming, where did you move that table to?",
          "fr": "Xiaoming, où as-tu déplacé cette table ?",
          "zh": "小明，你把那张桌子搬到哪儿去了？"
        },
        "audioText": "小明，你把那张桌子搬到哪儿去了？"
      },
      {
        "speaker": "小明",
        "hanzi": "我把它放在门口了。",
        "pinyin": "Wǒ bǎ tā fàng zài ménkǒu le.",
        "meaning": {
          "en": "I put it by the door.",
          "fr": "Je l'ai mise près de la porte.",
          "zh": "我把它放在门口了。"
        },
        "audioText": "我把它放在门口了。"
      },
      {
        "speaker": "妈妈",
        "hanzi": "我的书呢？是不是被你拿走了？",
        "pinyin": "Wǒ de shū ne? Shì bu shì bèi nǐ ná zǒu le?",
        "meaning": {
          "en": "And my book? Did you take it?",
          "fr": "Et mon livre ? C'est toi qui l'as pris ?",
          "zh": "我的书呢？是不是被你拿走了？"
        },
        "audioText": "我的书呢？是不是被你拿走了？"
      },
      {
        "speaker": "小明",
        "hanzi": "不是我，被弟弟拿走了。他已经读了两遍了。",
        "pinyin": "Bú shì wǒ, bèi dìdi ná zǒu le. Tā yǐjīng dú le liǎng biàn le.",
        "meaning": {
          "en": "Not me—my little brother took it. He's already read it twice.",
          "fr": "Pas moi, c'est mon petit frère qui l'a pris. Il l'a déjà lu deux fois.",
          "zh": "不是我，被弟弟拿走了。他已经读了两遍了。"
        },
        "audioText": "不是我，被弟弟拿走了。他已经读了两遍了。"
      },
      {
        "speaker": "妈妈",
        "hanzi": "这种书他看得懂吗？",
        "pinyin": "Zhè zhǒng shū tā kàn de dǒng ma?",
        "meaning": {
          "en": "Can he understand that kind of book?",
          "fr": "Il comprend ce genre de livre ?",
          "zh": "这种书他看得懂吗？"
        },
        "audioText": "这种书他看得懂吗？"
      },
      {
        "speaker": "小明",
        "hanzi": "他说有几段看不懂，别的都行。",
        "pinyin": "Tā shuō yǒu jǐ duàn kàn bu dǒng, bié de dōu xíng.",
        "meaning": {
          "en": "He says there are a few passages he can't follow, but the rest is fine.",
          "fr": "Il dit qu'il y a quelques passages qu'il ne comprend pas, mais que le reste ça va.",
          "zh": "他说有几段看不懂，别的都行。"
        },
        "audioText": "他说有几段看不懂，别的都行。"
      },
      {
        "speaker": "妈妈",
        "hanzi": "那你去把书拿回来，我们一起慢慢地读。",
        "pinyin": "Nà nǐ qù bǎ shū ná huilai, wǒmen yìqǐ mànmàn de dú.",
        "meaning": {
          "en": "Then go and get the book back, and we'll read it slowly together.",
          "fr": "Alors va récupérer le livre, et nous le lirons tranquillement ensemble.",
          "zh": "那你去把书拿回来，我们一起慢慢地读。"
        },
        "audioText": "那你去把书拿回来，我们一起慢慢地读。"
      }
    ]
  },
  "lesson-hsk3-28": {
    "grammarPoints": [
      {
        "title": {
          "en": "Doing two things at once: 一边……一边……",
          "fr": "Faire deux choses à la fois : 一边……一边……",
          "zh": "“一边……一边……”"
        },
        "structure": "Subject + 一边 + verb 1，一边 + verb 2",
        "explanation": {
          "en": "一边…一边… describes two actions done at the same time by the same person: 他一边吃饭一边看电视 “he watches TV while he eats”.",
          "fr": "一边…一边… décrit deux actions faites en même temps par la même personne : 他一边吃饭一边看电视 « il mange en regardant la télé ».",
          "zh": "“一边……一边……”表示同一个人同时进行两个动作：他一边吃饭一边看电视。"
        },
        "example": {
          "hanzi": "我们一边走一边聊天儿吧。",
          "pinyin": "Wǒmen yìbiān zǒu yìbiān liáotiānr ba.",
          "translation": {
            "en": "Let's chat as we walk.",
            "fr": "Discutons en marchant.",
            "zh": "我们一边走一边聊天儿吧。"
          }
        }
      }
    ],
    "dialogue": [
      {
        "speaker": "安娜",
        "hanzi": "好久不见！听说你搬家了？",
        "pinyin": "Hǎojiǔ bújiàn! Tīngshuō nǐ bānjiā le?",
        "meaning": {
          "en": "Long time no see! I heard you've moved?",
          "fr": "Ça fait longtemps ! J'ai entendu dire que tu avais déménagé ?",
          "zh": "好久不见！听说你搬家了？"
        },
        "audioText": "好久不见！听说你搬家了？"
      },
      {
        "speaker": "小明",
        "hanzi": "对，搬到学校旁边了。咱们一块儿去喝咖啡吧？",
        "pinyin": "Duì, bān dào xuéxiào pángbiān le. Zánmen yíkuàir qù hē kāfēi ba?",
        "meaning": {
          "en": "Yes, next to the school. Shall we go for a coffee together?",
          "fr": "Oui, à côté de l'école. On va prendre un café ensemble ?",
          "zh": "对，搬到学校旁边了。咱们一块儿去喝咖啡吧？"
        },
        "audioText": "对，搬到学校旁边了。咱们一块儿去喝咖啡吧？"
      },
      {
        "speaker": "安娜",
        "hanzi": "好啊，咱们一边喝一边聊。新地方怎么样？习惯了吗？",
        "pinyin": "Hǎo a, zánmen yìbiān hē yìbiān liáo. Xīn dìfang zěnmeyàng? Xíguàn le ma?",
        "meaning": {
          "en": "Sure, we can chat over a coffee. How's the new place? Have you got used to it?",
          "fr": "Avec plaisir, on discutera autour d'un café. Comment est le nouvel endroit ? Tu t'y es habitué ?",
          "zh": "好啊，咱们一边喝一边聊。新地方怎么样？习惯了吗？"
        },
        "audioText": "好啊，咱们一边喝一边聊。新地方怎么样？习惯了吗？"
      },
      {
        "speaker": "小明",
        "hanzi": "习惯了，到处都是饭馆，主要是离学校近。",
        "pinyin": "Xíguàn le, dàochù dōu shì fànguǎn, zhǔyào shì lí xuéxiào jìn.",
        "meaning": {
          "en": "Yes—there are restaurants everywhere, and the main thing is it's close to school.",
          "fr": "Oui, il y a des restaurants partout, et surtout c'est près de l'école.",
          "zh": "习惯了，到处都是饭馆，主要是离学校近。"
        },
        "audioText": "习惯了，到处都是饭馆，主要是离学校近。"
      },
      {
        "speaker": "安娜",
        "hanzi": "哎呀，我忘记带钱了，怎么办？",
        "pinyin": "Āiyā, wǒ wàngjì dài qián le, zěnme bàn?",
        "meaning": {
          "en": "Oh no, I forgot to bring money—what do I do?",
          "fr": "Oh non, j'ai oublié de prendre de l'argent, comment faire ?",
          "zh": "哎呀，我忘记带钱了，怎么办？"
        },
        "audioText": "哎呀，我忘记带钱了，怎么办？"
      },
      {
        "speaker": "小明",
        "hanzi": "不用担心，我请你。一共才三十块。",
        "pinyin": "Búyòng dānxīn, wǒ qǐng nǐ. Yígòng cái sānshí kuài.",
        "meaning": {
          "en": "Don't worry, it's on me. It's only thirty yuan in all.",
          "fr": "Ne t'inquiète pas, je t'invite. Ça fait seulement trente yuans en tout.",
          "zh": "不用担心，我请你。一共才三十块。"
        },
        "audioText": "不用担心，我请你。一共才三十块。"
      },
      {
        "speaker": "安娜",
        "hanzi": "那不行，下次我请你！",
        "pinyin": "Nà bù xíng, xià cì wǒ qǐng nǐ!",
        "meaning": {
          "en": "No way—next time it's my treat!",
          "fr": "Pas question, la prochaine fois c'est moi qui invite !",
          "zh": "那不行，下次我请你！"
        },
        "audioText": "那不行，下次我请你！"
      }
    ]
  },
  "lesson-hsk3-29": {
    "grammarPoints": [
      {
        "title": {
          "en": "The more… the more…: 越……越……",
          "fr": "Plus… plus… : 越……越……",
          "zh": "“越……越……”"
        },
        "structure": "越 + verb / adjective 1，越 + adjective 2",
        "explanation": {
          "en": "越 A 越 B means that B grows as A does: 越看越好看 “the more you look, the better it looks”.",
          "fr": "越 A 越 B signifie que B augmente à mesure que A augmente : 越看越好看 « plus on regarde, plus c'est joli ».",
          "zh": "“越A越B”表示B随着A的变化而变化：越看越好看。"
        },
        "example": {
          "hanzi": "这个故事越听越有意思。",
          "pinyin": "Zhège gùshi yuè tīng yuè yǒu yìsi.",
          "translation": {
            "en": "The more you listen to this story, the more interesting it gets.",
            "fr": "Plus on écoute cette histoire, plus elle devient intéressante.",
            "zh": "这个故事越听越有意思。"
          }
        }
      }
    ],
    "dialogue": [
      {
        "speaker": "安娜",
        "hanzi": "周末我买了一条蓝色的裤子，你看怎么样？",
        "pinyin": "Zhōumò wǒ mǎi le yì tiáo lánsè de kùzi, nǐ kàn zěnmeyàng?",
        "meaning": {
          "en": "I bought some blue trousers at the weekend—what do you think?",
          "fr": "Ce week-end, j'ai acheté un pantalon bleu, qu'en penses-tu ?",
          "zh": "周末我买了一条蓝色的裤子，你看怎么样？"
        },
        "audioText": "周末我买了一条蓝色的裤子，你看怎么样？"
      },
      {
        "speaker": "小明",
        "hanzi": "有点儿短，颜色也不太好看。",
        "pinyin": "Yǒudiǎnr duǎn, yánsè yě bú tài hǎokàn.",
        "meaning": {
          "en": "A bit short, and the colour isn't great.",
          "fr": "Un peu court, et la couleur n'est pas terrible.",
          "zh": "有点儿短，颜色也不太好看。"
        },
        "audioText": "有点儿短，颜色也不太好看。"
      },
      {
        "speaker": "安娜",
        "hanzi": "是吗？我觉得越看越好看。过去我只穿黄色的。",
        "pinyin": "Shì ma? Wǒ juéde yuè kàn yuè hǎokàn. Guòqù wǒ zhǐ chuān huángsè de.",
        "meaning": {
          "en": "Really? The more I look at them, the nicer I find them. I used to wear only yellow.",
          "fr": "Ah bon ? Plus je le regarde, plus je le trouve joli. Avant, je ne portais que du jaune.",
          "zh": "是吗？我觉得越看越好看。过去我只穿黄色的。"
        },
        "audioText": "是吗？我觉得越看越好看。过去我只穿黄色的。"
      },
      {
        "speaker": "小明",
        "hanzi": "这个瓶子是你新买的吗？",
        "pinyin": "Zhège píngzi shì nǐ xīn mǎi de ma?",
        "meaning": {
          "en": "Is this bottle new?",
          "fr": "Cette bouteille, tu viens de l'acheter ?",
          "zh": "这个瓶子是你新买的吗？"
        },
        "audioText": "这个瓶子是你新买的吗？"
      },
      {
        "speaker": "安娜",
        "hanzi": "不是，已经很旧了。用好方法洗干净，就跟新的一样。",
        "pinyin": "Bú shì, yǐjīng hěn jiù le. Yòng hǎo fāngfǎ xǐ gānjìng, jiù gēn xīn de yíyàng.",
        "meaning": {
          "en": "No, it's quite old. Wash it the right way and it's as good as new.",
          "fr": "Non, elle est déjà vieille. Bien lavée, elle a l'air neuve.",
          "zh": "不是，已经很旧了。用好方法洗干净，就跟新的一样。"
        },
        "audioText": "不是，已经很旧了。用好方法洗干净，就跟新的一样。"
      },
      {
        "speaker": "小明",
        "hanzi": "你真会过日子！我的东西越用越差。",
        "pinyin": "Nǐ zhēn huì guò rìzi! Wǒ de dōngxi yuè yòng yuè chà.",
        "meaning": {
          "en": "You really know how to look after things! My stuff just gets worse the more I use it.",
          "fr": "Tu sais vraiment prendre soin de tes affaires ! Les miennes s'abîment à mesure que je les utilise.",
          "zh": "你真会过日子！我的东西越用越差。"
        },
        "audioText": "你真会过日子！我的东西越用越差。"
      }
    ]
  }
};
