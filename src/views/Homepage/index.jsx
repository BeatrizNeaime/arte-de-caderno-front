import { useState, useEffect } from "react";
import {
  ContentContainer,
  ImgContainer,
  PageContainer,
  Linha,
  Column,
} from "../../styles/sharedStyles";
import NavBoot from "../../Components/Navbar";
import { useMediaQuery } from "src/hooks/useMediaQuery";
import { styled } from "styled-components";
import { colors, fonts } from "src/Components/UI/contants";
import { motion } from "framer-motion";
import { Navigate } from "react-router-dom";
import gif from 'src/assets/img/gif-gatorujo.gif'

const HomeView = () => {
  const desktop = useMediaQuery("(min-width: 768px)");
  const [redirect, setRedirect] = useState(false);

  return (
    <PageContainer>
      <ImgContainer img={require("../../assets/img/op-background.png")}>
        <NavBoot currentPage={"Início"} />
        {redirect && <Navigate to={"/login"} />}
        <ContentContainer style={{ gap: "1rem" }}>
          <Linha>
            <Column
              width={desktop ? "40%" : "100%"}
              style={{
                justifyContent: "center",
                alignItems: "flex-start",
                padding: "1rem",
              }}
            >
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
                style={{
                  margin: "0 1rem",
                }}
              >
                <Phrase>
                  Transformamos cadernos em palcos e rabiscos em poesia. porque,
                  no Arte de Caderno, a inclusão é a nossa maior obra-prima.
                </Phrase>
                <Phrase style={{fontSize: "16px"}} >Arte de Caderno 2023</Phrase>
                <Phrase2 onClick={() => setRedirect(true)}>Participe!</Phrase2>
              </motion.div>
            </Column>
            <Column width={desktop ? "50%" : "100%"}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <Img src={gif} />
              </motion.div>
            </Column>
          </Linha>
        </ContentContainer>
      </ImgContainer>
    </PageContainer>
  );
};

export default HomeView;

const Img = styled.img`
  height: 80vh;
  width: auto;
`;

const Phrase = styled.p`
  font-family: ${fonts.jetbrains};
  font-size: 20px;
  text-align: left;
  text-transform: uppercase;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    gap: 2px;
  }
`;

const Phrase2 = styled(Phrase)`
  font-family: ${fonts.magicRetro};
  text-decoration: underline;
  text-decoration-color: ${colors.blue_color};
  text-transform: capitalize;
  font-size: 30px;
  letter-spacing: 2px;
  margin-top: 1rem;

  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;
