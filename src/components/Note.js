import { MdDeleteForever } from "react-icons/md"

export default function Note({id, text, date, handleDeleteNote, darkMode}) {
    return (
        <div className={`note${darkMode ? "dark" : ""}`}>
        {/*<div className={`note${darkMode ? "dark" : ""}`}>  */}
            <span>{text}</span>
            <div className="note-footer">
                <small>{date}</small>
                <MdDeleteForever 
                onClick={() => handleDeleteNote(id)}
                className="delete-icon" 
                size='1.3rem'
                />
            </div>
        </div>
    )
}