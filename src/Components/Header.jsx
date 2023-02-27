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

      <img
        className={styles.button}
        src={CompramosSeuCarro}
        alt="botão de comprar"
      />
    </header>
  );
};

export default Header;
