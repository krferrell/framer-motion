import React, { useEffect } from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import { motion, useAnimation } from "framer-motion";

export const CodeBlock = (props) => {
  const variant = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 3.0,
      },
    },
  };

  const controls = useAnimation();

  useEffect(() => {
    console.log(props.currentAnimationString);
    controls.start({
      opacity: 1,
      transition: {
        duration: 1.0,
      },
    });
  }, [props.currentAnimationString]);

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
