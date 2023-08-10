import './App.css';
import { useState } from 'react';
import children from './exemplos/props/Children';
import FunctionSimples from './exemplos/functions/functionsSimples';
import FunctionDupla from './exemplos/functions/functionDupla';
import PropsSimples from './exemplos/props/PropsSimples';
import Botao from './exemplos/components/Botao';
function App() {
  const [variavel,functionMudarValorVariavel] = useState("tipo da variavel")
  const [logado,setLogado] = useState(false)
  const [numero,setNumero] = useState(0)

  var texto = 'um texto'

  function alterarTexto(){
    functionMudarValorVariavel('alterei')
  }
  return (
    <div className="App">
      <Botao classe="button" id="red">Esconder</Botao>
      <Botao classe="button" id="blue">Mostrar</Botao>


      <functionDupla/>
      <FunctionSimples/>
      {numero}
      <PropsSimples
        propriedade = "sou uma propriedade"
      />
      <children>enviando um children pro componente</children>
      {variavel}

      <button 
      onClick={()=>alterarTexto()}
      >
        
        Clique para alterar o texto
      </button>
    </div>
  );
}

export default App;
