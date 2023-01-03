import NotesList from "./components/NotesList"
import { nanoid } from "nanoid"
import { useEffect, useState } from "react"
import Search from "./components/Search"
import Header from "./components/Header"
import Footer from "./components/Footer"

export default function App() {

  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note!",
      date: "03-01-2022",
    },
    {
      id: nanoid(),
      text: "This is my second note!",
      date: "13-01-2022",
    },
    {
      id: nanoid(),
      text: "This is my third note!",
      date: "23-01-2022",
    },
    {
      id: nanoid(),
      text: "This is my third note!",
      date: "05-02-2022",
    }
  ])

  const [searchText, setSearchText] = useState("")

  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"))

    if(savedNotes) {
      setNotes(savedNotes)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('react-notes-app-data', JSON.stringify(notes))
  }, [notes])

  const addNote = (text) => {
    const date = new Date()
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString('en-GB')
    }

    const newNotes = [...notes, newNote]
    setNotes(newNotes)
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id)
    setNotes(newNotes);
  }

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
        <Header darkMode={darkMode} handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesList
          notes={
            notes.filter((note) => (
              note.text.toLowerCase().includes(searchText.toLowerCase()))
            )
          }
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
          darkMode = {darkMode}
        />
        <Footer darkMode={darkMode} />
      </div>
    </div>
  )
}