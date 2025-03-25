import "./blog-post.css";
import { useEffect, useState } from "react";
import blogPosts from "../../data/blog-posts";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { slideInLeft } from "../../data/animations";
const BlogPost = () => {
  const { name } = useParams();
  const [blogPost, setBlogPost] = useState({});

  useEffect(() => {
    setBlogPost(
      blogPosts.find(
        (post) => post.name.toLowerCase() === name.replaceAll("-", " ")
      ) || {}
    );
  }, [name]);

  useEffect(() => {
    document.title = `${blogPost.name} | Pizza Time`;
  }, [blogPost.name]);
  return (
    <motion.main
      className="blog-post"
      initial={slideInLeft.initial}
      whileInView={slideInLeft.whileInView}
      exit={slideInLeft.exit}
      transition={slideInLeft.transition}>
      <article>
        <img
          src={blogPost.img}
          alt=""
          aria-hidden="true"
          loading="lazy"
        />
        <h2>{blogPost.name}</h2>
        <p>{blogPost.content}</p>
      </article>
    </motion.main>
  );
};

export default BlogPost;
