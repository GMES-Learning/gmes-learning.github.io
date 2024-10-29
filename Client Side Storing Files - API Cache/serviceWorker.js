
self.addEventListener('install', e => {
    e.waitUntil(
        caches.open('cache-name-3').then(function(cache) {
            return cache.addAll([
                '/',
                '/index.html',
                '/cache/style.css',
                '/cache/script.js'
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