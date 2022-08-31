import React from "react";

export default class MenuSliderCategories extends React.Component {
  render() {
    const { category, changeCategory } = this.props;
    return (
      <li>
        <button onClick={() => changeCategory(category.name)}>
          {category.name}
        </button>
      </li>
    );
  }
}
