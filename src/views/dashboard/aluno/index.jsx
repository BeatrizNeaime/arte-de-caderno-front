import React from "react";
import { Column, ContentContainer, Linha } from "../../../styles/sharedStyles";
import { useMediaQuery } from "../../../hooks/useMediaQuery";
import Card from "../../../Components/Cards";

const DashboardAlunoView = ({ user }) => {
  const desktop = useMediaQuery("(min-width: 768px)");
  return (
    <Column
      style={{
        gap: "2rem",
        margin: desktop ? "0" : "1rem 0",
      }}
    >
      <Linha>
        <Card
          icon={"create-1"}
          name={"Editar dados pessoais"}
          desktop={desktop}
          path={"/perfil"}
        />
        <Card
          icon={"add-draw"}
          name={"Cadastrar novo desenho"}
          desktop={desktop}
          path={"/add-desenho"}
        />
        <Card
          icon={"draw"}
          name={"Desenhos Cadastrados"}
          desktop={desktop}
          value={user.drawsId ? user.drawsId.length : "0"}
        />
      </Linha>
    </Column>
  );
};

export default DashboardAlunoView;
