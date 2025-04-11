export const slideInLeft = {
  initial: { translateX: -300 },
  whileInView: { translateX: 0 },
  exit: { translateX: -300 },
  transition: { duration: 0.7, ease: "easeOut" },
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
