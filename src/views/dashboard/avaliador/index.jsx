import { Column, Linha } from "../../../styles/sharedStyles";
import { useMediaQuery } from "../../../hooks/useMediaQuery";
import Card from "../../../Components/Cards";
import Cookies from "js-cookie";

const DashboardAvaliadorView = () => {
  const desktop = useMediaQuery("(min-width: 768px)");

  return (
    <Column
      style={{
        gap: "2rem",
        margin: desktop ? "0" : "1rem 0",
      }}
    >
      <Linha>
        <Card
          icon={"create-1"}
          name={"Aguardando avaliação"}
          desktop={desktop}
          path={`/aguardando-avaliacao/${Cookies.get("user")}`}
          value={"5"}
        />
        <Card
          icon={"draw"}
          name={"Avaliados"}
          desktop={desktop}
          path="#"
          value={"15"}
        />
      </Linha>
    </Column>
  );
};

export default DashboardAvaliadorView;
