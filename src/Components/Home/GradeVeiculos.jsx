import React from 'react';
import Dados from '../../Dados';
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
          <img
            src={Dados[0].imgFrente}
            alt="imgCarro"
            className={styles.imgCarro}
          />
          <div className={styles.carro}>{Dados[0].shortTitle}</div>
          <div className={styles.info}>
            <p className={styles.ano}>{Dados[0].ano}</p>
            <p className={styles.combustivel}>{Dados[0].combustivel}</p>
            <p className={styles.km}>{Dados[0].km}</p>
          </div>
          <div>R$ 57.990</div>
        </Link>
        <Link to="/ranger" className={styles.carros} href="">
          <img
            src={Dados[1].imgFrente}
            alt="imgCarro"
            className={styles.imgCarro}
          />
          <div className={styles.carro}>{Dados[1].shortTitle}</div>
          <div className={styles.info}>
            <p className={styles.ano}>{Dados[1].ano}</p>
            <p className={styles.combustivel}>{Dados[1].combustivel}</p>
            <p className={styles.km}>{Dados[1].km}</p>
          </div>
          <div>R$ 57.990</div>
        </Link>
        <Link to="/ka" className={styles.carros} href="">
          <img
            src={Dados[2].imgFrente}
            alt="imgCarro"
            classN
            ame={styles.imgCarro}
          />
          <div className={styles.carro}>{Dados[2].shortTitle}</div>
          <div className={styles.info}>
            <p className={styles.ano}>{Dados[2].ano}</p>
            <p className={styles.combustivel}>{Dados[2].combustivel}</p>
            <p className={styles.km}>{Dados[2].km}</p>
          </div>
          <div>R$ 57.990</div>
        </Link>
        <Link to="/laguna" className={styles.carros} href="">
          <img
            src={Dados[3].imgFrente}
            alt="imgCarro"
            className={styles.imgCarro}
          />
          <div className={styles.carro}>{Dados[3].shortTitle} </div>
          <div className={styles.info}>
            <p className={styles.ano}>{Dados[3].ano}</p>
            <p className={styles.combustivel}>{Dados[3].combustivel}</p>
            <p className={styles.km}>{Dados[3].km}</p>
          </div>
          <div>R$ 57.990</div>
        </Link>
        <Link to="/siena" className={styles.carros} href="">
          <img
            src={Dados[4].imgFrente}
            alt="imgCarro"
            className={styles.imgCarro}
          />
          <div className={styles.carro}>{Dados[4].shortTitle}</div>
          <div className={styles.info}>
            <p className={styles.ano}>{Dados[4].ano}</p>
            <p className={styles.combustivel}>{Dados[4].combustivel}</p>
            <p className={styles.km}>{Dados[4].km}</p>
          </div>
          <div>R$ 57.990</div>
        </Link>
        <Link to="/tcross" className={styles.carros} href="">
          <img
            src={Dados[5].imgFrente}
            alt="imgCarro"
            className={styles.imgCarro}
          />
          <div className={styles.carro}>{Dados[5].shortTitle}</div>
          <div className={styles.info}>
            <p className={styles.ano}>{Dados[5].ano}</p>
            <p className={styles.combustivel}>{Dados[5].combustivel}</p>
            <p className={styles.km}>{Dados[5].km}</p>
          </div>
          <div>R$ 57.990</div>
        </Link>
        <Link to="/voyage" className={styles.carros} href="">
          <img
            src={Dados[6].imgFrente}
            alt="imgCarro"
            className={styles.imgCarro}
          />
          <div className={styles.carro}>{Dados[6].shortTitle}</div>
          <div className={styles.info}>
            <p className={styles.ano}>{Dados[6].ano}</p>
            <p className={styles.combustivel}>{Dados[6].combustivel}</p>
            <p className={styles.km}>{Dados[6].km}</p>
          </div>
          <div>R$ 57.990</div>
        </Link>
        <Link to="/undefined" className={styles.carros} href="">
          <img
            src={Dados[6].imgFrente}
            alt="imgCarro"
            className={styles.imgCarro}
          />
          <div className={styles.carro}>{Dados[6].shortTitle}</div>
          <div className={styles.info}>
            <p className={styles.ano}>{Dados[6].ano}</p>
            <p className={styles.combustivel}>{Dados[6].combustivel}</p>
            <p className={styles.km}>{Dados[6].km}</p>
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
