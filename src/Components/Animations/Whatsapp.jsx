import React from 'react';
import styles from './Whatsapp.module.css';
import whatsapp from '../../assets/whatsapp.png';

const Whatsapp = () => {
  return (
    <a
      target="_blank"
      href="https://wa.me/5521981731525?text=Olá,%20tudo%20bem?%20Somos%20a%20Wilson%20Automóveis,%20sinta-se%20a%20vontade%20para%20entrar%20em%20contato%20conosco"
      className={styles.botao}
    >
      <img src={whatsapp} alt="Botão do WhatsApp" />
    </a>
  );
};

export default Whatsapp;
