import { useState, useRef, useContext } from "react";
import styled from "styled-components";
import {
  Column,
  ImgContainer,
  Linha,
  PageContainer,
  Subtitle,
  Input,
  Form,
  Button,
} from "../../styles/sharedStyles";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { blue_color, pink_color } from "../../Components/UI/contants";
import PreviousArrow from "../../Components/PreviousArrow";
import { userContext } from "../../contexts/userContext";
import { LoggedContext } from "../../contexts/loggedContext";
import { loginRoutes } from "../../services/loginRoutes";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";

const TwoFactorView = () => {
  const desktop = useMediaQuery("(min-width: 768px)");
  const [twoFactorCode, setTwoFactorCode] = useState(null);
  const [border, setBorder] = useState(blue_color);

  const { user, setUser } = useContext(userContext);
  const { isLogged, setIsLogged } = useContext(LoggedContext);

  const logar = async () => {
    const a = await loginRoutes.logar(user.cpf, user.password, twoFactorCode);
    if (!a) {
      toast.error("Código incorreto!");
    } else {
      setUser((user) => ({
        ...user,
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
        token: a.token,
        drawsId: a.user.drawsId,
      }));
      setIsLogged(true);
    }
  };

  return (
    <PageContainer>
      {isLogged && <Navigate to="/dashboard" replace />}
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
    outline-color: ${pink_color};
  }
`;
