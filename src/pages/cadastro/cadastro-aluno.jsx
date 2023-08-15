import { useMediaQuery } from "../../hooks/useMediaQuery";
import { useContext, useEffect } from "react";
import { LoggedContext } from "../../contexts/loggedContext";
import { userContext } from "../../contexts/userContext";
import { Container, Title } from "../../styles/sharedStyles";
import styled from "styled-components";
import FormCadastroEstudante from "../../Components/FormCadastroEstudante";

const CadastroAluno = () => {
  const desktop = useMediaQuery("(min-width: 768px)");
  const logged = useContext(LoggedContext);
  const { isLogged } = logged;

  const context = useContext(userContext)
  const {user} = context

  useEffect(() => {
    if (!isLogged) {
      window.location.href = "/login";
    }
  }, []);

  return (
    <SingUpContainer width="100%">
      <Container style={{ width: "100%", flexDirection: "column" }}>
        <Title>Cadastrar novo estudante</Title>
        <FormCadastroEstudante user={user} />
      </Container>
    </SingUpContainer>
  );
};

export default CadastroAluno;

const SingUpContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  padding-top: 15px;
  width: ${(props) => (props.width ? props.width : "100%")};
`;
