import React from "react";

const SectionThree = () => {
    return(
        <article className="section-3 flex-container flex-column txt-center">
        <h2>Our Services</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat nibh qua</p>
        <section className="services-grid  flex-container flex-column">
          <div className="service-list flex-container flex-column">
            <img src="https://img.icons8.com/ios/50/000000/natural-food.png" alt=""/>
            <h3>Organic Food</h3>
            <p>Pellentesque ac leo at elit consequat aliquet. Morbi eleifend enim orci, eleifend sodales tellus
              consequat non. Duis eget tellus quis leo fermentum volutpat.</p>
          </div>
          <div className="service-list flex-container flex-column">
            <img src="https://img.icons8.com/external-outline-wichaiwi/64/000000/external-deliver-services-business-outline-wichaiwi.png" alt=""/>
            <h3>Express Delivery</h3>
            <p>Etiam tempor ipsum ut lorem accumsan faucibus. Ut rutrum ipsum turpis, ac commodo dolor bibendum
              sit amet. Pellentesque dictum eget neque sed pellentesque. </p>
          </div>
          <div className="service-list flex-container flex-column">
            <img src="https://img.icons8.com/ios/50/000000/pizza.png" alt="" />
            <h3>Unforgetable Taste</h3>
            <p>Aenean hendrerit tortor at malesuada malesuada. Vivamus vitae eros et nibh blandit accumsan quis
              et dui. Nam ac tempus magna. </p>
          </div>
        </section>
      </article>
    )
}

export default SectionThree;