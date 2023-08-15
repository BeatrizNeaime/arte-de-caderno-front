import {useContext, useEffect} from "react";
import { Container, Title, Button, Column } from "../../styles/sharedStyles";
import styled from "styled-components";
import {userContext} from '../../contexts/userContext'
import {LoggedContext} from '../../contexts/loggedContext'

const Schools = () => {
  const context = useContext(userContext);
  const logged = useContext(LoggedContext);
  const {user} = context
  const {isLogged} = logged

  useEffect(() => {
    if(!isLogged){
      window.location.href = "/login";
    }
  }, []);
  return (
    <Container>
      <MainContainer
        height={"80%"}
        style={{ height: "auto", flexDirection: "column" }}
      >
        <Title>Minhas Escolas</Title>
        <Container height={"auto"} width={"80%"} >
          <Container height={"auto"} style={{ justifyContent: "flex-end" }}>
            <Button primary>Adicionar</Button>
          </Container>
        </Container>
        <Container>
          
        </Container>
      </MainContainer>
    </Container>
  );
};

export default Schools;

const MainContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: calc(100vh - 85px) !important;
  padding: 10px;
  width: 100%;
`;
