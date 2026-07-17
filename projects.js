/*
  ОСНОВНОЙ ФАЙЛ ДЛЯ ДОБАВЛЕНИЯ И РЕДАКТИРОВАНИЯ ПРОЕКТОВ.

  categories:
  html5       — HTML5-игры
  web-product — интерактивные веб-продукты
  mechanic    — игровые механики и прототипы
  desktop     — игры для ПК
  case        — кейсы и разборы решений

  Все публичные тексты задаются на двух языках:
  { ru: "Русский текст", en: "English text" }

  Обложка необязательна. Укажите путь в поле cover, например:
  cover: "assets/projects/tavern-below.webp"

  Если cover: "", карточка использует стандартную фирменную CSS-обложку.
  Для ссылки укажите реальный URL. Если links: [], будет показано сообщение о подготовке ссылок.
*/

window.DARLES_PROJECTS = [
  {
    id: "tavern-below",
    title: {
      ru: "Таверна: Этажом ниже",
      en: "Tavern: The Floor Below"
    },
    category: "html5",
    type: {
      ru: "Нарративная игра · алхимия",
      en: "Narrative alchemy game"
    },
    status: "development",
    statusLabel: {
      ru: "В разработке",
      en: "In development"
    },
    featured: true,
    accent: "magic",
    cover: "assets/projects/tavern-below.webp",
    short: {
      ru: "Первая версия мрачной фэнтезийной веб-игры об алхимике, который варит зелья для посетителей мистической таверны и постепенно раскрывает их истории.",
      en: "The original version of a dark fantasy web game about an alchemist who brews potions for visitors to a mystical tavern and gradually uncovers their stories."
    },
    details: {
      ru: "Проект дошёл до альфа-тестирования и был опубликован на Яндекс Играх, но из-за нехватки времени был снят с публикации и отложен. Интерес игроков позднее вернул разработку к жизни и стал основой для полностью переосмысленной версии 2.0. Оригинальная игра сохраняется как самостоятельный долгосрочный проект с последовательным приготовлением зелий, системой кармы, книгой рецептов, персонажами и вариативным сюжетом.",
      en: "The project reached alpha testing and was published on Yandex Games, but limited development time led to its removal and long-term pause. Player interest later revived the concept and became the foundation for a substantially rebuilt 2.0 version. The original remains a separate long-term project built around ordered potion crafting, karma, a recipe book, characters and branching narrative outcomes."
    },
    solutions: {
      ru: [
        "Последовательная система приготовления зелий с проверкой порядка ингредиентов.",
        "Карма как внутриигровой ресурс, связанный с обслуживанием посетителей и прогрессией.",
        "Книга рецептов и набор персонажей, через диалоги которых раскрывается история.",
        "Вариативное развитие сюжета и несколько возможных финалов."
      ],
      en: [
        "An ordered potion-crafting system that validates ingredient sequence.",
        "Karma used as an in-game resource tied to serving visitors and progression.",
        "A recipe book and character cast that reveal the story through dialogue.",
        "Branching narrative progression with multiple possible endings."
      ]
    },
    stack: [
      "Construct 3",
      "HTML5",
      "Platform SDKs",
      "Recipe System",
      "Branching Narrative",
      "Progression System"
    ],
    links: []
  },
  {
  id: "quadropuzzle",
  title: { ru: "КвадроПаззл", en: "QuadroPuzzle" },
  category: "html5",
  type: { ru: "Казуальная головоломка", en: "Casual puzzle" },
  status: "released",
  statusLabel: { ru: "Опубликовано", en: "Released" },
  featured: true,
  accent: "green",
  cover: "assets/projects/quadropuzzle.webp",
  short: {
    ru: "Казуальная HTML5-головоломка, где игрок собирает яркие изображения из прямоугольных фрагментов на полях от 2×2 до 6×6.",
    en: "A casual HTML5 puzzle where players assemble colorful pictures from rectangular fragments on grids ranging from 2×2 to 6×6."
  },
  details: {
    ru: "Новые изображения и более сложные раскладки открываются по мере прохождения, а минимальное число перемещений приносит больше очков в таблице лидеров. Проект включает сезонные темы, внутриигровой магазин, рекламу, GamePush и SDK-интеграции для браузерных площадок.",
    en: "New pictures and more challenging layouts unlock through progression, while completing puzzles in fewer moves earns more leaderboard points. The project includes seasonal themes, an in-game store, advertising, GamePush and SDK integrations for browser platforms."
  },
  solutions: {
    ru: [
      "Сетки сложности от 2×2 до 6×6 и последовательное открытие изображений",
      "Перетаскивание фрагментов мышью и на сенсорных экранах",
      "Сезонные темы, внутриигровой магазин и таблица лидеров",
      "GamePush, реклама и SDK-интеграции для браузерных площадок"
    ],
    en: [
      "Difficulty grids from 2×2 to 6×6 with progressive picture unlocking",
      "Fragment dragging with mouse and touch-screen controls",
      "Seasonal themes, an in-game store and leaderboards",
      "GamePush, advertising and SDK integrations for browser platforms"
    ]
  },
  stack: ["Construct 3", "HTML5", "GamePush", "SDK Adapters", "In-Game Store", "Ads"],
  links: [
    {
      label: { ru: "Статья о создании игры", en: "Game development article" },
      url: "https://vk.ru/@-224400042-nikogda-ne-lubil-pazly-a-potom-sam-sdelal-igru-pro-nih"
    },
    {
      label: { ru: "Играть на Пикабу Игры", en: "Play on Pikabu Games" },
      url: "https://games.pikabu.ru/game/kvadropazl"
    },
    {
      label: { ru: "Играть на Woman.ru", en: "Play on Woman.ru" },
      url: "https://games.woman.ru/game/kvadropazl/"
    },
    {
      label: { ru: "Играть на Играмбе", en: "Play on Igramba" },
      url: "https://www.igramba.ru/kazualnye/kvadropazl/"
    }
  ]
},
  {
    "id": "neon-plus",
    "title": {
      "ru": "Неон Плюс",
      "en": "Neon Plus"
    },
    "category": "html5",
    "type": {
      "ru": "Неоновый аркадный шутер",
      "en": "Neon arcade shooter"
    },
    "status": "released",
    "statusLabel": {
      "ru": "Опубликовано",
      "en": "Released"
    },
    "featured": true,
    "accent": "cyan",
    "cover": "assets/projects/neon-plus.webp",
    "short": {
      "ru": "Неоновый HTML5-шутер в духе аркад 80-х: игрок управляет звездолётом с автоматической стрельбой, переключает цветовые режимы и проходит 20 уровней с боссами.",
      "en": "A neon HTML5 shooter inspired by 1980s arcades: players pilot an auto-firing spaceship, switch between color modes and clear 20 levels with bosses."
    },
    "details": {
      "ru": "Игра создана за три дня для GP Profit Jam #2 feat Pikabu. Игрок уклоняется от врагов, снарядов и препятствий, открывает корабли с разным оружием, собирает временные усиления и восстановление, а результаты сравнивает в таблице лидеров.",
      "en": "The game was created in three days for GP Profit Jam #2 feat Pikabu. Players dodge enemies, projectiles and obstacles, unlock ships with different weapons, collect temporary boosts and recovery items, and compare results on the leaderboard."
    },
    "solutions": {
      "ru": [
        "Простое перемещение звездолёта при автоматической стрельбе",
        "Три цветовых режима для опыта, рекордных очков и бонусов",
        "Прогрессия через 20 уровней, волны врагов, боссов и новые корабли",
        "Временные усиления, восстановление, увеличение урона и таблица лидеров"
      ],
      "en": [
        "Simple spaceship movement paired with automatic firing",
        "Three color modes for experience, high-score points and bonuses",
        "Progression across 20 levels, enemy waves, bosses and new ships",
        "Temporary boosts, recovery, increased damage and a leaderboard"
      ]
    },
    "stack": [
      "Construct 3",
      "HTML5",
      "Rapid Prototyping",
      "Arcade Balance",
      "Leaderboards"
    ],
    "links": [
      {
        "label": {
          "ru": "Играть на Пикабу Игры",
          "en": "Play on Pikabu Games"
        },
        "url": "https://games.pikabu.ru/game/neon-plyus"
      },
      {
        "label": {
          "ru": "Страница игры на itch.io",
          "en": "Game page on itch.io"
        },
        "url": "https://darlesgames.itch.io/neonplus"
      }
    ]
  },
  {
    "id": "winter-puzzle",
    "title": {
      "ru": "WinterPuzzle",
      "en": "WinterPuzzle"
    },
    "category": "html5",
    "type": {
      "ru": "Рождественская пазл-головоломка",
      "en": "Christmas image puzzle"
    },
    "status": "released",
    "statusLabel": {
      "ru": "Опубликовано",
      "en": "Released"
    },
    "featured": false,
    "accent": "blue",
    "cover": "assets/projects/winter-puzzle.webp",
    "short": {
      "ru": "Рождественская головоломка с семью открываемыми темами по три пазла: собранные изображения превращаются в игрушки для украшения ёлки.",
      "en": "A Christmas puzzle game with seven unlockable themes and three puzzles per theme: completed images become ornaments used to decorate a tree."
    },
    "details": {
      "ru": "Один из ранних проектов Darles Games на Construct 3. Через меню игрок выбирает доступную тему, собирает изображение из перемещаемых фрагментов и открывает более сложные пазлы; после решения созданную тематическую игрушку нужно повесить на ёлку. Поддерживаются мышь и сенсорное управление.",
      "en": "One of the early Darles Games projects made with Construct 3. Players use the menu to select an available theme, assemble an image from movable fragments and unlock harder puzzles; each completed image creates a themed ornament to hang on the tree. Mouse and touch controls are supported."
    },
    "solutions": {
      "ru": [
        "Семь последовательно открываемых тем по три пазла в каждой",
        "Рост сложности по мере прохождения и открытия новых изображений",
        "Превращение собранного изображения в тематическую ёлочную игрушку",
        "Единое управление фрагментами и украшениями с помощью мыши или касания"
      ],
      "en": [
        "Seven progressively unlocked themes with three puzzles in each",
        "Increasing difficulty as new images become available",
        "Completed images transformed into themed Christmas tree ornaments",
        "Unified fragment and ornament controls using mouse or touch"
      ]
    },
    "stack": [
      "Construct 3",
      "HTML5",
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Touch Controls"
    ],
    "links": [
      {
        "label": {
          "ru": "Играть на itch.io",
          "en": "Play on itch.io"
        },
        "url": "https://darlesgames.itch.io/winterpuzzle"
      }
    ]
  },
  {
    id: "skok-otskok",
    title: { ru: "Скок-Отскок", en: "Skok-Otskok" },
    category: "html5",
    type: { ru: "Гиперказуальная аркада", en: "Hypercasual arcade" },
    status: "released",
    statusLabel: { ru: "Опубликовано", en: "Released" },
    featured: false,
    accent: "orange",
    cover: "assets/projects/skok-otskok.webp",
    short: {
      ru: "Гиперказуальная HTML5-аркада на реакцию: игрок отбивает котошар треугольной платформой, собирает золото и сражается с мемными боссами.",
      en: "A reaction-based hypercasual HTML5 arcade game where players bounce a cat-ball with a triangular platform, collect gold and fight meme bosses."
    },
    details: {
      ru: "Игра создана как проверка подростковых трендов и использует образы Italian Brainrot — от Тралалеро Тралала до Чёрного Короля. В проекте реализованы таблицы лидеров, реклама, встроенные покупки, GamePush и SDK-адаптеры для разных браузерных площадок.",
      en: "Created as a test of teen trends, the game uses Italian Brainrot characters ranging from Tralalero Tralala to the Black King. It includes leaderboards, advertising, in-app purchases, GamePush and SDK adapters for different browser platforms."
    },
    solutions: {
      ru: [
        "Реактивная механика отскока котошара от треугольной платформы",
        "Трендовые боссы и сбор золота внутри короткого игрового цикла",
        "Таблицы лидеров, реклама и встроенные покупки",
        "SDK-адаптеры для публикации на разных браузерных площадках"
      ],
      en: [
        "A reaction mechanic built around bouncing a cat-ball from a triangular platform",
        "Trending bosses and gold collection within a short gameplay loop",
        "Leaderboards, advertising and in-app purchases",
        "SDK adapters for publishing across different browser platforms"
      ]
    },
    stack: ["Construct 3", "HTML5", "GamePush", "SDK Adapters", "Leaderboards", "In-App Purchases"],
    links: [
      {
        label: { ru: "Играть во ВКонтакте", en: "Play on VK" },
        url: "https://vk.ru/app54316028"
      },
      {
        label: { ru: "Играть на Играмбе", en: "Play on Igramba" },
        url: "https://www.igramba.ru/kazualnye/skok-otskok/"
      },
      {
        label: { ru: "Играть на АиФ Игры", en: "Play on AIF Games" },
        url: "https://games.aif.ru/kazualnye/skok-otskok/"
      },
      {
        label: { ru: "Играть на Пикабу Игры", en: "Play on Pikabu Games" },
        url: "https://games.pikabu.ru/game/skokotskok"
      },
      {
        label: { ru: "Играть на Woman.ru", en: "Play on Woman.ru" },
        url: "https://games.woman.ru/game/skok-otskok/"
      },
      {
        label: { ru: "Играть в Одноклассниках", en: "Play on Odnoklassniki" },
        url: "https://ok.ru/game/vk_app54316028"
      }
    ]
  },
  {
    id: "skylink",
    title: {
      ru: "СкайЛинк",
      en: "SkyLink"
    },
    category: "html5",
    type: {
      ru: "Кооперативный sci-fi платформер",
      en: "Co-op sci-fi platformer"
    },
    status: "released",
    statusLabel: {
      ru: "Опубликовано",
      en: "Released"
    },
    featured: false,
    accent: "space",
    cover: "assets/projects/skylink.webp",
    short: {
      ru: "Кооперативный sci-fi платформер о двух астронавтах: исследуйте инопланетный мир, используйте реактивный ранец и вместе преодолевайте ловушки.",
      en: "A co-op sci-fi platformer about two astronauts exploring an alien world, using a jetpack and coordinating to overcome deadly traps."
    },
    details: {
      ru: "Игра создана за несколько дней для геймджема Яндекс Игр на тему кооператива на одном экране. Проходить уровни можно в одиночку или вдвоем на общей клавиатуре: собирать кристаллы, искать портал, уничтожать врагов и выживать среди лазерных барьеров и энергетических бомб. Финальное испытание — бой с Баленрогом. Техническая основа проекта объединяет управление двумя персонажами, платформенную физику, механику реактивного ранца и браузерную публикацию.",
      en: "Built in just a few days for a Yandex Games jam themed around same-screen cooperation. Levels support solo play or two players on one keyboard, with objectives ranging from collecting crystals and reaching a portal to defeating enemies and surviving laser barriers and energy bombs. The final challenge is a battle with Balenrog. Its technical foundation combines dual-character input, platforming physics, jetpack traversal and browser publishing."
    },
    solutions: {
      ru: [
        "Одиночный режим и локальный кооператив для двух игроков на общей клавиатуре.",
        "Платформенное перемещение, реактивный ранец и взаимодействие с окружением.",
        "Разнообразные цели уровней: кристаллы, портал, уничтожение врагов и выживание.",
        "Система угроз с лазерными барьерами, летающими противниками, энергетическими бомбами и финальным боссом."
      ],
      en: [
        "Solo play and local two-player co-op on a shared keyboard.",
        "Platforming movement, jetpack traversal and environmental interaction.",
        "Varied level objectives covering crystals, portals, enemy encounters and survival.",
        "A hazard system built around laser barriers, flying enemies, energy bombs and a final boss."
      ]
    },
    stack: [
      "Construct 3",
      "HTML5",
      "Local Co-op",
      "Shared Keyboard Controls",
      "Physics Platforming",
      "Platform Publishing"
    ],
    links: [
      {
        label: {
          ru: "Играть на Яндекс Играх",
          en: "Play on Yandex Games"
        },
        url: "https://yandex.ru/games/app/477630?lang=ru"
      }
    ]
  },
  {
  id: "snitch-catchers",
  title: {
    ru: "Ловцы снитчей",
    en: "Snitch Catchers"
  },
  category: "html5",
  type: {
    ru: "Аркадный раннер",
    en: "Arcade runner"
  },
  status: "released",
  statusLabel: {
    ru: "Опубликовано",
    en: "Released"
  },
  featured: false,
  accent: "gold",
  cover: "assets/projects/snitch-catchers.webp",
  short: {
    ru: "Динамичный HTML5-раннер о ночной погоне: игрок пролетает через кольца, ускоряется, избегает препятствий и ловит ускользающие снитчи.",
    en: "A fast-paced HTML5 runner built around a night-time chase: players fly through rings, gain speed, dodge obstacles and catch escaping snitches."
  },
  details: {
    ru: "Точные попадания в кольца сокращают дистанцию до цели, а промахи позволяют ей уйти. После сближения начинается финальный этап удержания контакта. Новые персонажи, магазин, очки и лидерборды поддерживают повторные погони, а GamePush и SDK-интеграции обеспечивают платформенные сервисы и рекламную монетизацию.",
    en: "Accurate ring passes close the distance to the target, while misses allow it to escape. Catching up starts a final contact-hold phase. Unlockable characters, a store, scores and leaderboards support repeated chases, while GamePush and platform SDK integrations provide platform services and advertising monetization."
  },
  solutions: {
    ru: [
      "Кольца как система ускорения и управления дистанцией до цели",
      "Финальная фаза удержания контакта после успешной погони",
      "Управление мышью и касанием при нарастающей скорости",
      "Персонажи, магазин, лидерборды, реклама и SDK-интеграции"
    ],
    en: [
      "Rings used as a speed and target-distance system",
      "A final contact-hold phase after a successful chase",
      "Mouse and touch controls under steadily increasing speed",
      "Characters, a store, leaderboards, advertising and SDK integrations"
    ]
  },
  stack: [
    "Construct 3",
    "HTML5",
    "GamePush",
    "Platform SDKs",
    "In-Game Store",
    "Ads"
  ],
  links: [
    {
      label: {
        ru: "Играть на Пикабу Игры",
        en: "Play on Pikabu Games"
      },
      url: "https://games.pikabu.ru/game/lovtsyi-snitchey"
    },
    {
      label: {
        ru: "Играть на Играмбе",
        en: "Play on Igramba"
      },
      url: "https://www.igramba.ru/kazualnye/lovtsy-snitchej/"
    },
    {
      label: {
        ru: "Играть на Woman.ru",
        en: "Play on Woman.ru"
      },
      url: "https://games.woman.ru/game/lovtsy-snitchej/"
    }
  ]
},
  {
    id: "astro",
    title: { ru: "Astro", en: "Astro" },
    category: "html5",
    type: { ru: "Аркадный шутер", en: "Arcade shooter" },
    status: "development",
    statusLabel: { ru: "В разработке", en: "In development" },
    featured: true,
    accent: "space",
    cover: "",
    short: {
      ru: "Космический HTML5-шутер с бесконечной прогрессией, боссами, кораблями, валютой и платформенными сервисами.",
      en: "A space HTML5 shooter with endless progression, bosses, ships, currency and platform services."
    },
    details: {
      ru: "Аркадная игра, вдохновлённая Galaxian и Galaga. Система включает прочность корабля, девять типов боссов, разные виды оружия, выбор кораблей и адаптацию под игровые платформы.",
      en: "An arcade game inspired by Galaxian and Galaga. Its systems include ship durability, nine boss types, multiple weapons, ship selection and adaptation for gaming platforms."
    },
    solutions: {
      ru: [
        "Управляемая сложность первых уровней и рост динамики",
        "Корректная пауза до, во время и после рекламы",
        "Адаптивный интерфейс и тестирование разных устройств"
      ],
      en: [
        "Controlled early-level difficulty with increasing intensity",
        "Reliable pause behavior before, during and after advertising",
        "Adaptive interface and testing across different devices"
      ]
    },
    stack: ["HTML5", "CSS", "JavaScript", "Yandex SDK", "Ads", "Leaderboards"],
    links: []
  },
  {
    id: "yandex-template",
    title: { ru: "Шаблон HTML5-игры для платформ", en: "HTML5 Game Platform Template" },
    category: "case",
    type: { ru: "Техническое решение", en: "Technical solution" },
    status: "internal",
    statusLabel: { ru: "Внутреннее решение", en: "Internal solution" },
    featured: true,
    accent: "green",
    cover: "",
    short: {
      ru: "Переиспользуемая основа для портретных браузерных игр с SDK, рекламой, сохранениями и локальным fallback-режимом.",
      en: "A reusable foundation for portrait browser games with platform SDK, advertising, saves and a local fallback mode."
    },
    details: {
      ru: "Шаблон сокращает повторную техническую работу при выпуске новых игр. В него вынесены инициализация платформы, пауза, звук, реклама, облачные и локальные сохранения, лидерборды и адаптивный UI.",
      en: "The template reduces repeated technical work when releasing new games. It centralizes platform initialization, pause behavior, audio, advertising, cloud and local saves, leaderboards and adaptive UI."
    },
    solutions: {
      ru: [
        "Единый SDK-адаптер и работа без платформы",
        "Предсказуемые сценарии паузы и рекламы",
        "Повторное использование между новыми HTML5-проектами"
      ],
      en: [
        "A unified SDK adapter with an offline/local mode",
        "Predictable pause and advertising scenarios",
        "Reuse across new HTML5 projects"
      ]
    },
    stack: ["HTML5", "CSS", "JavaScript", "Vite", "SDK Adapter", "Git"],
    links: []
  },
  {
    id: "fantastic-drive",
    title: {
      ru: "Улетный драйв",
      en: "Fantastic Drive"
    },
    category: "html5",
    type: {
      ru: "Аркадная игра о вождении",
      en: "Arcade driving game"
    },
    status: "released",
    statusLabel: {
      ru: "Опубликовано",
      en: "Released"
    },
    featured: false,
    accent: "orange",
    cover: "assets/projects/fantastic-drive.webp",
    short: {
      ru: "Браузерная аркада о вождении: набирайте 1000 очков, собирайте монеты и уклоняйтесь от турелей и их снарядов на открытом игровом поле.",
      en: "A browser driving arcade game: score 1,000 points, collect coins and evade turrets and their projectiles across an open playfield."
    },
    details: {
      ru: "Одна из первых игр студии и ее первый релиз на Яндекс Играх — своеобразный артефакт раннего этапа Darles Games. Игрок управляет направлением и скоростью автомобиля, использует переход через границы поля как часть тактики и следит за траекториями ускоряющихся снарядов. Проект поддерживает управление мышью, виртуальным джойстиком и касаниями.",
      en: "One of the studio's earliest games and its first Yandex Games release, Fantastic Drive is an artifact of Darles Games' early development. Players control the car's direction and speed, use wrap-around field boundaries tactically and read the trajectories of increasingly demanding projectiles. The project supports mouse, virtual joystick and touch input."
    },
    solutions: {
      ru: [
        "Управление направлением и скоростью автомобиля с помощью мыши, виртуального джойстика или касаний.",
        "Переход через границы открытого поля без столкновения со стенами как полноценный тактический прием.",
        "Система турелей и снарядов с читаемыми траекториями и нарастающей сложностью.",
        "Подсчет очков через сбор монет с четкой целью в 1000 очков и перезапуском после столкновения."
      ],
      en: [
        "Direction and speed controls for mouse, virtual joystick and touch input.",
        "Wrap-around movement across an open field, turning boundary traversal into a tactical mechanic.",
        "Turret and projectile systems with readable trajectories and escalating difficulty.",
        "Coin-based scoring with a clear 1,000-point objective and collision-based restart loop."
      ]
    },
    stack: [
      "Construct 3",
      "HTML5",
      "Instant Games Bridge",
      "Local Storage",
      "Vehicle Controls",
      "Projectile Systems"
    ],
    links: [
      {
        label: {
          ru: "Играть на Construct Arcade",
          en: "Play on Construct Arcade"
        },
        url: "https://www.construct.net/en/free-online-games/fantastic-drive-49158/play"
      }
    ]
  },
  {
    id: "trick-or-treat",
    title: {
      ru: "Сладость или гадость",
      en: "Trick or Treat"
    },
    category: "html5",
    type: {
      ru: "Хэллоуинская казуальная аркада",
      en: "Halloween casual arcade"
    },
    status: "released",
    statusLabel: {
      ru: "Опубликовано",
      en: "Released"
    },
    featured: false,
    accent: "orange",
    cover: "assets/projects/trick-or-treat.webp",
    short: {
      ru: "Небольшая казуальная аркада, созданная специально к Хэллоуину: простая механика сочетается с мрачной атмосферой и короткими страшными историями.",
      en: "A compact casual arcade game made for Halloween, combining accessible mechanics, a gloomy atmosphere and memorable horror stories."
    },
    details: {
      ru: "Один из ранних проектов студии на Construct 3. Компактная браузерная реализация объединяет поведенческие системы перетаскивания, снарядов и визуального движения, локальное сохранение состояния, звуковую обратную связь и управление с клавиатуры, мыши или сенсорного экрана.",
      en: "One of the studio's earlier Construct 3 projects. Its compact browser implementation combines drag-and-drop, projectile and visual motion behaviors with local state persistence, audio feedback and keyboard, mouse or touch input."
    },
    solutions: {
      ru: [
        "Цельная хэллоуинская атмосфера в компактном и доступном аркадном формате.",
        "Единый слой ввода для клавиатуры, мыши и сенсорных устройств.",
        "Локальное сохранение состояния и интеграционный слой для публикации на игровых платформах.",
        "Звуковая и визуальная обратная связь на базе модульных поведений Construct 3."
      ],
      en: [
        "A cohesive Halloween atmosphere delivered through a compact and accessible arcade format.",
        "A unified input layer for keyboard, mouse and touch devices.",
        "Local state persistence and an integration layer for browser game platforms.",
        "Audio and visual feedback assembled from modular Construct 3 behaviors."
      ]
    },
    stack: [
      "Construct 3",
      "HTML5",
      "Instant Games Bridge",
      "Local Storage",
      "Touch Controls",
      "Audio"
    ],
    links: [
      {
        label: {
          ru: "Играть на Construct Arcade",
          en: "Play on Construct Arcade"
        },
        url: "https://www.construct.net/en/free-online-games/trick-or-treat-62637/play"
      }
    ]
  },
  {
    id: "tavern-below-2-0",
    title: {
      ru: "Таверна: Этажом ниже 2.0",
      en: "Tavern: The Floor Below 2.0"
    },
    category: "html5",
    type: {
      ru: "Нарративная алхимическая игра",
      en: "Narrative alchemy game"
    },
    status: "development",
    statusLabel: {
      ru: "В разработке",
      en: "In development"
    },
    featured: false,
    accent: "gold",
    cover: "assets/projects/tavern-below-2-0.webp",
    short: {
      ru: "Почти полностью пересобранная версия «Таверны»: варите зелья, экспериментируйте с рецептами, распоряжайтесь кармой и меняйте ход истории своими решениями.",
      en: "A substantially rebuilt version of Tavern: brew potions, experiment with recipes, manage karma and shape the story through your decisions."
    },
    details: {
      ru: "Версия 2.0 создаётся в одиночку для игроков, которых заинтересовал сюжет первой части; архитектура проекта почти полностью разработана заново. Алхимик искупает грехи, выполняя заказы посетителей мистической таверны: рецепты требуют точной последовательности ингредиентов, а собственные комбинации можно сохранять в книгу. Карма служит валютой, магазин суккуба пополняет запасы, а заколдованных компаньонов можно освобождать за накопленный ресурс. Планируются веб- и настольная версии, более 100 рецептов, множество ингредиентов, персонажей и вариативные финалы. Срок релиза пока не определён.",
      en: "Version 2.0 is being developed solo for players drawn to the first game's story, with its architecture rebuilt almost entirely from scratch. The alchemist atones by fulfilling orders in a mystical tavern: recipes depend on exact ingredient order, while original combinations can be saved to the recipe book. Karma acts as currency, the succubus-run shop replenishes supplies, and enchanted companions can be freed by sacrificing accumulated karma. Web and desktop builds, over 100 recipes, a broad cast and multiple endings are planned. The release date remains undetermined."
    },
    solutions: {
      ru: [
        "Пересобранная архитектура для развития проекта одновременно в веб- и настольном форматах.",
        "Система более чем из 100 рецептов с контролем последовательности ингредиентов и созданием собственных комбинаций.",
        "Экономика кармы, объединяющая оплату заказов, покупки ингредиентов и освобождение компаньонов.",
        "Диалоговый сюжет с множеством персонажей, решениями игрока и вариативными финалами."
      ],
      en: [
        "A rebuilt architecture intended to support both web and desktop versions.",
        "A system of over 100 recipes with ordered ingredients and player-authored combinations.",
        "A karma economy connecting customer payments, ingredient purchases and companion liberation.",
        "Dialogue-driven storytelling with a broad cast, player decisions and branching endings."
      ]
    },
    stack: [
      "HTML5",
      "Desktop Build",
      "Recipe System",
      "Branching Narrative",
      "Custom Recipe System",
      "Progression System"
    ],
    links: []
  },
  {
    id: "robo-cat-miners",
    title: {
      ru: "Робокоты-шахтёры",
      en: "Robo-Cat Miners"
    },
    category: "html5",
    type: {
      ru: "Аркадная игра с бурением",
      en: "Arcade drilling game"
    },
    status: "development",
    statusLabel: {
      ru: "В разработке",
      en: "In development"
    },
    featured: false,
    accent: "cyan",
    cover: "assets/projects/robo-cat-miners.webp",
    short: {
      ru: "Однокнопочная браузерная аркада: рассчитайте траекторию самодвижущегося робокота, пробурите путь через подземелье и обойдите острые сталагмиты.",
      en: "A one-touch browser arcade game: plan the trajectory of a self-propelled robo-cat, drill through each dungeon and avoid sharp stalagmites."
    },
    details: {
      ru: "Игра была выпущена на Яндекс Играх, но после обнаружения ошибок снята с публикации. Полученный опыт используется для будущей переработки проекта. Игровой цикл построен вокруг 15 подземелий: персонаж катится автоматически, а игрок одним касанием прокладывает безопасную траекторию в разрушаемом ландшафте, получает награды за уровни, собирает робокотов и соревнуется в таблице лидеров.",
      en: "The game was released on Yandex Games and later removed after issues were identified. Lessons from that release now inform a planned rework. Its loop spans 15 dungeons: the character rolls automatically while the player uses one-touch drilling to shape a safe route through terrain, earn level rewards, collect robo-cats and compete on a leaderboard."
    },
    solutions: {
      ru: [
        "Управление одним касанием, при котором персонаж движется автоматически, а игрок отвечает за траекторию.",
        "Бурение изменяемого ландшафта с необходимостью заранее учитывать препятствия и сталагмиты.",
        "Последовательность из 15 подземелий с наградами за прохождение.",
        "Коллекция робокотов и таблица лидеров для долгосрочной прогрессии."
      ],
      en: [
        "One-touch control where movement is automatic and the player determines the route.",
        "Terrain drilling that requires anticipating obstacles and stalagmites.",
        "A 15-dungeon progression sequence with completion rewards.",
        "Collectible robo-cats and a leaderboard supporting long-term progression."
      ]
    },
    stack: [
      "HTML5",
      "Touch Controls",
      "Terrain Drilling",
      "Level Progression",
      "Collectible Characters",
      "Leaderboards"
    ],
    links: []
  },
  {
    id: "find-a-pair-mage-spells",
    title: {
      ru: "Найди пару: Заклинания Мага",
      en: "Find a Pair: Mage's Spells"
    },
    category: "html5",
    type: {
      ru: "Головоломка · tower defense",
      en: "Matching puzzle · tower defense"
    },
    status: "development",
    statusLabel: {
      ru: "В разработке",
      en: "In development"
    },
    featured: false,
    accent: "blue",
    cover: "assets/projects/find-a-pair-mage-spells.webp",
    short: {
      ru: "Экспериментальная веб-игра, объединяющая знакомый поиск одинаковых пар с развитием защиты в формате tower defense.",
      en: "An experimental web game combining familiar pair matching with defensive progression inspired by tower defense."
    },
    details: {
      ru: "Проект исследует, как механика памяти и поиска совпадений может работать внутри стратегического цикла защиты. Найденные пары магических заклинаний связывают головоломку с развитием обороны, поэтому результат каждого выбора влияет не только на игровое поле, но и на способность противостоять наступающей угрозе. Концепция находится в активной экспериментальной разработке.",
      en: "The project explores how memory-based matching can operate inside a strategic defense loop. Matched spell pairs connect the puzzle layer to defensive development, so each choice affects both the matching field and the player's ability to withstand an approaching threat. The concept remains in active experimental development."
    },
    solutions: {
      ru: [
        "Классическая механика поиска пар используется как основной источник игровых действий.",
        "Магические совпадения связаны с развитием и работой оборонительных элементов.",
        "Головоломка и tower defense объединены в единый экспериментальный игровой цикл."
      ],
      en: [
        "Classic pair matching serves as the primary source of player actions.",
        "Magical matches are connected to the development and operation of defensive elements.",
        "Puzzle and tower-defense systems are combined into one experimental gameplay loop."
      ]
    },
    stack: [
      "HTML5",
      "Matching System",
      "Tower Defense Systems"
    ],
    links: []
  },
  {
    id: "magotetris",
    title: {
      ru: "МагоТетрис",
      en: "MagoTetris"
    },
    category: "html5",
    type: {
      ru: "Магическая головоломка с блоками",
      en: "Magic falling-block puzzle"
    },
    status: "development",
    statusLabel: {
      ru: "В разработке",
      en: "In development"
    },
    featured: false,
    accent: "magic",
    cover: "assets/projects/magotetris.webp",
    short: {
      ru: "Экспериментальная веб-головоломка со знакомой механикой падающих блоков, дополненной заклинаниями, активными умениями и пассивной прокачкой.",
      en: "An experimental web puzzle built on familiar falling-block mechanics and extended with spells, active abilities and passive progression."
    },
    details: {
      ru: "Проект переосмысливает классическую формулу тетриса через систему магического развития. Базовая сборка линий остаётся понятным фундаментом, а заклинания, улучшаемые активные способности и пассивные навыки добавляют новые способы влиять на игровое поле. Сейчас игра находится на стадии эксперимента с балансом между чистой головоломкой и долгосрочной прокачкой.",
      en: "The project reinterprets the classic falling-block formula through magical progression. Line clearing remains the accessible foundation, while spells, upgradeable active abilities and passive skills introduce new ways to affect the playfield. Development currently focuses on balancing the pure puzzle loop with long-term character growth."
    },
    solutions: {
      ru: [
        "Знакомая система падающих блоков и очистки линий как основа игрового цикла.",
        "Заклинания и активные умения, позволяющие напрямую изменять ситуацию на поле.",
        "Пассивные навыки и прокачка, формирующие долгосрочное развитие между игровыми сессиями."
      ],
      en: [
        "A familiar falling-block and line-clearing system as the foundation of the gameplay loop.",
        "Spells and active abilities that directly alter the state of the playfield.",
        "Passive skills and upgrades that create long-term progression between play sessions."
      ]
    },
    stack: [
      "HTML5",
      "Falling Block System",
      "Spell System",
      "Skill Progression"
    ],
    links: []
  }
];
