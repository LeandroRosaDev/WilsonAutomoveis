import React from 'react';
import styles from './Header.module.css';
import Logo from '../assets/logoHeader.png';

import { Link } from 'react-router-dom';
import CompramosSeuCarro from '../assets/compramosCarro.png';

const Header = () => {
  return (
    <header className={styles.Header}>
      <Link to="/">
        <img className={styles.logo} src={Logo} alt="" />
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/sobre" className={styles.link}>
              Quem somos
            </Link>
          </li>
          <li>
            <Link to="/veiculo" className={styles.link}>
              Veículos
            </Link>
          </li>
          <li>
            <Link to="/mapa" className={styles.link}>
              Onde estamos
            </Link>
          </li>
          <li>
            <Link to="/contato" className={styles.link}>
              Fale conosco
            </Link>
          </li>
        </ul>
      </nav>
      <a
        target="_blank"
        href="https://wa.me/5521981731525?text=Olá,%20tudo%20bem?%20Somos%20a%20Wilson%20Automóveis,%20sinta-se%20a%20vontade%20para%20entrar%20em%20contato%20conosco"
        className={styles.button}
      >
        <img src={CompramosSeuCarro} alt="botão de comprar" />
      </a>
    </header>
  );
};

export default Header;
