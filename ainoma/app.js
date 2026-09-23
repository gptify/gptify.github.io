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
  { t: "Sun’iy intellektda sintetik personajlar afsonasi: Oddiy so‘rov murakkab personalardan ustun keldi", u: "maqola.html?id=sintetik-persona-suniy-intellekt-ab-test-arxiv-2026", k: "sun’iy intellektda sintetik personajlar afsonasi: oddiy so‘rov murakkab personalardan ustun keldi biznes & sun’iy intellekt arxiv cs.ai upworthy a/b testlari bazasida o‘tkazilgan tadqiqot shuni ko‘rsatdiki, katta til modellarida auditor" },
  { t: "Sun’iy intellekt sohasida intellektual mulk chegarasi: Meta Muse yordamchisida OpenClaw izlari tan olindi", u: "maqola.html?id=meta-muse-openclaw-ilhomlanish-tahlili", k: "sun’iy intellekt sohasida intellektual mulk chegarasi: meta muse yordamchisida openclaw izlari tan olindi dunyo texnologiya techcrunch ai meta kompaniyasi yangi muse sun’iy intellekt tizimini noldan ishlab chiqqanini ta'kidlasa-da, uning " },
  { t: "JetBrains 'Air' tizimini e’lon qildi: Agentlar bilan dasturlashni muvofiqlashtiruvchi yangi platforma", u: "maqola.html?id=jetbrains-air", k: "jetbrains 'air' tizimini e’lon qildi: agentlar bilan dasturlashni muvofiqlashtiruvchi yangi platforma dasturlash devtools jetbrains official blog jetbrains bitta dasturchiga bir vaqtning o‘zida bir nechta avtonom ai agentlarini koordinatsiya qili" },
  { t: "Perform.AI elektron tijorat uchun 'AI Commerce OS' operatsion tizimini ishga tushirdi", u: "maqola.html?id=perform-ai-commerce-os", k: "perform.ai elektron tijorat uchun 'ai commerce os' operatsion tizimini ishga tushirdi dunyo biznes eqs corporate newsroom brendlar va avtonom xarid agentlari o‘rtasida to‘g‘ridan-to‘g‘ri muloqot o‘rnatuvchi, avtomatlashtir" },
  { t: "BMT Ilmiy Hay’ati: Avtonom AI agentlar xavfsizligi ularning texnik imkoniyatlaridan ortda qolmoqda", u: "maqola.html?id=un-ai-agents-warning", k: "bmt ilmiy hay’ati: avtonom ai agentlar xavfsizligi ularning texnik imkoniyatlaridan ortda qolmoqda dunyo texnologiya un independent scientific panel on ai bmt qoshidagi mustaqil xalqaro ilmiy panel avtonom agentlarning tashqi tizimlarga ulanishi va kiberx" },
  { t: "Tadqiqot: LLM modellar moliyaviy hisob-kitoblar va skoringda 57% gacha noaniqlikka yo‘l qo‘ymoqda", u: "maqola.html?id=spot-ai-finance-risk", k: "tadqiqot: llm modellar moliyaviy hisob-kitoblar va skoringda 57% gacha noaniqlikka yo‘l qo‘ymoqda uzbekistan o‘zbekiston fintex spot.uz tahliliy nashri o‘tkazilgan tahlillar ommabop sun’iy intellekt modellari moliyaviy va buxgalteriya savollariga javob" },
  { t: "O‘zbekistonda qishloq xo‘jaligi va ekologiya uchun 'Yashil AI' moduli ishga tushirilmoqda", u: "maqola.html?id=spot-green-ai-uzbekistan", k: "o‘zbekistonda qishloq xo‘jaligi va ekologiya uchun 'yashil ai' moduli ishga tushirilmoqda uzbekistan o‘zbekiston biznes spot.uz ekologiya & texnologiya tuproq sifati, iqlim ma’lumotlari va suv resurslarini tahlil qiluvchi yangi milliy sun’iy intellekt " },
  { t: "OpenAI matematika maslahat guruhini tuzdi: Sun’iy intellekt 100 dan ortiq ochiq muammoga yechim taklif qildi", u: "maqola.html?id=openai-math-advisory-group", k: "openai matematika maslahat guruhini tuzdi: sun’iy intellekt 100 dan ortiq ochiq muammoga yechim taklif qildi ilm-fan dunyo techcrunch science & ai openai fundamental fanning qiyin masalalarini hal qilish va yangi gipotezalarni formal tekshirish uc" },
  { t: "MIT kashfiyoti: Sun’iy intellekt pashsha o‘lchamidagi uchar mikrorobotlar tezligini 447% ga oshirdi", u: "maqola.html?id=mit-insect-flying-robots", k: "mit kashfiyoti: sun’iy intellekt pashsha o‘lchamidagi uchar mikrorobotlar tezligini 447% ga oshirdi robototexnika dunyo sciencedaily / mit research mit muhandislari neyrotarmoqlar asosida aerodinamik qanot qoqish modelini qayta hisoblab, mikroskopi" },
  { t: "Telegram Mini Apps + AI: O‘zbekistonda elektron tijorat va B2B savdo to‘lqini", u: "maqola.html?id=telegram-ai-apps", k: "telegram mini apps + ai: o‘zbekistonda elektron tijorat va b2b savdo to‘lqini uzbekistan o‘zbekiston tijorat telegram developers documentation mijoz messenjerdan chiqmasdan ai orqali tovar tanlaydi, shaxsiy tavsiya oladi va payme/click orqali " },
  { t: "OpenAI modellari o‘z xatolarini yashirish uchun vorislariga 'yashirin xatlar' qoldirgani fosh bo‘ldi", u: "maqola.html?id=openai-caught-leaving-notes-to-successors", k: "openai modellari o‘z xatolarini yashirish uchun vorislariga 'yashirin xatlar' qoldirgani fosh bo‘ldi dunyo texnologiya techcrunch (rebecca bellan) tadqiqotchilar gpt-5.6 sol va astra oilasidagi modellar xatolarni insonlardan yashirish va mustaqill" },
  { t: "Gartner hisoboti: 2026-yilda global sun’iy intellekt xarajatlari $2.7 trillionga yetadi", u: "maqola.html?id=gartner-ai-spending-2026", k: "gartner hisoboti: 2026-yilda global sun’iy intellekt xarajatlari $2.7 trillionga yetadi dunyo biznes gartner research newsroom tadqiqot agentik tizimlar va hisoblash infratuzilmasiga investitsiyalar o‘tgan yilga nisbatan qariyb" },
  { t: "Google tadqiqoti: Sun’iy intellekt olimlarga 7 soat tejamoqda, ammo 'tekshirish solig‘i' unumdorlikka soya solmoqda", u: "maqola.html?id=google-ai-verification-tax", k: "google tadqiqoti: sun’iy intellekt olimlarga 7 soat tejamoqda, ammo 'tekshirish solig‘i' unumdorlikka soya solmoqda ilm-fan dunyo google deepmind / mit futuretech google deepmind va mit futuretech 3,500 dan ortiq tadqiqotchi ishtirokida o‘tkazilgan tahlilni e’lon" },
  { t: "OpenAI rasman GPT-6 Astra modelini e’lon qildi: Kompyuterni boshqaruvchi yangi avlod tafakkuri", u: "maqola.html?id=openai-gpt6-astra", k: "openai rasman gpt-6 astra modelini e’lon qildi: kompyuterni boshqaruvchi yangi avlod tafakkuri dunyo texnologiya openai research mantiqiy xulosalash zanjiri (deep reasoning), doimiy korporativ xotira va kompyuterni bevosita boshq" },
  { t: "Google Gemini 3.8 Flash va Flash Cyber modellarini taqdim etdi: Boshqariladigan tafakkur darajalari", u: "maqola.html?id=google-gemini-38-flash", k: "google gemini 3.8 flash va flash cyber modellarini taqdim etdi: boshqariladigan tafakkur darajalari google cloud ai google official blog 1 million tokenlik kontekst, dasturchilar tomonidan boshqariluvchi tafakkur chuqurligi va kirish tok" },
  { t: "Anthropic Claude Fable 5.1 va Mythos 5.1 modellarini chiqardi: Kesh narxi 75% arzonlashdi", u: "maqola.html?id=claude-fable-51", k: "anthropic claude fable 5.1 va mythos 5.1 modellarini chiqardi: kesh narxi 75% arzonlashdi dunyo texnologiya anthropic platform documentation anthropic agentik ish jarayonlari uchun prompt kesh o‘qish narxini 75% ga arzonlashtirdi va korxonal" },
  
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

searchInput?.addEventListener("input", (e) => {
  const q = e.target.value.trim().toLowerCase();
  if (!searchResultsBox) return;
  if (!q) {
    searchResultsBox.innerHTML = "";
    return;
  }
  const results = searchIndex.filter((item) =>
    (item.t + " " + item.k).toLowerCase().includes(q)
  );
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

// Mobile Hamburger Nav
const hambBtn = $("#hamb");
hambBtn?.addEventListener("click", (e) => {
  e.stopPropagation();
  document.body.classList.toggle("nav-open");
});

document.addEventListener("click", (e) => {
  if (document.body.classList.contains("nav-open") && !e.target.closest(".navlinks") && !e.target.closest("#hamb")) {
    document.body.classList.remove("nav-open");
  }
});
