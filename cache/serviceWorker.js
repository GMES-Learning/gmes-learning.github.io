
self.addEventListener('install', e => {
    e.waitUntil(
        caches.open('cache-name').then(function(cache) {
            return cache.addAll([
                '/',
                '/cache/index.html',
                '/cache/example.css',
                '/cache/example.js'
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