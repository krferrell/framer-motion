export const hoverString = `
import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const spinUp = {
  whileHover: {
    scale: 1.4,
    rotate: 360,
  },
};

const Hover = () => {
  return (
    <Wrapper>
      <Circle {...spinUp}>
        <Marker />
        <Marker />
      </Circle>
    </Wrapper>
  );
};

export default Hover;

const Wrapper = styled.div${`\`
  height: 450px;
  width: 750px;

  display: flex;
  justify-content: center;
  align-items: center;
\``};

const Circle = styled(motion.div)${`\`
height: 100px;
width: 100px;
border-radius: 50%;

background-color: #bfa9a9;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
\``};

const Marker = styled.div${`\`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  margin: 15px;

  background-color: #b1cece;
\``};
`