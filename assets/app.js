/* ThunderStone 应用市场 - 客厅精选 */

const marketApps = [
  { id: 'thunderktv', name: '雷石 K 歌', icon: 'mic', color: '#285CF6', brand: 'image', image: 'assets/leishi-kge-appicon.png', category: '音乐', status: '已安装', version: '5.8.2', installed: true, update: false, rating: '4.9', size: '186 MB', desc: '家庭欢唱、双麦评分、MV 背景和包厢模式。', hot: true, verified: true, editorNote: '客厅 K 歌体验标杆，双麦评分让全家都能参与。' },
  { id: 'songbook', name: '懿美曲谱', icon: 'music', color: '#D85B38', brand: 'image', image: 'assets/app-icons/songbook.svg', category: '音乐', status: '可更新', version: '2.32', installed: true, update: true, rating: '4.8', size: '92 MB', desc: '大字曲谱、和弦滚动、练唱节拍。', verified: true, editorNote: '大屏曲谱清晰可读，适合边弹边唱。' },
  { id: 'qqmusic', name: 'QQ音乐TV版', icon: 'headphones', color: '#20C66A', brand: 'image', image: 'assets/app-icons/qq-music.jpg', category: '音乐', status: '热门', version: '12.1', installed: false, update: false, rating: '4.7', size: '128 MB', desc: '海量歌单、车载音效、家庭歌房推荐。', hot: true, verified: true },
  { id: 'dance', name: '热舞型动', icon: 'flame', color: '#E84452', brand: 'image', image: 'assets/app-icons/hot-dance.jpg', category: '健身', status: '推荐', version: '3.6', installed: false, update: false, rating: '4.6', size: '156 MB', desc: '客厅跟跳、燃脂课程、K歌派对热身。', isNew: true, verified: true, editorNote: '聚会暖场神器，跟跳模式适合全年龄。' },
  { id: 'tangdou', name: '糖豆广场舞', icon: 'star', color: '#F0A51D', brand: 'image', image: 'assets/app-icons/tangdou.jpg', category: '娱乐', status: '榜单', version: '8.4', installed: false, update: false, rating: '4.5', size: '144 MB', desc: '热门广场舞、分步教学、亲友投屏。', hot: true, verified: true },
  { id: 'yangshipin', name: '央视频TV版', icon: 'tv', color: '#D8242F', brand: 'image', image: 'assets/app-icons/yangshipin.jpg', category: '影音', status: '精选', version: '6.2', installed: true, update: false, rating: '4.6', size: '98 MB', desc: '演唱会、综艺、体育直播和新闻频道。', verified: true },
  { id: 'yingniuniu', name: '影牛牛', icon: 'play', color: '#1A5BFF', brand: 'image', image: 'assets/app-icons/yingniuniu.png', category: '影音', status: '影院', version: '230321', installed: false, update: false, rating: '4.4', size: '18 MB', desc: '3D 影片、家庭影院片库、即点即播。', hot: true, verified: true, editorNote: '适合家庭影院和大屏观影场景，内容定位清晰。' },
  { id: 'wukong', name: '悟空识字', icon: 'book-open', color: '#16A35B', brand: 'image', image: 'assets/app-icons/wukong-literacy.jpg', category: '儿童', status: '亲子', version: '4.1', installed: false, update: false, rating: '4.8', size: '112 MB', desc: '儿童识字、互动故事、亲子陪伴。', isNew: true, verified: true, editorNote: '互动识字游戏，适合 3-8 岁亲子共学。' },
  { id: 'clean', name: '一键清理TV版', icon: 'trash-2', color: '#4F6478', brand: 'image', image: 'assets/app-icons/tv-cleaner.svg', category: '工具', status: '已安装', version: '1.9', installed: true, update: true, rating: '4.3', size: '38 MB', desc: '清理缓存、释放空间、下载前自动检测。', verified: true },
  { id: 'kugou', name: '酷狗音乐TV版', icon: 'headphones', color: '#2B8BED', category: '音乐', status: '热门', version: '6.5', installed: false, update: false, rating: '4.6', size: '108 MB', desc: '蝰蛇音效、歌词投屏、智能推荐歌单。', hot: true, verified: true },
  { id: 'bilibili', name: '哔哩哔哩TV版', icon: 'play', color: '#FB7299', category: '影音', status: '热门', version: '1.8', installed: false, update: false, rating: '4.7', size: '142 MB', desc: '番剧、纪录片、UP主创作和弹幕互动。', hot: true, verified: true, editorNote: '年轻人的客厅娱乐首选。' },
  { id: 'youku', name: '优酷TV版', icon: 'play', color: '#1EBEA5', category: '影音', status: '精选', version: '10.2', installed: false, update: false, rating: '4.4', size: '136 MB', desc: '独播剧集、综艺、4K 超清和杜比音效。', verified: true },
  { id: 'keep', name: 'Keep TV版', icon: 'flame', color: '#35C759', category: '健身', status: '推荐', version: '2.4', installed: false, update: false, rating: '4.7', size: '98 MB', desc: '瑜伽、HIIT、拉伸课程，大屏跟练。', isNew: true, verified: true, editorNote: '居家健身最佳搭档，课程丰富。' },
  { id: 'ximalaya', name: '喜马拉雅TV版', icon: 'headphones', color: '#F5623A', brand: 'image', image: 'assets/app-icons/ximalaya.svg', category: '娱乐', status: '精选', version: '5.3', installed: false, update: false, rating: '4.5', size: '76 MB', desc: '有声书、播客、助眠白噪音和儿童故事。', verified: true },
  { id: 'babybus', name: '宝宝巴士', icon: 'heart', color: '#FF6B9D', brand: 'image', image: 'assets/app-icons/babybus.jpg', category: '儿童', status: '亲子', version: '7.8', installed: false, update: false, rating: '4.9', size: '168 MB', desc: '启蒙动画、益智游戏、儿歌和安全教育。', hot: true, verified: true, editorNote: '0-6 岁启蒙内容最全面的儿童应用。' },
  { id: 'xiquduoduo', name: '戏曲多多', icon: 'music', color: '#E23C54', brand: 'image', image: 'assets/app-icons/xiqu-duoduo.jpg', category: '戏曲', status: '精选', version: '3.9', installed: false, update: false, rating: '4.7', size: '86 MB', desc: '豫剧、京剧、黄梅戏、相声评书一站收听。', hot: true, verified: true, editorNote: '给长辈和戏曲爱好者的客厅戏台。' },
  { id: 'liyuan', name: '梨园行戏曲', icon: 'music', color: '#B83A2B', brand: 'image', image: 'assets/app-icons/liyuan-opera.jpg', category: '戏曲', status: '经典', version: '2.6', installed: false, update: false, rating: '4.6', size: '64 MB', desc: '经典地方戏曲、名家唱段、听戏看戏曲库。', verified: true },
  { id: 'screencast', name: '乐播投屏', icon: 'zap', color: '#6366F1', category: '工具', status: '实用', version: '9.1', installed: false, update: false, rating: '4.4', size: '42 MB', desc: '手机投屏、镜像显示、会议演示。', verified: true },
  { id: 'weather', name: '天气预报TV版', icon: 'moon', color: '#0EA5E9', category: '工具', status: '实用', version: '3.2', installed: true, update: false, rating: '4.2', size: '24 MB', desc: '7日天气、空气质量、穿衣建议。', verified: true }
];

const categories = ['推荐', '音乐', '影音', '娱乐', '儿童', '戏曲', '健身', '工具'];

// 场景分组
const scenes = [
  { name: '家庭聚会', icon: 'zap', apps: ['thunderktv', 'dance', 'qqmusic', 'xiquduoduo'] },
  { name: '亲子时光', icon: 'heart', apps: ['wukong', 'babybus', 'yangshipin'] },
  { name: '独处放松', icon: 'moon', apps: ['ximalaya', 'bilibili', 'yingniuniu'] }
];

/* ======== 画布缩放 ======== */
function setupStageScale() {
  const root = document.documentElement;
  const appEl = document.getElementById('app');
  const designW = 1280, designH = 720, maxScale = 1.12;
  function apply() {
    const vp = window.visualViewport;
    const w = Math.round(vp?.width || window.innerWidth);
    const h = Math.round(vp?.height || window.innerHeight);
    const s = Math.min(maxScale, Math.min(w / designW, h / designH));
    root.style.setProperty('--stage-scale', Math.max(0.1, s).toFixed(4));
    if (appEl && !appEl.style.opacity) appEl.style.opacity = '1';
  }
  apply();
  if (!window.__stageScaleBound) {
    window.__stageScaleBound = true;
    window.addEventListener('resize', apply, { passive: true });
    window.visualViewport?.addEventListener('resize', apply, { passive: true });
  }
}

/* ======== SVG 图标 ======== */
function iconSvg(name, size) {
  const s = size ? `width="${size}" height="${size}"` : '';
  const p = {
    home: '<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
    grid: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
    down: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>',
    back: '<path d="m15 18-6-6 6-6"/>',
    star: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
    flame: '<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.07-2.14-1.07-3.5.5-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.15.3-2.34.83-3.36C5.5 12.5 7 13 8.5 14.5Z"/>',
    trending: '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>',
    sparkle: '<path d="M12 3l1.5 5.5L19 10l-5.5 1.5L12 17l-1.5-5.5L5 10l5.5-1.5L12 3z"/>',
    crown: '<path d="M2 20h20l-2-12-5 5-3-7-3 7-5-5z"/><path d="M2 20h20v2H2z"/>',
    zap: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
    heart: '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>',
    moon: '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>',
    check: '<polyline points="20 6 9 17 4 12"/>',
    shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
    refresh: '<polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>',
    play: '<polygon points="5 3 19 12 5 21 5 3"/>',
    'trash-2': '<polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/>',
    mic: '<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/>',
    headphones: '<path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>',
    tv: '<rect x="2" y="7" width="20" height="15" rx="2" ry="2"/><polyline points="17 2 12 7 7 2"/>',
    music: '<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',
    'book-open': '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>'
  };
  return `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" ${s}>${p[name] || p.grid}</svg>`;
}

/* ======== 品牌图标 ======== */
function appBrandIcon(app, size) {
  const inScreens = location.pathname.includes('/screens/');
  const base = inScreens ? '../' : '';
  const cls = size ? `app-icon app-icon--${size}` : 'app-icon';
  if (app.brand === 'image') {
    const src = /^https?:/.test(app.image) ? app.image : `${base}${app.image}`;
    return `<div class="${cls}"><img src="${src}" alt="${app.name}"></div>`;
  }
  return `<div class="${cls}" style="background:${app.color}"><svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${iconSvg(app.icon).replace(/<svg[^>]*>|<\/svg>/g, '')}</svg></div>`;
}

/* ======== 导航 Chrome ======== */
function renderChrome(active) {
  const inScreens = location.pathname.includes('/screens/');
  const base = inScreens ? '../' : '';
  const path = location.pathname;
  const isHome = !inScreens && (path.endsWith('/') || path.endsWith('/index.html'));
  const isCatalog = path.includes('/catalog.html');
  const isManage = path.includes('/manage.html');
  const isUsers = path.includes('/users.html');

  const catTabs = categories.map((cat, idx) => {
    const isRecommend = cat === '推荐';
    const href = isRecommend
      ? `${base}index.html`
      : `${isCatalog ? '' : base + 'screens/catalog.html'}?cat=${cat}`;
    return `<a href="${href}" class="cat-tab${active === cat ? ' active' : ''}" data-cat-tab="${cat}" data-od-id="cat-tab-${idx}">${cat}</a>`;
  }).join('');

  return `
    <header class="topnav" data-od-id="topnav">
      <a class="brand-mark" href="${base}index.html" data-od-id="brand-mark">
        <img src="${base}assets/thunderstone-logo.png" alt="ThunderStone" class="brand-logo" data-od-id="brand-logo">
      </a>
      <nav class="cat-tabs" aria-label="分类导航" data-od-id="cat-tabs">${catTabs}</nav>
      <div class="top-actions" data-od-id="top-actions">
        <button class="btn-search" data-open-search data-od-id="search-btn">${iconSvg('search')}<span>搜索应用</span></button>
      </div>
    </header>
    <nav class="bottom-dock" aria-label="底部导航" data-od-id="bottom-dock">
      <a class="dock-btn${isHome || isCatalog ? ' active' : ''}" href="${base}index.html" data-od-id="dock-home">${iconSvg('home')}<span>推荐</span></a>
      <a class="dock-btn${isManage ? ' active' : ''}" href="${base}screens/manage.html" data-od-id="dock-manage">${iconSvg('down')}<span>管理</span></a>
      <a class="dock-btn${isUsers ? ' active' : ''}" href="${base}screens/users.html" data-od-id="dock-users">${iconSvg('user')}<span>我的</span></a>
    </nav>`;
}

/* ======== Banner 轮播（今日推荐） ======== */
function renderEditorPick() {
  const target = document.querySelector('[data-editor-pick]');
  if (!target) return;
  const inScreens = location.pathname.includes('/screens/');
  const base = inScreens ? '../' : '';
  const bannerApps = marketApps.filter(a => a.editorNote).slice(0, 4);

  const slides = bannerApps.map((app, i) => `
    <a class="banner-slide${i === 0 ? ' active' : ''}" data-slide="${i}" href="${base}screens/detail.html?id=${app.id}" aria-label="查看 ${app.name} 详情" data-od-id="banner-slide-${i}">
      <div class="banner-media" data-od-id="banner-media-${i}">
        <div class="banner-orb" data-od-id="banner-orb-${i}"></div>
        <div class="banner-icon" data-od-id="banner-icon-${i}">
          <img src="${base}${app.brand === 'image' ? app.image : ''}" alt="${app.name}" data-od-id="banner-img-${i}">
        </div>
      </div>
      <div class="banner-info" data-od-id="banner-info-${i}">
        <span class="banner-kicker" data-od-id="banner-kicker-${i}">今日推荐</span>
        <h2 class="banner-title" data-od-id="banner-title-${i}">${app.name}</h2>
        <p class="banner-note" data-od-id="banner-note-${i}">${app.editorNote}</p>
        <div class="banner-meta" data-od-id="banner-meta-${i}">
          <span class="banner-rating" data-od-id="banner-rating-${i}">★ ${app.rating}</span>
          <span data-od-id="banner-size-${i}">${app.size}</span>
          <span data-od-id="banner-category-${i}">${app.category}</span>
        </div>
      </div>
      <div class="banner-action" data-od-id="banner-action-${i}">
        <span class="btn btn-primary" data-od-id="banner-btn-${i}">查看详情</span>
      </div>
    </a>`).join('');

  const dots = bannerApps.map((_, i) =>
    `<button class="banner-dot${i === 0 ? ' active' : ''}" data-dot="${i}" data-od-id="banner-dot-${i}"></button>`
  ).join('');

  target.innerHTML = `
    <div class="banner-carousel" data-od-id="banner-carousel">
      <div class="banner-track" data-od-id="banner-track">${slides}</div>
      <div class="banner-dots" data-od-id="banner-dots">${dots}</div>
    </div>`;

  // 轮播逻辑
  let current = 0;
  const total = bannerApps.length;
  const track = target.querySelector('.banner-track');
  const allDots = target.querySelectorAll('.banner-dot');
  const allSlides = target.querySelectorAll('.banner-slide');

  function goTo(idx) {
    current = (idx + total) % total;
    allSlides.forEach((s, i) => s.classList.toggle('active', i === current));
    allDots.forEach((d, i) => d.classList.toggle('active', i === current));
  }

  allDots.forEach(d => d.addEventListener('click', () => goTo(+d.dataset.dot)));

  let timer = setInterval(() => goTo(current + 1), 5000);
  target.addEventListener('pointerenter', () => clearInterval(timer));
  target.addEventListener('pointerleave', () => { timer = setInterval(() => goTo(current + 1), 5000); });
}

/* ======== 精选应用横向滚动 ======== */
function renderCurated() {
  const target = document.querySelector('[data-curated]');
  if (!target) return;
  const inScreens = location.pathname.includes('/screens/');
  const base = inScreens ? '../' : '';
  // 排除已在推荐位出现的应用
  const bannerIds = marketApps.filter(a => a.editorNote).slice(0, 4).map(a => a.id);
  const picks = marketApps.filter(a => a.verified && !bannerIds.includes(a.id)).slice(0, 6);
  target.innerHTML = picks.map((app, i) => `
    <a class="curated-card" href="${base}screens/detail.html?id=${app.id}" data-od-id="curated-card-${i}">
      ${appBrandIcon(app, 'lg')}
      <div class="curated-info" data-od-id="curated-info-${i}">
        <strong data-od-id="curated-name-${i}">${app.name}</strong>
      </div>
    </a>`).join('');
}

/* ======== 场景推荐 ======== */
function renderScenes() {
  const target = document.querySelector('[data-scenes]');
  if (!target) return;
  const inScreens = location.pathname.includes('/screens/');
  const base = inScreens ? '../' : '';
  target.innerHTML = scenes.map((scene, si) => {
    const apps = scene.apps.map(id => marketApps.find(a => a.id === id)).filter(Boolean);
    const appCards = apps.map((app, ai) => `
      <a class="scene-app" href="${base}screens/detail.html?id=${app.id}" data-od-id="scene-app-${si}-${ai}">
        ${appBrandIcon(app, 'sm')}
        <span data-od-id="scene-app-name-${si}-${ai}">${app.name}</span>
      </a>`).join('');
    return `
      <div class="scene-block" data-od-id="scene-block-${si}">
        <div class="scene-header" data-od-id="scene-header-${si}">
          ${iconSvg(scene.icon)}
          <h3 data-od-id="scene-title-${si}">${scene.name}</h3>
        </div>
        <div class="scene-apps" data-od-id="scene-apps-${si}">${appCards}</div>
      </div>`;
  }).join('');
}

/* ======== 排行榜 ======== */
function renderCharts() {
  const target = document.querySelector('[data-charts]');
  if (!target) return;
  const inScreens = location.pathname.includes('/screens/');
  const base = inScreens ? '../' : '';
  const hotApps = marketApps.filter(a => a.hot).slice(0, 3);
  const newApps = marketApps.filter(a => a.isNew).slice(0, 3);

  function chartColumn(title, icon, apps, colId) {
    const rows = apps.map((app, i) => `
      <a class="chart-row" href="${base}screens/detail.html?id=${app.id}" data-od-id="chart-row-${colId}-${i}">
        <span class="chart-rank" data-od-id="chart-rank-${colId}-${i}">${i + 1}</span>
        ${appBrandIcon(app, 'sm')}
        <div class="chart-info" data-od-id="chart-info-${colId}-${i}">
          <strong data-od-id="chart-name-${colId}-${i}">${app.name}</strong>
          <span data-od-id="chart-meta-${colId}-${i}">${app.category} · ★ ${app.rating}</span>
        </div>
      </a>`).join('');
    return `<div class="chart-col" data-od-id="chart-col-${colId}"><div class="chart-header" data-od-id="chart-header-${colId}">${iconSvg(icon)}<h3 data-od-id="chart-title-${colId}">${title}</h3></div>${rows}</div>`;
  }

  target.innerHTML = chartColumn('热门榜', 'flame', hotApps, 'hot') + chartColumn('新品榜', 'sparkle', newApps, 'new');
}

/* ======== 应用卡片（分类页用） ======== */
function appCard(app) {
  const inScreens = location.pathname.includes('/screens/');
  const base = inScreens ? '' : 'screens/';
  let actionLabel, btnClass, actionIcon;
  if (app.installed && app.update) {
    actionLabel = '更新'; btnClass = 'btn-update'; actionIcon = 'refresh';
  } else if (app.installed) {
    actionLabel = '打开'; btnClass = 'btn-open'; actionIcon = 'play';
  } else {
    actionLabel = '安装'; btnClass = 'btn-install'; actionIcon = 'down';
  }
  const uninstallBtn = app.installed ? `<button class="btn btn-uninstall" data-uninstall="${app.id}" data-od-id="app-uninstall-${app.id}">${iconSvg('trash-2')} 卸载</button>` : '';
  return `
    <article class="app-card" data-app-id="${app.id}" data-name="${app.name.toLowerCase()} ${app.desc.toLowerCase()}" data-category="${app.category}" data-installed="${app.installed}" data-update="${app.update}" data-od-id="app-card-${app.id}">
      <a class="app-card-left" href="${base}detail.html?id=${app.id}" data-od-id="app-card-left-${app.id}">
        ${appBrandIcon(app)}
        <div class="app-copy" data-od-id="app-copy-${app.id}">
          <h3 data-od-id="app-name-${app.id}">${app.name}</h3>
          <p class="app-desc" data-od-id="app-desc-${app.id}">${app.desc}</p>
          <div class="app-meta" data-od-id="app-meta-${app.id}">
            <span data-od-id="app-rating-${app.id}">★ ${app.rating}</span>
            <span data-od-id="app-size-${app.id}">${app.size}</span>
          </div>
        </div>
      </a>
      <div class="app-card-right" data-od-id="app-card-right-${app.id}">
        <button class="btn ${btnClass}" data-toast="${app.name} ${actionLabel === '安装' ? '开始下载' : actionLabel === '更新' ? '开始更新' : '已打开'}" data-od-id="app-action-${app.id}">${iconSvg(actionIcon)} ${actionLabel}</button>
        ${uninstallBtn}
      </div>
    </article>`;
}

/* ======== 分类页逻辑 ======== */
const PAGE_SIZE = 6;

function renderChips() {
  const target = document.querySelector('[data-category-chips]');
  if (!target) return;
  const urlCat = new URLSearchParams(location.search).get('cat') || '推荐';
  target.innerHTML = categories.map((cat, i) =>
    `<button class="${cat === urlCat ? 'active' : ''}" data-chip-category="${cat}" data-od-id="chip-${i}">${cat}</button>`
  ).join('');
}

function wireFilters() {
  const chips = [...document.querySelectorAll('[data-chip-category]')];
  const segments = [...document.querySelectorAll('[data-segment]')];
  const appList = document.querySelector('[data-app-list]');
  const empty = document.querySelector('[data-empty]');
  const titleEl = document.querySelector('[data-catalog-title]');
  if (!appList) return;

  const urlCat = new URLSearchParams(location.search).get('cat') || '推荐';
  let category = urlCat;
  let segment = 'all';
  let currentPage = 1;

  document.querySelectorAll('[data-cat-tab]').forEach(tab => {
    tab.classList.toggle('active', tab.dataset.catTab === category);
  });

  function getFiltered() {
    return marketApps.filter(app => {
      const matchCat = category === '推荐' || app.category === category;
      const matchSeg = segment === 'all' || (segment === 'installed' && app.installed) || (segment === 'update' && app.update);
      return matchCat && matchSeg;
    });
  }

  function apply() {
    const filtered = getFiltered();
    const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
    if (currentPage > totalPages) currentPage = Math.max(1, totalPages);
    const start = (currentPage - 1) * PAGE_SIZE;
    const pageApps = filtered.slice(start, start + PAGE_SIZE);
    appList.innerHTML = pageApps.map(app => appCard(app)).join('');
    if (empty) empty.classList.toggle('show', filtered.length === 0);
    if (titleEl) titleEl.textContent = category === '推荐' ? '全部应用' : category;
    renderPagination(currentPage, filtered.length);
  }

  function renderPagination(page, total) {
    const pager = document.querySelector('[data-pager]');
    if (!pager) return;
    const totalPages = Math.ceil(total / PAGE_SIZE);
    if (totalPages <= 1) { pager.innerHTML = ''; return; }
    pager.innerHTML = `
      <button class="pager-btn" data-page-prev ${page <= 1 ? 'disabled' : ''} data-od-id="pager-prev">${iconSvg('back')} 上一页</button>
      <span class="pager-info" data-od-id="pager-info">${page} / ${totalPages}</span>
      <button class="pager-btn" data-page-next ${page >= totalPages ? 'disabled' : ''} data-od-id="pager-next">下一页</button>`;
    pager.querySelector('[data-page-prev]')?.addEventListener('click', () => { if (currentPage > 1) { currentPage--; apply(); } });
    pager.querySelector('[data-page-next]')?.addEventListener('click', () => { const f = getFiltered(); if (currentPage < Math.ceil(f.length / PAGE_SIZE)) { currentPage++; apply(); } });
  }

  chips.forEach(chip => chip.addEventListener('click', () => {
    chips.forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    category = chip.dataset.chipCategory;
    currentPage = 1;
    document.querySelectorAll('[data-cat-tab]').forEach(tab => tab.classList.toggle('active', tab.dataset.catTab === category));
    apply();
  }));

  segments.forEach(btn => btn.addEventListener('click', () => {
    segments.forEach(x => x.classList.remove('active'));
    btn.classList.add('active');
    segment = btn.dataset.segment;
    currentPage = 1;
    apply();
  }));

  apply();
}

function wireCatTabs() {
  const inScreens = location.pathname.includes('/screens/');
  const base = inScreens ? '../' : '';
  document.querySelectorAll('[data-cat-tab]').forEach(tab => {
    tab.addEventListener('click', e => {
      const cat = tab.dataset.catTab;
      if (cat === '推荐') {
        e.preventDefault();
        location.href = `${base}index.html`;
        return;
      }
      if (!location.pathname.includes('/catalog.html')) return;
      e.preventDefault();
      history.replaceState(null, '', `?cat=${cat}`);
      const chip = document.querySelector(`[data-chip-category="${cat}"]`);
      if (chip) chip.click();
    });
  });
}

/* ======== 管理页：已安装列表 ======== */
function renderManageList() {
  const target = document.querySelector('[data-update-list]');
  if (!target) return;
  const installed = marketApps.filter(a => a.installed);
  target.innerHTML = installed.map(app => appCard(app)).join('');
}

/* ======== Toast ======== */
function wireToast() {
  let toast = document.querySelector('[data-toast-box]');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    toast.setAttribute('data-toast-box', '');
    (document.querySelector('#app') || document.body).appendChild(toast);
  }
  document.addEventListener('click', e => {
    const trigger = e.target.closest('[data-toast]');
    if (!trigger) return;
    toast.textContent = trigger.dataset.toast;
    toast.classList.add('show');
    clearTimeout(window.__toastTimer);
    window.__toastTimer = setTimeout(() => toast.classList.remove('show'), 1700);
  });
}

/* ======== 卸载确认弹窗 ======== */
function wireUninstall() {
  const app = document.querySelector('#app') || document.body;
  // 创建弹窗容器
  let overlay = document.querySelector('.uninstall-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.className = 'uninstall-overlay';
    app.appendChild(overlay);
  }

  document.addEventListener('click', e => {
    const btn = e.target.closest('[data-uninstall]');
    if (!btn) return;
    e.stopPropagation();
    const appId = btn.dataset.uninstall;
    const appData = marketApps.find(a => a.id === appId);
    if (!appData) return;

    const inScreens = location.pathname.includes('/screens/');
    const base = inScreens ? '../' : '';
    const imgSrc = appData.brand === 'image' ? (/^https?:/.test(appData.image) ? appData.image : `${base}${appData.image}`) : '';

    overlay.innerHTML = `
      <div class="uninstall-dialog" data-od-id="uninstall-dialog">
        <div class="dialog-icon" data-od-id="dialog-icon">${imgSrc ? `<img src="${imgSrc}" alt="${appData.name}" data-od-id="dialog-icon-img">` : `<div style="width:100%;height:100%;background:${appData.color};border-radius:12px" data-od-id="dialog-icon-placeholder"></div>`}</div>
        <h3 data-od-id="dialog-title">卸载「${appData.name}」？</h3>
        <p data-od-id="dialog-desc">卸载后应用数据将被清除，确认继续？</p>
        <div class="dialog-actions" data-od-id="dialog-actions">
          <button class="btn btn-open" data-dismiss-uninstall data-od-id="dialog-cancel">取消</button>
          <button class="btn btn-uninstall" data-confirm-uninstall="${appId}" data-od-id="dialog-confirm">确认卸载</button>
        </div>
      </div>`;
    overlay.classList.add('show');
  });

  // 关闭弹窗
  document.addEventListener('click', e => {
    if (e.target.closest('[data-dismiss-uninstall]') || (e.target === overlay && overlay.classList.contains('show'))) {
      overlay.classList.remove('show');
    }
    if (e.target.closest('[data-confirm-uninstall]')) {
      const id = e.target.closest('[data-confirm-uninstall]').dataset.confirmUninstall;
      const appData = marketApps.find(a => a.id === id);
      overlay.classList.remove('show');
      // 模拟卸载
      if (appData) {
        appData.installed = false;
        appData.update = false;
        // 刷新列表
        const chips = document.querySelector('[data-chip-category]');
        if (chips) chips.click();
        renderManageList();
        // toast 提示
        const toast = document.querySelector('[data-toast-box]');
        if (toast) {
          toast.textContent = `${appData.name} 已卸载`;
          toast.classList.add('show');
          clearTimeout(window.__toastTimer);
          window.__toastTimer = setTimeout(() => toast.classList.remove('show'), 1700);
        }
      }
    }
  });
}

/* ======== 详情页 Tab 切换 ======== */
function wireDetailTabs() {
  const tabs = document.querySelectorAll('[data-tab-target]');
  if (!tabs.length) return;
  tabs.forEach(btn => btn.addEventListener('click', () => {
    const target = btn.dataset.tabTarget;
    tabs.forEach(t => t.classList.remove('active'));
    btn.classList.add('active');
    document.querySelectorAll('[data-tab-panel]').forEach(p => {
      p.hidden = p.dataset.tabPanel !== target;
    });
  }));
}

/* ======== 搜索覆盖层 ======== */
function wireSearch() {
  const app = document.querySelector('#app') || document.body;
  let overlay = document.querySelector('.search-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.className = 'search-overlay';
    overlay.innerHTML = `
      <div class="search-panel" data-od-id="search-panel">
        <div class="search-header" data-od-id="search-header">
          <div class="search-input-wrap" data-od-id="search-input-wrap">
            ${iconSvg('search')}
            <input type="text" class="search-input" placeholder="搜索应用名称或功能…" autofocus data-od-id="search-input">
            <button class="search-close" data-close-search data-od-id="search-close">取消</button>
          </div>
        </div>
        <div class="search-body" data-od-id="search-body">
          <div class="search-hint" data-od-id="search-hint">输入关键词搜索应用</div>
          <div class="search-results" data-search-results data-od-id="search-results"></div>
        </div>
      </div>`;
    app.appendChild(overlay);
  }

  const input = overlay.querySelector('.search-input');
  const results = overlay.querySelector('[data-search-results]');
  const hint = overlay.querySelector('.search-hint');
  const inScreens = location.pathname.includes('/screens/');
  const base = inScreens ? '../' : '';

  function doSearch(q) {
    const query = q.trim().toLowerCase();
    if (!query) { results.innerHTML = ''; hint.style.display = ''; return; }
    hint.style.display = 'none';
    const matched = marketApps.filter(a =>
      a.name.toLowerCase().includes(query) ||
      a.desc.toLowerCase().includes(query) ||
      a.category.toLowerCase().includes(query)
    );
    if (!matched.length) {
      results.innerHTML = '<div class="search-empty">没有找到相关应用</div>';
      return;
    }
    results.innerHTML = matched.map((app, i) => `
      <a class="search-result-item" href="${base}screens/detail.html?id=${app.id}" data-od-id="search-result-${i}">
        ${appBrandIcon(app, 'sm')}
        <div class="search-result-info" data-od-id="search-result-info-${i}">
          <strong data-od-id="search-result-name-${i}">${app.name}</strong>
          <span data-od-id="search-result-meta-${i}">${app.category} · ${app.desc.slice(0, 20)}…</span>
        </div>
      </a>`).join('');
  }

  input.addEventListener('input', () => doSearch(input.value));

  // 打开搜索
  document.addEventListener('click', e => {
    if (e.target.closest('[data-open-search]')) {
      overlay.classList.add('show');
      setTimeout(() => input.focus(), 100);
    }
  });

  // 关闭搜索
  overlay.addEventListener('click', e => {
    if (e.target.closest('[data-close-search]') || e.target === overlay) {
      overlay.classList.remove('show');
      input.value = '';
      results.innerHTML = '';
      hint.style.display = '';
    }
  });

  // ESC 关闭
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && overlay.classList.contains('show')) {
      overlay.classList.remove('show');
      input.value = '';
      results.innerHTML = '';
      hint.style.display = '';
    }
  });
}

/* ======== 初始化 ======== */
function initPage(active) {
  setupStageScale();
  const shell = document.querySelector('[data-shell]');
  if (shell) shell.insertAdjacentHTML('afterbegin', renderChrome(active));

  // 首页模块
  renderEditorPick();
  renderCurated();
  renderScenes();
  renderCharts();

  // 分类页模块
  renderChips();
  wireFilters();
  wireCatTabs();

  // 管理页
  renderManageList();

  // 详情页
  wireDetailTabs();

  wireToast();
  wireUninstall();
  wireSearch();
}
