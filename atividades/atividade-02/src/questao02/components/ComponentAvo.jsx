import { useState } from 'react';

import FamilyContext from '../contexts/FamilyContext';

import { ComponentFilho } from './ComponentFilho';

export function ComponentAvo() {
  const [count, setCount] = useState(1);

  function increment() {
    setCount(count + 1);
  }

  return (
    <FamilyContext.Provider value={count}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h1>Componente Avô</h1>

        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${count}.png`}
          alt="Pokémon"
        />

        <button onClick={increment}>Incrementar</button>

        <ComponentFilho />
      </div>
    </FamilyContext.Provider>
  );
}
