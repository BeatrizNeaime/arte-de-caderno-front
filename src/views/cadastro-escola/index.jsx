import {useState} from "react";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { masks } from "../../hooks/masks";

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
  return <div>CadastroEscolaView</div>;
};

export default CadastroEscolaView;
