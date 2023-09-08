import { BrowserRouter as Router } from "react-router-dom";
import NavBoot from "./Components/Navbar";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Rotas from "./hooks/Routes";
import { singupContext } from "./contexts/singupContext";
import { LoggedContext } from "./contexts/loggedContext";
import { userContext } from "./contexts/userContext";
import { currentPageContext } from "./contexts/currentPage";

function App() {
  const [pessoa, setPessoa] = useState({
    nome: null,
    cpf: null,
    bday: null,
    cel: null,
    email: null,
    senha: null,
    perfil: null,
    cep: null,
    rua: null,
    numero: null,
    complemento: null,
    bairro: null,
    cidade: null,
    uf: null,
    escola: null,
    token: null
  });
  const [isLogged, setIsLogged] = useState(false);

  const [user, setUser] = useState({
    id: null,
    name: null,
    date_of_birth: null,
    cpf: null,
    accessType: null,
    email: null,
    password: null,
    phone: null,
    cep: null,
    city: null,
    loginId: null,
    state: null,
    schoolId: null,
    studentsId: [],
    drawsId: []
  });

  const [currentPage, setCurrentPage] = useState("Início");

  return (
    <div className="text-center">
      <Router>
        <singupContext.Provider value={{ pessoa, setPessoa }}>
          <LoggedContext.Provider value={{ isLogged, setIsLogged }}>
            <userContext.Provider value={{ user, setUser }}>
              <Rotas />
            </userContext.Provider>
          </LoggedContext.Provider>
        </singupContext.Provider>
      </Router>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
