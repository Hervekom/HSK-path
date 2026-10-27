// HSK 1 course structure: lesson order, pronunciation, characters, culture and a speaking task per lesson.
// Organised like a classic beginner course (pronunciation first, then strokes, stroke order and radicals); wording is HSK Path's own.
import type { HskLessonExtras } from '../types';

export const HSK1_ORDER: string[] = ["lesson-hsk1-01", "lesson-hsk1-21", "lesson-hsk1-06", "lesson-hsk1-22", "lesson-hsk1-03", "lesson-hsk1-04", "lesson-hsk1-05", "lesson-hsk1-23", "lesson-hsk1-13", "lesson-hsk1-08", "lesson-hsk1-10", "lesson-hsk1-11", "lesson-hsk1-07", "lesson-hsk1-15", "lesson-hsk1-20", "lesson-hsk1-02", "lesson-hsk1-09", "lesson-hsk1-17", "lesson-hsk1-14", "lesson-hsk1-19", "lesson-hsk1-18", "lesson-hsk1-12", "lesson-hsk1-16"];

export const HSK1_EXTRAS: Record<string, HskLessonExtras> = {
  "lesson-hsk1-01": {
    "pronunciation": {
      "title": {
        "en": "The four tones",
        "fr": "Les quatre tons",
        "zh": "四个声调"
      },
      "explanation": {
        "en": "Every syllable has a tone: 1st high and flat (mā), 2nd rising (má), 3rd low, dipping (mǎ), 4th falling (mà). Two 3rd tones in a row: the first one rises, so 你好 is said ní hǎo.",
        "fr": "Chaque syllabe porte un ton : 1er haut et plat (mā), 2e montant (má), 3e bas et creusé (mǎ), 4e descendant (mà). Deux 3e tons de suite : le premier devient montant, donc 你好 se dit ní hǎo.",
        "zh": "每个音节都有声调：一声高而平（mā），二声上升（má），三声低而曲折（mǎ），四声下降（mà）。两个三声相连，前一个读成二声：你好读作 ní hǎo。"
      },
      "examples": [
        {
          "hanzi": "妈",
          "pinyin": "mā"
        },
        {
          "hanzi": "你好",
          "pinyin": "nǐ hǎo"
        },
        {
          "hanzi": "再见",
          "pinyin": "zàijiàn"
        },
        {
          "hanzi": "谢谢",
          "pinyin": "xièxie"
        }
      ]
    },
    "characters": {
      "title": {
        "en": "Basic strokes",
        "fr": "Les traits de base",
        "zh": "基本笔画"
      },
      "explanation": {
        "en": "Characters are built from a few strokes: horizontal 一, vertical 丨, left-falling 丿, dot 丶 and right-falling ㇏. Learn to recognise them first.",
        "fr": "Les caractères sont faits de quelques traits : horizontal 一, vertical 丨, oblique à gauche 丿, point 丶 et oblique à droite ㇏. Apprenez d'abord à les reconnaître.",
        "zh": "汉字由几种基本笔画组成：横（一）、竖（丨）、撇（丿）、点（丶）、捺（㇏）。先学会认识它们。"
      },
      "components": [
        {
          "component": "一",
          "meaning": {
            "en": "horizontal",
            "fr": "horizontal"
          },
          "examples": [
            "一",
            "二",
            "三"
          ]
        },
        {
          "component": "丨",
          "meaning": {
            "en": "vertical",
            "fr": "vertical"
          },
          "examples": [
            "十",
            "中"
          ]
        },
        {
          "component": "丿",
          "meaning": {
            "en": "left-falling",
            "fr": "oblique gauche"
          },
          "examples": [
            "人",
            "八"
          ]
        }
      ]
    },
    "practice": {
      "task": {
        "en": "Greet Laoshi, thank him and say goodbye.",
        "fr": "Salue Laoshi, remercie-le et dis-lui au revoir.",
        "zh": "跟老师打招呼，说谢谢，再说再见。"
      },
      "starter": "你好！谢谢！"
    }
  },
  "lesson-hsk1-21": {
    "pronunciation": {
      "title": {
        "en": "Initials zh, ch, sh, r and z, c, s",
        "fr": "Les initiales zh, ch, sh, r et z, c, s",
        "zh": "声母 zh、ch、sh、r 和 z、c、s"
      },
      "explanation": {
        "en": "zh, ch, sh, r are said with the tongue curled back (叫 is j, but 知道 starts with zh). z, c, s are flat, with the tongue behind the teeth: 再见 zàijiàn.",
        "fr": "zh, ch, sh, r se prononcent langue recourbée vers l'arrière (知道 commence par zh). z, c, s sont plats, langue derrière les dents : 再见 zàijiàn.",
        "zh": "zh、ch、sh、r 发音时舌尖上翘（“知道”的 zh）；z、c、s 发音时舌尖抵住上齿背（“再见”的 z）。"
      },
      "examples": [
        {
          "hanzi": "知道",
          "pinyin": "zhīdào"
        },
        {
          "hanzi": "认识",
          "pinyin": "rènshi"
        },
        {
          "hanzi": "名字",
          "pinyin": "míngzi"
        },
        {
          "hanzi": "再见",
          "pinyin": "zàijiàn"
        }
      ]
    },
    "characters": {
      "title": {
        "en": "Stroke order (1)",
        "fr": "L'ordre des traits (1)",
        "zh": "笔顺（一）"
      },
      "explanation": {
        "en": "Horizontal before vertical (十), left-falling before right-falling (人, 八).",
        "fr": "L'horizontal avant le vertical (十), l'oblique gauche avant l'oblique droite (人, 八).",
        "zh": "先横后竖（十），先撇后捺（人、八）。"
      },
      "components": [
        {
          "component": "十",
          "meaning": {
            "en": "ten",
            "fr": "dix"
          },
          "examples": [
            "十"
          ]
        },
        {
          "component": "人",
          "meaning": {
            "en": "person",
            "fr": "personne"
          },
          "examples": [
            "人",
            "认"
          ]
        },
        {
          "component": "八",
          "meaning": {
            "en": "eight",
            "fr": "huit"
          },
          "examples": [
            "八"
          ]
        }
      ]
    },
    "practice": {
      "task": {
        "en": "Introduce yourself to Laoshi and ask his name.",
        "fr": "Présente-toi à Laoshi et demande-lui son nom.",
        "zh": "向老师介绍自己，问他叫什么名字。"
      },
      "starter": "你好！我叫……，请问你叫什么名字？"
    }
  },
  "lesson-hsk1-06": {
    "pronunciation": {
      "title": {
        "en": "The neutral tone",
        "fr": "Le ton neutre",
        "zh": "轻声"
      },
      "explanation": {
        "en": "Some syllables are short and light, with no tone mark: the plural 们 (wǒmen), the second syllable of 朋友 (péngyou) or of 谢谢 (xièxie).",
        "fr": "Certaines syllabes sont brèves et légères, sans marque de ton : le pluriel 们 (wǒmen), la seconde syllabe de 朋友 (péngyou) ou de 谢谢 (xièxie).",
        "zh": "有些音节读得又短又轻，不标声调，叫轻声，如“我们”的“们”、“朋友”的“友”。"
      },
      "examples": [
        {
          "hanzi": "我们",
          "pinyin": "wǒmen"
        },
        {
          "hanzi": "朋友",
          "pinyin": "péngyou"
        },
        {
          "hanzi": "他们",
          "pinyin": "tāmen"
        },
        {
          "hanzi": "谢谢",
          "pinyin": "xièxie"
        }
      ]
    },
    "characters": {
      "title": {
        "en": "Stroke order (2)",
        "fr": "L'ordre des traits (2)",
        "zh": "笔顺（二）"
      },
      "explanation": {
        "en": "From top to bottom (三), from left to right (你, 们).",
        "fr": "De haut en bas (三), de gauche à droite (你, 们).",
        "zh": "从上到下（三），从左到右（你、们）。"
      },
      "components": [
        {
          "component": "三",
          "meaning": {
            "en": "three",
            "fr": "trois"
          },
          "examples": [
            "三"
          ]
        },
        {
          "component": "亻",
          "meaning": {
            "en": "person (side form)",
            "fr": "personne (forme latérale)"
          },
          "examples": [
            "你",
            "他",
            "们"
          ]
        }
      ]
    },
    "practice": {
      "task": {
        "en": "Tell Laoshi who your best friend is.",
        "fr": "Dis à Laoshi qui est ton meilleur ami.",
        "zh": "告诉老师你的好朋友是谁。"
      },
      "starter": "我的朋友叫……，他是我同学。"
    }
  },
  "lesson-hsk1-22": {
    "pronunciation": {
      "title": {
        "en": "The tone change of 不",
        "fr": "Le changement de ton de 不",
        "zh": "“不”的变调"
      },
      "explanation": {
        "en": "不 is bù, but before a 4th tone it becomes bú: 不是 bú shì, 不要 búyào. Before other tones it stays bù: 不好 bù hǎo.",
        "fr": "不 se dit bù, mais devant un 4e ton il devient bú : 不是 bú shì, 不要 búyào. Devant les autres tons, il reste bù : 不好 bù hǎo.",
        "zh": "“不”本调是 bù，在四声前变成 bú：不是、不要；在其他声调前不变：不好。"
      },
      "examples": [
        {
          "hanzi": "不是",
          "pinyin": "bú shì"
        },
        {
          "hanzi": "不要",
          "pinyin": "búyào"
        },
        {
          "hanzi": "不好",
          "pinyin": "bù hǎo"
        },
        {
          "hanzi": "不来",
          "pinyin": "bù lái"
        }
      ]
    },
    "characters": {
      "title": {
        "en": "Stroke order (3)",
        "fr": "L'ordre des traits (3)",
        "zh": "笔顺（三）"
      },
      "explanation": {
        "en": "Outside before inside, close the box last (口, 国); middle before the sides (小, 水).",
        "fr": "L'extérieur avant l'intérieur, et on ferme la boîte en dernier (口, 国) ; le milieu avant les côtés (小, 水).",
        "zh": "先外后内再封口（口、国），先中间后两边（小、水）。"
      },
      "components": [
        {
          "component": "口",
          "meaning": {
            "en": "mouth",
            "fr": "bouche"
          },
          "examples": [
            "吗",
            "呢",
            "吧"
          ]
        },
        {
          "component": "小",
          "meaning": {
            "en": "small",
            "fr": "petit"
          },
          "examples": [
            "小"
          ]
        }
      ]
    },
    "practice": {
      "task": {
        "en": "Ask Laoshi three yes/no questions with 吗, then answer his with 呢.",
        "fr": "Pose à Laoshi trois questions avec 吗, puis réponds aux siennes avec 呢.",
        "zh": "用“吗”问老师三个问题，再用“呢”反问他。"
      },
      "starter": "你是老师吗？你有中国朋友吗？"
    }
  },
  "lesson-hsk1-03": {
    "pronunciation": {
      "title": {
        "en": "j, q, x and the ü sound",
        "fr": "j, q, x et le son ü",
        "zh": "j、q、x 和 ü"
      },
      "explanation": {
        "en": "j, q, x are only followed by i or ü, and the dots of ü are dropped: 去 is qù but sounds like q + ü. Round your lips as for French « u ».",
        "fr": "j, q, x ne sont suivis que de i ou ü, et on n'écrit pas les points de ü : 去 s'écrit qù mais se prononce q + ü, lèvres arrondies comme pour le « u » français.",
        "zh": "j、q、x 只跟 i、ü 相拼，ü 上的两点省略：“去”写作 qù，读 q+ü。"
      },
      "examples": [
        {
          "hanzi": "家",
          "pinyin": "jiā"
        },
        {
          "hanzi": "去",
          "pinyin": "qù"
        },
        {
          "hanzi": "谢谢",
          "pinyin": "xièxie"
        },
        {
          "hanzi": "女",
          "pinyin": "nǚ"
        }
      ]
    },
    "characters": {
      "title": {
        "en": "Single and compound characters",
        "fr": "Caractères simples et composés",
        "zh": "独体字和合体字"
      },
      "explanation": {
        "en": "Some characters are one block (女, 子, 马); most combine two or more parts: 好 = 女 + 子, 妈 = 女 + 马.",
        "fr": "Certains caractères forment un seul bloc (女, 子, 马) ; la plupart en combinent plusieurs : 好 = 女 + 子, 妈 = 女 + 马.",
        "zh": "有的汉字是独体字（女、子、马），多数是合体字：好＝女＋子，妈＝女＋马。"
      },
      "components": [
        {
          "component": "女",
          "meaning": {
            "en": "woman",
            "fr": "femme"
          },
          "examples": [
            "妈",
            "好",
            "她"
          ]
        },
        {
          "component": "子",
          "meaning": {
            "en": "child",
            "fr": "enfant"
          },
          "examples": [
            "字",
            "好"
          ]
        }
      ]
    },
    "practice": {
      "task": {
        "en": "Tell Laoshi about your parents and your nationality.",
        "fr": "Parle à Laoshi de tes parents et de ta nationalité.",
        "zh": "跟老师说说你的爸爸妈妈和你是哪国人。"
      },
      "starter": "我是……人。我爸爸是……"
    },
    "culture": {
      "title": {
        "en": "Chinese names",
        "fr": "Les noms chinois",
        "zh": "中国人的姓名"
      },
      "body": {
        "en": "The family name comes first: in 王小明, Wang is the surname. Among friends people say 小王 (young Wang) or 老王 (old Wang); teachers are called surname + 老师, e.g. 王老师.",
        "fr": "Le nom de famille vient en premier : dans 王小明, Wang est le nom. Entre amis, on dit 小王 (le jeune Wang) ou 老王 (le vieux Wang) ; on appelle un professeur par son nom + 老师, par exemple 王老师.",
        "zh": "中国人的姓在前，名在后，如“王小明”姓王。朋友之间常说“小王、老王”，称呼老师常用“姓＋老师”，如“王老师”。"
      }
    }
  },
  "lesson-hsk1-04": {
    "pronunciation": {
      "title": {
        "en": "The tone changes of 一",
        "fr": "Les changements de ton de 一",
        "zh": "“一”的变调"
      },
      "explanation": {
        "en": "Alone, in counting or in dates 一 is yī (一, 十一, 一月). Before a 4th tone it becomes yí (一个 yí ge); before tones 1, 2 and 3 it becomes yì (一千 yìqiān).",
        "fr": "Seul, pour compter ou dans une date, 一 se dit yī (一, 十一, 一月). Devant un 4e ton il devient yí (一个 yí ge) ; devant les tons 1, 2 et 3, il devient yì (一千 yìqiān).",
        "zh": "“一”单念、数数或在日期中读 yī；在四声前读 yí（一个）；在一、二、三声前读 yì（一千）。"
      },
      "examples": [
        {
          "hanzi": "十一",
          "pinyin": "shíyī"
        },
        {
          "hanzi": "一个",
          "pinyin": "yí ge"
        },
        {
          "hanzi": "一千",
          "pinyin": "yìqiān"
        },
        {
          "hanzi": "一半",
          "pinyin": "yíbàn"
        }
      ]
    },
    "characters": {
      "title": {
        "en": "Number characters",
        "fr": "Les caractères des nombres",
        "zh": "数字汉字"
      },
      "explanation": {
        "en": "The first numbers are easy to write: 一 二 三 are one, two, three strokes. 十 is a cross; 百 (hundred) and 千 (thousand) build bigger numbers: 三百, 两千.",
        "fr": "Les premiers nombres s'écrivent facilement : 一 二 三 ont un, deux, trois traits. 十 est une croix ; 百 (cent) et 千 (mille) servent pour les grands nombres : 三百, 两千.",
        "zh": "一、二、三分别是一、二、三画。“十”是一横一竖。“百、千”用来表示大的数字：三百、两千。"
      },
      "components": [
        {
          "component": "十",
          "meaning": {
            "en": "ten",
            "fr": "dix"
          },
          "examples": [
            "十",
            "千"
          ]
        },
        {
          "component": "八",
          "meaning": {
            "en": "eight",
            "fr": "huit"
          },
          "examples": [
            "八",
            "六"
          ]
        }
      ]
    },
    "practice": {
      "task": {
        "en": "Tell Laoshi your phone number and how many students are in your class.",
        "fr": "Donne à Laoshi ton numéro de téléphone et le nombre d'élèves de ta classe.",
        "zh": "告诉老师你的手机号码和你们班有多少学生。"
      },
      "starter": "我们班有……个学生。"
    },
    "culture": {
      "title": {
        "en": "Numbers on your fingers",
        "fr": "Compter sur ses doigts",
        "zh": "用手表示数字"
      },
      "body": {
        "en": "In China you can show 1 to 10 with one hand: 6 is the thumb and little finger, 8 the thumb and index, 10 a fist or crossed index fingers. 8 (bā) sounds like 发, “to prosper”, so it is lucky; 4 (sì) sounds like 死, “death”, and is often avoided.",
        "fr": "En Chine, on montre de 1 à 10 avec une seule main : 6 c'est le pouce et l'auriculaire, 8 le pouce et l'index, 10 le poing fermé ou les index croisés. 8 (bā) ressemble à 发 « prospérer » : il porte chance ; 4 (sì) ressemble à 死 « mort » : on l'évite souvent.",
        "zh": "在中国，一只手就能表示一到十：六是大拇指和小拇指，八是大拇指和食指，十是握拳或两个食指交叉。“八”和“发”音近，是吉利数字；“四”和“死”音近，人们常常不喜欢。"
      }
    }
  },
  "lesson-hsk1-05": {
    "pronunciation": {
      "title": {
        "en": "Front n and back ng",
        "fr": "Le n avant et le ng arrière",
        "zh": "前鼻音 n 和后鼻音 ng"
      },
      "explanation": {
        "en": "-n is short, with the tongue touching behind the teeth (人 rén, 先 xiān); -ng resonates at the back, like « ng » in English “song” (生 shēng, 王 wáng).",
        "fr": "-n est bref, langue contre les dents (人 rén, 先 xiān) ; -ng résonne au fond de la gorge, comme dans l'anglais « song » (生 shēng, 王 wáng).",
        "zh": "-n 发音时舌尖抵住上齿龈（人、先）；-ng 发音时舌根后缩，声音从后面出来（生、王）。"
      },
      "examples": [
        {
          "hanzi": "家人",
          "pinyin": "jiārén"
        },
        {
          "hanzi": "先生",
          "pinyin": "xiānsheng"
        },
        {
          "hanzi": "男",
          "pinyin": "nán"
        },
        {
          "hanzi": "儿子",
          "pinyin": "érzi"
        }
      ]
    },
    "characters": {
      "title": {
        "en": "The woman radical 女",
        "fr": "La clé de la femme 女",
        "zh": "偏旁“女”"
      },
      "explanation": {
        "en": "女 on the left of a character often points to women or family: 妈 (mum), 姐 (older sister), 妹 (younger sister), 她 (she).",
        "fr": "女 à gauche d'un caractère indique souvent une femme ou la famille : 妈 (maman), 姐 (grande sœur), 妹 (petite sœur), 她 (elle).",
        "zh": "“女”字旁的字常和女性或家人有关：妈、姐、妹、她。"
      },
      "components": [
        {
          "component": "女",
          "meaning": {
            "en": "woman",
            "fr": "femme"
          },
          "examples": [
            "姐",
            "妹",
            "她"
          ]
        },
        {
          "component": "子",
          "meaning": {
            "en": "child",
            "fr": "enfant"
          },
          "examples": [
            "孩",
            "字"
          ]
        }
      ]
    },
    "practice": {
      "task": {
        "en": "Describe your family to Laoshi: how many people, who they are.",
        "fr": "Décris ta famille à Laoshi : combien vous êtes et qui.",
        "zh": "跟老师介绍你家有几口人，都有谁。"
      },
      "starter": "我家有……口人：爸爸、妈妈和我。"
    },
    "culture": {
      "title": {
        "en": "Older or younger?",
        "fr": "Aîné ou cadet ?",
        "zh": "哥哥还是弟弟？"
      },
      "body": {
        "en": "Chinese has no single word for “brother” or “sister”: you must say whether they are older (哥哥, 姐姐) or younger (弟弟, 妹妹). Children call adult friends of the family 叔叔 (uncle) and 阿姨 (auntie).",
        "fr": "Le chinois n'a pas de mot unique pour « frère » ou « sœur » : il faut préciser s'il est aîné (哥哥, 姐姐) ou cadet (弟弟, 妹妹). Les enfants appellent les adultes proches 叔叔 (tonton) et 阿姨 (tata).",
        "zh": "汉语里“兄弟姐妹”要分大小：哥哥、姐姐、弟弟、妹妹。孩子常把父母的朋友叫“叔叔、阿姨”。"
      }
    }
  },
  "lesson-hsk1-23": {
    "pronunciation": {
      "title": {
        "en": "Erhua: the -r ending",
        "fr": "L'erhua : la finale -r",
        "zh": "儿化"
      },
      "explanation": {
        "en": "In northern Chinese, 儿 often merges with the syllable before it as an -r: 一点儿 yìdiǎnr, 哪儿 nǎr. Don't say it as a separate syllable.",
        "fr": "Dans le chinois du nord, 儿 se fond souvent dans la syllabe précédente en un -r : 一点儿 yìdiǎnr, 哪儿 nǎr. On ne le prononce pas comme une syllabe à part.",
        "zh": "北方话里，“儿”常和前一个音节合成一个卷舌音节：一点儿 yìdiǎnr、哪儿 nǎr。"
      },
      "examples": [
        {
          "hanzi": "一点儿",
          "pinyin": "yìdiǎnr"
        },
        {
          "hanzi": "有点儿",
          "pinyin": "yǒudiǎnr"
        },
        {
          "hanzi": "哪儿",
          "pinyin": "nǎr"
        },
        {
          "hanzi": "玩儿",
          "pinyin": "wánr"
        }
      ]
    },
    "characters": {
      "title": {
        "en": "The mouth radical 口",
        "fr": "La clé de la bouche 口",
        "zh": "偏旁“口”"
      },
      "explanation": {
        "en": "口 on the left often relates to the mouth or speaking: 吃 (eat), 喝 (drink), 叫 (to be called), and the particles 吗, 呢, 吧.",
        "fr": "口 à gauche est souvent lié à la bouche ou à la parole : 吃 (manger), 喝 (boire), 叫 (s'appeler) et les particules 吗, 呢, 吧.",
        "zh": "“口”字旁的字多和嘴、说话有关：吃、喝、叫，还有“吗、呢、吧”。"
      },
      "components": [
        {
          "component": "口",
          "meaning": {
            "en": "mouth",
            "fr": "bouche"
          },
          "examples": [
            "吃",
            "喝",
            "叫"
          ]
        }
      ]
    },
    "practice": {
      "task": {
        "en": "Ask Laoshi how old he is and answer his questions about your age.",
        "fr": "Demande son âge à Laoshi et réponds à ses questions sur le tien.",
        "zh": "问老师多大了，再回答他的问题。"
      },
      "starter": "老师，您今年多大？我今年……岁。"
    },
    "culture": {
      "title": {
        "en": "Asking someone's age",
        "fr": "Demander l'âge de quelqu'un",
        "zh": "怎么问年龄"
      },
      "body": {
        "en": "Chinese adapts the question to the person: 你几岁？ for a young child, 你多大？ for someone your age, and 您多大年纪？ for an older person. Some people also ask your zodiac animal: 你属什么？",
        "fr": "En chinois, la question dépend de la personne : 你几岁？ pour un jeune enfant, 你多大？ pour quelqu'un de son âge, et 您多大年纪？ pour une personne âgée. On demande parfois aussi le signe du zodiaque : 你属什么？",
        "zh": "问年龄要看对象：问小孩子说“你几岁？”，问同龄人说“你多大？”，问老人说“您多大年纪？”。有时也问“你属什么？”。"
      }
    }
  },
  "lesson-hsk1-13": {
    "pronunciation": {
      "title": {
        "en": "Aspirated or not: b/p, d/t, g/k",
        "fr": "Aspiré ou non : b/p, d/t, g/k",
        "zh": "送气和不送气"
      },
      "explanation": {
        "en": "p, t, k, q, ch, c come with a puff of air; b, d, g, j, zh, z don't. Hold a sheet of paper in front of your mouth: it should move for 怕 pà but not for 爸 bà.",
        "fr": "p, t, k, q, ch, c s'accompagnent d'un souffle ; b, d, g, j, zh, z non. Tenez une feuille devant la bouche : elle doit bouger pour 怕 pà, pas pour 爸 bà.",
        "zh": "p、t、k、q、ch、c 是送气音，b、d、g、j、zh、z 不送气。拿一张纸放在嘴前，读“怕”纸会动，读“爸”不动。"
      },
      "examples": [
        {
          "hanzi": "读书",
          "pinyin": "dúshū"
        },
        {
          "hanzi": "汉字",
          "pinyin": "Hànzì"
        },
        {
          "hanzi": "听",
          "pinyin": "tīng"
        },
        {
          "hanzi": "问题",
          "pinyin": "wèntí"
        }
      ]
    },
    "characters": {
      "title": {
        "en": "The speech radical 讠",
        "fr": "La clé de la parole 讠",
        "zh": "偏旁“讠”"
      },
      "explanation": {
        "en": "讠 comes from 言 (words) and appears in characters about speech: 说 (speak), 语 (language), 读 (read), 请 (please), 谁 (who).",
        "fr": "讠 vient de 言 (la parole) et se retrouve dans les caractères liés au langage : 说 (parler), 语 (langue), 读 (lire), 请 (s'il vous plaît), 谁 (qui).",
        "zh": "“讠”来自“言”，多和说话有关：说、语、读、请、谁。"
      },
      "components": [
        {
          "component": "讠",
          "meaning": {
            "en": "speech",
            "fr": "parole"
          },
          "examples": [
            "说",
            "语",
            "读"
          ]
        },
        {
          "component": "氵",
          "meaning": {
            "en": "water",
            "fr": "eau"
          },
          "examples": [
            "汉",
            "没"
          ]
        }
      ]
    },
    "practice": {
      "task": {
        "en": "Ask Laoshi how to read and write a character you don't know.",
        "fr": "Demande à Laoshi comment se lit et s'écrit un caractère que tu ne connais pas.",
        "zh": "问老师一个字怎么读、怎么写。"
      },
      "starter": "老师，这个字怎么读？"
    }
  },
  "lesson-hsk1-08": {
    "pronunciation": {
      "title": {
        "en": "Tone pairs (1): 1st tone + any tone",
        "fr": "Paires de tons (1) : 1er ton + autre ton",
        "zh": "双音节声调（一）：一声开头"
      },
      "explanation": {
        "en": "Keep the 1st tone high and level, then move to the next tone: 今天 (1-1), 星期 (1-1), 中国 (1-2), 分钟 (1-1).",
        "fr": "Gardez le 1er ton haut et plat, puis enchaînez sur le ton suivant : 今天 (1-1), 星期 (1-1), 中国 (1-2), 分钟 (1-1).",
        "zh": "一声要读得又高又平，再接后面的声调：今天、星期、中国、分钟。"
      },
      "examples": [
        {
          "hanzi": "今天",
          "pinyin": "jīntiān"
        },
        {
          "hanzi": "星期",
          "pinyin": "xīngqī"
        },
        {
          "hanzi": "中国",
          "pinyin": "Zhōngguó"
        },
        {
          "hanzi": "时间",
          "pinyin": "shíjiān"
        }
      ]
    },
    "characters": {
      "title": {
        "en": "The sun radical 日",
        "fr": "La clé du soleil 日",
        "zh": "偏旁“日”"
      },
      "explanation": {
        "en": "日 (sun, day) appears in many time words: 明 (bright, next), 时 (time), 星 (star), 早 (early), 昨 (yesterday), 晚 (evening).",
        "fr": "日 (soleil, jour) apparaît dans beaucoup de mots de temps : 明 (clair, prochain), 时 (temps), 星 (étoile), 早 (tôt), 昨 (hier), 晚 (soir).",
        "zh": "“日”表示太阳、天，很多和时间有关的字都有它：明、时、星、早、昨、晚。"
      },
      "components": [
        {
          "component": "日",
          "meaning": {
            "en": "sun, day",
            "fr": "soleil, jour"
          },
          "examples": [
            "明",
            "时",
            "星"
          ]
        },
        {
          "component": "月",
          "meaning": {
            "en": "moon, month",
            "fr": "lune, mois"
          },
          "examples": [
            "有",
            "期"
          ]
        }
      ]
    },
    "practice": {
      "task": {
        "en": "Tell Laoshi the date of your birthday and ask about his.",
        "fr": "Dis à Laoshi la date de ton anniversaire et demande la sienne.",
        "zh": "告诉老师你的生日是几月几号，也问问他。"
      },
      "starter": "我的生日是……月……号。你的呢？"
    }
  },
  "lesson-hsk1-10": {
    "pronunciation": {
      "title": {
        "en": "Tone pairs (2): 2nd tone + any tone",
        "fr": "Paires de tons (2) : 2e ton + autre ton",
        "zh": "双音节声调（二）：二声开头"
      },
      "explanation": {
        "en": "Start the 2nd tone in the middle and rise clearly: 苹果 (2-3) rises, then dips. Compare with 米饭 (3-4) and 鸡蛋 (1-4).",
        "fr": "Partez du milieu et montez nettement pour le 2e ton : 苹果 (2-3) monte puis creuse. Comparez avec 米饭 (3-4) et 鸡蛋 (1-4).",
        "zh": "二声从中间往上升：苹果（二声＋三声）。可以和米饭、鸡蛋比较着读。"
      },
      "examples": [
        {
          "hanzi": "苹果",
          "pinyin": "píngguǒ"
        },
        {
          "hanzi": "包子",
          "pinyin": "bāozi"
        },
        {
          "hanzi": "米饭",
          "pinyin": "mǐfàn"
        },
        {
          "hanzi": "鸡蛋",
          "pinyin": "jīdàn"
        }
      ]
    },
    "characters": {
      "title": {
        "en": "The food radical 饣 and the grass radical 艹",
        "fr": "La clé de la nourriture 饣 et la clé de l'herbe 艹",
        "zh": "偏旁“饣”和“艹”"
      },
      "explanation": {
        "en": "饣 (food) is in 饭 (rice, meal) and 饺 (dumpling); 艹 (grass, plants) sits on top of 菜 (vegetables, dish), 茶 (tea) and 苹 (apple).",
        "fr": "饣 (nourriture) se trouve dans 饭 (riz, repas) et 饺 (ravioli) ; 艹 (herbe, plantes) coiffe 菜 (légume, plat), 茶 (thé) et 苹 (pomme).",
        "zh": "“饣”和吃有关：饭、饺；“艹”和植物有关：菜、茶、苹。"
      },
      "components": [
        {
          "component": "饣",
          "meaning": {
            "en": "food",
            "fr": "nourriture"
          },
          "examples": [
            "饭",
            "饺"
          ]
        },
        {
          "component": "艹",
          "meaning": {
            "en": "grass, plant",
            "fr": "herbe, plante"
          },
          "examples": [
            "菜",
            "茶",
            "苹"
          ]
        }
      ]
    },
    "practice": {
      "task": {
        "en": "Order a meal from Laoshi as if he were a waiter.",
        "fr": "Commande un repas à Laoshi comme s'il était serveur.",
        "zh": "把老师当服务员，用汉语点菜。"
      },
      "starter": "你好，我想吃饺子，还想喝茶。"
    },
    "culture": {
      "title": {
        "en": "At the table",
        "fr": "À table",
        "zh": "饭桌上"
      },
      "body": {
        "en": "Dishes are shared in the middle of the table and everyone takes a little with their chopsticks. Don't stick chopsticks upright in a bowl of rice: it recalls offerings to the dead.",
        "fr": "Les plats se partagent au centre de la table et chacun se sert un peu avec ses baguettes. Ne plantez pas les baguettes debout dans le riz : cela rappelle les offrandes aux défunts.",
        "zh": "中国人吃饭时菜放在桌子中间，大家一起吃。不要把筷子竖着插在米饭里，这样很不礼貌。"
      }
    }
  },
  "lesson-hsk1-11": {
    "pronunciation": {
      "title": {
        "en": "Tone pairs (3): 3rd tone + any tone",
        "fr": "Paires de tons (3) : 3e ton + autre ton",
        "zh": "双音节声调（三）：三声开头"
      },
      "explanation": {
        "en": "Before tones 1, 2 and 4, a 3rd tone stays low and does not rise again: 买东西, 很贵, 牛奶 (2-3). Before another 3rd tone, it rises: 水果 shuǐguǒ is said shuí guǒ.",
        "fr": "Devant les tons 1, 2 et 4, le 3e ton reste bas sans remonter : 买东西, 很贵. Devant un autre 3e ton, il monte : 水果 shuǐguǒ se dit shuí guǒ.",
        "zh": "三声在一、二、四声前只读低的部分：买东西、很贵；在三声前变成二声：水果。"
      },
      "examples": [
        {
          "hanzi": "水果",
          "pinyin": "shuǐguǒ"
        },
        {
          "hanzi": "买",
          "pinyin": "mǎi"
        },
        {
          "hanzi": "很贵",
          "pinyin": "hěn guì"
        },
        {
          "hanzi": "超市",
          "pinyin": "chāoshì"
        }
      ]
    },
    "characters": {
      "title": {
        "en": "The money radical 钅 and the shell 贝",
        "fr": "La clé du métal 钅 et le coquillage 贝",
        "zh": "偏旁“钅”和“贝”"
      },
      "explanation": {
        "en": "钅 (metal) is in 钱 (money); 贝 (shell, once used as money) is in 贵 (expensive). Ancient money explains both!",
        "fr": "钅 (métal) est dans 钱 (argent) ; 贝 (coquillage, ancienne monnaie) est dans 贵 (cher). La monnaie ancienne explique les deux !",
        "zh": "“钅”表示金属，如“钱”；“贝”古代当钱用，如“贵”。"
      },
      "components": [
        {
          "component": "钅",
          "meaning": {
            "en": "metal",
            "fr": "métal"
          },
          "examples": [
            "钱"
          ]
        },
        {
          "component": "贝",
          "meaning": {
            "en": "shell (old money)",
            "fr": "coquillage (ancienne monnaie)"
          },
          "examples": [
            "贵"
          ]
        }
      ]
    },
    "practice": {
      "task": {
        "en": "Buy something from Laoshi the shopkeeper and bargain a little.",
        "fr": "Achète quelque chose à Laoshi le vendeur et marchande un peu.",
        "zh": "跟“店员”老师买东西，试试讲价。"
      },
      "starter": "请问，这个多少钱？太贵了！"
    },
    "culture": {
      "title": {
        "en": "Paying with your phone",
        "fr": "Payer avec son téléphone",
        "zh": "手机支付"
      },
      "body": {
        "en": "In Chinese cities most people pay by scanning a QR code with their phone (WeChat Pay or Alipay), even at a fruit stall. Prices are spoken in 块 but written in 元 (¥).",
        "fr": "Dans les villes chinoises, on paie surtout en scannant un QR code avec son téléphone (WeChat Pay ou Alipay), même chez le marchand de fruits. Les prix se disent en 块 mais s'écrivent en 元 (¥).",
        "zh": "在中国城市，很多人买东西用手机扫码付钱，比如微信、支付宝。价钱口语说“块”，写的时候用“元”（¥）。"
      }
    }
  },
  "lesson-hsk1-07": {
    "pronunciation": {
      "title": {
        "en": "Tone pairs (4): 4th tone + any tone",
        "fr": "Paires de tons (4) : 4e ton + autre ton",
        "zh": "双音节声调（四）：四声开头"
      },
      "explanation": {
        "en": "Drop the 4th tone sharply from high to low, as when saying a firm “No!”: 这个 (4-neutral), 那里 (4-3), 这些 (4-1).",
        "fr": "Faites tomber le 4e ton franchement du haut vers le bas, comme un « Non ! » ferme : 这个 (4-neutre), 那里 (4-3), 这些 (4-1).",
        "zh": "四声从高到低，读得干脆：这个、那里、这些。"
      },
      "examples": [
        {
          "hanzi": "这个",
          "pinyin": "zhège"
        },
        {
          "hanzi": "那里",
          "pinyin": "nàlǐ"
        },
        {
          "hanzi": "这些",
          "pinyin": "zhèxiē"
        },
        {
          "hanzi": "那边",
          "pinyin": "nàbiān"
        }
      ]
    },
    "characters": {
      "title": {
        "en": "The walking radical 辶 and the ear radical 阝",
        "fr": "La clé de la marche 辶 et la clé 阝",
        "zh": "偏旁“辶”和“阝”"
      },
      "explanation": {
        "en": "辶 (walking) wraps the bottom-left of 这 (this), 还 (still) and 进 (enter). 阝 on the right is in 那 (that), 哪 (which) and 都 (all).",
        "fr": "辶 (marcher) entoure le bas gauche de 这 (ceci), 还 (encore) et 进 (entrer). 阝 à droite se trouve dans 那 (cela), 哪 (lequel) et 都 (tous).",
        "zh": "“辶”和走路有关：这、还、进；“阝”在右边：那、哪、都。"
      },
      "components": [
        {
          "component": "辶",
          "meaning": {
            "en": "walking",
            "fr": "marche"
          },
          "examples": [
            "这",
            "还"
          ]
        },
        {
          "component": "阝",
          "meaning": {
            "en": "city, ear",
            "fr": "ville, oreille"
          },
          "examples": [
            "那",
            "哪",
            "都"
          ]
        }
      ]
    },
    "practice": {
      "task": {
        "en": "Ask Laoshi where three things are in a shop, using 哪儿 and 这/那.",
        "fr": "Demande à Laoshi où sont trois choses dans un magasin, avec 哪儿 et 这/那.",
        "zh": "用“哪儿、这、那”问老师商店里的东西在哪儿。"
      },
      "starter": "请问，书在哪儿？是这个吗？"
    }
  },
  "lesson-hsk1-15": {
    "pronunciation": {
      "title": {
        "en": "Spelling with y and w",
        "fr": "L'orthographe avec y et w",
        "zh": "y 和 w 的用法"
      },
      "explanation": {
        "en": "When i, u or ü starts a syllable, pinyin writes y or w: i → yi (一), u → wu (五), ü → yu (雨), uai → wai (外).",
        "fr": "Quand i, u ou ü commence une syllabe, le pinyin écrit y ou w : i → yi (一), u → wu (五), ü → yu (雨), uai → wai (外).",
        "zh": "i、u、ü 开头的音节要写成 y、w：一（yi）、五（wu）、雨（yu）、外（wai）。"
      },
      "examples": [
        {
          "hanzi": "外边",
          "pinyin": "wàibian"
        },
        {
          "hanzi": "五",
          "pinyin": "wǔ"
        },
        {
          "hanzi": "一",
          "pinyin": "yī"
        },
        {
          "hanzi": "雨",
          "pinyin": "yǔ"
        }
      ]
    },
    "characters": {
      "title": {
        "en": "Half-enclosed characters",
        "fr": "Les caractères semi-enveloppés",
        "zh": "半包围结构"
      },
      "explanation": {
        "en": "In some characters one part wraps around another: 这 and 边 (辶 wraps from bottom-left), 回 and 国 are fully enclosed by 口.",
        "fr": "Dans certains caractères, une partie en entoure une autre : 这 et 边 (辶 entoure par le bas gauche) ; 回 et 国 sont entièrement enfermés dans 口.",
        "zh": "有的字一部分包着另一部分：这、边是半包围；回、国是全包围。"
      },
      "components": [
        {
          "component": "辶",
          "meaning": {
            "en": "walking",
            "fr": "marche"
          },
          "examples": [
            "边",
            "这"
          ]
        },
        {
          "component": "囗",
          "meaning": {
            "en": "enclosure",
            "fr": "enclos"
          },
          "examples": [
            "回",
            "国"
          ]
        }
      ]
    },
    "practice": {
      "task": {
        "en": "Describe to Laoshi where your home is compared to your school (前边, 后边, 外边).",
        "fr": "Décris à Laoshi où est ta maison par rapport à ton école (前边, 后边, 外边).",
        "zh": "跟老师说你家在学校的哪边。"
      },
      "starter": "我家在学校后边。"
    }
  },
  "lesson-hsk1-20": {
    "pronunciation": {
      "title": {
        "en": "Neutral tone in -子 words",
        "fr": "Le ton neutre dans les mots en -子",
        "zh": "“子”的轻声"
      },
      "explanation": {
        "en": "The suffix 子 is light and toneless: 桌子 zhuōzi, 椅子 yǐzi, 儿子 érzi. The same goes for the second syllable of 衣服 yīfu.",
        "fr": "Le suffixe 子 est léger et sans ton : 桌子 zhuōzi, 椅子 yǐzi, 儿子 érzi. De même pour la seconde syllabe de 衣服 yīfu.",
        "zh": "后缀“子”读轻声：桌子、椅子、儿子。“衣服”的“服”也读轻声。"
      },
      "examples": [
        {
          "hanzi": "桌子",
          "pinyin": "zhuōzi"
        },
        {
          "hanzi": "椅子",
          "pinyin": "yǐzi"
        },
        {
          "hanzi": "衣服",
          "pinyin": "yīfu"
        },
        {
          "hanzi": "医生",
          "pinyin": "yīshēng"
        }
      ]
    },
    "characters": {
      "title": {
        "en": "The tree radical 木 and the illness radical 疒",
        "fr": "La clé de l'arbre 木 et la clé de la maladie 疒",
        "zh": "偏旁“木”和“疒”"
      },
      "explanation": {
        "en": "木 (wood) is in 桌 (table), 椅 (chair) and 杯 (cup); 疒 (illness) covers 病 (ill).",
        "fr": "木 (bois) est dans 桌 (table), 椅 (chaise) et 杯 (tasse) ; 疒 (maladie) couvre 病 (malade).",
        "zh": "“木”和木头有关：桌、椅、杯；“疒”和生病有关：病。"
      },
      "components": [
        {
          "component": "木",
          "meaning": {
            "en": "wood",
            "fr": "bois"
          },
          "examples": [
            "桌",
            "椅",
            "杯"
          ]
        },
        {
          "component": "疒",
          "meaning": {
            "en": "illness",
            "fr": "maladie"
          },
          "examples": [
            "病"
          ]
        }
      ]
    },
    "practice": {
      "task": {
        "en": "Tell Laoshi Doctor you feel ill and say what is wrong.",
        "fr": "Dis au docteur Laoshi que tu es malade et explique ce qui ne va pas.",
        "zh": "跟“医生”老师说你生病了。"
      },
      "starter": "医生，我生病了，有点儿冷。"
    }
  },
  "lesson-hsk1-02": {
    "pronunciation": {
      "title": {
        "en": "Where the tone mark goes",
        "fr": "Où placer la marque de ton",
        "zh": "声调标在哪儿"
      },
      "explanation": {
        "en": "Put the mark on a, else on o or e: 现 xiàn, 点 diǎn, 昨 zuó. In iu and ui, mark the second letter: 九 jiǔ, 对 duì.",
        "fr": "La marque se met sur a, sinon sur o ou e : 现 xiàn, 点 diǎn, 昨 zuó. Dans iu et ui, on marque la seconde lettre : 九 jiǔ, 对 duì.",
        "zh": "声调先标在 a 上，没有 a 标在 o 或 e 上：xiàn、diǎn、zuó。iu、ui 标在后一个字母上：jiǔ、duì。"
      },
      "examples": [
        {
          "hanzi": "现在",
          "pinyin": "xiànzài"
        },
        {
          "hanzi": "九点",
          "pinyin": "jiǔ diǎn"
        },
        {
          "hanzi": "昨天",
          "pinyin": "zuótiān"
        },
        {
          "hanzi": "明天",
          "pinyin": "míngtiān"
        }
      ]
    },
    "characters": {
      "title": {
        "en": "The gate 门 and the heart 心",
        "fr": "La porte 门 et le cœur 心",
        "zh": "偏旁“门”和“心”"
      },
      "explanation": {
        "en": "门 (gate) appears in 问 (ask), 们 and 间 (time, room). 心 (heart) appears at the bottom of 您, 想 and 怎.",
        "fr": "门 (porte) apparaît dans 问 (demander), 们 et 间 (moment, pièce). 心 (cœur) se trouve en bas de 您, 想 et 怎.",
        "zh": "“门”：问、们、间；“心”在下面：您、想、怎。"
      },
      "components": [
        {
          "component": "门",
          "meaning": {
            "en": "gate",
            "fr": "porte"
          },
          "examples": [
            "问",
            "间"
          ]
        },
        {
          "component": "心",
          "meaning": {
            "en": "heart",
            "fr": "cœur"
          },
          "examples": [
            "您",
            "想",
            "怎"
          ]
        }
      ]
    },
    "practice": {
      "task": {
        "en": "Ask Laoshi what time it is and tell him when your classes start.",
        "fr": "Demande l'heure à Laoshi et dis-lui à quelle heure commencent tes cours.",
        "zh": "问老师现在几点，告诉他你几点上课。"
      },
      "starter": "老师，现在几点？我八点上课。"
    }
  },
  "lesson-hsk1-09": {
    "pronunciation": {
      "title": {
        "en": "Three-syllable words",
        "fr": "Les mots de trois syllabes",
        "zh": "三音节词语"
      },
      "explanation": {
        "en": "In three-syllable words the middle syllable is often lighter, and the last one carries the stress: 星期天, 中学生, 出租车.",
        "fr": "Dans les mots de trois syllabes, la syllabe du milieu est souvent plus légère et la dernière porte l'accent : 星期天, 中学生, 出租车.",
        "zh": "三音节词语中间的音节常读得轻一点，最后一个音节读得重：星期天、中学生、出租车。"
      },
      "examples": [
        {
          "hanzi": "星期天",
          "pinyin": "xīngqītiān"
        },
        {
          "hanzi": "中学生",
          "pinyin": "zhōngxuéshēng"
        },
        {
          "hanzi": "电影院",
          "pinyin": "diànyǐngyuàn"
        },
        {
          "hanzi": "出租车",
          "pinyin": "chūzūchē"
        }
      ]
    },
    "characters": {
      "title": {
        "en": "The eye radical 目",
        "fr": "La clé de l'œil 目",
        "zh": "偏旁“目”"
      },
      "explanation": {
        "en": "目 (eye) is in 睡 (sleep: eyes closed!), 看 (look: a hand above the eye) and 眼 (eye).",
        "fr": "目 (œil) se trouve dans 睡 (dormir : les yeux fermés !), 看 (regarder : une main au-dessus de l'œil) et 眼 (œil).",
        "zh": "“目”和眼睛有关：睡、看、眼。"
      },
      "components": [
        {
          "component": "目",
          "meaning": {
            "en": "eye",
            "fr": "œil"
          },
          "examples": [
            "睡",
            "看"
          ]
        }
      ]
    },
    "practice": {
      "task": {
        "en": "Describe your typical day to Laoshi, with times.",
        "fr": "Raconte ta journée type à Laoshi, avec les heures.",
        "zh": "跟老师说说你一天的时间安排。"
      },
      "starter": "我早上七点起床，八点吃早饭。"
    }
  },
  "lesson-hsk1-17": {
    "pronunciation": {
      "title": {
        "en": "Retroflex r and the e sound",
        "fr": "Le r rétroflexe et le son e",
        "zh": "r 和 e 的发音"
      },
      "explanation": {
        "en": "热 rè: curl the tongue back and say a soft “r” with a little buzz, not a rolled r. The e of 热, 冷 lěng and 车 chē sounds like the “u” in English “but”, not like French « é ».",
        "fr": "热 rè : recourbez la langue et dites un r doux qui vibre un peu, pas un r roulé. Le e de 热, 冷 lěng et 车 chē ressemble au « e » de « le », pas à « é ».",
        "zh": "“热”的 r 舌尖上翘，声带振动；e 的发音和“鹅”一样。"
      },
      "examples": [
        {
          "hanzi": "热",
          "pinyin": "rè"
        },
        {
          "hanzi": "冷",
          "pinyin": "lěng"
        },
        {
          "hanzi": "天气",
          "pinyin": "tiānqì"
        },
        {
          "hanzi": "非常",
          "pinyin": "fēicháng"
        }
      ]
    },
    "characters": {
      "title": {
        "en": "The rain radical ⻗ and the fire dots 灬",
        "fr": "La clé de la pluie ⻗ et les points du feu 灬",
        "zh": "偏旁“雨”和“灬”"
      },
      "explanation": {
        "en": "⻗ (rain) sits on top of 雪 (snow) and 零 (zero, originally “light rain”); 灬 (fire) is at the bottom of 热 (hot) and 点 (dot, o'clock).",
        "fr": "⻗ (pluie) coiffe 雪 (neige) et 零 (zéro, à l'origine « bruine ») ; 灬 (feu) est en bas de 热 (chaud) et 点 (point, heure).",
        "zh": "“雨”字头和天气有关：雪、零；“灬”和火有关：热、点。"
      },
      "components": [
        {
          "component": "⻗",
          "meaning": {
            "en": "rain",
            "fr": "pluie"
          },
          "examples": [
            "雪",
            "零"
          ]
        },
        {
          "component": "灬",
          "meaning": {
            "en": "fire",
            "fr": "feu"
          },
          "examples": [
            "热",
            "点"
          ]
        }
      ]
    },
    "practice": {
      "task": {
        "en": "Tell Laoshi what the weather is like where you live today.",
        "fr": "Dis à Laoshi quel temps il fait chez toi aujourd'hui.",
        "zh": "告诉老师你那儿今天天气怎么样。"
      },
      "starter": "我这儿今天很冷，下雨了。"
    }
  },
  "lesson-hsk1-14": {
    "pronunciation": {
      "title": {
        "en": "sh, s and x",
        "fr": "sh, s et x",
        "zh": "sh、s 和 x"
      },
      "explanation": {
        "en": "Three hissing sounds: sh with the tongue curled back (事 shì), s flat behind the teeth (四 sì), x with the tongue flat and lips spread (休 xiū).",
        "fr": "Trois sons sifflants : sh langue recourbée (事 shì), s langue plate derrière les dents (四 sì), x langue plate et lèvres étirées (休 xiū).",
        "zh": "sh 舌尖上翘（事），s 舌尖平（四），x 舌面发音（休）。"
      },
      "examples": [
        {
          "hanzi": "休息",
          "pinyin": "xiūxi"
        },
        {
          "hanzi": "上班",
          "pinyin": "shàngbān"
        },
        {
          "hanzi": "公司",
          "pinyin": "gōngsī"
        },
        {
          "hanzi": "事",
          "pinyin": "shì"
        }
      ]
    },
    "characters": {
      "title": {
        "en": "The hand radical 扌 and the earth radical 土",
        "fr": "La clé de la main 扌 et la clé de la terre 土",
        "zh": "偏旁“扌”和“土”"
      },
      "explanation": {
        "en": "扌 (hand) is in actions: 找 (look for), 打 (hit, make a call); 土 (earth) is in 在 (at) and 坐 (sit).",
        "fr": "扌 (main) se trouve dans des actions : 找 (chercher), 打 (frapper, appeler) ; 土 (terre) est dans 在 (être à) et 坐 (s'asseoir).",
        "zh": "“扌”和手的动作有关：找、打；“土”：在、坐。"
      },
      "components": [
        {
          "component": "扌",
          "meaning": {
            "en": "hand",
            "fr": "main"
          },
          "examples": [
            "找",
            "打"
          ]
        },
        {
          "component": "土",
          "meaning": {
            "en": "earth",
            "fr": "terre"
          },
          "examples": [
            "在",
            "坐"
          ]
        }
      ]
    },
    "practice": {
      "task": {
        "en": "Phone Laoshi and tell him what you are doing right now (正在…呢).",
        "fr": "Appelle Laoshi et dis-lui ce que tu es en train de faire (正在…呢).",
        "zh": "给老师“打电话”，说你正在做什么。"
      },
      "starter": "喂，老师，我正在工作呢。"
    }
  },
  "lesson-hsk1-19": {
    "pronunciation": {
      "title": {
        "en": "Neutral tone that changes meaning",
        "fr": "Le ton neutre qui change le sens",
        "zh": "轻声区别意义"
      },
      "explanation": {
        "en": "Sometimes only the neutral tone tells two words apart: 东西 dōngxi is “thing”, but dōngxī is “east and west”. Listen carefully to the second syllable.",
        "fr": "Parfois, seul le ton neutre distingue deux mots : 东西 dōngxi signifie « chose », mais dōngxī « l'est et l'ouest ». Écoutez bien la seconde syllabe.",
        "zh": "有时轻声能区别意义：“东西”读 dōngxi 是物品，读 dōngxī 是东边和西边。"
      },
      "examples": [
        {
          "hanzi": "东西",
          "pinyin": "dōngxi"
        },
        {
          "hanzi": "电视",
          "pinyin": "diànshì"
        },
        {
          "hanzi": "电话",
          "pinyin": "diànhuà"
        },
        {
          "hanzi": "手机",
          "pinyin": "shǒujī"
        }
      ]
    },
    "characters": {
      "title": {
        "en": "The silk radical 纟 and 见",
        "fr": "La clé de la soie 纟 et 见",
        "zh": "偏旁“纟”和“见”"
      },
      "explanation": {
        "en": "纟 (silk thread) is in 给 (give) and 红 (red); 见 (see) is in 视 (TV) and 现 (now) and also stands alone in 看见.",
        "fr": "纟 (fil de soie) se trouve dans 给 (donner) et 红 (rouge) ; 见 (voir) est dans 视 (télé) et 现 (maintenant), et seul dans 看见.",
        "zh": "“纟”：给、红；“见”：视、现，也可以单用，如“看见”。"
      },
      "components": [
        {
          "component": "纟",
          "meaning": {
            "en": "silk",
            "fr": "soie"
          },
          "examples": [
            "给",
            "红"
          ]
        },
        {
          "component": "见",
          "meaning": {
            "en": "see",
            "fr": "voir"
          },
          "examples": [
            "视",
            "现"
          ]
        }
      ]
    },
    "practice": {
      "task": {
        "en": "Call Laoshi: say hello with 喂 and invite him to the cinema.",
        "fr": "Appelle Laoshi : dis 喂 et invite-le au cinéma.",
        "zh": "给老师打电话，用“喂”开头，请他去看电影。"
      },
      "starter": "喂，老师！明天我们去看电影吧？"
    },
    "culture": {
      "title": {
        "en": "Messages, not calls",
        "fr": "Des messages plutôt que des appels",
        "zh": "发消息，不打电话"
      },
      "body": {
        "en": "Many Chinese people message more than they call, mostly on WeChat (微信), and often send short voice messages. On the phone, everyone starts with 喂 (wéi), “hello?”.",
        "fr": "Beaucoup de Chinois écrivent plus qu'ils n'appellent, surtout sur WeChat (微信), et envoient souvent de courts messages vocaux. Au téléphone, tout le monde commence par 喂 (wéi), « allô ? ».",
        "zh": "很多中国人喜欢用微信发消息，常常发语音。打电话时，大家先说“喂”。"
      }
    }
  },
  "lesson-hsk1-18": {
    "pronunciation": {
      "title": {
        "en": "Reduplicated words",
        "fr": "Les mots redoublés",
        "zh": "叠音词"
      },
      "explanation": {
        "en": "In reduplicated words the second syllable is usually neutral: 妈妈 māma, 爸爸 bàba, 看看 kànkan.",
        "fr": "Dans les mots redoublés, la seconde syllabe est en général neutre : 妈妈 māma, 爸爸 bàba, 看看 kànkan.",
        "zh": "叠音词的第二个音节一般读轻声：妈妈、爸爸、看看。"
      },
      "examples": [
        {
          "hanzi": "妈妈",
          "pinyin": "māma"
        },
        {
          "hanzi": "爸爸",
          "pinyin": "bàba"
        },
        {
          "hanzi": "谢谢",
          "pinyin": "xièxie"
        },
        {
          "hanzi": "喜欢",
          "pinyin": "xǐhuan"
        }
      ]
    },
    "characters": {
      "title": {
        "en": "The heart 心 at the bottom and 忄 on the left",
        "fr": "Le cœur 心 en bas et 忄 à gauche",
        "zh": "“心”和“忄”"
      },
      "explanation": {
        "en": "Feelings use the heart: 想 (want, miss) and 意 put 心 at the bottom; 忙 (busy) and 快 (happy, fast) use its side form 忄.",
        "fr": "Les sentiments passent par le cœur : 想 (vouloir, penser à) et 意 ont 心 en bas ; 忙 (occupé) et 快 (joyeux, rapide) ont sa forme latérale 忄.",
        "zh": "表示心情的字常有“心”或“忄”：想、意；忙、快。"
      },
      "components": [
        {
          "component": "心",
          "meaning": {
            "en": "heart",
            "fr": "cœur"
          },
          "examples": [
            "想",
            "您"
          ]
        },
        {
          "component": "忄",
          "meaning": {
            "en": "heart (side form)",
            "fr": "cœur (forme latérale)"
          },
          "examples": [
            "忙",
            "快"
          ]
        }
      ]
    },
    "practice": {
      "task": {
        "en": "Tell Laoshi three things you like and one thing you would like to do.",
        "fr": "Dis à Laoshi trois choses que tu aimes et une chose que tu aimerais faire.",
        "zh": "告诉老师你喜欢的三样东西和你想做的一件事。"
      },
      "starter": "我喜欢……，我想去中国玩儿。"
    }
  },
  "lesson-hsk1-12": {
    "pronunciation": {
      "title": {
        "en": "The syllable-dividing mark '",
        "fr": "L'apostrophe qui sépare les syllabes",
        "zh": "隔音符号"
      },
      "explanation": {
        "en": "When a syllable starting with a, o or e follows another, pinyin adds ' to avoid confusion: 女儿 nǚ'ér, 西安 Xī'ān.",
        "fr": "Quand une syllabe commençant par a, o ou e en suit une autre, le pinyin ajoute ' pour éviter la confusion : 女儿 nǚ'ér, 西安 Xī'ān.",
        "zh": "a、o、e 开头的音节跟在别的音节后面时，用隔音符号“'”隔开：nǚ'ér、Xī'ān。"
      },
      "examples": [
        {
          "hanzi": "女儿",
          "pinyin": "nǚ'ér"
        },
        {
          "hanzi": "学校",
          "pinyin": "xuéxiào"
        },
        {
          "hanzi": "老师",
          "pinyin": "lǎoshī"
        },
        {
          "hanzi": "上课",
          "pinyin": "shàngkè"
        }
      ]
    },
    "characters": {
      "title": {
        "en": "The child radical 子 and the roof 宀",
        "fr": "La clé de l'enfant 子 et le toit 宀",
        "zh": "偏旁“子”和“宀”"
      },
      "explanation": {
        "en": "学 (study) has 子 (child) under a roof-like top; 字 (character) is a child under a roof 宀, which is also on 家 (home).",
        "fr": "学 (étudier) a un 子 (enfant) sous un toit ; 字 (caractère) est un enfant sous le toit 宀, qu'on retrouve aussi sur 家 (maison).",
        "zh": "“学”和“字”下面都有“子”；“宀”是房顶：字、家。"
      },
      "components": [
        {
          "component": "子",
          "meaning": {
            "en": "child",
            "fr": "enfant"
          },
          "examples": [
            "学",
            "字"
          ]
        },
        {
          "component": "宀",
          "meaning": {
            "en": "roof",
            "fr": "toit"
          },
          "examples": [
            "家",
            "字"
          ]
        }
      ]
    },
    "practice": {
      "task": {
        "en": "Tell Laoshi about your school: what you study and when classes start and end.",
        "fr": "Parle à Laoshi de ton école : ce que tu étudies, l'heure de début et de fin des cours.",
        "zh": "介绍你的学校：学什么，几点上课、下课。"
      },
      "starter": "我是大学生，我在大学学习汉语。"
    }
  },
  "lesson-hsk1-16": {
    "pronunciation": {
      "title": {
        "en": "Sentence rhythm",
        "fr": "Le rythme de la phrase",
        "zh": "句子的节奏"
      },
      "explanation": {
        "en": "Read by word groups, not syllable by syllable: 我 / 坐飞机 / 去中国. The last stressed word of each group is a little stronger.",
        "fr": "Lisez par groupes de mots, pas syllabe par syllabe : 我 / 坐飞机 / 去中国. Le dernier mot de chaque groupe est un peu plus appuyé.",
        "zh": "读句子要按词组停顿，不要一个字一个字地读：我／坐飞机／去中国。"
      },
      "examples": [
        {
          "hanzi": "飞机",
          "pinyin": "fēijī"
        },
        {
          "hanzi": "火车",
          "pinyin": "huǒchē"
        },
        {
          "hanzi": "开车",
          "pinyin": "kāichē"
        },
        {
          "hanzi": "中国",
          "pinyin": "Zhōngguó"
        }
      ]
    },
    "characters": {
      "title": {
        "en": "The vehicle radical 车",
        "fr": "La clé du véhicule 车",
        "zh": "偏旁“车”"
      },
      "explanation": {
        "en": "车 (vehicle, car) appears alone and as a part of other characters, such as 辆 (measure word for vehicles) and 较.",
        "fr": "车 (véhicule, voiture) s'emploie seul et comme élément d'autres caractères, comme 辆 (classificateur des véhicules) et 较.",
        "zh": "“车”可以单用，也可以做偏旁：辆、较。"
      },
      "components": [
        {
          "component": "车",
          "meaning": {
            "en": "vehicle",
            "fr": "véhicule"
          },
          "examples": [
            "车",
            "辆"
          ]
        }
      ]
    },
    "practice": {
      "task": {
        "en": "Tell Laoshi how you came to school or to China (坐…来的).",
        "fr": "Explique à Laoshi comment tu es venu à l'école ou en Chine (坐…来的).",
        "zh": "告诉老师你是怎么来学校或来中国的。"
      },
      "starter": "我是坐飞机来中国的。"
    }
  }
};
