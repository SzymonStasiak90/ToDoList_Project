// Zaczytanie biblioteki mongoose
const mongoose = require('mongoose');


// Model obiektu w bazie danych
const Note = mongoose.model('Note', {
    title: String,
    body: String
});


// export modelu poza plik
module.exports = Note


