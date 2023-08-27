import React from "react";
import { useMediaQuery } from "../../../hooks/useMediaQuery";
import { Container } from "../../../styles/sharedStyles.jsx";
import Draws from "../../../Components/Draws";
import styled from "styled-components";

const GalleryContainer = () => {
  const desktop = useMediaQuery("(min-width: 768px)");

  return (
    <DrawContainers width={"100%"} style={{marginBottom: "1rem"}}>
      <Draws
        author={"Aluno"}
        age={"22"}
        path={require("../../../assets/img/gatorujo.jpg")}
      />
      <Draws
        author={"Aluno"}
        age={"22"}
        path={require("../../../assets/img/pincel.png")}
      />
      <Draws
        author={"Aluno"}
        age={"22"}
        path={require("../../../assets/img/pincel.png")}
      />
      <Draws
        author={"Aluno"}
        age={"22"}
        path={require("../../../assets/img/pincel.png")}
      />
      <Draws
        author={"Aluno"}
        age={"22"}
        path={require("../../../assets/img/pincel.png")}
      />
      <Draws
        author={"Aluno"}
        age={"22"}
        path={require("../../../assets/img/pincel.png")}
      />
      <Draws
        author={"Aluno"}
        age={"22"}
        path={require("../../../assets/img/pincel.png")}
      />
      <Draws
        author={"Aluno"}
        age={"22"}
        path={require("../../../assets/img/pincel.png")}
      />

      <Draws
        author={"Aluno"}
        age={"22"}
        path={require("../../../assets/img/pincel.png")}
      />
      <Draws
        author={"Aluno"}
        age={"22"}
        path={require("../../../assets/img/pincel.png")}
      />
      <Draws
        author={"Aluno"}
        age={"22"}
        path={require("../../../assets/img/pincel.png")}
      />
    </DrawContainers>
  );
};

export default GalleryContainer;

const DrawContainers = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: ${(p) => p.width};
  flex-wrap: wrap;
  gap: 1rem;
`;
