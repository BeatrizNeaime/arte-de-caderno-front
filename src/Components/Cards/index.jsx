import React from "react";
import styled from "styled-components";
import { colors, fonts } from "../UI/contants";
import { useState } from "react";
import { Navigate } from "react-router-dom";

const Card = ({ value, icon, name, path, desktop }) => {
  const img = require(`../../assets/img/icons/${icon}.webp`);
  const [change, setChange] = useState(false);
  return (
    <CardDisplay
      onClick={() => {
        setChange(true);
      }}
      desktop={desktop}
    > 
      {change && <Navigate to={path} replace={true} />}
      <CardHeader>
        <AuxDiv width={"60%"} content={"center"}>
          <CardSpanHeader>{value}</CardSpanHeader>
        </AuxDiv>
        <AuxDiv width={"30%"} content={"flex-end"}>
          <CardIcon src={img} />
        </AuxDiv>
      </CardHeader>
      <CardBody>
        <AuxDiv width={"100%"} content={"flex-end"}>
          <CardSpan>{name}</CardSpan>
        </AuxDiv>
      </CardBody>
    </CardDisplay>
  );
};

export default Card;

const CardBody = styled.div`
  align-self: flex-end;
  display: flex;
  margin: 1rem;
  width: auto;
`;

const CardDisplay = styled.div`
  align-items: center;
  border-radius: 6px;
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  height: 200px;
  width: ${(p)=> p.desktop ? "350px" : "90%"};
  justify-content: space-between;
  &:hover {
    background-color: #ffdcde;
    cursor: pointer;
  }
`;

const CardHeader = styled.div`
  align-items: center;
  color: ${colors.pink_color};
  display: flex;
  height: 40%;
  justify-content: space-evenly;
  width: 100%;
`;

const CardSpan = styled.span`
  font-family: ${fonts.jetbrains};
  font-size: 30px;
  text-align: right;
`;

const CardIcon = styled.img`
  height: 70px;
`;

const CardSpanHeader = styled(CardSpan)`
  font-size: 70px;
`;

const AuxDiv = styled.div`
  align-items: center;
  display: flex;
  justify-content: ${(props) => props.content};
  width: ${(props) => props.width};
`;
