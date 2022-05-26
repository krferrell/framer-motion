import React, { useEffect } from 'react';
import { useAnimation } from 'framer-motion';

import { Container, List, ListItem } from './styles';

const listItemVariants = {
  hidden: {
    opacity: 0,
    x: -100,
  },
};

/**
 * 
 * For using `controls.start` dynamically.
 */
const Dynamic = () => {
  const controls = useAnimation();

  // Run animation once the page loads (hence the empty depedency `[]`).
  useEffect(() => {
    controls.start((custom) => ({
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 2,
        delay: custom * 0.1,
      },
    }));
  }, []);

  return (
    <Container>
      {/* <List> */}
        <ListItem
          animate={controls}
          custom={0}
          initial="hidden"
          variants={listItemVariants}
        >
          {/* The Dark Knight */}
        </ListItem>

        <ListItem
          animate={controls}
          custom={1}
          initial="hidden"
          variants={listItemVariants}
        >
          {/* Children of Men */}
        </ListItem>

        <ListItem
          animate={controls}
          custom={2}
          initial="hidden"
          variants={listItemVariants}
        >
          {/* Everything Everywhere All At Once */}
        </ListItem>

        <ListItem
          animate={controls}
          custom={3}
          initial="hidden"
          variants={listItemVariants}
        >
          {/* Dune */}
        </ListItem>

        <ListItem
          animate={controls}
          custom={4}
          initial="hidden"
          variants={listItemVariants}
        >
          {/* The Godfather */}
        </ListItem>
      {/* </List> */}
    </Container>
  );
}

export default Dynamic;
