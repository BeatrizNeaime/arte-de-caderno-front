import { useState} from "react";
import PreviousArrow from "src/Components/PreviousArrow";
import { CheckupContainer } from "../cadastro-usuario/components";
import { useMediaQuery } from "src/hooks/useMediaQuery";
import { masks } from "src/utils/masks";
import { loginRoutes } from "src/services/loginRoutes";
import { Navigate } from "react-router-dom";

const {
  PageContainer,
  ImgContainer,
  Title,
  Linha,
  Text,
  Input,
  Button,
  Form,
} = require("src/styles/sharedStyles");

const ForgotPasswordView = () => {
  const desktop = useMediaQuery("(min-width: 768px)");
  const [cpf, setCpf] = useState(null);
  const [redirect, setRedirect] = useState(false);

  const send = async (e) => {
    e.preventDefault();
    const a = await loginRoutes.forgotPassword(cpf);

    if (a) {
      setRedirect(true);
    }
  };

  return (
    <PageContainer>
      {redirect && (
        <Navigate to={`/trocar-senha/${cpf.replace(/\D/g, "")}`} replace />
      )}
      <ImgContainer img={require("../../assets/img/background.png")}>
        <CheckupContainer width={desktop ? "50%" : "90%"}>
          <Title>Recuperar senha</Title>
          <Text style={{ marginBottom: "1rem" }}>
            Para recuperação de sua conta é necessário informar o CPF cadastrado
            no sistema. Por favor, digite logo abaixo:
          </Text>
          <Form>
            <Linha style={{ justifyContent: "center", flexDirection: "row" }}>
              <Input
                value={cpf}
                onChange={(e) => setCpf(masks.cpf(e.target.value))}
                width={desktop ? "30%" : "10%"}
                required
                style={{ textAlign: "center" }}
              />
              <Button
                primary
                onClick={send}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </Button>
            </Linha>
          </Form>
        </CheckupContainer>
        <PreviousArrow width={desktop ? "50%" : "100%"} />
      </ImgContainer>
    </PageContainer>
  );
};

export default ForgotPasswordView;
