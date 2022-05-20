import React from "react";
import { NavLink } from "react-router-dom";
import SearchIcon from "../images/search-icon.png";

const ResetLocation = () => window.scrollTo(0, 0);

export default class MenuNavBar extends React.Component {
  ResetLocation = () => window.scrollTo(0, 0);
  render() {
    const { allCategories, changeCategory } = this.props;
    return (
      <>
        <article className="side-menu">
          <section className="menu-search-section">
            <input
              type="text"
              className="menu-search"
              placeholder="search..."
            ></input>
            <img src={SearchIcon} alt="" className="menu-search-icon"></img>
          </section>
          <ul>
            {allCategories.map((category) => (
              <li>
                <NavLink
                  key={category.name}
                  to="/menu"
                  onClick={() => {
                    changeCategory(category.name);
                    ResetLocation();
                  }}
                >
                  {category.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </article>
      </>
    );
  }
}
