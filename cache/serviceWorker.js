
self.addEventListener('install', e => {
    e.waitUntil(
        caches.open('cache-name-4').then(function(cache) {
            return cache.addAll([
                '/',
                '/cache/index.html',
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