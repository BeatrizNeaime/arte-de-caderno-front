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
import { professorRoutes } from "../../services/professorRoutes";
import Loading from "../../Components/Loading";

const DashboardRouter = () => {
  const { user, setUser } = useContext(userContext);
  const { isLogged } = useContext(LoggedContext);
  const [loading, setLoading] = useState(true);

  const getProf = async () => {
    const a = await professorRoutes.getProfById(user);
    if (a) {
      setUser((user) => ({
        ...user,
        id: a.professor._id,
        name: a.professor.name,
        date_of_birth: a.professor.date_of_birth,
        cpf: a.professor.cpf,
        accessType: a.accessType,
        email: a.professor.email,
        password: a.professor.password,
        phone: a.professor.phone,
        cep: a.professor.cep,
        city: a.professor.city,
        loginId: a.name,
        state: a.professor.state,
        schoolId: a.professor.schoolId,
        studentsId: a.professor.studentsId || null,
        drawsId: a.professor.drawsId,
      }));
      setLoading(false);
    }
    console.log(a);
  };

  useEffect(() => {
    if (user.accessType === "professor") {
      getProf();
    } else if (user.accessType === "student") {
    }
  }, []);

  if (loading) {
    return (
      <PageContainer>
        {!isLogged && <Navigate to="/login" replace />}
        <ImgContainer img={require("../../assets/img/op-background.png")}>
          <NavBoot />
          <Loading />
        </ImgContainer>
      </PageContainer>
    );
  } else {
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
              <DashboardProfessorView user={user} />
            )}
            {user.accessType === "student" && (
              <DashboardAlunoView user={user} />
            )}
            {user.accessType === "judge" && (
              <DashboardAvaliadorView user={user} />
            )}
          </ContentContainer>
        </ImgContainer>
      </PageContainer>
    );
  }
};

export default DashboardRouter;
