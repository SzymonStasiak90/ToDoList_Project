// Zaczytanie biblioteki mongoose
const mongoose = require('mongoose');


// Model obiektu w bazie danych
const Note = mongoose.model('Note', {
    title: String,
    body: String
});



// export modelu poza plik
module.exports = Note


const newNote = new Note({
    title: 'Testowy tytul',
    body: 'Testowy tekst notatki'
});
newNote.save().then(() => {
    console.log('Notatka zapisana!')
});