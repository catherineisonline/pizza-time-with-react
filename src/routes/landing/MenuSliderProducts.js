import React from "react";

export default class MenuSliderProducts extends React.Component {
  render() {
    const { singleProduct } = this.props;
    return (
      <div className="slider-product">
        <section className="menu-slider-img-section">
          <img src={singleProduct.img} alt={singleProduct.name} />
        </section>
        <section className="slider-product-description">
          <h3 className="pop-font txt-white">{singleProduct.name}</h3>
          <p className="dish-details-desc pop-font">
            {singleProduct.describtion}
          </p>
          <p className="dish-details-pricing">
            <span>$</span>
            {singleProduct.price}
          </p>
        </section>
      </div>
    );
  }
}
