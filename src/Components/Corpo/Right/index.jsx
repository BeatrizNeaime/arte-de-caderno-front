import { useState, useEffect } from "react";
import { Container, InputColumn, Title } from "../../../styles/sharedStyles";
import styled from "styled-components";
import { jetbrains } from "../../UI/contants.js";
import MonthDictionary from "../../../hooks/monthDic";
import DadosAutor from "../Left/DadosAutor";

const RightSide = () => {
  const [mes, setMes] = useState();
  const date = new Date();
  const m = date.getMonth() + 1;

  useEffect(() => {
    setMes(MonthDictionary(m));
  }, []);

  return (
    <Container width={"35%"}>
      <Column>
        <Title>destaques</Title>
        <Title>do mês!</Title>
        <sub style={{ fontFamily: `${jetbrains}` }}>IFSULDEMINAS - {mes}</sub>
        <Column>
          <DadosAutor />
        </Column>
      </Column>
    </Container>
  );
};

export default RightSide;

const Column = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const sub = styled.span`
  text-align: right;
  font-family: ${jetbrains};
`;
