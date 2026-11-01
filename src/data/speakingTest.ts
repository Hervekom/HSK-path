// HSK 3.0 speaking test practice (level 3): the three tasks of the new format —
// 1. listen and repeat (听后重复), 2. describe a picture (看图说话), 3. answer a question (回答问题).
// Sentences use HSK 1–3 vocabulary. Pictures are the free-licensed photos of the HSK Path exams.
import PHOTOS from './hsk3/photos.json';
import type { PhotoCredit } from './hsk3/types';

type Text3 = { en: string; fr: string; zh: string };

export const REPEAT_SENTENCES: string[] = [
  '我每天早上七点起床。',
  '这件衣服太贵了，我不买了。',
  '你知道图书馆在哪儿吗？',
  '明天可能会下雨，别忘了带伞。',
  '我已经学了两年汉语了。',
  '他比他哥哥高一点儿。',
  '周末我们一起去爬山吧。',
  '请你把门关上，好吗？',
  '我对中国历史很感兴趣。',
  '这个问题有点儿难，我想一想。',
  '我的手机找不到了。',
  '你去过上海吗？',
  '医生让我多喝水，多休息。',
  '我们坐地铁去机场吧。',
  '她唱歌唱得非常好听。',
  '我下个月要去中国旅游。',
  '这家饭馆的菜又便宜又好吃。',
  '天气越来越冷了。',
  '我是坐飞机来的。',
  '你先走吧，我马上就来。',
  '我把作业忘在家里了。',
  '他每天都锻炼一个小时。',
  '这个周末你有什么打算？',
  '妈妈让我早点儿回家。',
  '我们班有二十个学生。',
  '电影七点半开始，我们快走吧。',
  '我刚才给你打电话了。',
  '这本书是我从图书馆借的。',
  '下课以后我们去打篮球。',
  '你的汉语说得真好！',
];

export const PICTURE_PROMPT = '请说一说，图片上的人在做什么？';

export interface PictureTask {
  id: string;
  photo: string;
  credit: PhotoCredit;
  /** What the picture shows, for Laoshi's judgement (not shown to the learner). */
  scene: string;
  /** Helpful words (shown on request). */
  words: string[];
}

const PICTURES: Array<[string, string, string[]]> = [
  ['hp3-01/g1/B', 'a man talking on the phone', ['打电话', '朋友', '高兴']],
  ['hp3-01/g1/D', 'a woman reading a book in an armchair at home', ['看书', '休息', '安静']],
  ['hp3-01/g1/F', 'people walking in the street in the rain with umbrellas', ['下雨', '伞', '路上']],
  ['hp3-01/g2/B', 'children playing basketball outside', ['打篮球', '孩子', '运动']],
  ['hp3-02/g1/D', 'a man taking a photo by a lake', ['照相', '照相机', '河边']],
  ['hp3-02/g1/F', 'a smiling woman working on a laptop with a coffee', ['电脑', '工作', '咖啡']],
  ['hp3-02/g2/D', 'a smiling woman driving a car', ['开车', '司机', '上班']],
  ['hp3-03/g1/F', 'a group of people hiking up a mountain', ['爬山', '一起', '累']],
  ['hp3-03/g2/A', 'an old man reading a newspaper on a chair', ['看报纸', '老人', '新闻']],
  ['hp3-05/g1/B', 'a boy playing football on the grass', ['踢足球', '草地', '跑']],
];

const PHOTO_MAP = PHOTOS as Record<string, PhotoCredit & { file: string }>;

export const PICTURE_TASKS: PictureTask[] = PICTURES.filter(([k]) => PHOTO_MAP[k]).map(([k, scene, words]) => {
  const { file, ...credit } = PHOTO_MAP[k];
  return { id: k, photo: file, credit, scene, words };
});

export interface QuestionTask {
  id: string;
  question: string;
  meaning: Text3;
  words: string[];
}

export const QUESTION_TASKS: QuestionTask[] = [
  { id: 'q-family', question: '请介绍一下你的家人。', meaning: { en: 'Please introduce your family.', fr: 'Présentez votre famille.', zh: '请介绍一下你的家人。' }, words: ['爸爸', '妈妈', '工作', '喜欢'] },
  { id: 'q-weekend', question: '你周末一般做什么？', meaning: { en: 'What do you usually do at the weekend?', fr: "Que faites-vous d'habitude le week-end ?", zh: '你周末一般做什么？' }, words: ['休息', '朋友', '运动', '有时候'] },
  { id: 'q-chinese', question: '你为什么学习汉语？', meaning: { en: 'Why do you study Chinese?', fr: 'Pourquoi apprenez-vous le chinois ?', zh: '你为什么学习汉语？' }, words: ['因为', '中国', '工作', '文化'] },
  { id: 'q-season', question: '你最喜欢哪个季节？为什么？', meaning: { en: 'Which season do you like best? Why?', fr: 'Quelle saison préférez-vous ? Pourquoi ?', zh: '你最喜欢哪个季节？为什么？' }, words: ['春天', '天气', '舒服', '因为'] },
  { id: 'q-food', question: '你喜欢吃什么菜？为什么？', meaning: { en: 'What food do you like? Why?', fr: 'Quels plats aimez-vous ? Pourquoi ?', zh: '你喜欢吃什么菜？为什么？' }, words: ['好吃', '饭馆', '自己做', '经常'] },
  { id: 'q-friend', question: '请介绍一下你的一个好朋友。', meaning: { en: 'Please introduce one of your good friends.', fr: 'Présentez un de vos bons amis.', zh: '请介绍一下你的一个好朋友。' }, words: ['认识', '一起', '聪明', '帮助'] },
  { id: 'q-commute', question: '你每天怎么去学校或者公司？', meaning: { en: 'How do you go to school or work every day?', fr: "Comment allez-vous à l'école ou au travail chaque jour ?", zh: '你每天怎么去学校或者公司？' }, words: ['坐地铁', '骑自行车', '分钟', '方便'] },
  { id: 'q-travel', question: '你去过哪些地方旅游？你最喜欢哪儿？', meaning: { en: 'Where have you travelled? Which place did you like best?', fr: 'Où avez-vous voyagé ? Quel endroit avez-vous préféré ?', zh: '你去过哪些地方旅游？你最喜欢哪儿？' }, words: ['去过', '漂亮', '有意思', '还想去'] },
];

/** Every Chinese text the test reads aloud (recorded in advance by scripts/generate-speak-audio.py). */
export const SPEAKING_TEST_TEXTS: string[] = [...REPEAT_SENTENCES, PICTURE_PROMPT, ...QUESTION_TASKS.map((q) => q.question)];

/** Test format: how many items of each task, preparation and answer time (seconds). */
export const SPEAKING_FORMAT = {
  repeat: { count: 8 },
  picture: { count: 3, prepSec: 20, answerSec: 30 },
  question: { count: 2, prepSec: 30, answerSec: 45 },
};
