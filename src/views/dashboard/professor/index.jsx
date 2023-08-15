import React from "react";
import { Column, Linha } from "../../../styles/sharedStyles";
import Card from "../../../Components/Cards";
import { useMediaQuery } from "../../../hooks/useMediaQuery";

const DashboardProfessorView = ({ user }) => {
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
          icon={"people-1"}
          name={"Alunos Cadastrados"}
          value={user.studentsId.length}
          desktop={desktop}
        />
        <Card
          icon={"draw"}
          name={"Desenhos Cadastrados"}
          value={"0"}
          desktop={desktop}
        />
        <Card
          icon={"book11"}
          name={"Escolas Vinculadas"}
          value={user.schoolId.length}
          desktop={desktop}
        />
      </Linha>
      <Linha>
        <Card
          icon={"person-add-1"}
          name={"Cadastrar Aluno"}
          desktop={desktop}
        />
        <Card icon={"add-draw"} name={"Cadastrar Desenho"} desktop={desktop} />
        <Card
          icon={"add-circle"}
          name={"Vincular nova escola"}
          desktop={desktop}
        />
      </Linha>
    </Column>
  );
};

export default DashboardProfessorView;
