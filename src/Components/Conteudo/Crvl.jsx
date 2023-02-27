import React from 'react';
import styles from './Conteudo.module.css';
import CrlvDigital from '../../assets/Conteudo/CRLV.jpg';

const Crvl = () => {
  return (
    <section className={`${styles.content} container`}>
      <h2>Saiba como baixar o seu CRLV digital</h2>
      <div className={styles.conteudo}>
        <img src={CrlvDigital} alt="" />
        <div>
          <p>
            Desde o dia 3 de agosto, mais de um milhão de proprietários de
            veículos do Estado do Rio podem baixar o CRLV digital de 2020 em
            seus aparelhos celulares ou tablets. A versão digital do documento,
            válida em todo o território nacional, substituiu completamente o
            documento obtido no Detran e pode ser acessada em até 5
            dispositivos. Além disso, quem quiser ter o documento em papel,
            poderá imprimir a versão digital em sua própria casa.
          </p>
          <p className={styles.spacer}></p>
          <p>
            “Além da praticidade, esse novo serviço nos ajudará a evitar
            aglomerações nas nossas unidades e, consequentemente, o contágio do
            coronavírus entre a população e nossos funcionários”, frisa o
            presidente do Detran.RJ, Marcello Braga Maia.
          </p>
          <p className={styles.spacer}></p>
          <p>
            Para ter a versão digital do documento é preciso acessar o site do
            Departamento Nacional de Trânsito (DENATRAN) ou baixar o aplicativo
            Carteira Digital de Trânsito, disponível gratuitamente para os
            sistemas Android e IOS. Apenas os proprietários que tiverem quitado
            os boletos de GRT (Guia de Recolhimento de Taxa, disponível no site
            do Bradesco) e DPVAT (seguro obrigatório devido à Seguradora Líder)
            conseguirão fazer o download do documento.
          </p>
          <p className={styles.spacer}></p>
          <p>
            No aplicativo Carteira Digital, um tutorial explica como realizar o
            procedimento, no link:
            https://servicos.serpro.gov.br/carteira-digital/. O primeiro passo é
            se registrar, pelo próprio aplicativo, no gov.br, que é o cadastro
            do governo federal para documentação em geral. Nele, o motorista
            também pode baixar a CNH Digital, válida em todo o território
            nacional.
          </p>
          <p className={styles.spacer}></p>
          <h3>VEJA O PASSO A PASSO PARA OBTER O CRLV DIGITAL:</h3>
          <p>
            1. Instale o aplicativo CDT – Carteira Digital de Trânsito no seu
            celular
          </p>
          <p>2. Cadastre o usuário</p>
          <p>
            – Uma vez instalado o app, abra e selecione: “Entrar com gov.br”
          </p>
          <p>– Na tela seguinte, informe CPF e selecione “Próxima”</p>
          <p>
            – Na próxima tela, crie uma conta e, após criá-la, retorne ao
            aplicativo e clique em “Entra com gov.br
          </p>
          <p>3. Baixe o CRLV Digital</p>
          <p>– Faça o login</p>
          <p>– Selecione “Veículos”</p>
          <p>
            – Informe o número do Renavam e o Número de segurança do CRV (é o
            antigo DUT, com 12 caracteres)
          </p>
          <p>– Selecione “Incluir” e estará pronto o seu CRLV Digital</p>
          <p className={styles.spacer}></p>
          <p>
            Caso a pessoa já tenha sido usuário do antigo aplicativo CNH
            Digital, basta atualizá-lo para obter o app da Carteira Digital de
            Trânsito com a CNH disponibilizada automaticamente.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Crvl;
