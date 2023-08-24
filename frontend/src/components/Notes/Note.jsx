import React from 'react'
import trash from '../../svgs//trash.svg'
import edit from '../../svgs//edit.svg'

function Note({n}) {
  return (
    <div className='note'>
        <div>
            <h1>{n.title}</h1>
            <div className='desc'>{n.description}</div>
        </div>
        <div className='links'>
            <div className='svgs'><img src={trash}/></div>
            <div className='svgs'><img src={edit}/></div>
        </div>
    </div>
  )
}

export default Note

