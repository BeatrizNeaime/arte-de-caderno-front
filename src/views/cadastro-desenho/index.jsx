import React, { useEffect, useState, useContext } from "react";
import {
  PageContainer,
  ImgContainer,
  ContentContainer,
  Title,
  Linha,
  InputColumn,
  Label,
  Input,
  Mandatory,
  Select,
  Option,
  Button,
} from "../../styles/sharedStyles";
import NavBoot from "../../Components/Navbar";
import { LoggedContext } from "../../contexts/loggedContext";
import { userContext } from "../../contexts/userContext";
import { Navigate, useNavigate } from "react-router-dom";
import { CheckupContainer } from "../cadastro-usuario/components";
import { useMediaQuery } from "../../hooks/useMediaQuery";

const CadastroDesenhoView = () => {
  const desktop = useMediaQuery("(min-width: 768px)");
  const [redirect, setRedirect] = useState(false);
  const { isLogged } = useContext(LoggedContext);
  const { user } = useContext(userContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogged) {
      setRedirect(true);
    }
  }, []);

  const postDraw = () => {};

  return (
    <PageContainer>
      {redirect && <Navigate to="/login" replace />}
      <ImgContainer img={require("../../assets/img/op-background.png")}>
        <NavBoot currentPage={"Perfil"} />
        <ContentContainer>
          <CheckupContainer width={"90%"}>
            <Title>Cadastre seu desenho</Title>
            <form style={{ width: "100%" }} onSubmit={postDraw}>
              <Linha>
                <InputColumn width={desktop ? "50%" : "100%"}>
                  <Label>
                    Título:<Mandatory>*</Mandatory>
                  </Label>
                  <Input type="text" required />
                </InputColumn>
                <InputColumn width={desktop ? "50%" : "100%"}>
                  <Label>
                    Autor:<Mandatory>*</Mandatory>{" "}
                  </Label>
                  <Input type="text" disabled value={user.name} />
                </InputColumn>
              </Linha>
              <Linha style={{ marginTop: "1rem" }}>
                <InputColumn width={desktop ? "50%" : "100%"}>
                  <Label>
                    Categoria de participação:<Mandatory>*</Mandatory>
                  </Label>
                  <Select width={"100%"} required>
                    <Option value="" selected disabled>
                      Selecione...
                    </Option>
                    <Option value="ninja">Ninja</Option>
                    <Option value="super-ninja">Super Ninja</Option>
                  </Select>
                </InputColumn>
                <InputColumn width={desktop ? "50%" : "100%"}>
                  <Label>
                    Tema:<Mandatory>*</Mandatory>
                  </Label>
                  <Select width={"100%"} required>
                    <Option value="" selected disabled>
                      Selecione...
                    </Option>
                    <Option value="">tema1</Option>
                    <Option value="">tema2</Option>
                  </Select>
                </InputColumn>
              </Linha>
              <Linha style={{ marginTop: "1rem" }}>
                <Button primary type="button" style={{ borderRadius: "12px" }}>
                  Escolher desenho
                </Button>
              </Linha>
              <Linha style={{ marginTop: "2rem", width: "auto", gap: "1rem" }}>
                <Button
                  onClick={() => {
                    navigate(-1);
                  }}
                >
                  Voltar
                </Button>
                <Button primary>Enviar</Button>
              </Linha>
            </form>
          </CheckupContainer>
        </ContentContainer>
      </ImgContainer>
    </PageContainer>
  );
};

export default CadastroDesenhoView;
