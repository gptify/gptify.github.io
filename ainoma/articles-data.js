window.AINOMA_ARTICLES = {
  "claude-37": {
    "title": "Anthropic Claude 3.7 Sonnet modelini taqdim etdi: Gibrid tafakkur va korporativ kodlash",
    "kicker": "24-Fevral, 2025 · Frontier Labs · Dunyo",
    "deck": "Yangi model real vaqtli tezkor javoblar bilan chuqur tahlilni birlashtirdi. Dasturchi model qancha soniya o‘ylashini o‘zi boshqarishi mumkin.",
    "img": "assets/ai_agents.jpg",
    "imgAlt": "Anthropic Claude 3.7 Sonnet",
    "readTime": "4 daqiqalik mutolaa",
    "author": "AiNoma Tahririyati",
    "authorRole": "LLM arxitekturasi va AI xavfsizligi",
    "contentHtml": `
<p>Anthropic sun’iy intellekt laboratoriyasi 2025-yil 24-fevral kuni o‘zining yangi flagman <strong>Claude 3.7 Sonnet</strong> modelini rasman taqdim etdi. Bu dunyodagi birinchi gibrid tafakkur (Hybrid Reasoning) arxitekturasiga ega tijoriy model bo‘lib, real vaqtli tezkor javoblar bilan chuqur tahliliy fikrlashni bitta nuqtada birlashtirdi.</p>

<h2>1. Gibrid tafakkur nima va u nega muhim?</h2>
<p>Ilgari modellar yo faqat tezkor javob berar (standart LLM), yoki har bir savol ustida uzoq vaqt "o‘ylab" (o1 kabi reasoning modellar) javob qaytarar edi. Claude 3.7 da esa dasturchi model qancha vaqt fikrlashini <code>thinking_budget</code> parametri orqali nazorat qilishi mumkin:</p>
<ul>
  <li>Oddiy savollar va chat muloqoti uchun — 1 soniyalik tezkor javob;</li>
  <li>Murakkab xavfsizlik auditi, arxitektura loyihalash yoki matematik isbotlar uchun — 30–60 soniyalik chuqur zanjirli tafakkur (Chain-of-Thought).</li>
</ul>

<!-- Dual Lens: Mutaxassislar va Biznes -->
<div class="audience-grid">
  <div class="lens-box tech">
    <div class="lens-title">👤 Mutaxassislar uchun</div>
    <ul>
      <li><strong>Boshqariladigan fikrlash budjeti:</strong> <code>thinking: { type: "enabled", budget_tokens: 4096 }</code> orqali xarajat va vaqt balansi boshqariladi.</li>
      <li><strong>SWE-bench rekordi:</strong> Dasturiy ta’minot muhandisligi benchmarklarida 70.3% natija bilan soha yetakchisi.</li>
      <li><strong>Avtonom terminal va CLI boshqaruvi:</strong> Claude Code vositasi orqali dasturchi konsolidan to‘liq repozitoriy boshqaruvi.</li>
    </ul>
  </div>
  <div class="lens-box biz">
    <div class="lens-title">🏢 Biznes uchun</div>
    <ul>
      <li><strong>Yagona API — ikkita foyda:</strong> Har xil vazifalar uchun har xil modellarni integratsiya qilish shart emas, bitta model bilan barcha ehtiyoj yopiladi.</li>
      <li><strong>Shartnomalar va huquqiy audit:</strong> Ko‘p sahifali murakkab shartnomalardagi yashirin xatarlarni chuqur tahlil qilish imkoniyati.</li>
      <li><strong>Arzon operatsion xarajat:</strong> O1 Pro kabi qimmat yechimlarga nisbatan 50% gacha tejamkor narx siyosati.</li>
    </ul>
  </div>
</div>

<!-- Uzbekistan Impact -->
<div class="uz-impact-box">
  <div class="uz-impact-title">Bu O‘zbekiston uchun nimani anglatadi?</div>
  <p>O‘zbekiston korporativ sektorida murakkab hisobotlarni tekshirish, buxgalteriya auditlari va dasturiy injiniringda Claude 3.7 yuqori aniqlik taqdim etadi. O‘zbek tilidagi uzun matnlar va hujjatlar bilan ishlashda uning kontekst tushunishi yuqori darajada.</p>
</div>

<!-- Action Checklist -->
<div class="action-checklist">
  <div class="action-checklist-title">🎯 Endi nima qilish kerak? (Siz uchun amaliy qadamlar)</div>
  <ol>
    <li><strong>Anthropic Console orqali test qiling:</strong> Yangi modelni korporativ hisobingizda faollashtiring.</li>
    <li><strong>Claude Code CLI'ni sinab ko‘ring:</strong> Mahsulot jamoangiz bilan mahalliy terminalda kod yozish jarayonini sinang.</li>
    <li><strong>Fikrlash budjetini optimallashtiring:</strong> Oddiy so‘rovlar uchun fikrlashni o‘chirib, faqat murakkab auditlar uchun yoqing.</li>
  </ol>
</div>
`,
    "sources": [
      {
        "name": "Anthropic Research Blog",
        "url": "https://anthropic.com"
      },
      {
        "name": "TechCrunch AI Coverage",
        "url": "https://techcrunch.com"
      }
    ]
  },
  "claude-code-cli": {
    "title": "Anthropic 'Claude Code' vositasini ishga tushirdi: Terminalda ishlovchi avtonom dasturchi agent",
    "kicker": "24-Fevral, 2025 · Dasturlash & DevTools · Dunyo",
    "deck": "Brauzer yoki alohida muharrir shart emas — to‘g‘ridan-to‘g‘ri buyruqlar satrida butun repozitoriy bilan ishlovchi, git amallarini bajaruvchi va kodni testlovchi vosita.",
    "img": "assets/gpu_datacenter.jpg",
    "imgAlt": "Anthropic Claude Code CLI dasturchi agenti",
    "readTime": "4 daqiqalik mutolaa",
    "author": "AiNoma Tahririyati",
    "authorRole": "Dasturiy arxitektura va DevTools",
    "contentHtml": `
<p>Anthropic kompaniyasi 2025-yil 24-fevralda dasturchilar uchun to‘g‘ridan-to‘g‘ri operatsion tizim terminalida (CLI) ishlovchi <strong>Claude Code</strong> agentik vositasini rasman chiqardi. Ushbu vosita dasturchining konsolida o‘tirib, butun kod bazasini tushunadi, buyruqlarni bajaradi, xatolarni tuzatadi va Pull Request tayyorlaydi.</p>

<h2>1. Claude Code qanday imkoniyatlarni taqdim etadi?</h2>
<ul>
  <li><strong>To‘liq terminal integratsiyasi:</strong> Dasturchi shunchaki <code>claude</code> buyrug‘ini teradi va unga tabiiy tilda topshiriq beradi. Agent o‘zi kerakli fayllarni topadi, o‘zgartirish kiritadi va testlarni ishga tushiradi.</li>
  <li><strong>Git amallarini avtonom bajarish:</strong> Branch ochish, o‘zgarishlarni commit qilish va izohlar yozish to‘liq avtomatlashtirilgan.</li>
  <li><strong>Xavfsizlik va ruxsatlar boshqaruvi:</strong> Fayllarni o‘chirish yoki xavfli buyruqlarni ishga tushirishdan oldin vosita doimo inson dasturchidan tasdiq so‘raydi.</li>
</ul>

<blockquote>
  "Claude Code — bu IDE'larning o‘rnini bosish emas, balki terminalni boshqaruvchi ikkinchi aqlli miyadir. Endi sintaksis qidirishga emas, mahsulot mantiqiga diqqat qaratiladi."
</blockquote>

<!-- Dual Lens: Mutaxassislar va Biznes -->
<div class="audience-grid">
  <div class="lens-box tech">
    <div class="lens-title">👤 Mutaxassislar uchun</div>
    <ul>
      <li><strong>Claude 3.7 Sonnet bilan quvvatlangan:</strong> Gibrid fikrlash modeli yordamida murakkab kod bloklarini tahlil qiladi.</li>
      <li><strong>Repozitoriy indeksatsiyasi:</strong> Yirik loyihalarda ham fayllararo bog‘liqlikni bir necha soniyada aniqlaydi.</li>
      <li><strong>CI/CD va skriptlashtirish:</strong> Terminal buyruqlari (grep, curl, docker) bilan bemalol quvur orqali ulanadi.</li>
    </ul>
  </div>
  <div class="lens-box biz">
    <div class="lens-title">🏢 Biznes uchun</div>
    <ul>
      <li><strong>Dasturlash jamoasi tezligi 2 barobar oshadi:</strong> Bugfix va refaktoring dasturchining butun kunini olmaydi.</li>
      <li><strong>Onboarding jarayoni yengillashadi:</strong> Yangi dasturchi loyiha arxitekturasini Claude Code orqali o‘rganadi.</li>
      <li><strong>Xarajatlarni tejash:</strong> Qimmat litsenziyalarsiz, faqat API token sarfi bo‘yicha to‘lov.</li>
    </ul>
  </div>
</div>

<!-- Uzbekistan Impact -->
<div class="uz-impact-box">
  <div class="uz-impact-title">Bu O‘zbekiston uchun nimani anglatadi?</div>
  <p>O‘zbekistonda IT-kompaniyalar malakali dasturchilar yetishmovchiligiga duch kelganda, Claude Code kabi terminal agentlari mutaxassislarga xatolarni tezroq topish va xalqaro sifat standartlariga erishishda yordam beradi.</p>
</div>

<!-- Action Checklist -->
<div class="action-checklist">
  <div class="action-checklist-title">🎯 Endi nima qilish kerak? (Siz uchun amaliy qadamlar)</div>
  <ol>
    <li><strong>Terminalingizga o‘rnating:</strong> <code>npm install -g @anthropic-ai/claude-code</code> buyrug‘i orqali o‘rnating.</li>
    <li><strong>Kichik loyihada sinab ko‘ring:</strong> Birorta xatoni tuzatish yoki test yozish topshirig‘ini bering.</li>
    <li><strong>Git integratsiyasini tekshiring:</strong> Agent taklif qilgan commit xabarlarini ko‘zdan kechiring.</li>
  </ol>
</div>
`,
    "sources": [
      {
        "name": "Anthropic Claude Code Documentation",
        "url": "https://anthropic.com"
      },
      {
        "name": "GitHub CLI Community",
        "url": "https://github.com"
      }
    ]
  },
  "gemini-2-flash": {
    "title": "Google Gemini 2.0 Flash modelini ommaga chiqardi: 150ms kechikishli jonli audio va video oqim",
    "kicker": "05-Fevral, 2025 · Google Cloud AI · Dunyo",
    "deck": "Yangi arxitektura va Multimodal Live API korxona call-markazlari hamda mobil ilovalar uchun insondek tez muloqot qiluvchi ovozli yordamchilar va real vaqtda kamera tasvirini tahlil qilish imkonini taqdim etdi.",
    "img": "assets/ai_network.jpg",
    "imgAlt": "Google Gemini 2.0 Flash API",
    "readTime": "4 daqiqalik mutolaa",
    "author": "AiNoma Tahririyati",
    "authorRole": "B2B AI va Cloud tahlil guruhi",
    "contentHtml": `
<p>Google 2025-yil 5-fevral kuni barcha dasturchilar va korporativ mijozlar uchun <strong>Gemini 2.0 Flash</strong> modelini umumiy foydalanishga (General Availability) chiqardi. Ushbu yangilanishning asosiy yutug‘i — ovoz va video signallarni <strong>150–200 millisekundlik</strong> kechikish bilan ikki tomonlama to‘liq dupleks (full-duplex) rejimida qayta ishlovchi <strong>Multimodal Live API</strong> hisoblanadi.</p>

<h2>1. Texnologik ustunliklar va asosiy imkoniyatlar</h2>
<ul>
  <li><strong>Mijoz so‘zini bo‘lish (Barge-in):</strong> Mijoz gapirayotganda ovozli yordamchi uni eshitadi va gapini bo‘lib yangi savol bersa, darhol to‘xtab, yangi kontekstga tabiiy tarzda moslashadi.</li>
  <li><strong>Kamera tasvirini jonli ko‘rish:</strong> Mijoz nosoz uskunani yoki mahsulot shtrix-kodini smartfon kamerasida ko‘rsatganida, model ekranga qarab real vaqtda video-konsultatsiya beradi.</li>
  <li><strong>Ko‘p tillilik va lahjalar:</strong> Tizim turli urg‘u va tillarni shovqinlar ostida ham yuqori aniqlikda tushunadi.</li>
</ul>

<blockquote>
  "Gemini 2.0 Flash — bu shunchaki API emas, balki mijozlar bilan muloqot qiluvchi call-markaz operatorlari yuklamasini 70% ga qisqartiruvchi yangi avlod infratuzilmasidir."
</blockquote>

<!-- Dual Lens: Mutaxassislar va Biznes -->
<div class="audience-grid">
  <div class="lens-box tech">
    <div class="lens-title">👤 Mutaxassislar uchun</div>
    <ul>
      <li><strong>WebSocket Streaming:</strong> Ikki tomonlama dupleks aloqa WebRTC va gRPC streaming orqali amalga oshiriladi.</li>
      <li><strong>Function Calling real vaqtda:</strong> Ovozli muloqot davomida model SQL so‘rov yuborishi yoki CRM'dan ma’lumot olishi mumkin.</li>
      <li><strong>Token sarfi va optimizatsiya:</strong> Audio tokenlar standart matn tokenlariga nisbatan arzonlashtirilgan narxda hisoblanadi.</li>
    </ul>
  </div>
  <div class="lens-box biz">
    <div class="lens-title">🏢 Biznes uchun</div>
    <ul>
      <li><strong>Call-markaz xarajatlarini 50% ga qisqartirish:</strong> Oddiy takroriy qo‘ng‘iroqlarni to‘liq avtomatlashtirish imkoniyati.</li>
      <li><strong>Mijoz kutish vaqti 0 sekund:</strong> Bir vaqtning o‘zida minglab qo‘ng‘iroqlarga navbatsiz javob berish quvvati.</li>
      <li><strong>Xizmat sifati monitoringi:</strong> Har bir qo‘ng‘iroqdan so‘ng suhbat stenogrammasi va tahlili CRM'da aks etadi.</li>
    </ul>
  </div>
</div>

<!-- Uzbekistan Impact -->
<div class="uz-impact-box">
  <div class="uz-impact-title">Bu O‘zbekiston uchun nimani anglatadi?</div>
  <p>O‘zbekistondagi yetkazib berish, bank va klinika servislarida call-markazlar eng katta yuklamaga ega. Google Cloud multimodal Live API orqali kompaniyalar o‘zbek tilida so‘zlashuvchi tezkor AI ovozli operatorlarni ishga tushirishlari mumkin.</p>
</div>

<!-- Action Checklist -->
<div class="action-checklist">
  <div class="action-checklist-title">🎯 Endi nima qilish kerak? (Siz uchun amaliy qadamlar)</div>
  <ol>
    <li><strong>Qo‘ng‘iroqlar statistikasini tahlil qiling:</strong> Eng ko‘p takrorlangan 5 ta mavzuni ajratib oling.</li>
    <li><strong>Google AI Studio'da test qiling:</strong> Multimodal Live API orqali prototip yarating.</li>
    <li><strong>Inson nazorati zanjirini saqlang:</strong> Murakkab norozilik bildirilganda qo‘ng‘iroqni jonli menejerga yo‘naltiring.</li>
  </ol>
</div>
`,
    "sources": [
      {
        "name": "Google Cloud AI Official Announcement",
        "url": "https://cloud.google.com"
      },
      {
        "name": "Google Developers Blog",
        "url": "https://blog.google"
      }
    ]
  },
  "openai-deep-research": {
    "title": "OpenAI Deep Research va o3-mini taqdim etildi: Ilmiy va bozor tahlilini 10 barobar tezlashtiruvchi avtonom tadqiqot agenti",
    "kicker": "03-Fevral, 2025 · Frontier Labs · Dunyo",
    "deck": "Endi LLM shunchaki bir xatboshi javob bermaydi, balki o‘nlab ishonchli manbalarni mustaqil ko‘rib chiqib, 20 sahifalik chuqur ilmiy va bozor tahlili hisobotini tayyorlaydi.",
    "img": "assets/data_agent.jpg",
    "imgAlt": "OpenAI Deep Research va o3-mini avtonom tadqiqot agenti",
    "readTime": "5 daqiqalik mutolaa",
    "author": "AiNoma Tahririyati",
    "authorRole": "Bozor tahlili va LLM tadqiqotlari",
    "contentHtml": `
<p>OpenAI 2025-yil 3-fevral kuni o‘zining yangi <strong>Deep Research</strong> agentik vositasini (hamda 31-yanvarda e'lon qilingan <strong>o3-mini</strong> mantiqiy modelini) taqdim etdi. Ushbu tizim inson analitigi kabi Internetdagi yuzlab maqolalar, PDF hisobotlar va ommaviy ma’lumotlarni o‘rganadi va strukturaviy tahlil tayyorlaydi.</p>

<h2>1. Nima uchun bu inqilobiy yangilik?</h2>
<ul>
  <li><strong>Ko‘p bosqichli mustaqil qidiruv (Multi-step Reasoning):</strong> Agent dastlabki topilgan ma’lumot bilan cheklanmaydi. Agar biror manba noaniq bo‘lsa, u yangi qidiruv so‘rovlarini shakllantirib, chuqurroq manbalarga kiradi.</li>
  <li><strong>To‘liq iqtiboslar (Citations) va faktcheking:</strong> Har bir keltirilgan raqam va fakt birlamchi veb-manbaga havola bilan ta’minlanadi.</li>
  <li><strong>Strukturaviy hisobot eksporti:</strong> Tayyor hisobotni birdaniga Markdown yoki PDF formatida yuklab olish mumkin.</li>
</ul>

<blockquote>
  "Deep Research — bu har bir tahlilchi, marketing rahbari va tadbirkorning yonida ishlovchi 24/7 shaxsiy tahliliy institutdir."
</blockquote>

<!-- Dual Lens: Mutaxassislar va Biznes -->
<div class="audience-grid">
  <div class="lens-box tech">
    <div class="lens-title">👤 Mutaxassislar uchun</div>
    <ul>
      <li><strong>Mantiqiy zanjir:</strong> Model o3-mini arxitekturasidan foydalanib, hisoblash resurslarini qidiruv strategiyasini rejalashtirishga sarflaydi.</li>
      <li><strong>Semantik saralash:</strong> Veb-sahifalardagi keraksiz reklamalarni tozalab, faqat muhim bloklarni tahlil qiladi.</li>
      <li><strong>API orqali integratsiya:</strong> Natijalarni ichki tizimlarga ulash imkoni.</li>
    </ul>
  </div>
  <div class="lens-box biz">
    <div class="lens-title">🏢 Biznes uchun</div>
    <ul>
      <li><strong>Raqobatchilar tahlili:</strong> Raqobatchilarning narx siyosati va yangi mahsulotlarini jadval shaklida oling.</li>
      <li><strong>Mijozlarni tekshirish:</strong> Yangi hamkorning tarixi va obro‘sini bir necha daqiqada tahlil qiling.</li>
      <li><strong>Strategik rejalashtirish:</strong> Yangi bozor yoki mahsulot talabini oldindan hisoblab chiqing.</li>
    </ul>
  </div>
</div>

<!-- Uzbekistan Impact -->
<div class="uz-impact-box">
  <div class="uz-impact-title">Bu O‘zbekiston uchun nimani anglatadi?</div>
  <p>O‘zbekiston kompaniyalari xalqaro bozorlarga eksport qilishda Deep Research yordamida Yevropa, Fors ko‘rfazi yoki MDH bozorlaridagi talab, sertifikatsiya qoidalari va distribyutorlar tarmog‘ini Toshkentdagi ofisdan chiqmasdan tahlil qila oladi.</p>
</div>

<!-- Action Checklist -->
<div class="action-checklist">
  <div class="action-checklist-title">🎯 Endi nima qilish kerak? (Siz uchun amaliy qadamlar)</div>
  <ol>
    <li><strong>Strategik savollaringiz ro‘yxatini tuzing:</strong> Biznesingizda uzoq vaqt javob topilmagan 3 ta asosiy savolni yozing.</li>
    <li><strong>Aniq prompt bilan so‘rov bering:</strong> Birlamchi rasmiy hisobotlarga tayangan holda jadval shaklida taqdim etishni so‘rang.</li>
    <li><strong>Birlamchi manbalarni tekshiring:</strong> Berilgan havolalar orqali faktlarni qayta tasdiqlang.</li>
  </ol>
</div>
`,
    "sources": [
      {
        "name": "OpenAI Research Announcement",
        "url": "https://openai.com"
      },
      {
        "name": "TechCrunch AI Analysis",
        "url": "https://techcrunch.com"
      }
    ]
  },
  "openai-operator": {
    "title": "OpenAI 'Operator' vositasini taqdim etdi: Brauzerda mustaqil ishlovchi AI agent",
    "kicker": "23-Yanvar, 2025 · Agentik AI · Dunyo",
    "deck": "Foydalanuvchi topshirig‘i bilan brauzer interfeyslarini boshqaruvchi, formalar to‘ldiruvchi va murakkab veb-vazifalarni avtonom bajaruvchi yangi yordamchi.",
    "img": "assets/gpu_datacenter.jpg",
    "imgAlt": "OpenAI Operator brauzer agenti",
    "readTime": "4 daqiqalik mutolaa",
    "author": "AiNoma Tahririyati",
    "authorRole": "Agentik tizimlar tahlili",
    "contentHtml": `
<p>OpenAI 2025-yil 23-yanvar kuni kompyuter va brauzerni inson kabi boshqarishga qodir <strong>Operator</strong> tadqiqot agentini e’lon qildi. Ushbu vosita sun’iy intellektning faqat matn yozish doirasidan chiqib, real dunyoda amaliy harakatlarni bajarishiga yo‘l ochdi (Computer-Using Agent - CUA).</p>

<h2>1. Operator nimalarni bajara oladi?</h2>
<ul>
  <li><strong>Veb-saytlarda mustaqil navigatsiya:</strong> Tugmalarni bosish, ro‘yxatlardan tanlash va qidiruv filtrlarini to‘g‘rilash.</li>
  <li><strong>Forma va arizalarni to‘ldirish:</strong> Foydalanuvchi bergan ma’lumotlar asosida buyurtma berish, chipta xarid qilish yoki xizmatlarga ro‘yxatdan o‘tish.</li>
  <li><strong>Inson nazorati:</strong> To‘lovni tasdiqlash yoki maxfiy parollarni kiritishda doimo inson foydalanuvchidan tasdiq so‘raydi.</li>
</ul>

<blockquote>
  "Agentik AI davrida interfeyslar o‘zgarmoqda: endi inson har bir sahifani o‘zi bosib o‘tirmaydi, vazifani agentga topshiradi va natijani qabul qiladi."
</blockquote>

<!-- Dual Lens: Mutaxassislar va Biznes -->
<div class="audience-grid">
  <div class="lens-box tech">
    <div class="lens-title">👤 Mutaxassislar uchun</div>
    <ul>
      <li><strong>Vision + Action Model:</strong> Ekranni skrinshot qilib, tugmalar koordinatalarini aniqlash va sichqoncha harakatlarini simulyatsiya qilish.</li>
      <li><strong>DOM tahlili:</strong> Veb-sahifa tuzilmasini semantik tushunish va xavfsiz qumloq (sandbox) muhitida ishlash.</li>
      <li><strong>Xatolarni o‘z-o‘zidan tuzatish:</strong> Agar sahifa xatolik bersa, qayta urinish yoki boshqa yo‘lni tanlash.</li>
    </ul>
  </div>
  <div class="lens-box biz">
    <div class="lens-title">🏢 Biznes uchun</div>
    <ul>
      <li><strong>Rutinani yo‘qotish:</strong> Har kuni takrorlanadigan ma’lumot ko‘chirish va shakl to‘ldirish ishlarini avtomatlashtirish.</li>
      <li><strong>24/7 xarid va monitoring:</strong> Kerakli tovar yoki xomashyo narxlarini kuzatib borish.</li>
      <li><strong>Menejerlar vaqtini tejash:</strong> Qidiruv va bron qilish ishlarini agentga topshirish.</li>
    </ul>
  </div>
</div>

<!-- Uzbekistan Impact -->
<div class="uz-impact-box">
  <div class="uz-impact-title">Bu O‘zbekiston uchun nimani anglatadi?</div>
  <p>O‘zbekistondagi kompaniyalar xalqaro servislarga integratsiya qilishda yoki ichki davlat portallarida arizalar holatini tekshirishda agentik brauzer yordamchilaridan foydalanishi mumkin.</p>
</div>

<!-- Action Checklist -->
<div class="action-checklist">
  <div class="action-checklist-title">🎯 Endi nima qilish kerak? (Siz uchun amaliy qadamlar)</div>
  <ol>
    <li><strong>Rutin jarayonlarni xaritalang:</strong> Har kuni xodimlar 1 soatdan ko‘p vaqt sarflaydigan shakllarni aniqlang.</li>
    <li><strong>API integratsiyalarini ko‘rib chiqing:</strong> Saytlaringiz botlar va agentlar bilan xavfsiz ishlashini ta’minlang.</li>
  </ol>
</div>
`,
    "sources": [
      {
        "name": "OpenAI Research",
        "url": "https://openai.com"
      }
    ]
  },
  "openai-o1": {
    "title": "OpenAI o1 to‘liq mantiqiy modelini taqdim etdi: Dasturlash va fanda inson ekspertidan yuqori natija",
    "kicker": "05-Dekabr, 2024 · Frontier Labs · Dunyo",
    "deck": "Qadamma-qadam fikrlash (Chain-of-Thought) va multimodal rasm tahliliga ega bo‘lgan to‘liq versiya ommaga chiqarildi.",
    "img": "assets/voice_duplex.jpg",
    "imgAlt": "OpenAI o1 Reasoning Model",
    "readTime": "4 daqiqalik mutolaa",
    "author": "AiNoma Tahririyati",
    "authorRole": "Frontier AI tahlili",
    "contentHtml": `
<p>OpenAI 2024-yil 5-dekabr kuni o‘zining birinchi chuqur mantiqiy fikrlovchi <strong>OpenAI o1</strong> modelining to‘liq versiyasini (preview bosqichidan chiqarib) rasman e’lon qildi. Model javob berishdan oldin qadamma-qadam tafakkur zanjirini yurgizib, xatolarini mustaqil tekshiradi.</p>

<h2>1. Nima o‘zgardi?</h2>
<ul>
  <li><strong>Multimodal fikrlash:</strong> o1 endi nafaqat matn, balki diagrammalar, grafiklar va texnik chizmalarni tahlil qilgan holda mantiqiy xulosalar chiqaradi.</li>
  <li><strong>Gallyutsinatsiyalar 34% ga kamaydi:</strong> Matematik hisob-kitoblar va qonunchilik tahlilida xatoliklar darajasi keskin pasaytirildi.</li>
  <li><strong>Dasturlashda yetakchilik:</strong> Competitive programming va murakkab algoritmlar yozishda inson olimlari darajasida natijalar ko‘rsatdi.</li>
</ul>

<!-- Dual Lens: Mutaxassislar va Biznes -->
<div class="audience-grid">
  <div class="lens-box tech">
    <div class="lens-title">👤 Mutaxassislar uchun</div>
    <ul>
      <li><strong>Test-Time Compute:</strong> Modelga qancha ko‘p fikrlash vaqti berilsa, javob sifati shuncha oshadi.</li>
      <li><strong>API orqali chaqirish:</strong> Reasoning effort parametrini boshqarish imkoniyati.</li>
    </ul>
  </div>
  <div class="lens-box biz">
    <div class="lens-title">🏢 Biznes uchun</div>
    <ul>
      <li><strong>Moliyaviy modellashtirish:</strong> Korporativ daromad va xarajatlar tahlili.</li>
      <li><strong>Shartnoma xatarlari:</strong> Ko‘p sahifali shartnomalardagi mantiqiy nomutanosibliklarni topish.</li>
    </ul>
  </div>
</div>
`,
    "sources": [
      {
        "name": "OpenAI Official Announcement",
        "url": "https://openai.com"
      }
    ]
  },
  "uz-ai-sandbox": {
    "title": "O‘zbekistonda 2030-yilgacha AI strategiyasi tasdiqlandi: Superkompyuter klasteri va Regulyator Sandbox (PQ-358)",
    "kicker": "14-Oktabr, 2024 · O‘zbekiston · Qonunchilik & Strategiya",
    "deck": "Prezident qarori bilan Sun'iy intellekt texnologiyalari markazi, startaplar uchun maxsus huquqiy rejim va davlat xizmatlariga AI integratsiyasi belgilandi.",
    "img": "assets/registan_real.jpg",
    "imgAlt": "O‘zbekiston sun’iy intellekt strategiyasi PQ-358",
    "readTime": "4 daqiqalik mutolaa",
    "author": "AiNoma Tahririyati",
    "authorRole": "O‘zbekiston qonunchiligi va startap ekotizimi",
    "contentHtml": `
<p>O‘zbekiston Respublikasi Prezidentining 2024-yil 14-oktabrda imzolangan <strong>PQ-358-sonli qarori</strong> bilan “Sunʼiy intellekt texnologiyalarini 2030-yilga qadar rivojlantirish strategiyasi” rasman tasdiqlandi. Ushbu hujjat mamlakatda sun’iy intellekt ekotizimini rivojlantirishning aniq yo‘l xaritasini belgilab berdi.</p>

<h2>1. Strategiyadagi asosiy tashabbuslar</h2>
<ul>
  <li><strong>Sun'iy intellekt texnologiyalari markazi:</strong> Raqamli texnologiyalar vazirligi huzurida yagona muvofiqlashtiruvchi markaz tashkil etiladi.</li>
  <li><strong>Superkompyuter va server klasteri:</strong> Mahalliy startaplar va ilmiy tadqiqotchilar uchun yuqori unumli hisoblash quvvatlari (GPU) yaratiladi.</li>
  <li><strong>Maxsus huquqiy rejim (Regulyator Sandbox):</strong> AI startaplariga tibbiyot, ta’lim va bank sohalarida o‘z modellarini sinovdan o‘tkazish uchun yengillashtirilgan qoidalar amal qiladi.</li>
  <li><strong>O‘zbek tili uchun milliy korpus:</strong> Katta til modellarini (LLM) o‘zbek tilida sifatli o‘qitish uchun raqamli axborot bazasi yaratiladi.</li>
</ul>

<!-- Dual Lens: Mutaxassislar va Biznes -->
<div class="audience-grid">
  <div class="lens-box tech">
    <div class="lens-title">👤 Mutaxassislar uchun</div>
    <ul>
      <li><strong>Mahalliy infratuzilma:</strong> Mahalliy data-markazlarda serverlar va hisoblash resurslariga imtiyozli kirish.</li>
      <li><strong>Ochiq ma'lumotlar:</strong> Davlat ochiq ma’lumotlar bazalari (open data) bilan integratsiya.</li>
    </ul>
  </div>
  <div class="lens-box biz">
    <div class="lens-title">🏢 Biznes uchun</div>
    <ul>
      <li><strong>0% Soliq va IT Park imtiyozlari:</strong> AI yo‘nalishidagi korxonalar uchun maksimal qulay sharoitlar.</li>
      <li><strong>Bozorga tezkor chiqish:</strong> Sandbox orqali yangi texnologiyalarni byurokratiyasiz sinash.</li>
    </ul>
  </div>
</div>

<!-- Action Checklist -->
<div class="action-checklist">
  <div class="action-checklist-title">🎯 Endi nima qilish kerak? (Siz uchun amaliy qadamlar)</div>
  <ol>
    <li><strong>PQ-358 qarorini o‘rganing:</strong> Lex.uz portali orqali strategiyaning sohangizga oid qismini ko‘rib chiqing.</li>
    <li><strong>IT Park rezidentligidan foydalaning:</strong> Soliq imtiyozlari va xalqaro eksport dasturlariga qo‘shiling.</li>
  </ol>
</div>
`,
    "sources": [
      {
        "name": "Lex.uz Qonunchilik bazasi (PQ-358)",
        "url": "https://lex.uz"
      },
      {
        "name": "Raqamli texnologiyalar vazirligi",
        "url": "https://digital.uz"
      }
    ]
  },
  "cbu-ai-skoring": {
    "title": "O‘zbekiston moliya bozorida AI skoringi: Shaffoflik va mijozlar ma’lumotlarini O‘zbekistonda saqlash talabi",
    "kicker": "Noyabr, 2024 · O‘zbekiston · Fintex",
    "deck": "Kredit layoqatini baholashda diskriminatsiyasiz shaffoflik, mijozlarning shaxsiy ma’lumotlarini faqat O‘zbekiston hududidagi serverlarda saqlash talablari belgilandi.",
    "img": "assets/tashkent_finance.jpg",
    "imgAlt": "Markaziy Bank AI Skoring reglamenti va Toshkent moliya markazi",
    "readTime": "5 daqiqalik mutolaa",
    "author": "AiNoma Tahririyati",
    "authorRole": "O‘zbekiston huquqiy va fintex tahlili",
    "contentHtml": `
<p>O‘zbekiston moliya va fintex bozorida kredit skoringi tizimlaridan foydalanishda fuqarolarning shaxsiy ma’lumotlari xavfsizligini ta’minlash hamda qaror qabul qilish mexanizmini shaffoflashtirish choralari kuchaytirildi.</p>

<h2>Asosiy talablar:</h2>
<ul>
  <li><strong>Ma’lumotlarning lokalizatsiyasi:</strong> O‘zbekiston fuqarolarining moliyaviy va shaxsiy ma’lumotlarini qayta ishlovchi modellar O‘zbekiston Respublikasi hududidagi serverlarda joylashishi shart.</li>
  <li><strong>Tushuntirib berish majburiyati (Explainable AI):</strong> Kredit rad etilgan taqdirda, qaysi aniq parametrlar sabab bo‘lgani ko‘rsatilishi lozim.</li>
</ul>
`,
    "sources": [
      {
        "name": "O‘zbekiston Markaziy Banki",
        "url": "https://cbu.uz"
      },
      {
        "name": "Gazeta.uz Moliya",
        "url": "https://gazeta.uz"
      }
    ]
  },
  "cursor-teamlead": {
    "title": "Cursor va Agentik Kodlash: Dasturlashda repo-darajali avtonom muhandislik",
    "kicker": "Dekabr, 2024 · Dasturlash & DevTools · Dunyo",
    "deck": "Dasturlashda kod yozishdan avtonom arxitektura boshqaruviga o‘tildi: agentlar butun kod omboridagi xatolarni mustaqil topib, avtomatik testlar va Pull Request tayyorlaydi.",
    "img": "assets/coding_workspace.jpg",
    "imgAlt": "Cursor Agentic Coding",
    "readTime": "4 daqiqalik mutolaa",
    "author": "AiNoma Tahririyati",
    "authorRole": "Dasturiy injiniring va DevTools tahlili",
    "contentHtml": `
<p>Dasturlash muhitlarining yetakchisi <strong>Cursor</strong> Composer va Background Agents imkoniyatlarini kengaytirdi. Bu dasturiy ta’minot ishlab chiqish jarayonida navbatdagi bosqichni boshlab berdi: endi model bitta fayl bilan emas, butun repozitoriy arxitekturasi bilan ishlaydi.</p>
`,
    "sources": [
      {
        "name": "Cursor Official Changelog",
        "url": "https://cursor.com"
      }
    ]
  },
  "telegram-ai-apps": {
    "title": "Telegram Mini Apps + AI: O‘zbekistonda elektron tijorat va B2B savdoni avtomatlashtirish",
    "kicker": "Yanvar, 2025 · O‘zbekiston · Tijorat & Fintex",
    "deck": "Mijoz messenjerdan chiqmasdan sun’iy intellekt orqali tovar tanlaydi, shaxsiy tavsiyalar oladi va Payme/Click orqali to‘lovni amalga oshiradi.",
    "img": "assets/social_commerce.jpg",
    "imgAlt": "Telegram Mini Apps va AI asosidagi B2B savdo",
    "readTime": "4 daqiqalik mutolaa",
    "author": "AiNoma Tahririyati",
    "authorRole": "Elektron tijorat va avtomatlashtirish",
    "contentHtml": `
<p>O‘zbekistonda Telegram platformasida <strong>Mini Apps (TMA)</strong> va sun’iy intellekt agentlarining birlashuvi elektron tijoratda yangi imkoniyatlarni ochdi. Oddiy matnli botlar o‘rnini to‘liq interaktiv veb-interfeys va aqlli AI konsultanlar egallamoqda.</p>
`,
    "sources": [
      {
        "name": "Telegram Apps Developer Documentation",
        "url": "https://core.telegram.org/bots/webapps"
      },
      {
        "name": "Spot.uz Savdo & Texnologiya",
        "url": "https://www.spot.uz/oz/"
      }
    ]
  },
  "uzbekistan-retail-ai": {
    "title": "O‘zbekiston riteylida sun’iy intellekt: Savdo konversiyasini 30% ga oshirish usullari",
    "kicker": "Noyabr, 2024 · O‘zbekiston · Elektron Tijorat",
    "deck": "Mahalliy riteylerlar AI tavsiya algoritmlari va dinamik narxlash orqali qanday natijalarga erishmoqda?",
    "img": "assets/retail_ai.jpg",
    "imgAlt": "O‘zbekiston riteylida sun’iy intellekt",
    "readTime": "4 daqiqalik mutolaa",
    "author": "AiNoma Tahririyati",
    "authorRole": "Riteyl va elektron tijorat",
    "contentHtml": `
<p>O‘zbekistonning yirik riteyl tarmoqlari va elektron do‘konlari sun’iy intellektga asoslangan tavsiya tizimlarini tatbiq etish orqali o‘rtacha chek miqdorini 20–30% ga oshirishga muvaffaq bo‘lmoqda.</p>
`,
    "sources": [
      {
        "name": "Spot.uz Biznes & Riteyl Tahlili",
        "url": "https://www.spot.uz/oz/"
      }
    ]
  }
};
