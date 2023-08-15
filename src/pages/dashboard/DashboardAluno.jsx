import React, { useContext } from "react";
import styled from "styled-components";
import { blue_color } from "../../Components/UI/contants";
import Sidebar from "./Sidebar";
import { userContext } from "../../contexts/userContext";
import Card from "../../Components/Cards";
import { Navigate } from "react-router-dom";
import { LoggedContext } from "../../contexts/loggedContext";

const DashboardAluno = () => {
  const { user } = useContext(userContext);
  const { isLogged } = useContext(LoggedContext);
  return (
    <Dash>
      {!isLogged && <Navigate to={"/login"} replace={true} />}
      <Sidebar name={user.name} style={{ height: "100%" }} />
      <DashContainer>
        <DashCardsDisplay>
          <Card
            icon={"add-draw"}
            name={"Cadastrar Desenho"}
            path={"/add-desenho"}
          />
          <Card icon={"draw"} name={"Desenhos cadastrados"} />
        </DashCardsDisplay>
      </DashContainer>
    </Dash>
  );
};

export default DashboardAluno;

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
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  min-height: calc(100vh - 70px);
  max-width: 100%;
`;

const DashCardsDisplay = styled.div`
  align-items: center;
  display: flex;
  gap: 20px;
  justify-content: space-evenly;
  width: 60%;
`;
