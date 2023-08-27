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
    nome: "",
    cpf: "",
    bday: "",
    cel: "",
    email: "",
    senha: "",
    perfil: "",
    cep: "",
    rua: "",
    numero: "",
    complemento: "",
    bairro: "",
    cidade: "",
    uf: "",
    escola: "",
    token: ""
  });
  const [isLogged, setIsLogged] = useState(false);

  const [user, setUser] = useState({
    id: "",
    name: "",
    date_of_birth: "",
    cpf: "",
    accessType: "",
    email: "",
    password: "",
    phone: "",
    cep: "",
    city: "",
    loginId: "",
    state: "",
    schoolId: "",
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
