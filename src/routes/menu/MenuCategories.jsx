import React from "react";
import { NavLink } from "react-router-dom";
import SearchIcon from "../../assets/images/search-icon.png";
import { categories as categoriesData } from "../../data/categories";
import { useEffect } from "react";
import { useState } from "react";
import { useProducts } from "../../context/ProductsContext";
const MenuCategories = ({ setActiveCategory }) => {
  const [categories, setCategories] = useState([]);
  const { findMenuItem } = useProducts();
  useEffect(() => {
    setCategories(categoriesData);
  }, []);
  return (
    <article className="menu__categories">
      <section className="menu__categories__search">
        <input
          type="text"
          placeholder="search..."
          onChange={findMenuItem}
        />
        <img
          src={SearchIcon}
          alt=""
          aria-hidden="true"
        />
      </section>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <NavLink
              to="/menu"
              onClick={() => setActiveCategory(category.name)}>
              {category.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </article>
  );
};
export default MenuCategories;
