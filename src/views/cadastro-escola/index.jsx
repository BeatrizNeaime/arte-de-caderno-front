import { useState } from "react";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { masks } from "../../utils/masks";
import {
  Button,
  Form,
  ImgContainer,
  Input,
  InputColumn,
  Label,
  Linha,
  Mandatory,
  PageContainer,
  Title,
} from "../../styles/sharedStyles";
import { CheckupContainer } from "../cadastro-usuario/components";
import HelpIcon from "../../Components/HelpIcon";
import { CEProutes } from "src/services/CEProutes";
import PreviousArrow from "src/Components/PreviousArrow";
import { schoolRoutes } from "src/services/schoolRoutes";
import { throwToast } from "src/utils/toast";
import { Navigate } from "react-router-dom";

const CadastroEscolaView = () => {
  const desktop = useMediaQuery("(min-width: 768px)");
  const [desabilitado, setDesabilitado] = useState({
    bairro: true,
    number: true,
  });
  const [redirect, setRedirect] = useState(false);

  const [escola, setEscola] = useState({
    nome: null,
    inep: null,
    uf: null,
    city: null,
    rua: null,
    bairro: null,
    numero: null,
    complemento: null,
    cep: null,
    phone: null,
    email: null,
    site: null,
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
      phone: masks.phone(value),
    }));
  };

  const handlechangeCep = (e) => {
    const { value } = e.target;
    setEscola((escola) => ({
      ...escola,
      cep: masks.cep(value),
    }));
  };

  const handlechangeInep = (e) => {
    setEscola({ ...escola, inep: masks.inep(e.target.value) });
  };

  const getCep = async (e) => {
    const cep = e.target.value.replace(/\D/g, "");
    if (!cep) {
      throwToast.error("CEP inválido");
    } else {
      const a = await CEProutes.viacep(cep);
      if (!a.logradouro || !a.bairro) {
        setDesabilitado((desabilitado) => ({
          ...desabilitado,
          bairro: false,
          number: false,
        }));
        setEscola((escola) => ({
          ...escola,
          cep: a.cep,
          city: a.localidade,
          uf: a.uf,
          bairro: null,
          rua: null,
        }));
      } else {
        setDesabilitado((desabilitado) => ({
          ...desabilitado,
          bairro: true,
          number: false,
        }));
        setEscola((escola) => ({
          ...escola,
          cep: a.cep,
          rua: a.logradouro,
          bairro: a.bairro,
          city: a.localidade,
          uf: a.uf,
        }));
      }
    }
  };

  const postSchool = async (e) => {
    e.preventDefault();
    const a = await schoolRoutes.insertSchool(escola);
    setRedirect(a)
  };

  return (
    <PageContainer>
      <ImgContainer img={require("../../assets/img/op-background.png")}>
        <CheckupContainer
          width={desktop ? "80%" : "90%"}
          style={{ margin: desktop ? "0" : "1rem 0" }}
        >
          {redirect && <Navigate to="escola" replace />}
          <Title>Cadastrar Escola</Title>
          <Form>
            <Linha>
              <InputColumn width={desktop ? "60%" : "100%"}>
                <Label>
                  Nome da Escola:<Mandatory>*</Mandatory>
                </Label>
                <Input
                  value={escola.nome}
                  name="nome"
                  onChange={handlechangeEscola}
                  required
                />
              </InputColumn>
              <InputColumn width={desktop ? "20%" : "100%"}>
                <Label>
                  Telefone:<Mandatory>*</Mandatory>
                </Label>
                <Input
                  value={escola.phone}
                  onChange={handlechangeCel}
                  required
                />
              </InputColumn>
              <InputColumn width={desktop ? "20%" : "100%"}>
                <Label
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    justifyContent: "flex-start",
                  }}
                >
                  Código INEP:<Mandatory>*</Mandatory>{" "}
                  <HelpIcon txt={"Pesquise pelo código INEP da sua escola"} />
                </Label>
                <Input
                  value={escola.inep}
                  onChange={handlechangeInep}
                  required
                />
              </InputColumn>
            </Linha>
            <Linha>
              <InputColumn width={desktop ? "20%" : "100%"}>
                <Label>
                  CEP:<Mandatory>*</Mandatory>
                </Label>
                <Input
                  value={escola.cep}
                  onChange={handlechangeCep}
                  onBlur={getCep}
                  required
                />
              </InputColumn>
              <InputColumn width={desktop ? "70%" : "100%"}>
                <Label>
                  Rua:<Mandatory>*</Mandatory>
                </Label>
                <Input
                  value={escola.rua}
                  disabled={desabilitado.bairro}
                  required
                />
              </InputColumn>
              <InputColumn width={desktop ? "10%" : "100%"}>
                <Label>
                  Número:<Mandatory>*</Mandatory>
                </Label>
                <Input
                  value={escola.numero}
                  disabled={desabilitado.number}
                  onChange={handlechangeEscola}
                  name="numero"
                  required
                />
              </InputColumn>
            </Linha>
            <Linha>
              <InputColumn width={desktop ? "40%" : "100%"}>
                <Label>Complemento:</Label>
                <Input
                  value={escola.complemento}
                  disabled={desabilitado.number}
                />
              </InputColumn>
              <InputColumn width={desktop ? "60%" : "100%"}>
                <Label>
                  Bairro:<Mandatory>*</Mandatory>
                </Label>
                <Input
                  value={escola.bairro}
                  onChange={handlechangeEscola}
                  name="bairro"
                  disabled={desabilitado.bairro}
                />
              </InputColumn>
            </Linha>
            <Linha>
              <InputColumn width={desktop ? "90%" : "100%"}>
                <Label>
                  Cidade:<Mandatory>*</Mandatory>
                </Label>
                <Input value={escola.city} disabled required />
              </InputColumn>
              <InputColumn width={desktop ? "10%" : "100%"}>
                <Label>
                  UF:<Mandatory>*</Mandatory>
                </Label>
                <Input
                  value={escola.uf}
                  disabled
                  required
                  style={{ textAlign: "center" }}
                />
              </InputColumn>
            </Linha>
            <Linha>
              <InputColumn width={desktop ? "50%" : "100%"}>
                <Label>E-mail:</Label>
                <Input
                  type="email"
                  value={escola.email}
                  onChange={handlechangeEscola}
                  name="email"
                />
              </InputColumn>
              <InputColumn width={desktop ? "50%" : "100%"}>
                <Label>Site:</Label>
                <Input
                  value={escola.site}
                  onChange={handlechangeEscola}
                  name="site"
                />
              </InputColumn>
            </Linha>
            <Linha>
              <Button primary onClick={postSchool}>
                cadastrar
              </Button>
            </Linha>
          </Form>
        </CheckupContainer>
        <Linha style={{ width: desktop ? "80%" : "90%", flexDirection: "row" }}>
          <PreviousArrow navigate={"cadastro-usuario/escola"} />
        </Linha>
      </ImgContainer>
    </PageContainer>
  );
};

export default CadastroEscolaView;
