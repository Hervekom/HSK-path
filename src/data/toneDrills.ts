// Tone drills: syllables that exist with all four tones, each written with a common character.
// Recorded once per tone (scripts/generate-word-audio.py → public/audio/words/t-<base><tone>.mp3).
// The four recordings of a syllable are also the references the learner's tone is compared with.

export interface ToneSyllable {
  base: string; // toneless pinyin
  /** Tone 1 → 4: [character, pinyin with tone mark, English, French] */
  tones: [string, string, string, string][];
}

export const TONE_SYLLABLES: ToneSyllable[] = [
  { base: 'ma', tones: [['妈', 'mā', 'mum', 'maman'], ['麻', 'má', 'hemp', 'chanvre'], ['马', 'mǎ', 'horse', 'cheval'], ['骂', 'mà', 'to scold', 'gronder']] },
  { base: 'ba', tones: [['八', 'bā', 'eight', 'huit'], ['拔', 'bá', 'to pull out', 'arracher'], ['把', 'bǎ', 'to hold', 'tenir'], ['爸', 'bà', 'dad', 'papa']] },
  { base: 'yi', tones: [['衣', 'yī', 'clothes', 'vêtement'], ['姨', 'yí', 'aunt', 'tante'], ['椅', 'yǐ', 'chair', 'chaise'], ['意', 'yì', 'meaning', 'sens']] },
  { base: 'wu', tones: [['屋', 'wū', 'house', 'maison'], ['无', 'wú', 'without', 'sans'], ['五', 'wǔ', 'five', 'cinq'], ['雾', 'wù', 'fog', 'brouillard']] },
  { base: 'shi', tones: [['诗', 'shī', 'poem', 'poème'], ['十', 'shí', 'ten', 'dix'], ['使', 'shǐ', 'to make', 'faire faire'], ['是', 'shì', 'to be', 'être']] },
  { base: 'tang', tones: [['汤', 'tāng', 'soup', 'soupe'], ['糖', 'táng', 'sugar', 'sucre'], ['躺', 'tǎng', 'to lie down', "s'allonger"], ['烫', 'tàng', 'scalding', 'brûlant']] },
  { base: 'tu', tones: [['秃', 'tū', 'bald', 'chauve'], ['图', 'tú', 'picture', 'image'], ['土', 'tǔ', 'soil', 'terre'], ['兔', 'tù', 'rabbit', 'lapin']] },
  { base: 'qi', tones: [['七', 'qī', 'seven', 'sept'], ['骑', 'qí', 'to ride', 'monter (à vélo)'], ['起', 'qǐ', 'to get up', 'se lever'], ['气', 'qì', 'air', 'air']] },
  { base: 'fei', tones: [['飞', 'fēi', 'to fly', 'voler'], ['肥', 'féi', 'fat', 'gras'], ['匪', 'fěi', 'bandit', 'bandit'], ['费', 'fèi', 'fee', 'frais']] },
  { base: 'da', tones: [['搭', 'dā', 'to put up', 'monter (une tente)'], ['达', 'dá', 'to reach', 'atteindre'], ['打', 'dǎ', 'to hit', 'frapper'], ['大', 'dà', 'big', 'grand']] },
  { base: 'guo', tones: [['锅', 'guō', 'pot', 'marmite'], ['国', 'guó', 'country', 'pays'], ['果', 'guǒ', 'fruit', 'fruit'], ['过', 'guò', 'to pass', 'passer']] },
  { base: 'xi', tones: [['西', 'xī', 'west', 'ouest'], ['习', 'xí', 'to practise', "s'exercer"], ['洗', 'xǐ', 'to wash', 'laver'], ['细', 'xì', 'thin', 'fin']] },
  { base: 'wang', tones: [['汪', 'wāng', 'woof', 'ouaf'], ['王', 'wáng', 'king', 'roi'], ['网', 'wǎng', 'net', 'filet'], ['忘', 'wàng', 'to forget', 'oublier']] },
];

/** Neutral tone example shown in the tone chart. */
export const NEUTRAL_EXAMPLE: [string, string] = ['吗', 'ma'];

/** Audio key of one drill syllable (tone 1–4, or 0 for the neutral example). */
export const toneKey = (base: string, tone: number) => `t-${base}${tone}`;
