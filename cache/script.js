
var h1 = document.querySelector('h1')

h1.textContent = 'Cache Example'


if('serviceWorker' in navigator) {

    navigator.serviceWorker
        .register('/serviceWorker.js')
        .then(function() { console.log('Service Worker Registrado!') })
}