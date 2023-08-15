import React, { useState, useContext } from "react";
import {
  Column,
  Container,
  ImgContainer,
  Input,
  InputColumn,
  Label,
  Linha,
  PageContainer,
  Title,
  Button,
} from "../../styles/sharedStyles";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { maskcpf } from "../../hooks/mascara-cpf";
import { ImgButton } from "../../views/cadastro-usuario";
import { LoggedContext } from "../../contexts/loggedContext";
import { Link, Navigate } from "react-router-dom";
import styled from "styled-components";
import {
  deepBlue,
  facebook,
  facebook_hover,
  gmail,
  gmail_hover,
} from "../../Components/UI/contants";
import SocialMediaButton from "../../Components/SocialMediaButton";
import { userContext } from "../../contexts/userContext";
import { toast } from "react-toastify";
import { LoginCard } from "./components";

const LoginView = () => {
  const desktop = useMediaQuery("(min-width: 768px)");
  const [showPassword, setShowPassword] = useState(false);
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const { isLogged, setIsLogged } = useContext(LoggedContext);
  const { setUser } = useContext(userContext);

  const handleCPF = (e) => {
    setCredentials((credentials) => ({
      ...credentials,
      username: maskcpf(e.target.value),
    }));
  };

  const handlePWD = (e) => {
    setCredentials((credentials) => ({
      ...credentials,
      password: e.target.value,
    }));
  };

  const login = async (e) => {
    e.preventDefault();
    let url = "http://localhost:8080/login";
    let options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: credentials.username,
        password: credentials.password,
      }),
    };

    try {
      const response = await fetch(url, options);
      const json = await response.json();
      const status = response.status;
      const customId = "custom-id-yes";

      if (status !== 200) {
        toast.error(json.message, { toastId: customId });
      } else {
        setUser((user) => ({
          ...user,
          id: json.user.id,
          name: json.user.name,
          date_of_birth: json.user.date_of_birth,
          cpf: json.user.cpf,
          accessType: json.accessType,
          email: json.user.email,
          password: json.user.password,
          phone: json.user.phone,
          cep: json.user.cep,
          city: json.user.city,
          loginId: json.user.name,
          state: json.user.state,
          school: json.user.school,
          schoolId: json.user.schoolId,
          studentsId: json.user.studentsId,
        }));
        setIsLogged(true);
      }
    } catch (error) {
      console.log(`~~~> ${error}`);
    }
  };

  return (
    <PageContainer>
      <ImgContainer img={require("../../assets/img/background.png")}>
        <LoginCard width={desktop ? "30%" : "90%"}>
          <Title>entrar</Title>
          <form style={{ width: "100%" }} onSubmit={login}>
            <InputColumn width={"100%"}>
              <Label>CPF:</Label>
              <Input
                type="text"
                value={credentials.username}
                onChange={handleCPF}
                required
              />
            </InputColumn>
            <InputColumn width={"100%"} style={{ margin: "1rem 0" }}>
              <Label>Senha:</Label>
              <Linha>
                <Input
                  type={showPassword ? "text" : "password"}
                  onChange={handlePWD}
                  style={{
                    width: desktop ? "80%" : "100%",
                  }}
                />
                <ImgButton
                  type="button"
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                >
                  <ion-icon
                    name={showPassword ? "eye-off-outline" : "eye-outline"}
                  ></ion-icon>
                </ImgButton>
              </Linha>
              <Linha style={{ margin: "0.2rem 0" }}>
                <ForgotLink href="/forgot">Esqueceu sua senha?</ForgotLink>
              </Linha>
            </InputColumn>
            <Linha style={{ margin: "0.5rem 0" }}>
              <Button style={{ width: "100%" }} primary>
                entrar
              </Button>
            </Linha>
            <InputColumn
              style={{ flexDirection: "row", gap: "10px" }}
              width={"100%"}
            >
              <SocialMediaButton
                color={facebook}
                width={"50%"}
                txt={"Entrar com Facebook"}
                img={"logo-facebook"}
                desktop={desktop}
                bg={facebook_hover}
              />
              <SocialMediaButton
                color={gmail}
                width={"50%"}
                txt={"Entrar com Gmail"}
                img={"mail-outline"}
                desktop={desktop}
                bg={gmail_hover}
              />
            </InputColumn>
            <Linha style={{ marginTop: "0.5rem" }}>
              <ForgotLink href="/cadastro-usuario">Cadastre-se</ForgotLink>
            </Linha>
          </form>
        </LoginCard>
      </ImgContainer>
      {isLogged && <Navigate to={`/dashboard`} />}
    </PageContainer>
  );
};

export default LoginView;

const ForgotLink = styled.a`
  color: black;
  font-size: 12px;
  text-align: center;
  &:hover {
    color: ${deepBlue};
    cursor: pointer;
  }
`;
