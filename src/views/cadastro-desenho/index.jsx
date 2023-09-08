import React, { useEffect, useState, useContext } from "react";
import {
  PageContainer,
  ImgContainer,
  ContentContainer,
  Title,
  Linha,
  InputColumn,
  Label,
  Input,
  Mandatory,
  Select,
  Option,
  Button,
} from "src/styles/sharedStyles";
import NavBoot from "src/Components/Navbar";
import { LoggedContext } from "src/contexts/loggedContext";
import { userContext } from "src/contexts/userContext";
import { Navigate, useNavigate } from "react-router-dom";
import { CheckupContainer } from "../cadastro-usuario/components";
import { useMediaQuery } from "src/hooks/useMediaQuery";
import { professorRoutes } from "src/services/professorRoutes";
import { drawRoutes } from "src/services/drawRoutes";
import PreviousArrow from "src/Components/PreviousArrow";
import Loading from "src/Components/Loading";

const initialState = {
  titulo: null,
  autor: null,
  categoria: null,
  tema: null,
  link: null,
};

const CadastroDesenhoView = () => {
  const desktop = useMediaQuery("(min-width: 768px)");
  const [redirect, setRedirect] = useState(false);
  const [desenho, setDesenho] = useState(initialState);
  const [done, setDone] = useState(false);
  const [students, setStudents] = useState(null);
  const [loading, setLoading] = useState(true);
  const { isLogged } = useContext(LoggedContext);
  const { user } = useContext(userContext);

  const getStudents = async () => {
    const a = await professorRoutes.getStudents(user);
    if (a) {
      setStudents(a);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!isLogged) {
      setRedirect(true);
    }
    if (user.accessType === "student") {
      setDesenho((desenho) => {
        return {
          ...desenho,
          autor: user.id,
        };
      });
    } else if (user.accessType === "professor") {
      getStudents();
      console.log(students)
    }
  }, []);

  const postDraw = async (e) => {
    console.log(desenho)
    e.preventDefault();
    const a = await drawRoutes.postDraw(desenho);
    if (a) {
      setDone(true);
    }
  };

  const handleDesenho = (e) => {
    const { name, value } = e.target;
    setDesenho((desenho) => {
      return { ...desenho, [name]: value };
    });
  };

  if (loading) {
    return (
      <PageContainer>
        <ImgContainer img={require("src/assets/img/op-background.png")}>
          <NavBoot currentPage={"Perfil"} />
          <ContentContainer>
            <Loading />
          </ContentContainer>
        </ImgContainer>
      </PageContainer>
    );
  } else {
    return (
      <PageContainer>
        {redirect && <Navigate to="/login" replace />}
        {done && <Navigate to="/dashboard" replace />}
        <ImgContainer img={require("src/assets/img/op-background.png")}>
          <NavBoot currentPage={"Perfil"} />
          <ContentContainer
            style={{
              justifyContent: "center",
            }}
          >
            <CheckupContainer width={"90%"}>
              {user.accessType === "professor" && (
                <Title>Cadastre um desenho</Title>
              )}
              {user.accessType === "student" && (
                <Title>Cadastre seu desenho</Title>
              )}
              <form style={{ width: "100%" }} onSubmit={postDraw}>
                <Linha>
                  <InputColumn width={desktop ? "50%" : "100%"}>
                    <Label>
                      Título:<Mandatory>*</Mandatory>
                    </Label>
                    <Input
                      type="text"
                      required
                      value={desenho.titulo}
                      name="titulo"
                      onChange={handleDesenho}
                    />
                  </InputColumn>
                  <InputColumn width={desktop ? "50%" : "100%"}>
                    <Label>
                      Autor:<Mandatory>*</Mandatory>{" "}
                    </Label>
                    {user.accessType === "professor" && (
                      <Select
                        name="autor"
                        width={"100%"}
                        onChange={handleDesenho}
                      >
                        <Option selected disabled>
                          Selecione um estudante...
                        </Option>
                        {students.map((s) => {
                          return (
                            <Option value={s._id} key={s.id}>
                              {s.name}
                            </Option>
                          );
                        })}
                      </Select>
                    )}
                    {user.accessType === "student" && (
                      <Input type="text" disabled value={user.name} required />
                    )}
                  </InputColumn>
                </Linha>
                <Linha style={{ marginTop: "1rem" }}>
                  <InputColumn width={desktop ? "50%" : "100%"}>
                    <Label>
                      Categoria de participação:<Mandatory>*</Mandatory>
                    </Label>
                    <Select
                      width={"100%"}
                      required
                      onChange={handleDesenho}
                      name="categoria"
                    >
                      <Option value="" selected disabled>
                        Selecione...
                      </Option>
                      <Option value="ninja">Ninja</Option>
                      <Option value="super-ninja">Super Ninja</Option>
                    </Select>
                  </InputColumn>
                  <InputColumn width={desktop ? "50%" : "100%"}>
                    <Label>
                      Tema:<Mandatory>*</Mandatory>
                    </Label>
                    <Select
                      width={"100%"}
                      required
                      name="tema"
                      onChange={handleDesenho}
                    >
                      <Option value="" selected disabled>
                        Selecione...
                      </Option>
                      <Option value="tema1">tema1</Option>
                      <Option value="tema2">tema2</Option>
                    </Select>
                  </InputColumn>
                </Linha>
                <Linha style={{ marginTop: "1rem" }}>
                  {/* <Button primary type="button" style={{ borderRadius: "12px" }}>
                    Escolher desenho
                  </Button> */}
                  <Input
                    placeholder="link"
                    value={desenho.link}
                    name="link"
                    onChange={handleDesenho}
                  />
                </Linha>
                <Linha
                  style={{ marginTop: "2rem", width: "auto", gap: "1rem" }}
                >
                  <Button primary>Enviar</Button>
                </Linha>
              </form>
            </CheckupContainer>
            <Linha
              style={{
                flexDirection: "row",
                width: "90%",
              }}
            >
              <PreviousArrow />
            </Linha>
          </ContentContainer>
        </ImgContainer>
      </PageContainer>
    );
  }
};

export default CadastroDesenhoView;
