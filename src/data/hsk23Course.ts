// HSK 2 and HSK 3 course structure: lesson order and, per lesson, pronunciation (HSK 2), characters,
// a saying (HSK 3), culture notes and a speaking task. Modelled on the progression of classic course
// books; all wording is HSK Path's own.
import type { HskLessonExtras } from '../types';

export const HSK2_ORDER: string[] = ["lesson-hsk2-01", "lesson-hsk2-02", "lesson-hsk2-04", "lesson-hsk2-05", "lesson-hsk2-06", "lesson-hsk2-11", "lesson-hsk2-07", "lesson-hsk2-09", "lesson-hsk2-13", "lesson-hsk2-12", "lesson-hsk2-03", "lesson-hsk2-14", "lesson-hsk2-16", "lesson-hsk2-08", "lesson-hsk2-10", "lesson-hsk2-15"];
export const HSK3_ORDER: string[] = ["lesson-hsk3-01", "lesson-hsk3-02", "lesson-hsk3-12", "lesson-hsk3-13", "lesson-hsk3-11", "lesson-hsk3-06", "lesson-hsk3-05", "lesson-hsk3-04", "lesson-hsk3-15", "lesson-hsk3-21", "lesson-hsk3-16", "lesson-hsk3-08", "lesson-hsk3-29", "lesson-hsk3-23", "lesson-hsk3-07", "lesson-hsk3-27", "lesson-hsk3-25", "lesson-hsk3-28", "lesson-hsk3-14", "lesson-hsk3-09", "lesson-hsk3-10", "lesson-hsk3-24", "lesson-hsk3-22", "lesson-hsk3-18", "lesson-hsk3-03", "lesson-hsk3-17", "lesson-hsk3-19", "lesson-hsk3-20", "lesson-hsk3-26"];

export const HSK2_EXTRAS: Record<string, HskLessonExtras> = {
  "lesson-hsk2-01": {
    "pronunciation": {
      "title": {
        "en": "Word stress (1): two-syllable words",
        "fr": "L'accent des mots (1) : deux syllabes",
        "zh": "双音节词语的重音"
      },
      "explanation": {
        "en": "Most two-syllable words are “medium + strong”: the second syllable is a little louder and longer (机场 jīchǎng). Words with a neutral tone are “strong + light” (便宜 piányi).",
        "fr": "La plupart des mots de deux syllabes sont « moyen + fort » : la seconde syllabe est un peu plus forte et plus longue (机场 jīchǎng). Les mots avec un ton neutre sont « fort + léger » (便宜 piányi).",
        "zh": "多数双音节词是“中＋重”格式，后一个音节读得重一些（机场）；带轻声的词是“重＋轻”格式（便宜）。"
      },
      "examples": [
        {
          "hanzi": "机场",
          "pinyin": "jīchǎng"
        },
        {
          "hanzi": "便宜",
          "pinyin": "piányi"
        },
        {
          "hanzi": "公共汽车",
          "pinyin": "gōnggòng qìchē"
        },
        {
          "hanzi": "出租车",
          "pinyin": "chūzūchē"
        }
      ]
    },
    "characters": {
      "title": {
        "en": "Radicals",
        "fr": "Les clés",
        "zh": "偏旁"
      },
      "explanation": {
        "en": "彳 “step” appears in movement words: 往 (towards), 很, 得; 走 “walk” is in 起 (get up) and 超 (super, overtake).",
        "fr": "彳 « pas » apparaît dans des mots de mouvement : 往 (vers), 很, 得 ; 走 « marcher » se trouve dans 起 (se lever) et 超 (dépasser).",
        "zh": "“彳”和行走有关：往、很、得；“走”字旁：起、超。"
      },
      "components": [
        {
          "component": "彳",
          "meaning": {
            "en": "step",
            "fr": "pas"
          },
          "examples": [
            "往",
            "很",
            "得"
          ]
        },
        {
          "component": "走",
          "meaning": {
            "en": "walk",
            "fr": "marcher"
          },
          "examples": [
            "起",
            "超"
          ]
        }
      ]
    },
    "practice": {
      "task": {
        "en": "Tell Laoshi how you get to school or work, and compare two ways with 比.",
        "fr": "Explique à Laoshi comment tu vas à l'école ou au travail, et compare deux moyens avec 比.",
        "zh": "告诉老师你怎么去学校或公司，用“比”比较两种交通工具。"
      },
      "starter": "我每天坐公共汽车去学校，比打车便宜。"
    }
  },
  "lesson-hsk2-02": {
    "pronunciation": {
      "title": {
        "en": "Word stress (2): three-syllable words",
        "fr": "L'accent des mots (2) : trois syllabes",
        "zh": "三音节词语的重音"
      },
      "explanation": {
        "en": "In three-syllable words the last syllable is strongest and the middle one lightest: 服务员 fú·wu·YUÁN, 星期天, 出租车.",
        "fr": "Dans les mots de trois syllabes, la dernière est la plus forte et celle du milieu la plus légère : 服务员 fú·wu·YUÁN, 星期天, 出租车.",
        "zh": "三音节词语最后一个音节最重，中间的最轻：服务员、星期天、出租车。"
      },
      "examples": [
        {
          "hanzi": "服务员",
          "pinyin": "fúwùyuán"
        },
        {
          "hanzi": "星期天",
          "pinyin": "xīngqītiān"
        },
        {
          "hanzi": "好吃",
          "pinyin": "hǎochī"
        },
        {
          "hanzi": "菜单",
          "pinyin": "càidān"
        }
      ]
    },
    "characters": {
      "title": {
        "en": "Radicals",
        "fr": "Les clés",
        "zh": "偏旁"
      },
      "explanation": {
        "en": "⺮ (bamboo) sits on top of 笔 (pen), 第, 等 (wait) and 筷 (chopsticks, made of bamboo!); 酉 (jar) is in 酒 (alcohol).",
        "fr": "⺮ (bambou) coiffe 笔 (stylo), 第, 等 (attendre) et 筷 (baguettes, en bambou !) ; 酉 (jarre) se trouve dans 酒 (alcool).",
        "zh": "“⺮”是竹字头：笔、第、等、筷；“酉”和酒有关：酒。"
      },
      "components": [
        {
          "component": "⺮",
          "meaning": {
            "en": "bamboo",
            "fr": "bambou"
          },
          "examples": [
            "笔",
            "等",
            "筷"
          ]
        },
        {
          "component": "酉",
          "meaning": {
            "en": "jar",
            "fr": "jarre"
          },
          "examples": [
            "酒"
          ]
        }
      ]
    },
    "practice": {
      "task": {
        "en": "Order in a restaurant with 想 and 要, then ask for the bill.",
        "fr": "Commande au restaurant avec 想 et 要, puis demande l'addition.",
        "zh": "在饭馆用“想、要”点菜，最后买单。"
      },
      "starter": "服务员，我想吃鱼，还要一杯茶。买单！"
    },
    "culture": {
      "title": {
        "en": "Who pays the bill?",
        "fr": "Qui paie l'addition ?",
        "zh": "谁买单？"
      },
      "body": {
        "en": "Friends and colleagues often compete to pay for everyone (抢着买单), and whoever invites pays. Among young people, splitting the bill, called AA制, is now common too.",
        "fr": "Entre amis ou collègues, on se dispute souvent pour payer pour tout le monde (抢着买单), et celui qui invite paie. Chez les jeunes, partager l'addition, appelé AA制, est aussi devenu courant.",
        "zh": "中国朋友、同事一起吃饭，常常抢着买单，一般是请客的人付钱。现在年轻人也常常“AA制”。"
      }
    }
  },
  "lesson-hsk2-04": {
    "pronunciation": {
      "title": {
        "en": "Word stress (3): four-syllable phrases",
        "fr": "L'accent des mots (3) : groupes de quatre syllabes",
        "zh": "四音节词语的重音"
      },
      "explanation": {
        "en": "Four-syllable phrases are usually “medium–light–medium–strong”: 公共汽车, 打篮球, 一起旅游.",
        "fr": "Les groupes de quatre syllabes suivent souvent le schéma « moyen–léger–moyen–fort » : 公共汽车, 打篮球, 一起旅游.",
        "zh": "四音节词语一般是“中－轻－中－重”：公共汽车、一起旅游。"
      },
      "examples": [
        {
          "hanzi": "公共汽车",
          "pinyin": "gōnggòng qìchē"
        },
        {
          "hanzi": "一起旅游",
          "pinyin": "yìqǐ lǚyóu"
        },
        {
          "hanzi": "打篮球",
          "pinyin": "dǎ lánqiú"
        },
        {
          "hanzi": "踢足球",
          "pinyin": "tī zúqiú"
        }
      ]
    },
    "characters": {
      "title": {
        "en": "Radicals",
        "fr": "Les clés",
        "zh": "偏旁"
      },
      "explanation": {
        "en": "⻊ (foot) is in leg actions: 跑 (run), 跳 (jump), 踢 (kick), 路 (road); 𤣩 (jade) is in 玩 (play), 球 (ball) and 现.",
        "fr": "⻊ (pied) se retrouve dans les actions des jambes : 跑 (courir), 跳 (sauter), 踢 (taper du pied), 路 (route) ; 𤣩 (jade) est dans 玩 (jouer), 球 (balle) et 现.",
        "zh": "“⻊”和脚有关：跑、跳、踢、路；“𤣩”：玩、球、现。"
      },
      "components": [
        {
          "component": "⻊",
          "meaning": {
            "en": "foot",
            "fr": "pied"
          },
          "examples": [
            "跑",
            "跳",
            "踢"
          ]
        },
        {
          "component": "𤣩",
          "meaning": {
            "en": "jade",
            "fr": "jade"
          },
          "examples": [
            "玩",
            "球"
          ]
        }
      ]
    },
    "practice": {
      "task": {
        "en": "Tell Laoshi which sports you have tried (过) and one you never have.",
        "fr": "Dis à Laoshi quels sports tu as déjà pratiqués (过) et un que tu n'as jamais fait.",
        "zh": "告诉老师你做过什么运动，没做过什么运动。"
      },
      "starter": "我踢过足球，但是没游过泳。"
    }
  },
  "lesson-hsk2-05": {
    "pronunciation": {
      "title": {
        "en": "Sentence stress (1): the new information",
        "fr": "L'accent de phrase (1) : l'information nouvelle",
        "zh": "句重音（一）：新信息"
      },
      "explanation": {
        "en": "In a sentence, stress the word that brings the new information: 我要**红**色的 (not the white one). The rest stays relaxed.",
        "fr": "Dans une phrase, on appuie sur le mot qui apporte l'information nouvelle : 我要**红**色的 (pas le blanc). Le reste reste détendu.",
        "zh": "句子里带新信息的词要重读：我要红色的。"
      },
      "examples": [
        {
          "hanzi": "我要红色的",
          "pinyin": "wǒ yào hóngsè de"
        },
        {
          "hanzi": "白色的不好洗",
          "pinyin": "báisè de bù hǎo xǐ"
        },
        {
          "hanzi": "这是我的",
          "pinyin": "zhè shì wǒ de"
        },
        {
          "hanzi": "那是他的",
          "pinyin": "nà shì tā de"
        }
      ]
    },
    "characters": {
      "title": {
        "en": "Radicals",
        "fr": "Les clés",
        "zh": "偏旁"
      },
      "explanation": {
        "en": "衤 (clothing) is in 裤 (trousers) and 衬 (shirt); 巾 (cloth) is in 帮 (help), 带 (bring) and 常 (often).",
        "fr": "衤 (vêtement) se trouve dans 裤 (pantalon) et 衬 (chemise) ; 巾 (tissu) dans 帮 (aider), 带 (apporter) et 常 (souvent).",
        "zh": "“衤”和衣服有关：裤、衬；“巾”：帮、带、常。"
      },
      "components": [
        {
          "component": "衤",
          "meaning": {
            "en": "clothing",
            "fr": "vêtement"
          },
          "examples": [
            "裤",
            "衬"
          ]
        },
        {
          "component": "巾",
          "meaning": {
            "en": "cloth",
            "fr": "tissu"
          },
          "examples": [
            "帮",
            "带",
            "常"
          ]
        }
      ]
    },
    "practice": {
      "task": {
        "en": "Describe what you are wearing today and the colours.",
        "fr": "Décris ce que tu portes aujourd'hui et les couleurs.",
        "zh": "说说你今天穿的衣服和颜色。"
      },
      "starter": "今天我穿了一条黑色的裤子。"
    }
  },
  "lesson-hsk2-06": {
    "pronunciation": {
      "title": {
        "en": "Sentence stress (2): describing words",
        "fr": "L'accent de phrase (2) : les mots qui décrivent",
        "zh": "句重音（二）：定语重读"
      },
      "explanation": {
        "en": "A word that describes a noun is usually stressed: **高**个子, **大**眼睛, **自己**的家.",
        "fr": "Le mot qui décrit un nom est en général accentué : **高**个子, **大**眼睛, **自己**的家.",
        "zh": "修饰名词的词一般重读：高个子、大眼睛、自己的家。"
      },
      "examples": [
        {
          "hanzi": "高个子",
          "pinyin": "gāo gèzi"
        },
        {
          "hanzi": "大眼睛",
          "pinyin": "dà yǎnjing"
        },
        {
          "hanzi": "自己的家",
          "pinyin": "zìjǐ de jiā"
        },
        {
          "hanzi": "小孩儿",
          "pinyin": "xiǎoháir"
        }
      ]
    },
    "characters": {
      "title": {
        "en": "Radicals",
        "fr": "Les clés",
        "zh": "偏旁"
      },
      "explanation": {
        "en": "月 on the left of body words comes from 肉 (flesh), not from the moon: 脸 (face), 腿 (leg), 脚 (foot). 页 (head) is in 颜 (colour) and 题 (question).",
        "fr": "月 à gauche des mots du corps vient de 肉 (chair), pas de la lune : 脸 (visage), 腿 (jambe), 脚 (pied). 页 (tête) est dans 颜 (couleur) et 题 (question).",
        "zh": "身体部位的字左边的“月”来自“肉”：脸、腿、脚；“页”和头有关：颜、题。"
      },
      "components": [
        {
          "component": "月",
          "meaning": {
            "en": "flesh, body",
            "fr": "chair, corps"
          },
          "examples": [
            "脸",
            "腿",
            "脚"
          ]
        },
        {
          "component": "页",
          "meaning": {
            "en": "head",
            "fr": "tête"
          },
          "examples": [
            "颜",
            "题"
          ]
        }
      ]
    },
    "practice": {
      "task": {
        "en": "Describe the appearance of someone in your family.",
        "fr": "Décris l'apparence d'un membre de ta famille.",
        "zh": "说说你家人的样子。"
      },
      "starter": "我爷爷个子很高，眼睛很大。"
    }
  },
  "lesson-hsk2-11": {
    "pronunciation": {
      "title": {
        "en": "Basic intonation",
        "fr": "L'intonation de base",
        "zh": "汉语的基本句调"
      },
      "explanation": {
        "en": "Tones stay the same in every sentence; intonation only changes the pitch range and the end. Statements fall at the end; questions with 吗 lift slightly at the end.",
        "fr": "Les tons restent les mêmes dans toutes les phrases ; l'intonation ne change que la hauteur générale et la fin. L'affirmation descend à la fin ; la question avec 吗 remonte légèrement.",
        "zh": "句调不改变字调，只改变整句的高低和句尾。陈述句句尾下降，“吗”问句句尾稍微上扬。"
      },
      "examples": [
        {
          "hanzi": "因为下雨",
          "pinyin": "yīnwèi xià yǔ"
        },
        {
          "hanzi": "所以我没去",
          "pinyin": "suǒyǐ wǒ méi qù"
        },
        {
          "hanzi": "为什么",
          "pinyin": "wèi shénme"
        },
        {
          "hanzi": "你去吗",
          "pinyin": "nǐ qù ma"
        }
      ]
    },
    "characters": {
      "title": {
        "en": "Radicals",
        "fr": "Les clés",
        "zh": "偏旁"
      },
      "explanation": {
        "en": "冫 (ice) is in 冷 (cold), 冰 (ice) and 准; 刂 (knife) is in 到 (arrive), 别 (don't) and 刻 (quarter).",
        "fr": "冫 (glace) se trouve dans 冷 (froid), 冰 (glace) et 准 ; 刂 (couteau) dans 到 (arriver), 别 (ne… pas) et 刻 (quart d'heure).",
        "zh": "“冫”和冰有关：冷、冰、准；“刂”是立刀旁：到、别、刻。"
      },
      "components": [
        {
          "component": "冫",
          "meaning": {
            "en": "ice",
            "fr": "glace"
          },
          "examples": [
            "冷",
            "冰"
          ]
        },
        {
          "component": "刂",
          "meaning": {
            "en": "knife",
            "fr": "couteau"
          },
          "examples": [
            "到",
            "别",
            "刻"
          ]
        }
      ]
    },
    "practice": {
      "task": {
        "en": "Explain to Laoshi why you are learning Chinese, with 因为…所以….",
        "fr": "Explique à Laoshi pourquoi tu apprends le chinois, avec 因为…所以….",
        "zh": "用“因为……所以……”告诉老师你为什么学汉语。"
      },
      "starter": "因为我想去中国工作，所以我学习汉语。"
    }
  },
  "lesson-hsk2-07": {
    "pronunciation": {
      "title": {
        "en": "Intonation of statements",
        "fr": "L'intonation de l'affirmation",
        "zh": "陈述句的句调"
      },
      "explanation": {
        "en": "A statement starts at normal height and falls on its last stressed word: 我家离学校很**近**↘. Don't let your voice rise at the end, or it sounds like a question.",
        "fr": "L'affirmation commence à hauteur normale et descend sur le dernier mot accentué : 我家离学校很**近**↘. Ne remontez pas la voix à la fin, sinon on croit à une question.",
        "zh": "陈述句句尾下降：我家离学校很近↘。句尾不要上扬，不然听起来像问句。"
      },
      "examples": [
        {
          "hanzi": "离这儿很近",
          "pinyin": "lí zhèr hěn jìn"
        },
        {
          "hanzi": "往前走",
          "pinyin": "wǎng qián zǒu"
        },
        {
          "hanzi": "在右边",
          "pinyin": "zài yòubian"
        },
        {
          "hanzi": "不远",
          "pinyin": "bù yuǎn"
        }
      ]
    },
    "characters": {
      "title": {
        "en": "Radicals",
        "fr": "Les clés",
        "zh": "偏旁"
      },
      "explanation": {
        "en": "方 (direction) is in 旅 (travel), 放 (put) and 旁 (side); 斤 (axe) is in 近 (near), 所 and 新 (new).",
        "fr": "方 (direction) se trouve dans 旅 (voyage), 放 (poser) et 旁 (côté) ; 斤 (hache) dans 近 (proche), 所 et 新 (nouveau).",
        "zh": "“方”：旅、放、旁；“斤”：近、所、新。"
      },
      "components": [
        {
          "component": "方",
          "meaning": {
            "en": "direction",
            "fr": "direction"
          },
          "examples": [
            "旅",
            "放",
            "旁"
          ]
        },
        {
          "component": "斤",
          "meaning": {
            "en": "axe",
            "fr": "hache"
          },
          "examples": [
            "近",
            "所",
            "新"
          ]
        }
      ]
    },
    "practice": {
      "task": {
        "en": "Explain the way from your home to a place you like, with 离 and 往.",
        "fr": "Explique le chemin de chez toi à un endroit que tu aimes, avec 离 et 往.",
        "zh": "用“离、往”说说从你家到一个地方怎么走。"
      },
      "starter": "我家离公园不远，往前走十分钟就到了。"
    }
  },
  "lesson-hsk2-09": {
    "pronunciation": {
      "title": {
        "en": "Intonation of yes/no questions",
        "fr": "L'intonation des questions fermées",
        "zh": "是非问句的句调"
      },
      "explanation": {
        "en": "Questions with 吗 keep the tones and lift a little at the very end: 这里有药店吗↗? Without 吗, a rising end alone can turn a statement into a question: 你去车站↗?",
        "fr": "Les questions avec 吗 gardent les tons et remontent un peu tout à la fin : 这里有药店吗↗ ? Sans 吗, une fin montante suffit à transformer une affirmation en question : 你去车站↗ ?",
        "zh": "“吗”问句句尾稍微上扬：这里有药店吗↗？不用“吗”时，句尾上扬也可以表示疑问：你去车站↗？"
      },
      "examples": [
        {
          "hanzi": "这里有药店吗",
          "pinyin": "zhèlǐ yǒu yàodiàn ma"
        },
        {
          "hanzi": "你去车站吗",
          "pinyin": "nǐ qù chēzhàn ma"
        },
        {
          "hanzi": "远吗",
          "pinyin": "yuǎn ma"
        },
        {
          "hanzi": "走路吗",
          "pinyin": "zǒulù ma"
        }
      ]
    },
    "characters": {
      "title": {
        "en": "Radicals",
        "fr": "Les clés",
        "zh": "偏旁"
      },
      "explanation": {
        "en": "广 (shelter) covers 店 (shop), 床 (bed) and 应; 覀 (cover) is on top of 要 (want) and 票 (ticket).",
        "fr": "广 (abri) couvre 店 (magasin), 床 (lit) et 应 ; 覀 (couvercle) coiffe 要 (vouloir) et 票 (billet).",
        "zh": "“广”和房子有关：店、床、应；“覀”：要、票。"
      },
      "components": [
        {
          "component": "广",
          "meaning": {
            "en": "shelter",
            "fr": "abri"
          },
          "examples": [
            "店",
            "床"
          ]
        },
        {
          "component": "覀",
          "meaning": {
            "en": "cover",
            "fr": "couvercle"
          },
          "examples": [
            "要",
            "票"
          ]
        }
      ]
    },
    "practice": {
      "task": {
        "en": "Ask Laoshi the way to the railway station and how long it takes.",
        "fr": "Demande à Laoshi le chemin de la gare et le temps qu'il faut.",
        "zh": "问老师去火车站怎么走，要多长时间。"
      },
      "starter": "请问，去火车站怎么走？要多长时间？"
    }
  },
  "lesson-hsk2-13": {
    "pronunciation": {
      "title": {
        "en": "Intonation of wh-questions",
        "fr": "L'intonation des questions ouvertes",
        "zh": "特指问句的句调"
      },
      "explanation": {
        "en": "In questions with 什么, 哪儿, 谁, the question word is stressed and the end falls: 你要送到**哪儿**↘?",
        "fr": "Dans les questions avec 什么, 哪儿, 谁, le mot interrogatif est accentué et la fin descend : 你要送到**哪儿**↘ ?",
        "zh": "特指问句中疑问代词重读，句尾下降：你要送到哪儿↘？"
      },
      "examples": [
        {
          "hanzi": "送到哪儿",
          "pinyin": "sòng dào nǎr"
        },
        {
          "hanzi": "什么事",
          "pinyin": "shénme shì"
        },
        {
          "hanzi": "谁让你来的",
          "pinyin": "shéi ràng nǐ lái de"
        },
        {
          "hanzi": "为什么",
          "pinyin": "wèi shénme"
        }
      ]
    },
    "characters": {
      "title": {
        "en": "Radicals",
        "fr": "Les clés",
        "zh": "偏旁"
      },
      "explanation": {
        "en": "力 (strength) is in 男 (man: strength in the field), 动 (move) and 加 (add); 寸 (inch, hand) is in 对 (right), 时 (time) and 等.",
        "fr": "力 (force) se trouve dans 男 (homme : la force aux champs), 动 (bouger) et 加 (ajouter) ; 寸 (pouce, main) dans 对 (juste), 时 (temps) et 等.",
        "zh": "“力”：男、动、加；“寸”：对、时、等。"
      },
      "components": [
        {
          "component": "力",
          "meaning": {
            "en": "strength",
            "fr": "force"
          },
          "examples": [
            "男",
            "动",
            "加"
          ]
        },
        {
          "component": "寸",
          "meaning": {
            "en": "inch, hand",
            "fr": "pouce, main"
          },
          "examples": [
            "对",
            "时"
          ]
        }
      ]
    },
    "practice": {
      "task": {
        "en": "Ask Laoshi politely for help and say what you want him to do (帮 / 让).",
        "fr": "Demande poliment de l'aide à Laoshi et dis-lui ce que tu veux qu'il fasse (帮 / 让).",
        "zh": "礼貌地请老师帮忙。"
      },
      "starter": "不好意思，你能帮我一个忙吗？"
    }
  },
  "lesson-hsk2-12": {
    "pronunciation": {
      "title": {
        "en": "Intonation of A-not-A questions",
        "fr": "L'intonation des questions A-不-A",
        "zh": "正反问句的句调"
      },
      "explanation": {
        "en": "In 懂不懂, 是不是, the first verb is stressed, 不 is light, and the end falls: 你**懂**不懂↘?",
        "fr": "Dans 懂不懂, 是不是, le premier verbe est accentué, 不 est léger et la fin descend : 你**懂**不懂↘ ?",
        "zh": "正反问句前一个动词重读，“不”读轻，句尾下降：你懂不懂↘？"
      },
      "examples": [
        {
          "hanzi": "懂不懂",
          "pinyin": "dǒng bu dǒng"
        },
        {
          "hanzi": "是不是",
          "pinyin": "shì bu shì"
        },
        {
          "hanzi": "去不去",
          "pinyin": "qù bu qù"
        },
        {
          "hanzi": "对不对",
          "pinyin": "duì bu duì"
        }
      ]
    },
    "characters": {
      "title": {
        "en": "Radicals",
        "fr": "Les clés",
        "zh": "偏旁"
      },
      "explanation": {
        "en": "攵 (tap, act) is in 教 (teach), 数 (number) and 放 (put); 夕 (evening) is in 名 (name), 多 (many) and 外 (outside).",
        "fr": "攵 (frapper, agir) se trouve dans 教 (enseigner), 数 (nombre) et 放 (poser) ; 夕 (soir) dans 名 (nom), 多 (beaucoup) et 外 (dehors).",
        "zh": "“攵”：教、数、放；“夕”：名、多、外。"
      },
      "components": [
        {
          "component": "攵",
          "meaning": {
            "en": "act",
            "fr": "agir"
          },
          "examples": [
            "教",
            "数",
            "放"
          ]
        },
        {
          "component": "夕",
          "meaning": {
            "en": "evening",
            "fr": "soir"
          },
          "examples": [
            "名",
            "多",
            "外"
          ]
        }
      ]
    },
    "practice": {
      "task": {
        "en": "Tell Laoshi how your last test went, using 完, 懂 and 错.",
        "fr": "Raconte à Laoshi comment s'est passé ton dernier examen, avec 完, 懂 et 错.",
        "zh": "用“完、懂、错”说说你上次考试的情况。"
      },
      "starter": "我考完试了，有一个题我没看懂。"
    }
  },
  "lesson-hsk2-03": {
    "pronunciation": {
      "title": {
        "en": "Intonation of commands",
        "fr": "L'intonation de l'ordre",
        "zh": "祈使句的句调"
      },
      "explanation": {
        "en": "Commands are short and fall firmly: 别去了↘. Add 吧 to soften them into advice: 休息两天吧.",
        "fr": "Les ordres sont brefs et descendent fermement : 别去了↘. Ajoutez 吧 pour en faire un conseil plus doux : 休息两天吧.",
        "zh": "祈使句短而有力，句尾下降：别去了↘。加“吧”语气更委婉：休息两天吧。"
      },
      "examples": [
        {
          "hanzi": "别去了",
          "pinyin": "bié qù le"
        },
        {
          "hanzi": "多休息",
          "pinyin": "duō xiūxi"
        },
        {
          "hanzi": "休息两天吧",
          "pinyin": "xiūxi liǎng tiān ba"
        },
        {
          "hanzi": "别着急",
          "pinyin": "bié zháojí"
        }
      ]
    },
    "characters": {
      "title": {
        "en": "Radicals",
        "fr": "Les clés",
        "zh": "偏旁"
      },
      "explanation": {
        "en": "疒 (illness) covers 疼 (ache) and 病 (ill); 舌 (tongue) is in 舒 (comfortable) and 甜 (sweet).",
        "fr": "疒 (maladie) couvre 疼 (douleur) et 病 (malade) ; 舌 (langue) se trouve dans 舒 (confortable) et 甜 (sucré).",
        "zh": "“疒”和疾病有关：疼、病；“舌”：舒、甜。"
      },
      "components": [
        {
          "component": "疒",
          "meaning": {
            "en": "illness",
            "fr": "maladie"
          },
          "examples": [
            "疼",
            "病"
          ]
        },
        {
          "component": "舌",
          "meaning": {
            "en": "tongue",
            "fr": "langue"
          },
          "examples": [
            "舒",
            "甜"
          ]
        }
      ]
    },
    "practice": {
      "task": {
        "en": "Tell Doctor Laoshi your symptoms and listen to his advice.",
        "fr": "Décris tes symptômes au docteur Laoshi et écoute ses conseils.",
        "zh": "跟“医生”老师说你哪儿不舒服。"
      },
      "starter": "医生，我头疼，身体不舒服。"
    }
  },
  "lesson-hsk2-14": {
    "pronunciation": {
      "title": {
        "en": "Intonation of choice questions",
        "fr": "L'intonation des questions à choix",
        "zh": "选择问句的句调"
      },
      "explanation": {
        "en": "With 还是, the voice rises on the first option and falls on the second: 咖啡↗还是茶↘?",
        "fr": "Avec 还是, la voix monte sur la première option et descend sur la seconde : 咖啡↗还是茶↘ ?",
        "zh": "选择问句前一项上扬，后一项下降：咖啡↗还是茶↘？"
      },
      "examples": [
        {
          "hanzi": "咖啡还是茶",
          "pinyin": "kāfēi háishi chá"
        },
        {
          "hanzi": "红茶还是绿茶",
          "pinyin": "hóngchá háishi lǜchá"
        },
        {
          "hanzi": "鱼还是肉",
          "pinyin": "yú háishi ròu"
        },
        {
          "hanzi": "这个还是那个",
          "pinyin": "zhège háishi nàge"
        }
      ]
    },
    "characters": {
      "title": {
        "en": "Radicals",
        "fr": "Les clés",
        "zh": "偏旁"
      },
      "explanation": {
        "en": "鱼 (fish) is a whole character and a part of 鲜 (fresh); 米 (rice) is in 粉 (powder) and 糖 (sugar).",
        "fr": "鱼 (poisson) est un caractère à lui seul et un élément de 鲜 (frais) ; 米 (riz) se trouve dans 粉 (poudre) et 糖 (sucre).",
        "zh": "“鱼”可以单用，也在“鲜”里；“米”：粉、糖。"
      },
      "components": [
        {
          "component": "鱼",
          "meaning": {
            "en": "fish",
            "fr": "poisson"
          },
          "examples": [
            "鲜"
          ]
        },
        {
          "component": "米",
          "meaning": {
            "en": "rice",
            "fr": "riz"
          },
          "examples": [
            "粉",
            "糖"
          ]
        }
      ]
    },
    "practice": {
      "task": {
        "en": "Order drinks for you and a friend, offering choices with 还是.",
        "fr": "Commande des boissons pour toi et un ami, en proposant des choix avec 还是.",
        "zh": "用“还是”问朋友喝什么，再点饮料。"
      },
      "starter": "你喝红茶还是绿茶？我要一杯咖啡。"
    },
    "culture": {
      "title": {
        "en": "Tea in China",
        "fr": "Le thé en Chine",
        "zh": "中国的茶文化"
      },
      "body": {
        "en": "Green tea is the most common, especially in the south; many northerners love jasmine tea. A host keeps refilling your cup; tapping two fingers on the table is a silent “thank you”.",
        "fr": "Le thé vert est le plus courant, surtout dans le sud ; beaucoup de gens du nord préfèrent le thé au jasmin. L'hôte remplit sans cesse votre tasse ; taper deux doigts sur la table est un « merci » silencieux.",
        "zh": "中国人最常喝绿茶，南方尤其多；很多北方人喜欢茉莉花茶。主人会一直给客人倒茶，客人用两个手指轻敲桌子表示感谢。"
      }
    }
  },
  "lesson-hsk2-16": {
    "pronunciation": {
      "title": {
        "en": "Stressing the complement",
        "fr": "Accentuer le complément",
        "zh": "补语重读"
      },
      "explanation": {
        "en": "In 说得很好, 得 is light and the complement after it carries the stress: 说得很**好**, 跑得很**快**.",
        "fr": "Dans 说得很好, 得 est léger et le complément qui suit porte l'accent : 说得很**好**, 跑得很**快**.",
        "zh": "“动词＋得＋补语”中，“得”读轻，补语重读：说得很好、跑得很快。"
      },
      "examples": [
        {
          "hanzi": "说得很好",
          "pinyin": "shuō de hěn hǎo"
        },
        {
          "hanzi": "跑得很快",
          "pinyin": "pǎo de hěn kuài"
        },
        {
          "hanzi": "写得不错",
          "pinyin": "xiě de búcuò"
        },
        {
          "hanzi": "睡得很晚",
          "pinyin": "shuì de hěn wǎn"
        }
      ]
    },
    "characters": {
      "title": {
        "en": "Radicals",
        "fr": "Les clés",
        "zh": "偏旁"
      },
      "explanation": {
        "en": "夂 (walk slowly) is in 备 (prepare), 夏 (summer) and 各 (each); 戈 (spear) is in 我 (I), 或 (or) and 找 (look for).",
        "fr": "夂 (marcher lentement) se trouve dans 备 (préparer), 夏 (été) et 各 (chaque) ; 戈 (lance) dans 我 (je), 或 (ou) et 找 (chercher).",
        "zh": "“夂”：备、夏、各；“戈”：我、或、找。"
      },
      "components": [
        {
          "component": "夂",
          "meaning": {
            "en": "walk slowly",
            "fr": "marcher lentement"
          },
          "examples": [
            "备",
            "夏",
            "各"
          ]
        },
        {
          "component": "戈",
          "meaning": {
            "en": "spear",
            "fr": "lance"
          },
          "examples": [
            "我",
            "或",
            "找"
          ]
        }
      ]
    },
    "practice": {
      "task": {
        "en": "Tell Laoshi what you do well and not so well (得).",
        "fr": "Dis à Laoshi ce que tu fais bien et moins bien (得).",
        "zh": "用“得”说说你什么做得好，什么做得不好。"
      },
      "starter": "我汉语说得不太好，但是写得很快。"
    }
  },
  "lesson-hsk2-08": {
    "pronunciation": {
      "title": {
        "en": "Light direction words",
        "fr": "Les mots de direction légers",
        "zh": "趋向补语读轻声"
      },
      "explanation": {
        "en": "After a verb, 来 and 去 are usually light: 进来 jìnlai, 出去 chūqu, 回来 huílai. Keep the stress on the first verb.",
        "fr": "Après un verbe, 来 et 去 sont généralement légers : 进来 jìnlai, 出去 chūqu, 回来 huílai. L'accent reste sur le premier verbe.",
        "zh": "动词后的“来、去”一般读轻声：进来、出去、回来。"
      },
      "examples": [
        {
          "hanzi": "进来",
          "pinyin": "jìnlai"
        },
        {
          "hanzi": "出去",
          "pinyin": "chūqu"
        },
        {
          "hanzi": "回来",
          "pinyin": "huílai"
        },
        {
          "hanzi": "上去",
          "pinyin": "shàngqu"
        }
      ]
    },
    "characters": {
      "title": {
        "en": "Radicals",
        "fr": "Les clés",
        "zh": "偏旁"
      },
      "explanation": {
        "en": "尸 (body, roof) is on 屋 (room) and 层 (floor); 山 (mountain) is a picture of three peaks and appears in 岁 (year of age).",
        "fr": "尸 (corps, toit) coiffe 屋 (pièce) et 层 (étage) ; 山 (montagne) dessine trois sommets et se retrouve dans 岁 (année d'âge).",
        "zh": "“尸”：屋、层；“山”像三座山峰，“岁”里也有“山”。"
      },
      "components": [
        {
          "component": "尸",
          "meaning": {
            "en": "roof",
            "fr": "toit"
          },
          "examples": [
            "屋",
            "层"
          ]
        },
        {
          "component": "山",
          "meaning": {
            "en": "mountain",
            "fr": "montagne"
          },
          "examples": [
            "山",
            "岁"
          ]
        }
      ]
    },
    "practice": {
      "task": {
        "en": "Tell Laoshi where you went today and when you came back (出去 / 回来).",
        "fr": "Dis à Laoshi où tu es allé aujourd'hui et quand tu es revenu (出去 / 回来).",
        "zh": "告诉老师你今天去哪儿了，几点回来的。"
      },
      "starter": "今天下午我出去跑步，六点回来了。"
    }
  },
  "lesson-hsk2-10": {
    "pronunciation": {
      "title": {
        "en": "一 before measure words",
        "fr": "一 devant les classificateurs",
        "zh": "“一”在量词前的变调"
      },
      "explanation": {
        "en": "Count with care: 一次 yí cì and 一会儿 yíhuìr (4th tone next), but 一周 yì zhōu and 一天 yì tiān (1st tone next).",
        "fr": "Attention en comptant : 一次 yí cì et 一会儿 yíhuìr (4e ton ensuite), mais 一周 yì zhōu et 一天 yì tiān (1er ton ensuite).",
        "zh": "数数时注意“一”的变调：一次、一会儿读 yí；一周、一天读 yì。"
      },
      "examples": [
        {
          "hanzi": "一次",
          "pinyin": "yí cì"
        },
        {
          "hanzi": "一会儿",
          "pinyin": "yíhuìr"
        },
        {
          "hanzi": "一周",
          "pinyin": "yì zhōu"
        },
        {
          "hanzi": "每天",
          "pinyin": "měi tiān"
        }
      ]
    },
    "characters": {
      "title": {
        "en": "Radicals",
        "fr": "Les clés",
        "zh": "偏旁"
      },
      "explanation": {
        "en": "生 (be born, grow) gives its sound to 星 (star) and 姓 (surname); 每 (every) is inside 海 (sea).",
        "fr": "生 (naître, pousser) donne sa prononciation à 星 (étoile) et 姓 (nom de famille) ; 每 (chaque) est dans 海 (mer).",
        "zh": "“生”给“星、姓”表音；“每”在“海”里。"
      },
      "components": [
        {
          "component": "生",
          "meaning": {
            "en": "grow",
            "fr": "pousser"
          },
          "examples": [
            "星",
            "姓"
          ]
        },
        {
          "component": "每",
          "meaning": {
            "en": "every",
            "fr": "chaque"
          },
          "examples": [
            "海"
          ]
        }
      ]
    },
    "practice": {
      "task": {
        "en": "Tell Laoshi how often you do three activities (每天, 一周两次…).",
        "fr": "Dis à Laoshi à quelle fréquence tu fais trois activités (每天, 一周两次…).",
        "zh": "告诉老师你做三件事的频率。"
      },
      "starter": "我每天跑步，一周去两次超市。"
    },
    "culture": {
      "title": {
        "en": "Chinese New Year",
        "fr": "Le Nouvel An chinois",
        "zh": "过年"
      },
      "body": {
        "en": "Spring Festival follows the lunar calendar, so it falls between late January and mid-February. Families travel home for the New Year's Eve dinner, children receive red envelopes (红包), and the festivities last until the Lantern Festival.",
        "fr": "La fête du Printemps suit le calendrier lunaire : elle tombe entre fin janvier et mi-février. Les familles rentrent pour le dîner du réveillon, les enfants reçoivent des enveloppes rouges (红包), et la fête dure jusqu'à la fête des Lanternes.",
        "zh": "春节按农历过，一般在一月底到二月中。除夕晚上全家人一起吃年夜饭，孩子们收红包，一直热闹到元宵节。"
      }
    }
  },
  "lesson-hsk2-15": {
    "pronunciation": {
      "title": {
        "en": "Sentence-final 了",
        "fr": "Le 了 de fin de phrase",
        "zh": "句尾的“了”"
      },
      "explanation": {
        "en": "Final 了 is short and light; stress the word just before it: 天**晴**了, 我**累**了.",
        "fr": "Le 了 final est bref et léger ; on appuie sur le mot juste avant : 天**晴**了, 我**累**了.",
        "zh": "句尾“了”读得轻而短，前面的词重读：天晴了、我累了。"
      },
      "examples": [
        {
          "hanzi": "天晴了",
          "pinyin": "tiān qíng le"
        },
        {
          "hanzi": "下雨了",
          "pinyin": "xià yǔ le"
        },
        {
          "hanzi": "花开了",
          "pinyin": "huā kāi le"
        },
        {
          "hanzi": "我累了",
          "pinyin": "wǒ lèi le"
        }
      ]
    },
    "characters": {
      "title": {
        "en": "Radicals",
        "fr": "Les clés",
        "zh": "偏旁"
      },
      "explanation": {
        "en": "鸟 (bird) is a character and a part of 鸡 (chicken) and 鸭 (duck); 火 (fire) is in 灯 (lamp).",
        "fr": "鸟 (oiseau) est un caractère et un élément de 鸡 (poulet) et 鸭 (canard) ; 火 (feu) se trouve dans 灯 (lampe).",
        "zh": "“鸟”：鸡、鸭；“火”：灯。"
      },
      "components": [
        {
          "component": "鸟",
          "meaning": {
            "en": "bird",
            "fr": "oiseau"
          },
          "examples": [
            "鸡",
            "鸭"
          ]
        },
        {
          "component": "火",
          "meaning": {
            "en": "fire",
            "fr": "feu"
          },
          "examples": [
            "灯"
          ]
        }
      ]
    },
    "practice": {
      "task": {
        "en": "Describe today's weather and what has changed (了).",
        "fr": "Décris la météo d'aujourd'hui et ce qui a changé (了).",
        "zh": "说说今天的天气有什么变化。"
      },
      "starter": "今天早上下雨了，现在天晴了。"
    }
  }
};

export const HSK3_EXTRAS: Record<string, HskLessonExtras> = {
  "lesson-hsk3-01": {
    "characters": {
      "title": {
        "en": "Pictographs",
        "fr": "Les pictogrammes",
        "zh": "象形字"
      },
      "explanation": {
        "en": "The oldest characters are drawings: 山 shows three peaks, 日 the sun, 月 the moon, 木 a tree, 人 a walking person.",
        "fr": "Les plus anciens caractères sont des dessins : 山 montre trois sommets, 日 le soleil, 月 la lune, 木 un arbre, 人 une personne qui marche.",
        "zh": "最早的汉字像图画：山像三座山峰，日像太阳，月像月亮，木像树，人像走路的人。"
      },
      "components": [
        {
          "component": "山",
          "meaning": {
            "en": "mountain",
            "fr": "montagne"
          },
          "examples": [
            "山"
          ]
        },
        {
          "component": "日",
          "meaning": {
            "en": "sun",
            "fr": "soleil"
          },
          "examples": [
            "日"
          ]
        },
        {
          "component": "木",
          "meaning": {
            "en": "tree",
            "fr": "arbre"
          },
          "examples": [
            "木"
          ]
        }
      ]
    },
    "saying": {
      "hanzi": "读万卷书，行万里路",
      "pinyin": "Dú wàn juàn shū, xíng wàn lǐ lù",
      "meaning": {
        "en": "Read ten thousand books, travel ten thousand miles.",
        "fr": "Lire dix mille livres, parcourir dix mille lieues.",
        "zh": "多读书，也要多出去看看世界。"
      }
    },
    "practice": {
      "task": {
        "en": "Plan a trip with Laoshi and book a hotel.",
        "fr": "Prépare un voyage avec Laoshi et réserve un hôtel.",
        "zh": "跟老师说你的旅行计划，预订宾馆。"
      },
      "starter": "我打算下个月去旅行，想预订一个宾馆。"
    }
  },
  "lesson-hsk3-02": {
    "characters": {
      "title": {
        "en": "Indicative characters",
        "fr": "Les caractères indicatifs",
        "zh": "指事字"
      },
      "explanation": {
        "en": "Some characters point to an idea with a mark: 上 and 下 put a stroke above or below a line; 本 (root) marks the bottom of a tree 木, 末 (tip) its top.",
        "fr": "Certains caractères désignent une idée par un signe : 上 et 下 placent un trait au-dessus ou en dessous d'une ligne ; 本 (racine) marque le bas de l'arbre 木, 末 (bout) son sommet.",
        "zh": "指事字用符号表示意思：上、下在横线上下加记号；“本”在“木”下面加一横表示树根，“末”在上面表示树梢。"
      },
      "components": [
        {
          "component": "上",
          "meaning": {
            "en": "above",
            "fr": "dessus"
          },
          "examples": [
            "上"
          ]
        },
        {
          "component": "下",
          "meaning": {
            "en": "below",
            "fr": "dessous"
          },
          "examples": [
            "下"
          ]
        },
        {
          "component": "本",
          "meaning": {
            "en": "root",
            "fr": "racine"
          },
          "examples": [
            "本"
          ]
        }
      ]
    },
    "saying": {
      "hanzi": "三个臭皮匠，顶个诸葛亮",
      "pinyin": "Sān ge chòupíjiàng, dǐng ge Zhūgě Liàng",
      "meaning": {
        "en": "Three ordinary people together are as wise as a genius.",
        "fr": "Trois personnes ordinaires réunies valent un génie.",
        "zh": "大家一起想办法，比一个人聪明。"
      }
    },
    "practice": {
      "task": {
        "en": "Tell Laoshi about a task you completed with colleagues.",
        "fr": "Parle à Laoshi d'un travail que tu as terminé avec des collègues.",
        "zh": "说说你和同事一起完成的工作。"
      },
      "starter": "我和同事一起完成了一个报告。"
    }
  },
  "lesson-hsk3-12": {
    "characters": {
      "title": {
        "en": "Word game",
        "fr": "Jeu de mots",
        "zh": "旧字新词"
      },
      "explanation": {
        "en": "You already know this character: see how it builds new words. Guessing the meaning of a new word from its parts is a key skill at HSK 3.",
        "fr": "Tu connais déjà ce caractère : regarde comment il forme de nouveaux mots. Deviner le sens d'un mot nouveau à partir de ses éléments est une compétence clé au HSK 3.",
        "zh": "你已经认识这个字了，看看它能组成哪些新词。根据字义猜词义是HSK三级的重要能力。"
      },
      "components": [
        {
          "component": "方",
          "meaning": {
            "en": "direction, side",
            "fr": "direction, côté"
          },
          "examples": [
            "方向",
            "北方",
            "地方",
            "方便"
          ]
        }
      ]
    },
    "saying": {
      "hanzi": "条条大路通罗马",
      "pinyin": "Tiáotiáo dà lù tōng Luómǎ",
      "meaning": {
        "en": "All roads lead to Rome.",
        "fr": "Tous les chemins mènent à Rome.",
        "zh": "做一件事可以有很多方法。"
      }
    },
    "practice": {
      "task": {
        "en": "Describe where your home town is and what is near it.",
        "fr": "Décris où se trouve ta ville natale et ce qu'il y a autour.",
        "zh": "说说你的家乡在哪儿，附近有什么。"
      },
      "starter": "我的家乡在我们国家的南方。"
    }
  },
  "lesson-hsk3-13": {
    "characters": {
      "title": {
        "en": "Word game",
        "fr": "Jeu de mots",
        "zh": "旧字新词"
      },
      "explanation": {
        "en": "You already know this character: see how it builds new words. Guessing the meaning of a new word from its parts is a key skill at HSK 3.",
        "fr": "Tu connais déjà ce caractère : regarde comment il forme de nouveaux mots. Deviner le sens d'un mot nouveau à partir de ses éléments est une compétence clé au HSK 3.",
        "zh": "你已经认识这个字了，看看它能组成哪些新词。根据字义猜词义是HSK三级的重要能力。"
      },
      "components": [
        {
          "component": "车",
          "meaning": {
            "en": "vehicle",
            "fr": "véhicule"
          },
          "examples": [
            "汽车",
            "自行车",
            "火车",
            "车站"
          ]
        }
      ]
    },
    "saying": {
      "hanzi": "欲速则不达",
      "pinyin": "Yù sù zé bù dá",
      "meaning": {
        "en": "More haste, less speed.",
        "fr": "Qui va trop vite n'arrive pas.",
        "zh": "太着急反而做不好。"
      }
    },
    "practice": {
      "task": {
        "en": "Tell Laoshi how you get to the station and which way you go (向 / 往).",
        "fr": "Explique à Laoshi comment tu vas à la gare et par où (向 / 往).",
        "zh": "告诉老师你怎么去火车站，往哪边走。"
      },
      "starter": "我们骑自行车去火车站，过了路口往左走。"
    }
  },
  "lesson-hsk3-11": {
    "characters": {
      "title": {
        "en": "Word game",
        "fr": "Jeu de mots",
        "zh": "旧字新词"
      },
      "explanation": {
        "en": "You already know this character: see how it builds new words. Guessing the meaning of a new word from its parts is a key skill at HSK 3.",
        "fr": "Tu connais déjà ce caractère : regarde comment il forme de nouveaux mots. Deviner le sens d'un mot nouveau à partir de ses éléments est une compétence clé au HSK 3.",
        "zh": "你已经认识这个字了，看看它能组成哪些新词。根据字义猜词义是HSK三级的重要能力。"
      },
      "components": [
        {
          "component": "园",
          "meaning": {
            "en": "garden",
            "fr": "jardin"
          },
          "examples": [
            "公园",
            "动物园",
            "花园",
            "校园"
          ]
        }
      ]
    },
    "saying": {
      "hanzi": "山外有山，人外有人",
      "pinyin": "Shān wài yǒu shān, rén wài yǒu rén",
      "meaning": {
        "en": "There is always a mountain beyond the mountain, and someone better than you.",
        "fr": "Il y a toujours une montagne derrière la montagne, et quelqu'un de meilleur que soi.",
        "zh": "永远有比你更好的人，不要骄傲。"
      }
    },
    "practice": {
      "task": {
        "en": "Describe a park or zoo you like: what is there?",
        "fr": "Décris un parc ou un zoo que tu aimes : qu'y a-t-il ?",
        "zh": "说说你喜欢的公园或动物园里有什么。"
      },
      "starter": "我家附近有一个公园，里面有很多树。"
    }
  },
  "lesson-hsk3-06": {
    "characters": {
      "title": {
        "en": "Associative compounds",
        "fr": "Les agrégats logiques",
        "zh": "会意字"
      },
      "explanation": {
        "en": "Two meanings combine into a new one: 明 (bright) = sun 日 + moon 月; 休 (rest) = a person 亻 leaning on a tree 木; 从 (follow) = one person behind another.",
        "fr": "Deux sens se combinent en un nouveau : 明 (clair) = soleil 日 + lune 月 ; 休 (se reposer) = une personne 亻 adossée à un arbre 木 ; 从 (suivre) = une personne derrière une autre.",
        "zh": "会意字把两个字的意思合在一起：日＋月＝明；人靠着树＝休；一个人跟着一个人＝从。"
      },
      "components": [
        {
          "component": "明",
          "meaning": {
            "en": "bright",
            "fr": "clair"
          },
          "examples": [
            "日",
            "月"
          ]
        },
        {
          "component": "休",
          "meaning": {
            "en": "rest",
            "fr": "repos"
          },
          "examples": [
            "亻",
            "木"
          ]
        },
        {
          "component": "从",
          "meaning": {
            "en": "follow",
            "fr": "suivre"
          },
          "examples": [
            "人",
            "人"
          ]
        }
      ]
    },
    "saying": {
      "hanzi": "人不可貌相",
      "pinyin": "Rén bù kě mào xiàng",
      "meaning": {
        "en": "Don't judge a person by appearance.",
        "fr": "Il ne faut pas juger les gens sur leur apparence.",
        "zh": "不能只看一个人长什么样。"
      }
    },
    "practice": {
      "task": {
        "en": "Describe your best friend's looks and personality with 又…又….",
        "fr": "Décris l'apparence et le caractère de ton meilleur ami avec 又…又….",
        "zh": "用“又……又……”描述你的好朋友。"
      },
      "starter": "我的朋友又高又瘦，又聪明又热情。"
    }
  },
  "lesson-hsk3-05": {
    "characters": {
      "title": {
        "en": "Word game",
        "fr": "Jeu de mots",
        "zh": "旧字新词"
      },
      "explanation": {
        "en": "You already know this character: see how it builds new words. Guessing the meaning of a new word from its parts is a key skill at HSK 3.",
        "fr": "Tu connais déjà ce caractère : regarde comment il forme de nouveaux mots. Deviner le sens d'un mot nouveau à partir de ses éléments est une compétence clé au HSK 3.",
        "zh": "你已经认识这个字了，看看它能组成哪些新词。根据字义猜词义是HSK三级的重要能力。"
      },
      "components": [
        {
          "component": "人",
          "meaning": {
            "en": "person",
            "fr": "personne"
          },
          "examples": [
            "客人",
            "名人",
            "病人",
            "大人"
          ]
        }
      ]
    },
    "saying": {
      "hanzi": "有朋自远方来，不亦乐乎",
      "pinyin": "Yǒu péng zì yuǎnfāng lái, bú yì lè hū",
      "meaning": {
        "en": "Isn't it a joy to have friends come from afar? (Confucius)",
        "fr": "N'est-ce pas une joie d'accueillir des amis venus de loin ? (Confucius)",
        "zh": "有朋友从远方来，多么快乐啊！（孔子）"
      }
    },
    "practice": {
      "task": {
        "en": "Describe the guests at a party, with 有的…有的….",
        "fr": "Décris les invités d'une fête, avec 有的…有的….",
        "zh": "用“有的……有的……”说说晚会上的客人。"
      },
      "starter": "晚会上的客人有的是留学生，有的是老师。"
    },
    "culture": {
      "title": {
        "en": "Weddings",
        "fr": "Les mariages",
        "zh": "中国人的婚礼"
      },
      "body": {
        "en": "Red is the colour of weddings: red decorations, the character 囍 (double happiness) and red envelopes of money as gifts. Many brides now wear a white dress for photos and a red qipao for the banquet.",
        "fr": "Le rouge est la couleur du mariage : décorations rouges, caractère 囍 (double bonheur) et enveloppes rouges d'argent en cadeau. Beaucoup de mariées portent aujourd'hui une robe blanche pour les photos et un qipao rouge pour le banquet.",
        "zh": "中国婚礼喜欢红色：红色的装饰、大红“囍”字，客人送红包。现在很多新娘拍照穿白色婚纱，婚宴上穿红色的旗袍。"
      }
    }
  },
  "lesson-hsk3-04": {
    "characters": {
      "title": {
        "en": "Word game",
        "fr": "Jeu de mots",
        "zh": "旧字新词"
      },
      "explanation": {
        "en": "You already know this character: see how it builds new words. Guessing the meaning of a new word from its parts is a key skill at HSK 3.",
        "fr": "Tu connais déjà ce caractère : regarde comment il forme de nouveaux mots. Deviner le sens d'un mot nouveau à partir de ses éléments est une compétence clé au HSK 3.",
        "zh": "你已经认识这个字了，看看它能组成哪些新词。根据字义猜词义是HSK三级的重要能力。"
      },
      "components": [
        {
          "component": "生",
          "meaning": {
            "en": "life, birth",
            "fr": "vie, naissance"
          },
          "examples": [
            "生活",
            "学生",
            "医生",
            "生日"
          ]
        }
      ]
    },
    "saying": {
      "hanzi": "活到老，学到老",
      "pinyin": "Huó dào lǎo, xué dào lǎo",
      "meaning": {
        "en": "Live and learn: keep learning as long as you live.",
        "fr": "On apprend à tout âge.",
        "zh": "人活着就要一直学习。"
      }
    },
    "practice": {
      "task": {
        "en": "Tell Laoshi how your city has changed, with 越来越.",
        "fr": "Raconte à Laoshi comment ta ville a changé, avec 越来越.",
        "zh": "用“越来越”说说你的城市的变化。"
      },
      "starter": "我们的城市越来越大，生活越来越方便了。"
    }
  },
  "lesson-hsk3-15": {
    "characters": {
      "title": {
        "en": "Sound + meaning characters (1)",
        "fr": "Caractères son + sens (1)",
        "zh": "形声字（一）"
      },
      "explanation": {
        "en": "Most characters have a meaning part and a sound part: 妈 = 女 (woman) + 马 (sound mǎ); 问 = 门 (sound mén) + 口 (mouth). Learn the sound parts and you can often guess the reading.",
        "fr": "La plupart des caractères ont une partie sens et une partie son : 妈 = 女 (femme) + 马 (son mǎ) ; 问 = 门 (son mén) + 口 (bouche). En connaissant les parties sonores, on devine souvent la lecture.",
        "zh": "大部分汉字是形声字，一部分表义，一部分表音：妈＝女＋马；问＝门＋口。"
      },
      "components": [
        {
          "component": "马",
          "meaning": {
            "en": "sound mǎ",
            "fr": "son mǎ"
          },
          "examples": [
            "妈",
            "吗"
          ]
        },
        {
          "component": "门",
          "meaning": {
            "en": "sound mén",
            "fr": "son mén"
          },
          "examples": [
            "们",
            "问"
          ]
        }
      ]
    },
    "saying": {
      "hanzi": "熟能生巧",
      "pinyin": "Shú néng shēng qiǎo",
      "meaning": {
        "en": "Practice makes perfect.",
        "fr": "C'est en forgeant qu'on devient forgeron.",
        "zh": "多练习就能做得好。"
      }
    },
    "practice": {
      "task": {
        "en": "Tell Laoshi what you can and can't understand yet in Chinese (听得懂 / 听不懂).",
        "fr": "Dis à Laoshi ce que tu comprends et ne comprends pas encore en chinois (听得懂 / 听不懂).",
        "zh": "说说你汉语听得懂什么，听不懂什么。"
      },
      "starter": "简单的句子我听得懂，新闻我还听不懂。"
    }
  },
  "lesson-hsk3-21": {
    "characters": {
      "title": {
        "en": "Word game",
        "fr": "Jeu de mots",
        "zh": "旧字新词"
      },
      "explanation": {
        "en": "You already know this character: see how it builds new words. Guessing the meaning of a new word from its parts is a key skill at HSK 3.",
        "fr": "Tu connais déjà ce caractère : regarde comment il forme de nouveaux mots. Deviner le sens d'un mot nouveau à partir de ses éléments est une compétence clé au HSK 3.",
        "zh": "你已经认识这个字了，看看它能组成哪些新词。根据字义猜词义是HSK三级的重要能力。"
      },
      "components": [
        {
          "component": "时",
          "meaning": {
            "en": "time",
            "fr": "temps"
          },
          "examples": [
            "时间",
            "小时",
            "时候",
            "有时"
          ]
        }
      ]
    },
    "saying": {
      "hanzi": "一寸光阴一寸金",
      "pinyin": "Yí cùn guāngyīn yí cùn jīn",
      "meaning": {
        "en": "An inch of time is an inch of gold.",
        "fr": "Chaque instant vaut de l'or.",
        "zh": "时间像金子一样宝贵。"
      }
    },
    "practice": {
      "task": {
        "en": "Tell Laoshi about a time you were late, with 刚, 刚才 or 才.",
        "fr": "Raconte à Laoshi une fois où tu étais en retard, avec 刚, 刚才 ou 才.",
        "zh": "用“刚、刚才、才”说一次你迟到的事。"
      },
      "starter": "昨天我九点才到学校，刚到就上课了。"
    }
  },
  "lesson-hsk3-16": {
    "characters": {
      "title": {
        "en": "Word game",
        "fr": "Jeu de mots",
        "zh": "旧字新词"
      },
      "explanation": {
        "en": "You already know this character: see how it builds new words. Guessing the meaning of a new word from its parts is a key skill at HSK 3.",
        "fr": "Tu connais déjà ce caractère : regarde comment il forme de nouveaux mots. Deviner le sens d'un mot nouveau à partir de ses éléments est une compétence clé au HSK 3.",
        "zh": "你已经认识这个字了，看看它能组成哪些新词。根据字义猜词义是HSK三级的重要能力。"
      },
      "components": [
        {
          "component": "球",
          "meaning": {
            "en": "ball",
            "fr": "balle"
          },
          "examples": [
            "网球",
            "篮球",
            "足球",
            "球场"
          ]
        }
      ]
    },
    "saying": {
      "hanzi": "生命在于运动",
      "pinyin": "Shēngmìng zàiyú yùndòng",
      "meaning": {
        "en": "Life lies in movement.",
        "fr": "La vie, c'est le mouvement.",
        "zh": "运动让人健康。"
      }
    },
    "practice": {
      "task": {
        "en": "Tell Laoshi which sports and hobbies interest you (对…感兴趣).",
        "fr": "Dis à Laoshi quels sports et loisirs t'intéressent (对…感兴趣).",
        "zh": "说说你对什么运动感兴趣。"
      },
      "starter": "我对网球很感兴趣，周末常常去打球。"
    },
    "culture": {
      "title": {
        "en": "Traditional sports",
        "fr": "Les sports traditionnels",
        "zh": "中国的传统运动"
      },
      "body": {
        "en": "In the morning, parks fill with people doing tai chi (太极拳), kicking a shuttlecock (踢毽子) or dancing. Kites (风筝) fly in spring, and dragon-boat races (赛龙舟) are held for the Dragon Boat Festival.",
        "fr": "Le matin, les parcs se remplissent de gens qui font du tai-chi (太极拳), jouent au volant avec le pied (踢毽子) ou dansent. Les cerfs-volants (风筝) volent au printemps, et des courses de bateaux-dragons (赛龙舟) ont lieu pour la fête des Bateaux-Dragons.",
        "zh": "早上公园里有很多人打太极拳、踢毽子、跳舞。春天人们放风筝，端午节有赛龙舟。"
      }
    }
  },
  "lesson-hsk3-08": {
    "characters": {
      "title": {
        "en": "Word game",
        "fr": "Jeu de mots",
        "zh": "旧字新词"
      },
      "explanation": {
        "en": "You already know this character: see how it builds new words. Guessing the meaning of a new word from its parts is a key skill at HSK 3.",
        "fr": "Tu connais déjà ce caractère : regarde comment il forme de nouveaux mots. Deviner le sens d'un mot nouveau à partir de ses éléments est une compétence clé au HSK 3.",
        "zh": "你已经认识这个字了，看看它能组成哪些新词。根据字义猜词义是HSK三级的重要能力。"
      },
      "components": [
        {
          "component": "饭",
          "meaning": {
            "en": "meal",
            "fr": "repas"
          },
          "examples": [
            "米饭",
            "早饭",
            "饭馆",
            "做饭"
          ]
        }
      ]
    },
    "saying": {
      "hanzi": "民以食为天",
      "pinyin": "Mín yǐ shí wéi tiān",
      "meaning": {
        "en": "For the people, food comes first.",
        "fr": "Pour le peuple, la nourriture passe avant tout.",
        "zh": "吃饭是人们生活中最重要的事。"
      }
    },
    "practice": {
      "task": {
        "en": "Tell Laoshi what you like to eat, with 什么都 or 哪儿都.",
        "fr": "Dis à Laoshi ce que tu aimes manger, avec 什么都 ou 哪儿都.",
        "zh": "用“什么都”说说你爱吃什么。"
      },
      "starter": "我什么都喜欢吃，最喜欢吃饺子。"
    },
    "culture": {
      "title": {
        "en": "Birthdays",
        "fr": "Les anniversaires",
        "zh": "过生日吃什么"
      },
      "body": {
        "en": "On birthdays many Chinese people eat long-life noodles (长寿面), one long strand that should not be cut. Older people are offered peach-shaped buns (寿桃), a symbol of long life; birthday cakes are popular too.",
        "fr": "Pour leur anniversaire, beaucoup de Chinois mangent des nouilles de longévité (长寿面), un long fil qu'on ne coupe pas. On offre aux personnes âgées des brioches en forme de pêche (寿桃), symbole de longue vie ; le gâteau d'anniversaire est aussi populaire.",
        "zh": "过生日时，很多中国人吃长寿面，面条长长的，不能切断。给老人祝寿常送寿桃。现在也吃生日蛋糕。"
      }
    }
  },
  "lesson-hsk3-29": {
    "characters": {
      "title": {
        "en": "Sound + meaning characters (2)",
        "fr": "Caractères son + sens (2)",
        "zh": "形声字（二）"
      },
      "explanation": {
        "en": "One sound part, many meanings: 青 (qīng) gives 清 (clear, water 氵), 请 (please, speech 讠), 情 (feeling, heart 忄) and 晴 (sunny, sun 日).",
        "fr": "Une même partie sonore, plusieurs sens : 青 (qīng) donne 清 (clair, eau 氵), 请 (s'il vous plaît, parole 讠), 情 (sentiment, cœur 忄) et 晴 (ensoleillé, soleil 日).",
        "zh": "同一个声旁可以组成很多字：青→清、请、情、晴。"
      },
      "components": [
        {
          "component": "青",
          "meaning": {
            "en": "sound qīng",
            "fr": "son qīng"
          },
          "examples": [
            "清",
            "请",
            "情",
            "晴"
          ]
        }
      ]
    },
    "saying": {
      "hanzi": "旧的不去，新的不来",
      "pinyin": "Jiù de bú qù, xīn de bù lái",
      "meaning": {
        "en": "If the old doesn't go, the new won't come.",
        "fr": "Si l'ancien ne part pas, le nouveau ne vient pas.",
        "zh": "丢了旧东西不要难过，会有新的。"
      }
    },
    "practice": {
      "task": {
        "en": "Describe an old object you love, with 越…越….",
        "fr": "Décris un vieil objet que tu aimes, avec 越…越….",
        "zh": "用“越……越……”说说你喜欢的一个旧东西。"
      },
      "starter": "我的书包很旧了，可是我越用越喜欢。"
    }
  },
  "lesson-hsk3-23": {
    "characters": {
      "title": {
        "en": "Word game",
        "fr": "Jeu de mots",
        "zh": "旧字新词"
      },
      "explanation": {
        "en": "You already know this character: see how it builds new words. Guessing the meaning of a new word from its parts is a key skill at HSK 3.",
        "fr": "Tu connais déjà ce caractère : regarde comment il forme de nouveaux mots. Deviner le sens d'un mot nouveau à partir de ses éléments est une compétence clé au HSK 3.",
        "zh": "你已经认识这个字了，看看它能组成哪些新词。根据字义猜词义是HSK三级的重要能力。"
      },
      "components": [
        {
          "component": "大",
          "meaning": {
            "en": "big",
            "fr": "grand"
          },
          "examples": [
            "大小",
            "大家",
            "大学",
            "大概"
          ]
        }
      ]
    },
    "saying": {
      "hanzi": "货比三家",
      "pinyin": "Huò bǐ sān jiā",
      "meaning": {
        "en": "Compare three shops before you buy.",
        "fr": "Comparez trois boutiques avant d'acheter.",
        "zh": "买东西要多比较。"
      }
    },
    "practice": {
      "task": {
        "en": "Compare two things or two cities with 比, 更 and 一样.",
        "fr": "Compare deux objets ou deux villes avec 比, 更 et 一样.",
        "zh": "用“比、更、一样”比较两样东西或两个城市。"
      },
      "starter": "北京比我的城市大多了，可是天气一样冷。"
    }
  },
  "lesson-hsk3-07": {
    "characters": {
      "title": {
        "en": "Word game",
        "fr": "Jeu de mots",
        "zh": "旧字新词"
      },
      "explanation": {
        "en": "You already know this character: see how it builds new words. Guessing the meaning of a new word from its parts is a key skill at HSK 3.",
        "fr": "Tu connais déjà ce caractère : regarde comment il forme de nouveaux mots. Deviner le sens d'un mot nouveau à partir de ses éléments est une compétence clé au HSK 3.",
        "zh": "你已经认识这个字了，看看它能组成哪些新词。根据字义猜词义是HSK三级的重要能力。"
      },
      "components": [
        {
          "component": "电",
          "meaning": {
            "en": "electricity",
            "fr": "électricité"
          },
          "examples": [
            "电梯",
            "电话",
            "电脑",
            "电视"
          ]
        }
      ]
    },
    "saying": {
      "hanzi": "金窝银窝，不如自己的狗窝",
      "pinyin": "Jīn wō yín wō, bùrú zìjǐ de gǒu wō",
      "meaning": {
        "en": "No place like home, however humble.",
        "fr": "Rien ne vaut son chez-soi, si modeste soit-il.",
        "zh": "别的地方再好，也没有自己家好。"
      }
    },
    "practice": {
      "task": {
        "en": "Describe your home and the housework you do (verb doubling).",
        "fr": "Décris ton logement et les tâches ménagères que tu fais (verbes redoublés).",
        "zh": "说说你的家和你做的家务。"
      },
      "starter": "我家在十二层，周末我打扫打扫房间。"
    }
  },
  "lesson-hsk3-27": {
    "characters": {
      "title": {
        "en": "Word game",
        "fr": "Jeu de mots",
        "zh": "旧字新词"
      },
      "explanation": {
        "en": "You already know this character: see how it builds new words. Guessing the meaning of a new word from its parts is a key skill at HSK 3.",
        "fr": "Tu connais déjà ce caractère : regarde comment il forme de nouveaux mots. Deviner le sens d'un mot nouveau à partir de ses éléments est une compétence clé au HSK 3.",
        "zh": "你已经认识这个字了，看看它能组成哪些新词。根据字义猜词义是HSK三级的重要能力。"
      },
      "components": [
        {
          "component": "手",
          "meaning": {
            "en": "hand",
            "fr": "main"
          },
          "examples": [
            "手机",
            "手表",
            "洗手间"
          ]
        }
      ]
    },
    "saying": {
      "hanzi": "说曹操，曹操到",
      "pinyin": "Shuō Cáo Cāo, Cáo Cāo dào",
      "meaning": {
        "en": "Speak of the devil (speak of Cao Cao, and Cao Cao arrives).",
        "fr": "Quand on parle du loup, on en voit la queue.",
        "zh": "正说到一个人，这个人就来了。"
      }
    },
    "practice": {
      "task": {
        "en": "Tell Laoshi what you did with your things today (把…放在…) and what happened to something (被).",
        "fr": "Dis à Laoshi ce que tu as fait de tes affaires aujourd'hui (把…放在…) et ce qui est arrivé à un objet (被).",
        "zh": "用“把、被”说说你的东西。"
      },
      "starter": "我把书放在桌子上了，可是被弟弟拿走了。"
    }
  },
  "lesson-hsk3-25": {
    "characters": {
      "title": {
        "en": "Word game",
        "fr": "Jeu de mots",
        "zh": "旧字新词"
      },
      "explanation": {
        "en": "You already know this character: see how it builds new words. Guessing the meaning of a new word from its parts is a key skill at HSK 3.",
        "fr": "Tu connais déjà ce caractère : regarde comment il forme de nouveaux mots. Deviner le sens d'un mot nouveau à partir de ses éléments est une compétence clé au HSK 3.",
        "zh": "你已经认识这个字了，看看它能组成哪些新词。根据字义猜词义是HSK三级的重要能力。"
      },
      "components": [
        {
          "component": "见",
          "meaning": {
            "en": "see, meet",
            "fr": "voir"
          },
          "examples": [
            "见面",
            "再见",
            "看见",
            "遇见"
          ]
        }
      ]
    },
    "saying": {
      "hanzi": "好事多磨",
      "pinyin": "Hǎo shì duō mó",
      "meaning": {
        "en": "Good things take time and trouble.",
        "fr": "Les bonnes choses se font attendre.",
        "zh": "好事情常常不容易成功。"
      }
    },
    "practice": {
      "task": {
        "en": "Tell Laoshi about something that happened earlier (就) or later (才) than expected.",
        "fr": "Raconte à Laoshi quelque chose arrivé plus tôt (就) ou plus tard (才) que prévu.",
        "zh": "用“就、才”说一件比你想的早或晚的事。"
      },
      "starter": "我七点就起床了，可是九点才到公司。"
    }
  },
  "lesson-hsk3-28": {
    "characters": {
      "title": {
        "en": "Word game",
        "fr": "Jeu de mots",
        "zh": "旧字新词"
      },
      "explanation": {
        "en": "You already know this character: see how it builds new words. Guessing the meaning of a new word from its parts is a key skill at HSK 3.",
        "fr": "Tu connais déjà ce caractère : regarde comment il forme de nouveaux mots. Deviner le sens d'un mot nouveau à partir de ses éléments est une compétence clé au HSK 3.",
        "zh": "你已经认识这个字了，看看它能组成哪些新词。根据字义猜词义是HSK三级的重要能力。"
      },
      "components": [
        {
          "component": "口",
          "meaning": {
            "en": "mouth, opening",
            "fr": "bouche, ouverture"
          },
          "examples": [
            "门口",
            "路口",
            "人口"
          ]
        }
      ]
    },
    "saying": {
      "hanzi": "入乡随俗",
      "pinyin": "Rù xiāng suí sú",
      "meaning": {
        "en": "When in Rome, do as the Romans do.",
        "fr": "À Rome, fais comme les Romains.",
        "zh": "到了一个地方，就要按照那里的习惯做事。"
      }
    },
    "practice": {
      "task": {
        "en": "Tell Laoshi two things you often do at the same time (一边…一边…).",
        "fr": "Dis à Laoshi deux choses que tu fais souvent en même temps (一边…一边…).",
        "zh": "用“一边……一边……”说说你常常同时做的两件事。"
      },
      "starter": "我常常一边吃早饭一边听音乐。"
    }
  },
  "lesson-hsk3-14": {
    "characters": {
      "title": {
        "en": "Word game",
        "fr": "Jeu de mots",
        "zh": "旧字新词"
      },
      "explanation": {
        "en": "You already know this character: see how it builds new words. Guessing the meaning of a new word from its parts is a key skill at HSK 3.",
        "fr": "Tu connais déjà ce caractère : regarde comment il forme de nouveaux mots. Deviner le sens d'un mot nouveau à partir de ses éléments est une compétence clé au HSK 3.",
        "zh": "你已经认识这个字了，看看它能组成哪些新词。根据字义猜词义是HSK三级的重要能力。"
      },
      "components": [
        {
          "component": "学",
          "meaning": {
            "en": "study",
            "fr": "étudier"
          },
          "examples": [
            "学期",
            "放学",
            "数学",
            "同学"
          ]
        }
      ]
    },
    "saying": {
      "hanzi": "学而时习之",
      "pinyin": "Xué ér shí xí zhī",
      "meaning": {
        "en": "Learn, and revise often. (Confucius)",
        "fr": "Apprendre et réviser souvent. (Confucius)",
        "zh": "学了以后要常常复习。（孔子）"
      }
    },
    "practice": {
      "task": {
        "en": "Tell Laoshi what homework you have and what you haven't done yet (还没…呢).",
        "fr": "Dis à Laoshi quels devoirs tu as et ce que tu n'as pas encore fait (还没…呢).",
        "zh": "说说你的作业，哪些还没做完。"
      },
      "starter": "数学作业写完了，课文还没复习呢。"
    }
  },
  "lesson-hsk3-09": {
    "characters": {
      "title": {
        "en": "Word game",
        "fr": "Jeu de mots",
        "zh": "旧字新词"
      },
      "explanation": {
        "en": "You already know this character: see how it builds new words. Guessing the meaning of a new word from its parts is a key skill at HSK 3.",
        "fr": "Tu connais déjà ce caractère : regarde comment il forme de nouveaux mots. Deviner le sens d'un mot nouveau à partir de ses éléments est une compétence clé au HSK 3.",
        "zh": "你已经认识这个字了，看看它能组成哪些新词。根据字义猜词义是HSK三级的重要能力。"
      },
      "components": [
        {
          "component": "卡",
          "meaning": {
            "en": "card",
            "fr": "carte"
          },
          "examples": [
            "银行卡",
            "信用卡",
            "公交卡"
          ]
        }
      ]
    },
    "saying": {
      "hanzi": "人靠衣装",
      "pinyin": "Rén kào yī zhuāng",
      "meaning": {
        "en": "Clothes make the man.",
        "fr": "L'habit fait le moine.",
        "zh": "穿得好看，人也更精神。"
      }
    },
    "practice": {
      "task": {
        "en": "Try on clothes with shop assistant Laoshi and pay (合适不合适?).",
        "fr": "Essaie des vêtements avec le vendeur Laoshi et paie (合适不合适 ?).",
        "zh": "跟“店员”老师试衣服、付钱。"
      },
      "starter": "这件衬衫我能试试吗？合适不合适？"
    }
  },
  "lesson-hsk3-10": {
    "characters": {
      "title": {
        "en": "Word game",
        "fr": "Jeu de mots",
        "zh": "旧字新词"
      },
      "explanation": {
        "en": "You already know this character: see how it builds new words. Guessing the meaning of a new word from its parts is a key skill at HSK 3.",
        "fr": "Tu connais déjà ce caractère : regarde comment il forme de nouveaux mots. Deviner le sens d'un mot nouveau à partir de ses éléments est une compétence clé au HSK 3.",
        "zh": "你已经认识这个字了，看看它能组成哪些新词。根据字义猜词义是HSK三级的重要能力。"
      },
      "components": [
        {
          "component": "天",
          "meaning": {
            "en": "day, sky",
            "fr": "jour, ciel"
          },
          "examples": [
            "春天",
            "夏天",
            "秋天",
            "冬天"
          ]
        }
      ]
    },
    "saying": {
      "hanzi": "一年之计在于春",
      "pinyin": "Yì nián zhī jì zàiyú chūn",
      "meaning": {
        "en": "The whole year's plans are made in spring.",
        "fr": "Les projets de l'année se font au printemps.",
        "zh": "春天是一年开始的时候，要好好计划。"
      }
    },
    "practice": {
      "task": {
        "en": "Tell Laoshi your favourite season and what is about to happen (要…了).",
        "fr": "Dis à Laoshi ta saison préférée et ce qui va bientôt arriver (要…了).",
        "zh": "说说你最喜欢的季节，现在快要怎么样了。"
      },
      "starter": "我最喜欢秋天。冬天快要到了，天气越来越冷。"
    }
  },
  "lesson-hsk3-24": {
    "characters": {
      "title": {
        "en": "Word game",
        "fr": "Jeu de mots",
        "zh": "旧字新词"
      },
      "explanation": {
        "en": "You already know this character: see how it builds new words. Guessing the meaning of a new word from its parts is a key skill at HSK 3.",
        "fr": "Tu connais déjà ce caractère : regarde comment il forme de nouveaux mots. Deviner le sens d'un mot nouveau à partir de ses éléments est une compétence clé au HSK 3.",
        "zh": "你已经认识这个字了，看看它能组成哪些新词。根据字义猜词义是HSK三级的重要能力。"
      },
      "components": [
        {
          "component": "果",
          "meaning": {
            "en": "fruit, result",
            "fr": "fruit, résultat"
          },
          "examples": [
            "如果",
            "水果",
            "结果",
            "苹果"
          ]
        }
      ]
    },
    "saying": {
      "hanzi": "有志者事竟成",
      "pinyin": "Yǒu zhì zhě shì jìng chéng",
      "meaning": {
        "en": "Where there's a will, there's a way.",
        "fr": "Vouloir, c'est pouvoir.",
        "zh": "只要有决心，事情就能成功。"
      }
    },
    "practice": {
      "task": {
        "en": "Plan your weekend with Laoshi using 如果…就… and 只要…就….",
        "fr": "Prépare ton week-end avec Laoshi en utilisant 如果…就… et 只要…就….",
        "zh": "用“如果……就……”“只要……就……”说说周末的计划。"
      },
      "starter": "如果天气好，我们就去爬山。"
    }
  },
  "lesson-hsk3-22": {
    "characters": {
      "title": {
        "en": "Word game",
        "fr": "Jeu de mots",
        "zh": "旧字新词"
      },
      "explanation": {
        "en": "You already know this character: see how it builds new words. Guessing the meaning of a new word from its parts is a key skill at HSK 3.",
        "fr": "Tu connais déjà ce caractère : regarde comment il forme de nouveaux mots. Deviner le sens d'un mot nouveau à partir de ses éléments est une compétence clé au HSK 3.",
        "zh": "你已经认识这个字了，看看它能组成哪些新词。根据字义猜词义是HSK三级的重要能力。"
      },
      "components": [
        {
          "component": "认",
          "meaning": {
            "en": "recognise",
            "fr": "reconnaître"
          },
          "examples": [
            "认为",
            "认识",
            "认真"
          ]
        }
      ]
    },
    "saying": {
      "hanzi": "仁者见仁，智者见智",
      "pinyin": "Rén zhě jiàn rén, zhì zhě jiàn zhì",
      "meaning": {
        "en": "Different people see the same thing differently.",
        "fr": "Chacun voit les choses à sa manière.",
        "zh": "同一件事，每个人的看法不一样。"
      }
    },
    "practice": {
      "task": {
        "en": "Give Laoshi your opinion on something (认为) and tell him something you got wrong (以为).",
        "fr": "Donne ton avis à Laoshi sur un sujet (认为) et raconte-lui une chose où tu t'étais trompé (以为).",
        "zh": "用“认为”说你的看法，用“以为”说一件你想错了的事。"
      },
      "starter": "我认为学汉语很有意思。我以为汉字很难，其实不太难。"
    }
  },
  "lesson-hsk3-18": {
    "characters": {
      "title": {
        "en": "Word game",
        "fr": "Jeu de mots",
        "zh": "旧字新词"
      },
      "explanation": {
        "en": "You already know this character: see how it builds new words. Guessing the meaning of a new word from its parts is a key skill at HSK 3.",
        "fr": "Tu connais déjà ce caractère : regarde comment il forme de nouveaux mots. Deviner le sens d'un mot nouveau à partir de ses éléments est une compétence clé au HSK 3.",
        "zh": "你已经认识这个字了，看看它能组成哪些新词。根据字义猜词义是HSK三级的重要能力。"
      },
      "components": [
        {
          "component": "病",
          "meaning": {
            "en": "illness",
            "fr": "maladie"
          },
          "examples": [
            "病人",
            "生病",
            "看病"
          ]
        }
      ]
    },
    "saying": {
      "hanzi": "病从口入",
      "pinyin": "Bìng cóng kǒu rù",
      "meaning": {
        "en": "Illness enters through the mouth.",
        "fr": "La maladie entre par la bouche.",
        "zh": "吃东西要注意卫生。"
      }
    },
    "practice": {
      "task": {
        "en": "Tell Doctor Laoshi your symptoms with 一…就….",
        "fr": "Décris tes symptômes au docteur Laoshi avec 一…就….",
        "zh": "用“一……就……”跟“医生”老师说你的病。"
      },
      "starter": "医生，我一吃饭就肚子疼。"
    }
  },
  "lesson-hsk3-03": {
    "characters": {
      "title": {
        "en": "Word game",
        "fr": "Jeu de mots",
        "zh": "旧字新词"
      },
      "explanation": {
        "en": "You already know this character: see how it builds new words. Guessing the meaning of a new word from its parts is a key skill at HSK 3.",
        "fr": "Tu connais déjà ce caractère : regarde comment il forme de nouveaux mots. Deviner le sens d'un mot nouveau à partir de ses éléments est une compétence clé au HSK 3.",
        "zh": "你已经认识这个字了，看看它能组成哪些新词。根据字义猜词义是HSK三级的重要能力。"
      },
      "components": [
        {
          "component": "心",
          "meaning": {
            "en": "heart",
            "fr": "cœur"
          },
          "examples": [
            "关心",
            "放心",
            "担心",
            "开心",
            "小心"
          ]
        }
      ]
    },
    "saying": {
      "hanzi": "患难见真情",
      "pinyin": "Huànnàn jiàn zhēnqíng",
      "meaning": {
        "en": "A friend in need is a friend indeed.",
        "fr": "C'est dans le malheur qu'on reconnaît ses vrais amis.",
        "zh": "困难的时候才能看出谁是真朋友。"
      }
    },
    "practice": {
      "task": {
        "en": "Tell Laoshi about a time a friend helped you or cared about you (对…很关心).",
        "fr": "Raconte à Laoshi une fois où un ami t'a aidé ou s'est soucié de toi (对…很关心).",
        "zh": "说说朋友关心你、帮助你的一件事。"
      },
      "starter": "我生病的时候，我的朋友对我很关心。"
    }
  },
  "lesson-hsk3-17": {
    "characters": {
      "title": {
        "en": "Word game",
        "fr": "Jeu de mots",
        "zh": "旧字新词"
      },
      "explanation": {
        "en": "You already know this character: see how it builds new words. Guessing the meaning of a new word from its parts is a key skill at HSK 3.",
        "fr": "Tu connais déjà ce caractère : regarde comment il forme de nouveaux mots. Deviner le sens d'un mot nouveau à partir de ses éléments est une compétence clé au HSK 3.",
        "zh": "你已经认识这个字了，看看它能组成哪些新词。根据字义猜词义是HSK三级的重要能力。"
      },
      "components": [
        {
          "component": "节",
          "meaning": {
            "en": "festival",
            "fr": "fête"
          },
          "examples": [
            "节日",
            "春节",
            "过节",
            "节目"
          ]
        }
      ]
    },
    "saying": {
      "hanzi": "每逢佳节倍思亲",
      "pinyin": "Měi féng jiājié bèi sī qīn",
      "meaning": {
        "en": "On every festival you miss your family twice as much. (Wang Wei)",
        "fr": "À chaque fête, on pense deux fois plus aux siens. (Wang Wei)",
        "zh": "过节的时候更想家里的亲人。（王维）"
      }
    },
    "practice": {
      "task": {
        "en": "Tell Laoshi when and where an important event in your life happened (是…的).",
        "fr": "Raconte à Laoshi quand et où s'est passé un événement important de ta vie (是…的).",
        "zh": "用“是……的”说说你生活中一件重要的事。"
      },
      "starter": "我是二〇一八年来中国的。"
    },
    "culture": {
      "title": {
        "en": "Gifts to avoid",
        "fr": "Les cadeaux à éviter",
        "zh": "不能送的礼物"
      },
      "body": {
        "en": "Some gifts sound unlucky: a clock (送钟 sounds like 送终, attending a death), pears (分梨 sounds like 分离, separation) or an umbrella (伞 sounds like 散, to break up). Give and receive gifts with both hands.",
        "fr": "Certains cadeaux portent malheur à cause de leur prononciation : une horloge (送钟 ressemble à 送终, accompagner un mourant), des poires (分梨 ressemble à 分离, séparation) ou un parapluie (伞 ressemble à 散, se séparer). On offre et on reçoit un cadeau à deux mains.",
        "zh": "有些礼物发音不吉利：送钟（送终）、分梨（分离）、送伞（散）。送礼物和接礼物都要用双手。"
      }
    }
  },
  "lesson-hsk3-19": {
    "characters": {
      "title": {
        "en": "Word game",
        "fr": "Jeu de mots",
        "zh": "旧字新词"
      },
      "explanation": {
        "en": "You already know this character: see how it builds new words. Guessing the meaning of a new word from its parts is a key skill at HSK 3.",
        "fr": "Tu connais déjà ce caractère : regarde comment il forme de nouveaux mots. Deviner le sens d'un mot nouveau à partir de ses éléments est une compétence clé au HSK 3.",
        "zh": "你已经认识这个字了，看看它能组成哪些新词。根据字义猜词义是HSK三级的重要能力。"
      },
      "components": [
        {
          "component": "机",
          "meaning": {
            "en": "machine",
            "fr": "machine"
          },
          "examples": [
            "手机",
            "耳机",
            "关机",
            "开机"
          ]
        }
      ]
    },
    "saying": {
      "hanzi": "家书抵万金",
      "pinyin": "Jiā shū dǐ wàn jīn",
      "meaning": {
        "en": "A letter from home is worth ten thousand pieces of gold. (Du Fu)",
        "fr": "Une lettre de chez soi vaut dix mille pièces d'or. (Du Fu)",
        "zh": "家里的来信非常宝贵。（杜甫）"
      }
    },
    "practice": {
      "task": {
        "en": "Tell Laoshi whether you received an important message, and how (收到).",
        "fr": "Dis à Laoshi si tu as reçu un message important, et comment (收到).",
        "zh": "说说你有没有收到一个重要的消息。"
      },
      "starter": "我昨天收到了一封邮件，是我朋友发的。"
    }
  },
  "lesson-hsk3-20": {
    "characters": {
      "title": {
        "en": "Word game",
        "fr": "Jeu de mots",
        "zh": "旧字新词"
      },
      "explanation": {
        "en": "You already know this character: see how it builds new words. Guessing the meaning of a new word from its parts is a key skill at HSK 3.",
        "fr": "Tu connais déjà ce caractère : regarde comment il forme de nouveaux mots. Deviner le sens d'un mot nouveau à partir de ses éléments est une compétence clé au HSK 3.",
        "zh": "你已经认识这个字了，看看它能组成哪些新词。根据字义猜词义是HSK三级的重要能力。"
      },
      "components": [
        {
          "component": "公",
          "meaning": {
            "en": "public",
            "fr": "public"
          },
          "examples": [
            "公司",
            "办公室",
            "公园",
            "公斤"
          ]
        }
      ]
    },
    "saying": {
      "hanzi": "好借好还，再借不难",
      "pinyin": "Hǎo jiè hǎo huán, zài jiè bù nán",
      "meaning": {
        "en": "Return what you borrow, and you can borrow again.",
        "fr": "Rends ce qu'on te prête, et on te prêtera encore.",
        "zh": "借了东西按时还，下次再借就容易。"
      }
    },
    "practice": {
      "task": {
        "en": "Borrow something from Laoshi and promise to return it (借给 / 还给).",
        "fr": "Emprunte quelque chose à Laoshi et promets de le rendre (借给 / 还给).",
        "zh": "跟老师借东西，说什么时候还给他。"
      },
      "starter": "老师，你能借给我一本词典吗？明天还给你。"
    }
  },
  "lesson-hsk3-26": {
    "characters": {
      "title": {
        "en": "Word game",
        "fr": "Jeu de mots",
        "zh": "旧字新词"
      },
      "explanation": {
        "en": "You already know this character: see how it builds new words. Guessing the meaning of a new word from its parts is a key skill at HSK 3.",
        "fr": "Tu connais déjà ce caractère : regarde comment il forme de nouveaux mots. Deviner le sens d'un mot nouveau à partir de ses éléments est une compétence clé au HSK 3.",
        "zh": "你已经认识这个字了，看看它能组成哪些新词。根据字义猜词义是HSK三级的重要能力。"
      },
      "components": [
        {
          "component": "书",
          "meaning": {
            "en": "book",
            "fr": "livre"
          },
          "examples": [
            "图书馆",
            "书店",
            "读书",
            "书包"
          ]
        }
      ]
    },
    "saying": {
      "hanzi": "书中自有黄金屋",
      "pinyin": "Shū zhōng zì yǒu huángjīn wū",
      "meaning": {
        "en": "Books hold houses of gold.",
        "fr": "Les livres renferment des trésors.",
        "zh": "多读书会有很多收获。"
      }
    },
    "practice": {
      "task": {
        "en": "Describe a famous place in your city with 的 phrases.",
        "fr": "Décris un endroit célèbre de ta ville avec des groupes en 的.",
        "zh": "用“……的……”介绍你城市里一个有名的地方。"
      },
      "starter": "我们市有一个很有名的图书馆。"
    }
  }
};
