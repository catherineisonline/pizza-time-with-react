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
    <section className="menu__categories">
      <h2 className="visually-hidden">Categorías del Menú</h2>
      <form className="menu__categories__search" role="search">
        <input
          type="text"
          placeholder="buscar..."
          aria-label="Buscar productos"
          onChange={findMenuItem}
        />
        <img src={SearchIcon} alt="" aria-hidden="true" />
      </form>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <NavLink
              to="/menu"
              aria-label={`Seleccionar categoría ${category.name}`}
              onClick={() => setActiveCategory(category.name)}>
              {category.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default MenuCategories;
