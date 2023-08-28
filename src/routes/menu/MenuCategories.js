import React from "react";
import { NavLink } from "react-router-dom";
import SearchIcon from "../../assets/images/search-icon.png";
import ResetLocation from "../../helpers/ResetLocation";

const MenuCategories = ({ allCategories, changeCategory, resetPagination, findMenuItem }) => {
  return (
    <article className="side-menu">
      <section className="menu-search-section">
        <input
          type="text"
          className="menu-search"
          placeholder="search..."
          onChange={findMenuItem}
        />
        <img src={SearchIcon} alt="" aria-hidden="true" className="menu-search-icon" />
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
export default MenuCategories;
