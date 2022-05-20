import React from "react";
import { Link } from "react-router-dom";
import BlogPosts from "./BlogPosts";
import ScrollBtn from "./ScrollBtn";



class Blog extends React.Component {
  render() {
    document.title = "Blog | Pizza Time";
    return (
      <main className="blog-main">
        <article className="blog-section">
          <h1>Blog</h1>
          <p className="blog-intro">
            Pizza makes everything better. These are some of our favorite pizza
            blogs that are loaded with recipes and pizza-making tips.
          </p>
          <section className="blog-posts">
            {Object.keys(BlogPosts).map((obj) => (
              <div className="blog-post">
                <Link className="img-link" to={BlogPosts[obj].BlogPath}>
                  <img className="blog-img" src={BlogPosts[obj].BlogImg} alt="pizza"></img>
                </Link>
                <section className="blog-details">
                  <p>{BlogPosts[obj].BlogDate}</p>
                  <p>by {BlogPosts[obj].BlogAuthor}</p>
                </section>
                <h3>{BlogPosts[obj].BlogName}</h3>
                <p className="blog-snippet">{BlogPosts[obj].BlogSnippet}</p>
              </div>
            ))}
          </section>
        </article>
        <ScrollBtn />
      </main>
    );
  }
}

export default Blog;
