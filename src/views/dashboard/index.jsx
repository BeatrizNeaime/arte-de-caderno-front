import React, { useContext, useEffect, useState } from "react";
import { userContext } from "../../contexts/userContext";
import {
  ImgContainer,
  PageContainer,
  Linha,
  ContentContainer,
} from "../../styles/sharedStyles";
import NavBoot from "../../Components/Navbar";
import DashboardAlunoView from "./aluno";
import DashboardProfessorView from "./professor";
import { DashTitle } from "./style";
import { LoggedContext } from "../../contexts/loggedContext";
import { Navigate } from "react-router-dom";
import DashboardAvaliadorView from "./avaliador";
import { loadDashProfessor } from "../../services/loadDashProfessor";

const DashboardRouter = () => {
  const { user } = useContext(userContext);
  const { isLogged } = useContext(LoggedContext);
  const [profData, setProfData] = useState({
    students: [],
    schools: [],
    draws: [],
  });

  useEffect(() => {
    if (user.accessType === "professor") {
      const a = loadDashProfessor.getStudents(user);
      const b = loadDashProfessor.getSchools(user);
      setProfData({ ...profData, schools: b });
    } else if (user.accessType === "student") {
    }
  }, []);

  return (
    <PageContainer>
      {!isLogged && <Navigate to="/login" replace />}
      <ImgContainer img={require("../../assets/img/op-background.png")}>
        <NavBoot currentPage={"Dashboard"} />
        <ContentContainer>
          <Linha>
            <DashTitle>Olá, {user.name}!</DashTitle>
          </Linha>
          {user.accessType === "professor" && (
            <DashboardProfessorView user={user} profData={profData} />
          )}
          {user.accessType === "student" && <DashboardAlunoView user={user} />}
          {user.accessType === "judge" && (
            <DashboardAvaliadorView user={user} />
          )}
        </ContentContainer>
      </ImgContainer>
    </PageContainer>
  );
};

export default DashboardRouter;
