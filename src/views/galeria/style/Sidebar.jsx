import styled from "styled-components";
import { Column } from "../../../styles/sharedStyles";
import { colors, fonts } from "../../../Components/UI/contants";
const years = ["2019", "2020", "2021", "2022"];

function Sidebar() {
  return (
    <SideColumn width={"10%"}>
      {years.map((year) => {
        return <Year key={year}>{year}</Year>;
      })}
    </SideColumn>
  );
}

export default Sidebar;

const Year = styled.p`
  font-family: ${fonts.jetbrains};
  padding: 0.7rem;
  text-align: center;
  color: black;

  &:hover {
    background-color: ${colors.green_color};
    color: white;
    cursor: pointer;
  }
`;

const SideColumn = styled(Column)`
  border-right: 2px solid ${colors.green_color};
  max-width: 20%;
  position: sticky;
`;
