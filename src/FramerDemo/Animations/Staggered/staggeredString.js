export const staggeredString = `
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import styled from "styled-components";

const staggerObjectVariants = {
  hidden: {
    opacity: 0,
    x: -100,
  },
};

const Staggered = () => {
  const controls = useAnimation();

  // Run animation once the page loads (hence the empty depedency '[]').
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
    <Container>
      {[...Array(5).keys()].map((_, index) => (
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

const Container = styled.section${`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 750px;
  height: 450px;
  background: #c7e8f3;
`};

const StaggerObject = styled(motion.div)${`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: #8e4162;

  :not(:last-child) {
    margin-bottom: 20px;
  }
`};

export default Staggered;
`;
