import React from 'react';
import styles from './Carro.module.css';
import Frente6 from '../../../assets/Veiculos/Carros/Carro6/Frente6.jpg';
import FrenteC6 from '../../../assets/Veiculos/Carros/Carro6/FrenteC6.jpg';
import FrenteM6 from '../../../assets/Veiculos/Carros/Carro6/FrenteM6.jpg';
import IntC6 from '../../../assets/Veiculos/Carros/Carro6/IntC6.jpg';
import IntF6 from '../../../assets/Veiculos/Carros/Carro6/IntF6.jpg';
import IntM6 from '../../../assets/Veiculos/Carros/Carro6/IntM6.jpg';
import IntP6 from '../../../assets/Veiculos/Carros/Carro6/IntP6.jpg';
import IntTras6 from '../../../assets/Veiculos/Carros/Carro6/IntTras6.jpg';
import LadoM6 from '../../../assets/Veiculos/Carros/Carro6/LadoM6.jpg';
import LadoC6 from '../../../assets/Veiculos/Carros/Carro6/LadoC6.jpg';
import Radio6 from '../../../assets/Veiculos/Carros/Carro6/Radio6.jpg';
import Tras6 from '../../../assets/Veiculos/Carros/Carro6/Tras6.jpg';
import TrasC6 from '../../../assets/Veiculos/Carros/Carro6/TrasC6.jpg';
import Painel6 from '../../../assets/Veiculos/Carros/Carro6/Painel6.jpg';

const Carro6 = () => {
  const slides = [
    {
      id: 'slide1',
      urlImg: Frente6,
    },
    {
      id: 'slide2',
      urlImg: FrenteC6,
    },
    {
      id: 'slide3',
      urlImg: FrenteM6,
    },
    {
      id: 'slide4',
      urlImg: IntC6,
    },
    {
      id: 'slide5',
      urlImg: IntF6,
    },
    {
      id: 'slide6',
      urlImg: IntM6,
    },
    {
      id: 'slide7',
      urlImg: IntP6,
    },
    {
      id: 'slide8',
      urlImg: LadoM6,
    },
    {
      id: 'slide9',
      urlImg: LadoC6,
    },

    {
      id: 'slide10',
      urlImg: Radio6,
    },
    {
      id: 'slide11',
      urlImg: Tras6,
    },
    {
      id: 'slide12',
      urlImg: TrasC6,
    },
    {
      id: 'slide13',
      urlImg: IntTras6,
    },
    {
      id: 'slide14',
      urlImg: Painel6,
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
        <h1>Volkswagen T-Cross 1.0 TSI Flex 12v Aut 2021 &#9989;</h1>
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
          Chave Reserva &#10004; <span></span> IPVA Pago &#10004; <span></span>
          Licenciado &#10004; Automático &#10004;
        </p>
        <h1>Opcionais</h1>
        <p>
          Alarme &#10004; Ar quente &#10004; Direção Hidraulica &#10004; Porta
          copos &#10004; Travas elétricas &#10004; Vidros elétricos &#10004;
          Airbag motorista &#10004; Airbag passageiro &#10004; Cd player com
          Bluetooth&#10004;
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

export default Carro6;
