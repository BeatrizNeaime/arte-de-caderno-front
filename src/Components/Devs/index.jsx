import React from "react";
import styled from "styled-components";
import { Column, Container } from "../../styles/sharedStyles";
import {
  deepBlue,
  facebook_hover,
  jetbrains,
  pink_color,
  purple_color,
} from "../UI/contants";

const DevsCard = ({ name, func, linkedin, git, portfolio, img }) => {
  return (
    <CardDiv>
      <Container width={"100%"} height={"auto"}>
        <Container width={"40%"} height={"auto"}>
          {!img && (
            <CardImg
              src={require(`../../assets/img/gatorujo.jpg`)}
              alt={name}
            />
          )}
          {/* {img && <CardImg src={require(`../../assets/img/devs/${img}.png`)} />} */}
        </Container>
        <Column width={"60%"}>
          <CardTitle>{name}</CardTitle>
          <CardSubtitle>{func}</CardSubtitle>
          <Container
            width={"auto"}
            height={"auto"}
            style={{ marginTop: "1rem", gap: "10px" }}
          >
            {linkedin && (
              <CardIcons target="_blank" href={linkedin} color={facebook_hover}>
                <ion-icon name="logo-linkedin"></ion-icon>
              </CardIcons>
            )}
            {git && (
              <CardIcons target="_blank" href={git} color={"#6e5494"}>
                <ion-icon name="logo-github"></ion-icon>
              </CardIcons>
            )}
            {portfolio && (
              <CardIcons target="_blank" href={portfolio} color={pink_color}>
                <ion-icon name="person-circle-outline"></ion-icon>
              </CardIcons>
            )}
          </Container>
        </Column>
      </Container>
    </CardDiv>
  );
};

export default DevsCard;

const CardDiv = styled.div`
  display: flex;
  width: 40%;
  height: auto;
  border-radius: 6px;
  box-shadow: 10px 10px 17px 0px rgba(0, 0, 0, 0.15);
  padding: 10px;
  border-left: 3px solid ${purple_color};
`;

const CardTitle = styled.span`
  font-family: ${jetbrains};
  font-size: 18px;
  border-bottom: 1px solid ${deepBlue};
  margin-bottom: 5px; 
`;

const CardSubtitle = styled.span`
  font-family: ${jetbrains};
  font-size: 14px;
  color: rgb(122 122 122);
`;

const CardImg = styled.img`
  max-height: 200px;
  border-radius: 6px !important;
  object-fit: contain;
`;

const CardIcons = styled.a`
  color: #949393;
  font-size: 20px;
  &:hover {
    cursor: pointer;
    color: ${(props) => props.color};
  }
`;
