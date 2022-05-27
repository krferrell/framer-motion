import React, { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { Container, IntersectionObject, NonIntersectionObject } from './styles';

const objectVariants = {
  hidden: {
    opacity: 0,
    x: -300,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.5,
    },
  },
}

/**
 * 
 * The animation would only run once the object with the animation (i.e.
 * `IntersectionObject`) is in view of the browser's viewport. The users would
 * be able to see the animation when they scroll down.
 */
const Intersection = () => {
  const controls = useAnimation();

  const { ref, inView } = useInView();

  // Run animation once the component is in view of the browser's viewport.
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [inView]);

  return (
    <Container>
      <NonIntersectionObject></NonIntersectionObject>

      <NonIntersectionObject></NonIntersectionObject>

      <NonIntersectionObject></NonIntersectionObject>

      <IntersectionObject
        animate={controls}
        initial="hidden"
        ref={ref}
        variants={objectVariants}
      ></IntersectionObject>

      <NonIntersectionObject className="last-object"></NonIntersectionObject>
    </Container>
  );
};

export default Intersection;
