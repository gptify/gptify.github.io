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

  // Yangiliklar & Maqolalar
  { t: "OpenAI Deep Research va o3-mini: Ilmiy va bozor tahlili agenti", u: "maqola.html?id=openai-deep-research", k: "openai deep research o3-mini frontier tadqiqot hisobot analitika bozor" },
  { t: "Anthropic Claude Code: Terminalda ishlovchi avtonom dasturchi agent", u: "maqola.html?id=claude-code-cli", k: "claude code anthropic cli terminal dasturchi agent git repo devtools" },
  { t: "O‘zbekistonda AI uchun Regulyator Sandbox: Maxsus huquqiy rejim", u: "maqola.html?id=uz-ai-sandbox", k: "o'zbekiston ai sandbox qonunchilik regulyator it park grant gpu startap" },
  { t: "Telegram Mini Apps + AI: Elektron tijorat va B2B savdo", u: "maqola.html?id=telegram-ai-apps", k: "telegram mini apps tma ai bot elektron savdo fintex payme click b2b" },
  { t: "Google Gemini 2.5 Enterprise API: 150ms jonli audio va video oqim", u: "maqola.html?id=gemini-enterprise", k: "google gemini 2.5 enterprise api audio video multimodal real-time call center" },
  { t: "Markaziy Bank bank va fintexlarda AI skoringi qo‘llash reglamenti", u: "maqola.html?id=cbu-ai-skoring", k: "o'zbekiston markaziy bank cbu kredit skoring fintex algoritm xavfsizlik" },
  { t: "Cursor va Cognition 'Autonomous Team Lead' avtonom muhandislik rejimi", u: "maqola.html?id=cursor-teamlead", k: "cursor cognition autonomous team lead agent dasturlash kod refaktoring" },
  { t: "Apple Intelligence Markaziy Osiyo va o‘zbek tili uchun lokal imkoniyatlar", u: "maqola.html?id=apple-intelligence-uz", k: "apple intelligence siri o'zbek tili markaziy osiyo nlp" },
  { t: "IT Park va Yandex Toshkentda 1,000 mutaxassis uchun AI Engineering dasturi", u: "maqola.html?id=itpark-yandex", k: "it park yandex ai engineering toshkent grant ta'lim rag" },
  { t: "Anthropic Claude 3.7 Sonnet: Gibrid tafakkur va korporativ kodlash", u: "maqola.html?id=claude-37", k: "claude 3.7 sonnet anthropic reasoning gibrid tafakkur frontier" },
  { t: "GPT-6 Astra: Yangi model nima, nimalar o‘zgardi va undan qanday foydalanish mumkin?", u: "maqola-gpt6-astra.html", k: "gpt-6 astra gpt6 openai yangi model tafakkur reasoning frontier ai xotira agent" },
  { t: "OpenAI 'Agents API'ni e'lon qildi: 24 soat avtonom ishlaydigan AI tizimlar", u: "maqola.html?id=openai-agents", k: "openai agents api avtonom kod revops yangilik sun'iy intellekt" },
  { t: "ChatGPT Work: Kompaniya ichki ma'lumotlari uchun Data Agent", u: "maqola.html?id=data-agent", k: "chatgpt work data agent excel sql b2b hisobot" },
  { t: "IT Park va Raqamli Texnologiyalar Vazirligi AI startaplar uchun GPU grantlari ajratdi", u: "maqola.html?id=itpark-gpu-grants", k: "o'zbekiston it park gpu grant startap davlat klaster" },
  { t: "Meta WhatsApp va Instagram bizneslari uchun AI agentlarini sinovdan o'tkazmoqda", u: "maqola.html?id=meta-business-agents", k: "meta whatsapp instagram chatbot lead sotuv" },
  { t: "Toshkentda B2B kompaniyalar CRM'ga AI ovozli yordamchilarni qanday joriy qilmoqda?", u: "maqola.html?id=tashkent-crm-voice", k: "toshkent crm ovozli kotib sotuv qo'ng'iroq amocrm" },
  
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
  
  // Qo'llanmalar & Promptlar
  { t: "Prompt Ustaxonasi: Interaktiv prompt konstruktori va B2B andozalar", u: "prompt-ustaxonasi.html", k: "prompt ustaxonasi generator konstruktor andoza chatgpt claude gemini b2b" },
  { t: "Sun’iy intellektni 0 dan boshlash: Yangi boshlovchilar uchun amaliy yo‘riqnoma", u: "qollanma-noldan.html", k: "sun'iy intellekt 0 dan boshlash noldan yangi boshlovchi chatgpt claude gemini obuna" },
  { t: "Mukammal prompt yozish san’ati: B2B va kundalik ish uchun 5 ta oltin qoida", u: "qollanma-prompting.html", k: "mukammal prompt yozish san'ati rcfo formulasi few shot chain of thought prompting" },
  { t: "Ishda sun’iy intellektdan foydalanish: 5 ta amaliy ish oqimi", u: "qollanma-ishda.html", k: "ishda sun'iy intellekt unumdorlik excel 1c didox yig'ilish bayonnoma gamma slayd" },
  { t: "Sun’iy intellekt bilan avtomatlashtirilgan tizim qurish: No-code, API va agentlar", u: "qollanma-qurish.html", k: "tizim qurish no-code make n8n api openai agent bot avtomatlashtirish" },
  { t: "B2B Outreach tizimi: 0 dan birinchi yirik shartnomagacha katta qo‘llanma", u: "qollanma-b2b.html", k: "b2b outreach masterklass apollo lemlist amocrm shukhratbek iskandarov" },
  { t: "AI bilan to‘g‘ri ishlash: Birinchi promptdan natijagacha", u: "qollanma.html", k: "ai prompt chatgpt claude boshlangich yo'riqnoma" },
  { t: "B2B mijozlarga sovuq taklif yozish uchun master prompt", u: "qollanmalar.html", k: "prompt b2b taklif email outreach mijoz sotuv iskandarov" },
  { t: "Uchrashuvdan keyingi professional 'Follow-up' xati prompti", u: "qollanmalar.html", k: "follow up uchrashuv kelishuv xat sotuv b2b iskandarov" },
  { t: "Noyob Qiymat Taklifi (UVP) formulasi generatori", u: "qollanmalar.html", k: "uvp taklif marketing strategiya raqobatchi iskandarov" },
  { t: "B2B shartnomalardagi xatarlarni tekshirish prompti", u: "qollanmalar.html", k: "shartnoma yurist huquq audit jarima xatar didox" },
  { t: "Reels & Shorts uchun 30 soniyalik 'Hook' va virusli ssenariy", u: "qollanmalar.html", k: "reels tiktok shorts video hook ssenariy smm zokirova" },
  { t: "Nomzodlar uchun STAR metodologiyasi suhbat savollari", u: "qollanmalar.html", k: "hr suhbat intervyu star kompetensiya xodim rahmatova" },
  { t: "SQL so‘rovlarni 10 barobar tezlashtirish va indekslash", u: "qollanmalar.html", k: "sql baza postgresql mysql explain indeks dasturlash umarov" },
  { t: "Telegram kanal uchun 7 kunlik professional kontent-reja tuzish", u: "qollanmalar.html", k: "prompt telegram kanal post ssm kontent reja zokirova" },
  { t: "Mijozlarning narx e'tirozini yengish uchun skript generatori", u: "qollanmalar.html", k: "prompt narx e'tiroz qimmat savdo menejeri iskandarov" }
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
