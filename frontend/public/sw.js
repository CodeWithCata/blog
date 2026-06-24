// File: public/sw.js

const CACHE_NAME = 'cwc-blog-cache-v1';

// Assets to cache immediately on install (Offline core)
const PRECACHE_ASSETS = [
  '/',
  '/manifest.json',
  '/favicon.ico',
];

// 1. Install Event: Prepare the cache
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_ASSETS);
    }).then(() => self.skipWaiting()) // Force activation immediately
  );
});

// 2. Activate Event: Clean up old caches if you update the version number
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('Service Worker: Clearing Old Cache');
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// 3. Fetch Event: Smart caching strategies
self.addEventListener('fetch', (event) => {
  const requestUrl = new URL(event.request.url);

  // Strategy A: Cache-First for Images and Web Fonts (They rarely change)
  if (
    event.request.destination === 'image' || 
    requestUrl.hostname.includes('strapiapp.com') || // Your Strapi Media CDN
    event.request.destination === 'font'
  ) {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        if (cachedResponse) return cachedResponse;

        return fetch(event.request).then((networkResponse) => {
          if (!networkResponse || networkResponse.status !== 200) return networkResponse;
          
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
          return networkResponse;
        });
      })
    );
    return;
  }

  // Strategy B: Network-First for HTML pages and API data
  // This guarantees readers get the latest Strapi posts if online, and cached posts if offline.
  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        // If successful, clone and save latest version to cache
        if (networkResponse.status === 200) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      })
      .catch(() => {
        // If network fails (Offline mode), look for it in the cache
        return caches.match(event.request).then((cachedResponse) => {
          if (cachedResponse) return cachedResponse;
          
          // Fallback if the specific page isn't cached at all
          if (event.request.headers.get('accept').includes('text/html')) {
            return caches.match('/');
          }
        });
      })
  );
});