// Strings for the Pronunciation page. Key = exact English text, see tr.ts. French uses "vous".
export const PRON_STRINGS: Record<string, { fr?: string; zh?: string }> = {
  Pronunciation: { fr: 'Prononciation', zh: '发音' },
  'Listen, repeat, and see your tones: your voice is compared with the model.': {
    fr: 'Écoutez, répétez et voyez vos tons : votre voix est comparée au modèle.',
    zh: '听、跟读、看见自己的声调：把你的声音和示范对比。',
  },
  'Train your ear and your voice: the four tones, every HSK word and the lesson dialogues, with your melody compared with the model.': {
    fr: "Entraînez l'oreille et la voix : les quatre tons, tous les mots HSK et les dialogues des leçons, avec votre mélodie comparée au modèle.",
    zh: '练耳朵也练嘴：四个声调、所有 HSK 词语和课文对话，你的音高曲线会和示范对比。',
  },
  '~5 min session': { fr: '~5 min', zh: '约 5 分钟' },
  Speak: { fr: 'Parler', zh: '开口说' },
  'Practise saying it': { fr: "M'entraîner à le dire", zh: '练习发音' },

  // Page
  Tones: { fr: 'Tons', zh: '声调' },
  Sentences: { fr: 'Phrases', zh: '句子' },
  Average: { fr: 'Moyenne', zh: '平均' },
  Ear: { fr: 'Oreille', zh: '听辨' },
  'Tones said': { fr: 'Tons dits', zh: '说对声调' },
  Lesson: { fr: 'Leçon', zh: '课' },
  'To work on': { fr: 'À retravailler', zh: '需要加强' },
  'Practise the words of a lesson': { fr: "Travailler les mots d'une leçon", zh: '练习某一课的词语' },
  'Nothing to work on here: well done!': { fr: 'Rien à retravailler ici : bravo !', zh: '这里没有需要加强的，真棒！' },
  'No dialogue in this lesson yet.': { fr: "Pas encore de dialogue dans cette leçon.", zh: '这一课还没有对话。' },
  'The sentences could not be loaded. Check your connection.': {
    fr: 'Les phrases n’ont pas pu être chargées. Vérifiez votre connexion.',
    zh: '句子没能加载，请检查网络连接。',
  },
  'This lesson is part of HSK Path Pro. HSK 1 and the first two lessons of each level are free.': {
    fr: 'Cette leçon fait partie de HSK Path Pro. Le HSK 1 et les deux premières leçons de chaque niveau sont gratuits.',
    zh: '这一课属于 HSK Path Pro。HSK 1 和每个级别的前两课免费。',
  },
  'See Pro': { fr: 'Voir le Pro', zh: '了解 Pro' },
  'Your melody is analysed on your device, without limit. What you say is also checked by speech recognition when you are signed in (30 checks a day, 150 with Pro, unlimited with your own free Groq key saved in Laoshi). Recordings are never kept.': {
    fr: 'Votre mélodie est analysée sur votre appareil, sans limite. Ce que vous dites est aussi vérifié par reconnaissance vocale quand vous êtes connecté (30 vérifications par jour, 150 en Pro, illimité avec votre propre clé Groq gratuite enregistrée dans Laoshi). Les enregistrements ne sont jamais conservés.',
    zh: '音高曲线在你的设备上分析，不限次数。登录后，你说的内容还会经过语音识别检查（每天 30 次，Pro 150 次；在 Laoshi 中保存自己的免费 Groq 密钥则不限）。录音从不保存。',
  },

  // Practice card
  Best: { fr: 'Meilleur', zh: '最佳' },
  'Slower model': { fr: 'Modèle plus lent', zh: '放慢示范' },
  'Tap to try again': { fr: 'Touchez pour réessayer', zh: '点一下再试' },
  'Tap and speak': { fr: 'Touchez et parlez', zh: '点一下，开口说' },
  'Listening… stop when you are done': { fr: "J'écoute… arrêtez-vous quand vous avez fini", zh: '正在听……说完停下即可' },
  'Analysing…': { fr: 'Analyse…', zh: '分析中……' },
  'Record my voice': { fr: 'Enregistrer ma voix', zh: '录下我的声音' },
  'Stop recording': { fr: "Arrêter l'enregistrement", zh: '停止录音' },
  'Excellent!': { fr: 'Excellent !', zh: '非常好！' },
  'Almost there': { fr: 'Presque', zh: '差一点' },
  'Try again': { fr: 'À retravailler', zh: '再试一次' },
  Understood: { fr: 'Compris', zh: '识别' },
  Melody: { fr: 'Mélodie', zh: '音高' },
  Heard: { fr: 'Entendu', zh: '听到' },
  'Each syllable': { fr: 'Chaque syllabe', zh: '每个音节' },
  right: { fr: 'juste', zh: '正确' },
  'tone heard differently': { fr: 'ton entendu autrement', zh: '声调不同' },
  'other sound heard': { fr: 'autre son entendu', zh: '听成别的音' },
  'not heard': { fr: 'non entendu', zh: '没听到' },
  'Your melody': { fr: 'Votre mélodie', zh: '你的音高曲线' },
  model: { fr: 'modèle', zh: '示范' },
  you: { fr: 'vous', zh: '你' },
  'Pitch of the model and of your voice': { fr: 'Hauteur de la voix du modèle et de la vôtre', zh: '示范和你的音高' },
  'My voice': { fr: 'Ma voix', zh: '我的声音' },
  'Model, then me': { fr: 'Modèle, puis moi', zh: '先示范，再我' },
  'Offline: only the melody was checked.': { fr: 'Hors ligne : seule la mélodie a été vérifiée.', zh: '离线：只检查了音高。' },
  'Sign in to have your words checked by speech recognition. The melody is checked anyway.': {
    fr: 'Connectez-vous pour faire vérifier vos mots par reconnaissance vocale. La mélodie est vérifiée dans tous les cas.',
    zh: '登录后可用语音识别检查你说的话。音高曲线始终会检查。',
  },
  'Daily speech checks used up: only the melody is checked until tomorrow (or add your own free Groq key in Laoshi’s settings).': {
    fr: 'Vérifications vocales du jour épuisées : seule la mélodie est vérifiée jusqu’à demain (ou ajoutez votre propre clé Groq gratuite dans les paramètres de Laoshi).',
    zh: '今天的语音识别次数已用完：明天之前只检查音高（也可以在 Laoshi 设置里添加自己的免费 Groq 密钥）。',
  },
  'Speech checks are busy for today: only the melody was checked.': {
    fr: "Les vérifications vocales sont saturées aujourd'hui : seule la mélodie a été vérifiée.",
    zh: '今天的语音识别已满：只检查了音高。',
  },
  'Speech recognition is busy: only the melody was checked. Try again in a minute.': {
    fr: 'La reconnaissance vocale est occupée : seule la mélodie a été vérifiée. Réessayez dans une minute.',
    zh: '语音识别正忙：只检查了音高。请一分钟后再试。',
  },
  'Your Groq key was refused: check it in Laoshi’s settings. Only the melody was checked.': {
    fr: 'Votre clé Groq a été refusée : vérifiez-la dans les paramètres de Laoshi. Seule la mélodie a été vérifiée.',
    zh: '你的 Groq 密钥被拒绝：请在 Laoshi 设置中检查。只检查了音高。',
  },
  'Your Groq key has reached its limit for now: only the melody was checked.': {
    fr: 'Votre clé Groq a atteint sa limite pour le moment : seule la mélodie a été vérifiée.',
    zh: '你的 Groq 密钥暂时达到上限：只检查了音高。',
  },
  'Speech recognition is not available: only the melody was checked.': {
    fr: "La reconnaissance vocale n'est pas disponible : seule la mélodie a été vérifiée.",
    zh: '语音识别暂不可用：只检查了音高。',
  },
  'Too long to check: keep it under 15 seconds.': {
    fr: 'Trop long pour être vérifié : restez sous 15 secondes.',
    zh: '太长了，无法检查：请控制在 15 秒以内。',
  },
  'Speech recognition failed: only the melody was checked.': {
    fr: 'La reconnaissance vocale a échoué : seule la mélodie a été vérifiée.',
    zh: '语音识别失败：只检查了音高。',
  },
  'No recorded model for this one: the melody cannot be compared.': {
    fr: "Pas de modèle enregistré pour celui-ci : la mélodie ne peut pas être comparée.",
    zh: '这一条没有录音示范，无法对比音高。',
  },

  // Microphone
  'This browser cannot record your voice. Use a recent Chrome, Safari, Edge or Firefox.': {
    fr: "Ce navigateur ne peut pas enregistrer votre voix. Utilisez un Chrome, Safari, Edge ou Firefox récent.",
    zh: '这个浏览器无法录音。请使用较新的 Chrome、Safari、Edge 或 Firefox。',
  },
  'The microphone only works on a secure (https) page.': {
    fr: 'Le micro ne fonctionne que sur une page sécurisée (https).',
    zh: '麦克风只能在安全（https）页面上使用。',
  },
  'Microphone access is blocked. Allow it for this site in your browser settings (the icon left of the address), then try again.': {
    fr: "L'accès au micro est bloqué. Autorisez-le pour ce site dans les réglages du navigateur (l'icône à gauche de l'adresse), puis réessayez.",
    zh: '麦克风权限被阻止。请在浏览器设置中允许本网站使用（地址栏左侧的图标），然后再试。',
  },
  'No microphone found. Plug in or turn on a microphone, then try again.': {
    fr: 'Aucun micro trouvé. Branchez ou activez un micro, puis réessayez.',
    zh: '没有找到麦克风。请连接或打开麦克风后再试。',
  },
  'The microphone is used by another app. Close it and try again.': {
    fr: 'Le micro est utilisé par une autre application. Fermez-la et réessayez.',
    zh: '麦克风正被其他应用使用。请关闭后再试。',
  },
  'The microphone could not start. Try again.': { fr: "Le micro n'a pas pu démarrer. Réessayez.", zh: '麦克风无法启动，请再试一次。' },
  'I didn’t hear anything. Speak a little louder or closer to the microphone.': {
    fr: "Je n'ai rien entendu. Parlez un peu plus fort ou plus près du micro.",
    zh: '我没听到声音。请大声一点，或者离麦克风近一点。',
  },

  // Tones
  Syllable: { fr: 'Syllabe', zh: '音节' },
  'Model voice': { fr: 'Voix du modèle', zh: '示范声音' },
  Female: { fr: 'Femme', zh: '女声' },
  Male: { fr: 'Homme', zh: '男声' },
  'The four tones': { fr: 'Les quatre tons', zh: '四个声调' },
  'Neutral tone': { fr: 'Ton neutre', zh: '轻声' },
  '1st tone': { fr: '1er ton', zh: '第一声' },
  '2nd tone': { fr: '2e ton', zh: '第二声' },
  '3rd tone': { fr: '3e ton', zh: '第三声' },
  '4th tone': { fr: '4e ton', zh: '第四声' },
  'Short and light': { fr: 'Court et léger', zh: '又短又轻' },
  'High and level': { fr: 'Haut et plat', zh: '高而平' },
  'Rising, like a surprised “what?”': { fr: 'Montant, comme un « quoi ? » étonné', zh: '上扬，像吃惊地问“啊？”' },
  'Low: dips, then rises': { fr: 'Bas : descend, puis remonte', zh: '低：先降后升' },
  'Falling sharply, like a firm “no!”': { fr: 'Descend franchement, comme un « non ! » ferme', zh: '快速下降，像坚定地说“不！”' },
  'Which tone do you hear?': { fr: 'Quel ton entendez-vous ?', zh: '你听到的是第几声？' },
  '10 syllables. Train your ear first: you say tones better once you hear them.': {
    fr: "10 syllabes. Entraînez d'abord l'oreille : on dit mieux les tons quand on les entend.",
    zh: '10 个音节。先练耳朵：听得出，才说得准。',
  },
  Score: { fr: 'Score', zh: '得分' },
  'Play again': { fr: 'Réécouter', zh: '再听一遍' },
  'Right!': { fr: 'Juste !', zh: '对了！' },
  'Excellent ear!': { fr: 'Excellente oreille !', zh: '耳朵真灵！' },
  'Good: a few more rounds and it will be automatic.': {
    fr: 'Bien : encore quelques séries et ce sera automatique.',
    zh: '不错：再练几轮就熟了。',
  },
  'Keep going: listen to the four tones above, then try again.': {
    fr: 'Continuez : réécoutez les quatre tons ci-dessus, puis réessayez.',
    zh: '继续加油：先听听上面的四个声调，再试一次。',
  },
  'Say the four tones': { fr: 'Dites les quatre tons', zh: '说出四个声调' },
  'Say the four syllables in order, with a short pause between them. Your own voice range is taken into account.': {
    fr: "Dites les quatre syllabes dans l'ordre, avec une courte pause entre chacune. L'étendue de votre propre voix est prise en compte.",
    zh: '按顺序说出四个音节，中间稍微停顿。会根据你自己的音域来判断。',
  },
  'Listen to the model': { fr: 'Écouter le modèle', zh: '听示范' },
  'I could not hear four separate syllables. Leave a short pause between each one and try again.': {
    fr: "Je n'ai pas entendu quatre syllabes séparées. Marquez une courte pause entre chacune et réessayez.",
    zh: '没有听出四个分开的音节。请在每个音节之间稍微停顿，再试一次。',
  },
  'All four tones are right!': { fr: 'Les quatre tons sont justes !', zh: '四个声调全对！' },
  'tones recognised': { fr: 'tons reconnus', zh: '个声调正确' },
  'Sounds like a': { fr: 'On dirait un', zh: '听起来像' },
};
