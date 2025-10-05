export const slideInLeft = {
  initial: { translateX: -300, opacity: 0 },
  whileInView: { translateX: 0, opacity: 1 },
  exit: { translateX: -300, opacity: 0 },
  transition: { duration: 0.7, ease: "easeOut" },
};
export const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.5, ease: "easeIn" },
};
export const imageParentVariant = {
  initial: {},
  whileInView: {},
};

export const leftImageVariant = {
  initial: { opacity: 0, left: -100 },
  whileInView: {
    opacity: 0.7,
    left: 0,
    transition: { duration: 4 },
  },
};

export const rightImageVariant = {
  initial: { opacity: 0, right: -100 },
  whileInView: {
    opacity: 0.7,
    right: 0,
    transition: { duration: 4 },
  },
};
