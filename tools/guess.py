"""HSK Path — format TikTok « Guess the word » (3 slides verticales, fond noir).
C'est le format du 1er TikTok (欢迎), qui a très bien marché : à réutiliser tel quel.

    from guess import make_guess
    make_guess(word="好吃", pinyin="hǎochī", meaning="delicious", level="HSK 1",
               ex_zh="这个很好吃！", ex_py="Zhège hěn hǎochī!", ex_en="This is delicious!",
               out_prefix="2026-11-01/tiktok-guess-haochi")   # -> -1.jpg, -2.jpg, -3.jpg (JPEG pour TikTok)
"""
import os
from PIL import Image, ImageDraw, ImageFont

W, H = 1080, 1920
BG = (17, 17, 17); RED = (230, 30, 40); GREY = (185, 185, 185); WHITE = (255, 255, 255)
NOTO = "/usr/share/fonts/opentype/noto/"
F = lambda f, s: ImageFont.truetype(NOTO + f, s, index=2)
SERIF, SANS, BLACK = "NotoSerifCJK-Bold.ttc", "NotoSansCJK-Regular.ttc", "NotoSansCJK-Black.ttc"

def _logo(size):
    im = Image.new("RGBA", (size, size), (0, 0, 0, 0)); d = ImageDraw.Draw(im)
    d.rounded_rectangle((0, 0, size - 1, size - 1), radius=int(size * .24), fill=(30, 30, 30))
    d.text((size / 2, size * .44), "道", font=F(SERIF, int(size * .62)), fill=WHITE, anchor="mm")
    d.rounded_rectangle((size * .3, size * .8, size * .7, size * .86), radius=3, fill=RED)
    return im

def _base():
    im = Image.new("RGB", (W, H), BG); d = ImageDraw.Draw(im)
    lg = _logo(110); im.paste(lg, (60, 280), lg)
    d.text((190, 335), "HSK Path", font=F(SERIF, 44), fill=WHITE, anchor="lm")
    return im, d

def _fit(d, text, font_file, size, maxw):
    while size > 40 and d.textlength(text, font=F(font_file, size)) > maxw: size -= 6
    return F(font_file, size)

def make_guess(word, pinyin, meaning, ex_zh, ex_py, ex_en, out_prefix, level="HSK 1",
               url="hsk-path-eosin.vercel.app", share="Send this to a friend learning Chinese"):
    os.makedirs(os.path.dirname(out_prefix) or ".", exist_ok=True)
    big = _fit(ImageDraw.Draw(Image.new("RGB", (1, 1))), word, SERIF, 330 if len(word) <= 2 else 250, 960)
    # 1 — accroche
    im, d = _base()
    d.text((W // 2, 560), f"Guess this {level} word:", font=F(SANS, 54), fill=WHITE, anchor="mm")
    d.text((W // 2, 900), word, font=big, fill=WHITE, anchor="mm")
    d.rounded_rectangle((W // 2 - 90, 1120, W // 2 + 90, 1134), radius=7, fill=RED)
    d.text((W // 2, 1240), "Can you guess what it means?", font=F(SANS, 52), fill=GREY, anchor="mm")
    d.text((W // 2, 1340), "Swipe →", font=F(BLACK, 50), fill=RED, anchor="mm")
    p1 = f"{out_prefix}-1.jpg"; im.save(p1, quality=92)
    # 2 — réponse + exemple
    im, d = _base()
    d.text((W // 2, 700), word, font=_fit(d, word, SERIF, 220, 960), fill=WHITE, anchor="mm")
    d.text((W // 2, 900), pinyin, font=F(SANS, 80), fill=GREY, anchor="mm")
    d.text((W // 2, 1000), f"= {meaning}", font=_fit(d, f"= {meaning}", SANS, 64, 960), fill=WHITE, anchor="mm")
    d.rounded_rectangle((W // 2 - 90, 1080, W // 2 + 90, 1094), radius=7, fill=RED)
    d.text((W // 2, 1200), ex_zh, font=_fit(d, ex_zh, SERIF, 76, 960), fill=WHITE, anchor="mm")
    d.text((W // 2, 1290), ex_py, font=_fit(d, ex_py, SANS, 48, 960), fill=GREY, anchor="mm")
    d.text((W // 2, 1360), ex_en, font=_fit(d, ex_en, SANS, 48, 960), fill=WHITE, anchor="mm")
    p2 = f"{out_prefix}-2.jpg"; im.save(p2, quality=92)
    # 3 — appel à l'action
    im, d = _base()
    d.text((W // 2, 700), "A new HSK word", font=F(SERIF, 84), fill=WHITE, anchor="mm")
    d.text((W // 2, 810), "every day", font=F(SERIF, 84), fill=WHITE, anchor="mm")
    d.rounded_rectangle((W // 2 - 90, 900, W // 2 + 90, 914), radius=7, fill=RED)
    d.text((W // 2, 1010), "HSK 1 · HSK 2 · HSK 3", font=F(SANS, 54), fill=GREY, anchor="mm")
    d.rounded_rectangle((W // 2 - 330, 1140, W // 2 + 330, 1240), radius=50, fill=RED)
    d.text((W // 2, 1190), "Follow @hskpath", font=F(BLACK, 52), fill=WHITE, anchor="mm")
    d.text((W // 2, 1300), "Practice free:", font=F(SANS, 44), fill=GREY, anchor="mm")
    d.text((W // 2, 1365), url, font=F(BLACK, 48), fill=WHITE, anchor="mm")
    d.text((W // 2, 1450), share, font=_fit(d, share, SANS, 44, 960), fill=GREY, anchor="mm")
    p3 = f"{out_prefix}-3.jpg"; im.save(p3, quality=92)
    return [p1, p2, p3]
