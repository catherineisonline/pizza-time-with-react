import React from "react";
import { Link } from "react-router-dom";
import ResetLocation from '../../helpers/ResetLocation'

const BlogPosts = ({ blogPost }) => {
  return (
    <section className="blog__posts__single">
      <img
        src={blogPost.img}
        alt={blogPost.name}
        loading="lazy"
      />
      <section className="blog__posts__credentials">
        <p>{blogPost.date}</p>
        <p>by {blogPost.author}</p>
      </section>
      <Link
        onClick={ResetLocation}
        to={`/blog/${blogPost.name.toLowerCase().replaceAll(' ', '-')}`}
      >
        <h3>{blogPost.name}</h3>
      </Link>
      <p className="blog__posts__intro">{blogPost.intro}</p>
    </section>
  );
}

export default BlogPosts;