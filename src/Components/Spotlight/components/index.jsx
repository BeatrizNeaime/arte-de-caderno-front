import styled from "styled-components";
import { fonts } from "../../UI/contants";

const SpotlightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: white;
  box-shadow: 0px 4px 50px 0px rgba(0, 0, 0, 0.25);
  width: 100%;
  max-height: 70vh;
  height: auto;
  padding: 1rem;
  margin-bottom: 2rem;
`;

const SpotlightImg = styled.img`
  width: auto;
`;

const SpotlightMonth = styled.p`
  font-family: ${fonts.jetbrains};
  text-align: right;
  font-size: 14px;
`;

const SpotlightAuthor = styled(SpotlightMonth)`
  font-size: 18px;
  text-align: center;
`;

const SpotlightInfoContainer = styled.div`
  display: flex;
  background: #ececec;
  border-radius: 0.6em;
  padding: 0.6rem;
  opacity: 0.5;
  backdrop-filter: blur(5px);
  transition: 1500ms (0.175, 0.885, 0.32, 1.275);
  margin: 1rem 0;
  position: absolute;
  bottom: 30%;
  right: 0;
  width: 100%;
  justify-content: space-evenly;

  &:hover{
    opacity: 0.8;
    cursor: pointer;
  }

`;

export {
  SpotlightContainer,
  SpotlightImg,
  SpotlightMonth,
  SpotlightAuthor,
  SpotlightInfoContainer,
};
