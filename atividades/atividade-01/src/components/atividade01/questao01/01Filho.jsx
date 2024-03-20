function ComponentChild({ altura, peso }) {
  function idealWeight(imc) {
    if (imc < 18) {
      return 'Abaixo do peso';
    } else if (imc > 25) {
      return 'Acima do peso';
    } else {
      return 'Peso ideal';
    }
  }

  return (
    <div>
      <h1>Dados sobre seu filho:</h1>
      <p>Altura: {altura} cm</p>
      <p>Peso: {peso} Kg</p>
      <h3>O IMC do seu filho é: {(peso / (altura * altura)).toFixed(2)} </h3>
      <h3>Atenção: {idealWeight(peso / (altura * altura))}</h3>
    </div>
  );
}

export { ComponentChild };
