//Wczytanie modelu dla obiektow bazy danych
const Note = require('../data_base/models/note')


//Export funkcji testowej poza plik
class NoteActions {
    async saveNote(request, response) {
        const title = request.body.title;
        const description = request.body.description;

        let note;

        try {
            note = new Note({title: title, body: description});
            await note.save();
        } catch (err) {
            return response.status(422).json({message: err.message});
        }
        response.status(201).json(note);
    }

    getAllNotes(request, response) {
        Note.find({},(err,dbRecord) => {
            console.log(dbRecord);
            response.status(201).json(dbRecord);
        });
    }

    // pobieranie notatki z bazy
    async getNote(request, response) {
        const id = request.params.id;
        const note = await Note.findOne({_id: id});
        response.status(200).json(note);
    }

    // aktualizowanie notatki
   async updateNote(request, response) {
        const id = request.params.id;
        const title = request.body.title;
        const description = request.body.description;

        const note = await Note.findOne({_id: id});
        note.title = title;
        note.body = description;
        await note.save();

        response.status(201).json(note);
    }

    // usuwanie notatki
    async deleteNote(request, response) {
        const id = request.params.id;
        await Note.deleteOne({_id: id});

        response.sendStatus(204);
    }

}

module.exports =  new NoteActions();
