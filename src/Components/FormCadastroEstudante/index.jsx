import { useMediaQuery } from "../../hooks/useMediaQuery";
import { useState, useContext, useEffect } from "react";
import {
  Button,
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

import styled from "styled-components";
import { userContext } from "../../contexts/userContext";
import { blue_color, deepGrey } from "../UI/contants";
import { Navigate } from "react-router-dom";

const FormCadastroEstudante = () => {
  const desktop = useMediaQuery("(min-width: 768px)");
  const [desabilitado, setDesabilitado] = useState({ rua: true, bairro: true });
  const [schools, setSchools] = useState(null);
  const { user } = useContext(userContext);
  const { isLogged } = useContext(LoggedContext);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (!isLogged) {
      window.location.href = "/login";
    }
    console.log(user);
    getSchools();
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
    school: "",
  });

  const getSchools = async () => {
    let url = `http://localhost:8080/professor/school/${user.id}`;
    let options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    try {
      const a = await fetch(url, options);
      const b = await a.json();
      setSchools(b);
      console.log("schools ---> ", schools);
    } catch (err) {
      console.error(err);
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

  const postAluno = async (e) => {
    e.preventDefault();
    let address =
      "Rua " +
      aluno.rua +
      ", " +
      aluno.numero +
      " " +
      aluno?.complemento || null+
      ", " +
      aluno.bairro;
    console.log(aluno.school);
    let url = `http://localhost:8080/professor`;
    let options = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${user.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: `${aluno.name}`,
        date_of_birth: `${aluno.date_of_birth}`,
        cpf: `${aluno.cpf}`,
        phone: `${aluno.cel}`,
        cep: `${aluno.cep}`,
        address: `${address}`,
        email: `${aluno.email}`,
        city: `${aluno.city}`,
        uf: `${aluno.uf}`,
        schoolId: `${aluno.school}`,
      }),
    };

    try {
      const a = await fetch(url, options);
      console.log("b: ", a);
      toast.success("Aluno cadastrado com sucesso!");
      setRedirect(true);
    } catch (error) {
      toast.error("Ocorreu um erro, tente novamente");
      console.error(error);
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
      {redirect && <Navigate to="/dashboard" replace />}
      <Title>Cadastrar aluno</Title>
      <Form
        style={{
          gap: "1rem",
        }}
        onSubmit={postAluno}
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
          <InputColumn width={desktop ? "20%" : "100%"}>
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
          <InputColumn width={desktop ? "30%" : "100%"}>
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
          <InputColumn width={desktop ? "50%" : "100%"}>
            <Label>
              Escola:<Mandatory>*</Mandatory>
            </Label>
            <Select
              width={"100%"}
              required
              name="school"
              onChange={handleAluno}
            >
              <Option selected disabled>
                Selecione...
              </Option>
              {schools?.map((school) => {
                return (
                  <Option key={school.code} value={school._id}>
                    {school.name}
                  </Option>
                );
              })}
            </Select>
          </InputColumn>
        </Linha>
        <Linha>
          <InputColumn width={desktop ? "20%" : "100%"}>
            <Label>
              <Label>
                CEP:<Mandatory>* </Mandatory>
              </Label>
              <LinkCep
                href="https://buscacepinter.correios.com.br/app/endereco/index.php"
                target="_blank"
              >
                Não sei o CEP
              </LinkCep>
            </Label>
            <Input
              type="text"
              value={aluno.cep}
              onChange={handleCep}
              onBlur={getCep}
            />
          </InputColumn>
          <InputColumn width={desktop ? "60%" : "100%"}>
            <Label>
              Rua:<Mandatory>*</Mandatory>
            </Label>
            <Input
              style={{
                borderColor: `${desabilitado.rua ? deepGrey : blue_color} `,
              }}
              disabled={desabilitado.rua}
              value={aluno.rua}
              required
              name="rua"
              onChange={handleAluno}
            />
          </InputColumn>
          <InputColumn width={desktop ? "20%" : "100%"}>
            <Label>
              Número:<Mandatory>*</Mandatory>
            </Label>
            <Input
              value={aluno.numero}
              onChange={handleAluno}
              name="numero"
              required
            />
          </InputColumn>
        </Linha>
        <Linha>
          <InputColumn width={desktop ? "50%" : "100%"}>
            <Label>
              Bairro:<Mandatory>*</Mandatory>
            </Label>
            <Input
              value={aluno.bairro}
              name="bairro"
              required
              disabled={desabilitado.bairro}
              onChange={handleAluno}
              style={{
                borderColor: `${desabilitado.rua ? deepGrey : blue_color} `,
              }}
            />
          </InputColumn>
          <InputColumn width={desktop ? "50%" : "100%"}>
            <Label>Complemento:</Label>
            <Input
              value={aluno.complemento}
              onChange={handleAluno}
              name="complemento"
            />
          </InputColumn>
        </Linha>
        <Linha>
          <InputColumn width={desktop ? "80%" : "100%"}>
            <Label>
              Cidade:<Mandatory>*</Mandatory>
            </Label>
            <Input
              disabled
              value={aluno.city}
              required
              style={{ borderColor: `${deepGrey}` }}
            />
          </InputColumn>
          <InputColumn width={desktop ? "20%" : "100%"}>
            <Label>
              UF:<Mandatory>*</Mandatory>
            </Label>
            <Input
              disabled
              value={aluno.uf}
              required
              style={{ borderColor: `${deepGrey}` }}
            />
          </InputColumn>
        </Linha>
        <Linha>
          <Button primary>cadastrar</Button>
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

const LinkCep = styled.a`
  color: black;
  text-transform: none;
  text-decoration: underline;
  &:hover {
    cursor: pointer;
  }
`;
