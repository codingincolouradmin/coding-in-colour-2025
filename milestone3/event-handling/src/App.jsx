import { useState } from 'react'

// const App = () => {
//   const [ notes, setNotes ] = useState([
//     { id: 1, content: 'Hello my name is Joe'},
//     { id: 2, content: 'I like CSS' },
//     { id: 3, content: 'I prefer JavaScript' }
//   ])

//   const printNote = (e, note) => {
//     // I want to print the note here on click
//     console.log('event', e)
//     console.log(`clicked ${note.content}`)
//   }

//   return (
//     <div>
//       <ul>
//         {notes.map(
//           note => 
//           <div key={note.id}>
//             <li> {note.content} </li>
//             <button onClick={(e) => printNote(e, note)}>print</button>
//           </div>
//         )}
//       </ul>
//     </div>
//   )
// }

import Button from './components/Button';

// const App = () => {

//   // const handleClick = (e, label) => {
//   //   console.log('event is', e)
//   //   console.log(`label is ${label}`)
//   // }

//   const handleDivClick = () => {
//     console.log('div clicked')
//   }

//   const handleButtonClick = (e) => {
//     e.stopPropagation()
//     console.log('button clicked')
//   }

//   return (
//     <div>
//       <div onClick={handleDivClick} style={{ background: 'blue' }}>
//         <button onClick={handleButtonClick}> Click </button>
//       </div>
//     </div>
//   )
// }

const App = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target.name.value)
  }

  const handleChange = (e) => {
    console.log('typing...', e.target.value)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        name: <input id="name" onChange={handleChange} />
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default App;