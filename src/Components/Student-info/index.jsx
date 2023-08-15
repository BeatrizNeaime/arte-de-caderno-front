import React, { useLocation } from "react";
import {
  Column,
  ContentContainer,
  ImgContainer,
  Linha,
  PageContainer,
  Title,
} from "../../styles/sharedStyles";
import NavBoot from "../Navbar";
import styled from "styled-components";

const StudentInfo = () => {
  return (
    <PageContainer>
      <ImgContainer img={require("../../assets/img/op-background.png")}>
        <NavBoot />
        <ContentContainer>
          <Title
            style={{
              fontFamily: "JetBrains Mono",
              textTransform: "uppercase",
            }}
          >
            informações do aluno
          </Title>
          <Column
            width={"80%"}
            style={{ gap: "2rem", padding: "1rem" }}
          >
            <Linha>
              <Linha style={{ justifyContent: "flex-start" }}>
                <Item>nome completo:</Item>
                <ItemData></ItemData>
              </Linha>
              <Linha style={{ justifyContent: "flex-start" }}>
                <Item>data de nascimento:</Item>
                <ItemData></ItemData>
              </Linha>
            </Linha>
            <Linha>
              <Linha style={{ justifyContent: "flex-start" }}>
                <Item>cpf:</Item>
                <ItemData></ItemData>
              </Linha>
              <Linha style={{ justifyContent: "flex-start" }}>
                <Item>cep:</Item>
                <ItemData></ItemData>
              </Linha>
            </Linha>
            <Linha>
              <Linha style={{ justifyContent: "flex-start" }}>
                <Item>cidade:</Item>
                <ItemData></ItemData>
              </Linha>
              <Linha style={{ justifyContent: "flex-start" }}>
                <Item>estado:</Item>
                <ItemData></ItemData>
              </Linha>
            </Linha>
            <Linha>
              <Linha style={{ justifyContent: "flex-start" }}>
                <Item>escola:</Item>
                <ItemData>ifsuldeminas</ItemData>
              </Linha>

              <Linha style={{ justifyContent: "flex-start" }}>
                <Item>telefone:</Item>
                <ItemData></ItemData>
              </Linha>
            </Linha>
            <Linha>
              <Linha style={{ justifyContent: "flex-start" }}>
                <Item>e-mail:</Item>
                <ItemData></ItemData>
              </Linha>
            </Linha>
          </Column>
        </ContentContainer>
      </ImgContainer>
    </PageContainer>
  );
};

export default StudentInfo;

const ItemData = styled.p`
  font-family: "JetBrains Mono";
  font-weight: 700;
`;

const Item = styled(ItemData)`
  text-transform: uppercase;
`;
