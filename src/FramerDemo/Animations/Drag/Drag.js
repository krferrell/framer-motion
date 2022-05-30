import React, { useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Drag = () => {
  const constraintRef = useRef(null);

  return (
    <Wrapper ref={constraintRef}>
      <Ball
        drag
        whileDrag={{ fontSize: "20px" }}
        dragConstraints={constraintRef}
        dragElastic={0}
        dragMomentum={false}>
        DRAG
      </Ball>
    </Wrapper>
  );
};

export default Drag;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  background-color: #D0E6F1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Ball = styled(motion.div)`
  background-color: #853064;
  height: 100px;
  width: 100px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: grabbing;
`;
