// Zaczytanie biblioteki mongoose
const mongoose = require('mongoose');

// Walidacja wprowadzanych danych
const NoteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
});

// Model obiektu w bazie danych
const Note = mongoose.model('Note', NoteSchema);


// export modelu poza plik
module.exports = Note


