import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';

function App(props) {
  const [usuario, setUsuario] = useState('Guilherme')
  return (
    <>
      <p>{usuario}</p>
      <input name="usuario" id="usuario" className="usuarioInput" placeholder="usuario"/>
      <button type="button">Pesquisar</button>
    </>
    
  );
}

export default App;
