import React from "react";
//Data
import { AllBlogPosts } from "../../data/AllBlogPosts";
//Components
import ScrollBtn from "../../components/ScrollBtn";
import BlogPost from "../blog/BlogPost";

export default class Blog extends React.Component {
  render() {
    document.title = "Blog | Pizza Time";
    return (
      <main className="blog">
        <article className="blog-section">
          <h1>Blog</h1>
          <p className="blog-intro">
            Pizza makes everything better. These are some of our favorite pizza
            blogs that are loaded with recipes and pizza-making tips.
          </p>
          <section className="blog-posts">
            {AllBlogPosts.map((blogPost, index) => {
              return <BlogPost key={index} blogPost={blogPost} />;
            })}
          </section>
        </article>
        <ScrollBtn />
      </main>
    );
  }
}
