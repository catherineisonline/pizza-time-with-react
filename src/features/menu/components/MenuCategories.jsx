import { NavLink } from "react-router-dom";
import SearchIcon from "../assets/search-icon.png";
import { categories as categoriesData } from "../../../data/categories";
import { useEffect } from "react";
import { useState } from "react";
import { useProducts } from "../../../context/ProductsContext";

const MenuCategories = ({ setActiveCategory }) => {
  const [categories, setCategories] = useState([]);
  const [input, setInput] = useState("");
  const { findMenuItem } = useProducts();
  const handleChange = (val) => {
    setInput(val);
    if (val !== "") {
      findMenuItem(val);
    } else {
      setInput("");
    }
  };
  useEffect(() => {
    setCategories(categoriesData);
  }, []);
  return (
    <section className="menu__categories">
      <h2 className="visually-hidden">Menu Categories</h2>
      <form className="menu__categories__search" role="search" onSubmit={(e) => e.preventDefault()}>
        <input
          value={input}
          name="search"
          type="text"
          placeholder="search..."
          aria-label="Search products"
          onChange={(e) => handleChange(e.target.value)}
        />
        <img src={SearchIcon} alt="" aria-hidden="true" />
      </form>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <NavLink
              to="/menu"
              aria-label={`Select category ${category.name}`}
              onClick={() => {
                setActiveCategory(category.name);
                setInput("");
              }}>
              {category.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default MenuCategories;
