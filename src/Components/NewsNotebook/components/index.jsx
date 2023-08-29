import styled from "styled-components";
import { jetbrains } from "../../UI/contants";

const NewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 300px;
  transition-duration: 2s;
  transition: ease-out;
  box-shadow: 0px 4px 50px 0px rgba(0, 0, 0, 0.25);

  &:hover {
    cursor: pointer;
    height: 310px;
    width: 410px
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const NewsThumbnail = styled.img`
  height: 300px;
  object-fit: cover;
`;

const NewsTitle = styled.p`
  margin-top: 1rem;
  font-family: ${jetbrains};
  text-align: right;
  text-transform: uppercase;
`;

export { NewsContainer, NewsThumbnail, NewsTitle };
