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
 },
 "lesson-hsk2-01": {
  "scenes": [
   {
    "title": {
     "en": "Taxi or bus?",
     "fr": "Taxi ou bus ?",
     "zh": "打车还是坐公共汽车？"
    },
    "setting": {
     "en": "A new school year. David has to go to the airport to meet a friend.",
     "fr": "Une nouvelle année universitaire. David doit aller à l'aéroport chercher une amie.",
     "zh": "新学年开始了，大卫要去机场接朋友。"
    },
    "lines": [
     {
      "speaker": "大卫",
      "hanzi": "小明，去机场坐出租车好还是坐公共汽车好？",
      "pinyin": "Xiǎomíng, qù jīchǎng zuò chūzūchē hǎo háishi zuò gōnggòng qìchē hǎo?",
      "meaning": {
       "en": "Xiaoming, is it better to take a taxi or the bus to the airport?",
       "fr": "Xiaoming, pour l'aéroport, c'est mieux le taxi ou le bus ?",
       "zh": "小明，去机场坐出租车好还是坐公共汽车好？"
      },
      "audioText": "小明，去机场坐出租车好还是坐公共汽车好？"
     },
     {
      "speaker": "小明",
      "hanzi": "出租车比公共汽车快，但是比公共汽车贵。",
      "pinyin": "Chūzūchē bǐ gōnggòng qìchē kuài, dànshì bǐ gōnggòng qìchē guì.",
      "meaning": {
       "en": "A taxi is faster than the bus, but more expensive.",
       "fr": "Le taxi est plus rapide que le bus, mais plus cher.",
       "zh": "出租车比公共汽车快，但是比公共汽车贵。"
      },
      "audioText": "出租车比公共汽车快，但是比公共汽车贵。"
     },
     {
      "speaker": "大卫",
      "hanzi": "贵多少？",
      "pinyin": "Guì duōshao?",
      "meaning": {
       "en": "How much more expensive?",
       "fr": "Combien plus cher ?",
       "zh": "贵多少？"
      },
      "audioText": "贵多少？"
     },
     {
      "speaker": "小明",
      "hanzi": "坐公共汽车二十块，打车一百多块。",
      "pinyin": "Zuò gōnggòng qìchē èrshí kuài, dǎchē yìbǎi duō kuài.",
      "meaning": {
       "en": "The bus is twenty yuan; a taxi is over a hundred.",
       "fr": "Le bus coûte vingt yuans, le taxi plus de cent.",
       "zh": "坐公共汽车二十块，打车一百多块。"
      },
      "audioText": "坐公共汽车二十块，打车一百多块。"
     },
     {
      "speaker": "大卫",
      "hanzi": "那我坐公共汽车，便宜！",
      "pinyin": "Nà wǒ zuò gōnggòng qìchē, piányi!",
      "meaning": {
       "en": "Then I'll take the bus, it's cheap!",
       "fr": "Alors je prends le bus, c'est moins cher !",
       "zh": "那我坐公共汽车，便宜！"
      },
      "audioText": "那我坐公共汽车，便宜！"
     }
    ]
   },
   {
    "title": {
     "en": "On the bus",
     "fr": "Dans le bus",
     "zh": "在公共汽车上"
    },
    "setting": {
     "en": "The bus is crowded and moving slowly. David calls Anna.",
     "fr": "Le bus est bondé et avance lentement. David appelle Anna.",
     "zh": "车上人很多，车开得很慢，大卫给安娜打电话。"
    },
    "lines": [
     {
      "speaker": "安娜",
      "hanzi": "大卫，你在哪儿？",
      "pinyin": "Dàwèi, nǐ zài nǎr?",
      "meaning": {
       "en": "David, where are you?",
       "fr": "David, tu es où ?",
       "zh": "大卫，你在哪儿？"
      },
      "audioText": "大卫，你在哪儿？"
     },
     {
      "speaker": "大卫",
      "hanzi": "我在公共汽车上，车太慢了！",
      "pinyin": "Wǒ zài gōnggòng qìchē shang, chē tài màn le!",
      "meaning": {
       "en": "I'm on the bus; it's so slow!",
       "fr": "Je suis dans le bus, il est trop lent !",
       "zh": "我在公共汽车上，车太慢了！"
      },
      "audioText": "我在公共汽车上，车太慢了！"
     },
     {
      "speaker": "安娜",
      "hanzi": "下次坐地铁吧，地铁比公共汽车快多了。",
      "pinyin": "Xià cì zuò dìtiě ba, dìtiě bǐ gōnggòng qìchē kuài duō le.",
      "meaning": {
       "en": "Take the underground next time; it's much faster than the bus.",
       "fr": "La prochaine fois, prends le métro, il est beaucoup plus rapide que le bus.",
       "zh": "下次坐地铁吧，地铁比公共汽车快多了。"
      },
      "audioText": "下次坐地铁吧，地铁比公共汽车快多了。"
     },
     {
      "speaker": "大卫",
      "hanzi": "好，我记得了。",
      "pinyin": "Hǎo, wǒ jìde le.",
      "meaning": {
       "en": "OK, I'll remember.",
       "fr": "D'accord, je retiens.",
       "zh": "好，我记得了。"
      },
      "audioText": "好，我记得了。"
     }
    ]
   },
   {
    "title": {
     "en": "At the airport",
     "fr": "À l'aéroport",
     "zh": "在机场"
    },
    "setting": {
     "en": "David finally meets Mary, an American student who is joining his class.",
     "fr": "David retrouve enfin Mary, une étudiante américaine qui rejoint sa classe.",
     "zh": "大卫在机场接到了玛丽，她是新来的美国同学。"
    },
    "lines": [
     {
      "speaker": "玛丽",
      "hanzi": "你好！你是大卫吗？",
      "pinyin": "Nǐ hǎo! Nǐ shì Dàwèi ma?",
      "meaning": {
       "en": "Hello! Are you David?",
       "fr": "Bonjour ! Tu es David ?",
       "zh": "你好！你是大卫吗？"
      },
      "audioText": "你好！你是大卫吗？"
     },
     {
      "speaker": "大卫",
      "hanzi": "是，你是玛丽吧？欢迎你来北京！",
      "pinyin": "Shì, nǐ shì Mǎlì ba? Huānyíng nǐ lái Běijīng!",
      "meaning": {
       "en": "Yes, you must be Mary. Welcome to Beijing!",
       "fr": "Oui, tu dois être Mary. Bienvenue à Pékin !",
       "zh": "是，你是玛丽吧？欢迎你来北京！"
      },
      "audioText": "是，你是玛丽吧？欢迎你来北京！"
     },
     {
      "speaker": "玛丽",
      "hanzi": "谢谢！北京比我想的大。",
      "pinyin": "Xièxie! Běijīng bǐ wǒ xiǎng de dà.",
      "meaning": {
       "en": "Thanks! Beijing is bigger than I thought.",
       "fr": "Merci ! Pékin est plus grand que je ne pensais.",
       "zh": "谢谢！北京比我想的大。"
      },
      "audioText": "谢谢！北京比我想的大。"
     },
     {
      "speaker": "大卫",
      "hanzi": "是啊。我们坐出租车回学校吧，你的东西太多了。",
      "pinyin": "Shì a. Wǒmen zuò chūzūchē huí xuéxiào ba, nǐ de dōngxi tài duō le.",
      "meaning": {
       "en": "Yes. Let's take a taxi back to the university; you have too many bags.",
       "fr": "Oui. Prenons un taxi pour rentrer à l'université, tu as trop de bagages.",
       "zh": "是啊。我们坐出租车回学校吧，你的东西太多了。"
      },
      "audioText": "是啊。我们坐出租车回学校吧，你的东西太多了。"
     }
    ]
   }
  ],
  "story": [
   {
    "hanzi": "今天我去机场接玛丽。我坐公共汽车去，车很慢，但是很便宜。回来的时候我们坐出租车，出租车比公共汽车快多了。",
    "pinyin": "Jīntiān wǒ qù jīchǎng jiē Mǎlì. Wǒ zuò gōnggòng qìchē qù, chē hěn màn, dànshì hěn piányi. Huílai de shíhou wǒmen zuò chūzūchē, chūzūchē bǐ gōnggòng qìchē kuài duō le.",
    "translation": {
     "en": "Today I went to the airport to meet Mary. I took the bus there; it was slow but cheap. On the way back we took a taxi, which was much faster than the bus.",
     "fr": "Aujourd'hui, je suis allé chercher Mary à l'aéroport. J'y suis allé en bus : lent, mais pas cher. Au retour, nous avons pris un taxi, beaucoup plus rapide que le bus.",
     "zh": "今天我去机场接玛丽。我坐公共汽车去，车很慢，但是很便宜。回来的时候我们坐出租车，出租车比公共汽车快多了。"
    }
   }
  ]
 },
 "lesson-hsk2-02": {
  "scenes": [
   {
    "title": {
     "en": "The menu",
     "fr": "La carte",
     "zh": "看菜单"
    },
    "setting": {
     "en": "David takes Mary to a small restaurant near the university.",
     "fr": "David emmène Mary dans un petit restaurant près de l'université.",
     "zh": "大卫带玛丽去学校旁边的一个饭馆。"
    },
    "lines": [
     {
      "speaker": "服务员",
      "hanzi": "你们好！这是菜单。",
      "pinyin": "Nǐmen hǎo! Zhè shì càidān.",
      "meaning": {
       "en": "Hello! Here's the menu.",
       "fr": "Bonjour ! Voici la carte.",
       "zh": "你们好！这是菜单。"
      },
      "audioText": "你们好！这是菜单。"
     },
     {
      "speaker": "玛丽",
      "hanzi": "大卫，这里什么菜好吃？",
      "pinyin": "Dàwèi, zhèlǐ shénme cài hǎochī?",
      "meaning": {
       "en": "David, what's good here?",
       "fr": "David, qu'est-ce qui est bon ici ?",
       "zh": "大卫，这里什么菜好吃？"
      },
      "audioText": "大卫，这里什么菜好吃？"
     },
     {
      "speaker": "大卫",
      "hanzi": "这里的鱼很好吃。你想吃鱼吗？",
      "pinyin": "Zhèlǐ de yú hěn hǎochī. Nǐ xiǎng chī yú ma?",
      "meaning": {
       "en": "The fish is very good here. Do you want fish?",
       "fr": "Le poisson est très bon ici. Tu veux du poisson ?",
       "zh": "这里的鱼很好吃。你想吃鱼吗？"
      },
      "audioText": "这里的鱼很好吃。你想吃鱼吗？"
     },
     {
      "speaker": "玛丽",
      "hanzi": "想！我还要一个菜，不要肉。",
      "pinyin": "Xiǎng! Wǒ hái yào yí ge cài, búyào ròu.",
      "meaning": {
       "en": "Yes! I'd also like a vegetable dish, no meat.",
       "fr": "Oui ! Je voudrais aussi un plat sans viande.",
       "zh": "想！我还要一个菜，不要肉。"
      },
      "audioText": "想！我还要一个菜，不要肉。"
     },
     {
      "speaker": "大卫",
      "hanzi": "服务员，我们要一个鱼，一个青菜。",
      "pinyin": "Fúwùyuán, wǒmen yào yí ge yú, yí ge qīngcài.",
      "meaning": {
       "en": "Waiter, we'd like a fish and a green vegetable dish.",
       "fr": "Serveur, nous prendrons un poisson et un plat de légumes verts.",
       "zh": "服务员，我们要一个鱼，一个青菜。"
      },
      "audioText": "服务员，我们要一个鱼，一个青菜。"
     }
    ]
   },
   {
    "title": {
     "en": "Shoes and a shirt",
     "fr": "Des chaussures et une chemise",
     "zh": "买鞋和衣服"
    },
    "setting": {
     "en": "After lunch they go shopping in the mall next door.",
     "fr": "Après le déjeuner, ils font du shopping dans le centre commercial à côté.",
     "zh": "吃完饭，他们去旁边的商场买东西。"
    },
    "lines": [
     {
      "speaker": "玛丽",
      "hanzi": "这双鞋多少钱？",
      "pinyin": "Zhè shuāng xié duōshao qián?",
      "meaning": {
       "en": "How much are these shoes?",
       "fr": "Combien coûte cette paire de chaussures ?",
       "zh": "这双鞋多少钱？"
      },
      "audioText": "这双鞋多少钱？"
     },
     {
      "speaker": "服务员",
      "hanzi": "三百块。",
      "pinyin": "Sānbǎi kuài.",
      "meaning": {
       "en": "Three hundred yuan.",
       "fr": "Trois cents yuans.",
       "zh": "三百块。"
      },
      "audioText": "三百块。"
     },
     {
      "speaker": "玛丽",
      "hanzi": "有点儿贵。我想看看那件衣服。",
      "pinyin": "Yǒudiǎnr guì. Wǒ xiǎng kànkan nà jiàn yīfu.",
      "meaning": {
       "en": "A bit expensive. I'd like to look at that piece of clothing.",
       "fr": "Un peu cher. J'aimerais voir ce vêtement-là.",
       "zh": "有点儿贵。我想看看那件衣服。"
      },
      "audioText": "有点儿贵。我想看看那件衣服。"
     },
     {
      "speaker": "服务员",
      "hanzi": "这件吗？一百二十块，很便宜。",
      "pinyin": "Zhè jiàn ma? Yìbǎi'èrshí kuài, hěn piányi.",
      "meaning": {
       "en": "This one? A hundred and twenty yuan, very cheap.",
       "fr": "Celui-ci ? Cent vingt yuans, ce n'est pas cher.",
       "zh": "这件吗？一百二十块，很便宜。"
      },
      "audioText": "这件吗？一百二十块，很便宜。"
     },
     {
      "speaker": "玛丽",
      "hanzi": "好，我要这件。",
      "pinyin": "Hǎo, wǒ yào zhè jiàn.",
      "meaning": {
       "en": "OK, I'll take this one.",
       "fr": "D'accord, je prends celui-ci.",
       "zh": "好，我要这件。"
      },
      "audioText": "好，我要这件。"
     }
    ]
   },
   {
    "title": {
     "en": "Who pays?",
     "fr": "Qui paie ?",
     "zh": "谁买单？"
    },
    "setting": {
     "en": "Back at the restaurant the next day, Xiaoming joins them.",
     "fr": "Le lendemain, au restaurant, Xiaoming les rejoint.",
     "zh": "第二天，小明也来饭馆吃饭。"
    },
    "lines": [
     {
      "speaker": "小明",
      "hanzi": "服务员，买单！",
      "pinyin": "Fúwùyuán, mǎidān!",
      "meaning": {
       "en": "Waiter, the bill please!",
       "fr": "Serveur, l'addition !",
       "zh": "服务员，买单！"
      },
      "audioText": "服务员，买单！"
     },
     {
      "speaker": "玛丽",
      "hanzi": "小明，我想给钱。",
      "pinyin": "Xiǎomíng, wǒ xiǎng gěi qián.",
      "meaning": {
       "en": "Xiaoming, I want to pay.",
       "fr": "Xiaoming, je veux payer.",
       "zh": "小明，我想给钱。"
      },
      "audioText": "小明，我想给钱。"
     },
     {
      "speaker": "小明",
      "hanzi": "不用，你是新同学，今天我请客。",
      "pinyin": "Búyòng, nǐ shì xīn tóngxué, jīntiān wǒ qǐngkè.",
      "meaning": {
       "en": "No need, you're the new classmate; today it's on me.",
       "fr": "Pas besoin, tu es la nouvelle, aujourd'hui c'est moi qui invite.",
       "zh": "不用，你是新同学，今天我请客。"
      },
      "audioText": "不用，你是新同学，今天我请客。"
     },
     {
      "speaker": "玛丽",
      "hanzi": "谢谢你！下次我请你们。",
      "pinyin": "Xièxie nǐ! Xià cì wǒ qǐng nǐmen.",
      "meaning": {
       "en": "Thank you! Next time I'll treat you.",
       "fr": "Merci ! La prochaine fois, c'est moi qui vous invite.",
       "zh": "谢谢你！下次我请你们。"
      },
      "audioText": "谢谢你！下次我请你们。"
     }
    ]
   }
  ],
  "story": [
   {
    "hanzi": "中国的饭馆很多，菜也很便宜。今天我和玛丽、小明一起吃饭。我想买单，可是小明说他要请客。下次我要请他。",
    "pinyin": "Zhōngguó de fànguǎn hěn duō, cài yě hěn piányi. Jīntiān wǒ hé Mǎlì, Xiǎomíng yìqǐ chī fàn. Wǒ xiǎng mǎidān, kěshì Xiǎomíng shuō tā yào qǐngkè. Xià cì wǒ yào qǐng tā.",
    "translation": {
     "en": "There are lots of restaurants in China, and the food is cheap. Today I ate with Mary and Xiaoming. I wanted to pay, but Xiaoming said it was his treat. Next time I'll treat him.",
     "fr": "Il y a beaucoup de restaurants en Chine, et les plats ne sont pas chers. Aujourd'hui, j'ai mangé avec Mary et Xiaoming. Je voulais payer, mais Xiaoming a dit qu'il invitait. La prochaine fois, c'est moi qui l'inviterai.",
     "zh": "中国的饭馆很多，菜也很便宜。今天我和玛丽、小明一起吃饭。我想买单，可是小明说他要请客。下次我要请他。"
    }
   }
  ]
 },
 "lesson-hsk2-04": {
  "scenes": [
   {
    "title": {
     "en": "What sports do you play?",
     "fr": "Quel sport fais-tu ?",
     "zh": "你喜欢什么运动？"
    },
    "setting": {
     "en": "The university basketball team is looking for new players.",
     "fr": "L'équipe de basket de l'université cherche de nouveaux joueurs.",
     "zh": "学校的篮球队要找新同学。"
    },
    "lines": [
     {
      "speaker": "小明",
      "hanzi": "大卫，你打过篮球吗？",
      "pinyin": "Dàwèi, nǐ dǎguo lánqiú ma?",
      "meaning": {
       "en": "David, have you ever played basketball?",
       "fr": "David, tu as déjà joué au basket ?",
       "zh": "大卫，你打过篮球吗？"
      },
      "audioText": "大卫，你打过篮球吗？"
     },
     {
      "speaker": "大卫",
      "hanzi": "打过，我很喜欢打篮球。你呢？",
      "pinyin": "Dǎguo, wǒ hěn xǐhuan dǎ lánqiú. Nǐ ne?",
      "meaning": {
       "en": "Yes, I love basketball. And you?",
       "fr": "Oui, j'adore le basket. Et toi ?",
       "zh": "打过，我很喜欢打篮球。你呢？"
      },
      "audioText": "打过，我很喜欢打篮球。你呢？"
     },
     {
      "speaker": "小明",
      "hanzi": "我更喜欢踢足球，但是篮球也会打。",
      "pinyin": "Wǒ gèng xǐhuan tī zúqiú, dànshì lánqiú yě huì dǎ.",
      "meaning": {
       "en": "I prefer football, but I can play basketball too.",
       "fr": "Je préfère le foot, mais je sais aussi jouer au basket.",
       "zh": "我更喜欢踢足球，但是篮球也会打。"
      },
      "audioText": "我更喜欢踢足球，但是篮球也会打。"
     },
     {
      "speaker": "大卫",
      "hanzi": "我们一起去学校的篮球队吧！",
      "pinyin": "Wǒmen yìqǐ qù xuéxiào de lánqiú duì ba!",
      "meaning": {
       "en": "Let's join the university basketball team together!",
       "fr": "Allons ensemble dans l'équipe de basket de l'université !",
       "zh": "我们一起去学校的篮球队吧！"
      },
      "audioText": "我们一起去学校的篮球队吧！"
     }
    ]
   },
   {
    "title": {
     "en": "Have you ever...?",
     "fr": "Tu as déjà… ?",
     "zh": "你去过吗？"
    },
    "setting": {
     "en": "Mary talks about her hobbies with Anna.",
     "fr": "Mary parle de ses loisirs avec Anna.",
     "zh": "玛丽和安娜说自己的爱好。"
    },
    "lines": [
     {
      "speaker": "安娜",
      "hanzi": "玛丽，你的爱好是什么？",
      "pinyin": "Mǎlì, nǐ de àihào shì shénme?",
      "meaning": {
       "en": "Mary, what are your hobbies?",
       "fr": "Mary, quels sont tes loisirs ?",
       "zh": "玛丽，你的爱好是什么？"
      },
      "audioText": "玛丽，你的爱好是什么？"
     },
     {
      "speaker": "玛丽",
      "hanzi": "我喜欢跳舞和画画儿。",
      "pinyin": "Wǒ xǐhuan tiàowǔ hé huà huàr.",
      "meaning": {
       "en": "I like dancing and drawing.",
       "fr": "J'aime danser et dessiner.",
       "zh": "我喜欢跳舞和画画儿。"
      },
      "audioText": "我喜欢跳舞和画画儿。"
     },
     {
      "speaker": "安娜",
      "hanzi": "你学过中国舞吗？",
      "pinyin": "Nǐ xuéguo Zhōngguó wǔ ma?",
      "meaning": {
       "en": "Have you ever learned Chinese dance?",
       "fr": "Tu as déjà appris la danse chinoise ?",
       "zh": "你学过中国舞吗？"
      },
      "audioText": "你学过中国舞吗？"
     },
     {
      "speaker": "玛丽",
      "hanzi": "没学过，很想学！",
      "pinyin": "Méi xuéguo, hěn xiǎng xué!",
      "meaning": {
       "en": "No, never, but I'd love to!",
       "fr": "Jamais, mais j'ai très envie !",
       "zh": "没学过，很想学！"
      },
      "audioText": "没学过，很想学！"
     }
    ]
   },
   {
    "title": {
     "en": "Travel plans",
     "fr": "Des projets de voyage",
     "zh": "一起去旅游"
    },
    "setting": {
     "en": "The four friends plan a weekend trip.",
     "fr": "Les quatre amis préparent un voyage le week-end.",
     "zh": "四个朋友想周末一起去旅游。"
    },
    "lines": [
     {
      "speaker": "小明",
      "hanzi": "你们去过长城吗？",
      "pinyin": "Nǐmen qùguo Chángchéng ma?",
      "meaning": {
       "en": "Have you ever been to the Great Wall?",
       "fr": "Vous êtes déjà allés à la Grande Muraille ?",
       "zh": "你们去过长城吗？"
      },
      "audioText": "你们去过长城吗？"
     },
     {
      "speaker": "大卫",
      "hanzi": "我去过一次，非常有意思。",
      "pinyin": "Wǒ qùguo yí cì, fēicháng yǒu yìsi.",
      "meaning": {
       "en": "I've been once; it was really interesting.",
       "fr": "J'y suis allé une fois, c'était passionnant.",
       "zh": "我去过一次，非常有意思。"
      },
      "audioText": "我去过一次，非常有意思。"
     },
     {
      "speaker": "玛丽",
      "hanzi": "我没去过！",
      "pinyin": "Wǒ méi qùguo!",
      "meaning": {
       "en": "I've never been!",
       "fr": "Je n'y suis jamais allée !",
       "zh": "我没去过！"
      },
      "audioText": "我没去过！"
     },
     {
      "speaker": "安娜",
      "hanzi": "那这个星期六我们一起去吧！",
      "pinyin": "Nà zhège xīngqīliù wǒmen yìqǐ qù ba!",
      "meaning": {
       "en": "Then let's all go this Saturday!",
       "fr": "Alors allons-y ensemble samedi !",
       "zh": "那这个星期六我们一起去吧！"
      },
      "audioText": "那这个星期六我们一起去吧！"
     }
    ]
   }
  ],
  "story": [
   {
    "hanzi": "我很喜欢运动，跑步、游泳、打篮球我都喜欢。今天我和小明去了学校的篮球队。星期六我们四个人要一起去长城，玛丽没去过，她很高兴。",
    "pinyin": "Wǒ hěn xǐhuan yùndòng, pǎobù, yóuyǒng, dǎ lánqiú wǒ dōu xǐhuan. Jīntiān wǒ hé Xiǎomíng qù le xuéxiào de lánqiú duì. Xīngqīliù wǒmen sì ge rén yào yìqǐ qù Chángchéng, Mǎlì méi qùguo, tā hěn gāoxìng.",
    "translation": {
     "en": "I love sport: running, swimming, basketball, I like them all. Today Xiaoming and I joined the university basketball team. On Saturday the four of us are going to the Great Wall; Mary has never been and she's very happy.",
     "fr": "J'adore le sport : course, natation, basket, j'aime tout. Aujourd'hui, Xiaoming et moi avons rejoint l'équipe de basket. Samedi, nous irons à quatre à la Grande Muraille ; Mary n'y est jamais allée, elle est ravie.",
     "zh": "我很喜欢运动，跑步、游泳、打篮球我都喜欢。今天我和小明去了学校的篮球队。星期六我们四个人要一起去长城，玛丽没去过，她很高兴。"
    }
   }
  ]
 },
 "lesson-hsk2-05": {
  "scenes": [
   {
    "title": {
     "en": "The red one",
     "fr": "Le rouge",
     "zh": "红色的"
    },
    "setting": {
     "en": "Before the trip, Mary needs a warm coat.",
     "fr": "Avant le voyage, Mary a besoin d'un manteau chaud.",
     "zh": "去长城以前，玛丽想买一件衣服。"
    },
    "lines": [
     {
      "speaker": "玛丽",
      "hanzi": "安娜，这件红色的好看还是白色的好看？",
      "pinyin": "Ānnà, zhè jiàn hóngsè de hǎokàn háishi báisè de hǎokàn?",
      "meaning": {
       "en": "Anna, which looks better, the red one or the white one?",
       "fr": "Anna, lequel est le plus joli, le rouge ou le blanc ?",
       "zh": "安娜，这件红色的好看还是白色的好看？"
      },
      "audioText": "安娜，这件红色的好看还是白色的好看？"
     },
     {
      "speaker": "安娜",
      "hanzi": "红色的好看。白色的不好洗。",
      "pinyin": "Hóngsè de hǎokàn. Báisè de bù hǎo xǐ.",
      "meaning": {
       "en": "The red one. White is hard to wash.",
       "fr": "Le rouge. Le blanc, c'est difficile à laver.",
       "zh": "红色的好看。白色的不好洗。"
      },
      "audioText": "红色的好看。白色的不好洗。"
     },
     {
      "speaker": "玛丽",
      "hanzi": "那我买红色的。",
      "pinyin": "Nà wǒ mǎi hóngsè de.",
      "meaning": {
       "en": "Then I'll buy the red one.",
       "fr": "Alors je prends le rouge.",
       "zh": "那我买红色的。"
      },
      "audioText": "那我买红色的。"
     },
     {
      "speaker": "安娜",
      "hanzi": "你还要买裤子吗？",
      "pinyin": "Nǐ hái yào mǎi kùzi ma?",
      "meaning": {
       "en": "Do you need trousers too?",
       "fr": "Tu veux aussi un pantalon ?",
       "zh": "你还要买裤子吗？"
      },
      "audioText": "你还要买裤子吗？"
     },
     {
      "speaker": "玛丽",
      "hanzi": "要一条黑色的。",
      "pinyin": "Yào yì tiáo hēisè de.",
      "meaning": {
       "en": "Yes, a pair of black ones.",
       "fr": "Oui, un noir.",
       "zh": "要一条黑色的。"
      },
      "audioText": "要一条黑色的。"
     }
    ]
   },
   {
    "title": {
     "en": "Whose bag?",
     "fr": "À qui est ce sac ?",
     "zh": "这是谁的包？"
    },
    "setting": {
     "en": "On the Great Wall, someone has left a bag on a step.",
     "fr": "Sur la Grande Muraille, quelqu'un a laissé un sac sur une marche.",
     "zh": "在长城上，有一个包没有人拿。"
    },
    "lines": [
     {
      "speaker": "大卫",
      "hanzi": "这个绿色的包是谁的？",
      "pinyin": "Zhège lǜsè de bāo shì shéi de?",
      "meaning": {
       "en": "Whose is this green bag?",
       "fr": "À qui est ce sac vert ?",
       "zh": "这个绿色的包是谁的？"
      },
      "audioText": "这个绿色的包是谁的？"
     },
     {
      "speaker": "小明",
      "hanzi": "不是我的，我的是黑色的。",
      "pinyin": "Bú shì wǒ de, wǒ de shì hēisè de.",
      "meaning": {
       "en": "Not mine, mine is black.",
       "fr": "Pas à moi, le mien est noir.",
       "zh": "不是我的，我的是黑色的。"
      },
      "audioText": "不是我的，我的是黑色的。"
     },
     {
      "speaker": "安娜",
      "hanzi": "也不是我的。",
      "pinyin": "Yě bú shì wǒ de.",
      "meaning": {
       "en": "Not mine either.",
       "fr": "Ce n'est pas le mien non plus.",
       "zh": "也不是我的。"
      },
      "audioText": "也不是我的。"
     },
     {
      "speaker": "玛丽",
      "hanzi": "是我的！谢谢你，大卫！",
      "pinyin": "Shì wǒ de! Xièxie nǐ, Dàwèi!",
      "meaning": {
       "en": "It's mine! Thank you, David!",
       "fr": "C'est le mien ! Merci, David !",
       "zh": "是我的！谢谢你，大卫！"
      },
      "audioText": "是我的！谢谢你，大卫！"
     }
    ]
   },
   {
    "title": {
     "en": "A new watch",
     "fr": "Une nouvelle montre",
     "zh": "新手表"
    },
    "setting": {
     "en": "On the way back, Xiaoming notices David's new watch.",
     "fr": "Au retour, Xiaoming remarque la nouvelle montre de David.",
     "zh": "回来的路上，小明看见大卫的新手表。"
    },
    "lines": [
     {
      "speaker": "小明",
      "hanzi": "你的手表真好看，是新的吗？",
      "pinyin": "Nǐ de shǒubiǎo zhēn hǎokàn, shì xīn de ma?",
      "meaning": {
       "en": "Your watch is lovely. Is it new?",
       "fr": "Ta montre est très jolie, elle est neuve ?",
       "zh": "你的手表真好看，是新的吗？"
      },
      "audioText": "你的手表真好看，是新的吗？"
     },
     {
      "speaker": "大卫",
      "hanzi": "是我妈妈送我的。",
      "pinyin": "Shì wǒ māma sòng wǒ de.",
      "meaning": {
       "en": "My mum gave it to me.",
       "fr": "C'est ma mère qui me l'a offerte.",
       "zh": "是我妈妈送我的。"
      },
      "audioText": "是我妈妈送我的。"
     },
     {
      "speaker": "小明",
      "hanzi": "什么颜色的？是白色的吗？",
      "pinyin": "Shénme yánsè de? Shì báisè de ma?",
      "meaning": {
       "en": "What colour is it? White?",
       "fr": "De quelle couleur ? Blanche ?",
       "zh": "什么颜色的？是白色的吗？"
      },
      "audioText": "什么颜色的？是白色的吗？"
     },
     {
      "speaker": "大卫",
      "hanzi": "不是，是银色的。",
      "pinyin": "Bú shì, shì yínsè de.",
      "meaning": {
       "en": "No, it's silver.",
       "fr": "Non, elle est argentée.",
       "zh": "不是，是银色的。"
      },
      "audioText": "不是，是银色的。"
     }
    ]
   }
  ],
  "story": [
   {
    "hanzi": "今天我们去长城了。天气很冷，玛丽穿了一件红色的新衣服，很好看。她的包是绿色的，差一点儿就不见了。",
    "pinyin": "Jīntiān wǒmen qù Chángchéng le. Tiānqì hěn lěng, Mǎlì chuān le yí jiàn hóngsè de xīn yīfu, hěn hǎokàn. Tā de bāo shì lǜsè de, chà yìdiǎnr jiù bújiàn le.",
    "translation": {
     "en": "Today we went to the Great Wall. It was very cold; Mary wore a lovely new red coat. Her bag is green, and it almost got lost.",
     "fr": "Aujourd'hui, nous sommes allés à la Grande Muraille. Il faisait très froid ; Mary portait un nouveau manteau rouge, très joli. Son sac est vert, et il a failli disparaître.",
     "zh": "今天我们去长城了。天气很冷，玛丽穿了一件红色的新衣服，很好看。她的包是绿色的，差一点儿就不见了。"
    }
   }
  ]
 },
 "lesson-hsk2-06": {
  "scenes": [
   {
    "title": {
     "en": "Grandparents",
     "fr": "Les grands-parents",
     "zh": "爷爷奶奶"
    },
    "setting": {
     "en": "Xiaoming shows a photo of his grandparents, who live in the countryside.",
     "fr": "Xiaoming montre une photo de ses grands-parents, qui vivent à la campagne.",
     "zh": "小明给朋友们看爷爷奶奶的照片。"
    },
    "lines": [
     {
      "speaker": "小明",
      "hanzi": "这是我爷爷，这是我奶奶。",
      "pinyin": "Zhè shì wǒ yéye, zhè shì wǒ nǎinai.",
      "meaning": {
       "en": "This is my grandpa, and this is my grandma.",
       "fr": "Voici mon grand-père, et voici ma grand-mère.",
       "zh": "这是我爷爷，这是我奶奶。"
      },
      "audioText": "这是我爷爷，这是我奶奶。"
     },
     {
      "speaker": "玛丽",
      "hanzi": "你爷爷个子真高！",
      "pinyin": "Nǐ yéye gèzi zhēn gāo!",
      "meaning": {
       "en": "Your grandpa is really tall!",
       "fr": "Ton grand-père est vraiment grand !",
       "zh": "你爷爷个子真高！"
      },
      "audioText": "你爷爷个子真高！"
     },
     {
      "speaker": "小明",
      "hanzi": "对，他一米八。奶奶眼睛很大，很爱笑。",
      "pinyin": "Duì, tā yì mǐ bā. Nǎinai yǎnjing hěn dà, hěn ài xiào.",
      "meaning": {
       "en": "Yes, he's 1.80 m. Grandma has big eyes and loves to laugh.",
       "fr": "Oui, il mesure un mètre quatre-vingts. Grand-mère a de grands yeux et adore rire.",
       "zh": "对，他一米八。奶奶眼睛很大，很爱笑。"
      },
      "audioText": "对，他一米八。奶奶眼睛很大，很爱笑。"
     },
     {
      "speaker": "安娜",
      "hanzi": "他们住在北京吗？",
      "pinyin": "Tāmen zhù zài Běijīng ma?",
      "meaning": {
       "en": "Do they live in Beijing?",
       "fr": "Ils habitent à Pékin ?",
       "zh": "他们住在北京吗？"
      },
      "audioText": "他们住在北京吗？"
     },
     {
      "speaker": "小明",
      "hanzi": "不，他们住在南方。",
      "pinyin": "Bù, tāmen zhù zài nánfāng.",
      "meaning": {
       "en": "No, they live in the south.",
       "fr": "Non, ils habitent dans le sud.",
       "zh": "不，他们住在南方。"
      },
      "audioText": "不，他们住在南方。"
     }
    ]
   },
   {
    "title": {
     "en": "When I was little",
     "fr": "Quand j'étais petit",
     "zh": "小时候"
    },
    "setting": {
     "en": "Another photo shows a little boy with long hair.",
     "fr": "Une autre photo montre un petit garçon aux cheveux longs.",
     "zh": "另一张照片上有一个头发很长的小男孩儿。"
    },
    "lines": [
     {
      "speaker": "大卫",
      "hanzi": "这个小男孩儿是谁？",
      "pinyin": "Zhège xiǎo nánháir shì shéi?",
      "meaning": {
       "en": "Who's this little boy?",
       "fr": "Qui est ce petit garçon ?",
       "zh": "这个小男孩儿是谁？"
      },
      "audioText": "这个小男孩儿是谁？"
     },
     {
      "speaker": "小明",
      "hanzi": "是我！那时候我五岁。",
      "pinyin": "Shì wǒ! Nà shíhou wǒ wǔ suì.",
      "meaning": {
       "en": "It's me! I was five then.",
       "fr": "C'est moi ! J'avais cinq ans.",
       "zh": "是我！那时候我五岁。"
      },
      "audioText": "是我！那时候我五岁。"
     },
     {
      "speaker": "大卫",
      "hanzi": "你的头发真长！",
      "pinyin": "Nǐ de tóufa zhēn cháng!",
      "meaning": {
       "en": "Your hair was so long!",
       "fr": "Tu avais les cheveux si longs !",
       "zh": "你的头发真长！"
      },
      "audioText": "你的头发真长！"
     },
     {
      "speaker": "小明",
      "hanzi": "是啊，奶奶不想让我剪。",
      "pinyin": "Shì a, nǎinai bù xiǎng ràng wǒ jiǎn.",
      "meaning": {
       "en": "Yes, Grandma didn't want me to cut it.",
       "fr": "Oui, ma grand-mère ne voulait pas que je les coupe.",
       "zh": "是啊，奶奶不想让我剪。"
      },
      "audioText": "是啊，奶奶不想让我剪。"
     }
    ]
   },
   {
    "title": {
     "en": "Husband and wife",
     "fr": "Mari et femme",
     "zh": "丈夫和妻子"
    },
    "setting": {
     "en": "Mr Wang comes into the café with a woman.",
     "fr": "Le professeur Wang entre dans le café avec une femme.",
     "zh": "王老师和一个女人来到咖啡馆。"
    },
    "lines": [
     {
      "speaker": "王老师",
      "hanzi": "同学们好！这是我妻子。",
      "pinyin": "Tóngxuémen hǎo! Zhè shì wǒ qīzi.",
      "meaning": {
       "en": "Hello, everyone! This is my wife.",
       "fr": "Bonjour à tous ! Voici ma femme.",
       "zh": "同学们好！这是我妻子。"
      },
      "audioText": "同学们好！这是我妻子。"
     },
     {
      "speaker": "安娜",
      "hanzi": "您好！",
      "pinyin": "Nín hǎo!",
      "meaning": {
       "en": "Hello!",
       "fr": "Bonjour, madame !",
       "zh": "您好！"
      },
      "audioText": "您好！"
     },
     {
      "speaker": "王老师的妻子",
      "hanzi": "你们好！我丈夫常常说你们很努力。",
      "pinyin": "Nǐmen hǎo! Wǒ zhàngfu chángcháng shuō nǐmen hěn nǔlì.",
      "meaning": {
       "en": "Hello! My husband often says you work very hard.",
       "fr": "Bonjour ! Mon mari dit souvent que vous travaillez beaucoup.",
       "zh": "你们好！我丈夫常常说你们很努力。"
      },
      "audioText": "你们好！我丈夫常常说你们很努力。"
     },
     {
      "speaker": "大卫",
      "hanzi": "谢谢！王老师自己也很努力。",
      "pinyin": "Xièxie! Wáng lǎoshī zìjǐ yě hěn nǔlì.",
      "meaning": {
       "en": "Thank you! Mr Wang works very hard himself.",
       "fr": "Merci ! Le professeur Wang aussi travaille beaucoup.",
       "zh": "谢谢！王老师自己也很努力。"
      },
      "audioText": "谢谢！王老师自己也很努力。"
     }
    ]
   }
  ],
  "story": [
   {
    "hanzi": "小明的爷爷个子很高，奶奶眼睛很大。小明小时候头发很长，很可爱。今天我们还看见了王老师的妻子，她很爱笑。",
    "pinyin": "Xiǎomíng de yéye gèzi hěn gāo, nǎinai yǎnjing hěn dà. Xiǎomíng xiǎoshíhou tóufa hěn cháng, hěn kě'ài. Jīntiān wǒmen hái kànjiàn le Wáng lǎoshī de qīzi, tā hěn ài xiào.",
    "translation": {
     "en": "Xiaoming's grandpa is very tall, and his grandma has big eyes. When Xiaoming was little, he had long hair and was very cute. Today we also met Mr Wang's wife; she loves to laugh.",
     "fr": "Le grand-père de Xiaoming est très grand, et sa grand-mère a de grands yeux. Petit, Xiaoming avait les cheveux longs, il était adorable. Aujourd'hui, nous avons aussi rencontré la femme du professeur Wang ; elle rit beaucoup.",
     "zh": "小明的爷爷个子很高，奶奶眼睛很大。小明小时候头发很长，很可爱。今天我们还看见了王老师的妻子，她很爱笑。"
    }
   }
  ]
 },
 "lesson-hsk2-11": {
  "scenes": [
   {
    "title": {
     "en": "Why so tired?",
     "fr": "Pourquoi si fatigué ?",
     "zh": "你为什么这么累？"
    },
    "setting": {
     "en": "Monday morning. Xiaoming can barely keep his eyes open.",
     "fr": "Lundi matin. Xiaoming garde à peine les yeux ouverts.",
     "zh": "星期一早上，小明很累。"
    },
    "lines": [
     {
      "speaker": "大卫",
      "hanzi": "小明，你为什么这么累？",
      "pinyin": "Xiǎomíng, nǐ wèi shénme zhème lèi?",
      "meaning": {
       "en": "Xiaoming, why are you so tired?",
       "fr": "Xiaoming, pourquoi es-tu si fatigué ?",
       "zh": "小明，你为什么这么累？"
      },
      "audioText": "小明，你为什么这么累？"
     },
     {
      "speaker": "小明",
      "hanzi": "因为昨天晚上有篮球比赛，所以我睡得很晚。",
      "pinyin": "Yīnwèi zuótiān wǎnshang yǒu lánqiú bǐsài, suǒyǐ wǒ shuì de hěn wǎn.",
      "meaning": {
       "en": "Because there was a basketball match last night, I went to bed late.",
       "fr": "Comme il y avait un match de basket hier soir, je me suis couché tard.",
       "zh": "因为昨天晚上有篮球比赛，所以我睡得很晚。"
      },
      "audioText": "因为昨天晚上有篮球比赛，所以我睡得很晚。"
     },
     {
      "speaker": "大卫",
      "hanzi": "你们赢了吗？",
      "pinyin": "Nǐmen yíng le ma?",
      "meaning": {
       "en": "Did you win?",
       "fr": "Vous avez gagné ?",
       "zh": "你们赢了吗？"
      },
      "audioText": "你们赢了吗？"
     },
     {
      "speaker": "小明",
      "hanzi": "虽然我们很努力，但是没赢。",
      "pinyin": "Suīrán wǒmen hěn nǔlì, dànshì méi yíng.",
      "meaning": {
       "en": "Although we tried hard, we didn't win.",
       "fr": "On a fait de notre mieux, mais on n'a pas gagné.",
       "zh": "虽然我们很努力，但是没赢。"
      },
      "audioText": "虽然我们很努力，但是没赢。"
     }
    ]
   },
   {
    "title": {
     "en": "The best teacher",
     "fr": "Le meilleur professeur",
     "zh": "最好的老师"
    },
    "setting": {
     "en": "Mary asks why everyone likes Mr Wang.",
     "fr": "Mary demande pourquoi tout le monde aime le professeur Wang.",
     "zh": "玛丽问为什么大家都喜欢王老师。"
    },
    "lines": [
     {
      "speaker": "玛丽",
      "hanzi": "为什么你们都说王老师最好？",
      "pinyin": "Wèi shénme nǐmen dōu shuō Wáng lǎoshī zuì hǎo?",
      "meaning": {
       "en": "Why do you all say Mr Wang is the best?",
       "fr": "Pourquoi dites-vous tous que le professeur Wang est le meilleur ?",
       "zh": "为什么你们都说王老师最好？"
      },
      "audioText": "为什么你们都说王老师最好？"
     },
     {
      "speaker": "安娜",
      "hanzi": "因为他上课很有意思，他的问题也很有意思。",
      "pinyin": "Yīnwèi tā shàngkè hěn yǒu yìsi, tā de wèntí yě hěn yǒu yìsi.",
      "meaning": {
       "en": "Because his classes are fun, and so are his questions.",
       "fr": "Parce que ses cours sont intéressants, et ses questions aussi.",
       "zh": "因为他上课很有意思，他的问题也很有意思。"
      },
      "audioText": "因为他上课很有意思，他的问题也很有意思。"
     },
     {
      "speaker": "大卫",
      "hanzi": "虽然他的作业很多，但是我们都喜欢他。",
      "pinyin": "Suīrán tā de zuòyè hěn duō, dànshì wǒmen dōu xǐhuan tā.",
      "meaning": {
       "en": "Even though he gives lots of homework, we all like him.",
       "fr": "Même s'il donne beaucoup de devoirs, on l'aime tous.",
       "zh": "虽然他的作业很多，但是我们都喜欢他。"
      },
      "audioText": "虽然他的作业很多，但是我们都喜欢他。"
     }
    ]
   },
   {
    "title": {
     "en": "Like this",
     "fr": "Comme ça",
     "zh": "这样说"
    },
    "setting": {
     "en": "In class, Mr Wang corrects Mary's sentence.",
     "fr": "En classe, le professeur Wang corrige une phrase de Mary.",
     "zh": "上课的时候，王老师帮玛丽改句子。"
    },
    "lines": [
     {
      "speaker": "玛丽",
      "hanzi": "老师，“我很累，因为我工作”，这样说对吗？",
      "pinyin": "Lǎoshī, \"wǒ hěn lèi, yīnwèi wǒ gōngzuò\", zhèyàng shuō duì ma?",
      "meaning": {
       "en": "Teacher, “我很累，因为我工作” — is it right to say it like that?",
       "fr": "Professeur, « 我很累，因为我工作 », c'est correct de dire ça ?",
       "zh": "老师，“我很累，因为我工作”，这样说对吗？"
      },
      "audioText": "老师，“我很累，因为我工作”，这样说对吗？"
     },
     {
      "speaker": "王老师",
      "hanzi": "我们一般那样说：“因为工作，所以我很累。”",
      "pinyin": "Wǒmen yìbān nàyàng shuō: \"yīnwèi gōngzuò, suǒyǐ wǒ hěn lèi.\"",
      "meaning": {
       "en": "We usually say it like this: “因为工作，所以我很累。”",
       "fr": "On le dit plutôt comme ça : « 因为工作，所以我很累。 »",
       "zh": "我们一般那样说：“因为工作，所以我很累。”"
      },
      "audioText": "我们一般那样说：“因为工作，所以我很累。”"
     },
     {
      "speaker": "玛丽",
      "hanzi": "懂了，原因在前边。",
      "pinyin": "Dǒng le, yuányīn zài qiánbian.",
      "meaning": {
       "en": "I see: the reason goes first.",
       "fr": "Compris, la cause vient en premier.",
       "zh": "懂了，原因在前边。"
      },
      "audioText": "懂了，原因在前边。"
     },
     {
      "speaker": "王老师",
      "hanzi": "对，你说得很好！",
      "pinyin": "Duì, nǐ shuō de hěn hǎo!",
      "meaning": {
       "en": "Exactly, well said!",
       "fr": "Exactement, très bien !",
       "zh": "对，你说得很好！"
      },
      "audioText": "对，你说得很好！"
     }
    ]
   }
  ],
  "story": [
   {
    "hanzi": "因为昨天有篮球比赛，所以小明今天很累。虽然他们没赢，但是大家都很高兴。王老师是我们最喜欢的老师，因为他的课很有意思。",
    "pinyin": "Yīnwèi zuótiān yǒu lánqiú bǐsài, suǒyǐ Xiǎomíng jīntiān hěn lèi. Suīrán tāmen méi yíng, dànshì dàjiā dōu hěn gāoxìng. Wáng lǎoshī shì wǒmen zuì xǐhuan de lǎoshī, yīnwèi tā de kè hěn yǒu yìsi.",
    "translation": {
     "en": "Because there was a basketball match yesterday, Xiaoming is very tired today. Although they didn't win, everyone was happy. Mr Wang is our favourite teacher because his classes are interesting.",
     "fr": "Comme il y avait un match de basket hier, Xiaoming est très fatigué aujourd'hui. Ils n'ont pas gagné, mais tout le monde était content. Le professeur Wang est notre professeur préféré, parce que ses cours sont intéressants.",
     "zh": "因为昨天有篮球比赛，所以小明今天很累。虽然他们没赢，但是大家都很高兴。王老师是我们最喜欢的老师，因为他的课很有意思。"
    }
   }
  ]
 },
 "lesson-hsk2-07": {
  "scenes": [
   {
    "title": {
     "en": "Is it far?",
     "fr": "C'est loin ?",
     "zh": "远不远？"
    },
    "setting": {
     "en": "Mary wants to find a bookshop she saw online.",
     "fr": "Mary veut trouver une librairie qu'elle a vue en ligne.",
     "zh": "玛丽想去一个书店。"
    },
    "lines": [
     {
      "speaker": "玛丽",
      "hanzi": "小明，那个书店离学校远吗？",
      "pinyin": "Xiǎomíng, nàge shūdiàn lí xuéxiào yuǎn ma?",
      "meaning": {
       "en": "Xiaoming, is that bookshop far from the university?",
       "fr": "Xiaoming, cette librairie est loin de l'université ?",
       "zh": "小明，那个书店离学校远吗？"
      },
      "audioText": "小明，那个书店离学校远吗？"
     },
     {
      "speaker": "小明",
      "hanzi": "不远，很近，走路十分钟。",
      "pinyin": "Bù yuǎn, hěn jìn, zǒulù shí fēnzhōng.",
      "meaning": {
       "en": "Not far, very close: ten minutes on foot.",
       "fr": "Non, c'est tout près : dix minutes à pied.",
       "zh": "不远，很近，走路十分钟。"
      },
      "audioText": "不远，很近，走路十分钟。"
     },
     {
      "speaker": "玛丽",
      "hanzi": "怎么走？",
      "pinyin": "Zěnme zǒu?",
      "meaning": {
       "en": "How do I get there?",
       "fr": "Comment on y va ?",
       "zh": "怎么走？"
      },
      "audioText": "怎么走？"
     },
     {
      "speaker": "小明",
      "hanzi": "出了学校往右走，在路的左边。",
      "pinyin": "Chū le xuéxiào wǎng yòu zǒu, zài lù de zuǒbian.",
      "meaning": {
       "en": "Leave the university, go right, and it's on the left side of the road.",
       "fr": "En sortant de l'université, va à droite, c'est sur le côté gauche de la route.",
       "zh": "出了学校往右走，在路的左边。"
      },
      "audioText": "出了学校往右走，在路的左边。"
     }
    ]
   },
   {
    "title": {
     "en": "Left or right?",
     "fr": "À gauche ou à droite ?",
     "zh": "左边还是右边？"
    },
    "setting": {
     "en": "Mary is lost and calls Xiaoming.",
     "fr": "Mary s'est perdue et appelle Xiaoming.",
     "zh": "玛丽找不到书店，给小明打电话。"
    },
    "lines": [
     {
      "speaker": "玛丽",
      "hanzi": "小明，我在一个饭馆前面，书店在哪儿？",
      "pinyin": "Xiǎomíng, wǒ zài yí ge fànguǎn qiánmiàn, shūdiàn zài nǎr?",
      "meaning": {
       "en": "Xiaoming, I'm in front of a restaurant. Where's the bookshop?",
       "fr": "Xiaoming, je suis devant un restaurant. Où est la librairie ?",
       "zh": "小明，我在一个饭馆前面，书店在哪儿？"
      },
      "audioText": "小明，我在一个饭馆前面，书店在哪儿？"
     },
     {
      "speaker": "小明",
      "hanzi": "你往前走，书店在饭馆旁边。",
      "pinyin": "Nǐ wǎng qián zǒu, shūdiàn zài fànguǎn pángbiān.",
      "meaning": {
       "en": "Keep going; the bookshop is next to the restaurant.",
       "fr": "Continue tout droit, la librairie est à côté du restaurant.",
       "zh": "你往前走，书店在饭馆旁边。"
      },
      "audioText": "你往前走，书店在饭馆旁边。"
     },
     {
      "speaker": "玛丽",
      "hanzi": "左边还是右边？",
      "pinyin": "Zuǒbian háishi yòubian?",
      "meaning": {
       "en": "On the left or the right?",
       "fr": "À gauche ou à droite ?",
       "zh": "左边还是右边？"
      },
      "audioText": "左边还是右边？"
     },
     {
      "speaker": "小明",
      "hanzi": "右边，有一个很大的门。",
      "pinyin": "Yòubian, yǒu yí ge hěn dà de mén.",
      "meaning": {
       "en": "On the right, there's a big door.",
       "fr": "À droite, il y a une grande porte.",
       "zh": "右边，有一个很大的门。"
      },
      "audioText": "右边，有一个很大的门。"
     },
     {
      "speaker": "玛丽",
      "hanzi": "看见了！谢谢！",
      "pinyin": "Kànjiàn le! Xièxie!",
      "meaning": {
       "en": "I see it! Thanks!",
       "fr": "Je la vois ! Merci !",
       "zh": "看见了！谢谢！"
      },
      "audioText": "看见了！谢谢！"
     }
    ]
   },
   {
    "title": {
     "en": "Inside the bookshop",
     "fr": "Dans la librairie",
     "zh": "在书店里面"
    },
    "setting": {
     "en": "Inside, Mary meets Anna by chance.",
     "fr": "À l'intérieur, Mary croise Anna par hasard.",
     "zh": "在书店里面，玛丽看见了安娜。"
    },
    "lines": [
     {
      "speaker": "安娜",
      "hanzi": "玛丽，你也来了！",
      "pinyin": "Mǎlì, nǐ yě lái le!",
      "meaning": {
       "en": "Mary, you're here too!",
       "fr": "Mary, toi aussi tu es là !",
       "zh": "玛丽，你也来了！"
      },
      "audioText": "玛丽，你也来了！"
     },
     {
      "speaker": "玛丽",
      "hanzi": "是啊。汉语书在哪儿？",
      "pinyin": "Shì a. Hànyǔ shū zài nǎr?",
      "meaning": {
       "en": "Yes. Where are the Chinese books?",
       "fr": "Oui. Où sont les livres de chinois ?",
       "zh": "是啊。汉语书在哪儿？"
      },
      "audioText": "是啊。汉语书在哪儿？"
     },
     {
      "speaker": "安娜",
      "hanzi": "在上面，楼上。我们一起去吧。",
      "pinyin": "Zài shàngmiàn, lóushàng. Wǒmen yìqǐ qù ba.",
      "meaning": {
       "en": "Upstairs. Let's go together.",
       "fr": "En haut, à l'étage. Allons-y ensemble.",
       "zh": "在上面，楼上。我们一起去吧。"
      },
      "audioText": "在上面，楼上。我们一起去吧。"
     }
    ]
   }
  ],
  "story": [
   {
    "hanzi": "那个书店离学校很近，可是我还是找不到。小明告诉我往前走，书店就在饭馆的右边。在书店里面我看见了安娜，我们一起买了很多书。",
    "pinyin": "Nàge shūdiàn lí xuéxiào hěn jìn, kěshì wǒ háishi zhǎo bu dào. Xiǎomíng gàosu wǒ wǎng qián zǒu, shūdiàn jiù zài fànguǎn de yòubian. Zài shūdiàn lǐmiàn wǒ kànjiàn le Ānnà, wǒmen yìqǐ mǎi le hěn duō shū.",
    "translation": {
     "en": "That bookshop is very close to the university, but I still couldn't find it. Xiaoming told me to go straight on: the bookshop was just to the right of the restaurant. Inside, I saw Anna and we bought lots of books together. (Mary)",
     "fr": "Cette librairie est tout près de l'université, mais je ne la trouvais pas. Xiaoming m'a dit d'aller tout droit : elle était juste à droite du restaurant. À l'intérieur, j'ai vu Anna et nous avons acheté plein de livres ensemble. (Mary)",
     "zh": "那个书店离学校很近，可是我还是找不到。小明告诉我往前走，书店就在饭馆的右边。在书店里面我看见了安娜，我们一起买了很多书。"
    }
   }
  ]
 },
 "lesson-hsk2-09": {
  "scenes": [
   {
    "title": {
     "en": "To the museum",
     "fr": "Vers le musée",
     "zh": "去博物馆"
    },
    "setting": {
     "en": "Saturday. The friends want to go to a museum across the city.",
     "fr": "Samedi. Les amis veulent aller dans un musée à l'autre bout de la ville.",
     "zh": "星期六，朋友们想去一个很远的地方玩儿。"
    },
    "lines": [
     {
      "speaker": "大卫",
      "hanzi": "我们怎么去？坐地铁还是打车？",
      "pinyin": "Wǒmen zěnme qù? Zuò dìtiě háishi dǎchē?",
      "meaning": {
       "en": "How shall we go? Underground or taxi?",
       "fr": "Comment on y va ? Métro ou taxi ?",
       "zh": "我们怎么去？坐地铁还是打车？"
      },
      "audioText": "我们怎么去？坐地铁还是打车？"
     },
     {
      "speaker": "小明",
      "hanzi": "坐地铁吧，地铁站就在学校门口。",
      "pinyin": "Zuò dìtiě ba, dìtiě zhàn jiù zài xuéxiào ménkǒu.",
      "meaning": {
       "en": "Let's take the underground; the station is right at the university gate.",
       "fr": "Prenons le métro, la station est juste devant l'université.",
       "zh": "坐地铁吧，地铁站就在学校门口。"
      },
      "audioText": "坐地铁吧，地铁站就在学校门口。"
     },
     {
      "speaker": "玛丽",
      "hanzi": "地铁票多少钱？",
      "pinyin": "Dìtiě piào duōshao qián?",
      "meaning": {
       "en": "How much is an underground ticket?",
       "fr": "Combien coûte un ticket de métro ?",
       "zh": "地铁票多少钱？"
      },
      "audioText": "地铁票多少钱？"
     },
     {
      "speaker": "小明",
      "hanzi": "五块。门票是四十块。",
      "pinyin": "Wǔ kuài. Ménpiào shì sìshí kuài.",
      "meaning": {
       "en": "Five yuan. The entrance ticket is forty.",
       "fr": "Cinq yuans. L'entrée coûte quarante yuans.",
       "zh": "五块。门票是四十块。"
      },
      "audioText": "五块。门票是四十块。"
     }
    ]
   },
   {
    "title": {
     "en": "Where's the toilet?",
     "fr": "Où sont les toilettes ?",
     "zh": "洗手间在哪儿？"
    },
    "setting": {
     "en": "In the station, Mary asks a staff member for help.",
     "fr": "Dans la station, Mary demande de l'aide à un employé.",
     "zh": "在地铁站，玛丽问工作人员。"
    },
    "lines": [
     {
      "speaker": "玛丽",
      "hanzi": "请问，洗手间在哪儿？",
      "pinyin": "Qǐngwèn, xǐshǒujiān zài nǎr?",
      "meaning": {
       "en": "Excuse me, where's the toilet?",
       "fr": "Excusez-moi, où sont les toilettes ?",
       "zh": "请问，洗手间在哪儿？"
      },
      "audioText": "请问，洗手间在哪儿？"
     },
     {
      "speaker": "工作人员",
      "hanzi": "在那个门口，往左走。",
      "pinyin": "Zài nàge ménkǒu, wǎng zuǒ zǒu.",
      "meaning": {
       "en": "At that exit, go left.",
       "fr": "À cette sortie, allez à gauche.",
       "zh": "在那个门口，往左走。"
      },
      "audioText": "在那个门口，往左走。"
     },
     {
      "speaker": "玛丽",
      "hanzi": "谢谢！附近有药店吗？我有点儿头疼。",
      "pinyin": "Xièxie! Fùjìn yǒu yàodiàn ma? Wǒ yǒudiǎnr tóu téng.",
      "meaning": {
       "en": "Thanks! Is there a pharmacy nearby? I have a slight headache.",
       "fr": "Merci ! Il y a une pharmacie près d'ici ? J'ai un peu mal à la tête.",
       "zh": "谢谢！附近有药店吗？我有点儿头疼。"
      },
      "audioText": "谢谢！附近有药店吗？我有点儿头疼。"
     },
     {
      "speaker": "工作人员",
      "hanzi": "有，商场一楼有药店。",
      "pinyin": "Yǒu, shāngchǎng yì lóu yǒu yàodiàn.",
      "meaning": {
       "en": "Yes, there's one on the ground floor of the shopping centre.",
       "fr": "Oui, il y en a une au rez-de-chaussée du centre commercial.",
       "zh": "有，商场一楼有药店。"
      },
      "audioText": "有，商场一楼有药店。"
     }
    ]
   },
   {
    "title": {
     "en": "Lost in the city",
     "fr": "Perdus en ville",
     "zh": "走错路了"
    },
    "setting": {
     "en": "After the museum, they can't find the restaurant they booked.",
     "fr": "Après le musée, ils ne trouvent pas le restaurant qu'ils ont réservé.",
     "zh": "从博物馆出来，他们找不到饭馆了。"
    },
    "lines": [
     {
      "speaker": "安娜",
      "hanzi": "我们走错路了吗？",
      "pinyin": "Wǒmen zǒu cuò lù le ma?",
      "meaning": {
       "en": "Did we take the wrong way?",
       "fr": "On s'est trompés de chemin ?",
       "zh": "我们走错路了吗？"
      },
      "audioText": "我们走错路了吗？"
     },
     {
      "speaker": "大卫",
      "hanzi": "可能。我问一下。请问，去这个饭馆怎么走？",
      "pinyin": "Kěnéng. Wǒ wèn yíxià. Qǐngwèn, qù zhège fànguǎn zěnme zǒu?",
      "meaning": {
       "en": "Maybe. Let me ask. Excuse me, how do we get to this restaurant?",
       "fr": "Peut-être. Je vais demander. Excusez-moi, comment va-t-on à ce restaurant ?",
       "zh": "可能。我问一下。请问，去这个饭馆怎么走？"
      },
      "audioText": "可能。我问一下。请问，去这个饭馆怎么走？"
     },
     {
      "speaker": "路人",
      "hanzi": "在那个酒店楼下，走路五分钟。",
      "pinyin": "Zài nàge jiǔdiàn lóuxià, zǒulù wǔ fēnzhōng.",
      "meaning": {
       "en": "It's below that hotel, five minutes' walk.",
       "fr": "Il est au pied de cet hôtel, à cinq minutes à pied.",
       "zh": "在那个酒店楼下，走路五分钟。"
      },
      "audioText": "在那个酒店楼下，走路五分钟。"
     },
     {
      "speaker": "大卫",
      "hanzi": "太好了，谢谢您！",
      "pinyin": "Tài hǎo le, xièxie nín!",
      "meaning": {
       "en": "Great, thank you!",
       "fr": "Super, merci !",
       "zh": "太好了，谢谢您！"
      },
      "audioText": "太好了，谢谢您！"
     }
    ]
   }
  ],
  "story": [
   {
    "hanzi": "星期六我们坐地铁去了博物馆。地铁站就在学校门口，很方便。回来的时候我们走错了路，一个人告诉我们饭馆在酒店楼下。",
    "pinyin": "Xīngqīliù wǒmen zuò dìtiě qù le bówùguǎn. Dìtiě zhàn jiù zài xuéxiào ménkǒu, hěn fāngbiàn. Huílai de shíhou wǒmen zǒu cuò le lù, yí ge rén gàosu wǒmen fànguǎn zài jiǔdiàn lóuxià.",
    "translation": {
     "en": "On Saturday we took the underground to the museum. The station is right at the university gate, very convenient. On the way back we got lost; someone told us the restaurant was below the hotel.",
     "fr": "Samedi, nous sommes allés au musée en métro. La station est juste devant l'université, c'est très pratique. Au retour, nous nous sommes perdus ; quelqu'un nous a dit que le restaurant était au pied de l'hôtel.",
     "zh": "星期六我们坐地铁去了博物馆。地铁站就在学校门口，很方便。回来的时候我们走错了路，一个人告诉我们饭馆在酒店楼下。"
    }
   }
  ]
 },
 "lesson-hsk2-13": {
  "scenes": [
   {
    "title": {
     "en": "Can you help me?",
     "fr": "Tu peux m'aider ?",
     "zh": "你能帮我吗？"
    },
    "setting": {
     "en": "Mary is moving to a new room and has too many things.",
     "fr": "Mary change de chambre et a trop d'affaires.",
     "zh": "玛丽要换房间，东西太多了。"
    },
    "lines": [
     {
      "speaker": "玛丽",
      "hanzi": "不好意思，大卫，你能帮我一个忙吗？",
      "pinyin": "Bù hǎoyìsi, Dàwèi, nǐ néng bāng wǒ yí ge máng ma?",
      "meaning": {
       "en": "Sorry to bother you, David, can you do me a favour?",
       "fr": "Excuse-moi, David, tu peux me rendre un service ?",
       "zh": "不好意思，大卫，你能帮我一个忙吗？"
      },
      "audioText": "不好意思，大卫，你能帮我一个忙吗？"
     },
     {
      "speaker": "大卫",
      "hanzi": "可以啊，什么事？",
      "pinyin": "Kěyǐ a, shénme shì?",
      "meaning": {
       "en": "Sure, what is it?",
       "fr": "Bien sûr, qu'est-ce qu'il y a ?",
       "zh": "可以啊，什么事？"
      },
      "audioText": "可以啊，什么事？"
     },
     {
      "speaker": "玛丽",
      "hanzi": "帮我拿这些东西到新房间，好吗？",
      "pinyin": "Bāng wǒ ná zhèxiē dōngxi dào xīn fángjiān, hǎo ma?",
      "meaning": {
       "en": "Help me carry these things to my new room, OK?",
       "fr": "Aide-moi à porter ces affaires dans ma nouvelle chambre, d'accord ?",
       "zh": "帮我拿这些东西到新房间，好吗？"
      },
      "audioText": "帮我拿这些东西到新房间，好吗？"
     },
     {
      "speaker": "大卫",
      "hanzi": "没问题，我叫小明也来帮忙。",
      "pinyin": "Méi wèntí, wǒ jiào Xiǎomíng yě lái bāngmáng.",
      "meaning": {
       "en": "No problem, I'll ask Xiaoming to come and help too.",
       "fr": "Pas de problème, je vais demander à Xiaoming de venir aider aussi.",
       "zh": "没问题，我叫小明也来帮忙。"
      },
      "audioText": "没问题，我叫小明也来帮忙。"
     }
    ]
   },
   {
    "title": {
     "en": "Introducing a friend",
     "fr": "Présenter un ami",
     "zh": "介绍朋友"
    },
    "setting": {
     "en": "Xiaoming arrives with a friend.",
     "fr": "Xiaoming arrive avec un ami.",
     "zh": "小明带着一个朋友来了。"
    },
    "lines": [
     {
      "speaker": "小明",
      "hanzi": "我给你们介绍一下，这是我的同学小李。",
      "pinyin": "Wǒ gěi nǐmen jièshào yíxià, zhè shì wǒ de tóngxué Xiǎo Lǐ.",
      "meaning": {
       "en": "Let me introduce you: this is my classmate Xiao Li.",
       "fr": "Je vous présente mon camarade Xiao Li.",
       "zh": "我给你们介绍一下，这是我的同学小李。"
      },
      "audioText": "我给你们介绍一下，这是我的同学小李。"
     },
     {
      "speaker": "小李",
      "hanzi": "你们好！小明让我来帮忙。",
      "pinyin": "Nǐmen hǎo! Xiǎomíng ràng wǒ lái bāngmáng.",
      "meaning": {
       "en": "Hello! Xiaoming asked me to come and help.",
       "fr": "Bonjour ! Xiaoming m'a demandé de venir aider.",
       "zh": "你们好！小明让我来帮忙。"
      },
      "audioText": "你们好！小明让我来帮忙。"
     },
     {
      "speaker": "玛丽",
      "hanzi": "太谢谢你们了！",
      "pinyin": "Tài xièxie nǐmen le!",
      "meaning": {
       "en": "Thank you so much!",
       "fr": "Merci beaucoup à vous !",
       "zh": "太谢谢你们了！"
      },
      "audioText": "太谢谢你们了！"
     },
     {
      "speaker": "小李",
      "hanzi": "不客气，大家是朋友嘛。",
      "pinyin": "Bú kèqi, dàjiā shì péngyou ma.",
      "meaning": {
       "en": "You're welcome, we're all friends.",
       "fr": "De rien, on est tous amis.",
       "zh": "不客气，大家是朋友嘛。"
      },
      "audioText": "不客气，大家是朋友嘛。"
     }
    ]
   },
   {
    "title": {
     "en": "A message for the teacher",
     "fr": "Un message pour le professeur",
     "zh": "告诉老师"
    },
    "setting": {
     "en": "Mary must tell Mr Wang her new room number.",
     "fr": "Mary doit donner son nouveau numéro de chambre au professeur Wang.",
     "zh": "玛丽要告诉王老师她的新房间号。"
    },
    "lines": [
     {
      "speaker": "玛丽",
      "hanzi": "大卫，你可以告诉王老师我的新房间号吗？",
      "pinyin": "Dàwèi, nǐ kěyǐ gàosu Wáng lǎoshī wǒ de xīn fángjiān hào ma?",
      "meaning": {
       "en": "David, can you tell Mr Wang my new room number?",
       "fr": "David, tu peux donner mon nouveau numéro de chambre au professeur Wang ?",
       "zh": "大卫，你可以告诉王老师我的新房间号吗？"
      },
      "audioText": "大卫，你可以告诉王老师我的新房间号吗？"
     },
     {
      "speaker": "大卫",
      "hanzi": "可以，你等一下，我给他打电话。",
      "pinyin": "Kěyǐ, nǐ děng yíxià, wǒ gěi tā dǎ diànhuà.",
      "meaning": {
       "en": "Sure, wait a moment, I'll call him.",
       "fr": "Bien sûr, attends, je l'appelle.",
       "zh": "可以，你等一下，我给他打电话。"
      },
      "audioText": "可以，你等一下，我给他打电话。"
     },
     {
      "speaker": "玛丽",
      "hanzi": "希望他明天不送书来我的老房间。",
      "pinyin": "Xīwàng tā míngtiān bú sòng shū lái wǒ de lǎo fángjiān.",
      "meaning": {
       "en": "I hope he won't bring the books to my old room tomorrow.",
       "fr": "J'espère qu'il ne m'apportera pas les livres dans mon ancienne chambre demain.",
       "zh": "希望他明天不送书来我的老房间。"
      },
      "audioText": "希望他明天不送书来我的老房间。"
     },
     {
      "speaker": "大卫",
      "hanzi": "别担心，我跟他说。",
      "pinyin": "Bié dānxīn, wǒ gēn tā shuō.",
      "meaning": {
       "en": "Don't worry, I'll tell him.",
       "fr": "Ne t'inquiète pas, je vais lui dire.",
       "zh": "别担心，我跟他说。"
      },
      "audioText": "别担心，我跟他说。"
     }
    ]
   }
  ],
  "story": [
   {
    "hanzi": "今天玛丽换了房间。她的东西很多，我和小明都去帮忙了。小明还介绍了他的同学小李。大家一起拿东西，很快就完了。",
    "pinyin": "Jīntiān Mǎlì huàn le fángjiān. Tā de dōngxi hěn duō, wǒ hé Xiǎomíng dōu qù bāngmáng le. Xiǎomíng hái jièshào le tā de tóngxué Xiǎo Lǐ. Dàjiā yìqǐ ná dōngxi, hěn kuài jiù wán le.",
    "translation": {
     "en": "Today Mary changed rooms. She had lots of things, so Xiaoming and I went to help. Xiaoming also introduced his classmate Xiao Li. We carried everything together and finished quickly.",
     "fr": "Aujourd'hui, Mary a changé de chambre. Elle avait beaucoup d'affaires, alors Xiaoming et moi sommes allés aider. Xiaoming nous a aussi présenté son camarade Xiao Li. Nous avons tout porté ensemble et avons vite fini.",
     "zh": "今天玛丽换了房间。她的东西很多，我和小明都去帮忙了。小明还介绍了他的同学小李。大家一起拿东西，很快就完了。"
    }
   }
  ]
 },
 "lesson-hsk2-12": {
  "scenes": [
   {
    "title": {
     "en": "Exam tomorrow",
     "fr": "Examen demain",
     "zh": "明天考试"
    },
    "setting": {
     "en": "The end-of-term exam is tomorrow. Mr Wang gives some advice.",
     "fr": "L'examen de fin de semestre est demain. Le professeur Wang donne des conseils.",
     "zh": "明天期末考试，王老师告诉大家考试的事。"
    },
    "lines": [
     {
      "speaker": "王老师",
      "hanzi": "同学们，明天考试，大家准备好了吗？",
      "pinyin": "Tóngxuémen, míngtiān kǎoshì, dàjiā zhǔnbèi hǎo le ma?",
      "meaning": {
       "en": "Everyone, the exam is tomorrow. Are you ready?",
       "fr": "Chers élèves, l'examen est demain. Vous êtes prêts ?",
       "zh": "同学们，明天考试，大家准备好了吗？"
      },
      "audioText": "同学们，明天考试，大家准备好了吗？"
     },
     {
      "speaker": "玛丽",
      "hanzi": "老师，考试有多少题？",
      "pinyin": "Lǎoshī, kǎoshì yǒu duōshao tí?",
      "meaning": {
       "en": "Teacher, how many questions are there?",
       "fr": "Professeur, il y a combien de questions ?",
       "zh": "老师，考试有多少题？"
      },
      "audioText": "老师，考试有多少题？"
     },
     {
      "speaker": "王老师",
      "hanzi": "四十个题。别忘了写姓名。",
      "pinyin": "Sìshí ge tí. Bié wàng le xiě xìngmíng.",
      "meaning": {
       "en": "Forty. Don't forget to write your full name.",
       "fr": "Quarante. N'oubliez pas d'écrire vos nom et prénom.",
       "zh": "四十个题。别忘了写姓名。"
      },
      "audioText": "四十个题。别忘了写姓名。"
     },
     {
      "speaker": "大卫",
      "hanzi": "要带什么？",
      "pinyin": "Yào dài shénme?",
      "meaning": {
       "en": "What should we bring?",
       "fr": "Qu'est-ce qu'il faut apporter ?",
       "zh": "要带什么？"
      },
      "audioText": "要带什么？"
     },
     {
      "speaker": "王老师",
      "hanzi": "带笔就可以。",
      "pinyin": "Dài bǐ jiù kěyǐ.",
      "meaning": {
       "en": "Just a pen.",
       "fr": "Juste un stylo.",
       "zh": "带笔就可以。"
      },
      "audioText": "带笔就可以。"
     }
    ]
   },
   {
    "title": {
     "en": "Revising together",
     "fr": "Réviser ensemble",
     "zh": "一起复习"
    },
    "setting": {
     "en": "In the evening, the friends revise in the classroom.",
     "fr": "Le soir, les amis révisent dans la salle de classe.",
     "zh": "晚上，朋友们在教室里复习。"
    },
    "lines": [
     {
      "speaker": "安娜",
      "hanzi": "大卫，这个词是什么意思？我忘了。",
      "pinyin": "Dàwèi, zhège cí shì shénme yìsi? Wǒ wàng le.",
      "meaning": {
       "en": "David, what does this word mean? I forgot.",
       "fr": "David, que veut dire ce mot ? J'ai oublié.",
       "zh": "大卫，这个词是什么意思？我忘了。"
      },
      "audioText": "大卫，这个词是什么意思？我忘了。"
     },
     {
      "speaker": "大卫",
      "hanzi": "是“记得”，就是“没忘”。",
      "pinyin": "Shì \"jìde\", jiù shì \"méi wàng\".",
      "meaning": {
       "en": "It's 记得, meaning “not forgotten”.",
       "fr": "C'est 记得, ça veut dire « ne pas avoir oublié ».",
       "zh": "是“记得”，就是“没忘”。"
      },
      "audioText": "是“记得”，就是“没忘”。"
     },
     {
      "speaker": "安娜",
      "hanzi": "懂了，谢谢！你都看完了吗？",
      "pinyin": "Dǒng le, xièxie! Nǐ dōu kàn wán le ma?",
      "meaning": {
       "en": "Got it, thanks! Have you finished going through everything?",
       "fr": "Compris, merci ! Tu as tout relu ?",
       "zh": "懂了，谢谢！你都看完了吗？"
      },
      "audioText": "懂了，谢谢！你都看完了吗？"
     },
     {
      "speaker": "大卫",
      "hanzi": "还没看完，还有十页。",
      "pinyin": "Hái méi kàn wán, hái yǒu shí yè.",
      "meaning": {
       "en": "Not yet, ten pages left.",
       "fr": "Pas encore, il me reste dix pages.",
       "zh": "还没看完，还有十页。"
      },
      "audioText": "还没看完，还有十页。"
     }
    ]
   },
   {
    "title": {
     "en": "After the exam",
     "fr": "Après l'examen",
     "zh": "考完了"
    },
    "setting": {
     "en": "The exam is over. Everyone compares answers.",
     "fr": "L'examen est terminé. Chacun compare ses réponses.",
     "zh": "考完试了，大家说考得怎么样。"
    },
    "lines": [
     {
      "speaker": "小明",
      "hanzi": "你们考得怎么样？",
      "pinyin": "Nǐmen kǎo de zěnmeyàng?",
      "meaning": {
       "en": "How did your exam go?",
       "fr": "Comment s'est passé votre examen ?",
       "zh": "你们考得怎么样？"
      },
      "audioText": "你们考得怎么样？"
     },
     {
      "speaker": "玛丽",
      "hanzi": "我写错了一个字，但是都写完了。",
      "pinyin": "Wǒ xiě cuò le yí ge zì, dànshì dōu xiě wán le.",
      "meaning": {
       "en": "I wrote one character wrong, but I finished everything.",
       "fr": "Je me suis trompée sur un caractère, mais j'ai tout fini.",
       "zh": "我写错了一个字，但是都写完了。"
      },
      "audioText": "我写错了一个字，但是都写完了。"
     },
     {
      "speaker": "大卫",
      "hanzi": "我有一个题没看懂。",
      "pinyin": "Wǒ yǒu yí ge tí méi kàn dǒng.",
      "meaning": {
       "en": "There was one question I didn't understand.",
       "fr": "Il y a une question que je n'ai pas comprise.",
       "zh": "我有一个题没看懂。"
      },
      "audioText": "我有一个题没看懂。"
     },
     {
      "speaker": "安娜",
      "hanzi": "没关系，我们去吃饭吧！",
      "pinyin": "Méi guānxi, wǒmen qù chī fàn ba!",
      "meaning": {
       "en": "Never mind, let's go and eat!",
       "fr": "Pas grave, allons manger !",
       "zh": "没关系，我们去吃饭吧！"
      },
      "audioText": "没关系，我们去吃饭吧！"
     }
    ]
   }
  ],
  "story": [
   {
    "hanzi": "明天考试，今天晚上我们在教室复习。安娜忘了一个词的意思，我告诉了她。考完试以后，我们一起去吃饭，大家都很高兴。",
    "pinyin": "Míngtiān kǎoshì, jīntiān wǎnshang wǒmen zài jiàoshì fùxí. Ānnà wàng le yí ge cí de yìsi, wǒ gàosu le tā. Kǎo wán shì yǐhòu, wǒmen yìqǐ qù chī fàn, dàjiā dōu hěn gāoxìng.",
    "translation": {
     "en": "The exam was tomorrow, so tonight we revised in the classroom. Anna forgot the meaning of a word and I told her. After the exam we all went out to eat, very happy.",
     "fr": "L'examen était le lendemain, alors ce soir-là nous avons révisé en classe. Anna avait oublié le sens d'un mot, je le lui ai dit. Après l'examen, nous sommes tous allés manger, très contents.",
     "zh": "明天考试，今天晚上我们在教室复习。安娜忘了一个词的意思，我告诉了她。考完试以后，我们一起去吃饭，大家都很高兴。"
    }
   }
  ]
 },
 "lesson-hsk2-03": {
  "scenes": [
   {
    "title": {
     "en": "Not feeling well",
     "fr": "Pas en forme",
     "zh": "不舒服"
    },
    "setting": {
     "en": "The morning of the next exam, David wakes up ill.",
     "fr": "Le matin du prochain examen, David se réveille malade.",
     "zh": "第二个考试那天早上，大卫生病了。"
    },
    "lines": [
     {
      "speaker": "大卫",
      "hanzi": "小明，我头很疼，身体也不舒服。",
      "pinyin": "Xiǎomíng, wǒ tóu hěn téng, shēntǐ yě bù shūfu.",
      "meaning": {
       "en": "Xiaoming, I have a bad headache and I don't feel well.",
       "fr": "Xiaoming, j'ai très mal à la tête et je ne me sens pas bien.",
       "zh": "小明，我头很疼，身体也不舒服。"
      },
      "audioText": "小明，我头很疼，身体也不舒服。"
     },
     {
      "speaker": "小明",
      "hanzi": "你别去考试了，我们去医院吧。",
      "pinyin": "Nǐ bié qù kǎoshì le, wǒmen qù yīyuàn ba.",
      "meaning": {
       "en": "Don't go to the exam; let's go to the hospital.",
       "fr": "Ne va pas à l'examen, allons à l'hôpital.",
       "zh": "你别去考试了，我们去医院吧。"
      },
      "audioText": "你别去考试了，我们去医院吧。"
     },
     {
      "speaker": "大卫",
      "hanzi": "可是今天有考试……",
      "pinyin": "Kěshì jīntiān yǒu kǎoshì……",
      "meaning": {
       "en": "But there's an exam today…",
       "fr": "Mais il y a un examen aujourd'hui…",
       "zh": "可是今天有考试……"
      },
      "audioText": "可是今天有考试……"
     },
     {
      "speaker": "小明",
      "hanzi": "身体最重要！我告诉王老师。",
      "pinyin": "Shēntǐ zuì zhòngyào! Wǒ gàosu Wáng lǎoshī.",
      "meaning": {
       "en": "Your health matters most! I'll tell Mr Wang.",
       "fr": "La santé avant tout ! Je préviens le professeur Wang.",
       "zh": "身体最重要！我告诉王老师。"
      },
      "audioText": "身体最重要！我告诉王老师。"
     }
    ]
   },
   {
    "title": {
     "en": "At the doctor's",
     "fr": "Chez le médecin",
     "zh": "看医生"
    },
    "setting": {
     "en": "Xiaoming's father examines David.",
     "fr": "Le père de Xiaoming examine David.",
     "zh": "小明的爸爸给大卫看病。"
    },
    "lines": [
     {
      "speaker": "医生",
      "hanzi": "大卫，你哪儿不舒服？",
      "pinyin": "Dàwèi, nǐ nǎr bù shūfu?",
      "meaning": {
       "en": "David, where does it hurt?",
       "fr": "David, où as-tu mal ?",
       "zh": "大卫，你哪儿不舒服？"
      },
      "audioText": "大卫，你哪儿不舒服？"
     },
     {
      "speaker": "大卫",
      "hanzi": "头疼，晚上睡不好。",
      "pinyin": "Tóu téng, wǎnshang shuì bu hǎo.",
      "meaning": {
       "en": "I have a headache and I can't sleep at night.",
       "fr": "J'ai mal à la tête et je dors mal la nuit.",
       "zh": "头疼，晚上睡不好。"
      },
      "audioText": "头疼，晚上睡不好。"
     },
     {
      "speaker": "医生",
      "hanzi": "你太累了。这个药一天吃三次。",
      "pinyin": "Nǐ tài lèi le. Zhège yào yì tiān chī sān cì.",
      "meaning": {
       "en": "You're too tired. Take this medicine three times a day.",
       "fr": "Tu es trop fatigué. Prends ce médicament trois fois par jour.",
       "zh": "你太累了。这个药一天吃三次。"
      },
      "audioText": "你太累了。这个药一天吃三次。"
     },
     {
      "speaker": "大卫",
      "hanzi": "我可以喝咖啡吗？",
      "pinyin": "Wǒ kěyǐ hē kāfēi ma?",
      "meaning": {
       "en": "Can I drink coffee?",
       "fr": "Je peux boire du café ?",
       "zh": "我可以喝咖啡吗？"
      },
      "audioText": "我可以喝咖啡吗？"
     },
     {
      "speaker": "医生",
      "hanzi": "别喝了，多喝水，多休息。",
      "pinyin": "Bié hē le, duō hē shuǐ, duō xiūxi.",
      "meaning": {
       "en": "Don't, drink lots of water and rest a lot.",
       "fr": "Non, bois beaucoup d'eau et repose-toi.",
       "zh": "别喝了，多喝水，多休息。"
      },
      "audioText": "别喝了，多喝水，多休息。"
     }
    ]
   },
   {
    "title": {
     "en": "The teacher's call",
     "fr": "L'appel du professeur",
     "zh": "王老师的电话"
    },
    "setting": {
     "en": "In the afternoon Mr Wang calls David.",
     "fr": "L'après-midi, le professeur Wang appelle David.",
     "zh": "下午，王老师给大卫打电话。"
    },
    "lines": [
     {
      "speaker": "王老师",
      "hanzi": "大卫，身体好点儿了吗？",
      "pinyin": "Dàwèi, shēntǐ hǎo diǎnr le ma?",
      "meaning": {
       "en": "David, are you feeling a bit better?",
       "fr": "David, tu te sens un peu mieux ?",
       "zh": "大卫，身体好点儿了吗？"
      },
      "audioText": "大卫，身体好点儿了吗？"
     },
     {
      "speaker": "大卫",
      "hanzi": "好点儿了，老师。对不起，我没去考试。",
      "pinyin": "Hǎo diǎnr le, lǎoshī. Duìbuqǐ, wǒ méi qù kǎoshì.",
      "meaning": {
       "en": "A bit better, teacher. Sorry I missed the exam.",
       "fr": "Un peu mieux, professeur. Désolé, je n'ai pas passé l'examen.",
       "zh": "好点儿了，老师。对不起，我没去考试。"
      },
      "audioText": "好点儿了，老师。对不起，我没去考试。"
     },
     {
      "speaker": "王老师",
      "hanzi": "没关系，下星期你再考。别着急，好好休息。",
      "pinyin": "Méi guānxi, xià xīngqī nǐ zài kǎo. Bié zháojí, hǎohǎo xiūxi.",
      "meaning": {
       "en": "It's fine, you'll take it next week. Don't worry, rest well.",
       "fr": "Pas grave, tu le passeras la semaine prochaine. Ne t'inquiète pas, repose-toi bien.",
       "zh": "没关系，下星期你再考。别着急，好好休息。"
      },
      "audioText": "没关系，下星期你再考。别着急，好好休息。"
     }
    ]
   }
  ],
  "story": [
   {
    "hanzi": "今天早上我生病了，头很疼。小明的爸爸说我太累了，让我多休息，别喝咖啡。王老师说下星期我可以再考试。",
    "pinyin": "Jīntiān zǎoshang wǒ shēngbìng le, tóu hěn téng. Xiǎomíng de bàba shuō wǒ tài lèi le, ràng wǒ duō xiūxi, bié hē kāfēi. Wáng lǎoshī shuō xià xīngqī wǒ kěyǐ zài kǎoshì.",
    "translation": {
     "en": "This morning I was ill with a bad headache. Xiaoming's dad said I was too tired, told me to rest a lot and not to drink coffee. Mr Wang said I can take the exam next week.",
     "fr": "Ce matin, j'étais malade, avec un gros mal de tête. Le père de Xiaoming a dit que j'étais trop fatigué, qu'il fallait me reposer et ne pas boire de café. Le professeur Wang a dit que je pourrai passer l'examen la semaine prochaine.",
     "zh": "今天早上我生病了，头很疼。小明的爸爸说我太累了，让我多休息，别喝咖啡。王老师说下星期我可以再考试。"
    }
   }
  ]
 },
 "lesson-hsk2-14": {
  "scenes": [
   {
    "title": {
     "en": "Coffee or tea?",
     "fr": "Café ou thé ?",
     "zh": "咖啡还是茶？"
    },
    "setting": {
     "en": "David feels better. The friends meet at a café.",
     "fr": "David va mieux. Les amis se retrouvent dans un café.",
     "zh": "大卫身体好了，朋友们在咖啡馆见面。"
    },
    "lines": [
     {
      "speaker": "服务员",
      "hanzi": "您好，几位？",
      "pinyin": "Nín hǎo, jǐ wèi?",
      "meaning": {
       "en": "Hello, how many?",
       "fr": "Bonjour, vous êtes combien ?",
       "zh": "您好，几位？"
      },
      "audioText": "您好，几位？"
     },
     {
      "speaker": "小明",
      "hanzi": "四位。",
      "pinyin": "Sì wèi.",
      "meaning": {
       "en": "Four.",
       "fr": "Quatre.",
       "zh": "四位。"
      },
      "audioText": "四位。"
     },
     {
      "speaker": "服务员",
      "hanzi": "你们喝咖啡还是喝茶？",
      "pinyin": "Nǐmen hē kāfēi háishi hē chá?",
      "meaning": {
       "en": "Coffee or tea?",
       "fr": "Café ou thé ?",
       "zh": "你们喝咖啡还是喝茶？"
      },
      "audioText": "你们喝咖啡还是喝茶？"
     },
     {
      "speaker": "玛丽",
      "hanzi": "我要一杯咖啡，安娜要奶茶。",
      "pinyin": "Wǒ yào yì bēi kāfēi, Ānnà yào nǎichá.",
      "meaning": {
       "en": "A coffee for me, and Anna wants milk tea.",
       "fr": "Un café pour moi, et Anna veut un thé au lait.",
       "zh": "我要一杯咖啡，安娜要奶茶。"
      },
      "audioText": "我要一杯咖啡，安娜要奶茶。"
     },
     {
      "speaker": "大卫",
      "hanzi": "我要绿茶，医生说别喝咖啡。",
      "pinyin": "Wǒ yào lǜchá, yīshēng shuō bié hē kāfēi.",
      "meaning": {
       "en": "Green tea for me; the doctor said no coffee.",
       "fr": "Un thé vert pour moi ; le médecin a dit pas de café.",
       "zh": "我要绿茶，医生说别喝咖啡。"
      },
      "audioText": "我要绿茶，医生说别喝咖啡。"
     }
    ]
   },
   {
    "title": {
     "en": "Fish or meat?",
     "fr": "Poisson ou viande ?",
     "zh": "鱼还是肉？"
    },
    "setting": {
     "en": "For dinner, they order in a restaurant famous for noodles.",
     "fr": "Pour le dîner, ils commandent dans un restaurant connu pour ses nouilles.",
     "zh": "晚上，他们去一个面条很有名的饭馆。"
    },
    "lines": [
     {
      "speaker": "服务员",
      "hanzi": "你们要几碗面？",
      "pinyin": "Nǐmen yào jǐ wǎn miàn?",
      "meaning": {
       "en": "How many bowls of noodles?",
       "fr": "Combien de bols de nouilles ?",
       "zh": "你们要几碗面？"
      },
      "audioText": "你们要几碗面？"
     },
     {
      "speaker": "小明",
      "hanzi": "四碗。再来一条鱼。",
      "pinyin": "Sì wǎn. Zài lái yì tiáo yú.",
      "meaning": {
       "en": "Four. And a fish as well.",
       "fr": "Quatre. Et aussi un poisson.",
       "zh": "四碗。再来一条鱼。"
      },
      "audioText": "四碗。再来一条鱼。"
     },
     {
      "speaker": "安娜",
      "hanzi": "我不吃鱼，有肉吗？",
      "pinyin": "Wǒ bù chī yú, yǒu ròu ma?",
      "meaning": {
       "en": "I don't eat fish. Is there meat?",
       "fr": "Je ne mange pas de poisson. Il y a de la viande ?",
       "zh": "我不吃鱼，有肉吗？"
      },
      "audioText": "我不吃鱼，有肉吗？"
     },
     {
      "speaker": "服务员",
      "hanzi": "有，牛肉还是羊肉？",
      "pinyin": "Yǒu, niúròu háishi yángròu?",
      "meaning": {
       "en": "Yes, beef or lamb?",
       "fr": "Oui, bœuf ou agneau ?",
       "zh": "有，牛肉还是羊肉？"
      },
      "audioText": "有，牛肉还是羊肉？"
     },
     {
      "speaker": "安娜",
      "hanzi": "牛肉，谢谢。",
      "pinyin": "Niúròu, xièxie.",
      "meaning": {
       "en": "Beef, thanks.",
       "fr": "Du bœuf, merci.",
       "zh": "牛肉，谢谢。"
      },
      "audioText": "牛肉，谢谢。"
     }
    ]
   },
   {
    "title": {
     "en": "Ten thousand steps",
     "fr": "Dix mille pas",
     "zh": "走了一万步"
    },
    "setting": {
     "en": "After dinner they walk back to the university.",
     "fr": "Après le dîner, ils rentrent à pied à l'université.",
     "zh": "吃完饭，他们走路回学校。"
    },
    "lines": [
     {
      "speaker": "玛丽",
      "hanzi": "我们今天走了多少步？",
      "pinyin": "Wǒmen jīntiān zǒu le duōshao bù?",
      "meaning": {
       "en": "How many steps did we walk today?",
       "fr": "Combien de pas avons-nous faits aujourd'hui ?",
       "zh": "我们今天走了多少步？"
      },
      "audioText": "我们今天走了多少步？"
     },
     {
      "speaker": "小明",
      "hanzi": "我看看手机……一万多步！",
      "pinyin": "Wǒ kànkan shǒujī…… yíwàn duō bù!",
      "meaning": {
       "en": "Let me check my phone… over ten thousand!",
       "fr": "Je regarde mon téléphone… plus de dix mille !",
       "zh": "我看看手机……一万多步！"
      },
      "audioText": "我看看手机……一万多步！"
     },
     {
      "speaker": "大卫",
      "hanzi": "太好了，吃了那么多，也要多走走。",
      "pinyin": "Tài hǎo le, chī le nàme duō, yě yào duō zǒuzou.",
      "meaning": {
       "en": "Great; after eating so much, we need to walk.",
       "fr": "Super, après avoir autant mangé, il faut marcher.",
       "zh": "太好了，吃了那么多，也要多走走。"
      },
      "audioText": "太好了，吃了那么多，也要多走走。"
     },
     {
      "speaker": "安娜",
      "hanzi": "下次我们还来这个饭馆吧！",
      "pinyin": "Xià cì wǒmen hái lái zhège fànguǎn ba!",
      "meaning": {
       "en": "Let's come back to this restaurant next time!",
       "fr": "Revenons dans ce restaurant la prochaine fois !",
       "zh": "下次我们还来这个饭馆吧！"
      },
      "audioText": "下次我们还来这个饭馆吧！"
     }
    ]
   }
  ],
  "story": [
   {
    "hanzi": "今天我们去了咖啡馆，玛丽喝咖啡，安娜喝奶茶，我喝绿茶。晚上我们吃了面条和鱼。回学校的时候，我们走了一万多步。",
    "pinyin": "Jīntiān wǒmen qù le kāfēiguǎn, Mǎlì hē kāfēi, Ānnà hē nǎichá, wǒ hē lǜchá. Wǎnshang wǒmen chī le miàntiáo hé yú. Huí xuéxiào de shíhou, wǒmen zǒu le yíwàn duō bù.",
    "translation": {
     "en": "Today we went to a café: Mary had coffee, Anna milk tea and I had green tea. In the evening we ate noodles and fish. Walking back to the university, we did over ten thousand steps.",
     "fr": "Aujourd'hui, nous sommes allés au café : Mary a pris un café, Anna un thé au lait et moi un thé vert. Le soir, nous avons mangé des nouilles et du poisson. En rentrant à l'université, nous avons fait plus de dix mille pas.",
     "zh": "今天我们去了咖啡馆，玛丽喝咖啡，安娜喝奶茶，我喝绿茶。晚上我们吃了面条和鱼。回学校的时候，我们走了一万多步。"
    }
   }
  ]
 },
 "lesson-hsk2-16": {
  "scenes": [
   {
    "title": {
     "en": "You speak so well!",
     "fr": "Tu parles si bien !",
     "zh": "你说得真好！"
    },
    "setting": {
     "en": "At a party, a Chinese student talks to David.",
     "fr": "À une fête, une étudiante chinoise parle avec David.",
     "zh": "在一个晚会上，一个中国同学和大卫聊天。"
    },
    "lines": [
     {
      "speaker": "中国同学",
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
      "hanzi": "我从法国来，来中国一年多了。",
      "pinyin": "Wǒ cóng Fǎguó lái, lái Zhōngguó yì nián duō le.",
      "meaning": {
       "en": "From France; I've been in China for over a year.",
       "fr": "De France, je suis en Chine depuis plus d'un an.",
       "zh": "我从法国来，来中国一年多了。"
      },
      "audioText": "我从法国来，来中国一年多了。"
     },
     {
      "speaker": "中国同学",
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
      "hanzi": "哪里哪里，我说得还不太好。",
      "pinyin": "Nǎlǐ nǎlǐ, wǒ shuō de hái bú tài hǎo.",
      "meaning": {
       "en": "Oh, not at all, my Chinese isn't that good yet.",
       "fr": "Oh non, je ne parle pas encore très bien.",
       "zh": "哪里哪里，我说得还不太好。"
      },
      "audioText": "哪里哪里，我说得还不太好。"
     }
    ]
   },
   {
    "title": {
     "en": "Studying online",
     "fr": "Étudier en ligne",
     "zh": "上网学习"
    },
    "setting": {
     "en": "Mary explains how she practises at home.",
     "fr": "Mary explique comment elle s'entraîne chez elle.",
     "zh": "玛丽说她在家怎么学习。"
    },
    "lines": [
     {
      "speaker": "安娜",
      "hanzi": "玛丽，你汉字写得很快！",
      "pinyin": "Mǎlì, nǐ Hànzì xiě de hěn kuài!",
      "meaning": {
       "en": "Mary, you write characters fast!",
       "fr": "Mary, tu écris vite les caractères !",
       "zh": "玛丽，你汉字写得很快！"
      },
      "audioText": "玛丽，你汉字写得很快！"
     },
     {
      "speaker": "玛丽",
      "hanzi": "我每天上网学习，网上有很多好课。",
      "pinyin": "Wǒ měi tiān shàngwǎng xuéxí, wǎngshang yǒu hěn duō hǎo kè.",
      "meaning": {
       "en": "I study online every day; there are lots of good courses online.",
       "fr": "J'étudie en ligne tous les jours, il y a plein de bons cours sur internet.",
       "zh": "我每天上网学习，网上有很多好课。"
      },
      "audioText": "我每天上网学习，网上有很多好课。"
     },
     {
      "speaker": "安娜",
      "hanzi": "你学得很认真。",
      "pinyin": "Nǐ xué de hěn rènzhēn.",
      "meaning": {
       "en": "You study very seriously.",
       "fr": "Tu étudies très sérieusement.",
       "zh": "你学得很认真。"
      },
      "audioText": "你学得很认真。"
     },
     {
      "speaker": "玛丽",
      "hanzi": "我想下个学期考HSK三级。",
      "pinyin": "Wǒ xiǎng xià ge xuéqī kǎo HSK sān jí.",
      "meaning": {
       "en": "I want to take HSK 3 next term.",
       "fr": "Je veux passer le HSK 3 le semestre prochain.",
       "zh": "我想下个学期考HSK三级。"
      },
      "audioText": "我想下个学期考HSK三级。"
     }
    ]
   },
   {
    "title": {
     "en": "A call from home",
     "fr": "Un appel de la maison",
     "zh": "和家人视频"
    },
    "setting": {
     "en": "In the evening, David opens his laptop to call his family.",
     "fr": "Le soir, David ouvre son ordinateur pour appeler sa famille.",
     "zh": "晚上，大卫打开电脑给家里打电话。"
    },
    "lines": [
     {
      "speaker": "妈妈",
      "hanzi": "大卫，你最近过得怎么样？",
      "pinyin": "Dàwèi, nǐ zuìjìnguo de zěnmeyàng?",
      "meaning": {
       "en": "David, how have you been lately?",
       "fr": "David, comment vas-tu ces temps-ci ?",
       "zh": "大卫，你最近过得怎么样？"
      },
      "audioText": "大卫，你最近过得怎么样？"
     },
     {
      "speaker": "大卫",
      "hanzi": "很好！我汉语说得越来越好了。",
      "pinyin": "Hěn hǎo! Wǒ Hànyǔ shuō de yuèláiyuè hǎo le.",
      "meaning": {
       "en": "Great! My Chinese is getting better and better.",
       "fr": "Très bien ! Je parle chinois de mieux en mieux.",
       "zh": "很好！我汉语说得越来越好了。"
      },
      "audioText": "很好！我汉语说得越来越好了。"
     },
     {
      "speaker": "妈妈",
      "hanzi": "你过年回家吗？",
      "pinyin": "Nǐ guònián huí jiā ma?",
      "meaning": {
       "en": "Are you coming home for Chinese New Year?",
       "fr": "Tu rentres pour le Nouvel An chinois ?",
       "zh": "你过年回家吗？"
      },
      "audioText": "你过年回家吗？"
     },
     {
      "speaker": "大卫",
      "hanzi": "不回去了，小明请我去他家过年。",
      "pinyin": "Bù huíqu le, Xiǎomíng qǐng wǒ qù tā jiā guònián.",
      "meaning": {
       "en": "No, Xiaoming invited me to spend New Year with his family.",
       "fr": "Non, Xiaoming m'a invité à passer le Nouvel An chez lui.",
       "zh": "不回去了，小明请我去他家过年。"
      },
      "audioText": "不回去了，小明请我去他家过年。"
     }
    ]
   }
  ],
  "story": [
   {
    "hanzi": "今天晚会上，一个中国同学说我汉语说得很好，我很高兴。玛丽每天上网学习，她学得很认真。晚上我给妈妈打电话，告诉她过年我不回去了。",
    "pinyin": "Jīntiān wǎnhuì shang, yí ge Zhōngguó tóngxué shuō wǒ Hànyǔ shuō de hěn hǎo, wǒ hěn gāoxìng. Mǎlì měi tiān shàngwǎng xuéxí, tā xué de hěn rènzhēn. Wǎnshang wǒ gěi māma dǎ diànhuà, gàosu tā guònián wǒ bù huíqu le.",
    "translation": {
     "en": "At tonight's party, a Chinese student said my Chinese was very good, and I was very happy. Mary studies online every day; she works very seriously. In the evening I called Mum and told her I won't go home for New Year.",
     "fr": "À la fête ce soir, une étudiante chinoise m'a dit que je parlais très bien chinois, j'étais ravi. Mary étudie en ligne tous les jours, très sérieusement. Le soir, j'ai appelé maman pour lui dire que je ne rentrerai pas pour le Nouvel An.",
     "zh": "今天晚会上，一个中国同学说我汉语说得很好，我很高兴。玛丽每天上网学习，她学得很认真。晚上我给妈妈打电话，告诉她过年我不回去了。"
    }
   }
  ]
 },
 "lesson-hsk2-08": {
  "scenes": [
   {
    "title": {
     "en": "Come in!",
     "fr": "Entre !",
     "zh": "快进来！"
    },
    "setting": {
     "en": "New Year's Eve. David arrives at Xiaoming's home in the snow.",
     "fr": "Veille du Nouvel An. David arrive chez Xiaoming sous la neige.",
     "zh": "除夕，大卫来到小明家，外面下着雪。"
    },
    "lines": [
     {
      "speaker": "小明",
      "hanzi": "大卫，外面冷，快进来！",
      "pinyin": "Dàwèi, wàimiàn lěng, kuài jìnlai!",
      "meaning": {
       "en": "David, it's cold outside, come in quickly!",
       "fr": "David, il fait froid dehors, entre vite !",
       "zh": "大卫，外面冷，快进来！"
      },
      "audioText": "大卫，外面冷，快进来！"
     },
     {
      "speaker": "大卫",
      "hanzi": "谢谢！叔叔阿姨在家吗？",
      "pinyin": "Xièxie! Shūshu āyí zài jiā ma?",
      "meaning": {
       "en": "Thanks! Are your parents home?",
       "fr": "Merci ! Tes parents sont là ?",
       "zh": "谢谢！叔叔阿姨在家吗？"
      },
      "audioText": "谢谢！叔叔阿姨在家吗？"
     },
     {
      "speaker": "小明",
      "hanzi": "在，他们在楼上，我们上去吧。",
      "pinyin": "Zài, tāmen zài lóushàng, wǒmen shàngqu ba.",
      "meaning": {
       "en": "Yes, they're upstairs; let's go up.",
       "fr": "Oui, ils sont en haut, montons.",
       "zh": "在，他们在楼上，我们上去吧。"
      },
      "audioText": "在，他们在楼上，我们上去吧。"
     },
     {
      "speaker": "大卫",
      "hanzi": "好，我把鞋放在这儿。",
      "pinyin": "Hǎo, wǒ bǎ xié fàng zài zhèr.",
      "meaning": {
       "en": "OK, I'll leave my shoes here.",
       "fr": "D'accord, je laisse mes chaussures ici.",
       "zh": "好，我把鞋放在这儿。"
      },
      "audioText": "好，我把鞋放在这儿。"
     }
    ]
   },
   {
    "title": {
     "en": "Go and get the grandparents",
     "fr": "Va chercher les grands-parents",
     "zh": "去接爷爷奶奶"
    },
    "setting": {
     "en": "The grandparents' train has arrived.",
     "fr": "Le train des grands-parents est arrivé.",
     "zh": "爷爷奶奶坐火车来北京过年。"
    },
    "lines": [
     {
      "speaker": "妈妈",
      "hanzi": "小明，爷爷奶奶到了，你下去接他们吧。",
      "pinyin": "Xiǎomíng, yéye nǎinai dào le, nǐ xiàqu jiē tāmen ba.",
      "meaning": {
       "en": "Xiaoming, Grandpa and Grandma are here; go down and get them.",
       "fr": "Xiaoming, papi et mamie sont arrivés, descends les chercher.",
       "zh": "小明，爷爷奶奶到了，你下去接他们吧。"
      },
      "audioText": "小明，爷爷奶奶到了，你下去接他们吧。"
     },
     {
      "speaker": "小明",
      "hanzi": "好！大卫，我们一起下去。",
      "pinyin": "Hǎo! Dàwèi, wǒmen yìqǐ xiàqu.",
      "meaning": {
       "en": "OK! David, let's go down together.",
       "fr": "D'accord ! David, descendons ensemble.",
       "zh": "好！大卫，我们一起下去。"
      },
      "audioText": "好！大卫，我们一起下去。"
     },
     {
      "speaker": "爷爷",
      "hanzi": "小明，快过来，帮奶奶拿一下东西。",
      "pinyin": "Xiǎomíng, kuài guòlai, bāng nǎinai ná yíxià dōngxi.",
      "meaning": {
       "en": "Xiaoming, come here, help Grandma with her bags.",
       "fr": "Xiaoming, viens vite aider mamie à porter ses affaires.",
       "zh": "小明，快过来，帮奶奶拿一下东西。"
      },
      "audioText": "小明，快过来，帮奶奶拿一下东西。"
     },
     {
      "speaker": "小明",
      "hanzi": "来了！",
      "pinyin": "Lái le!",
      "meaning": {
       "en": "Coming!",
       "fr": "J'arrive !",
       "zh": "来了！"
      },
      "audioText": "来了！"
     }
    ]
   },
   {
    "title": {
     "en": "Fireworks",
     "fr": "Les feux d'artifice",
     "zh": "出去看烟花"
    },
    "setting": {
     "en": "At midnight, everyone goes out to watch the fireworks.",
     "fr": "À minuit, tout le monde sort voir les feux d'artifice.",
     "zh": "十二点，大家出去看烟花。"
    },
    "lines": [
     {
      "speaker": "妹妹",
      "hanzi": "大卫哥哥，快出来看！",
      "pinyin": "Dàwèi gēge, kuài chūlai kàn!",
      "meaning": {
       "en": "Big brother David, come out and look!",
       "fr": "Grand frère David, viens vite voir !",
       "zh": "大卫哥哥，快出来看！"
      },
      "audioText": "大卫哥哥，快出来看！"
     },
     {
      "speaker": "大卫",
      "hanzi": "真漂亮！",
      "pinyin": "Zhēn piàoliang!",
      "meaning": {
       "en": "Beautiful!",
       "fr": "C'est magnifique !",
       "zh": "真漂亮！"
      },
      "audioText": "真漂亮！"
     },
     {
      "speaker": "爸爸",
      "hanzi": "外面太冷了，看完了就回来吧。",
      "pinyin": "Wàimiàn tài lěng le, kàn wán le jiù huílai ba.",
      "meaning": {
       "en": "It's too cold outside; come back in when it's over.",
       "fr": "Il fait trop froid dehors ; rentrez quand c'est fini.",
       "zh": "外面太冷了，看完了就回来吧。"
      },
      "audioText": "外面太冷了，看完了就回来吧。"
     },
     {
      "speaker": "小明",
      "hanzi": "好，我们一会儿就回去。",
      "pinyin": "Hǎo, wǒmen yíhuìr jiù huíqu.",
      "meaning": {
       "en": "OK, we'll go back in a minute.",
       "fr": "D'accord, on rentre dans une minute.",
       "zh": "好，我们一会儿就回去。"
      },
      "audioText": "好，我们一会儿就回去。"
     }
    ]
   }
  ],
  "story": [
   {
    "hanzi": "除夕那天，我去小明家过年。外面下着雪，小明让我快进去。爷爷奶奶也来了，我们下去接他们。十二点，大家出去看烟花，然后回来吃饺子。",
    "pinyin": "Chúxī nà tiān, wǒ qù Xiǎomíng jiā guònián. Wàimiàn xià zhe xuě, Xiǎomíng ràng wǒ kuài jìnqu. Yéye nǎinai yě lái le, wǒmen xiàqu jiē tāmen. Shí'èr diǎn, dàjiā chūqu kàn yānhuā, ránhòu huílai chī jiǎozi.",
    "translation": {
     "en": "On New Year's Eve, I spent the festival at Xiaoming's home. It was snowing; Xiaoming told me to come in quickly. His grandparents came too, and we went down to meet them. At midnight everyone went out to watch the fireworks, then came back in to eat dumplings.",
     "fr": "Le soir du réveillon, j'ai fêté le Nouvel An chez Xiaoming. Il neigeait ; Xiaoming m'a dit d'entrer vite. Ses grands-parents sont venus aussi, et nous sommes descendus les chercher. À minuit, tout le monde est sorti voir les feux d'artifice, puis nous sommes rentrés manger des raviolis.",
     "zh": "除夕那天，我去小明家过年。外面下着雪，小明让我快进去。爷爷奶奶也来了，我们下去接他们。十二点，大家出去看烟花，然后回来吃饺子。"
    }
   }
  ]
 },
 "lesson-hsk2-10": {
  "scenes": [
   {
    "title": {
     "en": "Every year",
     "fr": "Chaque année",
     "zh": "每年都这样"
    },
    "setting": {
     "en": "New Year's Day. The family talks about their traditions.",
     "fr": "Jour du Nouvel An. La famille parle de ses traditions.",
     "zh": "大年初一，家人说起过年的习惯。"
    },
    "lines": [
     {
      "speaker": "大卫",
      "hanzi": "你们每年都一起过年吗？",
      "pinyin": "Nǐmen měi nián dōu yìqǐ guònián ma?",
      "meaning": {
       "en": "Do you spend New Year together every year?",
       "fr": "Vous fêtez le Nouvel An ensemble chaque année ?",
       "zh": "你们每年都一起过年吗？"
      },
      "audioText": "你们每年都一起过年吗？"
     },
     {
      "speaker": "奶奶",
      "hanzi": "是啊，每年过年一家人都在一起。",
      "pinyin": "Shì a, měi nián guònián yì jiārén dōu zài yìqǐ.",
      "meaning": {
       "en": "Yes, every year the whole family is together.",
       "fr": "Oui, chaque année toute la famille est réunie.",
       "zh": "是啊，每年过年一家人都在一起。"
      },
      "audioText": "是啊，每年过年一家人都在一起。"
     },
     {
      "speaker": "小明",
      "hanzi": "小时候我每年都去爷爷奶奶家过年。",
      "pinyin": "Xiǎoshíhou wǒ měi nián dōu qù yéye nǎinai jiā guònián.",
      "meaning": {
       "en": "When I was little, I went to my grandparents' every year for New Year.",
       "fr": "Petit, j'allais chez mes grands-parents tous les ans pour le Nouvel An.",
       "zh": "小时候我每年都去爷爷奶奶家过年。"
      },
      "audioText": "小时候我每年都去爷爷奶奶家过年。"
     },
     {
      "speaker": "爷爷",
      "hanzi": "他从小就喜欢吃奶奶做的饺子。",
      "pinyin": "Tā cóngxiǎo jiù xǐhuan chī nǎinai zuò de jiǎozi.",
      "meaning": {
       "en": "Since he was small, he's loved Grandma's dumplings.",
       "fr": "Depuis tout petit, il adore les raviolis de sa grand-mère.",
       "zh": "他从小就喜欢吃奶奶做的饺子。"
      },
      "audioText": "他从小就喜欢吃奶奶做的饺子。"
     }
    ]
   },
   {
    "title": {
     "en": "How many times?",
     "fr": "Combien de fois ?",
     "zh": "吃了几次饺子？"
    },
    "setting": {
     "en": "At lunch, there are dumplings again.",
     "fr": "Au déjeuner, encore des raviolis.",
     "zh": "中午，又吃饺子。"
    },
    "lines": [
     {
      "speaker": "妹妹",
      "hanzi": "大卫哥哥，你今天吃了几次饺子？",
      "pinyin": "Dàwèi gēge, nǐ jīntiān chī le jǐ cì jiǎozi?",
      "meaning": {
       "en": "Big brother David, how many times have you eaten dumplings today?",
       "fr": "Grand frère David, combien de fois as-tu mangé des raviolis aujourd'hui ?",
       "zh": "大卫哥哥，你今天吃了几次饺子？"
      },
      "audioText": "大卫哥哥，你今天吃了几次饺子？"
     },
     {
      "speaker": "大卫",
      "hanzi": "已经吃了两次了！",
      "pinyin": "Yǐjīng chī le liǎng cì le!",
      "meaning": {
       "en": "Twice already!",
       "fr": "Déjà deux fois !",
       "zh": "已经吃了两次了！"
      },
      "audioText": "已经吃了两次了！"
     },
     {
      "speaker": "妈妈",
      "hanzi": "过年就是这样，一天吃三次也很正常。",
      "pinyin": "Guònián jiù shì zhèyàng, yì tiān chī sān cì yě hěn zhèngcháng.",
      "meaning": {
       "en": "That's New Year: eating them three times a day is normal.",
       "fr": "C'est ça le Nouvel An : en manger trois fois par jour, c'est normal.",
       "zh": "过年就是这样，一天吃三次也很正常。"
      },
      "audioText": "过年就是这样，一天吃三次也很正常。"
     },
     {
      "speaker": "大卫",
      "hanzi": "我很喜欢，可是快要吃不下了。",
      "pinyin": "Wǒ hěn xǐhuan, kěshì kuàiyào chī bu xià le.",
      "meaning": {
       "en": "I love them, but I'm almost too full.",
       "fr": "J'adore, mais je n'en peux bientôt plus.",
       "zh": "我很喜欢，可是快要吃不下了。"
      },
      "audioText": "我很喜欢，可是快要吃不下了。"
     }
    ]
   },
   {
    "title": {
     "en": "A birthday surprise",
     "fr": "Un anniversaire surprise",
     "zh": "生日快乐"
    },
    "setting": {
     "en": "That evening, it's also Grandma's birthday.",
     "fr": "Ce soir-là, c'est aussi l'anniversaire de la grand-mère.",
     "zh": "这天晚上也是奶奶的生日。"
    },
    "lines": [
     {
      "speaker": "小明",
      "hanzi": "准备好了吗？一会儿奶奶就进来了！",
      "pinyin": "Zhǔnbèi hǎo le ma? Yíhuìr nǎinai jiù jìnlai le!",
      "meaning": {
       "en": "Ready? Grandma's coming in a moment!",
       "fr": "Vous êtes prêts ? Mamie entre dans un instant !",
       "zh": "准备好了吗？一会儿奶奶就进来了！"
      },
      "audioText": "准备好了吗？一会儿奶奶就进来了！"
     },
     {
      "speaker": "大卫",
      "hanzi": "准备好了！",
      "pinyin": "Zhǔnbèi hǎo le!",
      "meaning": {
       "en": "Ready!",
       "fr": "Prêts !",
       "zh": "准备好了！"
      },
      "audioText": "准备好了！"
     },
     {
      "speaker": "大家",
      "hanzi": "奶奶，生日快乐！",
      "pinyin": "Nǎinai, shēngrì kuàilè!",
      "meaning": {
       "en": "Happy birthday, Grandma!",
       "fr": "Joyeux anniversaire, mamie !",
       "zh": "奶奶，生日快乐！"
      },
      "audioText": "奶奶，生日快乐！"
     },
     {
      "speaker": "奶奶",
      "hanzi": "谢谢！这是我最快乐的生日！",
      "pinyin": "Xièxie! Zhè shì wǒ zuì kuàilè de shēngrì!",
      "meaning": {
       "en": "Thank you! This is my happiest birthday!",
       "fr": "Merci ! C'est mon plus bel anniversaire !",
       "zh": "谢谢！这是我最快乐的生日！"
      },
      "audioText": "谢谢！这是我最快乐的生日！"
     }
    ]
   }
  ],
  "story": [
   {
    "hanzi": "在中国，每年过年一家人都要在一起。小明从小就在爷爷奶奶家过年。今天我已经吃了两次饺子了。晚上是奶奶的生日，我们一起说“生日快乐”。",
    "pinyin": "Zài Zhōngguó, měi nián guònián yì jiārén dōu yào zài yìqǐ. Xiǎomíng cóngxiǎo jiù zài yéye nǎinai jiā guònián. Jīntiān wǒ yǐjīng chī le liǎng cì jiǎozi le. Wǎnshang shì nǎinai de shēngrì, wǒmen yìqǐ shuō \"shēngrì kuàilè\".",
    "translation": {
     "en": "In China, the whole family gets together every year for New Year. Since he was small, Xiaoming has spent New Year at his grandparents'. Today I've already eaten dumplings twice. In the evening it was Grandma's birthday, and we all said “Happy birthday”.",
     "fr": "En Chine, toute la famille se réunit chaque année pour le Nouvel An. Depuis tout petit, Xiaoming le fête chez ses grands-parents. Aujourd'hui, j'ai déjà mangé des raviolis deux fois. Le soir, c'était l'anniversaire de la grand-mère, et nous avons tous dit « Joyeux anniversaire ».",
     "zh": "在中国，每年过年一家人都要在一起。小明从小就在爷爷奶奶家过年。今天我已经吃了两次饺子了。晚上是奶奶的生日，我们一起说“生日快乐”。"
    }
   }
  ]
 },
 "lesson-hsk2-15": {
  "scenes": [
   {
    "title": {
     "en": "Spring is here",
     "fr": "Le printemps est là",
     "zh": "天晴了"
    },
    "setting": {
     "en": "April. After a week of rain, the sun is back.",
     "fr": "Avril. Après une semaine de pluie, le soleil revient.",
     "zh": "四月，下了一个星期的雨，天终于晴了。"
    },
    "lines": [
     {
      "speaker": "安娜",
      "hanzi": "你们看，天晴了！",
      "pinyin": "Nǐmen kàn, tiān qíng le!",
      "meaning": {
       "en": "Look, it's cleared up!",
       "fr": "Regardez, le ciel s'est dégagé !",
       "zh": "你们看，天晴了！"
      },
      "audioText": "你们看，天晴了！"
     },
     {
      "speaker": "玛丽",
      "hanzi": "太好了，我们去公园吧。",
      "pinyin": "Tài hǎo le, wǒmen qù gōngyuán ba.",
      "meaning": {
       "en": "Great, let's go to the park.",
       "fr": "Super, allons au parc.",
       "zh": "太好了，我们去公园吧。"
      },
      "audioText": "太好了，我们去公园吧。"
     },
     {
      "speaker": "小明",
      "hanzi": "公园里的花都开了。",
      "pinyin": "Gōngyuán li de huā dōu kāi le.",
      "meaning": {
       "en": "The flowers in the park are all out.",
       "fr": "Les fleurs du parc sont toutes écloses.",
       "zh": "公园里的花都开了。"
      },
      "audioText": "公园里的花都开了。"
     },
     {
      "speaker": "大卫",
      "hanzi": "那我们走吧！",
      "pinyin": "Nà wǒmen zǒu ba!",
      "meaning": {
       "en": "Then let's go!",
       "fr": "Alors allons-y !",
       "zh": "那我们走吧！"
      },
      "audioText": "那我们走吧！"
     }
    ]
   },
   {
    "title": {
     "en": "In the park",
     "fr": "Au parc",
     "zh": "在公园里"
    },
    "setting": {
     "en": "Birds are flying over the lake.",
     "fr": "Des oiseaux volent au-dessus du lac.",
     "zh": "湖上有很多鸟在飞。"
    },
    "lines": [
     {
      "speaker": "玛丽",
      "hanzi": "你看，那只鸟不动了。",
      "pinyin": "Nǐ kàn, nà zhī niǎo bú dòng le.",
      "meaning": {
       "en": "Look, that bird has stopped moving.",
       "fr": "Regarde, cet oiseau ne bouge plus.",
       "zh": "你看，那只鸟不动了。"
      },
      "audioText": "你看，那只鸟不动了。"
     },
     {
      "speaker": "小明",
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
      "speaker": "安娜",
      "hanzi": "我也累了，我们坐一会儿吧。",
      "pinyin": "Wǒ yě lèi le, wǒmen zuò yíhuìr ba.",
      "meaning": {
       "en": "I'm tired too; let's sit for a while.",
       "fr": "Moi aussi je suis fatiguée, asseyons-nous un moment.",
       "zh": "我也累了，我们坐一会儿吧。"
      },
      "audioText": "我也累了，我们坐一会儿吧。"
     },
     {
      "speaker": "大卫",
      "hanzi": "在这儿看花，真快乐！",
      "pinyin": "Zài zhèr kàn huā, zhēn kuàilè!",
      "meaning": {
       "en": "Looking at the flowers here is so nice!",
       "fr": "Regarder les fleurs ici, quel bonheur !",
       "zh": "在这儿看花，真快乐！"
      },
      "audioText": "在这儿看花，真快乐！"
     }
    ]
   },
   {
    "title": {
     "en": "Clouds again",
     "fr": "De nouveau des nuages",
     "zh": "天阴了"
    },
    "setting": {
     "en": "In the afternoon, the sky turns grey.",
     "fr": "L'après-midi, le ciel devient gris.",
     "zh": "下午，天阴了。"
    },
    "lines": [
     {
      "speaker": "小明",
      "hanzi": "天阴了，可能要下雨了。",
      "pinyin": "Tiān yīn le, kěnéng yào xià yǔ le.",
      "meaning": {
       "en": "It's clouding over; it might rain.",
       "fr": "Le ciel se couvre, il va peut-être pleuvoir.",
       "zh": "天阴了，可能要下雨了。"
      },
      "audioText": "天阴了，可能要下雨了。"
     },
     {
      "speaker": "玛丽",
      "hanzi": "我的伞坏了！",
      "pinyin": "Wǒ de sǎn huài le!",
      "meaning": {
       "en": "My umbrella is broken!",
       "fr": "Mon parapluie est cassé !",
       "zh": "我的伞坏了！"
      },
      "audioText": "我的伞坏了！"
     },
     {
      "speaker": "大卫",
      "hanzi": "没关系，我们回去吧。",
      "pinyin": "Méi guānxi, wǒmen huíqu ba.",
      "meaning": {
       "en": "Never mind, let's go back.",
       "fr": "Pas grave, rentrons.",
       "zh": "没关系，我们回去吧。"
      },
      "audioText": "没关系，我们回去吧。"
     },
     {
      "speaker": "安娜",
      "hanzi": "今天虽然没去很远的地方，但是很有意思。",
      "pinyin": "Jīntiān suīrán méi qù hěn yuǎn de dìfang, dànshì hěn yǒu yìsi.",
      "meaning": {
       "en": "We didn't go far today, but it was great fun.",
       "fr": "On n'est pas allés loin aujourd'hui, mais c'était très sympa.",
       "zh": "今天虽然没去很远的地方，但是很有意思。"
      },
      "audioText": "今天虽然没去很远的地方，但是很有意思。"
     }
    ]
   }
  ],
  "story": [
   {
    "hanzi": "春天来了。下了一个星期的雨，今天天晴了，我们去公园看花。湖上有很多鸟在飞。下午天阴了，我们就回去了。在中国的第二年，我很快乐。",
    "pinyin": "Chūntiān lái le. Xià le yí ge xīngqī de yǔ, jīntiān tiān qíng le, wǒmen qù gōngyuán kàn huā. Hú shang yǒu hěn duō niǎo zài fēi. Xiàwǔ tiān yīn le, wǒmen jiù huíqu le. Zài Zhōngguó de dì èr nián, wǒ hěn kuàilè.",
    "translation": {
     "en": "Spring has come. After a week of rain, today it cleared up and we went to the park to see the flowers. Lots of birds were flying over the lake. In the afternoon it clouded over, so we went back. In my second year in China, I'm very happy.",
     "fr": "Le printemps est arrivé. Après une semaine de pluie, le ciel s'est dégagé aujourd'hui et nous sommes allés voir les fleurs au parc. Beaucoup d'oiseaux volaient au-dessus du lac. L'après-midi, le ciel s'est couvert, alors nous sommes rentrés. Pour ma deuxième année en Chine, je suis très heureux.",
     "zh": "春天来了。下了一个星期的雨，今天天晴了，我们去公园看花。湖上有很多鸟在飞。下午天阴了，我们就回去了。在中国的第二年，我很快乐。"
    }
   }
  ]
 },
 "lesson-hsk3-01": {
  "scenes": [
   {
    "title": {
     "en": "Planning a trip",
     "fr": "Préparer un voyage",
     "zh": "打算去旅行"
    },
    "setting": {
     "en": "Summer holidays are coming. Anna and David look at a map.",
     "fr": "Les vacances d'été approchent. Anna et David regardent une carte.",
     "zh": "快放暑假了，安娜和大卫在看地图。"
    },
    "lines": [
     {
      "speaker": "安娜",
      "hanzi": "放假以后你打算做什么？",
      "pinyin": "Fàngjià yǐhòu nǐ dǎsuàn zuò shénme?",
      "meaning": {
       "en": "What are you planning to do after the term ends?",
       "fr": "Qu'est-ce que tu comptes faire après la fin du semestre ?",
       "zh": "放假以后你打算做什么？"
      },
      "audioText": "放假以后你打算做什么？"
     },
     {
      "speaker": "大卫",
      "hanzi": "我想去南方旅行，杭州的环境很好。",
      "pinyin": "Wǒ xiǎng qù nánfāng lǚxíng, Hángzhōu de huánjìng hěn hǎo.",
      "meaning": {
       "en": "I want to travel in the south; Hangzhou is a lovely place.",
       "fr": "Je veux voyager dans le sud ; Hangzhou est un endroit magnifique.",
       "zh": "我想去南方旅行，杭州的环境很好。"
      },
      "audioText": "我想去南方旅行，杭州的环境很好。"
     },
     {
      "speaker": "安娜",
      "hanzi": "如果你去杭州，我就跟你一起去！",
      "pinyin": "Rúguǒ nǐ qù Hángzhōu, wǒ jiù gēn nǐ yìqǐ qù!",
      "meaning": {
       "en": "If you go to Hangzhou, I'll come with you!",
       "fr": "Si tu vas à Hangzhou, je viens avec toi !",
       "zh": "如果你去杭州，我就跟你一起去！"
      },
      "audioText": "如果你去杭州，我就跟你一起去！"
     },
     {
      "speaker": "大卫",
      "hanzi": "太好了，我们先预订宾馆吧。",
      "pinyin": "Tài hǎo le, wǒmen xiān yùdìng bīnguǎn ba.",
      "meaning": {
       "en": "Great, let's book a hotel first.",
       "fr": "Super, réservons d'abord un hôtel.",
       "zh": "太好了，我们先预订宾馆吧。"
      },
      "audioText": "太好了，我们先预订宾馆吧。"
     }
    ]
   },
   {
    "title": {
     "en": "Booking a hotel",
     "fr": "Réserver un hôtel",
     "zh": "预订宾馆"
    },
    "setting": {
     "en": "David calls a hotel near the West Lake.",
     "fr": "David appelle un hôtel près du lac de l'Ouest.",
     "zh": "大卫给西湖旁边的一个宾馆打电话。"
    },
    "lines": [
     {
      "speaker": "服务员",
      "hanzi": "您好，这里是西湖宾馆。",
      "pinyin": "Nín hǎo, zhèlǐ shì Xīhú Bīnguǎn.",
      "meaning": {
       "en": "Hello, West Lake Hotel.",
       "fr": "Bonjour, hôtel du Lac de l'Ouest.",
       "zh": "您好，这里是西湖宾馆。"
      },
      "audioText": "您好，这里是西湖宾馆。"
     },
     {
      "speaker": "大卫",
      "hanzi": "您好，我想预订两个房间，七月十号到十三号。",
      "pinyin": "Nín hǎo, wǒ xiǎng yùdìng liǎng ge fángjiān, qī yuè shí hào dào shísān hào.",
      "meaning": {
       "en": "Hello, I'd like to book two rooms from the tenth to the thirteenth of July.",
       "fr": "Bonjour, je voudrais réserver deux chambres du 10 au 13 juillet.",
       "zh": "您好，我想预订两个房间，七月十号到十三号。"
      },
      "audioText": "您好，我想预订两个房间，七月十号到十三号。"
     },
     {
      "speaker": "服务员",
      "hanzi": "好的。请告诉我您的护照号码。",
      "pinyin": "Hǎo de. Qǐng gàosu wǒ nín de hùzhào hàomǎ.",
      "meaning": {
       "en": "Certainly. Please give me your passport number.",
       "fr": "Très bien. Pouvez-vous me donner votre numéro de passeport ?",
       "zh": "好的。请告诉我您的护照号码。"
      },
      "audioText": "好的。请告诉我您的护照号码。"
     },
     {
      "speaker": "大卫",
      "hanzi": "好，我看一下护照。",
      "pinyin": "Hǎo, wǒ kàn yíxià hùzhào.",
      "meaning": {
       "en": "OK, let me look at my passport.",
       "fr": "D'accord, je regarde mon passeport.",
       "zh": "好，我看一下护照。"
      },
      "audioText": "好，我看一下护照。"
     }
    ]
   },
   {
    "title": {
     "en": "Packing",
     "fr": "Faire ses bagages",
     "zh": "准备行李"
    },
    "setting": {
     "en": "The night before leaving, Anna is still packing.",
     "fr": "La veille du départ, Anna fait encore sa valise.",
     "zh": "出发的前一天晚上，安娜还在准备行李。"
    },
    "lines": [
     {
      "speaker": "大卫",
      "hanzi": "你的行李怎么这么多？",
      "pinyin": "Nǐ de xíngli zěnme zhème duō?",
      "meaning": {
       "en": "Why do you have so much luggage?",
       "fr": "Pourquoi as-tu autant de bagages ?",
       "zh": "你的行李怎么这么多？"
      },
      "audioText": "你的行李怎么这么多？"
     },
     {
      "speaker": "安娜",
      "hanzi": "如果下雨，就要穿这些衣服。",
      "pinyin": "Rúguǒ xià yǔ, jiù yào chuān zhèxiē yīfu.",
      "meaning": {
       "en": "If it rains, I'll need these clothes.",
       "fr": "S'il pleut, il me faudra ces vêtements.",
       "zh": "如果下雨，就要穿这些衣服。"
      },
      "audioText": "如果下雨，就要穿这些衣服。"
     },
     {
      "speaker": "大卫",
      "hanzi": "南方夏天很热，带几件短袖就行了。",
      "pinyin": "Nánfāng xiàtiān hěn rè, dài jǐ jiàn duǎnxiù jiù xíng le.",
      "meaning": {
       "en": "Summers in the south are hot; a few short-sleeved tops will do.",
       "fr": "L'été dans le sud est chaud, quelques t-shirts suffiront.",
       "zh": "南方夏天很热，带几件短袖就行了。"
      },
      "audioText": "南方夏天很热，带几件短袖就行了。"
     },
     {
      "speaker": "安娜",
      "hanzi": "好吧，那我少带一点儿。",
      "pinyin": "Hǎo ba, nà wǒ shǎo dài yìdiǎnr.",
      "meaning": {
       "en": "Fine, then I'll take a bit less.",
       "fr": "Bon, alors j'en prends un peu moins.",
       "zh": "好吧，那我少带一点儿。"
      },
      "audioText": "好吧，那我少带一点儿。"
     }
    ]
   }
  ],
  "story": [
   {
    "hanzi": "暑假我和安娜打算去杭州旅行。听说那里的环境非常好。我们已经预订了西湖旁边的宾馆。如果天气好，我们就骑自行车去看西湖。",
    "pinyin": "Shǔjià wǒ hé Ānnà dǎsuàn qù Hángzhōu lǚxíng. Tīngshuō nàlǐ de huánjìng fēicháng hǎo. Wǒmen yǐjīng yùdìng le Xīhú pángbiān de bīnguǎn. Rúguǒ tiānqì hǎo, wǒmen jiù qí zìxíngchē qù kàn Xīhú.",
    "translation": {
     "en": "This summer Anna and I plan to travel to Hangzhou. People say it's a beautiful place. We've already booked a hotel by the West Lake. If the weather is good, we'll cycle around the lake.",
     "fr": "Cet été, Anna et moi avons prévu un voyage à Hangzhou. On dit que c'est un endroit magnifique. Nous avons déjà réservé un hôtel au bord du lac de l'Ouest. S'il fait beau, nous ferons le tour du lac à vélo.",
     "zh": "暑假我和安娜打算去杭州旅行。听说那里的环境非常好。我们已经预订了西湖旁边的宾馆。如果天气好，我们就骑自行车去看西湖。"
    }
   }
  ]
 },
 "lesson-hsk3-02": {
  "scenes": [
   {
    "title": {
     "en": "First day at the office",
     "fr": "Premier jour au bureau",
     "zh": "第一天上班"
    },
    "setting": {
     "en": "Before the trip, David starts a summer internship in a Beijing company.",
     "fr": "Avant le voyage, David commence un stage d'été dans une entreprise de Pékin.",
     "zh": "旅行以前，大卫在北京一家公司实习。"
    },
    "lines": [
     {
      "speaker": "张经理",
      "hanzi": "大卫，欢迎你！这是你的同事小王。",
      "pinyin": "Dàwèi, huānyíng nǐ! Zhè shì nǐ de tóngshì Xiǎo Wáng.",
      "meaning": {
       "en": "David, welcome! This is your colleague Xiao Wang.",
       "fr": "Bienvenue, David ! Voici ton collègue Xiao Wang.",
       "zh": "大卫，欢迎你！这是你的同事小王。"
      },
      "audioText": "大卫，欢迎你！这是你的同事小王。"
     },
     {
      "speaker": "小王",
      "hanzi": "你好！有问题可以问我。",
      "pinyin": "Nǐ hǎo! Yǒu wèntí kěyǐ wèn wǒ.",
      "meaning": {
       "en": "Hello! Ask me if you have any questions.",
       "fr": "Bonjour ! Si tu as des questions, demande-moi.",
       "zh": "你好！有问题可以问我。"
      },
      "audioText": "你好！有问题可以问我。"
     },
     {
      "speaker": "大卫",
      "hanzi": "谢谢！我第一次在中国公司工作，有点儿紧张。",
      "pinyin": "Xièxie! Wǒ dì yī cì zài Zhōngguó gōngsī gōngzuò, yǒudiǎnr jǐnzhāng.",
      "meaning": {
       "en": "Thanks! It's my first time working in a Chinese company; I'm a bit nervous.",
       "fr": "Merci ! C'est la première fois que je travaille dans une entreprise chinoise, je suis un peu stressé.",
       "zh": "谢谢！我第一次在中国公司工作，有点儿紧张。"
      },
      "audioText": "谢谢！我第一次在中国公司工作，有点儿紧张。"
     },
     {
      "speaker": "张经理",
      "hanzi": "别担心，大家都很好。",
      "pinyin": "Bié dānxīn, dàjiā dōu hěn hǎo.",
      "meaning": {
       "en": "Don't worry, everyone is very nice.",
       "fr": "Ne t'inquiète pas, tout le monde est très gentil.",
       "zh": "别担心，大家都很好。"
      },
      "audioText": "别担心，大家都很好。"
     }
    ]
   },
   {
    "title": {
     "en": "The report",
     "fr": "Le rapport",
     "zh": "写报告"
    },
    "setting": {
     "en": "Mr Zhang asks David to help with a report.",
     "fr": "M. Zhang demande à David d'aider pour un rapport.",
     "zh": "张经理让大卫帮忙写一个报告。"
    },
    "lines": [
     {
      "speaker": "张经理",
      "hanzi": "大卫，请你把这个报告翻译成英语。",
      "pinyin": "Dàwèi, qǐng nǐ bǎ zhège bàogào fānyì chéng Yīngyǔ.",
      "meaning": {
       "en": "David, please translate this report into English.",
       "fr": "David, peux-tu traduire ce rapport en anglais ?",
       "zh": "大卫，请你把这个报告翻译成英语。"
      },
      "audioText": "大卫，请你把这个报告翻译成英语。"
     },
     {
      "speaker": "大卫",
      "hanzi": "好的，什么时候要？",
      "pinyin": "Hǎo de, shénme shíhou yào?",
      "meaning": {
       "en": "Sure, when do you need it?",
       "fr": "D'accord, pour quand ?",
       "zh": "好的，什么时候要？"
      },
      "audioText": "好的，什么时候要？"
     },
     {
      "speaker": "张经理",
      "hanzi": "明天上午开会以前。",
      "pinyin": "Míngtiān shàngwǔ kāihuì yǐqián.",
      "meaning": {
       "en": "Before tomorrow morning's meeting.",
       "fr": "Avant la réunion de demain matin.",
       "zh": "明天上午开会以前。"
      },
      "audioText": "明天上午开会以前。"
     },
     {
      "speaker": "大卫",
      "hanzi": "没问题，我今天就把它完成。",
      "pinyin": "Méi wèntí, wǒ jīntiān jiù bǎ tā wánchéng.",
      "meaning": {
       "en": "No problem, I'll finish it today.",
       "fr": "Pas de problème, je le termine aujourd'hui.",
       "zh": "没问题，我今天就把它完成。"
      },
      "audioText": "没问题，我今天就把它完成。"
     }
    ]
   },
   {
    "title": {
     "en": "Problem solved",
     "fr": "Problème résolu",
     "zh": "问题解决了"
    },
    "setting": {
     "en": "The next morning, after the meeting.",
     "fr": "Le lendemain matin, après la réunion.",
     "zh": "第二天上午，开完会以后。"
    },
    "lines": [
     {
      "speaker": "小王",
      "hanzi": "大卫，经理说你的报告写得很好！",
      "pinyin": "Dàwèi, jīnglǐ shuō nǐ de bàogào xiě de hěn hǎo!",
      "meaning": {
       "en": "David, the manager says your report was very well written!",
       "fr": "David, le directeur dit que ton rapport est très bien fait !",
       "zh": "大卫，经理说你的报告写得很好！"
      },
      "audioText": "大卫，经理说你的报告写得很好！"
     },
     {
      "speaker": "大卫",
      "hanzi": "真的吗？我把每个词都查了一遍。",
      "pinyin": "Zhēn de ma? Wǒ bǎ měi ge cí dōu chá le yí biàn.",
      "meaning": {
       "en": "Really? I looked up every word.",
       "fr": "C'est vrai ? J'ai vérifié chaque mot.",
       "zh": "真的吗？我把每个词都查了一遍。"
      },
      "audioText": "真的吗？我把每个词都查了一遍。"
     },
     {
      "speaker": "小王",
      "hanzi": "你工作很认真。会议上的问题也解决了。",
      "pinyin": "Nǐ gōngzuò hěn rènzhēn. Huìyì shang de wèntí yě jiějué le.",
      "meaning": {
       "en": "You work very carefully. The problem from the meeting is solved too.",
       "fr": "Tu travailles très sérieusement. Le problème de la réunion est réglé aussi.",
       "zh": "你工作很认真。会议上的问题也解决了。"
      },
      "audioText": "你工作很认真。会议上的问题也解决了。"
     },
     {
      "speaker": "大卫",
      "hanzi": "太好了！",
      "pinyin": "Tài hǎo le!",
      "meaning": {
       "en": "Excellent!",
       "fr": "Super !",
       "zh": "太好了！"
      },
      "audioText": "太好了！"
     }
    ]
   }
  ],
  "story": [
   {
    "hanzi": "这个暑假我在一家中国公司实习。张经理和同事们都很热情。我把一个报告翻译成了英语，经理很满意。我觉得在中国公司工作可以学到很多东西。",
    "pinyin": "Zhège shǔjià wǒ zài yì jiā Zhōngguó gōngsī shíxí. Zhāng jīnglǐ hé tóngshìmen dōu hěn rèqíng. Wǒ bǎ yí ge bàogào fānyì chéng le Yīngyǔ, jīnglǐ hěn mǎnyì. Wǒ juéde zài Zhōngguó gōngsī gōngzuò kěyǐ xué dào hěn duō dōngxi.",
    "translation": {
     "en": "This summer I'm interning at a Chinese company. Mr Zhang and my colleagues are very welcoming. I translated a report into English and the manager was pleased. I think working in a Chinese company teaches you a lot.",
     "fr": "Cet été, je fais un stage dans une entreprise chinoise. M. Zhang et mes collègues sont très accueillants. J'ai traduit un rapport en anglais et le directeur était satisfait. Je trouve qu'on apprend beaucoup en travaillant dans une entreprise chinoise.",
     "zh": "这个暑假我在一家中国公司实习。张经理和同事们都很热情。我把一个报告翻译成了英语，经理很满意。我觉得在中国公司工作可以学到很多东西。"
    }
   }
  ]
 },
 "lesson-hsk3-12": {
  "scenes": [
   {
    "title": {
     "en": "Arriving in Hangzhou",
     "fr": "L'arrivée à Hangzhou",
     "zh": "到了杭州"
    },
    "setting": {
     "en": "Anna and David get off the train. Which way is the hotel?",
     "fr": "Anna et David descendent du train. Par où est l'hôtel ?",
     "zh": "安娜和大卫下了火车，不知道宾馆在哪个方向。"
    },
    "lines": [
     {
      "speaker": "安娜",
      "hanzi": "宾馆在火车站的哪边？",
      "pinyin": "Bīnguǎn zài huǒchē zhàn de nǎ biān?",
      "meaning": {
       "en": "Which side of the station is the hotel on?",
       "fr": "De quel côté de la gare est l'hôtel ?",
       "zh": "宾馆在火车站的哪边？"
      },
      "audioText": "宾馆在火车站的哪边？"
     },
     {
      "speaker": "大卫",
      "hanzi": "我看看地图……在西边，西湖附近。",
      "pinyin": "Wǒ kànkan dìtú…… zài xībian, Xīhú fùjìn.",
      "meaning": {
       "en": "Let me check the map… to the west, near the West Lake.",
       "fr": "Je regarde la carte… à l'ouest, près du lac de l'Ouest.",
       "zh": "我看看地图……在西边，西湖附近。"
      },
      "audioText": "我看看地图……在西边，西湖附近。"
     },
     {
      "speaker": "安娜",
      "hanzi": "我不知道方向，哪边是西？",
      "pinyin": "Wǒ bù zhīdào fāngxiàng, nǎ biān shì xī?",
      "meaning": {
       "en": "I've lost my bearings. Which way is west?",
       "fr": "Je ne m'oriente pas. C'est où, l'ouest ?",
       "zh": "我不知道方向，哪边是西？"
      },
      "audioText": "我不知道方向，哪边是西？"
     },
     {
      "speaker": "大卫",
      "hanzi": "太阳在那边下山，那边就是西。",
      "pinyin": "Tàiyáng zài nàbiān xià shān, nàbiān jiù shì xī.",
      "meaning": {
       "en": "The sun sets over there, so that's west.",
       "fr": "Le soleil se couche par là, c'est donc l'ouest.",
       "zh": "太阳在那边下山，那边就是西。"
      },
      "audioText": "太阳在那边下山，那边就是西。"
     }
    ]
   },
   {
    "title": {
     "en": "North or south?",
     "fr": "Nord ou sud ?",
     "zh": "北方人还是南方人？"
    },
    "setting": {
     "en": "In the taxi, the driver chats with them.",
     "fr": "Dans le taxi, le chauffeur discute avec eux.",
     "zh": "在出租车上，司机和他们聊天。"
    },
    "lines": [
     {
      "speaker": "司机",
      "hanzi": "你们是从北方来的吧？",
      "pinyin": "Nǐmen shì cóng běifāng lái de ba?",
      "meaning": {
       "en": "You've come from the north, haven't you?",
       "fr": "Vous venez du nord, non ?",
       "zh": "你们是从北方来的吧？"
      },
      "audioText": "你们是从北方来的吧？"
     },
     {
      "speaker": "安娜",
      "hanzi": "对，我们在北京学习。您是杭州人吗？",
      "pinyin": "Duì, wǒmen zài Běijīng xuéxí. Nín shì Hángzhōu rén ma?",
      "meaning": {
       "en": "Yes, we study in Beijing. Are you from Hangzhou?",
       "fr": "Oui, on étudie à Pékin. Vous êtes de Hangzhou ?",
       "zh": "对，我们在北京学习。您是杭州人吗？"
      },
      "audioText": "对，我们在北京学习。您是杭州人吗？"
     },
     {
      "speaker": "司机",
      "hanzi": "不是，我是外地人，老家在东北。",
      "pinyin": "Bú shì, wǒ shì wàidì rén, lǎojiā zài dōngběi.",
      "meaning": {
       "en": "No, I'm from elsewhere; my home town is in the north-east.",
       "fr": "Non, je ne suis pas d'ici, ma région natale est le nord-est.",
       "zh": "不是，我是外地人，老家在东北。"
      },
      "audioText": "不是，我是外地人，老家在东北。"
     },
     {
      "speaker": "大卫",
      "hanzi": "东北冬天很冷吧？",
      "pinyin": "Dōngběi dōngtiān hěn lěng ba?",
      "meaning": {
       "en": "Winters in the north-east must be cold?",
       "fr": "L'hiver doit être froid dans le nord-est ?",
       "zh": "东北冬天很冷吧？"
      },
      "audioText": "东北冬天很冷吧？"
     },
     {
      "speaker": "司机",
      "hanzi": "非常冷！所以我喜欢南方。",
      "pinyin": "Fēicháng lěng! Suǒyǐ wǒ xǐhuan nánfāng.",
      "meaning": {
       "en": "Freezing! That's why I like the south.",
       "fr": "Glacial ! C'est pour ça que j'aime le sud.",
       "zh": "非常冷！所以我喜欢南方。"
      },
      "audioText": "非常冷！所以我喜欢南方。"
     }
    ]
   },
   {
    "title": {
     "en": "Right in front of you",
     "fr": "Juste devant vous",
     "zh": "就在你面前"
    },
    "setting": {
     "en": "The taxi stops. The hotel is hard to see among the trees.",
     "fr": "Le taxi s'arrête. L'hôtel se voit mal entre les arbres.",
     "zh": "出租车停了，宾馆在树中间，不太容易看见。"
    },
    "lines": [
     {
      "speaker": "安娜",
      "hanzi": "师傅，宾馆在哪儿？",
      "pinyin": "Shīfu, bīnguǎn zài nǎr?",
      "meaning": {
       "en": "Excuse me, where's the hotel?",
       "fr": "Monsieur, où est l'hôtel ?",
       "zh": "师傅，宾馆在哪儿？"
      },
      "audioText": "师傅，宾馆在哪儿？"
     },
     {
      "speaker": "司机",
      "hanzi": "就在你们面前，那两棵大树中间。",
      "pinyin": "Jiù zài nǐmen miànqián, nà liǎng kē dà shù zhōngjiān.",
      "meaning": {
       "en": "Right in front of you, between those two big trees.",
       "fr": "Juste devant vous, entre ces deux grands arbres.",
       "zh": "就在你们面前，那两棵大树中间。"
      },
      "audioText": "就在你们面前，那两棵大树中间。"
     },
     {
      "speaker": "大卫",
      "hanzi": "看见了！附近还有一个公园。",
      "pinyin": "Kànjiàn le! Fùjìn hái yǒu yí ge gōngyuán.",
      "meaning": {
       "en": "I see it! There's a park nearby too.",
       "fr": "Je le vois ! Il y a aussi un parc à côté.",
       "zh": "看见了！附近还有一个公园。"
      },
      "audioText": "看见了！附近还有一个公园。"
     }
    ]
   }
  ],
  "story": [
   {
    "hanzi": "杭州在中国的东南，离上海不远。我们的宾馆在西湖附近，在两棵大树中间。出租车司机是东北人，他说他更喜欢南方，因为南方冬天不太冷。",
    "pinyin": "Hángzhōu zài Zhōngguó de dōngnán, lí Shànghǎi bù yuǎn. Wǒmen de bīnguǎn zài Xīhú fùjìn, zài liǎng kē dà shù zhōngjiān. Chūzūchē sījī shì dōngběi rén, tā shuō tā gèng xǐhuan nánfāng, yīnwèi nánfāng dōngtiān bú tài lěng.",
    "translation": {
     "en": "Hangzhou is in south-east China, not far from Shanghai. Our hotel is near the West Lake, between two big trees. The taxi driver is from the north-east; he says he prefers the south because winters there are milder.",
     "fr": "Hangzhou se trouve dans le sud-est de la Chine, non loin de Shanghai. Notre hôtel est près du lac de l'Ouest, entre deux grands arbres. Le chauffeur de taxi vient du nord-est ; il préfère le sud, où l'hiver est moins froid.",
     "zh": "杭州在中国的东南，离上海不远。我们的宾馆在西湖附近，在两棵大树中间。出租车司机是东北人，他说他更喜欢南方，因为南方冬天不太冷。"
    }
   }
  ]
 },
 "lesson-hsk3-13": {
  "scenes": [
   {
    "title": {
     "en": "Bikes by the lake",
     "fr": "À vélo autour du lac",
     "zh": "骑自行车"
    },
    "setting": {
     "en": "The next morning they rent bikes.",
     "fr": "Le lendemain matin, ils louent des vélos.",
     "zh": "第二天早上，他们租了两辆自行车。"
    },
    "lines": [
     {
      "speaker": "大卫",
      "hanzi": "我们向东骑，经过那座桥，就到湖边了。",
      "pinyin": "Wǒmen xiàng dōng qí, jīngguò nà zuò qiáo, jiù dào hú biān le.",
      "meaning": {
       "en": "Let's ride east; past that bridge we'll reach the lake.",
       "fr": "Roulons vers l'est ; après ce pont, on arrive au lac.",
       "zh": "我们向东骑，经过那座桥，就到湖边了。"
      },
      "audioText": "我们向东骑，经过那座桥，就到湖边了。"
     },
     {
      "speaker": "安娜",
      "hanzi": "路口车很多，小心红绿灯！",
      "pinyin": "Lùkǒu chē hěn duō, xiǎoxīn hóng-lǜdēng!",
      "meaning": {
       "en": "There's a lot of traffic at the junction; watch the lights!",
       "fr": "Il y a beaucoup de voitures au carrefour, attention aux feux !",
       "zh": "路口车很多，小心红绿灯！"
      },
      "audioText": "路口车很多，小心红绿灯！"
     },
     {
      "speaker": "大卫",
      "hanzi": "好，我们在路边骑。",
      "pinyin": "Hǎo, wǒmen zài lùbiān qí.",
      "meaning": {
       "en": "OK, let's ride along the side of the road.",
       "fr": "D'accord, roulons sur le bord de la route.",
       "zh": "好，我们在路边骑。"
      },
      "audioText": "好，我们在路边骑。"
     },
     {
      "speaker": "安娜",
      "hanzi": "你看，湖上有好多船！",
      "pinyin": "Nǐ kàn, hú shang yǒu hǎoduō chuán!",
      "meaning": {
       "en": "Look, there are so many boats on the lake!",
       "fr": "Regarde, il y a plein de bateaux sur le lac !",
       "zh": "你看，湖上有好多船！"
      },
      "audioText": "你看，湖上有好多船！"
     }
    ]
   },
   {
    "title": {
     "en": "The train is late",
     "fr": "Le train est en retard",
     "zh": "高铁晚点了"
    },
    "setting": {
     "en": "Three days later. At the station, a message appears on the screen.",
     "fr": "Trois jours plus tard. À la gare, un message s'affiche à l'écran.",
     "zh": "三天以后，在火车站，大屏幕上出现了一条消息。"
    },
    "lines": [
     {
      "speaker": "安娜",
      "hanzi": "不好，我们的高铁晚点了！",
      "pinyin": "Bù hǎo, wǒmen de gāotiě wǎndiǎn le!",
      "meaning": {
       "en": "Oh no, our high-speed train is delayed!",
       "fr": "Oh non, notre TGV est en retard !",
       "zh": "不好，我们的高铁晚点了！"
      },
      "audioText": "不好，我们的高铁晚点了！"
     },
     {
      "speaker": "大卫",
      "hanzi": "晚多久？",
      "pinyin": "Wǎn duō jiǔ?",
      "meaning": {
       "en": "How late?",
       "fr": "Combien de retard ?",
       "zh": "晚多久？"
      },
      "audioText": "晚多久？"
     },
     {
      "speaker": "安娜",
      "hanzi": "一个小时，三点才出发。",
      "pinyin": "Yí ge xiǎoshí, sān diǎn cái chūfā.",
      "meaning": {
       "en": "An hour; it only leaves at three.",
       "fr": "Une heure, il ne part qu'à quinze heures.",
       "zh": "一个小时，三点才出发。"
      },
      "audioText": "一个小时，三点才出发。"
     },
     {
      "speaker": "大卫",
      "hanzi": "没关系，我们先吃饭，两点半再来检票。",
      "pinyin": "Méi guānxi, wǒmen xiān chī fàn, liǎng diǎn bàn zài lái jiǎnpiào.",
      "meaning": {
       "en": "Never mind, let's eat first and come back for the ticket check at half past two.",
       "fr": "Pas grave, mangeons d'abord et revenons au contrôle des billets à quatorze heures trente.",
       "zh": "没关系，我们先吃饭，两点半再来检票。"
      },
      "audioText": "没关系，我们先吃饭，两点半再来检票。"
     }
    ]
   },
   {
    "title": {
     "en": "Who will pick us up?",
     "fr": "Qui vient nous chercher ?",
     "zh": "谁来接我们？"
    },
    "setting": {
     "en": "On the train, David calls Xiaoming.",
     "fr": "Dans le train, David appelle Xiaoming.",
     "zh": "在高铁上，大卫给小明打电话。"
    },
    "lines": [
     {
      "speaker": "大卫",
      "hanzi": "小明，我们的车晚点了，七点才到北京。",
      "pinyin": "Xiǎomíng, wǒmen de chē wǎndiǎn le, qī diǎn cái dào Běijīng.",
      "meaning": {
       "en": "Xiaoming, our train is late; we only arrive in Beijing at seven.",
       "fr": "Xiaoming, notre train a du retard, on n'arrive à Pékin qu'à dix-neuf heures.",
       "zh": "小明，我们的车晚点了，七点才到北京。"
      },
      "audioText": "小明，我们的车晚点了，七点才到北京。"
     },
     {
      "speaker": "小明",
      "hanzi": "没问题，我开车去车站接你们。",
      "pinyin": "Méi wèntí, wǒ kāichē qù chēzhàn jiē nǐmen.",
      "meaning": {
       "en": "No problem, I'll drive to the station to pick you up.",
       "fr": "Pas de problème, je viens vous chercher en voiture à la gare.",
       "zh": "没问题，我开车去车站接你们。"
      },
      "audioText": "没问题，我开车去车站接你们。"
     },
     {
      "speaker": "大卫",
      "hanzi": "太谢谢你了！我们给你带了杭州的茶。",
      "pinyin": "Tài xièxie nǐ le! Wǒmen gěi nǐ dài le Hángzhōu de chá.",
      "meaning": {
       "en": "Thanks so much! We've brought you some Hangzhou tea.",
       "fr": "Merci beaucoup ! On t'a rapporté du thé de Hangzhou.",
       "zh": "太谢谢你了！我们给你带了杭州的茶。"
      },
      "audioText": "太谢谢你了！我们给你带了杭州的茶。"
     }
    ]
   }
  ],
  "story": [
   {
    "hanzi": "在杭州，我们每天骑自行车向西湖出发，经过很多小桥。湖上有很多船，非常漂亮。回北京那天，高铁晚点了一个小时，小明开车来车站接我们。",
    "pinyin": "Zài Hángzhōu, wǒmen měi tiān qí zìxíngchē xiàng Xīhú chūfā, jīngguò hěn duō xiǎo qiáo. Hú shang yǒu hěn duō chuán, fēicháng piàoliang. Huí Běijīng nà tiān, gāotiě wǎndiǎn le yí ge xiǎoshí, Xiǎomíng kāichē lái chēzhàn jiē wǒmen.",
    "translation": {
     "en": "In Hangzhou we cycled towards the West Lake every day, crossing many little bridges. There were lots of boats on the lake; it was beautiful. The day we went back to Beijing, the train was an hour late, and Xiaoming drove to the station to pick us up.",
     "fr": "À Hangzhou, nous partions chaque jour à vélo vers le lac de l'Ouest, en passant par de nombreux petits ponts. Il y avait beaucoup de bateaux sur le lac, c'était magnifique. Le jour du retour à Pékin, le TGV avait une heure de retard, et Xiaoming est venu nous chercher en voiture.",
     "zh": "在杭州，我们每天骑自行车向西湖出发，经过很多小桥。湖上有很多船，非常漂亮。回北京那天，高铁晚点了一个小时，小明开车来车站接我们。"
    }
   }
  ]
 },
 "lesson-hsk3-11": {
  "scenes": [
   {
    "title": {
     "en": "Pandas!",
     "fr": "Les pandas !",
     "zh": "看大熊猫"
    },
    "setting": {
     "en": "Back in Beijing, Xiaoming's niece wants to see the pandas at the zoo.",
     "fr": "De retour à Pékin, la nièce de Xiaoming veut voir les pandas au zoo.",
     "zh": "回到北京，小明姐姐的女儿想去动物园看大熊猫。"
    },
    "lines": [
     {
      "speaker": "女儿",
      "hanzi": "舅舅，动物园里有大熊猫吗？",
      "pinyin": "Jiùjiu, dòngwùyuán li yǒu dàxióngmāo ma?",
      "meaning": {
       "en": "Uncle, are there pandas in the zoo?",
       "fr": "Tonton, il y a des pandas au zoo ?",
       "zh": "舅舅，动物园里有大熊猫吗？"
      },
      "audioText": "舅舅，动物园里有大熊猫吗？"
     },
     {
      "speaker": "小明",
      "hanzi": "有，大熊猫馆在动物园东边。",
      "pinyin": "Yǒu, dàxióngmāo guǎn zài dòngwùyuán dōngbian.",
      "meaning": {
       "en": "Yes, the panda house is on the east side of the zoo.",
       "fr": "Oui, la maison des pandas est à l'est du zoo.",
       "zh": "有，大熊猫馆在动物园东边。"
      },
      "audioText": "有，大熊猫馆在动物园东边。"
     },
     {
      "speaker": "女儿",
      "hanzi": "它们在做什么？",
      "pinyin": "Tāmen zài zuò shénme?",
      "meaning": {
       "en": "What are they doing?",
       "fr": "Qu'est-ce qu'ils font ?",
       "zh": "它们在做什么？"
      },
      "audioText": "它们在做什么？"
     },
     {
      "speaker": "大卫",
      "hanzi": "你看，一只在吃东西，一只在树上睡觉。",
      "pinyin": "Nǐ kàn, yì zhī zài chī dōngxi, yì zhī zài shù shang shuìjiào.",
      "meaning": {
       "en": "Look, one is eating and one is sleeping in a tree.",
       "fr": "Regarde, il y en a un qui mange et un qui dort dans l'arbre.",
       "zh": "你看，一只在吃东西，一只在树上睡觉。"
      },
      "audioText": "你看，一只在吃东西，一只在树上睡觉。"
     }
    ]
   },
   {
    "title": {
     "en": "Up the mountain",
     "fr": "En haut de la colline",
     "zh": "爬山"
    },
    "setting": {
     "en": "The next weekend they climb the Fragrant Hills west of Beijing.",
     "fr": "Le week-end suivant, ils grimpent sur les Collines parfumées, à l'ouest de Pékin.",
     "zh": "下个周末，他们去北京西边爬香山。"
    },
    "lines": [
     {
      "speaker": "安娜",
      "hanzi": "山上有很多树，真凉快！",
      "pinyin": "Shān shang yǒu hěn duō shù, zhēn liángkuai!",
      "meaning": {
       "en": "There are so many trees on the hill; it's so cool!",
       "fr": "Il y a plein d'arbres sur la colline, quelle fraîcheur !",
       "zh": "山上有很多树，真凉快！"
      },
      "audioText": "山上有很多树，真凉快！"
     },
     {
      "speaker": "小明",
      "hanzi": "秋天的时候，山上的树叶都是红的。",
      "pinyin": "Qiūtiān de shíhou, shān shang de shùyè dōu shì hóng de.",
      "meaning": {
       "en": "In autumn, all the leaves on the hill turn red.",
       "fr": "En automne, toutes les feuilles de la colline deviennent rouges.",
       "zh": "秋天的时候，山上的树叶都是红的。"
      },
      "audioText": "秋天的时候，山上的树叶都是红的。"
     },
     {
      "speaker": "大卫",
      "hanzi": "山下那条河叫什么？",
      "pinyin": "Shān xià nà tiáo hé jiào shénme?",
      "meaning": {
       "en": "What's the name of that river at the bottom of the hill?",
       "fr": "Comment s'appelle la rivière en bas ?",
       "zh": "山下那条河叫什么？"
      },
      "audioText": "山下那条河叫什么？"
     },
     {
      "speaker": "小明",
      "hanzi": "我也不知道，我们下去问问吧。",
      "pinyin": "Wǒ yě bù zhīdào, wǒmen xiàqu wènwen ba.",
      "meaning": {
       "en": "I don't know either; let's go down and ask.",
       "fr": "Je ne sais pas non plus, descendons demander.",
       "zh": "我也不知道，我们下去问问吧。"
      },
      "audioText": "我也不知道，我们下去问问吧。"
     }
    ]
   },
   {
    "title": {
     "en": "A farm",
     "fr": "Une ferme",
     "zh": "在农村"
    },
    "setting": {
     "en": "On the way back they stop at a farm.",
     "fr": "Sur le chemin du retour, ils s'arrêtent dans une ferme.",
     "zh": "回来的路上，他们去了一个农村。"
    },
    "lines": [
     {
      "speaker": "阿姨",
      "hanzi": "你们好！我们家养了马、牛和羊。",
      "pinyin": "Nǐmen hǎo! Wǒmen jiā yǎng le mǎ, niú hé yáng.",
      "meaning": {
       "en": "Hello! We keep horses, cows and sheep.",
       "fr": "Bonjour ! Nous élevons des chevaux, des vaches et des moutons.",
       "zh": "你们好！我们家养了马、牛和羊。"
      },
      "audioText": "你们好！我们家养了马、牛和羊。"
     },
     {
      "speaker": "女儿",
      "hanzi": "我可以给羊吃草吗？",
      "pinyin": "Wǒ kěyǐ gěi yáng chī cǎo ma?",
      "meaning": {
       "en": "Can I feed the sheep some grass?",
       "fr": "Je peux donner de l'herbe aux moutons ?",
       "zh": "我可以给羊吃草吗？"
      },
      "audioText": "我可以给羊吃草吗？"
     },
     {
      "speaker": "阿姨",
      "hanzi": "当然可以，草地上有很多草。",
      "pinyin": "Dāngrán kěyǐ, cǎodì shang yǒu hěn duō cǎo.",
      "meaning": {
       "en": "Of course, there's plenty of grass in the field.",
       "fr": "Bien sûr, il y a plein d'herbe dans le pré.",
       "zh": "当然可以，草地上有很多草。"
      },
      "audioText": "当然可以，草地上有很多草。"
     },
     {
      "speaker": "大卫",
      "hanzi": "花园里的花也开了，真漂亮！",
      "pinyin": "Huāyuán li de huā yě kāi le, zhēn piàoliang!",
      "meaning": {
       "en": "The flowers in the garden are out too; beautiful!",
       "fr": "Les fleurs du jardin sont écloses aussi, c'est magnifique !",
       "zh": "花园里的花也开了，真漂亮！"
      },
      "audioText": "花园里的花也开了，真漂亮！"
     }
    ]
   }
  ],
  "story": [
   {
    "hanzi": "北京动物园里有大熊猫，它们一天吃很多东西，睡很长时间。北京西边有很多山，山上有很多树，夏天很凉快。山下有一个农村，那里的人养了很多动物。",
    "pinyin": "Běijīng dòngwùyuán li yǒu dàxióngmāo, tāmen yì tiān chī hěn duō dōngxi, shuì hěn cháng shíjiān. Běijīng xībian yǒu hěn duō shān, shān shang yǒu hěn duō shù, xiàtiān hěn liángkuai. Shān xià yǒu yí ge nóngcūn, nàlǐ de rén yǎng le hěn duō dòngwù.",
    "translation": {
     "en": "Beijing Zoo has giant pandas; they eat a lot and sleep a long time every day. West of Beijing there are many hills covered in trees, cool in summer. Below them is a village where people keep lots of animals.",
     "fr": "Le zoo de Pékin a des pandas géants ; ils mangent beaucoup et dorment longtemps. À l'ouest de Pékin, il y a beaucoup de collines couvertes d'arbres, fraîches en été. En bas, il y a un village où les gens élèvent beaucoup d'animaux.",
     "zh": "北京动物园里有大熊猫，它们一天吃很多东西，睡很长时间。北京西边有很多山，山上有很多树，夏天很凉快。山下有一个农村，那里的人养了很多动物。"
    }
   }
  ]
 },
 "lesson-hsk3-06": {
  "scenes": [
   {
    "title": {
     "en": "A new roommate",
     "fr": "Une nouvelle colocataire",
     "zh": "新同屋"
    },
    "setting": {
     "en": "Anna has a new roommate, a Korean student.",
     "fr": "Anna a une nouvelle colocataire, une étudiante coréenne.",
     "zh": "安娜有了一个新同屋，是韩国留学生。"
    },
    "lines": [
     {
      "speaker": "大卫",
      "hanzi": "你的新同屋长什么样？",
      "pinyin": "Nǐ de xīn tóngwū zhǎng shénme yàng?",
      "meaning": {
       "en": "What does your new roommate look like?",
       "fr": "À quoi ressemble ta nouvelle colocataire ?",
       "zh": "你的新同屋长什么样？"
      },
      "audioText": "你的新同屋长什么样？"
     },
     {
      "speaker": "安娜",
      "hanzi": "她又高又瘦，头发很长。",
      "pinyin": "Tā yòu gāo yòu shòu, tóufa hěn cháng.",
      "meaning": {
       "en": "She's tall and thin, with long hair.",
       "fr": "Elle est grande et mince, avec les cheveux longs.",
       "zh": "她又高又瘦，头发很长。"
      },
      "audioText": "她又高又瘦，头发很长。"
     },
     {
      "speaker": "大卫",
      "hanzi": "她人怎么样？",
      "pinyin": "Tā rén zěnmeyàng?",
      "meaning": {
       "en": "What's she like?",
       "fr": "Elle est comment ?",
       "zh": "她人怎么样？"
      },
      "audioText": "她人怎么样？"
     },
     {
      "speaker": "安娜",
      "hanzi": "又聪明又可爱，就是有点儿安静。",
      "pinyin": "Yòu cōngmíng yòu kě'ài, jiù shì yǒudiǎnr ānjìng.",
      "meaning": {
       "en": "Clever and sweet, just a bit quiet.",
       "fr": "Intelligente et adorable, juste un peu discrète.",
       "zh": "又聪明又可爱，就是有点儿安静。"
      },
      "audioText": "又聪明又可爱，就是有点儿安静。"
     }
    ]
   },
   {
    "title": {
     "en": "A lost child",
     "fr": "Un enfant perdu",
     "zh": "找孩子"
    },
    "setting": {
     "en": "In a shopping centre, a worried mother asks David for help.",
     "fr": "Dans un centre commercial, une mère inquiète demande de l'aide à David.",
     "zh": "在商场里，一位妈妈着急地请大卫帮忙。"
    },
    "lines": [
     {
      "speaker": "妈妈",
      "hanzi": "先生，你看见一个小男孩儿吗？",
      "pinyin": "Xiānsheng, nǐ kànjiàn yí ge xiǎo nánháir ma?",
      "meaning": {
       "en": "Sir, have you seen a little boy?",
       "fr": "Monsieur, vous avez vu un petit garçon ?",
       "zh": "先生，你看见一个小男孩儿吗？"
      },
      "audioText": "先生，你看见一个小男孩儿吗？"
     },
     {
      "speaker": "大卫",
      "hanzi": "他长什么样？",
      "pinyin": "Tā zhǎng shénme yàng?",
      "meaning": {
       "en": "What does he look like?",
       "fr": "Il ressemble à quoi ?",
       "zh": "他长什么样？"
      },
      "audioText": "他长什么样？"
     },
     {
      "speaker": "妈妈",
      "hanzi": "他五岁，有点儿胖，脸圆圆的，穿蓝色的衣服。",
      "pinyin": "Tā wǔ suì, yǒudiǎnr pàng, liǎn yuányuán de, chuān lánsè de yīfu.",
      "meaning": {
       "en": "He's five, a bit chubby, with a round face, wearing blue.",
       "fr": "Il a cinq ans, il est un peu potelé, avec un visage tout rond, habillé en bleu.",
       "zh": "他五岁，有点儿胖，脸圆圆的，穿蓝色的衣服。"
      },
      "audioText": "他五岁，有点儿胖，脸圆圆的，穿蓝色的衣服。"
     },
     {
      "speaker": "大卫",
      "hanzi": "那边有一个孩子在哭，是他吗？",
      "pinyin": "Nàbiān yǒu yí ge háizi zài kū, shì tā ma?",
      "meaning": {
       "en": "There's a child crying over there; is that him?",
       "fr": "Il y a un enfant qui pleure là-bas, c'est lui ?",
       "zh": "那边有一个孩子在哭，是他吗？"
      },
      "audioText": "那边有一个孩子在哭，是他吗？"
     },
     {
      "speaker": "妈妈",
      "hanzi": "是他！太谢谢你了！",
      "pinyin": "Shì tā! Tài xièxie nǐ le!",
      "meaning": {
       "en": "It's him! Thank you so much!",
       "fr": "C'est lui ! Merci infiniment !",
       "zh": "是他！太谢谢你了！"
      },
      "audioText": "是他！太谢谢你了！"
     }
    ]
   },
   {
    "title": {
     "en": "A strange old man",
     "fr": "Un vieil homme étrange",
     "zh": "奇怪的老人"
    },
    "setting": {
     "en": "In the park, the friends notice an unusual old man.",
     "fr": "Au parc, les amis remarquent un vieil homme pas comme les autres.",
     "zh": "在公园里，朋友们看见一位特别的老人。"
    },
    "lines": [
     {
      "speaker": "安娜",
      "hanzi": "你们看那位老人，他用脚写字！",
      "pinyin": "Nǐmen kàn nà wèi lǎorén, tā yòng jiǎo xiě zì!",
      "meaning": {
       "en": "Look at that old man, he writes with his feet!",
       "fr": "Regardez ce vieil homme, il écrit avec ses pieds !",
       "zh": "你们看那位老人，他用脚写字！"
      },
      "audioText": "你们看那位老人，他用脚写字！"
     },
     {
      "speaker": "小明",
      "hanzi": "他的腿不方便，可是字写得特别好。",
      "pinyin": "Tā de tuǐ bù fāngbiàn, kěshì zì xiě de tèbié hǎo.",
      "meaning": {
       "en": "He can't use his legs well, but his calligraphy is excellent.",
       "fr": "Il a du mal à utiliser ses jambes, mais il écrit remarquablement bien.",
       "zh": "他的腿不方便，可是字写得特别好。"
      },
      "audioText": "他的腿不方便，可是字写得特别好。"
     },
     {
      "speaker": "大卫",
      "hanzi": "真奇怪，他的嘴里还在唱歌。",
      "pinyin": "Zhēn qíguài, tā de zuǐ li hái zài chàng gē.",
      "meaning": {
       "en": "Funny, he's singing at the same time.",
       "fr": "C'est drôle, il chante en même temps.",
       "zh": "真奇怪，他的嘴里还在唱歌。"
      },
      "audioText": "真奇怪，他的嘴里还在唱歌。"
     },
     {
      "speaker": "小明",
      "hanzi": "他每天都在这儿，大家都认识他。",
      "pinyin": "Tā měi tiān dōu zài zhèr, dàjiā dōu rènshi tā.",
      "meaning": {
       "en": "He's here every day; everyone knows him.",
       "fr": "Il est là tous les jours, tout le monde le connaît.",
       "zh": "他每天都在这儿，大家都认识他。"
      },
      "audioText": "他每天都在这儿，大家都认识他。"
     }
    ]
   }
  ],
  "story": [
   {
    "hanzi": "安娜的新同屋又高又瘦，又聪明又可爱。今天在商场里，我帮一位妈妈找到了她的孩子。那个孩子有点儿胖，脸圆圆的，很可爱。",
    "pinyin": "Ānnà de xīn tóngwū yòu gāo yòu shòu, yòu cōngmíng yòu kě'ài. Jīntiān zài shāngchǎng li, wǒ bāng yí wèi māma zhǎo dào le tā de háizi. Nàge háizi yǒudiǎnr pàng, liǎn yuányuán de, hěn kě'ài.",
    "translation": {
     "en": "Anna's new roommate is tall, thin, clever and sweet. Today in the shopping centre, I helped a mother find her child. The boy was a bit chubby with a round face, very cute.",
     "fr": "La nouvelle colocataire d'Anna est grande, mince, intelligente et adorable. Aujourd'hui, au centre commercial, j'ai aidé une mère à retrouver son enfant. Le petit garçon était un peu potelé, avec un visage tout rond, très mignon.",
     "zh": "安娜的新同屋又高又瘦，又聪明又可爱。今天在商场里，我帮一位妈妈找到了她的孩子。那个孩子有点儿胖，脸圆圆的，很可爱。"
    }
   }
  ]
 },
 "lesson-hsk3-05": {
  "scenes": [
   {
    "title": {
     "en": "Mr Wang's party",
     "fr": "La fête du professeur Wang",
     "zh": "王老师家的晚会"
    },
    "setting": {
     "en": "Mr Wang invites his students to a party at his home.",
     "fr": "Le professeur Wang invite ses étudiants à une soirée chez lui.",
     "zh": "王老师请同学们去他家参加晚会。"
    },
    "lines": [
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
      "speaker": "王老师",
      "hanzi": "是啊，有的是我的学生，有的是我的老朋友。",
      "pinyin": "Shì a, yǒude shì wǒ de xuéshēng, yǒude shì wǒ de lǎo péngyou.",
      "meaning": {
       "en": "Yes, some are my students, some are old friends.",
       "fr": "Oui, certains sont mes étudiants, d'autres de vieux amis.",
       "zh": "是啊，有的是我的学生，有的是我的老朋友。"
      },
      "audioText": "是啊，有的是我的学生，有的是我的老朋友。"
     },
     {
      "speaker": "大卫",
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
      "speaker": "王老师",
      "hanzi": "他是我们学校的校长，旁边是他爱人。",
      "pinyin": "Tā shì wǒmen xuéxiào de xiàozhǎng, pángbiān shì tā àiren.",
      "meaning": {
       "en": "He's our university president; next to him is his wife.",
       "fr": "C'est le président de notre université ; à côté de lui, sa femme.",
       "zh": "他是我们学校的校长，旁边是他爱人。"
      },
      "audioText": "他是我们学校的校长，旁边是他爱人。"
     }
    ]
   },
   {
    "title": {
     "en": "Famous guests",
     "fr": "Des invités connus",
     "zh": "名人"
    },
    "setting": {
     "en": "Mary is excited to see someone she knows from TV.",
     "fr": "Mary est tout excitée de voir quelqu'un qu'elle connaît de la télé.",
     "zh": "玛丽看见了一个电视上的名人。"
    },
    "lines": [
     {
      "speaker": "玛丽",
      "hanzi": "那个男人是不是运动员？我在电视上看见过他。",
      "pinyin": "Nàge nánrén shì bu shì yùndòngyuán? Wǒ zài diànshì shang kànjiànguo tā.",
      "meaning": {
       "en": "Isn't that man an athlete? I've seen him on TV.",
       "fr": "Cet homme, ce n'est pas un sportif ? Je l'ai vu à la télé.",
       "zh": "那个男人是不是运动员？我在电视上看见过他。"
      },
      "audioText": "那个男人是不是运动员？我在电视上看见过他。"
     },
     {
      "speaker": "王老师",
      "hanzi": "对，他是我的大学同学，很有名。",
      "pinyin": "Duì, tā shì wǒ de dàxué tóngxué, hěn yǒumíng.",
      "meaning": {
       "en": "Yes, he was my university classmate; he's quite famous.",
       "fr": "Oui, c'était mon camarade d'université, il est assez connu.",
       "zh": "对，他是我的大学同学，很有名。"
      },
      "audioText": "对，他是我的大学同学，很有名。"
     },
     {
      "speaker": "玛丽",
      "hanzi": "他旁边的女人呢？",
      "pinyin": "Tā pángbiān de nǚrén ne?",
      "meaning": {
       "en": "And the woman next to him?",
       "fr": "Et la femme à côté de lui ?",
       "zh": "他旁边的女人呢？"
      },
      "audioText": "他旁边的女人呢？"
     },
     {
      "speaker": "王老师",
      "hanzi": "她是一位画家，他们是夫妻。",
      "pinyin": "Tā shì yí wèi huàjiā, tāmen shì fūqī.",
      "meaning": {
       "en": "She's a painter; they're husband and wife.",
       "fr": "Elle est peintre, ils sont mari et femme.",
       "zh": "她是一位画家，他们是夫妻。"
      },
      "audioText": "她是一位画家，他们是夫妻。"
     }
    ]
   },
   {
    "title": {
     "en": "Old and young",
     "fr": "Petits et grands",
     "zh": "大人和孩子"
    },
    "setting": {
     "en": "Children are running everywhere.",
     "fr": "Des enfants courent partout.",
     "zh": "孩子们到处跑。"
    },
    "lines": [
     {
      "speaker": "小明",
      "hanzi": "王老师，您家有几个孩子？",
      "pinyin": "Wáng lǎoshī, nín jiā yǒu jǐ ge háizi?",
      "meaning": {
       "en": "Mr Wang, how many children do you have?",
       "fr": "Professeur Wang, combien d'enfants avez-vous ?",
       "zh": "王老师，您家有几个孩子？"
      },
      "audioText": "王老师，您家有几个孩子？"
     },
     {
      "speaker": "王老师",
      "hanzi": "一个女儿，她们姐妹俩是朋友。",
      "pinyin": "Yí ge nǚ'ér, tāmen jiěmèi liǎ shì péngyou.",
      "meaning": {
       "en": "One daughter; she and her friend are like sisters.",
       "fr": "Une fille ; elle et son amie sont comme deux sœurs.",
       "zh": "一个女儿，她们姐妹俩是朋友。"
      },
      "audioText": "一个女儿，她们姐妹俩是朋友。"
     },
     {
      "speaker": "安娜",
      "hanzi": "大人在聊天，孩子在玩儿，老人在喝茶，真热闹！",
      "pinyin": "Dàren zài liáotiān, háizi zài wánr, lǎorén zài hē chá, zhēn rènao!",
      "meaning": {
       "en": "The adults are chatting, the children playing and the elderly drinking tea; so lively!",
       "fr": "Les adultes discutent, les enfants jouent, les anciens boivent du thé : quelle animation !",
       "zh": "大人在聊天，孩子在玩儿，老人在喝茶，真热闹！"
      },
      "audioText": "大人在聊天，孩子在玩儿，老人在喝茶，真热闹！"
     },
     {
      "speaker": "王老师",
      "hanzi": "欢迎你们常来！",
      "pinyin": "Huānyíng nǐmen cháng lái!",
      "meaning": {
       "en": "You're welcome any time!",
       "fr": "Revenez quand vous voulez !",
       "zh": "欢迎你们常来！"
      },
      "audioText": "欢迎你们常来！"
     }
    ]
   }
  ],
  "story": [
   {
    "hanzi": "王老师家的晚会来了很多客人。有的是留学生，有的是老师，还有校长和一位很有名的运动员。大人在聊天，孩子在玩儿，大家都很开心。",
    "pinyin": "Wáng lǎoshī jiā de wǎnhuì lái le hěn duō kèrén. Yǒude shì liúxuéshēng, yǒude shì lǎoshī, hái yǒu xiàozhǎng hé yí wèi hěn yǒumíng de yùndòngyuán. Dàren zài liáotiān, háizi zài wánr, dàjiā dōu hěn kāixīn.",
    "translation": {
     "en": "Many guests came to Mr Wang's party. Some were international students, some teachers, and there was also the university president and a famous athlete. The adults chatted, the children played, and everyone was happy.",
     "fr": "Beaucoup d'invités sont venus à la soirée du professeur Wang. Certains étaient des étudiants étrangers, d'autres des professeurs, et il y avait aussi le président de l'université et un sportif célèbre. Les adultes discutaient, les enfants jouaient, et tout le monde était content.",
     "zh": "王老师家的晚会来了很多客人。有的是留学生，有的是老师，还有校长和一位很有名的运动员。大人在聊天，孩子在玩儿，大家都很开心。"
    }
   }
  ]
 },
 "lesson-hsk3-04": {
  "scenes": [
   {
    "title": {
     "en": "Grandpa's village",
     "fr": "Le village de grand-père",
     "zh": "爷爷的家乡"
    },
    "setting": {
     "en": "Xiaoming visits his grandparents in the south and calls David.",
     "fr": "Xiaoming rend visite à ses grands-parents dans le sud et appelle David.",
     "zh": "小明去南方看爷爷奶奶，给大卫打电话。"
    },
    "lines": [
     {
      "speaker": "大卫",
      "hanzi": "小明，你爷爷的家乡怎么样？",
      "pinyin": "Xiǎomíng, nǐ yéye de jiāxiāng zěnmeyàng?",
      "meaning": {
       "en": "Xiaoming, what is your grandpa's village like?",
       "fr": "Xiaoming, comment est le village de ton grand-père ?",
       "zh": "小明，你爷爷的家乡怎么样？"
      },
      "audioText": "小明，你爷爷的家乡怎么样？"
     },
     {
      "speaker": "小明",
      "hanzi": "变化真大！以前没有路，现在交通越来越方便了。",
      "pinyin": "Biànhuà zhēn dà! Yǐqián méiyǒu lù, xiànzài jiāotōng yuèláiyuè fāngbiàn le.",
      "meaning": {
       "en": "It's changed so much! There used to be no road; now getting around is easier and easier.",
       "fr": "Ça a tellement changé ! Avant, il n'y avait pas de route, maintenant c'est de plus en plus facile de circuler.",
       "zh": "变化真大！以前没有路，现在交通越来越方便了。"
      },
      "audioText": "变化真大！以前没有路，现在交通越来越方便了。"
     },
     {
      "speaker": "大卫",
      "hanzi": "年轻人都在那儿吗？",
      "pinyin": "Niánqīng rén dōu zài nàr ma?",
      "meaning": {
       "en": "Do young people stay there?",
       "fr": "Les jeunes y restent ?",
       "zh": "年轻人都在那儿吗？"
      },
      "audioText": "年轻人都在那儿吗？"
     },
     {
      "speaker": "小明",
      "hanzi": "很多年轻人去城市工作了，但是也有人回来了。",
      "pinyin": "Hěn duō niánqīng rén qù chéngshì gōngzuò le, dànshì yě yǒu rén huílai le.",
      "meaning": {
       "en": "Many went to work in the cities, but some have come back.",
       "fr": "Beaucoup sont partis travailler en ville, mais certains sont revenus.",
       "zh": "很多年轻人去城市工作了，但是也有人回来了。"
      },
      "audioText": "很多年轻人去城市工作了，但是也有人回来了。"
     }
    ]
   },
   {
    "title": {
     "en": "Neighbours",
     "fr": "Les voisins",
     "zh": "邻居"
    },
    "setting": {
     "en": "Grandpa talks about his neighbours.",
     "fr": "Grand-père parle de ses voisins.",
     "zh": "爷爷说起他的邻居。"
    },
    "lines": [
     {
      "speaker": "爷爷",
      "hanzi": "我们的邻居在网上卖水果，生活越来越好了。",
      "pinyin": "Wǒmen de línjū zài wǎngshang mài shuǐguǒ, shēnghuó yuèláiyuè hǎo le.",
      "meaning": {
       "en": "Our neighbours sell fruit online; life is getting better and better.",
       "fr": "Nos voisins vendent des fruits en ligne, la vie est de plus en plus belle.",
       "zh": "我们的邻居在网上卖水果，生活越来越好了。"
      },
      "audioText": "我们的邻居在网上卖水果，生活越来越好了。"
     },
     {
      "speaker": "小明",
      "hanzi": "爷爷，您也上网吗？",
      "pinyin": "Yéye, nín yě shàngwǎng ma?",
      "meaning": {
       "en": "Grandpa, do you go online too?",
       "fr": "Grand-père, tu vas sur internet aussi ?",
       "zh": "爷爷，您也上网吗？"
      },
      "audioText": "爷爷，您也上网吗？"
     },
     {
      "speaker": "爷爷",
      "hanzi": "上啊！我每天在网上看新闻。",
      "pinyin": "Shàng a! Wǒ měi tiān zài wǎngshang kàn xīnwén.",
      "meaning": {
       "en": "Of course! I read the news online every day.",
       "fr": "Bien sûr ! Je lis les infos en ligne tous les jours.",
       "zh": "上啊！我每天在网上看新闻。"
      },
      "audioText": "上啊！我每天在网上看新闻。"
     },
     {
      "speaker": "小明",
      "hanzi": "您真厉害！",
      "pinyin": "Nín zhēn lìhai!",
      "meaning": {
       "en": "You're amazing!",
       "fr": "Tu es formidable !",
       "zh": "您真厉害！"
      },
      "audioText": "您真厉害！"
     }
    ]
   },
   {
    "title": {
     "en": "A healthy city",
     "fr": "Une ville en bonne santé",
     "zh": "健康的城市"
    },
    "setting": {
     "en": "Back in Beijing, the friends talk about the environment.",
     "fr": "De retour à Pékin, les amis parlent de l'environnement.",
     "zh": "回到北京，朋友们说起环境。"
    },
    "lines": [
     {
      "speaker": "安娜",
      "hanzi": "北京的天气越来越好了。",
      "pinyin": "Běijīng de tiānqì yuèláiyuè hǎo le.",
      "meaning": {
       "en": "The air in Beijing is getting better and better.",
       "fr": "L'air de Pékin est de plus en plus pur.",
       "zh": "北京的天气越来越好了。"
      },
      "audioText": "北京的天气越来越好了。"
     },
     {
      "speaker": "小明",
      "hanzi": "是啊，现在很多人骑自行车，又健康又安全。",
      "pinyin": "Shì a, xiànzài hěn duō rén qí zìxíngchē, yòu jiànkāng yòu ānquán.",
      "meaning": {
       "en": "Yes, lots of people cycle now; it's healthy and safe.",
       "fr": "Oui, beaucoup de gens font du vélo maintenant, c'est sain et sûr.",
       "zh": "是啊，现在很多人骑自行车，又健康又安全。"
      },
      "audioText": "是啊，现在很多人骑自行车，又健康又安全。"
     },
     {
      "speaker": "大卫",
      "hanzi": "环境对每个人都很重要。",
      "pinyin": "Huánjìng duì měi ge rén dōu hěn zhòngyào.",
      "meaning": {
       "en": "The environment matters to everyone.",
       "fr": "L'environnement est important pour tout le monde.",
       "zh": "环境对每个人都很重要。"
      },
      "audioText": "环境对每个人都很重要。"
     }
    ]
   }
  ],
  "story": [
   {
    "hanzi": "中国的城市和农村发展得很快。小明爷爷的家乡以前没有路，现在交通越来越方便了。邻居们在网上卖东西，生活越来越好。爷爷每天上网看新闻，了解世界上的事。",
    "pinyin": "Zhōngguó de chéngshì hé nóngcūn fāzhǎn de hěn kuài. Xiǎomíng yéye de jiāxiāng yǐqián méiyǒu lù, xiànzài jiāotōng yuèláiyuè fāngbiàn le. Línjūmen zài wǎngshang mài dōngxi, shēnghuó yuèláiyuè hǎo. Yéye měi tiān shàngwǎng kàn xīnwén, liǎojiě shìjiè shang de shì.",
    "translation": {
     "en": "China's cities and countryside are developing fast. Xiaoming's grandpa's village used to have no road; now it's easier and easier to get around. The neighbours sell things online and life keeps improving. Grandpa reads the news online every day to keep up with the world.",
     "fr": "Les villes et les campagnes chinoises se développent vite. Le village du grand-père de Xiaoming n'avait pas de route ; maintenant, c'est de plus en plus facile de circuler. Les voisins vendent en ligne et la vie s'améliore. Le grand-père lit les infos sur internet tous les jours pour suivre ce qui se passe dans le monde.",
     "zh": "中国的城市和农村发展得很快。小明爷爷的家乡以前没有路，现在交通越来越方便了。邻居们在网上卖东西，生活越来越好。爷爷每天上网看新闻，了解世界上的事。"
    }
   }
  ]
 },
 "lesson-hsk3-15": {
  "scenes": [
   {
    "title": {
     "en": "Preparing for HSK 3",
     "fr": "Préparer le HSK 3",
     "zh": "准备HSK三级"
    },
    "setting": {
     "en": "Mary is preparing for the HSK 3 exam.",
     "fr": "Mary prépare l'examen du HSK 3.",
     "zh": "玛丽在准备HSK三级考试。"
    },
    "lines": [
     {
      "speaker": "玛丽",
      "hanzi": "王老师，HSK三级的听力我常常听不懂。",
      "pinyin": "Wáng lǎoshī, HSK sān jí de tīnglì wǒ chángcháng tīng bu dǒng.",
      "meaning": {
       "en": "Mr Wang, I often can't understand the HSK 3 listening.",
       "fr": "Professeur Wang, souvent je ne comprends pas l'écoute du HSK 3.",
       "zh": "王老师，HSK三级的听力我常常听不懂。"
      },
      "audioText": "王老师，HSK三级的听力我常常听不懂。"
     },
     {
      "speaker": "王老师",
      "hanzi": "别着急，每天坚持听半个小时。",
      "pinyin": "Bié zháojí, měi tiān jiānchí tīng bàn ge xiǎoshí.",
      "meaning": {
       "en": "Don't worry; keep listening half an hour every day.",
       "fr": "Ne t'inquiète pas, écoute une demi-heure chaque jour sans faute.",
       "zh": "别着急，每天坚持听半个小时。"
      },
      "audioText": "别着急，每天坚持听半个小时。"
     },
     {
      "speaker": "玛丽",
      "hanzi": "句子太长了，我听不清楚。",
      "pinyin": "Jùzi tài cháng le, wǒ tīng bu qīngchu.",
      "meaning": {
       "en": "The sentences are too long; I can't hear them clearly.",
       "fr": "Les phrases sont trop longues, je n'entends pas bien.",
       "zh": "句子太长了，我听不清楚。"
      },
      "audioText": "句子太长了，我听不清楚。"
     },
     {
      "speaker": "王老师",
      "hanzi": "先听简单的对话，再听难的。",
      "pinyin": "Xiān tīng jiǎndān de duìhuà, zài tīng nán de.",
      "meaning": {
       "en": "Listen to simple dialogues first, then the hard ones.",
       "fr": "Écoute d'abord des dialogues simples, puis les difficiles.",
       "zh": "先听简单的对话，再听难的。"
      },
      "audioText": "先听简单的对话，再听难的。"
     }
    ]
   },
   {
    "title": {
     "en": "A difficult question",
     "fr": "Une question difficile",
     "zh": "难题"
    },
    "setting": {
     "en": "In the library, Mary asks David for help.",
     "fr": "À la bibliothèque, Mary demande de l'aide à David.",
     "zh": "在图书馆，玛丽请大卫帮忙。"
    },
    "lines": [
     {
      "speaker": "玛丽",
      "hanzi": "大卫，这个难题你会回答吗？",
      "pinyin": "Dàwèi, zhège nántí nǐ huì huídá ma?",
      "meaning": {
       "en": "David, can you answer this hard question?",
       "fr": "David, tu sais répondre à cette question difficile ?",
       "zh": "大卫，这个难题你会回答吗？"
      },
      "audioText": "大卫，这个难题你会回答吗？"
     },
     {
      "speaker": "大卫",
      "hanzi": "我看看……这个句子我看得懂，但是这个词我不认得。",
      "pinyin": "Wǒ kànkan…… zhège jùzi wǒ kàn de dǒng, dànshì zhège cí wǒ bú rènde.",
      "meaning": {
       "en": "Let me see… I understand this sentence, but I don't recognise this word.",
       "fr": "Voyons… je comprends cette phrase, mais je ne reconnais pas ce mot.",
       "zh": "我看看……这个句子我看得懂，但是这个词我不认得。"
      },
      "audioText": "我看看……这个句子我看得懂，但是这个词我不认得。"
     },
     {
      "speaker": "玛丽",
      "hanzi": "我们查一下词典吧。",
      "pinyin": "Wǒmen chá yíxià cídiǎn ba.",
      "meaning": {
       "en": "Let's look it up in the dictionary.",
       "fr": "Cherchons dans le dictionnaire.",
       "zh": "我们查一下词典吧。"
      },
      "audioText": "我们查一下词典吧。"
     },
     {
      "speaker": "大卫",
      "hanzi": "明白了！意思是“了解”。",
      "pinyin": "Míngbai le! Yìsi shì \"liǎojiě\".",
      "meaning": {
       "en": "Got it! It means “to understand, to know about”.",
       "fr": "Compris ! Ça veut dire « comprendre, connaître ».",
       "zh": "明白了！意思是“了解”。"
      },
      "audioText": "明白了！意思是“了解”。"
     }
    ]
   },
   {
    "title": {
     "en": "The results",
     "fr": "Les résultats",
     "zh": "成绩出来了"
    },
    "setting": {
     "en": "A month later, the results come out.",
     "fr": "Un mois plus tard, les résultats tombent.",
     "zh": "一个月以后，考试成绩出来了。"
    },
    "lines": [
     {
      "speaker": "玛丽",
      "hanzi": "我考了二百五十分！",
      "pinyin": "Wǒ kǎo le èrbǎiwǔshí fēn!",
      "meaning": {
       "en": "I got 250 points!",
       "fr": "J'ai eu 250 points !",
       "zh": "我考了二百五十分！"
      },
      "audioText": "我考了二百五十分！"
     },
     {
      "speaker": "王老师",
      "hanzi": "很好！你的水平提高得很快。",
      "pinyin": "Hěn hǎo! Nǐ de shuǐpíng tígāo de hěn kuài.",
      "meaning": {
       "en": "Very good! Your level has improved fast.",
       "fr": "Très bien ! Ton niveau a vite progressé.",
       "zh": "很好！你的水平提高得很快。"
      },
      "audioText": "很好！你的水平提高得很快。"
     },
     {
      "speaker": "玛丽",
      "hanzi": "谢谢老师，努力真的有用！",
      "pinyin": "Xièxie lǎoshī, nǔlì zhēn de yǒuyòng!",
      "meaning": {
       "en": "Thank you, teacher; hard work really pays off!",
       "fr": "Merci, professeur, le travail paie vraiment !",
       "zh": "谢谢老师，努力真的有用！"
      },
      "audioText": "谢谢老师，努力真的有用！"
     }
    ]
   }
  ],
  "story": [
   {
    "hanzi": "玛丽一直在准备HSK三级。开始的时候，她听不懂长句子。王老师让她先听简单的对话，每天坚持半个小时。最后她考了二百五十分，水平提高得很快。",
    "pinyin": "Mǎlì yìzhí zài zhǔnbèi HSK sān jí. Kāishǐ de shíhou, tā tīng bu dǒng cháng jùzi. Wáng lǎoshī ràng tā xiān tīng jiǎndān de duìhuà, měi tiān jiānchí bàn ge xiǎoshí. Zuìhòu tā kǎo le èrbǎiwǔshí fēn, shuǐpíng tígāo de hěn kuài.",
    "translation": {
     "en": "Mary has been preparing for HSK 3. At first she couldn't understand long sentences. Mr Wang told her to start with simple dialogues and keep at it for half an hour every day. In the end she scored 250 points; her level improved fast.",
     "fr": "Mary préparait le HSK 3. Au début, elle ne comprenait pas les phrases longues. Le professeur Wang lui a conseillé de commencer par des dialogues simples, une demi-heure par jour sans faute. Finalement, elle a obtenu 250 points : son niveau a vite progressé.",
     "zh": "玛丽一直在准备HSK三级。开始的时候，她听不懂长句子。王老师让她先听简单的对话，每天坚持半个小时。最后她考了二百五十分，水平提高得很快。"
    }
   }
  ]
 },
 "lesson-hsk3-21": {
  "scenes": [
   {
    "title": {
     "en": "Late again",
     "fr": "Encore en retard",
     "zh": "又迟到了"
    },
    "setting": {
     "en": "Monday morning at the office. David rushes in.",
     "fr": "Lundi matin au bureau. David arrive en courant.",
     "zh": "星期一早上，大卫跑进办公室。"
    },
    "lines": [
     {
      "speaker": "小王",
      "hanzi": "你怎么才来？会议刚开始。",
      "pinyin": "Nǐ zěnme cái lái? Huìyì gāng kāishǐ.",
      "meaning": {
       "en": "Why are you only arriving now? The meeting has just started.",
       "fr": "Pourquoi tu arrives seulement maintenant ? La réunion vient de commencer.",
       "zh": "你怎么才来？会议刚开始。"
      },
      "audioText": "你怎么才来？会议刚开始。"
     },
     {
      "speaker": "大卫",
      "hanzi": "对不起，地铁突然停了半天。",
      "pinyin": "Duìbuqǐ, dìtiě tūrán tíng le bàntiān.",
      "meaning": {
       "en": "Sorry, the underground suddenly stopped for ages.",
       "fr": "Désolé, le métro s'est arrêté d'un coup pendant une éternité.",
       "zh": "对不起，地铁突然停了半天。"
      },
      "audioText": "对不起，地铁突然停了半天。"
     },
     {
      "speaker": "小王",
      "hanzi": "经理刚才问你在哪儿。",
      "pinyin": "Jīnglǐ gāngcái wèn nǐ zài nǎr.",
      "meaning": {
       "en": "The manager asked where you were a moment ago.",
       "fr": "Le directeur a demandé où tu étais tout à l'heure.",
       "zh": "经理刚才问你在哪儿。"
      },
      "audioText": "经理刚才问你在哪儿。"
     },
     {
      "speaker": "大卫",
      "hanzi": "我马上去会议室。",
      "pinyin": "Wǒ mǎshàng qù huìyìshì.",
      "meaning": {
       "en": "I'll go to the meeting room right away.",
       "fr": "Je vais tout de suite en salle de réunion.",
       "zh": "我马上去会议室。"
      },
      "audioText": "我马上去会议室。"
     }
    ]
   },
   {
    "title": {
     "en": "Long time no see",
     "fr": "Ça fait longtemps",
     "zh": "好久不见"
    },
    "setting": {
     "en": "At lunch, David meets a former classmate by chance.",
     "fr": "À midi, David croise par hasard un ancien camarade.",
     "zh": "中午，大卫遇到了以前的一个同学。"
    },
    "lines": [
     {
      "speaker": "大卫",
      "hanzi": "小李！好久不见！",
      "pinyin": "Xiǎo Lǐ! Hǎojiǔ bújiàn!",
      "meaning": {
       "en": "Xiao Li! Long time no see!",
       "fr": "Xiao Li ! Ça fait longtemps !",
       "zh": "小李！好久不见！"
      },
      "audioText": "小李！好久不见！"
     },
     {
      "speaker": "小李",
      "hanzi": "大卫！最近怎么样？",
      "pinyin": "Dàwèi! Zuìjìn zěnmeyàng?",
      "meaning": {
       "en": "David! How have you been lately?",
       "fr": "David ! Comment vas-tu ces temps-ci ?",
       "zh": "大卫！最近怎么样？"
      },
      "audioText": "大卫！最近怎么样？"
     },
     {
      "speaker": "大卫",
      "hanzi": "我在这家公司实习。你呢？",
      "pinyin": "Wǒ zài zhè jiā gōngsī shíxí. Nǐ ne?",
      "meaning": {
       "en": "I'm interning at this company. And you?",
       "fr": "Je fais un stage dans cette entreprise. Et toi ?",
       "zh": "我在这家公司实习。你呢？"
      },
      "audioText": "我在这家公司实习。你呢？"
     },
     {
      "speaker": "小李",
      "hanzi": "我前年毕业了，一直在旁边的公司工作。后天我还要告诉你一个好消息！",
      "pinyin": "Wǒ qiánnián bìyè le, yìzhí zài pángbiān de gōngsī gōngzuò. Hòutiān wǒ hái yào gàosu nǐ yí ge hǎo xiāoxi!",
      "meaning": {
       "en": "I graduated the year before last and have worked next door ever since. The day after tomorrow I'll have some good news for you!",
       "fr": "J'ai fini mes études il y a deux ans et je travaille à côté depuis. Après-demain, j'aurai une bonne nouvelle à t'annoncer !",
       "zh": "我前年毕业了，一直在旁边的公司工作。后天我还要告诉你一个好消息！"
      },
      "audioText": "我前年毕业了，一直在旁边的公司工作。后天我还要告诉你一个好消息！"
     }
    ]
   },
   {
    "title": {
     "en": "Good news",
     "fr": "Une bonne nouvelle",
     "zh": "好消息"
    },
    "setting": {
     "en": "Two days later, Xiao Li calls.",
     "fr": "Deux jours plus tard, Xiao Li appelle.",
     "zh": "两天以后，小李打来电话。"
    },
    "lines": [
     {
      "speaker": "小李",
      "hanzi": "大卫，我终于要结婚了！",
      "pinyin": "Dàwèi, wǒ zhōngyú yào jiéhūn le!",
      "meaning": {
       "en": "David, I'm finally getting married!",
       "fr": "David, je vais enfin me marier !",
       "zh": "大卫，我终于要结婚了！"
      },
      "audioText": "大卫，我终于要结婚了！"
     },
     {
      "speaker": "大卫",
      "hanzi": "太好了！什么时候？",
      "pinyin": "Tài hǎo le! Shénme shíhou?",
      "meaning": {
       "en": "Fantastic! When?",
       "fr": "Génial ! Quand ?",
       "zh": "太好了！什么时候？"
      },
      "audioText": "太好了！什么时候？"
     },
     {
      "speaker": "小李",
      "hanzi": "十月一号，你一定要来！",
      "pinyin": "Shí yuè yī hào, nǐ yídìng yào lái!",
      "meaning": {
       "en": "On the first of October; you must come!",
       "fr": "Le 1er octobre, tu dois absolument venir !",
       "zh": "十月一号，你一定要来！"
      },
      "audioText": "十月一号，你一定要来！"
     },
     {
      "speaker": "大卫",
      "hanzi": "一定！",
      "pinyin": "Yídìng!",
      "meaning": {
       "en": "Definitely!",
       "fr": "Sans faute !",
       "zh": "一定！"
      },
      "audioText": "一定！"
     }
    ]
   }
  ],
  "story": [
   {
    "hanzi": "星期一地铁突然停了，我又迟到了。会议刚开始，经理刚才还问我在哪儿。中午我遇到了以前的同学小李，好久不见了。后来他告诉我，他终于要结婚了。",
    "pinyin": "Xīngqīyī dìtiě tūrán tíng le, wǒ yòu chídào le. Huìyì gāng kāishǐ, jīnglǐ gāngcái hái wèn wǒ zài nǎr. Zhōngwǔ wǒ yùdào le yǐqián de tóngxué Xiǎo Lǐ, hǎojiǔ bújiàn le. Hòulái tā gàosu wǒ, tā zhōngyú yào jiéhūn le.",
    "translation": {
     "en": "On Monday the underground suddenly stopped and I was late again. The meeting had just started; the manager had asked where I was a moment before. At lunch I ran into my former classmate Xiao Li; it had been ages. Later he told me he was finally getting married.",
     "fr": "Lundi, le métro s'est arrêté d'un coup et j'étais encore en retard. La réunion venait de commencer ; le directeur avait demandé où j'étais un instant plus tôt. À midi, j'ai croisé mon ancien camarade Xiao Li, que je n'avais pas vu depuis longtemps. Plus tard, il m'a annoncé qu'il allait enfin se marier.",
     "zh": "星期一地铁突然停了，我又迟到了。会议刚开始，经理刚才还问我在哪儿。中午我遇到了以前的同学小李，好久不见了。后来他告诉我，他终于要结婚了。"
    }
   }
  ]
 },
 "lesson-hsk3-16": {
  "scenes": [
   {
    "title": {
     "en": "Company sports day",
     "fr": "La journée sportive de l'entreprise",
     "zh": "公司运动会"
    },
    "setting": {
     "en": "The company organises a sports day in a gymnasium.",
     "fr": "L'entreprise organise une journée sportive dans un gymnase.",
     "zh": "公司在体育馆开运动会。"
    },
    "lines": [
     {
      "speaker": "张经理",
      "hanzi": "大卫，你对什么运动感兴趣？",
      "pinyin": "Dàwèi, nǐ duì shénme yùndòng gǎn xìngqù?",
      "meaning": {
       "en": "David, which sports are you interested in?",
       "fr": "David, quels sports t'intéressent ?",
       "zh": "大卫，你对什么运动感兴趣？"
      },
      "audioText": "大卫，你对什么运动感兴趣？"
     },
     {
      "speaker": "大卫",
      "hanzi": "我对网球很感兴趣，羽毛球也会打。",
      "pinyin": "Wǒ duì wǎngqiú hěn gǎn xìngqù, yǔmáoqiú yě huì dǎ.",
      "meaning": {
       "en": "I'm very interested in tennis, and I can play badminton too.",
       "fr": "Le tennis m'intéresse beaucoup, et je sais aussi jouer au badminton.",
       "zh": "我对网球很感兴趣，羽毛球也会打。"
      },
      "audioText": "我对网球很感兴趣，羽毛球也会打。"
     },
     {
      "speaker": "张经理",
      "hanzi": "太好了，你参加羽毛球比赛吧。",
      "pinyin": "Tài hǎo le, nǐ cānjiā yǔmáoqiú bǐsài ba.",
      "meaning": {
       "en": "Great, take part in the badminton match.",
       "fr": "Super, participe au tournoi de badminton.",
       "zh": "太好了，你参加羽毛球比赛吧。"
      },
      "audioText": "太好了，你参加羽毛球比赛吧。"
     },
     {
      "speaker": "大卫",
      "hanzi": "没问题，我平时也常常锻炼。",
      "pinyin": "Méi wèntí, wǒ píngshí yě chángcháng duànliàn.",
      "meaning": {
       "en": "No problem, I often exercise anyway.",
       "fr": "Pas de problème, je m'entraîne souvent de toute façon.",
       "zh": "没问题，我平时也常常锻炼。"
      },
      "audioText": "没问题，我平时也常常锻炼。"
     }
    ]
   },
   {
    "title": {
     "en": "The match",
     "fr": "Le match",
     "zh": "比赛"
    },
    "setting": {
     "en": "David plays against Xiao Wang.",
     "fr": "David joue contre Xiao Wang.",
     "zh": "大卫和小王比赛。"
    },
    "lines": [
     {
      "speaker": "小王",
      "hanzi": "大卫，你跳得真高！",
      "pinyin": "Dàwèi, nǐ tiào de zhēn gāo!",
      "meaning": {
       "en": "David, you jump really high!",
       "fr": "David, tu sautes vraiment haut !",
       "zh": "大卫，你跳得真高！"
      },
      "audioText": "大卫，你跳得真高！"
     },
     {
      "speaker": "大卫",
      "hanzi": "你也打得很好，又得分了！",
      "pinyin": "Nǐ yě dǎ de hěn hǎo, yòu défēn le!",
      "meaning": {
       "en": "You play well too; another point!",
       "fr": "Toi aussi tu joues bien, encore un point !",
       "zh": "你也打得很好，又得分了！"
      },
      "audioText": "你也打得很好，又得分了！"
     },
     {
      "speaker": "小王",
      "hanzi": "最后我们一样多，二十一比二十一！",
      "pinyin": "Zuìhòu wǒmen yíyàng duō, èrshíyī bǐ èrshíyī!",
      "meaning": {
       "en": "In the end it's a draw: twenty-one all!",
       "fr": "À la fin, on est à égalité : vingt et un partout !",
       "zh": "最后我们一样多，二十一比二十一！"
      },
      "audioText": "最后我们一样多，二十一比二十一！"
     }
    ]
   },
   {
    "title": {
     "en": "Photos",
     "fr": "Les photos",
     "zh": "拍照片"
    },
    "setting": {
     "en": "After the match, Anna, who came to watch, shows her photos.",
     "fr": "Après le match, Anna, venue regarder, montre ses photos.",
     "zh": "比赛以后，来看比赛的安娜给大家看照片。"
    },
    "lines": [
     {
      "speaker": "安娜",
      "hanzi": "我用相机给你们拍了很多照片。",
      "pinyin": "Wǒ yòng xiàngjī gěi nǐmen pāi le hěn duō zhàopiàn.",
      "meaning": {
       "en": "I took lots of photos of you with my camera.",
       "fr": "Je vous ai pris plein de photos avec mon appareil.",
       "zh": "我用相机给你们拍了很多照片。"
      },
      "audioText": "我用相机给你们拍了很多照片。"
     },
     {
      "speaker": "大卫",
      "hanzi": "这张照得真好！",
      "pinyin": "Zhè zhāng zhào de zhēn hǎo!",
      "meaning": {
       "en": "This one is really good!",
       "fr": "Celle-ci est vraiment réussie !",
       "zh": "这张照得真好！"
      },
      "audioText": "这张照得真好！"
     },
     {
      "speaker": "安娜",
      "hanzi": "晚上还有音乐表演，我也去照相。",
      "pinyin": "Wǎnshang hái yǒu yīnyuè biǎoyǎn, wǒ yě qù zhàoxiàng.",
      "meaning": {
       "en": "There's a music show tonight; I'll take photos there too.",
       "fr": "Ce soir, il y a un spectacle musical, je vais aussi prendre des photos.",
       "zh": "晚上还有音乐表演，我也去照相。"
      },
      "audioText": "晚上还有音乐表演，我也去照相。"
     },
     {
      "speaker": "小王",
      "hanzi": "安娜，你对照相这么感兴趣啊！",
      "pinyin": "Ānnà, nǐ duì zhàoxiàng zhème gǎn xìngqù a!",
      "meaning": {
       "en": "Anna, you're so into photography!",
       "fr": "Anna, la photo te passionne vraiment !",
       "zh": "安娜，你对照相这么感兴趣啊！"
      },
      "audioText": "安娜，你对照相这么感兴趣啊！"
     }
    ]
   }
  ],
  "story": [
   {
    "hanzi": "公司开运动会，有跑步、网球和羽毛球比赛。我对体育很感兴趣，参加了羽毛球比赛，和小王打得一样好。安娜来给我们照相，她对拍照很感兴趣。晚上还有音乐表演和游戏。",
    "pinyin": "Gōngsī kāi yùndònghuì, yǒu pǎobù, wǎngqiú hé yǔmáoqiú bǐsài. Wǒ duì tǐyù hěn gǎn xìngqù, cānjiā le yǔmáoqiú bǐsài, hé Xiǎo Wáng dǎ de yíyàng hǎo. Ānnà lái gěi wǒmen zhàoxiàng, tā duì pāizhào hěn gǎn xìngqù. Wǎnshang hái yǒu yīnyuè biǎoyǎn hé yóuxì.",
    "translation": {
     "en": "The company held a sports day with running, tennis and badminton. I love sport, so I entered the badminton match and played as well as Xiao Wang. Anna came to take photos of us; she's really into photography. In the evening there was a music show and games.",
     "fr": "L'entreprise a organisé une journée sportive avec course, tennis et badminton. Le sport me passionne, alors j'ai participé au badminton et j'ai joué aussi bien que Xiao Wang. Anna est venue nous prendre en photo ; elle adore ça. Le soir, il y avait un spectacle musical et des jeux.",
     "zh": "公司开运动会，有跑步、网球和羽毛球比赛。我对体育很感兴趣，参加了羽毛球比赛，和小王打得一样好。安娜来给我们照相，她对拍照很感兴趣。晚上还有音乐表演和游戏。"
    }
   }
  ]
 },
 "lesson-hsk3-08": {
  "scenes": [
   {
    "title": {
     "en": "Dinner at Anna's",
     "fr": "Dîner chez Anna",
     "zh": "在安娜家吃饭"
    },
    "setting": {
     "en": "Anna cooks for her friends.",
     "fr": "Anna cuisine pour ses amis.",
     "zh": "安娜请朋友们来家里吃饭。"
    },
    "lines": [
     {
      "speaker": "大卫",
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
      "hanzi": "饭马上就好。你先喝点儿饮料吧，冰箱里有矿泉水和啤酒。",
      "pinyin": "Fàn mǎshàng jiù hǎo. Nǐ xiān hē diǎnr yǐnliào ba, bīngxiāng li yǒu kuàngquánshuǐ hé píjiǔ.",
      "meaning": {
       "en": "Dinner's almost ready. Have a drink first; there's mineral water and beer in the fridge.",
       "fr": "Le dîner est presque prêt. Bois quelque chose en attendant, il y a de l'eau minérale et de la bière au frigo.",
       "zh": "饭马上就好。你先喝点儿饮料吧，冰箱里有矿泉水和啤酒。"
      },
      "audioText": "饭马上就好。你先喝点儿饮料吧，冰箱里有矿泉水和啤酒。"
     },
     {
      "speaker": "小明",
      "hanzi": "我来拿碗和筷子。",
      "pinyin": "Wǒ lái ná wǎn hé kuàizi.",
      "meaning": {
       "en": "I'll get the bowls and chopsticks.",
       "fr": "Je vais chercher les bols et les baguettes.",
       "zh": "我来拿碗和筷子。"
      },
      "audioText": "我来拿碗和筷子。"
     },
     {
      "speaker": "玛丽",
      "hanzi": "我不会用筷子，可以给我一个勺子吗？",
      "pinyin": "Wǒ bú huì yòng kuàizi, kěyǐ gěi wǒ yí ge sháozi ma?",
      "meaning": {
       "en": "I can't use chopsticks; could I have a spoon?",
       "fr": "Je ne sais pas utiliser les baguettes, je peux avoir une cuillère ?",
       "zh": "我不会用筷子，可以给我一个勺子吗？"
      },
      "audioText": "我不会用筷子，可以给我一个勺子吗？"
     }
    ]
   },
   {
    "title": {
     "en": "Try this!",
     "fr": "Goûte ça !",
     "zh": "你尝尝！"
    },
    "setting": {
     "en": "The dishes are on the table.",
     "fr": "Les plats sont sur la table.",
     "zh": "菜做好了，放在桌子上。"
    },
    "lines": [
     {
      "speaker": "安娜",
      "hanzi": "你们尝尝这个鸡，我第一次做。",
      "pinyin": "Nǐmen chángchang zhège jī, wǒ dì yī cì zuò.",
      "meaning": {
       "en": "Try this chicken; it's my first time making it.",
       "fr": "Goûtez ce poulet, c'est la première fois que j'en fais.",
       "zh": "你们尝尝这个鸡，我第一次做。"
      },
      "audioText": "你们尝尝这个鸡，我第一次做。"
     },
     {
      "speaker": "小明",
      "hanzi": "真好吃！有点儿甜。",
      "pinyin": "Zhēn hǎochī! Yǒudiǎnr tián.",
      "meaning": {
       "en": "Delicious! A little sweet.",
       "fr": "Délicieux ! Un peu sucré.",
       "zh": "真好吃！有点儿甜。"
      },
      "audioText": "真好吃！有点儿甜。"
     },
     {
      "speaker": "安娜",
      "hanzi": "我放了一点儿糖。你们想吃什么就吃什么，别客气！",
      "pinyin": "Wǒ fàng le yìdiǎnr táng. Nǐmen xiǎng chī shénme jiù chī shénme, bié kèqi!",
      "meaning": {
       "en": "I added a little sugar. Eat whatever you like, help yourselves!",
       "fr": "J'ai mis un peu de sucre. Mangez ce que vous voulez, servez-vous !",
       "zh": "我放了一点儿糖。你们想吃什么就吃什么，别客气！"
      },
      "audioText": "我放了一点儿糖。你们想吃什么就吃什么，别客气！"
     },
     {
      "speaker": "大卫",
      "hanzi": "我什么都想吃！",
      "pinyin": "Wǒ shénme dōu xiǎng chī!",
      "meaning": {
       "en": "I want to eat everything!",
       "fr": "J'ai envie de tout manger !",
       "zh": "我什么都想吃！"
      },
      "audioText": "我什么都想吃！"
     }
    ]
   },
   {
    "title": {
     "en": "Dessert",
     "fr": "Le dessert",
     "zh": "吃水果"
    },
    "setting": {
     "en": "After dinner, they are full.",
     "fr": "Après le dîner, ils n'ont plus faim.",
     "zh": "吃完饭，大家都饱了。"
    },
    "lines": [
     {
      "speaker": "安娜",
      "hanzi": "还有蛋糕和冰激凌，谁要？",
      "pinyin": "Hái yǒu dàngāo hé bīngjīlíng, shéi yào?",
      "meaning": {
       "en": "There's cake and ice cream too; who wants some?",
       "fr": "Il y a aussi du gâteau et de la glace, qui en veut ?",
       "zh": "还有蛋糕和冰激凌，谁要？"
      },
      "audioText": "还有蛋糕和冰激凌，谁要？"
     },
     {
      "speaker": "大卫",
      "hanzi": "我已经饱了，什么都吃不下了。",
      "pinyin": "Wǒ yǐjīng bǎo le, shénme dōu chī bu xià le.",
      "meaning": {
       "en": "I'm already full; I can't eat another thing.",
       "fr": "J'ai trop mangé, je ne peux plus rien avaler.",
       "zh": "我已经饱了，什么都吃不下了。"
      },
      "audioText": "我已经饱了，什么都吃不下了。"
     },
     {
      "speaker": "玛丽",
      "hanzi": "我要一点儿新鲜的西瓜。",
      "pinyin": "Wǒ yào yìdiǎnr xīnxiān de xīguā.",
      "meaning": {
       "en": "I'd like a little fresh watermelon.",
       "fr": "Je veux bien un peu de pastèque fraîche.",
       "zh": "我要一点儿新鲜的西瓜。"
      },
      "audioText": "我要一点儿新鲜的西瓜。"
     },
     {
      "speaker": "小明",
      "hanzi": "下次我们叫外卖吧，你太累了。",
      "pinyin": "Xià cì wǒmen jiào wàimài ba, nǐ tài lèi le.",
      "meaning": {
       "en": "Next time let's order takeaway; you've worked too hard.",
       "fr": "La prochaine fois, commandons à emporter, tu t'es trop fatiguée.",
       "zh": "下次我们叫外卖吧，你太累了。"
      },
      "audioText": "下次我们叫外卖吧，你太累了。"
     }
    ]
   }
  ],
  "story": [
   {
    "hanzi": "今天安娜请我们去她家吃饭。她做了很多菜，还第一次做了鸡，有点儿甜，非常好吃。我什么都想吃，最后吃得太饱了，蛋糕和冰激凌都吃不下了。",
    "pinyin": "Jīntiān Ānnà qǐng wǒmen qù tā jiā chī fàn. Tā zuò le hěn duō cài, hái dì yī cì zuò le jī, yǒudiǎnr tián, fēicháng hǎochī. Wǒ shénme dōu xiǎng chī, zuìhòu chī de tài bǎo le, dàngāo hé bīngjīlíng dōu chī bu xià le.",
    "translation": {
     "en": "Today Anna invited us to dinner. She made lots of dishes, including chicken for the first time; it was a little sweet and delicious. I wanted to eat everything, and in the end I was so full I couldn't manage any cake or ice cream.",
     "fr": "Aujourd'hui, Anna nous a invités à dîner. Elle a préparé beaucoup de plats, dont un poulet pour la première fois, un peu sucré et délicieux. J'avais envie de tout manger, et à la fin j'étais si plein que je n'ai pu avaler ni gâteau ni glace.",
     "zh": "今天安娜请我们去她家吃饭。她做了很多菜，还第一次做了鸡，有点儿甜，非常好吃。我什么都想吃，最后吃得太饱了，蛋糕和冰激凌都吃不下了。"
    }
   }
  ]
 },
 "lesson-hsk3-29": {
  "scenes": [
   {
    "title": {
     "en": "The flea market",
     "fr": "Le marché aux puces",
     "zh": "旧货市场"
    },
    "setting": {
     "en": "On Sunday, Mary takes David to a flea market.",
     "fr": "Dimanche, Mary emmène David au marché aux puces.",
     "zh": "周末，玛丽带大卫去旧货市场。"
    },
    "lines": [
     {
      "speaker": "玛丽",
      "hanzi": "你看这个蓝色的瓶子，越看越好看。",
      "pinyin": "Nǐ kàn zhège lánsè de píngzi, yuè kàn yuè hǎokàn.",
      "meaning": {
       "en": "Look at this blue vase; the more I look, the prettier it gets.",
       "fr": "Regarde ce vase bleu, plus je le regarde, plus je le trouve beau.",
       "zh": "你看这个蓝色的瓶子，越看越好看。"
      },
      "audioText": "你看这个蓝色的瓶子，越看越好看。"
     },
     {
      "speaker": "大卫",
      "hanzi": "是挺好看的，但是有点儿旧。",
      "pinyin": "Shì tǐng hǎokàn de, dànshì yǒudiǎnr jiù.",
      "meaning": {
       "en": "It's quite pretty, but a bit old.",
       "fr": "Il est assez joli, mais un peu vieux.",
       "zh": "是挺好看的，但是有点儿旧。"
      },
      "audioText": "是挺好看的，但是有点儿旧。"
     },
     {
      "speaker": "玛丽",
      "hanzi": "旧的东西才有意思。",
      "pinyin": "Jiù de dōngxi cái yǒu yìsi.",
      "meaning": {
       "en": "Old things are the interesting ones.",
       "fr": "Ce sont les vieilles choses qui sont intéressantes.",
       "zh": "旧的东西才有意思。"
      },
      "audioText": "旧的东西才有意思。"
     },
     {
      "speaker": "大卫",
      "hanzi": "好吧，你问问多少钱。",
      "pinyin": "Hǎo ba, nǐ wènwen duōshao qián.",
      "meaning": {
       "en": "All right, ask how much it is.",
       "fr": "D'accord, demande combien il coûte.",
       "zh": "好吧，你问问多少钱。"
      },
      "audioText": "好吧，你问问多少钱。"
     }
    ]
   },
   {
    "title": {
     "en": "Too short",
     "fr": "Trop court",
     "zh": "太短了"
    },
    "setting": {
     "en": "David tries on an old yellow jacket.",
     "fr": "David essaie une vieille veste jaune.",
     "zh": "大卫试了一件黄色的旧衣服。"
    },
    "lines": [
     {
      "speaker": "大卫",
      "hanzi": "这件黄色的衣服怎么样？",
      "pinyin": "Zhè jiàn huángsè de yīfu zěnmeyàng?",
      "meaning": {
       "en": "How's this yellow jacket?",
       "fr": "Comment tu trouves cette veste jaune ?",
       "zh": "这件黄色的衣服怎么样？"
      },
      "audioText": "这件黄色的衣服怎么样？"
     },
     {
      "speaker": "玛丽",
      "hanzi": "有点儿短，颜色也有点儿难看。",
      "pinyin": "Yǒudiǎnr duǎn, yánsè yě yǒudiǎnr nánkàn.",
      "meaning": {
       "en": "It's a bit short, and the colour is a bit ugly.",
       "fr": "Elle est un peu courte, et la couleur n'est pas terrible.",
       "zh": "有点儿短，颜色也有点儿难看。"
      },
      "audioText": "有点儿短，颜色也有点儿难看。"
     },
     {
      "speaker": "大卫",
      "hanzi": "是吗？我觉得越穿越喜欢。",
      "pinyin": "Shì ma? Wǒ juéde yuè chuān yuè xǐhuan.",
      "meaning": {
       "en": "Really? The longer I wear it, the more I like it.",
       "fr": "Ah bon ? Plus je la porte, plus elle me plaît.",
       "zh": "是吗？我觉得越穿越喜欢。"
      },
      "audioText": "是吗？我觉得越穿越喜欢。"
     },
     {
      "speaker": "玛丽",
      "hanzi": "那你就买吧！",
      "pinyin": "Nà nǐ jiù mǎi ba!",
      "meaning": {
       "en": "Then buy it!",
       "fr": "Alors achète-la !",
       "zh": "那你就买吧！"
      },
      "audioText": "那你就买吧！"
     }
    ]
   },
   {
    "title": {
     "en": "Clean it the right way",
     "fr": "Le bon moyen de nettoyer",
     "zh": "好方法"
    },
    "setting": {
     "en": "Back home, the vase is dirty.",
     "fr": "À la maison, le vase est sale.",
     "zh": "回到家，瓶子很脏。"
    },
    "lines": [
     {
      "speaker": "玛丽",
      "hanzi": "这个瓶子太脏了，怎么洗干净？",
      "pinyin": "Zhège píngzi tài zāng le, zěnme xǐ gānjìng?",
      "meaning": {
       "en": "This vase is so dirty; how do I clean it?",
       "fr": "Ce vase est trop sale, comment je le nettoie ?",
       "zh": "这个瓶子太脏了，怎么洗干净？"
      },
      "audioText": "这个瓶子太脏了，怎么洗干净？"
     },
     {
      "speaker": "大卫",
      "hanzi": "我妈妈有一个好方法：用热水和一点儿醋。",
      "pinyin": "Wǒ māma yǒu yí ge hǎo fāngfǎ: yòng rè shuǐ hé yìdiǎnr cù.",
      "meaning": {
       "en": "My mum has a good method: hot water and a little vinegar.",
       "fr": "Ma mère a une bonne méthode : de l'eau chaude et un peu de vinaigre.",
       "zh": "我妈妈有一个好方法：用热水和一点儿醋。"
      },
      "audioText": "我妈妈有一个好方法：用热水和一点儿醋。"
     },
     {
      "speaker": "玛丽",
      "hanzi": "真的干净了，跟新的一样！",
      "pinyin": "Zhēn de gānjìng le, gēn xīn de yíyàng!",
      "meaning": {
       "en": "It really is clean, as good as new!",
       "fr": "Il est vraiment propre, comme neuf !",
       "zh": "真的干净了，跟新的一样！"
      },
      "audioText": "真的干净了，跟新的一样！"
     }
    ]
   }
  ],
  "story": [
   {
    "hanzi": "周末我和玛丽去了旧货市场。玛丽买了一个蓝色的旧瓶子，她越看越喜欢。我买了一件黄色的衣服，虽然有点儿短，但是我越穿越喜欢。回家以后，我们用妈妈的好方法把瓶子洗干净了。",
    "pinyin": "Zhōumò wǒ hé Mǎlì qù le jiùhuò shìchǎng. Mǎlì mǎi le yí ge lánsè de jiù píngzi, tā yuè kàn yuè xǐhuan. Wǒ mǎi le yí jiàn huángsè de yīfu, suīrán yǒudiǎnr duǎn, dànshì wǒ yuè chuān yuè xǐhuan. Huí jiā yǐhòu, wǒmen yòng māma de hǎo fāngfǎ bǎ píngzi xǐ gānjìng le.",
    "translation": {
     "en": "At the weekend Mary and I went to the flea market. Mary bought an old blue vase; the more she looked at it, the more she liked it. I bought a yellow jacket; it's a bit short, but the more I wear it, the more I like it. Back home, we cleaned the vase with my mum's trick.",
     "fr": "Ce week-end, Mary et moi sommes allés au marché aux puces. Mary a acheté un vieux vase bleu ; plus elle le regardait, plus il lui plaisait. J'ai acheté une veste jaune ; elle est un peu courte, mais plus je la porte, plus je l'aime. À la maison, nous avons nettoyé le vase avec l'astuce de ma mère.",
     "zh": "周末我和玛丽去了旧货市场。玛丽买了一个蓝色的旧瓶子，她越看越喜欢。我买了一件黄色的衣服，虽然有点儿短，但是我越穿越喜欢。回家以后，我们用妈妈的好方法把瓶子洗干净了。"
    }
   }
  ]
 },
 "lesson-hsk3-23": {
  "scenes": [
   {
    "title": {
     "en": "Which phone?",
     "fr": "Quel téléphone ?",
     "zh": "买哪个手机？"
    },
    "setting": {
     "en": "David's phone is broken. Xiaoming helps him choose a new one.",
     "fr": "Le téléphone de David est cassé. Xiaoming l'aide à en choisir un nouveau.",
     "zh": "大卫的手机坏了，小明帮他选新手机。"
    },
    "lines": [
     {
      "speaker": "大卫",
      "hanzi": "这两个手机差不多，我买哪个？",
      "pinyin": "Zhè liǎng ge shǒujī chàbuduō, wǒ mǎi nǎge?",
      "meaning": {
       "en": "These two phones are about the same; which one should I buy?",
       "fr": "Ces deux téléphones se ressemblent, lequel j'achète ?",
       "zh": "这两个手机差不多，我买哪个？"
      },
      "audioText": "这两个手机差不多，我买哪个？"
     },
     {
      "speaker": "小明",
      "hanzi": "大小一样，可是这个比那个便宜三百块。",
      "pinyin": "Dàxiǎo yíyàng, kěshì zhège bǐ nàge piányi sānbǎi kuài.",
      "meaning": {
       "en": "Same size, but this one is 300 yuan cheaper.",
       "fr": "Même taille, mais celui-ci coûte trois cents yuans de moins.",
       "zh": "大小一样，可是这个比那个便宜三百块。"
      },
      "audioText": "大小一样，可是这个比那个便宜三百块。"
     },
     {
      "speaker": "大卫",
      "hanzi": "那个颜色更好看。",
      "pinyin": "Nàge yánsè gèng hǎokàn.",
      "meaning": {
       "en": "That one's colour is nicer.",
       "fr": "La couleur de celui-là est plus jolie.",
       "zh": "那个颜色更好看。"
      },
      "audioText": "那个颜色更好看。"
     },
     {
      "speaker": "小明",
      "hanzi": "颜色不重要，这个的相机比那个好多了。",
      "pinyin": "Yánsè bú zhòngyào, zhège de xiàngjī bǐ nàge hǎo duō le.",
      "meaning": {
       "en": "Colour doesn't matter; this one's camera is much better.",
       "fr": "La couleur, ce n'est pas important ; l'appareil photo de celui-ci est bien meilleur.",
       "zh": "颜色不重要，这个的相机比那个好多了。"
      },
      "audioText": "颜色不重要，这个的相机比那个好多了。"
     }
    ]
   },
   {
    "title": {
     "en": "Beijing or Shanghai?",
     "fr": "Pékin ou Shanghai ?",
     "zh": "北京还是上海？"
    },
    "setting": {
     "en": "Anna has visited Shanghai and compares it with Beijing.",
     "fr": "Anna est allée à Shanghai et la compare à Pékin.",
     "zh": "安娜去了上海，她比较这两个城市。"
    },
    "lines": [
     {
      "speaker": "大卫",
      "hanzi": "你觉得上海和北京哪个好？",
      "pinyin": "Nǐ juéde Shànghǎi hé Běijīng nǎge hǎo?",
      "meaning": {
       "en": "Which do you prefer, Shanghai or Beijing?",
       "fr": "Tu préfères Shanghai ou Pékin ?",
       "zh": "你觉得上海和北京哪个好？"
      },
      "audioText": "你觉得上海和北京哪个好？"
     },
     {
      "speaker": "安娜",
      "hanzi": "都挺好的。上海比北京暖和，冬天几乎不下雪。",
      "pinyin": "Dōu tǐng hǎo de. Shànghǎi bǐ Běijīng nuǎnhuo, dōngtiān jīhū bú xià xuě.",
      "meaning": {
       "en": "Both are nice. Shanghai is warmer than Beijing; it hardly snows in winter.",
       "fr": "Les deux sont bien. Shanghai est plus douce que Pékin, il n'y neige presque jamais en hiver.",
       "zh": "都挺好的。上海比北京暖和，冬天几乎不下雪。"
      },
      "audioText": "都挺好的。上海比北京暖和，冬天几乎不下雪。"
     },
     {
      "speaker": "大卫",
      "hanzi": "人呢？",
      "pinyin": "Rén ne?",
      "meaning": {
       "en": "And the people?",
       "fr": "Et les gens ?",
       "zh": "人呢？"
      },
      "audioText": "人呢？"
     },
     {
      "speaker": "安娜",
      "hanzi": "上海人说话跟北京人不一样，我有时候听不懂。",
      "pinyin": "Shànghǎi rén shuōhuà gēn Běijīng rén bù yíyàng, wǒ yǒu shíhou tīng bu dǒng.",
      "meaning": {
       "en": "Shanghai people speak differently from Beijingers; sometimes I can't understand them.",
       "fr": "Les Shanghaïens ne parlent pas comme les Pékinois, parfois je ne les comprends pas.",
       "zh": "上海人说话跟北京人不一样，我有时候听不懂。"
      },
      "audioText": "上海人说话跟北京人不一样，我有时候听不懂。"
     }
    ]
   },
   {
    "title": {
     "en": "Others say",
     "fr": "Ce que disent les autres",
     "zh": "别人说"
    },
    "setting": {
     "en": "In the shop, a customer joins in.",
     "fr": "Au magasin, un client s'en mêle.",
     "zh": "在商店里，一位客人也说起手机。"
    },
    "lines": [
     {
      "speaker": "客人",
      "hanzi": "我用过这个手机，好极了！",
      "pinyin": "Wǒ yòngguo zhège shǒujī, hǎo jí le!",
      "meaning": {
       "en": "I've used this phone; it's excellent!",
       "fr": "J'ai utilisé ce téléphone, il est excellent !",
       "zh": "我用过这个手机，好极了！"
      },
      "audioText": "我用过这个手机，好极了！"
     },
     {
      "speaker": "大卫",
      "hanzi": "比其他的手机好吗？",
      "pinyin": "Bǐ qítā de shǒujī hǎo ma?",
      "meaning": {
       "en": "Better than the others?",
       "fr": "Meilleur que les autres ?",
       "zh": "比其他的手机好吗？"
      },
      "audioText": "比其他的手机好吗？"
     },
     {
      "speaker": "客人",
      "hanzi": "大概是最好的，五千块以下的手机里。",
      "pinyin": "Dàgài shì zuì hǎo de, wǔqiān kuài yǐxià de shǒujī li.",
      "meaning": {
       "en": "Probably the best among phones under five thousand yuan.",
       "fr": "Probablement le meilleur parmi les téléphones à moins de cinq mille yuans.",
       "zh": "大概是最好的，五千块以下的手机里。"
      },
      "audioText": "大概是最好的，五千块以下的手机里。"
     },
     {
      "speaker": "大卫",
      "hanzi": "好，那我就买这个！",
      "pinyin": "Hǎo, nà wǒ jiù mǎi zhège!",
      "meaning": {
       "en": "OK, then I'll buy this one!",
       "fr": "D'accord, alors je prends celui-ci !",
       "zh": "好，那我就买这个！"
      },
      "audioText": "好，那我就买这个！"
     }
    ]
   }
  ],
  "story": [
   {
    "hanzi": "我的手机坏了，小明陪我去买新的。两个手机差不多，可是这个比那个便宜，相机也更好。安娜说上海比北京暖和，但是上海话跟普通话很不一样。",
    "pinyin": "Wǒ de shǒujī huài le, Xiǎomíng péi wǒ qù mǎi xīn de. Liǎng ge shǒujī chàbuduō, kěshì zhège bǐ nàge piányi, xiàngjī yě gèng hǎo. Ānnà shuō Shànghǎi bǐ Běijīng nuǎnhuo, dànshì Shànghǎihuà gēn pǔtōnghuà hěn bù yíyàng.",
    "translation": {
     "en": "My phone broke, and Xiaoming came with me to buy a new one. The two phones were about the same, but this one was cheaper and had a better camera. Anna says Shanghai is warmer than Beijing, but Shanghainese is very different from Mandarin.",
     "fr": "Mon téléphone était cassé, Xiaoming m'a accompagné pour en acheter un nouveau. Les deux téléphones se ressemblaient, mais celui-ci était moins cher et avait un meilleur appareil photo. Anna dit que Shanghai est plus douce que Pékin, mais que le shanghaïen est très différent du mandarin.",
     "zh": "我的手机坏了，小明陪我去买新的。两个手机差不多，可是这个比那个便宜，相机也更好。安娜说上海比北京暖和，但是上海话跟普通话很不一样。"
    }
   }
  ]
 },
 "lesson-hsk3-07": {
  "scenes": [
   {
    "title": {
     "en": "Moving house",
     "fr": "Le déménagement",
     "zh": "搬家"
    },
    "setting": {
     "en": "David is leaving the dormitory for a small flat.",
     "fr": "David quitte la résidence pour un petit appartement.",
     "zh": "大卫要从宿舍搬到一个小房子里。"
    },
    "lines": [
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
      "speaker": "大卫",
      "hanzi": "在公司附近，十二层，有电梯。",
      "pinyin": "Zài gōngsī fùjìn, shí'èr céng, yǒu diàntī.",
      "meaning": {
       "en": "Near the company, twelfth floor, with a lift.",
       "fr": "Près de l'entreprise, au douzième étage, avec ascenseur.",
       "zh": "在公司附近，十二层，有电梯。"
      },
      "audioText": "在公司附近，十二层，有电梯。"
     },
     {
      "speaker": "小明",
      "hanzi": "太好了，不用走楼梯。箱子都准备好了吗？",
      "pinyin": "Tài hǎo le, búyòng zǒu lóutī. Xiāngzi dōu zhǔnbèi hǎo le ma?",
      "meaning": {
       "en": "Great, no stairs. Are your boxes ready?",
       "fr": "Super, pas d'escaliers. Tes cartons sont prêts ?",
       "zh": "太好了，不用走楼梯。箱子都准备好了吗？"
      },
      "audioText": "太好了，不用走楼梯。箱子都准备好了吗？"
     },
     {
      "speaker": "大卫",
      "hanzi": "准备好了，一共八个箱子。",
      "pinyin": "Zhǔnbèi hǎo le, yígòng bā ge xiāngzi.",
      "meaning": {
       "en": "Yes, eight boxes in all.",
       "fr": "Oui, huit cartons en tout.",
       "zh": "准备好了，一共八个箱子。"
      },
      "audioText": "准备好了，一共八个箱子。"
     }
    ]
   },
   {
    "title": {
     "en": "The new flat",
     "fr": "Le nouvel appartement",
     "zh": "新房子"
    },
    "setting": {
     "en": "They open the door of the new flat.",
     "fr": "Ils ouvrent la porte du nouvel appartement.",
     "zh": "他们打开了新房子的门。"
    },
    "lines": [
     {
      "speaker": "安娜",
      "hanzi": "屋子不大，但是很干净。",
      "pinyin": "Wūzi bú dà, dànshì hěn gānjìng.",
      "meaning": {
       "en": "The room isn't big, but it's very clean.",
       "fr": "La pièce n'est pas grande, mais elle est très propre.",
       "zh": "屋子不大，但是很干净。"
      },
      "audioText": "屋子不大，但是很干净。"
     },
     {
      "speaker": "大卫",
      "hanzi": "有空调、冰箱，还有洗衣机。",
      "pinyin": "Yǒu kōngtiáo, bīngxiāng, hái yǒu xǐyījī.",
      "meaning": {
       "en": "There's air conditioning, a fridge and a washing machine.",
       "fr": "Il y a la clim, un frigo et même une machine à laver.",
       "zh": "有空调、冰箱，还有洗衣机。"
      },
      "audioText": "有空调、冰箱，还有洗衣机。"
     },
     {
      "speaker": "小明",
      "hanzi": "这个沙发有点儿脏，我们打扫打扫吧。",
      "pinyin": "Zhège shāfā yǒudiǎnr zāng, wǒmen dǎsǎo dǎsǎo ba.",
      "meaning": {
       "en": "This sofa is a bit dirty; let's give it a clean.",
       "fr": "Ce canapé est un peu sale, faisons un peu de ménage.",
       "zh": "这个沙发有点儿脏，我们打扫打扫吧。"
      },
      "audioText": "这个沙发有点儿脏，我们打扫打扫吧。"
     },
     {
      "speaker": "安娜",
      "hanzi": "我来扫扫地，你们擦擦灯。",
      "pinyin": "Wǒ lái sǎosao dì, nǐmen cāca dēng.",
      "meaning": {
       "en": "I'll sweep the floor; you wipe the lamps.",
       "fr": "Je balaie le sol, vous essuyez les lampes.",
       "zh": "我来扫扫地，你们擦擦灯。"
      },
      "audioText": "我来扫扫地，你们擦擦灯。"
     }
    ]
   },
   {
    "title": {
     "en": "Housewarming",
     "fr": "La pendaison de crémaillère",
     "zh": "请朋友来家里"
    },
    "setting": {
     "en": "A week later, David invites his friends.",
     "fr": "Une semaine plus tard, David invite ses amis.",
     "zh": "一个星期以后，大卫请朋友们来新家。"
    },
    "lines": [
     {
      "speaker": "玛丽",
      "hanzi": "大卫，你的新家真漂亮！",
      "pinyin": "Dàwèi, nǐ de xīn jiā zhēn piàoliang!",
      "meaning": {
       "en": "David, your new home is lovely!",
       "fr": "David, ton nouveau chez-toi est magnifique !",
       "zh": "大卫，你的新家真漂亮！"
      },
      "audioText": "大卫，你的新家真漂亮！"
     },
     {
      "speaker": "大卫",
      "hanzi": "谢谢，你们都帮了我很多忙。",
      "pinyin": "Xièxie, nǐmen dōu bāng le wǒ hěn duō máng.",
      "meaning": {
       "en": "Thanks, you all helped me a lot.",
       "fr": "Merci, vous m'avez tous beaucoup aidé.",
       "zh": "谢谢，你们都帮了我很多忙。"
      },
      "audioText": "谢谢，你们都帮了我很多忙。"
     },
     {
      "speaker": "安娜",
      "hanzi": "你自己做家务吗？",
      "pinyin": "Nǐ zìjǐ zuò jiāwù ma?",
      "meaning": {
       "en": "Do you do the housework yourself?",
       "fr": "Tu fais le ménage toi-même ?",
       "zh": "你自己做家务吗？"
      },
      "audioText": "你自己做家务吗？"
     },
     {
      "speaker": "大卫",
      "hanzi": "对，每个周末都打扫打扫，洗洗衣服。",
      "pinyin": "Duì, měi ge zhōumò dōu dǎsǎo dǎsǎo, xǐxi yīfu.",
      "meaning": {
       "en": "Yes, every weekend I do a bit of cleaning and laundry.",
       "fr": "Oui, chaque week-end je fais un peu de ménage et de lessive.",
       "zh": "对，每个周末都打扫打扫，洗洗衣服。"
      },
      "audioText": "对，每个周末都打扫打扫，洗洗衣服。"
     }
    ]
   }
  ],
  "story": [
   {
    "hanzi": "我搬家了。新房子在公司附近的一个小区，在十二层，有电梯。屋子不大，但是很干净，有空调、冰箱和洗衣机。朋友们帮我打扫了房间，现在我每个周末都自己打扫打扫。",
    "pinyin": "Wǒ bānjiā le. Xīn fángzi zài gōngsī fùjìn de yí ge xiǎoqū, zài shí'èr céng, yǒu diàntī. Wūzi bú dà, dànshì hěn gānjìng, yǒu kōngtiáo, bīngxiāng hé xǐyījī. Péngyoumen bāng wǒ dǎsǎo le fángjiān, xiànzài wǒ měi ge zhōumò dōu zìjǐ dǎsǎo dǎsǎo.",
    "translation": {
     "en": "I've moved. My new flat is in a residential compound near the company, on the twelfth floor, with a lift. It's not big but very clean, with air conditioning, a fridge and a washing machine. My friends helped me clean, and now I tidy up myself every weekend.",
     "fr": "J'ai déménagé. Mon nouvel appartement est dans une résidence près de l'entreprise, au douzième étage, avec ascenseur. Il n'est pas grand mais très propre, avec la clim, un frigo et une machine à laver. Mes amis m'ont aidé à faire le ménage, et maintenant je range moi-même chaque week-end.",
     "zh": "我搬家了。新房子在公司附近的一个小区，在十二层，有电梯。屋子不大，但是很干净，有空调、冰箱和洗衣机。朋友们帮我打扫了房间，现在我每个周末都自己打扫打扫。"
    }
   }
  ]
 },
 "lesson-hsk3-27": {
  "scenes": [
   {
    "title": {
     "en": "Where did you put it?",
     "fr": "Où l'as-tu mis ?",
     "zh": "你把它放在哪儿了？"
    },
    "setting": {
     "en": "David can't find his passport after the move.",
     "fr": "Après le déménagement, David ne trouve plus son passeport.",
     "zh": "搬家以后，大卫找不到护照了。"
    },
    "lines": [
     {
      "speaker": "大卫",
      "hanzi": "小明，你看见我的护照了吗？",
      "pinyin": "Xiǎomíng, nǐ kànjiàn wǒ de hùzhào le ma?",
      "meaning": {
       "en": "Xiaoming, have you seen my passport?",
       "fr": "Xiaoming, tu as vu mon passeport ?",
       "zh": "小明，你看见我的护照了吗？"
      },
      "audioText": "小明，你看见我的护照了吗？"
     },
     {
      "speaker": "小明",
      "hanzi": "你把它放在哪个箱子里了？",
      "pinyin": "Nǐ bǎ tā fàng zài nǎge xiāngzi li le?",
      "meaning": {
       "en": "Which box did you put it in?",
       "fr": "Tu l'as mis dans quel carton ?",
       "zh": "你把它放在哪个箱子里了？"
      },
      "audioText": "你把它放在哪个箱子里了？"
     },
     {
      "speaker": "大卫",
      "hanzi": "我记得把它放在那个小箱子里了。",
      "pinyin": "Wǒ jìde bǎ tā fàng zài nàge xiǎo xiāngzi li le.",
      "meaning": {
       "en": "I remember putting it in that small box.",
       "fr": "Je me souviens de l'avoir mis dans ce petit carton.",
       "zh": "我记得把它放在那个小箱子里了。"
      },
      "audioText": "我记得把它放在那个小箱子里了。"
     },
     {
      "speaker": "小明",
      "hanzi": "找到了！在这本书中间。",
      "pinyin": "Zhǎo dào le! Zài zhè běn shū zhōngjiān.",
      "meaning": {
       "en": "Found it! It's inside this book.",
       "fr": "Trouvé ! Il est au milieu de ce livre.",
       "zh": "找到了！在这本书中间。"
      },
      "audioText": "找到了！在这本书中间。"
     }
    ]
   },
   {
    "title": {
     "en": "Taken by the wind",
     "fr": "Emporté par le vent",
     "zh": "被风吹走了"
    },
    "setting": {
     "en": "On the balcony, a gust of wind blows.",
     "fr": "Sur le balcon, un coup de vent souffle.",
     "zh": "在阳台上，突然刮起了风。"
    },
    "lines": [
     {
      "speaker": "安娜",
      "hanzi": "不好，我的那张照片被风吹走了！",
      "pinyin": "Bù hǎo, wǒ de nà zhāng zhàopiàn bèi fēng chuī zǒu le!",
      "meaning": {
       "en": "Oh no, my photo has been blown away by the wind!",
       "fr": "Oh non, ma photo s'est envolée avec le vent !",
       "zh": "不好，我的那张照片被风吹走了！"
      },
      "audioText": "不好，我的那张照片被风吹走了！"
     },
     {
      "speaker": "大卫",
      "hanzi": "别着急，它在楼下的树上。",
      "pinyin": "Bié zháojí, tā zài lóuxià de shù shang.",
      "meaning": {
       "en": "Don't worry, it's in the tree downstairs.",
       "fr": "Ne t'inquiète pas, elle est dans l'arbre en bas.",
       "zh": "别着急，它在楼下的树上。"
      },
      "audioText": "别着急，它在楼下的树上。"
     },
     {
      "speaker": "安娜",
      "hanzi": "树有十几米高，怎么拿下来？",
      "pinyin": "Shù yǒu shí jǐ mǐ gāo, zěnme ná xiàlai?",
      "meaning": {
       "en": "The tree is over ten metres tall; how do we get it down?",
       "fr": "L'arbre fait plus de dix mètres, comment la récupérer ?",
       "zh": "树有十几米高，怎么拿下来？"
      },
      "audioText": "树有十几米高，怎么拿下来？"
     },
     {
      "speaker": "大卫",
      "hanzi": "我下去试试，你们等一下。",
      "pinyin": "Wǒ xiàqu shìshi, nǐmen děng yíxià.",
      "meaning": {
       "en": "I'll go down and try; wait a moment.",
       "fr": "Je descends essayer, attendez un peu.",
       "zh": "我下去试试，你们等一下。"
      },
      "audioText": "我下去试试，你们等一下。"
     }
    ]
   },
   {
    "title": {
     "en": "Read it twice",
     "fr": "Le lire deux fois",
     "zh": "读了两遍"
    },
    "setting": {
     "en": "Later, Anna notices a book on David's shelf.",
     "fr": "Plus tard, Anna remarque un livre sur l'étagère de David.",
     "zh": "后来，安娜看见大卫书架上的一本书。"
    },
    "lines": [
     {
      "speaker": "安娜",
      "hanzi": "这种书你看得懂吗？",
      "pinyin": "Zhè zhǒng shū nǐ kàn de dǒng ma?",
      "meaning": {
       "en": "Can you understand this kind of book?",
       "fr": "Tu comprends ce genre de livre ?",
       "zh": "这种书你看得懂吗？"
      },
      "audioText": "这种书你看得懂吗？"
     },
     {
      "speaker": "大卫",
      "hanzi": "有几段看不懂，别的都行。我已经读了两遍了。",
      "pinyin": "Yǒu jǐ duàn kàn bu dǒng, bié de dōu xíng. Wǒ yǐjīng dú le liǎng biàn le.",
      "meaning": {
       "en": "A few passages I can't follow, the rest is fine. I've already read it twice.",
       "fr": "Il y a quelques passages que je ne comprends pas, le reste ça va. Je l'ai déjà lu deux fois.",
       "zh": "有几段看不懂，别的都行。我已经读了两遍了。"
      },
      "audioText": "有几段看不懂，别的都行。我已经读了两遍了。"
     },
     {
      "speaker": "安娜",
      "hanzi": "你可以把它借给我吗？",
      "pinyin": "Nǐ kěyǐ bǎ tā jiè gěi wǒ ma?",
      "meaning": {
       "en": "Could you lend it to me?",
       "fr": "Tu peux me le prêter ?",
       "zh": "你可以把它借给我吗？"
      },
      "audioText": "你可以把它借给我吗？"
     },
     {
      "speaker": "大卫",
      "hanzi": "可以，你拿走吧。",
      "pinyin": "Kěyǐ, nǐ ná zǒu ba.",
      "meaning": {
       "en": "Sure, take it.",
       "fr": "Bien sûr, prends-le.",
       "zh": "可以，你拿走吧。"
      },
      "audioText": "可以，你拿走吧。"
     }
    ]
   }
  ],
  "story": [
   {
    "hanzi": "搬家以后，我找不到护照了。小明帮我找，最后在一本书中间找到了。安娜的照片被风吹走了，我下楼把它拿了回来。我把一本读了两遍的书借给了安娜。",
    "pinyin": "Bānjiā yǐhòu, wǒ zhǎo bu dào hùzhào le. Xiǎomíng bāng wǒ zhǎo, zuìhòu zài yì běn shū zhōngjiān zhǎo dào le. Ānnà de zhàopiàn bèi fēng chuī zǒu le, wǒ xià lóu bǎ tā ná le huílai. Wǒ bǎ yì běn dú le liǎng biàn de shū jiè gěi le Ānnà.",
    "translation": {
     "en": "After moving, I couldn't find my passport. Xiaoming helped me look, and in the end we found it inside a book. Anna's photo was blown away by the wind; I went downstairs and got it back. I lent Anna a book I've read twice.",
     "fr": "Après le déménagement, je ne trouvais plus mon passeport. Xiaoming m'a aidé à chercher, et nous l'avons finalement trouvé au milieu d'un livre. La photo d'Anna s'est envolée avec le vent ; je suis descendu la récupérer. J'ai prêté à Anna un livre que j'ai lu deux fois.",
     "zh": "搬家以后，我找不到护照了。小明帮我找，最后在一本书中间找到了。安娜的照片被风吹走了，我下楼把它拿了回来。我把一本读了两遍的书借给了安娜。"
    }
   }
  ]
 },
 "lesson-hsk3-25": {
  "scenes": [
   {
    "title": {
     "en": "Running into Mary",
     "fr": "Croiser Mary",
     "zh": "遇见玛丽"
    },
    "setting": {
     "en": "On his way home, David runs into Mary.",
     "fr": "En rentrant, David croise Mary.",
     "zh": "回家的路上，大卫遇见了玛丽。"
    },
    "lines": [
     {
      "speaker": "大卫",
      "hanzi": "玛丽！你怎么在这儿？",
      "pinyin": "Mǎlì! Nǐ zěnme zài zhèr?",
      "meaning": {
       "en": "Mary! What are you doing here?",
       "fr": "Mary ! Qu'est-ce que tu fais là ?",
       "zh": "玛丽！你怎么在这儿？"
      },
      "audioText": "玛丽！你怎么在这儿？"
     },
     {
      "speaker": "玛丽",
      "hanzi": "我刚参加了一个面试。",
      "pinyin": "Wǒ gāng cānjiā le yí ge miànshì.",
      "meaning": {
       "en": "I've just had a job interview.",
       "fr": "Je viens de passer un entretien d'embauche.",
       "zh": "我刚参加了一个面试。"
      },
      "audioText": "我刚参加了一个面试。"
     },
     {
      "speaker": "大卫",
      "hanzi": "怎么样？",
      "pinyin": "Zěnmeyàng?",
      "meaning": {
       "en": "How did it go?",
       "fr": "Comment ça s'est passé ?",
       "zh": "怎么样？"
      },
      "audioText": "怎么样？"
     },
     {
      "speaker": "玛丽",
      "hanzi": "我八点就到了，可是十一点才结束，太累了！",
      "pinyin": "Wǒ bā diǎn jiù dào le, kěshì shíyī diǎn cái jiéshù, tài lèi le!",
      "meaning": {
       "en": "I got there at eight, but it only finished at eleven; exhausting!",
       "fr": "J'y étais dès huit heures, mais ça ne s'est fini qu'à onze heures, épuisant !",
       "zh": "我八点就到了，可是十一点才结束，太累了！"
      },
      "audioText": "我八点就到了，可是十一点才结束，太累了！"
     }
    ]
   },
   {
    "title": {
     "en": "What happened?",
     "fr": "Que s'est-il passé ?",
     "zh": "发生了什么事？"
    },
    "setting": {
     "en": "Mary tells the story of the interview.",
     "fr": "Mary raconte l'entretien.",
     "zh": "玛丽说起面试的事。"
    },
    "lines": [
     {
      "speaker": "玛丽",
      "hanzi": "一共有五个人参加，我是最后一个。",
      "pinyin": "Yígòng yǒu wǔ ge rén cānjiā, wǒ shì zuìhòu yí ge.",
      "meaning": {
       "en": "Five people took part, and I was the last.",
       "fr": "Il y avait cinq candidats, et j'étais la dernière.",
       "zh": "一共有五个人参加，我是最后一个。"
      },
      "audioText": "一共有五个人参加，我是最后一个。"
     },
     {
      "speaker": "大卫",
      "hanzi": "他们问了什么？",
      "pinyin": "Tāmen wèn le shénme?",
      "meaning": {
       "en": "What did they ask?",
       "fr": "Qu'est-ce qu'ils ont demandé ?",
       "zh": "他们问了什么？"
      },
      "audioText": "他们问了什么？"
     },
     {
      "speaker": "玛丽",
      "hanzi": "平时常见的问题。经理发现我会说汉语，很高兴。",
      "pinyin": "Píngshí chángjiàn de wèntí. Jīnglǐ fāxiàn wǒ huì shuō Hànyǔ, hěn gāoxìng.",
      "meaning": {
       "en": "The usual questions. The manager found out I speak Chinese and was pleased.",
       "fr": "Les questions habituelles. Le directeur a découvert que je parle chinois, il était content.",
       "zh": "平时常见的问题。经理发现我会说汉语，很高兴。"
      },
      "audioText": "平时常见的问题。经理发现我会说汉语，很高兴。"
     },
     {
      "speaker": "大卫",
      "hanzi": "你一定能得到这个工作！",
      "pinyin": "Nǐ yídìng néng dédào zhège gōngzuò!",
      "meaning": {
       "en": "You'll definitely get this job!",
       "fr": "Tu vas sûrement décrocher ce travail !",
       "zh": "你一定能得到这个工作！"
      },
      "audioText": "你一定能得到这个工作！"
     }
    ]
   },
   {
    "title": {
     "en": "The result",
     "fr": "Le résultat",
     "zh": "结果"
    },
    "setting": {
     "en": "Two days later, Mary calls.",
     "fr": "Deux jours plus tard, Mary appelle.",
     "zh": "两天以后，玛丽打来电话。"
    },
    "lines": [
     {
      "speaker": "玛丽",
      "hanzi": "大卫，公司让我下个月就开始工作！",
      "pinyin": "Dàwèi, gōngsī ràng wǒ xià ge yuè jiù kāishǐ gōngzuò!",
      "meaning": {
       "en": "David, the company wants me to start next month!",
       "fr": "David, l'entreprise veut que je commence dès le mois prochain !",
       "zh": "大卫，公司让我下个月就开始工作！"
      },
      "audioText": "大卫，公司让我下个月就开始工作！"
     },
     {
      "speaker": "大卫",
      "hanzi": "太好了！我们要分开了吗？",
      "pinyin": "Tài hǎo le! Wǒmen yào fēnkāi le ma?",
      "meaning": {
       "en": "Fantastic! Are we going to be apart now?",
       "fr": "Génial ! On va être séparés ?",
       "zh": "太好了！我们要分开了吗？"
      },
      "audioText": "太好了！我们要分开了吗？"
     },
     {
      "speaker": "玛丽",
      "hanzi": "不会，公司离你家不远，我们还常常可以见面。",
      "pinyin": "Bú huì, gōngsī lí nǐ jiā bù yuǎn, wǒmen hái chángcháng kěyǐ jiànmiàn.",
      "meaning": {
       "en": "No, the company isn't far from your place; we can still see each other often.",
       "fr": "Non, l'entreprise n'est pas loin de chez toi, on pourra encore se voir souvent.",
       "zh": "不会，公司离你家不远，我们还常常可以见面。"
      },
      "audioText": "不会，公司离你家不远，我们还常常可以见面。"
     }
    ]
   }
  ],
  "story": [
   {
    "hanzi": "今天我在路上遇见了玛丽。她参加了一个面试，八点就到了，十一点才结束。经理发现她会说汉语，很高兴。两天以后，她真的得到了这个工作，下个月就要开始上班了。",
    "pinyin": "Jīntiān wǒ zài lùshang yùjiàn le Mǎlì. Tā cānjiā le yí ge miànshì, bā diǎn jiù dào le, shíyī diǎn cái jiéshù. Jīnglǐ fāxiàn tā huì shuō Hànyǔ, hěn gāoxìng. Liǎng tiān yǐhòu, tā zhēn de dédào le zhège gōngzuò, xià ge yuè jiù yào kāishǐ shàngbān le.",
    "translation": {
     "en": "Today I ran into Mary on the street. She'd had a job interview; she got there at eight and it only ended at eleven. The manager was pleased to find she speaks Chinese. Two days later she really did get the job, and she starts next month.",
     "fr": "Aujourd'hui, j'ai croisé Mary dans la rue. Elle avait un entretien : elle était là dès huit heures et ça ne s'est fini qu'à onze heures. Le directeur était content de découvrir qu'elle parle chinois. Deux jours plus tard, elle a vraiment obtenu le poste, elle commence le mois prochain.",
     "zh": "今天我在路上遇见了玛丽。她参加了一个面试，八点就到了，十一点才结束。经理发现她会说汉语，很高兴。两天以后，她真的得到了这个工作，下个月就要开始上班了。"
    }
   }
  ]
 },
 "lesson-hsk3-28": {
  "scenes": [
   {
    "title": {
     "en": "Coffee together",
     "fr": "Un café ensemble",
     "zh": "一块儿喝咖啡"
    },
    "setting": {
     "en": "After work, David and Anna meet in a café.",
     "fr": "Après le travail, David et Anna se retrouvent dans un café.",
     "zh": "下班以后，大卫和安娜在咖啡馆见面。"
    },
    "lines": [
     {
      "speaker": "安娜",
      "hanzi": "好久不见！听说你搬家了？",
      "pinyin": "Hǎojiǔ bújiàn! Tīngshuō nǐ bānjiā le?",
      "meaning": {
       "en": "Long time no see! I heard you moved?",
       "fr": "Ça fait longtemps ! Il paraît que tu as déménagé ?",
       "zh": "好久不见！听说你搬家了？"
      },
      "audioText": "好久不见！听说你搬家了？"
     },
     {
      "speaker": "大卫",
      "hanzi": "对，咱们一边喝一边聊吧。",
      "pinyin": "Duì, zánmen yìbiān hē yìbiān liáo ba.",
      "meaning": {
       "en": "Yes, let's chat over a coffee.",
       "fr": "Oui, discutons autour d'un café.",
       "zh": "对，咱们一边喝一边聊吧。"
      },
      "audioText": "对，咱们一边喝一边聊吧。"
     },
     {
      "speaker": "安娜",
      "hanzi": "新地方怎么样？习惯了吗？",
      "pinyin": "Xīn dìfang zěnmeyàng? Xíguàn le ma?",
      "meaning": {
       "en": "How's the new place? Are you used to it?",
       "fr": "Comment est le nouvel endroit ? Tu t'y es habitué ?",
       "zh": "新地方怎么样？习惯了吗？"
      },
      "audioText": "新地方怎么样？习惯了吗？"
     },
     {
      "speaker": "大卫",
      "hanzi": "习惯了，到处都是饭馆，主要是离公司近。",
      "pinyin": "Xíguàn le, dàochù dōu shì fànguǎn, zhǔyào shì lí gōngsī jìn.",
      "meaning": {
       "en": "Yes, there are restaurants everywhere, and above all it's near the company.",
       "fr": "Oui, il y a des restaurants partout, et surtout c'est près de l'entreprise.",
       "zh": "习惯了，到处都是饭馆，主要是离公司近。"
      },
      "audioText": "习惯了，到处都是饭馆，主要是离公司近。"
     }
    ]
   },
   {
    "title": {
     "en": "I forgot my wallet",
     "fr": "J'ai oublié mon portefeuille",
     "zh": "忘记带钱包了"
    },
    "setting": {
     "en": "Time to pay.",
     "fr": "C'est l'heure de payer.",
     "zh": "该买单了。"
    },
    "lines": [
     {
      "speaker": "安娜",
      "hanzi": "哎呀，我忘记带钱包了，怎么办？",
      "pinyin": "Āiyā, wǒ wàngjì dài qiánbāo le, zěnme bàn?",
      "meaning": {
       "en": "Oh no, I forgot my wallet; what do I do?",
       "fr": "Oh non, j'ai oublié mon portefeuille, comment faire ?",
       "zh": "哎呀，我忘记带钱包了，怎么办？"
      },
      "audioText": "哎呀，我忘记带钱包了，怎么办？"
     },
     {
      "speaker": "大卫",
      "hanzi": "不用担心，我请你。一共才五十块。",
      "pinyin": "Búyòng dānxīn, wǒ qǐng nǐ. Yígòng cái wǔshí kuài.",
      "meaning": {
       "en": "Don't worry, it's on me. It's only fifty yuan in all.",
       "fr": "Ne t'inquiète pas, je t'invite. Ça fait seulement cinquante yuans.",
       "zh": "不用担心，我请你。一共才五十块。"
      },
      "audioText": "不用担心，我请你。一共才五十块。"
     },
     {
      "speaker": "安娜",
      "hanzi": "那不行，下次我请你！",
      "pinyin": "Nà bù xíng, xià cì wǒ qǐng nǐ!",
      "meaning": {
       "en": "No way, next time it's my treat!",
       "fr": "Pas question, la prochaine fois c'est moi qui invite !",
       "zh": "那不行，下次我请你！"
      },
      "audioText": "那不行，下次我请你！"
     },
     {
      "speaker": "大卫",
      "hanzi": "好，最好是一顿大餐！",
      "pinyin": "Hǎo, zuìhǎo shì yí dùn dàcān!",
      "meaning": {
       "en": "OK, ideally a big dinner!",
       "fr": "D'accord, un grand dîner de préférence !",
       "zh": "好，最好是一顿大餐！"
      },
      "audioText": "好，最好是一顿大餐！"
     }
    ]
   },
   {
    "title": {
     "en": "Habits",
     "fr": "Les habitudes",
     "zh": "习惯"
    },
    "setting": {
     "en": "Anna talks about her new habits.",
     "fr": "Anna parle de ses nouvelles habitudes.",
     "zh": "安娜说起她的新习惯。"
    },
    "lines": [
     {
      "speaker": "安娜",
      "hanzi": "我现在习惯一边走路一边听中文节目。",
      "pinyin": "Wǒ xiànzài xíguàn yìbiān zǒulù yìbiān tīng Zhōngwén jiémù.",
      "meaning": {
       "en": "Now I'm used to listening to Chinese programmes while I walk.",
       "fr": "Maintenant, j'ai l'habitude d'écouter des émissions en chinois en marchant.",
       "zh": "我现在习惯一边走路一边听中文节目。"
      },
      "audioText": "我现在习惯一边走路一边听中文节目。"
     },
     {
      "speaker": "大卫",
      "hanzi": "好方法！听说这样学得很快。",
      "pinyin": "Hǎo fāngfǎ! Tīngshuō zhèyàng xué de hěn kuài.",
      "meaning": {
       "en": "Good idea! They say you learn fast that way.",
       "fr": "Bonne méthode ! Il paraît qu'on apprend vite comme ça.",
       "zh": "好方法！听说这样学得很快。"
      },
      "audioText": "好方法！听说这样学得很快。"
     },
     {
      "speaker": "安娜",
      "hanzi": "但是不能一边骑车一边听，不安全。",
      "pinyin": "Dànshì bù néng yìbiān qí chē yìbiān tīng, bù ānquán.",
      "meaning": {
       "en": "But you can't listen while cycling; it's not safe.",
       "fr": "Mais pas en faisant du vélo, ce n'est pas prudent.",
       "zh": "但是不能一边骑车一边听，不安全。"
      },
      "audioText": "但是不能一边骑车一边听，不安全。"
     }
    ]
   }
  ],
  "story": [
   {
    "hanzi": "今天我和安娜一边喝咖啡一边聊天。她忘记带钱包了，我就请了她。安娜现在习惯一边走路一边听中文节目，她说这个方法很好，可是骑车的时候不能听。",
    "pinyin": "Jīntiān wǒ hé Ānnà yìbiān hē kāfēi yìbiān liáotiān. Tā wàngjì dài qiánbāo le, wǒ jiù qǐng le tā. Ānnà xiànzài xíguàn yìbiān zǒulù yìbiān tīng Zhōngwén jiémù, tā shuō zhège fāngfǎ hěn hǎo, kěshì qí chē de shíhou bù néng tīng.",
    "translation": {
     "en": "Today Anna and I chatted over coffee. She forgot her wallet, so I treated her. Anna is now used to listening to Chinese programmes while walking; she says it's a good method, but you mustn't listen while cycling.",
     "fr": "Aujourd'hui, Anna et moi avons discuté autour d'un café. Elle avait oublié son portefeuille, alors je l'ai invitée. Anna a maintenant l'habitude d'écouter des émissions en chinois en marchant ; elle dit que c'est une bonne méthode, mais qu'il ne faut pas écouter en faisant du vélo.",
     "zh": "今天我和安娜一边喝咖啡一边聊天。她忘记带钱包了，我就请了她。安娜现在习惯一边走路一边听中文节目，她说这个方法很好，可是骑车的时候不能听。"
    }
   }
  ]
 },
 "lesson-hsk3-14": {
  "scenes": [
   {
    "title": {
     "en": "Homework",
     "fr": "Les devoirs",
     "zh": "作业"
    },
    "setting": {
     "en": "Xiaoming's younger sister is now at junior high school.",
     "fr": "La petite sœur de Xiaoming est maintenant au collège.",
     "zh": "小明的妹妹上初中了。"
    },
    "lines": [
     {
      "speaker": "妈妈",
      "hanzi": "放学了，作业写完了吗？",
      "pinyin": "Fàngxué le, zuòyè xiě wán le ma?",
      "meaning": {
       "en": "School's out; have you finished your homework?",
       "fr": "Les cours sont finis, tu as fini tes devoirs ?",
       "zh": "放学了，作业写完了吗？"
      },
      "audioText": "放学了，作业写完了吗？"
     },
     {
      "speaker": "妹妹",
      "hanzi": "还没写完呢。数学作业有五页。",
      "pinyin": "Hái méi xiě wán ne. Shùxué zuòyè yǒu wǔ yè.",
      "meaning": {
       "en": "Not yet. The maths homework is five pages.",
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
      "speaker": "妹妹",
      "hanzi": "复习了，我在笔记本上写了很多笔记。",
      "pinyin": "Fùxí le, wǒ zài bǐjìběn shang xiě le hěn duō bǐjì.",
      "meaning": {
       "en": "Yes, I wrote lots of notes in my notebook.",
       "fr": "Oui, j'ai pris plein de notes dans mon cahier.",
       "zh": "复习了，我在笔记本上写了很多笔记。"
      },
      "audioText": "复习了，我在笔记本上写了很多笔记。"
     }
    ]
   },
   {
    "title": {
     "en": "Big brother David",
     "fr": "Grand frère David",
     "zh": "大卫哥哥帮忙"
    },
    "setting": {
     "en": "David drops by and helps with English.",
     "fr": "David passe et aide en anglais.",
     "zh": "大卫来小明家，帮妹妹学英语。"
    },
    "lines": [
     {
      "speaker": "妹妹",
      "hanzi": "大卫哥哥，这个英语句子怎么读？",
      "pinyin": "Dàwèi gēge, zhège Yīngyǔ jùzi zěnme dú?",
      "meaning": {
       "en": "Big brother David, how do you read this English sentence?",
       "fr": "Grand frère David, comment se lit cette phrase en anglais ?",
       "zh": "大卫哥哥，这个英语句子怎么读？"
      },
      "audioText": "大卫哥哥，这个英语句子怎么读？"
     },
     {
      "speaker": "大卫",
      "hanzi": "你跟我读：Good morning!",
      "pinyin": "Nǐ gēn wǒ dú: Good morning!",
      "meaning": {
       "en": "Read after me: Good morning!",
       "fr": "Répète après moi : Good morning !",
       "zh": "你跟我读：Good morning!"
      },
      "audioText": "你跟我读：Good morning!"
     },
     {
      "speaker": "妹妹",
      "hanzi": "太难了！我还没学过。",
      "pinyin": "Tài nán le! Wǒ hái méi xuéguo.",
      "meaning": {
       "en": "Too hard! I haven't learned that yet.",
       "fr": "Trop dur ! Je ne l'ai pas encore appris.",
       "zh": "太难了！我还没学过。"
      },
      "audioText": "太难了！我还没学过。"
     },
     {
      "speaker": "大卫",
      "hanzi": "别着急，多练习就会了。",
      "pinyin": "Bié zháojí, duō liànxí jiù huì le.",
      "meaning": {
       "en": "Don't worry, you'll get it with practice.",
       "fr": "Ne t'inquiète pas, avec de l'entraînement tu y arriveras.",
       "zh": "别着急，多练习就会了。"
      },
      "audioText": "别着急，多练习就会了。"
     }
    ]
   },
   {
    "title": {
     "en": "Shopping for school",
     "fr": "Les fournitures",
     "zh": "买文具"
    },
    "setting": {
     "en": "At the weekend, they buy school supplies.",
     "fr": "Le week-end, ils achètent des fournitures.",
     "zh": "周末，他们去买学习用品。"
    },
    "lines": [
     {
      "speaker": "妹妹",
      "hanzi": "我的铅笔和纸都用完了。",
      "pinyin": "Wǒ de qiānbǐ hé zhǐ dōu yòng wán le.",
      "meaning": {
       "en": "I've run out of pencils and paper.",
       "fr": "Je n'ai plus de crayons ni de papier.",
       "zh": "我的铅笔和纸都用完了。"
      },
      "audioText": "我的铅笔和纸都用完了。"
     },
     {
      "speaker": "小明",
      "hanzi": "还要买什么？",
      "pinyin": "Hái yào mǎi shénme?",
      "meaning": {
       "en": "What else do you need?",
       "fr": "Il te faut quoi d'autre ?",
       "zh": "还要买什么？"
      },
      "audioText": "还要买什么？"
     },
     {
      "speaker": "妹妹",
      "hanzi": "一本英语词典，老师说下个学期要用。",
      "pinyin": "Yì běn Yīngyǔ cídiǎn, lǎoshī shuō xià ge xuéqī yào yòng.",
      "meaning": {
       "en": "An English dictionary; the teacher says we'll need it next term.",
       "fr": "Un dictionnaire d'anglais, la prof dit qu'on en aura besoin le semestre prochain.",
       "zh": "一本英语词典，老师说下个学期要用。"
      },
      "audioText": "一本英语词典，老师说下个学期要用。"
     },
     {
      "speaker": "小明",
      "hanzi": "好，我们去书店。",
      "pinyin": "Hǎo, wǒmen qù shūdiàn.",
      "meaning": {
       "en": "OK, let's go to the bookshop.",
       "fr": "D'accord, allons à la librairie.",
       "zh": "好，我们去书店。"
      },
      "audioText": "好，我们去书店。"
     }
    ]
   }
  ],
  "story": [
   {
    "hanzi": "小明的妹妹现在上初中二年级了，作业很多，每天放学以后都要写数学作业，复习课文。今天我去小明家帮她学英语。她说英语太难了，我告诉她多练习就会了。",
    "pinyin": "Xiǎomíng de mèimei xiànzài shàng chūzhōng èr niánjí le, zuòyè hěn duō, měi tiān fàngxué yǐhòu dōu yào xiě shùxué zuòyè, fùxí kèwén. Jīntiān wǒ qù Xiǎomíng jiā bāng tā xué Yīngyǔ. Tā shuō Yīngyǔ tài nán le, wǒ gàosu tā duō liànxí jiù huì le.",
    "translation": {
     "en": "Xiaoming's younger sister is now in year two of junior high. She has lots of homework: every day after school she does maths and revises her texts. Today I went to Xiaoming's home to help her with English. She says English is too hard; I told her practice makes it easier.",
     "fr": "La petite sœur de Xiaoming est maintenant en deuxième année de collège. Elle a beaucoup de devoirs : chaque jour après l'école, elle fait des maths et révise ses textes. Aujourd'hui, je suis allé chez Xiaoming l'aider en anglais. Elle trouve l'anglais trop difficile ; je lui ai dit qu'avec de l'entraînement, ça deviendrait facile.",
     "zh": "小明的妹妹现在上初中二年级了，作业很多，每天放学以后都要写数学作业，复习课文。今天我去小明家帮她学英语。她说英语太难了，我告诉她多练习就会了。"
    }
   }
  ]
 },
 "lesson-hsk3-09": {
  "scenes": [
   {
    "title": {
     "en": "A shirt for the wedding",
     "fr": "Une chemise pour le mariage",
     "zh": "买衬衫"
    },
    "setting": {
     "en": "David needs smart clothes for Xiao Li's wedding.",
     "fr": "David a besoin de vêtements élégants pour le mariage de Xiao Li.",
     "zh": "大卫要参加小李的婚礼，需要买新衣服。"
    },
    "lines": [
     {
      "speaker": "大卫",
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
       "en": "Of course. Take a look: does it fit?",
       "fr": "Bien sûr. Regardez, elle vous va ?",
       "zh": "可以。您看看，合适不合适？"
      },
      "audioText": "可以。您看看，合适不合适？"
     },
     {
      "speaker": "大卫",
      "hanzi": "有点儿大，能不能换一件小的？",
      "pinyin": "Yǒudiǎnr dà, néng bu néng huàn yí jiàn xiǎo de?",
      "meaning": {
       "en": "It's a bit big; could I swap it for a smaller one?",
       "fr": "Elle est un peu grande, je peux l'échanger contre une plus petite ?",
       "zh": "有点儿大，能不能换一件小的？"
      },
      "audioText": "有点儿大，能不能换一件小的？"
     },
     {
      "speaker": "店员",
      "hanzi": "没问题。您要不要试试这双鞋？",
      "pinyin": "Méi wèntí. Nín yào bu yào shìshi zhè shuāng xié?",
      "meaning": {
       "en": "No problem. Would you like to try these shoes?",
       "fr": "Pas de problème. Vous voulez essayer ces chaussures ?",
       "zh": "没问题。您要不要试试这双鞋？"
      },
      "audioText": "没问题。您要不要试试这双鞋？"
     },
     {
      "speaker": "大卫",
      "hanzi": "好，我选这件衬衫和这双鞋。",
      "pinyin": "Hǎo, wǒ xuǎn zhè jiàn chènshān hé zhè shuāng xié.",
      "meaning": {
       "en": "Yes, I'll take this shirt and these shoes.",
       "fr": "Oui, je prends cette chemise et ces chaussures.",
       "zh": "好，我选这件衬衫和这双鞋。"
      },
      "audioText": "好，我选这件衬衫和这双鞋。"
     }
    ]
   },
   {
    "title": {
     "en": "Card or cash?",
     "fr": "Carte ou espèces ?",
     "zh": "刷卡还是现金？"
    },
    "setting": {
     "en": "At the till.",
     "fr": "À la caisse.",
     "zh": "在收银台。"
    },
    "lines": [
     {
      "speaker": "店员",
      "hanzi": "一共六百八十块。",
      "pinyin": "Yígòng liùbǎibāshí kuài.",
      "meaning": {
       "en": "Six hundred and eighty yuan in all.",
       "fr": "Six cent quatre-vingts yuans en tout.",
       "zh": "一共六百八十块。"
      },
      "audioText": "一共六百八十块。"
     },
     {
      "speaker": "大卫",
      "hanzi": "能不能用信用卡？",
      "pinyin": "Néng bu néng yòng xìnyòngkǎ?",
      "meaning": {
       "en": "Can I pay by credit card?",
       "fr": "Je peux payer par carte de crédit ?",
       "zh": "能不能用信用卡？"
      },
      "audioText": "能不能用信用卡？"
     },
     {
      "speaker": "店员",
      "hanzi": "可以，银行卡也可以。",
      "pinyin": "Kěyǐ, yínhángkǎ yě kěyǐ.",
      "meaning": {
       "en": "Yes, bank cards too.",
       "fr": "Oui, et la carte bancaire aussi.",
       "zh": "可以，银行卡也可以。"
      },
      "audioText": "可以，银行卡也可以。"
     },
     {
      "speaker": "大卫",
      "hanzi": "我用银行卡吧。",
      "pinyin": "Wǒ yòng yínhángkǎ ba.",
      "meaning": {
       "en": "I'll use my bank card.",
       "fr": "Je prends la carte bancaire.",
       "zh": "我用银行卡吧。"
      },
      "audioText": "我用银行卡吧。"
     }
    ]
   },
   {
    "title": {
     "en": "At the bank",
     "fr": "À la banque",
     "zh": "在银行"
    },
    "setting": {
     "en": "Next, David goes to the bank to change money.",
     "fr": "Ensuite, David va à la banque changer de l'argent.",
     "zh": "然后，大卫去银行换钱。"
    },
    "lines": [
     {
      "speaker": "大卫",
      "hanzi": "您好，我想换一些人民币。",
      "pinyin": "Nín hǎo, wǒ xiǎng huàn yìxiē rénmínbì.",
      "meaning": {
       "en": "Hello, I'd like to change some money into renminbi.",
       "fr": "Bonjour, je voudrais changer de l'argent en renminbi.",
       "zh": "您好，我想换一些人民币。"
      },
      "audioText": "您好，我想换一些人民币。"
     },
     {
      "speaker": "银行职员",
      "hanzi": "好的，请给我您的护照。",
      "pinyin": "Hǎo de, qǐng gěi wǒ nín de hùzhào.",
      "meaning": {
       "en": "Certainly, your passport please.",
       "fr": "Très bien, votre passeport s'il vous plaît.",
       "zh": "好的，请给我您的护照。"
      },
      "audioText": "好的，请给我您的护照。"
     },
     {
      "speaker": "大卫",
      "hanzi": "给您。今天一欧元换多少钱？",
      "pinyin": "Gěi nín. Jīntiān yì ōuyuán huàn duōshao qián?",
      "meaning": {
       "en": "Here you are. What's the euro rate today?",
       "fr": "Voici. Combien vaut un euro aujourd'hui ?",
       "zh": "给您。今天一欧元换多少钱？"
      },
      "audioText": "给您。今天一欧元换多少钱？"
     },
     {
      "speaker": "银行职员",
      "hanzi": "七块八毛。",
      "pinyin": "Qī kuài bā máo.",
      "meaning": {
       "en": "Seven yuan eighty.",
       "fr": "Sept yuans quatre-vingts.",
       "zh": "七块八毛。"
      },
      "audioText": "七块八毛。"
     }
    ]
   }
  ],
  "story": [
   {
    "hanzi": "下个月小李结婚，我去商场买了一件衬衫和一双鞋。衬衫有点儿大，店员给我换了一件小的。我用银行卡买单，然后去银行换了一些人民币。",
    "pinyin": "Xià ge yuè Xiǎo Lǐ jiéhūn, wǒ qù shāngchǎng mǎi le yí jiàn chènshān hé yì shuāng xié. Chènshān yǒudiǎnr dà, diànyuán gěi wǒ huàn le yí jiàn xiǎo de. Wǒ yòng yínhángkǎ mǎidān, ránhòu qù yínháng huàn le yìxiē rénmínbì.",
    "translation": {
     "en": "Xiao Li gets married next month, so I went to the mall and bought a shirt and a pair of shoes. The shirt was a bit big, so the assistant swapped it for a smaller one. I paid by bank card, then went to the bank to change some money into renminbi.",
     "fr": "Xiao Li se marie le mois prochain, alors je suis allé au centre commercial acheter une chemise et une paire de chaussures. La chemise était un peu grande, la vendeuse me l'a échangée contre une plus petite. J'ai payé par carte bancaire, puis je suis allé à la banque changer de l'argent en renminbi.",
     "zh": "下个月小李结婚，我去商场买了一件衬衫和一双鞋。衬衫有点儿大，店员给我换了一件小的。我用银行卡买单，然后去银行换了一些人民币。"
    }
   }
  ]
 },
 "lesson-hsk3-10": {
  "scenes": [
   {
    "title": {
     "en": "Autumn in Beijing",
     "fr": "L'automne à Pékin",
     "zh": "北京的秋天"
    },
    "setting": {
     "en": "September. The heat is finally over.",
     "fr": "Septembre. La chaleur est enfin finie.",
     "zh": "九月了，天气终于不热了。"
    },
    "lines": [
     {
      "speaker": "安娜",
      "hanzi": "天气凉快了，秋天要来了。",
      "pinyin": "Tiānqì liángkuai le, qiūtiān yào lái le.",
      "meaning": {
       "en": "It's cooler; autumn is coming.",
       "fr": "Il fait plus frais, l'automne arrive.",
       "zh": "天气凉快了，秋天要来了。"
      },
      "audioText": "天气凉快了，秋天要来了。"
     },
     {
      "speaker": "小明",
      "hanzi": "北京的秋天是一年四季里最好的季节。",
      "pinyin": "Běijīng de qiūtiān shì yì nián sìjì li zuì hǎo de jìjié.",
      "meaning": {
       "en": "Autumn is the best of Beijing's four seasons.",
       "fr": "L'automne est la meilleure des quatre saisons à Pékin.",
       "zh": "北京的秋天是一年四季里最好的季节。"
      },
      "audioText": "北京的秋天是一年四季里最好的季节。"
     },
     {
      "speaker": "大卫",
      "hanzi": "为什么？",
      "pinyin": "Wèi shénme?",
      "meaning": {
       "en": "Why?",
       "fr": "Pourquoi ?",
       "zh": "为什么？"
      },
      "audioText": "为什么？"
     },
     {
      "speaker": "小明",
      "hanzi": "不冷不热，天很蓝，太阳也很好。",
      "pinyin": "Bù lěng bú rè, tiān hěn lán, tàiyáng yě hěn hǎo.",
      "meaning": {
       "en": "Neither hot nor cold, blue skies and lovely sunshine.",
       "fr": "Ni chaud ni froid, ciel bleu et beau soleil.",
       "zh": "不冷不热，天很蓝，太阳也很好。"
      },
      "audioText": "不冷不热，天很蓝，太阳也很好。"
     }
    ]
   },
   {
    "title": {
     "en": "It's going to rain",
     "fr": "Il va pleuvoir",
     "zh": "要下雨了"
    },
    "setting": {
     "en": "On a walk, the sky suddenly darkens.",
     "fr": "En promenade, le ciel s'assombrit d'un coup.",
     "zh": "散步的时候，天突然阴了。"
    },
    "lines": [
     {
      "speaker": "安娜",
      "hanzi": "刮风了，好像要下雨了。",
      "pinyin": "Guā fēng le, hǎoxiàng yào xià yǔ le.",
      "meaning": {
       "en": "The wind's picking up; it looks like rain.",
       "fr": "Le vent se lève, on dirait qu'il va pleuvoir.",
       "zh": "刮风了，好像要下雨了。"
      },
      "audioText": "刮风了，好像要下雨了。"
     },
     {
      "speaker": "大卫",
      "hanzi": "我带伞了，咱们一起用吧。",
      "pinyin": "Wǒ dài sǎn le, zánmen yìqǐ yòng ba.",
      "meaning": {
       "en": "I've brought an umbrella; let's share it.",
       "fr": "J'ai un parapluie, partageons-le.",
       "zh": "我带伞了，咱们一起用吧。"
      },
      "audioText": "我带伞了，咱们一起用吧。"
     },
     {
      "speaker": "安娜",
      "hanzi": "你怎么知道要下雨？",
      "pinyin": "Nǐ zěnme zhīdào yào xià yǔ?",
      "meaning": {
       "en": "How did you know it would rain?",
       "fr": "Comment tu savais qu'il allait pleuvoir ?",
       "zh": "你怎么知道要下雨？"
      },
      "audioText": "你怎么知道要下雨？"
     },
     {
      "speaker": "大卫",
      "hanzi": "我早上看了天气预报。",
      "pinyin": "Wǒ zǎoshang kàn le tiānqì yùbào.",
      "meaning": {
       "en": "I checked the forecast this morning.",
       "fr": "J'ai regardé la météo ce matin.",
       "zh": "我早上看了天气预报。"
      },
      "audioText": "我早上看了天气预报。"
     }
    ]
   },
   {
    "title": {
     "en": "The Mid-Autumn moon",
     "fr": "La lune de la mi-automne",
     "zh": "中秋节的月亮"
    },
    "setting": {
     "en": "That evening is the Mid-Autumn Festival.",
     "fr": "Ce soir-là, c'est la fête de la mi-automne.",
     "zh": "那天晚上是中秋节。"
    },
    "lines": [
     {
      "speaker": "小明",
      "hanzi": "你们看，今天的月亮又大又圆！",
      "pinyin": "Nǐmen kàn, jīntiān de yuèliang yòu dà yòu yuán!",
      "meaning": {
       "en": "Look, tonight's moon is big and round!",
       "fr": "Regardez, la lune est grande et ronde ce soir !",
       "zh": "你们看，今天的月亮又大又圆！"
      },
      "audioText": "你们看，今天的月亮又大又圆！"
     },
     {
      "speaker": "玛丽",
      "hanzi": "真漂亮！中秋节要吃什么？",
      "pinyin": "Zhēn piàoliang! Zhōngqiū Jié yào chī shénme?",
      "meaning": {
       "en": "Beautiful! What do you eat at Mid-Autumn?",
       "fr": "Magnifique ! Qu'est-ce qu'on mange à la mi-automne ?",
       "zh": "真漂亮！中秋节要吃什么？"
      },
      "audioText": "真漂亮！中秋节要吃什么？"
     },
     {
      "speaker": "小明",
      "hanzi": "吃月饼，一家人一起看月亮。",
      "pinyin": "Chī yuèbing, yì jiārén yìqǐ kàn yuèliang.",
      "meaning": {
       "en": "Mooncakes, and the family looks at the moon together.",
       "fr": "Des gâteaux de lune, et la famille regarde la lune ensemble.",
       "zh": "吃月饼，一家人一起看月亮。"
      },
      "audioText": "吃月饼，一家人一起看月亮。"
     },
     {
      "speaker": "大卫",
      "hanzi": "冬天快要到了，咱们要好好享受秋天！",
      "pinyin": "Dōngtiān kuàiyào dào le, zánmen yào hǎohǎo xiǎngshòu qiūtiān!",
      "meaning": {
       "en": "Winter will be here soon; let's enjoy the autumn!",
       "fr": "L'hiver arrive bientôt, profitons bien de l'automne !",
       "zh": "冬天快要到了，咱们要好好享受秋天！"
      },
      "audioText": "冬天快要到了，咱们要好好享受秋天！"
     }
    ]
   }
  ],
  "story": [
   {
    "hanzi": "北京一年有四个季节。春天常常刮风，夏天很热，冬天很冷，秋天最舒服，天很蓝，不冷也不热。中秋节的晚上，月亮又大又圆，中国人一家人一起吃月饼、看月亮。",
    "pinyin": "Běijīng yì nián yǒu sì ge jìjié. Chūntiān chángcháng guā fēng, xiàtiān hěn rè, dōngtiān hěn lěng, qiūtiān zuì shūfu, tiān hěn lán, bù lěng yě bú rè. Zhōngqiū Jié de wǎnshang, yuèliang yòu dà yòu yuán, Zhōngguó rén yì jiārén yìqǐ chī yuèbing, kàn yuèliang.",
    "translation": {
     "en": "Beijing has four seasons. Spring is often windy, summer hot and winter cold; autumn is the most pleasant, with blue skies, neither cold nor hot. On the evening of the Mid-Autumn Festival, the moon is big and round, and Chinese families eat mooncakes and watch it together.",
     "fr": "Pékin a quatre saisons. Le printemps est souvent venteux, l'été chaud et l'hiver froid ; l'automne est la plus agréable, avec un ciel bleu, ni froid ni chaud. Le soir de la fête de la mi-automne, la lune est grande et ronde, et les familles chinoises mangent des gâteaux de lune en la regardant.",
     "zh": "北京一年有四个季节。春天常常刮风，夏天很热，冬天很冷，秋天最舒服，天很蓝，不冷也不热。中秋节的晚上，月亮又大又圆，中国人一家人一起吃月饼、看月亮。"
    }
   }
  ]
 },
 "lesson-hsk3-24": {
  "scenes": [
   {
    "title": {
     "en": "Wedding plans",
     "fr": "Les projets de mariage",
     "zh": "婚礼的计划"
    },
    "setting": {
     "en": "Xiao Li explains the wedding programme.",
     "fr": "Xiao Li explique le programme du mariage.",
     "zh": "小李给朋友们说婚礼的安排。"
    },
    "lines": [
     {
      "speaker": "小李",
      "hanzi": "婚礼上午十点开始，然后一起吃午饭。",
      "pinyin": "Hūnlǐ shàngwǔ shí diǎn kāishǐ, ránhòu yìqǐ chī wǔfàn.",
      "meaning": {
       "en": "The wedding starts at ten in the morning, then we'll have lunch together.",
       "fr": "Le mariage commence à dix heures, puis nous déjeunerons ensemble.",
       "zh": "婚礼上午十点开始，然后一起吃午饭。"
      },
      "audioText": "婚礼上午十点开始，然后一起吃午饭。"
     },
     {
      "speaker": "大卫",
      "hanzi": "如果下雨的话，怎么办？",
      "pinyin": "Rúguǒ xià yǔ dehuà, zěnme bàn?",
      "meaning": {
       "en": "What if it rains?",
       "fr": "Et s'il pleut ?",
       "zh": "如果下雨的话，怎么办？"
      },
      "audioText": "如果下雨的话，怎么办？"
     },
     {
      "speaker": "小李",
      "hanzi": "只要不刮大风，就在外面；如果下雨，就去饭店里面。",
      "pinyin": "Zhǐyào bù guā dà fēng, jiù zài wàimiàn; rúguǒ xià yǔ, jiù qù fàndiàn lǐmiàn.",
      "meaning": {
       "en": "As long as there's no strong wind, we'll be outside; if it rains, we'll go into the hotel.",
       "fr": "Tant qu'il n'y a pas de grand vent, ce sera dehors ; s'il pleut, on ira dans l'hôtel.",
       "zh": "只要不刮大风，就在外面；如果下雨，就去饭店里面。"
      },
      "audioText": "只要不刮大风，就在外面；如果下雨，就去饭店里面。"
     },
     {
      "speaker": "安娜",
      "hanzi": "你想得真周到！",
      "pinyin": "Nǐ xiǎng de zhēn zhōudào!",
      "meaning": {
       "en": "You've thought of everything!",
       "fr": "Tu as pensé à tout !",
       "zh": "你想得真周到！"
      },
      "audioText": "你想得真周到！"
     }
    ]
   },
   {
    "title": {
     "en": "Not only... but also",
     "fr": "Non seulement… mais aussi",
     "zh": "不但……而且……"
    },
    "setting": {
     "en": "The friends talk about Xiao Li's fiancée.",
     "fr": "Les amis parlent de la fiancée de Xiao Li.",
     "zh": "朋友们说起小李的女朋友。"
    },
    "lines": [
     {
      "speaker": "玛丽",
      "hanzi": "小李的女朋友是做什么的？",
      "pinyin": "Xiǎo Lǐ de nǚpéngyou shì zuò shénme de?",
      "meaning": {
       "en": "What does Xiao Li's girlfriend do?",
       "fr": "Que fait la petite amie de Xiao Li ?",
       "zh": "小李的女朋友是做什么的？"
      },
      "audioText": "小李的女朋友是做什么的？"
     },
     {
      "speaker": "小明",
      "hanzi": "她是医生，不但工作很努力，而且人很好。",
      "pinyin": "Tā shì yīshēng, búdàn gōngzuò hěn nǔlì, érqiě rén hěn hǎo.",
      "meaning": {
       "en": "She's a doctor; not only does she work hard, she's also very kind.",
       "fr": "Elle est médecin ; non seulement elle travaille beaucoup, mais en plus elle est très gentille.",
       "zh": "她是医生，不但工作很努力，而且人很好。"
      },
      "audioText": "她是医生，不但工作很努力，而且人很好。"
     },
     {
      "speaker": "安娜",
      "hanzi": "他们是怎么认识的？",
      "pinyin": "Tāmen shì zěnme rènshi de?",
      "meaning": {
       "en": "How did they meet?",
       "fr": "Comment se sont-ils rencontrés ?",
       "zh": "他们是怎么认识的？"
      },
      "audioText": "他们是怎么认识的？"
     },
     {
      "speaker": "小明",
      "hanzi": "除了我以外，大家都不知道！",
      "pinyin": "Chúle wǒ yǐwài, dàjiā dōu bù zhīdào!",
      "meaning": {
       "en": "Nobody knows except me!",
       "fr": "À part moi, personne ne le sait !",
       "zh": "除了我以外，大家都不知道！"
      },
      "audioText": "除了我以外，大家都不知道！"
     }
    ]
   },
   {
    "title": {
     "en": "A gift",
     "fr": "Un cadeau",
     "zh": "送什么礼物？"
    },
    "setting": {
     "en": "What should they give the couple?",
     "fr": "Que faut-il offrir au couple ?",
     "zh": "送新郎新娘什么礼物好呢？"
    },
    "lines": [
     {
      "speaker": "大卫",
      "hanzi": "根据中国的习惯，结婚送什么？",
      "pinyin": "Gēnjù Zhōngguó de xíguàn, jiéhūn sòng shénme?",
      "meaning": {
       "en": "According to Chinese customs, what do you give at a wedding?",
       "fr": "Selon les coutumes chinoises, qu'offre-t-on à un mariage ?",
       "zh": "根据中国的习惯，结婚送什么？"
      },
      "audioText": "根据中国的习惯，结婚送什么？"
     },
     {
      "speaker": "小明",
      "hanzi": "一般送红包，或者送有用的东西。",
      "pinyin": "Yìbān sòng hóngbāo, huòzhě sòng yǒuyòng de dōngxi.",
      "meaning": {
       "en": "Usually a red envelope, or something useful.",
       "fr": "En général une enveloppe rouge, ou quelque chose d'utile.",
       "zh": "一般送红包，或者送有用的东西。"
      },
      "audioText": "一般送红包，或者送有用的东西。"
     },
     {
      "speaker": "大卫",
      "hanzi": "为了他们，我们一起买一个好礼物吧。",
      "pinyin": "Wèile tāmen, wǒmen yìqǐ mǎi yí ge hǎo lǐwù ba.",
      "meaning": {
       "en": "Let's buy them a nice present together.",
       "fr": "Achetons-leur un beau cadeau ensemble.",
       "zh": "为了他们，我们一起买一个好礼物吧。"
      },
      "audioText": "为了他们，我们一起买一个好礼物吧。"
     }
    ]
   }
  ],
  "story": [
   {
    "hanzi": "小李的婚礼十月一号上午十点开始。如果下雨，就在饭店里面。他的女朋友是医生，不但工作努力，而且人很好。根据中国的习惯，我们打算送红包或者有用的东西。",
    "pinyin": "Xiǎo Lǐ de hūnlǐ shí yuè yī hào shàngwǔ shí diǎn kāishǐ. Rúguǒ xià yǔ, jiù zài fàndiàn lǐmiàn. Tā de nǚpéngyou shì yīshēng, búdàn gōngzuò nǔlì, érqiě rén hěn hǎo. Gēnjù Zhōngguó de xíguàn, wǒmen dǎsuàn sòng hóngbāo huòzhě yǒuyòng de dōngxi.",
    "translation": {
     "en": "Xiao Li's wedding starts at ten on the first of October. If it rains, it will be inside the hotel. His girlfriend is a doctor who not only works hard but is also very kind. Following Chinese custom, we plan to give a red envelope or something useful.",
     "fr": "Le mariage de Xiao Li commence à dix heures le 1er octobre. S'il pleut, ce sera à l'intérieur de l'hôtel. Sa petite amie est médecin ; non seulement elle travaille beaucoup, mais elle est aussi très gentille. Selon la coutume chinoise, nous comptons offrir une enveloppe rouge ou quelque chose d'utile.",
     "zh": "小李的婚礼十月一号上午十点开始。如果下雨，就在饭店里面。他的女朋友是医生，不但工作努力，而且人很好。根据中国的习惯，我们打算送红包或者有用的东西。"
    }
   }
  ]
 },
 "lesson-hsk3-22": {
  "scenes": [
   {
    "title": {
     "en": "Anna's tears",
     "fr": "Les larmes d'Anna",
     "zh": "安娜哭了"
    },
    "setting": {
     "en": "Anna is crying in the café.",
     "fr": "Anna pleure au café.",
     "zh": "安娜在咖啡馆里哭了。"
    },
    "lines": [
     {
      "speaker": "大卫",
      "hanzi": "安娜，你怎么哭了？",
      "pinyin": "Ānnà, nǐ zěnme kū le?",
      "meaning": {
       "en": "Anna, why are you crying?",
       "fr": "Anna, pourquoi tu pleures ?",
       "zh": "安娜，你怎么哭了？"
      },
      "audioText": "安娜，你怎么哭了？"
     },
     {
      "speaker": "安娜",
      "hanzi": "我以为我的研究生考试没考好，心里很急。",
      "pinyin": "Wǒ yǐwéi wǒ de yánjiūshēng kǎoshì méi kǎo hǎo, xīnlǐ hěn jí.",
      "meaning": {
       "en": "I thought I'd failed my master's entrance exam; I was so anxious.",
       "fr": "Je croyais avoir raté mon examen d'entrée en master, j'étais très angoissée.",
       "zh": "我以为我的研究生考试没考好，心里很急。"
      },
      "audioText": "我以为我的研究生考试没考好，心里很急。"
     },
     {
      "speaker": "大卫",
      "hanzi": "成绩出来了吗？",
      "pinyin": "Chéngjì chūlai le ma?",
      "meaning": {
       "en": "Are the results out?",
       "fr": "Les résultats sont sortis ?",
       "zh": "成绩出来了吗？"
      },
      "audioText": "成绩出来了吗？"
     },
     {
      "speaker": "安娜",
      "hanzi": "刚出来，其实我考得很好！我是太高兴了！",
      "pinyin": "Gāng chūlai, qíshí wǒ kǎo de hěn hǎo! Wǒ shì tài gāoxìng le!",
      "meaning": {
       "en": "Just now; actually I did really well! I'm crying with joy!",
       "fr": "À l'instant ; en fait, j'ai très bien réussi ! Je pleure de joie !",
       "zh": "刚出来，其实我考得很好！我是太高兴了！"
      },
      "audioText": "刚出来，其实我考得很好！我是太高兴了！"
     }
    ]
   },
   {
    "title": {
     "en": "A decision",
     "fr": "Une décision",
     "zh": "做决定"
    },
    "setting": {
     "en": "Anna has to choose between two universities.",
     "fr": "Anna doit choisir entre deux universités.",
     "zh": "安娜要在两个大学中间选一个。"
    },
    "lines": [
     {
      "speaker": "安娜",
      "hanzi": "北京和上海的大学都同意了，我该去哪个？",
      "pinyin": "Běijīng hé Shànghǎi de dàxué dōu tóngyì le, wǒ gāi qù nǎge?",
      "meaning": {
       "en": "Universities in Beijing and Shanghai both accepted me; which should I choose?",
       "fr": "Les universités de Pékin et de Shanghai m'ont acceptée, laquelle choisir ?",
       "zh": "北京和上海的大学都同意了，我该去哪个？"
      },
      "audioText": "北京和上海的大学都同意了，我该去哪个？"
     },
     {
      "speaker": "大卫",
      "hanzi": "我认为你应该留在北京，朋友们都在这儿。",
      "pinyin": "Wǒ rènwéi nǐ yīnggāi liú zài Běijīng, péngyoumen dōu zài zhèr.",
      "meaning": {
       "en": "I think you should stay in Beijing; all your friends are here.",
       "fr": "Je pense que tu devrais rester à Pékin, tous tes amis sont ici.",
       "zh": "我认为你应该留在北京，朋友们都在这儿。"
      },
      "audioText": "我认为你应该留在北京，朋友们都在这儿。"
     },
     {
      "speaker": "安娜",
      "hanzi": "可是上海的老师很有名。",
      "pinyin": "Kěshì Shànghǎi de lǎoshī hěn yǒumíng.",
      "meaning": {
       "en": "But the professors in Shanghai are famous.",
       "fr": "Mais les professeurs de Shanghai sont célèbres.",
       "zh": "可是上海的老师很有名。"
      },
      "audioText": "可是上海的老师很有名。"
     },
     {
      "speaker": "大卫",
      "hanzi": "那你一定要想清楚，这是你的决定。",
      "pinyin": "Nà nǐ yídìng yào xiǎng qīngchu, zhè shì nǐ de juédìng.",
      "meaning": {
       "en": "Then think it over carefully; it's your decision.",
       "fr": "Alors réfléchis bien, c'est ta décision.",
       "zh": "那你一定要想清楚，这是你的决定。"
      },
      "audioText": "那你一定要想清楚，这是你的决定。"
     }
    ]
   },
   {
    "title": {
     "en": "She has decided",
     "fr": "Elle a décidé",
     "zh": "决定了"
    },
    "setting": {
     "en": "A week later.",
     "fr": "Une semaine plus tard.",
     "zh": "一个星期以后。"
    },
    "lines": [
     {
      "speaker": "安娜",
      "hanzi": "我决定了，留在北京！",
      "pinyin": "Wǒ juédìng le, liú zài Běijīng!",
      "meaning": {
       "en": "I've decided: I'm staying in Beijing!",
       "fr": "J'ai décidé : je reste à Pékin !",
       "zh": "我决定了，留在北京！"
      },
      "audioText": "我决定了，留在北京！"
     },
     {
      "speaker": "小明",
      "hanzi": "太好了！看来你还是喜欢北京。",
      "pinyin": "Tài hǎo le! Kànlái nǐ háishi xǐhuan Běijīng.",
      "meaning": {
       "en": "Great! Looks like you love Beijing after all.",
       "fr": "Super ! On dirait que tu aimes Pékin, finalement.",
       "zh": "太好了！看来你还是喜欢北京。"
      },
      "audioText": "太好了！看来你还是喜欢北京。"
     },
     {
      "speaker": "安娜",
      "hanzi": "当然，这里好像是我的第二个家。",
      "pinyin": "Dāngrán, zhèlǐ hǎoxiàng shì wǒ de dì èr ge jiā.",
      "meaning": {
       "en": "Of course, it feels like my second home.",
       "fr": "Bien sûr, c'est comme ma deuxième maison.",
       "zh": "当然，这里好像是我的第二个家。"
      },
      "audioText": "当然，这里好像是我的第二个家。"
     }
    ]
   }
  ],
  "story": [
   {
    "hanzi": "安娜考上了研究生。开始她以为自己没考好，后来才知道考得很好。北京和上海的大学都同意了。我认为她应该留在北京，最后她也这样决定了。看来北京真的是她的第二个家。",
    "pinyin": "Ānnà kǎo shàng le yánjiūshēng. Kāishǐ tā yǐwéi zìjǐ méi kǎo hǎo, hòulái cái zhīdào kǎo de hěn hǎo. Běijīng hé Shànghǎi de dàxué dōu tóngyì le. Wǒ rènwéi tā yīnggāi liú zài Běijīng, zuìhòu tā yě zhèyàng juédìng le. Kànlái Běijīng zhēn de shì tā de dì èr ge jiā.",
    "translation": {
     "en": "Anna got into a master's programme. At first she thought she'd done badly; later she found out she'd done very well. Universities in Beijing and Shanghai both accepted her. I thought she should stay in Beijing, and in the end that's what she decided. Beijing really is her second home.",
     "fr": "Anna a été admise en master. Au début, elle croyait avoir raté l'examen ; ensuite, elle a appris qu'elle avait très bien réussi. Les universités de Pékin et de Shanghai l'ont acceptée. Je pensais qu'elle devait rester à Pékin, et c'est finalement ce qu'elle a décidé. Pékin est vraiment sa deuxième maison.",
     "zh": "安娜考上了研究生。开始她以为自己没考好，后来才知道考得很好。北京和上海的大学都同意了。我认为她应该留在北京，最后她也这样决定了。看来北京真的是她的第二个家。"
    }
   }
  ]
 },
 "lesson-hsk3-18": {
  "scenes": [
   {
    "title": {
     "en": "A cold",
     "fr": "Un rhume",
     "zh": "感冒了"
    },
    "setting": {
     "en": "Two days before the wedding, David falls ill.",
     "fr": "Deux jours avant le mariage, David tombe malade.",
     "zh": "婚礼前两天，大卫感冒了。"
    },
    "lines": [
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
       "en": "I've caught a cold; as soon as I go to bed at night, I get a fever.",
       "fr": "J'ai un rhume ; dès que je me couche le soir, j'ai de la fièvre.",
       "zh": "我感冒了，晚上一睡觉就发烧。"
      },
      "audioText": "我感冒了，晚上一睡觉就发烧。"
     },
     {
      "speaker": "医生",
      "hanzi": "我给你检查一下。不需要住院，回家多喝水。",
      "pinyin": "Wǒ gěi nǐ jiǎnchá yíxià. Bù xūyào zhùyuàn, huí jiā duō hē shuǐ.",
      "meaning": {
       "en": "Let me examine you. You don't need hospital; go home and drink lots of water.",
       "fr": "Je vais vous examiner. Pas besoin d'hospitalisation, rentrez et buvez beaucoup d'eau.",
       "zh": "我给你检查一下。不需要住院，回家多喝水。"
      },
      "audioText": "我给你检查一下。不需要住院，回家多喝水。"
     },
     {
      "speaker": "大卫",
      "hanzi": "后天我能去参加婚礼吗？",
      "pinyin": "Hòutiān wǒ néng qù cānjiā hūnlǐ ma?",
      "meaning": {
       "en": "Can I go to a wedding the day after tomorrow?",
       "fr": "Je pourrai aller à un mariage après-demain ?",
       "zh": "后天我能去参加婚礼吗？"
      },
      "audioText": "后天我能去参加婚礼吗？"
     },
     {
      "speaker": "医生",
      "hanzi": "如果不发烧了，就可以去。",
      "pinyin": "Rúguǒ bù fāshāo le, jiù kěyǐ qù.",
      "meaning": {
       "en": "If the fever's gone, yes.",
       "fr": "Si vous n'avez plus de fièvre, oui.",
       "zh": "如果不发烧了，就可以去。"
      },
      "audioText": "如果不发烧了，就可以去。"
     }
    ]
   },
   {
    "title": {
     "en": "Be careful",
     "fr": "Fais attention",
     "zh": "要注意"
    },
    "setting": {
     "en": "Xiaoming brings medicine to David's flat.",
     "fr": "Xiaoming apporte des médicaments chez David.",
     "zh": "小明给大卫送药来了。"
    },
    "lines": [
     {
      "speaker": "小明",
      "hanzi": "这个药一吃完饭就要吃。",
      "pinyin": "Zhège yào yì chī wán fàn jiù yào chī.",
      "meaning": {
       "en": "Take this medicine straight after meals.",
       "fr": "Prends ce médicament juste après les repas.",
       "zh": "这个药一吃完饭就要吃。"
      },
      "audioText": "这个药一吃完饭就要吃。"
     },
     {
      "speaker": "大卫",
      "hanzi": "好，我记住了。",
      "pinyin": "Hǎo, wǒ jìzhù le.",
      "meaning": {
       "en": "OK, got it.",
       "fr": "D'accord, c'est noté.",
       "zh": "好，我记住了。"
      },
      "audioText": "好，我记住了。"
     },
     {
      "speaker": "小明",
      "hanzi": "洗完澡马上穿衣服，小心别再感冒。",
      "pinyin": "Xǐ wán zǎo mǎshàng chuān yīfu, xiǎoxīn bié zài gǎnmào.",
      "meaning": {
       "en": "Get dressed right after your shower; be careful not to catch another cold.",
       "fr": "Habille-toi tout de suite après la douche, fais attention à ne pas reprendre froid.",
       "zh": "洗完澡马上穿衣服，小心别再感冒。"
      },
      "audioText": "洗完澡马上穿衣服，小心别再感冒。"
     },
     {
      "speaker": "大卫",
      "hanzi": "你像我妈妈一样！",
      "pinyin": "Nǐ xiàng wǒ māma yíyàng!",
      "meaning": {
       "en": "You're just like my mum!",
       "fr": "Tu es comme ma mère !",
       "zh": "你像我妈妈一样！"
      },
      "audioText": "你像我妈妈一样！"
     }
    ]
   },
   {
    "title": {
     "en": "All better",
     "fr": "Guéri",
     "zh": "好了"
    },
    "setting": {
     "en": "The morning of the wedding.",
     "fr": "Le matin du mariage.",
     "zh": "婚礼那天早上。"
    },
    "lines": [
     {
      "speaker": "小明",
      "hanzi": "大卫，身体怎么样了？",
      "pinyin": "Dàwèi, shēntǐ zěnmeyàng le?",
      "meaning": {
       "en": "David, how are you feeling?",
       "fr": "David, comment tu te sens ?",
       "zh": "大卫，身体怎么样了？"
      },
      "audioText": "大卫，身体怎么样了？"
     },
     {
      "speaker": "大卫",
      "hanzi": "不发烧了，我已经刷完牙了，马上出门！",
      "pinyin": "Bù fāshāo le, wǒ yǐjīng shuā wán yá le, mǎshàng chūmén!",
      "meaning": {
       "en": "No more fever; I've brushed my teeth and I'm leaving right now!",
       "fr": "Plus de fièvre ; je me suis brossé les dents, je sors tout de suite !",
       "zh": "不发烧了，我已经刷完牙了，马上出门！"
      },
      "audioText": "不发烧了，我已经刷完牙了，马上出门！"
     },
     {
      "speaker": "小明",
      "hanzi": "太好了，我在楼下等你。",
      "pinyin": "Tài hǎo le, wǒ zài lóuxià děng nǐ.",
      "meaning": {
       "en": "Great, I'm waiting for you downstairs.",
       "fr": "Super, je t'attends en bas.",
       "zh": "太好了，我在楼下等你。"
      },
      "audioText": "太好了，我在楼下等你。"
     }
    ]
   }
  ],
  "story": [
   {
    "hanzi": "婚礼前两天我感冒了，一睡觉就发烧。医生给我检查了一下，说不需要住院。小明给我送来了药，告诉我要注意，洗完澡马上穿衣服。婚礼那天，我已经不发烧了。",
    "pinyin": "Hūnlǐ qián liǎng tiān wǒ gǎnmào le, yí shuìjiào jiù fāshāo. Yīshēng gěi wǒ jiǎnchá le yíxià, shuō bù xūyào zhùyuàn. Xiǎomíng gěi wǒ sòng lái le yào, gàosu wǒ yào zhùyì, xǐ wán zǎo mǎshàng chuān yīfu. Hūnlǐ nà tiān, wǒ yǐjīng bù fāshāo le.",
    "translation": {
     "en": "Two days before the wedding I caught a cold and got a fever whenever I went to bed. The doctor examined me and said I didn't need to go to hospital. Xiaoming brought me medicine and told me to be careful and get dressed right after my shower. On the wedding day, the fever was gone.",
     "fr": "Deux jours avant le mariage, j'ai attrapé un rhume et j'avais de la fièvre dès que je me couchais. Le médecin m'a examiné et a dit que je n'avais pas besoin d'être hospitalisé. Xiaoming m'a apporté des médicaments et m'a dit de faire attention, de m'habiller juste après la douche. Le jour du mariage, je n'avais plus de fièvre.",
     "zh": "婚礼前两天我感冒了，一睡觉就发烧。医生给我检查了一下，说不需要住院。小明给我送来了药，告诉我要注意，洗完澡马上穿衣服。婚礼那天，我已经不发烧了。"
    }
   }
  ]
 },
 "lesson-hsk3-03": {
  "scenes": [
   {
    "title": {
     "en": "Before the ceremony",
     "fr": "Avant la cérémonie",
     "zh": "婚礼以前"
    },
    "setting": {
     "en": "Xiao Li is very nervous before the ceremony.",
     "fr": "Xiao Li est très nerveux avant la cérémonie.",
     "zh": "婚礼开始以前，小李很紧张。"
    },
    "lines": [
     {
      "speaker": "小李",
      "hanzi": "我有点儿害怕，客人太多了。",
      "pinyin": "Wǒ yǒudiǎnr hàipà, kèrén tài duō le.",
      "meaning": {
       "en": "I'm a bit scared; there are so many guests.",
       "fr": "J'ai un peu peur, il y a trop d'invités.",
       "zh": "我有点儿害怕，客人太多了。"
      },
      "audioText": "我有点儿害怕，客人太多了。"
     },
     {
      "speaker": "小明",
      "hanzi": "别着急，放心吧，我们都在这儿帮助你。",
      "pinyin": "Bié zháojí, fàngxīn ba, wǒmen dōu zài zhèr bāngzhù nǐ.",
      "meaning": {
       "en": "Don't panic, relax; we're all here to help you.",
       "fr": "Ne panique pas, détends-toi, on est tous là pour t'aider.",
       "zh": "别着急，放心吧，我们都在这儿帮助你。"
      },
      "audioText": "别着急，放心吧，我们都在这儿帮助你。"
     },
     {
      "speaker": "大卫",
      "hanzi": "对，今天是你最开心的一天！",
      "pinyin": "Duì, jīntiān shì nǐ zuì kāixīn de yì tiān!",
      "meaning": {
       "en": "Yes, today is your happiest day!",
       "fr": "Oui, aujourd'hui, c'est ton plus beau jour !",
       "zh": "对，今天是你最开心的一天！"
      },
      "audioText": "对，今天是你最开心的一天！"
     },
     {
      "speaker": "小李",
      "hanzi": "谢谢你们这么关心我。",
      "pinyin": "Xièxie nǐmen zhème guānxīn wǒ.",
      "meaning": {
       "en": "Thank you for caring about me so much.",
       "fr": "Merci de vous soucier autant de moi.",
       "zh": "谢谢你们这么关心我。"
      },
      "audioText": "谢谢你们这么关心我。"
     }
    ]
   },
   {
    "title": {
     "en": "The bride's parents",
     "fr": "Les parents de la mariée",
     "zh": "新娘的父母"
    },
    "setting": {
     "en": "At the banquet, the bride's father speaks.",
     "fr": "Au banquet, le père de la mariée prend la parole.",
     "zh": "婚宴上，新娘的爸爸说话了。"
    },
    "lines": [
     {
      "speaker": "新娘的爸爸",
      "hanzi": "我们对小李很满意，他对我女儿很热情，很照顾她。",
      "pinyin": "Wǒmen duì Xiǎo Lǐ hěn mǎnyì, tā duì wǒ nǚ'ér hěn rèqíng, hěn zhàogù tā.",
      "meaning": {
       "en": "We're very happy with Xiao Li; he's warm to our daughter and takes good care of her.",
       "fr": "Nous sommes très contents de Xiao Li ; il est attentionné avec notre fille et prend bien soin d'elle.",
       "zh": "我们对小李很满意，他对我女儿很热情，很照顾她。"
      },
      "audioText": "我们对小李很满意，他对我女儿很热情，很照顾她。"
     },
     {
      "speaker": "新娘",
      "hanzi": "爸爸，你别难过。",
      "pinyin": "Bàba, nǐ bié nánguò.",
      "meaning": {
       "en": "Dad, don't be sad.",
       "fr": "Papa, ne sois pas triste.",
       "zh": "爸爸，你别难过。"
      },
      "audioText": "爸爸，你别难过。"
     },
     {
      "speaker": "新娘的爸爸",
      "hanzi": "我不难过，我是太高兴了！",
      "pinyin": "Wǒ bù nánguò, wǒ shì tài gāoxìng le!",
      "meaning": {
       "en": "I'm not sad, I'm just so happy!",
       "fr": "Je ne suis pas triste, je suis trop heureux !",
       "zh": "我不难过，我是太高兴了！"
      },
      "audioText": "我不难过，我是太高兴了！"
     }
    ]
   },
   {
    "title": {
     "en": "Friends",
     "fr": "Les amis",
     "zh": "朋友的关系"
    },
    "setting": {
     "en": "After the banquet, the friends talk.",
     "fr": "Après le banquet, les amis discutent.",
     "zh": "婚宴以后，朋友们聊天。"
    },
    "lines": [
     {
      "speaker": "安娜",
      "hanzi": "你们看，他们的关系真好。",
      "pinyin": "Nǐmen kàn, tāmen de guānxi zhēn hǎo.",
      "meaning": {
       "en": "Look, they get on so well.",
       "fr": "Regardez, ils s'entendent si bien.",
       "zh": "你们看，他们的关系真好。"
      },
      "audioText": "你们看，他们的关系真好。"
     },
     {
      "speaker": "玛丽",
      "hanzi": "我相信他们会很幸福。",
      "pinyin": "Wǒ xiāngxìn tāmen huì hěn xìngfú.",
      "meaning": {
       "en": "I'm sure they'll be very happy.",
       "fr": "Je suis sûre qu'ils seront très heureux.",
       "zh": "我相信他们会很幸福。"
      },
      "audioText": "我相信他们会很幸福。"
     },
     {
      "speaker": "大卫",
      "hanzi": "我愿意做他们孩子的“叔叔”！",
      "pinyin": "Wǒ yuànyì zuò tāmen háizi de \"shūshu\"!",
      "meaning": {
       "en": "I'd be happy to be their children's “uncle”!",
       "fr": "Je veux bien être le « tonton » de leurs enfants !",
       "zh": "我愿意做他们孩子的“叔叔”！"
      },
      "audioText": "我愿意做他们孩子的“叔叔”！"
     },
     {
      "speaker": "小明",
      "hanzi": "哈哈，你别着急！",
      "pinyin": "Hāha, nǐ bié zháojí!",
      "meaning": {
       "en": "Ha ha, don't rush!",
       "fr": "Ha ha, ne sois pas si pressé !",
       "zh": "哈哈，你别着急！"
      },
      "audioText": "哈哈，你别着急！"
     }
    ]
   }
  ],
  "story": [
   {
    "hanzi": "十月一号是小李结婚的日子。婚礼以前，他有点儿害怕，我们都让他放心。新娘的爸爸说他对小李很满意，因为小李很关心、很照顾他的女儿。我相信他们会很幸福。",
    "pinyin": "Shí yuè yī hào shì Xiǎo Lǐ jiéhūn de rìzi. Hūnlǐ yǐqián, tā yǒudiǎnr hàipà, wǒmen dōu ràng tā fàngxīn. Xīnniáng de bàba shuō tā duì Xiǎo Lǐ hěn mǎnyì, yīnwèi Xiǎo Lǐ hěn guānxīn, hěn zhàogù tā de nǚ'ér. Wǒ xiāngxìn tāmen huì hěn xìngfú.",
    "translation": {
     "en": "The first of October was Xiao Li's wedding day. Before the ceremony he was a bit scared, and we all reassured him. The bride's father said he was very pleased with Xiao Li because he cares for his daughter and looks after her well. I'm sure they will be very happy.",
     "fr": "Le 1er octobre, c'était le mariage de Xiao Li. Avant la cérémonie, il avait un peu peur, et nous l'avons tous rassuré. Le père de la mariée a dit qu'il était très content de Xiao Li, parce qu'il est attentionné et prend bien soin de sa fille. Je suis sûr qu'ils seront très heureux.",
     "zh": "十月一号是小李结婚的日子。婚礼以前，他有点儿害怕，我们都让他放心。新娘的爸爸说他对小李很满意，因为小李很关心、很照顾他的女儿。我相信他们会很幸福。"
    }
   }
  ]
 },
 "lesson-hsk3-17": {
  "scenes": [
   {
    "title": {
     "en": "The holiday week",
     "fr": "La semaine de congés",
     "zh": "国庆节放假"
    },
    "setting": {
     "en": "October is a holiday week in China.",
     "fr": "La première semaine d'octobre est fériée en Chine.",
     "zh": "十月一号是国庆节，放假七天。"
    },
    "lines": [
     {
      "speaker": "大卫",
      "hanzi": "国庆节放几天假？",
      "pinyin": "Guóqìng Jié fàng jǐ tiān jiǎ?",
      "meaning": {
       "en": "How many days off for National Day?",
       "fr": "Combien de jours de congé pour la fête nationale ?",
       "zh": "国庆节放几天假？"
      },
      "audioText": "国庆节放几天假？"
     },
     {
      "speaker": "小王",
      "hanzi": "七天。你请假了吗？",
      "pinyin": "Qī tiān. Nǐ qǐngjià le ma?",
      "meaning": {
       "en": "Seven. Have you asked for extra leave?",
       "fr": "Sept. Tu as demandé des congés en plus ?",
       "zh": "七天。你请假了吗？"
      },
      "audioText": "七天。你请假了吗？"
     },
     {
      "speaker": "大卫",
      "hanzi": "请了两天假，假期一共九天。",
      "pinyin": "Qǐng le liǎng tiān jiǎ, jiàqī yígòng jiǔ tiān.",
      "meaning": {
       "en": "I asked for two more days, so nine days in all.",
       "fr": "J'ai pris deux jours de plus, donc neuf jours en tout.",
       "zh": "请了两天假，假期一共九天。"
      },
      "audioText": "请了两天假，假期一共九天。"
     },
     {
      "speaker": "小王",
      "hanzi": "真好！我只休息七天，下个工作日就要上班了。",
      "pinyin": "Zhēn hǎo! Wǒ zhǐ xiūxi qī tiān, xià ge gōngzuòrì jiù yào shàngbān le.",
      "meaning": {
       "en": "Lucky you! I only get seven; back to work on the next working day.",
       "fr": "Quelle chance ! Moi, seulement sept, je reprends le prochain jour ouvré.",
       "zh": "真好！我只休息七天，下个工作日就要上班了。"
      },
      "audioText": "真好！我只休息七天，下个工作日就要上班了。"
     }
    ]
   },
   {
    "title": {
     "en": "When was it?",
     "fr": "C'était quand ?",
     "zh": "是什么时候的事？"
    },
    "setting": {
     "en": "Mr Zhang asks David about the wedding.",
     "fr": "M. Zhang interroge David sur le mariage.",
     "zh": "张经理问大卫婚礼的事。"
    },
    "lines": [
     {
      "speaker": "张经理",
      "hanzi": "你朋友的婚礼是什么时候举行的？",
      "pinyin": "Nǐ péngyou de hūnlǐ shì shénme shíhou jǔxíng de?",
      "meaning": {
       "en": "When was your friend's wedding?",
       "fr": "Quand a eu lieu le mariage de ton ami ?",
       "zh": "你朋友的婚礼是什么时候举行的？"
      },
      "audioText": "你朋友的婚礼是什么时候举行的？"
     },
     {
      "speaker": "大卫",
      "hanzi": "是十月一号举行的，在一个饭店里。",
      "pinyin": "Shì shí yuè yī hào jǔxíng de, zài yí ge fàndiàn li.",
      "meaning": {
       "en": "It was on the first of October, in a hotel.",
       "fr": "Le 1er octobre, dans un hôtel.",
       "zh": "是十月一号举行的，在一个饭店里。"
      },
      "audioText": "是十月一号举行的，在一个饭店里。"
     },
     {
      "speaker": "张经理",
      "hanzi": "你是怎么认识他的？",
      "pinyin": "Nǐ shì zěnme rènshi tā de?",
      "meaning": {
       "en": "How did you meet him?",
       "fr": "Comment l'as-tu connu ?",
       "zh": "你是怎么认识他的？"
      },
      "audioText": "你是怎么认识他的？"
     },
     {
      "speaker": "大卫",
      "hanzi": "是小明介绍的，我们是在大学认识的。",
      "pinyin": "Shì Xiǎomíng jièshào de, wǒmen shì zài dàxué rènshi de.",
      "meaning": {
       "en": "Xiaoming introduced us; we met at university.",
       "fr": "C'est Xiaoming qui nous a présentés ; on s'est rencontrés à l'université.",
       "zh": "是小明介绍的，我们是在大学认识的。"
      },
      "audioText": "是小明介绍的，我们是在大学认识的。"
     }
    ]
   },
   {
    "title": {
     "en": "A party",
     "fr": "Une soirée",
     "zh": "新年晚会"
    },
    "setting": {
     "en": "In December, the company plans a New Year party.",
     "fr": "En décembre, l'entreprise prépare une soirée du Nouvel An.",
     "zh": "十二月，公司准备新年晚会。"
    },
    "lines": [
     {
      "speaker": "张经理",
      "hanzi": "大卫，新年晚会你来表演一个节目吧！",
      "pinyin": "Dàwèi, xīnnián wǎnhuì nǐ lái biǎoyǎn yí ge jiémù ba!",
      "meaning": {
       "en": "David, why don't you put on a number at the New Year party?",
       "fr": "David, tu ne ferais pas un numéro à la soirée du Nouvel An ?",
       "zh": "大卫，新年晚会你来表演一个节目吧！"
      },
      "audioText": "大卫，新年晚会你来表演一个节目吧！"
     },
     {
      "speaker": "大卫",
      "hanzi": "好啊，我唱一首中文歌。",
      "pinyin": "Hǎo a, wǒ chàng yì shǒu Zhōngwén gē.",
      "meaning": {
       "en": "Sure, I'll sing a Chinese song.",
       "fr": "Avec plaisir, je chanterai une chanson chinoise.",
       "zh": "好啊，我唱一首中文歌。"
      },
      "audioText": "好啊，我唱一首中文歌。"
     },
     {
      "speaker": "小王",
      "hanzi": "欢迎你的家人也来做客！",
      "pinyin": "Huānyíng nǐ de jiārén yě lái zuòkè!",
      "meaning": {
       "en": "Your family is welcome to come too!",
       "fr": "Ta famille est la bienvenue aussi !",
       "zh": "欢迎你的家人也来做客！"
      },
      "audioText": "欢迎你的家人也来做客！"
     },
     {
      "speaker": "大卫",
      "hanzi": "谢谢！我妈妈可能会来。",
      "pinyin": "Xièxie! Wǒ māma kěnéng huì lái.",
      "meaning": {
       "en": "Thanks! My mum might come.",
       "fr": "Merci ! Ma mère viendra peut-être.",
       "zh": "谢谢！我妈妈可能会来。"
      },
      "audioText": "谢谢！我妈妈可能会来。"
     }
    ]
   }
  ],
  "story": [
   {
    "hanzi": "国庆节放假七天，我又请了两天假。小李的婚礼是十月一号在饭店举行的。我和小李是在大学认识的，是小明介绍的。十二月公司要开新年晚会，我要表演一个节目。",
    "pinyin": "Guóqìng Jié fàngjià qī tiān, wǒ yòu qǐng le liǎng tiān jiǎ. Xiǎo Lǐ de hūnlǐ shì shí yuè yī hào zài fàndiàn jǔxíng de. Wǒ hé Xiǎo Lǐ shì zài dàxué rènshi de, shì Xiǎomíng jièshào de. Shí'èr yuè gōngsī yào kāi xīnnián wǎnhuì, wǒ yào biǎoyǎn yí ge jiémù.",
    "translation": {
     "en": "National Day gives seven days off, and I took two more days of leave. Xiao Li's wedding was held on the first of October in a hotel. Xiao Li and I met at university; Xiaoming introduced us. In December the company is holding a New Year party, and I'm going to put on a number.",
     "fr": "La fête nationale donne sept jours de congé, et j'ai pris deux jours de plus. Le mariage de Xiao Li a eu lieu le 1er octobre dans un hôtel. Xiao Li et moi nous sommes rencontrés à l'université, c'est Xiaoming qui nous a présentés. En décembre, l'entreprise organise une soirée du Nouvel An, et je vais y faire un numéro.",
     "zh": "国庆节放假七天，我又请了两天假。小李的婚礼是十月一号在饭店举行的。我和小李是在大学认识的，是小明介绍的。十二月公司要开新年晚会，我要表演一个节目。"
    }
   }
  ]
 },
 "lesson-hsk3-19": {
  "scenes": [
   {
    "title": {
     "en": "An email from Mum",
     "fr": "Un e-mail de maman",
     "zh": "妈妈的邮件"
    },
    "setting": {
     "en": "David checks his mailbox.",
     "fr": "David consulte sa boîte mail.",
     "zh": "大卫打开了邮箱。"
    },
    "lines": [
     {
      "speaker": "大卫",
      "hanzi": "小明，我收到妈妈的邮件了！",
      "pinyin": "Xiǎomíng, wǒ shōudào māma de yóujiàn le!",
      "meaning": {
       "en": "Xiaoming, I've got an email from my mum!",
       "fr": "Xiaoming, j'ai reçu un e-mail de ma mère !",
       "zh": "小明，我收到妈妈的邮件了！"
      },
      "audioText": "小明，我收到妈妈的邮件了！"
     },
     {
      "speaker": "小明",
      "hanzi": "她说什么？",
      "pinyin": "Tā shuō shénme?",
      "meaning": {
       "en": "What does she say?",
       "fr": "Qu'est-ce qu'elle dit ?",
       "zh": "她说什么？"
      },
      "audioText": "她说什么？"
     },
     {
      "speaker": "大卫",
      "hanzi": "她说十二月要来北京参加新年晚会！",
      "pinyin": "Tā shuō shí'èr yuè yào lái Běijīng cānjiā xīnnián wǎnhuì!",
      "meaning": {
       "en": "She says she's coming to Beijing in December for the New Year party!",
       "fr": "Elle dit qu'elle vient à Pékin en décembre pour la soirée du Nouvel An !",
       "zh": "她说十二月要来北京参加新年晚会！"
      },
      "audioText": "她说十二月要来北京参加新年晚会！"
     },
     {
      "speaker": "小明",
      "hanzi": "太好了，你快回信吧！",
      "pinyin": "Tài hǎo le, nǐ kuài huí xìn ba!",
      "meaning": {
       "en": "Great, write back quickly!",
       "fr": "Super, réponds-lui vite !",
       "zh": "太好了，你快回信吧！"
      },
      "audioText": "太好了，你快回信吧！"
     }
    ]
   },
   {
    "title": {
     "en": "Phone off",
     "fr": "Téléphone éteint",
     "zh": "关机了"
    },
    "setting": {
     "en": "The manager can't reach David.",
     "fr": "Le directeur n'arrive pas à joindre David.",
     "zh": "经理找不到大卫。"
    },
    "lines": [
     {
      "speaker": "张经理",
      "hanzi": "大卫，我给你打电话，你怎么关机了？",
      "pinyin": "Dàwèi, wǒ gěi nǐ dǎ diànhuà, nǐ zěnme guānjī le?",
      "meaning": {
       "en": "David, I called you; why was your phone off?",
       "fr": "David, je t'ai appelé, pourquoi ton téléphone était éteint ?",
       "zh": "大卫，我给你打电话，你怎么关机了？"
      },
      "audioText": "大卫，我给你打电话，你怎么关机了？"
     },
     {
      "speaker": "大卫",
      "hanzi": "不好意思，手机没电了。",
      "pinyin": "Bù hǎoyìsi, shǒujī méi diàn le.",
      "meaning": {
       "en": "Sorry, my battery was dead.",
       "fr": "Désolé, ma batterie était vide.",
       "zh": "不好意思，手机没电了。"
      },
      "audioText": "不好意思，手机没电了。"
     },
     {
      "speaker": "张经理",
      "hanzi": "你把号码告诉小王，有事他可以发消息给你。",
      "pinyin": "Nǐ bǎ hàomǎ gàosu Xiǎo Wáng, yǒu shì tā kěyǐ fā xiāoxi gěi nǐ.",
      "meaning": {
       "en": "Give Xiao Wang your number; he can message you if needed.",
       "fr": "Donne ton numéro à Xiao Wang, il pourra t'envoyer un message si besoin.",
       "zh": "你把号码告诉小王，有事他可以发消息给你。"
      },
      "audioText": "你把号码告诉小王，有事他可以发消息给你。"
     },
     {
      "speaker": "大卫",
      "hanzi": "好，我开机以后马上发给他。",
      "pinyin": "Hǎo, wǒ kāijī yǐhòu mǎshàng fā gěi tā.",
      "meaning": {
       "en": "OK, I'll send it to him as soon as I turn my phone on.",
       "fr": "D'accord, je le lui envoie dès que je rallume mon téléphone.",
       "zh": "好，我开机以后马上发给他。"
      },
      "audioText": "好，我开机以后马上发给他。"
     }
    ]
   },
   {
    "title": {
     "en": "Chatting online",
     "fr": "Discuter en ligne",
     "zh": "在网上聊天儿"
    },
    "setting": {
     "en": "In the evening, David chats online with his mother.",
     "fr": "Le soir, David discute en ligne avec sa mère.",
     "zh": "晚上，大卫在网上和妈妈聊天儿。"
    },
    "lines": [
     {
      "speaker": "妈妈",
      "hanzi": "大卫，我的声音你听得清楚吗？",
      "pinyin": "Dàwèi, wǒ de shēngyīn nǐ tīng de qīngchu ma?",
      "meaning": {
       "en": "David, can you hear me clearly?",
       "fr": "David, tu m'entends bien ?",
       "zh": "大卫，我的声音你听得清楚吗？"
      },
      "audioText": "大卫，我的声音你听得清楚吗？"
     },
     {
      "speaker": "大卫",
      "hanzi": "听得清楚！你戴耳机了吗？",
      "pinyin": "Tīng de qīngchu! Nǐ dài ěrjī le ma?",
      "meaning": {
       "en": "Yes, clearly! Are you wearing headphones?",
       "fr": "Oui, très bien ! Tu as mis un casque ?",
       "zh": "听得清楚！你戴耳机了吗？"
      },
      "audioText": "听得清楚！你戴耳机了吗？"
     },
     {
      "speaker": "妈妈",
      "hanzi": "戴了。我已经关注了你们公司的网站。",
      "pinyin": "Dài le. Wǒ yǐjīng guānzhù le nǐmen gōngsī de wǎngzhàn.",
      "meaning": {
       "en": "Yes. I've already started following your company's website.",
       "fr": "Oui. Je suis déjà le site de ton entreprise.",
       "zh": "戴了。我已经关注了你们公司的网站。"
      },
      "audioText": "戴了。我已经关注了你们公司的网站。"
     },
     {
      "speaker": "大卫",
      "hanzi": "妈妈，你真厉害！",
      "pinyin": "Māma, nǐ zhēn lìhai!",
      "meaning": {
       "en": "Mum, you're amazing!",
       "fr": "Maman, tu es incroyable !",
       "zh": "妈妈，你真厉害！"
      },
      "audioText": "妈妈，你真厉害！"
     }
    ]
   }
  ],
  "story": [
   {
    "hanzi": "今天我收到了妈妈的邮件，她十二月要来北京。经理给我打电话的时候我的手机没电，关机了。晚上我和妈妈在网上聊天儿，她说已经关注了我们公司的网站。",
    "pinyin": "Jīntiān wǒ shōudào le māma de yóujiàn, tā shí'èr yuè yào lái Běijīng. Jīnglǐ gěi wǒ dǎ diànhuà de shíhou wǒ de shǒujī méi diàn, guānjī le. Wǎnshang wǒ hé māma zài wǎngshang liáotiānr, tā shuō yǐjīng guānzhù le wǒmen gōngsī de wǎngzhàn.",
    "translation": {
     "en": "Today I got an email from Mum: she's coming to Beijing in December. When the manager called, my phone was dead and switched off. In the evening Mum and I chatted online; she says she's already following our company's website.",
     "fr": "Aujourd'hui, j'ai reçu un e-mail de maman : elle vient à Pékin en décembre. Quand le directeur m'a appelé, mon téléphone était à plat et éteint. Le soir, maman et moi avons discuté en ligne ; elle dit qu'elle suit déjà le site de notre entreprise.",
     "zh": "今天我收到了妈妈的邮件，她十二月要来北京。经理给我打电话的时候我的手机没电，关机了。晚上我和妈妈在网上聊天儿，她说已经关注了我们公司的网站。"
    }
   }
  ]
 },
 "lesson-hsk3-20": {
  "scenes": [
   {
    "title": {
     "en": "The last project",
     "fr": "Le dernier projet",
     "zh": "最后一个工作"
    },
    "setting": {
     "en": "David's internship ends soon. Mr Zhang calls a meeting.",
     "fr": "Le stage de David touche à sa fin. M. Zhang convoque une réunion.",
     "zh": "大卫的实习快结束了，张经理要开会。"
    },
    "lines": [
     {
      "speaker": "张经理",
      "hanzi": "大卫，下午三点在我的办公室开会。",
      "pinyin": "Dàwèi, xiàwǔ sān diǎn zài wǒ de bàngōngshì kāihuì.",
      "meaning": {
       "en": "David, meeting in my office at three this afternoon.",
       "fr": "David, réunion dans mon bureau à quinze heures.",
       "zh": "大卫，下午三点在我的办公室开会。"
      },
      "audioText": "大卫，下午三点在我的办公室开会。"
     },
     {
      "speaker": "大卫",
      "hanzi": "好的，需要我准备什么？",
      "pinyin": "Hǎo de, xūyào wǒ zhǔnbèi shénme?",
      "meaning": {
       "en": "OK, what should I prepare?",
       "fr": "D'accord, que dois-je préparer ?",
       "zh": "好的，需要我准备什么？"
      },
      "audioText": "好的，需要我准备什么？"
     },
     {
      "speaker": "张经理",
      "hanzi": "你先查一下名单，看看谁来。",
      "pinyin": "Nǐ xiān chá yíxià míngdān, kànkan shéi lái.",
      "meaning": {
       "en": "Check the list first to see who's coming.",
       "fr": "Vérifie d'abord la liste pour voir qui vient.",
       "zh": "你先查一下名单，看看谁来。"
      },
      "audioText": "你先查一下名单，看看谁来。"
     },
     {
      "speaker": "大卫",
      "hanzi": "我马上查。",
      "pinyin": "Wǒ mǎshàng chá.",
      "meaning": {
       "en": "I'll check right away.",
       "fr": "Je vérifie tout de suite.",
       "zh": "我马上查。"
      },
      "audioText": "我马上查。"
     }
    ]
   },
   {
    "title": {
     "en": "Can I borrow it?",
     "fr": "Je peux l'emprunter ?",
     "zh": "能借给我吗？"
    },
    "setting": {
     "en": "David's laptop has broken down.",
     "fr": "L'ordinateur portable de David est tombé en panne.",
     "zh": "大卫的笔记本电脑坏了。"
    },
    "lines": [
     {
      "speaker": "大卫",
      "hanzi": "小王，我的电脑坏了，能借给我用一下吗？",
      "pinyin": "Xiǎo Wáng, wǒ de diànnǎo huài le, néng jiè gěi wǒ yòng yíxià ma?",
      "meaning": {
       "en": "Xiao Wang, my computer's broken; could you lend me yours for a bit?",
       "fr": "Xiao Wang, mon ordinateur est en panne, tu peux me prêter le tien un moment ?",
       "zh": "小王，我的电脑坏了，能借给我用一下吗？"
      },
      "audioText": "小王，我的电脑坏了，能借给我用一下吗？"
     },
     {
      "speaker": "小王",
      "hanzi": "可以，用完了还给我，放在桌子上就行。",
      "pinyin": "Kěyǐ, yòng wán le huán gěi wǒ, fàng zài zhuōzi shang jiù xíng.",
      "meaning": {
       "en": "Sure. Give it back when you're done; just leave it on the desk.",
       "fr": "Bien sûr. Rends-le-moi quand tu as fini, pose-le simplement sur le bureau.",
       "zh": "可以，用完了还给我，放在桌子上就行。"
      },
      "audioText": "可以，用完了还给我，放在桌子上就行。"
     },
     {
      "speaker": "大卫",
      "hanzi": "谢谢！我会把文件关好。",
      "pinyin": "Xièxie! Wǒ huì bǎ wénjiàn guān hǎo.",
      "meaning": {
       "en": "Thanks! I'll close my files properly.",
       "fr": "Merci ! Je fermerai bien mes fichiers.",
       "zh": "谢谢！我会把文件关好。"
      },
      "audioText": "谢谢！我会把文件关好。"
     },
     {
      "speaker": "小王",
      "hanzi": "别丢了你的文件，有用的东西要多放一个地方。",
      "pinyin": "Bié diū le nǐ de wénjiàn, yǒuyòng de dōngxi yào duō fàng yí ge dìfang.",
      "meaning": {
       "en": "Don't lose your files; keep copies of useful things in another place.",
       "fr": "Ne perds pas tes fichiers, garde une copie des choses utiles ailleurs.",
       "zh": "别丢了你的文件，有用的东西要多放一个地方。"
      },
      "audioText": "别丢了你的文件，有用的东西要多放一个地方。"
     }
    ]
   },
   {
    "title": {
     "en": "An offer",
     "fr": "Une proposition",
     "zh": "留下来工作"
    },
    "setting": {
     "en": "After the meeting, Mr Zhang talks to David alone.",
     "fr": "Après la réunion, M. Zhang parle seul à seul avec David.",
     "zh": "开完会，张经理和大卫单独谈话。"
    },
    "lines": [
     {
      "speaker": "张经理",
      "hanzi": "大卫，你了解中国文化和历史，外语也好，公司想请你留下来工作。",
      "pinyin": "Dàwèi, nǐ liǎojiě Zhōngguó wénhuà hé lìshǐ, wàiyǔ yě hǎo, gōngsī xiǎng qǐng nǐ liú xiàlai gōngzuò.",
      "meaning": {
       "en": "David, you understand Chinese culture and history and you speak foreign languages; the company would like you to stay and work here.",
       "fr": "David, tu connais la culture et l'histoire chinoises et tu parles des langues étrangères ; l'entreprise aimerait te garder.",
       "zh": "大卫，你了解中国文化和历史，外语也好，公司想请你留下来工作。"
      },
      "audioText": "大卫，你了解中国文化和历史，外语也好，公司想请你留下来工作。"
     },
     {
      "speaker": "大卫",
      "hanzi": "真的吗？我很愿意！但是我要先跟家人说一下。",
      "pinyin": "Zhēn de ma? Wǒ hěn yuànyì! Dànshì wǒ yào xiān gēn jiārén shuō yíxià.",
      "meaning": {
       "en": "Really? I'd love to! But I need to talk to my family first.",
       "fr": "C'est vrai ? Avec plaisir ! Mais je dois d'abord en parler à ma famille.",
       "zh": "真的吗？我很愿意！但是我要先跟家人说一下。"
      },
      "audioText": "真的吗？我很愿意！但是我要先跟家人说一下。"
     },
     {
      "speaker": "张经理",
      "hanzi": "没问题，我们等你的消息。",
      "pinyin": "Méi wèntí, wǒmen děng nǐ de xiāoxi.",
      "meaning": {
       "en": "No problem, we'll wait to hear from you.",
       "fr": "Pas de problème, nous attendons ta réponse.",
       "zh": "没问题，我们等你的消息。"
      },
      "audioText": "没问题，我们等你的消息。"
     }
    ]
   }
  ],
  "story": [
   {
    "hanzi": "我的实习快结束了。今天开会以前，我的电脑坏了，小王把他的电脑借给了我。开完会，张经理说我了解中国文化，外语也好，公司想请我留下来工作。我要先跟妈妈说一下。",
    "pinyin": "Wǒ de shíxí kuài jiéshù le. Jīntiān kāihuì yǐqián, wǒ de diànnǎo huài le, Xiǎo Wáng bǎ tā de diànnǎo jiè gěi le wǒ. Kāi wán huì, Zhāng jīnglǐ shuō wǒ liǎojiě Zhōngguó wénhuà, wàiyǔ yě hǎo, gōngsī xiǎng qǐng wǒ liú xiàlai gōngzuò. Wǒ yào xiān gēn māma shuō yíxià.",
    "translation": {
     "en": "My internship is almost over. Before today's meeting my computer broke, and Xiao Wang lent me his. After the meeting, Mr Zhang said that since I understand Chinese culture and speak foreign languages, the company would like me to stay. I need to talk to Mum first.",
     "fr": "Mon stage touche à sa fin. Avant la réunion d'aujourd'hui, mon ordinateur est tombé en panne, et Xiao Wang m'a prêté le sien. Après la réunion, M. Zhang a dit que, puisque je connais la culture chinoise et parle des langues étrangères, l'entreprise aimerait me garder. Je dois d'abord en parler à maman.",
     "zh": "我的实习快结束了。今天开会以前，我的电脑坏了，小王把他的电脑借给了我。开完会，张经理说我了解中国文化，外语也好，公司想请我留下来工作。我要先跟妈妈说一下。"
    }
   }
  ]
 },
 "lesson-hsk3-26": {
  "scenes": [
   {
    "title": {
     "en": "Mum is back",
     "fr": "Maman est de retour",
     "zh": "妈妈又来了"
    },
    "setting": {
     "en": "December. David's mother is in Beijing again. He shows her around.",
     "fr": "Décembre. La mère de David est de nouveau à Pékin. Il lui fait visiter la ville.",
     "zh": "十二月，大卫的妈妈又来北京了，大卫带她参观。"
    },
    "lines": [
     {
      "speaker": "妈妈",
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
      "speaker": "大卫",
      "hanzi": "我带你去国家图书馆，那里有很多书和报纸。",
      "pinyin": "Wǒ dài nǐ qù Guójiā Túshūguǎn, nàlǐ yǒu hěn duō shū hé bàozhǐ.",
      "meaning": {
       "en": "I'll take you to the National Library; it has lots of books and newspapers.",
       "fr": "Je t'emmène à la Bibliothèque nationale, il y a plein de livres et de journaux.",
       "zh": "我带你去国家图书馆，那里有很多书和报纸。"
      },
      "audioText": "我带你去国家图书馆，那里有很多书和报纸。"
     },
     {
      "speaker": "妈妈",
      "hanzi": "我可以进去吗？",
      "pinyin": "Wǒ kěyǐ jìnqu ma?",
      "meaning": {
       "en": "Can I go in?",
       "fr": "Je peux y entrer ?",
       "zh": "我可以进去吗？"
      },
      "audioText": "我可以进去吗？"
     },
     {
      "speaker": "大卫",
      "hanzi": "可以，那里的服务很好，还有英语服务员。",
      "pinyin": "Kěyǐ, nàlǐ de fúwù hěn hǎo, hái yǒu Yīngyǔ fúwùyuán.",
      "meaning": {
       "en": "Yes, the service is good and there are staff who speak English.",
       "fr": "Oui, le service est très bien et il y a du personnel qui parle anglais.",
       "zh": "可以，那里的服务很好，还有英语服务员。"
      },
      "audioText": "可以，那里的服务很好，还有英语服务员。"
     }
    ]
   },
   {
    "title": {
     "en": "The news",
     "fr": "La nouvelle",
     "zh": "好消息"
    },
    "setting": {
     "en": "In a café, David tells his mother about the job offer.",
     "fr": "Dans un café, David parle à sa mère de l'offre d'emploi.",
     "zh": "在咖啡馆，大卫告诉妈妈公司的事。"
    },
    "lines": [
     {
      "speaker": "大卫",
      "hanzi": "妈妈，公司想请我留在北京工作。",
      "pinyin": "Māma, gōngsī xiǎng qǐng wǒ liú zài Běijīng gōngzuò.",
      "meaning": {
       "en": "Mum, the company wants me to stay and work in Beijing.",
       "fr": "Maman, l'entreprise veut que je reste travailler à Pékin.",
       "zh": "妈妈，公司想请我留在北京工作。"
      },
      "audioText": "妈妈，公司想请我留在北京工作。"
     },
     {
      "speaker": "妈妈",
      "hanzi": "这是一个很好的机会，你自己想留下来吗？",
      "pinyin": "Zhè shì yí ge hěn hǎo de jīhuì, nǐ zìjǐ xiǎng liú xiàlai ma?",
      "meaning": {
       "en": "That's a great opportunity. Do you want to stay?",
       "fr": "C'est une belle occasion. Toi, tu veux rester ?",
       "zh": "这是一个很好的机会，你自己想留下来吗？"
      },
      "audioText": "这是一个很好的机会，你自己想留下来吗？"
     },
     {
      "speaker": "大卫",
      "hanzi": "想，这里有我的朋友，有我喜欢的工作。",
      "pinyin": "Xiǎng, zhèlǐ yǒu wǒ de péngyou, yǒu wǒ xǐhuan de gōngzuò.",
      "meaning": {
       "en": "Yes, my friends are here, and a job I like.",
       "fr": "Oui, mes amis sont ici, et un travail qui me plaît.",
       "zh": "想，这里有我的朋友，有我喜欢的工作。"
      },
      "audioText": "想，这里有我的朋友，有我喜欢的工作。"
     },
     {
      "speaker": "妈妈",
      "hanzi": "那我同意。我会常常来看你的！",
      "pinyin": "Nà wǒ tóngyì. Wǒ huì chángcháng lái kàn nǐ de!",
      "meaning": {
       "en": "Then I agree. I'll come and see you often!",
       "fr": "Alors je suis d'accord. Je viendrai te voir souvent !",
       "zh": "那我同意。我会常常来看你的！"
      },
      "audioText": "那我同意。我会常常来看你的！"
     }
    ]
   },
   {
    "title": {
     "en": "A story to tell",
     "fr": "Une histoire à raconter",
     "zh": "讲故事"
    },
    "setting": {
     "en": "At the New Year party, David gives a short speech.",
     "fr": "À la soirée du Nouvel An, David fait un petit discours.",
     "zh": "在新年晚会上，大卫讲了一个故事。"
    },
    "lines": [
     {
      "speaker": "大卫",
      "hanzi": "三年以前，我只会说“你好”和“谢谢”。",
      "pinyin": "Sān nián yǐqián, wǒ zhǐ huì shuō \"nǐ hǎo\" hé \"xièxie\".",
      "meaning": {
       "en": "Three years ago, I could only say “hello” and “thank you”.",
       "fr": "Il y a trois ans, je ne savais dire que « bonjour » et « merci ».",
       "zh": "三年以前，我只会说“你好”和“谢谢”。"
      },
      "audioText": "三年以前，我只会说“你好”和“谢谢”。"
     },
     {
      "speaker": "大卫",
      "hanzi": "后来我认识了王老师、小明、安娜和玛丽。",
      "pinyin": "Hòulái wǒ rènshi le Wáng lǎoshī, Xiǎomíng, Ānnà hé Mǎlì.",
      "meaning": {
       "en": "Then I met Mr Wang, Xiaoming, Anna and Mary.",
       "fr": "Puis j'ai rencontré le professeur Wang, Xiaoming, Anna et Mary.",
       "zh": "后来我认识了王老师、小明、安娜和玛丽。"
      },
      "audioText": "后来我认识了王老师、小明、安娜和玛丽。"
     },
     {
      "speaker": "大卫",
      "hanzi": "现在，我在北京有工作，也有了第二个家。谢谢大家！",
      "pinyin": "Xiànzài, wǒ zài Běijīng yǒu gōngzuò, yě yǒu le dì èr ge jiā. Xièxie dàjiā!",
      "meaning": {
       "en": "Now I have a job in Beijing, and a second home. Thank you, everyone!",
       "fr": "Aujourd'hui, j'ai un travail à Pékin, et une deuxième maison. Merci à tous !",
       "zh": "现在，我在北京有工作，也有了第二个家。谢谢大家！"
      },
      "audioText": "现在，我在北京有工作，也有了第二个家。谢谢大家！"
     }
    ]
   }
  ],
  "story": [
   {
    "hanzi": "三年前，我第一次来北京，只会说“你好”。在这里，我遇到了好老师和好朋友，学会了汉语，了解了中国文化。现在公司请我留下来工作，妈妈也同意了。我的中文故事还没有结束。",
    "pinyin": "Sān nián qián, wǒ dì yī cì lái Běijīng, zhǐ huì shuō \"nǐ hǎo\". Zài zhèlǐ, wǒ yùdào le hǎo lǎoshī hé hǎo péngyou, xuéhuì le Hànyǔ, liǎojiě le Zhōngguó wénhuà. Xiànzài gōngsī qǐng wǒ liú xiàlai gōngzuò, māma yě tóngyì le. Wǒ de Zhōngwén gùshi hái méiyǒu jiéshù.",
    "translation": {
     "en": "Three years ago I came to Beijing for the first time and could only say “hello”. Here I met a good teacher and good friends, learned Chinese and came to understand Chinese culture. Now the company has asked me to stay, and Mum agrees. My Chinese story isn't over yet.",
     "fr": "Il y a trois ans, je suis venu à Pékin pour la première fois, et je ne savais dire que « bonjour ». Ici, j'ai rencontré un bon professeur et de bons amis, j'ai appris le chinois et découvert la culture chinoise. Aujourd'hui, l'entreprise me propose de rester, et maman est d'accord. Mon histoire chinoise n'est pas encore finie.",
     "zh": "三年前，我第一次来北京，只会说“你好”。在这里，我遇到了好老师和好朋友，学会了汉语，了解了中国文化。现在公司请我留下来工作，妈妈也同意了。我的中文故事还没有结束。"
    }
   }
  ]
 }
};
