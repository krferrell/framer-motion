import React, { useEffect } from "react";
import { useAnimation } from "framer-motion";

import { Container, StaggerObject } from "./styles";
import { staggerObjectVariants } from "./variants";

const Staggered = () => {
  const controls = useAnimation();

  // Run animation once the page loads (hence the empty depedency `[]`).
  useEffect(() => {
    controls.start((custom) => ({
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
    <Container id='Staggered'>
      {[...Array(3).keys()].map((_, index) => (
        <StaggerObject
          key={index}
          animate={controls}
          custom={index}
          initial="hidden"
          variants={staggerObjectVariants}
        />
      ))}
    </Container>
  );
};

export default Staggered;
