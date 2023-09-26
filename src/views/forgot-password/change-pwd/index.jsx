import { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import PreviousArrow from "src/Components/PreviousArrow";
import { colors } from "src/Components/UI/contants";
import { useMediaQuery } from "src/hooks/useMediaQuery";
import { loginRoutes } from "src/services/loginRoutes";
import {
  Form,
  ImgContainer,
  Input,
  InputColumn,
  Label,
  Linha,
  Mandatory,
  PageContainer,
  Text,
  Title,
  Button,
} from "src/styles/sharedStyles";
import { checkPassword } from "src/utils/checkPassword";
import { throwToast } from "src/utils/toast";
import { ImgButton } from "src/views/cadastro-usuario";
import { CheckupContainer } from "src/views/cadastro-usuario/components";

const ChangePassword = () => {
  const { id } = useParams();
  const desktop = useMediaQuery("(min-width: 768px)");
  const [showPwd, setShowPwd] = useState(false);
  const [auxPwd, setAuxPwd] = useState(true);
  const [redirect, setRedirect] = useState(false);
  const [newCred, setNewCred] = useState({
    username: id,
    pwd: null,
    code: null,
  });
  const [err, setErr] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCred({ ...newCred, [name]: value });
    if (name === "code" && name !== null) {
      setErr(false);
    }
  };

  const checkPwd = () => {
    const a = checkPassword(auxPwd);
    if (a) {
      setNewCred((newCred) => ({
        ...newCred,
        pwd: auxPwd.pwd1,
      }));
      setErr(false);
    } else {
      setErr(true);
    }
  };

  const resetPwd = async (e) => {
    e.preventDefault();
    if (!newCred.pwd || !newCred.code) {
      throwToast.warning("Preencha todos os campos!");
      setErr(true);
    } else {
      const a = await loginRoutes.resetPassword(newCred);
      if (a) {
        throwToast.success("Senha alterada com sucesso!");
        setRedirect(true);
      }
    }
  };

  return (
    <PageContainer>
      {redirect && <Navigate to="/login" replace />}
      <ImgContainer img={require("src/assets/img/background.png")}>
        <CheckupContainer width={desktop ? "50%" : "90%"}>
          <Title>Redefinir senha</Title>
          <Text style={{ marginBottom: "1rem" }}>
            Agora, insira o código enviado ao seu e-mail e, em seguida, insira
            sua nova senha.
          </Text>
          <Form onSubmit={resetPwd}>
            <InputColumn width={"100%"}>
              <Label>
                Código:<Mandatory>*</Mandatory>
              </Label>
              <Input
                value={newCred.code}
                onPaste={handleChange}
                onChange={handleChange}
                name="code"
              />
            </InputColumn>
            <Linha>
              <InputColumn width={desktop ? "50%" : "100%"}>
                <Label>
                  Nova senha:<Mandatory>*</Mandatory>
                </Label>
                <Input
                  type={showPwd ? "text" : "password"}
                  value={auxPwd.pwd1}
                  required
                  name="senha"
                  onChange={(e) => {
                    setAuxPwd((auxPwd) => ({
                      ...auxPwd,
                      pwd1: e.target.value,
                    }));
                  }}
                />
              </InputColumn>
              <InputColumn width={desktop ? "50%" : "90%"}>
                <Label>
                  Confirmar senha:<Mandatory>*</Mandatory>
                </Label>
                <Input
                  type={showPwd ? "text" : "password"}
                  required
                  value={auxPwd.pwd2}
                  onChange={(e) => {
                    setAuxPwd((auxPwd) => ({
                      ...auxPwd,
                      pwd2: e.target.value,
                    }));
                  }}
                  onBlur={checkPwd}
                />
              </InputColumn>
              <ImgButton
                type="button"
                onClick={() => {
                  setShowPwd(!showPwd);
                }}
              >
                <ion-icon
                  name={showPwd ? "eye-off-outline" : "eye-outline"}
                ></ion-icon>
              </ImgButton>
            </Linha>
            <Button
              primary
              onClick={resetPwd}
              disabled={err}
              style={{
                backgroundColor: `${err ? colors.deepGrey : colors.blue_color}`,
              }}
            >
              enviar
            </Button>
          </Form>
        </CheckupContainer>
        <PreviousArrow
          width={desktop ? "50%" : "90%"}
          navigate={"recuperar-senha"}
        />
      </ImgContainer>
    </PageContainer>
  );
};

export default ChangePassword;
