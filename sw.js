// Service Worker: deixa o Michi 100% offline e aplica atualizações quando você publicar uma versão nova.
// Para lançar uma atualização: altere VERSION (e APP_VERSION em js/app.js) e publique os arquivos.
const VERSION = 'michi-v1.1.0';
const FILES = [
  './', 'index.html', 'manifest.webmanifest', 'css/style.css',
  'js/romaji.js', 'js/kana-data.js', 'js/course-m0.js', 'js/course-m1.js', 'js/course-m2.js',
  'js/course-m3.js', 'js/course-m4.js', 'js/course-m5.js',
  'js/extra-kanji.js', 'js/extra-vocab.js', 'js/extra-situ.js', 'js/extra-stories.js', 'js/videos.js', 'js/app.js',
  'icons/icon.svg', 'icons/icon-192.png', 'icons/icon-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES.map(f => new Request(f, { cache: 'reload' })))));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION && k.startsWith('michi-')).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

self.addEventListener('message', e => { if (e.data === 'skipWaiting') self.skipWaiting(); });

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  // Miniaturas do YouTube: guarda as que já foram vistas para aparecerem offline
  if (url.hostname === 'i.ytimg.com') {
    e.respondWith(caches.open('michi-thumbs').then(c => c.match(req).then(hit => hit || fetch(req).then(res => { c.put(req, res.clone()); return res; }).catch(() => hit))));
    return;
  }
  if (url.origin !== location.origin) return;
  // Arquivos do app: cache primeiro (offline), rede como reserva
  e.respondWith(
    caches.match(req, { ignoreSearch: true }).then(hit => hit || fetch(req).then(res => {
      if (res.ok) { const copy = res.clone(); caches.open(VERSION).then(c => c.put(req, copy)); }
      return res;
    }).catch(() => req.mode === 'navigate' ? caches.match('index.html') : Response.error()))
  );
});
