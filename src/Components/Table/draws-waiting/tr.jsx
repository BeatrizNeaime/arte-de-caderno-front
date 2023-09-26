import { useState } from "react";
import { colors, effects, fonts } from "src/Components/UI/contants";
import { TD, TR } from "../style";
import styled from "styled-components";
import { InteractiveBtn } from "src/Components/InteractiveBtn";

const DrawsWaitingTR = ({ draw }) => {
  const [redirect, setRedirect] = useState(false);
  return (
    <TR>
      <TD>{draw.title}</TD>
      <TD
        style={{
          justifyContent: "center",
        }}
      >
        <Status>aguardando avaliação</Status>
      </TD>
      <TD
        style={{
          justifyContent: "center",
        }}
      >
        <InteractiveBtn
          width={"10%"}
          bg={colors.facebook}
          hover={colors.deepBlue}
          onClick={() => setRedirect(true)}
        >
          <ion-icon name="ribbon-outline"></ion-icon>
        </InteractiveBtn>
      </TD>
    </TR>
  );
};

export default DrawsWaitingTR;

const Status = styled.div`
  background-color: ${colors.gmail};
  color: white;
  border-radius: 6px;
  backdrop-filter: ${effects.glass.filter};
  font-family: ${fonts.jetbrains};
  text-transform: uppercase;
  text-align: center;
  padding: 5px;
  font-size: 10px;
`;
