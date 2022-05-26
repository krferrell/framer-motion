import React, { useEffect } from 'react';
import { useAnimation } from 'framer-motion';

import reactoadImg from './reactoad.png';

import { Container, Image, ImageWrapper } from './styles';

const wrapperVariants = {
  hidden: {
    opacity: 0,
    y: -150,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 2,
    },
  },
};

const SimpleControls = () => {
  const controls = useAnimation();

  // Run animation once the page loads (hence the empty depedency `[]`).
  useEffect(() => {
    controls.start('visible');
  }, []);


  return (
    <Container>
      <ImageWrapper
        animate={controls}
        initial="hidden"
        variants={wrapperVariants}
      >
        {/* <Image src={reactoadImg} alt="Reactoad" /> */}
      </ImageWrapper>
    </Container>
  );
};

export default SimpleControls;
