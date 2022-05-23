export const variant = {
  hidden: { opacity: 0 },
  visible: (custom) => ({
    opacity: 1,
    transition: { duration: 2, delay: 1 * custom },
  }),
};