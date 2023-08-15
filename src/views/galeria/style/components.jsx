import styled from 'styled-components'
import {blue_color} from '../../../Components/UI/contants'

const SidebarColumn = styled.div`
    display: flex ;
    flex-direction: column;
    justify-content: space-between;
    height : 100%;
    border-right: 1px solid ${blue_color};
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
        background-color: ${blue_color};
    }

    p{
        font-family: 'Jetbrains Mono';
    }
`



const Year = styled.p`
  font-family: ${jetbrains};
  padding: 0.7rem;
  text-align: center;
  color: black;

  &:hover {
    background-color: ${green_color};
    color: white;
  }
`;

const SideColumn = styled(Column)`
  border-style: solid;
  border-right-color: ${green_color};
`;


export {SidebarColumn, SidebarLinks}