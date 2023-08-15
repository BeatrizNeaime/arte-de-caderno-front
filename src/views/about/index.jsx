import React from "react";
import {
  Column,
  ContentContainer,
  HistorySpan,
  ImgContainer,
  Linha,
  PageContainer,
  Subtitle,
  Title,
} from "../../styles/sharedStyles";
import NavBoot from "../../Components/Navbar";
import styled from "styled-components";
import { jetbrains } from "../../Components/UI/contants";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { Link } from "react-router-dom";

const objetivos = [
  "Estimular a liberdade de expressão através da arte.",
  "Incentivar a preservação dos espaços físicos e dos móveis das escolas públicas.",
  "Potencializar a criatividade dos participantes.",
  "Desenvolver habilidades de desenho e pintura.",
  "Promover o intercâmbio de conhecimentos, estilos e técnicas artísticas.",
  "Estimular momentos lúdicos e aproveitar o tempo livre em sala de aula.",
  "Realizar apresentações culturais e exposições.",
  "Dar visibilidade às instituições de ensino participantes, às obras de arte criadas nelas e às ações desenvolvidas por elas.",
  "Utilizar as mídias sociais para atividades educativas e criação de grupos com interesses em comum.",
  "Fornecer material visual e estatístico para estudos acadêmicos.",
  "Servir como um campo de experimentação para o desenvolvimento de conhecimentos em gestão e marketing de projetos educacionais.",
  "Estimular o uso de tecnologias para a criação de materiais gráficos publicitários e edição de imagens para estampas de produtos do Arte de Caderno (aplica-se aos alunos envolvidos diretamente na execução do projeto).",
];

const AboutView = () => {
  const desktop = useMediaQuery("(min-width: 768px)");
  return (
    <PageContainer>
      <ImgContainer img={require("../../assets/img/op-background.png")}>
        <NavBoot currentPage={"Sobre"} />
        <ContentContainer>
          <Title>Sobre o projeto</Title>
          <Column style={{ padding: "1rem" }}>
            <Linha style={{ marginBottom: "2rem" }}>
              {desktop && (
                <Column width={"30%"}>
                  <Img
                    src={require("../../assets/img/gatorujo.jpg")}
                    alt={"Logo do IF"}
                  />
                  <Legenda>Mascote do Projeto</Legenda>
                </Column>
              )}
              <Column width={desktop ? "60%" : "100%"}>
                <Subtitle>O que é o Arte de Caderno?</Subtitle>
                <HistorySpan>
                  O Projeto Arte de Caderno iniciou em 2009 e, desde então, vem
                  sendo realizado em diversas instituições de ensino, promovendo
                  interação da comunidade escolar, das mais variadas idades,
                  recebendo suas obras e premiando as mais originais. Mesmo
                  havendo premiação, o projeto não é uma competição e sim uma
                  oportunidade para trazer a público talentos da arte. A
                  competição é uma ação educativa, que resgata desenhos feitos
                  de forma espontânea durante o ano letivo, geralmente nas
                  últimas páginas de cadernos, agendas, provas, dentre outros,
                  feitos por alunos ou funcionários das escolas. Com essa ação,
                  além de resgatar e valorizar essa forma de arte, pretende-se
                  fomentar a preservação do patrimônio público, incentivando
                  produções de desenhos no suporte correto, e não em mobiliários
                  como carteiras e armários. Desta forma, o projeto contribui
                  com a diminuição dos danos ao espaço físico e,
                  consequentemente, a necessidade de reparos e a sobrecarga dos
                  profissionais da limpeza.
                </HistorySpan>
              </Column>
            </Linha>
            <Linha style={{ marginBottom: "2rem" }}>
              <Column width={desktop ? "60%" : "100%"}>
                <Subtitle>Um pouco mais sobre o projeto</Subtitle>
                <HistorySpan>
                  Muitas vezes, quando não estamos prestando muita atenção nas
                  aulas ou em explicações, acabamos desenhando e fazendo
                  rabiscos nos nossos cadernos. Sem perceber, criamos
                  verdadeiras obras de arte. Infelizmente, muitos desses
                  desenhos acabam sendo jogados no lixo quando o ano escolar
                  termina, porque no próximo ano teremos novas páginas em branco
                  para preencher. Pensando nisso, surgiu o Projeto Arte de
                  Caderno, com o objetivo de resgatar esses desenhos feitos sem
                  intenção, que surgem espontaneamente em vários momentos, como
                  uma forma livre de expressão artística.
                  <br></br>
                  <br></br>O projeto também incentiva a preservação da escola,
                  orientando que os desenhos devem ser feitos nos cadernos para
                  que possam ser guardados para a próxima edição do Arte de
                  Caderno, em vez de serem feitos em paredes e mesas, o que
                  sobrecarrega os profissionais de limpeza e causa danos ao
                  patrimônio público. A premiação do projeto inclui produtos
                  como agendas, calendários, camisetas, canecas, bonés e
                  mochilas, todos criados e estampados com as imagens capturadas
                  e tratadas pelo próprio projeto. Dessa forma, o projeto
                  oferece aos alunos experiências e oportunidades de aprendizado
                  em artes, marketing, empreendedorismo e outras áreas. O Arte
                  de Caderno é um projeto educacional e não tem fins lucrativos.
                  Com o auxílio das redes sociais, programas de TV e mídia
                  impressa, o projeto ganhou visibilidade e, em 2010,
                  percebeu-se a necessidade de expandir os horizontes.
                  <br></br>
                  <br></br>A iniciativa passou então a abranger outras regiões
                  do estado de Santa Catarina, recebendo trabalhos de várias
                  cidades para a edição de 2011. As projeções indicavam um
                  aumento no número de participantes nos próximos anos. Com o
                  apoio do Instituto Federal de Santa Catarina (IFSC) e do
                  Instituto Federal do Sul de Minas Gerais (IFSULDEMINAS), em
                  2014, o projeto superou as expectativas dos organizadores,
                  alcançando cinco estados. Isso marcou o início de uma grande
                  expansão, que continuou em 2015, atingindo 12 estados. Em 2016
                  e nos anos seguintes, o sucesso do projeto educacional
                  continuou a crescer, com mais participantes e abrangendo mais
                  regiões do Brasil. Durante esses anos, foram recebidas obras
                  de arte de 14 estados brasileiros.
                  <br></br>
                  <br></br>O Arte de Caderno continua promovendo a arte e a
                  troca de conhecimento, com um alcance cada vez maior a cada
                  edição, medida pelo grande número de visualizações nas redes
                  sociais e pela quantidade de obras capturadas a cada ano. As
                  atividades do projeto são contínuas, com um grupo de alunos e
                  servidores voluntários trabalhando nas atividades ao longo dos
                  anos letivos. Muitos deles fazem parte da equipe organizadora
                  desde o início do projeto, em 2009.
                  <br></br>
                  <br></br>
                  Na última edição do concurso, escolas de 17 estados do Brasil
                  participaram. Por causa do grande impacto, em 2021, finalmente
                  conseguimos colocar em prática a informatização do projeto.
                  Com a ajuda de{" "}
                  <Link
                    to="/desenvolvedores"
                    style={{ textDecoration: "none" }}
                  >
                    <LinkDevs>estudantes e professores</LinkDevs>
                  </Link>{" "}
                  do curso de Engenharia de Computação, começamos a criar o
                  Portal Arte de Caderno. Esse site irá reunir uma galeria de
                  obras, além de permitir a inscrição de alunos e o envio de
                  desenhos.
                </HistorySpan>
              </Column>
              <Column width={desktop ? "30%" : "100%"} style={{ gap: "1rem" }}>
                <Column>
                  <Img src={require("../../assets/img/historia/2009.jpg")} />
                  <Legenda>Equipe de 2009 - IEE, Florianópolis </Legenda>
                </Column>
                <Column>
                  <Img src={require("../../assets/img/historia/2018.jpg")} />
                  <Legenda>
                    Equipe de 2018 - IFSULDEMINAS, Poços de Caldas
                  </Legenda>
                </Column>
              </Column>
            </Linha>
            <Linha style={{ marginBottom: "2rem" }}>
              <Column width={"90%"} style={{ gap: "1rem" }}>
                <Subtitle>Nossos Objetivos</Subtitle>
                <HistorySpan>
                  O objetivo principal é proporcionar aos alunos um espaço onde
                  possam se expressar e compartilhar sua arte espontânea, além
                  de incentivar a preservação do patrimônio público e oferecer
                  experiências para a construção de conhecimento em diferentes
                  áreas. Alguns objetivos específicos são:
                </HistorySpan>
                <Lista>
                  {objetivos.map((obj, index) => {
                    return <li key={index}>{obj}</li>;
                  })}
                </Lista>
              </Column>
            </Linha>
            <Linha>
              <Column width={"90%"}>
                <Subtitle>Como o Projeto funciona?</Subtitle>
                <HistorySpan style={{ alignSelf: "flex-start" }}>
                  O Projeto é dividido em cinco etapas:
                  <Ordered>
                    <li>
                      <b>I.</b> Apresentação do projeto e divulgação do
                      cronograma das atividades para a comunidade escolar.
                    </li>
                    <li>
                      <b>II.</b> Captação das obras e seleção.
                    </li>
                    <li>
                      <b>III.</b> Exposição das obras
                    </li>
                    <li>
                      <b>IV.</b> Premiação
                    </li>
                    <li>
                      <b>V.</b> Análise e publicação dos resultados
                    </li>
                  </Ordered>
                  Após o término das atividades, a equipe do Arte de Caderno
                  realiza uma análise e registro dos dados obtidos durante o
                  processo.
                </HistorySpan>
              </Column>
            </Linha>
          </Column>
        </ContentContainer>
      </ImgContainer>
    </PageContainer>
  );
};

export default AboutView;

const Img = styled.img`
  object-fit: cover;
  height: 300px;
  border-radius: 6px;
`;

const Legenda = styled.p`
  font-family: ${jetbrains};
  font-size: 12px;
`;

const LinkDevs = styled.a`
  border-bottom: 2px dotted #d668b1;
  text-decoration: none;
  color: #000;
  &:hover {
    color: #d668b1;
    cursor: pointer;
  }
`;

const Lista = styled.ul`
  list-style-type: circle;
  text-align: justify;
  margin-top: 0.5rem;
`;

const Ordered = styled.ol`
  text-align: justify;
  margin-top: 0.5rem;
`;
