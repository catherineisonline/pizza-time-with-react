import React from "react";
import { Link } from "react-router-dom";
import PizzaCrust from "../../assets/images/pizza-crust.jpg";
import ThickAndThin from "../../assets/images/thick-or-thin.jpg";
import Leftover from "../../assets/images/pizza-leftover.jpg";
import ResetLocation from "../../helpers/ResetLocation";

const blogPreview = [
  {
    id: 1,
    img: PizzaCrust,
    date: "July 12, 2021",
    name: "Pizza crust types: self-rising and par-baked",
    description: "Pizza crust can be various and it depends what pizza you are looking for..."
  },
  {
    id: 2,
    img: ThickAndThin,
    date: "July 1, 2021",
    name: "Thick or thin: different styles of pizza crust",
    description: "If you want to taste the toppings of pizza to their fullest, thin crust is the way to go..."
  },
  {
    id: 3,
    img: Leftover,
    date: "June 27, 2021",
    name: "What to do with leftover pizza dough",
    description: "Not sure what to do with pizza dough leftover? We have got you covered..."
  }
]

export default class BlogPreview extends React.Component {
  render() {

    return (
      <article className="section-9 flex-container flex-column">
        <h2 className="txt-center pop-font txt-white">Recent from blog</h2>
        <p className="section-description">
        Fresh, flavorful and maybe some healthy recipes made for real, actual, every day life. You don't need to be a pro! Helping you celebrate the joy of food in a totally non-intimidating way.
        </p>
        <section className="blog-posts-landing">
         {blogPreview.map(post =>
         <section className="blog-post flex-container flex-column">
            <img
              className="blog-post-img"
              src={post.img}
              alt={post.name}
            />
            <p className="blog-date">June 27, 2021</p>
            <h3 className="pop-font txt-white">
           {post.name}
            </h3>
            <p className="blog-snippet">
             {post.description}
            </p>
          </section>)}
        </section>

        <Link
          onClick={ResetLocation}
          to="/blog"
          className="active-button-style txt-white"
        >
          More posts
        </Link>
      </article>
    );
  }
}
