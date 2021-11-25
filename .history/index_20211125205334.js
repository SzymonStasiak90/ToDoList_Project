// Utworzenie serwera
const express = require('express');
const { port } = require('./config');
const app = express();

// Zaczytanie pliku konfiguracyjnego
const config = require('./config')





app.get('/', function(request, response) {
    response.send('Serwer Dziala!')
});


app.listen(port, function() {
    console.log('serwer slucha... http://localhost:'+ port);
});