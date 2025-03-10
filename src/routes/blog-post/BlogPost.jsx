import "./blog-post.css";
import { useEffect, useState } from "react";
import blogPosts from "../../data/blog-posts";
import { useParams } from "react-router-dom";

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
    <main className="blog-post">
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
    </main>
  );
};

export default BlogPost;
