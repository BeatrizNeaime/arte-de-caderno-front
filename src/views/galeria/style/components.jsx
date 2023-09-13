import styled from 'styled-components'
import { colors, fonts } from 'src/Components/UI/contants';
import { Column } from 'src/styles/sharedStyles';

const SidebarColumn = styled.div`
    display: flex ;
    flex-direction: column;
    justify-content: space-between;
    height : 100%;
    border-right: 1px solid ${colors.blue_color};
    padding: 5px;
    max-width: 10%;
`

const SidebarLinks = styled.div`
    height: 30px;
    text-align: center;
    width: 100%;
    display: flex;
    align-items: center;

    &:hover{
        cursor: pointer !important;
        background-color: ${colors.blue_color};
    }

    p{
        font-family: 'Jetbrains Mono';
    }
`



const Year = styled.p`
  font-family: ${fonts.jetbrains};
  padding: 0.7rem;
  text-align: center;
  color: black;

  &:hover {
    background-color: ${colors.green_color};
    color: white;
  }
`;

const SideColumn = styled(Column)`
  border-style: solid;
  border-right-color: ${colors.green_color};
`;

const DrawCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 15px;
  background-color: ${colors.deepGrey};
  width: 220px;
  height: 255px !important;
`;

const DrawInfo = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-top: 1rem;
`;

const DrawSpan = styled.p`
  display: flex;
  gap: 2px;
  align-items: center;
  justify-content: center;
`;


export {SidebarColumn, SidebarLinks, DrawSpan, DrawInfo, DrawCard}