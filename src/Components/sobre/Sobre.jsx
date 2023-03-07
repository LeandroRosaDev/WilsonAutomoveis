import React from 'react';
import styles from './Sobre.module.css';
import Casal from '../../assets/Sobre/casal feliz.jpg';
import Tradição from '../../assets/Sobre/tradicao.png';
import Comunicação from '../../assets/Sobre/comunicacao.png';
import Contrato from '../../assets/Sobre/contrato.png';
import Estoque from '../../assets/Sobre/estoque.png';

const Sobre = () => {
  return (
    <section className={`${styles.sobre} container`}>
      <img src={Casal} alt="" />
      <div className={styles.content}>
        <h1>Quem somos</h1>
        <p>
          Com a proposta de priorizar o Atendimento ao cliente a satisfação da
          compra e o respeito no pós venda, a Wilson automóveis vem se
          destacando dia após dia no mercado de venda de carros novos e
          semi-novos.
        </p>
        <p>
          Hoje em dia é muito fácil fechar uma venda de veículo. O cliente sai
          da sua loja feliz pela conquista porém, alguns dias depois esse
          sentimento é substituído pela frustração por conta de pendências
          burocráticas,aperto financeiro e até mesmo por problemas com o próprio
          veículo.
        </p>
        <p>
          É por isso que nós da Wilson Automóveis nos preocupamos com a venda
          como um todo. Provendo sempre todo o suporte ao cliente para que ele
          tenha que se preocupar o mínimo possível com cartórios, vistorias,
          revisões (todos os veículos já saem revisados) e pagamento de
          parcelas. Procuramos saber das reais possibilidades financeiras dos
          clientes para que o negócio certo se encaixe na sua rotina sem gerar
          apertos financeiros. E isso é ótimo pois podemos dizer que nossos
          clientes saem daqui satisfeitos e permanecem satisfeitos por muito
          tempo”.
        </p>
        <p>Flávio Diretor da Wilson Automóveis</p>
      </div>
      <div className={styles.qualidades}>
        <div className={styles.container}>
          <img src={Tradição} alt="Tradição" className={styles.image} />
          <h3>Tradição</h3>
          <div className={styles.overlay}>
            <p className={styles.text}>
              <p> Tradição</p>
              Buscamos oferecer uma transação transparente e sem burocracia,
              proporcionando a melhor experiência ao nosso cliente.
            </p>
          </div>
        </div>
        <div className={styles.container}>
          <img src={Comunicação} alt="Comunicação" className={styles.image} />
          <h3>Atendimento</h3>
          <div className={styles.overlay}>
            <p className={styles.text}>
              <p> Atendimento</p>
              Um time de atendimento para auxiliar os nossos clientes em todos
              os processos de compra e venda de veículos.
            </p>
          </div>
        </div>
        <div className={styles.container}>
          <img src={Estoque} alt="Estoque" className={styles.image} />
          <h3>Estoque</h3>
          <div className={styles.overlay}>
            <p className={styles.text}>
              <p> Estoque</p>O maior estoque do Rio de Janeiro, sempre com
              preços competitivos e condições imperdíveis!
            </p>
          </div>
        </div>
        <div className={styles.container}>
          <img src={Contrato} alt="Contrato" className={styles.image} />
          <h3>Financiamento</h3>
          <div className={styles.overlay}>
            <p className={styles.text}>
              <p> Financiamento</p>A Wilson Automóveis é conveniada aos melhores
              bancos e financeiras do mercado, para facilitar sua aprovação ao
              crédito.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
