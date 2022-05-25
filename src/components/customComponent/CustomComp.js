import React, { forwardRef } from "react";
import { motion } from "framer-motion";

const Component = forwardRef((props, ref) => (
  <div className="name-tag" ref={ref}>
    {props.index+1}
  </div>
));

export const MotionComponent = motion(Component);
