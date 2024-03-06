import React from 'react';

const Temperature = () => {
  const celsiusParaFahrenheit = c => {
    return (c * 9) / 5 + 32;
  };

  const fahrenheitParaCelsius = f => {
    return ((f - 32) * 5) / 9;
  };

  const kelvin = k => {
    const tempC = k - 273.15;
    const tempF = celsiusParaFahrenheit(tempC);
    return { tempC, tempF };
  };

  const valueK = 305.15;
  const valueF = kelvin(valueK).tempF;
  const valueC = fahrenheitParaCelsius(valueF);

  return (
    <>
      <h1>Graus Celsius: {valueC}</h1>
      <h1>Graus Fahrenheit: {valueF}</h1>
      <h1>Graus Kelvin: {valueK}</h1>
    </>
  );
};

export { Temperature };
