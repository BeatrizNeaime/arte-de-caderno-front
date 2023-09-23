import { useState } from "react";
import { useParams } from "react-router-dom";
import PreviousArrow from "src/Components/PreviousArrow";
import { useMediaQuery } from "src/hooks/useMediaQuery";
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
} from "src/styles/sharedStyles";
import { checkPassword } from "src/utils/checkPassword";
import { ImgButton } from "src/views/cadastro-usuario";
import { CheckupContainer } from "src/views/cadastro-usuario/components";

const ChangePassword = () => {
  const { id } = useParams();
  const desktop = useMediaQuery("(min-width: 768px)");
  const [showPwd, setShowPwd] = useState(false);
  const [newPwd, setNewPwd] = useState({ pwd1: null, pw2: null });
  const [newCred, setNewCred] = useState({
    username: id,
    pwd: null,
    code: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCred({ ...newCred, [name]: value });
  };

  const handleChangePw = (e) => {
    const { name, value } = e.target;
    setNewPwd({ ...newPwd, [name]: value });
  };

  const check = () => {
    const a = checkPassword(newPwd);
    if (a) {
      console.log(a);
      setNewCred((prevState) => ({ ...prevState, pwd: newPwd.pwd1 }));
    }
  };

  return (
    <PageContainer>
      <ImgContainer img={require("src/assets/img/background.png")}>
        <CheckupContainer width={desktop ? "50%" : "90%"}>
          <Title>Redefinir senha</Title>
          <Text style={{ marginBottom: "1rem" }}>
            Agora, insira o código enviado ao seu e-mail e, em seguida, insira
            sua nova senha.
          </Text>
          <Form>
            <InputColumn width={"100%"}>
              <Label>
                Código:<Mandatory>*</Mandatory>
              </Label>
              <Input value={newCred.code} onPaste={handleChange} name="code" />
            </InputColumn>
            <Linha>
              <InputColumn width={desktop ? "50%" : "100%"}>
                <Label>
                  Nova senha:<Mandatory>*</Mandatory>
                  <Input
                    value={newPwd.pwd1}
                    onChange={(e) => {
                      setNewPwd({ ...newPwd, pwd1: e.target.value });
                    }}
                    type={showPwd ? "text" : "password"}
                  />
                </Label>
              </InputColumn>
              <Linha style={{ flexDirection: "row", alignItems: "start" }}>
                <InputColumn width={desktop ? "50%" : "90%"}>
                  <Label>
                    Digite novamente:<Mandatory>*</Mandatory>
                    <Input
                      value={newPwd.pw2}
                      onChange={(e) => {
                        setNewPwd({ ...newPwd, pw2: e.target.value });
                      }}
                      type={showPwd ? "text" : "password"}
                      onBlur={check}
                    />
                  </Label>
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
            </Linha>
          </Form>
        </CheckupContainer>
        <PreviousArrow width={desktop ? "50%" : "90%"} />
      </ImgContainer>
    </PageContainer>
  );
};

export default ChangePassword;
