/**
 * AiNoma Core Application Script
 * Features: Instant Search (Ctrl+K), Theme Switcher, Category Filters, Copy-to-Clipboard with Toast, Mobile Nav
 */

const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const root = document.documentElement;

// Theme Persistence & Logo Update
function updateLogo(theme) {
  const isDark = theme === "dark";
  $$(".brand-logo-img, .logo img").forEach(img => {
    const currentSrc = img.getAttribute("src") || "";
    // Detect prefix from current src: '../../', '../', or ''
    const match = currentSrc.match(/^(\.\.\/)+/);
    const prefix = match ? match[0] : "";
    const logoFile = isDark ? "assets/logo-dark.svg" : "assets/logo.svg";
    const targetSrc = prefix + logoFile;
    if (img.getAttribute("src") !== targetSrc) {
      img.src = targetSrc;
    }
    // Fail-safe error handler
    img.onerror = function() {
      if (!this.dataset.retry) {
        this.dataset.retry = "1";
        this.src = isDark ? "/assets/logo-dark.svg" : "/assets/logo.svg";
      }
    };
  });
}

const savedTheme = localStorage.getItem("ainoma-theme");
if (savedTheme) {
  root.dataset.theme = savedTheme;
  updateLogo(savedTheme);
} else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
  root.dataset.theme = "dark";
  updateLogo("dark");
}

// Listen for system theme changes if user hasn't explicitly chosen
if (window.matchMedia) {
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", e => {
    if (!localStorage.getItem("ainoma-theme")) {
      const next = e.matches ? "dark" : "light";
      root.dataset.theme = next;
      updateLogo(next);
    }
  });
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
  { t: "AiNoma Haqida: Missiya, tahririyat tamoyillari va B2B ekspertiza", u: "haqida.html", k: "ainoma haqida loyiha missiya gptify b2b konsalting aloqa tahririyat" },
























































































  // Yangiliklar & Maqolalar (Verifikatsiya qilingan Sentabr 2026)
  { t: "Google DeepMind AI Baholashda «Ikkiyoqlama Ko‘r-Ko‘rona» Tizimni Qo‘llamoqda", u: "yangiliklar/deepmind-double-blind-ai-evaluations/", k: "google deepmind ai baholashda «ikkiyoqlama ko‘r-ko‘rona» tizimni qo‘llamoqda modellar va texnologiya google deepmind google deepmind modellarning haqiqiy imkoniyatlarini baholashda subyektivlik va korporativ yonbosish" },
  { t: "Microsoft Copilot «Autopilot»: Kompyuterdan Uzoqda Ishlovchi Avtonom Agent", u: "yangiliklar/microsoft-copilot-autopilot-avtonom-agent-2026/", k: "microsoft copilot «autopilot»: kompyuterdan uzoqda ishlovchi avtonom agent infratuzilma va qurilmalar microsoft official blog microsoft o'zining copilot ekotizimini tubdan yangilab, 'autopilot' (scout) avtonom agentini taqdim " },
  { t: "OpenAI Xavfsizlik Rahbari David Robinson Iste’foga Chiqdi", u: "yangiliklar/openai-xavfsizlik-rahbari-david-robinson-istefoga-chiqdi-2026/", k: "openai xavfsizlik rahbari david robinson iste’foga chiqdi modellar va texnologiya the atlantic openai xavfsizlik tizimlari bo'yicha yetakchi tadqiqotchisi devid robinson the atlantic nashrida o't" },
  { t: "Anthropic Enterprise Muhandislar Uchun $100M Jamg‘arma Ajratdi", u: "yangiliklar/anthropic-enterprise-frontier-academy-100-million-dollar-2026/", k: "anthropic enterprise muhandislar uchun $100m jamg‘arma ajratdi infratuzilma va qurilmalar anthropic newsroom anthropic kompaniyasi global korxonalarda claude modellarini xavfsiz va samarali ishlab chiqarishga " },
  { t: "Google Gemini Modellarini Tariflar Bo‘yicha Qat’iy Cheklamoqda", u: "yangiliklar/google-gemini-modellarini-tariflar-boyicha-qat-iy-cheklamoqda-2026/", k: "google gemini modellarini tariflar bo‘yicha qat’iy cheklamoqda modellar va texnologiya google gemini support google 2026-yil 9-oktabrdan e'tiboran gemini ilovasida modellar mavjudligini qat'iy ta'riflarga ajra" },
  { t: "Anthropic Claude Code Mods Dasturchilar Ekotizimini Chiqardi", u: "yangiliklar/anthropic-claude-code-mods-typescript-agent-hooks-2026/", k: "anthropic claude code mods dasturchilar ekotizimini chiqardi modellar va texnologiya anthropic documentation anthropic claude code vositasi uchun typescript va javascript plaginlari tizimi bo'lgan 'claude code" },
  { t: "Google DeepMind DNK Uchun SynthID Bio Tizimini Taqdim Etdi", u: "yangiliklar/google-deepmind-synthid-bio-oqsil-suv-belgilari-2026/", k: "google deepmind dnk uchun synthid bio tizimini taqdim etdi xavfsizlik va tartibga solish google deepmind technologies google deepmind sun'iy intellekt vositasida modellashtirilgan biologik tuzilmalar va sun'iy oqsillar" },
  { t: "CoreWeave AI Agentlar Uchun Forge Platformasini Taqdim Etdi", u: "yangiliklar/coreweave-forge-ai-agentlar-yagona-platformasi-2026/", k: "coreweave ai agentlar uchun forge platformasini taqdim etdi infratuzilma va qurilmalar coreweave cloud platform yirik ai hisoblash giganti coreweave sun'iy intellekt agentlari va modellarining butun ishlab chiqar" },
  { t: "AI yordamida rezyume (CV) va motivatsion xat yozish", u: "yangiliklar/ai-bilan-rezyume-cv-yozish/", k: "ai yordamida rezyume (cv) va motivatsion xat yozish qo'llanmalar ainoma tahririyati bir xil rezyumeni har joyga yubormang. ai yordamida har bir e'longa moslashtirilgan, kuchli cv va xa" },
  { t: "Microsoft Ovozli Agentlar Uchun 3 Ta Model Chiqardi", u: "yangiliklar/microsoft-ai-ovozli-agentlar-uchun-3-model-2026/", k: "microsoft ovozli agentlar uchun 3 ta model chiqardi modellar va texnologiya microsoft tech community microsoft o'zining ilk real vaqtda audio transkripsiya qiluvchi mai-transcribe-2-streaming hamda nut" },
  { t: "OpenAI Xavfsizlik Qoidalarini Buzgan Xodimlarni Bo'shatdi", u: "yangiliklar/openai-xavfsizlik-qoidasi-buzilishi-3-xodim-2026/", k: "openai xavfsizlik qoidalarini buzgan xodimlarni bo'shatdi xavfsizlik va tartibga solish openai community & policy notices openai ichki maxfiy ma'lumotlar bilan noto'g'ri muomala qilgani sababli uch nafar tadqiqotchini ishd" },
  { t: "Anthropic 2 Trillion Dollarlik IPO Tayyorgarligini Boshladi", u: "yangiliklar/anthropic-2-trillion-dollar-ipo-va-chiplar-kelishuvi-2026/", k: "anthropic 2 trillion dollarlik ipo tayyorgarligini boshladi bozor va investitsiyalar anthropic corporate newsroom claude modelini ishlab chiqqan anthropic joriy yilning noyabr oyida o'z aksiyalarini fond birjasiga " },
  { t: "Sun'iy intellekt bilan pul ishlash: 7 real yo'l (2026)", u: "yangiliklar/ai-bilan-pul-ishlash-7-yol/", k: "sun'iy intellekt bilan pul ishlash: 7 real yo'l (2026) qo'llanmalar rasmiy manba ai 'sizni ishdan qoldiradi' emas, to'g'ri ishlatilsa qo'shimcha daromad manbaiga aylanadi. 7 ta real" },
  { t: "Moonshot AI Kimi Modellarida Katta Xavfsizlik Xatosi", u: "yangiliklar/moonshot-ai-kimi-biologik-qurol-xavfsizlik-buzilishi-2026/", k: "moonshot ai kimi modellarida katta xavfsizlik xatosi xavfsizlik va tartibga solish mindgard ai security research mindgard xavfsizlik firmasi tadqiqotchilari moonshot ai tomonidan ishlab chiqilgan kimi k2.6 va k3 s" },
  { t: "Google DeepMind \"Gemini 4 Argon\" Modelini Taqdim Etdi", u: "yangiliklar/google-deepmind-gemini-4-argon-1m-output-2026/", k: "google deepmind \"gemini 4 argon\" modelini taqdim etdi modellar va texnologiya google deepmind google deepmind uzoq davom etuvchi dasturlash, kiber-xavfsizlik auditi va katta kod bazalarini migra" },
  { t: "FTC OpenAI va Anthropic Ustidan Rasmiy Tekshiruv Boshladi", u: "yangiliklar/ftc-openai-anthropic-avtonom-agentlar-tekshiruvi-2026/", k: "ftc openai va anthropic ustidan rasmiy tekshiruv boshladi ai siyosati va tartibot federal trade commission (ftc) aqsh federal savdo komissiyasi (ftc) avtonom ai agentlar inson nazoratidan chiqib, tashqi serverlar " },
  { t: "CoreWeave AI Agentlar Uchun NVIDIA Vera Protsessorini Ishga Tushirdi", u: "yangiliklar/coreweave-nvidia-vera-cpu-ai-agentlar-2026/", k: "coreweave ai agentlar uchun nvidia vera protsessorini ishga tushirdi infratuzilma va qurilmalar nvidia newsroom san-fransiskodagi konferensiyada coreweave avtonom ai agentlar siklini boshqarish va xavfsiz sandbox" },
  { t: "Oq Uyda Super-Intellekt Xavfsizlik Pakti Imzolandi", u: "yangiliklar/oq-uy-trump-ai-gigantlari-xavfsizlik-pakti-2026/", k: "oq uyda super-intellekt xavfsizlik pakti imzolandi ai siyosati va tartibot reuters technology vashingtondagi sammitda openai, google, meta, anthropic, nvidia va xai rahbarlari super-intellekt xa" },
  { t: "AI Kod Agentlari Sabab 13,000 Maxfiy Hujjat Sizib Chiqdi", u: "yangiliklar/ai-kod-agentlari-xavfsizlik-xatosi-github-13000-hujjat-2026/", k: "ai kod agentlari sabab 13,000 maxfiy hujjat sizib chiqdi kiber-xavfsizlik va muhandislik reuters technology dasturchilar tomonidan qo‘llanilayotgan avtonom ai agentlar loyiha katalogidagi maxfiy fayllarni och" },
  { t: "Sam Altman: OpenAI Xavfsizlik Kafolatlanmaguncha Birjaga Chiqmaydi", u: "yangiliklar/sam-altman-openai-xavfsizlik-va-ipo-2026/", k: "sam altman: openai xavfsizlik kafolatlanmaguncha birjaga chiqmaydi ai siyosati va strategiya the verge openai rahbari sam altman devday 2026 anjumanidan so‘ng o‘tkazilgan matbuot brifingida kompaniya uol" },
  { t: "AMD Li Fey-Feyning World Labs Startapini Sotib Oldi", u: "yangiliklar/amd-world-labs-ai-8-milliard-dollar-xarid-2026/", k: "amd li fey-feyning world labs startapini sotib oldi investitsiya va biznes amd investor relations yarimo‘tkazgichlar giganti amd sun’iy intellekt sohasining yetakchi tadqiqotchisi li fey-fey (fei-fe" },
  { t: "Talabalar uchun sun'iy intellekt: referat va taqdimotni to'g'ri tayyorlash", u: "yangiliklar/talabalar-uchun-sunny-intellekt/", k: "talabalar uchun sun'iy intellekt: referat va taqdimotni to'g'ri tayyorlash qo'llanmalar ainoma tahririyati ai sizning o'rningizga o'ylamaydi — u tadqiqotni tezlashtiradi. referat va taqdimotni to'g'ri, halol" },
  { t: "OpenAI DevDay 2026: GPT-6.1 Sol va Dots Chiqdi", u: "yangiliklar/openai-devday-2026-gpt-6-1-sol-dots-ofis/", k: "openai devday 2026: gpt-6.1 sol va dots chiqdi modellar va texnologiya openai san-fransiskoda o‘tgan openai devday 2026 anjumanida kompaniya kutilmaganda gpt-6.1 sol modelini e’l" },
  { t: "OpenAI GPT-6.1 Astra Relizini Xavfsizlik Sabab Bekor Qildi", u: "yangiliklar/openai-gpt61-astra-reliz-bekor-qilindi-2026/", k: "openai gpt-6.1 astra relizini xavfsizlik sabab bekor qildi ai xavfsizligi the guardian openai ichki xavfsizlik sinovlarida gpt-6.1 astra modeli foydalanuvchi ruxsatisiz tashqi vositalarda" },
  { t: "Yevropa Tajribasi: Sun‘iy Intellektni Biznesda Qo‘llashning 4 Darsi", u: "yangiliklar/yevropa-tajribasi-ai-biznesda-qollash-2026/", k: "yevropa tajribasi: sun‘iy intellektni biznesda qo‘llashning 4 darsi qo'llanmalar  yevropa ittifoqida eu ai act me’yorlari va qimmat xatolar ortidan korxonalar shov-shuvli botlardan v" },
  { t: "NVIDIA Avtonom Agentlarni Nazorat Qiluvchi OpenShell Platformasini Chiqardi", u: "yangiliklar/nvidia-openshell-agent-xavfsizlik-platformasi-2026/", k: "nvidia avtonom agentlarni nazorat qiluvchi openshell platformasini chiqardi muhandislik va agentlar nvidia newsroom nvidia sun‘iy intellekt agentlarining kutilmagan harakatlariga qarshi kurashish uchun openshell ochi" },
  { t: "Samsung AI Data-Markazlar Infratuzilmasiga 1 Milliard Dollar Ajratdi", u: "yangiliklar/samsung-helix-1-milliard-dollar-ai-infratuzilma-2026/", k: "samsung ai data-markazlar infratuzilmasiga 1 milliard dollar ajratdi investitsiya va biznes morningstar samsung kkr va nvidia bilan hamkorlikda sun‘iy intellekt hisoblash markazlarini toza energiya bilan " },
  { t: "Britaniya Parlamenti OpenAI va Meta Rahbarlarini So‘roqqa Chaqirdi", u: "yangiliklar/britaniya-parlamenti-ai-rahbarlarini-soroqqa-chaqirdi-2026/", k: "britaniya parlamenti openai va meta rahbarlarini so‘roqqa chaqirdi ai xavfsizligi uk parliament buyuk britaniya parlamenti avtonom agentlar va sun’iy intellekt xatarlari yuzasidan yetakchi texnolo" },
  { t: "OpenAI, Anthropic va Google SAFA Standartlar Tashkilotini Tuzdi", u: "yangiliklar/openai-anthropic-google-safa-standartlar-2026/", k: "openai, anthropic va google safa standartlar tashkilotini tuzdi global ai siyosati the street dunyodagi eng yirik sun’iy intellekt laboratoriyalari avtonom agentlar xavfsizligini ta’minlash va m" },
  { t: "Nvidia va Google 100 Gigavattlik Energiya Alyansini Tuzdi", u: "yangiliklar/nvidia-google-emerald-100-gigavatt-energiya-alyansi-2026/", k: "nvidia va google 100 gigavattlik energiya alyansini tuzdi infrastruktura va energetika siliconangle tech sun‘iy intellekt hisoblash markazlarining elektr tarmog‘iga bosimini kamaytirish maqsadida nvidia, g" },
  { t: "Anthropic Rahbari Oq Uyda Trump Bilan Muloqot O‘tkazdi", u: "yangiliklar/anthropic-dario-amodei-oq-uy-trump-uchrashuv-2026/", k: "anthropic rahbari oq uyda trump bilan muloqot o‘tkazdi ai siyosati va strategiya the times of india anthropic bosh ijrochi direktori dario amodei vashingtonda donald trump bilan yakka tartibda uchrash" },
  { t: "Avstraliya OpenAI va Anthropic Rahbarlarini Medicare Buzilishi Bo'yicha Senatga", u: "yangiliklar/avstraliya-openai-anthropic-medicare-sorov-2026/", k: "avstraliya openai va anthropic rahbarlarini medicare buzilishi bo'yicha senatga ai xavfsizligi al jazeera avstraliya bosh vaziri openai agentining medicare portaliga ruxsatsiz kirib olganini oshkor qilgach," },
  { t: "ChatGPT, Claude va Gemini: Qaysi Model Sizga Mos?", u: "yangiliklar/chatgpt-claude-gemini-solishtirish/", k: "chatgpt, claude va gemini: qaysi model sizga mos? qo'llanmalar  uchta yetakchi ai orasida adashib qoldingizmi? har birining kuchli tomoni va qaysi vazifaga qaysi bi" },
  { t: "AQSh va Xitoy Super-Intellekt Dialogini Yo‘lga Qo‘ydi", u: "yangiliklar/us-china-super-intelligence-dialog-2026/", k: "aqsh va xitoy super-intellekt dialogini yo‘lga qo‘ydi global ai siyosati axios tramp va si sinpin ai xavflari va imkoniyatlarini muhokama qilish uchun rasmiy 'super-intellekt dial" },
  { t: "Claude Nazariy Fizikada Rekord O‘rnatdi: 9-Halqali Amplituda", u: "yangiliklar/claude-9-loop-fizika-rekordi-2026/", k: "claude nazariy fizikada rekord o‘rnatdi: 9-halqali amplituda global ai tadqiqot unite.ai anthropic'ning claude modeli olti zarrachali sochilish amplitudasini 9-halqa darajasida hisoblab, 20" },
  { t: "OpenAI Agentlari Sandbox'dan Qochdi: O‘qitish Jarayoni To‘xtatildi", u: "yangiliklar/openai-sandbox-dns-toxtatish-2026/", k: "openai agentlari sandbox'dan qochdi: o‘qitish jarayoni to‘xtatildi ai xavfsizligi fortune openai test qilinayotgan ai agentining dns-so'rovlar orqali izolyatsiya (sandbox)dan chiqib ketganin" },
  { t: "Apellyatsiya Sudi: Pentagon Anthropic'ni Qora Ro‘yxatga Qo‘ydi", u: "yangiliklar/anthropic-pentagon-blacklist-appeals-court-2026/", k: "apellyatsiya sudi: pentagon anthropic'ni qora ro‘yxatga qo‘ydi global sun‘iy intellekt siyosati abc17news (cnn newsource orqali) aqsh federal apellyatsiya sudi (dc circuit) pentagonning anthropic'ni 'yetkazib berish zanjiri xavfi" },
  { t: "Amir Temur Sun‘iy Intellekt Filmi Venetsiyada Mukofotlandi", u: "yangiliklar/amir-temur-ai-film-mukofot-2026/", k: "amir temur sun‘iy intellekt filmi venetsiyada mukofotlandi o‘zbekiston sun‘iy intellekt siyosati kun.uz sun'iy intellekt yordamida ishlangan 'amir temur: bolalik davri' filmi venetsiyadagi nufuzli 'ai fil" },
  { t: "OpenAI: Sun‘iy Intellekt Agentlari ChatGPT Rasmlarini Tarqatib Yubordi", u: "yangiliklar/openai-agentlar-rasm-sizib-chiqishi-2026/", k: "openai: sun‘iy intellekt agentlari chatgpt rasmlarini tarqatib yubordi sun‘iy intellekt xavfsizligi axios openai o'z sun‘iy intellekt agentlarining kamida 53 ta foydalanuvchi rasmini tashqi saytlarga 'yashi" },
  { t: "Meta O‘zining Muse Sun‘iy Intellekt Agentiga Maskot Beradi", u: "yangiliklar/meta-muse-jollybot-maskot-2026/", k: "meta o‘zining muse sun‘iy intellekt agentiga maskot beradi global sun‘iy intellekt tadqiqot axios meta o'zining shaxsiy sun‘iy intellekt agenti muse uchun 'jollybot' nomli yumshoq, yonoqlari qizil m" },
  { t: "Google 1-Oktabrda Sun‘iy Intellekt Chiplarini Orbitaga Uchiradi", u: "yangiliklar/google-suncatcher-ai-kosmos-2026/", k: "google 1-oktabrda sun‘iy intellekt chiplarini orbitaga uchiradi global sun‘iy intellekt tadqiqot gizmodo google spacex bilan hamkorlikda to'rtta trillium tpu chipini kosmosga uchirmoqchi — maqsad, ai hisob" },
  { t: "GPT-6 Astra 83 Yillik Enigma Shifrini Ochdi", u: "yangiliklar/gpt-6-astra-enigma-shifr-2026/", k: "gpt-6 astra 83 yillik enigma shifrini ochdi global sun‘iy intellekt tadqiqot the decoder openai'ning gpt-6 astra 'extra high' modeli 1941-yilgi, 2005-yildan beri yechilmay kelayotgan nemis " },
  { t: "Sun‘iy Intellekt Agentlari Xavfsizligi: Kompyuter Uchun 5 Qoida", u: "yangiliklar/ai-agent-kompyuter-xavfsizlik-qollanma/", k: "sun‘iy intellekt agentlari xavfsizligi: kompyuter uchun 5 qoida qo'llanmalar  gpt-6 astra kabi modellar endi kompyuterni mustaqil boshqaradi. sun‘iy intellekt agentiga vazifa top" },
  { t: "Google Gemini 3.8 Live'ga Live Avatar Qo‘shildi", u: "yangiliklar/google-gemini-live-avatar-2026/", k: "google gemini 3.8 live'ga live avatar qo‘shildi global sun‘iy intellekt tadqiqot google (rasmiy blog) google gemini 3.8 live'ga live avatar funksiyasini qo'shdi — u real vaqtda lab harakati va yuz ifoda" },
  { t: "Altman va Amodei BMTda Sun‘iy Intellektni Nazoratga Chaqirdi", u: "yangiliklar/openai-anthropic-un-security-council-ai-regulation-2026/", k: "altman va amodei bmtda sun‘iy intellektni nazoratga chaqirdi global sun‘iy intellekt siyosati cnn (cnn newsource orqali) openai'ning sam altman va anthropic'ning dario amodei bmt xavfsizlik kengashida sun'iy intellektni g" },
  { t: "Toshkentda Future Intelligence Forum 2026 Bo‘lib O‘tdi", u: "yangiliklar/toshkent-future-intelligence-forum-2026/", k: "toshkentda future intelligence forum 2026 bo‘lib o‘tdi o‘zbekiston sun‘iy intellekt siyosati kun.uz toshkentda huawei va hamkorlari tashkil etgan future intelligence forum 2026 o'z ishini yakunladi. r" },
  { t: "Anthropic Claude Opus 5.5 Modelini Taqdim Etdi", u: "yangiliklar/anthropic-claude-opus-5-5-2026/", k: "anthropic claude opus 5.5 modelini taqdim etdi global sun‘iy intellekt tadqiqot anthropic anthropic claude opus 5.5 modelini chiqardi — narx 40% arzonlashdi, kod yozish va kompyuterdan foyda" },
  { t: "Cisco Talos Ilk Avtonom Sun‘iy Intellekt Zararkunandasini Aniqladi", u: "yangiliklar/cisco-talos-closedquorum-ai-malware-2026/", k: "cisco talos ilk avtonom sun‘iy intellekt zararkunandasini aniqladi sun‘iy intellekt xavfsizligi cisco talos cisco talos closedquorum nomli zararli dasturni aniqladi — u keyingi qadamni tanlash uchun to'rt xil" },
  { t: "GPT-6 Astra: OpenAI Kompyuterni Boshqaruvchi Model Chiqardi", u: "yangiliklar/gpt-6-astra-openai-computer-use-2026/", k: "gpt-6 astra: openai kompyuterni boshqaruvchi model chiqardi global sun‘iy intellekt tadqiqot openai openai gpt-6 astra modelini taqdim etdi — u kompyuterni mustaqil boshqara oladi. tezlik va xavfsizli" },
  { t: "Google DeepMind: Shaxsiy Sun‘iy Intellekt Uchun Xavfsiz Xotira", u: "yangiliklar/google-deepmind-private-ai-compute-secure-memory-2026/", k: "google deepmind: shaxsiy sun‘iy intellekt uchun xavfsiz xotira frontier sun‘iy intellekt tadqiqot google deepmind research google deepmind konfidentsial sun’iy intellekt hisoblashlari (private ai compute) uchun yangi appara" },
  { t: "O‘zbekiston Banklari Kredit Skoringida Sun‘iy Intellektdan Foydalanmoqda", u: "yangiliklar/ozbekiston-fintex-kredit-skoring-ai-tahlil-2026/", k: "o‘zbekiston banklari kredit skoringida sun‘iy intellektdan foydalanmoqda o‘zbekiston fintech & ai spot.uz it & biznes tadbirkorlar uchun 500 million so‘mgacha kredit ajratishda an’anaviy biznes-reja majburiyati bekor q" },
  { t: "Sun‘iy Intellekt Marketing Tadqiqoti: Oddiy So‘rov Personalardan Ustun", u: "yangiliklar/sintetik-persona-suniy-intellekt-ab-test-arxiv-2026/", k: "sun‘iy intellekt marketing tadqiqoti: oddiy so‘rov personalardan ustun biznes & sun’iy intellekt arxiv cs.ai upworthy a/b testlari bazasida o‘tkazilgan tadqiqot shuni ko‘rsatdiki, katta til modellarida auditor" },
  { t: "O‘zbekistonda YouTube Monetizatsiyasi Ishga Tushirilmoqda", u: "yangiliklar/youtube-monetizatsiya-ozbekiston-google/", k: "o‘zbekistonda youtube monetizatsiyasi ishga tushirilmoqda o‘zbekiston it spot.uz it & biznes google rahbariyati bilan o‘tkazilgan muzokaralar o‘zbekistonda youtube hamkorlik dasturini faollasht" },
  { t: "OpenAI GPT-6 Sol va Luna Modellarini Taqdim Etdi", u: "yangiliklar/openai-gpt6-sol-luna-50-percent-price-cut/", k: "openai gpt-6 sol va luna modellarini taqdim etdi dunyo texnologiya openai research gpt-6 oilasi kengaydi: murakkab dasturlash vazifalari uchun sol hamda ultra-tezkor va ixcham luna mo" },
  { t: "xAI Dasturlash Uchun Grok 4.7 Modelini Chiqardi", u: "yangiliklar/xai-grok-47-coding-benchmark-release/", k: "xai dasturlash uchun grok 4.7 modelini chiqardi dunyo texnologiya xai official elon muskning xai kompaniyasi dasturiy ta’minot injiniringi va professional tahlilga ixtisoslashgan " },
  { t: "Meta Muse Tizimida OpenClaw Kodi Borligi Tan Olindi", u: "yangiliklar/meta-muse-openclaw-ilhomlanish-tahlili/", k: "meta muse tizimida openclaw kodi borligi tan olindi dunyo texnologiya techcrunch ai meta kompaniyasi yangi muse sun’iy intellekt tizimini noldan ishlab chiqqanini ta'kidlasa-da, uning " },
  { t: "JetBrains Sun‘iy Intellekt Agentlari Uchun Airni Taqdim Etdi", u: "yangiliklar/jetbrains-air/", k: "jetbrains sun‘iy intellekt agentlari uchun airni taqdim etdi dasturlash devtools jetbrains official blog jetbrains bitta dasturchiga bir vaqtning o‘zida bir nechta avtonom ai agentlarini koordinatsiya qili" },
  { t: "Perform.AI Elektron Tijorat Uchun 'AI Commerce OS'ni Chiqardi", u: "yangiliklar/perform-ai-commerce-os/", k: "perform.ai elektron tijorat uchun 'ai commerce os'ni chiqardi dunyo biznes eqs corporate newsroom brendlar va avtonom xarid agentlari o‘rtasida to‘g‘ridan-to‘g‘ri muloqot o‘rnatuvchi, avtomatlashtir" },
  { t: "BMT: Avtonom Sun‘iy Intellekt Agentlari Xavfsizligi Bo‘yicha Ogohlantirish", u: "yangiliklar/un-ai-agents-warning/", k: "bmt: avtonom sun‘iy intellekt agentlari xavfsizligi bo‘yicha ogohlantirish dunyo texnologiya un independent scientific panel on ai bmt qoshidagi mustaqil xalqaro ilmiy panel avtonom agentlarning tashqi tizimlarga ulanishi va kiberx" },
  { t: "OpenAI Fundamental Fan Uchun Matematika Maslahat Guruhini Tuzdi", u: "yangiliklar/openai-math-advisory-group/", k: "openai fundamental fan uchun matematika maslahat guruhini tuzdi ilm-fan dunyo techcrunch science & ai openai fundamental fanning qiyin masalalarini hal qilish va yangi gipotezalarni formal tekshirish uc" },
  { t: "MIT: Sun‘iy Intellekt Mikrorobotlar Tezligini 447% ga Oshirdi", u: "yangiliklar/mit-insect-flying-robots/", k: "mit: sun‘iy intellekt mikrorobotlar tezligini 447% ga oshirdi robototexnika dunyo sciencedaily / mit research mit muhandislari neyrotarmoqlar asosida aerodinamik qanot qoqish modelini qayta hisoblab, mikroskopi" },
  { t: "Tadqiqot: LLM Modellar Bank Skoringida Xatoga Yo‘l Qo‘ymoqda", u: "yangiliklar/spot-ai-finance-risk/", k: "tadqiqot: llm modellar bank skoringida xatoga yo‘l qo‘ymoqda uzbekistan o‘zbekiston fintex spot.uz tahliliy nashri o‘tkazilgan tahlillar ommabop sun’iy intellekt modellari moliyaviy va buxgalteriya savollariga javob" },
  { t: "O‘zbekistonda Qishloq Xo‘jaligi Uchun Yashil Sun‘iy Intellekt Kiritilmoqda", u: "yangiliklar/spot-green-ai-uzbekistan/", k: "o‘zbekistonda qishloq xo‘jaligi uchun yashil sun‘iy intellekt kiritilmoqda uzbekistan o‘zbekiston biznes spot.uz ekologiya & texnologiya tuproq sifati, iqlim ma’lumotlari va suv resurslarini tahlil qiluvchi yangi milliy sun’iy intellekt " },
  { t: "Telegram Mini Apps va Sun‘iy Intellekt: B2B Savdo", u: "yangiliklar/telegram-ai-apps/", k: "telegram mini apps va sun‘iy intellekt: b2b savdo uzbekistan o‘zbekiston tijorat telegram developers documentation mijoz messenjerdan chiqmasdan sun‘iy intellekt orqali tovar tanlaydi, shaxsiy tavsiya oladi va payme" },
  { t: "OpenAI Modellari Xatolarini Yashirish Uchun Xatlar Qoldirgani Aniqlindi", u: "yangiliklar/openai-caught-leaving-notes-to-successors/", k: "openai modellari xatolarini yashirish uchun xatlar qoldirgani aniqlindi dunyo texnologiya techcrunch (rebecca bellan) tadqiqotchilar gpt-5.6 sol va astra oilasidagi modellar xatolarni insonlardan yashirish va mustaqill" },
  { t: "Gartner: 2026-Yilda Global Sun‘iy Intellekt Xarajatlari .7 Trillion", u: "yangiliklar/gartner-ai-spending-2026/", k: "gartner: 2026-yilda global sun‘iy intellekt xarajatlari .7 trillion dunyo biznes gartner research newsroom tadqiqot agentik tizimlar va hisoblash infratuzilmasiga investitsiyalar o‘tgan yilga nisbatan qariyb" },
  { t: "DeepMind Tadqiqoti: Sun‘iy Intellekt Olimlarga Haftasiga 7 Soat Tejamoqda", u: "yangiliklar/google-ai-verification-tax/", k: "deepmind tadqiqoti: sun‘iy intellekt olimlarga haftasiga 7 soat tejamoqda ilm-fan dunyo google deepmind / mit futuretech google deepmind va mit futuretech 3,500 dan ortiq tadqiqotchi ishtirokida o‘tkazilgan tahlilni e’lon" },
  { t: "OpenAI GPT-6 Astra Modelini Rasman Taqdim Etdi", u: "yangiliklar/openai-gpt6-astra/", k: "openai gpt-6 astra modelini rasman taqdim etdi dunyo texnologiya openai research mantiqiy xulosalash zanjiri (deep reasoning), doimiy korporativ xotira va kompyuterni bevosita boshq" },
  { t: "Google Gemini 3.8 Flash Modellarini E’lon Qildi", u: "yangiliklar/google-gemini-38-flash/", k: "google gemini 3.8 flash modellarini e’lon qildi google cloud sun‘iy intellekt google official blog 1 million tokenlik kontekst, dasturchilar tomonidan boshqariluvchi tafakkur chuqurligi va kirish tok" },
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
  { t: "Kompaniyada sun’iy intellekt xavfsizligi va ma’lumotlar maxfiyligi: 5 qadam", u: "qollanma-xavfsizlik.html", k: "xavfsizlik korporativ maxfiylik zero data retention pii masking litsenziya policy xavfsizlik" },
  { t: "Ovozli sun’iy intellekt agentlarini biznesga joriy qilish: Jonli muloqot", u: "qollanma-ovoz.html", k: "ovozli sun'iy intellekt voice ai call markaz telephony sip zadarma duplex streaming gemini live ovoz" },
  { t: "B2B Outreach tizimi: 0 dan birinchi yirik shartnomagacha katta qo‘llanma", u: "qollanma-b2b.html", k: "b2b outreach masterklass apollo lemlist amocrm b2b sotuv" },
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

// ==========================================================================
// AiNoma Smart Telegram Subscription Slide-in Toast
// ==========================================================================
(function initTgToast() {
  const DISMISSED_KEY = "ainoma_tg_toast_dismissed";
  const JOINED_KEY = "ainoma_tg_toast_joined";
  const DISMISS_DAYS = 7;
  const JOIN_DAYS = 30;

  try {
    const dismissedAt = localStorage.getItem(DISMISSED_KEY);
    if (dismissedAt && (Date.now() - parseInt(dismissedAt, 10)) < DISMISS_DAYS * 86400000) {
      return;
    }
    const joinedAt = localStorage.getItem(JOINED_KEY);
    if (joinedAt && (Date.now() - parseInt(joinedAt, 10)) < JOIN_DAYS * 86400000) {
      return;
    }
  } catch (_) {}

  // Create toast DOM element
  const toast = document.createElement("div");
  toast.className = "ainoma-tg-toast";
  toast.id = "ainomaTgToast";
  toast.setAttribute("role", "dialog");
  toast.setAttribute("aria-label", "Telegram kanal obunasi");
  toast.innerHTML = `
    <button class="ainoma-tg-toast-close" id="ainomaTgToastClose" aria-label="Yopish" title="Yopish">&times;</button>
    <div class="ainoma-tg-toast-header">
      <div class="ainoma-tg-toast-icon">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.75-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
        </svg>
      </div>
      <div class="ainoma-tg-toast-body">
        <div class="ainoma-tg-toast-title">AiNoma Telegramda</div>
        <p class="ainoma-tg-toast-desc">Tezkor AI tahlillar va qo‘llanmalar</p>
      </div>
    </div>
    <a href="https://t.me/ainomauz" target="_blank" rel="noopener" class="ainoma-tg-toast-btn" id="ainomaTgToastJoin">
      Obuna bo‘lish (@ainomauz) ↗
    </a>
  `;

  document.body.appendChild(toast);

  let isShown = false;
  function showToast() {
    if (isShown) return;
    isShown = true;
    window.removeEventListener("scroll", checkScroll);
    clearTimeout(timer);
    toast.classList.add("visible");
  }

  function hideToast(permanentKey, durationDays) {
    toast.classList.remove("visible");
    try {
      localStorage.setItem(permanentKey, Date.now().toString());
    } catch (_) {}
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 400);
  }

  function checkScroll() {
    const total = document.documentElement.scrollHeight - window.innerHeight;
    if (total > 300) {
      const scrollPercent = (window.scrollY / total) * 100;
      if (scrollPercent >= 30) {
        showToast();
      }
    }
  }

  // Trigger on scroll past 30% OR after 12 seconds
  window.addEventListener("scroll", checkScroll, { passive: true });
  const timer = setTimeout(showToast, 12000);

  // Close button
  const closeBtn = document.getElementById("ainomaTgToastClose");
  closeBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    hideToast(DISMISSED_KEY, DISMISS_DAYS);
  });

  // Join button click
  const joinBtn = document.getElementById("ainomaTgToastJoin");
  joinBtn?.addEventListener("click", () => {
    hideToast(JOINED_KEY, JOIN_DAYS);
  });

  // Esc key closes toast
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isShown) {
      hideToast(DISMISSED_KEY, DISMISS_DAYS);
    }
  });
})();



