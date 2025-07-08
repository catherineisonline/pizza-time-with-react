const MenuSliderCategories = ({ category, setActiveCategory }) => {
  return (
    <li>
      <button
        aria-label={`Change category to ${category.name}`}
        onClick={() => setActiveCategory(category.name)}>
        {category.name}
      </button>
    </li>
  );
};

export default MenuSliderCategories;
