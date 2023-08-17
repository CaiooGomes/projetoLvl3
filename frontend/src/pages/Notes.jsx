import React, { useState } from 'react'
import "./Notes.css"
import AddNewButton from '../components/UI/AddNewButton'

function Notes() {
  const [notes,setNotes] = useState([{title: "muito legal", description: "eu amei one piece", date: "8/09/2023", id: 1},{title: "muito legal", description: "eu amei one piece", date: "8/09/2023", id: 1},{title: "muito legal", description: "eu amei one piece", date: "8/09/2023", id: 1},{title: "muito legal", description: "eu amei one piece", date: "8/09/2023", id: 1},{title: "muito legal", description: "eu amei one piece", date: "8/09/2023", id: 1},{title: "muito legal", description: "eu amei one piece", date: "8/09/2023", id: 1},])

  return (
    <div className='notes'>
      <AddNewButton/>
      {
        notes.map(n=><div className='note'>
                      <div>
                        <h1>{n.title}</h1>
                        <div className='desc'>{n.description}</div>
                      </div>
                        <div>
                          <div>excluir</div>
                          <div>edit</div>
                        </div>
                      </div>
        )
      }
    </div>
  )
}

export default Notes