// API routing
const express = require('express');
const router = express.Router();

// zaczytanie pliku z controlers test
const noteActions = require('../controlers/notes');


// uzycie funkcji z pliku controlers test
router.get('/', noteActions.saveNote)

// export poza plik
module.exports = router;