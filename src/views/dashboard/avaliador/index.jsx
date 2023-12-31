import React from "react";
import { Column, Linha } from "../../../styles/sharedStyles";
import { useMediaQuery } from "../../../hooks/useMediaQuery";
import Card from "../../../Components/Cards";

const DashboardAvaliadorView = () => {
  const desktop = useMediaQuery("(min-width: 768px)");

  return (
    <Column
      style={{
        gap: "2rem",
        margin: desktop ? "0" : "1rem 0",
      }}
    >
      <Linha>
        <Card icon={"create-1"} name={"Aguardando avaliação"} desktop={desktop} path="#" />
        <Card icon={"draw"} name={"Avaliados"} desktop={desktop} path="#" />
      </Linha>
    </Column>
  );
};

export default DashboardAvaliadorView;
