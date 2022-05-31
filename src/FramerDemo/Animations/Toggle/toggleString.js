export const toggleString = `
import { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const Toggle = () => {
  const [animationActive, setAnimationActive] = useState(false);

  const animationToggle = () => {
    setAnimationActive(!animationActive);
  };

  const switchVariant = {
    initial: {
      x: 0,
    },
    animate: {
      x: animationActive ? "100%" : 0,
      transition: {
        duration: 0.7,
      },
    },
  };

  return (
    <MainContainer>
      <SwitchContainer onClick={animationToggle}>
        <Switch {...switchVariant} />
      </SwitchContainer>
    </MainContainer>
  );
};

export default Toggle;

const MainContainer = styled.div${`\`
  width: 100%;
  height: 100%;
  background: #cfe6f2;
  display: flex;
  justify-content: center;
  align-items: center;
\``};

const SwitchContainer = styled.div${`\`
  width: 300px;
  height: 150px;
  border-radius: 20px;
  overflow: hidden;
  background: #853064;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
\``};

const Switch = styled(motion.div)${`\`
  height: 100%;
  width: 50%;
  border-radius: 50%;
  background: #cfe6f2;
\``};
`;
