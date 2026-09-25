/**
 * AiNoma Core Application Script
 * Features: Instant Search (Ctrl+K), Theme Switcher, Category Filters, Copy-to-Clipboard with Toast, Mobile Nav
 */

const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const root = document.documentElement;

// Theme Persistence & Logo Update
function updateLogo(theme) {
  $$(".logo img").forEach(img => {
    img.src = theme === "dark" ? "assets/logo-dark.svg" : "assets/logo.svg";
  });
}

const savedTheme = localStorage.getItem("ainoma-theme");
if (savedTheme) {
  root.dataset.theme = savedTheme;
  updateLogo(savedTheme);
}
$("#theme")?.addEventListener("click", () => {
  const next = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = next;
  localStorage.setItem("ainoma-theme", next);
  updateLogo(next);
});

// Toast Notification System
window.showToast = function(message) {
  let container = $(".toast-container");
  if (!container) {
    container = document.createElement("div");
    container.className = "toast-container";
    document.body.appendChild(container);
  }
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<span>✓</span> <span>${message}</span>`;
  container.appendChild(toast);

  requestAnimationFrame(() => toast.classList.add("show"));
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, 3000);
};

// Clipboard Copy Helper
document.addEventListener("click", (e) => {
  const btn = e.target.closest(".copy-btn");
  if (!btn) return;
  const targetId = btn.dataset.target;
  let text = "";
  if (targetId) {
    const el = document.getElementById(targetId);
    text = el ? el.innerText : "";
  } else {
    const card = btn.closest(".prompt-card");
    const code = card?.querySelector(".prompt-code");
    text = code ? code.innerText : "";
  }
  if (text) {
    navigator.clipboard.writeText(text).then(() => {
      window.showToast("Prompt nusxalandi! Endi ChatGPT yoki Claude'ga qo‘yishingiz mumkin.");
    }).catch(() => {
      window.showToast("Nusxalashda xatolik yuz berdi.");
    });
  }
});

// Search Drawer & Ctrl+K Shortcut
const searchBox = $("#searchbox");
const searchInput = $("#siteSearch");
const searchResultsBox = $("#searchResults");

function openSearch() {
  searchBox?.classList.add("open");
  setTimeout(() => searchInput?.focus(), 60);
}
function closeSearch() {
  searchBox?.classList.remove("open");
}

$("#searchBtn")?.addEventListener("click", () => {
  if (searchBox?.classList.contains("open")) closeSearch();
  else openSearch();
});
$("#closeSearch")?.addEventListener("click", closeSearch);

document.addEventListener("keydown", (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
    e.preventDefault();
    if (searchBox?.classList.contains("open")) closeSearch();
    else openSearch();
  }
  if (e.key === "Escape" && searchBox?.classList.contains("open")) {
    closeSearch();
  }
});

// Comprehensive Real Search Index
const searchIndex = [
  // Loyiha haqida va Imkoniyatlar
  { t: "O‘zbekistonda AI Imkoniyatlari: Qonunchilik, IT Park 0% Soliq va GPU Grantlari", u: "imkoniyatlar.html", k: "o'zbekiston imkoniyatlar qonun soliq it park 0% sandbox pq-358 strategiya 2030 gpu grant superkompyuter etika startap" },
  { t: "AiNoma Haqida: Missiya, tahririyat tamoyillari va B2B ekspertiza", u: "haqida.html", k: "ainoma haqida loyiha missiya gptify shukhratbek iskandarov b2b konsalting aloqa tahririyat" },








































  // Yangiliklar & Maqolalar (Verifikatsiya qilingan Sentabr 2026)
  { t: "AI Agentlar Xavfsizligi: Kompyuter Uchun 5 Ta Qoida", u: "yangiliklar/ai-agent-kompyuter-xavfsizlik-qollanma/", k: "ai agentlar xavfsizligi: kompyuter uchun 5 ta qoida qo'llanmalar openai research gpt-6 astra kabi modellar endi kompyuterni mustaqil boshqaradi. ai agentga vazifa topshirishdan oldi" },
  { t: "Google DeepMind: Shaxsiy AI Uchun Xavfsiz Xotira", u: "yangiliklar/google-deepmind-private-ai-compute-secure-memory-2026/", k: "google deepmind: shaxsiy ai uchun xavfsiz xotira frontier ai tadqiqot google deepmind research google deepmind konfidentsial sun’iy intellekt hisoblashlari (private ai compute) uchun yangi appara" },
  { t: "O‘zbekiston Banklari Kredit Skoringida AIdan Foydalanishga O‘tmoqda", u: "yangiliklar/ozbekiston-fintex-kredit-skoring-ai-tahlil-2026/", k: "o‘zbekiston banklari kredit skoringida aidan foydalanishga o‘tmoqda o‘zbekiston fintech & ai spot.uz it & biznes tadbirkorlar uchun 500 million so‘mgacha kredit ajratishda an’anaviy biznes-reja majburiyati bekor q" },
  { t: "Google Gemini 3.8 Live'ga Live Avatar Qo‘shildi", u: "yangiliklar/google-gemini-live-avatar-2026/", k: "google gemini 3.8 live'ga live avatar qo‘shildi global ai tadqiqot rasmiy manba " },
  { t: "O‘zbekistonda YouTube Monetizatsiyasi Ishga Tushirilmoqda", u: "yangiliklar/youtube-monetizatsiya-ozbekiston-google/", k: "o‘zbekistonda youtube monetizatsiyasi ishga tushirilmoqda o‘zbekiston it spot.uz it & biznes google rahbariyati bilan o‘tkazilgan muzokaralar o‘zbekistonda youtube hamkorlik dasturini faollasht" },
  { t: "AI Marketing Tadqiqoti: Oddiy So‘rov Personalardan Ustun Chiqdi", u: "yangiliklar/sintetik-persona-suniy-intellekt-ab-test-arxiv-2026/", k: "ai marketing tadqiqoti: oddiy so‘rov personalardan ustun chiqdi biznes & sun’iy intellekt arxiv cs.ai upworthy a/b testlari bazasida o‘tkazilgan tadqiqot shuni ko‘rsatdiki, katta til modellarida auditor" },
  { t: "Altman va Amodei BMTda AI Tartibga Solishga Chaqirdi", u: "yangiliklar/openai-anthropic-un-security-council-ai-regulation-2026/", k: "altman va amodei bmtda ai tartibga solishga chaqirdi global ai siyosati al jazeera openai'ning sam altman va anthropic'ning dario amodei bmt xavfsizlik kengashida sun'iy intellektni g" },
  { t: "Toshkentda Future Intelligence Forum 2026 Bo‘lib O‘tdi", u: "yangiliklar/toshkent-future-intelligence-forum-2026/", k: "toshkentda future intelligence forum 2026 bo‘lib o‘tdi o'zbekiston ai siyosati kun.uz toshkentda huawei va hamkorlari tashkil etgan future intelligence forum 2026 o'z ishini yakunladi. r" },
  { t: "OpenAI GPT-6 Sol va Luna Modellarini Taqdim Etdi", u: "yangiliklar/openai-gpt6-sol-luna-50-percent-price-cut/", k: "openai gpt-6 sol va luna modellarini taqdim etdi dunyo texnologiya openai research gpt-6 oilasi kengaydi: murakkab dasturlash vazifalari uchun sol hamda ultra-tezkor va ixcham luna mo" },
  { t: "xAI Dasturlash Uchun Grok 4.7 Modelini Chiqardi", u: "yangiliklar/xai-grok-47-coding-benchmark-release/", k: "xai dasturlash uchun grok 4.7 modelini chiqardi dunyo texnologiya xai official elon muskning xai kompaniyasi dasturiy ta’minot injiniringi va professional tahlilga ixtisoslashgan " },
  { t: "Meta Muse Tizimida OpenClaw Kodi Borligi Tan Olindi", u: "yangiliklar/meta-muse-openclaw-ilhomlanish-tahlili/", k: "meta muse tizimida openclaw kodi borligi tan olindi dunyo texnologiya techcrunch ai meta kompaniyasi yangi muse sun’iy intellekt tizimini noldan ishlab chiqqanini ta'kidlasa-da, uning " },
  { t: "JetBrains AI Agentlar Uchun 'Air' Platformasini Taqdim Etdi", u: "yangiliklar/jetbrains-air/", k: "jetbrains ai agentlar uchun 'air' platformasini taqdim etdi dasturlash devtools jetbrains official blog jetbrains bitta dasturchiga bir vaqtning o‘zida bir nechta avtonom ai agentlarini koordinatsiya qili" },
  { t: "Perform.AI Elektron Tijorat Uchun 'AI Commerce OS'ni Chiqardi", u: "yangiliklar/perform-ai-commerce-os/", k: "perform.ai elektron tijorat uchun 'ai commerce os'ni chiqardi dunyo biznes eqs corporate newsroom brendlar va avtonom xarid agentlari o‘rtasida to‘g‘ridan-to‘g‘ri muloqot o‘rnatuvchi, avtomatlashtir" },
  { t: "Anthropic Claude Opus 5.5 Modelini Taqdim Etdi", u: "yangiliklar/anthropic-claude-opus-5-5-2026/", k: "anthropic claude opus 5.5 modelini taqdim etdi global ai tadqiqot anthropic anthropic claude opus 5.5 modelini chiqardi — narx 40% arzonlashdi, kod yozish va kompyuterdan foyda" },
  { t: "Cisco Talos Ilk Avtonom AI Malware'ni Aniqladi", u: "yangiliklar/cisco-talos-closedquorum-ai-malware-2026/", k: "cisco talos ilk avtonom ai malware'ni aniqladi ai xavfsizligi cisco talos cisco talos closedquorum nomli zararli dasturni aniqladi — u keyingi qadamni tanlash uchun to'rt xil" },
  { t: "BMT: Avtonom AI Agentlar Xavfsizligi Bo‘yicha Ogohlantirish", u: "yangiliklar/un-ai-agents-warning/", k: "bmt: avtonom ai agentlar xavfsizligi bo‘yicha ogohlantirish dunyo texnologiya un independent scientific panel on ai bmt qoshidagi mustaqil xalqaro ilmiy panel avtonom agentlarning tashqi tizimlarga ulanishi va kiberx" },
  { t: "Tadqiqot: LLM Modellar Bank Skoringida Xatoga Yo‘l Qo‘ymoqda", u: "yangiliklar/spot-ai-finance-risk/", k: "tadqiqot: llm modellar bank skoringida xatoga yo‘l qo‘ymoqda uzbekistan o‘zbekiston fintex spot.uz tahliliy nashri o‘tkazilgan tahlillar ommabop sun’iy intellekt modellari moliyaviy va buxgalteriya savollariga javob" },
  { t: "O‘zbekistonda Qishloq Xo‘jaligi Uchun 'Yashil AI' Moduli Ishga Tushmoqda", u: "yangiliklar/spot-green-ai-uzbekistan/", k: "o‘zbekistonda qishloq xo‘jaligi uchun 'yashil ai' moduli ishga tushmoqda uzbekistan o‘zbekiston biznes spot.uz ekologiya & texnologiya tuproq sifati, iqlim ma’lumotlari va suv resurslarini tahlil qiluvchi yangi milliy sun’iy intellekt " },
  { t: "OpenAI Fundamental Fan Uchun Matematika Maslahat Guruhini Tuzdi", u: "yangiliklar/openai-math-advisory-group/", k: "openai fundamental fan uchun matematika maslahat guruhini tuzdi ilm-fan dunyo techcrunch science & ai openai fundamental fanning qiyin masalalarini hal qilish va yangi gipotezalarni formal tekshirish uc" },
  { t: "MIT: AI Pashsha O‘lchamidagi Mikrorobotlar Tezligini 447% ga Oshirdi", u: "yangiliklar/mit-insect-flying-robots/", k: "mit: ai pashsha o‘lchamidagi mikrorobotlar tezligini 447% ga oshirdi robototexnika dunyo sciencedaily / mit research mit muhandislari neyrotarmoqlar asosida aerodinamik qanot qoqish modelini qayta hisoblab, mikroskopi" },
  { t: "Telegram Mini Apps va AI: O‘zbekistonda B2B Savdo To‘lqini", u: "yangiliklar/telegram-ai-apps/", k: "telegram mini apps va ai: o‘zbekistonda b2b savdo to‘lqini uzbekistan o‘zbekiston tijorat telegram developers documentation mijoz messenjerdan chiqmasdan ai orqali tovar tanlaydi, shaxsiy tavsiya oladi va payme/click orqali " },
  { t: "OpenAI Modellari Xatolarini Yashirish Uchun Xatlar Qoldirgani Aniqlindi", u: "yangiliklar/openai-caught-leaving-notes-to-successors/", k: "openai modellari xatolarini yashirish uchun xatlar qoldirgani aniqlindi dunyo texnologiya techcrunch (rebecca bellan) tadqiqotchilar gpt-5.6 sol va astra oilasidagi modellar xatolarni insonlardan yashirish va mustaqill" },
  { t: "Gartner: 2026-Yilda Global AI Xarajatlari $2.7 Trillionga Yetadi", u: "yangiliklar/gartner-ai-spending-2026/", k: "gartner: 2026-yilda global ai xarajatlari $2.7 trillionga yetadi dunyo biznes gartner research newsroom tadqiqot agentik tizimlar va hisoblash infratuzilmasiga investitsiyalar o‘tgan yilga nisbatan qariyb" },
  { t: "DeepMind Tadqiqoti: AI Olimlarga Haftasiga 7 Soat Tejamoqda", u: "yangiliklar/google-ai-verification-tax/", k: "deepmind tadqiqoti: ai olimlarga haftasiga 7 soat tejamoqda ilm-fan dunyo google deepmind / mit futuretech google deepmind va mit futuretech 3,500 dan ortiq tadqiqotchi ishtirokida o‘tkazilgan tahlilni e’lon" },
  { t: "OpenAI GPT-6 Astra Modelini Rasman Taqdim Etdi", u: "yangiliklar/openai-gpt6-astra/", k: "openai gpt-6 astra modelini rasman taqdim etdi dunyo texnologiya openai research mantiqiy xulosalash zanjiri (deep reasoning), doimiy korporativ xotira va kompyuterni bevosita boshq" },
  { t: "GPT-6 Astra: OpenAI Kompyuterni Boshqaruvchi Model Chiqardi", u: "yangiliklar/gpt-6-astra-openai-computer-use-2026/", k: "gpt-6 astra: openai kompyuterni boshqaruvchi model chiqardi global ai tadqiqot openai openai gpt-6 astra modelini taqdim etdi — u kompyuterni mustaqil boshqara oladi. tezlik va xavfsizli" },
  { t: "Google Gemini 3.8 Flash Modellarini E’lon Qildi", u: "yangiliklar/google-gemini-38-flash/", k: "google gemini 3.8 flash modellarini e’lon qildi google cloud ai google official blog 1 million tokenlik kontekst, dasturchilar tomonidan boshqariluvchi tafakkur chuqurligi va kirish tok" },
  { t: "Anthropic Claude Fable 5.1 Modelini Chiqardi", u: "yangiliklar/claude-fable-51/", k: "anthropic claude fable 5.1 modelini chiqardi dunyo texnologiya anthropic platform documentation anthropic agentik ish jarayonlari uchun prompt kesh o‘qish narxini 75% ga arzonlashtirdi va korxonal" },
  
  // Hikoyalar
  { t: "Mohirdev va Muxlisa AI: O'zbek tilidagi nutqni anglash tarixi", u: "hikoyalar.html", k: "muxlisa mohirdev anvar narzulla nutq stt tts o'zbek tili" },
  { t: "Dastyor AI: O'zbekiston soliq va buxgalteriya qonunchiligi bo'yicha AI yordamchi", u: "hikoyalar.html", k: "dastyor soliq buxgalteriya hisob qonun fintex" },
  { t: "Toshkentlik distribyutor AI savdo assistenti orqali sotuvni 35% ga qanday oshirdi?", u: "hikoyalar.html", k: "b2b distribyutsiya savdo bot crm keys tajriba" },
  
  // Vositalar
  { t: "Gamma AI — Taqdimot va slaydlar uchun 1-raqamli AI vosita", u: "vosita.html?id=gamma", k: "gamma prezentatsiya slayd ppt taqdimot dizayn" },
  { t: "MindStudio — Kodsiz shaxsiy AI agentlar va botlar yaratish", u: "vosita.html?id=mindstudio", k: "mindstudio ai agent workflow bot no-code ilova" },
  { t: "Seamless.ai — B2B mijozlar va rahbarlarning real-time kontaktlari", u: "vosita.html?id=seamless", k: "seamless b2b kontakt telefon email lead qidiruv" },
  { t: "Descript — Videoni Word matnidek oson montaj qiling", u: "vosita.html?id=descript", k: "descript video montaj reels podcast studio sound ovoz" },
  { t: "Apollo.io — 275M+ B2B korporativ kontaktlar va eksport mijozlar", u: "vosita.html?id=apollo", k: "apollo b2b lead email xarid eksport mijoz bazasi" },
  { t: "Tahrirchi AI — O‘zbek tilida xatosiz va professional matn tahriri", u: "vosita.html?id=maya", k: "maya o'zbekiston sun'iy intellekt tts stt o'zbek tili" },
  { t: "UzbekVoice AI (Mohirdev) — O‘zbekcha nutqni matnga va matnni ovozga aylantirish", u: "vosita.html?id=muxlisa", k: "muxlisa mohirdev nutq stt tts ovoz o'zbek tili" },
  { t: "Manychat — Instagram Direct va Telegram avtomatlashtirilgan sotuv", u: "vosita.html?id=manychat", k: "manychat instagram direct telegram chatbot sotuv bot avto dm" },
  { t: "Lemlist — AI orqali shaxsiylashtirilgan B2B email outreach", u: "vosita.html?id=lemlist", k: "lemlist email outreach sovuq xatlar sotuv lemwarm" },
  { t: "MeetGeek — Uchrashuvlarni yozib olish va 1 daqiqada bayonnoma tuzish", u: "vosita.html?id=meetgeek", k: "meetgeek uchrashuv zoom google meet bayonnoma action items" },
  { t: "Instantly — Katta hajmdagi B2B sovuq email kampaniyalarini boshqarish", u: "vosita.html?id=instantly", k: "instantly mass email warming lead gen b2b outreach" },
  { t: "Lindy — Kundalik ishlarni bajaruvchi avtonom AI shaxsiy yordamchi", u: "vosita.html?id=lindy", k: "lindy shaxsiy kotib assistent taqvim uchrashuv pochta" },
  { t: "AdCreative.ai — Konversiyasi yuqori reklama bannerlari va matnlar", u: "vosita.html?id=adcreative", k: "adcreative reklama banner dizayn target instagram meta" },
  { t: "Beautiful.ai — Taqdimot va slaydlar uchun intellektual dizayn", u: "vosita.html?id=beautifulai", k: "beautiful ai taqdimot slayd dizayn ppt prezintatsiya" },
  { t: "Calilio — AI bulutli telefoniya va qo‘ng‘iroqlar tahlili", u: "vosita.html?id=calilio", k: "calilio telefoniya voip raqam qongiroq audit xalqaro" },
  { t: "Uzum AI Copilot — Marketpleys sotuvchilari uchun tovar tavsiflari va SEO", u: "vosita.html?id=uzum", k: "uzum marketpleys e-commerce copilot tavsif kartochka" },
  { t: "Billz AI — Do'konlar va savdo tarmoqlari uchun intellektual tahlil", u: "vosita.html?id=billz", k: "billz kassa savdo riteyl do'kon inventar tahlil" },
  { t: "Dastyor AI — O'zbekiston soliq va buxgalteriya qonunchiligi bo'yicha AI yordamchi", u: "vosita.html?id=dastyor", k: "dastyor soliq buxgalteriya hisob qonun fintex" },
  { t: "Yuridik AI — O'zbekiston shartnomalari va qonunchiligini tekshirish", u: "vosita.html?id=yuridik", k: "yuridik shartnoma xatar qonun audit yurist" },
  
  // Qo'llanmalar & Amaliy Yo'riqnomalar
  { t: "Qo‘llanmalar va Amaliy Yo‘riqnomalar kutubxonasi", u: "qollanmalar.html", k: "qollanmalar barcha qo'llanmalar amaliy qo'llanma yo'riqnoma darslik" },
  { t: "Sun’iy intellektni 0 dan boshlash: Yangi boshlovchilar uchun amaliy yo‘riqnoma", u: "qollanma-noldan.html", k: "sun'iy intellekt 0 dan boshlash noldan yangi boshlovchi chatgpt claude gemini obuna" },
  { t: "Mukammal so‘rov yozish san’ati: B2B va kundalik ish uchun 5 ta oltin qoida", u: "qollanma-prompting.html", k: "mukammal prompt so'rov yozish san'ati rcfo formulasi few shot chain of thought prompting" },
  { t: "Ishda sun’iy intellektdan foydalanish: 5 ta amaliy ish oqimi", u: "qollanma-ishda.html", k: "ishda sun'iy intellekt unumdorlik excel 1c didox yig'ilish bayonnoma gamma slayd" },
  { t: "Sun’iy intellekt bilan avtomatlashtirilgan tizim qurish: No-code, API va agentlar", u: "qollanma-qurish.html", k: "tizim qurish no-code make n8n api openai agent bot avtomatlashtirish" },
  { t: "Kompaniyada sun’iy intellekt xavfsizligi va ma’lumotlar maxfiyligi: 5 qadam", u: "qollanma-xavfsizlik.html", k: "xavfsizlik korporativ maxfiylik zero data retention pii masking litsenziya policy iskandarov" },
  { t: "Ovozli sun’iy intellekt agentlarini biznesga joriy qilish: Jonli muloqot", u: "qollanma-ovoz.html", k: "ovozli sun'iy intellekt voice ai call markaz telephony sip zadarma duplex streaming gemini live iskandarov" },
  { t: "B2B Outreach tizimi: 0 dan birinchi yirik shartnomagacha katta qo‘llanma", u: "qollanma-b2b.html", k: "b2b outreach masterklass apollo lemlist amocrm shukhratbek iskandarov" },
  { t: "Kompaniya moliyasi va buxgalteriyasida sun’iy intellekt: 1C, kassa va Cash Flow", u: "qollanma-moliya.html", k: "moliya buxgalteriya 1c kassa nazorati cash flow o'zbekiston fintex tannarx debit qarzdorlik" },
  { t: "Shartnomalar auditi va yuridik xatarlarda sun’iy intellekt: Didox integratsiyasi", u: "qollanma-huquq.html", k: "shartnoma yurist huquq audit didox sud jarima forsmajor xatar tekshirish" },
  { t: "Kadrlar tanlash va HR boshqaruvida sun’iy intellekt: STAR suhbatlar va rezyume", u: "qollanma-hr.html", k: "hr kadr rezyume suhbat star intervyu baholash onboarding xodim saralash" },
  { t: "B2B kontent-marketing va Telegram kanallarda sun’iy intellekt: Savdo voronkasi", u: "qollanma-smm.html", k: "smm b2b kontent marketing telegram kanal sotuv voronka virallik auditoriya" },
  { t: "Sun’iy intellekt bilan to‘g‘ri ishlash: Birinchi so‘rovdan natijagacha", u: "qollanma.html", k: "sun'iy intellekt prompt chatgpt claude boshlangich yo'riqnoma" },
  { t: "Prompt Ustaxonasi: Interaktiv prompt konstruktori va B2B andozalar", u: "prompt-ustaxonasi.html", k: "prompt ustaxonasi generator konstruktor andoza chatgpt claude gemini b2b so'rov shablon" }
];

// Apostrophe & Diacritic Normalization for Uzbek Search (T20)
function normalizeUzbek(str) {
  if (!str) return "";
  return str
    .toLowerCase()
    .replace(/[ʻʼ‘’'`]/g, "'")
    .trim();
}

function stripUzApostrophe(str) {
  return normalizeUzbek(str).replace(/'/g, "");
}

searchInput?.addEventListener("input", (e) => {
  const rawQ = e.target.value.trim();
  if (!searchResultsBox) return;
  if (!rawQ) {
    searchResultsBox.innerHTML = "";
    return;
  }
  const normQ = normalizeUzbek(rawQ);
  const strippedQ = stripUzApostrophe(rawQ);

  const results = searchIndex.filter((item) => {
    const rawTarget = item.t + " " + item.k;
    const normTarget = normalizeUzbek(rawTarget);
    const strippedTarget = stripUzApostrophe(rawTarget);
    return normTarget.includes(normQ) || strippedTarget.includes(strippedQ);
  });
  if (results.length > 0) {
    searchResultsBox.innerHTML = results
      .map(
        (x) =>
          `<a class="search-result" href="${x.u}"><span>${x.t}</span><span style="color:var(--green)">→</span></a>`
      )
      .join("");
  } else {
    searchResultsBox.innerHTML =
      '<div class="search-empty" style="padding:16px; color:var(--muted); text-align:center;">Hech narsa topilmadi. Boshqa so‘z bilan qidiring.</div>';
  }
});

// Category & Audience Filtering for Grid Pages
$$(".filter").forEach((btn) => {
  btn.addEventListener("click", () => {
    const filterValue = (btn.dataset.filter || "all").toLowerCase();
    $$(".filter").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    let visibleCount = 0;
    $$(".filter-card").forEach((card) => {
      const cardCat = (card.dataset.cat || "").toLowerCase();
      const cardAud = (card.dataset.audience || "").toLowerCase();
      const combined = cardCat + " " + cardAud;

      let isMatch = false;
      if (filterValue === "all") {
        isMatch = true;
      } else if (filterValue === "uzbekistan" || filterValue === "o‘zbekiston") {
        isMatch = combined.includes("uzbekistan") || combined.includes("o‘zbekiston");
      } else {
        isMatch = combined.includes(filterValue);
      }

      card.style.display = isMatch ? "flex" : "none";
      if (isMatch) visibleCount++;
    });

    // Section-level awareness for Vositalar page
    const uzSec = document.getElementById("section-uzbekistan");
    const glSec = document.getElementById("section-global");
    if (uzSec && glSec) {
      if (filterValue === "uzbekistan") {
        uzSec.style.display = "block";
        glSec.style.display = "none";
      } else if (filterValue === "global") {
        uzSec.style.display = "none";
        glSec.style.display = "block";
      } else {
        uzSec.style.display = "block";
        glSec.style.display = "block";
      }
    }

    const emptyMsg = $(".empty");
    if (emptyMsg) {
      emptyMsg.style.display = visibleCount === 0 ? "block" : "none";
    }
  });
});

// URL Parameter filtering support (T5: e.g. yangiliklar.html?kategoriya=biznes)
try {
  const urlParams = new URLSearchParams(window.location.search);
  const rawParam = urlParams.get("kategoriya") || urlParams.get("filter") || urlParams.get("cat");
  if (rawParam) {
    const targetFilter = rawParam.toLowerCase().trim();
    const filterMap = {
      "biznes": "biznes",
      "talim": "mutaxassislar",
      "ta'lim": "mutaxassislar",
      "ta’lim": "mutaxassislar",
      "davlat": "biznes",
      "startap": "biznes",
      "startaplar": "biznes",
      "uzbekistan": "uzbekistan",
      "o'zbekiston": "uzbekistan",
      "ozbekiston": "uzbekistan",
      "o‘zbekiston": "uzbekistan",
      "dunyo": "dunyo",
      "global": "dunyo",
      "qollanma": "qollanma",
      "qo'llanma": "qollanma",
      "qollanmalar": "qollanma",
      "prompt": "qollanma",
      "promptlar": "qollanma",
      "marketing": "biznes",
      "mutaxassislar": "mutaxassislar"
    };
    const mapped = filterMap[targetFilter] || targetFilter;
    const matchingBtn = document.querySelector(`.filter[data-filter="${mapped}"]`);
    if (matchingBtn) {
      matchingBtn.click();
    }
  }
} catch (e) {
  console.warn("Category filter init error", e);
}

// Mobile Hamburger Nav & Backdrop Drawer
let navBackdrop = $(".nav-backdrop");
if (!navBackdrop) {
  navBackdrop = document.createElement("div");
  navBackdrop.className = "nav-backdrop";
  document.body.appendChild(navBackdrop);
}

function toggleMobileNav(force) {
  const isOpen = force !== undefined ? force : !document.body.classList.contains("nav-open");
  document.body.classList.toggle("nav-open", isOpen);
}

const hambBtn = $("#hamb");
hambBtn?.addEventListener("click", (e) => {
  e.stopPropagation();
  toggleMobileNav();
});

navBackdrop.addEventListener("click", () => toggleMobileNav(false));

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && document.body.classList.contains("nav-open")) {
    toggleMobileNav(false);
  }
});

// Mobile Bottom Bar handlers
const bottomSearchBtn = $("#bottomSearchBtn");
bottomSearchBtn?.addEventListener("click", (e) => {
  e.preventDefault();
  toggleMobileNav(false);
  openSearch();
});

const bottomMenuBtn = $("#bottomMenuBtn");
bottomMenuBtn?.addEventListener("click", (e) => {
  e.preventDefault();
  toggleMobileNav();
});

// Reading Progress Bar (Top of screen)
const progressBar = document.createElement("div");
progressBar.className = "reading-progress-bar";
document.body.prepend(progressBar);

window.addEventListener("scroll", () => {
  const total = document.documentElement.scrollHeight - window.innerHeight;
  if (total > 200) {
    const progress = Math.min(100, Math.max(0, (window.scrollY / total) * 100));
    progressBar.style.width = progress + "%";
  } else {
    progressBar.style.width = "0%";
  }
}, { passive: true });

// Auto-highlight active link in Mobile Bottom Bar
try {
  const curPage = window.location.pathname.split("/").pop() || "index.html";
  $$(".mobile-bottom-bar a").forEach(link => {
    const href = link.getAttribute("href");
    if (href === curPage || (curPage === "index.html" && href === "yangiliklar.html") || (curPage === "" && href === "yangiliklar.html")) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
} catch (_) {}


