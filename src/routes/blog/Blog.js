import React from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ReactPaginate from 'react-paginate';
//data
import { allBlogPosts } from "../../data/AllBlogPosts";
//components
import ScrollBtn from "../../components/ScrollBtn";
import ResetLocation from "../../helpers/ResetLocation";
import BlogPosts from "./BlogPosts";

const Blog = () => {
  const [itemOffset, setItemOffset] = useState(0);
  const [endOffset, setEndOffset] = useState(itemOffset + 5);
  const [currentBlogPosts, setcurrentBlogPosts] = useState([...allBlogPosts].reverse().slice(itemOffset, endOffset));
  const [pageCountPosts, setpageCountPosts] = useState(Math.ceil(allBlogPosts.length / 5));

  const handlePageClick = (event) => {
    const newOffset = (event.selected * 5) % allBlogPosts.length;
    setItemOffset(newOffset);
    ResetLocation();
  };

  useEffect(() => {
    document.title = "Blog | Pizza Time";
    setEndOffset(itemOffset + 5);
    setcurrentBlogPosts([...allBlogPosts].reverse().slice(itemOffset, endOffset));
    setpageCountPosts(Math.ceil(allBlogPosts.length / 5));

  }, [setEndOffset, endOffset, itemOffset]);
  return (
    <motion.div
      initial={{ opacity: 0, translateX: -300 }}
      whileInView={{ opacity: 1, translateX: 0 }}
      exit={{ opacity: 0, translateX: -300 }}
      transition={{ duration: 1 }}
    >
      <main className="blog">
        <article className="blog-section">
          <h2>Blog</h2>
          <p className="blog-intro">
            Pizza makes everything better. These are some of our favorite pizza
            blogs that are loaded with recipes and pizza-making tips.
          </p>
          <section className="blog-grid">
            {currentBlogPosts.map((blogPost, index) => {
              return <BlogPosts key={index} blogPost={blogPost} />;
            })}
          </section>
        </article>
        <ReactPaginate
          className="pagination blog-pagination"
          breakLabel="..."
          nextLabel=" &#62;"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCountPosts}
          previousLabel="&#60;"
          renderOnZeroPageCount={null}
        />
        <ScrollBtn />
      </main>
    </motion.div>
  );
}
export default Blog;