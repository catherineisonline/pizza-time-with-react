import { Link } from "react-router-dom";
import ResetLocation from "../../helpers/ResetLocation";

const BlogPosts = ({ blogPost }) => {
  return (
    <article className="blog__posts__single">
      <img
        src={blogPost.img}
        alt={`Thumbnail for ${blogPost.name} blog post`}
        loading="lazy"
        fetchPriority="low"
      />
      <header className="blog__posts__credentials">
        <time dateTime={blogPost.date}>{blogPost.date}</time>
        <p>by {blogPost.author}</p>
      </header>
      <h2>
        <Link
          onClick={ResetLocation}
          aria-label={`Continue reading: ${blogPost.name}`}
          to={`/blog/${blogPost.name.toLowerCase().replaceAll(" ", "-")}`}>
          {blogPost.name}
        </Link>
      </h2>
      <p className="blog__posts__intro">{blogPost.intro}</p>
    </article>
  );
};

export default BlogPosts;
