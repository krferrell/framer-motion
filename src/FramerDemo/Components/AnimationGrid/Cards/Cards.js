import { MainContainer, BgContainer } from "./styles";
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const bgContainer = {
  initial: { x: "100%" },
  animate: { x: 0 },
  transition: { duration: 1 },
  exit: { x: "100%" },
};

const Cards = ({
  animationComp,
  currAnimation,
  setCurrAnimation,
  setShowIndicator,
  animationProfile,
}) => {
  const [isBackground, setIsBackground] = useState(false);

  const setPickedCard = (param) => {
    if (currAnimation.name === param) {
      setIsBackground(true);
    } else {
      setIsBackground(false);
    }
  };

  const clickAction = () => {
    setCurrAnimation(animationProfile);
    setShowIndicator(true);
  };

  useEffect(() => {
    setPickedCard(animationProfile.name);
  }, [currAnimation]);

  return (
    <MainContainer
      onClick={() => {
        clickAction();
      }}
    >
      <AnimatePresence>
        {isBackground && <BgContainer as={motion.div} {...bgContainer} />}
      </AnimatePresence>

      {React.createElement(animationComp)}
    </MainContainer>
  );
};

export default Cards;
