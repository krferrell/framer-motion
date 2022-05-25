import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.section`
  min-width: 100vw;
  min-height: 100vh;
`;

export const List = styled.ul``;

export const ListItem = styled(motion.li)`
  list-style: none;
`;
