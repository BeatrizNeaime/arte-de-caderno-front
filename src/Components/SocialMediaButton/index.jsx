import styled from "styled-components";
import { fonts } from "../UI/contants";

const SocialMediaButton = ({ color, width, img, bg }) => {
  return (
    <SocialMediaBtn color={color} width={width} bg={bg}>
      <ion-icon name={img}></ion-icon>
    </SocialMediaBtn>
  );
};

export default SocialMediaButton;

const SocialMediaBtn = styled.button`
  align-items: center;
  background-color: ${(props) => props.color};
  border: none;
  border-radius: 6px;
  color: #fefefe;
  display: flex;
  flex-direction: row;
  font-family: ${fonts.jetbrains};
  min-height: 30px;
  justify-content: space-evenly;
  padding: 5px;
  width: ${(props) => props.width};
  &:hover{
    background-color: ${(props) => props.bg};
    cursor: pointer;
  };
`;
