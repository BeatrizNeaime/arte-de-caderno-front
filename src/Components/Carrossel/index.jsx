import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { carouselData } from "../../mocks/carouselData";
import { Container } from "../../styles/sharedStyles";
import { useMediaQuery } from "../../hooks/useMediaQuery";

const Carrossel = () => {
  const desktop = useMediaQuery("(min-width: 768px)");

  return (
    <Container
      height={"50vh"}
      style={{ marginTop: desktop ? "90px" : "0", width: "100vw" }}
    >
      <Carousel autoPlay infiniteLoop>
        {carouselData.map((c) => {
          return (
            <div style={{ maxHeight: "600px" }}>
              <img src={require(`../../assets/img/Desenhos/${c.img}.png`)} />
              <p className="legend">
                {c.name} - {c.school}{" "}
              </p>
            </div>
          );
        })}
      </Carousel>
    </Container>
  );
};

export default Carrossel;
