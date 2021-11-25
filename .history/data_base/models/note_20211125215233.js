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