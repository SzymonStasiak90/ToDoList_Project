// API routing
const express = require('express');
const router = express.Router();

// zaczytanie pliku z controlers test
const testActions = require('../controlers/test');


// uzycie funkcji z pliku controlers test
router.get('/', testActions.homepage)

// export poza plik
module.exports = router;