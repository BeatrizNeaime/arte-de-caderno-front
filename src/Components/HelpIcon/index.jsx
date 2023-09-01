import React from "react";
import styled from "styled-components";
import { Tooltip } from "react-bootstrap";
import {OverlayTrigger} from "react-bootstrap";
import { colors } from "../UI/contants";

const HelpIcon = ({ txt }) => {
  return (
    <OverlayTrigger overlay={<Tooltip>{txt}</Tooltip>}>
      <HelpButton>
        <p>
            ?
        </p>
      </HelpButton>
    </OverlayTrigger>
  );
};

export default HelpIcon;

const HelpButton = styled.div`
    height: 18px;
    width: 18px;
    background-color: ${colors.lightGrey};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;

    &:hover{
        cursor: pointer;
        background-color: ${colors.deepGrey};
    }
`
