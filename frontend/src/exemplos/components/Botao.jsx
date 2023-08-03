import React from 'react'
import "./Botao.css"
function Botao(props) {
  return (
    <button
        onClick={props.tarefa}
        className={props.classe}
        id={props.id}
    >
        {props.children}
    </button>
  )
}

export default Botao