
var h1 = document.querySelector('h1')

h1.textContent = 'Cache Example'

self.addEventListener('install', e => {
    
    console.log('ok')
})

// Registra o service worker para controlar o funcionamento do site offline:

if('serviceWorker' in navigator) {

    navigator.serviceWorker
        .register('/serviceWorker.js')
        .then(() => console.log('Service Worker Registrado!'))
}
