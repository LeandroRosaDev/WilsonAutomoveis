import React from 'react';
import AnuncioHome from '../../assets/Home/AnuncioHome.png';
import CarroImg from '../../assets/Home/carro.png';
import Ferramenta from '../../assets/Home/ferramenta.png';
import Circle from '../../assets/Home/circle.png';
import styles from './AnuncioVeiculo.module.css';

const AnuncioVeiculo = () => {
  return (
    <section className={`${styles.container} container`}>
      <div>
        <img src={AnuncioHome} alt="" className={styles.carros} />
        <img src={Circle} alt="" className={styles.fundo} />
      </div>
      <div className={styles.content}>
        <div>
          <h1 className={styles.title}>Quer comprar ou vender seu veículo?</h1>
          <p>
            Pode colocar os seus carros à venda, registrando-se no nosso site.
            Venda o seu veículo da forma rápida e transparente. Cuidamos de toda
            parte burocrática para você.
          </p>
        </div>
        <div>
          <div className={styles.vantagens}>
            <img src={CarroImg} alt="" className={styles.carroImg} />
            <div>
              <h3>Diversos modelos</h3>
              <p>
                Temos certeza de que você encontrará veículos de modelos
                adequados em nosso site.
              </p>
            </div>
          </div>
          <div className={styles.vantagens}>
            <img src={Ferramenta} alt="" className={styles.carroImg} />
            <div>
              <h3>Seminovos</h3>
              <p>Todos os carros são revisados e possuem garantia de 90 dias</p>
            </div>
          </div>
        </div>
        <a href=""></a>
        <button className={styles.button}>
          <a
            target="_blank"
            href="https://wa.me/5521981731525?text=Olá,%20tudo%20bem?%20Somos%20a%20Wilson%20Automóveis,%20sinta-se%20a%20vontade%20para%20entrar%20em%20contato%20conosco"
            style={{ color: 'white', padding: '3.5rem' }}
          >
            Fale Conosco
          </a>
        </button>
      </div>
    </section>
  );
};

export default AnuncioVeiculo;
