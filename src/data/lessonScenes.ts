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
      "pinyin": "Dàwèi, nǐ zuìjìn guò de zěnmeyàng?",
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
 }
};
