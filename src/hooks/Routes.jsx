import { Route, Routes } from "react-router-dom";
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
import StudentInfo from "../pages/student-info";
import Rating from "../pages/rating";
import TwoFactor from "../pages/twoFactor";
import LinkedSchools from "src/pages/linked-schools";
import MyDraws from "src/pages/my-draws";
import ProtectedRoute from "./ProtectedRoute";
import NotLoggedRoute from "./NoLoggedRoute";
import ForgotPassword from "src/pages/forgot-password";
import ChangePassword from "src/views/forgot-password/change-pwd";
import DrawsWaiting from "src/pages/draws-waiting-rate";

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<About />} />
      <Route path="/galeria" element={<Gallery />} />
      <Route path="/desenvolvedores" element={<Devs />} />
      /* --- ROTAS PROTEGIDAS (precisam de login) --- */
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
      <Route
        path="/estudantes-cadastrados"
        element={<ProtectedRoute Component={StudentsControl} />}
      />
      <Route
        path="/info/:student_id"
        element={<ProtectedRoute Component={StudentInfo} />}
      />
      <Route path="/avaliar" element={<ProtectedRoute Component={Rating} />} />
      <Route
        path="/escolas-vinculadas"
        element={<ProtectedRoute Component={LinkedSchools} />}
      />
      <Route
        path="/desenhos/:id?"
        element={<ProtectedRoute Component={MyDraws} />}
      />
      <Route
        path="/aguardando-avaliacao/:id"
        element={<ProtectedRoute Component={DrawsWaiting} />}
      />
      /* --- SÓ RENDERIZA SE NÃO ESTIVER LOGADO --- */
      <Route path="/login" element={<NotLoggedRoute Component={Login} />} />
      <Route
        path="/dois-fatores"
        element={<NotLoggedRoute Component={TwoFactor} />}
      />
      <Route
        path="/recuperar-senha"
        element={<NotLoggedRoute Component={ForgotPassword} />}
      />
      <Route
        path="/trocar-senha/:id?"
        element={<NotLoggedRoute Component={ChangePassword} />}
      />
      <Route
        path="/cadastro-usuario"
        element={<NotLoggedRoute Component={Cadastro} />}
      />
      <Route
        path="/cadastro-usuario/escola"
        element={<NotLoggedRoute Component={Cadastro2} />}
      />
    </Routes>
  );
};

export default Rotas;
