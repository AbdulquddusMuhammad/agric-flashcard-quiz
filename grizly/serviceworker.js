const CACHE_NAME = "app-cache-v2";
const ASSETS_TO_CACHE = ["/index.html", "/agn514/agn514.html", "/crp511/crp511.html", "/not yet available page/not-available.html", "/offline/offline.html", "/agn514/script.js", "/agn514/style.css", "/crp511/script.js", "/crp511/style.css", "/crp515/crp515.html", "/crp515/script.js", "/crp515/style.css"];

// Install service worker and cache assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS_TO_CACHE))
      .catch((err) => console.error("Cache install failed:", err))
  );
  self.skipWaiting();
});

// Fetch requests handler
self.addEventListener("fetch", (event) => {
  const { request } = event;

  if (!request.url.startsWith("http")) return;

  event.respondWith(
    fetch(request)
      .then((response) => {
        if (response && response.status === 200 && response.type === "basic") {
          const cloned = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, cloned));
        }
        return response;
      })
      .catch(() => {
        return caches.match(request).then((cached) => {
          return cached || caches.match("/offline/offline.html");
        });
      })
  );
});

// Activate and clear old caches
self.addEventListener("activate", (event) => {
  const allowedCaches = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((names) =>
      Promise.all(
        names.map((name) => {
          if (!allowedCaches.includes(name)) {
            return caches.delete(name);
          }
        })
      )
    )
  );
  self.clients.claim();
});
