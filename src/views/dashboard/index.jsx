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
  const desktop = useMediaQuery("(min-width: 768px)");

  return (
    <PageContainer>
      {/* {!isLogged && <Navigate to="/login" replace />} */}
      <ImgContainer img={require("../../assets/img/op-background.png")}>
        <NavBoot currentPage={"Dashboard"} />
        <ContentContainer>
          <Linha>
            <DashTitle>Olá, {user.name}!</DashTitle>
          </Linha>
          {user.accessType === "professor" && (
            <DashboardProfessorView user={user} />
          )}
          {user.accessType === "student" && <DashboardAlunoView user={user} />}
          <DashboardAvaliadorView user={user} />
        </ContentContainer>
      </ImgContainer>
    </PageContainer>
  );
};

export default DashboardRouter;
