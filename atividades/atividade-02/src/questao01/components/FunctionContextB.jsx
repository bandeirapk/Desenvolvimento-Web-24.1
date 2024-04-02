import { useContext } from 'react';

import ColorTheme from './MyColorContext';

const FunctionContextB = () => {
  const value = useContext(ColorTheme);

  return (
    <div>
      <h1 style={{ color: value.bkgB }}>Contexto B</h1>
    </div>
  );
};

export default FunctionContextB;
