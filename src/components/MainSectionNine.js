import React from "react";

import PizzaCrust from "../images/pizza-crust.avif";
import ThickAndThin from "../images/thick-or-thin.avif";
import Leftover from "../images/pizza-leftover.avif";

const SectionNine = () => {
  return (
    <article className="section-9 flex-container flex-column">
      <h2 className="txt-center pop-font txt-white">Recent from blog</h2>
      <p className="section-9-desc txt-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        consequat nibh qua
      </p>
      <section className="blog-posts flex-container flex-column">
        {/* Post 1 */}
        <div className="blog-post flex-container flex-column">
          <img src={PizzaCrust} alt="pizzaon the table" />
          <p className="blog-date">December 7, 2022</p>
          <div>
            <h3 className="pop-font txt-white">Pizza Crust Types: Self-Rising and Par-Baked</h3>
            <p className="blog-snippet">
              Maecenas interdum erat justo, eget posuere mi vehicula et. Fusce
              ut elit ex.
            </p>
          </div>
        </div>
        {/* Post 2 */}
        <div className="blog-post flex-container flex-column">
          <img src={ThickAndThin} alt="a person placing pizza in an over" />
          <p className="blog-date">November 1, 2022</p>
          <h3 className="pop-font txt-white">
            Thick or Thin: Different Styles of Pizza Crust for 8 Classic Pies
          </h3>
          <p className="blog-snippet">
            Aenean convallis tempor vehicula. Nunc pellentesque porta libero.{" "}
          </p>
        </div>
        {/* Post 3 */}
        <div className="blog-post flex-container flex-column">
          <img src={Leftover} alt="pizza near fireplace" />
          <p className="blog-date">November 16, 2022</p>
          <h3 className="pop-font txt-white">What To Do With Leftover Pizza Dough</h3>
          <p className="blog-snippet">
            Nullam sit amet semper est. Proin laoreet diam quis tortor
            malesuada, eget mattis orci vulputate.
          </p>
        </div>
      </section>
      <a className="more-pizza txt-white" href="/">
        More Posts
      </a>
    </article>
  );
};

export default SectionNine;
