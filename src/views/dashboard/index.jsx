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
import { useMediaQuery } from "../../hooks/useMediaQuery";
import DashboardAvaliadorView from "./avaliador";

const DashboardRouter = () => {
  const { user } = useContext(userContext);
  const { isLogged } = useContext(LoggedContext);
  const [profData, setProfData] = useState({
    students: [],
    draws: [],
    schools: [],
  });

  const getStudentsData = async () => {
    const url = `http://localhost:8080/professor/student/${user.id}`;
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    try {
      const a = await fetch(url, options)
      const b = await a.json()
      setProfData({...profData, students: b})
    } catch (error) {
      console.error(error)
    }

  };

  useEffect(() => {
    if(user.accessType === "professor"){
      getStudentsData()
    } else if(user.accessType === "student"){
      return
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
