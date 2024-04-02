import { useContext } from 'react';
import FamilyContext from '../contexts/FamilyContext';

import { ComponentNeto } from './ComponentNeto';

export function ComponentFilho() {
  const count = useContext(FamilyContext);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h1>Componente Filho</h1>

      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          count + 1
        }.png`}
        alt="Pokémon"
      />

      <ComponentNeto />
    </div>
  );
}
