import { useState, useContext, useEffect } from "react";
import {
  PageContainer,
  ImgContainer,
  ContentContainer,
  Title,
  Linha,
  Column,
  InputColumn,
  Label,
  Mandatory,
  Input,
  Button,
  Form,
} from "../../styles/sharedStyles";
import NavBoot from "../../Components/Navbar";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import styled from "styled-components";
import { userContext } from "../../contexts/userContext";
import { Navigate } from "react-router-dom";
import { LoggedContext } from "../../contexts/loggedContext";

const ProfileView = () => {
  const desktop = useMediaQuery("(min-width: 768px)");
  const [redirect, setRedirect] = useState(false);
  const [edit, setEdit] = useState(false);
  const { user } = useContext(userContext);
  const { isLogged } = useContext(LoggedContext);

  useEffect(() => {
    if (!isLogged) {
      setRedirect(true);
    }
  }, []);

  return (
    <PageContainer>
      {redirect && <Navigate to="/login" replace />}
      <ImgContainer
        img={require("../../assets/img/op-background.png")}
        
      >
        <NavBoot currentPage={"Perfil"} />
        <ContentContainer>
          <Column
            width={desktop ? "70%" : "100%"}
            style={{
              backgroundColor: "white",
              backdropFilter: "blur(5px)",
              border: "1px solid black",
              padding: "1rem",
              borderRadius: "12px",
            }}
          >
            <Linha
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "baseline",
              }}
            >
              <Title>Perfil</Title>
              <ProfileIcon
                src={require("../../assets/img/icons/create-1.webp")}
                onClick={() => setEdit(true)}
              />
            </Linha>
            <Form>
              <Linha>
                <InputColumn width={desktop ? "50%" : "100%"}>
                  <Label>
                    Nome completo:<Mandatory>*</Mandatory>
                  </Label>
                  <Input
                    name="name"
                    value={user.name}
                    disabled={!edit}
                  />
                </InputColumn>
                <InputColumn width={desktop ? "30%" : "100%"}>
                  <Label>Data de Nascimento:<Mandatory>*</Mandatory>
                  </Label>
                  <Input value={user.bday} name="bday" disabled/>
                </InputColumn>
                <InputColumn width={desktop ? "20%" : "100%"}>
                  <Label>
                    CPF:<Mandatory>*</Mandatory>
                  </Label>
                  <Input value={user.cpf} name="cpf" disabled/>
                </InputColumn>
              </Linha>
              <Linha>
                <InputColumn width={desktop ? "20%" : "100%"}>
                  <Label>
                    Telefone:<Mandatory>*</Mandatory>
                  </Label>
                  <Input
                    name="cel"
                    value={user.cel}
                    disabled={!edit}
                  />
                </InputColumn>
                <InputColumn width={desktop ? "60%" : "100%"}>
                  <Label>E-mail:<Mandatory>*</Mandatory>
                  </Label>
                  <Input value={user.email} name="email" disabled={!edit}/>
                </InputColumn>
                <InputColumn width={desktop ? "20%" : "100%"}>
                  <Label>
                    CEP:<Mandatory>*</Mandatory>
                  </Label>
                  <Input value={user.cep} name="cep" disabled={!edit}/>
                </InputColumn>
              </Linha>
              <Linha>
                <InputColumn width={desktop ? "40%" : "100%"}>
                  <Label>
                    Rua:<Mandatory>*</Mandatory>
                  </Label>
                  <Input
                    name="rua"
                    value={user.rua}
                    disabled={!edit}
                  />
                </InputColumn>
                <InputColumn width={desktop ? "20%" : "100%"}>
                  <Label>Numero:<Mandatory>*</Mandatory>
                  </Label>
                  <Input value={user.numero} name="numero" disabled={!edit}/>
                </InputColumn>
                <InputColumn width={desktop ? "40%" : "100%"}>
                  <Label>
                    Bairro:<Mandatory>*</Mandatory>
                  </Label>
                  <Input value={user.bairro} name="bairro" disabled={!edit}/>
                </InputColumn>
              </Linha>
              {edit && (
                <Linha>
                  <Button primary>salvar</Button>
                </Linha>
              )}
            </Form>
          </Column>
        </ContentContainer>
      </ImgContainer>
    </PageContainer>
  );
};

export default ProfileView;

const ProfileIcon = styled.img`
  height: 30px;
  &:hover {
    cursor: pointer;
  }
`;