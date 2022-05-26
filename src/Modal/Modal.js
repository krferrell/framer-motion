import React, { useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

// -----------------Variants for Modal Animations

const modalAnimation = {
  initial: { y: "-100vh", opacity: 0 },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: { delay: 0.2, duration: 0.3, ease: "easeIn" },
  },
  exit: { y: "-100vh", opacity: 1, transition: { duration: 0.2 } },
};

const overlayAnimation = {
  initial: { y: "-100vh", opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.3 },
  },
  exit: { y: "-100vh", opacity: 1, transition: { duration: 0.2, delay: 0.25 } },
};

const Modal = () => {
  const [active, setActive] = useState(false);

  const clickHandler = () => {
    setActive(!active);
  };

  return (
    <ModalContainer>
      <ModalButton onClick={() => setActive(true)}>
        Open Modal
      </ModalButton>
      <AnimatePresence>
        {active && (
          <Overlay key="modal" {...overlayAnimation}>
            <ModalSample key="modal" {...modalAnimation}>
              Welcome to Reactoad Framer Motion Presentation
              <Close
                onClick={() => {
                  clickHandler();
                }}
              >
                close
              </Close>
            </ModalSample>
          </Overlay>
        )}
      </AnimatePresence>
    </ModalContainer>
  );
};

export default Modal;

// ---------------------Styled Components

const ModalContainer = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(5, 5, 5, 0.5));
`;

const ModalButton = styled(motion.button)`
  width: 200px;
  height: 200px;
  background-color: #1a1a1a;
  color: #fff;
  border-radius: 10px;
  font-size: 40px;
  cursor: pointer;
  user-select: none;
`;

const ModalSample = styled(motion.div)`
  background-color: #1a1a1a;
  width: 70%;
  height: 80%;
  max-width: 1400px;
  max-height: 800px;
  border-radius: 10px;
  position: relative;
  color: #edf5e1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  user-select: none;
`;

const Close = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 5px;
  margin-right: 25px;
  z-index: 100;
  font-size: 25px;
  user-select: none;
  letter-spacing: 3px;
`;
