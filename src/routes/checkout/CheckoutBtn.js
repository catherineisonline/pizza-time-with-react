import React from "react";
import { Link } from "react-router-dom";
import LoginModal from "../../components/LoginModal";
import ResetLocation from "../../helpers/ResetLocation";

export default class CheckoutBtn extends React.Component {


  render() {
    const { className, showModal, validLogin, submit, handleSubmit, formValue, hideModal, removeMenu, handleValidation, formError } = this.props;
    return (
      <div>
        {/* <LoginModal /> */}
        {/* <LoginModal validLogin={validLogin} formValue={formValue} handleSubmit={handleSubmit} submit={submit} formError={formError} handleValidation={handleValidation} hideModal={hideModal} removeMenu={removeMenu} /> */}
        {validLogin ? <Link to="/checkout" className={className} onClick={() => { ResetLocation(); }}>
          Checkout</Link> :
          <button className={className} onClick={() => { ResetLocation(); showModal() }}>
            Checkout</button>
        }
      </div>

    );
  }
}
