import React, { useState, useEffect, useContext } from "react";
import { CheckupContainer } from "./components";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import {
  InputColumn,
  Title,
  Linha,
  Select,
  Option,
  Button,
  Label,
  Mandatory,
} from "../../styles/sharedStyles";
import { ForgotLink } from "../../pages/login";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { singupContext } from "../../contexts/singupContext";
import { toast } from "react-toastify";
import singUpValidation from "../../hooks/SingUpValidation";

const initialState = {
  uf: "",
  city: "",
  school: "",
};

const UserCheckUpView2 = () => {
  const desktop = useMediaQuery("(min-width: 768px)");
  const { pessoa, setPessoa } = useContext(singupContext);
  const [ufs, setUfs] = useState(null);
  const [schools, setSchools] = useState(null);
  const [cities, setCities] = useState(null);
  const [selected, setSelected] = useState(initialState);
  const [show, setShow] = useState(false);
  const [redirect, setRedirect] = useState(false)
  const navigate = useNavigate();

  const postStudent = async () => {
    console.log("posting aluno");
    console.log(pessoa.escola);

    let address =
      pessoa.rua + ", " + pessoa.numero + " " + pessoa.complemento ||
      null + "." + pessoa.bairro;

    let url = "http://localhost:8080/insertStudent";
    let options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: `${pessoa.nome}`,
        date_of_birth: `${pessoa.bday}`,
        cpf: `${pessoa.cpf}`,
        phone: `${pessoa.cel}`,
        cep: `${pessoa.cep}`,
        email: ` ${pessoa.email} `,
        address: `${address}`,
        city: `${pessoa.cidade}`,
        uf: `${pessoa.uf}`,
        schoolId: `${selected.school.trim()}`,
        password: `${pessoa.senha}`,
        isFromProfessor: false,
      }),
    };

    try {
      const a = await fetch(url, options);
      const b = await a.json();
      toast.success("Cadastro realizado com sucesso!")
      setRedirect(true)
    } catch (err) {
      toast.error("Erro ao cadastrar aluno");
    }
  };

  const postProf = async () => {
    console.log("posting prof", pessoa);

    let address =
      pessoa.rua + ", " + pessoa.numero + " " + pessoa.complemento ||
      null + "." + pessoa.bairro;

    let url = "http://localhost:8080/insertProfessor";
    let options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: `${pessoa.nome}`,
        date_of_birth: `${pessoa.bday}`,
        cpf: `${pessoa.cpf}`,
        phone: `${pessoa.cel}`,
        cep: `${pessoa.cep}`,
        email: ` ${pessoa.email} `,
        address: `${address}`,
        city: `${pessoa.cidade}`,
        uf: `${pessoa.uf}`,
        schoolId: `${selected.school.trim()}`,
        password: `${pessoa.senha}`,
      }),
    };

     try {
       const a = await fetch(url, options);
       const b = await a.json();
       setRedirect(true)
     } catch (err) {
       toast.error("Erro ao cadastrar");
     }
  };

  const getSchools = async () => {
    let url = "http://localhost:8080/school/listByCity";

    let options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: `{"city":${JSON.stringify(selected.city)}}`,
    };
    console.log("getting schools...");
    try {
      fetch(url, options)
        .then((res) => res.json())
        .then((json) => setSchools(json));
      setShow(true);
      console.log(schools);
    } catch (e) {
      console.error(e.message);
    }
  };

  const getUf = async () => {
    const a = await fetch("http://localhost:8080/school/uf");
    const b = await a.json();
    setUfs(b);
  };

  const getCities = async (uf) => {
    let url = "http://localhost:8080/school/city";

    let options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: `{"uf":${JSON.stringify(uf)}}`,
    };
    try {
      fetch(url, options)
        .then((res) => res.json())
        .then((json) => setCities(json));
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getUf();
  }, []);

  const changeUf = (e) => {
    const { value } = e.target;
    console.log(value);
    setSelected((selected) => ({
      ...selected,
      uf: value,
    }));
    getCities(value);
  };

  const changeCity = (e) => {
    const { value } = e.target;
    setSelected((selected) => ({
      ...selected,
      city: value,
    }));
  };

  const changeSchool = (e) => {
    const { value } = e.target;
    setSelected((selected) => ({
      ...selected,
      school: value.trim(),
    }));
  };

  const print = (e) => {
    e.preventDefault();
    setPessoa((pessoa) => ({
      ...pessoa,
      escola: selected.school,
    }));
    let err = singUpValidation(pessoa);
    if (Object.keys(err).length !== 0) {
      toast.error("Preencha os campos obrigatórios!");
    } else {
      console.log(pessoa.perfil);
      if (pessoa.perfil === "Aluno") {
        postStudent();
      } else {
        postProf();
      }
    }
  };

  return (
    <CheckupContainer
      width={desktop ? "80%" : "90%"}
      style={{ margin: desktop ? "0" : "1rem 0" }}
    >
      {redirect && <Navigate to="/login" replace /> }
      <Title>Selecione sua escola</Title>
      <InputColumn width={"100%"}>
        <Linha style={{ margin: "1rem 0" }}>
          <InputColumn width={"100%"}>
            <Linha style={{ alignItems: "flex-end" }}>
              <InputColumn width={desktop ? "45%" : "100%"}>
                <Label>
                  UF:<Mandatory>*</Mandatory>
                </Label>
                <Select width={"100%"} onChange={changeUf} name="uf">
                  {selected.uf === null && (
                    <option value="" disabled selected>
                      carregando...
                    </option>
                  )}

                  <Option selected> Selecione... </Option>

                  {ufs &&
                    ufs.map((uf, index) => {
                      return (
                        <Option key={index} value={uf}>
                          {uf}
                        </Option>
                      );
                    })}
                </Select>
              </InputColumn>
              <InputColumn width={desktop ? "45%" : "100%"} required>
                <Label>
                  Cidade:<Mandatory>*</Mandatory>
                </Label>
                <Select
                  width={"100%"}
                  disabled={selected.uf !== null ? false : true}
                  onChange={changeCity}
                  name="city"
                >
                  {!selected.uf && <Option selected>Selecione a UF</Option>}

                  {cities !== null && !selected.city && (
                    <Option selected>Selecione...</Option>
                  )}

                  {cities &&
                    cities.map((city) => {
                      return (
                        <option value={city} key={city}>
                          {city}
                        </option>
                      );
                    })}
                </Select>
              </InputColumn>
              <Button primary type="button" onClick={getSchools}>
                filtrar
              </Button>
            </Linha>
            <Linha style={{ margin: "1rem 0" }}>
              <InputColumn width={"100%"}>
                <Linha
                  style={{
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Label>
                    Escola:<Mandatory>*</Mandatory>
                  </Label>
                  <Link to="/cadastro-escola">
                    <ForgotLink>Cadastre sua escola</ForgotLink>
                  </Link>
                </Linha>
                <Select
                  width={"100%"}
                  disabled={selected.uf !== null ? false : true}
                  onChange={changeSchool}
                >
                  {!show && (
                    <option selected disabled>
                      Aguardando filtro...
                    </option>
                  )}

                  {schools !== null && show && (
                    <Option selected>Selecione</Option>
                  )}
                  {schools !== null && Array.isArray(schools)
                    ? schools.map((school, index) => {
                        <Option selected>Selecione...</Option>;
                        return (
                          <>
                            <Option key={index} value={school?._id}>
                              {school?.code} | {school?.name}
                            </Option>
                          </>
                        );
                      })
                    : null}
                </Select>
              </InputColumn>
            </Linha>
            <Linha style={{ margin: "1rem 0", flexDirection: "row" }}>
              <Button
                type="button"
                onClick={() => {
                  navigate(-1);
                }}
              >
                voltar
              </Button>
              <Button primary type="button" onClick={print}>
                enviar
              </Button>
            </Linha>
          </InputColumn>
        </Linha>
      </InputColumn>
    </CheckupContainer>
  );
};

export default UserCheckUpView2;
