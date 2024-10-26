
self.addEventListener('install', e => {
    e.waitUntil(
        caches.open('cache-name').then(function(cache) {
            return cache.addAll([
                '/Client Side Storing Files - API Cache/',
                '/Client Side Storing Files - API Cache/index.html',
                '/Client Side Storing Files - API Cache/ex_cache.css',
                '/Client Side Storing Files - API Cache/ex_cache.js'
            ])
        })
    )
})
   
self.addEventListener('fetch', e => {

    console.log(e.request.url)

    e.respondWith(
        caches.match(e.request).then(response => response || fetch(e.request))
    )
})
