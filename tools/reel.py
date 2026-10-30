"""HSK Path — générateur de Reels / TikTok « démo produit » (style clair, écrans inclinés).

Usage :
    from reel import make_reel
    make_reel(
        scenes=[("assets/app-screens/home.png", "your path to HSK 1, 2 & 3"), ...],
        outro=dict(line1="Pass the HSK, step by step.", line2="HSK 1 is 100% free.",
                   button="Start for free", url="hsk-path-eosin.vercel.app"),
        out="2026-10-31/reel-tour.mp4")

Chaque scène : une capture d'écran mobile (1170×2532 idéalement) affichée dans un téléphone
incliné en perspective, avec zoom/défilement lent, et une pastille de légende en bas.
Sortie : MP4 H.264 1080×1920, 30 i/s, avec une piste musicale douce générée (aucun droit d'auteur).
"""
import os, math, subprocess, tempfile, wave
import numpy as np
from PIL import Image, ImageDraw, ImageFilter, ImageFont

W, H, FPS = 1080, 1920, 30
BG = (250, 248, 245); INK = (17, 17, 17); RED = (230, 30, 40); GREY = (120, 120, 120); WHITE = (255, 255, 255)
INTER = "/usr/share/fonts/opentype/inter/"; NOTO = "/usr/share/fonts/opentype/noto/"
F = lambda f, s, i=0: ImageFont.truetype(f, s, index=i)

def ease(t):  # ease-in-out
    t = max(0.0, min(1.0, t)); return t * t * (3 - 2 * t)

def background():
    im = Image.new("RGB", (W, H), BG)
    glow = Image.new("RGBA", (W, H), (0, 0, 0, 0)); g = ImageDraw.Draw(glow)
    g.ellipse((W * 0.35, -H * 0.15, W * 1.4, H * 0.4), fill=RED + (30,))
    g.ellipse((-W * 0.5, H * 0.6, W * 0.6, H * 1.2), fill=RED + (18,))
    glow = glow.filter(ImageFilter.GaussianBlur(200)); im.paste(glow, (0, 0), glow)
    return im

def logo(size):
    im = Image.new("RGBA", (size, size), (0, 0, 0, 0)); d = ImageDraw.Draw(im)
    d.rounded_rectangle((0, 0, size - 1, size - 1), radius=int(size * .24), fill=INK)
    d.text((size / 2, size * .44), "道", font=F(NOTO + "NotoSerifCJK-Bold.ttc", int(size * .62), 2), fill=WHITE, anchor="mm")
    d.rounded_rectangle((size * .3, size * .8, size * .7, size * .86), radius=max(2, size // 40), fill=RED)
    return im

def phone(screen, scroll):
    """Téléphone 900×1860 avec la capture défilée de `scroll` (0..1)."""
    pw, ph, bez, r = 900, 1860, 26, 110
    sw, sh = pw - 2 * bez, ph - 2 * bez
    sc = screen.resize((sw, int(screen.height * sw / screen.width)), Image.LANCZOS)
    maxoff = max(0, sc.height - sh)
    crop = sc.crop((0, int(maxoff * scroll), sw, int(maxoff * scroll) + sh))
    im = Image.new("RGBA", (pw, ph), (0, 0, 0, 0)); d = ImageDraw.Draw(im)
    d.rounded_rectangle((0, 0, pw - 1, ph - 1), radius=r, fill=INK)
    mask = Image.new("L", (sw, sh), 0); ImageDraw.Draw(mask).rounded_rectangle((0, 0, sw - 1, sh - 1), radius=r - bez, fill=255)
    im.paste(crop, (bez, bez), mask)
    return im

def coeffs(src, dst):
    A = []
    for (x, y), (u, v) in zip(dst, src):
        A.append([x, y, 1, 0, 0, 0, -u * x, -u * y]); A.append([0, 0, 0, x, y, 1, -v * x, -v * y])
    A = np.array(A, float); B = np.array([c for p in src for c in p], float)
    return np.linalg.solve(A, B).tolist()

def tilted(img, t, scale, cx, cy, side):
    """Projette img en perspective : rotation Y douce + légère rotation, centrée en (cx, cy)."""
    w, h = img.size
    ang = math.radians(side * (14 - 6 * t))         # rotation Y qui se redresse lentement
    tilt = math.radians(-6 + 3 * t)                  # légère inclinaison dans le plan
    pts = []
    for x, y in [(0, 0), (w, 0), (w, h), (0, h)]:
        X, Y = (x - w / 2) * scale, (y - h / 2) * scale
        Z = X * math.sin(ang); X = X * math.cos(ang)
        f = 2400 / (2400 + Z)
        X, Y = X * f, Y * f
        X, Y = X * math.cos(tilt) - Y * math.sin(tilt), X * math.sin(tilt) + Y * math.cos(tilt)
        pts.append((cx + X, cy + Y))
    xs, ys = [p[0] for p in pts], [p[1] for p in pts]
    bx0, by0 = int(min(xs)) - 2, int(min(ys)) - 2
    bw, bh = int(max(xs)) - bx0 + 4, int(max(ys)) - by0 + 4
    local = [(px - bx0, py - by0) for px, py in pts]
    out = img.transform((bw, bh), Image.PERSPECTIVE, coeffs([(0, 0), (w, 0), (w, h), (0, h)], local), Image.BICUBIC)
    return out, (bx0, by0), local

def shadow_for(local, size):
    sh = Image.new("RGBA", size, (0, 0, 0, 0))
    ImageDraw.Draw(sh).polygon([(x + 20, y + 40) for x, y in local], fill=(0, 0, 0, 60))
    return sh.filter(ImageFilter.GaussianBlur(40))

def pill(text, alpha):
    f = F(INTER + "Inter-SemiBold.otf", 44)
    tw = ImageDraw.Draw(Image.new("RGB", (1, 1))).textlength(text, font=f)
    pw, ph = int(tw + 140), 104
    im = Image.new("RGBA", (pw + 80, ph + 80), (0, 0, 0, 0))
    sh = Image.new("RGBA", im.size, (0, 0, 0, 0)); ImageDraw.Draw(sh).rounded_rectangle((40, 52, 40 + pw, 52 + ph), radius=52, fill=(0, 0, 0, 50))
    im.alpha_composite(sh.filter(ImageFilter.GaussianBlur(18)))
    d = ImageDraw.Draw(im)
    d.rounded_rectangle((40, 40, 40 + pw, 40 + ph), radius=52, fill=WHITE)
    d.ellipse((40 + 44, 40 + ph / 2 - 11, 40 + 66, 40 + ph / 2 + 11), fill=RED)
    d.text((40 + 92, 40 + ph / 2 + 16), text, font=f, fill=INK, anchor="ls")
    if alpha < 1:
        a = im.getchannel("A").point(lambda v: int(v * alpha)); im.putalpha(a)
    return im

def outro_frame(o, t):
    im = background().convert("RGBA")
    a = ease(t / 0.5)
    lay = Image.new("RGBA", (W, H), (0, 0, 0, 0)); d = ImageDraw.Draw(lay)
    lg = logo(220); lay.paste(lg, (W // 2 - 110, 560), lg)
    d.text((W / 2, 900), "HSK Path", font=F(INTER + "InterDisplay-Bold.otf", 96), fill=INK, anchor="ms")
    d.text((W / 2, 1010), o["line1"], font=F(INTER + "Inter-SemiBold.otf", 50), fill=INK, anchor="ms")
    d.text((W / 2, 1078), o["line2"], font=F(INTER + "Inter-SemiBold.otf", 50), fill=RED, anchor="ms")
    bf = F(INTER + "Inter-Bold.otf", 46); bw = d.textlength(o["button"], font=bf) + 120
    d.rounded_rectangle((W / 2 - bw / 2, 1160, W / 2 + bw / 2, 1270), radius=55, fill=RED)
    d.text((W / 2, 1232), o["button"], font=bf, fill=WHITE, anchor="ms")
    if t > 0.9:
        b = ease((t - 0.9) / 0.5)
        d.text((W / 2, 1370), o["url"], font=F(INTER + "Inter-SemiBold.otf", 40), fill=INK + (int(255 * b),), anchor="ms")
        if o.get("note"):
            d.text((W / 2, 1430), o["note"], font=F(INTER + "Inter-Medium.otf", 32), fill=GREY + (int(255 * b),), anchor="ms")
    s = 0.94 + 0.06 * a
    lay = lay.resize((int(W * s), int(H * s)), Image.LANCZOS)
    full = Image.new("RGBA", (W, H), (0, 0, 0, 0)); full.paste(lay, ((W - lay.width) // 2, (H - lay.height) // 2))
    full.putalpha(full.getchannel("A").point(lambda v: int(v * a)))
    im.alpha_composite(full)
    return im.convert("RGB")

def music(path, dur, bpm=96):
    """Piste douce : nappes d'accords + kick/hat légers. Générée, libre de droits."""
    sr = 44100; n = int(dur * sr); t = np.arange(n) / sr; out = np.zeros(n)
    chords = [[57, 60, 64, 67], [53, 57, 60, 64], [48, 52, 55, 59], [55, 59, 62, 66]]  # Am7 Fmaj7 Cmaj7 G(add)
    beat = 60 / bpm; bar = beat * 4
    hz = lambda m: 440 * 2 ** ((m - 69) / 12)
    for i in range(int(dur / bar) + 1):
        s0, s1 = int(i * bar * sr), min(n, int((i + 1) * bar * sr))
        if s0 >= n: break
        tt = t[s0:s1] - i * bar
        env = np.minimum(1, tt / 0.4) * np.exp(-tt * 0.35)
        for m in chords[i % 4]:
            f = hz(m); out[s0:s1] += 0.05 * env * (np.sin(2 * np.pi * f * tt) + 0.3 * np.sin(2 * np.pi * 2 * f * tt))
        b = hz(chords[i % 4][0] - 12)
        out[s0:s1] += 0.08 * env * np.sin(2 * np.pi * b * tt)
    for k in range(int(dur / beat) + 1):
        s0 = int(k * beat * sr)
        if s0 >= n: break
        L = min(int(0.25 * sr), n - s0); tt = np.arange(L) / sr
        out[s0:s0 + L] += 0.22 * np.sin(2 * np.pi * (55 + 90 * np.exp(-tt * 30)) * tt) * np.exp(-tt * 14)
        h0 = int((k + 0.5) * beat * sr)
        if h0 < n:
            L2 = min(int(0.05 * sr), n - h0)
            out[h0:h0 + L2] += 0.03 * np.random.randn(L2) * np.exp(-np.arange(L2) / sr * 90)
    fade = int(1.5 * sr); out[-fade:] *= np.linspace(1, 0, fade); out[:int(.3 * sr)] *= np.linspace(0, 1, int(.3 * sr))
    out = out / (np.abs(out).max() + 1e-9) * 0.7
    with wave.open(path, "w") as w:
        w.setnchannels(1); w.setsampwidth(2); w.setframerate(sr); w.writeframes((out * 32767).astype(np.int16).tobytes())

def make_reel(scenes, outro, out, scene_dur=2.3, outro_dur=3.2, xfade=0.3):
    bg = background().convert("RGBA")
    screens = [(Image.open(p).convert("RGB"), cap) for p, cap in scenes]
    total = len(scenes) * scene_dur + outro_dur
    tmp = tempfile.mkdtemp()
    frames = int(total * FPS)

    def scene_img(i, local_t):
        scr, cap = screens[i]
        u = local_t / scene_dur
        ph = phone(scr, 0.05 + 0.35 * ease(u))
        side = 1 if i % 2 == 0 else -1
        scale = 0.86 + 0.09 * ease(u)
        img, (bx, by), loc = tilted(ph, ease(u), scale, W / 2 + side * 40, H / 2 - 40, side)
        fr = bg.copy()
        sh = Image.new("RGBA", (W, H), (0, 0, 0, 0))
        ImageDraw.Draw(sh).polygon([(x + bx + 24, y + by + 50) for x, y in loc], fill=(0, 0, 0, 55))
        fr.alpha_composite(sh.filter(ImageFilter.GaussianBlur(45)))
        fr.paste(img, (bx, by), img)
        pa = ease((local_t - 0.15) / 0.35)
        if pa > 0:
            p = pill(cap, pa)
            fr.alpha_composite(p, (int(W / 2 - p.width / 2), int(1500 + 30 * (1 - pa))))
        return fr.convert("RGB")

    for k in range(frames):
        t = k / FPS
        i = int(t // scene_dur)
        if i < len(scenes):
            lt = t - i * scene_dur
            fr = scene_img(i, lt)
            if lt > scene_dur - xfade:  # fondu vers la suite
                a = ease((lt - (scene_dur - xfade)) / xfade)
                nxt = scene_img(i + 1, 0) if i + 1 < len(scenes) else outro_frame(outro, 0)
                fr = Image.blend(fr, nxt, a)
        else:
            fr = outro_frame(outro, t - len(scenes) * scene_dur)
        fr.save(os.path.join(tmp, f"f{k:05d}.jpg"), quality=92)
    wav = os.path.join(tmp, "music.wav"); music(wav, total)
    os.makedirs(os.path.dirname(out) or ".", exist_ok=True)
    subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-framerate", str(FPS), "-i", os.path.join(tmp, "f%05d.jpg"), "-i", wav,
                    "-c:v", "libx264", "-preset", "veryfast", "-crf", "20", "-pix_fmt", "yuv420p", "-c:a", "aac", "-b:a", "160k",
                    "-shortest", "-movflags", "+faststart", out], check=True)
    # vignette de couverture = 1re image de l'outro
    outro_frame(outro, 2.0).save(out.rsplit(".", 1)[0] + "-cover.jpg", quality=92)
    return out
