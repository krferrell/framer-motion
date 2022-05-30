export const staggerObjectVariants = (custom) => {
  return {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: [0, 1],
      x: [- 100, 0],
      transition: {
        type: "spring",
        bounce: 0.4,
        delay: custom * 0.1,
      },
    },
  };
};
