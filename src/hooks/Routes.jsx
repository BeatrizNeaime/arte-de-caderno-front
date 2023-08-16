import { Route, Routes } from "react-router-dom";
import About from "../pages/about/index";
import Cadastro from "../pages/cadastro";
import Cadastro2 from "../pages/cadastro/index2";
import CadastroEscola from "../pages/cadastro/cadastro-escola";
import Gallery from "../pages/galeria/Galery";
import Home from "../pages/home";
import Login from "../pages/login";
import CadastroAluno from "../pages/cadastro/cadastro-aluno";
import CadastroDesenho from "../pages/cadastro/cadastro-desenho";
import Profile from "../pages/profile";
import Schools from "../pages/schools/Schools";
import Devs from "../pages/devs";
import DashboardRouter from "../views/dashboard";
import StudentsControl from "../pages/students-control";
import StudentInfo from "../Components/Student-info";
import Rating from "../pages/rating";
import TwoFactor from "../pages/twoFactor";

const Rotas = () => {
  return (
    <Routes>
      <Route path="/sobre" element={<About />} />
      <Route path="/" element={<Home />} />
      <Route path="/galeria" element={<Gallery />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro-usuario" element={<Cadastro />} />
      <Route path="/cadastro-2" element={<Cadastro2 />} />
      <Route path="/cadastro-escola" element={<CadastroEscola />} />
      <Route path="/dashboard" element={<DashboardRouter />} />
      <Route path="/add-school" element={<Cadastro2 />} />
      <Route path="/add-student" element={<CadastroAluno />} />
      <Route path="/add-desenho" element={<CadastroDesenho />} />
      <Route path="/perfil" element={<Profile />} />
      <Route path="/escolas" element={<Schools />} />
      <Route path="/desenvolvedores" element={<Devs />} />
      <Route path="/estudantes-cadastrados" element={<StudentsControl />} />
      <Route path="/info" element={<StudentInfo />} />
      <Route path="/avaliar" element={<Rating />} />
      <Route path="/dois-fatores" element={<TwoFactor />} />
    </Routes>
  );
};

export default Rotas;
