import React, { useEffect } from 'react';
import { useAnimation } from 'framer-motion';

import { Container, List, ListItem } from './styles';

// FOR USING `controls.start` NON-DYNAMICALLY:

const listItemVariants1 = {
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

const NonDynamicControlsStart = () => {
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
          variants={listItemVariants1}
        >
          The Dark Knight
        </ListItem>

        <ListItem
          animate={controls}
          initial="hidden"
          variants={listItemVariants1}
        >
          Children of Men
        </ListItem>

        <ListItem
          animate={controls}
          initial="hidden"
          variants={listItemVariants1}
        >
          Everything Everywhere All At Once
        </ListItem>

        <ListItem
          animate={controls}
          initial="hidden"
          variants={listItemVariants1}
        >
          Dune
        </ListItem>

        <ListItem
          animate={controls}
          initial="hidden"
          variants={listItemVariants1}
        >
          The Godfather
        </ListItem>
      </List>
    </Container>
  );
};

// ----------------------------------------------
// ----------------------------------------------
// ----------------------------------------------

// FOR USING `controls.start` DYNAMICALLY:

const listItemVariants2 = {
  hidden: {
    opacity: 0,
    x: -100,
  },
};

const DynamicControlsStart = () => {
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
          variants={listItemVariants2}
        >
          {/* The Dark Knight */}
        </ListItem>

        <ListItem
          animate={controls}
          custom={1}
          initial="hidden"
          variants={listItemVariants2}
        >
          {/* Children of Men */}
        </ListItem>

        <ListItem
          animate={controls}
          custom={2}
          initial="hidden"
          variants={listItemVariants2}
        >
          {/* Everything Everywhere All At Once */}
        </ListItem>

        <ListItem
          animate={controls}
          custom={3}
          initial="hidden"
          variants={listItemVariants2}
        >
          {/* Dune */}
        </ListItem>

        <ListItem
          animate={controls}
          custom={4}
          initial="hidden"
          variants={listItemVariants2}
        >
          {/* The Godfather */}
        </ListItem>
      {/* </List> */}
    </Container>
  );
}

export { DynamicControlsStart, NonDynamicControlsStart };
