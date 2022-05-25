import React, { useEffect } from 'react';
import { useAnimation } from 'framer-motion';

import reactoadImg from './reactoad.png';

import { Container, Image, ImageWrapper } from './styles';

// FOR PASSING AN OBJECT VARIANT INTO A COMPONENT:

const wrapperVariants1 = {
  hidden: {
    opacity: 0,
    y: -150,
  },
};

const PassObjectInComponent = () => {
  const controls = useAnimation();

  // Run animation once the page loads (hence the empty depedency `[]`).
  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.5,
      },
    });
  }, []);


  return (
    <Container>
      <ImageWrapper
        animate={controls}
        initial="hidden"
        variants={wrapperVariants1}
      >
        <Image src={reactoadImg} alt="Reactoad" />
      </ImageWrapper>
    </Container>
  );
};

// ----------------------------------------------
// ----------------------------------------------
// ----------------------------------------------

// FOR ACTIVATING A NAMED VARIANT FROM COMPONENT:

const wrapperVariants2 = {
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
      duration: 0.5,
    },
  },
};

const ActivateNamedVariantFromComponent = () => {
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
        variants={wrapperVariants2}
      >
        <Image src={reactoadImg} alt="Reactoad" />
      </ImageWrapper>
    </Container>
  );
};

export {
  ActivateNamedVariantFromComponent,
  PassObjectInComponent,
};
