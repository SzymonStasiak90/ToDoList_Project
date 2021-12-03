//Wczytanie modelu dla obiektow bazy danych
const Note = require('../data_base/models/note')


//Export funkcji testowej poza plik
class NoteActions {
    saveNote(request, response) {
        // const newNote = new Note({
        //     title: 'Posprzatac dom',
        //     body: 'sypialnia, salon, garaz'
        // });
        // newNote.save().then(() => {
        //     console.log('Notatka zapisana!')
        // });

        const tittle = request.body.title;
        const description = request.body.description;
        response.send('Notatka Zostala Stworzona. Tytul: '+ tittle +'Tresc: '+ description);
    }

    getAllNotes(request, response) {
        // pobieranie notatek z bazy
        response.send('Pobieranie Dziala!');
    }
    getNote(request, response) {
        const id = request.params.id;
        // pobieranie notatki z bazy
        response.send('Info o notatce ID:'+ id);
    }
    updateNote(request, response) {
        const id = request.params.id;
        // aktualizowanie notatki
        response.send('Notatka zaktualizowana ID:'+ id);
    }
    deleteNote(request, response) {
        const id = request.params.id;
        // usuwanie notatki
        response.send('Notatka usunieta. ID:'+ id);
    }

}

module.exports =  new NoteActions();
