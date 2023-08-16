import { useMediaQuery } from "../../hooks/useMediaQuery";
import { useContext, useEffect } from "react";
import { LoggedContext } from "../../contexts/loggedContext";
import { userContext } from "../../contexts/userContext";
import { Container, Title } from "../../styles/sharedStyles";
import styled from "styled-components";
import FormCadastroEstudante from "../../Components/FormCadastroEstudante";
import CadastroAlunoView from "../../views/cadastro-aluno";

const CadastroAluno = () => {
  const desktop = useMediaQuery("(min-width: 768px)");
  const logged = useContext(LoggedContext);
  const { isLogged } = logged;

  const context = useContext(userContext);
  const { user } = context;

  useEffect(() => {
    if (!isLogged) {
      window.location.href = "/login";
    }
  }, []);

  return <CadastroAlunoView user={user} />;
};

export default CadastroAluno;
