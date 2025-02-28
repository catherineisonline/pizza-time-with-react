import React from 'react'
import Visa from '../../assets/images/payment-methods/visa-icon.svg'
import MasterCard from '../../assets/images/payment-methods/mastercard-icon.svg'
import ApplePay from '../../assets/images/payment-methods/applepay-icon.svg'
import GooglePay from '../../assets/images/payment-methods/googlepay-icon.svg'

const FooterContact = () => {
  return (
    <section className="footer__contact flex-container flex-column">
      <h3>Have questions?</h3>
      <address>
        <p><a href="tel:0000001234567">000 (000) 123 4567</a></p>
        <p><a href='mailto:pizza@pizzatime.com'>pizza@pizzatime.com</a></p>
        <p><time dateTime='08:00'>8:00am</time> - <time dateTime='21:00'>9:00pm</time></p>
      </address>
      <section className="footer__contact__payments">
        <img width="50" height="50" src={Visa} alt="Visa card" />
        <img width="50" height="50" src={MasterCard} alt="Mastercard card" />
        <img width="50" height="50" src={ApplePay} alt="Apple pay" />
        <img
          width="50"
          height="50"
          className="googlepay"
          src={GooglePay}
          alt="Google pay"
        />
      </section>
    </section>
  )
}
export default FooterContact;
