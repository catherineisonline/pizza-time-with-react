import React from 'react'

const ourServices = [
  {
    id: 1,
    img: 'https://img.icons8.com/laces/64/null/natural-food.png',
    name: 'Organic Food',
    description:
      'Pure and healthy organic food is our lifestyle. The products we consume has impact on out future and we do everything to keep the future healthy',
  },
  {
    id: 2,
    img: 'https://img.icons8.com/laces/64/null/fish-food.png',
    name: 'Express Delivery',
    description:
      'Choose from a variety of express delivery services depending on your needs. Whether in a hurry to eat or have some plans tomorrow, we have got you covered',
  },
  {
    id: 3,
    img: 'https://img.icons8.com/laces/64/null/pizza.png',
    name: 'Unforgetable Taste',
    description:
      'Our goal is to provide our customers with excellent service, great taste and unforgettable experiences. This will be a mind-blowing experience for your taste buds',
  },
]

export default class OurServices extends React.Component {
  MouseEnter() {
    const ServiceImgGroup = document.querySelectorAll('.service-img')
    ServiceImgGroup.forEach((ServiceImg) => {
      ServiceImg.addEventListener('mouseenter', function () {
        ServiceImg.classList.add('active-img')
      })
    })
  }
  MouseLeave() {
    const ServiceImgGroup = document.querySelectorAll('.service-img')
    ServiceImgGroup.forEach((ServiceImg) => {
      ServiceImg.addEventListener('mouseleave', function () {
        ServiceImg.classList.remove('active-img')
      })
    })
  }
  render() {
    return (
      <article className="section-3-container">
        <h2 className="pop-font">Our Services</h2>
        <p className="pop-font section-description">
          Pizza Time provides services across all states - various foods and
          drinks, you choose! What makes us special is our teams of
          professionals with extensive knowledge of all cuisine that we have to
          offer.
        </p>
        <section className="services-grid  flex-container flex-column">
          {ourServices.map((service) => (
            <section
              key={service.id}
              className="service-list flex-container flex-column"
            >
              <img
                width="50"
                height="50"
                className="service-img"
                onMouseEnter={this.MouseEnter}
                onMouseLeave={this.MouseLeave}
                src={service.img}
                alt=""
                aria-hidden="true"
              />
              <section>
                <h3 className="pop-font">{service.name}</h3>
                <p>{service.description}</p>
              </section>
            </section>
          ))}
        </section>
      </article>
    )
  }
}
