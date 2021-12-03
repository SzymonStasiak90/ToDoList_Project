// Utworzenie serwera
const express = require('express');
const app = express();

// Zaczytanie portu z pliku konfiguracyjnego
const { port } = require('./config');

// Zaczytanie pliku route
const apiRouter = require('./routes/api');

// Zaczytanie pliku bazdy danych
require('./data_base/mongoose');

// Zaczytanie biblioteki parser
const bodyParser = require('body-parser');

// parser Content-type: application/json
app.use(bodyParser.json());

// Routes
app.use('/api', apiRouter);

// Otwarcie portu serwera
app.listen(port, function() {
    console.log('serwer slucha... http://localhost:'+ port);
});