import React from 'react';
import KmImg from '../../assets/Conteudo/KM.jpg';
import styles from './Conteudo.module.css';

const Km = () => {
  return (
    <section className={`${styles.content} container`}>
      <h2>Como identificar quilometragem adulterada?</h2>
      <div className={styles.conteudo}>
        <img src={KmImg} alt="" />
        <div>
          <p>
            Na hora de comprar um veículo seminovo ou usado, a quilometragem é
            uma das coisas importantes que se deve avaliar.
          </p>
          <p className={styles.spacer}></p>
          <p>
            Infelizmente, existem casos de pessoas de má fé que conseguem
            adulterar o equipamento, que passa a mostrar uma numeração que não
            representa a real quantidade de Km que o veículo rodou.
          </p>
          <p className={styles.spacer}></p>
          <p>
            Neste artigo, vamos mostrar como é possível identificar veículos com
            a quilometragem adulterada, para não cair nesse tipo de golpe.
          </p>
          <p className={styles.spacer}></p>
          <h4>Porque a quilometragem é importante?</h4>
          <p className={styles.spacer}></p>
          <p>
            O ano de fabricação de um veículo não é o único indicativo do quão
            novo ele possa estar.
          </p>
          <p className={styles.spacer}></p>
          <p>
            Quanto mais um veículo é utilizado, mais as suas peças e componentes
            se desgastam, já que possuem uma determinada vida útil. Por isso, um
            veículo com baixa quilometragem costuma estar mais conservado e,
            provavelmente, demorará mais para dar algum tipo de problema.
          </p>
          <p className={styles.spacer}></p>
          <p>
            Dessa forma, é possível que um veículo mais antigo esteja muito mais
            conservado do que um veículo mais novo.
          </p>
          <p className={styles.spacer}></p>
          <p>
            Um seminovo do ano pode ter rodado tanto, que seja um mal negócio,
            enquanto outro com alguns anos de fabricação possa ter rodado tão
            pouco, que seja um excelente negócio.
          </p>
          <p className={styles.spacer}></p>
          <p>
            Carros com baixa quilometragem podem ter um valor bem acima do
            normal e com razão, por estarem praticamente novos!
          </p>
          <p className={styles.spacer}></p>
          <p>
            Isso é fácil de verificar, na maioria dos casos. Se você estiver em
            uma concessionária séria e com nome no mercado, a quilometragem que
            você vê no painel dos carros será certamente a quilometragem real do
            veículo.
          </p>
          <p className={styles.spacer}></p>
          <h4>Quilometragem adulterada</h4>
          <p className={styles.spacer}></p>
          <p>
            E nas situações em que você não tenha tanta confiança no vendedor?
            Normalmente não é aconselhável fazer negócios sem confiar em quem
            está vendendo, mas você pode se sentir mais confortável checando se
            a quilometragem pode ter sido adulterada.
          </p>
          <p className={styles.spacer}></p>
          <p>
            O nome do instrumento que marca a quilometragem no painel do veículo
            é HODÔMETRO, por isso, vamos ver o que você pode fazer para
            verificar se o hodômetro foi adulterado:
          </p>
          <p className={styles.spacer}></p>
          <h4>Manual e notas fiscais</h4>
          <p className={styles.spacer}></p>
          <p>
            Peça pra ver o manual do carro e as notas fiscais de serviços
            realizados no veículo. É possível conferir datas e quilometragens
            anotadas nessas ocasiões, para checar se batem com a que é mostrada
            no painel.
          </p>
          <p className={styles.spacer}></p>
          <p>
            Desconfie de veículos que não possuem esses dados disponíveis para
            você checar.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Km;
