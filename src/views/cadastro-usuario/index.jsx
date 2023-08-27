import React, { useState, useContext } from "react";
import {
  PageContainer,
  ImgContainer,
  Title,
  InputColumn,
  Linha,
  Label,
  Mandatory,
  Input,
  Select,
  Option,
  Button,
} from "../../styles/sharedStyles";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { singupContext } from "../../contexts/singupContext";
import { maskbday } from "../../hooks/mascara-data";
import { maskcel } from "../../hooks/mascara-celular";
import { maskcpf } from "../../hooks/mascara-cpf";
import { maskcep } from "../../hooks/mascara-cep";
import { toast } from "react-toastify";
import { ForgotLink } from "../../pages/login";
import { blue_color, deepBlue } from "../../Components/UI/contants";
import singUpValidation from "../../hooks/SingUpValidation";
import styled from "styled-components";
import { CheckupContainer } from "./components";
import Cadastro2 from "../../pages/cadastro/index2";
import { useNavigate } from "react-router-dom";
import { CPFroutes } from "../../services/CPFroutes";

const checkPassword = (auxPwd, setPessoa, pessoa) => {
  const { pwd1, pwd2 } = auxPwd;
  if (pwd1 === pwd2) {
    setPessoa((pessoa) => ({
      ...pessoa,
      senha: pwd2,
    }));
    console.log(pessoa.senha);
    return true;
  } else {
    toast.error("As senhas não coincidem");
  }
};

const UserCheckUpView = () => {
  const [currentPage, setCurrentPage] = useState("inicial");
  const desktop = useMediaQuery("(min-width: 768px)");
  const [showPassword, setShowPassword] = useState(null);
  const [auxPwd, setAuxPwd] = useState(true);
  const [erro, setErro] = useState();
  const { pessoa, setPessoa } = useContext(singupContext);
  const navigate = useNavigate();

  const [desabilitado, setDesabilitado] = useState({
    bairro: true,
    number: true,
  });

  const handlechangePessoa = (e) => {
    const { name, value } = e.target;
    setPessoa((pessoa) => ({
      ...pessoa,
      [name]: value,
    }));
  };

  const handlechangeBday = (e) => {
    const { value } = e.target;
    setPessoa((pessoa) => ({
      ...pessoa,
      bday: maskbday(value),
    }));
  };

  const handlechangeCel = (e) => {
    const { value } = e.target;
    setPessoa((pessoa) => ({
      ...pessoa,
      cel: maskcel(value),
    }));
  };

  const handlechangeCep = (e) => {
    const { value } = e.target;
    setPessoa((pessoa) => ({
      ...pessoa,
      cep: maskcep(value),
    }));
  };

  const handlechangeCpf = (e) => {
    const { value } = e.target;
    setPessoa((pessoa) => ({
      ...pessoa,
      cpf: maskcpf(value),
    }));
  };

  /*----- COMUNICAÇÃO COM O  SERVIDOR ----- */

  const checkInput = (e) => {
    e.preventDefault();
    const err = singUpValidation(pessoa);
    console.log("click", err);

    if (Object.keys(err).length === 0) {
      setCurrentPage("escola");
    } else {
      setErro(err);
      toast.error("Preencha os campos obrigatórios!");
    }
  };

  const getCep = async (e) => {
    const cep = e.target.value.replace(/\D/g, "");
    const url = `http://localhost:8080/cep/${cep}`;

    try {
      const a = await fetch(url);
      const b = await a.json();
      console.log(b);
      if (b.erro) {
        toast.error("CEP incorreto!");
      } else if (b.logradouro === "" || b.bairro === "") {
        toast.warn(
          "Notamos que seu CEP não possui dados de Rua e Bairro. Por favor, preencha manualmente!"
        );
        setDesabilitado((desabilitado) => ({
          ...desabilitado,
          bairro: false,
        }));
        setPessoa((pessoa) => ({
          ...pessoa,
          cep: b.cep,
          cidade: b.localidade,
          uf: b.uf,
          bairro: "",
          rua: "",
        }));
      } else {
        setDesabilitado((desabilitado) => ({
          ...desabilitado,
          bairro: true,
          number: false,
        }));
        setPessoa((pessoa) => ({
          ...pessoa,
          cep: b.cep,
          rua: b.logradouro,
          bairro: b.bairro,
          cidade: b.localidade,
          uf: b.uf,
        }));
      }
    } catch (err) {
      console.log(err);
    }
  };

  const checkCPF = async (e) => {
    const cpf = e.target.value.replace(/\D/g, "")
    const a = await CPFroutes.verifyCPF(cpf)
      if (!a) {
        toast.error(`CPF inválido!`);
      } else {
        setPessoa((pessoa) => ({
          ...pessoa,
          cpf: maskcpf(cpf),
        }));
      }
  };

  return (
    <PageContainer>
      <ImgContainer img={require("../../assets/img/op-background.png")}>
        {currentPage === "inicial" && (
          <CheckupContainer
            width={desktop ? "80%" : "90%"}
            style={{ margin: desktop ? "0" : "1rem 0" }}
          >
            <InputColumn width={"100%"}>
              <Title
                style={{
                  marginBottom: desktop ? "2rem" : "1rem",
                }}
              >
                Cadastro
              </Title>
              <form style={{ width: "100%" }}>
                <>
                  <Linha style={{ marginTop: "1rem" }}>
                    <InputColumn width={"100%"}>
                      <Linha
                        style={{
                          margin: "0",
                          gap: "0",
                          width: "auto",
                          alignSelf: "flex-start",
                        }}
                      >
                        <Label>
                          Nome Completo:<Mandatory>*</Mandatory>
                        </Label>
                      </Linha>
                      <Input
                        type="text"
                        value={pessoa.nome}
                        onChange={handlechangePessoa}
                        required
                        name="nome"
                      />
                    </InputColumn>
                    <InputColumn style={{ width: desktop ? "30%" : "100%" }}>
                      <Linha
                        style={{
                          margin: "0",
                          gap: "0",
                          width: "auto",
                          alignSelf: "flex-start",
                        }}
                      >
                        <Label>
                          Data de Nascimento:<Mandatory>*</Mandatory>
                        </Label>
                      </Linha>
                      <Input
                        type="text"
                        width={"100%"}
                        value={pessoa.bday}
                        onChange={handlechangeBday}
                        placeholder="dd/mm/aaaa"
                        style={{
                          textAlign: "center",
                        }}
                        required
                      />
                    </InputColumn>
                    <InputColumn style={{ width: desktop ? "30%" : "100%" }}>
                      <Linha
                        style={{
                          margin: "0",
                          gap: "0",
                          width: "auto",
                          alignSelf: "flex-start",
                        }}
                      >
                        <Label>
                          Perfil:<Mandatory>*</Mandatory>
                        </Label>
                      </Linha>
                      <Select
                        type="select"
                        required
                        value={pessoa.perfil}
                        onChange={handlechangePessoa}
                        width={"100%"}
                        name="perfil"
                      >
                        <Option disabled selected value="">
                          Selecione...
                        </Option>
                        <Option value="Aluno">{"Aluno(a)"}</Option>
                        <Option value="Educador">{"Educador(a)"}</Option>
                      </Select>
                    </InputColumn>
                  </Linha>
                  <Linha style={{ marginTop: "1rem" }}>
                    <InputColumn style={{ width: desktop ? "33%" : "100%" }}>
                      <Linha
                        style={{
                          margin: "0",
                          gap: "0",
                          width: "auto",
                          alignSelf: "flex-start",
                        }}
                      >
                        <Label>
                          CPF:<Mandatory>*</Mandatory>
                        </Label>
                      </Linha>
                      <Input
                        type="text"
                        onChange={handlechangeCpf}
                        value={pessoa.cpf}
                        onBlur={checkCPF}
                        required
                      />
                    </InputColumn>
                    <InputColumn style={{ width: desktop ? "33%" : "100%" }}>
                      <Linha
                        style={{
                          margin: "0",
                          gap: "0",
                          width: "auto",
                          alignSelf: "flex-start",
                        }}
                      >
                        <Label>
                          Telefone:<Mandatory>*</Mandatory>
                        </Label>
                      </Linha>
                      <Input
                        type="text"
                        onChange={handlechangeCel}
                        value={pessoa.cel}
                        required
                      />
                    </InputColumn>
                    <InputColumn style={{ width: desktop ? "33%" : "100%" }}>
                      <Linha
                        style={{
                          margin: "0",
                          gap: "0",
                          width: "100%",
                          alignSelf: "flex-start",
                          alignItems: "center",
                        }}
                      >
                        <Linha
                          style={{
                            margin: "0",
                            gap: "0",
                            width: "auto",
                            alignSelf: "flex-start",
                          }}
                        >
                          <Label>
                            CEP:<Mandatory>*</Mandatory>
                          </Label>
                        </Linha>
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
                        onChange={handlechangeCep}
                        value={pessoa.cep}
                        onBlur={getCep}
                        required
                      />
                    </InputColumn>
                  </Linha>
                  <Linha style={{ marginTop: "1rem" }}>
                    <InputColumn style={{ width: desktop ? "33%" : "100%" }}>
                      <Linha
                        style={{
                          margin: "0",
                          gap: "0",
                          width: "auto",
                          alignSelf: "flex-start",
                        }}
                      >
                        <Label>
                          Rua:<Mandatory>*</Mandatory>
                        </Label>
                      </Linha>
                      <Input
                        type="text"
                        name="rua"
                        value={pessoa.rua}
                        required
                        disabled={desabilitado.bairro}
                      />
                    </InputColumn>
                    <InputColumn style={{ width: desktop ? "33%" : "100%" }}>
                      <Linha
                        style={{
                          margin: "0",
                          gap: "0",
                          width: "auto",
                          alignSelf: "flex-start",
                        }}
                      >
                        <Label>
                          Bairro:<Mandatory>*</Mandatory>
                        </Label>
                      </Linha>
                      <Input
                        type="text"
                        value={pessoa.bairro}
                        required
                        disabled={desabilitado.bairro}
                      />
                    </InputColumn>
                    <InputColumn style={{ width: desktop ? "33%" : "100%" }}>
                      <Linha
                        style={{
                          margin: "0",
                          gap: "0",
                          width: "auto",
                          alignSelf: "flex-start",
                        }}
                      >
                        <Label>
                          Número:<Mandatory>*</Mandatory>
                        </Label>
                      </Linha>
                      <Input
                        type="text"
                        name="numero"
                        value={pessoa.numero}
                        onChange={handlechangePessoa}
                        disabled={desabilitado.number}
                      />
                    </InputColumn>
                  </Linha>
                  <Linha style={{ marginTop: "1rem" }}>
                    <InputColumn style={{ width: desktop ? "33%" : "100%" }}>
                      <Linha
                        style={{
                          margin: "0",
                          gap: "0",
                          width: "auto",
                          alignSelf: "flex-start",
                        }}
                      >
                        <Label>Complemento:</Label>
                      </Linha>
                      <Input
                        type="text"
                        value={pessoa.complemento}
                        onChange={handlechangePessoa}
                        name="complemento"
                        disabled={desabilitado.number}
                      />
                    </InputColumn>
                    <InputColumn style={{ width: desktop ? "33%" : "100%" }}>
                      <Linha
                        style={{
                          margin: "0",
                          gap: "0",
                          width: "auto",
                          alignSelf: "flex-start",
                        }}
                      >
                        <Label>
                          Cidade:<Mandatory>*</Mandatory>
                        </Label>
                      </Linha>
                      <Input
                        type="text"
                        value={pessoa.cidade}
                        name="cidade"
                        required
                        disabled
                      />
                    </InputColumn>
                    <InputColumn style={{ width: desktop ? "33%" : "100%" }}>
                      <Linha
                        style={{
                          margin: "0",
                          gap: "0",
                          width: "auto",
                          alignSelf: "flex-start",
                        }}
                      >
                        <Label>
                          Estado:<Mandatory>*</Mandatory>
                        </Label>
                      </Linha>
                      <Input
                        type="text"
                        value={pessoa.uf}
                        name="uf"
                        required
                        disabled
                      />
                    </InputColumn>
                  </Linha>
                  <Linha style={{ marginTop: "1rem" }}>
                    <InputColumn style={{ width: desktop ? "33%" : "100%" }}>
                      <Linha
                        style={{
                          margin: "0",
                          gap: "0",
                          width: "auto",
                          alignSelf: "flex-start",
                        }}
                      >
                        <Label>
                          E-mail: <Mandatory>*</Mandatory>
                        </Label>
                      </Linha>
                      <Input
                        type="email"
                        value={pessoa.email}
                        name="email"
                        required
                        onChange={handlechangePessoa}
                      />
                    </InputColumn>
                    <InputColumn style={{ width: desktop ? "33%" : "100%" }}>
                      <Linha
                        style={{
                          margin: "0",
                          gap: "0",
                          width: "auto",
                          alignSelf: "flex-start",
                        }}
                      >
                        <Label>
                          Senha:<Mandatory>*</Mandatory>
                        </Label>
                      </Linha>
                      <Linha>
                        <Input
                          type={showPassword ? "text" : "password"}
                          value={auxPwd.pwd1}
                          required
                          name="senha"
                          onChange={(e) => {
                            setAuxPwd((auxPwd) => ({
                              ...auxPwd,
                              pwd1: e.target.value,
                            }));
                          }}
                        />
                        <ImgButton
                          type="button"
                          onClick={() => {
                            setShowPassword(!showPassword);
                          }}
                        >
                          <ion-icon
                            name={
                              showPassword ? "eye-off-outline" : "eye-outline"
                            }
                          ></ion-icon>
                        </ImgButton>
                      </Linha>
                    </InputColumn>
                    <InputColumn style={{ width: desktop ? "33%" : "100%" }}>
                      <Linha
                        style={{
                          margin: "0",
                          gap: "0",
                          width: "auto",
                          alignSelf: "flex-start",
                        }}
                      >
                        <Label>
                          Confirmar Senha:<Mandatory>*</Mandatory>
                        </Label>
                      </Linha>
                      <Input
                        type={showPassword ? "text" : "password"}
                        required
                        value={auxPwd.pwd2}
                        onChange={(e) => {
                          setAuxPwd((auxPwd) => ({
                            ...auxPwd,
                            pwd2: e.target.value,
                          }));
                        }}
                        onBlur={() => {
                          checkPassword(auxPwd, setPessoa, pessoa);
                        }}
                      />
                    </InputColumn>
                  </Linha>
                  <Linha style={{ margin: "1rem 0" }}>
                    <Button
                      style={{
                        width: desktop ? "30%" : "100%",
                        fontSize: "18px",
                      }}
                      type="button"
                      onClick={() => {
                        navigate(-1);
                      }}
                    >
                      voltar
                    </Button>
                    <Button
                      primary
                      style={{
                        width: desktop ? "30%" : "100%",
                        fontSize: "18px",
                      }}
                      type="button"
                      onClick={checkInput}
                    >
                      próximo
                    </Button>
                  </Linha>
                </>
              </form>
            </InputColumn>
          </CheckupContainer>
        )}

        {currentPage === "escola" && <Cadastro2 />}
      </ImgContainer>
    </PageContainer>
  );
};

export default UserCheckUpView;

const ImgButton = styled.button`
  align-items: center;
  border-radius: 6px;
  background-color: ${blue_color};
  color: #fefe;
  display: flex;
  font-size: 20px;
  height: 30px;
  justify-content: center;
  padding: 5px;
  text-align: center;
  width: 20%;

  &:hover {
    background-color: ${deepBlue};
  }
`;

export { ImgButton };
