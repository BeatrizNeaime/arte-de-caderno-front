import React from "react";
import {
  ContentContainer,
  ImgContainer,
  Linha,
  PageContainer,
  Title,
} from "../../styles/sharedStyles";
import NavBoot from "../../Components/Navbar";
import devs from "../../hooks/devs";
import DevsCard from "../../Components/Devs";

const DesenvolvedoresView = () => {
  return (
    <PageContainer>
      <ImgContainer img={require("../../assets/img/op-background.png")}>
        <NavBoot currentPage={"Sobre"} />
        <ContentContainer>
          <Title>Os Desenvolvedores</Title>
          <Linha>
           
          </Linha>
        </ContentContainer>
      </ImgContainer>
    </PageContainer>
  );
};

export default DesenvolvedoresView;
