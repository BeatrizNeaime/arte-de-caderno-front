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
  Button,
} from "../../styles/sharedStyles";
import NavBoot from "../../Components/Navbar";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import styled from "styled-components";
import {
  deepBlue,
  gmail,
  gmail_hover,
  green_rate,
  green_rate_hover,
  yellow_color,
} from "../../Components/UI/contants";
import Modal from "react-bootstrap/Modal";

const RatingView = () => {
  const desktop = useMediaQuery("(min-width: 768px)");
  const [nota, setNota] = useState(0);
  const [modalA, setModalA] = useState(false); // avaliar
  const [modalB, setModalB] = useState(false); // desclassificar

  const handleNota = (e) => {
    const nota = e.target.value.replace(/\D/g, "");
    if (!isNaN(+nota)) {
      if (nota >= 0 && nota <= 100) {
        setNota(+nota);
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
              fontFamily: "JetBrains Mono",
              textTransform: "uppercase",
              fontWeight: "600",
            }}
          >
            Em avaliação
          </Title>
          <Linha
            style={{ justifyContent: desktop ? "space-evenly" : "center" }}
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
                width={"80%"}
                style={{
                  gap: "1rem",
                  alignItems: "flex-start",
                  borderBottom: `1px solid ${deepBlue}`,
                  paddingBottom: "1rem",
                }}
              >
                <Linha
                  width={desktop ? "auto" : "100%"}
                  style={{
                    justifyContent: "flex-start",
                  }}
                >
                  <DrawLabel>título: </DrawLabel>
                  <DrawInfo>gatorujo</DrawInfo>
                </Linha>
                <Linha width={"auto"} style={{ justifyContent: "flex-start" }}>
                  <DrawLabel>categoria: </DrawLabel>
                  <DrawInfo>ninja</DrawInfo>
                </Linha>
                <Linha width={"auto"} style={{ justifyContent: "flex-start" }}>
                  <DrawLabel>tema: </DrawLabel>
                  <DrawInfo>natureza</DrawInfo>
                </Linha>
              </Column>
              <Column width={"80%"}>
                <Subtitle style={{ border: "none" }}>
                  Faça sua avaliação com um valor entre 0 e 100:
                </Subtitle>
                <Input
                  type="text"
                  value={nota}
                  onChange={handleNota}
                  style={{ textAlign: "right", paddingRight: "10px" }}
                />
                <Alert cor={yellow_color} style={{ borderRadius: "12px" }}>
                  <DrawInfo style={{ textTransform: "none" }}>
                    <b>ATENÇÃO:</b> a avaliação é feita apenas <b>UMA</b> vez e{" "}
                    <b>NÃO</b> pode ser alterada.
                  </DrawInfo>
                </Alert>
                <Linha style={{ margin: "1rem 0" }}>
                  <RateButton bg={gmail} hover={gmail_hover}>
                    Desclassificar
                  </RateButton>
                  <RateButton bg={green_rate} hover={green_rate_hover}>
                    avaliar
                  </RateButton>
                </Linha>
              </Column>
            </Column>
          </Linha>
        </ContentContainer>
        <DiscardModal />
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

const RateButton = styled(Button)`
  background-color: ${(props) => props.bg};
  color: white;

  &:hover {
    background-color: ${(props) => props.hover};
  }
`;

const DiscardModal = () => {
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Desclassificar Obra?</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p style={{ textAlign: "justify" }}>
            Selecione o(s) motivo(s) que o levaram a crer que a obra{" "}
            {"<nome da obra>"} deva ser desclassificado:
          </p>
          <Column>
            <Input type="checkbox" />
          </Column>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">cancelar</Button>
          <RateButton bg={gmail} hover={gmail_hover}>
            desclassificar
          </RateButton>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};
