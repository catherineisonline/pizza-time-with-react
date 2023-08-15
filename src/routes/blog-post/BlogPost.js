import { useEffect, useState } from "react"
import { AllBlogPosts } from "../../data/AllBlogPosts";

const BlogPost = () => {
    const [blogPost, setBlogPost] = useState({});

    useEffect(() => {
        setBlogPost(AllBlogPosts.filter((post) => post.name.toLowerCase() === window.location.pathname.toString().substring(6).replaceAll('-', ' '))[0])
    }, [])
    return (
        <main className="blog-post">
            <img src={blogPost.img} alt="" aria-hidden="true" />
            <section>
                <h2>{blogPost.name}</h2>
                <p>{blogPost.content}</p>
            </section>
        </main>
    )
}

export default BlogPost;