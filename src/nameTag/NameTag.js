import React from "react";
import { motion } from "framer-motion";
import { variant } from "./variantNT";

const NameTag = ({ name, index }) => {
  return (
    <motion.div
      custom={index}
      variants={variant}
      initial="hidden"
      animate="visible"
      className="name-tag"
    >
      {name}
    </motion.div>
  );
};

export default NameTag;
