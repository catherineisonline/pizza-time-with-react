import "./blog.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ReactPaginate from "react-paginate";
import blogPosts from "../../data/blog-posts";
import ScrollBtn from "../../helpers/ScrollBtn";
import ResetLocation from "../../helpers/ResetLocation";
import BlogPosts from "./BlogPosts";
import { slideInLeft } from "../../data/animations";
const Blog = () => {
  const [itemOffset, setItemOffset] = useState(0);
  const [endOffset, setEndOffset] = useState(itemOffset + 5);
  const [currentBlogPosts, setcurrentBlogPosts] = useState(
    [...blogPosts].reverse().slice(itemOffset, endOffset)
  );
  const [pageCountPosts, setpageCountPosts] = useState(
    Math.ceil(blogPosts.length / 5)
  );

  const handlePageClick = (event) => {
    const newOffset = (event.selected * 5) % blogPosts.length;
    setItemOffset(newOffset);
    ResetLocation();
  };

  useEffect(() => {
    document.title = "Blog | Pizza Time";
    setEndOffset(itemOffset + 5);
    setcurrentBlogPosts([...blogPosts].reverse().slice(itemOffset, endOffset));
    setpageCountPosts(Math.ceil(blogPosts.length / 5));
  }, [setEndOffset, endOffset, itemOffset]);
  return (
    <motion.main
      className="blog"
      initial={slideInLeft.initial}
      whileInView={slideInLeft.whileInView}
      exit={slideInLeft.exit}
      transition={slideInLeft.transition}>
      <h2>Blog</h2>
      <p className="blog__intro">
        Pizza makes everything better. These are some of our favorite pizza
        blogs that are loaded with recipes and pizza-making tips.
      </p>
      <section className="blog__posts" aria-labelledby="blog-posts-title">
        <h2 id="blog-posts-title" className="visually-hidden">
          Recent Blog Posts
        </h2>
        {currentBlogPosts.map((blogPost, index) => (
          <BlogPosts key={index} blogPost={blogPost} />
        ))}
      </section>
      <ReactPaginate
        className="pagination blog__pagination"
        breakLabel="..."
        nextLabel=" &#62;"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCountPosts}
        previousLabel="&#60;"
        renderOnZeroPageCount={null}
        aria-label="Blog pagination"
      />
      <ScrollBtn />
    </motion.main>
  );
};
export default Blog;
