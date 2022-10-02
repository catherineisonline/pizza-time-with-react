import React from "react";
import { Link } from "react-router-dom";
import PizzaCrust from "../../assets/images/pizza-crust.jpg";
import ThickAndThin from "../../assets/images/thick-or-thin.jpg";
import Leftover from "../../assets/images/pizza-leftover.jpg";

export default class BlogPreview extends React.Component {
  render() {
    const { ResetLocation } = this.props;
    return (
      <article className="section-9 flex-container flex-column">
        <h2 className="txt-center pop-font txt-white">Recent from blog</h2>
        <p className="section-description">
          Vestibulum et viverra massa, a malesuada lacus. Curabitur quis elit
          eget metus porttitor sollicitudin at in nulla. Integer mollis orci vel
          consequat eleifend. Fusce sollicitudin feugiat magna et facilisis.
        </p>
        <section className="blog-posts-landing">
          {/* Post 1 */}
          <div className="blog-post flex-container flex-column">
            <img
              className="blog-post-img"
              src={PizzaCrust}
              alt="pizza on the table"
            />
            <p className="blog-date">July 12, 2021</p>

            <h3 className="pop-font txt-white">
              Pizza Crust Types: Self-Rising and Par-Baked
            </h3>
            <p className="blog-snippet">
              Maecenas interdum erat justo, eget posuere mi vehicula et. Fusce
              ut elit ex.
            </p>
          </div>
          {/* Post 2 */}
          <div className="blog-post flex-container flex-column">
            <img
              className="blog-post-img"
              src={ThickAndThin}
              alt="a person placing pizza in an over"
            />
            <p className="blog-date">July 1, 2021</p>
            <h3 className="pop-font txt-white">
              Thick or Thin: Different Styles of Pizza Crust
            </h3>
            <p className="blog-snippet">
              Aenean convallis tempor vehicula. Nunc pellentesque porta libero,
              proin laoreet diam.
            </p>
          </div>
          {/* Post 3 */}
          <div className="blog-post flex-container flex-column">
            <img
              className="blog-post-img"
              src={Leftover}
              alt="pizza near fireplace"
            />
            <p className="blog-date">June 27, 2021</p>
            <h3 className="pop-font txt-white">
              What To Do With Leftover Pizza Dough
            </h3>
            <p className="blog-snippet">
              Nullam sit amet semper est. Proin laoreet diam quis tortor
              malesuada.
            </p>
          </div>
        </section>

        <Link
          onClick={ResetLocation}
          to="/blog"
          className="more-pizza txt-white"
        >
          More Posts
        </Link>
      </article>
    );
  }
}
