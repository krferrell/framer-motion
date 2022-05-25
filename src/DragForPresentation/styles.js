import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled.div`
  height: 80vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Box = styled(motion.div)`
  height: 200px;
  width: 200px;
  border: 3px solid black;
  background-color: lightgrey;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
`;
