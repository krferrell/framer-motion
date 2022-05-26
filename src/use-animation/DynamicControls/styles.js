import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  background: #c7e8f3;
`;

export const List = styled.ul`
  margin-right: auto;
  margin-left: auto;
`;

export const ListItem = styled(motion.div)`
  // list-style: none;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: #8e4162;

  :not(:last-child) {
    margin-bottom: 20px;
  }
`;
