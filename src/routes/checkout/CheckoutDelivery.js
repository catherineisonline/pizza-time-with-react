// import React from "react";
// import { FaShippingFast } from "react-icons/fa";
// import { RiShoppingBagLine } from "react-icons/ri";

// export default class CheckoutDelivery extends React.Component {
//   render() {
//     const { toggleDelivery, takeAway } = this.props;
//     return (
//       <section className="checkout-choose-delivery">
//         <h2>Choose delivery</h2>
//         <form>
//           <label htmlFor="takeaway">
//             <RiShoppingBagLine />
//             Takeaway
//             <input
//               onClick={toggleDelivery}
//               className="takeaway"
//               type="radio"
//               placeholder="Address"
//               value="takeaway"
//               name="choose-delivery"
//             />
//           </label>

//           <label htmlFor="delivery">
//             <FaShippingFast />
//             Delivery
//             <input
//               onClick={toggleDelivery}
//               className="delivery"
//               type="radio"
//               placeholder="Address"
//               value="delivery"
//               name="choose-delivery"
//             />
//           </label>
//         </form>
//         {takeAway === true ? null : (
//           <section className="delivery">
//             <h2>Address</h2>
//             <form>
//               <div className="contact-form-item-cpage">
//                 <input
//                   className="fullname-input-cpage pop-font"
//                   type="text"
//                   placeholder="Address"
//                 />
//                 <br></br>
//                 <p className="fullname-error-cpage"></p>
//               </div>
//             </form>
//           </section>
//         )}
//       </section>
//     );
//   }
// }
