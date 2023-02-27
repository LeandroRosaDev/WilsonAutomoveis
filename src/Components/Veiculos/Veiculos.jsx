import React from 'react';
import styles from './Veiculos.module.css';
import { Link } from 'react-router-dom';
import carro1 from '../../assets/Veiculos/Carros/Carro1/Frente1.jpg';
import carro2 from '../../assets/Veiculos/Carros/Carro2/FrenteC2.jpg';
import carro3 from '../../assets/Veiculos/Carros/Carro3/Frente3.jpeg';
import carro4 from '../../assets/Veiculos/Carros/Carro4/Frente4.jpg';
import carro5 from '../../assets/Veiculos/Carros/carro5/Frente5.jpeg';
import carro6 from '../../assets/Veiculos/Carros/Carro6/Frente6.jpeg';
import carro7 from '../../assets/Veiculos/Carros/Carro7/Frente7.jpg';
import carro8 from '../../assets/Veiculos/Carros/Carro8/Frente8.jpg';

const Veiculos = () => {
  return (
    <div>
      <div className={`${styles.grade} container`}>
        <Link to="/civic" className={styles.carros} href="">
          <img src={carro1} alt="" />
          <div className={styles.carro}>Honda civic</div>
          <div className={styles.info}>
            <p className={styles.ano}>2015</p>
            <p className={styles.combustivel}>GNV</p>
            <p className={styles.km}>124.544</p>
          </div>
        </Link>
        <Link to="/ranger" className={styles.carros} href="">
          <img src={carro2} alt="" />
          <div className={styles.carro}>Ford Ranger XLS</div>
          <div className={styles.info}>
            <p className={styles.ano}>2014</p>
            <p className={styles.combustivel}>Flex</p>
            <p className={styles.km}>124.544</p>
          </div>
        </Link>
        <Link to="/ka" className={styles.carros} href="">
          <img src={carro3} alt="" />
          <div className={styles.carro}>Ford Ka TRAIL</div>
          <div className={styles.info}>
            <p className={styles.ano}>2018</p>
            <p className={styles.combustivel}>FLEX</p>
            <p className={styles.km}>124.544</p>
          </div>
        </Link>
        <Link to="/laguna" className={styles.carros} href="">
          <img src={carro4} alt="" />
          <div className={styles.carro}>Laguna 2.0</div>
          <div className={styles.info}>
            <p className={styles.ano}>1995</p>
            <p className={styles.combustivel}>GAS</p>
            <p className={styles.km}>124.544</p>
          </div>
        </Link>
        <Link to="/siena" className={styles.carros} href="">
          <img src={carro5} alt="" />
          <div className={styles.carro}>Fiat Siena EL 1.0</div>
          <div className={styles.info}>
            <p className={styles.ano}>2011</p>
            <p className={styles.combustivel}>Flex</p>
            <p className={styles.km}>124.544</p>
          </div>
        </Link>
        <Link to="/tcross" className={styles.carros} href="">
          <img src={carro6} alt="" />
          <div className={styles.carro}>VW T-Cross 1.0 TSI</div>
          <div className={styles.info}>
            <p className={styles.ano}>2021</p>
            <p className={styles.combustivel}>Flex</p>
            <p className={styles.km}>124.544</p>
          </div>
        </Link>
        <Link to="/voyage" className={styles.carros} href="">
          <img src={carro7} alt="" />
          <div className={styles.carro}>VW Voyage 1.6</div>
          <div className={styles.info}>
            <p className={styles.ano}>2011</p>
            <p className={styles.combustivel}>Flex</p>
            <p className={styles.km}>124.544</p>
          </div>
        </Link>
        <Link to="/laguna" className={styles.carros} href="">
          <img src={carro8} alt="" />
          <div className={styles.carro}>VW Voyage 1.6</div>
          <div className={styles.info}>
            <p className={styles.ano}>2011</p>
            <p className={styles.combustivel}>Flex</p>
            <p className={styles.km}>124.544</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Veiculos;
