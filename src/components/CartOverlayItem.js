import React from "react";
//Components
import SelectedAttributes from "./SelectedAttributes";
import CartPricing from "../components/CartPricing.js";
import CartProductInteraction from "./CartProductInteraction";

export default class CartOverlayItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pricing: "",
      pricingCurrencySymbol: "",
      pricingAmount: "",
    };
    this.filterCurrency = this.filterCurrency.bind(this);
  }
  // IDENTIFY PRICING
  /*******************************************************************/
  GetPricing = () => {
    this.setState({
      pricing: this.getPrice(
        this.props.singleProduct.prices,
        this.props.selectedCurrency
      ),
    });
  };
  // HANDLE CURRENCY
  /*********************************************************************/
  filterCurrency = (item, selectedCurrency) => {
    const [correctPrice] = item?.prices?.filter((price) => {
      return price.currency.symbol === selectedCurrency;
    });
    this.setState({ pricing: correctPrice });
  };

  getPrice = (prices, currency) => {
    const [correctPrice] = prices.filter(
      (price) => price.currency.symbol === currency
    );

    return correctPrice;
  };
  // RENDER & UPDATE
  /*********************************************************************/
  componentDidMount() {
    this.GetPricing();
    this.setState({
      pricingCurrencySymbol: this.state.pricing?.currency?.symbol,
    });
    this.setState({ pricingCurrencySymbol: this.state.pricing?.amount });
  }
  shouldComponentUpdate(nextProps) {
    if (this.props.selectedCurrency !== nextProps.selectedCurrency) {
      this.filterCurrency(this.props.singleProduct, nextProps.selectedCurrency);
    }
    return true;
  }
  render() {
    const { singleProduct, handleAddProduct, handleRemoveProduct } = this.props;
    return (
      <article className="cartoverlay-products-single">
        <section className="cart-overlay-item">
          <section className="cart-overlay-item-data">
            <section className="titles-block">
              <h4>{singleProduct.brand}</h4>
              <h4>{singleProduct.name}</h4>

              <CartPricing
                className="cartoverlay-item-pricing"
                pricingCurrencySymbol={this.state.pricing?.currency?.symbol}
                pricingAmount={this.state.pricing?.amount}
              />
            </section>

            {singleProduct?.attributes?.map((attribute) => (
              <SelectedAttributes
                className="cart-overlay-item-attr"
                key={attribute.id}
                attribute={attribute}
                userSelectedAttributes={singleProduct.userSelectedAttributes}
                singleProduct={singleProduct}
              />
            ))}
          </section>
        </section>
        {/* <section className="cartoverlay-product-pictures"> */}
        <CartProductInteraction
          className="cartoverlay-product-interaction"
          handleAddProduct={handleAddProduct}
          handleRemoveProduct={handleRemoveProduct}
          singleProduct={singleProduct}
        />
        <img
          className="cart-overlay-image"
          src={singleProduct.gallery[0]}
          alt={singleProduct.name}
        />
        {/* </section> */}
      </article>
    );
  }
}
