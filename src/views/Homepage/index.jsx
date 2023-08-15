import { useState, useEffect, useContext } from "react";
import { Container, ImgContainer, PageContainer, Title } from "../../styles/sharedStyles";
import styled from "styled-components";
import MonthDictionary from "../../hooks/monthDic";
import NavBoot from '../../Components/Navbar'
import Carrossel from '../../Components/Carrossel'

const HomeView = () => {
  const [mes, setMes] = useState();

  useEffect(() => {
    const date = new Date();
    const m = date.getMonth() + 1;
    setMes(MonthDictionary(m));
  }, []);

  return (
    <PageContainer>
      <ImgContainer img={require("../../assets/img/op-background.png")}>
        <NavBoot currentPage={"Início"} />

        <Carrossel/>
      </ImgContainer>
    </PageContainer>
  );
};

export default HomeView;

const Column = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
