import React from "react";
import { Link } from "react-router-dom";

export default class BlogPost extends React.Component {
  render() {
    const { blogPost } = this.props;
    return (
      <section className="blog-post">
        <Link to="/">
          <img
            className="blog-img"
            src={blogPost.BlogImg}
            alt={blogPost.BlogName}
          ></img>
        </Link>
        <section className="blog-details">
          <p>{blogPost.BlogDate}</p>
          <p>by {blogPost.BlogAuthor}</p>
        </section>
        <h3>{blogPost.BlogName}</h3>
        <p className="blog-snippet">{blogPost.BlogSnippet}</p>
      </section>
    );
  }
}
