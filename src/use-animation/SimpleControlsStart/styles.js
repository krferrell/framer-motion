import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.section`
  min-width: 100vw;
  min-height: 100vh;
`;

export const ImageWrapper = styled(motion.div)`
  width: 150px;
`;

export const Image = styled.img`
  width: 100%;
`;
