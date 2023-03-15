import React from 'react';
import carro1 from '../../assets/Veiculos/Carros/Carro1/Frente1.jpg';
import carro2 from '../../assets/Veiculos/Carros/Carro2/FrenteC2.jpg';
import carro3 from '../../assets/Veiculos/Carros/Carro3/Frente3.jpg';
import carro4 from '../../assets/Veiculos/Carros/Carro4/Frente4.jpg';
import carro5 from '../../assets/Veiculos/Carros/carro5/Frente5.jpg';
import carro6 from '../../assets/Veiculos/Carros/Carro6/Frente6.jpg';
import carro7 from '../../assets/Veiculos/Carros/Carro7/Frente7.jpg';
import carro8 from '../../assets/Veiculos/Carros/Carro8/Frente8.jpg';
import Hatch from '../../assets/Home/hatch.png';
import PickUp from '../../assets/Home/pick up.png';
import SUV from '../../assets/Home/SUV.png';
import Sedan from '../../assets/Home/sedan.png';
import styles from './GradeVeiculos.module.css';
import { Link } from 'react-router-dom';

const GradeVeiculos = () => {
  return (
    <section className="container">
      <div className={styles.title}>
        <h1>Diversas marcas e modelos para você escolher !!</h1>
        <div className={styles.tiposDeCarro}>
          <Link to="/Hatch">
            <img src={Hatch} alt="hatch" className={styles.tipos} />
          </Link>
          <Link to="/PickUp">
            <img src={PickUp} alt="PickUp" className={styles.tipos} />
          </Link>
          <Link to="/SUV">
            <img src={SUV} alt="SUV" className={styles.tipos} />
          </Link>
          <Link to="/Sedan">
            <img src={Sedan} alt="Sedan" className={styles.tipos} />
          </Link>
        </div>
        <h2>Confira agora os nossos veículos em destaque !!</h2>
      </div>
      <div className={`${styles.grade} container`}>
        <Link to="/civic" className={styles.carros} href="">
          <img src={carro1} alt="imgCarro" className={styles.imgCarro} />
          <div className={styles.carro}>Honda civic LXS </div>
          <div className={styles.info}>
            <p className={styles.ano}>2009</p>
            <p className={styles.combustivel}>Flex</p>
            <p className={styles.km}>124.544</p>
          </div>
          <div>R$ 57.990</div>
        </Link>
        <Link to="/ranger" className={styles.carros} href="">
          <img src={carro2} alt="imgCarro" className={styles.imgCarro} />
          <div className={styles.carro}>Ford Ranger XLS 2.5 16V 4x2</div>
          <div className={styles.info}>
            <p className={styles.ano}>2014</p>
            <p className={styles.combustivel}>Gas</p>
            <p className={styles.km}>124.544</p>
          </div>
          <div>R$ 57.990</div>
        </Link>
        <Link to="/ka" className={styles.carros} href="">
          <img src={carro3} alt="imgCarro" classN ame={styles.imgCarro} />
          <div className={styles.carro}>FordKa Trail 1.0 12v</div>
          <div className={styles.info}>
            <p className={styles.ano}>2018</p>
            <p className={styles.combustivel}>Gas</p>
            <p className={styles.km}>124.544</p>
          </div>
          <div>R$ 57.990</div>
        </Link>
        <Link to="/laguna" className={styles.carros} href="">
          <img src={carro4} alt="imgCarro" className={styles.imgCarro} />
          <div className={styles.carro}>Laguna 2.0 </div>
          <div className={styles.info}>
            <p className={styles.ano}>1995</p>
            <p className={styles.combustivel}>Gas</p>
            <p className={styles.km}>124.544</p>
          </div>
          <div>R$ 57.990</div>
        </Link>
        <Link to="/siena" className={styles.carros} href="">
          <img src={carro5} alt="imgCarro" className={styles.imgCarro} />
          <div className={styles.carro}>Fiat Siena EL 1.0 Fire</div>
          <div className={styles.info}>
            <p className={styles.ano}>2011</p>
            <p className={styles.combustivel}>Flex</p>
            <p className={styles.km}>124.544</p>
          </div>
          <div>R$ 57.990</div>
        </Link>
        <Link to="/tcross" className={styles.carros} href="">
          <img src={carro6} alt="imgCarro" className={styles.imgCarro} />
          <div className={styles.carro}>VW T-Cross 1.0 TSI</div>
          <div className={styles.info}>
            <p className={styles.ano}>2021</p>
            <p className={styles.combustivel}>Flex</p>
            <p className={styles.km}>124.544</p>
          </div>
          <div>R$ 57.990</div>
        </Link>
        <Link to="/voyage" className={styles.carros} href="">
          <img src={carro7} alt="imgCarro" className={styles.imgCarro} />
          <div className={styles.carro}>VW Voyage </div>
          <div className={styles.info}>
            <p className={styles.ano}>2015</p>
            <p className={styles.combustivel}>GNV</p>
            <p className={styles.km}>124.544</p>
          </div>
          <div>R$ 57.990</div>
        </Link>
        <Link to="/laguna" className={styles.carros} href="">
          <img src={carro8} alt="imgCarro" className={styles.imgCarro} />
          <div className={styles.carro}>Hyundai HB20S 1.6A Comfort</div>
          <div className={styles.info}>
            <p className={styles.ano}>2015</p>
            <p className={styles.combustivel}>GNV</p>
            <p className={styles.km}>124.544</p>
          </div>
          <div>R$ 57.990</div>
        </Link>
      </div>
      <Link to="/veiculo">
        <button className={styles.button}>
          Mostrar todos os nossos veículos &#10141;
        </button>
      </Link>
    </section>
  );
};

export default GradeVeiculos;
