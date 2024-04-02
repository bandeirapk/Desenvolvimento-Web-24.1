import { useContext } from 'react';
import FamilyContext from '../contexts/FamilyContext';

export function ComponentNeto() {
  const count = useContext(FamilyContext);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h1>Componente Neto</h1>

      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          count + 2
        }.png`}
        alt="Pokémon"
      />
    </div>
  );
}
