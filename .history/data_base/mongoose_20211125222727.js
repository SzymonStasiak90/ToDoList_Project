// Zaczytanie biblioteki mongoose
const mongoose = require('mongoose');
const {DATABASE} = require('../config')
// Polaczenie z baza danych
mongoose.connect(DATABASE, {
    useNewUrlParser: true,              // opcjonalnie
    useUnifiedTopology: true            // opcjonalnie
});

