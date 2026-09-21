# 🚀 AiNoma — O‘zbekistondagi Birinchi Sun’iy Intellekt Portali

AiNoma — O‘zbekistonda sun’iy intellekt bo‘yicha mustaqil nashr, B2B tahlillar, milliy va global AI vositalari katalogi hamda amaliy master-promptlar markazi.

---

## 📂 Loyiha tuzilmasi

- **Bosh sahifa:** `index.html` (interaktiv portal, asosiy tahlillar, vositalar vitrinasi)
- **Yagona portal ko‘rinishi:** `ainoma_portal.html` (kengaytirilgan bosh sahifa)
- **Yangiliklar:** `yangiliklar.html` (so‘nggi relizlar, filtrlar, O‘zbekiston va Jahon AI voqealari)
- **AI Vositalar Katalogi:** `vositalar.html` (14 ta tekshirilgan servis, 6 ta milliy O‘zbekiston loyihasi)
- **Vosita ichki sahifasi:** `vosita.html?id=[tool_id]` (har bir vositaning amaliy tavsifi, prompti va rasmiy havolasi)
- **Qo‘llanmalar & Promptlar:** `qollanmalar.html` (nusxa olish tugmali master promptlar kutubxonasi)
- **Masterklass maqola:** `qollanma-b2b.html` (B2B Outreach va AI Savdo Tizimi)
- **Asosiy maqolalar:**
  - `maqola-gpt6-astra.html` (GPT-6 Astra arxitekturasi va korporativ imkoniyatlari)
  - `maqola.html` (OpenAI Agents API va ChatGPT Data Agent)
  - `qollanma.html` (AI bilan ishlash bo‘yicha bazaviy qo‘llanma)
- **Ekotizim Hikoyalari:** `hikoyalar.html` (Keyslar va startaplar suhbatlari)
- **Stil va Skript:** `style.css` (Clean light & dark mode) va `app.js` (Ctrl+K tezkor qidiruv, tema saqlash, toast)
- **SEO & RSS:** `robots.txt`, `sitemap.xml`, `feed.xml`

---

## ⚡ 1-bosqich: Lokal sinovdan o‘tkazish

Lokal serverni ishga tushirish:
```bash
# Ushbu papka ichida:
python -m http.server 8000
```
Brauzerda oching: `http://localhost:8000`

---

## 📦 2-bosqich: Nashr qilishga tayyorlash (Avtomatlashtirilgan build)

Loyiha ildizida quyidagi buyruqni bering:
```bash
python scripts/deploy_ainoma.py
```
Bu skript:
1. `deploy_ainoma/` papkasiga toza, ortiqcha prototiplarsiz mustaqil AiNoma nashrini yig‘adi.
2. Cloudflare Pages uchun `_redirects` va Vercel uchun `vercel.json` fayllarini yaratadi.
3. Barcha ichki havolalar, sitemap va Google Doc referral havolalarini avtomatik tekshiradi.
4. `deploy_gptify_pages/ainoma` ga sinxronlashtirib, GitHub Pages orqali ko‘rishga tayyorlaydi.

---

## 🌐 3-bosqich: Vebga chiqarish (Publishing Options)

### A. Cloudflare Pages (Tavsiya etiladi — Tezkor va Bepul SSL)
1. `deploy_ainoma` papkasini Cloudflare Pages paneliga (Direct Upload or Git) yuklang.
2. Build command: talab qilinmaydi (Static HTML).
3. Maxsus domenni ulang: `ainoma.uz` -> CNAME `[your-subdomain].pages.dev`.

### B. Vercel
1. `deploy_ainoma` papkasiga kiring va buyruq bering:
   ```bash
   vercel --prod
   ```
2. `vercel.json` tufayli barcha havolalar `.html` qo‘shimchasisiz toza ochiladi (masalan: `ainoma.uz/yangiliklar`).

### C. GitHub Pages (`gptify.github.io/ainoma`)
1. `scripts/deploy_ainoma.py` ishlaganda fayllar `deploy_gptify_pages/ainoma` papkasiga avtomatik ko‘chiriladi.
2. `deploy_gptify_pages` repo-ga commit va push qilinsa, sahifa darhol `https://gptify.github.io/ainoma/` manzilida ishlaydi.
