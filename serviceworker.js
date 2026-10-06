const CACHE_NAME = 'coffe-pwa-v2';

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

// Evento de instalación
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache);
            })
            .catch(error => {
                console.error('Error al cachear archivos:', error);
            })
    );
});

// Evento de activación
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// Evento Fetch
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
    );
});