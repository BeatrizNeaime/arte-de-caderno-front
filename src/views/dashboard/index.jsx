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
import Loading from "../../Components/Loading";

const DashboardRouter = () => {
  const { user, setUser } = useContext(userContext);
  const { isLogged } = useContext(LoggedContext);
  const [loading, setLoading] = useState(true);

  const getProf = async () => {
    const a = await loadDashProfessor.getProfById(user);
    console.log(a);
    if (a.accessTYpe) {
      setUser((user) => ({
        ...user,
        id: a._id,
        name: a.name,
        date_of_birth: a.date_of_birth,
        cpf: a.cpf,
        accessType: a.accessType,
        email: a.email,
        password: a.password,
        phone: a.phone,
        cep: a.cep,
        city: a.city,
        loginId: a.name,
        state: a.state,
        schoolId: a.schoolId,
        studentsId: a.studentsId || null,
        token: a.token,
        drawsId: a.drawsId,
      }));
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user.accessType === "professor") {
      getProf();
    } else if (user.accessType === "student") {
    }
  }, []);

  return (
    <PageContainer>
      {loading && <Loading />}
      {!isLogged && <Navigate to="/login" replace />}
      {!loading && (
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
      )}
    </PageContainer>
  );
};

export default DashboardRouter;
