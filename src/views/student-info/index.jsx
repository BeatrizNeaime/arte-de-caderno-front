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
} from "src/styles/sharedStyles";
import NavBoot from "src/Components//Navbar";
import styled from "styled-components";
import Loading from "src/Components/Loading";
import { studentRoutes } from "src/services/studentRoutes";
import { useMediaQuery } from "src/hooks/useMediaQuery";
import { schoolRoutes } from "src/services/schoolRoutes";
import { professorRoutes } from "src/services/professorRoutes";
import Cookies from "js-cookie";
import { CheckupContainer } from "src/views/cadastro-usuario/components";
import { InteractiveBtn } from "src/Components/InteractiveBtn";
import { colors } from "src/Components/UI/contants.js";
import { Navigate, useParams } from "react-router-dom";

const StudentInfoView = () => {
  const { student_id } = useParams();
  const desktop = useMediaQuery("(min-width: 768px)");
  const [loading, setLoading] = useState(true);
  const [edit, setEdit] = useState(false);
  const [newStudent, setNewStudent] = useState(null);
  const [school, setSchool] = useState(null);
  const [profSchools, setProfSchools] = useState(null);
  const [redirect, setRedirect] = useState(false);
  const [teste, setTeste] = useState({
    _id: null,
    name: null,
    date_of_birth: null,
    cpf: null,
    phone: null,
    cep: null,
    address: null,
    city: null,
    uf: null,
    schoolId: null,
    drawsId: [],
  });

  const getStudent = async () => {
    console.log("student id: ", student_id);
    const a = await studentRoutes.getUserById(student_id);
    console.log("a> ", a);
    if (a) {
      setTeste((teste) => {
        return {
          ...teste,
          ...a.user,
        };
      });
      console.log("s>: ", teste);
    }
  };

  const getSchool = async () => {
    setLoading(true);
    const a = await schoolRoutes.getSchoolById(teste?.schoolId);
    if (a) {
      setSchool(() => {
        return { ...a };
      });
    }
  };

  const getProfessorSchools = async () => {
    setLoading(true);
    const a = await professorRoutes.getSchools(Cookies.get("user"));
    if (a) {
      setProfSchools(a);
      if (a && !teste) {
        setLoading(true);
      } else {
        setLoading(false);
      }
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
                  <Input disabled={!edit} />
                </InputColumn>
                <InputColumn width={desktop ? "20%" : "100%"}>
                  <Label>Data de Nascimento:</Label>
                  <Input disabled />
                </InputColumn>
                <InputColumn width={desktop ? "20%" : "100%"}>
                  <Label>CPF:</Label>
                  <Input disabled />
                </InputColumn>
              </Linha>
              <Linha>
                <InputColumn width={desktop ? "10%" : "100%"}>
                  <Label>CEP:</Label>
                  <Input disabled={!edit} />
                </InputColumn>
                <InputColumn width={desktop ? "80%" : "100%"}>
                  <Label>Cidade:</Label>
                  <Input disabled={!edit} />
                </InputColumn>
                <InputColumn width={desktop ? "10%" : "100%"}>
                  <Label>UF:</Label>
                  <Input disabled={!edit} />
                </InputColumn>
              </Linha>
              <Linha>
                <InputColumn width={"100%"}>
                  <Label>Escola:</Label>
                  <Select name="school" width={"100%"} disabled={!edit}>
                    {!edit && (
                      <Option selected disabled>
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
                  <Navigate to={`/desenhos-por-pessoa/${"oi"}`} replace />
                )}
                <Button primary disabled onClick={() => setRedirect(true)}>
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

export default StudentInfoView;

const ItemData = styled.p`
  font-family: "JetBrains Mono";
  font-weight: 700;
`;

const Item = styled(ItemData)`
  text-transform: uppercase;
`;
