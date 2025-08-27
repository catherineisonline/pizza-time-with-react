import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ResetLocation from "../../../helpers/ResetLocation";
import blogPreview from "../../../data/blog-preview";
import "./blog-preview.css";

const BlogPreview = () => {
  return (
    <motion.section
      className="homepage__blog flex-container flex-column"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 3 }}>
      <h2 className="txt-center pop-font txt-white">Reciente del blog</h2>
      <p className="section-description">
        Recetas frescas, sabrosas y quizás algunas saludables hechas para la vida real, actual y cotidiana. ¡No necesitas ser un profesional! Ayudándote a celebrar la alegría de la comida de una manera no intimidante.
      </p>
      <div className="homepage__blog-posts">
        {blogPreview.map((post) => (
          <article
            key={post.id}
            className="homepage__blog-post flex-container flex-column">
            <img
              src={post.img}
              alt=""
              aria-hidden="true"
              width={330}
              height={220}
              loading="lazy"
            />
            <time className="date" dateTime="2023.27.06">
              Junio 27, 2023
            </time>
            <Link
              onClick={ResetLocation}
              to={`/blog/${post.name.toLowerCase().replaceAll(" ", "-")}`}
              aria-label={`Continuar leyendo ${post.name}`}>
              <h3 className="pop-font txt-white">{post.name}</h3>
            </Link>
            <p className="homepage__blog-intro">{post.intro}</p>
          </article>
        ))}
      </div>

      <Link
        onClick={ResetLocation}
        to="/blog"
        className="active-button-style txt-white">
        Más publicaciones
      </Link>
    </motion.section>
  );
};
export default BlogPreview;
