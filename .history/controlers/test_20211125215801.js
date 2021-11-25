//Wczytanie modelu dla obiektow bazy danych
const Note = require('../data_base/models/note')


//Export funkcji testowej poza plik
module.exports = {
    saveNote(request, response) {



        const newNote = new Note({
            title: 'Testowy tytul',
            body: 'Testowy tekst notatki'
        });
        newNote.save().then(() => {
            console.log('Notatka zapisana!')
        });







    response.send('Strona Glowna Dziala!');
    }
}
