import React from 'react';
import LogoConteudo from '../../assets/Home/conteudo.png';
import CRLV from '../../assets/Home/crvldigitalconteudo.png';
import Quilometragem from '../../assets/Home/quilometragemconteudo.png';
import Uber from '../../assets/Home/uberConteudo.png';
import CNH from '../../assets/Home/cnhconteudo.png';
import styles from './UltimosConteudos.module.css';
import { Link } from 'react-router-dom';

const UltimosConteudos = () => {
  return (
    <section className={`${styles.content} container`}>
      <div className={styles.title}>
        <img src={LogoConteudo} alt="" />
        <h1>Últimos conteúdos</h1>
        <p>Fique por dentro do mercado automotivo</p>
      </div>
      <div className={styles.noticias}>
        <div>
          <Link to="/CrvlDigital" className={styles.infos}>
            <img src={CRLV} alt="Documento Veiculo" />
            <p>Saiba como baixar seu CRLV digital.</p>
            <button>Leia mais</button>
          </Link>
        </div>
        <div>
          <Link to="/Km" className={styles.infos}>
            <img src={Quilometragem} alt="Quilometragem" />
            <p>Como identificar quilometragem adulterada?</p>
            <button>Leia mais</button>
          </Link>
        </div>
        <div>
          <Link to="/MotoristaApp" className={styles.infos}>
            <img src={Uber} alt="Motorista de App" />
            <p>
              Afinal, vale a pena ser <br></br>motorista de aplicativo? Que
              carro você precisa ter?
            </p>
            <button>Leia mais</button>
          </Link>
        </div>
        <div>
          <Link to="Cnh" className={styles.infos}>
            <img src={CNH} alt="Carteira nacional de habilitação" />
            <p>
              Cuidado para não ter a sua CNH suspensa verifique agora sua
              pontuação!
            </p>
            <button>Leia mais</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UltimosConteudos;
