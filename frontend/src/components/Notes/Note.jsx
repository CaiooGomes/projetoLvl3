import React from 'react'
import trash from '../../svgs//trash.svg'
import edit from '../../svgs//edit.svg'
import "./Note.css"
function Note({n}) {
  return (
    <div className='note'>
        <div>
            <h1>{n.title}</h1>
            <div className='desc'>{n.description}</div>
        </div>
        <div className='noteRodape'>
            <div className="dataNote">
                {n.date}
            </div>
            <div className='links'>
                <div className='svgs'><img src={trash}/></div>
                <div className='svgs'><img src={edit}/></div>
            </div>
        </div>
    </div>
  )
}

export default Note

