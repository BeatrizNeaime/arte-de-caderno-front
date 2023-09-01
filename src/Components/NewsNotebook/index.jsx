import { useEffect, useState } from "react";
import loadNews from "../../services/loadNews";
import { Column, Title, Linha } from "../../styles/sharedStyles";
import { SpotlightMonth } from "../Spotlight/components/index";
import { getDate } from "../../services/getDate";
import NewsCard from "./components/NewsCard";
import Loading from "../Loading";

const NewsNotebook = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const a = loadNews();
    setData(a);
  }, []);

  return (
    <Column style={{ padding: "1rem", overflowX: "hidden" }}>
      <Column
        width={"30%"}
        style={{
          alignItems: "flex-start",
          alignSelf: "flex-start",
          padding: "1rem",
        }}
      >
        <Title>Caderno</Title>
        <Title>de notícias</Title>
        <SpotlightMonth>IFSULDEMINAS - {getDate.getMonth()} </SpotlightMonth>
      </Column>
      {!data && <Loading />}
      {data && (
        <Linha style={{ marginTop: "1rem" }}>
          {data.map((d, i) => {
            return <NewsCard img={d.thumb} title={d.title} key={i} />;
          })}
        </Linha>
      )}
    </Column>
  );
};

export default NewsNotebook;
