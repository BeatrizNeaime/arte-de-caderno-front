import { colors, effects, fonts } from "src/Components/UI/contants";
import styled from "styled-components";

const CardDiv = styled.div`
  height: 200px;
  width: 500px;
  border-left: 10px solid ${colors.blue_color};
  border-radius: 6px;
  background: ${effects.glass.bg};
  backdrop-filter: ${effects.glass.filter};
  padding: 1rem;
  padding-left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  &:hover {
    background-color: white;
    cursor: pointer;
    border: 1px solid ${colors.blue_color};
    border-left: 9px solid ${colors.blue_color};
}

  @media screen and (max-width: 768px){
    width: 90%;
    height: auto;
  }

`;

const SchoolName = styled.p`
  font-family: ${fonts.jetbrains};
  font-size: 22px;
  font-weight: 500;
`;

const SchoolCity = styled.p`
  font-family: ${fonts.jetbrains};
`;

export { CardDiv, SchoolName, SchoolCity };
