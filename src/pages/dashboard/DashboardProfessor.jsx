import styled from "styled-components";
import { blue_color } from "../../Components/UI/contants";
import { Linha } from "../../styles/sharedStyles";
import Card from "../../Components/Cards";
import { useContext } from "react";
import { userContext } from "../../contexts/userContext";

const DashboardProfessor = () => {
  const {user} = useContext(userContext)

  return (
    <Dash>
      <DashContainer>
        <DashCardsDisplay>
          <Linha>
            <Card icon={"people-1"} name={"Alunos Cadastrados"} value={"43"} />
            <Card icon={"draw"} name={"Desenhos cadastrados"} />
            <Card
              icon={"book11"}
              name={"Escolas cadastradas"}
              path={"/escolas"}
            />
          </Linha>
          <Linha>
            <Card
              icon={"person-add-1"}
              name={"Cadastrar Aluno"}
              path={"/add-student"}
            />
            <Card
              icon={"add-draw"}
              name={"Cadastrar Desenho"}
              path={"/add-desenho"}
            />
            <Card
              icon={"add-circle"}
              name={"Cadastrar nova escola"}
              path={"/add-school"}
            />
          </Linha>
        </DashCardsDisplay>
      </DashContainer>
    </Dash>
  );
};

export default DashboardProfessor;

const DashContainer = styled.div`
  align-items: center;
  border-left: 1px solid ${blue_color};
  border-top: 1px solid ${blue_color};
  display: flex;
  justify-content: center;
  height: calc(100vh - 65px);
  width: calc(100% - 15%);
`;

const Dash = styled.div`
  min-height: 90vh;
  display: flex;
  flex-direction: ${(props) => props.display};
`;

const DashCardsDisplay = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
`;
