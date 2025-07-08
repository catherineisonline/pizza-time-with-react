import "./stats-preview.css";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import statsPreview from "../../../data/company-statistics";
import Background from "../../../assets/images/section-7-bg.webp";

const StatsPreview = () => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            element.style.backgroundImage = `url(${Background})`;
            observer.unobserve(element);
          }
        });
      },
      {
        threshold: 0,
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);
  return (
    <section
      ref={ref}
      className="homepage__stats flex-container flex-column txt-center">
      <ul className="stats__items flex-container flex-column">
        {statsPreview.map((stats) => (
          <li key={stats.id} className="stats__item">
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 1 }}
              width="50"
              height="50"
              src={stats.img}
              alt=""
              aria-hidden="true"
              loading="lazy"
            />
            <h2>{stats.stats}</h2>
            <p className="pop-font txt-white">{stats.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default StatsPreview;
