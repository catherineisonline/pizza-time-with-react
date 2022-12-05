import React from "react";
import { Link } from "react-router-dom";
import LoginModal from "../../components/LoginModal";
import ResetLocation from "../../helpers/ResetLocation";

export default class CheckoutBtn extends React.Component {


  render() {
    const { className, showModal, validLogin } = this.props;
    return (
      <div>
        {validLogin ? <Link to="/checkout" className={className} onClick={() => { ResetLocation(); }}>
          Checkout</Link> :
          <button className={className} onClick={() => { ResetLocation(); showModal() }}>
            Checkout</button>
        }
      </div>

    );
  }
}
