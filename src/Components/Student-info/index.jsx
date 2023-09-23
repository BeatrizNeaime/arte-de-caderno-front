import { useState, useEffect } from "react";
import {
  Button,
  ContentContainer,
  ImgContainer,
  Input,
  InputColumn,
  Label,
  Linha,
  Option,
  PageContainer,
  Select,
  Title,
} from "../../styles/sharedStyles";
import NavBoot from "../Navbar";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Loading from "../Loading";
import { studentRoutes } from "src/services/studentRoutes";
import { useMediaQuery } from "src/hooks/useMediaQuery";
import { schoolRoutes } from "src/services/schoolRoutes";
import { professorRoutes } from "src/services/professorRoutes";
import Cookies from "js-cookie";
import { CheckupContainer } from "src/views/cadastro-usuario/components";
import { InteractiveBtn } from "../InteractiveBtn";
import { colors } from "../UI/contants";
import { Navigate } from "react-router-dom";

const StudentInfo = () => {
  const { id } = useParams();
  const desktop = useMediaQuery("(min-width: 768px)");
  const [loading, setLoading] = useState(true);
  const [student, setStudent] = useState(null);
  const [edit, setEdit] = useState(false);
  const [newStudent, setNewStudent] = useState(null);
  const [school, setSchool] = useState(null);
  const [profSchools, setProfSchools] = useState(null);
  const [redirect, setRedirect] = useState(false);

  const getStudent = async () => {
    const a = await studentRoutes.getUserById(id);
    if (a) {
      setStudent({ ...a.student });
      setLoading(false);
    }
  };

  const getSchool = async () => {
    setLoading(true);
    const a = await schoolRoutes.getSchoolById(student?.schoolId);
    if (a) {
      setSchool(a.name);
      console.log(student);
      setLoading(false);
    }
  };

  const getProfessorSchools = async () => {
    setLoading(true);
    const a = await professorRoutes.getSchools(Cookies.get("user"));
    if (a) {
      setProfSchools(a);
      setLoading(false);
    }
  };

  useEffect(() => {
    getStudent();
    getSchool();
    getProfessorSchools();
  }, []);

  if (loading) {
    return (
      <PageContainer>
        <ImgContainer img={require("../../assets/img/op-background.png")}>
          <NavBoot />
          <ContentContainer>
            <Loading />
          </ContentContainer>
        </ImgContainer>
      </PageContainer>
    );
  } else {
    return (
      <PageContainer>
        <ImgContainer img={require("../../assets/img/op-background.png")}>
          <NavBoot />
          <ContentContainer>
            <CheckupContainer
              width={desktop ? "80%" : "90%"}
              style={{ gap: "1rem" }}
            >
              <Linha
                style={{ justifyContent: "center", gap: "15px", width: "100%" }}
              >
                <Title
                  style={{
                    fontFamily: "JetBrains Mono",
                  }}
                >
                  Informações do aluno
                </Title>
                <InteractiveBtn
                  width={"auto"}
                  color={colors.pink_color}
                  onClick={() => setEdit(!edit)}
                >
                  <ion-icon name="create-outline"></ion-icon>
                </InteractiveBtn>
              </Linha>
              <Linha>
                <InputColumn width={desktop ? "60%" : "100%"}>
                  <Label>Nome completo:</Label>
                  <Input value={student.name} disabled={!edit} />
                </InputColumn>
                <InputColumn width={desktop ? "20%" : "100%"}>
                  <Label>Data de Nascimento:</Label>
                  <Input value={student.date_of_birth} disabled />
                </InputColumn>
                <InputColumn width={desktop ? "20%" : "100%"}>
                  <Label>CPF:</Label>
                  <Input value={student.cpf} disabled />
                </InputColumn>
              </Linha>
              <Linha>
                <InputColumn width={desktop ? "10%" : "100%"}>
                  <Label>CEP:</Label>
                  <Input value={student.cep} disabled={!edit} />
                </InputColumn>
                <InputColumn width={desktop ? "80%" : "100%"}>
                  <Label>Cidade:</Label>
                  <Input value={student.city} disabled={!edit} />
                </InputColumn>
                <InputColumn width={desktop ? "10%" : "100%"}>
                  <Label>UF:</Label>
                  <Input value={student.uf} disabled={!edit} />
                </InputColumn>
              </Linha>
              <Linha>
                <InputColumn width={"100%"}>
                  <Label>Escola:</Label>
                  <Select name="school" width={"100%"} disabled={!edit}>
                    {!edit && (
                      <Option value={student?.schoolId} selected disabled>
                        {school}
                      </Option>
                    )}
                    {edit && (
                      <Option selected disabled>
                        Selecione...
                      </Option>
                    )}
                    {profSchools.map((s, i) => {
                      return (
                        <Option value={s.id} key={i}>
                          {s.name}
                        </Option>
                      );
                    })}
                  </Select>
                </InputColumn>
              </Linha>
              <Linha>
                {redirect && (
                  <Navigate
                    to={`/desenhos-por-pessoa/${student._id}`}
                    replace
                  />
                )}
                <Button
                  primary
                  disabled={student.drawsId.length}
                  onClick={() => setRedirect(true)}
                >
                  ver desenhos
                </Button>
                <Button
                  style={{
                    backgroundColor: colors.green_rate,
                    display: edit ? "flex" : "none",
                  }}
                >
                  salvar
                </Button>
              </Linha>
            </CheckupContainer>
          </ContentContainer>
        </ImgContainer>
      </PageContainer>
    );
  }
};

export default StudentInfo;

const ItemData = styled.p`
  font-family: "JetBrains Mono";
  font-weight: 700;
`;

const Item = styled(ItemData)`
  text-transform: uppercase;
`;
