# Générateur de carrousels HSK Path

`carousel.py` produit des carrousels éducatifs (style checklist clair, fond crème #FAF8F5, accents rouge #E61E28, logo 道).

- Format Instagram / Facebook : `size=(1080,1350)`, `fmt="png"`
- Format TikTok : `size=(1080,1920)`, `fmt="jpg"` (TikTok refuse le PNG) — marges hautes/basses déjà gérées
- Types de slides : `cover`, `rule` (exemples 汉字 / pinyin / sens ; 4 lignes max), `checklist`, `quiz` (question + options A/B/C), `recap` (Bad / Good + « Save this » ; paramètres optionnels `url=` → « Practice free → … » et `share=` → ligne de partage)
- Exemple quiz : `2026-11-01/carousel-week1-review-*.png`
- Dans les titres, `*mot*` = mot en rouge. Exemple complet : voir `2026-10-31/carousel-tone-rules-*.png`.

# Générateur de Reels / TikTok vidéo

`reel.py` → `make_reel(scenes, outro, out)` : démo produit verticale 1080×1920 (~17 s) dans le style choisi par Herve :
captures de l'app dans un téléphone incliné en perspective, zoom + défilement lent, pastille de légende « • … » en bas,
fondus, puis carte de fin (logo 道, « HSK Path », slogan noir + ligne rouge, bouton, URL). Musique douce générée (libre de droits).
Captures de l'app (mode démo, 1170×2532) : `assets/app-screens/*.png`. Rendu ≈ 2-3 min.

# Format TikTok « Guess the word » (le plus performant)

`guess.py` → `make_guess(word, pinyin, meaning, ex_zh, ex_py, ex_en, out_prefix, level)` : 3 slides verticales JPEG
fond noir (accroche « Guess this HSK 1 word » + gros caractère / réponse + exemple / « Follow @hskpath » + URL).
C'est le format du 1er TikTok (欢迎) : 613 vues et 28 j'aime en ~16 h pour un compte neuf. Publié chaque nuit vers 2h57 (Shanghai).

# Appels à l'engagement (demande de Herve)
Chaque publication pousse à liker, commenter, sauvegarder et SURTOUT partager.
`make_guess(..., share="Send this to a friend learning Chinese")` ajoute la ligne de partage sur la slide 3.

# Mettre à jour les captures de l'app (quand le code de l'app change)
1. git clone --depth 1 https://github.com/Hervekom/hsk-path (branche main) ; npm install ; PORT=3123 npx tsx server.ts &
2. Playwright (python), viewport 390×844, device_scale_factor 3, is_mobile ; add_init_script("sessionStorage.setItem('hsk_demo','1')") pour le mode démo.
3. Pour chaque vue : goto http://localhost:3123/#/<vue>, reload, attendre que le texte de la page dépasse 200 caractères, screenshot → assets/app-screens/<vue>.png
   Vues : landing dashboard hsk-levels vocabulary phrases novels pronunciation speaking achievements practice-hub tutor mock-tests progress listening-practice quiz
4. Mettre à jour assets/APP-FEATURES.md (fonctionnalités + commit de référence).
