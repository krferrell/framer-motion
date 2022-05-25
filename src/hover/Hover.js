import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import smile from "./smile.png";

const Box = () => {

  return (
    <Container>
      <motion.img
        className="smiley"
        src={smile}
        whileHover={{
          scale: 1.5,
          rotate: 360,
          backgroundColor: "purple",
        }}
      />
    </Container>
  );
};

export default Box;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lavender;
  height: 500px;
  width: 500px;
  margin: 150px auto;

  .smiley {
    background-color: red;
    border-radius: 50%;
  }
`;
