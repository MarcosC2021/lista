import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = ({ listas, onSelectLista }) => {
  const [recolhido, setRecolhido] = useState(false);

  return (
    <div className={`sidebar ${recolhido ? 'recolhido' : ''}`}>
      <button className="toggle-btn" onClick={() => setRecolhido(!recolhido)}>
        {recolhido ? '>' : '<'}
      </button>
      {!recolhido && (
        <ul>
          {listas.map((lista) => (
            <li key={lista.id} onClick={() => onSelectLista(lista)}>
              {lista.nome}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Sidebar; 