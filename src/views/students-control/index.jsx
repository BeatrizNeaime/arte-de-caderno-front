import { useContext, useState, useEffect } from "react";
import {
  Column,
  ContentContainer,
  ImgContainer,
  Linha,
  PageContainer,
  Title
} from "../../styles/sharedStyles";
import NavBoot from "../../Components/Navbar";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import Table from "../../Components/Table";
import { userContext } from "src/contexts/userContext";
import { professorRoutes } from "src/services/professorRoutes";
import Loading from "src/Components/Loading";
import PreviousArrow from "src/Components/PreviousArrow";

const StudentsControlView = () => {
  const desktop = useMediaQuery("(min-width: 768px)");
  const { user } = useContext(userContext);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const a = await professorRoutes.getStudents(user);
    if (a) {
      setData(a);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <PageContainer>
        <ImgContainer img={require("../../assets/img/op-background.png")}>
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
        <ImgContainer img={require("../../assets/img/op-background.png")}>
          <NavBoot />
          <ContentContainer>
            <Linha>
              <Title>Alunos Cadastrados</Title>
            </Linha>
            <Column width={desktop ? "80%" : "100%"}>
              <Table header={["nome", "desenhos", " "]} data={data} />
            </Column>
            <Linha
              style={{ flexDirection: "row", width: desktop ? "80%" : "100%" }}
            >
              <PreviousArrow navigate={"dashboard"} />
            </Linha>
          </ContentContainer>
        </ImgContainer>
      </PageContainer>
    );
  }
};

export default StudentsControlView;
