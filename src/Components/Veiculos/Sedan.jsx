import React from 'react';
import Veiculos from './Veiculos';

const Sedan = () => {
  return (
    <div>
      <h1
        style={{ marginBottom: '1rem', marginTop: '4rem', textAlign: 'center' }}
      >
        Exibindo todos os resultados para "Sedan""
      </h1>
      <Veiculos />
    </div>
  );
};

export default Sedan;
