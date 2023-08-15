import styled from "styled-components";
import {
  blue_color,
  red_color,
  deepGrey,
  deepBlue,
  lightGrey,
  magicRetro,
  jetbrains,
  facebook_hover,
} from "../Components/UI/contants";

const Select = styled.select`
  border: 1px solid ${blue_color};
  border-radius: 30px;
  padding: 5px 10px;
  text-align: left;
  width: ${(props) => (props.width ? props.width : "auto")};
`;

const Option = styled.option`
  border-radius: 8px;

  &:hover {
    background-color: ${blue_color};
    cursor: pointer;
  }
`;

const Mandatory = styled.sup`
  color: ${red_color};
`;

const Linha = styled.div`
  align-items: center;
  display: flex;
  gap: 15px;
  justify-content: space-evenly;
  width: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Label = styled.label`
  align-self: flex-start;
  padding-bottom: 5px;
  font-family: "JetBrains Mono";
`;

const InputColumn = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: ${(props) => (props.margin ? props.margin : 0)};
  width: ${(props) => (props.width ? props.width : "50%")};
`;

const Input = styled.input`
  border: 1px solid ${blue_color};
  border-radius: 30px;
  padding: 5px 10px;
  text-align: left;
  width: ${(props) => (props.width ? props.width : "100%")};
`;

const Column = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: ${(props) => (props.width ? props.width : "100%")};
`;

const Button = styled.button`
  background-color: ${(props) => (props.primary ? blue_color : deepGrey)};
  border-radius: 6px;
  color: black;
  justify-content: center;
  padding: 10px;
  text-align: center;
  text-transform: uppercase;

  &:hover {
    background-color: ${(props) => (props.primary ? deepBlue : lightGrey)};
  }
`;

const Alert = styled.div`
  background-color: ${(props) => props.cor};
  border-radius: 30px;
  margin: 1rem 0;
  padding: 0.5rem;
  width: 100%;
`;

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 80px;
  left: 0;
  min-height: 100vh;
  width: 100vw;
  height: auto;
`;

const Title = styled.h1`
  font-family: ${magicRetro};
  border-bottom: 2px solid #7bc9e7;
  font-size: 2rem;
  margin-bottom: 1rem;
  width: auto;
`;

const LinkSPA = styled.p`
  color: black;
  font-size: 12px;
  text-align: center;
  &:hover {
    color: ${deepBlue};
    cursor: pointer;
  }
`;

const Card = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
`;

const Subtitle = styled.h4`
  font-family: ${jetbrains};
  border-bottom: 2px dotted #7bc9e7;
  margin-bottom: 1rem;
`;

const HistorySpan = styled.span`
  text-align: justify;
`;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100vw;
  background-color: white;
`;

const ImgContainer = styled(PageContainer)`
  background-image: url(${(props) => props.img});
  background-position: top right;
  background-repeat: repeat;
  background-size: cover;
  min-height: 100vh;
  height: auto;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 85px);
  margin-top: 85px;
  width: 100vw;
  align-items: center;
  justify-content: space-evenly;
`;

export {
  Column,
  InputColumn,
  Input,
  Button,
  Label,
  Select,
  Option,
  Linha,
  Mandatory,
  Alert,
  Container,
  Title,
  LinkSPA,
  Card,
  Subtitle,
  HistorySpan,
  ImgContainer,
  PageContainer,
  ContentContainer,
};
