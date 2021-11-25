// Utworzenie serwera
const express = require('express');
const app = express();

// Zaczytanie portu z pliku konfiguracyjnego
const { port } = require('./config');

// Zaczytanie pliku route
const apiRouter = require('./routes/api');

// zaczytanie pliku controlers test
const testActions = require('./routes/api');





app.use('/', apiRouter);

app.listen(port, function() {
    console.log('serwer slucha... http://localhost:'+ port);
});