import { useContext, useEffect, useState } from "react";
import {
  ImgContainer,
  PageContainer,
  Linha,
  ContentContainer,
} from "../../styles/sharedStyles";
import NavBoot from "../../Components/Navbar";
import DashboardAlunoView from "./aluno";
import DashboardProfessorView from "./professor";
import DashboardAvaliadorView from "./avaliador";
import Loading from "../../Components/Loading";
import Cookies from "js-cookie";
import { DashTitle } from "./style";
import { userContext } from "../../contexts/userContext";
import { studentRoutes } from "src/services/studentRoutes";
import { professorRoutes } from "src/services/professorRoutes";
import { evaluatorRoutes } from "src/services/evaluatorRoutes";

const DashboardRouter = () => {
  const { user, setUser } = useContext(userContext);
  const [loading, setLoading] = useState(true);
  const accessType = Cookies.get("accessType");

  const getProf = async () => {
    const a = await professorRoutes.getProfById(Cookies.get("user"));
    console.log("user> ", a);
    if (a) {
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
        loginId: a.user.loginId,
        state: a.user.state,
        schoolId: a.user.schoolId,
        studentsId: a.user.studentsId || null,
        drawsId: a.user.drawsId,
      }));
      setLoading(false);
    }
  };

  const getStudent = async () => {
    const a = await studentRoutes.getUserById(Cookies.get("user"));
    if (a) {
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
        loginId: a.user.loginId,
        state: a.user.state,
        schoolId: a.user.schoolId,
        drawsId: a.user.drawsId,
      }));
      setLoading(false);
    }
  };

  const getEvaluator = async () => {
    const a = await evaluatorRoutes.getEvaluatorById(Cookies.get("user"));

    if (a) {
      setUser((user) => ({
        ...user,
        name: a.user.name,
        email: a.user.email,
        cpf: a.user.cpf,
        loginId: a.user.loginId,
      }));
      setLoading(false);
    }
  };

  useEffect(() => {
    // if (accessType === "professor") {
    //   getProf();
    // } else if (accessType === "student") {
    //   getStudent();
    if (accessType === "evaluator") {
      getEvaluator();
    }
    Cookies.set("user", "650a276884a63659b672fa4d");
    Cookies.set("isLogged", true);
    Cookies.set("accessType", "evaluator");
  }, []);

  if (loading) {
    return (
      <PageContainer>
        <ImgContainer img={require("../../assets/img/op-background.png")}>
          <NavBoot />
          <Loading />
        </ImgContainer>
      </PageContainer>
    );
  } else {
    return (
      <PageContainer>
        <ImgContainer img={require("../../assets/img/op-background.png")}>
          <NavBoot currentPage={"Dashboard"} />
          <ContentContainer>
            <Linha>
              <DashTitle>Olá, {user.name}!</DashTitle>
            </Linha>
            {accessType === "professor" && (
              <DashboardProfessorView user={user} />
            )}
            {accessType === "student" && (
              <DashboardAlunoView user={user} />
            )}
            {accessType === "evaluator" && (
              <DashboardAvaliadorView user={user} />
            )}
          </ContentContainer>
        </ImgContainer>
      </PageContainer>
    );
  }
};

export default DashboardRouter;
