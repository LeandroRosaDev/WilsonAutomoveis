import React from 'react';
import Uber from '../../assets/Conteudo/motoApp.jpeg';
import styles from './Conteudo.module.css';

const MotApp = () => {
  return (
    <section className={`${styles.content} container`}>
      <h2>
        Afinal, vale a pena ser motorista de aplicativo? Que carro você precisa
        ter?
      </h2>
      <div className={styles.conteudo}>
        <img src={Uber} alt="" />
        <div>
          <p>
            Em meio à popularização da economia compartilhada e do uso de
            aplicativos para diferentes situações do dia a dia, trabalhar como
            motorista tem sido uma solução interessante para muitas pessoas.
          </p>
          <p className={styles.spacer}></p>
          <p>
            Se você está em busca de oportunidades ou precisa garantir uma renda
            extra, vale a pena entender mais sobre este ramo de atividade.
          </p>
          <p className={styles.spacer}></p>
          <p>
            Os aplicativos de transporte são uma verdadeira solução para a vida
            dos passageiros, já cansados dos problemas que os trânsitos das
            grandes cidades apresentam. Há também uma crescente preferência por
            viver sem carro próprio e aproveitar as vantagens que os aplicativos
            de motoristas oferecem. Assim, por ser um serviço de qualidade e
            fácil acesso, os seus resultados podem ser interessantes.
          </p>
          <p className={styles.spacer}></p>
          <p>
            Confira, a seguir, algumas vantagens em trabalhar como motorista:
          </p>
          <p className={styles.spacer}></p>
          <p>
            1. Autonomia profissional – É você quem tem a autonomia para fazer o
            seu sistema de trabalho, definir a melhor maneira para atuar
            profissionalmente e ir em busca dos valores que julga adequados para
            os seus interesses.
            <p>
              2. Flexibilidade de horários – Essa é uma das oportunidades mais
              interessantes para quem quer ser motorista. Podendo determinar os
              próprios horários, você consegue administrar o seu tempo de acordo
              com as suas prioridades.
            </p>
            <p>
              3. Definição do valor que deseja ganhar – Você consegue se
              planejar em função dos valores que precisa alcançar, considerando
              os locais em que as chances de lucro são maiores. Assim, esse é um
              tipo de negócio que valoriza a sua capacidade de percepção a
              respeito da movimentação na cidade e, é claro, de estar disponível
              para as corridas.
            </p>
            <p>
              4. Experiência de trabalhar com o que gosta – Trabalhar como
              motorista é uma oportunidade para que você realize um trabalho
              menos desgastante, já que estará fazendo aquilo que te faz bem.
            </p>
            <p>
              5. Ser dono do próprio negócio – O carro e as condições de
              trabalho são escolhas suas bem como os benefícios e resultados
              também exclusivamente seus. Assim, a cada investimento que queira
              fazer no seu instrumento de trabalho, quem sentirá os efeitos
              dessa melhoria será quem mais importa: você.
            </p>
            <p>
              6. Possibilidade de potencializar seus ganhos – Você conhece bem a
              sua cidade ou uma área específica dela? Então, pode se concentrar
              nessa região para atuar enquanto estiver dirigindo. Essa é uma
              estratégia que permite a você se diferenciar de outros motoristas.
            </p>
            <p>
              7. Possibilidade de obter renda extra – Não pretende deixar o seu
              trabalho? Sem problemas! Você pode trabalhar como motorista como
              fonte de renda extra e aumentar a sua receita no final do mês. É
              possível usar o veículo nas horas de folga ou, dependendo das
              circunstâncias, ganhar dinheiro simplesmente ligando o aplicativo
              durante o trajeto da sua casa até o trabalho e aceitando chamadas
              de passageiros.
            </p>
          </p>
        </div>
      </div>
    </section>
  );
};

export default MotApp;
