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
} from "../../styles/sharedStyles";
import NavBoot from "../../Components/Navbar";
import { LoggedContext } from "../../contexts/loggedContext";
import { userContext } from "../../contexts/userContext";
import { Navigate, useNavigate } from "react-router-dom";
import { CheckupContainer } from "../cadastro-usuario/components";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { toast } from "react-toastify";

const initialState = {
  titulo: "",
  autor: "",
  categoria: "",
  tema: "",
  link: "",
};

const CadastroDesenhoView = () => {
  const desktop = useMediaQuery("(min-width: 768px)");
  const { isLogged } = useContext(LoggedContext);
  const { user } = useContext(userContext);
  const navigate = useNavigate();
  const [redirect, setRedirect] = useState(false);
  const [desenho, setDesenho] = useState(initialState);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!isLogged) {
      setRedirect(true);
    }
  }, []);

  const postDraw = async (e) => {
    e.preventDefault();

    let url = "http://localhost:8080/draw";

    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify({
        title: `${desenho.titulo}`,
        linkImage: `${desenho.link}`,
        category: `${desenho.categoria}`,
        author: `${desenho.autor.trim()}`,
      }),
    };

    try {
      const a = await fetch(url, options);
      if (a !== 201) {
        toast.error("Ocorreu um erro. Tente novamente!");
      }
    } catch (error) {
      toast.success("Desenho cadastrado com sucesso!");
    }
  };

  const handleDesenho = (e) => {
    const { name, value } = e.target;
    setDesenho((desenho) => {
      return { ...desenho, [name]: value };
    });
  };

  return (
    <PageContainer>
      {redirect && <Navigate to="/login" replace />}
      {done && <Navigate to="/dashboard" replace />}
      <ImgContainer img={require("../../assets/img/op-background.png")}>
        <NavBoot currentPage={"Perfil"} />
        <ContentContainer>
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
                    <Input
                      type="text"
                      value={desenho.autor}
                      name="autor"
                      onChange={handleDesenho}
                      required
                    />
                  )}
                  {user.accessType === "student" && (
                    <Input
                      type="text"
                      disabled
                      value={user.id.trim()}
                      name="autor"
                      required
                      onChange={handleDesenho}  
                    />
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
              <Linha style={{ marginTop: "2rem", width: "auto", gap: "1rem" }}>
                <Button
                  onClick={() => {
                    navigate(-1);
                  }}
                  type="button"
                >
                  Voltar
                </Button>
                <Button primary>Enviar</Button>
              </Linha>
            </form>
          </CheckupContainer>
        </ContentContainer>
      </ImgContainer>
    </PageContainer>
  );
};

export default CadastroDesenhoView;
