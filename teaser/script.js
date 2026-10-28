/* global i18n */

// ── Store Links ──
// 스토브 상품 페이지가 열리면 이 한 줄만 채운다 — 마크가 링크로 승격되고 「준비 중」 배지가 사라진다.
// 빈 문자열인 동안은 링크 없는 마크 + 배지 (비활성 버튼을 세워두지 않는다).
// ✅ 2026-09-12 채움 — 본편 상품 페이지(105719) 오픈.
const STOVE_STORE_URL = 'https://store.onstove.com/ko/games/105719'

function applyStoveStoreLink() {
  const mark = document.getElementById('stoveMark')
  if (!mark) return

  if (!STOVE_STORE_URL) return

  mark.href = STOVE_STORE_URL
  mark.target = '_blank'
  mark.rel = 'noopener'

  const badge = document.getElementById('stoveBadge')
  if (badge) badge.remove()
}

// ── i18n (Internationalization) loaded from locales.js ──

function setLanguage(lang) {
  if (!i18n[lang]) lang = 'en'; // fallback
  localStorage.setItem('lang', lang);
  document.cookie = `lang=${lang}; path=/; max-age=31536000; SameSite=Lax`;
  document.documentElement.lang = lang;
  
  const select = document.getElementById('lang-select');
  if (select) select.value = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18n[lang][key]) {
      el.innerHTML = i18n[lang][key];
    }
  });

  const iframe = document.getElementById('guideIframe');
  if (iframe && iframe.contentWindow) {
    iframe.contentWindow.postMessage({ type: 'SET_LANG', lang }, '*');
  }
}

function initLanguage() {
  let lang = localStorage.getItem('lang');
  if (!lang) {
    const navLang = navigator.language;
    if (navLang.startsWith('ko')) lang = 'ko';
    else if (navLang.startsWith('ja')) lang = 'ja';
    else if (navLang.startsWith('zh-Hant') || navLang.startsWith('zh-TW') || navLang.startsWith('zh-HK')) lang = 'zh-TW';
    else if (navLang.startsWith('zh')) lang = 'zh-CN';
    else if (navLang.startsWith('de')) lang = 'de';
    else if (navLang.startsWith('ru')) lang = 'ru';
    else lang = 'en';
  }
  setLanguage(lang);

  const select = document.getElementById('lang-select');
  if (select) {
    select.addEventListener('change', (e) => setLanguage(e.target.value));
  }
}

// ── Sprite Sheet Config ──
// 티저 전용 아틀라스. 게임의 전체 시트가 아니라 여기 그리는 광 5장만 담겨 있다.
// 생성: scripts/build-teaser-cards.ts (build:teaser 가 배포 전에 굽는다)
const SPRITE = {
  width: 580, height: 180,
  cols: 5, rows: 1,
  cardWidth: 116, cardHeight: 180,
  get gapX() { return 0 },
  get gapY() { return 0 }
}

// spriteId = 아틀라스 안의 위치. 굽는 순서가 월 순서(1·3·8·11·12)라 아래 순서와 같다.
const GWANG_CARDS = [
  { spriteId: 0, name: '송학광' },
  { spriteId: 1, name: '벚꽃광' },
  { spriteId: 2, name: '공산광' },
  { spriteId: 3, name: '오동광' },
  { spriteId: 4, name: '비광'   }
]

const CACHE_VER = 'c31fd854e'
const CARDS_IMAGE = `public/assets/cards/gwang_fan.webp?v=${CACHE_VER}`

function getSpritePosition(spriteId) {
  const col = spriteId % SPRITE.cols
  const row = Math.floor(spriteId / SPRITE.cols)
  const x = -(col * (SPRITE.cardWidth + SPRITE.gapX))
  const y = -(row * (SPRITE.cardHeight + SPRITE.gapY))
  return `${x}px ${y}px`
}

// ── Build Gwang Card Fan ──
function createCardFan() {
  const container = document.getElementById('card-fan')
  const rotations = [-30, -15, 0, 15, 30]
  const zLayers   = [1, 2, 3, 2, 1]

  GWANG_CARDS.forEach((card, i) => {
    const wrapper = document.createElement('div')
    wrapper.className = 'gwang-card'
    wrapper.title = card.name

    const rot = rotations[i]
    wrapper.style.setProperty('--rot', `${rot}deg`)
    wrapper.style.transform = `translateX(-50%) rotate(${rot}deg)`
    wrapper.style.zIndex = zLayers[i]

    const img = document.createElement('img')
    img.src = CARDS_IMAGE
    img.alt = card.name
    img.draggable = false
    img.style.width = `${SPRITE.cardWidth}px`
    img.style.height = `${SPRITE.cardHeight}px`
    img.style.objectFit = 'none'
    img.style.objectPosition = getSpritePosition(card.spriteId)

    wrapper.appendChild(img)
    container.appendChild(wrapper)
  })
}

// ── Gold Dust Particles ──
function createParticles() {
  const container = document.getElementById('particles-container')
  const count = window.innerWidth > 768 ? 25 : 12

  for (let i = 0; i < count; i++) {
    const p = document.createElement('div')
    p.className = 'particle'

    const size = 1.5 + Math.random() * 3
    p.style.width = `${size}px`
    p.style.height = `${size}px`
    p.style.left = `${Math.random() * 100}%`
    p.style.bottom = '-5px'
    p.style.setProperty('--dur', `${8 + Math.random() * 12}s`)
    p.style.setProperty('--delay', `-${Math.random() * 10}s`)
    p.style.setProperty('--drift', `${(Math.random() - 0.5) * 60}px`)

    if (Math.random() > 0.7) {
      p.style.background = '#fff'
      p.style.boxShadow = '0 0 4px #fff'
    } else {
      p.style.boxShadow = `0 0 ${3 + size}px rgba(255,215,0,0.4)`
    }

    container.appendChild(p)
  }
}

// ── Mouse Parallax with Smooth Effects ──
let targetX = 0
let targetY = 0
let currentX = 0
let currentY = 0

document.addEventListener('mousemove', (e) => {
  targetX = (e.clientX / window.innerWidth - 0.5) * 2 // -1 to +1
  targetY = (e.clientY / window.innerHeight - 0.5) * 2
})

function animateParallax() {
  // Smooth follow (easing)
  currentX += (targetX - currentX) * 0.08
  currentY += (targetY - currentY) * 0.08

  // Export to CSS
  document.documentElement.style.setProperty('--mouseX', currentX.toFixed(4))
  document.documentElement.style.setProperty('--mouseY', currentY.toFixed(4))

  // Move felt opposite to light to emphasize depth
  const felt = document.querySelector('.table-felt')
  if (felt) felt.style.transform = `translate3d(${currentX * -5}px, ${currentY * -4}px, 0)`

  window.requestAnimationFrame(animateParallax)
}
window.requestAnimationFrame(animateParallax)

// ── Init ──
document.addEventListener('DOMContentLoaded', () => {
  initLanguage()
  applyStoveStoreLink()
  createCardFan()
  createParticles()

  const iframe = document.getElementById('guideIframe');
  if (iframe) {
    iframe.addEventListener('load', () => {
      iframeReady = true;
      const lang = localStorage.getItem('lang') || 'ko';
      iframe.contentWindow.postMessage({ type: 'SET_LANG', lang }, '*');
      
      if (pendingGuide) {
        iframe.contentWindow.postMessage({ type: 'LOAD_GUIDE', docName: pendingGuide }, '*');
        pendingGuide = null;
      }
    });
  }

  handleHashChange()
})

window.addEventListener('resize', () => {
  const pc = document.getElementById('particles-container')
  if (pc) { pc.innerHTML = ''; createParticles() }
})

// ── Guide Iframe Logic ──
let iframeReady = false
let pendingGuide = null
// 지금 iframe이 물고 있는 문서. iframe 안에서 .md 링크를 눌러 바뀔 수도 있으므로
// 그쪽 알림(GUIDE_LOADED)으로도 갱신된다.
let currentGuideDoc = null

// 해시(#/guide/<슬러그>)가 열 수 있는 문서는 여기 적힌 것뿐이다 —
// 해시 문자열을 그대로 경로로 넘기지 않는다.
const GUIDE_DOCS = {
  'game-guide': 'GAME_GUIDE.md',
  'how-to-play': 'HOW_TO_PLAY.md'
}
const DEFAULT_GUIDE_DOC = 'GAME_GUIDE.md'

function guideDocForSlug(slug) {
  return Object.prototype.hasOwnProperty.call(GUIDE_DOCS, slug) ? GUIDE_DOCS[slug] : null
}

function guideSlugForDoc(docName) {
  return Object.keys(GUIDE_DOCS).find(slug => GUIDE_DOCS[slug] === docName) || null
}

// '#/guide' · '#guide' · '#/guide/how-to-play' → 문서 이름. 가이드 경로가 아니면 null.
function guideDocForHash(hash) {
  const match = /^#\/?guide(?:\/([a-z0-9-]*))?$/.exec(hash)
  if (!match) return null
  return guideDocForSlug(match[1] || '') || DEFAULT_GUIDE_DOC
}

function guideFrameWindow() {
  const iframe = document.getElementById('guideIframe')
  return iframe && iframe.contentWindow ? iframe.contentWindow : null
}

function setActiveGuideTab(docName) {
  document.querySelectorAll('.guide-tab').forEach(tab => {
    const active = tab.dataset.doc === docName
    tab.classList.toggle('is-active', active)
    tab.setAttribute('aria-pressed', active ? 'true' : 'false')
  })
}

function showGuideDoc(docName) {
  setActiveGuideTab(docName)
  if (currentGuideDoc === docName) return // 이미 떠 있는 문서는 다시 긁지 않는다

  currentGuideDoc = docName
  const frame = guideFrameWindow()
  if (iframeReady && frame) {
    frame.postMessage({ type: 'LOAD_GUIDE', docName }, '*')
  } else {
    pendingGuide = docName
  }
}

window.addEventListener('message', (e) => {
  if (e.data.type === 'IFRAME_READY') {
    iframeReady = true;
    const lang = localStorage.getItem('lang') || 'ko';
    document.getElementById('guideIframe').contentWindow.postMessage({ type: 'SET_LANG', lang }, '*');
    
    if (pendingGuide) {
      document.getElementById('guideIframe').contentWindow.postMessage({ type: 'LOAD_GUIDE', docName: pendingGuide }, '*');
      pendingGuide = null;
    }
  } else if (e.data.type === 'GUIDE_LOADED') {
    // iframe 안의 .md 링크로 문서가 바뀌었을 수 있다 — 탭과 주소를 그쪽에 맞춘다.
    currentGuideDoc = e.data.docName;
    setActiveGuideTab(e.data.docName);

    const slug = guideSlugForDoc(e.data.docName);
    const overlay = document.getElementById('guideOverlay');
    const overlayOpen = overlay && !overlay.classList.contains('hidden');
    if (slug && overlayOpen && window.location.hash !== `#/guide/${slug}`) {
      // replaceState는 hashchange를 내지 않으므로 다시 로드되지 않는다.
      window.history.replaceState(null, '', `#/guide/${slug}`);
    }
  } else if (e.data.type === 'OPEN_LINK') {
    window.open(e.data.url, '_blank');
  }
});

function handleHashChange() {
  const docName = guideDocForHash(window.location.hash)
  const overlay = document.getElementById('guideOverlay')

  if (docName) {
    overlay.classList.remove('hidden')
    showGuideDoc(docName)
  } else {
    overlay.classList.add('hidden')
  }
}

window.addEventListener('hashchange', handleHashChange)

// 오버레이 헤더의 문서 탭. 해시를 정본으로 두되, 해시가 이미 그 값이면
// hashchange가 안 뜨므로(예: iframe 안에서 다른 .md로 새어 나간 뒤) 직접 부른다.
document.querySelectorAll('.guide-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    const docName = tab.dataset.doc
    const slug = guideSlugForDoc(docName)
    if (!slug) return

    const nextHash = `#/guide/${slug}`
    if (window.location.hash === nextHash) {
      showGuideDoc(docName)
    } else {
      window.location.hash = nextHash
    }
  })
})

document.getElementById('guideClose').addEventListener('click', () => {
  window.location.hash = ''
})

document.getElementById('guideOverlay').addEventListener('click', (e) => {
  if (e.target.id === 'guideOverlay') window.location.hash = ''
})
