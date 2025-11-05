const CACHE_NAME = "app-cache-v2";
const ASSETS_TO_CACHE = ["/index.html", "/agn514/agn514.html", "/crp511/crp511.html", "/not yet available page/not-available.html", "/offline/offline.html", "/agn514/script.js", "/agn514/style.css", "/crp511/script.js", "/crp511/style.css", "/crp515/crp515.html", "/crp515/script.js", "/crp515/style.css"];

// Install service worker and cache essential assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Caching essential assets");
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// Intercept fetch requests
self.addEventListener("fetch", (event) => {
  const { request } = event;

  // Ignore non-HTTP(S) requests (like extensions or data URIs)
  if (!request.url.startsWith("http")) return;

  event.respondWith(
    fetch(request)
      .then((response) => {
        // Cache a copy of valid responses
        if (response && response.status === 200 && response.type === "basic") {
          const cloned = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, cloned));
        }
        return response;
      })
      .catch(() => {
        // If offline, try cached version or offline page
        return caches.match(request).then((cached) => cached || caches.match("./offlin/offline.html"));
      })
  );
});

// Activate and clean up old caches
self.addEventListener("activate", (event) => {
  const allowedCaches = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((names) =>
      Promise.all(
        names.map((name) => {
          if (!allowedCaches.includes(name)) {
            console.log(`Deleting old cache: ${name}`);
            return caches.delete(name);
          }
        })
      )
    )
  );
  self.clients.claim();
});
