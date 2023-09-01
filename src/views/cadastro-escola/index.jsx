import { useState } from "react";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { masks } from "../../utils/masks";
import {
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

const CadastroEscolaView = () => {
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

  return (
    <PageContainer>
      <ImgContainer img={require("../../assets/img/op-background.png")}>
        <CheckupContainer
          width={desktop ? "80%" : "90%"}
          style={{ margin: desktop ? "0" : "1rem 0" }}
        >
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
                />
              </InputColumn>
              <InputColumn width={desktop ? "20%" : "100%"}>
                <Label>
                  Telefone:<Mandatory>*</Mandatory>
                </Label>
                <Input value={escola.phone} onChange={handlechangeCel} />
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
                <Input value={escola.inep} onChange={handlechangeInep} />
              </InputColumn>
            </Linha>
            <Linha>
              <InputColumn width={desktop ? "20%" : "100%"}>
                <Label>
                  CEP:<Mandatory>*</Mandatory>
                </Label>
                <Input value={escola.cep} onChange={handlechangeCep} />
              </InputColumn>
            </Linha>
          </Form>
        </CheckupContainer>
      </ImgContainer>
    </PageContainer>
  );
};

export default CadastroEscolaView;
