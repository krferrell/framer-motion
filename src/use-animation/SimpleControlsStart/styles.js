import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.section`
  display: flex;
  align-items: center;
  min-width: 100vw;
  min-height: 100vh;
`;

export const ImageWrapper = styled(motion.div)`
  width: 150px;
  margin-right: auto;
  margin-left: auto;
`;

export const Image = styled.img`
  width: 100%;
`;
