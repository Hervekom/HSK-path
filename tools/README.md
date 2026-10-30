# Générateur de carrousels HSK Path

`carousel.py` produit des carrousels éducatifs (style checklist clair, fond crème #FAF8F5, accents rouge #E61E28, logo 道).

- Format Instagram / Facebook : `size=(1080,1350)`, `fmt="png"`
- Format TikTok : `size=(1080,1920)`, `fmt="jpg"` (TikTok refuse le PNG) — marges hautes/basses déjà gérées
- Types de slides : `cover`, `rule` (exemples 汉字 / pinyin / sens), `checklist`, `recap` (Bad / Good + « Save this »)
- Dans les titres, `*mot*` = mot en rouge. Exemple complet : voir `2026-10-31/carousel-tone-rules-*.png`.

# Générateur de Reels / TikTok vidéo

`reel.py` → `make_reel(scenes, outro, out)` : démo produit verticale 1080×1920 (~17 s) dans le style choisi par Herve :
captures de l'app dans un téléphone incliné en perspective, zoom + défilement lent, pastille de légende « • … » en bas,
fondus, puis carte de fin (logo 道, « HSK Path », slogan noir + ligne rouge, bouton, URL). Musique douce générée (libre de droits).
Captures de l'app (mode démo, 1170×2532) : `assets/app-screens/*.png`. Rendu ≈ 2-3 min.
