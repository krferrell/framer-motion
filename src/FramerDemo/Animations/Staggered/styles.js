import styled from "styled-components";
import { motion } from "framer-motion";
import { colors } from "../../utils/colors";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 10;
  position: relative;
`;

export const StaggerObject = styled(motion.div)`
  width: 75px;
  height: 75px;
  border-radius: 50%;
  background: #8e4162;

  :not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const RefreshBtn = styled.div`
  padding: 20px;
  border: 2px solid ${colors.animateSecondary};
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  right: 0;
  margin-right: 10px;
  margin-bottom: 10px;
  border-radius: 20px;
  cursor: pointer;
`;

export const RefreshText = styled.h2`
  font-size: 18px;
  line-height: 18px;
  color: ${colors.animateSecondary};
`;