const CACHE_NAME = 'inventaire-v1.0.0';
const DYNAMIC_CACHE = 'inventaire-dynamic-v1.0.0';

// Fichiers à mettre en cache lors de l'installation
const urlsToCache = [
  '/',
  '/index.html',
  '/icon-192.png',
  '/icon-512.png',
  '/manifest.json',
  // CDN externes
  'https://unpkg.com/html5-qrcode',
  'https://cdn.jsdelivr.net/npm/jsbarcode@3.11.5/dist/JsBarcode.all.min.js',
  'https://cdn.jsdelivr.net/npm/exceljs/dist/exceljs.min.js',
  'https://cdn.jsdelivr.net/npm/file-saver@2.0.5/dist/FileSaver.min.js'
];

// Installation du Service Worker
self.addEventListener('install', event => {
  console.log('📦 Service Worker: Installation en cours...');
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('📦 Service Worker: Mise en cache des fichiers');
        return cache.addAll(urlsToCache);
      })
      .then(() => {
        console.log('✅ Service Worker: Installation réussie');
        return self.skipWaiting();
      })
      .catch(error => {
        console.error('❌ Service Worker: Erreur lors de l\'installation', error);
      })
  );
});

// Activation du Service Worker
self.addEventListener('activate', event => {
  console.log('🔄 Service Worker: Activation en cours...');
  
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          // Supprimer les anciens caches
          if (cacheName !== CACHE_NAME && cacheName !== DYNAMIC_CACHE) {
            console.log('🗑️ Service Worker: Suppression de l\'ancien cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('✅ Service Worker: Activation réussie');
      return self.clients.claim();
    })
  );
});

// Interception des requêtes
self.addEventListener('fetch', event => {
  // Ignorer les requêtes non-GET
  if (event.request.method !== 'GET') {
    return;
  }

  // Ignorer les requêtes vers des domaines externes (sauf CDN)
  const url = new URL(event.request.url);
  const trustedDomains = [
    'unpkg.com',
    'cdn.jsdelivr.net',
    'cdnjs.cloudflare.com'
  ];
  
  const isTrustedDomain = trustedDomains.some(domain => url.hostname.includes(domain));
  const isSameOrigin = url.origin === location.origin;
  
  if (!isSameOrigin && !isTrustedDomain) {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        // Si le fichier est en cache, le retourner
        if (cachedResponse) {
          console.log('📦 Cache hit:', event.request.url);
          return cachedResponse;
        }

        // Sinon, faire la requête réseau
        console.log('🌐 Network request:', event.request.url);
        return fetch(event.request)
          .then(response => {
            // Ne pas mettre en cache les réponses invalides
            if (!response || response.status !== 200 || response.type === 'error') {
              return response;
            }

            // Cloner la réponse
            const responseToCache = response.clone();

            // Mettre en cache dynamiquement
            caches.open(DYNAMIC_CACHE)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });

            return response;
          })
          .catch(error => {
            console.error('❌ Fetch error:', error);
            
            // Retourner une page hors ligne personnalisée si disponible
            return caches.match('/index.html');
          });
      })
  );
});

// Écouter les messages du client
self.addEventListener('message', event => {
  if (event.data && event.data.action === 'skipWaiting') {
    console.log('⏭️ Service Worker: Saut de l\'attente demandé');
    self.skipWaiting();
  }
});

// Synchronisation en arrière-plan (optionnel)
self.addEventListener('sync', event => {
  console.log('🔄 Background sync:', event.tag);
  
  if (event.tag === 'sync-inventory') {
    event.waitUntil(
      // Logique de synchronisation ici
      Promise.resolve()
    );
  }
});

// Notifications Push (optionnel)
self.addEventListener('push', event => {
  console.log('📬 Push notification reçue');
  
  const options = {
    body: event.data ? event.data.text() : 'Nouvelle notification',
    icon: '/icon-192.png',
    badge: '/icon-192.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    }
  };
  
  event.waitUntil(
    self.registration.showNotification('Gestion d\'Inventaire', options)
  );
});

// Gestion des clics sur les notifications
self.addEventListener('notificationclick', event => {
  console.log('🔔 Notification cliquée');
  event.notification.close();
  
  event.waitUntil(
    clients.openWindow('/')
  );
});