/* global HTMLRewriter */

// i18n Dictionary
const i18n = {
  ko: {
    subtitle: "화투 로그라이크 덱빌딩",
    tagline: "<span class='highlight'>타짜들의 로그라이크</span>, 화투의 완전한 재해석",
    btn_demo: "무료 데모",
    btn_guide: "게임 가이드",
    btn_howto: "처음이신가요?",
    stove_coming_soon: "준비 중",
    feat_title_1: "숨막히는 배팅",
    feat_desc_1: "Go or Stop? 한순간의 선택이 승패를 가름!",
    feat_title_2: "무한의 덱빌딩",
    feat_desc_2: "꼼수, 조커, 시너지로 나만의 타짜 덱을 완성",
    feat_title_3: "압도적인 보스전",
    feat_desc_3: "매 판마다 예측할 수 없는 쫄깃한 난관",
    feat_title_4: "100여 개의 꼼수 스킬",
    feat_desc_4: "무한한 조합으로 판을 완전히 지배하라!",
    release_text: "스팀 정식 출시 · 지금 플레이하세요",
    guide_title: "블로샤퍼 게임 가이드",
    tab_guide: "게임 가이드",
    tab_howto: "처음이신가요?",
    privacy_link: "개인정보처리방침",
    support_link: "지원"
  },
  en: {
    subtitle: "Hwatu Roguelike Deckbuilding",
    tagline: "<span class='highlight'>Tazza's Roguelike</span>, Complete Reinterpretation of Hwatu",
    btn_demo: "Free Demo",
    btn_guide: "Game Guide",
    btn_howto: "How to Play",
    stove_coming_soon: "Coming soon",
    feat_title_1: "Breathtaking Betting",
    feat_desc_1: "Go or Stop? A split-second choice decides your fate!",
    feat_title_2: "Infinite Deckbuilding",
    feat_desc_2: "Complete your own 'Tazza' deck with Tricks, Jokers, and Synergies.",
    feat_title_3: "Overwhelming Boss Fights",
    feat_desc_3: "Unpredictable and thrilling challenges in every round.",
    feat_title_4: "100+ Trick Skills",
    feat_desc_4: "Completely dominate the board with infinite combinations!",
    release_text: "Out now on Steam",
    guide_title: "Blosharper Game Guide",
    tab_guide: "Game Guide",
    tab_howto: "How to Play",
    privacy_link: "Privacy Policy",
    support_link: "Support"
  },
  ja: {
    subtitle: "花札ローグライクデッキ構築",
    tagline: "<span class='highlight'>いかさま師のローグライク</span>、花札の完全な再解釈",
    btn_demo: "無料体験版",
    btn_guide: "ゲームガイド",
    btn_howto: "はじめての方へ",
    stove_coming_soon: "準備中",
    feat_title_1: "息詰まるベッティング",
    feat_desc_1: "Go or Stop? 一瞬の選択が勝敗を分ける！",
    feat_title_2: "無限のデッキ構築",
    feat_desc_2: "イカサマ、ジョーカー、シナジーで自分だけのデッキを完成。",
    feat_title_3: "圧倒的なボス戦",
    feat_desc_3: "毎ラウンド待ち受ける、予測不能でスリリングな難関。",
    feat_title_4: "100種類以上のイカサマスキル",
    feat_desc_4: "無限の組み合わせで盤面を完全に支配せよ！",
    release_text: "Steamにて正式リリース · 配信中",
    guide_title: "Blosharper ゲームガイド",
    tab_guide: "ゲームガイド",
    tab_howto: "はじめての方へ",
    privacy_link: "プライバシーポリシー",
    support_link: "サポート"
  },
  "zh-CN": {
    subtitle: "花牌肉鸽卡牌构筑",
    tagline: "<span class='highlight'>老千的肉鸽</span>，花牌的彻底重构",
    btn_demo: "免费试玩",
    btn_guide: "游戏指南",
    btn_howto: "新手入门",
    stove_coming_soon: "敬请期待",
    feat_title_1: "窒息的押注",
    feat_desc_1: "Go or Stop? 瞬间的抉择决定胜负！",
    feat_title_2: "无限的卡牌构筑",
    feat_desc_2: "利用出千、小丑牌与协同效应，完成属于你的老千卡组。",
    feat_title_3: "压倒性的Boss战",
    feat_desc_3: "每一局都面临不可预测的惊险难关。",
    feat_title_4: "超过100种出千技能",
    feat_desc_4: "用无限的组合彻底掌控战局！",
    release_text: "现已在 Steam 正式发售",
    guide_title: "Blosharper 游戏指南",
    tab_guide: "游戏指南",
    tab_howto: "新手入门",
    privacy_link: "隐私政策",
    support_link: "支持"
  },
  "zh-TW": {
    subtitle: "花牌Roguelike卡牌構築",
    tagline: "<span class='highlight'>老千的Roguelike</span>，花牌的徹底重構",
    btn_demo: "免費試玩",
    btn_guide: "遊戲指南",
    btn_howto: "新手入門",
    stove_coming_soon: "敬請期待",
    feat_title_1: "令人窒息的押注",
    feat_desc_1: "Go or Stop? 瞬間的抉擇決定勝敗！",
    feat_title_2: "無限的卡牌構築",
    feat_desc_2: "利用出千、小丑牌與協同效應，完成專屬你的老千牌組。",
    feat_title_3: "壓倒性的Boss戰",
    feat_desc_3: "每一局都面臨不可預測的驚險難關。",
    feat_title_4: "超過100種出千技能",
    feat_desc_4: "用無限的組合徹底掌控戰局！",
    release_text: "現已在 Steam 正式發售",
    guide_title: "Blosharper 遊戲指南",
    tab_guide: "遊戲指南",
    tab_howto: "新手入門",
    privacy_link: "隱私權政策",
    support_link: "支援"
  },
  de: {
    subtitle: "Hwatu Roguelike Deckbuilder",
    tagline: "<span class='highlight'>Roguelike für Falschspieler</span>, die komplette Neuinterpretation von Hwatu",
    btn_demo: "Gratis-Demo",
    btn_guide: "Spielanleitung",
    btn_howto: "Erste Schritte",
    stove_coming_soon: "Demnächst",
    feat_title_1: "Atemberaubende Wetteinsätze",
    feat_desc_1: "Go oder Stop? Wirst du den Einsatz erhöhen oder aussteigen? Wenn du Angst hast, pass!",
    feat_title_2: "Trügerischer Deckbau",
    feat_desc_2: "Lege über 100 bizarre und mächtige Cheat-Fähigkeiten über Hwatu-Kombinationen, um deinen ultimativen Betrugs-Build zu erschaffen.",
    feat_title_3: "Hohe Risiken",
    feat_desc_3: "Wirst du beim Schummeln erwischt, ist die Strafe hart! Wandle auf einem schmalen Grat und riskiere deine HP und Chips.",
    feat_title_4: "Schwarzmarkt & Inflation",
    feat_desc_4: "Die Preise schießen in die Höhe, und deine Schulden wachsen durch Zinseszinsen. Überlebe die ständige Bedrohung durch den Bankrott!",
    feat_title_5: "Die vier Attribute eines Falschspielers",
    feat_desc_5: "Glück, Bluff, Nerven und Verstand. Verbessere diese Talente, um deine Erfolgsquote beim Schummeln zu erhöhen und den Tisch zu dominieren!",
    feat_title_6: "Tödliche Bosskämpfe",
    feat_desc_6: "Alle 4 Runden werden skrupellose Bosse, bewaffnet mit fiesen Gimmicks, deine Grenzen testen.",
    feat_title_7: "Sammlungen & versteckte Erfolge",
    feat_desc_7: "Schalte diverse Hwatu-Kartendesigns frei und entdecke versteckte Erfolge für endlosen Wiederspielwert!",
    feat_title_8: "Unendliche Strategien, riesige Combos",
    feat_desc_8: "Ein Punktesystem, bei dem sich Kartenkombinationen und Cheat-Fähigkeiten exponentiell vervielfachen. Das Blatt, das du durchsetzt, ist die richtige Antwort.",
    release_text: "Jetzt auf Steam erhältlich",
    guide_title: "Blosharper Spielanleitung",
    tab_guide: "Spielanleitung",
    tab_howto: "Erste Schritte",
    privacy_link: "Datenschutzerklärung",
    support_link: "Support"
  },
  ru: {
    subtitle: "Рогалик-колодострой Хвату",
    tagline: "<span class='highlight'>Рогалик для шулеров</span>, полное переосмысление Хвату",
    btn_demo: "Бесплатное демо",
    btn_guide: "Руководство",
    btn_howto: "Как играть",
    stove_coming_soon: "Скоро",
    feat_title_1: "Захватывающие ставки",
    feat_desc_1: "Go или Stop? Повысите ли вы ставки или уйдете? Если боитесь, пасуйте!",
    feat_title_2: "Коварное составление колоды",
    feat_desc_2: "Наслаивайте более 100 причудливых и мощных шулерских навыков поверх комбинаций Хвату, чтобы создать свой идеальный мошеннический билд.",
    feat_title_3: "Высокие риски",
    feat_desc_3: "Если вас поймают на мошенничестве, наказание будет суровым! Идите по краю пропасти, рискуя своими HP и фишками.",
    feat_title_4: "Черный рынок и инфляция",
    feat_desc_4: "Цены взлетают до небес, а ваш долг растет с учетом сложных процентов. Выживите под постоянной угрозой банкротства!",
    feat_title_5: "Четыре характеристики шулера",
    feat_desc_5: "Удача, Блеф, Смелость и Смекалка. Прокачивайте эти таланты, чтобы повысить вероятность успешного жульничества и доминировать за столом!",
    feat_title_6: "Смертоносные битвы с боссами",
    feat_desc_6: "Каждые 4 раунда безжалостные боссы, вооруженные коварными уловками, будут проверять вас на прочность.",
    feat_title_7: "Коллекции и скрытые достижения",
    feat_desc_7: "Открывайте разнообразные темы карт Хвату и находите скрытые достижения для бесконечной реиграбельности!",
    feat_title_8: "Бесконечные стратегии, массивные комбо",
    feat_desc_8: "Система подсчета очков, в которой карточные комбинации и шулерские навыки многократно умножают друг друга. Разыгранная вами комбинация — и есть правильный ответ.",
    release_text: "Уже доступно в Steam",
    guide_title: "Руководство по игре Blosharper",
    tab_guide: "Руководство",
    tab_howto: "Как играть",
    privacy_link: "Политика конфиденциальности",
    support_link: "Поддержка"
  }
};

class HtmlLangHandler {
  constructor(lang) {
    this.lang = lang;
  }

  element(element) {
    element.setAttribute('lang', this.lang);
  }
}

class I18nHandler {
  constructor(lang) {
    this.lang = lang;
    this.dictionary = i18n[this.lang] || i18n['en']; // fallback config
  }

  element(element) {
    const key = element.getAttribute('data-i18n');
    if (key && this.dictionary[key]) {
      element.setInnerContent(this.dictionary[key], { html: true });
    }
  }
}

class SelectHandler {
  constructor(lang) {
    this.lang = lang;
  }

  element(element) {
    const value = element.getAttribute('value');
    if (value === this.lang) {
      element.setAttribute('selected', 'selected');
    } else {
      element.removeAttribute('selected');
    }
  }
}

function detectLanguage(request) {
  const url = new URL(request.url);
  
  // 1. URL search param (?lang=)
  const queryLang = url.searchParams.get('lang');
  if (queryLang && i18n[queryLang]) return queryLang;

  // 2. Cookie
  const cookieStr = request.headers.get('Cookie');
  if (cookieStr) {
    const match = cookieStr.match(/(?:^|;)\s*lang=([^;]*)/);
    if (match && i18n[match[1]]) return match[1];
  }

  // 3. Accept-Language Header
  const acceptLang = request.headers.get('Accept-Language') || '';
  const langs = acceptLang.split(',').map(s => s.split(';')[0].trim().toLowerCase());
  
  for (const l of langs) {
    if (l.startsWith('en')) return 'en';
    if (l.startsWith('ko')) return 'ko';
    if (l.startsWith('ja')) return 'ja';
    if (l.startsWith('zh-hant') || l.startsWith('zh-tw') || l.startsWith('zh-hk')) return 'zh-TW';
    if (l.startsWith('zh')) return 'zh-CN';
    if (l.startsWith('de')) return 'de';
    if (l.startsWith('ru')) return 'ru';
  }

  // default
  return 'en';
}

export async function onRequest(context) {
  const { request, next } = context;
  const url = new URL(request.url);

  // 진행할 대상인지 파악 (오직 html 요청만 인터셉트)
  let isHtml = false;
  if (url.pathname === '/' || url.pathname.endsWith('.html')) {
    isHtml = true;
  }

  // 정적 리소스(JS, CSS, PNG 등)는 그대로 통과
  const response = await next();

  if (isHtml || response.headers.get('Content-Type')?.includes('text/html')) {
    const lang = detectLanguage(request);

    // HTMLRewriter로 스트림 변조
    return new HTMLRewriter()
      .on('html', new HtmlLangHandler(lang))
      .on('[data-i18n]', new I18nHandler(lang))
      .on('#lang-select option', new SelectHandler(lang))
      .transform(response);
  }

  return response;
}
