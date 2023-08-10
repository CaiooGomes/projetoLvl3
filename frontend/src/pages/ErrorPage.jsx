import React from 'react'
import "./ErrorPage.css"
import { Link } from 'react-router-dom'
function ErrorPage() {
  return (
    <div id="errorPage">
        <h1>Esta página não existe</h1>
        <h2>ERROR 404</h2>
        <h6><Link to='/'>Voltar para a página inicial</Link></h6>
    </div>
  )
}

export default ErrorPage