import { Route, Routes} from "react-router-dom";
import About from "../pages/about/index";
import Cadastro from "../pages/cadastro";
import Cadastro2 from "../pages/cadastro/index2";
import CadastroEscola from "../pages/cadastro/cadastro-escola";
import Gallery from "../pages/galeria/Gallery";
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
import LinkedSchools from "src/pages/linked-schools";
import MyDraws from "src/pages/my-draws";
import ProtectedRoute from "./ProtectedRoute";

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<About />} />
      <Route path="/galeria" element={<Gallery />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/cadastro-usuario"
        element={<ProtectedRoute Component={Cadastro} />}
      />
      <Route
        path="/cadastro-usuario/escola"
        element={<ProtectedRoute Component={Cadastro2} />}
      />
      <Route
        path="/cadastro-escola"
        element={<ProtectedRoute Component={CadastroEscola} />}
      />
      <Route
        path="/dashboard"
        element={<ProtectedRoute Component={DashboardRouter} />}
      />
      <Route
        path="/add-student"
        element={<ProtectedRoute Component={CadastroAluno} />}
      />
      <Route
        path="/add-desenho"
        element={<ProtectedRoute Component={CadastroDesenho} />}
      />
      <Route path="/perfil" element={<ProtectedRoute Component={Profile} />} />
      <Route path="/escolas" element={<ProtectedRoute Component={Schools} />} />
      <Route path="/desenvolvedores" element={<Devs />} />
      <Route
        path="/estudantes-cadastrados"
        element={<ProtectedRoute Component={StudentsControl} />}
      />
      <Route
        path="/info"
        element={<ProtectedRoute Component={StudentInfo} />}
      />
      <Route path="/avaliar" element={<ProtectedRoute Component={Rating} />} />
      <Route path="/dois-fatores" element={<TwoFactor />} />
      <Route
        path="/escolas-vinculadas"
        element={<ProtectedRoute Component={LinkedSchools} />}
      />
      <Route
        path="/desenhos"
        element={<ProtectedRoute Component={MyDraws} />}
      />
    </Routes>
  );
};

export default Rotas;
