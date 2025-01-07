
// Arquivo da aplicação Cache

self.addEventListener('install', evt => {

    evt.waitUntil(
        caches.open('cache-name-60').then(function(cache) {
            return cache.addAll([
                
                // Os caminhos dos arquivos são relativos à origem do site.
                '/',
                '/index.html',
                '/cache/index.html',
                '/cache/style.css',
                '/cache/script.js'
            ])
        })
    )
})

self.addEventListener('fetch', evt => {

    console.log(evt.request.url) // URL da solicitação.

    evt.respondWith(
        // caches.match(evt.request).then(response => response || fetch(evt.request))
    
        caches.match(evt.request).then(
            
            response => {

                console.log('[response]')
                console.log(response) 
                console.log('----')
                return response || fetch(evt.request)
            }
        )
    )
})
