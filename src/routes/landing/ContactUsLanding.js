import React, { useState, useEffect } from 'react'
import PizzaOne from '../../assets/images/contact-us/image-one-parallax.png'
// import PizzaTwo from '../../assets/images/contact-us/image-one-parallax.png'
const ContactUsLanding = () =>  {
  const [offsetY, setOffsetY] = useState(0)

const handleScroll = () => {
  setOffsetY(window.scrollY)
}

useEffect(() => {
window.addEventListener('scroll', handleScroll)
return(() => window.removeEventListener('scroll', handleScroll))
}, []);

    return (
        <section className="company-details flex-container flex-row txt-white" >
        
       
        <img src={PizzaOne} alt="" className="parallax company-details-image" style={{transform: `translateX(-${offsetY * 0.6}px)` , transition: 'all ease-in-out 0.3'}}/>
        <img src={PizzaOne} alt="" className="parallax company-details-image-two" style={{transform: `translateX(-${offsetY * 0.6}px)` , transition: 'all ease-in-out 0.3'}}/>
        <img src={PizzaOne} alt="" className="parallax company-details-image-three" style={{transform: `translateX(-${offsetY * 0.6}px)` , transition: 'all ease-in-out 0.3'}}/>
          <div>
            <h2>000 (000) 123 4567</h2>
            <p>Contact us if you have any questions</p>
          </div>
          <div>
            <h2>506 Roy Alley 80202 </h2>
            <p>Colorado, Denver</p>
          </div>
          <div>
            <h2>Open Monday-Friday</h2>
            <p>8:00am - 9:00pm</p>
          </div>
        </section>
    );
  
}


export default ContactUsLanding;