// API routing
const express = require('express');
const router = express.Router();


router.get('/', function(request, response) {
    response.send('Serwer Dziala!')
});

module.exports = router;