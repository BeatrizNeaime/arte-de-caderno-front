import React from "react";
import styled from "styled-components";
import { Column, Linha } from "../../styles/sharedStyles";
import { colors, fonts } from "../UI/contants";
import { useMediaQuery } from "../../hooks/useMediaQuery";

const DevsCard = ({ name, func, linkedin, git, portfolio, img }) => {
  const desktop = useMediaQuery("(min-width: 768px)");
  return (
    <CardDiv width={desktop ? "40%" : "90%"}>
      <Linha>
        {!img && (
          <CardImg src={require(`../../assets/img/gatorujo.jpg`)} alt={name} />
        )}
        {img && <CardImg src={img} />}

        <Column>
          <CardTitle>{name}</CardTitle>
          <CardSubtitle>{func}</CardSubtitle>
          <Linha
            style={{
              marginTop: "1rem",
              flexDirection: "row",
              justifyContent: "center",
              gap: "1rem",
            }}
          >
            {linkedin && (
              <CardIcons
                target="_blank"
                href={linkedin}
                color={colors.facebook_hover}
              >
                <ion-icon name="logo-linkedin"></ion-icon>
              </CardIcons>
            )}
            {git && (
              <CardIcons target="_blank" href={git} color={"#6e5494"}>
                <ion-icon name="logo-github"></ion-icon>
              </CardIcons>
            )}
            {portfolio && (
              <CardIcons
                target="_blank"
                href={portfolio}
                color={colors.pink_color}
              >
                <ion-icon name="person-circle-outline"></ion-icon>
              </CardIcons>
            )}
          </Linha>
        </Column>
      </Linha>
    </CardDiv>
  );
};

export default DevsCard;

const CardDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: ${(p) => p.width};
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(5px);
  border: 1px solid ${colors.purple_color};
  padding: 5px;
`;

const CardTitle = styled.p`
  font-family: ${fonts.jetbrains};
  font-size: 18px;
  border-bottom: 1px solid ${colors.deepBlue};
  margin-bottom: 5px;
  width: auto;
`;

const CardSubtitle = styled.p`
  font-family: ${fonts.jetbrains};
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
