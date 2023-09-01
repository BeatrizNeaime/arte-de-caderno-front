import { useState } from "react";
import {
  Column,
  ContentContainer,
  ImgContainer,
  Linha,
  PageContainer,
  Subtitle,
  Title,
  Input,
  Alert,
  Label
} from "../../styles/sharedStyles";
import NavBoot from "../../Components/Navbar";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import styled from "styled-components";
import {
  colors, fonts
} from "../../Components/UI/contants";
import DiscardModal from "../../Components/DismissModal";
import RateModal from "../../Components/RateModal";
import {Navigate} from 'react-router-dom'

const RatingView = () => {
  const desktop = useMediaQuery("(min-width: 768px)");
  const [nota, setNota] = useState(0);
  const [redirect, setRedirect] = useState(false)

  const handleNota = (e) => {
    const nota = e.target.value.replace(/\D/g, "");
    if (!isNaN(nota)) {
      if (nota >= 0 && nota <= 100) {
        setNota(nota);
      }
    }
  };

  return (
    <PageContainer>
      <ImgContainer img={require("../../assets/img/op-background.png")}>
        <NavBoot />
        <ContentContainer>
          <Title
            style={{
              fontFamily: `${fonts.jetbrains}`,
              textTransform: "uppercase",
              fontWeight: "600",
            }}
          >
            Em avaliação
          </Title>
          <Linha
            style={{
              justifyContent: desktop ? "space-evenly" : "center",
            }}
            width={"90%"}
          >
            <Column width={desktop ? "60%" : "100%"}>
              <DrawContainer width={"90%"}>
                <img
                  src={require("../../assets/img/gatorujo.jpg")}
                  style={{ height: "100%" }}
                />
              </DrawContainer>
            </Column>
            <Column
              width={desktop ? "40%" : "100%"}
              style={{
                alignItems: "flex-start",
                gap: "1rem",
              }}
            >
              <Column
                width={desktop ? "80%" : "100%"}
                style={{
                  gap: "1rem",
                  alignItems: "flex-start",
                  borderBottom: `1px solid ${colors.deepBlue}`,
                  paddingBottom: "1rem",
                  paddingLeft: desktop ? 0 : "1rem",
                }}
              >
                <Linha
                  width={desktop ? "auto" : "100%"}
                  style={{
                    justifyContent: "flex-start",
                    flexDirection: "row",
                  }}
                >
                  <DrawLabel>título: </DrawLabel>
                  <DrawInfo>gatorujo</DrawInfo>
                </Linha>
                <Linha
                  width={"auto"}
                  style={{ justifyContent: "flex-start", flexDirection: "row" }}
                >
                  <DrawLabel>categoria: </DrawLabel>
                  <DrawInfo>ninja</DrawInfo>
                </Linha>
                <Linha
                  width={"auto"}
                  style={{ justifyContent: "flex-start", flexDirection: "row" }}
                >
                  <DrawLabel>tema: </DrawLabel>
                  <DrawInfo>natureza</DrawInfo>
                </Linha>
              </Column>
              <Column
                width={desktop ? "80%" : "100%"}
                style={{
                  padding: desktop ? 0 : "0 1rem",
                }}
              >
                <Subtitle style={{ border: "none" }}>
                  Faça sua avaliação com um valor entre 0 e 100:
                </Subtitle>
                <Input
                  type="text"
                  value={nota}
                  onChange={handleNota}
                  style={{ textAlign: "right", paddingRight: "10px" }}
                />
                <Alert cor={colors.yellow_color} style={{ borderRadius: "12px" }}>
                  <DrawInfo style={{ textTransform: "none" }}>
                    <b>ATENÇÃO:</b> a avaliação é feita apenas <b>UMA</b> vez e{" "}
                    <b>NÃO</b> pode ser alterada.
                  </DrawInfo>
                </Alert>
                <Linha style={{ margin: "1rem 0", flexDirection: "row" }}>
                  <DiscardModal />
                  <RateModal nota={nota} />
                </Linha>
              </Column>
            </Column>
          </Linha>
          <Linha style={{
              alignItems: 'baseline',
              justifyContent: "flex-start",
              padding: desktop ? "0 1.5rem" : "10px",
            }}
            
            >
            <img src={require('../../assets/img/icons/previous.png')} style={{
              height: "20px"
            }} />
            <Label onClick={()=> setRedirect(true)}  >
              Voltar
            </Label>
            {redirect && <Navigate to="/dashboard" replace />}
          </Linha>
        </ContentContainer>
      </ImgContainer>
    </PageContainer>
  );
};

export default RatingView;

const DrawLabel = styled.p`
  text-transform: uppercase;
  font-family: "JetBrains Mono";
  font-weight: 600;
`;

const DrawInfo = styled(DrawLabel)`
  font-weight: 500;
  text-transform: capitalize;
`;

const DrawContainer = styled.div`
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: white;
  background-repeat: no-repeat;
  background-size: contain;
  border: 1px solid black;
  width: ${(props) => props.width};
  object-fit: cover;
`;
