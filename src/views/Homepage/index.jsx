import { useState, useEffect } from "react";
import {
  ContentContainer,
  ImgContainer,
  PageContainer,
  Title,
  Column,
} from "../../styles/sharedStyles";
import Carrossel from "../../Components/Carrossel";
import { loadHome } from "../../services/loadHome";
import Loading from "../../Components/Loading";
import NavBoot from '../../Components/Navbar'
import Spotlight from "../../Components/Spotlight";
import NewsNotebook from "../../Components/NewsNotebook";

const HomeView = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const res = loadHome();
    setData(res);
  }, []);

  return (
    <PageContainer>
      <ImgContainer img={require("../../assets/img/op-background.png")}>
        <NavBoot currentPage={"Início"} />
        <ContentContainer style={{gap: "1rem"}} >
         <Spotlight nome={"Athos Henrique Lana Reis"} edicao={2022} img={"Athos_Henrique_Lana_Reis"} />
         <NewsNotebook/>
        </ContentContainer>
      </ImgContainer>
    </PageContainer>
  );
};

export default HomeView;
