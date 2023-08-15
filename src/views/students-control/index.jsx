import React from "react";
import {
  Column,
  ContentContainer,
  ImgContainer,
  Linha,
  PageContainer,
  Title,
} from "../../styles/sharedStyles";
import NavBoot from "../../Components/Navbar";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import Table from "../../Components/Table";
import { data_students } from "../../mocks/data-students";

const StudentsControlView = () => {
  const desktop = useMediaQuery("(min-width: 768px)");

  return (
    <PageContainer>
      <ImgContainer img={require("../../assets/img/op-background.png")}>
        <NavBoot />
        <ContentContainer>
          <Linha>
            <Title>Alunos Cadastrados</Title>
          </Linha>
          <Column
            width={desktop ? "80%" : "100%"}
          >
            <Table
              header={["nome", "escola", "desenhos", " "]}
              data={data_students}
            />
          </Column>
        </ContentContainer>
      </ImgContainer>
    </PageContainer>
  );
};

export default StudentsControlView;
