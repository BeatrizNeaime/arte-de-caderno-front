import { useEffect, useState } from "react";
import Loading from "src/Components/Loading";
import NavBoot from "src/Components/Navbar";
import { drawRoutes } from "src/services/drawRoutes";
import {
  PageContainer,
  ImgContainer,
  ContentContainer,
  Title,
  Linha
} from "src/styles/sharedStyles";
import Draws from "src/Components/Draws";
import Cookies from "js-cookie";

const MyDrawsView = () => {
  const [loading, setLoading] = useState(true);
  const [draws, setDraws] = useState(null);
  

  useEffect(() => {
    getDraws();
  }, []);

  const getDraws = async () => {
    const a = drawRoutes.getDrawsByUser(Cookies.get('user'));
    if (a) {
      setDraws(a);
      setLoading(false);
      console.log(draws)
    }
  };

  if (loading) {
    return (
      <PageContainer>
        <ImgContainer img={require("src/assets/img/op-background.png")}>
          <NavBoot />
          <ContentContainer>
            <Loading />
          </ContentContainer>
        </ImgContainer>
      </PageContainer>
    );
  } else {
    return (
      <PageContainer>
        <ImgContainer img={require("src/assets/img/op-background.png")}>
          <NavBoot />
          <ContentContainer>
            <Title>Meus Desenhos</Title>
            <Linha>
              {draws.map((d, i) => {
                return <Draws draw={d} key={i} />;
              })}
            </Linha>
          </ContentContainer>
        </ImgContainer>
      </PageContainer>
    );
  }
};

export default MyDrawsView;
