import styled from "styled-components";
import { fonts } from "../UI/contants";

const MyTable = styled.table`
  width: 100%;
  min-height: 10vh;
  height: auto;
  max-height: 50vh;
  overflow-y: scroll;
`;

const THead = styled.thead`
  background: white;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 1rem;
  backdrop-filter: blur(5px);
  border-bottom: 1px solid #d3d3d3;
`;

const TH = styled.th`
  font-family: ${fonts.jetbrains};
  text-transform: uppercase;
  width: 100%;
`;

const TBody = styled.tbody`
  padding: 5px;
  width: 100%;
  overflow-y: scroll;
`;

const TR = styled.tr`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;

  &:hover {
    background-color: #ecebe8;
  }
`;

const TD = styled.td`
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 5px;
`;

export { MyTable, TBody, TH, THead, TR, TD };
