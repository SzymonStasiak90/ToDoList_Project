// API routing
const express = require('express');
const router = express.Router();

// zaczytanie pliku z controlers test
const noteActions = require('../controlers/noteActions');



// uzycie funkcji z pliku controlers test

// Pobieranie notatek
router.get('/notes', noteActions.getAllNotes)
// Pobieranie notatki
router.get('/notes/:id', noteActions.getNote)
// Zapisywanie notatek
router.post('/notes', noteActions.saveNote)
// Edytowanie notatek
router.put('/notes/:id', noteActions.updateNote)
// Usuwanie notatek
router.delete('/notes/:id', noteActions.deleteNote)



// export poza plik
module.exports = router;