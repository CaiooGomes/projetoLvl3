import React, { useState } from 'react'
import "./Notes.css"
import Modal from '../components/Modal/Modal'
import Note from '../components/Notes/Note'
import AddNewButton from '../components/UI/AddNewButton'

function Notes() {
  const [notes,setNotes] = useState([{title: "muito legal", description: "eu amei one piece", date: "8/09/2023", id: 1},{title: "muito legal", description: "eu amei one piece", date: "8/09/2023", id: 1},{title: "muito legal", description: "eu amei one piece", date: "8/09/2023", id: 1},{title: "muito legal", description: "eu amei one piece", date: "8/09/2023", id: 1},{title: "muito legal", description: "eu amei one piece", date: "8/09/2023", id: 1},{title: "muito legal", description: "eu amei one piece", date: "8/09/2023", id: 1},])
  const [showModal, SetShowModal] = useState(false)

  const mudarModal= ()=>{
    SetShowModal((state)=>!state)
  }
  const addMode= ()=>{

  }
  return (
    <div className='notes'>
      <AddNewButton abrirOModal={mudarModal}/>
      {
        notes.map(n=> <Note abrirOModal={mudarModal} n={n}/>)
      }

      {
        showModal ? <Modal fecharOModal={mudarModal}/> : null
      }
    </div>
  )
}

export default Notes