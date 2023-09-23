import { useState } from "react";
import styled from "styled-components";
import { Label, Linha } from "../../styles/sharedStyles";
import { Navigate, useNavigate } from "react-router-dom";

const PreviousArrow = ({ navigate, width }) => {
  const [NavigateBack, setNavigate] = useState(false);
  const volta = useNavigate();

  return (
    <Linha style={{ width: `${width}`, flexDirection: "row" }}>
      <Linha
        style={{
          justifyContent: "flex-start",
          marginTop: "1rem",
          padding: "0 1rem",
          flexDirection: "row",
        }}
      >
        {navigate && NavigateBack && <Navigate to={`/${navigate}`} replace />}

        {navigate && (
          <>
            <Arrow
              src={require("../../assets/img/icons/previous.png")}
              onClick={() => {
                setNavigate(true);
              }}
            />
            <BackLabel
              onClick={() => {
                setNavigate(true);
              }}
            >
              Voltar
            </BackLabel>
          </>
        )}

        {!navigate && (
          <>
            <Arrow
              src={require("../../assets/img/icons/previous.png")}
              onClick={() => {
                volta(-1);
              }}
            />
            <BackLabel
              onClick={() => {
                volta(-1);
              }}
            >
              Voltar
            </BackLabel>
          </>
        )}
      </Linha>
    </Linha>
  );
};

export default PreviousArrow;

const Arrow = styled.img`
  height: 20px;
  &:hover {
    cursor: pointer;
  }
`;

const BackLabel = styled(Label)`
  padding: 0;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
