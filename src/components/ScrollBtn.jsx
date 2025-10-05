import { useState } from "react";
import { useEffect } from "react";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisible);
    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <button
      className="scroll-button"
      aria-label="Scroll to the top"
      onClick={scrollToTop}
      style={{ display: visible ? "inline" : "none" }}>
      {" "}
      <span className="visually-hidden">Scroll to top</span>
    </button>
  );
};

export default ScrollButton;
