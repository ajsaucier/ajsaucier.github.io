const version = 'V0.20';
const staticCacheName =  version + 'staticfiles';
const pagesCacheName = 'pages';
const cacheList = [
  staticCacheName,
  pagesCacheName
];

addEventListener('install', installEvent => {
    skipWaiting();
    installEvent.waitUntil(
        caches.open(staticCacheName)
        .then( staticCache => {
            return staticCache.addAll([
                '/random-workout/girl.png',
                '/random-workout/main.css',
                '/random-workout/main.js',
                '/random-workout/workouts.json',
                '/offline.html'
            ]);
        })
    );
});

addEventListener('activate', activateEvent => {
    activateEvent.waitUntil(
      caches.keys()
      .then( cacheNames => {
        return Promise.all(
          cacheNames.map( cacheName => {
            if (!cacheList.includes(cacheName)) {
              return caches.delete(cacheName);
            }
          }) // end map
        ); // end return Promise.all
      }) // end keys then
      .then( () => {
        return clients.claim();
      }) // end then
    ); // end waitUntil
  }); // end addEventListener

addEventListener('fetch', fetchEvent => {
    const request = fetchEvent.request;
    // When the user requests an HTML file
    if (request.headers.get('Accept').includes('text/html')) {
        fetchEvent.respondWith(
        // Fetch that page from the network
        fetch(request)
        .then( responseFromFetch => {
          // Put a copy in the cache
          const copy = responseFromFetch.clone();
          fetchEvent.waitUntil(
            caches.open(pagesCacheName)
            .then( pagesCache => {
              return pagesCache.put(request, copy);
            })
          );
          return responseFromFetch;
        })
        .catch( error => {
          return caches.match(request)
          .then( responseFromCache => {
            if (responseFromCache) {
              return responseFromCache;
            }
            return caches.match('/offline.html');
          });
        })
      ); // end respondWith
      return; // Go no further
    } // end if
    // When the user requests an image
    if (request.headers.get('Accept').includes('image')) {
      fetchEvent.respondWith(
        // Look for a cached version of the image
        caches.match(request)
        .then( responseFromCache => {
          if (responseFromCache) {
            return responseFromCache;
        } // end if
          // Otherwise fetch the image from the network
          return fetch(request)
        .then( responseFromFetch => {
            // Put a copy in the cache
            const copy = responseFromFetch.clone();
            fetchEvent.waitUntil(
              caches.open(imageCacheName)
              .then( imageCache => {
                return imageCache.put(request, copy);
              }) // end open then
            ); // end waitUntil
            return responseFromFetch;
          }); // end fetch then and return
        }) // end match then
      ); // end respondWith
      return; // Go no further
    } // end if
    // For everything else...
    fetchEvent.respondWith(
      // Look for a cached version of the file
      caches.match(request)
      .then( responseFromCache => {
        if (responseFromCache) {
          return responseFromCache;
        } // end if
        // Otherwise fetch the file from the network
        return fetch(request);
      }) // end match then
    ); // end respondWith
  }); // end addEventListener