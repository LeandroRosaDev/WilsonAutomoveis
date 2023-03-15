import React from 'react';
import Veiculos from './Veiculos';

const Hatch = () => {
  return (
    <div>
      <h1
        style={{ marginBottom: '1rem', marginTop: '4rem', textAlign: 'center' }}
      >
        Exibindo todos os resultados para "Hatch"
      </h1>
      <Veiculos />
    </div>
  );
};

export default Hatch;
