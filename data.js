// VILLAE ROMANAE — dataset
// 40 Roman-period sites in Israel & the West Bank.
// type: "villa" (villas, manors, mansions, palaces) | "city"
// view: 1–5 — рейтинг вида с площадки (5 = охренеть какой вид)
// Sources: Wikipedia (en/he/ru), Israel Nature & Parks Authority, BibleWalks, Madain Project.

const SITES = [
  // ───────────────────────── VILLAS, PALACES & MANSIONS ─────────────────────────
  {
    id: "masada-northern-palace",
    type: "villa",
    subtype: "palace",
    name: { en: "Masada — Northern Palace", ru: "Масада — Северный дворец", he: "ארמון הצפון במצדה" },
    coords: [31.3184, 35.3543],
    region: "israel",
    period: { en: "c. 30–25 BCE, Herod the Great", ru: "ок. 30–25 гг. до н.э., Ирод Великий" },
    view: 5,
    viewNote: {
      en: "From the three hanging terraces the cliff falls away some 400 m to the Dead Sea, with the outlines of the Roman siege camps etched into the desert floor below.",
      ru: "С трёх висячих террас обрыв уходит на сотни метров вниз к Мёртвому морю, а на дне пустыни до сих пор читаются контуры римских осадных лагерей."
    },
    desc: {
      en: "Herod's private villa cascades down the northern prow of Masada in three rock-cut terraces linked by hidden staircases. The king's quarters on top open onto a semicircular portico; below lay a round reception hall and a colonnaded banqueting terrace with its own bathhouse. Frescoes imitating marble still cling to the lowest level.",
      ru: "Личная вилла Ирода тремя вырубленными в скале террасами спускается по северному обрыву Масады, соединённая потайными лестницами. Наверху — покои царя с полукруглым портиком, ниже — круглый приёмный зал и колонная банкетная терраса с собственной баней. На нижнем ярусе до сих пор сохранились фрески «под мрамор»."
    },
    links: [
      { label: "Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Masada" },
      { label: "Wikipedia (RU)", url: "https://ru.wikipedia.org/wiki/Масада" },
      { label: "Israel Nature and Parks Authority", url: "https://en.parks.org.il/reserve-park/masada-national-park/" },
      { label: "BibleWalks", url: "https://www.biblewalks.com/masada/" }
    ],
    imageFile: "Israel-2013-Aerial_21-Masada.jpg"
  },
  {
    id: "herodium-upper-palace",
    type: "villa",
    subtype: "fortress-palace",
    name: { en: "Herodium — Upper Palace-Fortress", ru: "Иродион — верхний дворец-крепость", he: "הרודיון" },
    coords: [31.6658, 35.2414],
    region: "west_bank",
    period: { en: "23–15 BCE, Herod the Great", ru: "23–15 гг. до н.э., Ирод Великий" },
    view: 5,
    viewNote: {
      en: "From the crater-like rim you sweep from the Judean Desert and the Dead Sea on one side to the rooftops of Bethlehem and the Jerusalem skyline on the other.",
      ru: "С кратерообразной вершины видно сразу всё: Иудейскую пустыню и Мёртвое море с одной стороны, крыши Вифлеема и силуэт Иерусалима — с другой."
    },
    desc: {
      en: "The only site Herod named after himself: an artificial volcano-shaped mountain concealing a circular palace-fortress with four towers, a bathhouse and banquet hall. In 2007 archaeologist Ehud Netzer found Herod's long-lost mausoleum on the slope, ending a 35-year search. The hill is still riddled with tunnels dug by Bar Kokhba's rebels.",
      ru: "Единственное место, которое Ирод назвал в свою честь: искусственная гора-«вулкан», скрывающая круглый дворец-крепость с четырьмя башнями, баней и пиршественным залом. В 2007 году археолог Эхуд Нецер нашёл на склоне долгожданный мавзолей Ирода, завершив 35-летние поиски. Холм до сих пор изрыт туннелями повстанцев Бар-Кохбы."
    },
    links: [
      { label: "Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Herodium" },
      { label: "Wikipedia (RU)", url: "https://ru.wikipedia.org/wiki/Иродион" },
      { label: "Israel Nature and Parks Authority", url: "https://en.parks.org.il/reserve-park/herodium-park/" },
      { label: "Madain Project", url: "https://madainproject.com/herodium" }
    ],
    imageFile: "Herodium_from_above_2.jpg"
  },
  {
    id: "dok-fortress",
    type: "villa",
    subtype: "fortress-palace",
    name: { en: "Dok Fortress (Mount of Temptation)", ru: "Крепость Док (гора Искушения)", he: "מבצר דוק (הר הקרנטל)" },
    coords: [31.8747, 35.4306],
    region: "west_bank",
    period: { en: "2nd c. BCE, Seleucid–Hasmonean", ru: "II в. до н.э., Селевкиды и Хасмонеи" },
    view: 5,
    viewNote: {
      en: "From the cliff edge by the summit, the entire Jericho oasis, the Jordan Valley and the Dead Sea lie literally at your feet.",
      ru: "С края обрыва у вершины весь иерихонский оазис, долина Иордана и Мёртвое море лежат буквально у ваших ног."
    },
    desc: {
      en: "On the table-top summit of Jebel Quruntul above Jericho lie the remains of Dok, the fortress where Simon Maccabeus, the last of the Maccabee brothers, was treacherously murdered by his son-in-law Ptolemy at a banquet in 134 BCE. The stronghold's walls and cisterns were later quarried by Byzantine monks. Halfway down the cliff clings the Monastery of the Temptation, marking where tradition says Jesus fasted forty days.",
      ru: "На плоской вершине горы Каранталь над Иерихоном лежат остатки крепости Док, где в 134 году до н.э. на пиру был предательски убит своим зятем Птолемеем Симон Маккавей, последний из братьев Маккавеев. Стены и цистерны твердыни позже разобрали византийские монахи. Ниже, на самом обрыве, висит монастырь Искушения — по преданию, место сорокадневного поста Иисуса."
    },
    links: [
      { label: "Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Mount_of_Temptation" }
    ],
    imageFile: "IHM_דיר_אל-קרנטל.jpeg"
  },
  {
    id: "alexandrium-sartaba",
    type: "villa",
    subtype: "fortress-palace",
    name: { en: "Alexandrium (Sartaba)", ru: "Сартаба (Александрион)", he: "סרטבא (אלכסנדריון)" },
    coords: [32.0958, 35.4614],
    region: "west_bank",
    period: { en: "1st c. BCE, Alexander Jannaeus; restored by Herod", ru: "I в. до н.э., Александр Яннай; восстановлена Иродом" },
    view: 5,
    viewNote: {
      en: "A full 360-degree sweep over the bend of the Jordan Valley, the mountains of Gilead across the river and the Samarian hills behind.",
      ru: "Полный круговой обзор: излучина долины Иордана, горы Галаада за рекой и самарийские холмы за спиной."
    },
    desc: {
      en: "The Hasmonean king Alexander Jannaeus crowned this dramatic cone above the Jordan Valley with a fortress-palace; Herod restored it and buried here his sons Alexander and Aristobulus, strangled on his own orders. Hewn column drums of the hilltop palace still lie among the ruins. In Mishnaic times Sartaba was a beacon station relaying news of the new moon from Jerusalem to Babylonia.",
      ru: "Хасмонейский царь Александр Яннай увенчал этот эффектный конус над долиной Иордана крепостью-дворцом; Ирод восстановил её и похоронил здесь своих сыновей Александра и Аристобула, задушенных по его же приказу. Среди руин до сих пор лежат тёсаные барабаны колонн вершинного дворца. В эпоху Мишны Сартаба служила сигнальной станцией, передававшей огнями весть о новолунии из Иерусалима в Вавилонию."
    },
    links: [
      { label: "Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Alexandrium" },
      { label: "Wikipedia (RU)", url: "https://ru.wikipedia.org/wiki/Александрион" },
      { label: "BibleWalks", url: "https://www.biblewalks.com/sartaba/" }
    ],
    imageFile: "Sartaba3.jpg"
  },
  {
    id: "apollonia-roman-villa",
    type: "villa",
    subtype: "villa",
    name: { en: "Roman Villa at Apollonia–Arsuf", ru: "Римская вилла в Аполлонии-Арсуфе", he: "תל ארשף" },
    coords: [32.1953, 34.8067],
    region: "israel",
    period: { en: "1st c. CE (destroyed in 118 CE earthquake)", ru: "I в. н.э. (разрушена землетрясением 118 г.)" },
    view: 5,
    viewNote: {
      en: "From the kurkar cliff edge the Mediterranean fills the horizon — surf, the ruined harbor and the Herzliya coastline far below.",
      ru: "С кромки песчаникового обрыва Средиземное море заполняет весь горизонт: прибой, древняя гавань и побережье Герцлии далеко внизу."
    },
    desc: {
      en: "On the sea cliff south of Apollonia's harbor town, a peristyle villa maritima of the 1st century CE caught the breeze until the earthquake of 118 CE brought it down. Its restored colonnaded courtyard now stands in Apollonia National Park, sharing the headland with a Crusader fortress and medieval moat.",
      ru: "На морском обрыве к югу от гавани Аполлонии в I веке н.э. стояла перистильная villa maritima, ловившая бриз, пока её не обрушило землетрясение 118 года. Её восстановленный двор с колоннадой стоит в национальном парке Аполлония, деля мыс с крепостью крестоносцев и средневековым рвом."
    },
    links: [
      { label: "Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Apollonia%E2%80%93Arsuf" },
      { label: "Israel Nature and Parks Authority", url: "https://en.parks.org.il/reserve-park/apollonia-national-park-tel-arsuf/" },
      { label: "Wikipedia (RU)", url: "https://ru.wikipedia.org/wiki/Арсуф" }
    ],
    imageFile: "Arsur_Fortress1.jpg"
  },
  {
    id: "cypros-fortress",
    type: "villa",
    subtype: "fortress-palace",
    name: { en: "Cypros Fortress", ru: "Кипрос", he: "מבצר קיפרוס" },
    coords: [31.8455, 35.4257],
    region: "west_bank",
    period: { en: "Hasmonean fort, rebuilt by Herod c. 30 BCE", ru: "хасмонейский форт, перестроен Иродом ок. 30 г. до н.э." },
    view: 4,
    viewNote: {
      en: "The bare summit hangs above the Wadi Qelt gorge, with the whole Jericho oasis, the Jordan Valley and a sliver of the Dead Sea spread out below.",
      ru: "Голая вершина нависает над ущельем вади Кельт, а внизу расстилаются весь иерихонский оазис, долина Иордана и краешек Мёртвого моря."
    },
    desc: {
      en: "Herod rebuilt this Hasmonean hilltop fort guarding the Jerusalem–Jericho road and named it after his mother, Cypros. Behind its walls excavators led by Ehud Netzer found two bathhouses with opus sectile floors and a monolithic stone bathtub weighing over a ton — desert luxury overlooking the royal winter estate below.",
      ru: "Ирод перестроил этот хасмонейский форт, стороживший дорогу Иерусалим–Иерихон, и назвал его в честь своей матери Кипрос. За его стенами экспедиция Эхуда Нецера нашла две бани с полами opus sectile и каменную монолитную ванну весом больше тонны — пустынная роскошь над царским зимним поместьем."
    },
    links: [
      { label: "Wikipedia (HE)", url: "https://he.wikipedia.org/wiki/מבצר_קיפרוס" },
      { label: "BibleWalks — Jericho palaces area", url: "https://www.biblewalks.com/jericho/" }
    ],
    imageFile: "Kipros1.jpg"
  },
  {
    id: "hyrcania-fortress",
    type: "villa",
    subtype: "fortress-palace",
    name: { en: "Hyrcania", ru: "Гиркания", he: "הורקניה" },
    coords: [31.7197, 35.3656],
    region: "west_bank",
    period: { en: "2nd–1st c. BCE, Hasmonean; expanded by Herod", ru: "II–I вв. до н.э., Хасмонеи; расширена Иродом" },
    view: 4,
    viewNote: {
      en: "Silence and chalky Judean Desert hills in every direction, with the Hyrcania valley and the lines of Herod's ruined aqueducts below.",
      ru: "Во все стороны — тишина и меловые холмы Иудейской пустыни, внизу — долина Гиркании и линии разрушенных акведуков Ирода."
    },
    desc: {
      en: "A lonely Hasmonean stronghold on a desert hilltop, rebuilt by Herod as a grim prison where his real or suspected enemies were executed and secretly buried — including his own son Antipater, five days before the king's death. Aqueducts caught flash-flood water for its cisterns and gardens. Around 492 CE Saint Sabbas founded the Kastellion monastery on the ruins.",
      ru: "Одинокая хасмонейская твердыня на пустынном холме, превращённая Иродом в мрачную тюрьму, где казнили и тайно хоронили его настоящих и мнимых врагов — включая его собственного сына Антипатра, за пять дней до смерти царя. Акведуки собирали паводковую воду для цистерн и садов. Около 492 года н.э. святой Савва основал на руинах монастырь Кастеллион."
    },
    links: [
      { label: "Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Hyrcania_(fortress)" },
      { label: "Wikipedia (RU)", url: "https://ru.wikipedia.org/wiki/Гиркания_(крепость)" }
    ],
    imageFile: "HurkaniaTop.JPG"
  },
  {
    id: "ein-feshkha",
    type: "villa",
    subtype: "manor",
    name: { en: "Ein Feshkha Estate (Einot Tzukim)", ru: "Эйн-Фешха (Эйнот-Цуким)", he: "עינות צוקים" },
    coords: [31.7144, 35.4533],
    region: "west_bank",
    period: { en: "1st c. BCE – 1st c. CE", ru: "I в. до н.э. — I в. н.э." },
    view: 4,
    viewNote: {
      en: "Reed-fringed spring pools at the foot of desert cliffs, looking east across the Dead Sea to the mountains of Moab.",
      ru: "Окаймлённые тростником пресные заводи под пустынными обрывами; за гладью Мёртвого моря на востоке — горы Моава."
    },
    desc: {
      en: "Beside brackish springs on the Dead Sea's northwestern shore, a Herodian-period estate ran a courtyard residence, possible stables and plastered industrial basins whose product is still argued over — date wine, indigo, fish farming or the legendary balsam perfume. Roland de Vaux saw it as the farm of the Qumran community, whose settlement lies just 3 km to the north; today it sits in the world's lowest nature reserve.",
      ru: "У солоноватых источников на северо-западном берегу Мёртвого моря усадьба иродианской эпохи держала жилой дом с двором, вероятные конюшни и оштукатуренные производственные бассейны, о продукции которых спорят до сих пор: финиковое вино, индиго, разведение рыбы или легендарный бальзамовый парфюм. Ролан де Во считал её фермой кумранской общины, чьё поселение лежит всего в 3 км севернее; сегодня это самый низко расположенный заповедник мира."
    },
    links: [
      { label: "Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Ein_Feshkha" },
      { label: "Israel Nature and Parks Authority", url: "https://en.parks.org.il/reserve-park/enot-tsukim-nature-reserve/" }
    ],
    imageFile: "Einot-tzukim-reserve-badeteich.JPG"
  },
  {
    id: "horvat-aqav",
    type: "villa",
    subtype: "villa",
    name: { en: "Horvat 'Aqav (Ramat HaNadiv)", ru: "Хорват Акав (Рамат ха-Надив)", he: "חורבת עקב" },
    coords: [32.5437, 34.9359],
    region: "israel",
    period: { en: "1st c. BCE – 1st c. CE; Byzantine villa 5th–7th c. CE", ru: "I в. до н.э. — I в. н.э.; византийская вилла V–VII вв." },
    view: 4,
    viewNote: {
      en: "From the cliff-edge threshing floor at Ramat HaNadiv's highest point, the whole coastal plain and the Mediterranean open up below.",
      ru: "С гумна на краю обрыва в самой высокой точке Рамат ха-Надив внизу раскрываются вся приморская равнина и Средиземное море."
    },
    desc: {
      en: "On the southwestern cliff of Carmel stood an L-shaped villa rustica of some 2,800 m² — home to a wealthy Jewish family, with the base of a three-storey tower, a ritual bath, two wine presses, an olive press and a 110 m³ cistern — abandoned after the Great Revolt. In the 5th–7th centuries a Byzantine farm villa rose on its ruins; the restored site also goes by its Arabic name, Khirbet Mansur el-'Aqab.",
      ru: "На юго-западном обрыве Кармеля стояла Г-образная villa rustica площадью около 2 800 м² — усадьба богатой еврейской семьи с основанием трёхэтажной башни, миквой, двумя винодавильнями, маслодавильней и цистерной на 110 м³; её покинули после Великого восстания. В V–VII веках на руинах выросла византийская сельская вилла; отреставрированный памятник известен и под арабским именем Хирбет-Мансур-эль-Акаб."
    },
    links: [
      { label: "Ramat Hanadiv (official)", url: "https://www.ramat-hanadiv.org.il/en/discover-the-place/nature-park/%D7%97%D7%95%D7%A8%D7%91%D7%AA-%D7%A2%D7%A7%D7%91/" },
      { label: "Ramat HaNadiv — Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Ramat_HaNadiv" },
      { label: "Amud Anan (HE)", url: "https://amudanan.co.il/w/P121266" }
    ]
  },
  {
    id: "caesarea-promontory-palace",
    type: "villa",
    subtype: "palace",
    name: { en: "Caesarea — Promontory Palace", ru: "Кесария — дворец Ирода на мысе", he: "ארמון הורדוס בקיסריה" },
    coords: [32.4971, 34.8897],
    region: "israel",
    period: { en: "c. 22–10 BCE, later Roman praetorium", ru: "ок. 22–10 гг. до н.э., затем резиденция римских наместников" },
    view: 4,
    viewNote: {
      en: "Mediterranean surf breaks on three sides of the ruined pool terrace, with the ancient harbor, theater and aqueduct coastline in view.",
      ru: "Средиземноморский прибой бьёт с трёх сторон у террасы с бассейном, а вокруг — древняя гавань, театр и берег с акведуком."
    },
    desc: {
      en: "Herod pushed his palace out onto a reef so the sea surrounded his dining halls, with a 35-by-18-meter freshwater pool cut into the rock at its center — a swimming bath amid the waves. An upper terrace held a peristyle courtyard for state business. After 6 CE it became the praetorium of the Roman governors of Judaea, where the Apostle Paul was tried before Felix and Festus.",
      ru: "Ирод вынес свой дворец на рифовый мыс, так что море окружало его пиршественные залы, а в центре в скале был вырублен пресноводный бассейн 35 на 18 метров — купальня среди волн. Верхняя терраса с перистильным двором служила для государственных дел. После 6 года н.э. дворец стал преторием римских наместников Иудеи — здесь судили апостола Павла перед Феликсом и Фестом."
    },
    links: [
      { label: "Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Caesarea_Maritima" },
      { label: "Wikipedia (HE)", url: "https://he.wikipedia.org/wiki/ארמון_הורדוס_בקיסריה" },
      { label: "Israel Nature and Parks Authority", url: "https://en.parks.org.il/reserve-park/caesarea-national-park/" }
    ],
    imageFile: "Herods_Promontory_Palace_P1100197.JPG"
  },
  {
    id: "jerusalem-herods-palace-citadel",
    type: "villa",
    subtype: "palace",
    name: { en: "Herod's Palace & the Citadel (Tower of David)", ru: "Дворец Ирода и Цитадель (Башня Давида)", he: "ארמון הורדוס ומגדל דוד" },
    coords: [31.7761, 35.2280],
    region: "israel",
    period: { en: "c. 23 BCE – 70 CE", ru: "ок. 23 г. до н.э. — 70 г. н.э." },
    view: 4,
    viewNote: {
      en: "From the citadel ramparts on the palace's old tower base, the whole Old City unfolds — domes, walls and the Mount of Olives on the horizon.",
      ru: "С крепостных стен цитадели, стоящей на основании дворцовой башни, открывается весь Старый город: купола, стены и Масличная гора на горизонте."
    },
    desc: {
      en: "Herod's main Jerusalem residence stood here on the Upper City's western edge, screened by three colossal towers he named Phasael, Hippicus and Mariamne — the massive base of one still anchors today's citadel. After Herod's death the palace became the Roman governors' praetorium, and many scholars place the trial of Jesus before Pontius Pilate here. The misnomer 'Tower of David' attached itself to the Herodian ruin centuries later.",
      ru: "Здесь, на западном краю Верхнего города, стояла главная иерусалимская резиденция Ирода, прикрытая тремя колоссальными башнями — Фасаэль, Гиппикус и Мариамна; массивное основание одной из них до сих пор держит нынешнюю цитадель. После смерти Ирода дворец стал преторием римских наместников, и многие учёные помещают именно сюда суд Понтия Пилата над Иисусом. Название «Башня Давида» прилипло к иродианским руинам лишь столетия спустя."
    },
    links: [
      { label: "Wikipedia (EN) — Herod's Palace", url: "https://en.wikipedia.org/wiki/Herod%27s_Palace_(Jerusalem)" },
      { label: "Wikipedia (EN) — Tower of David", url: "https://en.wikipedia.org/wiki/Tower_of_David" },
      { label: "Wikipedia (RU)", url: "https://ru.wikipedia.org/wiki/Башня_Давида" }
    ],
    imageFile: "Jerusalem_Modell_BW_10.JPG"
  },
  {
    id: "sepphoris-dionysus-house",
    type: "villa",
    subtype: "mansion",
    name: { en: "Sepphoris — Dionysus House", ru: "Циппори — дом Диониса", he: "בית דיוניסוס בציפורי" },
    coords: [32.7536, 35.2799],
    region: "israel",
    period: { en: "c. 200 CE, Roman", ru: "ок. 200 г. н.э., римская эпоха" },
    view: 4,
    viewNote: {
      en: "From the hilltop beside the mosaic's shelter you look out over the Beit Netofa Valley and the green hills of Lower Galilee.",
      ru: "С вершины холма у павильона с мозаикой открывается вид на долину Бейт-Нетофа и зелёные холмы Нижней Галилеи."
    },
    desc: {
      en: "A Roman dignitary's mansion built around 200 CE beside the theater of Sepphoris, its banqueting hall floored with a 15-panel mosaic of Dionysus — including his drinking contest with Heracles. From the border medallions gazes a hauntingly lifelike young woman, the famous 'Mona Lisa of the Galilee.' The house collapsed in the earthquake of 363 CE, sealing the masterpiece intact.",
      ru: "Особняк римского вельможи, построенный около 200 года н.э. рядом с театром Циппори; пол его пиршественного зала выложен мозаикой из 15 сцен о Дионисе, включая его состязание в питье с Гераклом. Из бордюрного медальона смотрит поразительно живое лицо молодой женщины — знаменитая «Мона Лиза Галилеи». Дом рухнул при землетрясении 363 года, навсегда запечатав шедевр."
    },
    links: [
      { label: "Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Sepphoris" },
      { label: "Wikipedia (RU)", url: "https://ru.wikipedia.org/wiki/Циппори" },
      { label: "Israel Nature and Parks Authority", url: "https://en.parks.org.il/reserve-park/tzipori-national-park/" }
    ],
    imageFile: "Mona_Lisa_of_the_Galilee_large.jpg"
  },
  {
    id: "horvat-eleq",
    type: "villa",
    subtype: "manor",
    name: { en: "Horvat 'Eleq (Ramat HaNadiv)", ru: "Хорват Элек (Рамат ха-Надив)", he: "חורבת עלק" },
    coords: [32.5510, 34.9515],
    region: "israel",
    period: { en: "1st c. BCE – 1st c. CE", ru: "I в. до н.э. — I в. н.э." },
    view: 3,
    viewNote: {
      en: "A leafy hollow on Mount Carmel's southern toe beside the Ein Tzur spring pool, with vineyard views over the Hanadiv Valley below.",
      ru: "Зелёная ложбина у южного подножия Кармеля рядом с бассейном источника Эйн-Цур; внизу — виноградники долины Ха-Надив."
    },
    desc: {
      en: "A huge fortified Herodian estate guarded the perennial spring of Ein Tzur: a massive tower, enclosure walls and a Roman bathhouse fed by the spring's plastered pool and tunnel. Yizhar Hirschfeld's excavations (1989–2007) traced life here from a Hellenistic-period Jewish village until abandonment around the First Jewish Revolt.",
      ru: "Огромная укреплённая иродианская усадьба сторожила непересыхающий источник Эйн-Цур: мощная башня, ограждающие стены и римская баня, питавшаяся водой из туннеля и облицованного бассейна. Раскопки Изхара Хиршфельда (1989–2007) проследили жизнь поселения от еврейской деревни эллинистической эпохи до запустения в годы Первой Иудейской войны."
    },
    links: [
      { label: "Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Horvat_Eleq" },
      { label: "Wikipedia (HE)", url: "https://he.wikipedia.org/wiki/%D7%97%D7%95%D7%A8%D7%91%D7%AA_%D7%A2%D7%9C%D7%A7" },
      { label: "Ramat HaNadiv — Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Ramat_HaNadiv" }
    ],
    imageFile: "Remains_of_a_Roman_bath.jpg"
  },
  {
    id: "ein-yael",
    type: "villa",
    subtype: "villa",
    name: { en: "Ein Yael Roman Villa", ru: "Эйн-Яэль", he: "עין יעל" },
    coords: [31.7427, 35.1771],
    region: "israel",
    period: { en: "2nd–3rd c. CE", ru: "II–III вв. н.э." },
    view: 3,
    viewNote: {
      en: "Green spring-fed terraces step down to the Refaim stream bed, facing the wooded Jerusalem hills.",
      ru: "Зелёные террасы у источника спускаются к руслу ручья Рефаим напротив лесистых Иудейских холмов."
    },
    desc: {
      en: "A wealthy Roman's country villa spread over irrigated terraces in the Refaim valley, its floors carpeted with mosaics of the Seasons, birds, theatrical masks and one of the country's earliest hexagram motifs. Roof tiles stamped by the Tenth Legion hint at the owner's connections; two vaulted bathhouses survive, and the site now doubles as a hands-on 'living museum' of ancient crafts.",
      ru: "Загородная вилла богатого римлянина раскинулась на орошаемых террасах долины Рефаим; её полы устланы мозаиками с временами года, птицами, театральными масками и одним из древнейших в стране шестиконечных «щитов Давида». Черепица с клеймами Десятого легиона намекает на связи владельца; сохранились две сводчатые бани, а сегодня здесь работает интерактивный «живой музей» древних ремёсел."
    },
    links: [
      { label: "Wikipedia (HE)", url: "https://he.wikipedia.org/wiki/%D7%A2%D7%99%D7%9F_%D7%99%D7%A2%D7%9C" },
      { label: "Ein Yael (official)", url: "https://einyael.co.il/en/about-us-2-2/" }
    ],
    imageFile: "EinYaloFeb112023_02.jpg"
  },
  {
    id: "khirbet-el-muraq",
    type: "villa",
    subtype: "manor",
    name: { en: "Khirbet el-Muraq (Hilkiya's Palace)", ru: "Хирбет эль-Мурак (дворец Хилкии)" },
    coords: [31.5278, 34.9679],
    region: "west_bank",
    period: { en: "1st c. BCE – 2nd c. CE", ru: "I в. до н.э. — II в. н.э." },
    view: 3,
    viewNote: {
      en: "A quiet rural spur where the Hebron Hills meet the Shephelah, with open views west over olive groves toward the coastal lowlands.",
      ru: "Тихий сельский отрог на стыке Хевронского нагорья и Шфелы; на западе — оливковые рощи и просторы приморской низменности."
    },
    desc: {
      en: "A Greek inscription names Hilkiya son of Simon as lord of this lavish Herodian-period manor west of Hebron, where colonnades with Nabataean-style capitals enclose a peristyle court, a garden triclinium and a full Roman bath suite alongside Jewish ritual baths. Beneath the floors snake some of Judea's largest hiding complexes, cut when the estate was held during the Bar Kokhba revolt.",
      ru: "Греческая надпись называет хозяином этой роскошной усадьбы иродианской эпохи к западу от Хеврона Хилкию, сына Симона: колоннады с капителями в набатейском стиле окружают перистильный двор, садовый триклиний и полноценные римские бани по соседству с еврейскими миквами. Под полами вьются одни из крупнейших в Иудее подземных убежищ, вырубленных в пору восстания Бар-Кохбы."
    },
    links: [
      { label: "Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Khirbet_el-Muraq" }
    ]
  },
  {
    id: "tel-anafa",
    type: "villa",
    subtype: "mansion",
    name: { en: "Tel Anafa", ru: "Тель-Анафа", he: "תל אנפה" },
    coords: [33.1772, 35.6447],
    region: "israel",
    period: { en: "late 2nd – 1st c. BCE (Hellenistic), early Roman reuse", ru: "конец II — I в. до н.э. (эллинизм), повторное заселение в раннеримское время" },
    view: 3,
    viewNote: {
      en: "A low grassy mound among Hula Valley fishponds and fields, with the Golan slopes and snowy Mount Hermon framing the horizon.",
      ru: "Невысокий травянистый холм среди рыбных прудов и полей долины Хула; горизонт обрамляют склоны Голан и снежный Хермон."
    },
    desc: {
      en: "Beneath this Hula Valley mound lay the Late Hellenistic Stuccoed Building — a sprawling courtyard mansion of the late 2nd century BCE, dripping with gilded, molded stucco and fitted with one of the region's earliest three-room bath suites. Probably the country seat of Tyrian elites, it was abandoned around 80–75 BCE and later overlaid by a modest early Roman farm settlement.",
      ru: "Под этим холмом в долине Хула скрывалось «позднеэллинистическое стуковое здание» — обширный особняк с внутренним двором конца II века до н.э., украшенный золочёным лепным стуком и оснащённый одной из самых ранних в регионе трёхкомнатных бань. Вероятно, загородная резиденция тирской знати; её покинули около 80–75 гг. до н.э., а позже поверх выросло скромное раннеримское сельское поселение."
    },
    links: [
      { label: "Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Tel_Anafa" }
    ],
    imageFile: "Tel_Anaffa1.jpg"
  },
  {
    id: "caesarea-birds-mosaic",
    type: "villa",
    subtype: "mansion",
    name: { en: "Birds Mosaic Mansion (Caesarea)", ru: "Вилла «Птичьей мозаики» в Кесарии", he: "פסיפס הציפורים" },
    coords: [32.5058, 34.9033],
    region: "israel",
    period: { en: "c. 600 CE (Byzantine)", ru: "ок. 600 г. н.э. (византийский период)" },
    view: 3,
    viewNote: {
      en: "An open lawn just outside Caesarea's old city walls, a few minutes' stroll from the Mediterranean shore.",
      ru: "Открытая лужайка сразу за стенами старой Кесарии, в нескольких минутах ходьбы от средиземноморского берега."
    },
    desc: {
      en: "A floor of 120 medallions of peacocks, storks and pelicans, bordered by lions, elephants and fruit trees, paved the 16 by 14.5 m courtyard of a seaside Byzantine mansion of about 600 CE — a 1,500 m² complex identified by Ronny Reich, likely burned during the Arab conquest of 640. Restored in 2004, the mosaic is open to walk on, free of charge. (Byzantine rather than Roman in date.)",
      ru: "Пол из 120 медальонов с павлинами, аистами и пеликанами в обрамлении львов, слонов и плодовых деревьев устилал двор размером 16 на 14,5 м приморской византийской виллы около 600 года н.э. — комплекса в 1 500 м², определённого Ронни Райхом и, вероятно, сгоревшего при арабском завоевании 640 года. После реставрации 2004 года по мозаике можно ходить, вход свободный. (Памятник византийский, а не римский.)"
    },
    links: [
      { label: "Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Birds_Mosaic_(Caesarea)" }
    ],
    imageFile: "Pflien031.jpg"
  },
  {
    id: "jericho-winter-palaces",
    type: "villa",
    subtype: "palace",
    name: { en: "Jericho Winter Palaces (Tulul Abu el-'Alayiq)", ru: "Зимние дворцы Иерихона (Тулуль-Абу-эль-Алайик)", he: "ארמונות החורף ביריחו" },
    coords: [31.8537, 35.4337],
    region: "west_bank",
    period: { en: "Late 2nd c. BCE – 1st c. CE, Hasmonean & Herodian", ru: "конец II в. до н.э. — I в. н.э., Хасмонеи и Ирод" },
    view: 2,
    viewNote: {
      en: "Low excavated mounds on the hot Jericho plain at the mouth of Wadi Qelt, with the green oasis and the red cliffs of Quruntul as a backdrop.",
      ru: "Невысокие раскопанные холмы на жаркой иерихонской равнине у выхода вади Кельт, на фоне зелёного оазиса и рыжих скал Каранталя."
    },
    desc: {
      en: "Where Wadi Qelt opens into the warm Jericho plain, generations of Hasmonean kings and then Herod built their winter palaces, with swimming pools, Roman baths and gardens on both banks of the stream. Herod's third palace boasted a grand reception hall built with Italian opus reticulatum concrete work. In one of the pools here Herod had the teenage high priest Aristobulus III 'accidentally' drowned.",
      ru: "Там, где вади Кельт выходит на тёплую иерихонскую равнину, цари из династии Хасмонеев, а затем Ирод строили зимние дворцы с бассейнами, римскими банями и садами по обоим берегам ручья. Третий дворец Ирода украшал парадный зал, выстроенный в итальянской технике opus reticulatum. В одном из здешних бассейнов по приказу Ирода «случайно» утопили юного первосвященника Аристобула III."
    },
    links: [
      { label: "Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Hasmonean_royal_winter_palaces" },
      { label: "BibleWalks", url: "https://www.biblewalks.com/jericho/" }
    ],
    imageFile: "HasmoneanPalace.jpg"
  },
  {
    id: "banias-agrippa-palace",
    type: "villa",
    subtype: "palace",
    name: { en: "Banias — Palace of Agrippa II", ru: "Баниас — дворец Агриппы II", he: "ארמון אגריפס השני בבניאס" },
    coords: [33.2463, 35.6923],
    region: "israel",
    period: { en: "Second half of 1st c. CE, Agrippa II", ru: "вторая половина I в. н.э., Агриппа II" },
    view: 2,
    viewNote: {
      en: "The vaulted halls sit low in the lush Hermon Stream valley — rushing spring water, greenery and the red cliff of Pan's cave rather than a panorama.",
      ru: "Сводчатые залы лежат в низине зелёной долины ручья Хермон: вместо панорамы — шум родниковой воды и рыжая скала с гротом Пана."
    },
    desc: {
      en: "Agrippa II, the last of the Herodian dynasty, built a roughly 2,000 m² palace of vaulted halls in his capital Caesarea Philippi, faced with marble and guarded by round towers, with an aqueduct channeling the Banias spring water beneath it. Today visitors walk straight through its arched underground passages; part of the complex was later converted into a Roman bathhouse.",
      ru: "Агриппа II, последний из династии Иродов, построил в своей столице Кесарии Филипповой дворец площадью около 2000 м² со сводчатыми залами, мраморной облицовкой и круглыми сторожевыми башнями; под ним проходил акведук с водой источников Баниаса. Сегодня посетители проходят прямо сквозь его подземные арочные коридоры; часть комплекса позже превратили в римскую баню."
    },
    links: [
      { label: "Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Banias" },
      { label: "BibleWalks — Banias Roman city", url: "https://www.biblewalks.com/baniasromancity/" },
      { label: "Israel Nature and Parks Authority", url: "https://en.parks.org.il/reserve-park/hermon-stream-banias-nature-reserve/" }
    ]
  },
  {
    id: "lod-mosaic-villa",
    type: "villa",
    subtype: "mansion",
    name: { en: "Lod Mosaic Villa", ru: "Вилла Лодской мозаики", he: "פסיפס לוד" },
    coords: [31.9560, 34.9038],
    region: "israel",
    period: { en: "c. 300 CE (Late Roman)", ru: "ок. 300 г. н.э. (позднеримский период)" },
    view: 1,
    viewNote: {
      en: "An indoor museum hall in a built-up Lod neighborhood — the splendor here is on the floor, not out the window.",
      ru: "Музейный зал в плотно застроенном квартале Лода: вся роскошь здесь — на полу, а не за окном."
    },
    desc: {
      en: "Around 300 CE a magnate of Roman Diospolis floored his reception suite with 180 m² of mosaic menagerie — lions, a giraffe, a rhinoceros, sea creatures and two merchant ships, famously without a single human figure. Found by construction workers in 1996 and toured through the Met and the Louvre, it now lies back in place beneath the purpose-built Shelby White and Leon Levy Lod Mosaic Archaeological Center.",
      ru: "Около 300 года н.э. богач из римского Диосполя выстлал парадные залы 180 м² мозаичного зверинца: львы, жираф, носорог, морские твари и два торговых корабля — и, что знаменито, ни одной человеческой фигуры. Найденная строителями в 1996 году и объехавшая Метрополитен и Лувр, мозаика вернулась на своё место под специально построенный центр Лодской мозаики имени Шелби Уайт и Леона Леви."
    },
    links: [
      { label: "Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Lod_Mosaic" },
      { label: "Wikipedia (RU)", url: "https://ru.wikipedia.org/wiki/Лодская_мозаика" },
      { label: "Wikipedia (HE)", url: "https://he.wikipedia.org/wiki/%D7%A4%D7%A1%D7%99%D7%A4%D7%A1_%D7%9C%D7%95%D7%93" }
    ],
    imageFile: "The_Lod_Mosaic,_Israel_Antiquities_Authority.jpg"
  },
  {
    id: "jerusalem-palatial-mansion",
    type: "villa",
    subtype: "mansion",
    name: { en: "Palatial Mansion — Herodian Quarter (Wohl Museum)", ru: "Дворцовый особняк — Иродианский квартал (музей Воля)", he: "הרובע ההרודיאני (מוזיאון וואהל)" },
    coords: [31.7753, 35.2321],
    region: "israel",
    period: { en: "1st c. BCE – 70 CE", ru: "I в. до н.э. — 70 г. н.э." },
    view: 1,
    viewNote: {
      en: "The mansion lies underground beneath a yeshiva in the Jewish Quarter — no panorama, just an astonishing time capsule of frescoed rooms.",
      ru: "Особняк скрыт под зданием иешивы в Еврейском квартале — никакой панорамы, только поразительная капсула времени с расписанными залами."
    },
    desc: {
      en: "A 600 m² aristocratic mansion from the last days of the Second Temple, preserved several meters beneath the modern Jewish Quarter and likely home to a high-priestly family. Pompeian-style frescoes, stucco ceilings, mosaic floors and four private ritual baths show how Jerusalem's elite lived within sight of the Temple. Charred roof beams collapsed onto the mosaics still record the Roman destruction of 70 CE.",
      ru: "Аристократический особняк площадью 600 м² времён конца Второго храма, сохранившийся в нескольких метрах под современным Еврейским кварталом; здесь, вероятно, жила семья первосвященника. Фрески в помпейском стиле, лепные потолки, мозаичные полы и четыре частных миквы показывают, как жила иерусалимская знать в виду Храма. Обугленные балки, рухнувшие на мозаики, до сих пор хранят память о римском разрушении 70 года."
    },
    links: [
      { label: "Wikipedia (EN) — Wohl Museum", url: "https://en.wikipedia.org/wiki/Wohl_Archaeological_Museum" },
      { label: "Wikipedia (EN) — Herodian Quarter", url: "https://en.wikipedia.org/wiki/Herodian_Quarter" },
      { label: "Wikipedia (HE)", url: "https://he.wikipedia.org/wiki/הרובע_ההרודיאני" }
    ],
    imageFile: "The_Herodian_Quarter_P8050085.JPG"
  },

  // ───────────────────────────────── CITIES ─────────────────────────────────
  {
    id: "caesarea-maritima",
    type: "city",
    subtype: "city",
    name: { en: "Caesarea Maritima", ru: "Кейсария", he: "קיסריה" },
    coords: [32.5000, 34.8917],
    region: "israel",
    period: { en: "Founded 22–10 BCE; capital of Roman Judaea until 640 CE", ru: "Основана в 22–10 гг. до н.э.; столица римской Иудеи до 640 г. н.э." },
    view: 4,
    viewNote: {
      en: "The theater and hippodrome sit right on the Mediterranean shore, with waves breaking beside the ancient harbor.",
      ru: "Театр и ипподром стоят прямо на берегу Средиземного моря, волны разбиваются у самой древней гавани."
    },
    desc: {
      en: "Herod the Great's grand port city, built from scratch with a man-made concrete harbor and dedicated to Augustus; for some 600 years it served as the Roman capital of Judaea. Today you walk through a seaside theater still used for concerts, a hippodrome, bathhouse mosaics, the praetorium where Paul stood trial, and the aqueduct arches running along the beach.",
      ru: "Грандиозный портовый город Ирода Великого, построенный с нуля вместе с искусственной гаванью и посвящённый Августу; около 600 лет он был римской столицей Иудеи. Сегодня здесь приморский театр, где до сих пор дают концерты, ипподром, мозаики терм, преторий, где судили апостола Павла, и арки акведука прямо на пляже."
    },
    links: [
      { label: "Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Caesarea_Maritima" },
      { label: "Israel Nature and Parks Authority", url: "https://en.parks.org.il/reserve-park/caesarea-national-park/" }
    ],
    imageFile: "Caesarea.JPG"
  },
  {
    id: "beit-shean-scythopolis",
    type: "city",
    subtype: "city",
    name: { en: "Scythopolis (Beit She'an)", ru: "Бейт-Шеан (Скифополь)", he: "בית שאן" },
    coords: [32.5022, 35.5022],
    region: "israel",
    period: { en: "Decapolis city; peak 1st–6th centuries CE", ru: "Город Декаполиса; расцвет в I–VI веках н.э." },
    view: 3,
    viewNote: {
      en: "From the top of the ancient tell the colonnaded streets spread out below, with the valley and Mount Gilboa beyond.",
      ru: "С вершины древнего телля внизу расстилаются колонные улицы, а дальше — долина и гора Гильбоа."
    },
    desc: {
      en: "Scythopolis, the leading Decapolis city west of the Jordan, grew into a Roman–Byzantine metropolis of some 40,000 before the earthquake of 749 CE toppled its colonnades. It is Israel's most complete Roman cityscape: a grand theater, the colonnaded Palladius Street, bathhouses, and columns still lying where the quake threw them.",
      ru: "Скифополь, главный город Декаполиса к западу от Иордана, вырос в римско-византийский мегаполис на 40 тысяч жителей, пока землетрясение 749 года не повалило его колоннады. Это самый цельный римский городской пейзаж Израиля: огромный театр, колонная улица Палладия, термы и колонны, лежащие так, как их бросило землетрясение."
    },
    links: [
      { label: "Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Beit_She%27an" },
      { label: "Israel Nature and Parks Authority", url: "https://en.parks.org.il/reserve-park/bet-shean-national-park/" }
    ],
    imageFile: "BetShe'an_-_view_of_archeological_park_from_entry.jpg"
  },
  {
    id: "sepphoris-tzippori",
    type: "city",
    subtype: "city",
    name: { en: "Sepphoris (Tzippori)", ru: "Циппори (Сепфорис)", he: "ציפורי" },
    coords: [32.7519, 35.2786],
    region: "israel",
    period: { en: "1st century BCE – Byzantine era; capital of Galilee", ru: "I век до н.э. — византийская эпоха; столица Галилеи" },
    view: 4,
    viewNote: {
      en: "From the hilltop citadel the patchwork fields of the Beit Netofa Valley spread out far below.",
      ru: "С вершины холма, от крепости, далеко внизу открываются лоскутные поля долины Бейт-Нетофа."
    },
    desc: {
      en: "Josephus called it the 'ornament of all Galilee'; this hilltop capital is where tradition says Rabbi Judah ha-Nasi compiled the Mishnah. Its 4,500-seat Roman theater, a colonnaded cardo rutted by cart wheels, an underground reservoir, and villas with over 60 mosaics — including the famous 'Mona Lisa of the Galilee' — survive.",
      ru: "Иосиф Флавий называл его «украшением всей Галилеи»; в этой столице на холме, по преданию, рабби Иехуда ха-Наси завершил Мишну. Сохранились римский театр на 4500 зрителей, кардо с колеями от повозок, подземный резервуар и виллы с более чем 60 мозаиками — включая знаменитую «Мону Лизу Галилеи»."
    },
    links: [
      { label: "Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Sepphoris" },
      { label: "Israel Nature and Parks Authority", url: "https://en.parks.org.il/reserve-park/tzipori-national-park/" }
    ],
    imageFile: "תמונה_134.jpg"
  },
  {
    id: "tiberias-hamat",
    type: "city",
    subtype: "city",
    name: { en: "Tiberias & Hamat Tiberias", ru: "Тверия и Хамат-Тверия", he: "טבריה וחמת טבריה" },
    coords: [32.7686, 35.5483],
    region: "israel",
    period: { en: "Founded c. 20 CE by Herod Antipas", ru: "Основана ок. 20 г. н.э. Иродом Антипой" },
    view: 3,
    viewNote: {
      en: "From the lakeside park you look across the Sea of Galilee to the Golan slopes, with hot springs steaming beside the mosaics.",
      ru: "Из приозёрного парка виден весь Кинерет и склоны Голан, а рядом с мозаиками парят горячие источники."
    },
    desc: {
      en: "Founded by Herod Antipas and named for the emperor Tiberius, the city became the seat of the Sanhedrin and the heart of Jewish life after Jerusalem's fall. South of the modern town lie a 7,000-seat Roman theater at the foot of Mount Berenice and a Roman–Byzantine gate, while Hamat Tiberias preserves hot springs and a 4th-century synagogue with a striking Helios zodiac mosaic.",
      ru: "Основанная Иродом Антипой и названная в честь императора Тиберия, Тверия стала резиденцией Синедриона и центром еврейской жизни после падения Иерусалима. Южнее современного города — римский театр на 7000 мест у подножия горы Береники и римско-византийские ворота, а в Хамат-Тверии — горячие источники и синагога IV века с поразительной зодиакальной мозаикой с Гелиосом."
    },
    links: [
      { label: "Wikipedia (EN) — Tiberias", url: "https://en.wikipedia.org/wiki/Tiberias" },
      { label: "Wikipedia (EN) — Hamat Tiberias", url: "https://en.wikipedia.org/wiki/Hamat_Tiberias" },
      { label: "Israel Nature and Parks Authority", url: "https://en.parks.org.il/reserve-park/hamat-tiberias-national-park/" },
      { label: "BibleWalks", url: "https://www.biblewalks.com/tiberias/" }
    ],
    imageFile: "130048_hamat_tiberias_national_park_floor_of_the_ancient_PikiWiki_Israel.jpg"
  },
  {
    id: "hippos-sussita",
    type: "city",
    subtype: "city",
    name: { en: "Hippos (Sussita)", ru: "Сусита (Гиппос)", he: "סוסיתא" },
    coords: [32.7790, 35.6600],
    region: "israel",
    period: { en: "Decapolis city, 2nd century BCE – 749 CE", ru: "Город Декаполиса, II в. до н.э. — 749 г. н.э." },
    view: 5,
    viewNote: {
      en: "From 350 m above the water the whole Sea of Galilee, Tiberias and the Galilee hills lie at your feet — one of the best balconies in the country.",
      ru: "С высоты 350 метров под ногами лежит весь Кинерет, Тверия и холмы Галилеи — едва ли не лучший «балкон» страны."
    },
    desc: {
      en: "A Decapolis city on a flat, diamond-shaped mountain two kilometers east of the Sea of Galilee, destroyed at its height by the great earthquake of 749 CE. Along the colonnaded decumanus you pass a basilica, an odeon, bathhouses and Byzantine churches, with the entire lake spread out below.",
      ru: "Город Декаполиса на плоской ромбовидной горе в двух километрах от Кинерета, погибший в расцвете при великом землетрясении 749 года. Вдоль декумануса с колоннадой — базилика, одеон, термы и византийские церкви, а внизу расстилается всё озеро."
    },
    links: [
      { label: "Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Hippos_(Golan_Heights)" },
      { label: "Israel Nature and Parks Authority", url: "https://en.parks.org.il/reserve-park/sussita-hippos-national-park/" }
    ],
    imageFile: "Sussita_-_Aerial_photography_April_2017.jpg"
  },
  {
    id: "gamla",
    type: "city",
    subtype: "town",
    name: { en: "Gamla", ru: "Гамла", he: "גמלא" },
    coords: [32.9028, 35.7406],
    region: "israel",
    period: { en: "1st century BCE – destroyed 67 CE", ru: "I в. до н.э. — разрушена в 67 г. н.э." },
    view: 5,
    viewNote: {
      en: "The lookout faces the camel-hump ridge above wild gorges where griffon vultures soar.",
      ru: "Со смотровой площадки виден «верблюжий горб» Гамлы над дикими ущельями, где парят грифы."
    },
    desc: {
      en: "A fortified Jewish town on a camel-hump ridge — the 'Masada of the north' — where Josephus describes Vespasian's legions storming the walls in 67 CE during the Great Revolt. You can see the breached wall, one of the world's earliest known synagogues, and griffon vultures riding the canyon winds near Israel's highest waterfall.",
      ru: "Укреплённый еврейский город на гребне-«верблюжьем горбу» — «северная Масада»: Иосиф Флавий описал, как легионы Веспасиана штурмовали его стены в 67 году, во время Великого восстания. Видны пролом в стене, одна из древнейших известных синагог мира, а над каньоном рядом с самым высоким водопадом Израиля кружат грифы."
    },
    links: [
      { label: "Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Gamla" },
      { label: "Israel Nature and Parks Authority", url: "https://en.parks.org.il/reserve-park/gamla-nature-reserve/" }
    ],
    imageFile: "Mountainous_terrain_near_Gamla.jpg"
  },
  {
    id: "beit-guvrin-maresha",
    type: "city",
    subtype: "city",
    name: { en: "Beit Guvrin (Eleutheropolis) & Maresha", ru: "Бейт-Гуврин (Элевтерополь)", he: "בית גוברין" },
    coords: [31.5970, 34.9006],
    region: "israel",
    period: { en: "Eleutheropolis, city status from c. 200 CE", ru: "Элевтерополь, статус города с ок. 200 г. н.э." },
    view: 3,
    viewNote: {
      en: "From the top of Tel Maresha the soft chalk hills of the Shephelah roll away in every direction.",
      ru: "С вершины Тель-Мареши во все стороны расходятся мягкие меловые холмы Шфелы."
    },
    desc: {
      en: "Roman Eleutheropolis, the 'city of the free', became one of the most important cities of late Roman Palestine; beside it lies Hellenistic Maresha with its painted Sidonian burial caves. A 3,500-seat amphitheater built for gladiatorial games, hundreds of bell-shaped quarry caves, and a UNESCO-listed underground labyrinth await.",
      ru: "Римский Элевтерополь, «город свободных», стал одним из важнейших городов поздней римской Палестины; рядом — эллинистическая Мареша с расписными сидонскими гробницами. Здесь амфитеатр на 3500 зрителей для гладиаторских боёв, сотни колоколообразных пещер-каменоломен и подземный лабиринт из списка ЮНЕСКО."
    },
    links: [
      { label: "Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Beit_Guvrin-Maresha_National_Park" },
      { label: "Israel Nature and Parks Authority", url: "https://en.parks.org.il/reserve-park/bet-guvrin-national-park/" }
    ],
    imageFile: "Beit_Guvrin_1.JPG"
  },
  {
    id: "ashkelon",
    type: "city",
    subtype: "city",
    name: { en: "Ashkelon", ru: "Ашкелон", he: "תל אשקלון" },
    coords: [31.6639, 34.5458],
    region: "israel",
    period: { en: "Free city throughout the Roman era", ru: "Вольный город всю римскую эпоху" },
    view: 4,
    viewNote: {
      en: "The ruins stand on sandstone bluffs directly above the Mediterranean surf and a swimming beach.",
      ru: "Руины стоят на песчаниковых обрывах прямо над средиземноморским прибоем и пляжем."
    },
    desc: {
      en: "One of the oldest port cities in the land, a free city under Rome on the great trade route between Egypt and Syria. The seaside national park holds a Roman basilica complex from Herod's reign with marble columns imported from Asia Minor, ancient statues, and even the world's oldest vaulted gate from the Canaanite era.",
      ru: "Один из древнейших портовых городов страны, при римлянах — вольный город на большом торговом пути из Египта в Сирию. В приморском парке — римская базилика времён Ирода с мраморными колоннами из Малой Азии, античные статуи и даже древнейшие в мире арочные ворота ханаанской эпохи."
    },
    links: [
      { label: "Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Ashkelon_National_Park" },
      { label: "Israel Nature and Parks Authority", url: "https://en.parks.org.il/reserve-park/ashkelon-national-park/" },
      { label: "BibleWalks", url: "https://www.biblewalks.com/ashkelon/" }
    ],
    imageFile: "Ashkelon-8999.jpg"
  },
  {
    id: "akko-ptolemais",
    type: "city",
    subtype: "city",
    name: { en: "Akko (Ptolemais)", ru: "Акко (Птолемаида)", he: "עכו" },
    coords: [32.9214, 35.0689],
    region: "israel",
    period: { en: "Roman colony from the reign of Claudius", ru: "Римская колония со времён Клавдия" },
    view: 4,
    viewNote: {
      en: "From the sea walls above the old harbor you look across the entire bay to Haifa and Mount Carmel.",
      ru: "С морских стен над старой гаванью виден весь Хайфский залив до Хайфы и горы Кармель."
    },
    desc: {
      en: "Ancient Akko became the Roman Colonia Claudia Ptolemais, a harbor city of more than 20,000 under Hadrian, where the apostle Paul landed on his way to Jerusalem. The Romans built the breakwater beneath today's picturesque port; the visible walls, khans and tunnels of the UNESCO-listed Old City are Crusader and Ottoman layers stacked over the ancient one.",
      ru: "Древний Акко стал римской колонией Клавдия Птолемаидой — портовым городом, где при Адриане жило более 20 тысяч человек и куда по пути в Иерусалим причаливал апостол Павел. Римляне построили мол под нынешней живописной гаванью; видимые стены, ханы и туннели Старого города (ЮНЕСКО) — слои крестоносцев и османов поверх античности."
    },
    links: [
      { label: "Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Acre,_Israel" }
    ],
    imageFile: "Acre_-_Akko_6_-_the_fishing_port_(6658890981).jpg"
  },
  {
    id: "tel-dor",
    type: "city",
    subtype: "town",
    name: { en: "Tel Dor", ru: "Тель-Дор", he: "תל דור" },
    coords: [32.6175, 34.9175],
    region: "israel",
    period: { en: "Port town, 63 BCE – 3rd century CE", ru: "Портовый город, 63 г. до н.э. — III век н.э." },
    view: 4,
    viewNote: {
      en: "From the tell you overlook turquoise lagoons, rocky islets and one of Israel's prettiest beaches.",
      ru: "С телля видны бирюзовые лагуны, скалистые островки и один из красивейших пляжей Израиля."
    },
    desc: {
      en: "A Phoenician harbor town on a headland that minted its own coins through the Roman era, counting its years from Pompey's arrival in 63 BCE, before fading away by late antiquity. Excavations on the tell have exposed Roman-period temples, a theater, baths and public buildings between sheltered lagoon anchorages.",
      ru: "Финикийский портовый город на мысе, чеканивший собственную монету всю римскую эпоху — летосчисление здесь вели от прихода Помпея в 63 году до н.э., — а к поздней античности угасший. Раскопки открыли римские храмы, театр, термы и общественные здания между укрытыми лагунами-якорными стоянками."
    },
    links: [
      { label: "Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Tel_Dor" },
      { label: "BibleWalks", url: "https://www.biblewalks.com/dor/" }
    ],
    imageFile: "PikiWiki_Israel_3628_Tel_Dors_shoreline.JPG"
  },
  {
    id: "antipatris-tel-afek",
    type: "city",
    subtype: "town",
    name: { en: "Antipatris (Tel Afek)", ru: "Антипатрида (Тель-Афек)", he: "תל אפק (אנטיפטריס)" },
    coords: [32.1050, 34.9304],
    region: "israel",
    period: { en: "Founded by Herod, 1st century BCE", ru: "Основан Иродом в I веке до н.э." },
    view: 2,
    viewNote: {
      en: "Flat parkland at the Yarkon springs; the Ottoman fort walls give a modest view over ponds and greenery.",
      ru: "Вокруг — плоский парк у истоков Яркона; со стен османской крепости открывается скромный вид на пруды и зелень."
    },
    desc: {
      en: "Herod founded Antipatris at the Yarkon springs in memory of his father Antipater, at the strategic Afek Pass where the road from Caesarea to Jerusalem squeezed between river and hills; the apostle Paul was brought through here under Roman escort. Inside Yarkon National Park you find a reconstructed cardo with shops, a small theater, and the Ottoman Binar Bashi fortress crowning the tell.",
      ru: "Ирод основал Антипатриду у истоков Яркона в память об отце Антипатре — у стратегического Афекского прохода, где дорога из Кейсарии в Иерусалим зажата между рекой и холмами; через неё под римским конвоем везли апостола Павла. В национальном парке Яркон — восстановленное кардо с лавками, маленький театр и османская крепость Бинар-Баши на вершине телля."
    },
    links: [
      { label: "Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Antipatris" },
      { label: "Israel Nature and Parks Authority", url: "https://en.parks.org.il/reserve-park/yarkon-3/" }
    ],
    imageFile: "Afek_IMG_8217.JPG"
  },
  {
    id: "emmaus-nicopolis",
    type: "city",
    subtype: "city",
    name: { en: "Emmaus Nicopolis", ru: "Эммаус-Никополь", he: "אמאוס ניקופוליס" },
    coords: [31.8392, 34.9894],
    region: "west_bank",
    period: { en: "Roman town; polis of Nicopolis from 221 CE", ru: "Римский городок; полис Никополь с 221 г. н.э." },
    view: 2,
    viewNote: {
      en: "Low ruins among the pines of Canada Park at the edge of the Ayalon Valley — a quiet, modest panorama toward Latrun.",
      ru: "Невысокие руины среди сосен парка Канада на краю долины Аялон — тихая, скромная панорама в сторону Латруна."
    },
    desc: {
      en: "By Christian tradition this is the Emmaus where the risen Jesus broke bread with two disciples; in 221 CE Emperor Elagabalus granted it polis status as Nicopolis, 'city of victory'. Near Latrun stand the remains of a 5th–7th-century Byzantine basilica with mosaics, a baptistery, and a 3rd-century Roman bathhouse.",
      ru: "По христианской традиции это тот самый Эммаус, где воскресший Иисус преломил хлеб с двумя учениками; в 221 году император Элагабал дал ему статус полиса Никополь — «город победы». Рядом с Латруном — остатки византийской базилики V–VII веков с мозаиками, баптистерий и римская баня III века."
    },
    links: [
      { label: "Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Emmaus_Nicopolis" }
    ],
    imageFile: "Emmaus_Nicopolis_basilica.JPG"
  },
  {
    id: "jerusalem-aelia-capitolina",
    type: "city",
    subtype: "city",
    name: { en: "Jerusalem (Aelia Capitolina)", ru: "Иерусалим (Элия Капитолина)", he: "ירושלים" },
    coords: [31.7757, 35.2310],
    region: "israel",
    period: { en: "Aelia Capitolina, founded c. 130 CE by Hadrian", ru: "Элия Капитолина, основана ок. 130 г. н.э. Адрианом" },
    view: 3,
    viewNote: {
      en: "The Roman level hides below the Old City's dense streets; rooftops above the Cardo open onto domes and the Mount of Olives.",
      ru: "Римский уровень скрыт под тесными улицами Старого города; с крыш над Кардо открывается вид на купола и Масличную гору."
    },
    desc: {
      en: "After crushing Judea, Hadrian refounded ruined Jerusalem around 130 CE as the pagan colony Aelia Capitolina — a move that helped ignite the Bar Kokhba revolt, and whose street grid still underlies the Old City. Walk the excavated columns of the Cardo Maximus in the Jewish Quarter, the Roman gate and plaza beneath Damascus Gate, and the 'Ecce Homo' arch on the Via Dolorosa.",
      ru: "Подавив Иудею, Адриан около 130 года заново основал разрушенный Иерусалим как языческую колонию Элия Капитолина — это подтолкнуло восстание Бар-Кохбы, а римская сетка улиц до сих пор лежит в основе Старого города. Пройдите вдоль раскопанных колонн Кардо Максимус в Еврейском квартале, к римским воротам и площади под Дамасскими воротами и к арке «Ecce Homo» на Виа Долороза."
    },
    links: [
      { label: "Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Aelia_Capitolina" }
    ]
  },
  {
    id: "sebastia-samaria",
    type: "city",
    subtype: "city",
    name: { en: "Sebastia (Samaria-Sebaste)", ru: "Себастия (Самария)", he: "סבסטיה" },
    coords: [32.2764, 35.1950],
    region: "west_bank",
    period: { en: "Rebuilt by Herod as Sebaste in 27 BCE", ru: "Перестроена Иродом в Себастию в 27 г. до н.э." },
    view: 4,
    viewNote: {
      en: "The acropolis rises high above terraced Samarian hills, with the Mediterranean visible on clear days.",
      ru: "Акрополь высоко поднят над террасами самарийских холмов; в ясный день на горизонте видно Средиземное море."
    },
    desc: {
      en: "The capital of the biblical Kingdom of Israel, rebuilt by Herod as Sebaste in honor of Augustus and settled with 6,000 veterans. On the hilltop survive the podium of the Augusteum temple, a theater, a colonnaded street, forum and stadium remains, while the village below keeps the tomb-shrine traditionally linked to John the Baptist.",
      ru: "Столица библейского Израильского царства, перестроенная Иродом в Себастию в честь Августа и заселённая шестью тысячами ветеранов. На вершине холма сохранились подиум храма Августа, театр, улица с колоннадой, форум и остатки стадиона, а в деревне внизу — гробница, по преданию связанная с Иоанном Крестителем."
    },
    links: [
      { label: "Wikipedia (EN) — Samaria (ancient city)", url: "https://en.wikipedia.org/wiki/Samaria_(ancient_city)" },
      { label: "Wikipedia (EN) — Sebastia", url: "https://en.wikipedia.org/wiki/Sebastia,_Nablus" }
    ],
    imageFile: "2016_WLM_-_OVEDC_-_Shomron_capital_of_the_Kingdom_of_Israel_067.jpg"
  },
  {
    id: "banias-caesarea-philippi",
    type: "city",
    subtype: "city",
    name: { en: "Banias (Caesarea Philippi)", ru: "Баниас (Кесария Филиппова)", he: "בניאס" },
    coords: [33.2486, 35.6944],
    region: "israel",
    period: { en: "Caesarea Philippi, capital of Philip's tetrarchy from c. 2 BCE", ru: "Кесария Филиппова, столица тетрархии Филиппа с ок. 2 г. до н.э." },
    view: 4,
    viewNote: {
      en: "A red cliff with Pan's grotto towers over the rushing spring at the lush green foot of Mount Hermon.",
      ru: "Красная скала с гротом Пана нависает над бурлящим источником у пышного зелёного подножия Хермона."
    },
    desc: {
      en: "Greco-Roman Paneas grew around the grotto of Pan at one of the sources of the Jordan; Philip the Tetrarch made it his capital, Caesarea Philippi, where the Gospels place Peter's confession of Christ. You can see the cliff-side sanctuary terrace with its cult niches, remains of the palace of Philip and Agrippa II, and trails leading to Israel's mightiest waterfall.",
      ru: "Греко-римский Паниас вырос вокруг грота Пана у одного из истоков Иордана; тетрарх Филипп сделал его своей столицей — Кесарией Филипповой, где Евангелия помещают исповедание Петра. Видны святилище на террасе у скалы с культовыми нишами, остатки дворца Филиппа и Агриппы II, а тропы ведут к самому мощному водопаду Израиля."
    },
    links: [
      { label: "Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Banias" },
      { label: "Israel Nature and Parks Authority", url: "https://en.parks.org.il/reserve-park/banias/" }
    ],
    imageFile: "Banias_Spring_Cliff_Pan's_Cave.JPG"
  },
  {
    id: "magdala",
    type: "city",
    subtype: "town",
    name: { en: "Magdala (Migdal)", ru: "Магдала", he: "מגדלא" },
    coords: [32.8250, 35.5156],
    region: "israel",
    period: { en: "Fishing town, 1st century BCE – 1st century CE", ru: "Рыбацкий городок, I век до н.э. — I век н.э." },
    view: 3,
    viewNote: {
      en: "The excavations sit on the Sea of Galilee shoreline with the Arbel cliffs rising right behind them.",
      ru: "Раскопки лежат на берегу Кинерета, а прямо за ними встают скалы Арбеля."
    },
    desc: {
      en: "The fishing town of Taricheae, famous for its salted fish and remembered as the home of Mary Magdalene. Excavations exposed a first-century synagogue — among the oldest in the country — with the carved Magdala Stone bearing the earliest Temple menorah found outside Jerusalem, plus the harbor area, ritual baths and mosaics.",
      ru: "Рыбацкий городок Тарихея, славившийся солёной рыбой и известный как родина Марии Магдалины. Раскопки открыли синагогу I века — одну из древнейших в стране — с резным «Магдальским камнем», на котором самое раннее изображение храмовой меноры вне Иерусалима, а также гавань, миквы и мозаики."
    },
    links: [
      { label: "Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Magdala" },
      { label: "BibleWalks", url: "https://www.biblewalks.com/magdala/" }
    ],
    imageFile: "מגדלא_תצלום_אויר.JPG"
  },
  {
    id: "avdat",
    type: "city",
    subtype: "town",
    name: { en: "Avdat", ru: "Авдат", he: "עבדת" },
    coords: [30.7940, 34.7730],
    region: "israel",
    period: { en: "Nabataean–Roman–Byzantine, 3rd c. BCE – 7th c. CE", ru: "Набатейско-римско-византийский, III в. до н.э. — VII в. н.э." },
    view: 5,
    viewNote: {
      en: "From the plateau rim the bare Negev highlands and the Zin valley stretch to the horizon in every direction.",
      ru: "С края плато во все стороны до горизонта тянутся голое нагорье Негева и долина Цин."
    },
    desc: {
      en: "After Petra, the most important Nabataean city on the Incense Route, later a Roman and Byzantine stronghold of desert winemakers. On the acropolis above the Zin valley stand temple remains, a 100-by-100-meter Roman army camp, Byzantine churches and citadel walls, and rock-cut wine presses — a UNESCO World Heritage Site since 2005.",
      ru: "Важнейший после Петры набатейский город на Пути благовоний, позже — римский и византийский оплот пустынных виноделов. На акрополе над долиной Цин — остатки храмов, римский военный лагерь 100 на 100 метров, византийские церкви, стены цитадели и вырубленные в скале винодельни; с 2005 года — объект ЮНЕСКО."
    },
    links: [
      { label: "Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Avdat" },
      { label: "Israel Nature and Parks Authority", url: "https://en.parks.org.il/reserve-park/avdat-national-park/" }
    ],
    imageFile: "Aerial_photograph_of_Avdat,_Israel,_July_2017.jpg"
  },
  {
    id: "mamshit",
    type: "city",
    subtype: "town",
    name: { en: "Mamshit (Mampsis)", ru: "Мамшит", he: "ממשית" },
    coords: [31.0250, 35.0640],
    region: "israel",
    period: { en: "Nabataean town; Roman garrison from 106 CE", ru: "Набатейский город; римский гарнизон со 106 г. н.э." },
    view: 3,
    viewNote: {
      en: "From the town walls you overlook the Mamshit gorge and the bare hills of the northern Negev.",
      ru: "Со стен города видны каньон Мамшит и голые холмы северного Негева."
    },
    desc: {
      en: "Nabataean Mampsis, the smallest yet best-restored desert town in the Negev, hosted a Roman garrison after the annexation of 106 CE. Entire streets survive intact: two-story merchant houses with stables and frescoes and two Byzantine churches with mosaic floors, all part of the UNESCO Incense Route listing.",
      ru: "Набатейский Мампсис — самый маленький, но лучше всех восстановленный город пустыни Негев; после аннексии 106 года здесь стоял римский гарнизон. Улицы уцелели целиком: двухэтажные купеческие дома с конюшнями и фресками, две византийские церкви с мозаичными полами — всё это часть Пути благовоний из списка ЮНЕСКО."
    },
    links: [
      { label: "Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Mamshit" },
      { label: "Israel Nature and Parks Authority", url: "https://en.parks.org.il/reserve-park/mamshit-national-park/" }
    ],
    imageFile: "Mamshit.jpg"
  },
  {
    id: "shivta",
    type: "city",
    subtype: "town",
    name: { en: "Shivta (Sobata)", ru: "Шивта", he: "שבטה" },
    coords: [30.8814, 34.6309],
    region: "israel",
    period: { en: "Nabataean–Byzantine, 1st c. BCE – early Islamic era", ru: "Набатейско-византийская, I в. до н.э. — раннеисламская эпоха" },
    view: 2,
    viewNote: {
      en: "Around the ruined lanes there is only flat, silent loess desert stretching to the horizon.",
      ru: "Вокруг руин — лишь плоская безмолвная лёссовая пустыня до самого горизонта."
    },
    desc: {
      en: "A Nabataean settlement that blossomed into a Byzantine farming town pressing an estimated two million liters of famed Gaza wine a year. Far from any modern town stand three churches — one preserving traces of a Transfiguration mural — wine presses, and remarkably intact streets of stone houses, part of the UNESCO Incense Route ensemble.",
      ru: "Набатейское поселение, расцветшее как византийский земледельческий городок, давивший, по оценкам, около двух миллионов литров знаменитого газского вина в год. Вдали от современных городов стоят три церкви — в одной сохранились следы фрески Преображения, — винодельни и удивительно целые улицы каменных домов; часть ансамбля Пути благовоний ЮНЕСКО."
    },
    links: [
      { label: "Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Shivta" },
      { label: "Israel Nature and Parks Authority", url: "https://en.parks.org.il/reserve-park/shivta-national-park/" }
    ],
    imageFile: "Ruins_of_a_church_in_Shivta_in_the_Negev.jpg"
  }
];
