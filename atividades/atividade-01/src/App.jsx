import { ComponentFather } from './components/atividade01/questao01/01Pai';

import {
  Memoria as PC1,
  PlacaDeVideo as PC2,
  PlacaMae as PC3,
} from './components/atividade01/questao02/02MeuPC';

import {
  World,
  Arena,
  Enemy,
  Hero,
} from './components/atividade01/questao03/03Batalha';

function App() {
  return (
    <>
      <ComponentFather />

      <hr />

      <h1>Meu Computador - Questão 02</h1>
      <PC1
        nome="Asus Prime B450M Gaming/BR"
        valor="R$ 500,00"
      />
      <PC2
        nome="HyperX Fury 8GB"
        valor="R$ 300,00"
      />
      <PC3
        nome="Gigabyte GeForce GTX 1660"
        valor="R$ 2000,00"
      />

      <hr />

      <h1>Batalha - Questão 03</h1>
      <World>
        <Arena arena="Ginásio do tipo Dragão - Blackthorn City">
          <Hero
            name="Claire"
            img="../assets/claire-dragon.jpeg"
          />
          <Enemy
            name="Ash"
            img="../assets/Kantoash.webp"
          />
        </Arena>

        <Arena arena="Ginásio do tipo Gelo - Mahogany Town">
          <Hero
            name="Pryce"
            img="../assets/Pryce-ice.jpeg"
          />
          <Enemy
            name="Ash"
            img="../assets/Kantoash.webp"
          />
        </Arena>
      </World>
    </>
  );
}

export default App;
