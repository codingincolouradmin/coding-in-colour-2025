import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [input,setInput] = useState("");
  const [notes, setNotes] = useState([]);
  const [editingNoteId, setEditingNoteId] = useState(null);
  const [newNoteText, setNewNoteText] = useState("");

  const handleAdd = ()=> {
    if(!input.trim()) return;
    const newNote = {id: Date.now(), text: input.trim()};
    setNotes((prevNotes) => [...prevNotes, newNote] );
    setInput("");

  }
  const handleEdit = (id) => {
    setEditingNoteId(id);
    setNewNoteText(notes.find( note => note.id === id).text);

  }
  const handleUpdate = (id) => {
    if(!newNoteText.trim()) return;
    setNotes((prevNotes)=> 
    prevNotes.map(note => 
      note.id === id ? {...note, text: newNoteText.trim()} :note
    )
    );
    setEditingNoteId(null);
    setNewNoteText("");


  }
  const handleCancel = () => {
    setEditingNoteId(null);
    setNewNoteText("");
  }

  const handleDelete = (id) => {
    setNotes((prevNotes)=> prevNotes.filter(note => note.id !== id));
    

  }



  

  return (
    <>
    <div className='notes-container'>
      <h1 className='title'>React Notes App</h1>
      <div className='input-row'>
      <input
        type='text'
        value= {input}
        onChange={e => setInput(e.target.value)}
        className='note-input'
       />
       <button onClick={handleAdd} className='add-button'>Add</button>
       </div>
       <ul className='notes-list'>
        {notes.map((note)=>(
           <li key={note.id} className='note-item'>
            {editingNoteId === note.id ? (
              <>
               <input
               type='text'
               value= {newNoteText}
               onChange={e => setNewNoteText(e.target.value)}
               className='edit-text'
              />
              <button onClick={() => handleUpdate(note.id)} className='update-button'>Update</button>
              <button onClick={handleCancel} className='cancel-button'>Cancel</button>
              </>

            ) : (
              <>
              <span className='note-text'>{note.text}</span>
              <button onClick={() => handleEdit(note.id)} className='edit-button'>Edit</button>
              <button onClick={() => handleDelete(note.id)} className='delete-button'>Delete</button>
              </>

            )
            
          
            }
            

           </li>

        ))

        }
       
        
      
      </ul>

    </div>
    <ul>

    </ul>
      
    </>
  )
}

export default App
