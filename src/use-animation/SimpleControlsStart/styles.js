import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: #c7e8f3;
`;

export const ImageWrapper = styled(motion.div)`
  width: 150px;
  height: 150px;
  background: #8e4162;
  border-radius: 50%;
  opacity: 0;
`;

export const Image = styled.img`
  width: 100%;
`;
