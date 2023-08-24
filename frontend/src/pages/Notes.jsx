import React, { useState } from 'react'
import "./Notes.css"

import Note from '../components/Notes/Note'
import AddNewButton from '../components/UI/AddNewButton'

function Notes() {
  const [notes,setNotes] = useState([{title: "muito legal", description: "eu amei one piece", date: "8/09/2023", id: 1},{title: "muito legal", description: "eu amei one piece", date: "8/09/2023", id: 1},{title: "muito legal", description: "eu amei one piece", date: "8/09/2023", id: 1},{title: "muito legal", description: "eu amei one piece", date: "8/09/2023", id: 1},{title: "muito legal", description: "eu amei one piece", date: "8/09/2023", id: 1},{title: "muito legal", description: "eu amei one piece", date: "8/09/2023", id: 1},])

  return (
    <div className='notes'>
      <AddNewButton/>
      {
        notes.map(n=> <Note n={n}/>
        )
      }
    </div>
  )
}

export default Notes