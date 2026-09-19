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
        zh: "我是一位來自台北的 UI/UX 設計師與研究員。有四年的訪談、原型與易用性測試經驗。",
      },
      {
        en: "Kyoto exchange alumna, eager to bring fresh research insights and continuous learning into product teams.",
        zh: "在京都交換的一個學期，體驗不同文化的設計。",
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
        zh: "童鞋由家長挑選，卻常常買錯。合步合腳用 AR 在家量測孩子的腳，推薦合腳的鞋，並持續記錄成長。",
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
        zh: "旅人往往不知道如何在不放棄理想行程的前提下永續旅行。綠島透過一份簡短測驗，將旅人配對到「自然愛好者」「生態旅人」或「好奇漫遊者」的角色，再據此規劃一趟更慢、衝擊更低的行程。",
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
        zh: "我的碩士論文：一項橫跨台灣與日本的研究，探討貓耳朵、不自然膚色等非人類特徵如何形塑對虛擬化身的第一印象。",
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
      subtitle: {
        en: "Graduation project—a personalized parent-child app that helps parents choose the right shoes for growing feet",
        zh: "畢業製作——一款親子個人化 App，幫家長為成長中的雙腳挑對鞋子",
      },
      body: {
        en: "Parents buy their children's shoes, yet many fail to choose the right pair. Our team of three spent a year researching children's foot development and how parents shop, then designed FeetMine: an app that lets parents measure their child's feet at home, understand their foot type, and get shoe recommendations that grow with their child.",
        zh: "童鞋多半由家長挑選，卻常常買錯。我們三人的團隊花了一年研究孩童的足部發展與家長的購物行為，設計出合步合腳：一款讓家長在家量測孩子雙腳、了解足型，並取得隨孩子一起成長的選鞋建議的 App。",
      },
      problemLabel: { en: "Problem", zh: "問題" },
      problem: {
        en: "How might we educate parents and provide reliable tools to easily select the right shoe size and structure?",
        zh: "我們該如何教育家長，並提供可靠的工具，讓他們輕鬆選對鞋子的尺寸與結構？",
      },
      outcomeLabel: { en: "Outcome", zh: "成果" },
      outcome: {
        en: "A tested end-to-end app prototype, a Foot ID Card business model for B2C and B2B, and an exhibition at YODEX with an award nomination.",
        zh: "一套經過測試的完整 App 原型、一個同時面向 B2C 與 B2B 的足型 ID 卡商業模式，以及一次入圍獲提名的新一代設計展展出。",
      },
      meta: [
        { label: { en: "Role", zh: "角色" }, value: { en: "UX design, usability testing, character design, illustration", zh: "UX 設計、易用性測試、角色設計、插畫" } },
        { label: { en: "Timeline", zh: "時程" }, value: { en: "1 year", zh: "一年" } },
        { label: { en: "Team", zh: "團隊" }, value: { en: "3 designers, 1 advisor", zh: "3 位設計師，1 位指導老師" } },
        { label: { en: "Type", zh: "類型" }, value: { en: "Graduation project", zh: "畢業製作" } },
      ],
    },

    // The five phases are inferred from the deck; the owner still has to confirm them.
    process: {
      line1: { en: "Research, design", zh: "一年之內，" },
      line2: { en: "& test in 1 year", zh: "研究、設計與測試" },
      lead: {
        en: "FeetMine went from desk research to a tested, exhibited prototype. Here is how the work was broken down.",
        zh: "合步合腳從桌面研究一路走到經過測試、公開展出的原型。以下是工作的拆解方式。",
      },
      steps: [
        { title: { en: "Research", zh: "研究" }, text: { en: "Desk research on foot health, a physical therapist interview, and user research on footwear misconceptions and parent shopping behavior.", zh: "足部健康的桌面研究、物理治療師訪談，以及針對選鞋迷思與家長購物行為的使用者研究。" } },
        { title: { en: "Define", zh: "定義" }, text: { en: "In-depth interviews with 7 parents and a competitive analysis.", zh: "與 7 位家長進行深度訪談，並完成競品分析。" } },
        { title: { en: "Design", zh: "設計" }, text: { en: "Design goals, core flows, the foot type system, and a personal foot mascot.", zh: "訂定設計目標、核心流程、足型系統，以及專屬的腳腳吉祥物。" } },
        { title: { en: "Test & iterate", zh: "測試與迭代" }, text: { en: "Moderated usability tests with 3 parents, then a redesigned measurement flow.", zh: "與 3 位家長進行主持式易用性測試，接著重新設計量測流程。" } },
        { title: { en: "Launch", zh: "推出" }, text: { en: "Business model, YODEX exhibition, and an industry pitch.", zh: "商業模式、新一代設計展展出，以及向業界提案。" } },
      ],
    },

    background: {
      line1: { en: "Small foot flaws,", zh: "足部小問題，" },
      line2: { en: "big body problems", zh: "身體大麻煩" },
      lead: {
        en: "Our feet carry our weight and keep us balanced. Without proper support, misalignment can cause chain-reaction pain in the knees, hips, and back. Up to",
        zh: "雙腳承擔體重並維持平衡。缺乏適當支撐時，足部歪斜會引發膝蓋、髖部與背部的連鎖疼痛。高達",
      },
      statValue: "80%",
      leadEnd: { en: "of adults suffer from foot-related issues.", zh: "的成年人都有足部相關的困擾。" },
      eyebrow: { en: "Desk research", zh: "桌面研究" },
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
        title: { en: "Over 90.9% walk with an abnormal gait", zh: "超過 90.9% 的人步態異常" },
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
      line1: { en: "Healthy feet", zh: "健康的雙腳，" },
      line2: { en: "start in childhood", zh: "從童年開始" },
      lead: {
        en: "A physical therapist interview showed that most adult foot problems begin in childhood.",
        zh: "物理治療師的訪談顯示，多數成人的足部問題都始於童年。",
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
        { title: { en: "Continuous process", zh: "持續發展的過程" }, text: { en: "Children's foot development lays the foundation for lifelong foot health.", zh: "孩童時期的足部發展，是一生足部健康的基礎。" } },
        { title: { en: "Age-specific needs", zh: "依年齡而異的需求" }, text: { en: "What matters when choosing shoes differs by age (0–14).", zh: "選鞋時的關鍵考量會隨年齡（0–14 歲）而不同。" } },
        { title: { en: "The decision gap", zh: "決策落差" }, text: { en: "Parents choose their children's shoes, but often choose wrong.", zh: "孩子的鞋子由家長挑選，卻常常選錯。" } },
      ],
      quote: {
        en: "Parents buy their children's shoes, yet many fail to choose the right pair.",
        zh: "童鞋多半由家長挑選，卻常常買錯。",
      },
    },

    misconceptions: {
      line1: { en: "Common misconceptions", zh: "童鞋的" },
      line2: { en: "in children's footwear", zh: "常見迷思" },
      lead: {
        en: "User research showed five beliefs that hurt children's foot development and raise the risk of foot problems later in life.",
        zh: "使用者研究發現五個迷思，會傷害孩子的足部發展，並提高日後罹患足部問題的風險。",
      },
      items: [
        { title: { en: "Buying one size up", zh: "買大一號" }, text: { en: "Causes poor stability and fatigue, leading to frequent tripping.", zh: "導致穩定度不足與疲勞，容易絆倒。" } },
        { title: { en: "Softer shoes for comfort", zh: "鞋子越軟越舒服" }, text: { en: "Lack support and shock absorption, leading to collapsed arches and flat feet.", zh: "缺乏支撐與避震，導致足弓塌陷、扁平足。" } },
        { title: { en: "Looks over proper support", zh: "外觀優先於支撐性" }, text: { en: "Kids need wider toe boxes. Narrow shoes cause chafing and bone misalignment.", zh: "孩童需要較寬的楦頭，過窄的鞋子會摩擦並影響骨骼排列。" } },
        { title: { en: "Sandals in summer", zh: "夏天讓孩子穿涼鞋" }, text: { en: "Hurt arch development and raise the risk of ankle misalignment during play.", zh: "影響足弓發育，也提高玩耍時腳踝歪斜的風險。" } },
        { title: { en: "Corrective shoes too early", zh: "太早穿矯正鞋" }, text: { en: "Meant only for diagnosed flat feet. Unnecessary use limits mobility and weakens foot muscles.", zh: "僅適用於已確診的扁平足，不必要的穿著反而限制活動、削弱足部肌力。" } },
      ],
    },

    parents: {
      line1: { en: "How parents", zh: "現代家長" },
      line2: { en: "shop today", zh: "怎麼買東西" },
      lead: {
        en: "Understanding the target audience: how next-generation parents discover brands, verify quality, and decide what to trust.",
        zh: "理解目標族群：新一代家長如何認識品牌、確認品質，以及決定要相信什麼。",
      },
      items: [
        { value: "48%", title: { en: "of brand discovery happens online", zh: "的品牌認識來自線上" }, text: { en: "Loyalty starts at the first digital touchpoint.", zh: "忠誠度從第一個數位接觸點就開始建立。" } },
        { value: "62%", title: { en: "still go in-store to verify quality", zh: "仍會到實體店確認品質" }, text: { en: "Parents research on mobile but check before buying.", zh: "家長在手機上做功課，但購買前仍會親自確認。" } },
        { value: "84%", title: { en: "report higher brand favorability after watching video content", zh: "在看過影片內容後對品牌好感度提升" }, text: { en: "Video tutorials address parenting concerns and build trust.", zh: "影片教學能回應育兒上的疑慮，並建立信任。" } },
      ],
    },

    pains: {
      line1: { en: "What parents", zh: "家長真正" },
      line2: { en: "struggle with", zh: "卡住的地方" },
      lead: {
        en: "Semi-structured, in-person interviews with 7 parents of children aged 6–12.",
        zh: "與 7 位育有 6–12 歲孩童的家長進行半結構式面對面訪談。",
      },
      painLabel: { en: "Pain point", zh: "痛點" },
      needLabel: { en: "Need", zh: "需求" },
      items: [
        {
          pain: { en: "Children struggle to express comfort", zh: "孩子說不清楚舒不舒服" },
          quote: { en: "My kid only cares about how shoes look, not how they fit.", zh: "我的孩子只在意鞋子好不好看，不在意合不合腳。" },
          cite: { en: "Father, 28", zh: "父親，28 歲" },
          need: { en: "Accurate sizing & fit guidance", zh: "精準的尺寸與合腳指引" },
          needText: { en: "Reliable guidance on fit and support, beyond style.", zh: "超越外觀的合腳與支撐性建議，而且值得信賴。" },
        },
        {
          pain: { en: "Lack of personalized foot data", zh: "沒有孩子專屬的足部資料" },
          quote: { en: "There's lots of advice online, but none fits my child, so I don't really do research.", zh: "網路上建議很多，但沒有一個適合我的孩子，所以我乾脆不做功課。" },
          cite: { en: "Mother, 34", zh: "母親，34 歲" },
          need: { en: "Personalized data online", zh: "線上的個人化資料" },
          needText: { en: "A fast app that makes shoe shopping easier.", zh: "一個快速的 App，讓選鞋這件事變簡單。" },
        },
      ],
    },

    compare: {
      line1: { en: "Covering the", zh: "涵蓋" },
      line2: { en: "whole journey", zh: "完整的旅程" },
      lead: {
        en: "We mapped the shoe-buying journey against three competitors. None of the three competitors help parents after purchase.",
        zh: "我們把選鞋旅程與三個競品逐段對照。三個競品都沒有在購買之後繼續陪伴家長。",
      },
      caption: { en: "The shoe-buying journey, FeetMine against three competitors", zh: "選鞋旅程：合步合腳與三個競品的對照" },
      productLabel: { en: "Product", zh: "產品" },
      covered: { en: "Covered", zh: "有涵蓋" },
      notCovered: { en: "Not covered", zh: "未涵蓋" },
      columns: [
        { name: { en: "Goal", zh: "目標" }, note: { en: "define needs", zh: "釐清需求" } },
        { name: { en: "Measure", zh: "量測" }, note: { en: "measure feet", zh: "量測雙腳" } },
        { name: { en: "Select", zh: "挑選" }, note: { en: "compare options", zh: "比較選項" } },
        { name: { en: "Purchase", zh: "購買" }, note: { en: "verify & buy", zh: "確認並購買" } },
        { name: { en: "Evaluate", zh: "評估" }, note: { en: "track comfort", zh: "追蹤舒適度" } },
      ],
      rows: [
        { name: "FeetMine", highlight: true, cells: [{}, {}, {}, {}, {}] },
        { name: "A.S.O", cells: [{}, { note: { en: "Book an in-store measurement", zh: "需預約到店量測" } }, {}, {}, null] },
        { name: "OverNice", cells: [null, { note: { en: "Store-provided tools", zh: "使用店內提供的工具" } }, { note: { en: "Choose the right insole", zh: "挑選合適的鞋墊" } }, null, null] },
        { name: "Baby View", cells: [{}, { note: { en: "Only measures foot length", zh: "只量測足長" } }, {}, {}, null] },
      ],
    },

    goals: {
      line1: { en: "Healthy childhood steps", zh: "健康的童年步伐，" },
      line2: { en: "for lifelong comfort", zh: "換一生的舒適" },
      items: [
        { title: { en: "Simplify foot measurement", zh: "簡化足部量測" }, text: { en: "Quick home measurement, with no store appointments or waiting.", zh: "在家就能快速量測，不必預約或排隊等候。" } },
        { title: { en: "Guide personalized fit", zh: "引導個人化合腳" }, text: { en: "Turn foot data into recommendations, so parents stop guessing sizes.", zh: "把足部資料轉成推薦，讓家長不必再猜尺寸。" } },
        { title: { en: "Track continuous growth", zh: "追蹤持續成長" }, text: { en: "Connect foot tracking and recurring shopping as children grow.", zh: "隨孩子成長，把足型追蹤與後續購物串在一起。" } },
      ],
    },

    features: {
      eyebrow1: "Feature #1",
      eyebrow2: "Feature #2",
      eyebrow3: "Feature #3",
      eyebrow4: "Feature #4",
      one: {
        name: { en: "AR foot measurement", zh: "AR 足部量測" },
        text: {
          en: "Parents measure their child's feet at home with AR. Usability testing showed stickers were too slow, so we replaced them with coin calibration: slide an NT$10 coin under the arch, then scan.",
          zh: "家長在家就能用 AR 量測孩子的腳。易用性測試顯示貼紙太花時間，因此我們改用硬幣校正：把一枚十元硬幣滑到足弓下方，再開始掃描。",
        },
        altA: { en: "The AR measurement screen, scanning a child's foot", zh: "AR 量測畫面，正在掃描孩子的腳" },
        altB: { en: "The FeetMine home screen with the child's latest foot length and next shoe-changing day", zh: "合步合腳首頁，顯示孩子最新的足長與下次換鞋日" },
      },
      two: {
        name: { en: "Foot type & personal mascot", zh: "足型與專屬吉祥物" },
        text: {
          en: "Five metrics (type, arch, instep, width, length) create a foot type code like GFNO-20, plus a unique mascot that parents can recolor.",
          zh: "五項指標（足型、足弓、足背、足寬、足長）組成像 GFNO-20 這樣的足型代碼，並生成一隻可以自己換色的專屬吉祥物。",
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
        name: { en: "Shoe recommendations by foot type", zh: "依足型推薦鞋款" },
        text: {
          en: "Recommendations match each child's foot profile on performance and materials. Parents read reviews from families with the same foot type, so parents buy with confidence and make fewer sizing mistakes.",
          zh: "推薦會依每個孩子的足型檔案，比對鞋款的性能與材質。家長也能看到相同足型家庭的評價，因此買得安心，也更少買錯尺寸。",
        },
        altA: { en: "A parent browsing a recommended shoe and the foot types it suits", zh: "家長正在瀏覽推薦鞋款，以及這雙鞋適合的足型" },
        altB: { en: "The Foot ID card screen with the child's foot type and partner stores", zh: "足型 ID 卡畫面，顯示孩子的足型與合作店家" },
      },
      four: {
        name: { en: "Foot records that grow with your child", zh: "陪孩子一起長大的足部紀錄" },
        text: {
          en: "Every measurement is saved to the child's Foot ID Card with growth trends and raw foot outlines. Parents and children can overlay their footprints to keep a record of growth.",
          zh: "每一次量測都會存進孩子的足型 ID 卡，包含成長趨勢與原始足型外框。親子可以把彼此的足印疊在一起，留下成長的紀錄。",
        },
        altA: { en: "The growth evaluation screen with a foot-length trend chart", zh: "成長評估畫面，包含足長趨勢圖" },
        altB: { en: "The foot record screen with saved footprints and a family footprint comparison", zh: "足部紀錄畫面，包含歷次足印與家庭足印比對" },
      },
    },

    testing: {
      line1: { en: "Testing", zh: "和家長" },
      line2: { en: "with parents", zh: "一起測試" },
      lead: {
        en: "Moderated usability tests with 3 parents of children aged 6–12, on the mobile prototype.",
        zh: "以行動原型，與 3 位育有 6–12 歲孩童的家長進行主持式易用性測試。",
      },
      items: [
        {
          title: { en: "Can parents follow the measurement flow?", zh: "家長能跟著量測流程走完嗎？" },
          text: {
            en: "Not easily. \"Stickers waste time, scanning takes too long.\" We switched to expert-validated coin calibration. Parents found coin calibration much simpler and faster.",
            zh: "沒那麼容易。「貼貼紙很花時間，掃描也要很久。」我們改用經專家驗證的硬幣校正，家長覺得簡單也快得多。",
          },
        },
        {
          title: { en: "Can parents understand the foot type?", zh: "家長看得懂足型代碼嗎？" },
          text: {
            en: "2 of 3 parents struggled at first: \"What does GFNO mean?\" We kept the code on purpose, to move parents beyond buying by length alone, and we added a clear legend.",
            zh: "3 位家長中有 2 位一開始看不懂：「GFNO 是什麼意思？」我們刻意保留代碼，希望家長不再只看鞋長買鞋，同時補上清楚的圖例。",
          },
        },
      ],
      beforeLabel: { en: "AS-IS: sticker tracking", zh: "原始版本：貼紙追蹤" },
      afterLabel: { en: "TO-BE: coin calibration", zh: "優化版本：硬幣校正" },
      beforeAlt: { en: "The old measurement flow: six screens asking parents to place coloured stickers on five foot points", zh: "舊的量測流程：六個畫面，要家長在五個足部位置貼上彩色貼紙" },
      afterAlt: { en: "The new measurement flow: one screen asking for a ten-dollar coin as a reference", zh: "新的量測流程：一個畫面，只要準備一枚十元硬幣作為參考" },
    },

    business: {
      line1: { en: "The Foot ID Card", zh: "足型 ID 卡" },
      line2: { en: "as a business model", zh: "作為商業模式" },
      lead: {
        en: "By archiving foot profiles and scan histories, FeetMine can partner with shoe retailers online and offline to match foot types with the retailers' inventory.",
        zh: "透過建檔足型資料與掃描紀錄，合步合腳可以和線上與線下的鞋店合作，把足型與店家的庫存互相配對。",
      },
      cards: [
        { title: { en: "To customers", zh: "對消費者" }, text: { en: "Partner shoes matched to each foot type, backed by peer reviews.", zh: "依足型配對合作鞋款，並有同型使用者的評價作為佐證。" } },
        { title: { en: "To businesses", zh: "對品牌" }, text: { en: "Feedback across many foot profiles, to understand needs and improve product design.", zh: "彙整多種足型的回饋，理解需求並優化產品設計。" } },
      ],
      flowTitle: { en: "Service flow", zh: "服務流程" },
      flowCaption: {
        en: "End-to-end support before, during and after the purchase.",
        zh: "在購買前、購買中與購買後，提供全程的支援。",
      },
      loop: {
        user: { en: "User", zh: "使用者" },
        foot: { en: "Foot", zh: "足部" },
        shoes: { en: "Shoes", zh: "鞋款" },
        store: { en: "Shoe store", zh: "鞋店" },
        measure: { en: "AR measurement", zh: "AR 量測" },
        comfort: { en: "Wearing comfort", zh: "穿著舒適度" },
        specs: { en: "Product specs", zh: "產品規格" },
        feedback: { en: "Feedback", zh: "回饋" },
        maps: [
          { from: { en: "type, instep", zh: "足型、足背" }, to: { en: "shoes", zh: "鞋款" } },
          { from: { en: "length, width", zh: "足長、足寬" }, to: { en: "size", zh: "尺寸" } },
          { from: { en: "arch, age", zh: "足弓、年齡" }, to: { en: "performance", zh: "性能" } },
        ],
      },
      stages: [
        { name: { en: "Pre-purchase", zh: "購買前" }, items: [
          { title: { en: "Goal: understand children's feet", zh: "目標：了解孩子的腳" } },
          { title: { en: "AR measurement", zh: "AR 量測" } },
        ] },
        { name: { en: "In-purchase", zh: "購買中" }, items: [
          { title: { en: "Shoe recommendations", zh: "鞋款推薦" } },
          { title: { en: "Foot ID Card & fit matching", zh: "足型 ID 卡與合腳配對" } },
        ] },
        { name: { en: "Post-purchase", zh: "購買後" }, items: [
          { title: { en: "Foot profile history", zh: "足型歷程紀錄" } },
          { title: { en: "Foot health knowledge", zh: "足部健康知識" } },
        ] },
      ],
    },

    finals: {
      line1: { en: "Final designs", zh: "最終設計：" },
      line2: { en: "five core flows", zh: "五個核心流程" },
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
      line1: { en: "Results", zh: "成果" },
      line2: { en: "& recognition", zh: "與肯定" },
      items: [
        { title: { en: "Exhibited at YODEX", zh: "於新一代設計展展出" }, text: { en: "Live testing with parents and visitors. Visitors praised the precise shoe-fitting and asked useful questions about measurement accuracy and technical feasibility.", zh: "現場與家長和觀眾一起實測。觀眾對精準的選鞋配對給予肯定，也提出關於量測準確度與技術可行性的好問題。" } },
        { title: { en: "Vision Get Wild nomination (Cross-Disciplinary Category)", zh: "入圍 Vision Get Wild（跨領域組）" }, text: { en: "We pitched FeetMine and its B2B and B2C models to industry judges and brands.", zh: "我們向業界評審與品牌提案，說明合步合腳以及它的 B2B 與 B2C 模式。" } },
        { title: { en: "Team collaboration & mentorship", zh: "團隊協作與指導" }, text: { en: "Fast feedback loops and structured advisor mentorship kept execution on schedule.", zh: "快速的回饋循環與有結構的指導，讓執行維持在進度上。" } },
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
        zh: "四年來在不同領域的 UI/UX 經驗，磨練出敏銳的觀察力，以及彈性的使用者中心思維。",
      },
      {
        en: "My six-month exchange in Kyoto deepened my cross-cultural perspective and my appreciation for detail-oriented Japanese design.",
        zh: "在京都交換的半年，拓展了我的跨文化視野，也讓我更欣賞日本設計對細節的講究。",
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
      { when: { en: "May 2024 – Mar 2025", zh: "2024.05 – 2025.03" }, what: { en: "Graphic designer, JusYoung Integrated Marketing Co., Ltd.", zh: "平面設計師，JusYoung Integrated Marketing Co., Ltd." } },
      { when: { en: "Apr 2022 – Jun 2023", zh: "2022.04 – 2023.06" }, what: { en: "Graphic designer, DIF Design Co., Ltd.", zh: "平面設計師，DIF Design Co., Ltd." } },
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
  },

  // How I work: three steps, each with a sentence and the methods and tools used at that step.
  skills: {
    title: { en: "How I work", zh: "我的工作方式" },
    lead: { en: "Three steps, and the tools I reach for at each one.", zh: "三個步驟，以及每一步會用到的工具。" },
    steps: [
      {
        name: { en: "Understand", zh: "理解" },
        text: {
          en: "I start with people, not screens. Interviews, personas and journey maps show where the real problem is, and desk research checks that it is not just one person's problem.",
          zh: "我從人開始，而不是從畫面開始。訪談、人物誌與旅程地圖找出真正的問題在哪裡，桌面研究則確認它不只是某一個人的問題。",
        },
        tools: [
          { en: "Interview", zh: "訪談" },
          { en: "Persona", zh: "人物誌" },
          { en: "Journey map", zh: "旅程地圖" },
          { en: "User story", zh: "使用者故事" },
          { en: "Design thinking", zh: "設計思考" },
          "Notion", "Miro", "SPSS", "EndNote",
          { en: "AI tools", zh: "AI 工具" },
        ],
      },
      {
        name: { en: "Design", zh: "設計" },
        text: {
          en: "User flows first, then wireframes, then a prototype people can hold. I draw my own characters, illustrations and motion, so the interface and its personality come from the same hand.",
          zh: "先畫使用者流程，再畫線框圖，再做出可以實際操作的原型。角色、插畫與動態都由我自己繪製，讓介面與它的個性出自同一雙手。",
        },
        tools: [
          { en: "User flow", zh: "使用者流程" },
          { en: "Wireframing", zh: "線框圖" },
          { en: "Prototyping", zh: "原型製作" },
          { en: "Design system", zh: "設計系統" },
          { en: "Motion graphics", zh: "動態圖像" },
          "Figma", "Adobe XD", "Illustrator", "Photoshop", "After Effects", "Canva",
        ],
      },
      {
        name: { en: "Test", zh: "測試" },
        text: {
          en: "Moderated usability tests with real users, then I change what they trip on. In FeetMine, one session replaced six stickers with a single coin.",
          zh: "與真實使用者進行引導式易用性測試，然後修改他們卡住的地方。在合步合腳裡，一次測試就讓六張貼紙變成了一枚硬幣。",
        },
        tools: [
          { en: "Usability test", zh: "易用性測試" },
          { en: "Think-aloud", zh: "放聲思考" },
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
