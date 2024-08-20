import { useState } from "react"

function Questao02() {
  // Estado vai servir para controlar se o Pokémon está virado ou não facilitando o uso do botão
  const [virado, setVirado] = useState(false)

  const urlPokemonFrente =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
  const urlPokemonCostas =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/6.png"

  // Função que vai ser chamada quando o botão for clicado e basicamente ela inverte o valor do estado de virado
  function handleVirarPokemon() {
    setVirado(!virado)
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 10
      }}
    >
      <h1>Pokémon: Charizard</h1>
      {/* Aqui vai agir de acordo com o estado de virado usando a estrutura de if-ternário */}
      <img
        src={virado ? urlPokemonCostas : urlPokemonFrente}
        alt="Charizard"
      />
      <button
        onClick={handleVirarPokemon}
        style={{
          padding: 10,
          borderRadius: 5,
          border: "none",
          backgroundColor: "darkorange",
          opacity: 0.8,
          color: "white"
        }}
      >
        Virar
      </button>
    </div>
  )
}

export default Questao02
