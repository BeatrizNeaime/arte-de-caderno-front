import React from "react";
import { useMediaQuery } from "../../../hooks/useMediaQuery";
import { Container } from "../../../styles/sharedStyles.jsx";
import Draws from "../../../Components/Draws";
import styled from "styled-components";

const GalleryContainer = ({ data }) => {
  const desktop = useMediaQuery("(min-width: 768px)");

  return (
    <DrawContainers width={"100%"} style={{ marginBottom: "1rem" }}>
      {data.map((d) => {
        return <Draws draw={d} />;
      })}
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
