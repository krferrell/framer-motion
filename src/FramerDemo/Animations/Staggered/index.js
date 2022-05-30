import React, { useEffect } from "react";
import { useAnimation } from "framer-motion";

import { Container, StaggerObject, RefreshBtn, RefreshText } from "./styles";
import { staggerObjectVariants } from "./variants";


const Staggered = () => {
  const control = useAnimation();

  // Run animation once the page loads (hence the empty depedency `[]`).
  useEffect(() => {
    control.start((custom) => ({
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 2,
        delay: custom * 0.1,
      },
    }));
  }, []);

  return (
    <Container>
      {[...Array(3).keys()].map((_, index) => (
        <StaggerObject
          key={index}
          animate={control}
          custom={index}
          initial="hidden"
          variants={staggerObjectVariants(index)}
        />
      ))}
    <RefreshBtn onClick={() => control.start('visible')}>
      <RefreshText>CLICK</RefreshText>
    </RefreshBtn>
    </Container>
  );
};

export default Staggered;
