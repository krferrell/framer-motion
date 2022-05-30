import React, { useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

// -----------------Variants for Modal Animations

const modalAnimation = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { delay: 1, duration: 0.7, ease: "easeIn" },
  },
  exit: {opacity: 0, transition: { duration: 0.7, delay: 0.5 } },
};

const overlayAnimation = {
  initial: { y: "100%" },
  animate: {
    y: 0,
    transition: { duration: 1.2 },
  },
  exit: { y: "100vh", opacity: 1, transition: { duration: 1.2, delay: 1.2} },
};

const closeVariant = {
  initial: {
    y: "200%",
  },
  animate: {
    y: 0,
    transition: {
      delay: 1.7,
      duration: 0.7,
      type: 'spring',
      stiffness: 90,
    }
  },
  exit: {y: "200%", transition: {
    duration: 0.7,
  }}
}

const Modal = () => {
  const [active, setActive] = useState(false);

  const clickHandler = () => {
    setActive(!active);
  };
  return (
    <ModalContainer>
      <ModalButton onClick={() => setActive(true)}>OPEN</ModalButton>
      <AnimatePresence>
        {active && (
          <Overlay key="modal" {...overlayAnimation}>
            <ModalSample key="modal" {...modalAnimation}>
              <Close
                {...closeVariant} 
                onClick={() => {
                  clickHandler();
                }}
              >
                CLOSE
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
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

const Overlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background: #8a3a64;
`;

const ModalButton = styled(motion.div)`
  height: 100px;
  width: 100px;
  background: #8a3a64;
  border-radius: 50%;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalSample = styled(motion.div)`
  background: #cde7f1;
  width: 400px;
  height: 250px;
  border-radius: 10px;
  position: relative;
  color: #edf5e1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  user-select: none;
  text-align: center;
  overflow: hidden;
`;

const Close = styled(motion.div)`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  background: #8a3a64;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 100;
  user-select: none;
  font-size: 14px;
`;