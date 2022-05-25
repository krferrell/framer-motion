import React from "react";
import { motion } from "framer-motion";
import { nameTagVariant } from "./nameTagVatiant";

const NameTag = ({ name, index }) => {
  return (
    <motion.div
      custom={index}
      variants={nameTagVariant}
      initial="hidden"
      animate="visible"
      className="name-tag"
    >
      {name}
    </motion.div>
  );
};

export default NameTag;
