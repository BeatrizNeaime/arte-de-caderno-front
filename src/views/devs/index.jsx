import React from "react";
import {
  ContentContainer,
  ImgContainer,
  Linha,
  PageContainer,
  Title,
} from "../../styles/sharedStyles";
import NavBoot from "../../Components/Navbar";
import devs from "../../mocks/devs";
import DevsCard from "../../Components/Devs";

const DesenvolvedoresView = () => {
  return (
    <PageContainer>
      <ImgContainer img={require("../../assets/img/op-background.png")}>
        <NavBoot currentPage={"Sobre"} />
        <ContentContainer>
          <Title>Os Desenvolvedores</Title>
          <Linha style={{
            flexWrap: "wrap",
            gap: "1rem",
            marginBottom: "1rem"
          }} >
           {
            devs.map((dev, index)=>{
              return(
                <DevsCard key={index} {...dev} />
              )
            })
           }
          </Linha>
        </ContentContainer>
      </ImgContainer>
    </PageContainer>
  );
};

export default DesenvolvedoresView;
