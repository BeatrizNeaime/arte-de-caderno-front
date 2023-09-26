import NavBoot from "src/Components/Navbar";
import DrawsTableConstructor from "src/Components/Table/draws-waiting/Table";
import { useMediaQuery } from "src/hooks/useMediaQuery";
import { drawsWaiting } from "src/mocks/draws-waiting";
import {
  Column,
  ContentContainer,
  ImgContainer,
  PageContainer,
  Title,
} from "src/styles/sharedStyles";

const DrawsWaitingView = () => {
  const desktop = useMediaQuery("(min-width: 768px)");

  return (
    <PageContainer>
      <ImgContainer img={require("../../assets/img/op-background.png")}>
        <NavBoot />
        <ContentContainer>
          <Title>Desenhos aguardando avaliação</Title>
          <Column width={desktop ? "70%" : "90%"}>
            <DrawsTableConstructor head={["título", "status", " "]} data={drawsWaiting} />
          </Column>
        </ContentContainer>
      </ImgContainer>
    </PageContainer>
  );
};

export default DrawsWaitingView;
