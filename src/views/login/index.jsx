import { useState, useContext } from "react";
import {
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
import { masks } from "../../utils/masks";
import { ImgButton } from "../../views/cadastro-usuario";
import { Navigate } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../Components/UI/contants";
import SocialMediaButton from "../../Components/SocialMediaButton";
import { userContext } from "../../contexts/userContext";
import { toast } from "react-toastify";
import { LoginCard } from "./components";
import PreviousArrow from "../../Components/PreviousArrow";
import { loginRoutes } from "../../services/loginRoutes";

const LoginView = () => {
  const desktop = useMediaQuery("(min-width: 768px)");
  const [showPassword, setShowPassword] = useState(false);
  const [twoF, setTwoF] = useState(false);
  const [credentials, setCredentials] = useState({
    username: null,
    password: null,
  });

  const { user, setUser } = useContext(userContext);

  const handleCPF = (e) => {
    setCredentials((credentials) => ({
      ...credentials,
      username: masks.cpf(e.target.value),
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
    const a = await loginRoutes.login(
      credentials.username,
      credentials.password
    );
    const customId = "custom-id-yes";
    if (!a) {
      toast.error("Usuário/senha incorreto(s)!", { toastId: customId });
    } else {
      toast.info("Insira o código enviado para seu e-mail", {
        toastId: customId,
      });
      setUser({
        ...user,
        cpf: credentials.username,
        password: credentials.password,
      });
      setTwoF(true);
    }
  };

  return (
    <PageContainer>
      <ImgContainer img={require("../../assets/img/background.png")}>
        {twoF && <Navigate to={"/dois-fatores"} />}
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
                id="username"
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
                  className=".password"
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
                <ForgotLink href="/recuperar-senha">Esqueceu sua senha?</ForgotLink>
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
                color={colors.facebook}
                width={"50%"}
                txt={"Entrar com Facebook"}
                img={"logo-facebook"}
                desktop={desktop}
                bg={colors.facebook_hover}
              />
              <SocialMediaButton
                color={colors.gmail}
                width={"50%"}
                txt={"Entrar com Gmail"}
                img={"mail-outline"}
                desktop={desktop}
                bg={colors.gmail_hover}
              />
            </InputColumn>
            <Linha style={{ marginTop: "0.5rem" }}>
              <p style={{ fontSize: "12px" }}>
                Não tem uma conta?{" "}
                <ForgotLink
                  href="/cadastro-usuario"
                  style={{ textDecoration: "underline" }}
                >
                  Cadastre-se
                </ForgotLink>
              </p>
            </Linha>
          </form>
        </LoginCard>
        <Linha style={{ width: `${desktop ? "30%" : "90%"}` }}>
          <PreviousArrow navigate={""} />
        </Linha>
      </ImgContainer>
    </PageContainer>
  );
};

export default LoginView;

const ForgotLink = styled.a`
  color: black;
  font-size: 12px;
  text-align: center;
  &:hover {
    color: ${colors.deepBlue};
    cursor: pointer;
  }
`;
