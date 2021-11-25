// API routing
const express = require('express');
const router = express.Router();


app.get('/', function(request, response) {
    response.send('Serwer Dziala!')
});