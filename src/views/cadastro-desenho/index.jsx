import { useEffect, useState, useContext } from "react";
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
import { userContext } from "src/contexts/userContext";
import { Navigate } from "react-router-dom";
import { CheckupContainer } from "../cadastro-usuario/components";
import { useMediaQuery } from "src/hooks/useMediaQuery";
import { professorRoutes } from "src/services/professorRoutes";
import { drawRoutes } from "src/services/drawRoutes";
import PreviousArrow from "src/Components/PreviousArrow";
import Loading from "src/Components/Loading";
import Cookies from "js-cookie";
import { Form } from "react-bootstrap";
import { checkImage } from "src/utils/checkImage";
import { throwToast } from "src/utils/toast";

const initialState = {
  titulo: null,
  autor: null,
  categoria: null,
  tema: null,
  file: null,
};

const CadastroDesenhoView = () => {
  const desktop = useMediaQuery("(min-width: 768px)");
  const [desenho, setDesenho] = useState(initialState);
  const [done, setDone] = useState(false);
  const [students, setStudents] = useState(null);
  const [loading, setLoading] = useState(true);
  const [send, setSend] = useState(false);
  const { user } = useContext(userContext);
  const access = Cookies.get("accessType");

  const getStudents = async () => {
    const a = await professorRoutes.getStudents(Cookies.get("user"));
    console.log(a);
    if (a) {
      setStudents(a);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (access === "student") {
      setDesenho((desenho) => {
        return {
          ...desenho,
          autor: user.id,
        };
      });
      setLoading(false);
    } else if (access === "professor") {
      getStudents();
    }
  }, []);

  const postDraw = async (e) => {
    e.preventDefault();
    for (const [key, value] of Object.entries(desenho)) {
      if (desenho.key === null) {
        setSend(false);
        throwToast.warning(`Preencha o campo ${key}`)
      } else{
        setSend(true)
      }
    }
    if (send) {
      const a = await drawRoutes.postDraw(desenho);
      if (a) {
        setDone(true);
      }
    }
  };

  const handleDesenhoFile = (e) => {
    const { files } = e.target;
    const a = checkImage(files[0]);
    if (a) {
      setDesenho({ ...desenho, file: files[0] });
    }
  };

  const handleDesenho = (e) => {
    const { name, value } = e.target;
    setDesenho({ ...desenho, [name]: value });
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
        {done && <Navigate to="/dashboard" replace />}
        <ImgContainer img={require("src/assets/img/op-background.png")}>
          <NavBoot currentPage={"Perfil"} />
          <ContentContainer
            style={{
              justifyContent: "center",
            }}
          >
            <CheckupContainer width={"90%"}>
              {access === "professor" && <Title>Cadastre um desenho</Title>}
              {access === "student" && <Title>Cadastre seu desenho</Title>}
              <form style={{ width: "100%" }} onSubmit={postDraw}>
                <Linha>
                  <InputColumn width={desktop ? "50%" : "100%"}>
                    <Label>
                      Título:<Mandatory>*</Mandatory>
                    </Label>
                    <Input
                      type="text"
                      value={desenho.titulo}
                      name="titulo"
                      onChange={handleDesenho}
                    />
                  </InputColumn>
                  <InputColumn width={desktop ? "50%" : "100%"}>
                    <Label>
                      Autor:<Mandatory>*</Mandatory>{" "}
                    </Label>
                    {access === "professor" && (
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
                            <Option value={s._id} key={s._id}>
                              {s.name}
                            </Option>
                          );
                        })}
                      </Select>
                    )}
                    {access === "student" && (
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
                  <Form.Group
                    controlId="formFile"
                    className="mb-3"
                    onChange={handleDesenhoFile}
                  >
                    <Form.Label>Escolher arquivo </Form.Label>
                    <Form.Control type="file" accept={"image/*"} />
                  </Form.Group>
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
              <PreviousArrow navigate={"dashboard"} />
            </Linha>
          </ContentContainer>
        </ImgContainer>
      </PageContainer>
    );
  }
};

export default CadastroDesenhoView;
