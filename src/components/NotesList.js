import Note from "./Note"
import AddNote from "./AddNote"

export default function NotesList({ notes, handleAddNote, handleDeleteNote, darkMode }) {

    const allNotes = notes.map((note) => (
    <Note 
        id={note.id}
        text = {note.text}
        date = {note.date}
        handleDeleteNote={handleDeleteNote}
        darkMode={darkMode}
    />
    ))

    return (
        <div className="notes-list">
            {allNotes}
            <AddNote 
                handleAddNote={handleAddNote} 
                darkMode={darkMode}
            />
        </div>
    )
}