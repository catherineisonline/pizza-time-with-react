import React from "react";

const MenuSliderCategories = () => {
  const { category, changeCategory } = this.props;
  return (
    <li>
      <button onClick={() => changeCategory(category.name)}>
        {category.name}
      </button>
    </li>
  );
}


export default MenuSliderCategories