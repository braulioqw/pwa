
const CACHE_NAME = 'coffe-pwa-v4';

const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './css/style.css',
  './js/ap.js',

  './imagenes/coffe1.jpg.jpg',
  './imagenes/coff.jpg',
  './imagenes/coffe.jpg',
  './imagenes/coffe2.jpg.jpg',
  './imagenes/coffe3.jpg.jpg',
  './imagenes/coffe4.jpg.jpg',
  './imagenes/coffe5.jpg.jpg',
  './imagenes/coffe6.jpg.jpg',
  './imagenes/coffe7.jpg.jpg',
  './imagenes/coffe8.jpg.jpg',
  './imagenes/coffe9.jpg.jpg',
  './imagenes/coffe10.jpg.jpg',

  './imagenes/iconos/icon-72x72.png',
  './imagenes/iconos/icon-96x96.png',
  './imagenes/iconos/icon-128x128.png',
  './imagenes/iconos/icon-144x144.png',
  './imagenes/iconos/icon-152x152.png',
  './imagenes/iconos/icon-192x192.png',
  './imagenes/iconos/icon-384x384.png',
  './imagenes/iconos/icon-512x512.png'
];

// INSTALACIÓN: guarda los archivos disponibles en caché
self.addEventListener('install', event => {
  self.skipWaiting();

  event.waitUntil(
    caches.open(CACHE_NAME).then(async cache => {
      await Promise.all(
        urlsToCache.map(async url => {
          try {
            const response = await fetch(url);

            if (response.ok) {
              await cache.put(url, response);
            } else {
              console.warn('No se pudo guardar:', url);
            }
          } catch (error) {
            console.warn('Archivo no disponible:', url, error);
          }
        })
      );
    })
  );
});

// ACTIVACIÓN: elimina cachés antiguos
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(cacheNames =>
        Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== CACHE_NAME) {
              return caches.delete(cacheName);
            }
          })
        )
      )
      .then(() => self.clients.claim())
  );
});

// ESTRATEGIA 1: CACHE FIRST
// Primero busca en caché; si no existe, consulta la red.
async function cacheFirst(request) {
  const cachedResponse = await caches.match(request);

  if (cachedResponse) {
    return cachedResponse;
  }

  const networkResponse = await fetch(request);

  if (networkResponse.ok) {
    const cache = await caches.open(CACHE_NAME);
    await cache.put(request, networkResponse.clone());
  }

  return networkResponse;
}

// ESTRATEGIA 2: NETWORK FIRST
// Primero consulta la red; si falla, utiliza la caché.
async function networkFirst(request) {
  try {
    const networkResponse = await fetch(request);

    if (networkResponse.ok) {
      const cache = await caches.open(CACHE_NAME);
      await cache.put(request, networkResponse.clone());
    }

    return networkResponse;
  } catch (error) {
    const cachedResponse = await caches.match(request);

    if (cachedResponse) {
      return cachedResponse;
    }

    throw error;
  }
}

// FETCH: selecciona la estrategia y utiliza la otra como respaldo
self.addEventListener('fetch', event => {
  const request = event.request;

  // Solo manejar solicitudes GET del mismo origen.
  if (
    request.method !== 'GET' ||
    new URL(request.url).origin !== self.location.origin
  ) {
    return;
  }

  event.respondWith(
    (async () => {
      try {
        // HTML: NETWORK FIRST para intentar mostrar contenido actualizado.
        if (
          request.mode === 'navigate' ||
          request.destination === 'document'
        ) {
          return await networkFirst(request);
        }

        // CSS, JavaScript, imágenes e iconos: CACHE FIRST.
        return await cacheFirst(request);

      } catch (error) {
        // Si la estrategia principal falla, intenta la alternativa.
        try {
          if (
            request.mode === 'navigate' ||
            request.destination === 'document'
          ) {
            return await cacheFirst(request);
          }

          return await networkFirst(request);

        } catch (fallbackError) {
          // Último recurso: página principal guardada en caché.
          const offlinePage = await caches.match('./index.html');

          if (offlinePage) {
            return offlinePage;
          }

          return new Response(
            'No hay conexión y el contenido no está disponible sin conexión.',
            {
              status: 503,
              headers: {
                'Content-Type': 'text/plain; charset=utf-8'
              }
            }
          );
        }
      }
    })()
  );
});
