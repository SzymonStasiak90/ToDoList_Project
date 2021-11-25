// Utworzenie serwera
const express = require('express')
const app = express();

app.get('/', function(request, response) {
    response.send('Serwer Dziala!')
});