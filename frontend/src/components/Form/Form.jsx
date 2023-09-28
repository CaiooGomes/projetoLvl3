import React from 'react'
import "./Form.css"

function Form() {
  return (
    <form className={'form'}>
        <h1>Adicionar Anotação</h1>
        
        <label htmlFor="title">Título</label>
        <input type="text" placeholder='Título da anotação' name='title' id='title'/>

        <label htmlFor="description">Descrição</label>
        <input type="text" placeholder='Descrição da anotação' name='description' id='description'/>

        <button>Cadastrar Anotação</button>
    </form>
  )
}

export default Form