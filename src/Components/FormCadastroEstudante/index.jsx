import { useMediaQuery } from '../../hooks/useMediaQuery'
import { useState, useContext, useEffect } from "react";
import {
  Column,
  Input,
  InputColumn,
  Label,
  Linha,
  Mandatory,
  Select,
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
  const logged = useContext(LoggedContext);
  const { isLogged } = logged;
  const [desabilitado, setDesabilitado] = useState({ rua: true, bairro: true });
  const context = useContext(userContext)
  const {user} = context 

  useEffect(() => {
    if (!isLogged) {
      window.location.href = "/login";
    }
    console.log(`===> ${JSON.stringify(user.name)}`);
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
    <Form>
      <Column style={{ width: "90%" }}>
        <AnotherLine>
          <InputColumn width={desktop ? "33%" : "100%"}>
            <Label>
              Nome Completo:<Mandatory>*</Mandatory>
            </Label>
            <Input
              type="text"
              required
              value={aluno.name}
              onChange={handleAluno}
              name="name"
            />
          </InputColumn>
          <InputColumn width={desktop ? "33%" : "100%"}>
            <Label>
              Data de Nascimento:<Mandatory>*</Mandatory>
            </Label>
            <Input
              type="text"
              required
              onChange={handleBday}
              value={aluno.date_of_birth}
            />
          </InputColumn>
          <InputColumn width={desktop ? "33%" : "100%"}>
            <Label>
              CPF:<Mandatory>*</Mandatory>
            </Label>
            <Input
              type="text"
              required
              onChange={handleCPF}
              value={aluno.cpf}
              onBlur={checkCPF}
            />
          </InputColumn>
        </AnotherLine>
        <AnotherLine>
          <InputColumn width={desktop ? "33%" : "100%"}>
            <Label>
              Celular:<Mandatory>*</Mandatory>
            </Label>
            <Input
              type="text"
              required
              value={aluno.phone}
              onChange={handleCel}
            />
          </InputColumn>
          <InputColumn width={desktop ? "33%" : "100%"}>
            <Linha>
              <Label>
                CEP:<Mandatory>*</Mandatory>
              </Label>
              <ForgotLink
                style={{ alignSelf: "flex-end" }}
                href={
                  "https://buscacepinter.correios.com.br/app/endereco/index.php"
                }
                target="_blank"
              >
                Não sei meu CEP
              </ForgotLink>
            </Linha>
            <Input
              type="text"
              onChange={handleCep}
              value={aluno.cep}
              onBlur={getCep}
              required
            />
          </InputColumn>
          <InputColumn width={desktop ? "33%" : "100%"}>
            <Label>
              Cidade:<Mandatory>*</Mandatory>
            </Label>
            <Input
              type="text"
              value={aluno.city}
              style={{ borderColor: `${deepGrey}` }}
              required
            />
          </InputColumn>
        </AnotherLine>
        <AnotherLine>
          <InputColumn width={desktop ? "10%" : "100%"}>
            <Label>
              UF:<Mandatory>*</Mandatory>
            </Label>
            <Input
              type="text"
              value={aluno.uf}
              style={{ borderColor: `${deepGrey}` }}
              required
              disabled
            />
          </InputColumn>
          <InputColumn width={desktop ? "45%" : "100%"}>
            <Label>
              Rua:<Mandatory>*</Mandatory>
            </Label>
            <Input
              type="text"
              value={aluno.rua}
              disabled={desabilitado.rua}
              style={{ borderColor: desabilitado.rua ? deepGrey : blue_color }}
              required
            />
          </InputColumn>
          <InputColumn width={desktop ? "45%" : "100%"}>
            <Label>
              Bairro:<Mandatory>*</Mandatory>
            </Label>
            <Input
              type="text"
              value={aluno.bairro}
              disabled={desabilitado.bairro}
              style={{ borderColor: desabilitado.rua ? deepGrey : blue_color }}
              required
            />
          </InputColumn>
        </AnotherLine>
        <AnotherLine>
          <InputColumn width={desktop ? "50%" : "100%"}>
            <Label>
              Número:<Mandatory>*</Mandatory>
            </Label>
            <Input
              type="text"
              value={aluno.numero}
              onChange={handleAluno}
              name="numero"
            />
          </InputColumn>
          <InputColumn width={desktop ? "50%" : "100%"}>
            <Label>Complemento:</Label>
            <Input type="text" value={aluno.complemento} onBlur={handleAluno} />
          </InputColumn>
        </AnotherLine>
        <AnotherLine>
          <InputColumn width={desktop ? "50%" : "100%"}>
            <Label>
              Escola:<Mandatory>*</Mandatory>
            </Label>
            <Select required width={"100%"}>
              <option value="" disabled selected>
                Escolha a escola
              </option>
              <option value={user.schoolId}>
                {user.schoolId}
              </option>
            </Select>
          </InputColumn>
          <InputColumn width={desktop ? "50%" : "100%"}>
            <Label>
              Professor Responsável:<Mandatory>*</Mandatory>
            </Label>
            <Input
              type="text"
              disabled
              value={user.name} 
              style={{ borderColor: `${deepGrey}` }}
            />
          </InputColumn>
        </AnotherLine>
      </Column>
    </Form>
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

const AnotherLine = styled(Linha)`
  margin-bottom: 1rem;
`;
