import {
  Container,
  InputColumn,
  Linha,
  Mandatory,
  Title,
  Label,
  Input,
  Button,
} from "../../styles/sharedStyles";

import {  blue_color } from "../../Components/UI/contants";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import styled from "styled-components";
import { useState } from "react";
import { toast } from "react-toastify";

import { maskphone } from "../../hooks/mascara-celular";
import { maskcep } from "../../hooks/mascara-cep";

const CadastroEscola = () => {
  const desktop = useMediaQuery("(min-width: 768px)");
  const [desabilitado, setDesabilitado] = useState(true);

  const [escola, setEscola] = useState({
    nome: "",
    inep: "",
    uf: "",
    city: "",
    address: "",
    cep: "",
    phone: "",
    email: "",
    site: "",
  });

  const handlechangeEscola = (e) => {
    const { name, value } = e.target;
    setEscola((escola) => ({
      ...escola,
      [name]: value,
    }));
  };

  const handlechangeCel = (e) => {
    const { value } = e.target;
    setEscola((escola) => ({
      ...escola,
      phone: maskphone(value),
    }));
  };

  const handlechangeCep = (e) => {
    const { value } = e.target;
    setEscola((escola) => ({
      ...escola,
      cep: maskcep(value),
    }));
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
          "Notamos que o CEP não possui dados de Rua e Bairro. Por favor, preencha manualmente!"
        );
        setEscola((escola) => ({
          ...escola,
          cep: b.cep,
          cidade: b.localidade,
          uf: b.uf,
          rua: "",
          bairro: "",
        }));
        setDesabilitado(false);
      } else {
        setEscola((escola) => ({
          ...escola,
          cep: b.cep,
          rua: b.logradouro,
          bairro: b.bairro,
          cidade: b.localidade,
          uf: b.uf,
        }));
        setDesabilitado(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handlechangeInep = (e) => {
    const { value } = e.target;
    setEscola((escola) => ({
      ...escola,
      inep: value.substring(0, 8),
    }));
  };

  return (
    <SchoolContainer>
      <Container
        width={desktop ? "80%" : "90%"}
        style={{ flexDirection: "column", marginTop: desktop ? "0" : "100px" }}
        height={"auto"}
      >
        <Title>cadastro de escola</Title>
        <Container>
          <form style={{ width: "100%" }}>
            <Linha>
              <InputColumn width={desktop ? "80%" : "100%"}>
                <Label>
                  Nome da Escola:<Mandatory>*</Mandatory>
                </Label>
                <Input type="text" value={escola.nome} />
              </InputColumn>
              <InputColumn width={desktop ? "20%" : "100%"}>
                <Label>
                  Código INEP:<Mandatory>*</Mandatory>
                </Label>
                <Input
                  type="text"
                  required
                  onChange={handlechangeInep}
                  value={escola.inep}
                />
              </InputColumn>
            </Linha>
            <Linha style={{ margin: "1rem 0" }}>
              <InputColumn width={desktop ? "20%" : "100%"}>
                <Label>
                  CEP:<Mandatory>*</Mandatory>
                </Label>
                <Input
                  type="text"
                  name="uf"
                  required
                  onChange={handlechangeCep}
                  onBlur={getCep}
                  value={escola.cep}
                />
              </InputColumn>
              <InputColumn width={desktop ? "10%" : "100%"}>
                <Label>
                  UF:<Mandatory>*</Mandatory>
                </Label>
                <Input name="uf" type="text" disabled value={escola.uf} />
              </InputColumn>
              <InputColumn width={desktop ? "70%" : "100%"}>
                <Label>
                  Cidade:<Mandatory>*</Mandatory>
                </Label>
                <Input
                  name="cidade"
                  type="text"
                  disabled
                  value={escola.cidade}
                />
              </InputColumn>
            </Linha>
            <Linha style={{ margin: "1rem 0" }}>
              <InputColumn width={desktop ? "50%" : "100%"}>
                <Label>
                  Bairro:<Mandatory>*</Mandatory>
                </Label>
                <Input
                  type="text"
                  name="bairro"
                  disabled={desabilitado}
                  value={escola.bairro}
                />
              </InputColumn>
              <InputColumn width={desktop ? "50%" : "100%"}>
                <Label>
                  Rua:<Mandatory>*</Mandatory>
                </Label>
                <Input
                  type="text"
                  name="rua"
                  disabled={desabilitado}
                  value={escola.rua}
                />
              </InputColumn>
            </Linha>
            <Linha style={{ margin: "1rem 0" }}>
              <InputColumn width={desktop ? "50%" : "100%"}>
                <Label>Complemento:</Label>
                <Input
                  type="text"
                  name="complemento"
                  value={escola.complemento}
                  onChange={handlechangeEscola}
                />
              </InputColumn>
              <InputColumn width={desktop ? "50%" : "100%"}>
                <Label>
                  Telefone:<Mandatory>*</Mandatory>
                </Label>
                <Input
                  type="text"
                  name="phone"
                  value={escola.phone}
                  onChange={handlechangeCel}
                />
              </InputColumn>
            </Linha>
            <Linha style={{ margin: "1rem 0" }}>
              <Button primary type="button">
                enviar
              </Button>
            </Linha>
          </form>
        </Container>
      </Container>
    </SchoolContainer>
  );
};

export default CadastroEscola;

const SchoolContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  height: auto;
  margin-top: 15px;
  width: ${(props) => (props.width ? props.width : "100%")};
`;
