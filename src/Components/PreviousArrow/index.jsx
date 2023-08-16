import { useState } from "react";
import styled from "styled-components";
import { Label, Linha } from "../../styles/sharedStyles";
import { Navigate, useNavigate } from "react-router-dom";

const PreviousArrow = ({ navigate }) => {
  const [NavigateBack, setNavigate] = useState(false);
  const volta = useNavigate();

  return (
    <Linha
      style={{
        justifyContent: "flex-start",
        marginTop: "1rem",
        padding: "0 1rem",
      }}
    >
      {navigate && NavigateBack && <Navigate to={`/${navigate}`} replace />}
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
