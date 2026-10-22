/* Service worker: tiene in cache la pagina e le librerie, così l'app si apre anche senza connessione.
   Quando cambi index.html, aumenta VERSION per far scaricare la nuova versione. */
const VERSION = "dinamometria-v1.3";
const CORE = ["./", "index.html", "manifest.webmanifest", "icons/app-192.png", "icons/app-512.png",
  "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
/* Pagina: prima la rete (versione aggiornata), poi la cache se sei offline. Resto: prima la cache. */
self.addEventListener("fetch", e => {
  const req = e.request;
  if(req.method !== "GET") return;
  if(req.mode === "navigate"){
    /* in cache va solo la pagina dell'app, e solo se è arrivata bene (mai una pagina 404 o un'altra pagina del sito) */
    const home = new URL("./", self.registration.scope).href, u = new URL(req.url), page = u.origin + u.pathname;
    const isApp = page === home || page === home + "index.html";
    e.respondWith(fetch(req).then(r => { if(isApp && r.ok){ const copy = r.clone(); caches.open(VERSION).then(c => c.put("index.html", copy)); } return r; })
      .catch(() => caches.match("index.html")));
    return;
  }
  e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(r => {
    if(r.ok || r.type === "opaque"){ const copy = r.clone(); caches.open(VERSION).then(c => c.put(req, copy)); }
    return r;
  })));
});
