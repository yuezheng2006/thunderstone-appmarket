/* ThunderStone 应用市场 - 客厅精选 */

const marketApps = [
  { id: 'thunderktv', name: '雷石 K 歌', icon: 'mic', color: '#285CF6', brand: 'image', image: 'assets/leishi-kge-appicon.png', category: '音乐', status: '已安装', version: '5.8.2', installed: true, update: false, rating: '4.9', size: '186 MB', desc: '家庭欢唱、双麦评分、MV 背景和包厢模式。', hot: true, verified: true, editorNote: '客厅 K 歌体验标杆，双麦评分让全家都能参与。' },
  { id: 'songbook', name: '懿美曲谱', icon: 'music', color: '#D85B38', brand: 'image', image: 'assets/app-icons/songbook.svg', category: '音乐', status: '可更新', version: '2.32', installed: true, update: true, rating: '4.8', size: '92 MB', desc: '大字曲谱、和弦滚动、练唱节拍。', verified: true, editorNote: '大屏曲谱清晰可读，适合边弹边唱。' },
  { id: 'qqmusic', name: 'QQ音乐TV版', icon: 'headphones', color: '#20C66A', brand: 'image', image: 'assets/app-icons/qq-music.jpg', category: '音乐', status: '热门', version: '12.1', installed: false, update: false, rating: '4.7', size: '128 MB', desc: '海量歌单、车载音效、家庭歌房推荐。', hot: true, verified: true },
  { id: 'dance', name: '热舞型动', icon: 'flame', color: '#E84452', brand: 'image', image: 'assets/app-icons/hot-dance.jpg', category: '健身', status: '推荐', version: '3.6', installed: false, update: false, rating: '4.6', size: '156 MB', desc: '客厅跟跳、燃脂课程、K歌派对热身。', isNew: true, verified: true, editorNote: '聚会暖场神器，跟跳模式适合全年龄。' },
  { id: 'tangdou', name: '糖豆广场舞', icon: 'star', color: '#F0A51D', brand: 'image', image: 'assets/app-icons/tangdou.jpg', category: '娱乐', status: '榜单', version: '8.4', installed: false, update: false, rating: '4.5', size: '144 MB', desc: '热门广场舞、分步教学、亲友投屏。', hot: true, verified: true },
  { id: 'yangshipin', name: '央视频TV版', icon: 'tv', color: '#D8242F', brand: 'image', image: 'assets/app-icons/yangshipin.jpg', category: '影音', status: '精选', version: '6.2', installed: true, update: false, rating: '4.6', size: '98 MB', desc: '演唱会、综艺、体育直播和新闻频道。', verified: true },
  { id: 'wukong', name: '悟空识字', icon: 'book-open', color: '#16A35B', brand: 'image', image: 'assets/app-icons/wukong-literacy.jpg', category: '儿童', status: '亲子', version: '4.1', installed: false, update: false, rating: '4.8', size: '112 MB', desc: '儿童识字、互动故事、亲子陪伴。', isNew: true, verified: true, editorNote: '互动识字游戏，适合 3-8 岁亲子共学。' },
  { id: 'clean', name: '一键清理TV版', icon: 'trash-2', color: '#4F6478', brand: 'image', image: 'assets/app-icons/tv-cleaner.svg', category: '工具', status: '已安装', version: '1.9', installed: true, update: true, rating: '4.3', size: '38 MB', desc: '清理缓存、释放空间、下载前自动检测。', verified: true }
];

const categories = ['推荐', '音乐', '影音', '娱乐', '儿童', '健身', '工具'];

// 场景分组
const scenes = [
  { name: '家庭聚会', icon: 'zap', apps: ['thunderktv', 'dance', 'qqmusic'] },
  { name: '亲子时光', icon: 'heart', apps: ['wukong', 'tangdou', 'yangshipin'] },
  { name: '独处放松', icon: 'moon', apps: ['songbook', 'yangshipin', 'qqmusic'] }
];

/* ======== 画布缩放 ======== */
function setupStageScale() {
  const root = document.documentElement;
  const designW = 1280, designH = 720, maxScale = 1.12;
  function apply() {
    const vp = window.visualViewport;
    const w = Math.round(vp?.width || window.innerWidth);
    const h = Math.round(vp?.height || window.innerHeight);
    const s = Math.min(maxScale, Math.min(w / designW, h / designH));
    root.style.setProperty('--stage-scale', Math.max(0.1, s).toFixed(4));
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
    'trash-2': '<polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/>'
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

  const catTabs = categories.map(cat => {
    const isRecommend = cat === '推荐';
    const href = isRecommend
      ? `${base}index.html`
      : `${isCatalog ? '' : base + 'screens/catalog.html'}?cat=${cat}`;
    return `<a href="${href}" class="cat-tab${active === cat ? ' active' : ''}" data-cat-tab="${cat}">${cat}</a>`;
  }).join('');

  return `
    <header class="topnav">
      <a class="brand-mark" href="${base}index.html">
        <img src="${base}assets/thunderstone-logo.png" alt="ThunderStone" class="brand-logo">
      </a>
      <nav class="cat-tabs" aria-label="分类导航">${catTabs}</nav>
      <div class="top-actions">
        <button class="btn-search" data-open-search>${iconSvg('search')}<span>搜索应用</span></button>
      </div>
    </header>
    <nav class="bottom-dock" aria-label="底部导航">
      <a class="dock-btn${isHome || isCatalog ? ' active' : ''}" href="${base}index.html">${iconSvg('home')}<span>推荐</span></a>
      <a class="dock-btn${isManage ? ' active' : ''}" href="${base}screens/manage.html">${iconSvg('down')}<span>管理</span></a>
      <a class="dock-btn${isUsers ? ' active' : ''}" href="${base}screens/users.html">${iconSvg('user')}<span>我的</span></a>
    </nav>`;
}

/* ======== 编辑精选大卡（今日推荐） ======== */
function renderEditorPick() {
  const target = document.querySelector('[data-editor-pick]');
  if (!target) return;
  const app = marketApps[0]; // 雷石 K 歌
  const inScreens = location.pathname.includes('/screens/');
  const base = inScreens ? '../' : '';
  target.innerHTML = `
    <div class="editor-card">
      <div class="editor-card-content">
        <div class="editor-label">
          ${iconSvg('sparkle')}
          <span>今日推荐</span>
        </div>
        <h1 class="editor-title">${app.name}</h1>
        <p class="editor-note">"${app.editorNote}"</p>
        <div class="editor-meta">
          <span>★ ${app.rating}</span>
          <span>${app.size}</span>
        </div>
        <div class="editor-actions">
          <button class="btn btn-primary" data-toast="${app.name} 开始下载">${app.installed ? '打开' : '安装'}</button>
          <a class="btn btn-ghost" href="${base}screens/detail.html?id=${app.id}">了解更多</a>
        </div>
      </div>
      <div class="editor-card-visual">
        <div class="editor-icon">
          <img src="${base}${app.image}" alt="${app.name}">
        </div>
      </div>
    </div>`;
}

/* ======== 精选应用横向滚动 ======== */
function renderCurated() {
  const target = document.querySelector('[data-curated]');
  if (!target) return;
  const inScreens = location.pathname.includes('/screens/');
  const base = inScreens ? '../' : '';
  const picks = marketApps.filter(a => a.verified).slice(0, 6);
  target.innerHTML = picks.map(app => `
    <a class="curated-card" href="${base}screens/detail.html?id=${app.id}">
      ${appBrandIcon(app, 'lg')}
      <div class="curated-info">
        <strong>${app.name}</strong>
        <span class="curated-meta">${app.category}</span>
      </div>
      ${app.editorNote ? `<p class="curated-note">${app.editorNote.slice(0, 16)}…</p>` : ''}
    </a>`).join('');
}

/* ======== 场景推荐 ======== */
function renderScenes() {
  const target = document.querySelector('[data-scenes]');
  if (!target) return;
  const inScreens = location.pathname.includes('/screens/');
  const base = inScreens ? '../' : '';
  target.innerHTML = scenes.map(scene => {
    const apps = scene.apps.map(id => marketApps.find(a => a.id === id)).filter(Boolean);
    const appCards = apps.map(app => `
      <a class="scene-app" href="${base}screens/detail.html?id=${app.id}">
        ${appBrandIcon(app, 'sm')}
        <span>${app.name}</span>
      </a>`).join('');
    return `
      <div class="scene-block">
        <div class="scene-header">
          ${iconSvg(scene.icon)}
          <h3>${scene.name}</h3>
        </div>
        <div class="scene-apps">${appCards}</div>
      </div>`;
  }).join('');
}

/* ======== 排行榜 ======== */
function renderCharts() {
  const target = document.querySelector('[data-charts]');
  if (!target) return;
  const hotApps = marketApps.filter(a => a.hot).slice(0, 3);
  const newApps = marketApps.filter(a => a.isNew).slice(0, 3);

  function chartColumn(title, icon, apps) {
    const rows = apps.map((app, i) => `
      <div class="chart-row">
        <span class="chart-rank">${i + 1}</span>
        ${appBrandIcon(app, 'sm')}
        <div class="chart-info">
          <strong>${app.name}</strong>
          <span>${app.category} · ★ ${app.rating}</span>
        </div>
      </div>`).join('');
    return `<div class="chart-col"><div class="chart-header">${iconSvg(icon)}<h3>${title}</h3></div>${rows}</div>`;
  }

  target.innerHTML = chartColumn('热门榜', 'flame', hotApps) + chartColumn('新品榜', 'sparkle', newApps);
}

/* ======== 应用卡片（分类页用） ======== */
function appCard(app) {
  let actionLabel, btnClass, actionIcon;
  if (app.installed && app.update) {
    actionLabel = '更新'; btnClass = 'btn-update'; actionIcon = 'refresh';
  } else if (app.installed) {
    actionLabel = '打开'; btnClass = 'btn-open'; actionIcon = 'play';
  } else {
    actionLabel = '安装'; btnClass = 'btn-install'; actionIcon = 'down';
  }
  const uninstallBtn = app.installed ? `<button class="btn btn-uninstall" data-uninstall="${app.id}">${iconSvg('trash-2')} 卸载</button>` : '';
  return `
    <article class="app-card" data-app-id="${app.id}" data-name="${app.name.toLowerCase()} ${app.desc.toLowerCase()}" data-category="${app.category}" data-installed="${app.installed}" data-update="${app.update}">
      <div class="app-card-left">
        ${appBrandIcon(app)}
        <div class="app-copy">
          <h3>${app.name}</h3>
          <p class="app-desc">${app.desc}</p>
          <div class="app-meta">
            <span>★ ${app.rating}</span>
            <span>${app.size}</span>
          </div>
        </div>
      </div>
      <div class="app-card-right">
        <button class="btn ${btnClass}" data-toast="${app.name} ${actionLabel === '安装' ? '开始下载' : actionLabel === '更新' ? '开始更新' : '已打开'}">${iconSvg(actionIcon)} ${actionLabel}</button>
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
  target.innerHTML = categories.map(cat =>
    `<button class="${cat === urlCat ? 'active' : ''}" data-chip-category="${cat}">${cat}</button>`
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
      <button class="pager-btn" data-page-prev ${page <= 1 ? 'disabled' : ''}>${iconSvg('back')} 上一页</button>
      <span class="pager-info">${page} / ${totalPages}</span>
      <button class="pager-btn" data-page-next ${page >= totalPages ? 'disabled' : ''}>下一页</button>`;
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
      <div class="uninstall-dialog">
        <div class="dialog-icon">${imgSrc ? `<img src="${imgSrc}" alt="${appData.name}">` : `<div style="width:100%;height:100%;background:${appData.color};border-radius:12px"></div>`}</div>
        <h3>卸载「${appData.name}」？</h3>
        <p>卸载后应用数据将被清除，确认继续？</p>
        <div class="dialog-actions">
          <button class="btn btn-open" data-dismiss-uninstall>取消</button>
          <button class="btn btn-uninstall" data-confirm-uninstall="${appId}">确认卸载</button>
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
      <div class="search-panel">
        <div class="search-header">
          <div class="search-input-wrap">
            ${iconSvg('search')}
            <input type="text" class="search-input" placeholder="搜索应用名称或功能…" autofocus>
            <button class="search-close" data-close-search>取消</button>
          </div>
        </div>
        <div class="search-body">
          <div class="search-hint">输入关键词搜索应用</div>
          <div class="search-results" data-search-results></div>
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
    results.innerHTML = matched.map(app => `
      <a class="search-result-item" href="${base}screens/detail.html?id=${app.id}">
        ${appBrandIcon(app, 'sm')}
        <div class="search-result-info">
          <strong>${app.name}</strong>
          <span>${app.category} · ${app.desc.slice(0, 20)}…</span>
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
