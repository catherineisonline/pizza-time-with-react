import React from "react";
import { NavLink } from "react-router-dom";
import SearchIcon from "../../assets/images/search-icon.png";

export default class MenuCategories extends React.Component {
  render() {
    const { allCategories, changeCategory, ResetLocation } = this.props;
    return (
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
            <li key={category.id}>
              <NavLink
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
    );
  }
}
