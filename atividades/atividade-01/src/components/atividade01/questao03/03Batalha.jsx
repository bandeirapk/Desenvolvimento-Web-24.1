import React from 'react';

function Hero({ name, img }) {
  return (
    <div>
      <h2>Hero: {name}</h2>
      <img
        src={img}
        alt={name}
      />
    </div>
  );
}

function Enemy({ name, img }) {
  return (
    <div>
      <h2>Enemy: {name}</h2>
      <img
        src={img}
        alt={name}
      />
    </div>
  );
}

function Arena({ children, arena }) {
  return (
    <div>
      <h2>Arena: {arena}</h2>
      {children}
    </div>
  );
}

function World({ children }) {
  return <div>{children}</div>;
}

export { Hero, Enemy, Arena, World };
