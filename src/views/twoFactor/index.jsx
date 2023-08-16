import { useState, useRef } from "react";
import styled from "styled-components";
import {
  Column,
  ImgContainer,
  Linha,
  PageContainer,
  Subtitle,
  Input,
} from "../../styles/sharedStyles";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { blue_color, pink_color } from "../../Components/UI/contants";
import PreviousArrow from "../../Components/PreviousArrow";

const TwoFactorView = () => {
  const desktop = useMediaQuery("(min-width: 768px)");
  const [twoFactorCode, setTwoFactorCode] = useState(new Array(8).fill(""));
  const [border, setBorder] = useState(blue_color)
  const refs = [
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
  ];

  const handleChangeCode = (index, e) => {
    console.log("=> ", index);
    const { value } = e.target;
    const newValues = [...twoFactorCode];
    newValues[index] = value;
    setTwoFactorCode(newValues);

    if (value && index + 1 < refs.length) {
      refs[index+1].current.focus()
    }
    if(index == 7){
        //TODO: send code to server and verify it
    }

  };

  return (
    <PageContainer>
      <ImgContainer img={require("../../assets/img/background.png")}>
        <Column
          width={desktop ? "70%" : "90%"}
          style={{
            border: "1px solid rgba(54, 54, 54, 0.5)",
            borderRadius: "6px",
            padding: "1rem",
          }}
        >
          <Subtitle
            style={{
              fontWeight: "600",
            }}
          >
            Insira o código enviado para seu e-mail:
          </Subtitle>
          <Linha
            width={desktop ? "50%" : "100%"}
            style={{
              gap: desktop ? "2px" : "2px",
              flexDirection: "row",
            }}
          >
            {twoFactorCode.map((code, index) => {
              return (
                <TwoFInput
                  type="text"
                  desktop={desktop}
                  border={border}
                  value={twoFactorCode[index]}
                  key={index}
                  ref={refs[index]}
                  maxLength={1}
                  onChange={(e) => handleChangeCode(index, e)}
                  onFocus={() => console.log("index: ", index)}
                />
              );
            })}
          </Linha>
          <PreviousArrow navigate={"login"} />
        </Column>
      </ImgContainer>
    </PageContainer>
  );
};

export default TwoFactorView;

const TwoFInput = styled(Input)`
  width: 40px;
  border: 1px solid ${(props) => props.border};
  text-align: center;
  text-transform: uppercase;

  &:focus {
    outline-color: ${pink_color};
  }
`;
