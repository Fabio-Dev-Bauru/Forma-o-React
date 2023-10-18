import React from 'react';
import Formulario from '../components/Form';
import Lista from '../components/List';
import style from './App.module.scss'

function App() {
  return (
    <div className={style.AppStyle}>
      <Formulario />
      <Lista />
    </div>
  );
}

export default App;
