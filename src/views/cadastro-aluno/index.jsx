import React from "react";
import {
  ContentContainer,
  ImgContainer,
  PageContainer,
  Linha,
} from "../../styles/sharedStyles";
import NavBoot from "../../Components/Navbar";
import FormCadastroEstudante from "../../Components/FormCadastroEstudante";
import PreviousArrow from "../../Components/PreviousArrow";
import { useMediaQuery } from "../../hooks/useMediaQuery";

const CadastroAlunoView = ({ user }) => {
  const desktop = useMediaQuery("(min-width: 768px)");
  return (
    <PageContainer>
      <ImgContainer img={require("../../assets/img/op-background.png")}>
        <NavBoot />
        <ContentContainer>
          <FormCadastroEstudante user={user} />
          <Linha
            style={{
              justifyContent: "flex-start",
              width: `${desktop ? "80%" : "100%"}`
            }}
          >
            <PreviousArrow navigate={"dashboard"} />
          </Linha>
        </ContentContainer>
      </ImgContainer>
    </PageContainer>
  );
};

export default CadastroAlunoView;
