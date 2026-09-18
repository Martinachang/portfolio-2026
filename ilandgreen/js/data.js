window.IG = window.IG || {};

IG.data = (() => {
  const photoIds = {
    balloonsWelcome: '1507608616759-54f48f0af0ee',
    balloonsQuickTest: '1544620347-c4fd4a3d5957',
    homeHero: '1506905925346-21bda4d32df4',
    desertCanyon: '1509316785289-025f5b846b35',
    surfer: '1502680390469-be75c86b636f',
    waterfallJungle: '1470071459604-3b5ec3a7fe05',
    handsBracelet: '1531983412531-1f49a365ffed',
    feetRug: '1518020382113-a7e8fc38eac9',
    rainforestCanopy: '1441974231531-c6227db76b6e',
    festivalCrowd: '1533174072545-7a4b6ad7a6c3',
    wineFlatlay: '1414235077428-338989a2e8c0',
    coastalSunset: '1507525428034-b723cf961d3e',
    bedroomBright: '1566665797739-1674de7a421a',
    laptopFlatlay: '1499951360447-b19be8fe80f5',
    peakArmsOut: '1533130061792-64b345e4a833',
    bedWindow: '1521783988139-89397d761dce',
    soloHiker: '1465146344425-f00d5f5c8f07',
    familyWalking: '1471958680802-1345a694ba6d',
    friendsHeartHands: '1543269865-cbf427effbad',
    coupleCliffSunset: '1518199266791-5375a83190b7',
    soloOverlook: '1502086223501-7ea6ecd79368',
    luxuryHotel: '1566073771259-6a8506099945',
    infinityPool: '1571896349842-33c89424de2d',
    cinqueTerre: '1533104816931-20fa691ff6ca',
    campingDusk: '1504280390367-361c6d9f38f4',
    earthSpace: '1451187580459-43490279c0fa',
    ricePaddy: '1500382017468-9049fed747ef',
    mistyForest: '1425913397330-cf8af2ff40a1',
    templeStreet: '1528164344705-47542687000d',
    trainTracks: '1474487548417-781cb71495f3',
    trainViaduct: '1527684651001-731c474bbb5a',
    islandBeach: '1544551763-46a013bb70d5',
    mountainVillageRetreat: '1476514525535-07fb3b4ae5f1',
    culturalTemple: '1546412414-8035e1776c9a',
    cityWander: '1519677100203-a0e668c92439',
    natureRetreat: '1500534623283-312aade485b7',
  };

  function photo(key, w) {
    const id = photoIds[key];
    return `https://images.unsplash.com/photo-${id}?w=${w || 600}&q=80&auto=format&fit=crop`;
  }

  const personas = [
    { key: 'nature', label: 'Nature Lover', tags: ['#Outdoors', '#Ecology', '#In Balance'], icon: 'leaf' },
    { key: 'eco', label: 'Eco Traveler', tags: ['#Conservation', '#Preservation', '#Social Impact'], icon: 'globe' },
    { key: 'curious', label: 'Curious Wanderer', tags: ['#Open to Anything', '#New Experiences', '#No Fixed Plan'], icon: 'compass' },
  ];

  const quiz = [
    {
      key: 'elements',
      headline: 'What do you want your trip to include?',
      options: [
        { key: 'festive', label: 'Lively Festival', photo: 'festivalCrowd' },
        { key: 'dine', label: 'Fine Wine & Dine', photo: 'wineFlatlay' },
        { key: 'scenery', label: 'Natural Scenery', photo: 'coastalSunset' },
        { key: 'getaway', label: 'Vacation Getaway', photo: 'bedroomBright' },
      ],
    },
    {
      key: 'style',
      headline: "What's your travel style?",
      options: [
        { key: 'planned', label: 'Meticulous Planning', photo: 'laptopFlatlay' },
        { key: 'spontaneous', label: 'Free & Spontaneous', photo: 'peakArmsOut' },
        { key: 'relaxed', label: 'Relaxed & Easy', photo: 'bedWindow' },
        { key: 'enrichment', label: 'Deep Enrichment', photo: 'soloHiker' },
      ],
    },
    {
      key: 'company',
      headline: 'Who are you planning this trip with?',
      options: [
        { key: 'family', label: 'Family', photo: 'familyWalking' },
        { key: 'friends', label: 'Friends', photo: 'friendsHeartHands' },
        { key: 'partner', label: 'Partner', photo: 'coupleCliffSunset' },
        { key: 'solo', label: 'Solo', photo: 'soloOverlook' },
      ],
    },
    {
      key: 'stay',
      headline: 'What accommodation style do you want?',
      options: [
        { key: 'hotel', label: 'Hotel', photo: 'luxuryHotel' },
        { key: 'resort', label: 'Resort', photo: 'infinityPool' },
        { key: 'homestay', label: 'Homestay', photo: 'cinqueTerre' },
        { key: 'camping', label: 'Camping', photo: 'campingDusk' },
      ],
    },
  ];

  // Quiz Result is driven primarily by the first answer (trip "elements"),
  // with style/company/stay flavoring the copy — a lookup table keyed on a
  // single axis stays legible for a 4-entry set instead of a 4x4x4x4 grid.
  const quizDestinations = {
    festive: { name: 'Taipei Night Market Circuit', region: 'Taipei, Taiwan', photo: 'cityWander', tags: ['Festivals', 'Street Food', 'Nightlife'] },
    dine: { name: 'Tainan Culinary Old Town', region: 'Tainan, Taiwan', photo: 'culturalTemple', tags: ['Food & Wine', 'Heritage', 'Slow Streets'] },
    scenery: { name: 'Hualien Coastal Range', region: 'Hualien, Taiwan', photo: 'islandBeach', tags: ['Coastline', 'Ocean Air', 'Golden Hour'] },
    getaway: { name: 'Kenting Beach Retreat', region: 'Kenting, Taiwan', photo: 'natureRetreat', tags: ['Resort', 'Relax', 'Sunset Swims'] },
  };

  const styleAdj = {
    planned: 'a carefully mapped-out',
    spontaneous: 'a free and spontaneous',
    relaxed: 'an easy, unhurried',
    enrichment: 'a slow, deeply immersive',
  };
  const companyPhrase = {
    family: 'with the whole family',
    friends: 'with your closest friends',
    partner: 'with your favorite person',
    solo: 'entirely on your own terms',
  };
  const stayLabel = {
    hotel: 'a design-forward hotel',
    resort: 'a beachfront resort',
    homestay: 'a locally-run homestay',
    camping: 'an open-air campsite',
  };

  const mixerBase = [
    { key: 'Earth', icon: '🌍' },
    { key: 'Canopy', icon: '🌲' },
    { key: 'Current', icon: '🌊' },
    { key: 'Nebula', icon: '✨' },
  ];

  const mixerCategories = {
    planet: { label: 'Planet', hero: 'earthSpace', atmosphere: ['Moonlight', 'Starlight', 'Orbit', 'Signal'] },
    weather: { label: 'Weather', hero: 'ricePaddy', atmosphere: ['Drizzle', 'Brook', 'Rainfall', 'Fog'] },
    season: { label: 'Season', hero: 'mistyForest', atmosphere: ['Bamboo', 'Moss', 'Pine', 'Cedar'] },
    village: { label: 'Village', hero: 'templeStreet', atmosphere: ['Ricefield', 'Bells', 'Tea Ember', 'Market'] },
    traffic: { label: 'Traffic', hero: 'trainTracks', atmosphere: ['Old Train', 'Rail Whistle', 'Footsteps', 'Ferry'] },
  };

  const titles = {
    'Earth|Drizzle': ['Tears of the Blue Planet', 'The tears of the blue planet'],
    'Current|Drizzle': ['Whispers of the Sky', 'Whispers of the sky'],
    'Canopy|Bamboo': ['Mist in the Cypress Valley', 'A green hush between the trees'],
    'Current|Brook': ['Where Water Remembers', 'A current moving through stone'],
    'Nebula|Old Train': ['The Night Train to Somewhere', 'A slow pulse beneath the stars'],
  };

  const mixerDestinations = {
    planet: { name: 'Hehuanshan Starlight Ridge', tags: ['Stargazing', 'High Altitude'], quote: 'Protect the night sky — some views only exist in the dark.', footnote: 'Nantou · A ridge above the clouds', photo: 'earthSpace' },
    weather: { name: 'Checheng Station', tags: ['Train', 'Countryside Morning'], quote: 'Protect the earth, protect the environment — don’t let travel run out of places to go.', footnote: 'Nantou · Once a hub for sugarcane trains', photo: 'trainViaduct' },
    season: { name: 'Alishan Cedar Trail', tags: ['Cypress Forest', 'Morning Mist'], quote: 'Some forests take a thousand years to grow — walk gently.', footnote: 'Chiayi · Among thousand-year cedars', photo: 'mistyForest' },
    village: { name: 'Sanxia Old Street', tags: ['Heritage Street', 'Handmade'], quote: 'Preserve the craft, preserve the culture, preserve the place.', footnote: 'New Taipei · Red-brick arcades since the 1900s', photo: 'templeStreet' },
    traffic: { name: 'Jiji Rail Line', tags: ['Branch Line', 'Slow Travel'], quote: 'The slowest way there is often the one worth remembering.', footnote: 'Nantou · A banana-grove branch line', photo: 'trainTracks' },
  };

  function resonance(base, atmosphere) {
    return titles[`${base}|${atmosphere}`] || [`${base} ${atmosphere}`, 'A private frequency for slow travel'];
  }

  function quizResult(answers) {
    const primary = quizDestinations[answers[0]] || quizDestinations.scenery;
    const copy = `Expect ${styleAdj[answers[1]] || 'a relaxed'} trip ${companyPhrase[answers[2]] || 'on your own schedule'}, based out of ${stayLabel[answers[3]] || 'a comfortable stay'}.`;
    return { ...primary, copy };
  }

  return { photo, personas, quiz, quizDestinations, mixerBase, mixerCategories, titles, mixerDestinations, resonance, quizResult };
})();
