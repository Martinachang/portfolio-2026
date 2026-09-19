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
      heroLabel: "FeetMine", // shown in the case-study hero instead of the badge above
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
      prototypeUrl: "#", // TODO: replace with the real prototype link
      links: [
        { label: { en: "Case study", zh: "完整案例" }, href: "feetmine.html", primary: true }, // the image links here too
        { label: { en: "GitHub", zh: "GitHub" }, href: "https://github.com/Martinachang/foot-dna-test", external: true },
      ],

      // The case study, one section per phase. Diagrams and charts are rebuilt as text, CSS and inline SVG (project.js);
      // a figure/image block is only used for a real photo or an actual designed screen, e.g. feetmine-13 and feetmine-19.
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
          blocks: [
            {
              type: "text",
              paragraphs: [
                { en: "FeetMine connects four players — the user, their foot, the shoes and the shoe store — in a single feedback loop. AR measurements record how a child's foot grows, and wear-comfort feedback keeps improving what gets recommended next.", zh: "合步合腳串連使用者、足部、鞋款與鞋店四方，形成一個回饋循環：AR 量測記錄孩子足部的成長歷程，穿著回饋則持續優化下一次的推薦。" },
              ],
            },
            {
              type: "stage-columns",
              stages: [
                { name: { en: "Pre-purchase", zh: "購買前" }, items: [
                  { title: { en: "Goal", zh: "目標" }, text: { en: "Understand the child's feet, choose the right shoes", zh: "了解孩子的腳，選對鞋款" } },
                  { icon: "scan", title: { en: "AR Measurement", zh: "AR 量測" }, text: { en: "Understanding foot health", zh: "建立足部健康意識" } },
                ] },
                { name: { en: "In-purchase", zh: "購買中" }, items: [
                  { icon: "shoe", title: { en: "Shoe Recommendations", zh: "鞋款推薦" } },
                  { icon: "card", title: { en: "Foot ID Card & Fit Matching", zh: "足型 ID 卡與合腳配對" } },
                ] },
                { name: { en: "Post-purchase", zh: "購買後" }, items: [
                  { icon: "foot", title: { en: "Foot Profile History", zh: "足型歷程紀錄" }, text: { en: "Age stages", zh: "跨年齡階段" } },
                  { icon: "bulb", title: { en: "Foot Health Knowledge", zh: "足部健康知識" } },
                ] },
              ],
            },
          ],
        },
        {
          name: { en: "Research", zh: "研究" },
          blocks: [
            { type: "heading", eyebrow: { en: "Background", zh: "背景" }, title: { en: "Small Foot Flaws, Big Body Problems", zh: "足部小問題，身體大麻煩" },
              intro: { en: "Our feet are the foundation of the body, bearing our weight and maintaining balance. Without proper support, foot misalignment can trigger chain-reaction pain in the knees, hips and back — today, up to 80% of adults suffer from foot-related issues.", zh: "雙腳是身體的基礎，承擔體重並維持平衡。缺乏適當支撐時，足部歪斜會引發膝蓋、髖部與背部的連鎖疼痛——如今高達 80% 的成年人都有足部相關困擾。" } },
            { type: "bars", title: { en: "Top foot issues in workers", zh: "上班族常見足部問題" }, bars: [
              { label: { en: "Varicose veins", zh: "靜脈曲張" }, value: 32.9 },
              { label: { en: "Plantar fasciitis", zh: "足底筋膜炎" }, value: 32.4 },
              { label: { en: "Heel pain", zh: "足跟痛" }, value: 25.3 },
            ] },
            { type: "bars", title: { en: "When people start caring about foot health", zh: "人們從何時開始關心足部健康" }, bars: [
              { label: { en: "Under 30", zh: "30 歲以下" }, value: 29.8 },
              { label: { en: "31–40", zh: "31–40 歲" }, value: 31.2 },
              { label: { en: "40 and over", zh: "40 歲以上" }, value: 37.6 },
            ] },
            { type: "donut", center: { value: "90.9%", label: { en: "walk with an abnormal gait", zh: "步態異常" } }, segments: [
              { label: { en: "Inward (overpronation)", zh: "內旋（旋前過度）" }, value: 52, color: "#f7943e" },
              { label: { en: "Outward (supination)", zh: "外旋（旋後）" }, value: 30.6, color: "#fac491" },
              { label: { en: "Mixed", zh: "混合型" }, value: 8.6, color: "#fde3cc" },
              { label: { en: "Normal gait", zh: "步態正常" }, value: 8.8, color: "#e5e0da" },
            ] },
            { type: "heading", eyebrow: { en: "Field research", zh: "實地調查" }, title: { en: "Understanding Foot Development", zh: "理解足部發展" },
              intro: { en: "Most adult foot problems stem from childhood development, making it crucial to understand the key growth stages.", zh: "多數成人的足部問題都源自童年的發展階段，理解關鍵成長期因此格外重要。" } },
            { type: "features", items: [
              { title: { en: "A continuous process", zh: "持續發展的過程" }, text: { en: "Foot development never stops, and children's foot development lays the foundation for lifelong foot health.", zh: "足部發展是持續不斷的過程，孩童時期的足部發展是終生足部健康的基礎。" } },
              { title: { en: "Age-specific needs", zh: "依年齡而異的需求" }, text: { en: "The key considerations for choosing shoes differ by age group, from birth through age 14.", zh: "選鞋的關鍵考量會隨年齡層而不同，從出生到 14 歲皆然。" } },
              { title: { en: "The decision gap", zh: "決策落差" }, text: { en: "Parents usually choose the shoes for their children, but they often fail to make the right choices.", zh: "鞋子多半由家長挑選，卻常常做出不理想的選擇。" } },
            ] },
            { type: "steps", steps: [
              { en: "Birth", zh: "出生" },
              { en: "Foot development (ages 0–14)", zh: "足部發展期（0–14 歲）", active: true },
              { en: "Foot shape stabilization", zh: "足型穩定期" },
              { en: "Foot degeneration (ages 50+)", zh: "足部退化期（50 歲以上）" },
              { en: "Seniors", zh: "高齡期" },
            ] },
            { type: "quote", text: { en: "Parents buy their children's shoes, yet many fail to choose the right pair.", zh: "童鞋多半由家長挑選，卻常常買錯。" }, cite: { en: "Field research", zh: "實地調查" } },
            { type: "heading", eyebrow: { en: "User research", zh: "使用者研究" }, title: { en: "Common Misconceptions in Children's Footwear", zh: "童鞋的常見迷思" } },
            { type: "pairs", items: [
              { a: { en: "Buying one size up", zh: "買大一號" }, b: { en: "Causes poor stability and fatigue, leading to frequent tripping", zh: "導致穩定度不足與疲勞，容易絆倒" } },
              { a: { en: "Softer shoes for comfort", zh: "追求鞋子越軟越好" }, b: { en: "Lacks support and shock absorption, leading to collapsed arches and flat feet", zh: "缺乏支撐與避震，導致足弓塌陷、扁平足" } },
              { a: { en: "Looks above proper support", zh: "外觀優先於支撐性" }, b: { en: "Kids need wider toe boxes; narrow shoes cause chafing and bone misalignment", zh: "孩童需要較寬的楦頭，過窄的鞋子會摩擦並影響骨骼排列" } },
              { a: { en: "Wear sandals in summer", zh: "夏天讓孩子穿涼鞋" }, b: { en: "Hurts arch development and raises the risk of ankle misalignment during play", zh: "影響足弓發育，增加玩耍時腳踝歪斜的風險" } },
              { a: { en: "Wear corrective shoes early", zh: "提早穿矯正鞋" }, b: { en: "Meant only for diagnosed flat feet; wearing them unnecessarily limits mobility and weakens foot muscles", zh: "僅適用於已確診的扁平足，不必要的穿著反而限制活動、削弱足部肌力" } },
            ] },
            { type: "callout", icon: "foot", text: { en: "These lead to poor foot development, negatively impacting long-term foot health and increasing the incidence of foot-related diseases later in life.", zh: "這些迷思會導致足部發展不良，對長期足部健康造成負面影響，並提高日後罹患足部疾病的機率。" } },
            { type: "quote", text: { en: "How might we educate parents and provide reliable tools to easily select the right shoe size and structure?", zh: "我們該如何教育家長，並提供可靠的工具，讓他們輕鬆選對鞋子的尺寸與結構？" } },
            { type: "heading", eyebrow: { en: "User research", zh: "使用者研究" }, title: { en: "Consumption Behaviors of Modern Parents", zh: "現代家長的消費行為" } },
            { type: "stats", items: [
              { value: "48%", label: { en: "of brand discovery happens online — the first impression must earn trust immediately", zh: "的品牌認識來自線上——第一印象就必須立刻贏得信任" } },
              { value: "62%", label: { en: "still visit a store to verify quality after researching on mobile", zh: "在手機上做完功課後，仍會到實體店驗證品質" } },
              { value: "84%", label: { en: "report higher brand favorability after watching video content", zh: "在看過影片內容後，對品牌的好感度提升" } },
            ] },
          ],
        },
        {
          name: { en: "Insights", zh: "洞察" },
          blocks: [
            { type: "heading", eyebrow: { en: "In-depth interview", zh: "深度訪談" }, title: { en: "What Problems Do Parents Face When Buying Children's Shoes?", zh: "家長在購買童鞋時面臨哪些問題？" },
              intro: { en: "In-depth interviews with 7 parents of children aged 6–12, uncovering the online and offline challenges they encounter while shopping.", zh: "與 7 位育有 6–12 歲孩童的家長進行深度訪談，發掘他們在線上與線下購物時遇到的挑戰。" } },
            { type: "pairs", items: [
              { a: { en: "Children struggle to express comfort", zh: "孩子說不清楚舒不舒服" }, quote: { en: "My kid only cares about how shoes look, not how they fit.", zh: "我的孩子只在意鞋子好不好看，不在意合不合腳。" }, citeQuote: { en: "Father, 28", zh: "父親，28 歲" }, b: { en: "Need: accurate sizing and fit guidance beyond style preferences", zh: "需求：超越外觀偏好的精準尺寸與合腳指引" } },
              { a: { en: "Lack of personalized foot data", zh: "沒有孩子專屬的足部資料" }, quote: { en: "There's lots of advice online, but none fits my child, so I don't really do research.", zh: "網路上建議很多，但沒有一個適合我的孩子，所以我乾脆不做功課。" }, citeQuote: { en: "Mother, 34", zh: "母親，34 歲" }, b: { en: "Need: personalized data online, to streamline shoe shopping", zh: "需求：線上的個人化資料，簡化選鞋流程" } },
            ] },
            { type: "heading", eyebrow: { en: "Competitive analysis", zh: "競品分析" }, title: { en: "A Shoe-Fitting Guide Connecting Online Sizing to Personalized Picks", zh: "連結線上量測與個人化選鞋的合腳指南" },
              intro: { en: "Stop guessing through endless size charts and shoe models — FeetMine integrates foot development data and the shoe-selection process into one seamless experience.", zh: "不必再對著沒完沒了的尺寸表與鞋款猜測——合步合腳將足部發展資料與選鞋流程整合為一次流暢的體驗。" } },
            { type: "journey-table", steps: [
              { en: "Goal", zh: "目標" }, { en: "Measure", zh: "量測" }, { en: "Select", zh: "挑選" }, { en: "Purchase", zh: "購買" }, { en: "Evaluate", zh: "評估" },
            ], rows: [
              { name: "FeetMine", covers: [true, true, true, true, true] },
              { name: "A.S.O", covers: [true, true, false, true, false] },
              { name: "OverNice", covers: [false, true, true, false, false] },
              { name: "Baby View", covers: [true, false, false, false, false] },
            ] },
          ],
        },
        {
          name: { en: "Design", zh: "設計" },
          blocks: [
            { type: "heading", eyebrow: { en: "Design goals", zh: "設計目標" }, title: { en: "FeetMine Builds Healthy Childhood Steps for Lifelong Comfort", zh: "合步合腳，打造孩子健康成長的每一步" } },
            { type: "features", items: [
              { title: { en: "Simplifying foot measurement", zh: "簡化足部量測" }, text: { en: "Quick home measurement, without store appointments or waiting.", zh: "在家就能快速量測，不必預約或排隊等候。" } },
              { title: { en: "Guiding personalized fit", zh: "引導個人化合腳選擇" }, text: { en: "Turns foot data into smart recommendations, to avoid sizing guesswork.", zh: "將足部資料轉化為智慧推薦，避免尺寸用猜的。" } },
              { title: { en: "Tracking continuous growth", zh: "追蹤持續成長" }, text: { en: "Integrates foot-data tracking and recurring shopping into a seamless cycle as children grow.", zh: "隨孩子成長，將足部資料追蹤與後續購物整合成一個流暢的循環。" } },
            ] },
            { type: "image", src: "img/feetmine-13.jpg", alt: { en: "Five prototype screens: home, AR measurement, foot ID, smart selection, growth evaluation", zh: "五個原型畫面：首頁、AR 量測、足型 ID、智慧選鞋、成長評估" } },
            { type: "heading", eyebrow: { en: "Design highlights", zh: "設計亮點" }, title: { en: "Personalized Foot Profiling", zh: "個人化足型建檔" },
              intro: { en: "Uses AR technology to let parents measure their child's feet anytime, anywhere, building a dedicated database based on foot type, arch, instep, width and length.", zh: "運用 AR 技術，讓家長隨時隨地都能量測孩子的腳，依足型、足弓、足背高度、寬度與長度建立專屬資料庫。" } },
            { type: "pairs", items: [
              { a: { en: "Type of foot", zh: "足型" }, b: { en: "Egyptian, Greek or Roman", zh: "埃及型、希臘型或羅馬型" } },
              { a: { en: "Arch of foot", zh: "足弓" }, b: { en: "Flat, regular or high arch", zh: "扁平、正常或高足弓" } },
              { a: { en: "Instep height", zh: "足背高度" }, b: { en: "Low, medium or high instep", zh: "低、中或高足背" } },
              { a: { en: "Foot width", zh: "足寬" }, b: { en: "Narrow, regular or wide", zh: "窄、正常或寬" } },
            ] },
            { type: "text", paragraphs: [
              { en: "Each profile also generates a personalized foot mascot in one of eight colors, so parents can recognize their child's shoe recommendations and reviews at a glance.", zh: "每份足型檔案還會生成一隻專屬的腳腳吉祥物，共有八種顏色可選，讓家長一眼就能認出孩子專屬的選鞋建議與評價。" },
            ] },
            { type: "heading", title: { en: "Feature-Based Shoe Recommendations", zh: "依足部特徵推薦鞋款" },
              intro: { en: "Provides targeted shoe recommendations on performance and materials based on individual foot profiles. Users can explore reviews from peers with the same foot type, ensuring confident purchases and minimizing sizing mistakes.", zh: "依據個人足型檔案，提供針對性能與材質的鞋款推薦。使用者也能參考相同足型的其他人的評價，安心購買、減少選錯尺寸的機會。" } },
            { type: "heading", title: { en: "Foot Shape Records: Accompanying Growth", zh: "足型紀錄，陪伴成長" },
              intro: { en: "Tracks foot changes across age stages and saves them to the personal Foot ID card for future shoe fitting. By preserving raw foot outlines, parents and children can overlay and align their footprints — a heartwarming record of growth to cherish and relive.", zh: "追蹤不同年齡階段的足部變化，並存入個人足型 ID 卡，作為未來選鞋的依據。透過保留原始足型外框，親子可以疊合比對足印，留下溫馨的成長紀錄，未來能反覆回味。" } },
          ],
        },
        {
          name: { en: "Testing", zh: "測試" },
          blocks: [
            { type: "heading", eyebrow: { en: "Usability testing & design iteration", zh: "易用性測試與設計迭代" },
              intro: { en: "We tested the prototype with 3 parents of children aged 6–12, through moderated usability testing, to see whether parents could independently complete foot measurements and understand the shoe recommendations.", zh: "我們透過主持式易用性測試，邀請 3 位育有 6–12 歲孩童的家長操作行動原型，驗證家長是否能獨立完成足部量測，並理解選鞋建議。" } },
            { type: "heading", title: { en: "Can parents follow the guided flow to measure feet?", zh: "家長能依照引導流程完成量測嗎？" } },
            { type: "pairs", items: [
              { a: { en: "As-is: point-to-point foot tracking", zh: "原始版本：逐點足部追蹤" }, quote: { en: "Stickers waste time, scanning takes too long…", zh: "貼貼紙很花時間，掃描也要很久⋯" }, b: { en: "To-be (expert validated): quick coin calibration — slide a coin halfway under the arch and scan. Much simpler and faster.", zh: "優化版本（經專家驗證）：用硬幣快速校正，滑到足弓下方一半處掃描即可，更簡單也更快速。" } },
            ] },
            { type: "heading", title: { en: "Can parents understand the Foot Type?", zh: "家長能理解「足型」代碼嗎？" },
              intro: { en: "No, but we retained it: although 2 of 3 parents initially struggled to understand the Foot Type, we kept it to shift mindsets from \"buying shoes by length alone\" to a deeper understanding of foot health.", zh: "不完全能，但我們保留了這項設計：雖然 3 位家長中有 2 位一開始看不懂足型代碼，我們仍選擇保留，希望能把「只看鞋長買鞋」的觀念，轉變為對足部健康更深一層的理解。" } },
          ],
        },
        {
          name: { en: "Outcome", zh: "成果" },
          blocks: [
            { type: "image", src: "img/feetmine-19.jpg", alt: { en: "Results: the FeetMine booth at YODEX, the pitch to industry judges, and the team with the advisor", zh: "成果：合步合腳在新一代設計展的攤位、向業界評審提案、以及團隊與指導老師合影" } },
            { type: "heading", eyebrow: { en: "Business model", zh: "商業模式" }, title: { en: "Foot ID Card", zh: "足型 ID 卡" } },
            { type: "features", items: [
              { title: { en: "To customers", zh: "對消費者" }, text: { en: "Match partner footwear to foot types and incorporate peer reviews to enhance fit accuracy.", zh: "依足型配對合作品牌鞋款，並納入同型使用者的評價，提升合腳準確度。" } },
              { title: { en: "To business", zh: "對品牌" }, text: { en: "Gather feedback across diverse foot profiles to identify user needs and improve product design.", zh: "彙整不同足型的回饋資料，找出使用者需求並優化產品設計。" } },
            ] },
            { type: "text", paragraphs: [
              { en: "By archiving users' foot profiles and scan histories, FeetMine can expand to partner shoe retailers, online and offline, to match personal foot types with brand inventories. Continuously updated with a child's latest growth data, the system delivers highly accurate, personalized recommendations — boosting shopping efficiency and purchase intent while connecting users and merchants in a mutually beneficial, sustainable ecosystem.", zh: "透過建檔使用者的足型資料與掃描紀錄，合步合腳得以擴展至線上與線下的合作鞋店，將個人足型與品牌庫存互相配對。系統會隨孩子最新的成長資料持續更新，提供高度精準的個人化推薦——在提升購物效率與購買意願的同時，也讓使用者與商家之間建立起互利共好的永續生態圈。" },
            ] },
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
