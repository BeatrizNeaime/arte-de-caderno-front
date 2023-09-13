import { TbInfoCircle } from "react-icons/tb";
import React from "react";
import styled from "styled-components";
import { colors } from "../UI/contants";

const Draws = ({ draw }) => {

  return (
    <DrawCard>
      <div>
        <img
          src={draw.linkImage}
          width="200"
          height="200"
          className="rounded-md"
        />
      </div>
      <DrawInfo>
        <DrawSpan>
          <TbInfoCircle /> Edição: 2023
        </DrawSpan>
      </DrawInfo>
    </DrawCard>
  );
};

export default Draws;

const DrawCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 10px;
  border-radius: 15px;
  background-color: ${colors.deepGrey};
  max-width: 250px;
`;

const DrawInfo = styled.div`
  padding: 5px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const DrawSpan = styled.p`
  display: flex;
  gap: 2px;
  align-items: center;
  justify-content: center;
`;
