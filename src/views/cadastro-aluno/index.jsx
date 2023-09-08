import { useContext } from "react";
import {
  ContentContainer,
  ImgContainer,
  PageContainer,
  Linha,
} from "../../styles/sharedStyles";
import NavBoot from "../../Components/Navbar";
import FormCadastroEstudante from "../../Components/FormCadastroEstudante";
import PreviousArrow from "../../Components/PreviousArrow";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { LoggedContext } from "src/contexts/loggedContext";
import { Navigate } from "react-router-dom";

const CadastroAlunoView = ({ user }) => {
  const desktop = useMediaQuery("(min-width: 768px)");
  const { isLogged } = useContext(LoggedContext);

  return (
    <PageContainer>
      {!isLogged && <Navigate to="/login" replace />}
      <ImgContainer img={require("../../assets/img/op-background.png")}>
        <NavBoot />
        <ContentContainer>
          <FormCadastroEstudante user={user} />
          <Linha
            style={{
              justifyContent: "flex-start",
              width: `${desktop ? "80%" : "100%"}`,
            }}
          >
            <PreviousArrow navigate={"dashboard"} />
          </Linha>
        </ContentContainer>
      </ImgContainer>
    </PageContainer>
  );
};

export default CadastroAlunoView;
