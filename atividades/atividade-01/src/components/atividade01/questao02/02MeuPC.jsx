import React from 'react';

function PlacaMae({ nome, valor }) {
  return (
    <div>
      <h2>Placa Mãe</h2>
      <p>Nome: {nome}</p>
      <p>Valor: {valor}</p>
    </div>
  );
}

function Memoria({ nome, valor }) {
  return (
    <div>
      <h2>Memória</h2>
      <p>Nome: {nome}</p>
      <p>Valor: {valor}</p>
    </div>
  );
}

function PlacaDeVideo({ nome, valor }) {
  return (
    <div>
      <h2>Placa de Vídeo</h2>
      <p>Nome: {nome}</p>
      <p>Valor: {valor}</p>
    </div>
  );
}

export { PlacaMae, Memoria, PlacaDeVideo };
