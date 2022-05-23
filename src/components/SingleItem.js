import React from "react";
import { allProductsData } from "../data/AllProductsData";
import { Link } from "react-router-dom";
import Attribute from "./Attribute";
import AddToCartButton from "./AddToCartButton";
export default class SingleItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      singleProduct: [],
      selectedAttributes: [],
      allAttributesAreSelected: false,
    };
    this.handleSelectedAttributes = this.handleSelectedAttributes.bind(this);
  }
  GetProductById = (uniqueId) => {
    let separateProductById = [];
    //Separate arrays by id
    const separateById = allProductsData.reduce(function (
      singleId,
      singleItem
    ) {
      separateProductById = Object.keys(singleId);

      if (!singleId[singleItem.id]) singleId[singleItem.id] = singleItem;
      else
        singleId[singleItem.id] = Array.isArray(singleId[singleItem.id])
          ? singleId[singleItem.id].concat(singleItem)
          : [singleId[singleItem.id]].concat(singleItem);
      return singleId;
    },
    {});

    const result = Object.keys(separateById).map((e) => separateById[e]);

    let singleIdArray = [];
    result.map((categories) => {
      singleIdArray = categories;
    });

    separateProductById.forEach((cate) => {
      if (cate === uniqueId) {
        return this.setState({ singleProduct: separateById[uniqueId] });
      }
      if (separateById[uniqueId].attributes.length === 0) {
        this.handleAllAttributesAreSelected();
      }
    });
  };

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
  componentDidMount() {
    this.GetProductById(window.location.pathname.toString().substring(1));
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (
      this.state.selectedAttributes !== nextState.selectedAttributes &&
      nextState.selectedAttributes.length ===
        this.state.singleProduct.attributes.length
    ) {
      this.handleAllAttributesAreSelected();
    }
    return true;
  }
  render() {
    const { successMsg, handleAddProduct, handleRemoveProduct } = this.props;
    const { singleProduct } = this.state;
    document.title = `${singleProduct.ItemName} | Pizza Time`;
    return (
      <article className="single-item-container">
        <section>
          <Link to="/menu" className="back-btn">
            ← Back
          </Link>
        </section>
        <div className="single-item flex-container flex-column txt-white">
          <img
            src={singleProduct.ItemImg}
            alt={`${singleProduct.ItemName}`}
          ></img>
          <section className="single-item-info">

        
          <section className="single-item-title">
            {" "}
            <h3>{singleProduct.ItemName}</h3>
            <p>{singleProduct.ItemIngredients}</p>
          </section>

          {singleProduct?.attributes?.map((attribute) => (
            <Attribute
              key={attribute.id}
              className="single-item-attributes"
              handleSelectedAttributes={this.handleSelectedAttributes}
              attribute={attribute}
            />
          ))}
          <div className="price">
            <section>
              <p className="price-num">
                <span>$</span>
                {singleProduct.ItemPrice}
              </p>
            </section>
            <AddToCartButton
              successMsg={successMsg}
              allAttributesAreSelected={this.state.allAttributesAreSelected}
              handleAddProduct={handleAddProduct}
              handleRemoveProduct={handleRemoveProduct}
              singleProduct={this.state.singleProduct}
              selectedAttributes={this.state.selectedAttributes}
            />
          </div>
          </section>
        </div>
      </article>
    );
  }
}
