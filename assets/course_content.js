/**
 * GPTify Academy — Sun'iy Intellekt Asoslari (AI Foundations)
 * Flagship 14-Lesson Certified Curriculum
 * Authors: Shukhrat Iskandarov (Founder at GPTify.co & Co-founder at Cubeo.ai) & Davlatbek Iskandarov (PhD, TDIU)
 * Grounded in: "GPTify Sun'iy intellektni noldan boshlash: 4 bosqichli tizim + amaliy promptlar"
 */

const COURSE_DATA = {
  "1_1": {
    "id": "1_1",
    "module": "1-Modul: AI Anatomiyasi & Fikrlash Sherigi",
    "lessonNum": "1.1",
    "title": "1.1. LLM qanday fikrlaydi? (GPT-4o vs Claude 3.5 Sonnet vs Gemini)",
    "duration": "15 daqiqa",
    "timeBudget": "📖 Modellar Anatomiyasi: 7 daqiqa · 🧠 Bilim tekshiruvi: 2 daqiqa · ⚡ Grounding Prompt Amaliyoti: 6 daqiqa (JAMI: 15 daqiqa)",
    "storyboard": [
      {
        "tag": "1 / 4-QADAM: ASOSIY TUSHUNCHA",
        "avatar": "🤖",
        "name": "AI Fikrlash Tizimi:",
        "quote": "Sun'iy intellekt insondek 'ong' yoki ma'lumotlar ombori emas — u navbatdagi eng to'g'ri so'zni (tokenni) ehtimollik nazariyasi bilan bashorat qiluvchi super-kalkulyatordir.",
        "tip": "💡 <b>Oltin Qoida:</b> Modelga qancha aniq kontekst bersangiz, uning to'g'ri token tanlash ehtimoli shuncha oshadi."
      },
      {
        "tag": "2 / 4-QADAM: KATTA XATO",
        "avatar": "❌",
        "name": "Foydalanuvchi Xatosi:",
        "quote": "\"Menga O'zbekiston soliq qonunchiligi bo'yicha yangi qarorni aytib ber\" deb manbasiz umumiy savol berish.",
        "tip": "⚠️ <b>Oqibat:</b> Model bilmagan joyini to'qib chiqaradi (Hallucination) va soxta moddalarni haqiqatdek taqdim etadi."
      },
      {
        "tag": "3 / 4-QADAM: MODELLAR TANLOVI",
        "avatar": "🎯",
        "name": "Qaysi Model Qachon Kerak?",
        "quote": "Claude 3.5 Sonnet: B2B hujjatlar, analitika va aniq mantiq.\nGPT-4o: Ovozli muloqot, rasmlar va tezkor marketing.\nGemini 1.5/2.0: Ulkan kitoblar va yuzlab sahifalik hisobotlar.",
        "tip": "⚖️ <b>Tavsiya:</b> Ish va biznes tahlillari uchun Claude 3.5 Sonnet ni tanlash tavsiya etiladi."
      },
      {
        "tag": "4 / 4-QADAM: YECHIM (GROUNDING)",
        "avatar": "💎",
        "name": "Faktik Natija Formulari:",
        "quote": "\"Faqat men taqdim etgan hujjat asosida javob ber. Agar javob matnda bo'lmasa, o'zingdan to'qima va 'Matnda bu ma'lumot yo'q' deb yoz.\"",
        "tip": "🏆 <b>Yutuq:</b> Halutsinatsiya xavfi 99% ga kamayadi va natija xavfsiz bo'ladi."
      }
    ],
    "deepDive": "<div class=\"deep-dive-article\">\n  <div class=\"case-callout\">\n    <h4 style=\"color:var(--teal-light); margin-top:0;\">🎯 1-Qism: \"Next-Token Prediction\" Nima va Nega Model Inson Emas?</h4>\n    <p>\n      Ko'pchilik sun'iy intellektni xuddi Google kabi hamma narsani biluvchi internet-ensiklopediya deb o'ylaydi. Bu noto'g'ri! Katta Til Modellari (LLM — Large Language Models) aslida <b>navbatdagi eng ehtimolli tokenni (so'z yoki bo'g'inni) bashorat qiluvchi</b> ehtimollik kalkulyatoridir.\n    </p>\n    <p>\n      Masalan: <i>\"O'zbekistonning poytaxti — ...\"</i> jumlasi kiritilganda, model parametrlar bazasidan hisoblab, \"Toshkent\" so'zining ehtimolligi 99.4% deb topadi va uni chiqaradi. Agar siz modeldan u bilmaydigan noma'lum ichki hisobotingiz haqida so'rasangiz, u <i>\"bilmayman\"</i> deyish o'rniga, grammatik jihatdan eng ishonarli eshitiladigan <b>yolg'onni (hallucination)</b> to'qib chiqaradi.\n    </p>\n  </div>\n\n  <h4 style=\"color:var(--text); margin-top:20px;\">📊 2-Qism: 2026-Yilgi Yetakchi 3 Model Taqqoslashi</h4>\n  <p>Vazifangizga qarab to'g'ri modelni tanlash vaqt va xarajatni tejaydi:</p>\n  <div class=\"matrix-grid\">\n    <div class=\"matrix-col\">\n      <b style=\"color:var(--brand-emerald);\">Claude 3.5 Sonnet (Anthropic)</b>\n      <p style=\"font-size:12.5px; color:var(--text-secondary); margin:0;\">\n        <b>Kuchli tomoni:</b> Mantiqiy fikrlash, B2B shartnomalar, Excel formulalari va dasturlash. Hujjatlar va analitikada jahon yetakchisi.\n      </p>\n    </div>\n    <div class=\"matrix-col\">\n      <b style=\"color:var(--lime);\">GPT-4o (OpenAI)</b>\n      <p style=\"font-size:12.5px; color:var(--text-secondary); margin:0;\">\n        <b>Kuchli tomoni:</b> Multimodal imkoniyatlar (ovozli muloqot, audio transkripsiya, grafik tahlil), marketing va tezkor kundalik savollar.\n      </p>\n    </div>\n    <div class=\"matrix-col\">\n      <b style=\"color:var(--tg-blue);\">Gemini 1.5 Pro / 2.0 (Google)</b>\n      <p style=\"font-size:12.5px; color:var(--text-secondary); margin:0;\">\n        <b>Kuchli tomoni:</b> 1-2 million tokenlik ulkan kontekst oynasi. 500 sahifalik kitoblar va yillik hisobotlarni birvarakayiga tahlil qilish.\n      </p>\n    </div>\n  </div>\n\n  <div class=\"case-callout\" style=\"border-left-color:var(--lime); margin-top:20px;\">\n    <h4 style=\"color:var(--brand-emerald); margin-top:0;\">🏢 3-Qism: Real Korxona Misoli (Halutsinatsiya Falokati)</h4>\n    <p>\n      Toshkentdagi ulgurji savdo korxonasi xodimi ChatGPT bepul versiyasiga: <i>\"Yangi Soliq kodeksi bo'yicha keshbekka qanday chegirma beriladi?\"</i> deb ochiq savol berdi. Model O'zbekiston qonunida mavjud bo'lmagan soxta \"18-modda, 3-qism\"ni to'qib chiqardi. Natijada korxona shartnomada xato band kiritib, noqulay vaziyatga tushdi.\n    </p>\n    <p>\n      <b>To'g'ri GPTify Yondashuvi (Grounding):</b> Modelga hech qachon ochiq manbasiz savol bermang. Avval rasmiy hujjat matnini ko'chirib o'tkazing va buyruq bering: <i>\"Faqat quyidagi matn doirasida javob ber. Agar javob matnda bo'lmasa, 'Ushbu ma'lumot taqdim etilgan matnda yo'q' deb javob qaytar.\"</i>\n    </p>\n  </div>\n</div>",
    "quiz": {
      "question": "Hujjatlarni tahlil qilishda modelning yolg'on to'qib chiqarishini (hallucination) qanday qilib 99% ga kamaytirasiz?",
      "options": [
        "A) Modelga internetdan o'zi qidirib xulosa qilishini buyurish orqali.",
        "B) Aniq hujjat matnini taqdim etib, 'Faqat berilgan matn asosida javob ber, matnda yo'q narsani to'qima' cheklovini kiritish (Grounding) orqali.",
        "C) Savolni rus va ingliz tillarida bir vaqtda qayta-qayta takrorlash orqali."
      ],
      "correctIndex": 1,
      "explanation": "To'ppa-to'g'ri! 'Grounding' texnikasi modelni o'z ixtiyoriy fantaziyasidan mahrum qiladi va faqat siz taqdim etgan faktik hujjat doirasida javob berishga majburlaydi."
    },
    "notes": [
      "<b>Next-Token Prediction:</b> LLM inson kabi ong bilan emas, ehtimollik asosida so'zlarni ulaydi.",
      "<b>Claude 3.5 Sonnet:</b> Hujjatlar, shartnomalar va tahlillarda eng ishonchli model.",
      "<b>Grounding qoidasi:</b> 'Faqat taqdim etilgan matn doirasida ishla' cheklovi xatarlarni nolga tushiradi."
    ],
    "downloadablePrompt": "Sen qat'iy faktlarga tayanuvchi korporativ tahlilchisan.\nQuyida senga kompaniyaning ichki nizomi berilgan.\nVAZIFA: Faqat va faqat taqdim etilgan matnga tayangan holda savolga javob ber.\nCHEKLOV: Agar savolning aniq javobi matnda mavjud bo'lmasa, hech narsani taxmin qilma yoki to'qima. Shunchaki: \"Ushbu ma'lumot taqdim etilgan hujjatda yo'q\" deb javob qaytar.",
    "homeworkTitle": "Topshiriq: Modelni o'z bilimi bilan cheklovchi xavfsiz tizimli prompt yozing",
    "homeworkDefault": "Sen professional korporativ arxivchisan. Senga kompaniya qoidalari taqdim etiladi. Faqat ushbu qoidalar asosida xodimlarning savollariga javob ber. Hech qachon tashqi internet ma'lumotlaridan foydalanma va javobing oxirida hujjatning qaysi bandiga tayanganingni ko'rsat."
  },
  "1_2": {
    "id": "1_2",
    "module": "1-Modul: AI Anatomiyasi & Fikrlash Sherigi",
    "lessonNum": "1.2",
    "title": "1.2. Tokenlar, xotira va Context Window ('Lost in the Middle' siri)",
    "duration": "15 daqiqa",
    "timeBudget": "📖 Tokenizatsiya & Xotira Sirlari: 7 daqiqa · 🧠 Bilim tekshiruvi: 2 daqiqa · ⚡ Chunking Amaliyoti: 6 daqiqa (JAMI: 15 daqiqa)",
    "storyboard": [
      {
        "tag": "1 / 4-QADAM: TOKEN NIMA?",
        "avatar": "🔤",
        "name": "Token Anatomiyasi:",
        "quote": "AI matnni butun so'zlar emas, balki 'tokenlar' (bo'g'inlar va belgi qismlari) ko'rinishida o'qiydi. 100 ta inglizcha so'z ~130 tokenni tashkil etadi.",
        "tip": "🇺🇿 <b>O'zbek tili siri:</b> Lotin alifbosidagi 'sh', 'ch', 'o'' kabi harflar ingliz tiliga nisbatan 2-3 barobar ko'proq token sarflaydi."
      },
      {
        "tag": "2 / 4-QADAM: 'LOST IN THE MIDDLE'",
        "avatar": "📉",
        "name": "Katta Hujjatlar Xatosi:",
        "quote": "Modelga 60 varoqlik shartnomani birdaniga yuklasangiz, u boshini va oxirini yaxshi eslaydi, lekin o'rtadagi muhim shartlarni tushirib qoldirishi mumkin.",
        "tip": "⚠️ <b>Diqqat:</b> Bu ilmiy tilda 'Lost in the Middle' (O'rtada yo'qolish) fenomeni deb ataladi."
      },
      {
        "tag": "3 / 4-QADAM: CHUNKING YECHIMI",
        "avatar": "✂️",
        "name": "To'g'ri Texnika (Chunking):",
        "quote": "Katta hajmli ma'lumotlarni 3-5 betdan iborat mantiqiy bloklarga (chunks) bo'lib tahlil qildirish eng yuqori aniqlikni kafolatlaydi.",
        "tip": "💡 <b>AI Qoidasi:</b> Avval har bir bo'lim bo'yicha oraliq xulosa oling, so'ngra umumiy tahlil yarating."
      },
      {
        "tag": "4 / 4-QADAM: KESH VA TEJAMKORLIK",
        "avatar": "💰",
        "name": "Prompt Caching:",
        "quote": "Kompaniya qoidalarini har safar qayta yuklamaslik uchun Prompt Caching ishlatiladi — bu API xarajatlarini 90% ga kamaytiradi!",
        "tip": "🏆 <b>Natija:</b> Ham javob olish tezligi oshadi, ham budjet tejaladi."
      }
    ],
    "deepDive": "<div class=\"deep-dive-article\">\n  <div class=\"case-callout\">\n    <h4 style=\"color:var(--teal-light); margin-top:0;\">🧩 1-Qism: Token Nima va Nega U Pul Turadi?</h4>\n    <p>\n      Sun'iy intellekt matnni inson kabi harflar bilan emas, <b>token</b> deb ataluvchi raqamli bo'laklarga ajratib o'qiydi. Masalan, ingliz tilidagi <i>\"apple\"</i> so'zi 1 ta token bo'lsa, o'zbek tilidagi <i>\"olmachalarimizdan\"</i> so'zi 4-5 ta tokenga bo'linishi mumkin: <i>[\"ol\", \"ma\", \"chalar\", \"imiz\", \"dan\"]</i>.\n    </p>\n    <p>\n      Shuning uchun o'zbek tilidagi matnlarni qayta ishlash ingliz tiliga qaraganda ko'proq token va biroz ko'proq xarajat talab qiladi. Buni tushunish sizga promptlarni ixcham va aniq yozish odatini beradi.\n    </p>\n  </div>\n\n  <h4 style=\"color:var(--text); margin-top:20px;\">📉 2-Qism: \"Lost in the Middle\" Xatosi va Context Window</h4>\n  <p>\n    Zamonaviy modellar (masalan, Claude 200k, Gemini 1M-2M) ulkan hajmdagi matnni qabul qila oladi. Ammo Stenford universiteti tadqiqotlari shuni ko'rsatadiki: <b>matn qanchalik uzun bo'lsa, model o'rtadagi detallarni shunchalik e'tibordan chetda qoldiradi</b>.\n  </p>\n  <ul style=\"padding-left:20px; font-size:13.5px; color:var(--text-secondary); line-height:1.7;\">\n    <li><b>Boshi (Primacy effect):</b> Promptning boshidagi ko'rsatmalar juda yaxshi eslab qolinadi.</li>\n    <li><b>Oxiri (Recency effect):</b> Promptning oxiridagi xulosalar eng yuqori e'tibor bilan bajariladi.</li>\n    <li><b>O'rtasi:</b> O'rtada yotgan nozik shartlar tushib qolish xavfi eng yuqori bo'ladi.</li>\n  </ul>\n\n  <div class=\"case-callout\" style=\"border-left-color:var(--brand-emerald); margin-top:20px;\">\n    <h4 style=\"color:var(--brand-emerald); margin-top:0;\">💡 3-Qism: Chunking Strategiyasi (Katta Hujjatlarni Bo'lib Ishlash)</h4>\n    <p>\n      Agar sizda 50 sahifalik kompaniya hisoboti yoki nizomi bo'lsa, uni birdaniga tashlab <i>\"hammasini tahlil qil\"</i> demang.\n    </p>\n    <p>\n      <b>To'g'ri ketma-ketlik:</b>\n      <br>1-qadam: Hujjatni 3 ta mantiqiy bo'limga ajrating (Moliya, Kadrlar, Operatsiyalar).\n      <br>2-qadam: Har bir qism uchun alohida xulosa va ko'rsatkichlar jadvalini oling.\n      <br>3-qadam: Yakunida modelga ushbu 3 ta oraliq xulosani berib, umumiy xulosa yasattiring.\n    </p>\n  </div>\n</div>",
    "quiz": {
      "question": "Katta hajmli (50+ sahifalik) shartnomani tahlil qilishda eng ishonchli natijaga qanday erishiladi?",
      "options": [
        "A) Hujjatni birdaniga tashlab, 'Hammasini bir so'z qoldirmay o'qib chiq' deb yozish orqali.",
        "B) Hujjatni mantiqiy boblarga (chunks) ajratib, har bir bobdan oraliq xulosa olib, so'ngra yakuniy tahlil qilish orqali.",
        "C) Hujjatning faqat birinchi sahifasini o'qitish orqali."
      ],
      "correctIndex": 1,
      "explanation": "To'g'ri! Chunking (bo'laklarga ajratish) texnikasi modelning 'Lost in the Middle' xatosini bartaraf etadi va har bir bobning to'liq tahlil qilinishini ta'minlaydi."
    },
    "notes": [
      "<b>Tokenizatsiya:</b> So'zlar bo'g'inlarga ajratiladi; lotin imlosidagi maxsus belgilar ko'proq token sarflaydi.",
      "<b>Lost in the Middle:</b> Uzun matnning o'rtasidagi ma'lumotlar e'tibordan chetda qolishi mumkin.",
      "<b>Chunking:</b> Katta vazifani kichik bloklarga bo'lib yechish sifatni keskin oshiradi."
    ],
    "downloadablePrompt": "Sen yirik hujjatlar bilan ishlovchi analitiksan.\nQuyida senga kompaniya hisobotining 1-BO'LIMI (Moliya qismi) berilmoqda.\nVAZIFA: Ushbu bo'limdan faqat quyidagi 3 ko'rsatkichni ajratib ol:\n1. Umumiy daromad va xarajat.\n2. Eng katta 3 ta xarajat moddasi.\n3. Kutilmagan keshflou farqlari.\nKeyingi bo'limni kiritmagunimcha umumiy xulosa chiqarma.",
    "homeworkTitle": "Topshiriq: Katta hajmli matnni bo'laklab tahlil qiluvchi (Chunking) prompt tuzing",
    "homeworkDefault": "Sen professional audit mutaxassisisan. Men senga katta nizomni 3 qismga bo'lib taqdim etaman. Hozir faqat 1-qismni tahlil qilib, 5 ta asosiy qoidani punktlar shaklida chiqar. Men '2-QISM' deb yozmagunimcha keyingi qadamga o'tma."
  },
  "1_3": {
    "id": "1_3",
    "module": "1-Modul: AI Anatomiyasi & Fikrlash Sherigi",
    "lessonNum": "1.3",
    "title": "1.3. Maxfiylik & Xavfsizlik: Korporativ ma'lumotlarni himoyalash",
    "duration": "15 daqiqa",
    "timeBudget": "📖 Kiberxavfsizlik & Anonimizatsiya: 7 daqiqa · 🧠 Bilim tekshiruvi: 2 daqiqa · ⚡ Maxfiylik Filtri Amaliyoti: 6 daqiqa (JAMI: 15 daqiqa)",
    "storyboard": [
      {
        "tag": "1 / 4-QADAM: KATTA XATAR",
        "avatar": "🚨",
        "name": "Ochiq AI Xatari:",
        "quote": "ChatGPT bepul versiyasiga mijozlaringizning telefon raqamlari, passport ma'lumotlari yoki bank hisob raqamlarini to'g'ridan-to'g'ri kiritish maxfiylik qoidalariga ziddir.",
        "tip": "⚠️ <b>Sabab:</b> Ommaviy bepul akkauntlarda kiritilgan ma'lumotlar keyingi modellarni o'qitish uchun ishlatilishi mumkin."
      },
      {
        "tag": "2 / 4-QADAM: ASOSIY SOZLAMA",
        "avatar": "🛡️",
        "name": "Model O'qitilishini O'chirish:",
        "quote": "ChatGPT va Claude sozlamalaridagi 'Data Controls -> Chat history & training' bandini o'chirib qo'yish shart.",
        "tip": "⚙️ <b>Qoida:</b> Korporativ jamoalar uchun Team/Enterprise rejalari yoki API orqali ulanish ma'lumotlar xavfsizligini ta'minlaydi."
      },
      {
        "tag": "3 / 4-QADAM: ANONIMIZATSIYA",
        "avatar": "🎭",
        "name": "Anonimlashtirish Qoidasi:",
        "quote": "Kompaniya nomini 'Korxona A', mijoz ismini 'Mijoz 1', aniq summalarni esa foizlar ko'rinishida yozing.",
        "tip": "💡 <b>Foydasi:</b> AI matn mantig'ini va formulasini 100% to'g'ri yechadi, lekin maxfiy ma'lumot tashqariga chiqmaydi."
      },
      {
        "tag": "4 / 4-QADAM: XAVFSIZ TIZIM",
        "avatar": "✅",
        "name": "Korxona Standarti:",
        "quote": "Har bir xodim AI vositalaridan foydalanishdan oldin ma'lumotlarni tozalash filtridan o'tkazishni odat qilishi kerak.",
        "tip": "🏆 <b>Natija:</b> Biznes sirlari to'liq himoyalangan holda mahsuldorlik 10 barobar oshadi."
      }
    ],
    "deepDive": "<div class=\"deep-dive-article\">\n  <div class=\"case-callout\">\n    <h4 style=\"color:var(--teal-light); margin-top:0;\">🔒 1-Qism: Ommaviy AI ga Nimalarni Kiritish Mumkin Emas?</h4>\n    <p>\n      Sun'iy intellektdan professional foydalanishning birinchi qoidasi — <b>kiberxavfsizlik va ma'lumotlar maxfiyligi</b>. Quyidagi ma'lumotlarni hech qachon ochiq chatlarga kiritmang:\n    </p>\n    <ul style=\"padding-left:20px; font-size:13.5px; color:var(--text-secondary); line-height:1.7;\">\n      <li>Mijozlarning shaxsiy ma'lumotlari (JShShIR, pasport seriyasi, telefon raqamlari).</li>\n      <li>Bank rekvizitlari, 1C login va parollari, API kalitlar.</li>\n      <li>Korxonaning oshkor etilmaydigan shartnoma narxlari va marginallik ko'rsatkichlari.</li>\n    </ul>\n  </div>\n\n  <h4 style=\"color:var(--text); margin-top:20px;\">🛡️ 2-Qism: Anonimizatsiya Texnikasi (Placeholder usuli)</h4>\n  <p>\n    Agar sizga aniq shartnoma yoki moliyaviy hisobotni tahlil qilish kerak bo'lsa, uni quyidagicha almashtiring:\n  </p>\n  <div class=\"matrix-grid\">\n    <div class=\"matrix-col\" style=\"background:#FEF2F2; border-color:#FECACA;\">\n      <b style=\"color:#DC2626;\">❌ Xavfli Original:</b>\n      <p style=\"font-size:12.5px; color:#7F1D1D; margin:4px 0 0 0;\">\n        \"Toshkent Citydagi Akfa korxonasi bilan 450 mln so'mlik 12-raqamli shartnomani tahlil qil...\"\n      </p>\n    </div>\n    <div class=\"matrix-col\" style=\"background:#ECFDF5; border-color:#A7F3D0;\">\n      <b style=\"color:var(--brand-emerald);\">✅ Xavfsiz Anonim Matn:</b>\n      <p style=\"font-size:12.5px; color:#065F46; margin:4px 0 0 0;\">\n        \"Biznes hamkori [Kompaniya X] bilan tuzilgan [Summa Y] miqdoridagi B2B shartnomani tahlil qil...\"\n      </p>\n    </div>\n  </div>\n\n  <div class=\"case-callout\" style=\"border-left-color:var(--lime); margin-top:20px;\">\n    <h4 style=\"color:var(--brand-emerald); margin-top:0;\">🏢 3-Qism: Samsung Muhandislari Misoli</h4>\n    <p>\n      2023-yilda Samsung yarimo'tkazgichlar bo'limi muhandislari ishlab chiqarishdagi xatoni tezroq topish uchun sirli yarimo'tkazgich kodini ChatGPT ga tashlashdi. Natijada korporativ kod OpenAI serverlariga tushib qoldi va kompaniya xodimlarga ochiq chatlardan foydalanishni cheklashga majbur bo'ldi.\n    </p>\n    <p>\n      <b>Xulosa:</b> GPTify tizimida biz har doim Enterprise/Team sozlamalarini faollashtirishni yoki lokal/anonimlashtirilgan promptlardan foydalanishni o'rgatamiz.\n    </p>\n  </div>\n</div>",
    "quiz": {
      "question": "Kompaniyangizning ichki maxfiy hisobotini sun'iy intellekt orqali tahlil qilishdan oldin nima qilish shart?",
      "options": [
        "A) Hujjatni o'zgarishsiz to'g'ridan-to'g'ri bepul ChatGPT ga yuklash.",
        "B) Shaxsiy ma'lumotlar, parollar va aniq kompaniya nomlarini shartli belgilarga ([Kompaniya A], [Summa X]) almashtirish (Anonimizatsiya).",
        "C) Savolni faqat kechasi so'rash."
      ],
      "correctIndex": 1,
      "explanation": "To'g'ri! Anonimizatsiya sizning korporativ sirlaringiz va mijozlaringiz maxfiyligini 100% himoya qiladi."
    },
    "notes": [
      "<b>Maxfiylik nazorati:</b> Sozlamalarda 'Improve the model for everyone' bandini o'chirib qo'ying.",
      "<b>Anonimizatsiya:</b> Ismlar, raqamlar va parollarni umumiy shartli belgilarga almashtiring.",
      "<b>B2B Standarti:</b> Ish jarayonida faqat tasdiqlangan va tozalangan ma'lumotlar bilan ishlang."
    ],
    "downloadablePrompt": "Sen kiberxavfsizlik va ma'lumotlar himoyasi bo'yicha maslahatchisan.\nQuyida senga matn beriladi.\nVAZIFA: Ushbu matndagi barcha shaxsiy ma'lumotlarni (telefon raqamlar, ismlar, aniq manzillar, bank hisob raqamlari) aniqla va ularni [ISMI], [TELEFON], [MANZIL] kabi umumiy teglarga almashtirib, tozalangan anonim matnni qaytar.",
    "homeworkTitle": "Topshiriq: Matndan maxfiy ma'lumotlarni tozalovchi anonimizatsiya promptini tuzing",
    "homeworkDefault": "Sen korporativ ma'lumotlar xavfsizligi bo'yicha mutaxassisisan. Quyidagi shartnoma parchasidagi barcha shaxsiy va maxfiy ma'lumotlarni (kompaniya nomi, bank raqami, summa, shaxs ismi) [KOMPANIYA], [BANK_REKVIZIT], [SUMMA] ko'rinishiga keltirib, xavfsiz nusxasini tayyorlab ber."
  },
  "2_1": {
    "id": "2_1",
    "module": "2-Modul: Oltin Formula: Professional Prompt Muhandisligi",
    "lessonNum": "2.1",
    "title": "2.1. GPTify Oltin Formulasi: ROL + KONTEKST + VAZIFA + FORMAT",
    "duration": "15 daqiqa",
    "timeBudget": "📖 4 Bosqichli Oltin Formula: 7 daqiqa · 🧠 Bilim tekshiruvi: 2 daqiqa · ⚡ Prompt Arxitekturasi Amaliyoti: 6 daqiqa (JAMI: 15 daqiqa)",
    "storyboard": [
      {
        "tag": "1 / 4-QADAM: ODDIY VS PROFESSIONAL",
        "avatar": "⚖️",
        "name": "Nega Prompting Muhim?",
        "quote": "'Biznes uchun post yoz' deb so'rasangiz, AI umumiy va zerikarli javob beradi. Professional natija faqat aniq formula orqali olinadi.",
        "tip": "💡 <b>Asos:</b> Modelga qancha ko'p cheklov va kontekst bersangiz, natija shuncha aniq bo'ladi."
      },
      {
        "tag": "2 / 4-QADAM: 4 TA ELEMENT",
        "avatar": "🧱",
        "name": "Oltin Formula Bloklari:",
        "quote": "1) ROL: AI kim sifatida javob beradi?\n2) KONTEKST: Vaziyat va auditoriya kim?\n3) VAZIFA: Aniq nima kerak?\n4) FORMAT: Javob qanday ko'rinishda bo'lsin?",
        "tip": "📐 <b>Formula:</b> ROL + KONTEKST + VAZIFA + FORMAT = 100% kutilgan natija."
      },
      {
        "tag": "3 / 4-QADAM: AMALIY MISOL",
        "avatar": "📝",
        "name": "Haqiqiy So'rov Misoli:",
        "quote": "'Sen tajribali B2B kopiraytersan. Biznes egalari uchun buxgalteriya xizmatini taklif qilamiz. Instagram uchun 1 ta qisqa post yoz. Ohang: sodda va do'stona. Oxirida CTA qo'sh.'",
        "tip": "🎯 <b>Farq:</b> Oddiy so'rovga nisbatan 10 barobar kuchliroq va sotuvchan matn chiqadi."
      },
      {
        "tag": "4 / 4-QADAM: SIFAT NAZORATI",
        "avatar": "🚀",
        "name": "Iterativ Yaxshilash:",
        "quote": "Birinchi javobdan so'ng to'xtab qolmang: '2-xatboshini qisqartir va ko'proq raqamlar qo'sh' deb tuzating.",
        "tip": "🏆 <b>Qoida:</b> Prompting — bu buyruq berish emas, sun'iy intellekt bilan dialog olib borishdir."
      }
    ],
    "deepDive": "<div class=\"deep-dive-article\">\n  <div class=\"case-callout\">\n    <h4 style=\"color:var(--teal-light); margin-top:0;\">📐 1-Qism: GPTify 4 Bosqichli Oltin Formulaning Anatomiyasi</h4>\n    <p>\n      Ko'pchilik odamlar sun'iy intellektdan qoniqarsiz javob olgach: <i>\"AI hali xom ekan, yaxshi yozolmas ekan\"</i> deb xulosa qilishadi. Aslida muammo AI da emas, balki berilgan so'rovning (prompt) noaniqligidadir.\n    </p>\n    <p>\n      GPTify metodologiyasi bo'yicha har qanday professional prompt 4 ta tayanch ustunga ega bo'lishi shart:\n    </p>\n    <div class=\"matrix-grid\">\n      <div class=\"matrix-col\">\n        <b style=\"color:var(--brand-emerald);\">1. ROL (Role)</b>\n        <p style=\"font-size:12.5px; color:var(--text-secondary); margin:0;\">\n          Modelga aniq kasbiy shaxsiyat bering: <i>\"Sen 10 yillik tajribaga ega B2B moliyaviy audit mutaxassisisan...\"</i>\n        </p>\n      </div>\n      <div class=\"matrix-col\">\n        <b style=\"color:var(--lime);\">2. KONTEKST (Context)</b>\n        <p style=\"font-size:12.5px; color:var(--text-secondary); margin:0;\">\n          Vaziyat, kompaniya va maqsadli auditoriyani tushuntiring: <i>\"Biz Toshkentdagi ishlab chiqarish korxonalariga xizmat ko'rsatamiz...\"</i>\n        </p>\n      </div>\n      <div class=\"matrix-col\">\n        <b style=\"color:var(--tg-blue);\">3. VAZIFA (Task)</b>\n        <p style=\"font-size:12.5px; color:var(--text-secondary); margin:0;\">\n          Bajarilishi kerak bo'lgan aniq ish: <i>\"Mijozlarga yuboriladigan 3 jumlalik tijoriy taklif xati yoz...\"</i>\n        </p>\n      </div>\n      <div class=\"matrix-col\">\n        <b style=\"color:var(--amber);\">4. FORMAT (Format)</b>\n        <p style=\"font-size:12.5px; color:var(--text-secondary); margin:0;\">\n          Natijaning tashqi ko'rinishi va cheklovlar: <i>\"Jadval ko'rinishida, emoji ishlatmasdan, 120 so'zdan oshmasin...\"</i>\n        </p>\n      </div>\n    </div>\n  </div>\n\n  <h4 style=\"color:var(--text); margin-top:20px;\">⚡ 2-Qism: Taqqoslash: Oddiy vs Oltin Formula So'rovi</h4>\n  <div class=\"matrix-grid\">\n    <div class=\"matrix-col\" style=\"background:#FEF2F2; border-color:#FECACA;\">\n      <b style=\"color:#DC2626;\">❌ 95% Odamlar Yozadigan So'rov:</b>\n      <p style=\"font-size:13px; color:#7F1D1D; margin:4px 0 0 0;\">\n        \"Biznes uchun post yozib ber.\"\n      </p>\n      <p style=\"font-size:11.5px; color:#991B1B; margin-top:6px;\">\n        <i>Natija: Suv matn, quruq shiorlar, biznesga foydasiz umumiy gaplar.</i>\n      </p>\n    </div>\n    <div class=\"matrix-col\" style=\"background:#ECFDF5; border-color:#A7F3D0;\">\n      <b style=\"color:var(--brand-emerald);\">✅ GPTify Oltin Formula So'rovi:</b>\n      <p style=\"font-size:13px; color:#065F46; margin:4px 0 0 0;\">\n        \"[ROL]: Sen B2B marketing strategisan.<br>[KONTEKST]: Biz O'zbekistondagi logistika kompaniyalariga CRM o'rnatamiz.<br>[VAZIFA]: Telegram kanal uchun yuk mashinalari to'xtab qolish xarajati haqida post yoz.<br>[FORMAT]: Qiziqarli ilgak, 3 ta raqamli fakt, qisqa xulosa va oxirida maslahatga chaqiruvchi CTA.\"\n      </p>\n      <p style=\"font-size:11.5px; color:#047857; margin-top:6px;\">\n        <i>Natija: Aniq, maqsadli, mijozni o'ylantiradigan va sotuv keltiradigan matn!</i>\n      </p>\n    </div>\n  </div>\n</div>",
    "quiz": {
      "question": "Oltin formulada 'FORMAT' qismining asosiy vazifasi nima?",
      "options": [
        "A) Modelga o'z xohishiga ko'ra she'r yozishga ruxsat berish.",
        "B) Javobning ko'rinishi, hajmi, ohangi va strukturasi bo'yicha aniq cheklovlar (masalan: jadval, punktlar, so'zlar soni) qo'yish.",
        "C) AI ga qancha token sarflashini ko'rsatish."
      ],
      "correctIndex": 1,
      "explanation": "To'ppa-to'g'ri! 'FORMAT' komponenti sun'iy intellektga javob qanday ko'rinishda (jadval, bullet points, qisqa xat, ohang) bo'lishi kerakligini aniq belgilab beradi."
    },
    "notes": [
      "<b>ROL:</b> Modelning fikrlash doirasi va kasbiy leksikasini belgilaydi.",
      "<b>KONTEKST:</b> Natijani sizning aniq bozoringiz va auditoriyangizga moslashtiradi.",
      "<b>VAZIFA:</b> Keraksiz umumiy gaplardan qochib, to'g'ridan-to'g'ri nishonga urishni ta'minlaydi.",
      "<b>FORMAT:</b> Qabul qilinadigan javobni darhol amaliyotda ishlatishga tayyor holga keltiradi."
    ],
    "downloadablePrompt": "ROL: Sen B2B sohasida faoliyat yurituvchi yetakchi kopiraytersan.\nKONTEKST: Kompaniyamiz kichik va o'rta bizneslar uchun soliq hisobotlarini avtomatlashtirish xizmatini taklif etadi.\nVAZIFA: Telegram kanalimiz uchun buxgalterlarning oylik hisobot davridagi stressini kamaytirishga bag'ishlangan 1 ta post tayyorla.\nFORMAT:\n- Qiziqarli savol bilan boshlansin.\n- 3 ta aniq amaliy tavsiya berilsin.\n- Maksimal 150 ta so'zdan oshmasin.\n- Ohang: samimiy, dalillarga asoslangan.\n- Oxirida bepul auditga yozilish havolasi (CTA) bo'lsin.",
    "homeworkTitle": "Topshiriq: O'z sohangiz uchun 4 elementli Oltin Formula asosida prompt tuzing",
    "homeworkDefault": "ROL: Sen [o'z sohangiz] bo'yicha tajribali mutaxassisisan.\nKONTEKST: [Sizning kompaniyangiz yoki loyihangiz haqida 2 jumla].\nVAZIFA: [Bajarilishi kerak bo'lgan aniq vazifa].\nFORMAT: [Javob qanday ko'rinishda bo'lsin: jadval, punktlar, so'z cheklovi]."
  },
  "2_2": {
    "id": "2_2",
    "module": "2-Modul: Oltin Formula: Professional Prompt Muhandisligi",
    "lessonNum": "2.2",
    "title": "2.2. Few-Shot va Chain-of-Thought texnikasi (Qadam-baqadam yechim)",
    "duration": "15 daqiqa",
    "timeBudget": "📖 Namuna Berish & Qadamli Fikrlash: 7 daqiqa · 🧠 Bilim tekshiruvi: 2 daqiqa · ⚡ CoT Amaliyoti: 6 daqiqa (JAMI: 15 daqiqa)",
    "storyboard": [
      {
        "tag": "1 / 4-QADAM: FEW-SHOT SIRI",
        "avatar": "💡",
        "name": "Ko'rsatib O'rgatish:",
        "quote": "Modelga 10 qator tushuntirgandan ko'ra, 1-2 ta tayyor to'g'ri misol (Few-Shot) ko'rsatish natija sifatini 3 barobar oshiradi.",
        "tip": "🎯 <b>Qoida:</b> Kiruvchi matn -> Kutilayotgan natija ko'rinishida namuna bering."
      },
      {
        "tag": "2 / 4-QADAM: CHAIN-OF-THOUGHT",
        "avatar": "🔗",
        "name": "Qadam-baqadam Fikrlash:",
        "quote": "'Darhol yakuniy javobni aytma, avval har bir bosqichni qadam-baqadam tahlil qil' buyrug'i matematik va mantiqiy xatolarni 80% ga kamaytiradi.",
        "tip": "🧠 <b>Ilmiy fakt:</b> Model o'z o'ylash jarayonini yozganda to'g'ri xulosaga kelish ehtimoli keskin ortadi."
      },
      {
        "tag": "3 / 4-QADAM: AMALIYOT",
        "avatar": "⚙️",
        "name": "Mijoz E'tirozini Yechish:",
        "quote": "Mijoz 'Narxingiz qimmat' deganida model darhol chegirma taklif qilmasdan, avval qiymatni, keyin muddatni, so'ngra alternativani ko'rib chiqadi.",
        "tip": "🏆 <b>Yutuq:</b> Savdoda emotsional xatolarning oldi olinadi."
      },
      {
        "tag": "4 / 4-QADAM: INTEGRATSIYA",
        "avatar": "🚀",
        "name": "Formula Bilan Birlashtirish:",
        "quote": "Oltin Formula (RTC) + Few-Shot + Chain-of-Thought = Professional AI tizimining asosi.",
        "tip": "💎 <b>Natija:</b> Har qanday murakkab biznes jarayonini avtomatlashtirish mumkin bo'ladi."
      }
    ],
    "deepDive": "<div class=\"deep-dive-article\">\n  <div class=\"case-callout\">\n    <h4 style=\"color:var(--teal-light); margin-top:0;\">🎯 1-Qism: Few-Shot Prompting Nima?</h4>\n    <p>\n      Agar siz bolaga rasm chizishni o'rgatsangiz, so'z bilan tushuntirishdan ko'ra oldiga 2 ta chizilgan namunani qo'ysangiz u tezroq tushunadi. Sun'iy intellekt ham xuddi shunday!\n    </p>\n    <p>\n      <b>Zero-Shot:</b> Modelga hech qanday namunasiz to'g'ridan-to'g'ri topshiriq berish.<br>\n      <b>Few-Shot:</b> Modelga 1 yoki 2 ta <i>[Kiruvchi ma'lumot -> Chiqishi kerak bo'lgan ideal javob]</i> namunasini berib, keyin yangi vazifani bajarishni buyurish.\n    </p>\n  </div>\n\n  <h4 style=\"color:var(--text); margin-top:20px;\">🔗 2-Qism: Chain-of-Thought (Fikrlash Zanjiri) Qoidasi</h4>\n  <p>\n    Murakkab masalalarda sun'iy intellekt ko'pincha shoshib xato xulosa chiqaradi. Agar promptga <b>\"Qadam-baqadam o'yla (Let's think step by step)\"</b> buyrug'ini qo'shsangiz, model har bir mantiqiy bosqichni navbatma-navbat hisoblab chiqadi.\n  </p>\n\n  <div class=\"matrix-grid\">\n    <div class=\"matrix-col\" style=\"background:#ECFDF5; border-color:#A7F3D0;\">\n      <b style=\"color:var(--brand-emerald);\">Few-Shot + CoT Amaliy Shabloni:</b>\n      <p style=\"font-size:12.5px; color:#065F46; line-height:1.6; margin-top:6px;\">\n        <b>1-namuna:</b><br>\n        Mijoz so'rovi: \"Yetkazib berish qancha vaqt oladi?\"<br>\n        Fikrlash: 1) Manzilni aniqlash kerak. 2) Standart muddat 24 soat.<br>\n        Javob: \"Assalomu alaykum! Toshkent shahri bo'ylab 24 soat ichida yetkazamiz. Viloyatlarga esa 48 soat. Qaysi manzilga buyurtma qilmoqchisiz?\"<br><br>\n        <b>Yangi topshiriq:</b><br>\n        Mijoz so'rovi: \"Mahsulotni qaytarib bersam bo'ladimi?\"<br>\n        Fikrlash va javobni yuqoridagi uslubda tayyorla.\n      </p>\n    </div>\n  </div>\n</div>",
    "quiz": {
      "question": "Nega murakkab mantiqiy yoki hisob-kitobli savollarda 'Chain-of-Thought' (qadam-baqadam fikrlash) usulini ishlatish kerak?",
      "options": [
        "A) Chunki model qadam-baqadam fikrlaganda har bir oraliq natijani hisoblab, yakuniy xatolikni 80% gacha kamaytiradi.",
        "B) Faqat matnni sun'iy ravishda uzaytirish uchun.",
        "C) Bu usul faqat ingliz tilidagi matnlarda ishlaydi."
      ],
      "correctIndex": 0,
      "explanation": "To'g'ri! 'Chain-of-Thought' texnikasi modelni har bir mantiqiy qadamni alohida tahlil qilishga majburlaydi va qo'pol xatolarning oldini oladi."
    },
    "notes": [
      "<b>Few-Shot:</b> 1-2 ta ideal javob namunasi 10 sahifalik qoidadan ko'ra samaraliroq.",
      "<b>Chain-of-Thought:</b> Murakkab vazifalarda 'qadam-baqadam yech' buyrug'i aniqlikni oshiradi.",
      "<b>Kombinatsiya:</b> Formula + Namunalar = Barqaror yuqori sifat."
    ],
    "downloadablePrompt": "Sen murakkab biznes vazifalarini yechuvchi mantiqiy tahlilchisan.\nVAZIFA: Quyidagi muammoni yechishda darhol xulosa chiqarma.\nAvval quyidagi fikrlash zanjiriga amal qil:\n1-QADAM: Mavjud barcha fakt va raqamlarni ajratib ko'rsat.\n2-QADAM: Asosiy xavf va to'siqlarni aniqla.\n3-QADAM: 3 ta mumkin bo'lgan yechim variantini sanab o't.\n4-QADAM: Eng optimal 1 ta variantni tanla va sababini asoslab ber.",
    "homeworkTitle": "Topshiriq: Chain-of-Thought (qadam-baqadam) usulida ishlovchi prompt yozing",
    "homeworkDefault": "Sen tajribali biznes konsultantsan. Kompaniyamiz yangi xizmat turini yo'lga qo'ymoqda. Ushbu xizmat bo'yicha narx belgilash uchun quyidagi qadamlar bo'yicha ketma-ket tahlil olib bor: 1-qadam: Tannarx va doimiy xarajatlar tahlili. 2-qadam: Bozordagi raqobatchilar narxlari solishtirmasi. 3-qadam: Tavsiya etiladigan optimal narx va uning asosi."
  },
  "2_3": {
    "id": "2_3",
    "module": "2-Modul: Oltin Formula: Professional Prompt Muhandisligi",
    "lessonNum": "2.3",
    "title": "2.3. Meta-Prompting: AI orqali mukammal prompt yozdirish",
    "duration": "15 daqiqa",
    "timeBudget": "📖 Meta-Prompting & AI Muhandis: 7 daqiqa · 🧠 Bilim tekshiruvi: 2 daqiqa · ⚡ Prompt Generator Amaliyoti: 6 daqiqa (JAMI: 15 daqiqa)",
    "storyboard": [
      {
        "tag": "1 / 4-QADAM: KATTA MUAMMO",
        "avatar": "🤔",
        "name": "Boshlovchilar Qiyinchiligi:",
        "quote": "Ko'pincha odamlar o'z vazifalari uchun qanday qilib mukammal prompt tuzishni bilmay, boshi qotadi.",
        "tip": "💡 <b>Yechim:</b> Promptni o'zingiz noldan yozishingiz shart emas — buni modelning o'ziga topshiring!"
      },
      {
        "tag": "2 / 4-QADAM: META-PROMPTING",
        "avatar": "🪄",
        "name": "Meta-Prompt Nima?",
        "quote": "Meta-prompt — bu sun'iy intellektni 'Dunyoning eng kuchli Prompt Muhandisi'ga aylantiruvchi maxsus tizimli buyruqdir.",
        "tip": "📐 <b>Mantiq:</b> Model sizdan 3 ta savol so'raydi va siz uchun mukammal prompt yaratib beradi."
      },
      {
        "tag": "3 / 4-QADAM: ITERATSIYA",
        "avatar": "🔄",
        "name": "Savol-Javob Jarayoni:",
        "quote": "'Mening maqsadim [X]. Menga eng yaxshi natija beruvchi prompt yozish uchun mendan qanday ma'lumotlar kerakligini so'ra.'",
        "tip": "🎯 <b>Natija:</b> Model o'zi sizga yo'naltiruvchi savollar berib, xom g'oyangizni professional tizimga aylantiradi."
      },
      {
        "tag": "4 / 4-QADAM: TAYYOR SHABLON",
        "avatar": "📦",
        "name": "Shaxsiy Kutubxona:",
        "quote": "Yaratilgan mukammal promptlarni alohida hujjatga saqlab boring va har kuni ishlatishda vaqtingizni tejang.",
        "tip": "🏆 <b>Foyda:</b> 1 marta yaratilgan sifatli prompt yillab xizmat qiladi."
      }
    ],
    "deepDive": "<div class=\"deep-dive-article\">\n  <div class=\"case-callout\">\n    <h4 style=\"color:var(--teal-light); margin-top:0;\">🪄 1-Qism: Meta-Prompting — Eng Katta Hosildorlik Sirlaridan Biri</h4>\n    <p>\n      Dasturchilar va AI mutaxassislari doim ham promptlarni o'zlari qo'lda yozib o'tirishmaydi. Ular <b>Meta-Prompting</b> texnikasidan foydalanadilar.\n    </p>\n    <p>\n      Meta-prompting mohiyati shuki: siz modelga to'g'ridan-to'g'ri vazifa bermaysiz, balki modelga <i>\"Professional Prompt Muhandisi\"</i> rolini berasiz va undan sizning xom fikringiz asosida mukammal Oltin Formula promptini yozib berishni so'raysiz.\n    </p>\n  </div>\n\n  <h4 style=\"color:var(--text); margin-top:20px;\">⚡ 2-Qism: Universall Meta-Prompt Shabloni</h4>\n  <div class=\"notes-box\">\n    <p style=\"font-size:13px; font-family:'JetBrains Mono', monospace; line-height:1.6; color:var(--text); margin:0;\">\n      \"Sen dunyoning eng mohir Prompt Muhandisisan.<br>\n      Mening maqsadim: [O'z maqsadingizni 1 jumla bilan yozing, masalan: mijozlarga sotuvchi taklif xati yozish].<br><br>\n      VAZIFA:<br>\n      1. Menga eng kuchli natija beruvchi Oltin Formula (ROL + KONTEKST + VAZIFA + FORMAT) promptini tuzib berish uchun mendan 3 ta eng muhim aniqlashtiruvchi savol so'ra.<br>\n      2. Men javob berganimdan so'ng, nusxalab ishlatishga tayyor bo'lgan professional promptni taqdim et.\"\n    </p>\n  </div>\n</div>",
    "quiz": {
      "question": "Meta-prompting texnikasining asosiy maqsadi nima?",
      "options": [
        "A) Sun'iy intellektning o'zini prompt muhandisi sifatida ishlatib, o'zimiz uchun eng mukammal promptni yozdirish.",
        "B) Model xotirasidagi barcha ma'lumotlarni o'chirib tashlash.",
        "C) Ovozli xabarlarni matnga aylantirish."
      ],
      "correctIndex": 0,
      "explanation": "To'g'ri! Meta-prompting orqali sun'iy intellekt sizning xom g'oyangizni tahlil qilib, uning o'zi uchun eng tushunarli bo'lgan professional promptni yaratib beradi."
    },
    "notes": [
      "<b>Meta-Prompt:</b> Prompt yozuvchi prompt.",
      "<b>Yo'naltiruvchi savollar:</b> Model nima yetishmayotganini o'zi so'rab oladi.",
      "<b>Vaqt tejalishi:</b> Xato qilish va qayta-qayta urinish xarajatlarini yo'qotadi."
    ],
    "downloadablePrompt": "Sen professional Prompt Muhandisisan.\nMen senga o'z biznes vazifamni qisqacha aytaman.\nSen menga darhol javob yozma.\nAvval ushbu vazifa uchun mukammal prompt yaratishda kerak bo'ladigan 3 ta aniq savol ber (auditoriya, ohang va format bo'yicha).\nMen javob berganimdan keyin tayyor promptni chiqarib ber.",
    "homeworkTitle": "Topshiriq: Meta-prompt yordamida o'z ishingiz uchun 1 ta professional prompt yarating",
    "homeworkDefault": "Sen dunyoning eng mohir Prompt Muhandisisan. Mening maqsadim: [o'z sohangizdagi 1 ta vazifa]. Menga eng kuchli natija beruvchi promptni tuzish uchun mendan 3 ta eng muhim savolni so'ra."
  },
  "3_1": {
    "id": "3_1",
    "module": "3-Modul: Har Bir Vazifa Uchun To'g'ri Vosita",
    "lessonNum": "3.1",
    "title": "3.1. Matn va Qidiruv Vositalari: ChatGPT vs Claude vs Perplexity",
    "duration": "15 daqiqa",
    "timeBudget": "📖 Vositalar Ekotizimi: 7 daqiqa · 🧠 Bilim tekshiruvi: 2 daqiqa · ⚡ Qidiruv Amaliyoti: 6 daqiqa (JAMI: 15 daqiqa)",
    "storyboard": [
      {
        "tag": "1 / 4-QADAM: HAR BIR VAZIFA UCHUN ASBOB",
        "avatar": "🧰",
        "name": "Bitta Vosita Bilan Cheklanmang:",
        "quote": "'Hamma narsani faqat bitta ChatGPT da qilaman' deyish — bitta bolg'a bilan butun uyni qurishga urinishdek gap.",
        "tip": "💡 <b>Qoida:</b> Har bir AI asbobining o'z kuchli va zaif tomoni bor."
      },
      {
        "tag": "2 / 4-QADAM: CHATGPT VS CLAUDE",
        "avatar": "⚔️",
        "name": "Asosiy Maydon:",
        "quote": "ChatGPT: Kundalik tezkor g'oyalar, tarjima va ovozli muloqot.\nClaude: Murakkab shartnomalar, Excel tahlili va aniq hujjatlar.",
        "tip": "⚖️ <b>B2B Standarti:</b> Ish xatlari va hisobotlarda Claude tili ancha tabiiy va rasmiy chiqadi."
      },
      {
        "tag": "3 / 4-QADAM: PERPLEXITY SIRI",
        "avatar": "🔍",
        "name": "Jonli Qidiruv (Perplexity):",
        "quote": "Perplexity — an'anaviy qidiruv tizimi (Google) va LLM ning gibridi. U har bir javobni aniq manbalar va havolalar (citations) bilan taqdim etadi.",
        "tip": "🌐 <b>Afzalligi:</b> Bozor yangiliklari, qonunchilik va narxlar tahlilida almashtirib bo'lmaydi."
      },
      {
        "tag": "4 / 4-QADAM: AMALIY XULOSA",
        "avatar": "🎯",
        "name": "Samarali Trio:",
        "quote": "Ma'lumot qidirish -> Perplexity. Tahlil va tuzish -> Claude. Tezkor ijod va ovoz -> ChatGPT.",
        "tip": "🏆 <b>Natija:</b> Ishingiz sifati va tezligi bir necha barobar oshadi."
      }
    ],
    "deepDive": "<div class=\"deep-dive-article\">\n  <div class=\"case-callout\">\n    <h4 style=\"color:var(--teal-light); margin-top:0;\">🧰 1-Qism: 2026-Yilda Zamonaviy AI Ekotizimi</h4>\n    <p>\n      Sun'iy intellektda bitta \"sehrli tugma\" yo'q. Professional xodim har bir vazifa uchun eng to'g'ri asbobni tanlay bilishi kerak.\n    </p>\n    <div class=\"matrix-grid\">\n      <div class=\"matrix-col\">\n        <b style=\"color:var(--brand-emerald);\">Claude 3.5 Sonnet</b>\n        <p style=\"font-size:12.5px; color:var(--text-secondary); margin:4px 0 0 0;\">\n          <b>Vazifasi:</b> Hujjatlar, analitika, shartnomalar va dasturlash. Tili o'ta silliq va rasmiy.\n        </p>\n      </div>\n      <div class=\"matrix-col\">\n        <b style=\"color:var(--lime);\">ChatGPT (OpenAI)</b>\n        <p style=\"font-size:12.5px; color:var(--text-secondary); margin:4px 0 0 0;\">\n          <b>Vazifasi:</b> Multimodal vazifalar (Advanced Voice Mode, rasm chizish, DALL-E) va umumiy savollar.\n        </p>\n      </div>\n      <div class=\"matrix-col\">\n        <b style=\"color:var(--tg-blue);\">Perplexity AI</b>\n        <p style=\"font-size:12.5px; color:var(--text-secondary); margin:4px 0 0 0;\">\n          <b>Vazifasi:</b> Manbalar bilan faktik qidiruv. Yangi qonunlar, bozor tahlili va real vaqtdagi narxlar.\n        </p>\n      </div>\n    </div>\n  </div>\n\n  <h4 style=\"color:var(--text); margin-top:20px;\">🔍 2-Qism: Qachon Perplexity dan Foydalanish Kerak?</h4>\n  <p>\n    Oddiy ChatGPT ga: <i>\"O'zbekistonda 2026-yilda eng ko'p sotilgan elektromobillar qaysilar?\"</i> deb so'rasangiz, u eski xotirasidan taxmin qilishi mumkin.\n  </p>\n  <p>\n    <b>Perplexity</b> esa real vaqtda butun internetni ko'rib chiqadi, rasmiy OAV va statistika agentliklari sahifalaridan faktlarni to'playdi va har bir raqamning tagiga [1], [2] ko'rinishida rasmiy manba havolasini qo'yib beradi.\n  </p>\n</div>",
    "quiz": {
      "question": "Eng so'nggi bozor yangiliklari va faktlarni rasmiy manba havolalari (citations) bilan tekshirish uchun qaysi vosita eng mos keladi?",
      "options": [
        "A) Perplexity AI.",
        "B) Oddiy oflayn kalkulyator.",
        "C) Faqat rasm chizuvchi Midjourney."
      ],
      "correctIndex": 0,
      "explanation": "To'g'ri! Perplexity AI internetdagi eng so'nggi ma'lumotlarni qidirib, har bir jumlasiga ishonchli manba havolasini qo'shib beradi."
    },
    "notes": [
      "<b>Claude:</b> Chuqur tahlil, B2B hujjatlar va jadvallar ustasi.",
      "<b>ChatGPT:</b> Ovozli muloqot, tezkor g'oyalar va multimodal vazifalar.",
      "<b>Perplexity:</b> Jonli internet qidiruvi va manbali faktlar tekshiruvi."
    ],
    "downloadablePrompt": "Sen professional bozor tahlilchisisan.\nPerplexity vositasidan foydalangan holda quyidagi mavzuni o'rgan:\nMAVZU: [O'zingiz qiziqqan bozor yoki texnologiya yo'nalishi].\nTALABLAR:\n1. So'nggi 6 oylik eng muhim 3 ta voqea yoki yangilikni ko'rsat.\n2. Har bir ma'lumot yoniga rasmiy manba havolasini keltir.\n3. Biznes egalari uchun 1 ta amaliy xulosa ber.",
    "homeworkTitle": "Topshiriq: Perplexity orqali o'z sohangizdagi so'nggi tendensiyalarni manbalar bilan tahlil qiling",
    "homeworkDefault": "Perplexity yordamida O'zbekistonda [o'z sohangiz] bo'yicha 2026-yilgi asosiy tendensiyalarni o'rganing va 3 ta asosiy faktni manbalari bilan yozib bering."
  },
  "3_2": {
    "id": "3_2",
    "module": "3-Modul: Har Bir Vazifa Uchun To'g'ri Vosita",
    "lessonNum": "3.2",
    "title": "3.2. Taqdimot va Vizual Dizayn: Gamma App va Canva",
    "duration": "15 daqiqa",
    "timeBudget": "📖 Avtomatik Taqdimot Sirlari: 7 daqiqa · 🧠 Bilim tekshiruvi: 2 daqiqa · ⚡ Slayd Generatsiyasi Amaliyoti: 6 daqiqa (JAMI: 15 daqiqa)",
    "storyboard": [
      {
        "tag": "1 / 4-QADAM: ESKI USUL XARAJATI",
        "avatar": "⏳",
        "name": "Vaqt Isrofi:",
        "quote": "PowerPoint dasturida 15 slaydlik chiroyli taqdimot tayyorlash odatda 4-6 soat asab va vaqt talab qiladi.",
        "tip": "⚠️ <b>Muammo:</b> Matn yozish, rasm qidirish, shriftlarni to'g'rilash juda ko'p energiyani oladi."
      },
      {
        "tag": "2 / 4-QADAM: GAMMA YECHIMI",
        "avatar": "⚡",
        "name": "Gamma App Imkoniyati:",
        "quote": "Bitta mavzu yoki matn asosida 30 soniyada professional dizaynli, rasmli va strukturali taqdimot yaratib beradi.",
        "tip": "🔗 <b>Havola:</b> <a href='https://try.gamma.app/phx9znt88tpu' target='_blank' style='color:var(--brand-emerald); font-weight:800;'>Gamma App Rasmiy Sayti</a> orqali boshlashingiz mumkin."
      },
      {
        "tag": "3 / 4-QADAM: CANVA INTEGRATSIYASI",
        "avatar": "🎨",
        "name": "Canva Magic Studio:",
        "quote": "Sotsial tarmoqlar bannerlari, sertifikatlar va vizual postlar uchun Canva ning 'Magic Design' vositasi juda qo'l keladi.",
        "tip": "📱 <b>Qulaylik:</b> Tayyor andozalarni o'z tilingizga moslash oson."
      },
      {
        "tag": "4 / 4-QADAM: TAYYOR NATIJA",
        "avatar": "💼",
        "name": "Mijozga Taqdimot:",
        "quote": "Ertangi uchrashuv uchun taqdimotni kechasi soatlab chizib o'tirmaysiz — AI bilan 15 daqiqada tayyor bo'lasiz.",
        "tip": "🏆 <b>Samara:</b> Vaqtingizni dizaynga emas, balki savdo va taklif mantig'iga sarflaysiz."
      }
    ],
    "deepDive": "<div class=\"deep-dive-article\">\n  <div class=\"case-callout\">\n    <h4 style=\"color:var(--teal-light); margin-top:0;\">⚡ 1-Qism: Gamma App — Taqdimotlar Inqilobi</h4>\n    <p>\n      Taqdimot tayyorlashda eng ko'p vaqt matnni slaydlarga bo'lish va dizayn tanlashga ketadi. <a href=\"https://try.gamma.app/phx9znt88tpu\" target=\"_blank\" style=\"color:var(--brand-emerald); font-weight:800;\">Gamma App</a> ushbu jarayonni butunlay avtomatlashtirdi:\n    </p>\n    <ul style=\"padding-left:20px; font-size:13.5px; color:var(--text-secondary); line-height:1.7;\">\n      <li>Siz shunchaki mavzuni yoki tayyor Word matningizni kiritasiz.</li>\n      <li>Gamma avtomatik tarzda slaydlarning sarlavhalari, kartalari va mantiqiy bloklarini shakllantiradi.</li>\n      <li>Har bir slaydga mos professional rasmlar va vizual piktogrammalar tanlanadi.</li>\n      <li>Natijani istalgan vaqtda PowerPoint (.pptx) yoki PDF formatida yuklab olish mumkin.</li>\n    </ul>\n  </div>\n\n  <h4 style=\"color:var(--text); margin-top:20px;\">🎨 2-Qism: Taqdimot Uchun Ideal Prompt Strukturasi</h4>\n  <p>\n    Gamma App ga kiritish uchun matnni avval Claude yoki ChatGPT da tayyorlab olish eng sifatli natijani beradi:\n  </p>\n  <div class=\"notes-box\">\n    <p style=\"font-size:13px; color:var(--text); margin:0;\">\n      <b>Prompt:</b> \"Men [korxonamiz xizmati] bo'yicha investorlarga taqdimot tayyorlamoqchiman. Gamma App uchun 8 ta slayddan iborat taqdimot rejasi matnini tuzib ber. Har bir slaydda: 1 ta kuchli sarlavha, 3 ta qisqa punkt va 1 ta raqamli dalil bo'lsin.\"\n    </p>\n  </div>\n</div>",
    "quiz": {
      "question": "Bitta mavzu yoki matn asosida 1-2 daqiqada professional dizaynli slaydlar va taqdimotlar generatsiya qilish uchun qaysi vosita eng qulay?",
      "options": [
        "A) Gamma App.",
        "B) Notepad (Bloknot).",
        "C) Faqat audio yozuvchi diktofon."
      ],
      "correctIndex": 0,
      "explanation": "To'g'ri! Gamma App sun'iy intellekt yordamida bir zumda tayyor dizaynli va rasmli taqdimotlar yaratib beradi."
    },
    "notes": [
      "<b>Gamma:</b> Taqdimotlar va veb-sahifalarni matndan generatsiya qilish.",
      "<b>Referral havola:</b> <a href='https://try.gamma.app/phx9znt88tpu' target='_blank'>Gamma App</a> orqali ro'yxatdan o'tish.",
      "<b>Eksport:</b> Istalgan vaqtda PowerPoint va PDF formatida saqlash mumkin."
    ],
    "downloadablePrompt": "Sen professional taqdimot dizayneri va strategisan.\nMAVZU: [Taqdimotingiz mavzusi].\nVAZIFA: Gamma App dasturiga kiritish uchun 7 ta slayddan iborat taqdimot ssenariysini tayyorla.\nHar bir slayd quyidagilardan iborat bo'lsin:\n- Slayd raqami va Aniq Sarlavha\n- Asosiy xabar (1 jumla)\n- 3 ta tayanch punkt (bullet points)\n- Vizual g'oya (qanday rasm yoki diagramma qo'yilsin).",
    "homeworkTitle": "Topshiriq: O'z loyihangiz bo'yicha Gamma App da 5 slayddan iborat taqdimot yarating",
    "homeworkDefault": "Gamma App (yoki uning ssenariy prompti) yordamida o'z faoliyatingiz haqida 5 slaydlik mini-taqdimot yarating va slayd sarlavhalarini shu yerga yozing."
  },
  "3_3": {
    "id": "3_3",
    "module": "3-Modul: Har Bir Vazifa Uchun To'g'ri Vosita",
    "lessonNum": "3.3",
    "title": "3.3. Ovoz va Audio Tahrir: ElevenLabs va Descript",
    "duration": "15 daqiqa",
    "timeBudget": "📖 Audio Klaster & Dublyaj: 7 daqiqa · 🧠 Bilim tekshiruvi: 2 daqiqa · ⚡ Skript Amaliyoti: 6 daqiqa (JAMI: 15 daqiqa)",
    "storyboard": [
      {
        "tag": "1 / 4-QADAM: OVOZLI INQILOБ",
        "avatar": "🎙️",
        "name": "Sun'iy Ovoz Sifati:",
        "quote": "Zamonaviy AI ovozlar endi 'robotdek' quruq gapirmaydi — nafas olish, pauza va hissiyotlar xuddi jonli insonga tenglashgan.",
        "tip": "🔊 <b>Asosiy vosita:</b> ElevenLabs matnni tabiiy professional diktor ovoziga aylantirishda jahon yetakchisi."
      },
      {
        "tag": "2 / 4-QADAM: DESCRIPT BILAN TAHRIR",
        "avatar": "✂️",
        "name": "Matn Kabi Audio Tahrir:",
        "quote": "Descript bilan audio yoki videoni xuddi Word matnini tahrir qilgandek oson montaj qilasiz: keraksiz so'zni o'chirsangiz, ovozdan ham o'chadi!",
        "tip": "🔗 <b>Havola:</b> <a href='https://get.descript.com/turigheoz1eq' target='_blank' style='color:var(--brand-emerald); font-weight:800;'>Descript Rasmiy Sayti</a> orqali montajni o'rganing."
      },
      {
        "tag": "3 / 4-QADAM: BIZNESDA QO'LLANISHI",
        "avatar": "💼",
        "name": "Qayerda Foydali?",
        "quote": "1) Instagram Reels va YouTube roliklariga professional dublyaj.\n2) Kompaniya xodimlari uchun audio darsliklar.\n3) Call-markaz va botlar uchun tabrik ovozlari.",
        "tip": "💰 <b>Tejamkorlik:</b> Professional ovoz yozish studiyasi xarajatlarini 95% ga qisqartiradi."
      },
      {
        "tag": "4 / 4-QADAM: XULOSA",
        "avatar": "🚀",
        "name": "Ekotizim Yakuni:",
        "quote": "Matn (Claude) + Rasm/Slayd (Gamma) + Ovoz (ElevenLabs/Descript) = To'liq mustaqil raqamli media markaz!",
        "tip": "🏆 <b>Natija:</b> Bitta inson butun boshli ijodiy agentlikdek ishlay oladi."
      }
    ],
    "deepDive": "<div class=\"deep-dive-article\">\n  <div class=\"case-callout\">\n    <h4 style=\"color:var(--teal-light); margin-top:0;\">🎙️ 1-Qism: ElevenLabs va Dublyaj San'ati</h4>\n    <p>\n      Ilgari biznes uchun audio rolik yoki reklama yozish uchun diktor yollash, studiya ijaraga olish va montajchiga pul to'lash kerak edi.\n    </p>\n    <p>\n      <b>ElevenLabs</b> yordamida siz istalgan o'zbek, rus yoki ingliz tilidagi matnni 10 soniyada professional diktor ovozida yangratishingiz mumkin. Shuningdek, o'z ovozingizdan 1 daqiqalik namuna berib, o'z shaxsiy raqamli ovozingizni (Voice Cloning) yaratishingiz ham mumkin.\n    </p>\n  </div>\n\n  <h4 style=\"color:var(--text); margin-top:20px;\">✂️ 2-Qism: Descript — Podkast va Video Montajning Yangi Davri</h4>\n  <p>\n    Audio yoki video yozib olganingizda, undagi <i>\"eee\"</i>, <i>\"aaa\"</i> kabi noaniq to'xtalishlar (filler words) ko'p bo'ladi. <a href=\"https://get.descript.com/turigheoz1eq\" target=\"_blank\" style=\"color:var(--brand-emerald); font-weight:800;\">Descript</a> bularni bitta tugma bilan matndan ham, audiodan ham olib tashlaydi.\n  </p>\n</div>",
    "quiz": {
      "question": "Audio va video yozuvlarni murakkab montaj dasturlarisisiz, xuddi oddiy matnni tahrir qilgandek so'zma-so'z tozalash uchun qaysi vosita ishlatiladi?",
      "options": [
        "A) Descript.",
        "B) Faqat kalkulyator.",
        "C) Paint dasturi."
      ],
      "correctIndex": 0,
      "explanation": "To'g'ri! Descript audio/videoni matnga aylantiradi va matndagi keraksiz so'zlarni o'chirish orqali audioni ham avtomatik tahrirlaydi."
    },
    "notes": [
      "<b>ElevenLabs:</b> Tabiiy intonatsiyali sun'iy ovoz va ovoz klonlash.",
      "<b>Descript:</b> Matn tahriri orqali oson audio/video montaj.",
      "<b>Amaliy yutuq:</b> Reklama va ta'limiy roliklarni studiyasiz mustaqil ishlab chiqarish."
    ],
    "downloadablePrompt": "Sen tajribali diktor va audio roliklar rejissyorisan.\nMAVZU: [Mahsulotingiz yoki xizmatingiz].\nVAZIFA: 45 soniyalik audio rolik uchun diktor ssenariysini yoz.\nTALABLAR:\n- Intonatsiya va to'xtalishlar [pauza] ko'rinishida belgilansin.\n- Hissiyotli va ishonchli ohangda bo'lsin.\n- So'zlar o'zbek tilida talaffuz qilishga oson bo'lsin.",
    "homeworkTitle": "Topshiriq: 30 soniyalik reklama roligi uchun professional diktor skriptini yozing",
    "homeworkDefault": "ElevenLabs yoki Descript dasturlarida o'qitish uchun o'z faoliyatingiz bo'yicha 30 soniyalik ixcham va ta'sirli diktor matnini yozib qoldiring."
  },
  "4_1": {
    "id": "4_1",
    "module": "4-Modul: AI'ni Kundalik Ish va Daromadga Aylantirish",
    "lessonNum": "4.1",
    "title": "4.1. 15 Daqiqalik Kundalik Odat: Ertalab, Kunduzi, Kechqurun",
    "duration": "15 daqiqa",
    "timeBudget": "📖 15 Daqiqalik Tizim: 7 daqiqa · 🧠 Bilim tekshiruvi: 2 daqiqa · ⚡ Reja Tuzish Amaliyoti: 6 daqiqa (JAMI: 15 daqiqa)",
    "storyboard": [
      {
        "tag": "1 / 4-QADAM: ASOSIY FALSAFA",
        "avatar": "🌱",
        "name": "Odat Kuch:",
        "quote": "AI'ni o'rganish — dasturlash emas. Bu har kuni 15 daqiqa ishlatiladigan doimiy fikrlash odatidir.",
        "tip": "💡 <b>Haqiqat:</b> Bir kunda 10 soat o'rgangandan ko'ra, har kuni 15 daqiqa amaliyot qilish 100 barobar foydaliroq."
      },
      {
        "tag": "2 / 4-QADAM: ERTALAB",
        "avatar": "🌅",
        "name": "Ertalabki 5 Daqiqa:",
        "quote": "Kunlik vazifalarni yozing va AI ga ustuvorlashtirishni (prioritize) buyuring. Kun qanday o'tishini ertalab belgilab oling.",
        "tip": "☀️ <b>Foyda:</b> Miyangizdagi tartibsizlik yo'qoladi va eng muhim ishga diqqat qaratasiz."
      },
      {
        "tag": "3 / 4-QADAM: KUNDUZI",
        "avatar": "☀️",
        "name": "Kunduzgi 5 Daqiqa:",
        "quote": "Mijozlarga xatlar, takliflar yoki e'tirozlarga javoblarni jo'natishdan oldin AI orqali tahrir qildirib, saviyasini oshiring.",
        "tip": "💼 <b>Natija:</b> Xatolarsiz, diplomatik va sotuvchan professional aloqa."
      },
      {
        "tag": "4 / 4-QADAM: KECHQURUN",
        "avatar": "🌙",
        "name": "Kechki 5 Daqiqa:",
        "quote": "Kunda tushunmagan yangi mavzuni: 'Menga ushbu mavzuni 10 yoshli bolaga tushuntirgandek sodda tushuntir' deb o'rganing.",
        "tip": "🧠 <b>O'sish:</b> Har kuni 1 ta yangi bilim miyangizga mustahkam o'rnashadi."
      }
    ],
    "deepDive": "<div class=\"deep-dive-article\">\n  <div class=\"case-callout\">\n    <h4 style=\"color:var(--teal-light); margin-top:0;\">🌅 1-Qism: Nega Kurslar Emas, Kundalik Odat Yutadi?</h4>\n    <p>\n      Ko'pchilik qimmat kurslarni sotib olib, 2 haftadan so'ng sun'iy intellektdan foydalanishni to'xtatib qo'yishadi. Sababi — ular AI ni kundalik rejimlariga singdira olishmagan.\n    </p>\n    <p>\n      <b>GPTify ning 15 daqiqalik tizimi:</b> Sizdan qo'shimcha soatlar talab qilmaydi. Siz baribir qilishingiz kerak bo'lgan kundalik ishlaringizni AI sherikligida bajarasiz:\n    </p>\n    <div class=\"matrix-grid\">\n      <div class=\"matrix-col\">\n        <b style=\"color:var(--brand-emerald);\">1. Ertalab (5 daqiqa)</b>\n        <p style=\"font-size:12.5px; color:var(--text-secondary); margin:4px 0 0 0;\">\n          Kunlik vazifalar ro'yxatini tashlang va eng unumli ketma-ketlikni tuzdiring.\n        </p>\n      </div>\n      <div class=\"matrix-col\">\n        <b style=\"color:var(--lime);\">2. Kunduzi (5 daqiqa)</b>\n        <p style=\"font-size:12.5px; color:var(--text-secondary); margin:4px 0 0 0;\">\n          Muhim xatlar va mijoz takliflarini tahrirlatib, ishonchli shaklga keltiring.\n        </p>\n      </div>\n      <div class=\"matrix-col\">\n        <b style=\"color:var(--tg-blue);\">3. Kechqurun (5 daqiqa)</b>\n        <p style=\"font-size:12.5px; color:var(--text-secondary); margin:4px 0 0 0;\">\n          Tushunmagan atama yoki sohani sodda tilda tushuntirib berishini so'rang.\n        </p>\n      </div>\n    </div>\n  </div>\n</div>",
    "quiz": {
      "question": "Sun'iy intellektdan eng yuqori uzoq muddatli natijaga erishishning eng to'g'ri strategiyasi nima?",
      "options": [
        "A) Uni kundalik 15 daqiqalik fikrlash odatiga (rejalash, xatlarni tahrirlash, o'rganish) aylantirish.",
        "B) Yilda 1 marta barcha ishlarni sun'iy intellektga yuklab ko'rish.",
        "C) Faqat xorijiy tillarni o'rganishda ishlatish."
      ],
      "correctIndex": 0,
      "explanation": "To'g'ri! AI bilan ishlash — bu kundalik odat. Har kuni 15 daqiqa amaliyot sizning fikrlash tezligingiz va mahsuldorligingizni keskin oshiradi."
    },
    "notes": [
      "<b>Ertalab:</b> Rejalashtirish va ustuvor vazifalarni aniqlash.",
      "<b>Kunduzi:</b> Yozishmalar va takliflarni professional darajaga ko'tarish.",
      "<b>Kechqurun:</b> Yangi sohalarni sodda tilda o'rganib borish."
    ],
    "downloadablePrompt": "Sen mening shaxsiy unumdorlik bo'yicha murabbiyimisan.\nMening bugungi 5 ta asosiy vazifam:\n1. [Vazifa 1]\n2. [Vazifa 2]\n3. [Vazifa 3]\n4. [Vazifa 4]\n5. [Vazifa 5]\nVAZIFA: Ushbu vazifalarni eng yuqori diqqat va energiya talab qilishiga qarab sarala va ertalabdan kechgacha bo'lgan eng unumli jadvalni tuzib ber.",
    "homeworkTitle": "Topshiriq: Bugungi kunlik vazifalaringizni AI orqali optimallashtiring",
    "homeworkDefault": "Bugun qilishingiz kerak bo'lgan 3 ta asosiy vazifani yozing va AI ularni qanday tartibda bajarishni tavsiya qilganini ko'rsating."
  },
  "4_2": {
    "id": "4_2",
    "module": "4-Modul: AI'ni Kundalik Ish va Daromadga Aylantirish",
    "lessonNum": "4.2",
    "title": "4.2. Xizmatlarni 10x Tezlashtirish: SMM, Kopirayting va Reels G'oyalari",
    "duration": "15 daqiqa",
    "timeBudget": "📖 SMM & Reels Ssenariylari: 7 daqiqa · 🧠 Bilim tekshiruvi: 2 daqiqa · ⚡ Kontent Amaliyoti: 6 daqiqa (JAMI: 15 daqiqa)",
    "storyboard": [
      {
        "tag": "1 / 4-QADAM: DIQQAT JANGI",
        "avatar": "📱",
        "name": "3 Soniyalik Qoida:",
        "quote": "Instagram Reels va TikTok'da odamlar videongizni dastlabki 3 soniyada o'tkazib yuborishadi. Shuning uchun kuchli 'Ilgak' (Hook) bo'lishi shart!",
        "tip": "🪝 <b>Siri:</b> Hech qachon 'Assalomu alaykum do'stlar' deb boshlamang. Darhol muammoni ko'rsating."
      },
      {
        "tag": "2 / 4-QADAM: VIRAL FORMULA",
        "avatar": "🔥",
        "name": "4 Bosqichli Ssenariy:",
        "quote": "1) ILGAK (Hook) -> 2) MUAMMO (Pain point) -> 3) YECHIM (Solution) -> 4) HARAKATGA CHAQIRUV (CTA).",
        "tip": "📐 <b>Formula:</b> Bu tuzilish videolarni oxirigacha ko'rish foizini (retention) 4 barobar oshiradi."
      },
      {
        "tag": "3 / 4-QADAM: 10X TEZLIK",
        "avatar": "⚡",
        "name": "Kopirayting Tezligi:",
        "quote": "Bir haftalik 7 ta post va 3 ta Reels g'oyasini o'ylab topishga endi 3 kun ketmaydi — AI bilan 30 daqiqada tayyor bo'ladi.",
        "tip": "🚀 <b>Yutuq:</b> Muntazamlik ta'minlanadi va auditoriya tez o'sadi."
      },
      {
        "tag": "4 / 4-QADAM: AMALIY DAROMAD",
        "avatar": "💼",
        "name": "Monetizatsiya:",
        "quote": "SMM mutaxassislari, dizaynerlar va sotuvchilar AI yordamida o'z xizmatlari sifatini oshirib, ko'proq mijozlarga xizmat ko'rsata oladilar.",
        "tip": "🏆 <b>Daromad:</b> Bir xil vaqt ichida 3 barobar ko'proq qiymat yaratasiz."
      }
    ],
    "deepDive": "<div class=\"deep-dive-article\">\n  <div class=\"case-callout\">\n    <h4 style=\"color:var(--teal-light); margin-top:0;\">🔥 1-Qism: Oltin Prompt #1: Reels Ssenariysi</h4>\n    <p>\n      GPTify ning rasmiy qo'llanmasidan o'rin olgan eng mashhur amaliy promptlardan biri:\n    </p>\n    <div class=\"notes-box\">\n      <p style=\"font-size:13px; color:var(--text); line-height:1.6; margin:0;\">\n        <b>PROMPT:</b><br>\n        \"Sen Instagram algoritmlarini yaxshi biladigan SMM strategisan.<br>\n        Mening soham: [sohangiz, masalan: til o'rgatish / mebel ishlab chiqarish].<br>\n        Auditoriyani dastlabki 3 soniyada ushlab qoladigan 3 ta Reels ssenariysi tuzib ber.<br>\n        Har birida: ilgak (hook), muammo, qisqa yechim va harakatga chaqiruv (CTA) bo'lsin.<br>\n        Ohang: baquvvat, qiziqarli va ortiqcha suvlarsiz.\"\n      </p>\n    </div>\n  </div>\n\n  <h4 style=\"color:var(--text); margin-top:20px;\">📈 2-Qism: Matnlarni Qayta Formatlash (Repurposing)</h4>\n  <p>\n    Bitta sifatli yozilgan matnni bir nechta formatlarga aylantirish mumkin:\n  </p>\n  <ul style=\"padding-left:20px; font-size:13.5px; color:var(--text-secondary); line-height:1.7;\">\n    <li>1 ta maqoladan -> 3 ta qisqa Telegram posti.</li>\n    <li>Telegram postidan -> 1 ta qiziqarli Instagram karusel matni.</li>\n    <li>Karuseldan -> 30 soniyalik Reels diktor gapi.</li>\n  </ul>\n</div>",
    "quiz": {
      "question": "Instagram Reels videolarida tomoshabinni ushlab qolish uchun ssenariyni qanday boshlash kerak?",
      "options": [
        "A) Dastlabki 3 soniyada kutilmagan savol, kuchli fakt yoki og'riqli muammo (Hook / Ilgak) bilan.",
        "B) Kompaniya tarixi va direktorning tarjimai holi bilan.",
        "C) 10 soniyalik jimlik bilan."
      ],
      "correctIndex": 0,
      "explanation": "To'g'ri! Ijtimoiy tarmoqlarda dastlabki 3 soniya hamma narsani hal qiladi. Kuchli ilgak tomoshabinni to'xtatadi va videoni oxirigacha ko'rishini ta'minlaydi."
    },
    "notes": [
      "<b>3 soniya qoidasi:</b> Ilgak tomoshabinni jalb qiluvchi kalit.",
      "<b>4 bosqich:</b> Ilgak -> Muammo -> Yechim -> CTA.",
      "<b>Repurposing:</b> Bitta sifatli g'oyani bir nechta tarmoqlarda ishlatish."
    ],
    "downloadablePrompt": "Sen yetakchi Reels va TikTok ssenaristisan.\nSOHAM: [O'z sohangiz].\nMAQSAD: Yangi mijozlarni jalb qilish.\nVAZIFA: Menga 2 ta 30 soniyalik Reels ssenariysi yozib ber.\nTuzilishi:\n1. 0-3 soniya: Ilgak (ekranda ko'rinadigan matn va kadr harakati).\n2. 3-15 soniya: Muammo (mijozning bosh og'rig'i).\n3. 15-25 soniya: Yechim (bizning taklif).\n4. 25-30 soniya: CTA (izohlarda 'AI' so'zini qoldiring).",
    "homeworkTitle": "Topshiriq: O'z sohangiz uchun 1 ta to'liq Reels ssenariysini tayyorlang",
    "homeworkDefault": "O'z biznesingiz yoki xizmatingiz bo'yicha Ilgak (Hook), Muammo, Yechim va CTA dan iborat 30 soniyalik Reels ssenariysini yozib qoldiring."
  },
  "4_3": {
    "id": "4_3",
    "module": "4-Modul: AI'ni Kundalik Ish va Daromadga Aylantirish",
    "lessonNum": "4.3",
    "title": "4.3. Eyzenxauer Matritsasi: Kunlik vazifalarni saralash va 10 soat tejash",
    "duration": "15 daqiqa",
    "timeBudget": "📖 Eyzenxauer Tizimi: 7 daqiqa · 🧠 Bilim tekshiruvi: 2 daqiqa · ⚡ Matritsa Saralash Amaliyoti: 6 daqiqa (JAMI: 15 daqiqa)",
    "storyboard": [
      {
        "tag": "1 / 4-QADAM: BANDLIK TUZOQIDA",
        "avatar": "😵",
        "name": "Ko'p Ishlash Natija Emas:",
        "quote": "'Ertalabdan kechgacha tinmay ishlayman, lekin muhim ishlarga vaqtim yetmaydi' — bu biznes egalarining 90 foizidagi holat.",
        "tip": "⚠️ <b>Sabab:</b> Shoshilinch, lekin foydasiz mayda vazifalar asosiy strategik vaqtni yeb qo'yadi."
      },
      {
        "tag": "2 / 4-QADAM: EYZENXAUER MATRITSASI",
        "avatar": "📊",
        "name": "4 Ta Kvadrat:",
        "quote": "1) Shoshilinch & Muhim: Darhol bajaring.\n2) Muhim, lekin Shoshilinch emas: Rejalashtiring (kelajak shu yerda!).\n3) Shoshilinch, lekin Muhim emas: Delegatsiya qiling.\n4) Muhim emas & Shoshilinch emas: Butunlay bekor qiling!",
        "tip": "🎯 <b>Mantiq:</b> AI siz uchun qaror qabul qilmaydi, lekin ustuvorliklarni ko'rishga yordam beradi."
      },
      {
        "tag": "3 / 4-QADAM: OLTIN PROMPT #2",
        "avatar": "⚡",
        "name": "Amaliy Prompt:",
        "quote": "Vazifalaringizni chalkash ro'yxat qilib yozasiz, AI esa ularni 4 kvadratga ajratib, nimalarni bekor qilish yoki boshqalarga topshirishni aytib beradi.",
        "tip": "💡 <b>Natija:</b> Haftasiga kamida 10 soat bo'sh vaqt tejaladi."
      },
      {
        "tag": "4 / 4-QADAM: XOTIRJAMLIK",
        "avatar": "🧘",
        "name": "Boshqariladigan Hayot:",
        "quote": "Vaqtni to'g'ri taqsimlagan inson charchamaydi va biznesini tizimli rivojlantira oladi.",
        "tip": "🏆 <b>Yutuq:</b> Stress kamayadi, daromad va unumdorlik oshadi."
      }
    ],
    "deepDive": "<div class=\"deep-dive-article\">\n  <div class=\"case-callout\">\n    <h4 style=\"color:var(--teal-light); margin-top:0;\">📊 1-Qism: Oltin Prompt #2: Kunlik Rejani Tartiblash</h4>\n    <p>\n      Keling, GPTify ning eng mashhur boshqaruv promptini ko'rib chiqamiz:\n    </p>\n    <div class=\"notes-box\">\n      <p style=\"font-size:13px; color:var(--text); line-height:1.6; margin:0;\">\n        <b>PROMPT:</b><br>\n        \"Mening bugungi vazifalarim: [vazifalar ro'yxati].<br>\n        Ularni 4 guruhga ajrat:<br>\n        1) Shoshilinch va muhim (darhol bajariladigan).<br>\n        2) Muhim, lekin shoshilinch emas (rejalashtiriladigan, kelajakni rivojlantiradigan).<br>\n        3) Delegatsiya qilinadigan (boshqalarga topshirish mumkin bo'lgan).<br>\n        4) Bekor qilinadigan (keraksiz yoki qiymat yaratmaydigan).<br>\n        So'ng eng unumli kunlik rejamni tuzib ber.\"\n      </p>\n    </div>\n  </div>\n\n  <h4 style=\"color:var(--text); margin-top:20px;\">🎯 2-Qism: Qaysi Kvadrat Biznesni Boyitadi?</h4>\n  <p>\n    Kambag'al va doim stressdagi xodimlar butun kunini faqat 1- va 3-kvadratlarda o'tkazadilar (kutilmagan yong'inlarni o'chirish).\n  </p>\n  <p>\n    Muvaffaqiyatli insonlar esa o'z vaqtlarining 60 foizini <b>2-kvadratga (Muhim, lekin shoshilinch bo'lmagan strategik ishlar: o'rganish, tizimlashtirish, AI ni joriy qilish)</b> ajratadilar.\n  </p>\n</div>",
    "quiz": {
      "question": "Eyzenxauer matritsasida biznesingiz kelajagini va uzoq muddatli o'sishini ta'minlaydigan eng muhim soha qaysi?",
      "options": [
        "A) Muhim, lekin shoshilinch bo'lmagan ishlar (strategiya, AI joriy qilish, xodimlarni o'qitish).",
        "B) Faqat ijtimoiy tarmoqlardagi keraksiz xabarlarga javob qaytarish.",
        "C) Doimiy yong'inlarni o'chirish."
      ],
      "correctIndex": 0,
      "explanation": "To'g'ri! 2-kvadrat (Muhim, lekin shoshilinch emas) — har qanday shaxsiy va biznes muvaffaqiyatining poydevoridir."
    },
    "notes": [
      "<b>Eyzenxauer qoidasi:</b> Har bir ishni shoshilinchlik va muhimlik bo'yicha tahlil qilish.",
      "<b>Delegatsiya:</b> Boshqa xodimlar qila oladigan ishlarni topshirish.",
      "<b>Vaqt tejamkorligi:</b> Keraksiz ishlarni bekor qilish haftasiga 10 soat vaqt beradi."
    ],
    "downloadablePrompt": "Sen tajribali vaqt boshqaruvi (Time Management) mutaxassisisan.\nQuyida mening bugungi 6 ta ishim berilgan:\n[Ishlar ro'yxatini kiriting]\nVAZIFA:\n1. Ularni Eyzenxauer matritsasi bo'yicha 4 ta guruhga taqsimla.\n2. Qaysi 1 ta ishni bugun bekor qilsam bo'lishini tushuntir.\n3. Qaysi 1 ta ishni boshqa xodimga delegatsiya qilishni tavsiya etasan?\n4. Qolgan ishlar bo'yicha kunlik aniq jadval chiqar.",
    "homeworkTitle": "Topshiriq: O'z vazifalaringizni Eyzenxauer matritsasi bo'yicha saralattiring",
    "homeworkDefault": "O'z ishingizdagi 4 ta vazifani yozing va AI ularni qaysi kvadratlarga ajratganini va qaysi birini delegatsiya qilishni tavsiya etganini ko'rsating."
  },
  "5_1": {
    "id": "5_1",
    "module": "5-Modul: Yakuniy Amaliy Loyiha & Rasmiy Sertifikat",
    "lessonNum": "5.1",
    "title": "5.1. Shaxsiy AI Ishchi Tizimi (Portfolio Loyihasi)",
    "duration": "15 daqiqa",
    "timeBudget": "📖 Portfolio Arxitekturasi: 7 daqiqa · 🧠 Bilim tekshiruvi: 2 daqiqa · ⚡ Loyiha Loyihalash Amaliyoti: 6 daqiqa (JAMI: 15 daqiqa)",
    "storyboard": [
      {
        "tag": "1 / 4-QADAM: BILIMDAN NATIJAGA",
        "avatar": "🏗️",
        "name": "Nazariya Yetarli Emas:",
        "quote": "Siz 4 ta modul davomida modellarni, prompt formulasini, qidiruv va audio vositalarini hamda vaqt boshqaruvini o'rgandingiz.",
        "tip": "💡 <b>Maqsad:</b> Endi ushbu bilimlarni o'z kasbingiz yoki biznesingiz uchun yagona 'Shaxsiy AI Ishchi Tizimi'ga birlashtirish vaqti keldi."
      },
      {
        "tag": "2 / 4-QADAM: 3 TA TAYANCH",
        "avatar": "🧱",
        "name": "Portfolio Tarkibi:",
        "quote": "1) Shaxsiy Promptlar Shabloni (o'z sohangizga moslangan).\n2) Kundalik 15 daqiqalik odat grafigi.\n3) Haftasiga 10 soat tejovchi avtomatlashtirilgan 1 ta jarayon.",
        "tip": "🎯 <b>Foydasi:</b> Ish beruvchilar va hamkorlar oldida sizning real amaliy malakangizni isbotlaydi."
      },
      {
        "tag": "3 / 4-QADAM: EKSPOZITSIYA",
        "avatar": "💎",
        "name": "Amaliyot Namunasi:",
        "quote": "Masalan, savdo menejeri: mijoz xatlarini Claude orqali tahrirlash + Gamma da taqdimot tayyorlash + Eyzenxauer bo'yicha kunni rejalash tizimini joriy qiladi.",
        "tip": "🚀 <b>Ko'rsatkich:</b> Natijada savdo unumdorligi kamida 2 barobar oshadi."
      },
      {
        "tag": "4 / 4-QADAM: SERTIFIKAT OSTONASIDA",
        "avatar": "🏆",
        "name": "Tayyorgarlik:",
        "quote": "Ushbu loyihani bajargach, siz yakuniy imtihonga va GPTify rasmiy sertifikatiga to'liq tayyor bo'lasiz.",
        "tip": "✨ <b>Muvaffaqiyat:</b> O'zbekiston va xalqaro miqyosda tan olinadigan raqamli mutaxassisga aylanasiz."
      }
    ],
    "deepDive": "<div class=\"deep-dive-article\">\n  <div class=\"case-callout\">\n    <h4 style=\"color:var(--teal-light); margin-top:0;\">🏗️ 1-Qism: Shaxsiy AI Tizimi Nima?</h4>\n    <p>\n      Ushbu yakuniy modulda siz shunchaki oddiy foydalanuvchi emas, balki <b>o'z sohasida sun'iy intellektni to'liq joriy qilgan amaliy mutaxassis</b> darajasiga ko'tarilasiz.\n    </p>\n    <p>\n      Sizning portfolio loyihangiz quyidagi 3 qismdan iborat bo'lishi kerak:\n    </p>\n    <ul style=\"padding-left:20px; font-size:13.5px; color:var(--text-secondary); line-height:1.7;\">\n      <li><b>1-Qism (Prompt kutubxonasi):</b> O'z sohangizdagi eng takrorlanuvchi 3 ta vazifa uchun Oltin Formula asosida yaratilgan promptlar.</li>\n      <li><b>2-Qism (Vositalar zanjiri):</b> Qaysi vazifada ChatGPT, qaysi birida Claude, Perplexity yoki Gamma dan foydalanishingiz xaritasi.</li>\n      <li><b>3-Qism (Vaqt hisoboti):</b> Sun'iy intellekt orqali haftasiga qancha vaqt tejayotganingiz hisob-kitobi.</li>\n    </ul>\n  </div>\n</div>",
    "quiz": {
      "question": "Shaxsiy AI tizimini joriy qilishdan ko'zlangan asosiy natija nima?",
      "options": [
        "A) Takroriy va vaqt oluvchi ishlarni AI ga yuklab, haftasiga 10+ soat vaqt tejash va sifatni 10x oshirish.",
        "B) Faqat kompyuter oldida ko'proq o'tirish.",
        "C) Barcha inson xodimlarni darhol ishdan bo'shatish."
      ],
      "correctIndex": 0,
      "explanation": "To'g'ri! AI inson o'rnini egallamaydi, lekin AI dan foydalangan mutaxassis — foydalanmagan mutaxassisdan 10 barobar unumliroq bo'ladi."
    },
    "notes": [
      "<b>Portfolio:</b> Amaliy bilimlaringizning moddiy isboti.",
      "<b>Yaxlitlik:</b> Modellar + Promptlar + Asboblar + Vaqt boshqaruvi.",
      "<b>Tayyorgarlik:</b> Yakuniy malaka sertifikatini olish uchun so'nggi qadam."
    ],
    "downloadablePrompt": "Sen korporativ tizimlashtirish bo'yicha maslahatchisan.\nMening kasbim/soham: [O'z sohangiz].\nVAZIFA: Men uchun haftalik 'Shaxsiy AI Ish Rejasi'ni tuzib ber.\nUnda:\n- Dushanbadan Jumagacha har kuni ertalabki 15 daqiqalik vazifa\n- Ishlatiladigan vositalar (Claude, ChatGPT, Perplexity, Gamma)\n- Haftalik kutilayotgan samaradorlik o'sishi aks etsin.",
    "homeworkTitle": "Topshiriq: O'z faoliyatingiz uchun Shaxsiy AI tizimi rejasini taqdim eting",
    "homeworkDefault": "Men o'z faoliyatimda [sohangiz] bo'yicha quyidagi 3 ta vazifani AI orqali avtomatlashtiraman: 1) [Vazifa 1], 2) [Vazifa 2], 3) [Vazifa 3]. Ushbu tizim menga haftasiga [X] soat vaqt tejaydi."
  },
  "5_2": {
    "id": "5_2",
    "module": "5-Modul: Yakuniy Amaliy Loyiha & Rasmiy Sertifikat",
    "lessonNum": "5.2",
    "title": "5.2. Yakuniy Imtihon & Rasmiy Malaka Sertifikatini Olish!",
    "duration": "15 daqiqa",
    "timeBudget": "📖 Yakuniy Xulosa: 5 daqiqa · 🧠 Malaka Imtihoni: 5 daqiqa · 🏆 Sertifikatni Ochish: 5 daqiqa (JAMI: 15 daqiqa)",
    "storyboard": [
      {
        "tag": "1 / 4-QADAM: TABRIKLAYMIZ!",
        "avatar": "🎉",
        "name": "Buyuk Natija:",
        "quote": "Siz GPTify Academy ning barcha 14 ta darsini to'liq o'rganib chiqdingiz va Sun'iy Intellekt Asoslarini o'zlashtirdingiz!",
        "tip": "🌟 <b>Fahr:</b> Siz O'zbekistonda yangi davr raqamli texnologiyalaridan amaliy foydalana oladigan yetakchilar safiga qo'shildingiz."
      },
      {
        "tag": "2 / 4-QADAM: RASMIY HUJJAT",
        "avatar": "📜",
        "name": "Sertifikat Standarti:",
        "quote": "Sizning sertifikatingiz unikal seriya raqamiga (GPT-UZ-2026-XXXXX), QR-kod tekshiruviga va rasmiy muhrlarga ega bo'ladi.",
        "tip": "🔍 <b>Verifikatsiya:</b> Ish beruvchilar va hamkorlar sertifikatingizni istalgan vaqtda markaziy bazadan tekshirib olishlari mumkin."
      },
      {
        "tag": "3 / 4-QADAM: IMTIHONNI TOPSHIRISH",
        "avatar": "📝",
        "name": "So'nggi Qadam:",
        "quote": "Quyidagi yakuniy savolga to'g'ri javob bering va amaliy vazifani tasdiqlang. Shundan so'ng 'Sertifikat' bo'limi avtomatik ravishda ochiladi!",
        "tip": "🔓 <b>Qulf ochilishi:</b> 100% natija bilan Ultra-HD sertifikatingizni yuklab olasiz."
      },
      {
        "tag": "4 / 4-QADAM: KELAJAK SARI",
        "avatar": "🚀",
        "name": "Boshqa Kurslar Katalogi:",
        "quote": "AI Asoslarini tugatgach, 'Barcha Kurslar' sahifasida B2B Savdo, n8n va Moliya kurslariga navbat ochiladi!",
        "tip": "🏆 <b>Olg'a:</b> O'rganishdan to'xtamang va yangi cho'qqilarni zabt eting!"
      }
    ],
    "deepDive": "<div class=\"deep-dive-article\">\n  <div class=\"case-callout\" style=\"border-left-color:var(--brand-emerald);\">\n    <h4 style=\"color:var(--brand-emerald); margin-top:0;\">🏆 GPTify Academy: \"Sun'iy Intellekt Asoslari\" Bitiruvchisi!</h4>\n    <p>\n      Ushbu kurs davomida siz quyidagi 5 ta fundamental kompetensiyaga ega bo'ldingiz:\n    </p>\n    <ul style=\"padding-left:20px; font-size:13.5px; color:var(--text-secondary); line-height:1.7;\">\n      <li>✅ <b>AI Fikrlash Anatomiyasi:</b> Katta til modellari qanday ishlashi, tokenlar xususiyati va halutsinatsiyalarning oldini olish (Grounding).</li>\n      <li>✅ <b>Professional Prompt Muhandisligi:</b> ROL + KONTEKST + VAZIFA + FORMAT oltin formulasi, Few-Shot va Chain-of-Thought texnikalari.</li>\n      <li>✅ <b>Vositalar Ekotizimi:</b> ChatGPT, Claude 3.5 Sonnet, Perplexity, Gamma App va audio vositalaridan to'g'ri maqsadda foydalanish.</li>\n      <li>✅ <b>Biznes va Vaqt Unumdorligi:</b> 15 daqiqalik kundalik odat, SMM va Reels kontent ishlab chiqarish hamda Eyzenxauer matritsasi.</li>\n      <li>✅ <b>Shaxsiy Tizim:</b> Amaliy topshiriqlarni mustaqil bajarish va o'z kasbiy faoliyatida haftasiga 10 soat tejamkorlikka erishish.</li>\n    </ul>\n  </div>\n</div>",
    "quiz": {
      "question": "Sun'iy intellektdan professional va xavfsiz foydalanishning eng asosiy qoidasi nima?",
      "options": [
        "A) Faqat bepul modellarga tayanish va ularning har bir javobiga tekshirmasdan ishonish.",
        "B) To'g'ri modelni tanlash + Oltin Formula (RTC) bo'yicha aniq kontekst berish + Faktlarni tekshirish (Grounding) + Kundalik odat sifatida muntazam qo'llash.",
        "C) Texnologiyalardan butunlay voz kechish."
      ],
      "correctIndex": 1,
      "explanation": "Mukammal va to'g'ri! Aynan shu yaxlit tizim — GPTify Academy ning poydevori bo'lib, sizni zamonning eng ilg'or raqamli mutaxassisiga aylantiradi. Tabriklaymiz!"
    },
    "notes": [
      "<b>Kompleks Bilim:</b> Modellar + Promptlar + Asboblar + Vaqt unumdorligi integratsiyasi.",
      "<b>Verifikatsiya:</b> Rasmiy tekshiriladigan sertifikat sizning malakangizni tasdiqlaydi.",
      "<b>Amaliy Natija:</b> Nazariya emas, bevosita kompaniya va shaxsiy unumdorlikni oshiruvchi bilimlar."
    ],
    "downloadablePrompt": "Sen Kompaniyaning Bosh AI Strategi va Tizim Arxitektorisan.\nBiznesingizning barcha jarayonlari (Rejalash, Yozishmalar, Taqdimotlar, Tahlil) uchun to'liq integratsiyalashgan AI xaritasi tayyorlangan.\nUshbu xaritani yillik strategik reja sifatida rasmiylashtir va har bir bosqich bo'yicha mas'ul shaxslar KPI ko'rsatkichlarini belgilab ber.",
    "homeworkTitle": "Yakuniy Imtihon: Butun kurs bo'yicha o'z xulosangizni yozib, sertifikatni oching",
    "homeworkDefault": "Men GPTify Academy ning 'Sun'iy Intellekt Asoslari' (AI Foundations) kursining barcha 14 ta darsini to'liq o'zlashtirdim. Oltin formula, vositalar ekotizimi va kundalik odat tizimini o'z amaliyotimga joriy qildim. Rasmiy sertifikat berilishi uchun tasdiqlayman."
  }
};

// Ensure global attachment for both standard scripts and modules
if (typeof window !== 'undefined') {
  window.COURSE_DATA = COURSE_DATA;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = COURSE_DATA;
}
