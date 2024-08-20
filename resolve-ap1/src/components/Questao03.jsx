import React, { useState, useEffect } from "react"

const Questao03 = () => {
  const [maiorPopulacao, setMaiorPopulacao] = useState("")
  const [menorPopulacao, setMenorPopulacao] = useState("")

  async function buscarDados() {
    try {
      const response = await fetch(
        "https://restcountries.com/v3.1/region/europe?fields=capital,population"
      )
      const data = await response.json()

      // Aqui o que está acontecendo é uma ordenação, onde ele pega um elemento do array e o próximo e compara e usando a função sorte do Js
      //   oderna de forma decrescente, ou seja, do maior para o menor, e com isso ele consegue pegar o primeiro elemento do array que é o maior e o último que é o menor.
      const ordenarDados = data.sort((a, b) => b.population - a.population)

      // Setando os valores de maior e menor população da capital e a parte da população menor para poder pegar o valor o uso do ordenarDados.length - 1
      // é para pegar o último elemento do array que é o menor valor.
      const maiorPopulacaoCapital = ordenarDados[0].capital[0]
      const menorPopulacaoCapital =
        ordenarDados[ordenarDados.length - 1].capital[0]

      setMaiorPopulacao(maiorPopulacaoCapital)
      setMenorPopulacao(menorPopulacaoCapital)
    } catch (error) {
      console.error("ERROR =>", error)
    }
  }

  // O uso do useEffect é para que a função buscarDados seja executada assim que a página for carregada.
  useEffect(() => {
    buscarDados()
  }, [])

  return (
    <div>
      <h1>Capital com maior e menor população</h1>
      <p>
        <strong>Maior população:</strong> {maiorPopulacao}
      </p>
      <p>
        <strong>Menor população:</strong> {menorPopulacao}
      </p>
    </div>
  )
}

export default Questao03
