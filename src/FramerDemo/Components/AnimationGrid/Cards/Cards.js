import { MainContainer } from "./styles";
import React from "react";

const Cards = ({ animationComp }) => {

  return (
    <MainContainer>
      {React.createElement(animationComp)}
    </MainContainer>
  );
};

export default Cards;
