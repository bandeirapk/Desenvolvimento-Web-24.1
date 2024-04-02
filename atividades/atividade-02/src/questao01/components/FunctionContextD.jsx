import { useContext } from 'react';

import ColorTheme from './MyColorContext';

const FunctionContextD = () => {
  const value = useContext(ColorTheme);

  return (
    <div>
      <h1 style={{ color: value.bkgD }}>Contexto D</h1>
    </div>
  );
};

export default FunctionContextD;
