// Utworzenie serwera
const express = require('express')
const app = express();

// Zaczytanie pliku konfiguracyjnego
const config = require('./config')

app.get('/', function(request, response) {
    response.send('Serwer Dziala!')
});


app.listen(3000, function() {
    console.log('serwer slucha... http://localhost:3000');
});