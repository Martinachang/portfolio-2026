// site-text.js — every word on the site lives here. Edit this file to change text.
//
// Each string has both languages side by side: { en: "...", zh: "..." }.
// A plain string (a name, a tool, an email) is the same in both languages.
// js/site.js reads this file and puts the words into index.html.

const content = {
  site: {
    name: { en: "Chang Chu-Pei", zh: "張主佩" },
    // The topbar brand always shows the English name first, in both languages — see headerNav below.
    brandName: "Chang Chu-Pei",
    brandNameOther: "張主佩",
    role: { en: "UI/UX designer and researcher", zh: "UI/UX 設計師與研究員" },
    email: "c21m22h29@gmail.com",
    skip: { en: "Skip to the work", zh: "跳到作品" },
    nav: {
      contact: { en: "Contact", zh: "聯絡" },
    },
    // The topbar nav always uses the English words, in both languages — the section labels
    // elsewhere on the page (site.nav above) still translate. Resume links straight to the PDF,
    // not to a section on the page.
    headerNav: {
      work: "Work",
      about: "About",
      resume: "Resume",
      contact: "Contact",
    },
    footer: { en: "Designed and built by Chang Chu-Pei.", zh: "由張主佩設計與製作。" },
    // One string for every case-study page's back link, so the wording cannot drift apart.
    backToWork: { en: "← Back to all work", zh: "← 回到所有作品" },
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
        en: "Four years of studying and practicing UI/UX have taught me that a good interview means hearing what participants leave unsaid, so I always ask one more \"why.\"",
        zh: "4年的 UI/UX 學習與專案實作，讓我明白好的訪談要聽見受訪者沒說出口的話，所以我總會多問一句「為什麼」。",
      },
      {
        en: "A six-month exchange in Kyoto taught me to notice the details. Japanese design anticipates users' needs at every turn, and I've made it a habit to let details do the persuading.",
        zh: "京都半年的交換生活，則讓我學會看細節，日本設計處處替使用者多想一步，我也習慣用細節說服人。",
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
  },

  // Projects, in display order. The first one is featured on the desk.
  // Each project has its own page under work/<id>/: copy one and change data-project in its <body>.
  projects: [
    {
      id: "feetmine",              // must match data-project in the page's <body>
      accent: "#f7943e",           // the project's own colours
      accentWash: "#ffe9d6",
      banner: "#FF9F46",           // flat colour for the Work card banner
      badge: "COURSE",
      name: { en: "FeetMine", zh: "合步合腳" },
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
      // The image on the home page's Work section. FeetMine's case study (work/feetmine/index.html) is a page of its
      // own: its words live in content.feetmine below, not in `phases`.
      workImage: {
        src: "work/feetmine/img/feetmine-app-screens.png",
        alt: { en: "Three FeetMine screens: measurement results, the home dashboard, and the Foot ID card", zh: "三個合步合腳畫面：量測結果、首頁儀表板，以及足型 ID 卡" },
        fit: "contain",
      },
      visualBackground: "linear-gradient(180deg, #FFB26A 0%, #FF820F 100%)",
      visualNoise: true,
      links: [
        { label: { en: "Case study", zh: "完整案例" }, href: "work/feetmine/index.html", primary: true }, // the image links here too
        { label: { en: "Prototype", zh: "Prototype" }, href: "https://www.figma.com/proto/LxhvStEThA0tCHYTZYswsR/%E6%88%91%E7%9A%84?node-id=1897-6798&viewport=8417%2C-2956%2C0.13&t=wnkarCpXSjDauRsS-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1897%3A6798&page-id=0%3A1&show-proto-sidebar=1", external: true },
      ],
    },
    {
      // No case-study page yet — see the TODO on the Case study link below.
      id: "xizhou",
      accent: "#F1BF00",           // the folder yellow from the banner artwork
      accentWash: "#FDF3D7",
      banner: "#F1BF00",           // flat colour for the Work card banner
      badge: "LIVE",
      // An { en, zh } pair, so this card's title switches with the language. ILANDGREEN keeps a
      // plain-string name, so t() hands it back unchanged and it stays English in both.
      name: { en: "Walk Xizhou, Keep Its Story", zh: "與泥探險" },
      nameZh: "與泥探險",          // only read by the desk folder, and only for the first project
      blurb: {
        en: "Walk Xizhou blends the town's local character with new kinds of experience, drawing young people toward rural life and helping pass on its local economy and cultural stories.",
        zh: "透過融合在地特色與創新體驗，增進年輕人對農村的興趣，並促進當地經濟與文化故事的傳承。",
      },
      workImage: {
        src: "work/xizhou/img/xizhoubanner.png",
        alt: {
          en: "The Walk Xizhou key visual: a yellow folder holding the project's sticker sheet, illustrated town guide and a phone showing its LINE chatbot",
          zh: "與泥探險主視覺：一個黃色資料夾，裡面放著貼紙、手繪街區導覽與顯示 LINE 聊天機器人的手機",
        },
        // "cover", not "contain": the artwork is 16:9 in a 4:3 frame, so cover trims only the empty
        // cream at the left and right edges and lets the folder fill the card like the others do.
        fit: "cover",
      },
      // The banner's own cream, so the 16:9 artwork sits invisibly in the 4:3 frame. No visualNoise:
      // the bars above and below the image would go grainy against the flat artwork.
      visualBackground: "#FDF3D7",
      links: [
        // The image links here too (primary: true).
        { label: { en: "Case study", zh: "完整案例" }, href: "work/xizhou/index.html", primary: true },
        // TODO: the first press mention only — more to be added alongside it later.
        { label: { en: "Press", zh: "新聞介紹" }, href: "https://tw.news.yahoo.com/%E7%A8%AE-%E6%A3%B5%E7%A7%91%E6%8A%80%E6%A8%B9-%E7%B5%90-%E4%B8%B2%E4%BA%BA%E6%96%87%E6%9E%9C-%E4%B8%AD%E8%8F%AF%E9%9B%BB%E4%BF%A1%E5%9F%BA%E9%87%91%E6%9C%83%E8%AE%93%E5%BD%B0%E5%8C%96%E6%BA%AA%E5%B7%9E-033730447.html", external: true },
        { label: { en: "Highlights", zh: "成果展示" }, href: "https://www.chtf.org.tw/news/844", external: true },
      ],
    },
    {
      id: "ilandgreen",            // must match data-project in the page's <body>
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
        src: "work/ilandgreen/img/ilandgreen-01.jpg",
        alt: { en: "ILANDGREEN app screens: the persona quiz and the resulting travel itinerary", zh: "綠島的應用畫面：角色測驗與對應的旅行行程" },
      },
      // The image on the home page's Work section only (the case study above still opens with `cover`).
      workImage: {
        src: "work/ilandgreen/img/ilandgreen-app-screens.png",
        alt: { en: "Three ILANDGREEN screens: the travel mood quiz, the home screen, and the soundscape picker", zh: "三個綠島畫面：旅行心情測驗、首頁，以及音景選擇畫面" },
        fit: "contain",
      },
      visualBackground: "linear-gradient(180deg, #CFEDE9 0%, #00D4B4 100%)",
      visualNoise: true,
      visualNoiseOpacity: 0.5,
      links: [
        // No "primary" link, so the cover image falls back to this one (see js/page-home.js).
        { label: { en: "Demo", zh: "體驗" }, href: "demo/ilandgreen-app/index.html", external: true },
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
            { src: "work/ilandgreen/img/ilandgreen-02.jpg", alt: { en: "Persona results: Nature Lover, Eco Traveler, Curious Wanderer", zh: "測驗結果：自然愛好者、生態旅人、好奇漫遊者" } },
            { src: "work/ilandgreen/img/ilandgreen-03.jpg", alt: { en: "The itinerary built from the traveler's persona", zh: "依旅人角色所規劃出的行程" } },
            { src: "work/ilandgreen/img/ilandgreen-04.jpg", alt: { en: "Trip detail screen with slower, lower-impact activities", zh: "行程細節畫面，呈現步調較慢、衝擊較低的活動" } },
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
      name: { en: "Visual Perception of Non-Human Features in Avatars", zh: "虛擬角色之非人類特徵之視覺感知" },
      workImage: {
        src: "img/avatar-perception/avatar-perception-notion.png",
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

  // ---------- The FeetMine case study (work/feetmine/index.html) ----------
  //
  // A page of its own, not built from `phases`: work/feetmine/index.html holds the sections and feetmine.js
  // draws the lists, charts, table and diagrams from the arrays below. Every heading is two lines:
  // `line1` is the dark (or white) half, `line2` the grey half. Numbers here are the deck's own,
  // The deck slides they came from are no longer in the tree; recover one with
  //   git show 6559df9:img/_unused/feetmine-05.jpg > feetmine-05.jpg
  //
  // The Chinese was drafted from the English deck and has not been reviewed by the owner.
  feetmine: {
    hero: {
      alt: { en: "The FeetMine banner artwork: the logo, three foot mascots, and a phone showing the home screen", zh: "合步合腳的主視覺：標誌、三隻腳腳吉祥物，以及顯示首頁的手機" },
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
        en: "A tested app prototype, a Foot ID Card business model for B2C and B2B, and an exhibition at YODEX with an award nomination (Vision Get Wild).",
        zh: "經測試的 App 原型、B2C 與 B2B 的足型 ID 卡商業模式、入圍 Vision Get Wild 以及新一代設計展展出。",
      },
      // Meta: slide 05's Position / Time / Team stat lines, plus its "Graduation Project" pill for Type.
      meta: [
        { label: { en: "Role", zh: "職責" }, value: { en: "UX design, usability test, character design, illustration design", zh: "UX 設計、易用性測試、角色設計、插畫設計" } },
        { label: { en: "Timeline", zh: "時程" }, value: { en: "1 year", zh: "一年" } },
        { label: { en: "Team", zh: "團隊" }, value: { en: "3 undergraduate students, 1 industry advisor", zh: "3 位大學生，1 位業界指導老師" } },
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
        en: "Our feet are the foundation of the body, bearing our weight and maintaining balance. Without proper support, a misaligned foot is like a house on an uneven footing: weight stops spreading evenly, and the strain travels to the knees, hips, and back. Today, up to",
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
        segments: [
          { label: { en: "Inward (overpronation)", zh: "內旋（旋前過度）" }, value: 52 },
          { label: { en: "Outward (supination)", zh: "外旋（旋後）" }, value: 30.6 },
          { label: { en: "Mixed", zh: "混合型" }, value: 8.6 },
          { label: { en: "Normal", zh: "步態正常" }, value: 8.8 },
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
        en: "A physical therapist interview traced foot problems back to uneven loading, most directly caused by shoes — which makes childhood the stage where choosing the right pair matters most.",
        zh: "與物理治療師深入訪談表示，足部會引發問題，源於足部受力不均，其中與鞋子最為直接相關，而兒童時期是最需要正確選鞋的觀念。",
      },
      stagesLabel: { en: "Foot development through life", zh: "一生的足部發展階段" },
      currentFocusNote: { en: "This project's focus", zh: "本專案聚焦的階段" },
      stages: [
        { name: { en: "Birth", zh: "出生" } },
        { name: { en: "Foot Development (Ages 0–14)", zh: "足部發展期（0–14 歲）" }, active: true },
        { name: { en: "Foot Shape Stabilization", zh: "足型穩定期" } },
        { name: { en: "Foot Degeneration (Ages 50+)", zh: "足部退化期（50 歲以上）" } },
        { name: { en: "Seniors", zh: "高齡期" } },
      ],
      points: [
        { title: { en: "Continuous process", zh: "足部發育具連續性影響" }, text: { en: "The development of children's feet lays the foundation for foot health.", zh: "足部發育是一個持續的過程，兒童足部的發育為足部健康奠定了基礎。" } },
        { title: { en: "Age-specific needs", zh: "依年齡而異的需求" }, text: { en: "The key considerations for choosing shoes differ depending on the age group (ages 0–14 are the critical window).", zh: "選鞋的關鍵考量會依年齡層而不同（0–14 歲是發育關鍵）。" } },
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
        en: "These misconceptions impair foot development and long-term foot health.",
        zh: "錯誤觀念易導致足部發展不良，進而影響長期足部健康。",
      },
      items: [
        { icon: "bigger.svg", iconAlt: { en: "A shoe photo marked with a +1 size badge, representing sizing up", zh: "鞋子照片標示 +1 尺寸徽章，代表買大一號" }, title: { en: "Buying one size up", zh: "買大一號" }, text: { en: "Poor stability makes children work harder, so they tire and trip easily.", zh: "無法提供良好的穩定度，孩子需要花費更多力氣，容易累、摔倒。" } },
        { icon: "soft.svg", iconAlt: { en: "A shoe photo with soft, wavy cushioning lines, representing a giving sole", zh: "鞋子照片與柔軟波浪線條，代表容易塌陷的鞋底" }, title: { en: "Softer shoes for comfort", zh: "鞋子越軟越舒服" }, text: { en: "Lacks support and shock absorption, leading to collapsed arches and flat feet.", zh: "無法支撐體重，且不易吸震，長期使足弓易塌陷，造成扁平足。" } },
        { icon: "look.svg", iconAlt: { en: "A shoe photo with sparkle marks, representing a focus on looks", zh: "鞋子照片與閃亮符號，代表只重外型" }, title: { en: "Looks above proper support", zh: "只看外型，忽略楦頭寬度" }, text: { en: "Parents shop on looks and colour, but a child's toes need room to spread. Narrow shoes chafe, squeeze the toes, and can affect bone alignment over time.", zh: "家長挑鞋多以外型與顏色為主，但孩童腳掌前端需要足夠空間讓腳趾自然展開。過窄的鞋楦會擠壓腳趾，長期可能影響骨骼排列。" } },
        { icon: "sandel.svg", iconAlt: { en: "A sandal illustration beside a sun icon, representing summer footwear", zh: "涼鞋插畫搭配太陽圖示，代表夏季鞋款" }, title: { en: "Wear sandals in summer", zh: "夏天讓孩子穿涼鞋" }, text: { en: "Hurts arch development and raises the risk of ankle misalignment during play.", zh: "支撐性差，長時間穿不利足弓發展，可能因跑跳活動而歪斜。" } },
        { icon: "corrective.svg", iconAlt: { en: "A shoe fitted with a corrective insole", zh: "鞋子搭配矯正鞋墊" }, title: { en: "Wear corrective shoes early", zh: "太早穿矯正鞋" }, text: { en: "Meant only for diagnosed flat feet. Wearing them unnecessarily limits mobility and weakens foot muscles.", zh: "提供已有足弓塌陷的孩子穿，一般孩子穿不好活動，且足底力氣不易建立。" } },
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
      // Both languages follow the slide's own card format: a slogan headline plus #-prefixed
      // notes, one per line. The <br> is the same deliberate exception to the site's text-only
      // convention as in Usability Testing below — these strings go through innerHTML in
      // feetmine.js's statItem(), so it renders. The deck's own figures stay in `value` for the
      // record but are no longer displayed in either language.
      items: [
        { value: "48%", title: { en: "New-generation parents search out the brands they trust", zh: "新世代父母搜出信賴「好品牌」" }, text: { en: "# Online platforms carry the most weight<br># Read intent, respond fast, build trust, earn loyalty", zh: "# 網路平台的重要性高<br># 了解消費意圖，即時回應，建立信任感，成為忠實顧客" } },
        { value: "62%", title: { en: "Mobile devices are the best shopping companion", zh: "行動裝置成為最佳消費夥伴" }, text: { en: "# Online shopping saves time, but parents still go to the store to see the real thing", zh: "# 即便網路購物快速省時，但實際購買時父母還是偏好走向線下店看實體" } },
        { value: "84%", title: { en: "New-generation parents learn parenting from video", zh: "新世代父母的影音育兒法" }, text: { en: "# Video teaches fast, and builds goodwill and trust at the same time", zh: "# 影片能快速學習，在產生品牌好感的同時，也能建立信賴感" } },
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
      // line2 carries two invisible line-break guards, not typos: a non-breaking space holding
      // "personalized picks" together, and a word joiner (U+2060) between 指 and 南 — [data-text]
      // sets textContent (js/site.js), so a wrapping <span> never survives render() and can't be
      // used here; these characters are the only technique that works through plain text.
      line2: { en: "to personalized picks", zh: "與個人化選鞋的合腳指⁠南" },
      // Lead: slide 11's own subtitle. Its first sentence is verbatim; the second was rewritten
      // to drop the slide's "ultimate guide" marketing register.
      lead: {
        en: "Stop guessing aimlessly through endless size charts and shoe models. FeetMine brings foot development data and shoe selection into one flow.",
        zh: "別再對著沒完沒了的尺寸表與鞋款瞎猜。FeetMine 是一套整合足部數據與選鞋推薦的 App，打造流暢的選鞋體驗。",
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
        { icon: "icon-scan.svg", iconAlt: { en: "A phone with a scan frame, representing foot measurement", zh: "手機搭配掃描框線，代表足部量測" }, title: { en: "Simplifying foot measurement", zh: "簡化足部量測" }, text: { en: "Quick home measurement without store appointments or waiting.", zh: "在家就能快速量測，不必預約或排隊等候。" } },
        { icon: "icon-guide.svg", iconAlt: { en: "A magnifying glass with a highlight mark, representing personalized guidance", zh: "放大鏡與標記符號，代表個人化指引" }, title: { en: "Guiding personalized fit", zh: "專屬個人化推薦" }, text: { en: "Turn foot data into smart recommendations to avoid sizing guesswork.", zh: "把足部資料轉化為智慧推薦，避免尺寸用猜的。" } },
        { icon: "icon-growth.svg", iconAlt: { en: "An upward trend line with an arrow, representing continuous growth", zh: "向上的趨勢線與箭頭，代表持續成長" }, title: { en: "Tracking continuous growth", zh: "持續追蹤足部成長" }, text: { en: "Integrate foot data tracking and recurring shopping into a seamless cycle as children grow.", zh: "隨孩子成長，將足部資料追蹤與後續購物整合成一個流暢的循環。" } },
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
        altA: { en: "A “Measure Prototype” card with a QR code linking to step-by-step measurement tips", zh: "「量測原型」卡片，內含連結至逐步量測教學的 QR Code" },
        altB: { en: "The AR measurement screen, scanning a child's foot", zh: "AR 量測畫面，正在掃描孩子的腳" },
      },
      two: {
        name: { en: "Foot type & personal mascot", zh: "足型與專屬吉祥物" },
        // Text: slide 15's second sentence (foot profile) plus the Mascot card's own first
        // sentence, both trimmed by deleting their trailing clauses and joined into one sentence
        // (kept apart, the two both opened "The app generates…").
        text: {
          en: "Based on foot metrics — type, arch, instep, width and length — the app generates a personalized foot profile and a unique foot mascot.",
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
        // Kept on one line by #f2-example in editorial.css (white-space: nowrap, shrinking at
        // narrow widths), not by line-break guards — plain text, no invisible characters needed.
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
        altA: { en: "A phone recommending a shoe by foot-type fit, over a photo of a child tying their shoes", zh: "手機顯示依足型比對的鞋款推薦，背景為孩子綁鞋帶的照片" },
        altB: { en: "A shoe selection guide screen showing the child's foot type and a matched recommendation", zh: "選鞋指南畫面，顯示孩子的足型與媒合的鞋款推薦" },
      },
      four: {
        // Name: slide 16's own card title, recased to match the other three feature names.
        name: { en: "Foot shape records: accompanying growth", zh: "足型紀錄：陪伴成長" },
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
        zh: "與 3 位育有 6–12 歲孩童的家長進行易用性測試。",
      },
      items: [
        {
          title: { en: "Can parents follow the guided flow to measure feet?", zh: "家長能依照引導流程量測雙腳嗎？" },
          // Text: a before/after summary in both languages (owner's call), in place of slide 14's
          // two verbatim reaction quotes — which now appear nowhere on the page. The <br> is a
          // deliberate exception to the site's text-only convention (only desk.headline otherwise
          // carries HTML), needed for the two-line layout; both strings go through innerHTML in
          // feetmine.js's numberedItem(), so it renders.
          text: {
            en: "Before: coloured stickers as the scale reference, slow to prepare and slow to scan.<br>After: an NT$10 coin slid under the arch, then scan.",
            zh: "原本：貼貼紙當比例尺，準備與掃描都很久<br>調整後：改用十元硬幣，滑入足弓下方就能掃描",
          },
        },
        {
          title: { en: "Can parents understand the foot type?", zh: "家長看得懂足型代碼嗎？" },
          // Text: slide 14's own paragraph plus its quote, which is set inline where the confusion
          // is described rather than left trailing at the end.
          text: {
            en: "Although 2/3 of parents initially struggled with the Foot Type — \"What does GFNO mean?\" — we kept it, to shift mindsets from buying shoes by length alone toward a real understanding of foot health.",
            zh: "雖然 2/3 的家長一開始不理解足型，提出「GFNO 是什麼意思？」我們仍保留它，希望能將心態從「只看鞋長買鞋」轉變為更深入的足部健康理解。",
          },
        },
      ],
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
      altA: {
        en: "A diagram connecting the app's five core screens — profile and home, AR measurement, foot ID and mascot, smart selection, and growth evaluation — into one flow",
        zh: "一張圖，將應用程式的五個核心畫面──個人檔案與首頁、AR 量測、足型 ID 與吉祥物、智慧選鞋，以及成長評估──串連成一個流程",
      },
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
      // The English was written from the owner's Chinese, not the other way round — it carries the
      // same three lessons and is the one section where Chinese came first.
      body: {
        en: "A year on one project taught me that good research comes from asking, not from persuading. Accurate is not the same as usable: the clearest example is the sticker flow we replaced with a single coin. And testing early is what let us cut the steps only we designers enjoyed.",
        zh: "在同一個專案上待滿一年，我學到好的研究是問出來的，不是說服出來的。準確不等於好用，貼紙改成硬幣就是最好的例子；而且要盡早測試，刪掉那些只有我們設計師自己喜歡的步驟。",
      },
    },

  },

  // ---------- The Walk Xizhou case study (work/xizhou/index.html) ----------
  //
  // Same pattern as content.feetmine above: work/xizhou/index.html holds the sections and every word comes
  // from here through data-text. Unlike FeetMine, this page has no xizhou.js yet, so every list
  // below is written with named keys (step1, step2, …), not an array — nothing here is JS-rendered,
  // so every item has to be reachable by its own data-text path.
  //
  // The English is the brief as given by the owner. The Chinese was drafted from it for this first
  // pass and is unreviewed; anywhere the content itself (not just the translation) was invented to
  // fill a gap in the brief — the research table's rows, the service-journey table, the funnel
  // steps' Chinese — is marked with its own TODO.
  xizhou: {
    hero: {
      alt: { en: "The Walk Xizhou key visual: a yellow folder holding the project's sticker sheet, town map card and LINE chatbot screen", zh: "與泥探險主視覺：一個黃色資料夾，內含貼紙、街區地圖卡與 LINE 機器人畫面" },
    },

    intro: {
      title: { en: "Walk Xizhou, Keep Its Story", zh: "與泥探險" },
      subtitle: {
        en: "A puzzle-based walking kit for a rural township in central Taiwan, designed to pass on local history without depending on a single guide.",
        zh: "為彰化溪州設計的解謎走讀包，讓地方故事不再只靠一個人口述傳遞。",
      },
      body: {
        en: "With Mud (與泥共好) runs farm experiences along the Zhuoshui River in Xizhou, Changhua. Their tours of historic buildings depended entirely on verbal guides — no materials, no tools, no way to scale. We joined through the CHT Foundation's social design programme and built a system that lets the story carry itself.",
        zh: "與泥共好在彰化溪州沿濁水溪推廣農村體驗。他們的古建築導覽全靠口述，沒有教材、沒有教具、無法擴大規模。我們透過中華電信基金會的蹲點計畫加入，設計了一套能讓故事自己說話的系統。",
      },
      problemLabel: { en: "The question", zh: "設計問題" },
      problem: {
        en: "How might we help a small rural team share local history in a way that works even when no one is there to narrate it?",
        zh: "如何幫助人力有限的農村團隊，打造一套不靠口述也能傳遞在地故事的體驗？",
      },
      outcomeLabel: { en: "Outcomes", zh: "成果" },
      outcome: {
        en: "A puzzle walking kit, optimised teaching aids, field signage and an online-to-offline funnel — adopted and run by the With Mud team, presented at the CHT Foundation showcase, and featured as a guest on Lee Wei-wen's Formosa Radio programme ‘People and Land.’",
        zh: "解謎走讀包、優化教具、場域立牌與線上到線下導流機制，由與泥共好團隊實際採用並試跑，並於中華電信基金會成果發表中展示，且受邀參加環宇電臺李偉文老師節目【人與土地】。",
      },
      meta: {
        roleLabel: { en: "Role", zh: "職責" },
        role: { en: "UX research · character design · walking-kit level design", zh: "UX 研究・吉祥物角色設計・走讀關卡設計" },
        timelineLabel: { en: "Timeline", zh: "時程" },
        timeline: { en: "4 months", zh: "4個月" },
        teamLabel: { en: "Team", zh: "團隊" },
        team: { en: "4 students · 1 industry mentor", zh: "4 位學生・1 位業師" },
        typeLabel: { en: "Type", zh: "類型" },
        type: { en: "Social design · CHT Foundation social design programme", zh: "社會設計・中華電信基金會蹲點計畫" },
      },
    },

    process: {
      line1: { en: "Research, design", zh: "研究、設計" },
      line2: { en: "and a live field test", zh: "與實地試跑" },
      lead: {
        en: "Walk Xizhou moved from an online kickoff call to a field-tested kit adopted by the client team.",
        zh: "與泥探險從線上啟動會議，一路走到客戶團隊實際採用的試跑成果。",
      },
      // TODO: Design, Field test and Launch are still drafted from the brief's short phrases —
      // Research and Define are now the owner's own account. Check the remaining three before
      // treating them as final.
      steps: [
        { title: { en: "Research", zh: "研究" }, text: { en: "We gathered background material and drafted an interview outline, discussed the brief in an online meeting, then travelled to Xizhou for a field visit to uncover problems and opportunities.", zh: "初步蒐集資料並列出訪綱，於線上會議討論需求，並實際前往溪州進行考察，發現問題點與機會點。" } },
        { title: { en: "Define", zh: "定義" }, text: { en: "We organised the current situation and a stakeholder map, split users into three personas, ran a competitive analysis, and set the design direction.", zh: "整理現況、利害關係人地圖、劃分三類使用者Persona、列出競品分析並訂出設計方向。" } },
        { title: { en: "Design", zh: "設計" }, text: { en: "Teaching aids, field signage, a puzzle walking kit, and the mascot Ni Bobo.", zh: "設計教具、場域立牌、解謎走讀包，以及吉祥物泥伯伯。" } },
        { title: { en: "Field test", zh: "田野測試" }, text: { en: "The team ran the kit with local children in Xizhou.", zh: "團隊帶著溪州當地孩童實際試跑走讀包。" } },
        { title: { en: "Launch", zh: "上線" }, text: { en: "Presented at the CHT Foundation; adopted by the With Mud team.", zh: "於中華電信基金會發表成果，並由與泥共好團隊採用。" } },
      ],
    },

    problem: {
      line1: { en: "One guide, one tour —", zh: "一個人撐起一場導覽——" },
      line2: { en: "no guide, no story", zh: "人不在，故事就消失" },
      lead: {
        en: "Xizhou has a rich history: a sugar refinery that once defined the town, historic buildings, a close-knit community. None of it was written down or visualised. Every tour depended on one person's voice, and when young people moved to the city, that voice became scarcer.",
        zh: "溪州有豐富的歷史：曾是地方命脈的糖廠、充滿故事的古建築、緊密的鄉里關係。但這一切都沒有被文字化或視覺化。每場導覽都靠一個人的聲音，而隨著年輕人北漂，這個聲音越來越難找。",
      },
      items: [
        { en: "Tour content existed only in the guide's memory — impossible to carry, repeat or scale.", zh: "導覽內容只存在導覽員的記憶裡——無法攜帶、重複或擴大規模。" },
        { en: "Activity information was scattered across FB, IG and ACCUPASS, with no single entry point.", zh: "活動資訊分散於 FB、IG 與 ACCUPASS，沒有統一入口。" },
        { en: "No teaching aids meant each session could only transfer a limited amount of knowledge.", zh: "缺乏教具，每場活動能傳遞的知識有限。" },
        { en: "The main audience was school and cram-school groups; too few visitors meant the session couldn't break even.", zh: "主要客群是學校與補習班團體，人太少時收支難以打平。" },
        { en: "Social posts reached people once and disappeared — no way to re-engage.", zh: "社群貼文觸及一次就消失，沒有可重複接觸的管道。" },
        { en: "Young people had left the town, leaving the organisation short-staffed and dependent on a handful of people.", zh: "年輕人北漂，組織人力不足，高度依賴少數幾個人。" },
      ],
    },

    research: {
      line1: { en: "Three stages of research:", zh: "三個研究階段：" },
      line2: { en: "from needs to the real goal", zh: "從表面需求到真正目標" },
      lead: {
        en: "We started with an online meeting to understand the team's needs, then travelled to Xizhou for a field visit and interviewed three With Mud team members in depth.",
        zh: "我們先透過線上會議了解團隊需求，再前往溪州進行田野調查，並深度訪談了三位與泥共好的團隊成員。",
      },
      tableCaption: { en: "Research stages", zh: "研究階段" },
      tableStage: { en: "Stage", zh: "階段" },
      tableMethod: { en: "Method", zh: "方法" },
      tablePurpose: { en: "Purpose", zh: "目的" },
      // TODO: the three rows below restate research.lead as a table — reasonable, but not the
      // owner's own wording, so check them against it.
      stages: [
        { stage: { en: "Pre-visit", zh: "事前" }, method: { en: "Online meeting", zh: "線上會議" }, purpose: { en: "Understand the team's needs", zh: "了解團隊的需求" } },
        { stage: { en: "Field visit", zh: "田野調查" }, method: { en: "On-site visit to Xizhou", zh: "前往溪州實地考察" }, purpose: { en: "See the space and community firsthand", zh: "親身觀察場域與社區" } },
        { stage: { en: "Interviews", zh: "深度訪談" }, method: { en: "In-depth interviews with 3 team members", zh: "與 3 位團隊成員深度訪談" }, purpose: { en: "Uncover what mattered most to the team", zh: "找出團隊最在意的事" } },
      ],
      quotes: [
        {
          // The word joiner (U+2060) between 榮 and 與 keeps them on one line, same technique as
          // feetmine.compare.line2's 指⁠南 above — [data-text] sets textContent, so a <span> never
          // survives render() here; the invisible character is the only thing that works.
          text: { en: "“We don't expect visitors to fully understand the history. We just hope that Xizhou's past prosperity and culture won't be forgotten.”", zh: "「我們不期望遊客完全明白歷史，只期望過去溪州的繁榮⁠與文化不要被遺忘。」" },
          cite: { en: "— With Mud team member, on Xizhou's sugar-refinery history", zh: "— 與泥共好團隊成員，談溪州糖廠歷史" },
        },
        {
          text: { en: "“People in Changhua are very warm and friendly — there's a real sense of community here.”", zh: "「彰化在地人都非常熱情友善，富有人情味。」" },
          cite: { en: "— With Mud team member (confirmed in our field visit: neighbours greet each other on the street)", zh: "— 與泥共好團隊成員（田調時親身驗證：鄉里之間大家都認識、會互相打招呼）" },
        },
      ],
    },

    users: {
      line1: { en: "Three kinds of people", zh: "三類會走進溪州的人" },
      line2: { en: "who walk into Xizhou", zh: "" },
      lead: {
        en: "Design direction: blend local character with innovative experience to draw young people toward rural life and help pass on local economic and cultural stories.",
        zh: "設計理念：透過融合在地特色與創新體驗，增進年輕人對農村的興趣，並促進當地經濟與文化故事的傳承。",
      },
      items: [
        { title: { en: "Niche-spot seekers", zh: "小眾景點愛好者" }, text: { en: "Escape weekday stress through quiet nature. Design implication: leave breathing room; don't over-explain.", zh: "用寧靜自然風光忘卻平日繁忙。設計啟示：保留留白，不過度解說。" } },
        { title: { en: "Young day-trippers from Taichung", zh: "台中機車族年輕人" }, text: { en: "Xizhou is close; a one-day loop with friends. Design implication: a walkable route completable in a day.", zh: "距離近，適合與朋友一日往返。設計啟示：路線可步行、一日完成。" } },
        { title: { en: "Cram schools and school groups", zh: "補習班與學校團體" }, text: { en: "Bring children to experience nature and local space. Design implication: kit must work for many people at once, without depending on a single presenter.", zh: "帶孩子體驗大自然與在地空間。設計啟示：教具能同時服務多人，不依賴單一講者。" } },
      ],
    },

    insights: {
      line1: { en: "Two insights that", zh: "兩個洞察" },
      line2: { en: "shaped every decision", zh: "決定了所有設計方向" },
      items: [
        {
          icon: "lock.svg", iconAlt: { en: "A lock icon, representing content locked inside people", zh: "鎖頭圖示，代表被鎖在人身上的內容" },
          title: { en: "The bottleneck isn't lack of content — it's content locked inside people", zh: "瓶頸不是內容不夠，而是內容全綁在人身上" },
          text: { en: "Xizhou's stories are rich. What's missing is a way to carry them, repeat them, and let them run without anyone present. The goal wasn't to make a better tour — it was to detach the tour from the person.", zh: "溪州的故事很豐富。缺的是讓它被攜帶、重複、在沒有人的時候繼續運作的方式。目標不是做更好的導覽，而是把導覽從人身上拆下來。" },
        },
        {
          icon: "history.svg", iconAlt: { en: "A history icon, representing Xizhou's past", zh: "歷史圖示，代表溪州的過去" },
          title: { en: "The goal isn't to make visitors understand history — it's to make sure history isn't forgotten", zh: "目標不是讓人記住歷史，而是讓歷史不被遺忘" },
          text: { en: "Once the goal shifted from 'transfer knowledge' to 'leave a memory,' gamification stopped being decoration and became the right answer: an experience that makes people actively engage leaves a deeper trace than a correct and complete explanation.", zh: "當目標從「傳遞知識」變成「不被遺忘」，遊戲化就不再是包裝，而是正解：讓人主動投入的體驗，比正確而完整的知識留下更深的痕跡。" },
        },
      ],
    },

    decisions: {
      line1: { en: "Five decisions,", zh: "五個設計決策，" },
      line2: { en: "each with a reason", zh: "每個都有為什麼" },
      lead: {
        en: "Every choice was constrained by the same premise: the team is small, the budget is limited, and the solution must keep working after we leave.",
        zh: "每個選擇都建立在同一個前提：組織人力少、預算有限，方案必須在我們離開後還能繼續運作。",
      },
      items: [
        { icon: "bag.svg", iconAlt: { en: "A bag icon, representing the physical walking kit", zh: "包包圖示，代表實體走讀包" }, title: { en: "A physical kit, not an app", zh: "實體走讀包，不做 App" }, text: { en: "No one on the team can maintain a digital product. A physical kit is made once and handed out repeatedly — and participants take it home as a keepsake.", zh: "組織沒有人能維護數位產品。實體包一次製作即可重複發放，參與者還能帶回家當紀念。" } },
        { icon: "inoutdoor.svg", iconAlt: { en: "An indoor/outdoor icon, representing the alternating stops", zh: "室內外圖示，代表室內外場域交替" }, title: { en: "Alternating indoor and outdoor stops", zh: "室內外場域交替" }, text: { en: "Our field visit showed that long outdoor sessions in summer Xizhou hurt the experience. Alternating stops create natural rest points without scheduling breaks.", zh: "田調時親身感受到夏季長時間戶外活動的疲憊。室內外交替自然形成休息點，不必額外安排。" } },
        { icon: "doc.svg", iconAlt: { en: "A document icon, representing the paper worksheet", zh: "文件圖示，代表紙本學習單" }, title: { en: "Paper worksheet + QR code, not pure paper or pure digital", zh: "紙本學習單＋QR code，不純紙本也不純數位" }, text: { en: "Paper keeps the on-site ritual of writing and discussion. The QR code carries deeper knowledge that can be updated later without reprinting.", zh: "紙本保留現場書寫與討論的儀式感，QR code 補充延伸知識且可隨時更新，不必重印。" } },
        { icon: "tree.svg", iconAlt: { en: "A branching-tree icon, representing the funnel from social media to LINE", zh: "樹狀圖示，代表從社群導流至 LINE" }, title: { en: "Funnel from IG/FB to official LINE", zh: "從 FB/IG 導流到官方 LINE" }, text: { en: "A social post reaches people once and disappears. LINE lets the team push new events repeatedly, turning a one-off impression into an ongoing relationship.", zh: "社群貼文觸及一次就消失。LINE 讓團隊重複推播新活動，把一次曝光變成長期關係。" } },
        { icon: "shop.svg", iconAlt: { en: "A shop icon, representing the local partner shop", zh: "商店圖示，代表在地合作商家" }, title: { en: "Journey ends at a local partner shop", zh: "旅程終點設在在地合作商家" }, text: { en: "Routing visitors to a partner for their final reward spills the economic benefit into the wider community — consistent with the With Mud brand's core value of 共好 (shared flourishing).", zh: "把最終獎勵設在合作商家，讓效益外溢到整個聚落，呼應品牌核心主張「共好」。" } },
      ],
    },

    features: {
      eyebrow1: "Design #1",
      eyebrow2: "Design #2",
      eyebrow3: "Design #3",
      eyebrow4: "Design #4",
      one: {
        name: { en: "Teaching aids & field signage", zh: "教具與場域立牌" },
        text: {
          en: "We redesigned the 'One-Day Cattle Farmer' activity worksheet: paper for on-site guidance, a QR code for extended knowledge that satisfies curiosity. We added signage throughout the site so the space explains itself, reducing how much the guide needs to narrate.",
          zh: "我們重新設計「一日養牛人」的學習單：紙本負責現場引導，QR code 補充延伸知識、激發好奇心。場域內加上介紹立牌，讓空間自己說明，減少導覽員口述的負擔。",
        },
        panelALabel: { en: "The original outdoor blackboard, cracked and worn from wind and rain", zh: "原場域為戶外黑板，經風吹雨淋已龜裂或斑駁" },
        panelBLabel: { en: "New on-site signage in durable PP board with clear, legible text", zh: "新增場域立牌，塑膠pp板不易損壞且文字清晰" },
      },
      two: {
        name: { en: "Puzzle walking kit", zh: "解謎走讀包" },
        text: {
          en: "Xizhou's history anchors the route. Historic buildings become stops on a walkable path, with indoor and outdoor stages alternating to manage summer heat. Each card carries a puzzle, a tip from Ni Bobo, and a stamp box.",
          zh: "以溪州歷史故事為主軸，把古建築串成可步行的解謎路線，室內外交替應對夏季的炎熱。每張關卡卡片都有謎題、泥伯伯的提示，以及蓋章欄。",
        },
        panelALabel: { en: "Route map", zh: "走讀路線地圖" },
        panelBLabel: { en: "Level card", zh: "關卡卡片" },
      },
      three: {
        name: { en: "Mascot: Ni Bobo", zh: "吉祥物：泥伯伯" },
        text: {
          en: "Teaching aids, signage, walking-kit cards and social posts all live in different formats and sizes. Ni Bobo is the single visual element that threads them together, making every touchpoint recognisable as one system.",
          zh: "教具、立牌、走讀卡片與社群貼文分屬不同媒材與尺寸。泥伯伯是貫穿其中的唯一視覺元素，讓每個接觸點都被認出是同一套體驗。",
        },
        // panelALabel/panelBLabel are unused now — design-3.jpg (below) replaced both panels with
        // one image, same as Feature #4's funnel diagram. Left here, not deleted, same reasoning.
        panelALabel: { en: "Character sheet", zh: "角色設定稿" },
        panelBLabel: { en: "Applied across materials", zh: "跨媒材應用" },
        alt: {
          en: "Ni Bobo's character sheet alongside the mascot applied across teaching aids, signage and social materials",
          zh: "泥伯伯的角色設定稿，以及吉祥物應用於教具、立牌與社群素材的畫面",
        },
      },
      four: {
        name: { en: "Online-to-offline funnel", zh: "線上到線下導流" },
        text: {
          en: "Starting from existing IG and FB accounts, visitors complete a small puzzle task online to earn a kit discount. They join the official LINE account, use the kit on-site, then redeem a local discount and an origami reward at a partner shop. LINE continues to push new events after.",
          zh: "從既有的 IG 與 FB 出發，線上完成解謎小任務即可獲得走讀包折扣。加入官方 LINE 後開始走讀，完成後至合作商家領取在地折扣與摺紙小獎勵，LINE 也持續推播新活動。",
        },
        panelALabel: { en: "Funnel overview", zh: "導流機制總覽" },
        panelBLabel: { en: "LINE chatbot", zh: "LINE 聊天機器人" },
        // TODO: the funnel steps' Chinese is a straight translation, not verbatim from the brief.
        funnel: {
          steps: [
            { en: "Complete IG/FB puzzle task", zh: "完成 IG/FB 解謎任務" },
            { en: "Earn kit discount", zh: "獲得走讀包折扣" },
            { en: "Join official LINE", zh: "加入官方 LINE" },
            { en: "On-site walking kit", zh: "現場走讀包體驗" },
            { en: "Redeem reward at partner shop", zh: "至合作商家兌換獎勵" },
            { en: "LINE pushes new events", zh: "LINE 持續推播新活動" },
          ],
        },
      },
    },

    business: {
      line1: { en: "A loop that benefits", zh: "一個讓三方共好的循環" },
      line2: { en: "visitors, the team and local shops", zh: "" },
      lead: {
        en: "The kit connects three groups: visitors who want an engaging experience, With Mud who need a repeatable programme, and local shops who gain foot traffic. Each benefits the others.",
        zh: "走讀包串連三個對象：想要有趣體驗的遊客、需要可複製活動的與泥共好，以及希望帶進客流的在地商家。三方互相促成。",
      },
      cards: [
        { title: { en: "For visitors", zh: "對遊客" }, text: { en: "Gamified tasks lower the barrier to join. Completing the route earns tangible rewards.", zh: "遊戲化任務降低參與門檻，完成路線可獲得實體獎勵。" } },
        { title: { en: "For With Mud", zh: "對與泥共好" }, text: { en: "LINE followers grow; new events can be pushed repeatedly. Tour content no longer depends on verbal delivery.", zh: "LINE 好友持續累積，可重複推播新活動。導覽內容不再全靠口述。" } },
        { title: { en: "For local shops", zh: "對在地商家" }, text: { en: "The kit's final destination is a partner shop, routing visitor spending into the local community.", zh: "走讀包的終點在合作商家，把遊客動線導向在地消費。" } },
      ],
      flowTitle: { en: "Service journey", zh: "服務流程" },
      // TODO: the journey table's headers are translated from the brief; its three cells are
      // this pass's own summary of feature #4's funnel, not the owner's wording — check both.
      journeyBeforeLabel: { en: "Before", zh: "事前" },
      journeyBefore: { en: "Discover Walk Xizhou through IG or FB and complete a small puzzle task to unlock a kit discount.", zh: "透過 IG 或 FB 發現與泥探險，完成小解謎任務解鎖走讀包折扣。" },
      journeyDuringLabel: { en: "During", zh: "過程中" },
      journeyDuring: { en: "Join the official LINE account, then use the walking kit on-site to explore Xizhou's history.", zh: "加入官方 LINE，接著在現場使用走讀包探索溪州歷史。" },
      journeyAfterLabel: { en: "After", zh: "事後" },
      journeyAfter: { en: "Redeem a discount and an origami reward at a partner shop; LINE keeps pushing new events.", zh: "至合作商家兌換折扣與摺紙小獎勵；LINE 持續推播新活動。" },
    },

    results: {
      line1: { en: "Results", zh: "成果" },
      line2: { en: "and recognition", zh: "與肯定" },
      items: [
        { title: { en: "Presented at the CHT Foundation showcase", zh: "於中華電信基金會蹲點成果發表中展示" }, text: { en: "The project was publicly presented as part of the 2024 CHT Foundation Social Design Programme.", zh: "專案於 2024 年中華電信基金會蹲點創新設計行動成果發表中公開展示。" } },
        { title: { en: "Adopted and field-tested by the With Mud team", zh: "由與泥共好團隊實際採用並試跑" }, text: { en: "The kit was made and run by the With Mud team with local children in Xizhou, then shared on the team's official social channels.", zh: "走讀包由與泥共好團隊帶領溪州在地孩子試跑，並在官方社群發布。" } },
        { title: { en: "Featured on FM96.7 Formosa Radio's ‘People and Land’", zh: "參與 FM96.7 環宇廣播電臺節目【人與土地】" }, text: { en: "Shared the team's design philosophy and collaboration process, along with the insights and local stories gathered from visiting Changhua Xizhou in person.", zh: "分享團隊設計理念與合作過程，以及實際探訪彰化溪州後的體悟與在地故事" } },
      ],
      // TODO: photo captions translated for this pass, not given in the brief.
      photos: [
        { en: "CHT Foundation showcase", zh: "中華電信基金會成果發表" },
        { en: "Field test with local children", zh: "與在地孩童的實地測試" },
        { en: "With Mud team at the event", zh: "與泥共好團隊出席活動" },
      ],
    },

    reflection: {
      line1: { en: "What I", zh: "我學到" },
      line2: { en: "learned", zh: "的事" },
      body: {
        en: "In a resource-constrained setting, the best design isn't always the most complete one — it's the one the organisation can keep running on its own. The line ‘we just hope it won't be forgotten’ reshaped the entire design direction, and it's exactly the kind of thing that surfaces when I make a habit of asking one more ‘why.’",
        zh: "在資源受限的場域，最好的設計不一定最完整，而是組織自己能持續運作的那一個。「只期望不要被遺忘」這句話改寫了整個設計方向，也是我習慣多問一句「為什麼」的地方。",
      },
    },

  },

  about: {
    greeting: { en: "Hello! I'm Chang Chu-Pei.", zh: "你好，我是張主佩。" },
    photoAlt: { en: "Chang Chu-Pei standing in front of hydrangeas", zh: "張主佩站在繡球花前" },
    bio: [
      {
        en: "I'm a recent UI/UX graduate with 4 years of hands-on UIUX Design, built up from my undergraduate through graduate studies.",
        zh: "我是一位剛畢業的 UI/UX 新鮮人，從大學到研究所累積了四年的使用者訪談、原型與易用性測試經驗。",
      },
      {
        en: "As AI develops fast, I know UI/UX faces new challenges too. But the old saying still holds: I am very willing to learn!",
        zh: "隨著 AI 快速發展，我了解 UI/UX 也迎來了新的挑戰，但還是那句老話：我很願意學！",
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
    Figma: "img/logos/figma.svg",
    "Adobe XD": "img/logos/adobe-xd.svg",
    Illustrator: "img/logos/illustrator.svg",
    Photoshop: "img/logos/photoshop.svg",
    "After Effects": "img/logos/after-effects.svg",
    Canva: "img/logos/canva.svg",
    Miro: "img/logos/miro.svg",
    Notion: "img/logos/notion.svg",
    "Visual Studio Code": "img/logos/visual-studio-code.svg",
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
          // A plain string here means "the same in both languages", which is right for a product
          // name. These two are methods, not products, so they need both languages written out.
          "Figma", "Adobe XD", "Illustrator", "Photoshop", "After Effects", "Canva",
          { en: "Illustration design", zh: "插畫設計" },
          "Miro",
          { en: "KJ method", zh: "KJ法" },
          "Crazy 8", "Visual Studio Code",
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
