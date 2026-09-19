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
        { label: { en: "Parents interviewed and tested", zh: "訪談與測試的家長" }, value: "10" },
        { label: { en: "Journey steps covered, competitors cover 1 or 2", zh: "涵蓋的購鞋步驟，競品只有 1 到 2 步" }, value: "5 / 5" },
      ],
      tags: [
        { en: "UX research", zh: "使用者研究" },
        "UI/UX",
        { en: "Graduation project", zh: "畢業製作" },
      ],
      cover: {
        src: "img/feetmine-05.jpg",
        alt: { en: "FeetMine title card: follow your feet to choose your fit, with the home and measurement screens", zh: "合步合腳的標題頁：跟著腳步選一雙合腳的鞋，以及首頁與量測結果畫面" },
      },
      // The image on the home page's Work section only (the case study above still opens with `cover`).
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

      // The case study, one section per phase. Each figure is a whole slide from the deck, img/feetmine-NN.jpg.
      phasesLabel: { en: "Design phases", zh: "設計階段" },
      phases: [
        {
          name: { en: "Overview", zh: "概述" },
          headline: {
            en: "A shoe-fitting guide that connects online sizing to personalized picks",
            zh: "把線上量測與個人化選鞋連在一起的合腳指南",
          },
          points: [
            {
              en: "Parents buy their children's shoes, yet many fail to choose the right pair. Guessing through size charts is slow and often wrong.",
              zh: "童鞋多半由家長挑選，卻常常買錯。對著尺寸表猜測，既慢又容易出錯。",
            },
            {
              en: "FeetMine measures a child's feet at home with AR, builds a foot profile, recommends shoes that fit, and tracks growth over time.",
              zh: "合步合腳用 AR 在家量測孩子的腳，建立足型檔案，推薦合腳的鞋，並持續記錄成長。",
            },
            {
              en: "I led UX design and usability testing, and drew the characters and illustrations.",
              zh: "我負責 UX 設計與易用性測試，並繪製角色與插畫。",
            },
          ],
          figures: [
            { src: "img/feetmine-18.jpg", alt: { en: "Service flow: the personal foot links user, foot, shoes and shoe store, across pre-purchase, in-purchase and post-purchase stages", zh: "服務流程：個人足型串起使用者、腳、鞋子與鞋店，涵蓋購買前、購買中與購買後" } },
          ],
        },
        {
          name: { en: "Research", zh: "研究" },
          figures: [
            { src: "img/feetmine-06.jpg", alt: { en: "Three charts: top foot issues in workers, when people start caring about foot health, and gait types", zh: "三張圖表：上班族常見足部問題、人們開始關心足部健康的年齡、步態類型" } },
            { src: "img/feetmine-07.jpg", alt: { en: "Physical therapist interview and the foot development stages from birth to seniors, with ages 0 to 14 highlighted", zh: "物理治療師訪談，以及從出生到老年的足部發展階段，強調 0 到 14 歲" } },
            { src: "img/feetmine-08.jpg", alt: { en: "Five common misconceptions in children's footwear and the problem each one causes", zh: "童鞋的五個常見迷思，以及各自造成的問題" } },
            { src: "img/feetmine-09.jpg", alt: { en: "Consumption behaviors of modern parents: building trust online, from mobile research to in-store purchase, and video-first parenting", zh: "現代家長的消費行為：在線上建立信任、從手機查詢到店內購買、以及影片優先的育兒方式" } },
          ],
        },
        {
          name: { en: "Insights", zh: "洞察" },
          figures: [
            { src: "img/feetmine-10.jpg", alt: { en: "Pain points and needs from in-depth interviews with 7 parents: children struggle to express comfort, and there is no personalized foot data", zh: "與 7 位家長深度訪談得出的痛點與需求：孩子說不清楚舒不舒服，也沒有孩子專屬的足部資料" } },
            { src: "img/feetmine-11.jpg", alt: { en: "Competitive analysis: FeetMine covers all five steps, three competitors cover one or two", zh: "競品分析：合步合腳涵蓋全部五個步驟，三個競品只涵蓋一到兩個" } },
          ],
        },
        {
          name: { en: "Design", zh: "設計" },
          figures: [
            { src: "img/feetmine-12.jpg", alt: { en: "Three design goals: simplifying foot measurement, guiding personalized fit, tracking continuous growth", zh: "三個設計目標：簡化足部量測、引導個人化的合腳選擇、追蹤持續的成長" } },
            { src: "img/feetmine-13.jpg", alt: { en: "Five prototype screens: home, AR measurement, foot ID, smart selection, growth evaluation", zh: "五個原型畫面：首頁、AR 量測、足型 ID、智慧選鞋、成長評估" } },
            { src: "img/feetmine-15.jpg", alt: { en: "Design highlights: AR foot profiling with the five foot metrics, and the foot mascot generated from the profile in eight colors", zh: "設計亮點：AR 足型建檔與五個足部指標，以及依足型生成、有八種顏色的腳腳吉祥物" } },
            { src: "img/feetmine-16.jpg", alt: { en: "Design highlights: feature-based shoe recommendations, and foot shape records that follow a child's growth", zh: "設計亮點：依足部特徵推薦鞋款，以及陪伴孩子成長的足型紀錄" } },
          ],
        },
        {
          name: { en: "Testing", zh: "測試" },
          figures: [
            { src: "img/feetmine-14.jpg", alt: { en: "Usability test results: coin calibration replaces sticker tracking, and the foot type code gets an explanation", zh: "易用性測試結果：硬幣校正取代貼紙追蹤，足型代碼加上說明" } },
          ],
        },
        {
          name: { en: "Outcome", zh: "成果" },
          figures: [
            { src: "img/feetmine-19.jpg", alt: { en: "Results: the FeetMine booth at YODEX, the pitch to industry judges, and the team with the advisor", zh: "成果：合步合腳在新一代設計展的攤位、向業界評審提案、以及團隊與指導老師合影" } },
            { src: "img/feetmine-17.jpg", alt: { en: "Business model: the Foot ID card matches partner footwear to foot types for customers, and gives brands feedback across foot profiles", zh: "商業模式：足型 ID 卡為顧客配對合作品牌的鞋款，也讓品牌獲得跨足型的回饋資料" } },
          ],
        },
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
