import React from 'react';
import ronaldoImg from '../../assets/Home/ronaldoImg.png';
import jorgueImg from '../../assets/Home/jorgueImg.png';
import nauanniImg from '../../assets/Home/nauanniImg.png';
import roselaineImg from '../../assets/Home/roselaineImg.png';
import styles from './ComentáriosClientes.module.css';
import Avaliação from '../../assets/Home/avaliação.png';

const ComentáriosClientes = () => {
  return (
    <section className={styles.content}>
      <div className={styles.comments}>
        <div className={styles.title}>
          <img src={Avaliação} alt="" />
          <h1>O que os nossos clientes estão dizendo?</h1>
          <span>Opine você também!</span>
        </div>
        <div className={styles.comment}>
          <div>
            <h1>
              <span>"</span>
              Sou motorista de aplicativo e preciso do carro para trabalhar e na
              Wilson automóveis eu encontrei a oportunidade perfeita que cabia
              no meu bolso aliado a ótimas condições de pagamento e
              financiamento! Estou muito feliz e indico a Wilson Automóveis para
              amigos e familiares
              <span>"</span>
            </h1>
            <img src={ronaldoImg} alt="" />
            <p>Ronaldo Rocha</p>
          </div>
          <div>
            <h1>
              <span>"</span>
              Depois de muito procurar encontrei o meu carro dos sonhos na
              Wilson Automóveis, o atendimento foi sensacional e todo o cuidado
              com a documentação que eles tiveram foi um dos diferenciais que me
              fizeram virar cliente fiel deles
              <span>"</span>
            </h1>
            <img src={roselaineImg} alt="" />
            <p>Roselaine Santos</p>
          </div>
          <div>
            <h1>
              <span>"</span>
              Depois de rodar em aproximadamente 5 lojas das redondezas em busca
              do meu carro quase desisti pois minha ficha não aprovava em
              nenhuma. Mas na wilson automóveiseu fui aprovado no financiamento
              do meu veículo, estou muito feliz e agora com certeza só compro
              aqui
              <span>"</span>
            </h1>
            <img src={jorgueImg} alt="" />
            <p>Jorgue Rodrigues</p>
          </div>
          <div>
            <h1>
              <span>"</span>
              Estou muito feliz por ter conseguido comprar meu ford ka 2022 na
              Wilson Veículos, indiquei para o meu pai e ele já comprou o dele.
              Atendimento excelente carros de procedência valeu cada centavo
              investido
              <span>"</span>
            </h1>
            <img src={nauanniImg} alt="" />
            <p>Nauanni silva</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComentáriosClientes;
