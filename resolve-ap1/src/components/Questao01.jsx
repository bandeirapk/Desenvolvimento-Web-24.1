import React from "react"

const Questao01A = () => {
  const lista = [
    { a: 10, b: 3, c: 7 },
    { a: 5, b: -3, c: 9 },
    { a: 1, b: 9, c: 40 }
  ]

  return (
    <div>
      <Questao01B lista={lista} />
    </div>
  )
}

function Questao01B({ lista }) {
  // Mapeio a lista de objetos e para cada objeto eu pego os valores e uso o Math.max para pegar o maior valor
  // Basicamente quando eu uso o Object.values ele pega o valor de cada objeto dentro do array, e retorna somente o objeto com os valores
  // O uso do spread operator é para passar os valores do retorno do objeto como argumentos para a função Math.max que pega o maior valor
  // Dessa forma, eu consigo retornar o valor maior de cada objeto que tem dentro do meu array de objetos
  const maioresElementos = lista.map(valor => Math.max(...Object.values(valor)))

  return (
    <div>
      {maioresElementos.map((maior, index) => (
        // Uso o key para identificar cada elemento da lista a partir do index gerado pelo map isso evita o warning key que é gerado pelo próprio react
        <p key={index}>
          {/* Aqui o array começa do 0 mas para melhor entendimento, coloquei o +1 para ordenar começando do 1 e não 0, dai ele sempre que executa pega o 
          maior valor presente em cada objeto do array e apresenta na tela. */}
          Maior elemento do objeto {index + 1}: {maior}
        </p>
      ))}
    </div>
  )
}

export default Questao01A
