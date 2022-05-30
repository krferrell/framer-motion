import React, { useEffect} from "react";
import { motion, useAnimation } from "framer-motion";
import styled from "styled-components";
import { colors } from "../../utils/colors";

const Svg = () => {

  const control = useAnimation();

  useEffect(() => {
    control.start(() => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: {  type: "spring", duration: 1.5, bounce: 0 },
        opacity: {  duration: 0.01 },
      },
    }));
  }, [])

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: [0, 1],
      opacity: [0, 1],
      transition: {
        pathLength: {  type: "spring", duration: 1.5, bounce: 0 },
        opacity: {  duration: 0.01 },
      },
    },
  };

  return (
    <MainContainer>
      <SvgContainer
        width="100%"
        height="auto"
        viewBox="0 0 600 200"
        initial="hidden"
        >
        <motion.rect
          width="100px"
          height="100px"
          x="255"
          y="30"
          rx="20"
          stroke="#8A3A64"
          variants={draw}
          animate={control}
        />
      </SvgContainer>
      <RefreshBtn onClick={() => control.start('visible')}>
        <RefreshText>CLICK</RefreshText>
      </RefreshBtn>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const SvgContainer = styled(motion.svg)`
  display: flex;
  align-items: center;
  justify-content: center;

  & circle,
  rect,
  line {
    stroke-width: 10px;
    stroke-linecap: round;
    fill: transparent;
  }
`;

const RefreshBtn = styled.div`
  padding: 20px;
  border: 2px solid ${colors.animateSecondary};
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  right: 0;
  margin-right: 10px;
  margin-bottom: 10px;
  border-radius: 20px;
  cursor: pointer;
`;

const RefreshText = styled.h2`
  font-size: 18px;
  line-height: 18px;
  color: ${colors.animateSecondary};
`;

export default Svg;
