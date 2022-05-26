import React, { useEffect } from 'react';
import { useAnimation } from 'framer-motion';

import { Container, List, ListItem } from './styles';

const listItemVariants = {
  hidden: {
    opacity: 0,
    x: -10,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.5,
      delay: 0.1,
    },
  },
};

/**
 * 
 * For using `controls.start` non-dynamically.
 */
const NonDynamic = () => {
  const controls = useAnimation();

  // Run animation once the page loads (hence the empty depedency `[]`).
  useEffect(() => {
    controls.start('visible');
  }, []);

  return (
    <Container>
      <List>
        <ListItem
          animate={controls}
          initial="hidden"
          variants={listItemVariants}
        >
          The Dark Knight
        </ListItem>

        <ListItem
          animate={controls}
          initial="hidden"
          variants={listItemVariants}
        >
          Children of Men
        </ListItem>

        <ListItem
          animate={controls}
          initial="hidden"
          variants={listItemVariants}
        >
          Everything Everywhere All At Once
        </ListItem>

        <ListItem
          animate={controls}
          initial="hidden"
          variants={listItemVariants}
        >
          Dune
        </ListItem>

        <ListItem
          animate={controls}
          initial="hidden"
          variants={listItemVariants}
        >
          The Godfather
        </ListItem>
      </List>
    </Container>
  );
};

export default NonDynamic;
