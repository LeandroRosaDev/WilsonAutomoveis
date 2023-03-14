import React from 'react';
import styles from './Contato.module.css';
import Telefone from '../../assets/Contato/telefone.png';
import Gps from '../../assets/Contato/GPS.png';
import Email from '../../assets/Contato/email.png';
import Banner from '../../assets/Contato/contato.jpg';

const Contato = () => {
  return (
    <section className={`${styles.contato} container`}>
      <img src={Banner} alt="" />
      <div className={styles.content}>
        <a href="tel:+5521981731525">
          <img src={Telefone} alt="telefone" />
          <h1>ATENDIMENTO AO CLIENTE</h1>
          <h2>ATENDIMENTO</h2>
          <p>(21) 9 8173 1525</p>
        </a>
        <a href="mailto:contato@wilsonautomoveis.com">
          <img src={Email} alt="Mapa" />
          <h1>EMAIL</h1>
          <h2>EMAIL</h2>
          <p>vendas@wilsonautomóveis</p>
        </a>
        <a
          href="https://www.google.com/maps/place/R.+Bela+Vista,+50+-+Vilar+dos+Teles,+S%C3%A3o+Jo%C3%A3o+de+Meriti+-+RJ,+25560-010/@-22.7682324,-43.3793758,17z/data=!3m1!4b1!4m5!3m4!1s0x9965a4cc43de49:0xaedb7db8e072f0e5!8m2!3d-22.7682374!4d-43.3771871"
          target="_blank"
        >
          <img src={Gps} alt="Email" />
          <h1>NOSSA LOJA</h1>
          <h2>NOSSA LOJA</h2>
          <p>Venha nos fazer uma visita</p>
        </a>
      </div>
    </section>
  );
};

export default Contato;
