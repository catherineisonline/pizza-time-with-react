import React from "react";
import { NavLink } from "react-router-dom";
import SearchIcon from "../../assets/images/search-icon.png";
import ResetLocation from "../../helpers/ResetLocation";
export default class MenuCategories extends React.Component {
  render() {
    const { allCategories, changeCategory, resetPagination, findMenuItem } = this.props;
    return (
      <article className="side-menu">
        <section className="menu-search-section">
          <input
            type="text"
            className="menu-search"
            placeholder="search..."
            onChange={findMenuItem}
          />
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
                  resetPagination();
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
