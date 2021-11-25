// Zaczytanie biblioteki mongoose
const mongoose = require('mongoose');

// Polaczenie z baza danych
mongoose.connect('mongodb://127.0.0.1:27017/ToDo_DataBase', {
    useNewUrlParser: true,              // opcjonalnie
    useUnifiedTopology: true            // opcjonalnie
});

//

const Note = mongoose.model('Note', {
    title: String,
    body: String
});
newNote.save();