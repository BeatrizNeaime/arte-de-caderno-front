import { useState, useEffect } from "react";
import {
  ContentContainer,
  ImgContainer,
  PageContainer,
  Linha,
  Column,
} from "../../styles/sharedStyles";
import { loadHome } from "../../services/loadHome";
import NavBoot from "../../Components/Navbar";
import Spotlight from "../../Components/Spotlight";
import NewsNotebook from "../../Components/NewsNotebook";
import { useMediaQuery } from "src/hooks/useMediaQuery";
import { styled } from "styled-components";
import { fonts } from "src/Components/UI/contants";

const HomeView = () => {
  const desktop = useMediaQuery("(min-width: 768px)");
  const [data, setData] = useState(null);

  useEffect(() => {
    const res = loadHome();
    setData(res);
  }, []);

  return (
    <PageContainer>
      <ImgContainer img={require("../../assets/img/op-background.png")}>
        <NavBoot currentPage={"Início"} />
        <ContentContainer style={{ gap: "1rem" }}>
          <Linha>
            <Column
              width={desktop ? "50%" : "100%"}
              style={{
                justifyContent: "center",
                alignItems: "flex-start",
                padding: "1rem",
              }}
            >
              <Phrase>Liberte sua criatividade em local apropriado</Phrase>
              <Phrase>Participe do Arte de Caderno 2023!</Phrase>
            </Column>
            <Column width={desktop ? "50%" : "100%"}>
              <Img src={require("../../assets/img/gatorujo.jpg")} />
            </Column>
          </Linha>
        </ContentContainer>
      </ImgContainer>
    </PageContainer>
  );
};

export default HomeView;

const Img = styled.img`
  height: 80vh;
  width: auto;
`;

const Phrase = styled.p`
  font-family: ${fonts.jetbrains};
  font-size: 20px;
`;
