import React from "react";
import { SpotlightContainer, SpotlightImg, SpotlightMonth } from "./components";
import { Column, Title } from "../../styles/sharedStyles";
import { monthDic } from "../../hooks/monthDic";
import Info from "./components/Info";
import { getDate } from "../../services/getDate";

const Spotlight = ({ img, nome, edicao }) => {
  return (
    <SpotlightContainer>
      <Column>
        <SpotlightImg src={require(`../../assets/img/Desenhos/${img}.png`)} />
      </Column>
      <Column
        width={"20%"}
        style={{ alignItems: "flex-end", padding: "1rem", zIndex: "1000" }}
      >
        <Column
          width={"30%"}
          style={{ alignItems: "flex-end", position: "absolute" }}
        >
          <Title>destaque</Title>
          <Title>do mês!</Title>
          <SpotlightMonth>IFSULDEMINAS - {getDate.getMonth()}</SpotlightMonth>
        </Column>
          <Info nome={nome} edicao={edicao} />
      </Column>
    </SpotlightContainer>
  );
};

export default Spotlight;
