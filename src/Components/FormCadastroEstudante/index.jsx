import { useMediaQuery } from "../../hooks/useMediaQuery";
import { useState, useContext, useEffect } from "react";
import {
  Column,
  Input,
  InputColumn,
  Label,
  Linha,
  Mandatory,
  Option,
  Select,
  Title,
} from "../../styles/sharedStyles";

import { toast } from "react-toastify";
import { LoggedContext } from "../../contexts/loggedContext";
import { maskbday } from "../../hooks/mascara-data";
import { maskcpf } from "../../hooks/mascara-cpf";
import { maskcel } from "../../hooks/mascara-celular";
import { maskcep } from "../../hooks/mascara-cep";

import { ForgotLink } from "../../pages/login";
import styled from "styled-components";
import { blue_color, deepGrey } from "../UI/contants";
import { userContext } from "../../contexts/userContext";

const FormCadastroEstudante = () => {
  const desktop = useMediaQuery("(min-width: 768px)");
  const [desabilitado, setDesabilitado] = useState({ rua: true, bairro: true });
  const [schools, setSchools] = useState(null);
  const { user } = useContext(userContext);
  const { isLogged } = useContext(LoggedContext);

  useEffect(() => {
    if (!isLogged) {
      window.location.href = "/login";
    }
  }, []);

  const [aluno, setAluno] = useState({
    name: "",
    date_of_birth: "",
    cpf: "",
    phone: "",
    cep: "",
    rua: "",
    bairro: "",
    numero: "",
    complemento: "",
    city: "",
    uf: "",
    email: "",
  });

  const getSchools = async () => {
    let url = `http://localhost:8080/professor/school/${user.id}`;
    let options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    console.log("pegando escola --- ", user.id);
    setSchools("Carregando...");
    try {
      const a = await fetch(url, options);
      const b = await a.json();
      setSchools(b);
      console.log(schools);
    } catch (err) {
      console.log("erro ao buscar os dados");
    }
  };

  const handleAluno = (e) => {
    const { name, value } = e.target;
    setAluno((prev) => ({ ...prev, [name]: value }));
  };

  const handleBday = (e) => {
    const { value } = e.target;
    const bday = maskbday(value);
    setAluno({ ...aluno, date_of_birth: bday });
  };

  const handleCel = (e) => {
    const { value } = e.target;
    const cel = maskcel(value);
    setAluno({ ...aluno, phone: cel });
  };

  const handleCep = (e) => {
    const { value } = e.target;
    const cep = maskcep(value);
    setAluno({ ...aluno, cep });
  };

  const handleCPF = (e) => {
    const { value } = e.target;
    const cpf = maskcpf(value);
    setAluno({ ...aluno, cpf });
  };

  const checkCPF = async (e) => {
    const cpf = e.target.value.replace(/\D/g, "");
    const url = `http://localhost:8080/cpf/${cpf}`;
    try {
      const a = await fetch(url);
      if (a.status !== 200) {
        toast.error("CPF inválido!");
      } else {
        setAluno((aluno) => ({
          ...aluno,
          cpf: maskcpf(cpf),
        }));
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getCep = async (e) => {
    const cep = e.target.value.replace(/\D/g, "");
    const url = `http://localhost:8080/cep/${cep}`;
    try {
      const a = await fetch(url);
      if (a.status !== 200) {
        toast.error("CEP incorreto!");
      } else {
        const d = await a.json();
        if (d.logradouro === "" || d.bairro === "") {
          setDesabilitado(false);
          toast.warning(
            "Notamos que seu CEP não fornece dados de rua e bairro. Por favor, preencha manualmente"
          );
          setAluno((aluno) => ({
            ...aluno,
            cep: d.cep,
            rua: "",
            bairro: "",
            city: d.localidade,
            uf: d.uf,
          }));
        } else {
          setDesabilitado(true);
          setAluno((aluno) => ({
            ...aluno,
            cep: d.cep,
            rua: d.logradouro,
            bairro: d.bairro,
            city: d.localidade,
            uf: d.uf,
          }));
        }
        console.log(aluno);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Column
      width={desktop ? "80%" : "90%"}
      style={{
        background: "rgba(255, 255, 255, 0.04)",
        backdropFilter: "blur(5px)",
        border: "1px solid black",
        padding: "1rem",
        borderRadius: "12px",
      }}
    >
      <Title>Cadastrar aluno</Title>
      <Form
        style={{
          gap: "1rem",
        }}
      >
        <Linha>
          <InputColumn width={desktop ? "60%" : "100%"}>
            <Label>
              Nome Completo:<Mandatory>*</Mandatory>
            </Label>
            <Input
              type="text"
              name="name"
              value={aluno.name}
              onChange={handleAluno}
              required
            />
          </InputColumn>
          <InputColumn width={desktop ? "20%" : "100%"}>
            <Label>
              Data de Nascimento:<Mandatory>*</Mandatory>
            </Label>
            <Input
              type="text"
              name="date_of_birth"
              value={aluno.date_of_birth}
              onChange={handleBday}
              required
            />
          </InputColumn>
          <InputColumn width={desktop ? "20%" : "100%"}>
            <Label>
              CPF:<Mandatory>*</Mandatory>
            </Label>
            <Input
              type="text"
              value={aluno.cpf}
              onChange={handleCPF}
              onBlur={checkCPF}
              required
            />
          </InputColumn>
        </Linha>
        <Linha>
          <InputColumn width={desktop ? "33%" : "100%"}>
            <Label>
              Telefone:<Mandatory>*</Mandatory>
            </Label>
            <Input
              type="text"
              value={aluno.phone}
              onChange={handleCel}
              required
            />
          </InputColumn>
          <InputColumn width={desktop ? "33%" : "100%"}>
            <Label>
              E-mail:<Mandatory>*</Mandatory>
            </Label>
            <Input
              type="email"
              required
              value={aluno.email}
              name="email"
              onChange={handleAluno}
            />
          </InputColumn>
          <InputColumn width={desktop ? "33%" : "100%"}>
            <Label>
              Escola:<Mandatory>*</Mandatory>
            </Label>
            <Select width={"100%"}>
              {!schools && <Option>Selecione...</Option>}
              {schools &&
                schools.map((school) => {
                  return <Option>{school.name}</Option>;
                })}
            </Select>
          </InputColumn>
        </Linha>
      </Form>
    </Column>
  );
};

export default FormCadastroEstudante;

const Form = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
`;
