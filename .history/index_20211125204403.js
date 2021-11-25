// Utworzenie serwera
const express = require('express')
const app = express();


app.get('/', function(request, response) {
    response.send('Serwer Dziala!')
});


app.listen(3000, function() {
    console.log('serwer slucha...')
})