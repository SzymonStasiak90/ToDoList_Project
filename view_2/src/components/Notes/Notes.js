import React from 'react'; // import biblioteki react
import './Notes.css';
import Note from '../Note/Note';
import NewNote from '../NewNote/NewNote';
import Modal from 'react-modal';
import EditNote from '../EditNote/EditNote';
import axios from 'axios';

class Notes extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: [
                {
                    id:'2323',
                    title: 'Wykapac pswerwa',
                    body: 'Kup szampon dla psow'
                },
                {
                    id: '4234',
                    title: 'Zrobic zakupy',
                    body: 'Kupic dwa obiady i kolacje'
                }
            ],
            showEditModal : false,
            editNote: {}
        };
    }

    componentDidMount() {
        this.fetchNotes();
    }
    // Polaczenie api
    async fetchNotes() {
       const response = await axios.get('http://localhost:3001/api/notes');
       const notes = response.data;

       this.setState({notes});
       console.log(response);
    }


    deleteNote(id) {
        console.log('usuwanie notatki', id);
        const notes = [...this.state.notes].filter(note => note._id !== id);
        this.setState({notes});
    }

    async addNote(note) {
        const notes = [...this.state.notes];
        // Dodane na backend
        const response = await axios.post('http://localhost:3001/api/notes',note);
        const newNote = response.data;
        // Dodane na frontend
        notes.push(newNote);
        this.setState({notes});
    }

    editNote(note) {
        const notes = [...this.state.notes];
        const index = notes.findIndex(element => element.id === note._id);
        if (index >= 0) {
            notes[index] = note;
            this.setState({notes});
        }
        this.toggleModal();
    }

    toggleModal() {
        this.setState({
            showEditModal : !this.state.showEditModal
        });
    }

    editNoteHandler(note) {
        this.toggleModal();
        this.setState({editNote: note});
    }



    render() {
        return (
            <div>
                <p>Moje Notatki:</p>

                <NewNote
                    onAdd={(note) => this.addNote(note)} />

                <Modal
                    isOpen={this.state.showEditModal}
                    contentLabel="Edytuj notatkę">
                        <EditNote
                            title={this.state.editNote.title}
                            body={this.state.editNote.body}
                            id={this.state.editNote._id}
                            onEdit={note=> this.editNote(note)} />
                            <button onClick={()=> this.toggleModal()}>Anuluj</button>
                </Modal>


                {this.state.notes.map(note => {
                    return(
                        <Note
                            key={note._id}
                            title= {note.title}
                            body= {note.body}
                            id= {note._id}
                            onEdit={(note) => this.editNoteHandler(note)}
                            onDelete={(id) => this.deleteNote(id)} />
                   )
                })}
            </div>
        );
    }
}

export default Notes;