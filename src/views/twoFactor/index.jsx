import { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import {
  Column,
  ImgContainer,
  Linha,
  PageContainer,
  Subtitle,
  Input,
  Button,
} from "../../styles/sharedStyles";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { colors } from "../../Components/UI/contants";
import PreviousArrow from "../../Components/PreviousArrow";
import { userContext } from "../../contexts/userContext";
import { loginRoutes } from "../../services/loginRoutes";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const TwoFactorView = () => {
  const desktop = useMediaQuery("(min-width: 768px)");
  const [twoFactorCode, setTwoFactorCode] = useState(null);
  const [border] = useState(colors.blue_color);
  const [redirect, setRedirect] = useState(false);
  const { user, setUser } = useContext(userContext);

  const logar = async () => {
    const a = await loginRoutes.logar(user.cpf, user.password, twoFactorCode);
    if (a) {
      setUser((u) => ({
        ...u,
        id: a.user._id,
        name: a.user.name,
        date_of_birth: a.user.date_of_birth,
        cpf: a.user.cpf,
        accessType: a.accessType,
        email: a.user.email,
        password: a.user.password,
        phone: a.user.phone,
        cep: a.user.cep,
        city: a.user.city,
        loginId: a.user.name,
        state: a.user.state,
        schoolId: a.user.schoolId,
        studentsId: a.user.studentsId || null,
        drawsId: a.user.drawsId,
      }));

      Cookies.set("user", a.user._id, { expires: 30, path: "/" });
      Cookies.set("accessType", a.accessType, { expires: 30, path: "/" });
      Cookies.set("token", a.token, { expires: 30, path: "/" });
      Cookies.set("isLogged", true, { expires: 30, path: "/" });
      setRedirect(true);
    }
  };

  useEffect(() => {}, []);

  return (
    <PageContainer>
      {redirect && <Navigate to="/dashboard" replace />}
      <ImgContainer img={require("../../assets/img/background.png")}>
        <Column
          width={desktop ? "70%" : "90%"}
          style={{
            border: "1px solid rgba(54, 54, 54, 0.5)",
            borderRadius: "6px",
            padding: "1rem",
          }}
        >
          <Subtitle
            style={{
              fontWeight: "600",
              marginBottom: "1rem",
            }}
          >
            Insira o código enviado para seu e-mail:
          </Subtitle>
          <Linha
            width={desktop ? "50%" : "100%"}
            style={{
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <TwoFInput
              value={twoFactorCode}
              border={border}
              onChange={(e) => setTwoFactorCode(e.target.value)}
            />
            <Button primary onClick={logar}>
              verificar
            </Button>
          </Linha>
          <PreviousArrow navigate={"login"} />
        </Column>
      </ImgContainer>
    </PageContainer>
  );
};

export default TwoFactorView;

const TwoFInput = styled(Input)`
  width: 40%;
  border: 1px solid ${(props) => props.border};
  text-align: center;
  text-transform: uppercase;

  &:focus {
    outline-color: ${colors.pink_color};
  }
`;
