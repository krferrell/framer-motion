import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 100vw;
  min-height: 100vh;
  padding-top: 100px;
  padding-bottom: 100px;
  background-color: #c7e8f3;
`;

// REUSABLE OBJECT
const Object = styled(motion.div)`
  width: 150px;
  height: 150px;
  margin-bottom: 500px;
  border-radius: 50%;
`;

export const NonIntersectionObject = styled(Object)`
  background-color: #94c9a9;

  &.last-object {
    margin-bottom: 0;
  }
`;

export const IntersectionObject = styled(Object)`
  background-color: #8e4162;
`;
