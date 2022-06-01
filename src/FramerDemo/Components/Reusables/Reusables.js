import React, { useEffect } from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import { motion, useAnimation } from "framer-motion";

export const CodeBlock = (props) => {
  const variant = {
    initial: {
      opacity: 0,
    },
    fadeIn: {
      opacity: 1,
      transition: {
        duration: 1.0,
      },
    },
    fadeOut: {
      opacity: 0,
      transition: {
        duration: 0.01,
      },
    },
  };

  const controls = useAnimation();

  useEffect(() => {
    controls.start("fadeIn");
  }, []);

  useEffect(() => {
    async function fadeOutIn() {
      // fade out and then fadein variant
      await controls.start("fadeOut");
      await controls.start("fadeIn");
    }
    fadeOutIn();
  }, [props.currentAnimationString, props.currAnimation]);

  return (
    <div style={{ width: "100%", height: "100%", overflowY: "scroll" }}>
      <motion.div animate={controls} variants={variant} initial="initial">
        <CopyBlock
          text={props.animationString}
          language={"jsx"}
          showLineNumbers={props.showLineNumbers}
          wrapLines
          theme={dracula}
        />
      </motion.div>
    </div>
  );
};
