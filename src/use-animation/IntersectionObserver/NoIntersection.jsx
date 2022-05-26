import React, { useEffect } from 'react';
import { useAnimation } from 'framer-motion';

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
 * The animation would run once the page is loaded, and since the object with
 * the animation (i.e. `IntersectionObject`) is near the bottom of the page,
 * the users would not be able to see it animate.
 */
const NoIntersection = () => {
  const controls = useAnimation();

  // Run animation once the page loads (hence the empty depedency `[]`).
  useEffect(() => {
    controls.start('visible');
  }, []);

  return (
    <Container>
      <NonIntersectionObject></NonIntersectionObject>

      <NonIntersectionObject></NonIntersectionObject>

      <NonIntersectionObject></NonIntersectionObject>

      <IntersectionObject
        animate={controls}
        initial="hidden"
        variants={objectVariants}
      ></IntersectionObject>

      <NonIntersectionObject className="last-object"></NonIntersectionObject>
    </Container>
  );
};

export default NoIntersection;
