// Zaczytanie biblioteki mongoose
const mongoose = require('mongoose');

// Polaczenie z baza danych
mongoose.connect('mongodb://127.0.0.1:27017/ToDo_DataBase', {
    useNewUrlParser: true,              // opcjonalnie
    useUnifiedTopology: true            // opcjonalnie
});

// Model obiektu w bazie danych
const Note = mongoose.model('Note', {
    title: String,
    body: String
});

const newNote = new Note({
    title: 'Testowy tytul',
    body: 'Testowy tekst notatki'
});
newNote.save().then(() => {
    console.log('Notatka zapisana!')
});