
var h1 = document.querySelector('h1')

h1.textContent = 'Cache Example'

if('serviceWorker' in navigator) {
    
    // Atenção: Um service worker só pode controlar arquivos no mesmo diretório que ele e em subdiretórios.

    navigator.serviceWorker
        // O caminho do arquivo é relativo à origem do site.
        .register('/serviceWorker.js') 
        .then(() => console.log('Service Worker Registrado!'))
}



h1.addEventListener('click', function(evt) {

    const promise = 
    fetch('https://gmes-learning.github.io/dogs.json')

    console.log(promise)

    promise.then(function (response) {

        console.log(promise)
        console.log('Received response: '+ response.status)
    })
})