import React from 'react';
import styles from './Mapa.module.css';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const Mapa = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyATFXuru-9lHnotfHV6Yu-46pdNKGAtsMM',
  });
  const position = {
    lat: -22.768239,
    lng: -43.37718,
  };

  return (
    <div className="container">
      <h1 style={{ marginBottom: '1rem', marginTop: '4rem' }}>Nossa loja</h1>
      <h2>
        Atualmente, nossa loja fica localizada na rua Bela Vista , nº50 - Vilar
        dos Teles.
      </h2>
      <h2 style={{ marginBottom: '1rem' }}>
        Venha nos fazer uma visita e realize o sonho de ter seu carro próprio.
      </h2>

      <div className={styles.mapa}>
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={{
              width: '100%',
              height: '100%',
              border: 'red solid 2px',
              boxShadow: '0px 2px 20px 2px gray',
            }}
            center={position}
            zoom={18}
          >
            <Marker
              position={position}
              options={{
                label: {
                  text: 'Wilson Automóveis',
                  className: 'mapMarker',
                },
              }}
            />
          </GoogleMap>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Mapa;
