import React from 'react';
import styles from './Footer.module.css';
import LogoFooter from '../assets/logoFooter.png';
import Facebook from '../assets/facebook.svg';
import Instagram from '../assets/instagram.svg';
import Linkedin from '../assets/linkedin.svg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <nav className={styles.redesSociais}>
        <h1>
          <img src={LogoFooter} alt="logotipo branca" className={styles.logo} />
        </h1>
        <a
          className={styles.GPS}
          target="_blank"
          href="https://www.google.com/maps/place/R.+Bela+Vista,+50+-+Vilar+dos+Teles,+S%C3%A3o+Jo%C3%A3o+de+Meriti+-+RJ,+25560-010/@-22.7682324,-43.3793758,17z/data=!3m1!4b1!4m5!3m4!1s0x9965a4cc43de49:0xaedb7db8e072f0e5!8m2!3d-22.7682374!4d-43.3771871"
        >
          Rua Bela vista, 50 São joão de meriti - RJ
        </a>
        <a className={styles.telefone} href="tel:+5521981731525">
          +55 (21) 9 8173 1525
        </a>
        <a className={styles.email} href="mailto:contato@wilsonautomoveis.com">
          contato@wilsonautomóveis
        </a>
        <div>
          <a
            target="_blank"
            href="https://www.facebook.com/wilsonautomoveis10?mibextid=LQQJ4d"
          >
            <img src={Facebook} alt="" />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/wilsonautomoveis50/"
          >
            <img src={Instagram} alt="" />
          </a>
          <a
            target="_blank"
            href="https://www.facebook.com/wilsonautomoveis10?mibextid=LQQJ4d"
          >
            <img src={Linkedin} alt="" />
          </a>
        </div>
      </nav>

      <div className={styles.copy}>
        <p> ©2023 Wilson Automóveis. Todos os direitos reservados</p>
        <a target="_blank" href="https://www.instagram.com/leandro.rosa.1257/">
          Desenvolvido por Leandro Rosa
        </a>
      </div>
    </footer>
  );
};

export default Footer;
