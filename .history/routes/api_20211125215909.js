// API routing
const express = require('express');
const router = express.Router();

// zaczytanie pliku z controlers test
const notesActions = require('../controlers/test');


// uzycie funkcji z pliku controlers test
router.get('/', notesActions.saveNote)

// export poza plik
module.exports = router;