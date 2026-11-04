// Michi 道 — app principal (sem dependências, funciona offline).
(function () {
  'use strict';
  const APP_VERSION = '1.1.2';
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const app = $('#app');
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const joinJP = s => String(s || '').replace(/ +/g, '');
  const jp = s => JP.ruby(esc(joinJP(s)));             // texto japonês com furigana
  const jpTok = s => JP.ruby(esc(s));
  const txt = s => /[A-Za-zÀ-ú]{2,}/.test(s) ? JP.ruby(esc(s)) : jp(s); // mantém espaços em textos em português
  const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const pick = (a, n) => shuffle(a).slice(0, n);
  const DAY = 86400000;
  const todayKey = (d = new Date()) => d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');

  // ---------- Curso ----------
  const MODULES = window.COURSE;
  const TRACKS = { all: ['Tudo', '🧭'], core: ['Gramática', '📐'], vocab: ['Vocabulário', '📚'], kanji: ['Kanji', '🈶'], situ: ['Situações', '🎭'], story: ['Histórias', '📖'], review: ['Revisões', '🏆'] };
  // Mistura as trilhas extras (vocabulário, kanji, situações, histórias) dentro de cada módulo
  MODULES.forEach(m => {
    m.lessons.forEach(l => { l.track = l.track || 'core'; });
    const extras = (window.EXTRA || []).filter(e => e.m === m.id).map(e => e.l);
    if (extras.length) {
      const byTrack = {}; extras.forEach(l => (byTrack[l.track] = byTrack[l.track] || []).push(l));
      const mixed = []; const lists = Object.values(byTrack);
      while (lists.some(a => a.length)) lists.forEach(a => { if (a.length) mixed.push(a.shift()); });
      const core = m.lessons, C = core.length, E = mixed.length, out = [];
      core.forEach((l, i) => { out.push(l); const n = Math.floor((i + 1) * E / C) - Math.floor(i * E / C); out.push(...mixed.splice(0, n)); });
      m.lessons = out.concat(mixed);
    }
    if (m.id !== 'm0') m.lessons.push({ id: m.id + 'rev', title: 'Revisão geral: ' + m.title, icon: '🏆', track: 'review', checkpoint: true,
      cando: ['Revisar tudo o que você aprendeu neste módulo', 'Provar que está pronto(a) para o próximo nível'] });
  });
  const LESSONS = [];
  MODULES.forEach(m => m.lessons.forEach(l => { l.module = m; l.index = LESSONS.length; LESSONS.push(l); }));
  const LESSON = Object.fromEntries(LESSONS.map(l => [l.id, l]));

  function vocabItem(a) { return { jp: a[0], kana: a[1] || a[0], pt: a[2], em: a[3] || '', key: 'v:' + a[0] }; }
  function kanaItem(a, set) {
    return { jp: a[0], kana: a[0], pt: a[1], em: a[5] || '', mn: a[2] || '', ex: a[3] || '', exm: a[4] || '', key: 'k:' + a[0], isKana: true, set };
  }
  function kanjiItem(a) { return { jp: a[0], kana: (a[2] && a[2] !== '—' ? a[2] : a[1]).split('・')[0].replace(/[()（）]/g, ''), pt: a[3], on: a[1], kun: a[2], key: 'j:' + a[0], isKanji: true }; }
  function lessonItems(l) {
    let items = [];
    if (l.kana) l.kana.groups.forEach(g => (KANA[l.kana.set][g] || []).forEach(a => items.push(kanaItem(a, l.kana.set))));
    if (l.vocab) items = items.concat(l.vocab.map(vocabItem));
    return items;
  }
  function lessonSentences(l) { return (l.sentences || []).map(s => ({ jp: s[0], pt: s[1] })); }
  function lessonKanji(l) { return (l.kanji || []).map(kanjiItem); }
  let _pool;
  function globalPool() { if (!_pool) { _pool = []; LESSONS.forEach(l => { _pool = _pool.concat(lessonItems(l)); }); } return _pool; }

  // romaji a partir de kana
  const RO = {};
  ['vogais', 'k', 's', 't', 'n', 'h', 'm', 'y', 'r', 'w', 'dakuten', 'youon'].forEach(g => KANA.hiragana[g].forEach(a => { RO[a[0]] = a[1]; }));
  Object.assign(RO, { 'ぁ': 'a', 'ぃ': 'i', 'ぅ': 'u', 'ぇ': 'e', 'ぉ': 'o', 'ゔ': 'vu', 'を': 'o' });
  KANA_EXTRA.forEach(a => { RO[JP.kataToHira(a[0])] = a[1]; });
  function toRomaji(s) {
    s = JP.kataToHira(JP.reading(joinJP(s))); let out = '';
    for (let i = 0; i < s.length; i++) {
      const two = s.substr(i, 2);
      if (RO[two] && two.length === 2) { out += RO[two]; i++; continue; }
      const c = s[i];
      if (c === 'っ') { const nx = RO[s.substr(i + 1, 2)] || RO[s[i + 1]] || ''; out += nx ? nx[0] : ''; continue; }
      if (c === 'ー') { out += out.slice(-1); continue; }
      out += RO[c] != null ? RO[c] : c;
    }
    return out;
  }

  // ---------- Estado ----------
  const STORE = 'michi.state.v1';
  const DEFAULT = {
    v: 1, created: Date.now(), xp: 0, streak: 0, lastDay: null, days: {}, goal: 30, startAt: 0, onboarded: false,
    lessons: {}, missions: {}, srs: {}, noMicUntil: 0,
    settings: { furigana: true, romaji: false, rate: 0.9, voice: '', unlockAll: false, sound: true, theme: 'auto' }
  };
  let S;
  function load() {
    try { S = JSON.parse(localStorage.getItem(STORE)) || null; } catch (e) { S = null; }
    S = Object.assign({}, JSON.parse(JSON.stringify(DEFAULT)), S || {});
    S.settings = Object.assign({}, DEFAULT.settings, S.settings || {});
  }
  function save() { try { localStorage.setItem(STORE, JSON.stringify(S)); } catch (e) { toast('Não foi possível salvar o progresso neste navegador.'); } }

  function addXP(n) {
    const t = todayKey(), y = todayKey(new Date(Date.now() - DAY));
    if (S.lastDay !== t) { S.streak = S.lastDay === y ? S.streak + 1 : 1; S.lastDay = t; }
    S.xp += n; S.days[t] = (S.days[t] || 0) + n; save(); updateTop();
  }
  function currentStreak() { const t = todayKey(), y = todayKey(new Date(Date.now() - DAY)); return (S.lastDay === t || S.lastDay === y) ? S.streak : 0; }

  // ---------- SRS (repetição espaçada) ----------
  function srsData(it) { return [it.jp, it.kana, it.pt, it.em || '', it.isKana ? 1 : it.isKanji ? 2 : 0]; }
  function srsAdd(it, learned) {
    if (S.srs[it.key]) return;
    S.srs[it.key] = { d: srsData(it), due: Date.now() + (learned ? DAY : 0), iv: learned ? 1 : 0, ef: 2.5, reps: learned ? 1 : 0, lapses: 0 };
  }
  function srsGrade(key, ok) {
    const c = S.srs[key]; if (!c) return;
    if (ok) {
      c.reps++; c.iv = c.reps <= 1 ? 1 : c.reps === 2 ? 3 : Math.round(c.iv * c.ef);
      c.ef = Math.min(3, c.ef + 0.05); c.due = Date.now() + c.iv * DAY;
    } else { c.lapses++; c.reps = 0; c.iv = 0; c.ef = Math.max(1.3, c.ef - 0.2); c.due = Date.now() + 10 * 60000; }
  }
  function srsItem(key) { const d = S.srs[key].d; return { key, jp: d[0], kana: d[1], pt: d[2], em: d[3], isKana: d[4] === 1, isKanji: d[4] === 2 }; }
  function dueKeys() { const now = Date.now(); return Object.keys(S.srs).filter(k => S.srs[k].due <= now).sort((a, b) => S.srs[a].due - S.srs[b].due); }

  // ---------- Áudio: síntese de voz ----------
  let jaVoices = [];
  function loadVoices() { if (!('speechSynthesis' in window)) return; jaVoices = speechSynthesis.getVoices().filter(v => /^ja/i.test(v.lang)); }
  if ('speechSynthesis' in window) { loadVoices(); speechSynthesis.onvoiceschanged = loadVoices; }
  // Escolhe sozinho a voz japonesa mais natural disponível (Edge: Nanami Natural; Chrome: Google 日本語; celulares: voz do sistema)
  function bestVoice() {
    const score = v => (/natural|neural/i.test(v.name) ? 4 : 0) + (/nanami|keita|google/i.test(v.name) ? 3 : 0) + (/online/i.test(v.name) ? 2 : 0) + (v.localService ? 0 : 1);
    return jaVoices.slice().sort((a, b) => score(b) - score(a))[0];
  }
  let warnedVoice = false;
  function speak(text, slow) {
    if (!('speechSynthesis' in window)) { toast('Este navegador não tem síntese de voz.'); return Promise.resolve(); }
    const t = JP.reading(joinJP(text)).replace(/[〜~]/g, '').replace(/\(.*?\)/g, '');
    speechSynthesis.cancel();
    return new Promise(res => {
      const u = new SpeechSynthesisUtterance(t);
      u.lang = 'ja-JP'; u.rate = (slow ? 0.6 : 1) * S.settings.rate;
      const v = jaVoices.find(v => v.name === S.settings.voice) || bestVoice();
      if (v) u.voice = v;
      else if (!warnedVoice && speechSynthesis.getVoices().length) { warnedVoice = true; toast('Nenhuma voz japonesa instalada. Veja Perfil → Voz.'); }
      u.onend = u.onerror = () => res();
      speechSynthesis.speak(u);
      setTimeout(res, 15000);
    });
  }
  // Efeitos sonoros (gerados, sem arquivos)
  let actx;
  function beep(kind) {
    if (!S.settings.sound) return;
    try {
      actx = actx || new (window.AudioContext || window.webkitAudioContext)();
      const notes = kind === 'ok' ? [660, 880] : kind === 'bad' ? [220, 180] : [523, 659, 784, 1046];
      notes.forEach((f, i) => {
        const o = actx.createOscillator(), g = actx.createGain(), t0 = actx.currentTime + i * 0.11;
        o.type = kind === 'bad' ? 'square' : 'sine'; o.frequency.value = f;
        g.gain.setValueAtTime(0.0001, t0); g.gain.exponentialRampToValueAtTime(kind === 'bad' ? 0.05 : 0.15, t0 + 0.02); g.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.22);
        o.connect(g).connect(actx.destination); o.start(t0); o.stop(t0 + 0.25);
      });
    } catch (e) { /* sem áudio */ }
  }

  // ---------- Reconhecimento de fala ----------
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  function recognize() {
    return new Promise((resolve, reject) => {
      if (!SR) return reject('unsupported');
      const r = new SR(); let doneFlag = false;
      r.lang = 'ja-JP'; r.interimResults = false; r.maxAlternatives = 5;
      r.onresult = e => { doneFlag = true; resolve(Array.from(e.results[0]).map(a => a.transcript)); };
      r.onerror = e => { if (!doneFlag) { doneFlag = true; reject(e.error || 'error'); } };
      r.onend = () => { if (!doneFlag) { doneFlag = true; resolve([]); } };
      try { r.start(); } catch (e) { reject('start'); }
      recognize.current = r;
    });
  }
  function speechScore(target, alts) {
    const surf = JP.surface(joinJP(target)), read = JP.reading(joinJP(target));
    let best = 0, bestAlt = alts[0] || '';
    alts.forEach(a => { const s = Math.max(JP.similarity(a, surf), JP.similarity(a, read)); if (s > best) { best = s; bestAlt = a; } });
    return { score: best, heard: bestAlt };
  }
  // Gravação de voz (funciona offline)
  async function recordVoice(btn, onDone) {
    if (!navigator.mediaDevices || !window.MediaRecorder) { toast('Gravação não suportada neste navegador.'); return; }
    if (recordVoice.rec) { recordVoice.rec.stop(); return; }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const rec = new MediaRecorder(stream), chunks = [];
      rec.ondataavailable = e => chunks.push(e.data);
      rec.onstop = () => { stream.getTracks().forEach(t => t.stop()); recordVoice.rec = null; btn.classList.remove('rec'); onDone(URL.createObjectURL(new Blob(chunks, { type: rec.mimeType }))); };
      rec.start(); recordVoice.rec = rec; btn.classList.add('rec');
      setTimeout(() => { if (rec.state === 'recording') rec.stop(); }, 12000);
    } catch (e) { toast('Permita o uso do microfone para gravar.'); }
  }

  // ---------- UI util ----------
  let toastT;
  function toast(msg) { const t = $('#toast'); t.textContent = msg; t.classList.add('show'); clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove('show'), 2800); }
  function speakBtn(text, cls = '') { return `<button class="speak ${cls}" data-say="${esc(text)}" aria-label="Ouvir">🔊</button>`; }
  function speakSlowBtn(text) { return `<button class="speak slow" data-say="${esc(text)}" data-slow="1" aria-label="Ouvir devagar">🐢</button>`; }
  document.addEventListener('click', e => {
    const b = e.target.closest('[data-say]');
    if (b) { e.stopPropagation(); speak(b.dataset.say, !!b.dataset.slow); }
  });
  function wordHTML(it, big) {
    const surf = esc(it.jp), showReading = it.kana && it.kana !== it.jp && !it.isKana;
    const ro = S.settings.romaji || it.isKana ? '' : '';
    let h = showReading ? `<ruby>${surf}<rt>${esc(it.kana)}</rt></ruby>` : surf;
    if (S.settings.romaji && !it.isKana) h += `<div class="r">${esc(toRomaji(it.kana))}</div>`;
    return big ? `<span class="big-jp">${h}</span>` : h + ro;
  }
  function applySettings() {
    document.body.classList.toggle('no-furigana', !S.settings.furigana);
    if (S.settings.theme === 'auto') delete document.documentElement.dataset.theme; else document.documentElement.dataset.theme = S.settings.theme;
  }
  function updateTop() {
    $('#st-streak b').textContent = currentStreak();
    $('#st-xp b').textContent = S.xp;
    const today = S.days[todayKey()] || 0, pct = Math.min(1, today / S.goal);
    $('#goal-ring').style.strokeDashoffset = String(94.25 * (1 - pct));
    $('#st-goal').title = `Meta diária: ${today}/${S.goal} XP`;
    const due = dueKeys().length, b = $('#due-badge');
    b.hidden = !due; b.textContent = due > 99 ? '99+' : due;
  }
  function setTab(name) { $$('.tabbar a').forEach(a => a.classList.toggle('active', a.dataset.tab === name)); }

  // ---------- Desbloqueio ----------
  function isDone(l) { return !!(S.lessons[l.id] && S.lessons[l.id].done); }
  function isUnlocked(l) { return S.settings.unlockAll || l.index <= S.startAt || l.index === 0 || isDone(LESSONS[l.index - 1]) || isDone(l); }
  function nextLesson() { return LESSONS.find(l => !isDone(l) && isUnlocked(l)) || LESSONS[LESSONS.length - 1]; }

  // ---------- Router ----------
  const routes = [];
  function route(re, fn) { routes.push([re, fn]); }
  function go(hash) { location.hash = hash; }
  function router() {
    const h = location.hash.slice(1) || '/';
    if (router.reloadLater && !h.startsWith('/p/')) { location.reload(); return; }
    document.body.classList.remove('in-session');
    app.onclick = null;
    if (recordVoice.rec) recordVoice.rec.stop();
    if ('speechSynthesis' in window) speechSynthesis.cancel();
    for (const [re, fn] of routes) { const m = h.match(re); if (m) { fn(...m.slice(1)); app.focus({ preventScroll: true }); return; } }
    go('/');
  }
  window.addEventListener('hashchange', () => { router(); window.scrollTo(0, 0); });

  // ---------- Tela: trilha ----------
  route(/^\/$/, () => {
    setTab('path');
    const cur = nextLesson();
    const due = dueKeys().length, today = S.days[todayKey()] || 0, filter = S.settings.filter || 'all';
    const doneAll = LESSONS.filter(isDone).length;
    const lessonsToday = Object.values(S.lessons).filter(x => x.at && todayKey(new Date(x.at)) === todayKey()).length;
    let h = '';
    if (!jaVoices.length && 'speechSynthesis' in window && speechSynthesis.getVoices().length) h += `<div class="warn">🔈 Este navegador não tem voz japonesa. Abra o Michi no <b>Chrome</b>, no <b>Edge</b> ou no <b>celular</b> e os áudios tocam em japonês automaticamente.</div>`;
    // Cartão principal: um toque para estudar
    h += `<div class="card hero" style="border-color:${cur.module.color}">
      <div class="row"><span class="hero-ic" style="background:${cur.module.color}">${cur.icon}</span><div class="grow">
      <div class="pill">${TRACKS[cur.track][1]} ${TRACKS[cur.track][0]} · ${esc(cur.module.level)}</div>
      <h2 style="margin:4px 0 0">${esc(cur.title)}</h2><small class="muted">Aula ${cur.index + 1} de ${LESSONS.length} · ${doneAll} concluídas</small></div></div>
      <button class="btn block" id="study-now" style="margin-top:14px">${due ? `▶ Estudar agora (${Math.min(20, due)} revisões + aula)` : '▶ Estudar agora'}</button>
      <div class="row" style="margin-top:10px;justify-content:center"><a href="#/l/${cur.id}" class="btn ghost small">📘 Ver explicação</a>${due ? `<a href="#/review" class="btn ghost small">🔁 Só revisar</a>` : ''}</div></div>`;
    h += `<div class="card"><h3 style="margin-bottom:6px">📅 Plano de hoje</h3>
      <div class="plan"><span class="${due ? '' : 'ok'}">${due ? '⬜' : '✅'} Revisões em dia</span><span class="${lessonsToday ? 'ok' : ''}">${lessonsToday ? '✅' : '⬜'} 1 aula nova</span><span class="${today >= S.goal ? 'ok' : ''}">${today >= S.goal ? '✅' : '⬜'} Meta: ${today}/${S.goal} XP</span></div></div>`;
    h += `<div class="chips" id="mod-chips">${MODULES.map(m => `<button class="chip" data-mod="${m.id}" style="--mc:${m.color}">${m.icon} ${esc(m.level.split(' ')[0])}</button>`).join('')}</div>`;
    h += `<div class="chips">${Object.keys(TRACKS).map(k => `<button class="chip ${filter === k ? 'on' : ''}" data-filter="${k}">${TRACKS[k][1]} ${TRACKS[k][0]}</button>`).join('')}</div>`;
    MODULES.forEach(m => {
      const done = m.lessons.filter(isDone).length;
      const list = m.lessons.filter(l => filter === 'all' || l.track === filter);
      h += `<section class="module" id="mod-${m.id}"><div class="module-head" style="background:${m.color}"><span class="mi">${m.icon}</span><div class="grow">
        <div class="lvl">${esc(m.level)} · ${done}/${m.lessons.length} aulas</div><h2>${esc(m.title)}</h2><p>${esc(m.desc)}</p>
        <div class="mbar"><i style="width:${Math.round(100 * done / m.lessons.length)}%"></i></div></div></div><div class="path">`;
      if (!list.length) h += `<p class="muted">Nenhuma aula desta trilha neste módulo.</p>`;
      list.forEach((l, i) => {
        const un = isUnlocked(l), dn = isDone(l), off = [0, 60, 90, 60, 0, -60, -90, -60][i % 8];
        const crowns = dn ? '★'.repeat(Math.min(5, S.lessons[l.id].crowns || 1)) : '';
        h += `<a class="node ${un ? '' : 'locked'} ${dn ? 'done' : ''} ${l === cur ? 'current' : ''} ${l.checkpoint ? 'chk' : ''}" style="--mc:${m.color};transform:translateX(${off}px)" href="${un ? '#/l/' + l.id : 'javascript:void 0'}" data-locked="${un ? '' : '1'}">
          <span class="bubble">${un ? l.icon : '🔒'}</span><span class="crowns">${crowns}</span><span class="label">${esc(l.title)}</span>${l.track !== 'core' ? `<span class="tk">${TRACKS[l.track][1]} ${TRACKS[l.track][0]}</span>` : ''}</a>`;
      });
      h += `</div></section>`;
    });
    app.innerHTML = h;
    $('#study-now').onclick = () => {
      const keys = dueKeys().slice(0, 20);
      if (keys.length) reviewSession(keys, true, () => go('/p/' + nextLesson().id), 'Revisão feita! Agora, a aula de hoje.');
      else go('/p/' + cur.id);
    };
    $$('[data-mod]').forEach(b => b.onclick = () => $('#mod-' + b.dataset.mod).scrollIntoView({ behavior: 'smooth' }));
    $$('[data-filter]').forEach(b => b.onclick = () => { S.settings.filter = b.dataset.filter; save(); router(); });
    $$('.node[data-locked="1"]').forEach(n => n.addEventListener('click', () => toast('Complete a aula anterior para desbloquear (ou ative "Desbloquear tudo" no Perfil).')));
  });

  // ---------- Tela: aula (teoria) ----------
  function videosHTML(l) {
    const vs = (window.VIDEOS || {})[l.id] || [];
    const q = encodeURIComponent(l.title + ' japonês aula');
    let h = `<div class="card"><h3>🎬 Vídeos da aula</h3>`;
    if (!navigator.onLine) h += `<div class="warn offline-note">Você está offline. Os vídeos aparecem quando a internet voltar — o resto da aula funciona normalmente.</div>`;
    h += `<div class="videos">` + vs.map(v => `<div class="video"><div class="thumb" data-yt="${v[0]}" style="background-image:url(https://i.ytimg.com/vi/${v[0]}/mqdefault.jpg)" role="button" aria-label="Assistir ${esc(v[2])}"></div>
      <div class="vt"><b>${esc(v[2])}</b><span class="muted">${esc(v[1])} · ${v[3] === 'pt' ? '🇧🇷 PT' : v[3] === 'ja' ? '🇯🇵 JP' : '🇺🇸 EN'}</span> · <a href="https://www.youtube.com/watch?v=${v[0]}" target="_blank" rel="noopener">abrir</a></div></div>`).join('') + `</div>`;
    h += `<p class="muted" style="font-size:13px;margin-bottom:0">Quer mais? <a href="https://www.youtube.com/results?search_query=${q}" target="_blank" rel="noopener">Buscar no YouTube</a>. Dica: assista primeiro sem legenda, depois com legenda em japonês.</p></div>`;
    return h;
  }
  function bindVideos(root) {
    $$('.thumb[data-yt]', root).forEach(t => t.addEventListener('click', () => {
      if (!navigator.onLine) { toast('Sem internet no momento.'); return; }
      const f = document.createElement('iframe');
      f.src = `https://www.youtube-nocookie.com/embed/${t.dataset.yt}?autoplay=1&rel=0`;
      f.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'; f.allowFullscreen = true; f.title = 'Vídeo';
      t.replaceWith(f);
    }));
  }
  function exHTML(e) { return `<div class="ex">${speakBtn(e[0])}<div class="grow"><div class="jp">${jp(e[0])}</div><div class="pt">${esc(e[1])}</div></div></div>`; }

  route(/^\/l\/(\w+)$/, id => {
    const l = LESSON[id]; if (!l) return go('/');
    setTab('path');
    const m = l.module, st = S.lessons[id];
    let h = `<a href="#/" class="muted" style="text-decoration:none">‹ Trilha</a>
      <div class="lesson-hero" style="margin-top:8px"><span class="bubble" style="background:${m.color}">${l.icon}</span><div>
      <div class="pill">${TRACKS[l.track][1]} ${TRACKS[l.track][0]} · ${esc(m.level)} · Aula ${l.index + 1}/${LESSONS.length}</div><h1 style="margin:4px 0 0;font-size:24px">${esc(l.title)}</h1></div></div>`;
    if (l.cando) h += `<div class="card"><h3>🎯 Ao final você vai conseguir</h3><ul class="cando">${l.cando.map(c => `<li>${esc(c)}</li>`).join('')}</ul></div>`;
    if (l.intro) h += `<div class="card">${JP.ruby(l.intro)}</div>`;
    if (l.kana) {
      const items = lessonItems(l).filter(i => i.isKana);
      h += `<div class="card"><h3>✍️ Kana desta aula</h3><p class="muted">Toque para ouvir. Leia o mnemônico, depois treine a escrita.</p><div class="kgrid">` +
        items.map(i => `<div class="kcard" data-say="${esc(i.jp)}" role="button"><div class="k">${esc(i.jp)}</div><b>${esc(i.pt)}</b>${i.mn ? `<small>${esc(i.mn)}</small>` : ''}${i.ex ? `<small class="jp">${i.em} ${esc(i.ex)} = ${esc(i.exm)}</small>` : ''}</div>`).join('') + `</div></div>`;
    }
    const vocab = (l.vocab || []).map(vocabItem);
    if (vocab.length) h += `<div class="card"><h3>📚 Vocabulário</h3><div class="vgrid">` + vocab.map(v => `<div class="vcard" data-say="${esc(v.kana)}" role="button"><div class="em">${v.em}</div><div class="w">${wordHTML(v)}</div><div class="m">${esc(v.pt)}</div></div>`).join('') + `</div></div>`;
    if (l.kanji) h += `<div class="card"><h3>🈶 Kanji</h3><div class="kgrid">` + l.kanji.map(k => `<div class="kcard"><div class="k">${esc(k[0])}</div><b>${esc(k[3])}</b><small>音 ${esc(k[1])}</small><small>訓 ${esc(k[2])}</small></div>`).join('') + `</div></div>`;
    (l.grammar || []).forEach(g => { h += `<div class="card grammar"><h3>📐 ${JP.ruby(esc(g.t))}</h3><p>${JP.ruby(g.d)}</p>${(g.ex || []).map(exHTML).join('')}</div>`; });
    if (l.sentences) h += `<div class="card"><h3>💬 Frases-chave</h3>${l.sentences.map(exHTML).join('')}</div>`;
    if (l.dialogue) {
      h += `<div class="card"><div class="row"><h3 class="grow" style="margin:0">🎭 Diálogo</h3><button class="btn small blue" id="play-dialog">▶ Ouvir</button><a class="btn small" href="#/rp/${id}">🎙️ Interpretar</a></div>` +
        l.dialogue.map((d, i) => `<div class="dialog-line ${i % 2 ? 'me' : ''}"><span class="who">${jp(d[0])}</span><div class="bub"><div class="row">${speakBtn(d[1])}<div class="grow"><div class="jp" style="font-size:18px">${jp(d[1])}</div><div class="pt muted" style="font-size:14px">${esc(d[2])}</div></div></div></div></div>`).join('') + `</div>`;
    }
    if (l.reading) h += readingHTML(l.reading);
    if (l.checkpoint) {
      const ls = m.lessons.filter(x => x !== l), dn = ls.filter(isDone).length;
      h += `<div class="card"><h3>🏆 Revisão do módulo ${esc(m.level)}</h3><p>Uma prática mista com vocabulário, kanji, frases e perguntas de todas as ${ls.length} aulas do módulo (${dn} concluídas). Vale 30 XP e mostra se você está pronto(a) para o próximo nível. Pode refazer quantas vezes quiser.</p></div>`;
    } else h += videosHTML(l);
    if (l.tip) h += `<div class="card tip"><h3>🧠 Técnica de estudo</h3><p style="margin:0">${esc(l.tip)}</p></div>`;
    if (l.mission) h += `<div class="card mission"><h3>🌏 Missão na vida real</h3><p>${esc(l.mission)}</p>
      <button class="btn small ${S.missions[id] ? 'ghost' : ''}" id="mission-btn" ${S.missions[id] ? 'disabled' : ''}>${S.missions[id] ? '✓ Missão cumprida' : 'Cumpri a missão (+20 XP)'}</button></div>`;
    h += `<div class="sticky-cta"><a class="btn block" href="#/p/${id}">${st && st.done ? '💪 Praticar de novo' : '🚀 Começar a prática'}</a></div>`;
    app.innerHTML = h;
    bindVideos(app);
    const pd = $('#play-dialog');
    if (pd) pd.onclick = async () => { for (const d of l.dialogue) { await speak(d[1]); await new Promise(r => setTimeout(r, 350)); } };
    const mb = $('#mission-btn');
    if (mb) mb.onclick = () => { S.missions[id] = Date.now(); addXP(20); beep('win'); toast('Missão cumprida! +20 XP'); mb.disabled = true; mb.textContent = '✓ Missão cumprida'; mb.classList.add('ghost'); };
    bindReading(app);
  });

  function readingHTML(r) {
    return `<div class="card"><div class="row"><h3 class="grow" style="margin:0">📖 Leitura: ${jp(r.title)}</h3>${speakBtn(r.text)}${speakSlowBtn(r.text)}</div>
      <p class="reading-text">${jp(r.text)}</p><details><summary>Ver tradução</summary><p>${esc(r.pt)}</p></details></div>`;
  }
  function bindReading() {}

  // ---------- Motor de sessões (estilo Duolingo) ----------
  function distractors(item, n, field) {
    const own = [item[field]];
    const pool = shuffle(globalPool()).filter(x => x.isKana === item.isKana && !own.includes(x[field]) && (own.push(x[field]), true));
    return pool.slice(0, n);
  }
  function startSession(opts) {
    document.body.classList.add('in-session');
    const queue = opts.exercises.slice();
    let doneCount = 0, correct = 0, wrong = 0, cur = null, curEx = null, phase = 'check';
    const graded = new Set(), requeued = new Set();
    app.innerHTML = `<div class="session"><div class="s-top"><button class="s-close" aria-label="Sair">✕</button><div class="progress"><i style="width:0"></i></div></div>
      <div class="s-body" id="s-body"></div></div>
      <div class="footer" id="footer"><div class="inner"><div class="fb" id="fb"></div><span id="extra"></span><button class="btn" id="check" disabled>Verificar</button></div></div>`;
    const body = $('#s-body'), footer = $('#footer'), fb = $('#fb'), check = $('#check'), extra = $('#extra');
    $('.s-close').onclick = () => { if (doneCount < 2 || confirm('Sair da prática? O progresso desta sessão será perdido.')) { if (window.speechSynthesis) speechSynthesis.cancel(); opts.onExit ? opts.onExit() : history.back(); } };
    const api = {
      dropType(t) { for (let i = queue.length - 1; i >= 0; i--) if (queue[i].type === t) queue.splice(i, 1); },
      ready(b) { check.disabled = !b; },
      result(ok, ans) { feedback(ok, ans); },
      next() { next(); },
      setButton(label, handler) { check.textContent = label; check.disabled = false; check.onclick = handler; },
      extra(html) { extra.innerHTML = html; },
      selfGrade(ans) {
        check.style.display = 'none';
        extra.innerHTML = `<button class="btn red small" id="sg-no">Errei</button> <button class="btn small" id="sg-yes">Acertei</button>`;
        $('#sg-no').onclick = () => feedback(false, ans, true);
        $('#sg-yes').onclick = () => feedback(true, ans, true);
      }
    };
    function progress() { const bar = $('.progress > i'); if (!bar) return; const total = doneCount + queue.length + (phase === 'check' ? 1 : 0); bar.style.width = (100 * doneCount / Math.max(1, total)) + '%'; }
    function next() {
      footer.className = 'footer'; fb.innerHTML = ''; extra.innerHTML = ''; check.style.display = '';
      check.textContent = 'Verificar'; check.disabled = true; check.onclick = onCheck; phase = 'check';
      if (!queue.length) return finish();
      curEx = queue.shift(); body.innerHTML = ''; window.scrollTo(0, 0);
      cur = EX[curEx.type](curEx, api, body) || {};
      progress();
    }
    function onCheck() { if (phase !== 'check' || !cur.check) return; const r = cur.check(); if (r) feedback(r.ok, r.ans); }
    function feedback(ok, ans, silentSound) {
      if (phase !== 'check' || !document.body.contains(footer)) return;
      phase = 'fb';
      if (curEx.key && !graded.has(curEx.key + curEx.type)) { graded.add(curEx.key + curEx.type); if (opts.grade !== false) srsGrade(curEx.key, ok); }
      if (curEx.noScore) { doneCount++; return next(); }
      if (ok) { correct++; doneCount++; beep('ok'); }
      else { wrong++; beep('bad'); if (!requeued.has(curEx)) { requeued.add(curEx); queue.push(curEx); } else doneCount++; }
      footer.className = 'footer ' + (ok ? 'ok' : 'bad');
      const praise = ['Excelente!', 'Muito bem!', 'Isso aí!', 'Perfeito!', 'すごい！', 'いいね！'];
      fb.innerHTML = `<b>${ok ? praise[Math.floor(Math.random() * praise.length)] : 'Resposta correta:'}</b>${ans ? `<div class="ans">${ans}</div>` : ''}`;
      extra.innerHTML = ''; check.style.display = '';
      check.textContent = 'Continuar'; check.disabled = false; check.className = 'btn' + (ok ? '' : ' red'); check.onclick = () => { check.className = 'btn'; next(); };
      progress(); check.focus();
    }
    function finish() {
      $('.progress > i').style.width = '100%';
      footer.style.display = 'none'; beep('win');
      const acc = correct + wrong ? Math.round(100 * correct / (correct + wrong)) : 100;
      const xp = (opts.baseXP || 10) + correct;
      addXP(xp);
      if (opts.onFinish) opts.onFinish({ acc, correct, wrong });
      save(); updateTop();
      body.innerHTML = `<div class="done-screen"><div class="em">${acc >= 90 ? '🏆' : acc >= 70 ? '🎉' : '💪'}</div><h1>${opts.doneTitle || 'Prática concluída!'}</h1>
        <p class="muted">${acc >= 90 ? 'Desempenho incrível!' : acc >= 70 ? 'Muito bom! Continue assim.' : 'Errar faz parte — é assim que o cérebro aprende.'}</p>
        <div class="done-stats"><div>⚡<b>+${xp}</b>XP</div><div>🎯<b>${acc}%</b>precisão</div><div>🔥<b>${currentStreak()}</b>dias</div></div>
        ${opts.next ? `<button class="btn block" id="done-next">Próxima aula ▶ ${esc(opts.next.title)}</button><p></p><button class="btn ghost block" id="done-ok">Voltar à trilha</button>` : `<button class="btn block" id="done-ok">Continuar</button>`}</div>`;
      $('#done-ok').onclick = () => opts.onExit ? opts.onExit() : go(opts.back || '/');
      if (opts.next) $('#done-next').onclick = () => go('/l/' + opts.next.id);
    }
    document.onkeydown = e => {
      if (!document.body.classList.contains('in-session')) { document.onkeydown = null; return; }
      if (e.target.tagName === 'INPUT' && e.key !== 'Enter') return;
      if (e.key === 'Enter') { if (!check.disabled && check.style.display !== 'none' && footer.style.display !== 'none') { e.preventDefault(); check.click(); } else { const d = $('#done-next') || $('#done-ok'); if (d) d.click(); } }
      else if (/^[1-9]$/.test(e.key)) { const c = $$('.choice:not(:disabled)', body)[+e.key - 1]; if (c) c.click(); }
    };
    next();
  }

  // ---------- Tipos de exercício ----------
  function ansWord(it) { return `${esc(it.jp)}${it.kana !== it.jp ? ` (${esc(it.kana)})` : ''} — ${esc(it.pt)}`; }
  function choicesUI(body, options, render, correctIdx, api, isJP) {
    const wrap = document.createElement('div'); wrap.className = 'choices';
    let sel = -1;
    options.forEach((o, i) => {
      const b = document.createElement('button'); b.className = 'choice' + (isJP ? ' jp' : '');
      b.innerHTML = `<span class="n">${i + 1}</span><span>${render(o)}</span>`;
      b.onclick = () => { $$('.choice', wrap).forEach(x => x.classList.remove('sel')); b.classList.add('sel'); sel = i; api.ready(true); if (isJP && o.kana) speak(o.kana); };
      wrap.appendChild(b);
    });
    body.appendChild(wrap);
    return { check() { const bs = $$('.choice', wrap); bs.forEach(b => b.disabled = true); bs[correctIdx].classList.add('right'); if (sel !== correctIdx) bs[sel].classList.add('wrong'); return sel === correctIdx; } };
  }
  const EX = {
    intro(ex, api, body) {
      const it = ex.item;
      body.innerHTML = `<div class="s-title">${it.isKana ? 'Novo caractere' : it.isKanji ? 'Novo kanji' : 'Nova palavra'}</div>
        <div class="intro-card card"><div class="em">${it.isKana ? `<span class="jp">${esc(it.jp)}</span>` : (it.em || '')}</div>
        ${it.isKana ? '' : `<div class="w">${wordHTML(it)}</div>`}
        <div class="r">${esc(it.isKana ? it.pt : toRomaji(it.kana))}</div>
        <div class="m">${esc(it.isKana ? '' : it.pt)}</div>
        ${it.mn ? `<div class="mn">💡 ${esc(it.mn)}${it.ex ? `<br><span class="jp">${it.em} ${esc(it.ex)}</span> = ${esc(it.exm)}` : ''}</div>` : ''}
        ${it.isKanji ? `<div class="mn">音 ${esc(it.on)} · 訓 ${esc(it.kun)}</div>` : ''}
        <div class="row" style="justify-content:center;margin-top:14px">${speakBtn(it.kana)}${speakSlowBtn(it.kana)}</div></div>`;
      speak(it.kana);
      api.setButton('Continuar', () => api.next());
      return {};
    },
    mc(ex, api, body) {
      const it = ex.item, toPT = ex.dir === 'jp2pt';
      const opts = shuffle([it].concat(distractors(it, 3, toPT ? 'pt' : 'jp')));
      body.innerHTML = `<div class="s-title">${toPT ? (it.isKana ? 'Como se lê?' : 'O que significa?') : 'Escolha a tradução certa'}</div>
        <div class="prompt">${toPT ? speakBtn(it.kana) + `<div>${wordHTML(it, true)}</div>` : `<span style="font-size:40px">${it.em || ''}</span><span class="big-jp" style="font-family:inherit">${esc(it.pt)}</span>`}</div>`;
      if (toPT) speak(it.kana);
      const c = choicesUI(body, opts, o => toPT ? esc(o.pt) : wordHTML(o), opts.indexOf(it), api, !toPT);
      return { check: () => ({ ok: c.check(), ans: ansWord(it) }) };
    },
    listen(ex, api, body) {
      const it = ex.item, opts = shuffle([it].concat(distractors(it, 3, 'jp')));
      body.innerHTML = `<div class="s-title">Toque no que você ouvir</div><div class="prompt" style="justify-content:center">${speakBtn(it.kana, 'lg')}${speakSlowBtn(it.kana)}</div>`;
      setTimeout(() => speak(it.kana), 250);
      const c = choicesUI(body, opts, o => esc(o.isKana ? o.jp : o.kana), opts.indexOf(it), api, true);
      return { check: () => ({ ok: c.check(), ans: ansWord(it) }) };
    },
    type(ex, api, body) {
      const it = ex.item;
      body.innerHTML = it.isKana
        ? `<div class="s-title">Como se lê este kana? (romaji)</div><div class="prompt"><span class="big-jp" style="font-size:72px">${esc(it.jp)}</span></div>`
        : `<div class="s-title">Escreva em japonês</div><div class="prompt"><span style="font-size:44px">${it.em || ''}</span><span class="big-jp" style="font-family:inherit">${esc(it.pt)}</span></div>
           <p class="muted" style="margin-top:-6px">Digite em romaji (ex.: <i>neko</i>) ou em kana — o app converte.</p>`;
      body.insertAdjacentHTML('beforeend', `<input class="answer-input" id="ans" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="${it.isKana ? 'ex.: ka' : 'ex.: neko'}"><div class="preview" id="pv"></div>`);
      const inp = $('#ans', body), pv = $('#pv', body);
      inp.oninput = () => { api.ready(inp.value.trim().length > 0); if (!it.isKana) pv.textContent = JP.hasKana(inp.value) ? '' : JP.toHiragana(inp.value); };
      setTimeout(() => inp.focus(), 50);
      return {
        check() {
          inp.disabled = true; const v = inp.value.trim().toLowerCase();
          const ok = it.isKana ? (v === it.pt || JP.toHiragana(v) === JP.kataToHira(it.jp)) : (JP.normalizeAnswer(v) === JP.normalizeAnswer(it.kana) || JP.strip(v) === JP.strip(it.jp));
          if (ok) speak(it.kana);
          return { ok, ans: it.isKana ? `${esc(it.jp)} = ${esc(it.pt)}` : ansWord(it) };
        }
      };
    },
    match(ex, api, body) {
      const items = ex.items; let left = null, matched = 0, errs = 0;
      body.innerHTML = `<div class="s-title">Toque nos pares</div><div class="match" id="mt"></div>`;
      const mt = $('#mt', body);
      const L = shuffle(items), R = shuffle(items);
      for (let i = 0; i < items.length; i++) {
        mt.insertAdjacentHTML('beforeend', `<button class="choice jp" data-side="L" data-k="${esc(L[i].key)}">${esc(L[i].jp)}</button><button class="choice" data-side="R" data-k="${esc(R[i].key)}">${esc(R[i].isKana ? R[i].pt : R[i].pt)}</button>`);
      }
      mt.addEventListener('click', e => {
        const b = e.target.closest('.choice'); if (!b || b.classList.contains('gone')) return;
        if (b.dataset.side === 'L') { $$('[data-side=L]', mt).forEach(x => x.classList.remove('sel')); b.classList.add('sel'); left = b; const it = items.find(x => x.key === b.dataset.k); speak(it.kana); return; }
        if (!left) { b.classList.add('wrong'); setTimeout(() => b.classList.remove('wrong'), 300); return; }
        if (left.dataset.k === b.dataset.k) {
          left.classList.add('right'); b.classList.add('right'); const l2 = left; left = null; matched++;
          setTimeout(() => { l2.classList.add('gone'); b.classList.add('gone'); }, 250);
          if (matched === items.length) setTimeout(() => api.result(errs === 0, errs ? `${errs} erro(s) — revise esses pares` : ''), 350);
        } else { errs++; b.classList.add('wrong'); left.classList.add('wrong'); const l2 = left; setTimeout(() => { b.classList.remove('wrong'); l2.classList.remove('wrong'); }, 400); beep('bad'); }
      });
      api.extra('<span class="muted">Combine todos os pares</span>');
      return {};
    },
    build(ex, api, body) {
      const s = ex.s, toks = s.jp.split(' ').filter(Boolean), listen = ex.listen;
      const others = shuffle((ex.pool || []).flatMap(o => o.jp.split(' ')).filter(t => t && !toks.includes(t))).slice(0, Math.min(3, Math.max(1, 6 - toks.length)));
      const bank = shuffle(toks.concat(others));
      body.innerHTML = `<div class="s-title">${listen ? 'Escreva o que você ouvir' : 'Traduza esta frase'}</div>
        <div class="prompt">${listen ? speakBtn(s.jp, 'lg') + speakSlowBtn(s.jp) : speakBtn(s.jp) + `<span style="font-size:20px;font-weight:600">${esc(s.pt)}</span>`}</div>
        <div class="tiles-answer" id="ta"></div><div class="tiles-bank" id="tb"></div>`;
      if (listen) setTimeout(() => speak(s.jp), 250);
      const ta = $('#ta', body), tb = $('#tb', body);
      bank.forEach((t, i) => { const b = document.createElement('button'); b.className = 'tile'; b.innerHTML = jpTok(t); b.dataset.i = i; b.dataset.t = t; tb.appendChild(b); });
      tb.onclick = e => {
        const b = e.target.closest('.tile'); if (!b || b.classList.contains('used')) return;
        b.classList.add('used'); const c = b.cloneNode(true); c.classList.remove('used'); c.dataset.src = b.dataset.i; ta.appendChild(c); api.ready(true);
        speak(b.dataset.t);
      };
      ta.onclick = e => { const b = e.target.closest('.tile'); if (!b) return; $(`.tile[data-i="${b.dataset.src}"]`, tb).classList.remove('used'); b.remove(); api.ready(ta.children.length > 0); };
      return {
        check() {
          const got = $$('.tile', ta).map(b => b.dataset.t).join('');
          const ok = JP.strip(got) === JP.strip(toks.join(''));
          speak(s.jp);
          return { ok, ans: `${jp(s.jp)}<br><span style="font-family:inherit;font-size:14px">${esc(s.pt)}</span>` };
        }
      };
    },
    speak(ex, api, body) {
      const s = ex.s;
      body.innerHTML = `<div class="s-title">Fale esta frase</div>
        <div class="prompt">${speakBtn(s.jp)}${speakSlowBtn(s.jp)}<div class="grow"><div class="big-jp" style="font-size:24px">${jp(s.jp)}</div><div class="muted">${esc(s.pt)}</div></div></div>
        <div class="center" style="margin-top:26px"><button class="mic" id="mic" aria-label="Falar">🎤</button><div class="heard" id="heard"></div>
        <div class="muted" id="hint" style="font-size:14px">${SR && navigator.onLine ? 'Toque no microfone e fale' : 'Toque para gravar sua voz e compare com o áudio'}</div></div>`;
      const mic = $('#mic', body), heard = $('#heard', body), hint = $('#hint', body);
      api.extra(`<button class="btn ghost small" id="skip-mic">Não posso falar agora</button>`);
      $('#skip-mic').onclick = () => { S.noMicUntil = Date.now() + 15 * 60000; save(); ex.noScore = true; api.dropType('speak'); api.result(true, ''); };
      const fallback = () => {
        hint.textContent = 'Grave, ouça e compare com o áudio original:';
        mic.onclick = () => recordVoice(mic, url => {
          heard.innerHTML = `<audio controls src="${url}" style="max-width:100%"></audio>`;
          api.selfGrade(`${jp(s.jp)}`);
        });
      };
      if (SR && navigator.onLine) {
        mic.onclick = async () => {
          mic.classList.add('rec'); heard.textContent = '…ouvindo';
          try {
            const alts = await recognize(); mic.classList.remove('rec');
            if (!alts.length) { heard.textContent = 'Não ouvi nada. Tente de novo.'; return; }
            const { score, heard: h } = speechScore(s.jp, alts);
            heard.innerHTML = `Ouvi: <b>${esc(h)}</b> · ${Math.round(score * 100)}%`;
            api.result(score >= 0.6, score >= 0.6 ? `Pronúncia ${score >= 0.85 ? 'excelente' : 'boa'}! (${Math.round(score * 100)}%)` : `${jp(s.jp)}<br><small>Ouça de novo e tente imitar o ritmo.</small>`);
          } catch (e) { mic.classList.remove('rec'); heard.textContent = ''; fallback(); if (e !== 'aborted') toast('Reconhecimento de voz indisponível — use a gravação.'); }
        };
      } else fallback();
      return {};
    },
    write(ex, api, body) {
      const it = ex.item;
      body.innerHTML = `<div class="s-title">Escreva à mão</div>
        <div class="prompt">${speakBtn(it.kana)}<div><b style="font-size:20px">${esc(it.isKana ? it.pt : it.pt)}</b>${it.isKanji ? `<div class="muted">${esc(it.kun)} / ${esc(it.on)}</div>` : ''}</div></div>
        <div class="canvas-wrap" id="cw"><div class="guide">${esc(it.jp)}</div><canvas></canvas></div>
        <div class="row" style="justify-content:center;margin-top:12px"><button class="btn ghost small" id="cl">Limpar</button><button class="btn ghost small" id="gd">Ocultar guia</button></div>`;
      const pad = drawPad($('#cw', body));
      $('#cl', body).onclick = () => pad.clear();
      $('#gd', body).onclick = e => { const w = $('#cw', body); w.classList.toggle('noguide'); e.target.textContent = w.classList.contains('noguide') ? 'Mostrar guia' : 'Ocultar guia'; };
      api.setButton('Comparar', () => {
        $('#cw', body).classList.remove('noguide');
        api.selfGrade(`<span style="font-size:40px">${esc(it.jp)}</span> ${esc(it.pt)}`);
      });
      return {};
    },
    quiz(ex, api, body) {
      const q = ex.q;
      body.innerHTML = `<div class="s-title">${JP.ruby(esc(q[0]))}</div>`;
      const c = choicesUI(body, q[1], o => txt(o), q[2], api, false);
      return { check: () => ({ ok: c.check(), ans: txt(q[1][q[2]]) }) };
    },
    reading(ex, api, body) {
      body.innerHTML = `<div class="s-title">Leia o texto</div>` + readingHTML(ex.r);
      api.setButton('Responder perguntas', () => api.next());
      return {};
    },
    dictation(ex, api, body) {
      const s = ex.s;
      body.innerHTML = `<div class="s-title">Ditado: escreva o que ouvir</div><div class="prompt" style="justify-content:center">${speakBtn(s.jp, 'lg')}${speakSlowBtn(s.jp)}</div>
        <input class="answer-input" id="ans" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="romaji ou kana"><div class="preview" id="pv"></div>`;
      setTimeout(() => speak(s.jp), 250);
      const inp = $('#ans', body), pv = $('#pv', body);
      inp.oninput = () => { api.ready(inp.value.trim().length > 0); pv.textContent = JP.hasKana(inp.value) ? '' : JP.toHiragana(inp.value); };
      return {
        check() {
          inp.disabled = true;
          const sim = JP.similarity(JP.normalizeAnswer(inp.value), JP.normalizeAnswer(JP.reading(joinJP(s.jp))));
          return { ok: sim >= 0.85, ans: `${jp(s.jp)} <small>(${Math.round(sim * 100)}%)</small><br><span style="font-size:14px">${esc(s.pt)}</span>` };
        }
      };
    }
  };

  function drawPad(wrap) {
    const cv = $('canvas', wrap), ctx = cv.getContext('2d');
    const fit = () => { const r = wrap.getBoundingClientRect(), d = window.devicePixelRatio || 1; cv.width = r.width * d; cv.height = r.height * d; ctx.scale(d, d); ctx.lineCap = ctx.lineJoin = 'round'; ctx.lineWidth = Math.max(6, r.width / 28); ctx.strokeStyle = getComputedStyle(document.body).color; };
    fit();
    let drawing = false, last = null;
    const pos = e => { const r = cv.getBoundingClientRect(); return [e.clientX - r.left, e.clientY - r.top]; };
    cv.addEventListener('pointerdown', e => { drawing = true; last = pos(e); cv.setPointerCapture(e.pointerId); ctx.beginPath(); ctx.arc(last[0], last[1], ctx.lineWidth / 2, 0, 7); ctx.fillStyle = ctx.strokeStyle; ctx.fill(); });
    cv.addEventListener('pointermove', e => { if (!drawing) return; const p = pos(e); ctx.beginPath(); ctx.moveTo(last[0], last[1]); ctx.lineTo(p[0], p[1]); ctx.stroke(); last = p; });
    const up = () => { drawing = false; };
    cv.addEventListener('pointerup', up); cv.addEventListener('pointercancel', up);
    return { clear() { ctx.clearRect(0, 0, cv.width, cv.height); } };
  }

  // ---------- Montagem da prática de uma aula ----------
  function micOK() { return Date.now() > S.noMicUntil; }
  function buildCheckpoint(l) {
    const ls = l.module.lessons.filter(x => x !== l);
    const items = ls.flatMap(lessonItems), sents = ls.flatMap(lessonSentences), quiz = ls.flatMap(x => x.quiz || []);
    const ex = [];
    pick(items, 6).forEach(it => ex.push({ type: 'mc', item: it, key: it.key, dir: Math.random() < 0.5 ? 'jp2pt' : 'pt2jp' }));
    pick(items, 4).forEach(it => ex.push({ type: 'listen', item: it, key: it.key }));
    if (items.length >= 5) { ex.push({ type: 'match', items: pick(items, 5) }); ex.push({ type: 'match', items: pick(items, 5) }); }
    pick(items, 3).forEach(it => ex.push({ type: 'type', item: it, key: it.key }));
    pick(sents, 4).forEach(s => ex.push({ type: 'build', s, pool: sents, listen: Math.random() < 0.4 }));
    if (micOK()) pick(sents, 2).forEach(s => ex.push({ type: 'speak', s }));
    pick(quiz, 4).forEach(q => ex.push({ type: 'quiz', q }));
    return shuffle(ex);
  }
  function buildLessonSession(l) {
    if (l.checkpoint) return buildCheckpoint(l);
    const items = lessonItems(l), sents = lessonSentences(l), kanji = lessonKanji(l);
    const ex = [];
    const fresh = items.filter(i => !S.srs[i.key]).slice(0, 10);
    const add = (type, o) => ex.push(Object.assign({ type }, o));
    // 1) novos itens: apresentação + checagem imediata
    for (let i = 0; i < fresh.length; i += 3) {
      const chunk = fresh.slice(i, i + 3);
      chunk.forEach(it => add('intro', { item: it }));
      chunk.forEach(it => add('mc', { item: it, key: it.key, dir: 'jp2pt' }));
    }
    const rest = [];
    const ra = (type, o) => rest.push(Object.assign({ type }, o));
    pick(items, 4).forEach(it => ra('mc', { item: it, key: it.key, dir: it.isKana ? 'jp2pt' : 'pt2jp' }));
    pick(items, 3).forEach(it => ra('listen', { item: it, key: it.key }));
    if (items.length >= 4) ra('match', { items: pick(items, Math.min(5, items.length)) });
    pick(items, 2).forEach(it => ra('type', { item: it, key: it.key }));
    const writable = l.kana ? items.filter(i => i.isKana && i.mn) : kanji;
    pick(writable, 2).forEach(it => ra('write', { item: it }));
    pick(sents, 3).forEach(s => ra('build', { s, pool: sents }));
    pick(sents, 1).forEach(s => ra('build', { s, pool: sents, listen: true }));
    if (micOK()) pick(sents, 2).forEach(s => ra('speak', { s }));
    ex.push(...shuffle(rest));
    if (l.reading) { add('reading', { r: l.reading, noScore: true }); l.reading.q.forEach(q => add('quiz', { q })); }
    (l.quiz || []).forEach(q => add('quiz', { q }));
    return ex;
  }
  route(/^\/p\/(\w+)$/, id => {
    const l = LESSON[id]; if (!l) return go('/');
    if (!isUnlocked(l)) return go('/');
    startSession({
      exercises: buildLessonSession(l), back: '/l/' + id, baseXP: l.checkpoint ? 30 : 15, next: LESSONS[l.index + 1],
      doneTitle: isDone(l) ? 'Prática concluída!' : 'Aula concluída!',
      onExit: () => go(isDone(l) ? '/' : '/l/' + id),
      onFinish({ acc }) {
        const st = S.lessons[id] || { crowns: 0 };
        st.done = true; st.crowns = Math.min(5, (st.crowns || 0) + 1); st.best = Math.max(st.best || 0, acc); st.at = Date.now();
        S.lessons[id] = st;
        lessonItems(l).concat(lessonKanji(l)).forEach(it => srsAdd(it, true));
      }
    });
  });

  // ---------- Revisão (SRS) ----------
  route(/^\/review$/, () => {
    setTab('review');
    const due = dueKeys(), total = Object.keys(S.srs).length;
    const mature = Object.values(S.srs).filter(c => c.iv >= 21).length;
    const soon = Object.values(S.srs).filter(c => c.due > Date.now() && c.due < Date.now() + DAY).length;
    app.innerHTML = `<h1>🔁 Revisão</h1>
      <div class="card center"><div style="font-size:56px">${due.length ? '🧠' : '✅'}</div>
      <h2>${due.length ? `${due.length} para revisar agora` : 'Tudo revisado!'}</h2>
      <p class="muted">${due.length ? 'A revisão espaçada mostra cada item pouco antes de você esquecer.' : soon ? `${soon} itens voltam nas próximas 24h.` : 'Complete aulas para adicionar itens.'}</p>
      ${due.length ? `<button class="btn block" id="go-rev">Revisar (${Math.min(20, due.length)})</button>` : ''}
      ${total ? `<button class="btn ghost block" id="go-free" style="margin-top:12px">Treino livre (itens mais difíceis)</button>` : ''}</div>
      <div class="statgrid"><div class="statbox"><b>${total}</b>itens aprendidos</div><div class="statbox"><b>${mature}</b>memória longa (21+ dias)</div><div class="statbox"><b>${soon}</b>nas próximas 24h</div></div>
      <div class="card tip"><h3>Como funciona</h3><p style="margin:0">Acertou: o item volta em 1 → 3 → 7 → 15… dias. Errou: ele volta em 10 minutos. Revise <b>todos os dias</b> — é a parte mais importante para chegar ao avançado.</p></div>`;
    const b = $('#go-rev'); if (b) b.onclick = () => reviewSession(due.slice(0, 20));
    const f = $('#go-free'); if (f) f.onclick = () => {
      const hard = Object.keys(S.srs).sort((a, b) => (S.srs[b].lapses - S.srs[a].lapses) || (S.srs[a].ef - S.srs[b].ef)).slice(0, 15);
      reviewSession(hard, false);
    };
  });
  function reviewSession(keys, grade = true, after, title) {
    const ex = keys.map(k => {
      const it = srsItem(k), types = it.isKanji ? ['mc', 'mc', 'listen'] : ['mc', 'mc', 'listen', 'type'];
      const t = types[Math.floor(Math.random() * types.length)];
      return { type: t, item: it, key: k, dir: Math.random() < 0.5 || it.isKana ? 'jp2pt' : 'pt2jp' };
    });
    startSession({ exercises: ex, grade, baseXP: 5, doneTitle: title || 'Revisão concluída!', onExit: after || (() => go('/review')) });
  }

  // ---------- Kana ----------
  const GOJUON = [['vogais', 'a i u e o'], ['k'], ['s'], ['t'], ['n'], ['h'], ['m'], ['y', 'ya _ yu _ yo'], ['r'], ['w', 'wa _ _ _ wo'], ['n_', 'n']];
  route(/^\/kana(?:\/(hira|kata))?$/, which => {
    setTab('kana');
    which = which || 'hira';
    const set = which === 'hira' ? 'hiragana' : 'katakana';
    let rows;
    if (set === 'hiragana') {
      const H = KANA.hiragana;
      rows = [H.vogais, H.k, H.s, H.t, H.n, H.h, H.m, [H.y[0], null, H.y[1], null, H.y[2]], H.r, [H.w[0], null, null, null, H.w[1]], [H.w[2], null, null, null, null]];
    } else {
      const K = KANA.katakana.a.concat(KANA.katakana.b); const g = i => K.slice(i, i + 5);
      const yy = K.filter(x => /^y/.test(x[1])), ww = K.filter(x => /^w/.test(x[1])), nn = K.find(x => x[1] === 'n');
      rows = [g(0), g(5), g(10), g(15), g(20), g(25), g(30), [yy[0], null, yy[1], null, yy[2]], K.filter(x => /^r/.test(x[1])), [ww[0], null, null, null, ww[1]], [nn, null, null, null, null]];
    }
    const cell = a => { if (!a) return `<div class="kana-cell empty"></div>`; const c = S.srs['k:' + a[0]]; const m = c ? (c.reps >= 3 ? 'm2' : 'm1') : ''; return `<div class="kana-cell ${m}" data-k="${esc(a[0])}" data-say="${esc(a[0])}"><div class="k">${esc(a[0])}</div><small>${esc(a[1])}</small></div>`; };
    const dak = set === 'hiragana' ? KANA.hiragana.dakuten : KANA.hiragana.dakuten.map(a => [JP.hiraToKata(a[0]), a[1]]);
    const you = set === 'hiragana' ? KANA.hiragana.youon : KANA.hiragana.youon.map(a => [JP.hiraToKata(a[0]), a[1]]);
    app.innerHTML = `<h1>あ Kana</h1>
      <div class="row"><div class="seg"><button class="${which === 'hira' ? 'on' : ''}" data-go="#/kana/hira">ひらがな</button><button class="${which === 'kata' ? 'on' : ''}" data-go="#/kana/kata">カタカナ</button></div>
      <span class="grow"></span><button class="btn small" id="drill">Treinar 15</button><button class="btn small blue" id="drill-w">✍️ Escrita</button></div>
      <div class="card" id="kinfo" style="min-height:70px"><span class="muted">Toque em um caractere para ouvir e ver o mnemônico. Borda verde = já está na sua revisão.</span></div>
      <div class="kana-table">${rows.map(r => r.map(cell).join('')).join('')}</div>
      <h3 style="margin-top:24px">Dakuten ゛ e handakuten ゜</h3><div class="kana-table">${dak.map(cell).join('')}</div>
      <h3 style="margin-top:24px">Combinações (yōon)</h3><div class="kana-table" style="grid-template-columns:repeat(3,1fr)">${you.map(cell).join('')}</div>
      ${set === 'katakana' ? `<h3 style="margin-top:24px">Sons estrangeiros</h3><div class="kana-table" style="grid-template-columns:repeat(3,1fr)">${KANA_EXTRA.map(cell).join('')}</div>` : ''}`;
    $$('[data-go]').forEach(b => b.onclick = () => go(b.dataset.go.slice(1)));
    const all = rows.flat().filter(Boolean);
    app.onclick = e => {
      const c = e.target.closest('.kana-cell[data-k]'); if (!c) return;
      const a = all.concat(dak, you, KANA_EXTRA).find(x => x[0] === c.dataset.k); if (!a) return;
      let info = '';
      if (a.length >= 6) info = `<div>💡 ${esc(a[2])}</div><div class="jp">${a[5]} ${esc(a[3])} = ${esc(a[4])}</div>`;
      else if (a.length === 5) info = `<div class="jp">${a[4]} ${esc(a[2])} = ${esc(a[3])}</div>`;
      $('#kinfo').innerHTML = `<div class="row"><span class="jp" style="font-size:54px;line-height:1">${esc(a[0])}</span><div class="grow"><b style="font-size:20px">${esc(a[1])}</b>${info}</div></div>`;
    };
    const basic = all.filter(a => a.length >= 6).map(a => kanaItem(a, set));
    $('#drill').onclick = () => {
      const its = pick(basic, 15);
      startSession({ exercises: its.map(it => ({ type: ['mc', 'listen', 'type'][Math.floor(Math.random() * 3)], item: it, key: it.key, dir: 'jp2pt' })), grade: true, baseXP: 5, onExit: () => go('/kana/' + which) });
    };
    $('#drill-w').onclick = () => startSession({ exercises: pick(basic, 8).map(it => ({ type: 'write', item: it })), baseXP: 5, onExit: () => go('/kana/' + which) });
  });

  // ---------- Treinar (fala, escuta, escrita, leitura) ----------
  function doneLessons() { const d = LESSONS.filter(isDone); return d.length ? d : LESSONS.slice(0, 3); }
  route(/^\/train$/, () => {
    setTab('train');
    const dl = doneLessons(), sents = dl.flatMap(lessonSentences), kanji = dl.flatMap(lessonKanji);
    const dialogs = dl.filter(l => l.dialogue), readings = LESSONS.filter(l => l.reading && isUnlocked(l));
    app.innerHTML = `<h1>🎙️ Treinar</h1><p class="muted">Pratique com o conteúdo das aulas que você já fez.</p>
      ${!SR ? `<div class="warn">Seu navegador não tem reconhecimento de voz. No Chrome/Edge (com internet) o app corrige sua pronúncia; aqui você pode gravar e comparar.</div>` : ''}
      <button class="list-link" id="t-shadow"><span class="ic">🗣️</span><span class="grow"><b>Shadowing</b><small>Ouça, repita junto e receba nota de pronúncia</small></span>›</button>
      <button class="list-link" id="t-dict"><span class="ic">👂</span><span class="grow"><b>Ditado</b><small>Ouça a frase e escreva em kana ou romaji</small></span>›</button>
      <button class="list-link" id="t-build"><span class="ic">🧩</span><span class="grow"><b>Montar frases</b><small>Ouvir e montar frases com blocos</small></span>›</button>
      <button class="list-link" id="t-write"><span class="ic">✍️</span><span class="grow"><b>Escrita à mão</b><small>${kanji.length ? kanji.length + ' kanji das suas aulas' : 'Kanji e kana'}</small></span>›</button>
      <h3 style="margin-top:22px">🎭 Conversação (role-play)</h3>
      ${dialogs.map(l => `<a class="list-link" href="#/rp/${l.id}"><span class="ic">${l.icon}</span><span class="grow"><b>${esc(l.title)}</b><small>${l.dialogue.length} falas</small></span>›</a>`).join('') || '<p class="muted">Complete aulas para liberar diálogos.</p>'}
      <h3 style="margin-top:22px">📖 Leituras</h3>
      ${readings.map(l => `<a class="list-link" href="#/l/${l.id}"><span class="ic">📰</span><span class="grow"><b class="jp">${jp(l.reading.title)}</b><small>${esc(l.module.level)}</small></span>›</a>`).join('') || '<p class="muted">As leituras aparecem conforme você avança.</p>'}
      <h3 style="margin-top:22px">🌐 Recursos gratuitos recomendados</h3>
      ${RESOURCES.map(r => `<a class="list-link" href="${r[2]}" target="_blank" rel="noopener"><span class="ic">${r[0]}</span><span class="grow"><b>${esc(r[1])}</b><small>${esc(r[3])}</small></span>↗</a>`).join('')}`;
    const back = () => go('/train');
    $('#t-shadow').onclick = () => sents.length && startSession({ exercises: pick(sents, 8).map(s => ({ type: 'speak', s })), grade: false, baseXP: 10, onExit: back });
    $('#t-dict').onclick = () => sents.length && startSession({ exercises: pick(sents, 8).map(s => ({ type: 'dictation', s })), grade: false, baseXP: 10, onExit: back });
    $('#t-build').onclick = () => sents.length && startSession({ exercises: pick(sents, 8).map(s => ({ type: 'build', s, pool: sents, listen: Math.random() < 0.5 })), grade: false, baseXP: 10, onExit: back });
    $('#t-write').onclick = () => {
      const pool = kanji.length ? kanji : globalPool().filter(i => i.isKana && i.mn);
      startSession({ exercises: pick(pool, 8).map(it => ({ type: 'write', item: it })), grade: false, baseXP: 8, onExit: back });
    };
  });
  const RESOURCES = [
    ['🏯', 'JF Japanese e-Learning Minato', 'https://minato-jf.jp/', 'Cursos gratuitos da Fundação Japão (Marugoto A1–B1)'],
    ['🎨', 'Irodori (Fundação Japão)', 'https://www.irodori.jpf.go.jp/', 'Livros e áudios grátis, japonês para a vida real (A1–A2)'],
    ['🍙', 'Marugoto', 'https://www.marugoto.org/', 'Material oficial e áudios do curso Marugoto'],
    ['📰', 'NHK News Web Easy', 'https://www3.nhk.or.jp/news/easy/', 'Notícias em japonês fácil com furigana e áudio'],
    ['📻', 'NHK World — Easy Japanese', 'https://www3.nhk.or.jp/nhkworld/lesson/pt/', 'Curso gratuito em português'],
    ['📘', 'Tae Kim — Guia de gramática', 'https://guidetojapanese.org/learn/', 'Referência de gramática gratuita'],
    ['📚', 'Tadoku — leitura graduada', 'https://tadoku.org/japanese/en/free-books-en/', 'Livrinhos grátis por nível'],
    ['🏛️', 'Aozora Bunko', 'https://www.aozora.gr.jp/', 'Literatura japonesa clássica gratuita'],
    ['🔎', 'Jisho', 'https://jisho.org/', 'Dicionário japonês–inglês com kanji e exemplos'],
    ['🎧', 'Nihongo con Teppei', 'https://nihongoconteppei.com/', 'Podcast de japonês para iniciantes e intermediários']
  ];

  // ---------- Role-play ----------
  route(/^\/rp\/(\w+)$/, id => {
    const l = LESSON[id]; if (!l || !l.dialogue) return go('/train');
    setTab('train');
    const roles = [...new Set(l.dialogue.map(d => d[0]))];
    let me = roles[1] || roles[0], i = 0, hide = false;
    const render = () => {
      app.innerHTML = `<a href="#/l/${id}" class="muted" style="text-decoration:none">‹ ${esc(l.title)}</a><h1>🎭 Role-play</h1>
        <div class="row"><span>Seu papel:</span><div class="seg">${roles.map(r => `<button class="${r === me ? 'on' : ''}" data-r="${esc(r)}">${jp(r)}</button>`).join('')}</div>
        <label class="row" style="gap:6px"><input type="checkbox" id="hide" ${hide ? 'checked' : ''}> esconder minhas falas</label></div>
        <div class="card" id="rp"></div><div class="row"><button class="btn ghost" id="restart">Recomeçar</button><span class="grow"></span><button class="btn" id="nx">Próxima ▶</button></div>`;
      $$('[data-r]').forEach(b => b.onclick = () => { me = b.dataset.r; i = 0; render(); });
      $('#hide').onchange = e => { hide = e.target.checked; draw(); };
      $('#restart').onclick = () => { i = 0; draw(); };
      $('#nx').onclick = step;
      draw();
    };
    const draw = () => {
      const rp = $('#rp');
      rp.innerHTML = l.dialogue.slice(0, i + 1).map((d, k) => {
        const mine = d[0] === me, show = !mine || !hide || k < i;
        return `<div class="dialog-line ${mine ? 'me' : ''}"><span class="who">${jp(d[0])}</span><div class="bub">${show ? `<div class="jp" style="font-size:18px">${jp(d[1])}</div>` : `<div class="muted">(sua vez — fale em japonês)</div>`}<div class="muted" style="font-size:13px">${esc(d[2])}</div>
          ${mine && k === i ? `<div class="row" style="margin-top:8px"><button class="mic" style="width:56px;height:56px;font-size:24px" id="rpmic">🎤</button>${speakBtn(d[1])}<span id="rph" class="heard"></span></div>` : ''}</div></div>`;
      }).join('');
      const d = l.dialogue[i];
      if (d[0] !== me) speak(d[1]);
      const mic = $('#rpmic');
      if (mic) mic.onclick = async () => {
        const out = $('#rph');
        if (SR && navigator.onLine) {
          mic.classList.add('rec');
          try { const alts = await recognize(); const { score, heard } = speechScore(d[1], alts); out.innerHTML = `${esc(heard)} · <b>${Math.round(score * 100)}%</b> ${score >= 0.6 ? '✅' : '🔁'}`; if (score >= 0.6) beep('ok'); }
          catch (e) { out.textContent = 'Use a gravação.'; }
          mic.classList.remove('rec');
        } else recordVoice(mic, url => { out.innerHTML = `<audio controls src="${url}"></audio>`; });
      };
    };
    const step = () => { if (i < l.dialogue.length - 1) { i++; draw(); } else { addXP(10); beep('win'); toast('Diálogo concluído! +10 XP'); i = 0; draw(); } };
    render();
  });

  // ---------- Perfil e configurações ----------
  route(/^\/profile$/, () => {
    setTab('profile');
    const done = LESSONS.filter(isDone).length, words = Object.keys(S.srs).filter(k => k[0] === 'v').length;
    const kanaN = Object.keys(S.srs).filter(k => k[0] === 'k').length, kanjiN = Object.keys(S.srs).filter(k => k[0] === 'j').length;
    let heat = '';
    for (let i = 29; i >= 0; i--) { const v = S.days[todayKey(new Date(Date.now() - i * DAY))] || 0; heat += `<i class="${v >= S.goal ? 'l3' : v >= S.goal / 2 ? 'l2' : v > 0 ? 'l1' : ''}" title="${v} XP"></i>`; }
    const level = nextLesson().module.level;
    const voices = jaVoices.map(v => `<option ${v.name === S.settings.voice ? 'selected' : ''}>${esc(v.name)}</option>`).join('');
    const sw = (k, label, sub) => `<div class="setting"><span>${label}${sub ? `<br><small class="muted">${sub}</small>` : ''}</span><label class="switch"><input type="checkbox" data-set="${k}" ${S.settings[k] ? 'checked' : ''}><span></span></label></div>`;
    app.innerHTML = `<h1>👤 Perfil</h1>
      <div class="statgrid"><div class="statbox">🔥<b>${currentStreak()}</b>${currentStreak() === 1 ? 'dia seguido' : 'dias seguidos'}</div><div class="statbox">⚡<b>${S.xp}</b>XP total</div><div class="statbox">🎓<b>${done}/${LESSONS.length}</b>aulas</div>
      <div class="statbox">📚<b>${words}</b>palavras</div><div class="statbox">あ<b>${kanaN}</b>kana</div><div class="statbox">🈶<b>${kanjiN}</b>kanji</div></div>
      <div class="card"><h3>Nível atual: ${level}</h3><p class="muted" style="margin-top:0">Últimos 30 dias</p><div class="heat">${heat}</div></div>
      <div class="card"><h3>⚙️ Configurações</h3>
        <div class="setting"><span>Meta diária</span><select id="goal">${[10, 20, 30, 50, 80].map(g => `<option value="${g}" ${S.goal === g ? 'selected' : ''}>${g} XP — ${g <= 10 ? 'leve' : g <= 30 ? 'regular' : g <= 50 ? 'sério' : 'intenso'}</option>`).join('')}</select></div>
        ${sw('furigana', 'Mostrar furigana', 'leitura em cima dos kanji')}
        ${sw('romaji', 'Mostrar romaji', 'recomendado só no começo')}
        ${sw('sound', 'Efeitos sonoros')}
        ${sw('unlockAll', 'Desbloquear todas as aulas', 'para quem já sabe parte do conteúdo')}
        <div class="setting"><span>Tema</span><select id="theme"><option value="auto">Automático</option><option value="light">Claro</option><option value="dark">Escuro</option></select></div>
        <div class="setting"><span>Voz japonesa</span><select id="voice"><option value="">Automática</option>${voices}</select></div>
        <div class="setting"><span>Velocidade da voz</span><input type="range" id="rate" min="0.5" max="1.3" step="0.05" value="${S.settings.rate}"></div>
        <div class="setting"><span></span><button class="btn small blue" data-say="こんにちは。日本語の勉強、がんばりましょう！">🔊 Testar voz</button></div>
        ${jaVoices.length ? '' : `<div class="warn"><b>Nenhuma voz japonesa encontrada.</b> Para ouvir os áudios mesmo offline: <br>• <b>Windows</b>: Configurações → Hora e idioma → Fala → Adicionar vozes → Japonês.<br>• <b>Android</b>: Configurações → Idioma → Saída de texto para fala → Google → instalar dados de voz em japonês.<br>• <b>iPhone</b>: Ajustes → Acessibilidade → Conteúdo Falado → Vozes → Japonês.<br>No Chrome/Edge com internet, vozes online também funcionam.</div>`}
      </div>
      <div class="card"><h3>💾 Seus dados</h3><p class="muted" style="margin-top:0">O progresso fica salvo neste aparelho e funciona offline. Faça backup para levar a outro celular/computador.</p>
        <div class="row"><button class="btn small" id="exp">Exportar backup</button><label class="btn small blue" style="cursor:pointer">Importar backup<input type="file" id="imp" accept=".json,application/json" hidden></label>
        <button class="btn small ghost" id="upd">Verificar atualização</button><button class="btn small ghost" id="inst" hidden>📲 Instalar app</button></div>
        <p style="margin-bottom:0"><button class="btn small red" id="reset">Apagar progresso</button></p></div>
      <div class="card"><h3>Sobre</h3><p class="muted" style="margin:0">Michi 道 v${APP_VERSION}. Trilha inspirada na progressão do Marugoto/Minato (Fundação Japão), Irodori e no método por tipos de frase. Vídeos pertencem aos seus criadores no YouTube. Áudio gerado pela voz japonesa do seu aparelho. Todo o conteúdo funciona sem internet, exceto os vídeos e o reconhecimento de voz online.</p></div>`;
    $('#theme').value = S.settings.theme;
    $('#goal').onchange = e => { S.goal = +e.target.value; save(); updateTop(); };
    $$('[data-set]').forEach(c => c.onchange = () => { S.settings[c.dataset.set] = c.checked; save(); applySettings(); });
    $('#theme').onchange = e => { S.settings.theme = e.target.value; save(); applySettings(); };
    $('#voice').onchange = e => { S.settings.voice = e.target.value; save(); };
    $('#rate').onchange = e => { S.settings.rate = +e.target.value; save(); };
    $('#exp').onclick = () => {
      const blob = new Blob([JSON.stringify(S, null, 1)], { type: 'application/json' });
      const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = `michi-backup-${todayKey()}.json`; a.click(); toast('Backup exportado.');
    };
    $('#imp').onchange = e => {
      const f = e.target.files[0]; if (!f) return;
      f.text().then(t => { const d = JSON.parse(t); if (!d || typeof d.xp !== 'number' || !d.srs) throw 0; localStorage.setItem(STORE, JSON.stringify(d)); load(); applySettings(); updateTop(); toast('Backup importado!'); router(); })
        .catch(() => toast('Arquivo de backup inválido.'));
    };
    $('#reset').onclick = () => { if (confirm('Apagar TODO o progresso? Isso não pode ser desfeito.') && confirm('Tem certeza? Exporte um backup antes, se quiser.')) { localStorage.removeItem(STORE); load(); save(); updateTop(); go('/'); location.reload(); } };
    $('#upd').onclick = checkUpdate;
    if (deferredInstall) { $('#inst').hidden = false; $('#inst').onclick = () => { deferredInstall.prompt(); deferredInstall = null; $('#inst').hidden = true; }; }
  });

  // ---------- Boas-vindas ----------
  function onboarding() {
    const starts = [['Do zero absoluto', 'Nunca estudei japonês', 0], ['Já sei hiragana e katakana', 'Começar pelos kanji e frases', LESSON.m0l8.index], ['Já tenho o básico (N5)', 'Começar pelo Módulo A2', LESSON.m2l1.index], ['Sou intermediário (N4)', 'Começar pelo Módulo B1', LESSON.m3l1.index]];
    const el = document.createElement('div'); el.className = 'modal-back';
    el.innerHTML = `<div class="modal"><div class="center"><div style="font-size:60px">⛩️</div><h2>ようこそ！ Bem-vindo(a) ao Michi</h2>
      <p class="muted">Seu caminho (道) do zero ao japonês avançado: fala, escuta, leitura e escrita. Tudo funciona offline e fica salvo no seu aparelho.</p></div>
      <h3>Qual é o seu nível?</h3><div class="opt-list">${starts.map((s, i) => `<button class="list-link" data-s="${s[2]}"><span class="ic">${['🌱', 'あ', '🌸', '🎋'][i]}</span><span class="grow"><b>${s[0]}</b><small>${s[1]}</small></span></button>`).join('')}</div></div>`;
    document.body.appendChild(el);
    el.addEventListener('click', function pickStart(e) {
      const b = e.target.closest('[data-s]'); if (!b) return;
      el.removeEventListener('click', pickStart);
      S.startAt = +b.dataset.s;
      el.querySelector('.modal').innerHTML = `<h3>Meta diária</h3><p class="muted">Quanto tempo por dia? Constância vence intensidade.</p><div class="opt-list">${[[10, '5 min', 'Leve'], [20, '10 min', 'Regular'], [30, '15–20 min', 'Sério'], [50, '30+ min', 'Intenso']].map(g => `<button class="list-link" data-g="${g[0]}"><span class="ic">🎯</span><span class="grow"><b>${g[2]} · ${g[0]} XP/dia</b><small>${g[1]} por dia</small></span></button>`).join('')}</div>`;
      el.querySelector('.modal').onclick = ev => {
        const g = ev.target.closest('[data-g]'); if (!g) return;
        S.goal = +g.dataset.g; S.onboarded = true; save(); el.remove(); updateTop(); router();
        if (navigator.storage && navigator.storage.persist) navigator.storage.persist();
      };
    });
  }

  // ---------- Offline / atualizações (Service Worker) ----------
  let swReg = null, deferredInstall = null;
  window.addEventListener('beforeinstallprompt', e => { e.preventDefault(); deferredInstall = e; });
  // Atualização automática: a versão nova é instalada em segundo plano e aplicada sozinha,
  // sem aviso e sem interromper uma prática em andamento (o progresso fica no localStorage).
  function applyUpdate(w) { if (w) w.postMessage('skipWaiting'); }
  function checkUpdate() {
    if (!swReg) { toast(location.protocol === 'file:' ? 'Abra pelo endereço http(s) para atualizações offline.' : 'Atualizações indisponíveis neste navegador.'); return; }
    if (!navigator.onLine) { toast('Sem internet: tente mais tarde.'); return; }
    swReg.update().then(() => { const w = swReg.waiting || swReg.installing; if (w) { toast('Atualizando…'); applyUpdate(swReg.waiting); } else toast('Você já está na versão mais recente (v' + APP_VERSION + ').'); });
  }
  if ('serviceWorker' in navigator && location.protocol !== 'file:') {
    navigator.serviceWorker.register('sw.js').then(reg => {
      swReg = reg;
      applyUpdate(reg.waiting);
      reg.addEventListener('updatefound', () => {
        const w = reg.installing;
        w.addEventListener('statechange', () => {
          if (w.state === 'installed') { if (navigator.serviceWorker.controller) applyUpdate(w); else toast('Pronto! O Michi agora funciona offline.'); }
        });
      });
      setInterval(() => navigator.onLine && reg.update(), 60 * 60000);
    }).catch(() => {});
    const hadController = !!navigator.serviceWorker.controller;
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (!hadController) return;
      if (document.body.classList.contains('in-session')) router.reloadLater = true; else location.reload();
    });
  }
  window.addEventListener('online', () => toast('Conectado à internet.'));
  window.addEventListener('offline', () => toast('Modo offline: suas aulas continuam funcionando.'));

  // ---------- Início ----------
  load(); applySettings(); updateTop();
  router();
  if (!S.onboarded) onboarding();
})();
