import React from "react";
import { motion } from "framer-motion";
import styled from 'styled-components'

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { delay: 1, type: "spring", duration: 1.5, bounce: 0 },
      opacity: { delay: 1, duration: 0.01 }
    }
  }
};

const Svg = () => {
  return (
    <SvgContainer
      width="600"
      height="600"
      viewBox="0 0 600 600"
      initial="hidden"
      animate="visible"
    >
      <motion.circle
        cx="100"
        cy="100"
        r="80"
        stroke="#ff0055"
        variants={draw}
      />
      <motion.line
        x1="220"
        y1="30"
        x2="360"
        y2="170"
        stroke="#00cc88"
        variants={draw}
      />
      <motion.line
        x1="220"
        y1="170"
        x2="360"
        y2="30"
        stroke="#00cc88"
        variants={draw}
      />
      <motion.rect
        width="140"
        height="140"
        x="410"
        y="30"
        rx="20"
        stroke="#0099ff"
        variants={draw}
      />
    </SvgContainer>
  );
}

const SvgContainer = styled(motion.svg)`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;

    & circle,
    rect,
    line {
        stroke-width: 10px;
        stroke-linecap: round;
        fill: transparent;
    }
`

export default Svg;