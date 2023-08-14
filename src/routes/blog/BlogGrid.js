import React from "react";
import { Link } from "react-router-dom";
import ResetLocation from '../../helpers/ResetLocation'
export default class BlogGrid extends React.Component {
  render() {
    const { blogPost } = this.props;
    return (
      <section className="blog-preview">
        <img
          src={blogPost.img}
          alt={blogPost.name}
        />
        <section className="credentials">
          <p>{blogPost.date}</p>
          <p>by {blogPost.author}</p>
        </section>
        <Link
          onClick={ResetLocation}
          to={`${blogPost.name.toLowerCase().replaceAll(' ', '-')}`}
        >
          <h3>{blogPost.name}</h3>
        </Link>
        <p className="intro">{blogPost.intro}</p>
      </section>
    );
  }
}
