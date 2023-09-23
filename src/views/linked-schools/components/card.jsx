import { useState } from "react";
import { CardDiv, SchoolCity, SchoolName } from "./style";
import { Column, Linha } from "src/styles/sharedStyles";
import { InteractiveBtn } from "src/Components/InteractiveBtn";
import { colors } from "src/Components/UI/contants";
import styled from "styled-components";

const SchoolCard = ({ school }) => {
  const [show, setShow] = useState(false);
  return (
    <CardDiv
      onMouseOver={() => setShow(true)}
      onMouseOut={() => setShow(false)}
      onClick={() => setShow(!show)}
    >
      <Linha style={{ gap: 0 }}>
        <StyledColumn width={show ? "50px" : "0"}>
          <InteractiveBtn
            color={colors.red_color}
            onClick={() => console.log("botao")}
          >
            <ion-icon name="trash-outline"></ion-icon>
          </InteractiveBtn>
        </StyledColumn>
        <Column>
          <SchoolName>{school.name}</SchoolName>
          <SchoolCity>
            {school.city} - {school.uf}
          </SchoolCity>
        </Column>
      </Linha>
    </CardDiv>
  );
};

export default SchoolCard;

const StyledColumn = styled(Column)`
  transition: ease-in-out 0.8s;
  height: 200px;
  padding: 0;

  &:hover {
    background-color: rgba(247, 93, 111, 0.2);
  }
`;
