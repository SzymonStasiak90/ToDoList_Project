// API routing
const express = require('express');
const router = express.Router();

// zaczytanie pliku controlers test
const testActions = require('../controlers/test');



router.get('/', testActions.homepage)

// export poza plik
module.exports = router;