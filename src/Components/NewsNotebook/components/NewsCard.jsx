import React from "react";
import { NewsContainer, NewsThumbnail, NewsTitle } from ".";

const NewsCard = ({ img, title, link }) => {
  return (
    <NewsContainer>
      <NewsThumbnail src={img} />
      <NewsTitle>{title}</NewsTitle>
    </NewsContainer>
  );
};

export default NewsCard;
