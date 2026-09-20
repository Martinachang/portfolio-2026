// content.js — every word on the site lives here. Edit this file to change text.
//
// Each string has both languages side by side: { en: "...", zh: "..." }.
// A plain string (a name, a tool, an email) is the same in both languages.
// script.js reads this file and puts the words into index.html.

const content = {
  site: {
    name: { en: "Chang Chu-Pei", zh: "張主佩" },
    nameOther: { en: "張主佩", zh: "Chang Chu-Pei" },
    role: { en: "UI/UX designer and researcher", zh: "UI/UX 設計師與研究員" },
    email: "c21m22h29@gmail.com",
    skip: { en: "Skip to the work", zh: "跳到作品" },
    nav: {
      work: { en: "Work", zh: "作品" },
      about: { en: "About", zh: "關於" },
      skills: { en: "Process", zh: "流程" },
      contact: { en: "Contact", zh: "聯絡" },
    },
    footer: { en: "Designed and built by Chang Chu-Pei.", zh: "由張主佩設計與製作。" },
  },

  // The home page is a desk. Each object on it leads to one section.
  desk: {
    greeting: { en: "Hi, I'm Chu-Pei 👋", zh: "嗨，我是主佩 👋" },
    // The headline is the one string that may contain HTML: <em> marks the words in colour.
    headline: {
      en: "Even <em>a single user's insight</em> can make a profound impact on design.",
      zh: "即使只是<em>一位使用者的洞察</em>，也能深深改變一個設計。",
    },
    cta: { en: "See my work", zh: "看看作品" },
    intro: [
      {
        en: "UI/UX Designer & Researcher based in Taipei. Grounded in 4+ years of design studies and end-to-end project experience.",
        zh: "我是一位剛畢業的 UI/UX 新鮮人，從大學到研究所累積了四年的使用者訪談、原型與易用性測試經驗。",
      },
      {
        en: "Kyoto exchange alumna, eager to bring fresh research insights and continuous learning into product teams.",
        zh: "隨著 AI 快速發展，我了解 UI/UX 也迎來了新的挑戰，但還是那句老話：我很願意學！",
      },
    ],
    badge: {
      tab: { en: "About me", zh: "關於我" },
    },
    note: {
      tab: { en: "Skills & tools", zh: "技能與工具" },
      tools: ["Figma", "Adobe XD", "Miro", "Illustrator", "Photoshop", "Canva"], // shown as logos, see content.logos
    },
    postcard: {
      tab: { en: "Contact", zh: "聯絡我" },
      body: { en: "Let's work together.", zh: "一起合作吧。" },
    },
  },

  work: {
    title: { en: "Work", zh: "作品" },
    readMore: { en: "Read the case study", zh: "閱讀完整案例" },
    all: { en: "All work", zh: "所有作品" },
    overviewTitle: { en: "Overview", zh: "概述" },
    prototypeLabel: { en: "View Prototype", zh: "查看原型" },
  },

  // Projects, in display order. The first one is featured on the desk.
  // Each project has its own page: copy feetmine.html and change data-project in its <body>.
  projects: [
    {
      id: "feetmine",              // must match data-project in the page's <body>
      page: "feetmine.html",
      accent: "#f7943e",           // the project's own colours
      accentWash: "#ffe9d6",
      banner: "#FF9F46",           // flat colour for the Work card banner
      badge: "COURSE",
      name: "FeetMine",
      nameZh: "合步合腳",
      summary: { en: "A parent-child shoe-selection app", zh: "親子個人化選鞋 App" },
      // The panel on the home page: what changed for people, in one line, then one sentence, then two numbers.
      headline: {
        en: "From guessing at size charts to a foot profile that fits",
        zh: "從對著尺寸表猜測，到一份真正合腳的足型檔案",
      },
      blurb: {
        en: "Parents buy their children's shoes and often choose wrong. FeetMine is an app that measures a child's feet at home with AR, recommends shoes that fit, and tracks growth.",
        zh: "童鞋由家長挑選，卻常常買錯。合步合腳用 AR 在家測量孩子的腳，推薦合腳的鞋，並持續記錄成長足跡。",
      },
      stats: [
        { label: { en: "Year", zh: "年份" }, value: "2024" },
        { label: { en: "Duration", zh: "時長" }, value: { en: "1 year", zh: "一年" } },
        { label: { en: "Team", zh: "團隊" }, value: { en: "3 Undergraduate Students, 1 Advisor", zh: "3 位大學生，1 位指導教授" } },
        { label: { en: "Role", zh: "角色" }, value: { en: "UX/UI Designer, usability test, character design, illustration design", zh: "UX/UI 設計、易用性測試、角色設計、插畫設計" } },
      ],
      // The image on the home page's Work section. FeetMine's case study (feetmine.html) is a page of its
      // own: its words live in content.feetmine below, not in `phases`.
      workImage: {
        src: "img/feetmine-app-screens.png",
        alt: { en: "Three FeetMine screens: measurement results, the home dashboard, and the Foot ID card", zh: "三個合步合腳畫面：量測結果、首頁儀表板，以及足型 ID 卡" },
        fit: "contain",
      },
      visualBackground: "linear-gradient(180deg, #FFB26A 0%, #FF820F 100%)",
      visualNoise: true,
      links: [
        { label: { en: "Case study", zh: "完整案例" }, href: "feetmine.html", primary: true }, // the image links here too
        { label: { en: "GitHub", zh: "GitHub" }, href: "https://github.com/Martinachang/foot-dna-test", external: true },
      ],
    },
    {
      id: "ilandgreen",            // must match data-project in the page's <body>
      page: "ilandgreen.html",
      accent: "#3fa895",           // the project's own colours
      accentWash: "#e3f7f3",
      banner: "#77DBCC",           // flat colour for the Work card banner
      badge: "COURSE",
      name: "ILANDGREEN",
      nameZh: "綠島",
      summary: { en: "A sustainable travel companion app", zh: "永續旅行夥伴 App" },
      headline: {
        en: "From a quiz to a slower, lower-impact itinerary",
        zh: "從一份測驗，到一趟更慢、更低衝擊的旅程",
      },
      blurb: {
        en: "ILANDGREEN makes sustainable travel effortless, guiding users to mood-tailored local and nature experiences through quick quizzes and curated soundscapes.",
        zh: "ILANDGREEN 讓規劃永續旅行過程變得輕鬆方便，透過快速問答與搭配喜愛的白噪音，給予使用者體驗符合心情與需求的當地風情和自然風光。",
      },
      stats: [
        { label: { en: "Traveler personas", zh: "旅人角色" }, value: "3" },
        { label: { en: "Quiz-driven itinerary", zh: "測驗驅動的行程" }, value: "1" },
      ],
      tags: [
        { en: "UX design", zh: "使用者體驗設計" },
        "UI/UX",
        { en: "Sustainability", zh: "永續設計" },
      ],
      cover: {
        src: "img/ilandgreen-01.jpg",
        alt: { en: "ILANDGREEN app screens: the persona quiz and the resulting travel itinerary", zh: "綠島的應用畫面：角色測驗與對應的旅行行程" },
      },
      // The image on the home page's Work section only (the case study above still opens with `cover`).
      workImage: {
        src: "img/ilandgreen-app-screens.png",
        alt: { en: "Three ILANDGREEN screens: the travel mood quiz, the home screen, and the soundscape picker", zh: "三個綠島畫面：旅行心情測驗、首頁，以及音景選擇畫面" },
        fit: "contain",
      },
      visualBackground: "linear-gradient(180deg, #CFEDE9 0%, #00D4B4 100%)",
      visualNoise: true,
      visualNoiseOpacity: 0.5,
      links: [
        { label: { en: "Demo", zh: "體驗" }, href: "ilandgreen/index.html", external: true },
        { label: { en: "Case study", zh: "完整案例" }, href: "ilandgreen.html", primary: true }, // the image links here too
        { label: { en: "GitHub", zh: "GitHub" }, href: "https://github.com/Martinachang/ILANDGREEN", external: true },
      ],

      phasesLabel: { en: "Design phases", zh: "設計階段" },
      phases: [
        {
          name: { en: "Overview", zh: "概述" },
          headline: {
            en: "A short quiz turns a traveler's values into a slower itinerary",
            zh: "一份簡短測驗，把旅人的價值觀轉化成一趟更慢的行程",
          },
          points: [
            {
              en: "Travelers who care about sustainability rarely know how to act on it without sacrificing the trip they actually want.",
              zh: "在意永續的旅人，往往不知道該如何在不犧牲理想行程的情況下實踐永續旅行。",
            },
            {
              en: "A short quiz matches each traveler to a persona — Nature Lover, Eco Traveler, or Curious Wanderer — based on what they want from the trip.",
              zh: "一份簡短測驗依據旅人對這趟旅程的期待，將他們配對到「自然愛好者」「生態旅人」或「好奇漫遊者」三種角色之一。",
            },
            {
              en: "The persona then drives a slower, lower-impact itinerary: the places, pace and activities it recommends.",
              zh: "配對出的角色接著驅動一趟更慢、衝擊更低的行程：所推薦的地點、步調與活動皆由此而來。",
            },
          ],
          figures: [
            { src: "img/ilandgreen-02.jpg", alt: { en: "Persona results: Nature Lover, Eco Traveler, Curious Wanderer", zh: "測驗結果：自然愛好者、生態旅人、好奇漫遊者" } },
            { src: "img/ilandgreen-03.jpg", alt: { en: "The itinerary built from the traveler's persona", zh: "依旅人角色所規劃出的行程" } },
            { src: "img/ilandgreen-04.jpg", alt: { en: "Trip detail screen with slower, lower-impact activities", zh: "行程細節畫面，呈現步調較慢、衝擊較低的活動" } },
          ],
        },
      ],
    },
    {
      // No case-study page — just a card in the Work list, linking out to the write-up on Notion.
      // The id only has to be unique: it keeps this entry from being picked up as the desk's default project.
      id: "avatar-perception",
      banner: "#5b9dff",           // flat colour for the Work card banner
      visualBackground: "#5b9dff", // same blue, behind the browser mockup below
      badge: "RESEARCH",
      name: "Visual Perception of Non-Human Features in Avatars",
      workImage: {
        src: "img/avatar-perception-notion.png",
        alt: { en: "The project's Notion page, showing its metadata: authors, year, thesis type and advisor", zh: "研究專案的 Notion 頁面，顯示作者、年份、論文類型與指導教授等後設資料" },
        frame: "browser",
        url: "marsh-nannyberry-d49.notion.site",
      },
      blurb: {
        en: "My master's thesis: a cross-cultural study across Taiwan and Japan on how non-human features, like cat ears and unnatural skin tones, shape first impressions of avatars.",
        zh: "我的碩士論文研究橫跨台灣與日本，探討貓耳、非人類膚色等非人類特徵與色彩如何形塑觀者對虛擬角色的第一印象。",
      },
      links: [
        { label: { en: "Read the study", zh: "閱讀研究" }, href: "https://marsh-nannyberry-d49.notion.site/Visual-Perception-of-Non-Human-Features-in-Avatars-0ad29fa6d89242458c124f122c479ab7", external: true, primary: true }, // the image links here too
      ],
    },
  ],

  // ---------- The FeetMine case study (feetmine.html) ----------
  //
  // A page of its own, not built from `phases`: feetmine.html holds the sections and feetmine.js
  // draws the lists, charts, table and diagrams from the arrays below. Every heading is two lines:
  // `line1` is the dark (or white) half, `line2` the grey half. Numbers here are the deck's own,
  // so check img/feetmine-05…19.jpg before changing any of them.
  //
  // The Chinese was drafted from the English deck and has not been reviewed by the owner.
  feetmine: {
    hero: {
      alt: { en: "The FeetMine home screen and measurement results screen on two phones", zh: "兩支手機上的合步合腳首頁與量測結果畫面" },
    },

    intro: {
      title: { en: "FeetMine 合步合腳", zh: "合步合腳 FeetMine" },
      // Subtitle: slide 05's own tagline, verbatim.
      subtitle: {
        en: "Follow your feet to choose your fit",
        zh: "Follow your feet to choose your fit",
      },
      // Body: a deliberate earlier decision, not slide text — excluded from slide-matching.
      body: {
        en: "As a 3-person student team working around our coursework, we spent a year on FeetMine — from early field research through a tested, exhibited prototype for our graduation project.",
        zh: "由三人學生組成的設計團隊，我們投入一年時間設計 FeetMine，從前期市場調查、使用者研究到測試、以及最終產出參展的畢業專題原型。",
      },
      problemLabel: { en: "Problem", zh: "問題" },
      // Problem: kept as its own question, so it doesn't repeat field.quote's slide-07 line below.
      problem: {
        en: "How might we educate parents and provide reliable tools to easily select the right shoe size and structure?",
        zh: "我們該如何提供家長可靠且方便的工具，讓他們輕鬆選對鞋子的同時也能了解足部知識？",
      },
      outcomeLabel: { en: "Outcome", zh: "成果" },
      // Outcome: a deliberate earlier decision, not slide text — excluded from slide-matching.
      outcome: {
        en: "A tested end-to-end app prototype, a Foot ID Card business model for B2C and B2B, and an exhibition at YODEX with an award nomination (Vision Get Wild).",
        zh: "一套經過測試的完整 App 原型、B2C 與 B2B 的足型 ID 卡商業模式、入圍 Vision Get Wild 以及新一代設計展展出。",
      },
      // Meta: slide 05's Position / Time / Team stat lines, plus its "Graduation Project" pill for Type.
      meta: [
        { label: { en: "Role", zh: "職責" }, value: { en: "UX design, usability test, character design, illustration design", zh: "UX 設計、易用性測試、角色設計、插畫設計" } },
        { label: { en: "Timeline", zh: "時程" }, value: { en: "1 year", zh: "一年" } },
        { label: { en: "Team", zh: "團隊" }, value: { en: "3 undergraduate students, 1 advisor", zh: "3 位大學生，1 位業界指導老師" } },
        { label: { en: "Type", zh: "類型" }, value: { en: "Graduation project", zh: "畢業製作" } },
      ],
    },

    // The five phases are inferred from the deck; the owner still has to confirm them.
    process: {
      line1: { en: "Research, design", zh: "一年之內，" },
      line2: { en: "& test in 1 year", zh: "研究、設計與測試" },
      lead: {
        en: "FeetMine went from desk research to a tested, exhibited prototype. Here is how the work was broken down.",
        zh: "合步合腳從市場調研一路走到經過測試、公開展出的原型。以下是工作的拆解方式。",
      },
      steps: [
        { title: { en: "Research", zh: "研究" }, text: { en: "Desk research on foot health, a physical therapist interview, and user research on footwear misconceptions and parent shopping behavior.", zh: "足部健康的市場調研、與物理治療師訪談，以及針對選鞋錯誤觀念與家長購物行為的使用者研究。" } },
        { title: { en: "Define", zh: "定義" }, text: { en: "In-depth interviews with 7 parents and a competitive analysis.", zh: "與 7 位家長進行深度訪談，並完成競品分析。" } },
        { title: { en: "Design", zh: "設計" }, text: { en: "Design goals, core flows, the foot type system, and a personal foot mascot.", zh: "訂定設計目標、核心流程、足型系統，以及具識別度的專屬吉祥物。" } },
        { title: { en: "Test & iterate", zh: "測試與迭代" }, text: { en: "Moderated usability tests with 3 parents, then a redesigned measurement flow.", zh: "與 3 位家長進行主持式易用性測試，接著重新設計量測流程。" } },
        { title: { en: "Launch", zh: "推出" }, text: { en: "Business model, YODEX exhibition, and an industry pitch.", zh: "商業模式、新一代設計展展出，以及向業界提案。" } },
      ],
    },

    background: {
      line1: { en: "Small foot flaws,", zh: "小小的足部問題" },
      line2: { en: "big body problems", zh: "對身體來說是大麻煩" },
      lead: {
        en: "Our feet are the foundation of the body, bearing our weight and maintaining balance. Without proper support, foot misalignment can trigger chain-reaction pain in the knees, hips, and back. Today, up to",
        zh: "足部是全身的根基，支撐起身體重量並保持平衡，若缺乏適當支撐，足部歪斜就像房子根基不穩一樣，無法平均分散身體重量且會影響到其他部位。如今，高達",
      },
      statValue: "80%",
      leadEnd: { en: "of adults suffer from foot-related issues.", zh: "的成年人都有足部相關的困擾。" },
      eyebrow: { en: "Desk research", zh: "市場調研" },
      bars: {
        title: { en: "Top foot issues in workers", zh: "上班族常見的足部問題" },
        items: [
          { label: { en: "Varicose veins", zh: "靜脈曲張" }, value: 32.9 },
          { label: { en: "Plantar fasciitis", zh: "足底筋膜炎" }, value: 32.4 },
          { label: { en: "Heel pain", zh: "足跟痛" }, value: 25.3 },
        ],
      },
      ages: {
        title: { en: "When people start caring about foot health", zh: "人們從什麼時候開始在意足部健康" },
        items: [
          { label: { en: "Under 30", zh: "30 歲以下" }, value: 29.8 },
          { label: { en: "31–40", zh: "31–40 歲" }, value: 31.2 },
          { label: { en: "40+", zh: "40 歲以上" }, value: 37.6 },
        ],
        caption: { en: "Only 1.4% think it is not important at all.", zh: "只有 1.4% 的人認為完全不重要。" },
      },
      gait: {
        title: { en: "Over 90.9% walk with abnormal gait", zh: "超過 90.9% 的人有著步態異常" },
        centerValue: "90.9%",
        centerLabel: { en: "abnormal gait", zh: "步態異常" },
        segments: [
          { label: { en: "Inward (overpronation)", zh: "內旋（旋前過度）" }, value: 52 },
          { label: { en: "Outward (supination)", zh: "外旋（旋後）" }, value: 30.6 },
          { label: { en: "Mixed", zh: "混合型" }, value: 8.6 },
          { label: { en: "Normal", zh: "步態正常" }, value: 8.8, rest: true },
        ],
      },
    },

    field: {
      // Heading: slide 07's title has no natural 2-line split, so line2 falls back to its
      // subtitle, trimmed by deletion (rule 4).
      line1: { en: "Understanding Foot Development", zh: "理解足部發展" },
      line2: { en: "Most adult foot problems stem from childhood development", zh: "兒童時期足部發育是未來身體健康根基，影響很大" },
      // Lead: a deliberate earlier decision, not slide text — excluded from slide-matching,
      // same treatment as Intro's body/outcome.
      lead: {
        en: "A physical therapist interview showed that most adult foot problems begin in childhood.",
        zh: "與物理治療師深入訪談表示，足部會引發問題，源於足部受力不均，其中與鞋子最為直接相關，而兒童時期是最需要正確選鞋的觀念。",
      },
      stagesLabel: { en: "Foot development through life", zh: "一生的足部發展階段" },
      stages: [
        { name: { en: "Birth", zh: "出生" } },
        { name: { en: "Foot Development (Ages 0–14)", zh: "足部發展期（0–14 歲）" }, active: true },
        { name: { en: "Foot Shape Stabilization", zh: "足型穩定期" } },
        { name: { en: "Foot Degeneration (Ages 50+)", zh: "足部退化期（50 歲以上）" } },
        { name: { en: "Seniors", zh: "高齡期" } },
      ],
      points: [
        { title: { en: "Continuous process", zh: "足部發育具連續性影響" }, text: { en: "The development of children's feet lays the foundation for foot health.", zh: "足部發育是一個持續的過程，兒童足部的發育為足部健康奠定了基礎。" } },
        { title: { en: "Age-specific needs", zh: "依年齡而異的需求" }, text: { en: "The key considerations for choosing shoes differ depending on the age group (ages 0–14).", zh: "選鞋的關鍵考量會依年齡層而不同（0–14 歲是發育關鍵）。" } },
        { title: { en: "The decision gap", zh: "家長挑鞋的認知落差" }, text: { en: "Parents choose the shoes for their children, but they often fail to make the right choices.", zh: "家長為孩子選鞋，但常常無法做出正確的選擇。" } },
      ],
      quote: {
        en: "Parents buy their children's shoes, yet many fail to choose the right pair.",
        zh: "許多家長為孩子買鞋，卻選不到合適的那雙。",
      },
    },

    misconceptions: {
      line1: { en: "Common misconceptions", zh: "常見的" },
      line2: { en: "in children's footwear", zh: "錯誤選鞋觀念" },
      // Lead: slide 08's orange summary card, trimmed by deletion (dropped "and increasing the
      // incidence of foot-related diseases later in life"), with "misconceptions" added back in
      // for "These" so the sentence still reads clearly outside the card it sat beside on the slide.
      lead: {
        en: "These misconceptions lead to poor foot development, negatively impacting long-term foot health.",
        zh: "這些錯誤觀念容易導致足部發展不良，進而影響長期的足部健康。",
      },
      items: [
        { title: { en: "Buying one size up", zh: "買大一號" }, text: { en: "Causes poor stability and fatigue, leading to frequent tripping.", zh: "無法提供良好的穩定度，孩子需要花費更多力氣，容易累也容易摔倒。" } },
        { title: { en: "Softer shoes for comfort", zh: "鞋子越軟越舒服" }, text: { en: "Lacks support and shock absorption, leading to collapsed arches and flat feet.", zh: "無法支撐體重，且不易吸震，長期使足弓易塌陷，造成扁平足。" } },
        { title: { en: "Looks above proper support", zh: "只看外型，忽略楦頭寬度" }, text: { en: "Kids need wider toe boxes. Narrow shoes cause chafing and bone misalignment.", zh: "家長挑鞋多以外型與顏色為主，但孩童腳掌前端需要足夠空間讓腳趾自然展開。過窄的鞋楦會擠壓腳趾，長期可能影響骨骼排列。" } },
        { title: { en: "Wear sandals in summer", zh: "夏天讓孩子穿涼鞋" }, text: { en: "Hurts arch development and raises the risk of ankle misalignment during play.", zh: "支撐性差，長時間穿不利足弓發展，可能因跑跳活動而歪斜。" } },
        { title: { en: "Wear corrective shoes early", zh: "太早穿矯正鞋" }, text: { en: "Meant only for diagnosed flat feet. Wearing them unnecessarily limits mobility and weakens foot muscles.", zh: "提供已有足弓塌陷的孩子穿，一般孩子穿不好活動，且足底力氣不易建立。" } },
      ],
    },

    parents: {
      // Heading: slide 09's title, split at its natural "of" boundary (same pattern as Misconceptions).
      line1: { en: "Consumption behaviors", zh: "現代家長的" },
      line2: { en: "of modern parents", zh: "消費行為" },
      // Lead: a deliberate earlier decision, not slide text — excluded from slide-matching,
      // same treatment as Intro's body/outcome and Field Research's lead.
      lead: {
        en: "Understanding the target audience: how modern parents discover brands, research, and decide what to trust.",
        zh: "理解目標族群：現代家長如何認識品牌、做功課，並決定要相信什麼。",
      },
      // Each item's title is the %-bearing clause from the card's own paragraph on the slide
      // (the card headlines — "Building Trust Online" etc. — don't contain the numbers); the
      // rest of that paragraph becomes the explanatory text below, both trimmed by deletion only.
      items: [
        { value: "48%", title: { en: "of brand discovery happening online", zh: "新世代父母搜出信賴「好品牌」" }, text: { en: "Earning modern parents' long-term loyalty hinges on their first digital touchpoint.", zh: "# 網路平台的重要性高　# 了解消費意圖，即時回應，建立信任感，成為忠實顧客" } },
        { value: "62%", title: { en: "still head in-store to verify product quality", zh: "行動裝置成為最佳消費夥伴" }, text: { en: "Next-gen parents leverage mobile devices for intensive pre-purchase research to save time.", zh: "# 即便網路購物快速省時，但實際購買時父母還是偏好走向線下店看實體" } },
        { value: "84%", title: { en: "of modern parents report higher brand favorability after engaging with online video content", zh: "新世代父母的影音育兒法" }, text: { en: "Video tutorials effectively address parenting concerns and foster consumer trust.", zh: "# 影片能快速學習，在產生品牌好感的同時，也能建立信賴感" } },
      ],
    },

    pains: {
      // Heading: kept as its own phrasing, not slide 10's title — the slide highlights "buying
      // children's shoes?" in orange, but this component always renders line 2 in muted grey,
      // which would reverse that emphasis.
      line1: { en: "What parents", zh: "家長真正" },
      line2: { en: "struggle with", zh: "卡住的地方" },
      // Lead: already drawn from the slide's own Participants/Method lines — no change needed.
      lead: {
        en: "Semi-structured, in-person interviews with 7 parents of children aged 6–12.",
        zh: "與 7 位育有 6–12 歲孩童的家長進行半結構式面對面訪談。",
      },
      painLabel: { en: "Pain point", zh: "痛點" },
      needLabel: { en: "Need", zh: "需求" },
      items: [
        {
          pain: { en: "Children struggle to express comfort", zh: "孩子說不清楚舒不舒服" },
          // Quote kept verbatim, including the slide's own grammar ("only care", not "cares").
          quote: { en: "My kid only care about how shoes look, not how they fit.", zh: "我的孩子只在意鞋子好不好看，不在意合不合腳。" },
          cite: { en: "Father, 28 y/o", zh: "父親，28 歲" },
          need: { en: "Accurate sizing & fit guidance", zh: "精準的尺寸與合腳指引" },
          needText: { en: "Beyond style preferences, parents need reliable guidance on proper fit and support.", zh: "除了外觀，家長需要關於合腳與支撐性的可靠指引。" },
        },
        {
          pain: { en: "Lack of personalized foot data", zh: "沒有孩子專屬的足部資料" },
          quote: { en: "There's lots of advice online, but none fits my child, so I don't really do research.", zh: "網路上建議很多，但沒有一個適合我的孩子，所以我乾脆不做功課。" },
          cite: { en: "Mother, 34 y/o", zh: "母親，34 歲" },
          need: { en: "Personalized data online", zh: "線上的個人化資料" },
          needText: { en: "Modern parents want fast online solutions, using an app to streamline shoe shopping.", zh: "現代家長想要快速的線上解方，用 App 讓選鞋購物更順暢。" },
        },
      ],
    },

    compare: {
      // Heading: slide 11's own title, split at its natural "to" boundary.
      line1: { en: "A shoe-fitting guide connecting online sizing", zh: "一份串連線上量測" },
      line2: { en: "to personalized picks", zh: "與個人化選鞋的合腳指南" },
      // Lead: slide 11's own subtitle, verbatim (already 2 sentences, within length).
      lead: {
        en: "Stop guessing aimlessly through endless size charts and shoe models. FeetMine is the ultimate guide integrating foot development data and the shoe-selection process into a single seamless experience.",
        zh: "別再對著沒完沒了的尺寸表與鞋款瞎猜。FeetMine 是一套整合足部數據與選鞋推薦的app，打造流暢的選鞋體驗。",
      },
      caption: { en: "The shoe-buying journey, FeetMine against three competitors", zh: "選鞋旅程：合步合腳與三個競品的對照" },
      productLabel: { en: "Product", zh: "產品" },
      covered: { en: "Covered", zh: "有涵蓋" },
      notCovered: { en: "Not covered", zh: "未涵蓋" },
      columns: [
        { name: { en: "Goal", zh: "目標" }, note: { en: "define needs", zh: "釐清需求" } },
        { name: { en: "Measure", zh: "量測" }, note: { en: "measure feet", zh: "量測雙腳" } },
        { name: { en: "Select", zh: "挑選" }, note: { en: "compare options", zh: "比較選項" } },
        { name: { en: "Purchase", zh: "購買" }, note: { en: "verify size and purchase", zh: "確認尺寸並購買" } },
        { name: { en: "Evaluate", zh: "評估" }, note: { en: "track comfort", zh: "追蹤舒適度" } },
      ],
      rows: [
        { name: "FeetMine", highlight: true, cells: [{}, {}, {}, {}, {}] },
        { name: "A.S.O", cells: [{}, { note: { en: "Book an in-store measurement", zh: "需預約到店量測" } }, {}, {}, null] },
        { name: "OverNice", cells: [null, { note: { en: "Store-provided tools", zh: "使用店內提供的工具" } }, { note: { en: "Choose the right insole", zh: "挑選合適的鞋墊" } }, null, null] },
        { name: "Baby View", cells: [{}, { note: { en: "Only measure foot length", zh: "只量測足長" } }, {}, {}, null] },
      ],
    },

    goals: {
      line1: { en: "Healthy childhood steps", zh: "FeetMine 為孩子踏穩健康的每一步" },
      line2: { en: "for lifelong comfort", zh: "讓年老時身體不再煩惱" },
      items: [
        { title: { en: "Simplifying foot measurement", zh: "簡化足部量測" }, text: { en: "Quick home measurement without store appointments or waiting.", zh: "在家就能快速量測，不必預約或排隊等候。" } },
        { title: { en: "Guiding personalized fit", zh: "專屬個人化推薦" }, text: { en: "Turn foot data into smart recommendations to avoid sizing guesswork.", zh: "把足部資料轉化為智慧推薦，避免尺寸用猜的。" } },
        { title: { en: "Tracking continuous growth", zh: "持續追蹤足部成長" }, text: { en: "Integrate foot data tracking and recurring shopping into a seamless cycle as children grow.", zh: "隨孩子成長，將足部資料追蹤與後續購物整合成一個流暢的循環。" } },
      ],
    },

    features: {
      eyebrow1: "Feature #1",
      eyebrow2: "Feature #2",
      eyebrow3: "Feature #3",
      eyebrow4: "Feature #4",
      one: {
        name: { en: "AR foot measurement", zh: "AR 足部量測" },
        // Text: slide 15's first sentence (its second sentence, about the foot-metric profile,
        // is used for Feature #2 below). The coin-calibration story is Usability Testing's own
        // finding (slide 14) and stays there rather than being repeated here.
        text: {
          en: "Uses AR technology to allow parents to measure their child's feet anytime, anywhere, building a dedicated database.",
          zh: "運用 AR 技術，讓家長隨時隨地都能量測孩子的腳，建立專屬資料庫。",
        },
        altA: { en: "The AR measurement screen, scanning a child's foot", zh: "AR 量測畫面，正在掃描孩子的腳" },
        altB: { en: "The FeetMine home screen with the child's latest foot length and next shoe-changing day", zh: "合步合腳首頁，顯示孩子最新的足長與下次換鞋日" },
      },
      two: {
        name: { en: "Foot type & personal mascot", zh: "足型與專屬吉祥物" },
        // Text: slide 15's second sentence (foot profile), trimmed by deleting its trailing
        // clause, plus the Mascot card's own first sentence, trimmed the same way, with its
        // omitted subject ("The app") restored.
        text: {
          en: "Based on foot metrics: type, arch, instep, width, and length, the app generates a personalized foot profile. The app generates a unique foot mascot.",
          zh: "依足型、足弓、足背、足寬、足長等指標，生成個人化足型檔案，並打造專屬的腳腳吉祥物。",
        },
        legendTitle: { en: "Reading a foot type code", zh: "怎麼看懂足型代碼" },
        legend: [
          { label: { en: "Type of foot", zh: "足型" }, options: [
            { key: "E", value: { en: "Egyptian", zh: "埃及型" } },
            { key: "G", value: { en: "Greek", zh: "希臘型" } },
            { key: "R", value: { en: "Roman", zh: "羅馬型" } },
          ] },
          { label: { en: "Arch", zh: "足弓" }, options: [
            { key: "F", value: { en: "Flat", zh: "扁平" } },
            { key: "O", value: { en: "Regular", zh: "正常" } },
            { key: "H", value: { en: "High arch", zh: "高足弓" } },
          ] },
          { label: { en: "Instep", zh: "足背" }, options: [
            { key: "N", value: { en: "Low", zh: "低" } },
            { key: "O", value: { en: "Medium", zh: "中" } },
            { key: "K", value: { en: "High", zh: "高" } },
          ] },
          { label: { en: "Width", zh: "足寬" }, options: [
            { key: "N", value: { en: "Narrow", zh: "窄" } },
            { key: "O", value: { en: "Regular", zh: "正常" } },
            { key: "W", value: { en: "Wide", zh: "寬" } },
          ] },
        ],
        example: {
          en: "GFNO-20 = Greek foot, flat arch, low instep, regular width, 20 cm.",
          zh: "GFNO-20 ＝ 希臘型足、扁平足弓、低足背、正常足寬、20 公分。",
        },
        altA: { en: "The measurement result screen showing the foot type code and the child's mascot", zh: "量測結果畫面，顯示足型代碼與孩子的專屬吉祥物" },
        altB: { en: "The eight mascot colours parents can choose from", zh: "家長可以選擇的八種吉祥物顏色" },
      },
      three: {
        // Name: kept as its own phrasing, not slide 16's title — on a page numbering
        // "Feature #1/#2/#3," the slide's "Feature-Based" would read as an app feature rather
        // than a foot characteristic.
        name: { en: "Shoe recommendations by foot type", zh: "依足型推薦鞋款" },
        text: {
          en: "Provides targeted shoe recommendations on performance and materials based on individual foot profiles. Users can explore reviews from peers with the same foot type, ensuring confident purchases and minimizing sizing mistakes.",
          zh: "依據個人足型檔案，提供針對性能與材質的鞋款推薦。使用者也能參考相同足型的其他人的評價，安心購買、減少選錯尺寸的機會。",
        },
        altA: { en: "A parent browsing a recommended shoe and the foot types it suits", zh: "家長正在瀏覽推薦鞋款，以及這雙鞋適合的足型" },
        altB: { en: "The Foot ID card screen with the child's foot type and partner stores", zh: "足型 ID 卡畫面，顯示孩子的足型與合作店家" },
      },
      four: {
        // Name: slide 16's own card title.
        name: { en: "Foot Shape Records: Accompanying Growth", zh: "足型紀錄：陪伴成長" },
        // Text: slide 16's own two sentences; the second trimmed by deleting its trailing clause.
        text: {
          en: "Tracks foot changes across different age stages and saves them to the personal Foot ID Card for future shoe fitting. By preserving raw foot outlines, parents and children can overlay and align their footprints.",
          zh: "追蹤不同年齡階段的足部變化，並存入個人足型 ID 卡，作為未來選鞋的依據。透過保留原始足型外框，親子可以疊合比對足印。",
        },
        altA: { en: "The growth evaluation screen with a foot-length trend chart", zh: "成長評估畫面，包含足長趨勢圖" },
        altB: { en: "The foot record screen with saved footprints and a family footprint comparison", zh: "足部紀錄畫面，包含歷次足印與家庭足印比對" },
      },
    },

    testing: {
      // Heading: slide 14's own title, split at its natural "&" boundary.
      line1: { en: "Usability testing", zh: "易用性測試" },
      line2: { en: "& design iteration", zh: "與設計迭代" },
      // Lead: already drawn from the slide's own Participants/Method lines — no change needed
      // (same treatment as Pain Points' lead).
      lead: {
        en: "Moderated usability tests with 3 parents of children aged 6–12, on the mobile prototype.",
        zh: "以行動原型，與 3 位育有 6–12 歲孩童的家長進行主持式易用性測試。",
      },
      items: [
        {
          title: { en: "Can parents follow the guided flow to measure feet?", zh: "家長能依照引導流程量測雙腳嗎？" },
          // Text: the AS-IS reaction quote, the TO-BE description, and the TO-BE reaction quote —
          // all verbatim from slide 14. The AS-IS card's own description isn't included, to keep
          // this to the slide's quotes plus its one full sentence, as elsewhere in this pass.
          text: {
            en: "\"Stickers waste time, scanning takes too long…\" Quick Coin Calibration: slide an NT$10 coin horizontally halfway under the arch and scan. \"Much simpler and faster!\"",
            zh: "「貼貼紙很花時間，掃描也要很久⋯」硬幣快速校正：將一枚十元硬幣水平滑到足弓下方一半處，再進行掃描。「更簡單、更快速！」",
          },
        },
        {
          title: { en: "Can parents understand the foot type?", zh: "家長看得懂足型代碼嗎？" },
          // Text: slide 14's own paragraph, verbatim, plus its quote.
          text: {
            en: "Although 2/3 of parents initially struggled to understand the Foot Type, we retained them to shift mindsets from \"buying shoes by length alone\" to a deeper understanding of foot health. \"What does GFNO mean?\"",
            zh: "雖然 2/3 的家長一開始不理解足型，我們仍保留它，希望能將心態從「只看鞋長買鞋」轉變為更深入的足部健康理解。「GFNO 是什麼意思？」",
          },
        },
      ],
      // Before/after labels: a deliberate earlier decision, not slide text — excluded from
      // slide-matching, same treatment as Intro's body/outcome.
      beforeLabel: { en: "AS-IS: sticker tracking", zh: "原始版本：貼紙追蹤" },
      afterLabel: { en: "TO-BE: coin calibration", zh: "優化版本：硬幣校正" },
      beforeAlt: { en: "The old measurement flow: six screens asking parents to place coloured stickers on five foot points", zh: "舊的量測流程：六個畫面，要家長在五個足部位置貼上彩色貼紙" },
      afterAlt: { en: "The new measurement flow: one screen asking for a ten-dollar coin as a reference", zh: "新的量測流程：一個畫面，只要準備一枚十元硬幣作為參考" },
    },

    business: {
      // Heading: slide 17's own title, split at its natural colon.
      line1: { en: "Business model:", zh: "商業模式：" },
      line2: { en: "Foot ID Card", zh: "足型 ID 卡" },
      // Lead: slide 17's own two sentences — the partnership fact, then the business-value
      // argument (growth data → recommendations → efficiency/ecosystem), its second sentence
      // trimmed only by deleting its opening clause ("Continuously updated with the child's
      // latest growth data,").
      lead: {
        en: "By archiving users' foot profiles and scan histories, FeetMine can expand to partner shoe retailers (both online and offline) to match personal foot types with brand inventories. The system delivers highly accurate, personalized shoe recommendations—boosting shopping efficiency and purchase intent while connecting users and merchants in a mutually beneficial, sustainable ecosystem.",
        zh: "透過建檔使用者的足型資料與掃描紀錄，合步合腳可以拓展至合作鞋店（線上與線下），將個人足型與品牌庫存互相配對。系統能提供高度精準的個人化選鞋推薦——提升購物效率與購買意願，同時讓使用者與商家建立起互利共好的永續生態圈。",
      },
      // Card titles ("To customers"/"To businesses") are a deliberate earlier decision, not
      // slide text (the slide's own "TO Customer"/"TO Business" don't read as headings in
      // English) — excluded from slide-matching, same treatment as Intro's body/outcome.
      cards: [
        { title: { en: "To customers", zh: "對消費者" }, text: { en: "Match partner footwear to foot types and incorporate peer reviews to enhance fit accuracy.", zh: "為每種足型配對合作鞋款，並納入同儕評價以提升合腳準確度。" } },
        { title: { en: "To businesses", zh: "對品牌" }, text: { en: "Gather feedback across diverse foot profiles to identify user needs and improve product design.", zh: "彙整不同足型的回饋，找出使用者需求並優化產品設計。" } },
      ],
      flowTitle: { en: "Service flow", zh: "服務流程" },
      // Flow caption: slide 18's own sentence, trimmed by deleting its trailing clause.
      flowCaption: {
        en: "Provides end-to-end support across pre-purchase, in-purchase, and post-purchase stages.",
        zh: "提供購買前、購買中與購買後的全程支援。",
      },
      loop: {
        user: { en: "User", zh: "使用者" },
        foot: { en: "Foot", zh: "足部" },
        shoes: { en: "Shoes", zh: "鞋款" },
        store: { en: "Shoe store", zh: "鞋店" },
        measure: { en: "AR measurement", zh: "AR 量測" },
        comfort: { en: "Wearing comfort", zh: "穿著舒適度" },
        specs: { en: "Product specifications", zh: "產品規格" },
        feedback: { en: "Feedback", zh: "回饋" },
        maps: [
          { from: { en: "type, instep", zh: "足型、足背" }, to: { en: "shoes", zh: "鞋款" } },
          { from: { en: "length, width", zh: "足長、足寬" }, to: { en: "size", zh: "尺寸" } },
          { from: { en: "arch, age", zh: "足弓、年齡" }, to: { en: "performance", zh: "性能" } },
        ],
      },
      // Stage items render one line each (no separate subtitle slot), so where slide 18's card
      // has a title plus a short subtitle, both are kept in the one title, joined by a colon.
      stages: [
        { name: { en: "Pre-purchase", zh: "購買前" }, items: [
          { title: { en: "Goal: understand children's feet. Choose the right shoes.", zh: "目標：了解孩子的腳，選擇合適的鞋款。" } },
          { title: { en: "AR measurement: understanding foot health.", zh: "AR 量測：理解足部健康。" } },
        ] },
        { name: { en: "In-purchase", zh: "購買中" }, items: [
          { title: { en: "Shoe recommendations", zh: "鞋款推薦" } },
          { title: { en: "Foot ID Card & fit matching", zh: "足型 ID 卡與合腳配對" } },
        ] },
        { name: { en: "Post-purchase", zh: "購買後" }, items: [
          { title: { en: "Foot profile history: age stages.", zh: "足型歷程紀錄：跨年齡階段。" } },
          { title: { en: "Foot health knowledge", zh: "足部健康知識" } },
        ] },
      ],
    },

    finals: {
      // Heading: a deliberate earlier decision, not slide text — excluded from slide-matching.
      // Slide 13's only heading is the single word "Prototyping": no natural 2-line split and
      // no subtitle to fall back on (rule 4's stop-and-ask case), so there's nothing to restore
      // this to. Flagging in case you'd rather it read "Prototyping" some other way.
      line1: { en: "Final designs", zh: "最終設計：" },
      line2: { en: "five core flows", zh: "五個核心流程" },
      // Lead: already the slide's own 5 screen names, joined into one sentence — no change needed.
      lead: {
        en: "Profile & home, AR measurement, foot ID & mascot, smart selection, and growth evaluation.",
        zh: "個人檔案與首頁、AR 量測、足型 ID 與吉祥物、智慧選鞋，以及成長評估。",
      },
      screens: [
        { name: { en: "Profile & home", zh: "個人檔案與首頁" } },
        { name: { en: "AR measurement", zh: "AR 量測" } },
        { name: { en: "Foot ID & mascot", zh: "足型 ID 與吉祥物" } },
        { name: { en: "Smart selection", zh: "智慧選鞋" } },
        { name: { en: "Growth evaluation", zh: "成長評估" } },
      ],
    },

    results: {
      // Heading: a deliberate earlier decision, not slide text — excluded from slide-matching.
      // Slide 19's only heading is the single word "Results": same stop-and-ask case as
      // Final Designs' "Prototyping" (no natural split, no subtitle).
      line1: { en: "Results", zh: "成果" },
      line2: { en: "& recognition", zh: "與肯定" },
      items: [
        // Title already matched slide 19 exactly via deletion; text restored to the slide's own
        // wording, trimmed only by deleting its middle clause ("while advocating foot health").
        { title: { en: "Exhibited at YODEX", zh: "於新一代設計展展出" }, text: { en: "We engaged parents and visitors in live testing, receiving strong praise for precise shoe-fitting alongside valid inquiries regarding measurement accuracy and technical feasibility.", zh: "我們邀請家長與訪客一起進行現場實測，獲得對精準選鞋的高度讚賞，也收到許多關於量測準確度與技術可行性的好問題。" } },
        // Title restored to the slide's own card title, trimmed by deleting "& Industry Pitch",
        // with the award category (from the text's own "Cross-Disciplinary Category") kept in,
        // since it's a specific fact rather than filler. Text restored to the slide's own
        // sentence, trimmed by deleting its opening clause, which the title now covers.
        { title: { en: "Award nomination (Vision Get Wild, Cross-Disciplinary)", zh: "獲 Vision Get Wild（跨領域組）獎項提名" }, text: { en: "We presented FeetMine along with our B2B and B2C business models to industry judges and brands at YODEX.", zh: "我們在 YODEX 向業界評審與品牌展示合步合腳，以及其 B2B 與 B2C 商業模式。" } },
        // Text restored to the slide's own wording.
        { title: { en: "Team collaboration & mentorship", zh: "團隊協作與指導" }, text: { en: "Rapid internal feedback loops and structured advisor mentorship ensured efficient execution and seamless design delivery.", zh: "快速的內部回饋循環與有結構的指導，確保了高效執行與流暢的設計交付。" } },
      ],
      photos: [
        { alt: { en: "The FeetMine booth at YODEX, with the mascots and the measuring station", zh: "新一代設計展的合步合腳攤位，有吉祥物與量測台" } },
        { alt: { en: "A team member pitching FeetMine to an industry judge", zh: "團隊成員向業界評審提案" } },
        { alt: { en: "The team standing at the booth with their advisor", zh: "團隊與指導老師在攤位前合影" } },
      ],
    },

    reflection: {
      line1: { en: "Reflection", zh: "回顧：" },
      line2: { en: "what I learned", zh: "我學到什麼" },
      // TODO: the owner still has to write this section.
      body: {
        en: "Placeholder. What I would keep, what I would change, and what a year on one project taught me about testing early and cutting steps that only designers enjoy.",
        zh: "（待補）我會保留什麼、會改掉什麼，以及在同一個專案上待滿一年，讓我學到要盡早測試，並刪掉那些只有設計師自己喜歡的步驟。",
      },
    },

    next: {
      label: { en: "Next project", zh: "下一個專案" },
      back: { en: "Back to work", zh: "回到作品列表" },
    },
  },

  about: {
    greeting: { en: "Hello! I'm Chang Chu-Pei.", zh: "你好，我是張主佩。" },
    photoAlt: { en: "Chang Chu-Pei standing in front of hydrangeas", zh: "張主佩站在繡球花前" },
    bio: [
      {
        en: "With four years in UI/UX across diverse domains, I've honed sharp observation skills and a flexible, user-centered mindset.",
        zh: "4年的 UI/UX 學習與專案實作，讓我明白好的訪談要聽見受訪者沒說出口的話，所以我總會多問一句「為什麼」。",
      },
      {
        en: "My six-month exchange in Kyoto deepened my cross-cultural perspective and my appreciation for detail-oriented Japanese design.",
        zh: "京都半年的交換生活，則讓我學會看細節，日本設計處處替使用者多想一步，我也習慣用細節說服人。",
      },
    ],
    experienceTitle: { en: "Experience", zh: "經歷" },
    experience: [
      { when: { en: "Sep 2025 – Mar 2026", zh: "2025.09 – 2026.03" }, what: { en: "Exchange student, Kyoto Institute of Technology", zh: "京都工藝纖維大學 交換學生" } },
      { when: { en: "Dec 2024", zh: "2024.12" }, what: { en: "Taipei Illustration Fair", zh: "台北插畫藝術節" } },
      { when: { en: "Oct 2024", zh: "2024.10" }, what: { en: "The 8th Asia Color Association Conference", zh: "第八屆亞洲色彩學會研討會" } },
      { when: { en: "Jul – Oct 2024", zh: "2024.07 – 2024.10" }, what: { en: "Local Design Innovation Action, Chunghwa Telecom Foundation", zh: "中華電信基金會 在地設計創新行動" } },
      { when: "2024", what: { en: "Finalist, Vision Get Wild award, cross-domain category", zh: "金點新秀設計獎 跨領域類 入圍" } },
      { when: "2023", what: { en: "Finalist, Special Enterprise Award, Taiwan International Student Design Competition", zh: "台灣國際學生創意設計大賽 企業特別獎 入圍" } },
      { when: "2023", what: { en: "Key visual and mascot illustrator, Department of Digital Media Design, Tatung University", zh: "大同大學媒體設計學系 主視覺與吉祥物插畫" } },
      { when: "2023", what: { en: "Recipient, NSTC Undergraduate Student Research Grant", zh: "國科會大專學生研究計畫 獲補助" } },
    ],
    educationTitle: { en: "Education", zh: "學歷" },
    education: [
      {
        when: { en: "Sep 2024 – present", zh: "2024.09 – 至今" },
        what: { en: "Master of Digital Media Design, Tatung University", zh: "大同大學 媒體設計學系碩士班" },
        detail: { en: "UI/UX, color research, avatar design", zh: "UI/UX、色彩研究、虛擬角色設計" },
      },
      {
        when: { en: "Sep 2020 – Jun 2024", zh: "2020.09 – 2024.06" },
        what: { en: "Interactive Media Design, Department of Media Design, Tatung University", zh: "大同大學 媒體設計學系 互動媒體設計組" },
        detail: { en: "UI/UX, graphic design, motion graphics", zh: "UI/UX、平面設計、動態圖像" },
      },
    ],
    workTitle: { en: "Worked", zh: "工作經驗" },
    work: [
      { when: { en: "May 2024 – Mar 2025", zh: "2024.05 – 2025.03" }, what: { en: "Graphic designer, JusYoung Integrated Marketing Co., Ltd.", zh: "平面設計師，佳斯昂整合行銷有限公司" } },
      { when: { en: "Apr 2022 – Jun 2023", zh: "2022.04 – 2023.06" }, what: { en: "Graphic designer, DIF Design Co., Ltd.", zh: "平面設計師，布衣漾創意設計有限公司" } },
    ],
    languagesTitle: { en: "Languages", zh: "語言" },
    languages: ["TOEIC 760", "CEFR B2", "JLPT N3"],
  },

  // Tool logos, one SVG file each in img/. A tool named here shows its logo wherever it is listed.
  logos: {
    Figma: "img/figma.svg",
    "Adobe XD": "img/adobe-xd.svg",
    Illustrator: "img/illustrator.svg",
    Photoshop: "img/photoshop.svg",
    "After Effects": "img/after-effects.svg",
    Canva: "img/canva.svg",
    Miro: "img/miro.svg",
    Notion: "img/notion.svg",
    "Visual Studio Code": "img/visual-studio-code.svg",
  },

  // How I work: three steps, each with a sentence and the methods and tools used at that step.
  skills: {
    title: { en: "How I work", zh: "我的工作方式" },
    lead: { en: "Three steps, and the tools I reach for at each one.", zh: "三個步驟，以及每一步會用到的工具。" },
    steps: [
      {
        name: { en: "Understand", zh: "使用者研究" },
        text: {
          en: "I start with people, not screens. Interviews, personas and journey maps show where the real problem is, and desk research checks that it is not just one person's problem.",
          zh: "一切從人的需求與痛點開始。使用者訪談、人物誌與旅程地圖，找出真正的問題與痛點，市場調研則確認它是許多人的共同需求。",
        },
        tools: [
          { en: "Interview", zh: "訪談" },
          { en: "Persona", zh: "人物誌" },
          { en: "Journey map", zh: "旅程地圖" },
          { en: "Design thinking", zh: "設計思考" },
          "Notion", "Miro",
          { en: "AI tools", zh: "AI 工具" },
        ],
      },
      {
        name: { en: "Design", zh: "設計方法" },
        text: {
          en: "User flows first, then wireframes, then a prototype people can hold. I draw my own characters, illustrations and motion, so the interface and its personality come from the same hand.",
          zh: "從繪製使用者流程，再到線框稿，做出可以實際操作的原型進行測試。角色、插畫通常都由我繪製，讓風格保持一致性與獨特性。",
        },
        tools: [
          { en: "User flow", zh: "使用者流程" },
          { en: "Wireframing", zh: "線框稿" },
          { en: "Prototyping", zh: "原型製作" },
          { en: "Design system", zh: "設計系統" },
          { en: "Motion graphics", zh: "動態圖像" },
          "Figma", "Adobe XD", "Illustrator", "Photoshop", "After Effects", "Canva", "插畫設計", "Miro", "KJ法", "Crazy 8", "Visual Studio Code",
        ],
      },
      {
        name: { en: "Test", zh: "測試" },
        text: {
          en: "Moderated usability tests with real users, then I change what they trip on. In FeetMine, one session replaced six stickers with a single coin.",
          zh: "邀請使用者進行引導式易用性測試，然後修改他們卡住的地方。在合步合腳裡，一次測試就讓六張貼紙變成了一枚硬幣。",
        },
        tools: [
          { en: "Usability test", zh: "易用性測試" },
          { en: "Expert review", zh: "專家評估" },
        ],
      },
    ],
  },

  contact: {
    title: { en: "Let's work together.", zh: "一起合作吧。" },
    body: {
      en: "I'm open to UI/UX and research roles, internships, and collaborations. Email is the fastest way to reach me.",
      zh: "歡迎 UI/UX 與研究相關的職缺、實習與合作邀約。寄信給我是最快的方式。",
    },
    button: { en: "Write to me", zh: "寄信給我" },
  },
};
