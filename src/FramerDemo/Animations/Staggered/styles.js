import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 750px;
  height: 450px;
  background: #c7e8f3;
`;

export const StaggerObject = styled(motion.div)`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: #8e4162;

  :not(:last-child) {
    margin-bottom: 20px;
  }
`;
