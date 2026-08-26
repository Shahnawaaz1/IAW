const CACHE_VERSION = "iaw-force-pwa-v2";
const SHELL_CACHE = `${CACHE_VERSION}-shell`;
const ASSETS_CACHE = `${CACHE_VERSION}-assets`;
const IMAGES_CACHE = `${CACHE_VERSION}-images`;
const FONTS_CACHE = `${CACHE_VERSION}-fonts`;

const STATIC_SHELL_FILES = [
  "/",
  "/manifest.json",
  "/favicon.svg",
  "/robots.txt"
];

// 1. Install: Pre-cache App Shell files and activate immediately
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(SHELL_CACHE).then((cache) => {
      return cache.addAll(STATIC_SHELL_FILES).catch((err) => {
        console.warn("Pre-caching shell assets warning:", err);
      });
    }).then(() => self.skipWaiting())
  );
});

// 2. Activate: Purge old cache versions and claim clients immediately
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (!key.startsWith(CACHE_VERSION)) {
            console.log("Purging legacy cache:", key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// 3. Fetch: Starbucks-style offline-first multi-tiered caching
self.addEventListener("fetch", (event) => {
  const request = event.request;

  // Only intercept GET requests
  if (request.method !== "GET") return;

  const url = new URL(request.url);

  // Bypass large video streams (range requests)
  if (url.pathname.endsWith(".mp4") || request.headers.get("range")) {
    return;
  }

  // A. Navigation (HTML Pages) -> Network-first with instant offline cache fallback
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const copy = networkResponse.clone();
            caches.open(SHELL_CACHE).then((cache) => cache.put(request, copy));
          }
          return networkResponse;
        })
        .catch(async () => {
          // Offline: match exact page or fallback to main SPA shell
          const cachedPage = await caches.match(request);
          if (cachedPage) return cachedPage;
          const shell = await caches.match("/");
          return shell || new Response("Offline - Please reconnect to access new pages.", {
            status: 200,
            headers: { "Content-Type": "text/html" }
          });
        })
    );
    return;
  }

  // B. Google Fonts -> Cache-First
  if (url.origin === "https://fonts.googleapis.com" || url.origin === "https://fonts.gstatic.com") {
    event.respondWith(
      caches.open(FONTS_CACHE).then(async (cache) => {
        const cached = await cache.match(request);
        if (cached) return cached;
        try {
          const networkResponse = await fetch(request);
          if (networkResponse && networkResponse.status === 200) {
            cache.put(request, networkResponse.clone());
          }
          return networkResponse;
        } catch (e) {
          return cached;
        }
      })
    );
    return;
  }

  // C. Images & Icons -> Cache-First with background revalidation
  if (
    request.destination === "image" ||
    /\.(png|jpg|jpeg|svg|webp|ico|avif)$/i.test(url.pathname)
  ) {
    event.respondWith(
      caches.open(IMAGES_CACHE).then(async (cache) => {
        const cached = await cache.match(request);
        const fetchPromise = fetch(request)
          .then((networkResponse) => {
            if (networkResponse && (networkResponse.status === 200 || networkResponse.type === "opaque")) {
              cache.put(request, networkResponse.clone());
            }
            return networkResponse;
          })
          .catch(() => cached);

        return cached || fetchPromise;
      })
    );
    return;
  }

  // D. JS, CSS, Scripts & Build Assets -> Stale-While-Revalidate
  event.respondWith(
    caches.open(ASSETS_CACHE).then(async (cache) => {
      const cached = await cache.match(request);
      const fetchPromise = fetch(request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            cache.put(request, networkResponse.clone());
          }
          return networkResponse;
        })
        .catch(() => cached);

      return cached || fetchPromise;
    })
  );
});
