import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { colors } from "../../utils/colors";

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

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Circle = styled(motion.div)`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  background: ${colors.animateSecondary};
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const Marker = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  margin: 15px;
  background: ${colors.animateBase};
`;
