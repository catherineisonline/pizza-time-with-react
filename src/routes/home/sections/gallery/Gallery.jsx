import "./gallery.css";
import {
  ImgOne375,
  ImgTwo375,
  ImgThree375,
  ImgFour375,
  ImgOne700,
  ImgTwo700,
  ImgThree700,
  ImgFour700,
} from "./images";

const Gallery = () => {
  return (
    <section
      className="homepage__gallery flex-container flex-column"
      aria-hidden="true">
      <img
        src={ImgOne375}
        srcSet={` ${ImgOne700} 700w, ${ImgOne375} 375w`}
        sizes="(min-width: 700px) 700px, 375px"
        alt=""
        aria-hidden="true"
        loading="lazy"
        fetchPriority="low"
      />
      <img
        src={ImgTwo375}
        srcSet={` ${ImgTwo700} 700w, ${ImgTwo375} 375w`}
        sizes="(min-width: 700px) 700px, 375px"
        alt=""
        aria-hidden="true"
        loading="lazy"
        fetchPriority="low"
      />
      <img
        src={ImgThree375}
        srcSet={` ${ImgThree700} 700w, ${ImgThree375} 375w`}
        sizes="(min-width: 700px) 700px, 375px"
        alt=""
        aria-hidden="true"
        loading="lazy"
        fetchPriority="low"
      />
      <img
        src={ImgFour375}
        srcSet={` ${ImgFour700} 700w, ${ImgFour375} 375w`}
        sizes="(min-width: 700px) 700px, 375px"
        alt=""
        aria-hidden="true"
        loading="lazy"
        fetchPriority="low"
      />
    </section>
  );
};

export default Gallery;
