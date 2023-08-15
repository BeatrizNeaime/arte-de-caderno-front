import {
  Button,
  InputColumn,
  Label,
  Linha,
  Mandatory,
  Select,
  Option,
  Container,
  Title,
} from "../../styles/sharedStyles";
import styled from "styled-components";
import { useEffect, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { singupContext } from "../../contexts/singupContext";
import { ForgotLink } from "../login";
import singUpValidation from "../../hooks/SingUpValidation";
import { toast } from "react-toastify";
import UserCheckUpView2 from "../../views/cadastro-usuario/index2";

const initialState = {
  uf: "",
  city: "",
  school: "",
};

const Cadastro2 = ({ currentPage, setCurrentPage, desktop }) => {
  const { pessoa, setPessoa } = useContext(singupContext);
  const [ufs, setUfs] = useState(null);
  const [schools, setSchools] = useState(null);
  const [cities, setCities] = useState(null);
  const [selected, setSelected] = useState(initialState);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const postStudent = async () => {
    console.log("posting aluno");

    let address =
      pessoa.rua + ", " + pessoa.numero + " " + pessoa.complemento ||
      null + "." + pessoa.bairro;

    let url = "http://localhost:8080/student";
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
        schoolId: `${pessoa.escola}`,
        password: `${pessoa.senha}`,
        isFromProfessor: false,
      }),
    };

    try {
      const a = await fetch(url, options);
      const b = await a.json();
      navigate("/login");
    } catch (err) {
      toast.error("Erro ao cadastrar aluno");
    }
  };

  const postProf = async () => {
    console.log("posting prof");

    let address =
      pessoa.rua + ", " + pessoa.numero + " " + pessoa.complemento ||
      null + "." + pessoa.bairro;

    let url = "http://localhost:8080/professor";
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
        schoolId: `${pessoa.escola}`,
        password: `${pessoa.senha}`,
      }),
    };

    try {
      const a = await fetch(url, options);
      const b = await a.json();
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
      school: value,
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
    <UserCheckUpView2 setCurrentPage={setCurrentPage} currentPage={currentPage} />
  );
};

export default Cadastro2;

const SingUpContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  height: auto;
  margin-top: 15px;
  width: ${(props) => (props.width ? props.width : "100%")};
`;
