const CACHE_NAME = "pcep-master-cache-v1";
const ASSETS = [
  "index.html",
  "style.css",
  "app.js",
  "questions_db.js",
  "modules_db.js",
  "manifest.json"
];

// Instalar Service Worker y almacenar recursos en caché
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log("Service Worker: Caching de recursos estáticos...");
      return cache.addAll(ASSETS);
    })
  );
});

// Activar Service Worker y limpiar cachés antiguas
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            console.log("Service Worker: Limpiando caché antigua...");
            return caches.delete(key);
          }
        })
      );
    })
  );
});

// Interceptar peticiones y servir desde caché si está disponible
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      // Retornar recurso cacheado o realizar fetch de red
      return cachedResponse || fetch(event.request);
    })
  );
});
