import { useMediaQuery } from "../../hooks/useMediaQuery";
import styled from "styled-components";
import {useEffect, useContext} from 'react'
import { LoggedContext } from "../../contexts/loggedContext";
import {userContext} from '../../contexts/userContext'
import Sidebar from "./Sidebar";
import DashboardProfessor from "./DashboardProfessor";

const Dashboard = () => {
  const desktop = useMediaQuery("(min-width: 768px)");
  const logged = useContext(LoggedContext);
  const {isLogged} = logged
  const context = useContext(userContext)
  const {user} = context

  useEffect(() => {
    if(!isLogged){
      window.location.href = "/login";
    }
  }, []);

  return (
    <DashContainer display={desktop ? "row" : "column"}>
      <Sidebar name={user.name}/>
      <DashboardProfessor user={user} />
    </DashContainer>
  );
};

export default Dashboard;

const DashContainer = styled.div`
  min-height: 90vh;
  display: flex;
  flex-direction: ${(props) => props.display};
`;

