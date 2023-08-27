import { useState, useEffect } from "react";
import {
  ContentContainer,
  ImgContainer,
  PageContainer,
  Title,
  Column,
} from "../../styles/sharedStyles";
import Carrossel from "../../Components/Carrossel";
import { loadHome } from "../../utils/loadData";
import Loading from "../../Components/Loading";
import NavBoot from '../../Components/Navbar'

const HomeView = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const res = loadHome();
    setData(res);
  }, []);

  return (
    <PageContainer>
      <ImgContainer img={require("../../assets/img/op-background.png")}>
        <NavBoot currentPage={"Início"} />
        <ContentContainer>
          <Column>
            {!data && <Loading />}
            {data && (
              <>
                <Title>Destaques do mês!</Title>
                <Carrossel data={data} />
              </>
            )}
          </Column>
        </ContentContainer>
      </ImgContainer>
    </PageContainer>
  );
};

export default HomeView;
