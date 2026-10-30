"""HSK Path — générateur de carrousels éducatifs (style « checklist » clair).

Usage :
    from carousel import Deck
    d = Deck(series="Tone rules for HSK 1", total=7)
    d.cover(kicker=..., title="The 2 tones that *change* on you", items=[...])
    d.rule(kicker="Rule 1 of 2", title="...", label="Examples", rows=[("不是","búshì","is not"), ...])
    d.checklist(kicker=..., title=..., items=[...])
    d.recap(bad="...", good_title="...", items=[...], cta="Save this for your exam")
    d.save("out/dir", "nom", fmt="png" | "jpg", size=(1080,1350) | (1080,1920))

Dans les titres, les mots entre *astérisques* sont en rouge.
Les textes mélangent librement latin et chinois (police choisie automatiquement).
"""
import os, re
from PIL import Image, ImageDraw, ImageFont, ImageFilter

INTER = "/usr/share/fonts/opentype/inter/"
NOTO = "/usr/share/fonts/opentype/noto/"
BG = (250, 248, 245)       # crème du site (#FAF8F5)
INK = (17, 17, 17)         # noir HSK Path
RED = (230, 30, 40)        # rouge HSK Path
GREY = (120, 120, 120)
LINE = (236, 232, 228)
WHITE = (255, 255, 255)

_cache = {}
def font(kind, size):
    key = (kind, size)
    if key not in _cache:
        path, idx = {
            "display": (INTER + "InterDisplay-Bold.otf", 0),
            "bold": (INTER + "Inter-Bold.otf", 0),
            "semi": (INTER + "Inter-SemiBold.otf", 0),
            "med": (INTER + "Inter-Medium.otf", 0),
            "cjk": (NOTO + "NotoSansCJK-Bold.ttc", 2),
            "cjkb": (NOTO + "NotoSansCJK-Black.ttc", 2),
            "serif": (NOTO + "NotoSerifCJK-Bold.ttc", 2),
        }[kind]
        _cache[key] = ImageFont.truetype(path, size, index=idx)
    return _cache[key]

def is_cjk(ch):
    o = ord(ch)
    return 0x2E80 <= o <= 0x9FFF or 0xF900 <= o <= 0xFAFF or 0xFF00 <= o <= 0xFFEF or 0x3000 <= o <= 0x303F

def runs(text):
    out, cur, cj = [], "", None
    for ch in text:
        c = is_cjk(ch)
        if cj is None or c == cj:
            cur += ch; cj = c
        else:
            out.append((cur, cj)); cur, cj = ch, c
    if cur: out.append((cur, cj))
    return out

def text_w(d, text, kind, size, cjk_kind="cjk"):
    return sum(d.textlength(t, font=font(cjk_kind if c else kind, size)) for t, c in runs(text))

def draw_text(d, xy, text, kind, size, fill, cjk_kind="cjk", anchor="ls"):
    """Texte mixte latin/chinois sur une ligne de base. anchor: ls (gauche) ou ms (centre) ou rs (droite)."""
    x, y = xy
    w = text_w(d, text, kind, size, cjk_kind)
    if anchor == "ms": x -= w / 2
    elif anchor == "rs": x -= w
    for t, c in runs(text):
        f = font(cjk_kind if c else kind, size)
        d.text((x, y), t, font=f, fill=fill, anchor="ls")
        x += d.textlength(t, font=f)
    return w

def wrap_rich(d, text, kind, size, maxw):
    """Retourne des lignes de [(mot, rouge?)] ; *mot* = rouge."""
    tokens = []   # (mot, rouge?, collé au précédent?)
    prev_end = " "
    for part in re.split(r"(\*[^*]+\*)", text):
        if not part: continue
        red = part.startswith("*")
        body = part.strip("*") if red else part
        glue_first = bool(tokens) and not body[:1].isspace() and not prev_end.isspace()
        prev_end = body[-1:]
        for j, w in enumerate(body.split(" ")):
            if w: tokens.append((w, red, glue_first and j == 0))
    # fusionne les fragments collés (ex. « bù » + « . ») en un seul mot à plusieurs couleurs
    merged = []
    for w, red, glue in tokens:
        if glue and merged: merged[-1].append((w, red))
        else: merged.append([(w, red)])
    tokens = merged
    lines, cur = [], []
    word = lambda tok: "".join(t for t, _ in tok)
    for tok in tokens:
        trial = cur + [tok]
        if cur and text_w(d, " ".join(word(t) for t in trial), kind, size) > maxw:
            lines.append(cur); cur = [tok]
        else:
            cur = trial
    if cur: lines.append(cur)
    return lines

class Deck:
    def __init__(self, series, total, logo_path=None):
        self.series, self.total, self.slides = series, total, []
        self.logo_path = logo_path

    # ---------- primitives ----------
    def _canvas(self, W, H):
        im = Image.new("RGB", (W, H), BG)
        glow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
        g = ImageDraw.Draw(glow)
        g.ellipse((W * 0.45, -H * 0.25, W * 1.35, H * 0.45), fill=RED + (26,))
        g.ellipse((-W * 0.4, H * 0.7, W * 0.5, H * 1.3), fill=RED + (14,))
        glow = glow.filter(ImageFilter.GaussianBlur(160))
        im.paste(glow, (0, 0), glow)
        return im

    def _logo(self, size):
        im = Image.new("RGBA", (size, size), (0, 0, 0, 0))
        d = ImageDraw.Draw(im)
        d.rounded_rectangle((0, 0, size - 1, size - 1), radius=int(size * 0.24), fill=INK)
        d.text((size / 2, size * 0.44), "道", font=font("serif", int(size * 0.62)), fill=WHITE, anchor="mm")
        d.rounded_rectangle((size * 0.3, size * 0.8, size * 0.7, size * 0.86), radius=3, fill=RED)
        return im

    def _card(self, im, box, radius=40):
        x0, y0, x1, y1 = box
        sh = Image.new("RGBA", im.size, (0, 0, 0, 0))
        ImageDraw.Draw(sh).rounded_rectangle((x0, y0 + 14, x1, y1 + 14), radius=radius, fill=(0, 0, 0, 28))
        sh = sh.filter(ImageFilter.GaussianBlur(22))
        im.paste(sh, (0, 0), sh)
        ImageDraw.Draw(im).rounded_rectangle(box, radius=radius, fill=WHITE)

    def _check(self, d, cx, cy, r=24):
        d.ellipse((cx - r, cy - r, cx + r, cy + r), fill=RED)
        d.line([(cx - r * 0.42, cy + r * 0.02), (cx - r * 0.08, cy + r * 0.36), (cx + r * 0.45, cy - r * 0.32)],
               fill=WHITE, width=max(4, int(r * 0.2)), joint="curve")

    def _frame(self, idx, W, H):
        im = self._canvas(W, H)
        d = ImageDraw.Draw(im)
        top = 90 if H <= 1400 else 300          # TikTok : marge haute pour l'interface
        lg = self._logo(64)
        im.paste(lg, (80, top), lg)
        d.text((162, top + 44), "HSK Path", font=font("semi", 34), fill=INK, anchor="ls")
        d.text((W - 80, top + 44), f"{idx} of {self.total}", font=font("med", 30), fill=GREY, anchor="rs")
        bottom = H - 70 if H <= 1400 else H - 470
        d.text((80, bottom), self.series, font=font("med", 26), fill=GREY, anchor="ls")
        x = W - 80
        for i in range(self.total, 0, -1):
            wdt = 46 if i == idx else 12
            x -= wdt
            d.rounded_rectangle((x, bottom - 18, x + wdt, bottom - 6), radius=6, fill=INK if i == idx else (205, 200, 196))
            x -= 10
        return im, d, top + 150

    def _headline(self, d, y, kicker, title, W, size=104):
        if kicker:
            d.text((80, y), kicker, font=font("semi", 36), fill=RED, anchor="ls"); y += 40
        lines = wrap_rich(d, title, "display", size, W - 160)
        for line in lines:
            y += int(size * 1.08)
            x = 80
            for i, tok in enumerate(line):
                for j, (w, red) in enumerate(tok):
                    txt = w + (" " if (i < len(line) - 1 and j == len(tok) - 1) else "")
                    x += draw_text(d, (x, y), txt, "display", size, RED if red else INK, cjk_kind="cjkb")
        return y

    # ---------- types de slides ----------
    def cover(self, kicker, title, items, swipe=True):
        self.slides.append(("cover", dict(kicker=kicker, title=title, items=items, swipe=swipe)))
    def rule(self, kicker, title, label, rows, note=None):
        """rows = [(hanzi, pinyin, sens)]"""
        self.slides.append(("rule", dict(kicker=kicker, title=title, label=label, rows=rows, note=note)))
    def checklist(self, kicker, title, items):
        self.slides.append(("checklist", dict(kicker=kicker, title=title, items=items)))
    def recap(self, bad, good_title, items, cta):
        self.slides.append(("recap", dict(bad=bad, good_title=good_title, items=items, cta=cta)))

    def _render(self, idx, kind, a, W, H):
        im, d, y = self._frame(idx, W, H)
        if kind == "cover":
            y = self._headline(d, y + 40, a["kicker"], a["title"], W, 112)
            n = len(a["items"]); rh = 104
            box = (80, y + 70, W - 80, y + 70 + n * rh + 30)
            self._card(im, box)
            d = ImageDraw.Draw(im)
            for i, it in enumerate(a["items"]):
                cy = box[1] + 15 + rh * i + rh / 2
                self._check(d, 150, cy)
                draw_text(d, (200, cy + 15), it, "semi", 42, INK)
                if i < n - 1: d.line((200, box[1] + 15 + rh * (i + 1), W - 120, box[1] + 15 + rh * (i + 1)), fill=LINE, width=2)
            if a["swipe"]:
                px1, py = W - 110, box[3] + 10
                pill = (px1 - 230, py - 45, px1, py + 45)
                self._card(im, pill, radius=45)
                d = ImageDraw.Draw(im)
                d.text(((pill[0] + pill[2]) / 2, py + 13), "Swipe  →", font=font("semi", 36), fill=INK, anchor="ms")
        elif kind == "rule":
            y = self._headline(d, y + 40, a["kicker"], a["title"], W, 96)
            n = len(a["rows"]); rh = 140
            top = y + 80 if a["note"] else max(y + 90, int(H * 0.40))
            box = (80, top, W - 80, top + 90 + n * rh)
            self._card(im, box)
            d = ImageDraw.Draw(im)
            d.text((130, box[1] + 70), a["label"], font=font("semi", 32), fill=GREY, anchor="ls")
            for i, (hz, py_, mean) in enumerate(a["rows"]):
                base = box[1] + 90 + rh * i + 100
                w = draw_text(d, (130, base), hz, "bold", 76, INK, cjk_kind="cjk")
                d.text((130 + w + 36, base - 8), py_, font=font("bold", 50), fill=RED, anchor="ls")
                d.text((W - 130, base - 8), mean, font=font("med", 36), fill=GREY, anchor="rs")
                if i < n - 1: d.line((130, base + 42, W - 130, base + 42), fill=LINE, width=2)
            if a["note"]:
                draw_text(d, (80, box[3] + 72), a["note"], "med", 34, GREY)
        elif kind == "checklist":
            y = self._headline(d, y + 40, a["kicker"], a["title"], W, 96)
            n = len(a["items"]); rh = 120
            top = max(y + 90, int(H * 0.42))
            box = (80, top, W - 80, top + 40 + n * rh)
            self._card(im, box)
            d = ImageDraw.Draw(im)
            for i, it in enumerate(a["items"]):
                cy = box[1] + 20 + rh * i + rh / 2
                self._check(d, 150, cy)
                draw_text(d, (200, cy + 16), it, "semi", 44, INK)
                if i < n - 1: d.line((200, box[1] + 20 + rh * (i + 1), W - 120, box[1] + 20 + rh * (i + 1)), fill=LINE, width=2)
        elif kind == "recap":
            bad = (80, y + 30, W - 80, y + 200)
            self._card(im, bad, radius=36)
            d = ImageDraw.Draw(im)
            d.text((130, bad[1] + 66), "Bad:", font=font("semi", 36), fill=GREY, anchor="ls")
            w = draw_text(d, (130, bad[1] + 138), a["bad"], "bold", 48, (150, 150, 150))
            d.line((130, bad[1] + 122, 130 + w, bad[1] + 122), fill=(150, 150, 150), width=4)
            n = len(a["items"]); rh = 112
            good = (80, bad[3] + 50, W - 80, bad[3] + 50 + 140 + n * rh)
            self._card(im, good)
            d = ImageDraw.Draw(im)
            d.text((130, good[1] + 90), a["good_title"], font=font("bold", 46), fill=RED, anchor="ls")
            for i, it in enumerate(a["items"]):
                cy = good[1] + 140 + rh * i + rh / 2
                self._check(d, 155, cy)
                draw_text(d, (205, cy + 16), it, "semi", 42, INK)
            cy = good[3] + 95
            d.text((W / 2 + 24, cy), a["cta"], font=font("bold", 40), fill=INK, anchor="ms")
            tw = d.textlength(a["cta"], font=font("bold", 40))
            bx = W / 2 + 24 - tw / 2 - 52
            d.polygon([(bx, cy - 34), (bx + 26, cy - 34), (bx + 26, cy + 2), (bx + 13, cy - 10), (bx, cy + 2)], outline=INK, width=4)
        return im

    def save(self, outdir, name, fmt="png", size=(1080, 1350)):
        os.makedirs(outdir, exist_ok=True)
        paths = []
        W, H = size
        for i, (kind, a) in enumerate(self.slides, 1):
            im = self._render(i, kind, a, W, H)
            p = os.path.join(outdir, f"{name}-{i}.{fmt}")
            if fmt == "jpg": im.convert("RGB").save(p, quality=92)
            else: im.save(p)
            paths.append(p)
        return paths
