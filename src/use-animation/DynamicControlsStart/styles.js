import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.section`
  display: flex;
  align-items: center;
  min-width: 100vw;
  min-height: 100vh;
`;

export const List = styled.ul`
  margin-right: auto;
  margin-left: auto;
`;

export const ListItem = styled(motion.li)`
  list-style: none;
`;
