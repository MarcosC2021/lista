import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import './App.css';

const listasExemplo = [
  { id: 1, nome: 'Trabalho' },
  { id: 2, nome: 'Pessoal' },
];

function App() {
  const [listaSelecionada, setListaSelecionada] = useState(listasExemplo[0]);

  return (
    <div className="app-layout">
      <Sidebar listas={listasExemplo} onSelectLista={setListaSelecionada} />
      <main className="main-content">
        <h1>{listaSelecionada.nome}</h1>
        {/* Aqui vão as tarefas da lista selecionada */}
      </main>
    </div>
  );
}

export default App;
