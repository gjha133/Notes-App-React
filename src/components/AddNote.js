import { useState } from "react"

export default function AddNote({ handleAddNote, darkMode }) {

    const [noteText, setNoteText] = useState("")
    const characterLimit = 250

    const handleChange = (event) => {
        if (characterLimit - event.target.value.length >= 0)
            setNoteText(event.target.value)
    }

    const handleSaveClick = () => {
        if (characterLimit - noteText.length && noteText.trim().length)
            handleAddNote(noteText)

        setNoteText("")
    }

    return (
        <div className={`newNote${darkMode ? "dark" : ""}`}>
            <textarea
                rows='8'
                cols='10'
                placeholder="Type to add a note..."
                value={noteText}
                onChange={handleChange}
                className={`textarea${darkMode ? "dark" : ""}`}
            >
            </textarea>
            <div className="note-footer">
                <small className="char-limit">{characterLimit - noteText.length} characters remaining</small>
                <button className="save1" onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    )
}