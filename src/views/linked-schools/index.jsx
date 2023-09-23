import { useContext, useState, useEffect } from "react";
import Loading from "src/Components/Loading";
import NavBoot from "src/Components/Navbar";
import { userContext } from "src/contexts/userContext";
import { professorRoutes } from "src/services/professorRoutes";
import {
  ContentContainer,
  ImgContainer,
  Linha,
  PageContainer,
  Title,
} from "src/styles/sharedStyles";
import SchoolCard from "./components/card";
import PreviousArrow from "src/Components/PreviousArrow";
import { useMediaQuery } from "src/hooks/useMediaQuery";
import Cookies from "js-cookie";

const LinkedSchoolsView = () => {
  const desktop = useMediaQuery("(min-width: 768px)");
  const [loading, setLoading] = useState(true);
  const [schools, setSchools] = useState(null);
  const { user } = useContext(userContext);

  useEffect(() => {
    getSchools();
  }, []);

  const getSchools = async () => {
    const a = await professorRoutes.getSchools(Cookies.get("user"));
    if (a) {
      setSchools(a);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <PageContainer>
        <ImgContainer img={require("src/assets/img/op-background.png")}>
          <NavBoot />
          <Loading />
        </ImgContainer>
      </PageContainer>
    );
  } else {
    return (
      <PageContainer>
        <ImgContainer img={require("src/assets/img/op-background.png")}>
          <NavBoot />
          <ContentContainer>
            <Title>Escolas Vinculadas</Title>
            <Linha>
              {schools.map((school) => {
                return <SchoolCard school={school} key={school._id} />;
              })}
            </Linha>
            <Linha
              style={{
                width: desktop ? "80%" : "100%",
                justifySelf: "flex-end",
              }}
            >
              <PreviousArrow />
            </Linha>
          </ContentContainer>
        </ImgContainer>
      </PageContainer>
    );
  }
};

export default LinkedSchoolsView;
