import {useEffect, useState} from "react";
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

const GalleryView = () => {
  const desktop = useMediaQuery("(min-width: 768px)");
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);



  return (
    <PageContainer style={{overflowX: "hidden"}} >
      <ImgContainer img={require("../../assets/img/op-background.png")} style={{overflowX: "hidden"}} >
        <NavBoot currentPage={"Galeria"} />
        <ContentContainer style={{overflowX: "hidden"}} >
          <Title>Galeria</Title>
          <Linha>
            {desktop && <Sidebar style={{ alignSelf: "flex-start" }} />}
            <GalleryContainer />
          </Linha>
        </ContentContainer>
      </ImgContainer>
    </PageContainer>
  );
};

export default GalleryView;
