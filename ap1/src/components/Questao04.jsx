import React, { useState, useEffect } from "react"

const fetchData = () => {
  return new Promise(resolve => {
    resolve([
      { "capital": ["Dublin"], "population": 4994724 },
      { "capital": ["Nicosia"], "population": 1207361 },
      { "capital": ["Madrid"], "population": 47351567 }
    ])
  })
}

const Questao04 = () => {
  const [data, setData] = useState([])
  const [minCapital, setMinCapital] = useState("")
  const [maxCapital, setMaxCapital] = useState("")

  // O use effect é ativado quando ocorre uma mudança no componente.
  // Dessa forma ele vai realizar a função que está dentro dele.
  // A função async vai esperar o retorno da função fetchData e vai setar o resultado no setData.
  // Após isso ele vai realizar a comparação para encontrar o menor e o maior valor de população.
  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchData()
        setData(result)

        // Para encontrar com menor população usei o reduce onde ele vai comparar os valores e retornar o menor valor.
        // O min ele sempre vai se atualizando de acordo com a comparação que ele faz.
        // Valor começa em result[0] para que ele tenha um valor para comparar.
        const minPop = result.reduce(
          (min, city) => (city.population < min.population ? city : min),
          result[0]
        )

        // Para encontrar com maior população usei o reduce onde ele vai comparar os valores e retornar o maior valor.
        // O max ele sempre vai se atualizando de acordo com a comparação que ele faz.
        // Valor começa em result[0] para que ele tenha um valor para comparar.
        const maxPop = result.reduce(
          (max, city) => (city.population > max.population ? city : max),
          result[0]
        )

        setMinCapital(minPop.capital[0])
        setMaxCapital(maxPop.capital[0])
      } catch (error) {
        console.error("ERROR =>", error)
      }
    }

    getData()
  }, [])

  return (
    <div>
      <h1>Capital com maior e menor população</h1>
      <p>
        <strong>Maior população:</strong> {maxCapital}
      </p>
      <p>
        <strong>Menor população:</strong> {minCapital}
      </p>
    </div>
  )
}

export default Questao04
