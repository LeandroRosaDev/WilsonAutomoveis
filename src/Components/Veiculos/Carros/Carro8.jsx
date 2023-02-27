import React from 'react';
import styles from './Carro.module.css';
import Frente7 from '../../../assets/Veiculos/Carros/Carro7/Frente7.jpg';
import FrenteC7 from '../../../assets/Veiculos/Carros/Carro7/FrenteC7.jpg';
import FrenteM7 from '../../../assets/Veiculos/Carros/Carro7/FrenteM7.jpg';
import IntM7 from '../../../assets/Veiculos/Carros/Carro7/IntM7.jpg';
import LadoM7 from '../../../assets/Veiculos/Carros/Carro7/LadoM7.jpg';
import LadoC7 from '../../../assets/Veiculos/Carros/Carro7/LadoC7.jpg';
import Tras7 from '../../../assets/Veiculos/Carros/Carro7/Tras7.jpg';
import TrasC7 from '../../../assets/Veiculos/Carros/Carro7/TrasC7.jpg';
import Painel7 from '../../../assets/Veiculos/Carros/Carro7/Painel7.jpg';

const Carro8 = () => {
  const slides = [
    {
      id: 'slide1',
      urlImg: Frente7,
    },
    {
      id: 'slide2',
      urlImg: FrenteC7,
    },
    {
      id: 'slide3',
      urlImg: FrenteM7,
    },
    {
      id: 'slide4',
      urlImg: IntM7,
    },
    {
      id: 'slide5',
      urlImg: LadoC7,
    },
    {
      id: 'slide6',
      urlImg: LadoM7,
    },
    {
      id: 'slide7',
      urlImg: Tras7,
    },
    {
      id: 'slide8',
      urlImg: TrasC7,
    },
    {
      id: 'slide9',
      urlImg: Painel7,
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
        <h1>Volkswagen Voyage 1.6 2011/2011 &#9989;</h1>
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
          Chave Reserva &#10004; <span></span> IPVA Pago &#10004; <span></span>
          Licenciado &#10004; Manual &#10004;
        </p>
        <h1>Opcionais</h1>
        <p>
          Alarme &#10004; Ar quente &#10004; Direção Hidraulica &#10004; Porta
          copos &#10004; Travas elétricas &#10004; Vidros elétricos &#10004; Cd
          player com Bluetooth&#10004;
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
            style={{
              color: 'white',
              padding: '0.5rem 10rem',
            }}
          >
            Entre em contato agora via Whatsapp
          </a>
        </button>
        <button>
          <a
            style={{
              color: 'white',
              padding: '0.5rem 8rem',
            }}
            href="tel:+5521981731525"
          >
            Ou clique aqui e fale diretamente com um de nossos vendedores!
          </a>
        </button>
      </div>
    </section>
  );
};

export default Carro8;
