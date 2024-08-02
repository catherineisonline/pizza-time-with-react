import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";
import ResetLocation from '../../../helpers/ResetLocation'
import blogPreview from '../../../data/blogPreview';
import './blog-preview.css'

const BlogPreview = () => {
  return (
    <motion.div className="homepage__blog flex-container flex-column"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 3 }}
    >

      <h2 className="txt-center pop-font txt-white">Recent from blog</h2>
      <p className="section-description">
        Fresh, flavorful, and maybe some healthy recipes made for real, actual, everyday life. You don't need to be a pro! Helping you celebrate the joy of food in a non-intimidating way.
      </p>
      <section className="homepage__blog-posts">
        {blogPreview.map((post) => (
          <section
            key={post.id}
            className="homepage__blog-post flex-container flex-column"
          >
            <img
              src={post.img}
              alt={post.name}
              width={330}
              height={220}
              loading="lazy"
            />
            <p className="date">June 27, 2023</p>
            <Link onClick={ResetLocation} to={`/blog/${post.name.toLowerCase().replaceAll(' ', '-')}`}>
              <h3 className="pop-font txt-white">{post.name}</h3>
            </Link>
            <p className="homepage__blog-intro">{post.intro}</p>
          </section>
        ))}
      </section>

      <Link
        onClick={ResetLocation}
        to="/blog"
        className="active-button-style txt-white"
      >
        More posts
      </Link>
    </motion.div>

  )
}
export default BlogPreview;
