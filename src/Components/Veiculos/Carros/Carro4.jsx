import React from 'react';
import styles from './Carro.module.css';
import Frente4 from '../../../assets/Veiculos/Carros/Carro4/Frente4.jpg';
import FrenteC4 from '../../../assets/Veiculos/Carros/Carro4/FrenteC4.jpg';
import FrenteM4 from '../../../assets/Veiculos/Carros/Carro4/FrenteM4.jpg';
import IntC4 from '../../../assets/Veiculos/Carros/Carro4/IntC4.jpg';
import IntM4 from '../../../assets/Veiculos/Carros/Carro4/IntM4.jpg';
import IntP4 from '../../../assets/Veiculos/Carros/Carro4/IntP4.jpg';
import LadoC4 from '../../../assets/Veiculos/Carros/Carro4/LadoC4.jpg';
import LadoM4 from '../../../assets/Veiculos/Carros/Carro4/LadoM4.jpg';
import Tras4 from '../../../assets/Veiculos/Carros/Carro4/Tras4.jpg';
import TrasC4 from '../../../assets/Veiculos/Carros/Carro4/TrasC4.jpg';

const Carro4 = () => {
  const slides = [
    {
      id: 'slide1',
      urlImg: Frente4,
    },
    {
      id: 'slide2',
      urlImg: FrenteC4,
    },
    {
      id: 'slide3',
      urlImg: FrenteM4,
    },
    {
      id: 'slide4',
      urlImg: IntC4,
    },
    {
      id: 'slide5',
      urlImg: IntM4,
    },
    {
      id: 'slide6',
      urlImg: IntP4,
    },
    {
      id: 'slide7',
      urlImg: LadoC4,
    },
    {
      id: 'slide8',
      urlImg: LadoM4,
    },
    {
      id: 'slide9',
      urlImg: Tras4,
    },
    {
      id: 'slide10',
      urlImg: TrasC4,
    },
  ];

  const [active, setActive] = React.useState(0);
  const [position, setPosition] = React.useState(0);
  const contentRef = React.useRef();

  React.useEffect(() => {
    const { width } = contentRef.current.getBoundingClientRect();
    setPosition(-(width * active));
  }, [active]);

  function slidePrev() {
    if (active > 0) setActive(active - 1);
  }
  function slideNext() {
    if (active < slides.length - 1) setActive(active + 1);
  }

  return (
    <section className={styles.container}>
      <div className={styles.title}>
        <h1>Laguna 2.0 - 1995/1995 &#9989;</h1>
        <img src="" alt="" />
      </div>

      <div
        ref={contentRef}
        className={styles.content}
        style={{ transform: `translateX(${position}px)` }}
      >
        {slides.map((slide) => (
          <img
            key={slide.id}
            src={slide.urlImg}
            alt=""
            className={styles.item}
          />
        ))}
      </div>
      <nav className={styles.nav}>
        <button className={styles.button} onClick={slidePrev}>
          &#10096;
        </button>
        <button className={styles.button} onClick={slideNext}>
          &#10097;
        </button>
      </nav>
      <div className={styles.minContent}>
        {slides.map((slide) => (
          <img
            key={slide.id}
            src={slide.urlImg}
            alt=""
            className={styles.minItem}
          />
        ))}
      </div>
      <div className={styles.caracteristicas}>
        <h1>Características</h1>
        <p>
          IPVA Pago &#10004; <span></span>
          Licenciado &#10004; Manual &#10004;
        </p>
        <h1>Opcionais</h1>
        <p>
          Alarme &#10004; Ar quente &#10004; Travas elétricas &#10004; Vidros
          elétricos &#10004;
        </p>
        <h1>Informações do veículo</h1>
        <p>Wilson Automóveis, há mais de 15 anos realizando sonhos!</p>
        <p>
          Entradas a partir de R$ 1.000,00 e taxas de 0,89% a.m. Parcelamos sua
          entrada em até 12x. Aceitamos seu carro na troca com a melhor
          avaliação do seu usado. Pagamos até o valor da fipe, se precisar damos
          o troco na troca.
        </p>
        <button>
          <a
            target="_blank"
            href="https://wa.me/5521981731525?text=Olá,%20tudo%20bem?%20Somos%20a%20Wilson%20Automóveis,%20sinta-se%20a%20vontade%20para%20entrar%20em%20contato%20conosco"
            className={styles.buttonContato}
          >
            Entre em contato agora via Whatsapp
          </a>
        </button>
        <button>
          <a className={styles.buttonContato} href="tel:+5521981731525">
            Ou clique aqui e fale diretamente com um de nossos vendedores!
          </a>
        </button>
      </div>
    </section>
  );
};

export default Carro4;
