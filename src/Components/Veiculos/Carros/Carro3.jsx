import React from 'react';
import styles from './Carro.module.css';
import Frente3 from '../../../assets/Veiculos/Carros/Carro3/Frente3.jpg';
import FrenteC3 from '../../../assets/Veiculos/Carros/Carro3/FrenteC3.jpg';
import FrenteM3 from '../../../assets/Veiculos/Carros/Carro3/FrenteM3.jpg';
import IntC3 from '../../../assets/Veiculos/Carros/Carro3/IntC3.jpg';
import IntF3 from '../../../assets/Veiculos/Carros/Carro3/IntF3.jpg';
import IntP3 from '../../../assets/Veiculos/Carros/Carro3/IntP3.jpg';
import LadoM3 from '../../../assets/Veiculos/Carros/Carro3/LadoM3.jpg';
import Painel3 from '../../../assets/Veiculos/Carros/Carro3/Painel3.jpg';
import TrasC3 from '../../../assets/Veiculos/Carros/Carro3/TrasC3.jpg';
import TrasM3 from '../../../assets/Veiculos/Carros/Carro3/TrasM3.jpg';

const Carro3 = () => {
  const slides = [
    {
      id: 'slide1',
      urlImg: Frente3,
    },
    {
      id: 'slide2',
      urlImg: FrenteC3,
    },
    {
      id: 'slide3',
      urlImg: FrenteM3,
    },
    {
      id: 'slide4',
      urlImg: IntC3,
    },
    {
      id: 'slide5',
      urlImg: IntF3,
    },
    {
      id: 'slide6',
      urlImg: IntP3,
    },
    {
      id: 'slide7',
      urlImg: LadoM3,
    },
    {
      id: 'slide8',
      urlImg: Painel3,
    },
    {
      id: 'slide9',
      urlImg: TrasC3,
    },
    {
      id: 'slide10',
      urlImg: TrasM3,
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
        <h1>Ford Ka Trail 1.0 12v Flex Mec 5p &#9989;</h1>
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
        <h1>Caracter??sticas</h1>
        <p>
          Chave Reserva &#10004; <span></span> IPVA Pago &#10004; <span></span>
          Licenciado &#10004; Manual &#10004;
        </p>
        <h1>Opcionais</h1>
        <p>
          Alarme &#10004; Ar quente &#10004; Dire????o Hidraulica &#10004; Porta
          copos &#10004; Travas el??tricas &#10004; Vidros el??tricos &#10004;
          Airbag motorista &#10004; Airbag passageiro &#10004; Cd player com
          MP3&#10004;
        </p>
        <h1>Informa????es do ve??culo</h1>
        <p>Wilson Autom??veis, h?? mais de 15 anos realizando sonhos!</p>
        <p>
          Entradas a partir de R$ 1.000,00 e taxas de 0,89% a.m. Parcelamos sua
          entrada em at?? 12x. Aceitamos seu carro na troca com a melhor
          avalia????o do seu usado. Pagamos at?? o valor da fipe, se precisar damos
          o troco na troca.
        </p>
        <button>
          <a
            target="_blank"
            href="https://wa.me/5521981731525?text=Ol??,%20tudo%20bem?%20Somos%20a%20Wilson%20Autom??veis,%20sinta-se%20a%20vontade%20para%20entrar%20em%20contato%20conosco"
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

export default Carro3;
