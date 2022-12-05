import React from "react";
import { NavLink } from "react-router-dom";
import AddToCartButton from "../cart/AddToCartButton.js";
import Attribute from "./Attribute";
import ResetLocation from "../../helpers/ResetLocation.js";

export default class MenuItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedAttributes: [],
      allAttributesAreSelected: false,
    };
    this.handleSelectedAttributes = this.handleSelectedAttributes.bind(this);
  }

  //HANDLE ATTRIBUTES
  /*********************************************************************/
  handleSelectedAttributes = (attributeId, attributeValue) => {
    const newSelectedAttribute = { attributeId, attributeValue };

    let userSelectedAttributes = [...this.state.selectedAttributes];
    const existingAttribute = userSelectedAttributes.find(
      (attribute) => attribute.attributeId === newSelectedAttribute.attributeId
    );

    if (existingAttribute) {
      for (let i = 0; i < userSelectedAttributes.length; i++) {
        if (
          userSelectedAttributes[i].attributeId ===
          newSelectedAttribute.attributeId
        ) {
          userSelectedAttributes[i] = { ...newSelectedAttribute };
        }
      }
    } else {
      userSelectedAttributes.push(newSelectedAttribute);
    }
    this.setState({ selectedAttributes: userSelectedAttributes });
  };
  // Check if attributes are selected
  /*******************************************************************/
  handleAllAttributesAreSelected = async () => {
    this.setState({ allAttributesAreSelected: true });
  };
  // //Filter out produt with no attributes
  // /********************************************************/
  handleProductHasNoAttributes = async () => {
    if (this.props.singleProduct.attributes.length === 0) {
      this.handleAllAttributesAreSelected();
    }
  };

  // RENDER & UPDATE
  /*********************************************************************/
  componentDidMount() {
    this.handleProductHasNoAttributes();
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (
      this.state.selectedAttributes !== nextState.selectedAttributes &&
      nextState.selectedAttributes.length ===
      this.props.singleProduct.attributes.length
    ) {
      this.handleAllAttributesAreSelected();
    }
    return true;
  }

  render() {
    const {
      singleProduct,
      handleAddProduct,
      handleRemoveProduct,
      successMsg,
    } = this.props;

    return (
      <div className="menu-item flex-container flex-column txt-white">
        <NavLink
          to={`/${singleProduct.id}`}
          className="menu-item-link"
          onClick={ResetLocation}
        >
          <img
            src={singleProduct.ItemImg}
            alt={`${singleProduct.ItemName}`}
          ></img>
        </NavLink>

        <h3>{singleProduct.ItemName}</h3>
        <p>{singleProduct.ItemIngredients}</p>
        {singleProduct?.attributes?.map((attribute) => (
          <Attribute
            key={attribute.id}
            className="menu-item-attributes"
            handleSelectedAttributes={this.handleSelectedAttributes}
            attribute={attribute}
          />
        ))}
        <div className="price">

          {singleProduct.sale === true ? <section className="sale-pricing">  <p className="price-num-before">
            <span>$</span>
            {singleProduct.ItemPriceBefore}
          </p> <p className="price-num">
              <span>$</span>
              {singleProduct.ItemPrice}
            </p>      </section> :
            <section>
              <p className="price-num">
                <span>$</span>
                {singleProduct.ItemPrice}
              </p>
            </section>}


          <AddToCartButton
            successMsg={successMsg}
            allAttributesAreSelected={this.state.allAttributesAreSelected}
            handleAddProduct={handleAddProduct}
            handleRemoveProduct={handleRemoveProduct}
            singleProduct={singleProduct}
            selectedAttributes={this.state.selectedAttributes}
          />
        </div>
      </div>
    );
  }
}
