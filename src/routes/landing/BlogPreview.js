import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";
//375px
import blogOne375 from '../../assets/images/blog-preview/blog-one-375.webp'
import blogTwo375 from '../../assets/images/blog-preview/blog-two-375.webp'
import blogThree375 from '../../assets/images/blog-preview/blog-three-375.webp'
//700px
import blogOne700 from '../../assets/images/blog-preview/blog-one-700.webp'
import blogTwo700 from '../../assets/images/blog-preview/blog-two-700.webp'
import blogThree700 from '../../assets/images/blog-preview/blog-three-700.webp'
import ResetLocation from '../../helpers/ResetLocation'

const blogPreview = [
  {
    id: 1,
    img375: blogOne375,
    img700: blogOne700,
    date: 'July 12, 2021',
    name: 'Pizza crust types: self-rising and par-baked',
    description:
      'Pizza crust can be various and it depends what pizza you are looking for...',
  },
  {
    id: 2,
    img375: blogTwo375,
    img700: blogTwo700,
    date: 'July 1, 2021',
    name: 'Thick or thin: different styles of pizza crust',
    description:
      'If you want to taste the toppings of pizza to their fullest, thin crust is the way to go...',
  },
  {
    id: 3,
    img375: blogThree375,
    img700: blogThree700,
    date: 'June 27, 2021',
    name: 'What to do with leftover pizza dough',
    description:
      'Not sure what to do with pizza dough leftover? We have got you covered...',
  },
]

export default class BlogPreview extends React.Component {
  render() {
    return (
      <motion.div className="section-9 flex-container flex-column"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
      >

        <h2 className="txt-center pop-font txt-white">Recent from blog</h2>
        <p className="section-description">
          Fresh, flavorful and maybe some healthy recipes made for real, actual,
          every day life. You don't need to be a pro! Helping you celebrate the
          joy of food in a totally non-intimidating way.
        </p>
        <section className="blog-posts-landing">
          {blogPreview.map((post) => (
            <section
              key={post.id}
              className="blog-post flex-container flex-column"
            >
              <img
                className="blog-post-img"
                src={post.img375}
                srcSet={`${post.img700} 400w, ${post.img375} 375w`}
                sizes="(min-width: 700px) 700px, 375px"
                alt={post.name}
              />
              <p className="blog-date">June 27, 2021</p>
              <h3 className="pop-font txt-white">{post.name}</h3>
              <p className="blog-snippet">{post.description}</p>
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
}
