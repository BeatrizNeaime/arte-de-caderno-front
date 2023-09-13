import { useEffect, useState } from "react";
import {
  Container,
  ContentContainer,
  ImgContainer,
  Linha,
  PageContainer,
  Title,
} from "../../styles/sharedStyles";
import NavBoot from "../../Components/Navbar";
import Sidebar from "./style/Sidebar";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import GalleryContainer from "./style/GalleryContainer";
import Loading from "src/Components/Loading";
import { drawRoutes } from "src/services/drawRoutes";

const GalleryView = () => {
  const desktop = useMediaQuery("(min-width: 768px)");
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  const getData = async()=>{
    const a = await drawRoutes.getAllDraws()
    setData(a)
    setLoading(false)
  }

  useEffect(() => {
    getData()
  }, []);

  if (loading) {
    return (
      <PageContainer>
        <ImgContainer img={require("../../assets/img/op-background.png")}>
          <NavBoot currentPage={"Galeria"} />
          <ContentContainer>
            <Loading />
          </ContentContainer>
        </ImgContainer>
      </PageContainer>
    );
  } else {
    return (
      <PageContainer>
        <ImgContainer img={require("../../assets/img/op-background.png")}>
          <NavBoot currentPage={"Galeria"} />
          <ContentContainer>
            <Title>Galeria</Title>
            <Linha>
              {desktop && <Sidebar style={{ alignSelf: "flex-start" }} />}
              <GalleryContainer data={data} />
            </Linha>
          </ContentContainer>
        </ImgContainer>
      </PageContainer>
    );
  }
};

export default GalleryView;
