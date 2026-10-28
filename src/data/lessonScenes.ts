// Lesson texts told as scenes (setting + dialogue) with a recurring cast, plus short readings.
// Written for HSK Path; pinyin generated from the official HSK 3.0 readings and reviewed.
import type { HskLesson } from '../types';

export const LESSON_SCENES: Record<string, Pick<HskLesson, 'scenes' | 'story'>> = {
 "lesson-hsk1-01": {
  "scenes": [
   {
    "title": {
     "en": "The first class",
     "fr": "Le premier cours",
     "zh": "第一节课"
    },
    "setting": {
     "en": "Monday morning. David walks into his very first Chinese class.",
     "fr": "Lundi matin. David entre dans son tout premier cours de chinois.",
     "zh": "星期一上午，大卫第一次上汉语课。"
    },
    "lines": [
     {
      "speaker": "王老师",
      "hanzi": "你们好！",
      "pinyin": "Nǐmen hǎo!",
      "meaning": {
       "en": "Hello, everyone!",
       "fr": "Bonjour à tous !",
       "zh": "你们好！"
      },
      "audioText": "你们好！"
     },
     {
      "speaker": "大卫",
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
      "hanzi": "我是王老师。请坐！",
      "pinyin": "Wǒ shì Wáng lǎoshī. Qǐng zuò!",
      "meaning": {
       "en": "I'm Mr Wang. Please sit down!",
       "fr": "Je suis le professeur Wang. Asseyez-vous !",
       "zh": "我是王老师。请坐！"
      },
      "audioText": "我是王老师。请坐！"
     },
     {
      "speaker": "大卫",
      "hanzi": "谢谢老师！",
      "pinyin": "Xièxie lǎoshī!",
      "meaning": {
       "en": "Thank you, teacher!",
       "fr": "Merci, professeur !",
       "zh": "谢谢老师！"
      },
      "audioText": "谢谢老师！"
     },
     {
      "speaker": "王老师",
      "hanzi": "不客气。",
      "pinyin": "Bú kèqi.",
      "meaning": {
       "en": "You're welcome.",
       "fr": "Je vous en prie.",
       "zh": "不客气。"
      },
      "audioText": "不客气。"
     }
    ]
   },
   {
    "title": {
     "en": "In the corridor",
     "fr": "Dans le couloir",
     "zh": "在走廊里"
    },
    "setting": {
     "en": "During the break, David bumps into a girl in the corridor.",
     "fr": "Pendant la pause, David bouscule une fille dans le couloir.",
     "zh": "下课了，大卫在外边碰到一个女同学。"
    },
    "lines": [
     {
      "speaker": "大卫",
      "hanzi": "对不起！",
      "pinyin": "Duìbuqǐ!",
      "meaning": {
       "en": "Sorry!",
       "fr": "Pardon !",
       "zh": "对不起！"
      },
      "audioText": "对不起！"
     },
     {
      "speaker": "安娜",
      "hanzi": "没关系。",
      "pinyin": "Méi guānxi.",
      "meaning": {
       "en": "That's all right.",
       "fr": "Ce n'est rien.",
       "zh": "没关系。"
      },
      "audioText": "没关系。"
     },
     {
      "speaker": "大卫",
      "hanzi": "你好！我是大卫。",
      "pinyin": "Nǐ hǎo! Wǒ shì Dàwèi.",
      "meaning": {
       "en": "Hello! I'm David.",
       "fr": "Bonjour ! Je suis David.",
       "zh": "你好！我是大卫。"
      },
      "audioText": "你好！我是大卫。"
     },
     {
      "speaker": "安娜",
      "hanzi": "你好，大卫！我是安娜。",
      "pinyin": "Nǐ hǎo, Dàwèi! Wǒ shì Ānnà.",
      "meaning": {
       "en": "Hello, David! I'm Anna.",
       "fr": "Bonjour, David ! Je suis Anna.",
       "zh": "你好，大卫！我是安娜。"
      },
      "audioText": "你好，大卫！我是安娜。"
     }
    ]
   },
   {
    "title": {
     "en": "See you tomorrow",
     "fr": "À demain",
     "zh": "明天见"
    },
    "setting": {
     "en": "The class is over. Everyone says goodbye.",
     "fr": "Le cours est fini. Tout le monde se dit au revoir.",
     "zh": "下课了，大家说再见。"
    },
    "lines": [
     {
      "speaker": "王老师",
      "hanzi": "同学们，再见！",
      "pinyin": "Tóngxuémen, zàijiàn!",
      "meaning": {
       "en": "Goodbye, everyone!",
       "fr": "Au revoir, tout le monde !",
       "zh": "同学们，再见！"
      },
      "audioText": "同学们，再见！"
     },
     {
      "speaker": "大卫",
      "hanzi": "老师再见！",
      "pinyin": "Lǎoshī zàijiàn!",
      "meaning": {
       "en": "Goodbye, teacher!",
       "fr": "Au revoir, professeur !",
       "zh": "老师再见！"
      },
      "audioText": "老师再见！"
     },
     {
      "speaker": "安娜",
      "hanzi": "大卫，明天见！",
      "pinyin": "Dàwèi, míngtiān jiàn!",
      "meaning": {
       "en": "See you tomorrow, David!",
       "fr": "À demain, David !",
       "zh": "大卫，明天见！"
      },
      "audioText": "大卫，明天见！"
     },
     {
      "speaker": "大卫",
      "hanzi": "明天见！",
      "pinyin": "Míngtiān jiàn!",
      "meaning": {
       "en": "See you tomorrow!",
       "fr": "À demain !",
       "zh": "明天见！"
      },
      "audioText": "明天见！"
     }
    ]
   }
  ]
 },
 "lesson-hsk1-21": {
  "scenes": [
   {
    "title": {
     "en": "May I sit here?",
     "fr": "Je peux m'asseoir ici ?",
     "zh": "我可以坐这儿吗？"
    },
    "setting": {
     "en": "At lunchtime the canteen is full. David looks for a seat.",
     "fr": "À midi, la cantine est pleine. David cherche une place.",
     "zh": "中午，学校饭店里人很多，大卫找地方坐。"
    },
    "lines": [
     {
      "speaker": "大卫",
      "hanzi": "你好！请问，我可以坐这儿吗？",
      "pinyin": "Nǐ hǎo! Qǐngwèn, wǒ kěyǐ zuò zhèr ma?",
      "meaning": {
       "en": "Hello! Excuse me, may I sit here?",
       "fr": "Bonjour ! Excusez-moi, je peux m'asseoir ici ?",
       "zh": "你好！请问，我可以坐这儿吗？"
      },
      "audioText": "你好！请问，我可以坐这儿吗？"
     },
     {
      "speaker": "小明",
      "hanzi": "可以，请坐！",
      "pinyin": "Kěyǐ, qǐng zuò!",
      "meaning": {
       "en": "Sure, please sit down!",
       "fr": "Bien sûr, asseyez-vous !",
       "zh": "可以，请坐！"
      },
      "audioText": "可以，请坐！"
     },
     {
      "speaker": "大卫",
      "hanzi": "谢谢！我叫大卫。你叫什么名字？",
      "pinyin": "Xièxie! Wǒ jiào Dàwèi. Nǐ jiào shénme míngzi?",
      "meaning": {
       "en": "Thanks! I'm David. What's your name?",
       "fr": "Merci ! Je m'appelle David. Comment tu t'appelles ?",
       "zh": "谢谢！我叫大卫。你叫什么名字？"
      },
      "audioText": "谢谢！我叫大卫。你叫什么名字？"
     },
     {
      "speaker": "小明",
      "hanzi": "我叫李小明。认识你很高兴！",
      "pinyin": "Wǒ jiào Lǐ Xiǎomíng. Rènshi nǐ hěn gāoxìng!",
      "meaning": {
       "en": "I'm Li Xiaoming. Nice to meet you!",
       "fr": "Je m'appelle Li Xiaoming. Enchanté !",
       "zh": "我叫李小明。认识你很高兴！"
      },
      "audioText": "我叫李小明。认识你很高兴！"
     },
     {
      "speaker": "大卫",
      "hanzi": "认识你，我也很高兴！",
      "pinyin": "Rènshi nǐ, wǒ yě hěn gāoxìng!",
      "meaning": {
       "en": "Nice to meet you too!",
       "fr": "Enchanté aussi !",
       "zh": "认识你，我也很高兴！"
      },
      "audioText": "认识你，我也很高兴！"
     }
    ]
   },
   {
    "title": {
     "en": "You speak Chinese!",
     "fr": "Tu parles chinois !",
     "zh": "你会说汉语！"
    },
    "setting": {
     "en": "Xiaoming is surprised that David can already speak a little Chinese.",
     "fr": "Xiaoming est surpris que David parle déjà un peu chinois.",
     "zh": "小明没想到大卫会说一点儿汉语。"
    },
    "lines": [
     {
      "speaker": "小明",
      "hanzi": "你会说汉语，真好！",
      "pinyin": "Nǐ huì shuō Hànyǔ, zhēn hǎo!",
      "meaning": {
       "en": "You speak Chinese, great!",
       "fr": "Tu parles chinois, c'est super !",
       "zh": "你会说汉语，真好！"
      },
      "audioText": "你会说汉语，真好！"
     },
     {
      "speaker": "大卫",
      "hanzi": "我会说一点儿。我是王老师的学生。",
      "pinyin": "Wǒ huì shuō yìdiǎnr. Wǒ shì Wáng lǎoshī de xuéshēng.",
      "meaning": {
       "en": "I speak a little. I'm Mr Wang's student.",
       "fr": "Je parle un peu. Je suis l'élève du professeur Wang.",
       "zh": "我会说一点儿。我是王老师的学生。"
      },
      "audioText": "我会说一点儿。我是王老师的学生。"
     },
     {
      "speaker": "小明",
      "hanzi": "王老师？我知道他，他是我妈妈的朋友。",
      "pinyin": "Wáng lǎoshī? Wǒ zhīdào tā, tā shì wǒ māma de péngyou.",
      "meaning": {
       "en": "Mr Wang? I know him, he's my mum's friend.",
       "fr": "Le professeur Wang ? Je le connais, c'est un ami de ma mère.",
       "zh": "王老师？我知道他，他是我妈妈的朋友。"
      },
      "audioText": "王老师？我知道他，他是我妈妈的朋友。"
     },
     {
      "speaker": "大卫",
      "hanzi": "真的吗？",
      "pinyin": "Zhēn de ma?",
      "meaning": {
       "en": "Really?",
       "fr": "C'est vrai ?",
       "zh": "真的吗？"
      },
      "audioText": "真的吗？"
     }
    ]
   },
   {
    "title": {
     "en": "Your phone number",
     "fr": "Ton numéro",
     "zh": "你的电话"
    },
    "setting": {
     "en": "Before leaving, the two new friends exchange phone numbers.",
     "fr": "Avant de partir, les deux nouveaux amis échangent leurs numéros.",
     "zh": "走的时候，两个新朋友想给对方打电话。"
    },
    "lines": [
     {
      "speaker": "小明",
      "hanzi": "你能给我你的电话吗？",
      "pinyin": "Nǐ néng gěi wǒ nǐ de diànhuà ma?",
      "meaning": {
       "en": "Can you give me your phone number?",
       "fr": "Tu peux me donner ton numéro ?",
       "zh": "你能给我你的电话吗？"
      },
      "audioText": "你能给我你的电话吗？"
     },
     {
      "speaker": "大卫",
      "hanzi": "可以，请看一下，这是我的电话。",
      "pinyin": "Kěyǐ, qǐng kàn yíxià, zhè shì wǒ de diànhuà.",
      "meaning": {
       "en": "Sure, take a look, here's my number.",
       "fr": "Bien sûr, regarde, voici mon numéro.",
       "zh": "可以，请看一下，这是我的电话。"
      },
      "audioText": "可以，请看一下，这是我的电话。"
     },
     {
      "speaker": "小明",
      "hanzi": "谢谢！我们明天再见！",
      "pinyin": "Xièxie! Wǒmen míngtiān zàijiàn!",
      "meaning": {
       "en": "Thanks! See you again tomorrow!",
       "fr": "Merci ! On se revoit demain !",
       "zh": "谢谢！我们明天再见！"
      },
      "audioText": "谢谢！我们明天再见！"
     },
     {
      "speaker": "大卫",
      "hanzi": "好，再见！",
      "pinyin": "Hǎo, zàijiàn!",
      "meaning": {
       "en": "OK, goodbye!",
       "fr": "D'accord, au revoir !",
       "zh": "好，再见！"
      },
      "audioText": "好，再见！"
     }
    ]
   }
  ]
 },
 "lesson-hsk1-06": {
  "scenes": [
   {
    "title": {
     "en": "A new classmate",
     "fr": "Un nouveau camarade",
     "zh": "新同学"
    },
    "setting": {
     "en": "Mr Wang introduces David to the rest of the class.",
     "fr": "Le professeur Wang présente David au reste de la classe.",
     "zh": "王老师给同学们介绍大卫。"
    },
    "lines": [
     {
      "speaker": "王老师",
      "hanzi": "同学们，他是我们的新同学。",
      "pinyin": "Tóngxuémen, tā shì wǒmen de xīn tóngxué.",
      "meaning": {
       "en": "Everyone, he is our new classmate.",
       "fr": "Chers élèves, voici notre nouveau camarade.",
       "zh": "同学们，他是我们的新同学。"
      },
      "audioText": "同学们，他是我们的新同学。"
     },
     {
      "speaker": "同学们",
      "hanzi": "你好！",
      "pinyin": "Nǐ hǎo!",
      "meaning": {
       "en": "Hello!",
       "fr": "Bonjour !",
       "zh": "你好！"
      },
      "audioText": "你好！"
     },
     {
      "speaker": "王老师",
      "hanzi": "大卫，你认识他们吗？",
      "pinyin": "Dàwèi, nǐ rènshi tāmen ma?",
      "meaning": {
       "en": "David, do you know them?",
       "fr": "David, tu les connais ?",
       "zh": "大卫，你认识他们吗？"
      },
      "audioText": "大卫，你认识他们吗？"
     },
     {
      "speaker": "大卫",
      "hanzi": "我认识她，她叫安娜。",
      "pinyin": "Wǒ rènshi tā, tā jiào Ānnà.",
      "meaning": {
       "en": "I know her, her name is Anna.",
       "fr": "Je la connais, elle s'appelle Anna.",
       "zh": "我认识她，她叫安娜。"
      },
      "audioText": "我认识她，她叫安娜。"
     },
     {
      "speaker": "安娜",
      "hanzi": "对，我们是朋友。",
      "pinyin": "Duì, wǒmen shì péngyou.",
      "meaning": {
       "en": "Yes, we're friends.",
       "fr": "Oui, nous sommes amis.",
       "zh": "对，我们是朋友。"
      },
      "audioText": "对，我们是朋友。"
     }
    ]
   },
   {
    "title": {
     "en": "Who is he?",
     "fr": "Qui est-ce ?",
     "zh": "他是谁？"
    },
    "setting": {
     "en": "Anna sees David waving at a young man across the courtyard.",
     "fr": "Anna voit David faire signe à un jeune homme de l'autre côté de la cour.",
     "zh": "安娜看见大卫跟一个男生打招呼。"
    },
    "lines": [
     {
      "speaker": "安娜",
      "hanzi": "大卫，那个人是谁？",
      "pinyin": "Dàwèi, nàge rén shì shéi?",
      "meaning": {
       "en": "David, who is that?",
       "fr": "David, qui est-ce ?",
       "zh": "大卫，那个人是谁？"
      },
      "audioText": "大卫，那个人是谁？"
     },
     {
      "speaker": "大卫",
      "hanzi": "他是我的中国朋友，叫小明。",
      "pinyin": "Tā shì wǒ de Zhōngguó péngyou, jiào Xiǎomíng.",
      "meaning": {
       "en": "He's my Chinese friend, Xiaoming.",
       "fr": "C'est mon ami chinois, il s'appelle Xiaoming.",
       "zh": "他是我的中国朋友，叫小明。"
      },
      "audioText": "他是我的中国朋友，叫小明。"
     },
     {
      "speaker": "安娜",
      "hanzi": "他也是我们学校的学生吗？",
      "pinyin": "Tā yě shì wǒmen xuéxiào de xuéshēng ma?",
      "meaning": {
       "en": "Is he a student at our university too?",
       "fr": "Il est aussi étudiant dans notre université ?",
       "zh": "他也是我们学校的学生吗？"
      },
      "audioText": "他也是我们学校的学生吗？"
     },
     {
      "speaker": "大卫",
      "hanzi": "是，他是大学生。",
      "pinyin": "Shì, tā shì dàxuéshēng.",
      "meaning": {
       "en": "Yes, he's a university student.",
       "fr": "Oui, il est étudiant.",
       "zh": "是，他是大学生。"
      },
      "audioText": "是，他是大学生。"
     }
    ]
   },
   {
    "title": {
     "en": "Anna's cat",
     "fr": "Le chat d'Anna",
     "zh": "安娜的猫"
    },
    "setting": {
     "en": "Xiaoming looks at the photo on Anna's phone.",
     "fr": "Xiaoming regarde la photo sur le téléphone d'Anna.",
     "zh": "小明看安娜手机上的照片。"
    },
    "lines": [
     {
      "speaker": "小明",
      "hanzi": "安娜，这是你的猫吗？",
      "pinyin": "Ānnà, zhè shì nǐ de māo ma?",
      "meaning": {
       "en": "Anna, is this your cat?",
       "fr": "Anna, c'est ton chat ?",
       "zh": "安娜，这是你的猫吗？"
      },
      "audioText": "安娜，这是你的猫吗？"
     },
     {
      "speaker": "安娜",
      "hanzi": "是，它叫咪咪。",
      "pinyin": "Shì, tā jiào Mīmi.",
      "meaning": {
       "en": "Yes, she's called Mimi.",
       "fr": "Oui, elle s'appelle Mimi.",
       "zh": "是，它叫咪咪。"
      },
      "audioText": "是，它叫咪咪。"
     },
     {
      "speaker": "小明",
      "hanzi": "它真漂亮！她是谁？",
      "pinyin": "Tā zhēn piàoliang! Tā shì shéi?",
      "meaning": {
       "en": "She's so pretty! Who is she?",
       "fr": "Elle est trop belle ! Et elle, qui est-ce ?",
       "zh": "它真漂亮！她是谁？"
      },
      "audioText": "它真漂亮！她是谁？"
     },
     {
      "speaker": "安娜",
      "hanzi": "她是我的好朋友，她男朋友是中国人。",
      "pinyin": "Tā shì wǒ de hǎo péngyou, tā nánpéngyou shì Zhōngguó rén.",
      "meaning": {
       "en": "She's my good friend; her boyfriend is Chinese.",
       "fr": "C'est ma bonne amie ; son petit ami est chinois.",
       "zh": "她是我的好朋友，她男朋友是中国人。"
      },
      "audioText": "她是我的好朋友，她男朋友是中国人。"
     },
     {
      "speaker": "小明",
      "hanzi": "他们都在北京吗？",
      "pinyin": "Tāmen dōu zài Běijīng ma?",
      "meaning": {
       "en": "Are they both in Beijing?",
       "fr": "Ils sont tous les deux à Pékin ?",
       "zh": "他们都在北京吗？"
      },
      "audioText": "他们都在北京吗？"
     },
     {
      "speaker": "安娜",
      "hanzi": "对，他们都在北京。",
      "pinyin": "Duì, tāmen dōu zài Běijīng.",
      "meaning": {
       "en": "Yes, they're both in Beijing.",
       "fr": "Oui, ils sont tous les deux à Pékin.",
       "zh": "对，他们都在北京。"
      },
      "audioText": "对，他们都在北京。"
     }
    ]
   }
  ]
 },
 "lesson-hsk1-22": {
  "scenes": [
   {
    "title": {
     "en": "Do you have a Chinese book?",
     "fr": "Tu as un livre de chinois ?",
     "zh": "你有汉语书吗？"
    },
    "setting": {
     "en": "Anna needs a dictionary-style book for class.",
     "fr": "Anna a besoin d'un livre pour le cours.",
     "zh": "安娜上课要用汉语书。"
    },
    "lines": [
     {
      "speaker": "安娜",
      "hanzi": "小明，你有汉语书吗？",
      "pinyin": "Xiǎomíng, nǐ yǒu Hànyǔ shū ma?",
      "meaning": {
       "en": "Xiaoming, do you have a Chinese book?",
       "fr": "Xiaoming, tu as un livre de chinois ?",
       "zh": "小明，你有汉语书吗？"
      },
      "audioText": "小明，你有汉语书吗？"
     },
     {
      "speaker": "小明",
      "hanzi": "没有，我和大卫都没有。你呢？",
      "pinyin": "Méiyǒu, wǒ hé Dàwèi dōu méiyǒu. Nǐ ne?",
      "meaning": {
       "en": "No, neither David nor I have one. And you?",
       "fr": "Non, ni David ni moi. Et toi ?",
       "zh": "没有，我和大卫都没有。你呢？"
      },
      "audioText": "没有，我和大卫都没有。你呢？"
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
      "hanzi": "好啊！",
      "pinyin": "Hǎo a!",
      "meaning": {
       "en": "Sure!",
       "fr": "D'accord !",
       "zh": "好啊！"
      },
      "audioText": "好啊！"
     }
    ]
   },
   {
    "title": {
     "en": "The bookshop is closed",
     "fr": "La librairie est fermée",
     "zh": "书店还没开门"
    },
    "setting": {
     "en": "They arrive at the bookshop, but the door is shut.",
     "fr": "Ils arrivent à la librairie, mais la porte est fermée.",
     "zh": "他们到了书店，可是门还关着。"
    },
    "lines": [
     {
      "speaker": "小明",
      "hanzi": "书店还没开门。",
      "pinyin": "Shūdiàn hái méi kāi mén.",
      "meaning": {
       "en": "The bookshop isn't open yet.",
       "fr": "La librairie n'est pas encore ouverte.",
       "zh": "书店还没开门。"
      },
      "audioText": "书店还没开门。"
     },
     {
      "speaker": "安娜",
      "hanzi": "是吗？那我们去喝茶吧。",
      "pinyin": "Shì ma? Nà wǒmen qù hē chá ba.",
      "meaning": {
       "en": "Really? Then let's go and have some tea.",
       "fr": "Ah bon ? Alors allons boire un thé.",
       "zh": "是吗？那我们去喝茶吧。"
      },
      "audioText": "是吗？那我们去喝茶吧。"
     },
     {
      "speaker": "小明",
      "hanzi": "好，没事，我们下午再来。",
      "pinyin": "Hǎo, méishì, wǒmen xiàwǔ zài lái.",
      "meaning": {
       "en": "OK, no problem, we'll come back this afternoon.",
       "fr": "D'accord, pas grave, on reviendra cet après-midi.",
       "zh": "好，没事，我们下午再来。"
      },
      "audioText": "好，没事，我们下午再来。"
     }
    ]
   },
   {
    "title": {
     "en": "Whose book is it?",
     "fr": "À qui est ce livre ?",
     "zh": "这是谁的书？"
    },
    "setting": {
     "en": "Back in class, Mr Wang finds a book on a desk.",
     "fr": "De retour en classe, le professeur Wang trouve un livre sur une table.",
     "zh": "回到教室，王老师看见桌子上有一本书。"
    },
    "lines": [
     {
      "speaker": "王老师",
      "hanzi": "安娜，这是你的书吗？",
      "pinyin": "Ānnà, zhè shì nǐ de shū ma?",
      "meaning": {
       "en": "Anna, is this your book?",
       "fr": "Anna, c'est ton livre ?",
       "zh": "安娜，这是你的书吗？"
      },
      "audioText": "安娜，这是你的书吗？"
     },
     {
      "speaker": "安娜",
      "hanzi": "不是，是大卫的。",
      "pinyin": "Bú shì, shì Dàwèi de.",
      "meaning": {
       "en": "No, it's David's.",
       "fr": "Non, c'est celui de David.",
       "zh": "不是，是大卫的。"
      },
      "audioText": "不是，是大卫的。"
     },
     {
      "speaker": "王老师",
      "hanzi": "大卫呢？",
      "pinyin": "Dàwèi ne?",
      "meaning": {
       "en": "And where is David?",
       "fr": "Et David, où est-il ?",
       "zh": "大卫呢？"
      },
      "audioText": "大卫呢？"
     },
     {
      "speaker": "安娜",
      "hanzi": "他在那儿。",
      "pinyin": "Tā zài nàr.",
      "meaning": {
       "en": "He's over there.",
       "fr": "Il est là-bas.",
       "zh": "他在那儿。"
      },
      "audioText": "他在那儿。"
     },
     {
      "speaker": "大卫",
      "hanzi": "老师，那是我的书。谢谢您！",
      "pinyin": "Lǎoshī, nà shì wǒ de shū. Xièxie nín!",
      "meaning": {
       "en": "Teacher, that's my book. Thank you!",
       "fr": "Professeur, c'est mon livre. Merci !",
       "zh": "老师，那是我的书。谢谢您！"
      },
      "audioText": "老师，那是我的书。谢谢您！"
     }
    ]
   }
  ]
 },
 "lesson-hsk1-03": {
  "scenes": [
   {
    "title": {
     "en": "Where are you from?",
     "fr": "D'où viens-tu ?",
     "zh": "你是哪国人？"
    },
    "setting": {
     "en": "Xiaoming wants to know more about his new friends.",
     "fr": "Xiaoming veut en savoir plus sur ses nouveaux amis.",
     "zh": "小明想多了解他的新朋友。"
    },
    "lines": [
     {
      "speaker": "小明",
      "hanzi": "大卫，你是哪国人？",
      "pinyin": "Dàwèi, nǐ shì nǎ guó rén?",
      "meaning": {
       "en": "David, what's your nationality?",
       "fr": "David, de quelle nationalité es-tu ?",
       "zh": "大卫，你是哪国人？"
      },
      "audioText": "大卫，你是哪国人？"
     },
     {
      "speaker": "大卫",
      "hanzi": "我是法国人。你呢？",
      "pinyin": "Wǒ shì Fǎguó rén. Nǐ ne?",
      "meaning": {
       "en": "I'm French. And you?",
       "fr": "Je suis français. Et toi ?",
       "zh": "我是法国人。你呢？"
      },
      "audioText": "我是法国人。你呢？"
     },
     {
      "speaker": "小明",
      "hanzi": "我是中国人，我是北京人。",
      "pinyin": "Wǒ shì Zhōngguó rén, wǒ shì Běijīng rén.",
      "meaning": {
       "en": "I'm Chinese, from Beijing.",
       "fr": "Je suis chinois, de Pékin.",
       "zh": "我是中国人，我是北京人。"
      },
      "audioText": "我是中国人，我是北京人。"
     },
     {
      "speaker": "大卫",
      "hanzi": "安娜是英国人。",
      "pinyin": "Ānnà shì Yīngguó rén.",
      "meaning": {
       "en": "Anna is English.",
       "fr": "Anna est anglaise.",
       "zh": "安娜是英国人。"
      },
      "audioText": "安娜是英国人。"
     }
    ]
   },
   {
    "title": {
     "en": "A family photo",
     "fr": "Une photo de famille",
     "zh": "家人的照片"
    },
    "setting": {
     "en": "David shows Xiaoming a photo of his parents on his phone.",
     "fr": "David montre à Xiaoming une photo de ses parents sur son téléphone.",
     "zh": "大卫给小明看他爸爸妈妈的照片。"
    },
    "lines": [
     {
      "speaker": "小明",
      "hanzi": "这是你爸爸妈妈吗？",
      "pinyin": "Zhè shì nǐ bàba māma ma?",
      "meaning": {
       "en": "Are these your parents?",
       "fr": "Ce sont tes parents ?",
       "zh": "这是你爸爸妈妈吗？"
      },
      "audioText": "这是你爸爸妈妈吗？"
     },
     {
      "speaker": "大卫",
      "hanzi": "是。我爸爸是医生，我妈妈是老师。",
      "pinyin": "Shì. Wǒ bàba shì yīshēng, wǒ māma shì lǎoshī.",
      "meaning": {
       "en": "Yes. My dad is a doctor and my mum is a teacher.",
       "fr": "Oui. Mon père est médecin et ma mère est professeure.",
       "zh": "是。我爸爸是医生，我妈妈是老师。"
      },
      "audioText": "是。我爸爸是医生，我妈妈是老师。"
     },
     {
      "speaker": "小明",
      "hanzi": "你妈妈是汉语老师吗？",
      "pinyin": "Nǐ māma shì Hànyǔ lǎoshī ma?",
      "meaning": {
       "en": "Is your mum a Chinese teacher?",
       "fr": "Ta mère est professeure de chinois ?",
       "zh": "你妈妈是汉语老师吗？"
      },
      "audioText": "你妈妈是汉语老师吗？"
     },
     {
      "speaker": "大卫",
      "hanzi": "不是，她是法语老师。",
      "pinyin": "Bú shì, tā shì Fǎyǔ lǎoshī.",
      "meaning": {
       "en": "No, she teaches French.",
       "fr": "Non, elle enseigne le français.",
       "zh": "不是，她是法语老师。"
      },
      "audioText": "不是，她是法语老师。"
     }
    ]
   },
   {
    "title": {
     "en": "A call from home",
     "fr": "Un appel de la maison",
     "zh": "妈妈的电话"
    },
    "setting": {
     "en": "That evening, David's mother calls him from France.",
     "fr": "Le soir, la mère de David l'appelle de France.",
     "zh": "晚上，大卫的妈妈从法国给他打电话。"
    },
    "lines": [
     {
      "speaker": "大卫",
      "hanzi": "妈妈，你好！",
      "pinyin": "Māma, nǐ hǎo!",
      "meaning": {
       "en": "Hi, Mum!",
       "fr": "Bonjour, maman !",
       "zh": "妈妈，你好！"
      },
      "audioText": "妈妈，你好！"
     },
     {
      "speaker": "妈妈",
      "hanzi": "大卫，你在北京好吗？",
      "pinyin": "Dàwèi, nǐ zài Běijīng hǎo ma?",
      "meaning": {
       "en": "David, are you doing well in Beijing?",
       "fr": "David, tout va bien à Pékin ?",
       "zh": "大卫，你在北京好吗？"
      },
      "audioText": "大卫，你在北京好吗？"
     },
     {
      "speaker": "大卫",
      "hanzi": "很好！我有很多中国朋友。",
      "pinyin": "Hěn hǎo! Wǒ yǒu hěn duō Zhōngguó péngyou.",
      "meaning": {
       "en": "Very well! I have lots of Chinese friends.",
       "fr": "Très bien ! J'ai plein d'amis chinois.",
       "zh": "很好！我有很多中国朋友。"
      },
      "audioText": "很好！我有很多中国朋友。"
     },
     {
      "speaker": "妈妈",
      "hanzi": "太好了！",
      "pinyin": "Tài hǎo le!",
      "meaning": {
       "en": "That's great!",
       "fr": "C'est super !",
       "zh": "太好了！"
      },
      "audioText": "太好了！"
     }
    ]
   }
  ]
 },
 "lesson-hsk1-04": {
  "scenes": [
   {
    "title": {
     "en": "How many students?",
     "fr": "Combien d'élèves ?",
     "zh": "有多少学生？"
    },
    "setting": {
     "en": "Mr Wang checks who is in class today.",
     "fr": "Le professeur Wang vérifie qui est en classe aujourd'hui.",
     "zh": "王老师看看今天谁来上课了。"
    },
    "lines": [
     {
      "speaker": "王老师",
      "hanzi": "我们班有多少学生？",
      "pinyin": "Wǒmen bān yǒu duōshao xuéshēng?",
      "meaning": {
       "en": "How many students are in our class?",
       "fr": "Combien d'élèves y a-t-il dans notre classe ?",
       "zh": "我们班有多少学生？"
      },
      "audioText": "我们班有多少学生？"
     },
     {
      "speaker": "安娜",
      "hanzi": "一、二、三……十七，有十七个学生。",
      "pinyin": "Yī, èr, sān…… shíqī, yǒu shíqī ge xuéshēng.",
      "meaning": {
       "en": "One, two, three... seventeen. There are seventeen students.",
       "fr": "Un, deux, trois… dix-sept. Il y a dix-sept élèves.",
       "zh": "一、二、三……十七，有十七个学生。"
      },
      "audioText": "一、二、三……十七，有十七个学生。"
     },
     {
      "speaker": "王老师",
      "hanzi": "对，十七个学生，八个男同学，九个女同学。",
      "pinyin": "Duì, shíqī ge xuéshēng, bā ge nán tóngxué, jiǔ ge nǚ tóngxué.",
      "meaning": {
       "en": "Right, seventeen: eight boys and nine girls.",
       "fr": "Exact, dix-sept : huit garçons et neuf filles.",
       "zh": "对，十七个学生，八个男同学，九个女同学。"
      },
      "audioText": "对，十七个学生，八个男同学，九个女同学。"
     }
    ]
   },
   {
    "title": {
     "en": "Big and small universities",
     "fr": "Grandes et petites universités",
     "zh": "大学有多少学生"
    },
    "setting": {
     "en": "Anna and Xiaoming compare their universities.",
     "fr": "Anna et Xiaoming comparent leurs universités.",
     "zh": "安娜和小明说起学校。"
    },
    "lines": [
     {
      "speaker": "安娜",
      "hanzi": "小明，你们大学有多少学生？",
      "pinyin": "Xiǎomíng, nǐmen dàxué yǒu duōshao xuéshēng?",
      "meaning": {
       "en": "Xiaoming, how many students are at your university?",
       "fr": "Xiaoming, combien d'étudiants y a-t-il dans ton université ?",
       "zh": "小明，你们大学有多少学生？"
      },
      "audioText": "小明，你们大学有多少学生？"
     },
     {
      "speaker": "小明",
      "hanzi": "有八千多个，一半是女同学。",
      "pinyin": "Yǒu bāqiān duō ge, yíbàn shì nǚ tóngxué.",
      "meaning": {
       "en": "Over eight thousand, half of them women.",
       "fr": "Plus de huit mille, dont la moitié sont des filles.",
       "zh": "有八千多个，一半是女同学。"
      },
      "audioText": "有八千多个，一半是女同学。"
     },
     {
      "speaker": "安娜",
      "hanzi": "真多！我们班只有十七个人。",
      "pinyin": "Zhēn duō! Wǒmen bān zhǐyǒu shíqī ge rén.",
      "meaning": {
       "en": "That's a lot! Our class only has seventeen people.",
       "fr": "C'est beaucoup ! Notre classe n'a que dix-sept personnes.",
       "zh": "真多！我们班只有十七个人。"
      },
      "audioText": "真多！我们班只有十七个人。"
     }
    ]
   },
   {
    "title": {
     "en": "Room number",
     "fr": "Le numéro de chambre",
     "zh": "房间号"
    },
    "setting": {
     "en": "David tells Xiaoming where he lives in the student dormitory.",
     "fr": "David dit à Xiaoming où il habite dans la résidence étudiante.",
     "zh": "大卫告诉小明他住在哪个房间。"
    },
    "lines": [
     {
      "speaker": "小明",
      "hanzi": "大卫，你住几号房间？",
      "pinyin": "Dàwèi, nǐ zhù jǐ hào fángjiān?",
      "meaning": {
       "en": "David, what's your room number?",
       "fr": "David, tu habites dans quelle chambre ?",
       "zh": "大卫，你住几号房间？"
      },
      "audioText": "大卫，你住几号房间？"
     },
     {
      "speaker": "大卫",
      "hanzi": "我住三零八。",
      "pinyin": "Wǒ zhù sānlíngbā.",
      "meaning": {
       "en": "I live in 308.",
       "fr": "J'habite au 308.",
       "zh": "我住三零八。"
      },
      "audioText": "我住三零八。"
     },
     {
      "speaker": "小明",
      "hanzi": "三零八？安娜住几号？",
      "pinyin": "Sānlíngbā? Ānnà zhù jǐ hào?",
      "meaning": {
       "en": "308? And what's Anna's number?",
       "fr": "308 ? Et Anna, quel numéro ?",
       "zh": "三零八？安娜住几号？"
      },
      "audioText": "三零八？安娜住几号？"
     },
     {
      "speaker": "大卫",
      "hanzi": "她住两百二十六号。",
      "pinyin": "Tā zhù liǎngbǎi'èrshíliù hào.",
      "meaning": {
       "en": "She lives in number 226.",
       "fr": "Elle habite au 226.",
       "zh": "她住两百二十六号。"
      },
      "audioText": "她住两百二十六号。"
     }
    ]
   }
  ]
 },
 "lesson-hsk1-05": {
  "scenes": [
   {
    "title": {
     "en": "An invitation",
     "fr": "Une invitation",
     "zh": "来我家吧"
    },
    "setting": {
     "en": "Xiaoming invites David to his family's home.",
     "fr": "Xiaoming invite David chez ses parents.",
     "zh": "小明请大卫去他家。"
    },
    "lines": [
     {
      "speaker": "小明",
      "hanzi": "大卫，星期六来我家吧！",
      "pinyin": "Dàwèi, xīngqīliù lái wǒ jiā ba!",
      "meaning": {
       "en": "David, come to my place on Saturday!",
       "fr": "David, viens chez moi samedi !",
       "zh": "大卫，星期六来我家吧！"
      },
      "audioText": "大卫，星期六来我家吧！"
     },
     {
      "speaker": "大卫",
      "hanzi": "好啊！你家有几口人？",
      "pinyin": "Hǎo a! Nǐ jiā yǒu jǐ kǒu rén?",
      "meaning": {
       "en": "Great! How many people are in your family?",
       "fr": "Avec plaisir ! Vous êtes combien dans ta famille ?",
       "zh": "好啊！你家有几口人？"
      },
      "audioText": "好啊！你家有几口人？"
     },
     {
      "speaker": "小明",
      "hanzi": "五口人：爸爸、妈妈、姐姐、妹妹和我。",
      "pinyin": "Wǔ kǒu rén: bàba, māma, jiějie, mèimei hé wǒ.",
      "meaning": {
       "en": "Five: Dad, Mum, my older sister, my younger sister and me.",
       "fr": "Cinq : papa, maman, ma grande sœur, ma petite sœur et moi.",
       "zh": "五口人：爸爸、妈妈、姐姐、妹妹和我。"
      },
      "audioText": "五口人：爸爸、妈妈、姐姐、妹妹和我。"
     },
     {
      "speaker": "大卫",
      "hanzi": "你没有哥哥和弟弟吗？",
      "pinyin": "Nǐ méiyǒu gēge hé dìdi ma?",
      "meaning": {
       "en": "You don't have any brothers?",
       "fr": "Tu n'as pas de frères ?",
       "zh": "你没有哥哥和弟弟吗？"
      },
      "audioText": "你没有哥哥和弟弟吗？"
     },
     {
      "speaker": "小明",
      "hanzi": "没有。",
      "pinyin": "Méiyǒu.",
      "meaning": {
       "en": "No, I don't.",
       "fr": "Non.",
       "zh": "没有。"
      },
      "audioText": "没有。"
     }
    ]
   },
   {
    "title": {
     "en": "At Xiaoming's home",
     "fr": "Chez Xiaoming",
     "zh": "在小明家"
    },
    "setting": {
     "en": "Saturday. David meets Xiaoming's parents.",
     "fr": "Samedi. David rencontre les parents de Xiaoming.",
     "zh": "星期六，大卫来到小明家。"
    },
    "lines": [
     {
      "speaker": "小明",
      "hanzi": "爸爸、妈妈，这是我的朋友大卫。",
      "pinyin": "Bàba, māma, zhè shì wǒ de péngyou Dàwèi.",
      "meaning": {
       "en": "Dad, Mum, this is my friend David.",
       "fr": "Papa, maman, voici mon ami David.",
       "zh": "爸爸、妈妈，这是我的朋友大卫。"
      },
      "audioText": "爸爸、妈妈，这是我的朋友大卫。"
     },
     {
      "speaker": "大卫",
      "hanzi": "叔叔、阿姨，你们好！",
      "pinyin": "Shūshu, āyí, nǐmen hǎo!",
      "meaning": {
       "en": "Hello, uncle, auntie!",
       "fr": "Bonjour, monsieur, madame !",
       "zh": "叔叔、阿姨，你们好！"
      },
      "audioText": "叔叔、阿姨，你们好！"
     },
     {
      "speaker": "妈妈",
      "hanzi": "你好，大卫！请坐。",
      "pinyin": "Nǐ hǎo, Dàwèi! Qǐng zuò.",
      "meaning": {
       "en": "Hello, David! Please sit down.",
       "fr": "Bonjour, David ! Assieds-toi.",
       "zh": "你好，大卫！请坐。"
      },
      "audioText": "你好，大卫！请坐。"
     },
     {
      "speaker": "爸爸",
      "hanzi": "大家坐吧，我们一起吃饭。",
      "pinyin": "Dàjiā zuò ba, wǒmen yìqǐ chī fàn.",
      "meaning": {
       "en": "Everyone sit down, let's eat together.",
       "fr": "Asseyez-vous tous, on mange ensemble.",
       "zh": "大家坐吧，我们一起吃饭。"
      },
      "audioText": "大家坐吧，我们一起吃饭。"
     }
    ]
   },
   {
    "title": {
     "en": "A little girl",
     "fr": "Une petite fille",
     "zh": "小朋友"
    },
    "setting": {
     "en": "A little girl runs into the room. It's Xiaoming's niece.",
     "fr": "Une petite fille entre en courant. C'est la nièce de Xiaoming.",
     "zh": "一个小朋友跑进来，她是小明姐姐的女儿。"
    },
    "lines": [
     {
      "speaker": "大卫",
      "hanzi": "这个小朋友是谁？",
      "pinyin": "Zhège xiǎopéngyǒu shì shéi?",
      "meaning": {
       "en": "Who is this little one?",
       "fr": "Qui est cette petite ?",
       "zh": "这个小朋友是谁？"
      },
      "audioText": "这个小朋友是谁？"
     },
     {
      "speaker": "姐姐",
      "hanzi": "她是我女儿。",
      "pinyin": "Tā shì wǒ nǚ'ér.",
      "meaning": {
       "en": "She's my daughter.",
       "fr": "C'est ma fille.",
       "zh": "她是我女儿。"
      },
      "audioText": "她是我女儿。"
     },
     {
      "speaker": "大卫",
      "hanzi": "你有几个孩子？",
      "pinyin": "Nǐ yǒu jǐ ge háizi?",
      "meaning": {
       "en": "How many children do you have?",
       "fr": "Tu as combien d'enfants ?",
       "zh": "你有几个孩子？"
      },
      "audioText": "你有几个孩子？"
     },
     {
      "speaker": "姐姐",
      "hanzi": "两个，一个儿子，一个女儿。我先生和儿子在外边。",
      "pinyin": "Liǎng ge, yí ge érzi, yí ge nǚ'ér. Wǒ xiānsheng hé érzi zài wàibian.",
      "meaning": {
       "en": "Two, a son and a daughter. My husband and my son are outside.",
       "fr": "Deux, un fils et une fille. Mon mari et mon fils sont dehors.",
       "zh": "两个，一个儿子，一个女儿。我先生和儿子在外边。"
      },
      "audioText": "两个，一个儿子，一个女儿。我先生和儿子在外边。"
     }
    ]
   }
  ]
 },
 "lesson-hsk1-23": {
  "scenes": [
   {
    "title": {
     "en": "How old are you?",
     "fr": "Tu as quel âge ?",
     "zh": "你几岁了？"
    },
    "setting": {
     "en": "The little girl is curious about the foreign guest.",
     "fr": "La petite fille est curieuse de l'invité étranger.",
     "zh": "小朋友对大卫很好奇。"
    },
    "lines": [
     {
      "speaker": "大卫",
      "hanzi": "小朋友，你几岁了？",
      "pinyin": "Xiǎopéngyǒu, nǐ jǐ suì le?",
      "meaning": {
       "en": "How old are you, little one?",
       "fr": "Quel âge as-tu, ma petite ?",
       "zh": "小朋友，你几岁了？"
      },
      "audioText": "小朋友，你几岁了？"
     },
     {
      "speaker": "女儿",
      "hanzi": "我五岁。你呢？",
      "pinyin": "Wǒ wǔ suì. Nǐ ne?",
      "meaning": {
       "en": "I'm five. And you?",
       "fr": "J'ai cinq ans. Et toi ?",
       "zh": "我五岁。你呢？"
      },
      "audioText": "我五岁。你呢？"
     },
     {
      "speaker": "大卫",
      "hanzi": "我二十一岁。",
      "pinyin": "Wǒ èrshíyī suì.",
      "meaning": {
       "en": "I'm twenty-one.",
       "fr": "J'ai vingt et un ans.",
       "zh": "我二十一岁。"
      },
      "audioText": "我二十一岁。"
     },
     {
      "speaker": "女儿",
      "hanzi": "你会说汉语吗？",
      "pinyin": "Nǐ huì shuō Hànyǔ ma?",
      "meaning": {
       "en": "Can you speak Chinese?",
       "fr": "Tu parles chinois ?",
       "zh": "你会说汉语吗？"
      },
      "audioText": "你会说汉语吗？"
     },
     {
      "speaker": "大卫",
      "hanzi": "会说一点儿。",
      "pinyin": "Huì shuō yìdiǎnr.",
      "meaning": {
       "en": "A little.",
       "fr": "Un petit peu.",
       "zh": "会说一点儿。"
      },
      "audioText": "会说一点儿。"
     }
    ]
   },
   {
    "title": {
     "en": "A cup of tea",
     "fr": "Une tasse de thé",
     "zh": "喝一点儿茶"
    },
    "setting": {
     "en": "Xiaoming's mother brings tea and fruit.",
     "fr": "La mère de Xiaoming apporte du thé et des fruits.",
     "zh": "小明妈妈拿来茶和水果。"
    },
    "lines": [
     {
      "speaker": "妈妈",
      "hanzi": "大卫，你喝一点儿茶吧。",
      "pinyin": "Dàwèi, nǐ hē yìdiǎnr chá ba.",
      "meaning": {
       "en": "David, have a little tea.",
       "fr": "David, prends un peu de thé.",
       "zh": "大卫，你喝一点儿茶吧。"
      },
      "audioText": "大卫，你喝一点儿茶吧。"
     },
     {
      "speaker": "大卫",
      "hanzi": "谢谢阿姨。这个茶有点儿热。",
      "pinyin": "Xièxie āyí. Zhège chá yǒudiǎnr rè.",
      "meaning": {
       "en": "Thank you, auntie. This tea is a little hot.",
       "fr": "Merci, madame. Ce thé est un peu chaud.",
       "zh": "谢谢阿姨。这个茶有点儿热。"
      },
      "audioText": "谢谢阿姨。这个茶有点儿热。"
     },
     {
      "speaker": "妈妈",
      "hanzi": "那你先吃一些水果。",
      "pinyin": "Nà nǐ xiān chī yìxiē shuǐguǒ.",
      "meaning": {
       "en": "Then have some fruit first.",
       "fr": "Alors mange d'abord quelques fruits.",
       "zh": "那你先吃一些水果。"
      },
      "audioText": "那你先吃一些水果。"
     },
     {
      "speaker": "大卫",
      "hanzi": "好，谢谢！",
      "pinyin": "Hǎo, xièxie!",
      "meaning": {
       "en": "OK, thank you!",
       "fr": "D'accord, merci !",
       "zh": "好，谢谢！"
      },
      "audioText": "好，谢谢！"
     }
    ]
   },
   {
    "title": {
     "en": "First time in China",
     "fr": "La première fois en Chine",
     "zh": "第一次来中国"
    },
    "setting": {
     "en": "Xiaoming's father asks David about his life in China.",
     "fr": "Le père de Xiaoming interroge David sur sa vie en Chine.",
     "zh": "小明的爸爸问大卫在中国的生活。"
    },
    "lines": [
     {
      "speaker": "爸爸",
      "hanzi": "这是你第一次来中国吗？",
      "pinyin": "Zhè shì nǐ dì yī cì lái Zhōngguó ma?",
      "meaning": {
       "en": "Is this your first time in China?",
       "fr": "C'est la première fois que tu viens en Chine ?",
       "zh": "这是你第一次来中国吗？"
      },
      "audioText": "这是你第一次来中国吗？"
     },
     {
      "speaker": "大卫",
      "hanzi": "对，第一次。",
      "pinyin": "Duì, dì yī cì.",
      "meaning": {
       "en": "Yes, the first time.",
       "fr": "Oui, la première fois.",
       "zh": "对，第一次。"
      },
      "audioText": "对，第一次。"
     },
     {
      "speaker": "爸爸",
      "hanzi": "你觉得北京怎么样？",
      "pinyin": "Nǐ juéde Běijīng zěnmeyàng?",
      "meaning": {
       "en": "What do you think of Beijing?",
       "fr": "Comment trouves-tu Pékin ?",
       "zh": "你觉得北京怎么样？"
      },
      "audioText": "你觉得北京怎么样？"
     },
     {
      "speaker": "大卫",
      "hanzi": "很好！就是人有点儿多。",
      "pinyin": "Hěn hǎo! Jiù shì rén yǒudiǎnr duō.",
      "meaning": {
       "en": "Great! There are just a few too many people.",
       "fr": "Très bien ! Il y a juste un peu trop de monde.",
       "zh": "很好！就是人有点儿多。"
      },
      "audioText": "很好！就是人有点儿多。"
     }
    ]
   }
  ]
 },
 "lesson-hsk1-13": {
  "scenes": [
   {
    "title": {
     "en": "A question in class",
     "fr": "Une question en classe",
     "zh": "我有一个问题"
    },
    "setting": {
     "en": "In class, David doesn't recognise a character.",
     "fr": "En classe, David ne reconnaît pas un caractère.",
     "zh": "上课的时候，大卫有一个字不认识。"
    },
    "lines": [
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
     }
    ]
   },
   {
    "title": {
     "en": "Writing characters",
     "fr": "Écrire des caractères",
     "zh": "写汉字"
    },
    "setting": {
     "en": "In the evening, David does his homework in the library.",
     "fr": "Le soir, David fait ses devoirs à la bibliothèque.",
     "zh": "晚上，大卫在学校写汉字。"
    },
    "lines": [
     {
      "speaker": "安娜",
      "hanzi": "大卫，你在写什么？",
      "pinyin": "Dàwèi, nǐ zài xiě shénme?",
      "meaning": {
       "en": "David, what are you writing?",
       "fr": "David, qu'est-ce que tu écris ?",
       "zh": "大卫，你在写什么？"
      },
      "audioText": "大卫，你在写什么？"
     },
     {
      "speaker": "大卫",
      "hanzi": "我在写汉字。汉字真不好写！",
      "pinyin": "Wǒ zài xiě Hànzì. Hànzì zhēn bù hǎo xiě!",
      "meaning": {
       "en": "I'm writing characters. Characters are really hard to write!",
       "fr": "J'écris des caractères. Ce n'est vraiment pas facile !",
       "zh": "我在写汉字。汉字真不好写！"
      },
      "audioText": "我在写汉字。汉字真不好写！"
     },
     {
      "speaker": "安娜",
      "hanzi": "你写了多少个字？",
      "pinyin": "Nǐ xiě le duōshao ge zì?",
      "meaning": {
       "en": "How many characters have you written?",
       "fr": "Tu en as écrit combien ?",
       "zh": "你写了多少个字？"
      },
      "audioText": "你写了多少个字？"
     },
     {
      "speaker": "大卫",
      "hanzi": "十个。我们一起写吧！",
      "pinyin": "Shí ge. Wǒmen yìqǐ xiě ba!",
      "meaning": {
       "en": "Ten. Let's write together!",
       "fr": "Dix. Écrivons ensemble !",
       "zh": "十个。我们一起写吧！"
      },
      "audioText": "十个。我们一起写吧！"
     }
    ]
   },
   {
    "title": {
     "en": "Listen, speak, read, write",
     "fr": "Écouter, parler, lire, écrire",
     "zh": "多听多说"
    },
    "setting": {
     "en": "Anna asks Mr Wang how to improve.",
     "fr": "Anna demande au professeur Wang comment progresser.",
     "zh": "安娜问王老师怎么学好汉语。"
    },
    "lines": [
     {
      "speaker": "安娜",
      "hanzi": "老师，中国人说话太快了！",
      "pinyin": "Lǎoshī, Zhōngguó rén shuōhuà tài kuài le!",
      "meaning": {
       "en": "Teacher, Chinese people talk too fast!",
       "fr": "Professeur, les Chinois parlent trop vite !",
       "zh": "老师，中国人说话太快了！"
      },
      "audioText": "老师，中国人说话太快了！"
     },
     {
      "speaker": "王老师",
      "hanzi": "没关系，多听，多说，多读，多写。",
      "pinyin": "Méi guānxi, duō tīng, duō shuō, duō dú, duō xiě.",
      "meaning": {
       "en": "Don't worry: listen, speak, read and write a lot.",
       "fr": "Pas grave : écoute, parle, lis et écris beaucoup.",
       "zh": "没关系，多听，多说，多读，多写。"
      },
      "audioText": "没关系，多听，多说，多读，多写。"
     },
     {
      "speaker": "大卫",
      "hanzi": "我买了一本汉语书，每天读。",
      "pinyin": "Wǒ mǎi le yì běn Hànyǔ shū, měi tiān dú.",
      "meaning": {
       "en": "I bought a Chinese book; I read it every day.",
       "fr": "J'ai acheté un livre de chinois, je le lis tous les jours.",
       "zh": "我买了一本汉语书，每天读。"
      },
      "audioText": "我买了一本汉语书，每天读。"
     },
     {
      "speaker": "王老师",
      "hanzi": "很好！你们的中文会很好。",
      "pinyin": "Hěn hǎo! Nǐmen de Zhōngwén huì hěn hǎo.",
      "meaning": {
       "en": "Very good! Your Chinese will be very good.",
       "fr": "Très bien ! Votre chinois sera très bon.",
       "zh": "很好！你们的中文会很好。"
      },
      "audioText": "很好！你们的中文会很好。"
     }
    ]
   }
  ]
 },
 "lesson-hsk1-08": {
  "scenes": [
   {
    "title": {
     "en": "What's the date?",
     "fr": "Quelle date sommes-nous ?",
     "zh": "今天几号？"
    },
    "setting": {
     "en": "Anna checks the calendar on her phone.",
     "fr": "Anna regarde le calendrier sur son téléphone.",
     "zh": "安娜看手机上的日期。"
    },
    "lines": [
     {
      "speaker": "安娜",
      "hanzi": "今天几月几号？",
      "pinyin": "Jīntiān jǐ yuè jǐ hào?",
      "meaning": {
       "en": "What's the date today?",
       "fr": "On est le combien aujourd'hui ?",
       "zh": "今天几月几号？"
      },
      "audioText": "今天几月几号？"
     },
     {
      "speaker": "大卫",
      "hanzi": "九月十号，星期五。",
      "pinyin": "Jiǔ yuè shí hào, xīngqīwǔ.",
      "meaning": {
       "en": "The tenth of September, Friday.",
       "fr": "Le 10 septembre, vendredi.",
       "zh": "九月十号，星期五。"
      },
      "audioText": "九月十号，星期五。"
     },
     {
      "speaker": "安娜",
      "hanzi": "明天是小明的生日！",
      "pinyin": "Míngtiān shì Xiǎomíng de shēngrì!",
      "meaning": {
       "en": "Tomorrow is Xiaoming's birthday!",
       "fr": "Demain, c'est l'anniversaire de Xiaoming !",
       "zh": "明天是小明的生日！"
      },
      "audioText": "明天是小明的生日！"
     },
     {
      "speaker": "大卫",
      "hanzi": "真的吗？我们给他买什么？",
      "pinyin": "Zhēn de ma? Wǒmen gěi tā mǎi shénme?",
      "meaning": {
       "en": "Really? What shall we buy him?",
       "fr": "C'est vrai ? Qu'est-ce qu'on lui achète ?",
       "zh": "真的吗？我们给他买什么？"
      },
      "audioText": "真的吗？我们给他买什么？"
     }
    ]
   },
   {
    "title": {
     "en": "Are you free?",
     "fr": "Tu es libre ?",
     "zh": "你有时间吗？"
    },
    "setting": {
     "en": "They plan when to go shopping.",
     "fr": "Ils décident quand aller faire les courses.",
     "zh": "他们想什么时候去买东西。"
    },
    "lines": [
     {
      "speaker": "安娜",
      "hanzi": "你星期六有时间吗？",
      "pinyin": "Nǐ xīngqīliù yǒu shíjiān ma?",
      "meaning": {
       "en": "Are you free on Saturday?",
       "fr": "Tu es libre samedi ?",
       "zh": "你星期六有时间吗？"
      },
      "audioText": "你星期六有时间吗？"
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
      "hanzi": "好，我们星期六下午去商店。",
      "pinyin": "Hǎo, wǒmen xīngqīliù xiàwǔ qù shāngdiàn.",
      "meaning": {
       "en": "Good, let's go to the shops on Saturday afternoon.",
       "fr": "Bien, allons au magasin samedi après-midi.",
       "zh": "好，我们星期六下午去商店。"
      },
      "audioText": "好，我们星期六下午去商店。"
     }
    ]
   },
   {
    "title": {
     "en": "When did you come?",
     "fr": "Quand es-tu arrivé ?",
     "zh": "什么时候来的？"
    },
    "setting": {
     "en": "At the birthday party, Xiaoming chats with David.",
     "fr": "À la fête d'anniversaire, Xiaoming discute avec David.",
     "zh": "在生日会上，小明和大卫聊天。"
    },
    "lines": [
     {
      "speaker": "小明",
      "hanzi": "大卫，你是什么时候来北京的？",
      "pinyin": "Dàwèi, nǐ shì shénme shíhou lái Běijīng de?",
      "meaning": {
       "en": "David, when did you come to Beijing?",
       "fr": "David, quand es-tu arrivé à Pékin ?",
       "zh": "大卫，你是什么时候来北京的？"
      },
      "audioText": "大卫，你是什么时候来北京的？"
     },
     {
      "speaker": "大卫",
      "hanzi": "去年九月。",
      "pinyin": "Qùnián jiǔ yuè.",
      "meaning": {
       "en": "Last September.",
       "fr": "En septembre de l'année dernière.",
       "zh": "去年九月。"
      },
      "audioText": "去年九月。"
     },
     {
      "speaker": "小明",
      "hanzi": "你明年回国吗？",
      "pinyin": "Nǐ míngnián huí guó ma?",
      "meaning": {
       "en": "Are you going back to your country next year?",
       "fr": "Tu rentres dans ton pays l'année prochaine ?",
       "zh": "你明年回国吗？"
      },
      "audioText": "你明年回国吗？"
     },
     {
      "speaker": "大卫",
      "hanzi": "对，明年七月回家。",
      "pinyin": "Duì, míngnián qī yuè huí jiā.",
      "meaning": {
       "en": "Yes, I'm going home next July.",
       "fr": "Oui, je rentre chez moi en juillet prochain.",
       "zh": "对，明年七月回家。"
      },
      "audioText": "对，明年七月回家。"
     }
    ]
   }
  ]
 },
 "lesson-hsk1-10": {
  "scenes": [
   {
    "title": {
     "en": "Making dumplings",
     "fr": "Faire des raviolis",
     "zh": "包饺子"
    },
    "setting": {
     "en": "Sunday at Xiaoming's home. His mother is planning lunch.",
     "fr": "Dimanche chez Xiaoming. Sa mère prépare le déjeuner.",
     "zh": "星期天，在小明家，妈妈准备做午饭。"
    },
    "lines": [
     {
      "speaker": "妈妈",
      "hanzi": "小明，你们中午想吃什么？",
      "pinyin": "Xiǎomíng, nǐmen zhōngwǔ xiǎng chī shénme?",
      "meaning": {
       "en": "Xiaoming, what do you want for lunch?",
       "fr": "Xiaoming, qu'est-ce que vous voulez manger à midi ?",
       "zh": "小明，你们中午想吃什么？"
      },
      "audioText": "小明，你们中午想吃什么？"
     },
     {
      "speaker": "小明",
      "hanzi": "我想吃饺子，大卫也喜欢吃饺子。",
      "pinyin": "Wǒ xiǎng chī jiǎozi, Dàwèi yě xǐhuan chī jiǎozi.",
      "meaning": {
       "en": "I'd like dumplings, and David likes them too.",
       "fr": "J'aimerais des raviolis, et David aussi les aime.",
       "zh": "我想吃饺子，大卫也喜欢吃饺子。"
      },
      "audioText": "我想吃饺子，大卫也喜欢吃饺子。"
     },
     {
      "speaker": "大卫",
      "hanzi": "阿姨，我不会做饭，可以吗？",
      "pinyin": "Āyí, wǒ bú huì zuò fàn, kěyǐ ma?",
      "meaning": {
       "en": "Auntie, I can't cook, is that OK?",
       "fr": "Madame, je ne sais pas cuisiner, ça va ?",
       "zh": "阿姨，我不会做饭，可以吗？"
      },
      "audioText": "阿姨，我不会做饭，可以吗？"
     },
     {
      "speaker": "妈妈",
      "hanzi": "没关系，我们一起做！",
      "pinyin": "Méi guānxi, wǒmen yìqǐ zuò!",
      "meaning": {
       "en": "No problem, we'll make them together!",
       "fr": "Pas de problème, on va les faire ensemble !",
       "zh": "没关系，我们一起做！"
      },
      "audioText": "没关系，我们一起做！"
     }
    ]
   },
   {
    "title": {
     "en": "At the canteen",
     "fr": "À la cantine",
     "zh": "在学校饭店"
    },
    "setting": {
     "en": "On Monday, Anna and David have lunch at the university canteen.",
     "fr": "Lundi, Anna et David déjeunent à la cantine.",
     "zh": "星期一中午，安娜和大卫在学校吃饭。"
    },
    "lines": [
     {
      "speaker": "安娜",
      "hanzi": "大卫，你吃什么？",
      "pinyin": "Dàwèi, nǐ chī shénme?",
      "meaning": {
       "en": "David, what are you having?",
       "fr": "David, tu prends quoi ?",
       "zh": "大卫，你吃什么？"
      },
      "audioText": "大卫，你吃什么？"
     },
     {
      "speaker": "大卫",
      "hanzi": "我吃米饭和两个菜。你呢？",
      "pinyin": "Wǒ chī mǐfàn hé liǎng ge cài. Nǐ ne?",
      "meaning": {
       "en": "Rice and two dishes. And you?",
       "fr": "Du riz et deux plats. Et toi ?",
       "zh": "我吃米饭和两个菜。你呢？"
      },
      "audioText": "我吃米饭和两个菜。你呢？"
     },
     {
      "speaker": "安娜",
      "hanzi": "我想吃面条儿。",
      "pinyin": "Wǒ xiǎng chī miàntiáor.",
      "meaning": {
       "en": "I'd like noodles.",
       "fr": "J'ai envie de nouilles.",
       "zh": "我想吃面条儿。"
      },
      "audioText": "我想吃面条儿。"
     },
     {
      "speaker": "大卫",
      "hanzi": "你不吃米饭吗？",
      "pinyin": "Nǐ bù chī mǐfàn ma?",
      "meaning": {
       "en": "You don't eat rice?",
       "fr": "Tu ne manges pas de riz ?",
       "zh": "你不吃米饭吗？"
      },
      "audioText": "你不吃米饭吗？"
     },
     {
      "speaker": "安娜",
      "hanzi": "中午我不想吃米饭。",
      "pinyin": "Zhōngwǔ wǒ bù xiǎng chī mǐfàn.",
      "meaning": {
       "en": "I don't feel like rice at lunchtime.",
       "fr": "À midi, je n'ai pas envie de riz.",
       "zh": "中午我不想吃米饭。"
      },
      "audioText": "中午我不想吃米饭。"
     }
    ]
   },
   {
    "title": {
     "en": "Breakfast",
     "fr": "Le petit-déjeuner",
     "zh": "早饭吃什么"
    },
    "setting": {
     "en": "Xiaoming and David compare their breakfasts.",
     "fr": "Xiaoming et David comparent leurs petits-déjeuners.",
     "zh": "小明和大卫说早饭吃什么。"
    },
    "lines": [
     {
      "speaker": "小明",
      "hanzi": "大卫，你早上吃什么？",
      "pinyin": "Dàwèi, nǐ zǎoshang chī shénme?",
      "meaning": {
       "en": "David, what do you eat in the morning?",
       "fr": "David, tu manges quoi le matin ?",
       "zh": "大卫，你早上吃什么？"
      },
      "audioText": "大卫，你早上吃什么？"
     },
     {
      "speaker": "大卫",
      "hanzi": "面包和鸡蛋，喝牛奶。",
      "pinyin": "Miànbāo hé jīdàn, hē niúnǎi.",
      "meaning": {
       "en": "Bread and eggs, and I drink milk.",
       "fr": "Du pain et des œufs, et je bois du lait.",
       "zh": "面包和鸡蛋，喝牛奶。"
      },
      "audioText": "面包和鸡蛋，喝牛奶。"
     },
     {
      "speaker": "小明",
      "hanzi": "我吃包子。中国的包子很好吃！",
      "pinyin": "Wǒ chī bāozi. Zhōngguó de bāozi hěn hǎochī!",
      "meaning": {
       "en": "I eat steamed buns. Chinese buns are delicious!",
       "fr": "Moi, je mange des brioches. Les brioches chinoises sont délicieuses !",
       "zh": "我吃包子。中国的包子很好吃！"
      },
      "audioText": "我吃包子。中国的包子很好吃！"
     },
     {
      "speaker": "大卫",
      "hanzi": "明天我也吃包子！",
      "pinyin": "Míngtiān wǒ yě chī bāozi!",
      "meaning": {
       "en": "Tomorrow I'll have buns too!",
       "fr": "Demain, je mange des brioches aussi !",
       "zh": "明天我也吃包子！"
      },
      "audioText": "明天我也吃包子！"
     }
    ]
   }
  ]
 },
 "lesson-hsk1-11": {
  "scenes": [
   {
    "title": {
     "en": "A present for Xiaoming",
     "fr": "Un cadeau pour Xiaoming",
     "zh": "给小明买东西"
    },
    "setting": {
     "en": "Saturday afternoon. Anna and David look for a birthday present.",
     "fr": "Samedi après-midi. Anna et David cherchent un cadeau d'anniversaire.",
     "zh": "星期六下午，安娜和大卫给小明买生日东西。"
    },
    "lines": [
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
      "hanzi": "太贵了！",
      "pinyin": "Tài guì le!",
      "meaning": {
       "en": "That's too expensive!",
       "fr": "C'est trop cher !",
       "zh": "太贵了！"
      },
      "audioText": "太贵了！"
     },
     {
      "speaker": "店员",
      "hanzi": "那个杯子很便宜，十五块。",
      "pinyin": "Nàge bēizi hěn piányi, shíwǔ kuài.",
      "meaning": {
       "en": "That cup is cheap, fifteen yuan.",
       "fr": "Cette tasse-là n'est pas chère, quinze yuans.",
       "zh": "那个杯子很便宜，十五块。"
      },
      "audioText": "那个杯子很便宜，十五块。"
     },
     {
      "speaker": "安娜",
      "hanzi": "好，我买那个。",
      "pinyin": "Hǎo, wǒ mǎi nàge.",
      "meaning": {
       "en": "OK, I'll buy that one.",
       "fr": "D'accord, je prends celle-là.",
       "zh": "好，我买那个。"
      },
      "audioText": "好，我买那个。"
     }
    ]
   },
   {
    "title": {
     "en": "At the supermarket",
     "fr": "Au supermarché",
     "zh": "在超市"
    },
    "setting": {
     "en": "David also needs a few things for his room.",
     "fr": "David a aussi besoin de quelques affaires pour sa chambre.",
     "zh": "大卫也想买一些东西。"
    },
    "lines": [
     {
      "speaker": "大卫",
      "hanzi": "我们去超市买东西吧。",
      "pinyin": "Wǒmen qù chāoshì mǎi dōngxi ba.",
      "meaning": {
       "en": "Let's go and buy some things at the supermarket.",
       "fr": "Allons faire des courses au supermarché.",
       "zh": "我们去超市买东西吧。"
      },
      "audioText": "我们去超市买东西吧。"
     },
     {
      "speaker": "安娜",
      "hanzi": "你要买什么？",
      "pinyin": "Nǐ yào mǎi shénme?",
      "meaning": {
       "en": "What do you want to buy?",
       "fr": "Qu'est-ce que tu veux acheter ?",
       "zh": "你要买什么？"
      },
      "audioText": "你要买什么？"
     },
     {
      "speaker": "大卫",
      "hanzi": "水、牛奶和一些水果。",
      "pinyin": "Shuǐ, niúnǎi hé yìxiē shuǐguǒ.",
      "meaning": {
       "en": "Water, milk and some fruit.",
       "fr": "De l'eau, du lait et des fruits.",
       "zh": "水、牛奶和一些水果。"
      },
      "audioText": "水、牛奶和一些水果。"
     },
     {
      "speaker": "安娜",
      "hanzi": "超市的水果很便宜。",
      "pinyin": "Chāoshì de shuǐguǒ hěn piányi.",
      "meaning": {
       "en": "Fruit is cheap at the supermarket.",
       "fr": "Les fruits ne sont pas chers au supermarché.",
       "zh": "超市的水果很便宜。"
      },
      "audioText": "超市的水果很便宜。"
     }
    ]
   },
   {
    "title": {
     "en": "Paying",
     "fr": "Payer",
     "zh": "给钱"
    },
    "setting": {
     "en": "At the checkout.",
     "fr": "À la caisse.",
     "zh": "在超市买完东西。"
    },
    "lines": [
     {
      "speaker": "店员",
      "hanzi": "五十六块。",
      "pinyin": "Wǔshíliù kuài.",
      "meaning": {
       "en": "Fifty-six yuan.",
       "fr": "Cinquante-six yuans.",
       "zh": "五十六块。"
      },
      "audioText": "五十六块。"
     },
     {
      "speaker": "大卫",
      "hanzi": "给你一百块。",
      "pinyin": "Gěi nǐ yìbǎi kuài.",
      "meaning": {
       "en": "Here's a hundred.",
       "fr": "Voici cent yuans.",
       "zh": "给你一百块。"
      },
      "audioText": "给你一百块。"
     },
     {
      "speaker": "店员",
      "hanzi": "找你四十四块。",
      "pinyin": "Zhǎo nǐ sìshísì kuài.",
      "meaning": {
       "en": "Forty-four yuan change.",
       "fr": "Je vous rends quarante-quatre yuans.",
       "zh": "找你四十四块。"
      },
      "audioText": "找你四十四块。"
     },
     {
      "speaker": "大卫",
      "hanzi": "谢谢！",
      "pinyin": "Xièxie!",
      "meaning": {
       "en": "Thank you!",
       "fr": "Merci !",
       "zh": "谢谢！"
      },
      "audioText": "谢谢！"
     }
    ]
   }
  ]
 },
 "lesson-hsk1-07": {
  "scenes": [
   {
    "title": {
     "en": "In the bookshop",
     "fr": "À la librairie",
     "zh": "在书店里"
    },
    "setting": {
     "en": "David has never been to the university bookshop.",
     "fr": "David n'est jamais allé à la librairie de l'université.",
     "zh": "大卫第一次来学校的书店。"
    },
    "lines": [
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
       "en": "This is the university bookshop.",
       "fr": "Ici, c'est la librairie de l'université.",
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
       "en": "They're buying books. What book do you want?",
       "fr": "Ils achètent des livres. Tu veux quel livre ?",
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
      "hanzi": "这些都很好。",
      "pinyin": "Zhèxiē dōu hěn hǎo.",
      "meaning": {
       "en": "These are all good.",
       "fr": "Ceux-ci sont tous bien.",
       "zh": "这些都很好。"
      },
      "audioText": "这些都很好。"
     }
    ]
   },
   {
    "title": {
     "en": "This one or that one?",
     "fr": "Celui-ci ou celui-là ?",
     "zh": "你要哪个？"
    },
    "setting": {
     "en": "Anna is choosing a notebook.",
     "fr": "Anna choisit un cahier.",
     "zh": "安娜想买一个本子。"
    },
    "lines": [
     {
      "speaker": "店员",
      "hanzi": "你要哪个？",
      "pinyin": "Nǐ yào nǎge?",
      "meaning": {
       "en": "Which one do you want?",
       "fr": "Lequel voulez-vous ?",
       "zh": "你要哪个？"
      },
      "audioText": "你要哪个？"
     },
     {
      "speaker": "安娜",
      "hanzi": "我要那个大的。",
      "pinyin": "Wǒ yào nàge dà de.",
      "meaning": {
       "en": "I'd like that big one.",
       "fr": "Je voudrais le grand, là-bas.",
       "zh": "我要那个大的。"
      },
      "audioText": "我要那个大的。"
     },
     {
      "speaker": "店员",
      "hanzi": "这个吗？",
      "pinyin": "Zhège ma?",
      "meaning": {
       "en": "This one?",
       "fr": "Celui-ci ?",
       "zh": "这个吗？"
      },
      "audioText": "这个吗？"
     },
     {
      "speaker": "安娜",
      "hanzi": "不是这个，是那个。",
      "pinyin": "Bú shì zhège, shì nàge.",
      "meaning": {
       "en": "Not this one, that one.",
       "fr": "Pas celui-ci, celui-là.",
       "zh": "不是这个，是那个。"
      },
      "audioText": "不是这个，是那个。"
     }
    ]
   },
   {
    "title": {
     "en": "Where is it?",
     "fr": "Où est-ce ?",
     "zh": "在哪儿？"
    },
    "setting": {
     "en": "David looks for Mr Wang, who is somewhere in the shop.",
     "fr": "David cherche le professeur Wang, qui est quelque part dans la boutique.",
     "zh": "大卫在书店里找王老师。"
    },
    "lines": [
     {
      "speaker": "大卫",
      "hanzi": "请问，王老师在哪儿？",
      "pinyin": "Qǐngwèn, Wáng lǎoshī zài nǎr?",
      "meaning": {
       "en": "Excuse me, where is Mr Wang?",
       "fr": "Excusez-moi, où est le professeur Wang ?",
       "zh": "请问，王老师在哪儿？"
      },
      "audioText": "请问，王老师在哪儿？"
     },
     {
      "speaker": "店员",
      "hanzi": "哪个王老师？",
      "pinyin": "Nǎge Wáng lǎoshī?",
      "meaning": {
       "en": "Which Mr Wang?",
       "fr": "Quel professeur Wang ?",
       "zh": "哪个王老师？"
      },
      "audioText": "哪个王老师？"
     },
     {
      "speaker": "大卫",
      "hanzi": "汉语老师。",
      "pinyin": "Hànyǔ lǎoshī.",
      "meaning": {
       "en": "The Chinese teacher.",
       "fr": "Le professeur de chinois.",
       "zh": "汉语老师。"
      },
      "audioText": "汉语老师。"
     },
     {
      "speaker": "店员",
      "hanzi": "他在那儿，那边。",
      "pinyin": "Tā zài nàr, nàbiān.",
      "meaning": {
       "en": "He's there, over there.",
       "fr": "Il est là, là-bas.",
       "zh": "他在那儿，那边。"
      },
      "audioText": "他在那儿，那边。"
     }
    ]
   }
  ]
 },
 "lesson-hsk1-15": {
  "scenes": [
   {
    "title": {
     "en": "Going out",
     "fr": "Sortir",
     "zh": "你去哪儿？"
    },
    "setting": {
     "en": "After class, Anna sees Xiaoming leaving in a hurry.",
     "fr": "Après le cours, Anna voit Xiaoming partir en vitesse.",
     "zh": "下课后，安娜看见小明要出去。"
    },
    "lines": [
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
       "en": "To the bookshop. It's outside the university.",
       "fr": "À la librairie. Elle est à l'extérieur de l'université.",
       "zh": "我去书店。书店在学校外边。"
      },
      "audioText": "我去书店。书店在学校外边。"
     },
     {
      "speaker": "安娜",
      "hanzi": "在学校前边吗？",
      "pinyin": "Zài xuéxiào qiánbian ma?",
      "meaning": {
       "en": "In front of the university?",
       "fr": "Devant l'université ?",
       "zh": "在学校前边吗？"
      },
      "audioText": "在学校前边吗？"
     },
     {
      "speaker": "小明",
      "hanzi": "不在前边，在后边。你来吗？",
      "pinyin": "Bú zài qiánbian, zài hòubian. Nǐ lái ma?",
      "meaning": {
       "en": "Not in front, behind. Are you coming?",
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
       "fr": "Non, je rentre à la maison.",
       "zh": "我不去了，我要回家。"
      },
      "audioText": "我不去了，我要回家。"
     }
    ]
   },
   {
    "title": {
     "en": "Where is Mimi?",
     "fr": "Où est Mimi ?",
     "zh": "咪咪在哪儿？"
    },
    "setting": {
     "en": "At Anna's flat, the cat has disappeared.",
     "fr": "Chez Anna, la chatte a disparu.",
     "zh": "在安娜家，咪咪不见了。"
    },
    "lines": [
     {
      "speaker": "安娜",
      "hanzi": "咪咪在哪儿？",
      "pinyin": "Mīmi zài nǎr?",
      "meaning": {
       "en": "Where is Mimi?",
       "fr": "Où est Mimi ?",
       "zh": "咪咪在哪儿？"
      },
      "audioText": "咪咪在哪儿？"
     },
     {
      "speaker": "大卫",
      "hanzi": "在桌子下边吗？",
      "pinyin": "Zài zhuōzi xiàbian ma?",
      "meaning": {
       "en": "Under the table?",
       "fr": "Sous la table ?",
       "zh": "在桌子下边吗？"
      },
      "audioText": "在桌子下边吗？"
     },
     {
      "speaker": "安娜",
      "hanzi": "不在下边。",
      "pinyin": "Bú zài xiàbian.",
      "meaning": {
       "en": "Not under it.",
       "fr": "Pas en dessous.",
       "zh": "不在下边。"
      },
      "audioText": "不在下边。"
     },
     {
      "speaker": "大卫",
      "hanzi": "你看，它在外边！",
      "pinyin": "Nǐ kàn, tā zài wàibian!",
      "meaning": {
       "en": "Look, she's outside!",
       "fr": "Regarde, elle est dehors !",
       "zh": "你看，它在外边！"
      },
      "audioText": "你看，它在外边！"
     }
    ]
   },
   {
    "title": {
     "en": "Have you arrived?",
     "fr": "Tu es arrivé ?",
     "zh": "你到了吗？"
    },
    "setting": {
     "en": "David is meeting Xiaoming at the university gate.",
     "fr": "David retrouve Xiaoming à l'entrée de l'université.",
     "zh": "大卫和小明在学校见面。"
    },
    "lines": [
     {
      "speaker": "小明",
      "hanzi": "喂，大卫，你到了吗？",
      "pinyin": "Wèi, Dàwèi, nǐ dào le ma?",
      "meaning": {
       "en": "Hello, David, have you arrived?",
       "fr": "Allô, David, tu es arrivé ?",
       "zh": "喂，大卫，你到了吗？"
      },
      "audioText": "喂，大卫，你到了吗？"
     },
     {
      "speaker": "大卫",
      "hanzi": "到了，我在学校外边。",
      "pinyin": "Dào le, wǒ zài xuéxiào wàibian.",
      "meaning": {
       "en": "Yes, I'm outside the university.",
       "fr": "Oui, je suis devant l'université, à l'extérieur.",
       "zh": "到了，我在学校外边。"
      },
      "audioText": "到了，我在学校外边。"
     },
     {
      "speaker": "小明",
      "hanzi": "好，你来里边，我在书店前边。",
      "pinyin": "Hǎo, nǐ lái lǐbian, wǒ zài shūdiàn qiánbian.",
      "meaning": {
       "en": "OK, come inside, I'm in front of the bookshop.",
       "fr": "D'accord, entre, je suis devant la librairie.",
       "zh": "好，你来里边，我在书店前边。"
      },
      "audioText": "好，你来里边，我在书店前边。"
     },
     {
      "speaker": "大卫",
      "hanzi": "好，我来了！",
      "pinyin": "Hǎo, wǒ lái le!",
      "meaning": {
       "en": "OK, I'm coming!",
       "fr": "D'accord, j'arrive !",
       "zh": "好，我来了！"
      },
      "audioText": "好，我来了！"
     }
    ]
   }
  ]
 },
 "lesson-hsk1-20": {
  "scenes": [
   {
    "title": {
     "en": "What's wrong?",
     "fr": "Qu'est-ce qui ne va pas ?",
     "zh": "你怎么了？"
    },
    "setting": {
     "en": "David arrives in class looking pale.",
     "fr": "David arrive en cours, l'air pâle.",
     "zh": "大卫来上课，看起来不太好。"
    },
    "lines": [
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
       "en": "I'm ill and I feel a bit cold.",
       "fr": "Je suis malade, j'ai un peu froid.",
       "zh": "我生病了，有点儿冷。"
      },
      "audioText": "我生病了，有点儿冷。"
     },
     {
      "speaker": "安娜",
      "hanzi": "多穿一件衣服吧。我们去医院看病。",
      "pinyin": "Duō chuān yí jiàn yīfu ba. Wǒmen qù yīyuàn kànbìng.",
      "meaning": {
       "en": "Put on another layer. Let's go to the hospital to see a doctor.",
       "fr": "Mets un vêtement de plus. Allons à l'hôpital voir un médecin.",
       "zh": "多穿一件衣服吧。我们去医院看病。"
      },
      "audioText": "多穿一件衣服吧。我们去医院看病。"
     }
    ]
   },
   {
    "title": {
     "en": "At the hospital",
     "fr": "À l'hôpital",
     "zh": "在医院"
    },
    "setting": {
     "en": "Xiaoming's father works at this hospital.",
     "fr": "Le père de Xiaoming travaille dans cet hôpital.",
     "zh": "小明的爸爸在这个医院工作。"
    },
    "lines": [
     {
      "speaker": "医生",
      "hanzi": "大卫，是你啊！请坐，你病了几天了？",
      "pinyin": "Dàwèi, shì nǐ a! Qǐng zuò, nǐ bìng le jǐ tiān le?",
      "meaning": {
       "en": "David, it's you! Please sit down. How many days have you been ill?",
       "fr": "David, c'est toi ! Assieds-toi. Depuis combien de jours es-tu malade ?",
       "zh": "大卫，是你啊！请坐，你病了几天了？"
      },
      "audioText": "大卫，是你啊！请坐，你病了几天了？"
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
       "en": "It's nothing serious. Go home, drink lots of water and sleep a lot.",
       "fr": "Ce n'est pas grave. Rentre, bois beaucoup d'eau et dors beaucoup.",
       "zh": "不是大病。回家多喝水，多睡觉。"
      },
      "audioText": "不是大病。回家多喝水，多睡觉。"
     },
     {
      "speaker": "大卫",
      "hanzi": "谢谢叔叔！",
      "pinyin": "Xièxie shūshu!",
      "meaning": {
       "en": "Thank you, uncle!",
       "fr": "Merci, monsieur !",
       "zh": "谢谢叔叔！"
      },
      "audioText": "谢谢叔叔！"
     }
    ]
   },
   {
    "title": {
     "en": "Feeling better",
     "fr": "Ça va mieux",
     "zh": "好多了"
    },
    "setting": {
     "en": "Two days later, Xiaoming visits David in his room.",
     "fr": "Deux jours plus tard, Xiaoming rend visite à David dans sa chambre.",
     "zh": "两天以后，小明来看大卫。"
    },
    "lines": [
     {
      "speaker": "小明",
      "hanzi": "大卫，你好一点儿了吗？",
      "pinyin": "Dàwèi, nǐ hǎo yìdiǎnr le ma?",
      "meaning": {
       "en": "David, are you a bit better?",
       "fr": "David, ça va un peu mieux ?",
       "zh": "大卫，你好一点儿了吗？"
      },
      "audioText": "大卫，你好一点儿了吗？"
     },
     {
      "speaker": "大卫",
      "hanzi": "好多了。你看，我穿了很多衣服。",
      "pinyin": "Hǎo duō le. Nǐ kàn, wǒ chuān le hěn duō yīfu.",
      "meaning": {
       "en": "Much better. Look, I'm wearing lots of clothes.",
       "fr": "Beaucoup mieux. Regarde, je porte plein de vêtements.",
       "zh": "好多了。你看，我穿了很多衣服。"
      },
      "audioText": "好多了。你看，我穿了很多衣服。"
     },
     {
      "speaker": "小明",
      "hanzi": "我给你买了水果，在桌子上。",
      "pinyin": "Wǒ gěi nǐ mǎi le shuǐguǒ, zài zhuōzi shang.",
      "meaning": {
       "en": "I bought you some fruit; it's on the table.",
       "fr": "Je t'ai acheté des fruits, ils sont sur la table.",
       "zh": "我给你买了水果，在桌子上。"
      },
      "audioText": "我给你买了水果，在桌子上。"
     },
     {
      "speaker": "大卫",
      "hanzi": "太谢谢你了！",
      "pinyin": "Tài xièxie nǐ le!",
      "meaning": {
       "en": "Thank you so much!",
       "fr": "Merci beaucoup !",
       "zh": "太谢谢你了！"
      },
      "audioText": "太谢谢你了！"
     }
    ]
   }
  ]
 },
 "lesson-hsk1-02": {
  "scenes": [
   {
    "title": {
     "en": "What time is it?",
     "fr": "Quelle heure est-il ?",
     "zh": "现在几点？"
    },
    "setting": {
     "en": "David is running late in the morning.",
     "fr": "Le matin, David est en retard.",
     "zh": "早上，大卫起床晚了。"
    },
    "lines": [
     {
      "speaker": "大卫",
      "hanzi": "小明，现在几点？",
      "pinyin": "Xiǎomíng, xiànzài jǐ diǎn?",
      "meaning": {
       "en": "Xiaoming, what time is it?",
       "fr": "Xiaoming, quelle heure est-il ?",
       "zh": "小明，现在几点？"
      },
      "audioText": "小明，现在几点？"
     },
     {
      "speaker": "小明",
      "hanzi": "现在九点十分。",
      "pinyin": "Xiànzài jiǔ diǎn shí fēn.",
      "meaning": {
       "en": "It's ten past nine.",
       "fr": "Il est neuf heures dix.",
       "zh": "现在九点十分。"
      },
      "audioText": "现在九点十分。"
     },
     {
      "speaker": "大卫",
      "hanzi": "我们九点半上课，走吧！",
      "pinyin": "Wǒmen jiǔ diǎn bàn shàngkè, zǒu ba!",
      "meaning": {
       "en": "Our class is at half past nine, let's go!",
       "fr": "Notre cours est à neuf heures et demie, allons-y !",
       "zh": "我们九点半上课，走吧！"
      },
      "audioText": "我们九点半上课，走吧！"
     }
    ]
   },
   {
    "title": {
     "en": "Too late!",
     "fr": "Trop tard !",
     "zh": "太晚了！"
    },
    "setting": {
     "en": "Mr Wang notices David looks tired.",
     "fr": "Le professeur Wang remarque que David a l'air fatigué.",
     "zh": "王老师看大卫很累。"
    },
    "lines": [
     {
      "speaker": "王老师",
      "hanzi": "大卫，你昨天几点睡觉？",
      "pinyin": "Dàwèi, nǐ zuótiān jǐ diǎn shuìjiào?",
      "meaning": {
       "en": "David, what time did you go to bed yesterday?",
       "fr": "David, à quelle heure t'es-tu couché hier ?",
       "zh": "大卫，你昨天几点睡觉？"
      },
      "audioText": "大卫，你昨天几点睡觉？"
     },
     {
      "speaker": "大卫",
      "hanzi": "十二点。",
      "pinyin": "Shí'èr diǎn.",
      "meaning": {
       "en": "At twelve.",
       "fr": "À minuit.",
       "zh": "十二点。"
      },
      "audioText": "十二点。"
     },
     {
      "speaker": "王老师",
      "hanzi": "太晚了！今天早一点儿睡觉吧。",
      "pinyin": "Tài wǎn le! Jīntiān zǎo yìdiǎnr shuìjiào ba.",
      "meaning": {
       "en": "That's too late! Go to bed a bit earlier today.",
       "fr": "C'est trop tard ! Couche-toi un peu plus tôt aujourd'hui.",
       "zh": "太晚了！今天早一点儿睡觉吧。"
      },
      "audioText": "太晚了！今天早一点儿睡觉吧。"
     }
    ]
   },
   {
    "title": {
     "en": "Tomorrow's film",
     "fr": "Le film de demain",
     "zh": "明天的电影"
    },
    "setting": {
     "en": "Anna wants to go to the cinema with Xiaoming.",
     "fr": "Anna veut aller au cinéma avec Xiaoming.",
     "zh": "安娜想和小明去看电影。"
    },
    "lines": [
     {
      "speaker": "安娜",
      "hanzi": "明天的电影是几点的？",
      "pinyin": "Míngtiān de diànyǐng shì jǐ diǎn de?",
      "meaning": {
       "en": "What time is tomorrow's film?",
       "fr": "Le film de demain est à quelle heure ?",
       "zh": "明天的电影是几点的？"
      },
      "audioText": "明天的电影是几点的？"
     },
     {
      "speaker": "小明",
      "hanzi": "晚上七点二十。",
      "pinyin": "Wǎnshang qī diǎn èrshí.",
      "meaning": {
       "en": "Seven twenty in the evening.",
       "fr": "À dix-neuf heures vingt.",
       "zh": "晚上七点二十。"
      },
      "audioText": "晚上七点二十。"
     },
     {
      "speaker": "安娜",
      "hanzi": "我们六点半在学校见吧。",
      "pinyin": "Wǒmen liù diǎn bàn zài xuéxiào jiàn ba.",
      "meaning": {
       "en": "Let's meet at the university at half past six.",
       "fr": "Retrouvons-nous à l'université à six heures et demie.",
       "zh": "我们六点半在学校见吧。"
      },
      "audioText": "我们六点半在学校见吧。"
     },
     {
      "speaker": "小明",
      "hanzi": "好，明天见！",
      "pinyin": "Hǎo, míngtiān jiàn!",
      "meaning": {
       "en": "OK, see you tomorrow!",
       "fr": "D'accord, à demain !",
       "zh": "好，明天见！"
      },
      "audioText": "好，明天见！"
     }
    ]
   }
  ]
 },
 "lesson-hsk1-09": {
  "scenes": [
   {
    "title": {
     "en": "An early bird",
     "fr": "Une lève-tôt",
     "zh": "起得很早"
    },
    "setting": {
     "en": "Xiaoming is surprised by Anna's schedule.",
     "fr": "Xiaoming est surpris par l'emploi du temps d'Anna.",
     "zh": "小明问安娜一天做什么。"
    },
    "lines": [
     {
      "speaker": "小明",
      "hanzi": "安娜，你早上几点起床？",
      "pinyin": "Ānnà, nǐ zǎoshang jǐ diǎn qǐchuáng?",
      "meaning": {
       "en": "Anna, what time do you get up?",
       "fr": "Anna, à quelle heure te lèves-tu ?",
       "zh": "安娜，你早上几点起床？"
      },
      "audioText": "安娜，你早上几点起床？"
     },
     {
      "speaker": "安娜",
      "hanzi": "我六点半起床，七点吃早饭。",
      "pinyin": "Wǒ liù diǎn bàn qǐchuáng, qī diǎn chī zǎofàn.",
      "meaning": {
       "en": "I get up at half past six and have breakfast at seven.",
       "fr": "Je me lève à six heures et demie et je prends mon petit-déjeuner à sept heures.",
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
      "hanzi": "上午上课，中午在学校吃午饭。",
      "pinyin": "Shàngwǔ shàngkè, zhōngwǔ zài xuéxiào chī wǔfàn.",
      "meaning": {
       "en": "Classes in the morning, and lunch at the university at noon.",
       "fr": "Cours le matin, et déjeuner à l'université à midi.",
       "zh": "上午上课，中午在学校吃午饭。"
      },
      "audioText": "上午上课，中午在学校吃午饭。"
     }
    ]
   },
   {
    "title": {
     "en": "Afternoon and evening",
     "fr": "L'après-midi et le soir",
     "zh": "下午和晚上"
    },
    "setting": {
     "en": "Anna goes on describing her day.",
     "fr": "Anna continue de raconter sa journée.",
     "zh": "安娜说她下午和晚上做什么。"
    },
    "lines": [
     {
      "speaker": "小明",
      "hanzi": "下午呢？",
      "pinyin": "Xiàwǔ ne?",
      "meaning": {
       "en": "And in the afternoon?",
       "fr": "Et l'après-midi ?",
       "zh": "下午呢？"
      },
      "audioText": "下午呢？"
     },
     {
      "speaker": "安娜",
      "hanzi": "下午去书店看书，晚上七点做晚饭。",
      "pinyin": "Xiàwǔ qù shūdiàn kàn shū, wǎnshang qī diǎn zuò wǎnfàn.",
      "meaning": {
       "en": "I read at the bookshop in the afternoon and cook dinner at seven.",
       "fr": "L'après-midi je lis à la librairie, et le soir je prépare le dîner à sept heures.",
       "zh": "下午去书店看书，晚上七点做晚饭。"
      },
      "audioText": "下午去书店看书，晚上七点做晚饭。"
     },
     {
      "speaker": "小明",
      "hanzi": "你几点睡觉？",
      "pinyin": "Nǐ jǐ diǎn shuìjiào?",
      "meaning": {
       "en": "What time do you go to bed?",
       "fr": "À quelle heure te couches-tu ?",
       "zh": "你几点睡觉？"
      },
      "audioText": "你几点睡觉？"
     },
     {
      "speaker": "安娜",
      "hanzi": "十一点睡觉。白天太忙了！",
      "pinyin": "Shíyī diǎn shuìjiào. Báitiān tài máng le!",
      "meaning": {
       "en": "At eleven. The days are so busy!",
       "fr": "À onze heures. Les journées sont si chargées !",
       "zh": "十一点睡觉。白天太忙了！"
      },
      "audioText": "十一点睡觉。白天太忙了！"
     }
    ]
   },
   {
    "title": {
     "en": "David's lazy Sunday",
     "fr": "Le dimanche tranquille de David",
     "zh": "大卫的星期天"
    },
    "setting": {
     "en": "David's Sunday is very different.",
     "fr": "Le dimanche de David est très différent.",
     "zh": "大卫的星期天很不一样。"
    },
    "lines": [
     {
      "speaker": "安娜",
      "hanzi": "大卫，你星期天几点起床？",
      "pinyin": "Dàwèi, nǐ xīngqītiān jǐ diǎn qǐchuáng?",
      "meaning": {
       "en": "David, what time do you get up on Sundays?",
       "fr": "David, à quelle heure te lèves-tu le dimanche ?",
       "zh": "大卫，你星期天几点起床？"
      },
      "audioText": "大卫，你星期天几点起床？"
     },
     {
      "speaker": "大卫",
      "hanzi": "十点。我早上不吃早饭。",
      "pinyin": "Shí diǎn. Wǒ zǎoshang bù chī zǎofàn.",
      "meaning": {
       "en": "At ten. I don't have breakfast.",
       "fr": "À dix heures. Je ne prends pas de petit-déjeuner.",
       "zh": "十点。我早上不吃早饭。"
      },
      "audioText": "十点。我早上不吃早饭。"
     },
     {
      "speaker": "安娜",
      "hanzi": "那你中午吃什么？",
      "pinyin": "Nà nǐ zhōngwǔ chī shénme?",
      "meaning": {
       "en": "Then what do you have at noon?",
       "fr": "Alors qu'est-ce que tu manges à midi ?",
       "zh": "那你中午吃什么？"
      },
      "audioText": "那你中午吃什么？"
     },
     {
      "speaker": "大卫",
      "hanzi": "中午吃很多！",
      "pinyin": "Zhōngwǔ chī hěn duō!",
      "meaning": {
       "en": "I eat a lot at noon!",
       "fr": "À midi, je mange beaucoup !",
       "zh": "中午吃很多！"
      },
      "audioText": "中午吃很多！"
     }
    ]
   }
  ]
 },
 "lesson-hsk1-17": {
  "scenes": [
   {
    "title": {
     "en": "It's snowing!",
     "fr": "Il neige !",
     "zh": "下雪了！"
    },
    "setting": {
     "en": "Anna looks out of the window in the morning.",
     "fr": "Le matin, Anna regarde par la fenêtre.",
     "zh": "早上，安娜看外边。"
    },
    "lines": [
     {
      "speaker": "安娜",
      "hanzi": "小明，今天天气怎么样？",
      "pinyin": "Xiǎomíng, jīntiān tiānqì zěnmeyàng?",
      "meaning": {
       "en": "Xiaoming, what's the weather like today?",
       "fr": "Xiaoming, quel temps fait-il aujourd'hui ?",
       "zh": "小明，今天天气怎么样？"
      },
      "audioText": "小明，今天天气怎么样？"
     },
     {
      "speaker": "小明",
      "hanzi": "非常冷，外边在下雪。",
      "pinyin": "Fēicháng lěng, wàibian zài xià xuě.",
      "meaning": {
       "en": "Very cold, it's snowing outside.",
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
      "hanzi": "我不喜欢冷天。",
      "pinyin": "Wǒ bù xǐhuan lěng tiān.",
      "meaning": {
       "en": "I don't like cold days.",
       "fr": "Moi, je n'aime pas les jours froids.",
       "zh": "我不喜欢冷天。"
      },
      "audioText": "我不喜欢冷天。"
     }
    ]
   },
   {
    "title": {
     "en": "Tomorrow's weather",
     "fr": "Le temps de demain",
     "zh": "明天的天气"
    },
    "setting": {
     "en": "David reads the weather on his phone.",
     "fr": "David regarde la météo sur son téléphone.",
     "zh": "大卫看手机上的天气。"
    },
    "lines": [
     {
      "speaker": "小明",
      "hanzi": "大卫，明天下雨吗？",
      "pinyin": "Dàwèi, míngtiān xià yǔ ma?",
      "meaning": {
       "en": "David, will it rain tomorrow?",
       "fr": "David, il va pleuvoir demain ?",
       "zh": "大卫，明天下雨吗？"
      },
      "audioText": "大卫，明天下雨吗？"
     },
     {
      "speaker": "大卫",
      "hanzi": "不下雨，也不冷。",
      "pinyin": "Bú xià yǔ, yě bù lěng.",
      "meaning": {
       "en": "No rain, and it won't be cold.",
       "fr": "Pas de pluie, et il ne fera pas froid.",
       "zh": "不下雨，也不冷。"
      },
      "audioText": "不下雨，也不冷。"
     },
     {
      "speaker": "小明",
      "hanzi": "那太好了，明天我们去玩儿吧！",
      "pinyin": "Nà tài hǎo le, míngtiān wǒmen qù wánr ba!",
      "meaning": {
       "en": "Great, let's go out and have fun tomorrow!",
       "fr": "Super, allons nous amuser demain !",
       "zh": "那太好了，明天我们去玩儿吧！"
      },
      "audioText": "那太好了，明天我们去玩儿吧！"
     }
    ]
   },
   {
    "title": {
     "en": "Too hot!",
     "fr": "Trop chaud !",
     "zh": "太热了！"
    },
    "setting": {
     "en": "Months later, in July. The three friends are melting.",
     "fr": "Des mois plus tard, en juillet. Les trois amis fondent de chaleur.",
     "zh": "几个月以后，七月，天气很热。"
    },
    "lines": [
     {
      "speaker": "大卫",
      "hanzi": "今天太热了！",
      "pinyin": "Jīntiān tài rè le!",
      "meaning": {
       "en": "It's so hot today!",
       "fr": "Il fait trop chaud aujourd'hui !",
       "zh": "今天太热了！"
      },
      "audioText": "今天太热了！"
     },
     {
      "speaker": "安娜",
      "hanzi": "是啊，我们喝一点儿水吧。",
      "pinyin": "Shì a, wǒmen hē yìdiǎnr shuǐ ba.",
      "meaning": {
       "en": "Yes, let's drink some water.",
       "fr": "Oui, buvons un peu d'eau.",
       "zh": "是啊，我们喝一点儿水吧。"
      },
      "audioText": "是啊，我们喝一点儿水吧。"
     },
     {
      "speaker": "小明",
      "hanzi": "北京的夏天非常热。",
      "pinyin": "Běijīng de xiàtiān fēicháng rè.",
      "meaning": {
       "en": "Summers in Beijing are very hot.",
       "fr": "Les étés à Pékin sont très chauds.",
       "zh": "北京的夏天非常热。"
      },
      "audioText": "北京的夏天非常热。"
     },
     {
      "speaker": "大卫",
      "hanzi": "我觉得冬天很好！",
      "pinyin": "Wǒ juéde dōngtiān hěn hǎo!",
      "meaning": {
       "en": "I think winter is nice!",
       "fr": "Moi, je trouve l'hiver bien !",
       "zh": "我觉得冬天很好！"
      },
      "audioText": "我觉得冬天很好！"
     }
    ]
   }
  ]
 },
 "lesson-hsk1-14": {
  "scenes": [
   {
    "title": {
     "en": "On the phone with his sister",
     "fr": "Au téléphone avec sa sœur",
     "zh": "给姐姐打电话"
    },
    "setting": {
     "en": "Xiaoming calls his older sister at work.",
     "fr": "Xiaoming appelle sa grande sœur au travail.",
     "zh": "小明给姐姐打电话。"
    },
    "lines": [
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
     }
    ]
   },
   {
    "title": {
     "en": "At the office",
     "fr": "Au bureau",
     "zh": "在公司"
    },
    "setting": {
     "en": "The next morning, Xiaoming and David visit her office.",
     "fr": "Le lendemain matin, Xiaoming et David passent à son bureau.",
     "zh": "第二天上午，小明和大卫来到姐姐的公司。"
    },
    "lines": [
     {
      "speaker": "姐姐",
      "hanzi": "小明，大卫，你们来了！",
      "pinyin": "Xiǎomíng, Dàwèi, nǐmen lái le!",
      "meaning": {
       "en": "Xiaoming, David, you're here!",
       "fr": "Xiaoming, David, vous êtes venus !",
       "zh": "小明，大卫，你们来了！"
      },
      "audioText": "小明，大卫，你们来了！"
     },
     {
      "speaker": "大卫",
      "hanzi": "你们公司真大！",
      "pinyin": "Nǐmen gōngsī zhēn dà!",
      "meaning": {
       "en": "Your company is really big!",
       "fr": "Ton entreprise est vraiment grande !",
       "zh": "你们公司真大！"
      },
      "audioText": "你们公司真大！"
     },
     {
      "speaker": "姐姐",
      "hanzi": "是啊，有三百多个人在这儿工作。",
      "pinyin": "Shì a, yǒu sānbǎi duō ge rén zài zhèr gōngzuò.",
      "meaning": {
       "en": "Yes, more than three hundred people work here.",
       "fr": "Oui, plus de trois cents personnes travaillent ici.",
       "zh": "是啊，有三百多个人在这儿工作。"
      },
      "audioText": "是啊，有三百多个人在这儿工作。"
     },
     {
      "speaker": "小明",
      "hanzi": "姐姐，你住在哪儿？",
      "pinyin": "Jiějie, nǐ zhù zài nǎr?",
      "meaning": {
       "en": "Sis, where do you live?",
       "fr": "Grande sœur, tu habites où ?",
       "zh": "姐姐，你住在哪儿？"
      },
      "audioText": "姐姐，你住在哪儿？"
     },
     {
      "speaker": "姐姐",
      "hanzi": "我住在公司那边。",
      "pinyin": "Wǒ zhù zài gōngsī nàbiān.",
      "meaning": {
       "en": "I live over there, near the company.",
       "fr": "J'habite là-bas, près de l'entreprise.",
       "zh": "我住在公司那边。"
      },
      "audioText": "我住在公司那边。"
     }
    ]
   },
   {
    "title": {
     "en": "Dad's job",
     "fr": "Le travail de papa",
     "zh": "爸爸的工作"
    },
    "setting": {
     "en": "On the way back, David asks about Xiaoming's father.",
     "fr": "Sur le chemin du retour, David pose des questions sur le père de Xiaoming.",
     "zh": "回去的时候，大卫问小明爸爸的工作。"
    },
    "lines": [
     {
      "speaker": "大卫",
      "hanzi": "你爸爸也很忙吗？",
      "pinyin": "Nǐ bàba yě hěn máng ma?",
      "meaning": {
       "en": "Is your dad busy too?",
       "fr": "Ton père aussi est très occupé ?",
       "zh": "你爸爸也很忙吗？"
      },
      "audioText": "你爸爸也很忙吗？"
     },
     {
      "speaker": "小明",
      "hanzi": "很忙。他是医生，每天在医院工作。",
      "pinyin": "Hěn máng. Tā shì yīshēng, měi tiān zài yīyuàn gōngzuò.",
      "meaning": {
       "en": "Very. He's a doctor; he works at the hospital every day.",
       "fr": "Très. Il est médecin, il travaille à l'hôpital tous les jours.",
       "zh": "很忙。他是医生，每天在医院工作。"
      },
      "audioText": "很忙。他是医生，每天在医院工作。"
     },
     {
      "speaker": "大卫",
      "hanzi": "他星期天休息吗？",
      "pinyin": "Tā xīngqītiān xiūxi ma?",
      "meaning": {
       "en": "Does he rest on Sundays?",
       "fr": "Il se repose le dimanche ?",
       "zh": "他星期天休息吗？"
      },
      "audioText": "他星期天休息吗？"
     },
     {
      "speaker": "小明",
      "hanzi": "有时候休息，有时候不休息。",
      "pinyin": "Yǒu shíhou xiūxi, yǒu shíhou bù xiūxi.",
      "meaning": {
       "en": "Sometimes he does, sometimes he doesn't.",
       "fr": "Parfois oui, parfois non.",
       "zh": "有时候休息，有时候不休息。"
      },
      "audioText": "有时候休息，有时候不休息。"
     }
    ]
   }
  ]
 },
 "lesson-hsk1-19": {
  "scenes": [
   {
    "title": {
     "en": "At the cinema",
     "fr": "Au cinéma",
     "zh": "在电影院"
    },
    "setting": {
     "en": "Xiaoming's phone rings in the middle of the film.",
     "fr": "Le téléphone de Xiaoming sonne en plein film.",
     "zh": "看电影的时候，小明的手机响了。"
    },
    "lines": [
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
      "hanzi": "没听见。妈妈，有什么事？",
      "pinyin": "Méi tīngjiàn. Māma, yǒu shénme shì?",
      "meaning": {
       "en": "No, I didn't. Mum, what's up?",
       "fr": "Non. Maman, qu'est-ce qu'il y a ?",
       "zh": "没听见。妈妈，有什么事？"
      },
      "audioText": "没听见。妈妈，有什么事？"
     },
     {
      "speaker": "妈妈",
      "hanzi": "你的电脑在家里，你看见了吗？",
      "pinyin": "Nǐ de diànnǎo zài jiā li, nǐ kànjiàn le ma?",
      "meaning": {
       "en": "Your computer is at home—did you know?",
       "fr": "Ton ordinateur est à la maison, tu l'as vu ?",
       "zh": "你的电脑在家里，你看见了吗？"
      },
      "audioText": "你的电脑在家里，你看见了吗？"
     },
     {
      "speaker": "小明",
      "hanzi": "看见了，没事。晚上见！",
      "pinyin": "Kànjiàn le, méishì. Wǎnshang jiàn!",
      "meaning": {
       "en": "Yes, I saw it, it's fine. See you tonight!",
       "fr": "Oui, je l'ai vu, pas de souci. À ce soir !",
       "zh": "看见了，没事。晚上见！"
      },
      "audioText": "看见了，没事。晚上见！"
     }
    ]
   },
   {
    "title": {
     "en": "Watching TV",
     "fr": "Devant la télé",
     "zh": "看电视"
    },
    "setting": {
     "en": "In the evening, the family watches TV together.",
     "fr": "Le soir, la famille regarde la télé ensemble.",
     "zh": "晚上，小明一家人在家看电视。"
    },
    "lines": [
     {
      "speaker": "妹妹",
      "hanzi": "爸爸，我想看电视。",
      "pinyin": "Bàba, wǒ xiǎng kàn diànshì.",
      "meaning": {
       "en": "Dad, I want to watch TV.",
       "fr": "Papa, je veux regarder la télé.",
       "zh": "爸爸，我想看电视。"
      },
      "audioText": "爸爸，我想看电视。"
     },
     {
      "speaker": "爸爸",
      "hanzi": "好，看一会儿吧。",
      "pinyin": "Hǎo, kàn yíhuìr ba.",
      "meaning": {
       "en": "OK, watch for a little while.",
       "fr": "D'accord, regarde un petit moment.",
       "zh": "好，看一会儿吧。"
      },
      "audioText": "好，看一会儿吧。"
     },
     {
      "speaker": "妹妹",
      "hanzi": "你听，这个歌真好听！",
      "pinyin": "Nǐ tīng, zhège gē zhēn hǎotīng!",
      "meaning": {
       "en": "Listen, this song is really nice!",
       "fr": "Écoute, cette chanson est trop belle !",
       "zh": "你听，这个歌真好听！"
      },
      "audioText": "你听，这个歌真好听！"
     },
     {
      "speaker": "爸爸",
      "hanzi": "你会唱吗？",
      "pinyin": "Nǐ huì chàng ma?",
      "meaning": {
       "en": "Can you sing it?",
       "fr": "Tu sais la chanter ?",
       "zh": "你会唱吗？"
      },
      "audioText": "你会唱吗？"
     },
     {
      "speaker": "妹妹",
      "hanzi": "会！我唱给你听。",
      "pinyin": "Huì! Wǒ chàng gěi nǐ tīng.",
      "meaning": {
       "en": "Yes! I'll sing it for you.",
       "fr": "Oui ! Je vais te la chanter.",
       "zh": "会！我唱给你听。"
      },
      "audioText": "会！我唱给你听。"
     }
    ]
   },
   {
    "title": {
     "en": "A film on Saturday",
     "fr": "Un film samedi",
     "zh": "星期六看电影"
    },
    "setting": {
     "en": "David calls Anna to invite her to the cinema.",
     "fr": "David appelle Anna pour l'inviter au cinéma.",
     "zh": "大卫给安娜打电话，想请她看电影。"
    },
    "lines": [
     {
      "speaker": "大卫",
      "hanzi": "喂，安娜，星期六我们去看电影吧？",
      "pinyin": "Wèi, Ānnà, xīngqīliù wǒmen qù kàn diànyǐng ba?",
      "meaning": {
       "en": "Hello, Anna, shall we go to the cinema on Saturday?",
       "fr": "Allô, Anna, on va au cinéma samedi ?",
       "zh": "喂，安娜，星期六我们去看电影吧？"
      },
      "audioText": "喂，安娜，星期六我们去看电影吧？"
     },
     {
      "speaker": "安娜",
      "hanzi": "好啊！看什么电影？",
      "pinyin": "Hǎo a! Kàn shénme diànyǐng?",
      "meaning": {
       "en": "Sure! Which film?",
       "fr": "Avec plaisir ! Quel film ?",
       "zh": "好啊！看什么电影？"
      },
      "audioText": "好啊！看什么电影？"
     },
     {
      "speaker": "大卫",
      "hanzi": "一个中国电影，小明说很好看。",
      "pinyin": "Yí ge Zhōngguó diànyǐng, Xiǎomíng shuō hěn hǎokàn.",
      "meaning": {
       "en": "A Chinese film; Xiaoming says it's very good.",
       "fr": "Un film chinois ; Xiaoming dit qu'il est très bien.",
       "zh": "一个中国电影，小明说很好看。"
      },
      "audioText": "一个中国电影，小明说很好看。"
     },
     {
      "speaker": "安娜",
      "hanzi": "太好了，我想看中国电影！",
      "pinyin": "Tài hǎo le, wǒ xiǎng kàn Zhōngguó diànyǐng!",
      "meaning": {
       "en": "Great, I want to see a Chinese film!",
       "fr": "Super, j'ai envie de voir un film chinois !",
       "zh": "太好了，我想看中国电影！"
      },
      "audioText": "太好了，我想看中国电影！"
     }
    ]
   }
  ]
 },
 "lesson-hsk1-18": {
  "scenes": [
   {
    "title": {
     "en": "New clothes",
     "fr": "De nouveaux vêtements",
     "zh": "新衣服"
    },
    "setting": {
     "en": "Anna has just come back from the shops.",
     "fr": "Anna revient tout juste des magasins.",
     "zh": "安娜买了新衣服。"
    },
    "lines": [
     {
      "speaker": "安娜",
      "hanzi": "大卫，你看，这件衣服怎么样？",
      "pinyin": "Dàwèi, nǐ kàn, zhè jiàn yīfu zěnmeyàng?",
      "meaning": {
       "en": "David, look, what do you think of this?",
       "fr": "David, regarde, comment tu trouves ce vêtement ?",
       "zh": "大卫，你看，这件衣服怎么样？"
      },
      "audioText": "大卫，你看，这件衣服怎么样？"
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
      "hanzi": "不大，很漂亮。",
      "pinyin": "Bú dà, hěn piàoliang.",
      "meaning": {
       "en": "It's not big, it's lovely.",
       "fr": "Il n'est pas grand, il est très beau.",
       "zh": "不大，很漂亮。"
      },
      "audioText": "不大，很漂亮。"
     },
     {
      "speaker": "安娜",
      "hanzi": "我很高兴！",
      "pinyin": "Wǒ hěn gāoxìng!",
      "meaning": {
       "en": "I'm so happy!",
       "fr": "Je suis trop contente !",
       "zh": "我很高兴！"
      },
      "audioText": "我很高兴！"
     }
    ]
   },
   {
    "title": {
     "en": "What do you like?",
     "fr": "Qu'est-ce que tu aimes ?",
     "zh": "你喜欢什么？"
    },
    "setting": {
     "en": "Xiaoming asks his friends about their hobbies.",
     "fr": "Xiaoming interroge ses amis sur leurs goûts.",
     "zh": "小明问朋友们喜欢做什么。"
    },
    "lines": [
     {
      "speaker": "小明",
      "hanzi": "大卫，你喜欢做什么？",
      "pinyin": "Dàwèi, nǐ xǐhuan zuò shénme?",
      "meaning": {
       "en": "David, what do you like doing?",
       "fr": "David, qu'est-ce que tu aimes faire ?",
       "zh": "大卫，你喜欢做什么？"
      },
      "audioText": "大卫，你喜欢做什么？"
     },
     {
      "speaker": "大卫",
      "hanzi": "我喜欢看电影，也喜欢听歌。",
      "pinyin": "Wǒ xǐhuan kàn diànyǐng, yě xǐhuan tīng gē.",
      "meaning": {
       "en": "I like watching films and listening to songs.",
       "fr": "J'aime regarder des films et écouter des chansons.",
       "zh": "我喜欢看电影，也喜欢听歌。"
      },
      "audioText": "我喜欢看电影，也喜欢听歌。"
     },
     {
      "speaker": "小明",
      "hanzi": "安娜呢？",
      "pinyin": "Ānnà ne?",
      "meaning": {
       "en": "And Anna?",
       "fr": "Et Anna ?",
       "zh": "安娜呢？"
      },
      "audioText": "安娜呢？"
     },
     {
      "speaker": "安娜",
      "hanzi": "我爱买东西！",
      "pinyin": "Wǒ ài mǎi dōngxi!",
      "meaning": {
       "en": "I love shopping!",
       "fr": "J'adore faire du shopping !",
       "zh": "我爱买东西！"
      },
      "audioText": "我爱买东西！"
     }
    ]
   },
   {
    "title": {
     "en": "A trip to China",
     "fr": "Un voyage en Chine",
     "zh": "想去玩儿"
    },
    "setting": {
     "en": "The friends talk about where they want to go.",
     "fr": "Les amis parlent des endroits où ils veulent aller.",
     "zh": "朋友们说想去哪儿玩儿。"
    },
    "lines": [
     {
      "speaker": "大卫",
      "hanzi": "明年我想去很多地方玩儿。",
      "pinyin": "Míngnián wǒ xiǎng qù hěn duō dìfang wánr.",
      "meaning": {
       "en": "Next year I want to visit lots of places.",
       "fr": "L'année prochaine, je veux visiter plein d'endroits.",
       "zh": "明年我想去很多地方玩儿。"
      },
      "audioText": "明年我想去很多地方玩儿。"
     },
     {
      "speaker": "小明",
      "hanzi": "你要去哪儿？",
      "pinyin": "Nǐ yào qù nǎr?",
      "meaning": {
       "en": "Where do you want to go?",
       "fr": "Tu veux aller où ?",
       "zh": "你要去哪儿？"
      },
      "audioText": "你要去哪儿？"
     },
     {
      "speaker": "大卫",
      "hanzi": "我要去看大熊猫！",
      "pinyin": "Wǒ yào qù kàn dàxióngmāo!",
      "meaning": {
       "en": "I want to go and see giant pandas!",
       "fr": "Je veux aller voir les pandas géants !",
       "zh": "我要去看大熊猫！"
      },
      "audioText": "我要去看大熊猫！"
     },
     {
      "speaker": "安娜",
      "hanzi": "我也想去，我们一起去吧！",
      "pinyin": "Wǒ yě xiǎng qù, wǒmen yìqǐ qù ba!",
      "meaning": {
       "en": "I want to go too, let's go together!",
       "fr": "Moi aussi, allons-y ensemble !",
       "zh": "我也想去，我们一起去吧！"
      },
      "audioText": "我也想去，我们一起去吧！"
     }
    ]
   }
  ]
 },
 "lesson-hsk1-12": {
  "scenes": [
   {
    "title": {
     "en": "University and secondary school",
     "fr": "Université et collège",
     "zh": "大学和中学"
    },
    "setting": {
     "en": "Xiaoming's younger sister asks David about his school.",
     "fr": "La petite sœur de Xiaoming interroge David sur son école.",
     "zh": "小明的妹妹问大卫的学校。"
    },
    "lines": [
     {
      "speaker": "妹妹",
      "hanzi": "大卫，你是中学生吗？",
      "pinyin": "Dàwèi, nǐ shì zhōngxuéshēng ma?",
      "meaning": {
       "en": "David, are you a secondary school student?",
       "fr": "David, tu es collégien ?",
       "zh": "大卫，你是中学生吗？"
      },
      "audioText": "大卫，你是中学生吗？"
     },
     {
      "speaker": "大卫",
      "hanzi": "不是，我是大学生。你呢？",
      "pinyin": "Bú shì, wǒ shì dàxuéshēng. Nǐ ne?",
      "meaning": {
       "en": "No, I'm a university student. And you?",
       "fr": "Non, je suis étudiant. Et toi ?",
       "zh": "不是，我是大学生。你呢？"
      },
      "audioText": "不是，我是大学生。你呢？"
     },
     {
      "speaker": "妹妹",
      "hanzi": "我是小学生，我九岁。",
      "pinyin": "Wǒ shì xiǎoxuéshēng, wǒ jiǔ suì.",
      "meaning": {
       "en": "I'm a primary school pupil, I'm nine.",
       "fr": "Je suis à l'école primaire, j'ai neuf ans.",
       "zh": "我是小学生，我九岁。"
      },
      "audioText": "我是小学生，我九岁。"
     },
     {
      "speaker": "大卫",
      "hanzi": "你喜欢上学吗？",
      "pinyin": "Nǐ xǐhuan shàngxué ma?",
      "meaning": {
       "en": "Do you like going to school?",
       "fr": "Tu aimes aller à l'école ?",
       "zh": "你喜欢上学吗？"
      },
      "audioText": "你喜欢上学吗？"
     },
     {
      "speaker": "妹妹",
      "hanzi": "很喜欢！我们的老师很好。",
      "pinyin": "Hěn xǐhuan! Wǒmen de lǎoshī hěn hǎo.",
      "meaning": {
       "en": "Very much! Our teacher is very nice.",
       "fr": "Beaucoup ! Notre maîtresse est très gentille.",
       "zh": "很喜欢！我们的老师很好。"
      },
      "audioText": "很喜欢！我们的老师很好。"
     }
    ]
   },
   {
    "title": {
     "en": "Our timetable",
     "fr": "Notre emploi du temps",
     "zh": "几点上课？"
    },
    "setting": {
     "en": "Xiaoming compares their timetables with David.",
     "fr": "Xiaoming compare leurs emplois du temps avec David.",
     "zh": "小明和大卫说上课的时间。"
    },
    "lines": [
     {
      "speaker": "小明",
      "hanzi": "你们几点上课？",
      "pinyin": "Nǐmen jǐ diǎn shàngkè?",
      "meaning": {
       "en": "What time do your classes start?",
       "fr": "Vos cours commencent à quelle heure ?",
       "zh": "你们几点上课？"
      },
      "audioText": "你们几点上课？"
     },
     {
      "speaker": "大卫",
      "hanzi": "八点上课，十二点下课。",
      "pinyin": "Bā diǎn shàngkè, shí'èr diǎn xiàkè.",
      "meaning": {
       "en": "Classes start at eight and end at twelve.",
       "fr": "Les cours commencent à huit heures et finissent à midi.",
       "zh": "八点上课，十二点下课。"
      },
      "audioText": "八点上课，十二点下课。"
     },
     {
      "speaker": "小明",
      "hanzi": "下午呢？",
      "pinyin": "Xiàwǔ ne?",
      "meaning": {
       "en": "And in the afternoon?",
       "fr": "Et l'après-midi ?",
       "zh": "下午呢？"
      },
      "audioText": "下午呢？"
     },
     {
      "speaker": "大卫",
      "hanzi": "下午没有课，我在家学习。",
      "pinyin": "Xiàwǔ méiyǒu kè, wǒ zài jiā xuéxí.",
      "meaning": {
       "en": "No classes in the afternoon; I study at home.",
       "fr": "Pas de cours l'après-midi, j'étudie chez moi.",
       "zh": "下午没有课，我在家学习。"
      },
      "audioText": "下午没有课，我在家学习。"
     }
    ]
   },
   {
    "title": {
     "en": "I want to study here",
     "fr": "Je veux étudier ici",
     "zh": "我想在这儿学习"
    },
    "setting": {
     "en": "Mr Wang asks his students about their plans.",
     "fr": "Le professeur Wang demande à ses élèves leurs projets.",
     "zh": "王老师问同学们明年想做什么。"
    },
    "lines": [
     {
      "speaker": "王老师",
      "hanzi": "安娜，明年你还在这儿学习吗？",
      "pinyin": "Ānnà, míngnián nǐ hái zài zhèr xuéxí ma?",
      "meaning": {
       "en": "Anna, will you still study here next year?",
       "fr": "Anna, tu étudieras encore ici l'année prochaine ?",
       "zh": "安娜，明年你还在这儿学习吗？"
      },
      "audioText": "安娜，明年你还在这儿学习吗？"
     },
     {
      "speaker": "安娜",
      "hanzi": "对，我想在中国上大学。",
      "pinyin": "Duì, wǒ xiǎng zài Zhōngguó shàng dàxué.",
      "meaning": {
       "en": "Yes, I want to go to university in China.",
       "fr": "Oui, je veux faire mes études universitaires en Chine.",
       "zh": "对，我想在中国上大学。"
      },
      "audioText": "对，我想在中国上大学。"
     },
     {
      "speaker": "王老师",
      "hanzi": "大卫呢？",
      "pinyin": "Dàwèi ne?",
      "meaning": {
       "en": "And David?",
       "fr": "Et David ?",
       "zh": "大卫呢？"
      },
      "audioText": "大卫呢？"
     },
     {
      "speaker": "大卫",
      "hanzi": "我也想在这儿学习，可是明年要回家。",
      "pinyin": "Wǒ yě xiǎng zài zhèr xuéxí, kěshì míngnián yào huí jiā.",
      "meaning": {
       "en": "I'd like to study here too, but I have to go home next year.",
       "fr": "Moi aussi, j'aimerais étudier ici, mais je dois rentrer l'année prochaine.",
       "zh": "我也想在这儿学习，可是明年要回家。"
      },
      "audioText": "我也想在这儿学习，可是明年要回家。"
     }
    ]
   }
  ]
 },
 "lesson-hsk1-16": {
  "scenes": [
   {
    "title": {
     "en": "Mum is coming!",
     "fr": "Maman arrive !",
     "zh": "妈妈要来了！"
    },
    "setting": {
     "en": "Big news: David's mother is coming to visit Beijing.",
     "fr": "Grande nouvelle : la mère de David vient visiter Pékin.",
     "zh": "大卫的妈妈要来北京了。"
    },
    "lines": [
     {
      "speaker": "大卫",
      "hanzi": "小明，我妈妈明天来北京！",
      "pinyin": "Xiǎomíng, wǒ māma míngtiān lái Běijīng!",
      "meaning": {
       "en": "Xiaoming, my mum is coming to Beijing tomorrow!",
       "fr": "Xiaoming, ma mère arrive à Pékin demain !",
       "zh": "小明，我妈妈明天来北京！"
      },
      "audioText": "小明，我妈妈明天来北京！"
     },
     {
      "speaker": "小明",
      "hanzi": "太好了！她怎么来？",
      "pinyin": "Tài hǎo le! Tā zěnme lái?",
      "meaning": {
       "en": "Great! How is she coming?",
       "fr": "Génial ! Comment vient-elle ?",
       "zh": "太好了！她怎么来？"
      },
      "audioText": "太好了！她怎么来？"
     },
     {
      "speaker": "大卫",
      "hanzi": "她坐飞机来，下午三点到。",
      "pinyin": "Tā zuò fēijī lái, xiàwǔ sān diǎn dào.",
      "meaning": {
       "en": "By plane; she arrives at three in the afternoon.",
       "fr": "En avion, elle arrive à quinze heures.",
       "zh": "她坐飞机来，下午三点到。"
      },
      "audioText": "她坐飞机来，下午三点到。"
     },
     {
      "speaker": "小明",
      "hanzi": "我爸爸开车去，我们一起去吧。",
      "pinyin": "Wǒ bàba kāichē qù, wǒmen yìqǐ qù ba.",
      "meaning": {
       "en": "My dad will drive; let's go together.",
       "fr": "Mon père y va en voiture, allons-y ensemble.",
       "zh": "我爸爸开车去，我们一起去吧。"
      },
      "audioText": "我爸爸开车去，我们一起去吧。"
     }
    ]
   },
   {
    "title": {
     "en": "To the hotel",
     "fr": "Vers l'hôtel",
     "zh": "去饭店"
    },
    "setting": {
     "en": "After the airport, they drive David's mother to her hotel.",
     "fr": "Après l'aéroport, ils conduisent la mère de David à son hôtel.",
     "zh": "接到妈妈以后，他们开车去饭店。"
    },
    "lines": [
     {
      "speaker": "妈妈",
      "hanzi": "大卫，这是你的朋友吗？",
      "pinyin": "Dàwèi, zhè shì nǐ de péngyou ma?",
      "meaning": {
       "en": "David, is this your friend?",
       "fr": "David, c'est ton ami ?",
       "zh": "大卫，这是你的朋友吗？"
      },
      "audioText": "大卫，这是你的朋友吗？"
     },
     {
      "speaker": "大卫",
      "hanzi": "对，他是小明，这是他爸爸。",
      "pinyin": "Duì, tā shì Xiǎomíng, zhè shì tā bàba.",
      "meaning": {
       "en": "Yes, this is Xiaoming, and this is his dad.",
       "fr": "Oui, c'est Xiaoming, et voici son père.",
       "zh": "对，他是小明，这是他爸爸。"
      },
      "audioText": "对，他是小明，这是他爸爸。"
     },
     {
      "speaker": "爸爸",
      "hanzi": "你好！我们先去饭店，你住在哪个饭店？",
      "pinyin": "Nǐ hǎo! Wǒmen xiān qù fàndiàn, nǐ zhù zài nǎge fàndiàn?",
      "meaning": {
       "en": "Hello! Let's go to the hotel first. Which hotel are you staying at?",
       "fr": "Bonjour ! Allons d'abord à l'hôtel. Dans quel hôtel logez-vous ?",
       "zh": "你好！我们先去饭店，你住在哪个饭店？"
      },
      "audioText": "你好！我们先去饭店，你住在哪个饭店？"
     },
     {
      "speaker": "妈妈",
      "hanzi": "北京饭店，谢谢你们！",
      "pinyin": "Běijīng Fàndiàn, xièxie nǐmen!",
      "meaning": {
       "en": "The Beijing Hotel, thank you!",
       "fr": "L'hôtel de Pékin, merci à vous !",
       "zh": "北京饭店，谢谢你们！"
      },
      "audioText": "北京饭店，谢谢你们！"
     }
    ]
   },
   {
    "title": {
     "en": "A big room",
     "fr": "Une grande chambre",
     "zh": "房间很大"
    },
    "setting": {
     "en": "In the evening, David calls his mother at the hotel.",
     "fr": "Le soir, David appelle sa mère à l'hôtel.",
     "zh": "晚上，大卫给饭店的妈妈打电话。"
    },
    "lines": [
     {
      "speaker": "大卫",
      "hanzi": "妈妈，你的房间怎么样？",
      "pinyin": "Māma, nǐ de fángjiān zěnmeyàng?",
      "meaning": {
       "en": "Mum, how is your room?",
       "fr": "Maman, comment est ta chambre ?",
       "zh": "妈妈，你的房间怎么样？"
      },
      "audioText": "妈妈，你的房间怎么样？"
     },
     {
      "speaker": "妈妈",
      "hanzi": "很大，也很漂亮。",
      "pinyin": "Hěn dà, yě hěn piàoliang.",
      "meaning": {
       "en": "Very big, and very pretty.",
       "fr": "Très grande, et très jolie.",
       "zh": "很大，也很漂亮。"
      },
      "audioText": "很大，也很漂亮。"
     },
     {
      "speaker": "大卫",
      "hanzi": "明天我们坐火车去玩儿，好吗？",
      "pinyin": "Míngtiān wǒmen zuò huǒchē qù wánr, hǎo ma?",
      "meaning": {
       "en": "Shall we take the train and go somewhere tomorrow?",
       "fr": "Demain, on prend le train pour aller se promener, d'accord ?",
       "zh": "明天我们坐火车去玩儿，好吗？"
      },
      "audioText": "明天我们坐火车去玩儿，好吗？"
     },
     {
      "speaker": "妈妈",
      "hanzi": "好！我很高兴来中国看你。",
      "pinyin": "Hǎo! Wǒ hěn gāoxìng lái Zhōngguó kàn nǐ.",
      "meaning": {
       "en": "Yes! I'm so happy to come to China to see you.",
       "fr": "Oui ! Je suis si heureuse de venir te voir en Chine.",
       "zh": "好！我很高兴来中国看你。"
      },
      "audioText": "好！我很高兴来中国看你。"
     }
    ]
   }
  ]
 }
};
