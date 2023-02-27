import React from 'react';
import styles from './Conteudo.module.css';
import CnhCassada from '../../assets/Conteudo/cnh-cassada.jpg';

const Cnh = () => {
  return (
    <section className={`${styles.content} container`}>
      <img src={CnhCassada} alt="" />
      <h2>Cuidado para não ter a cnh suspensa por multas</h2>
      <p>
        Você sabia que a sua CNH, a Carteira Nacional de Habilitação, pode ser
        suspensa com o acúmulo de multas? Mas como isso funciona, afinal?
      </p>
      <p className={styles.spacer}></p>
      <p>
        Aqui neste artigo, vamos falar a respeito dos pontos na carteira de
        motorista que cada tipo de multa gera, além de como esses pontos podem
        causar a suspensão de seu direito de dirigir.
      </p>
      <p className={styles.spacer}></p>
      <p>Multas de trânsito e suas penalidades</p>
      <p className={styles.spacer}></p>
      <p>
        Ao desrespeitar uma lei de trânsito, estabelecida em nosso CTB, o Código
        de Trânsito Brasileiro, você estará cometendo uma infração de trânsito,
        que se for flagrada por um agente ou registrada por um equipamento
        eletrônico, vai gerar uma autuação.
      </p>
      <p className={styles.spacer}></p>
      <p>As autuações de trânsito podem gerar as seguintes penalidades:</p>
      <p>MULTA EM DINHEIRO</p>
      <p>PONTOS NA CARTEIRA</p>
      <p>SUSPENSÃO DA CARTEIRA</p>
      <p>APREENSÃO DO VEÍCULO</p>
      <p className={styles.spacer}></p>
      <p>
        A multa e os pontos ocorrem sempre, enquanto a suspensão automática e a
        apreensão do veículo são mais raras, ocorrendo apenas em tipos
        específicos de infração. Tanto a multa a ser paga quanto os pontos,
        obedecem ao critério da gravidade da infração, que pode ser:
      </p>
      <p className={styles.spacer}></p>
      <p>Infração LEVE: Multa de R$ 88,38 + 3 pontos</p>
      <p>Infração MÉDIA: Multa de R$ 130,16 + 4 pontos</p>
      <p>Infração GRAVE: Multa de R$ 195,23 + 5 pontos</p>
      <p>Infração GRAVÍSSIMA: Multa de R$ 293,47 + 7 pontos</p>
      <p className={styles.spacer}></p>
      <h3>CNH suspensa: Quando acontece?</h3>
      <p className={styles.spacer}></p>
      <p>
        Algumas infrações consideradas “gravíssimas” possuem um fator de
        multiplicação no valor a ser pago de até 5x. Portanto, o valor de uma
        multa pode chegar a quase 1500 Reais. Algumas dessas infrações também
        acarretam a suspensão imediata da CNH.
      </p>
      <p className={styles.spacer}></p>
      <p>
        Por exemplo, a Multa por Excesso de Velocidade, que é a mais comum no
        Brasil, pode ser do tipo “média”, “grave” ou “gravíssima”, dependendo da
        velocidade excedida. Ela será considerada gravíssima quando a velocidade
        do veículo for de 50% além da velocidade permitida. Nesse caso, haverá
        também a suspensão da CNH por um período de 2 a 8 meses.
      </p>
      <p className={styles.spacer}></p>
      <p>
        Porém, como já dissemos anteriormente, os casos de suspensão imediata da
        carteira de motorista a partir de uma única multa não são comuns, mas há
        um outro cenário em que a suspensão pode ocorrer, que é pelo acúmulo de
        pontos na carteira.
      </p>
      <p className={styles.spacer}></p>
      <h3>Suspensão da CNH por pontos</h3>
      <p className={styles.spacer}></p>
      <p>
        Como vimos, cada infração gera pontos em sua carteira de habilitação. E
        se você acumular 20 pontos, a sua carteira também será suspensa. Vamos
        dar um exemplo. Cometendo 3 infrações médias e 3 infrações leves, você
        chega a 21 pontos e terá a CNH suspensa por um período de 6 meses a 1
        ano.
      </p>
      <p className={styles.spacer}></p>
      <p>
        Mas essa pontuação também tem validade, que é de 12 meses. Portanto, se
        você receber 3 pontos por uma infração leve, em 12 meses esses pontos
        expiram e não entram mais nessa conta.
      </p>
      <p className={styles.spacer}></p>
      <h3>Cuidado no trânsito!</h3>
      <p className={styles.spacer}></p>
      <p>
        As Leis de Trânsito servem para a nossa segurança. As multas são um
        alerta de que, desrespeitando a lei na ocasião, o motorista também
        correu risco de vida, ou colocou a vida de outras pessoas em risco.
      </p>
      <p className={styles.spacer}></p>
      <p>
        No Brasil, ocorrem cerca de 90 mil acidentes de trânsito todos os anos,
        apenas em rodovias federais. Eles deixam mais de 80 mil pessoas feridas
        e mais de 6 mil mortos. Grande parte desses acidentes ocorrem pelo
        desrespeito das leis de trânsito.
      </p>
      <p className={styles.spacer}></p>
      <p>
        Ninguém quer pagar uma multa, muito menos perder o direito de dirigir,
        não é verdade?
      </p>
      <p className={styles.spacer}></p>
      <p>
        Por isso, garanta esse direito obedecendo as leis de trânsito e com
        isso, você estará também preservando vidas!
      </p>
    </section>
  );
};

export default Cnh;
