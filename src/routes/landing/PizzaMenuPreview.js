import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom'
import ResetLocation from '../../helpers/ResetLocation'
import pizzaMenuPreview from '../../data/pizzaMenuPreview';



const PizzaMenuPreview = () => {
  const initialScreenSize = localStorage.getItem('screenSize') || 1440;
  const [screenSize, setScreenSize] = useState(Number(initialScreenSize));
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `Ekaterine Mitagvaria`;
  }, []);
  useEffect(() => {

    // Function to handle window resize
    const handleResize = () => {
      const width = window.innerWidth;
      // Check inner width and update state accordingly
      if (width <= 375) {
        setScreenSize(375);
      }
      else if (width <= 700) {
        setScreenSize(700);
      } else {
        setScreenSize(1440);
      }
    };

    // Call handleResize on initial mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Update local storage whenever screenSize changes
  useEffect(() => {
    localStorage.setItem('screenSize', screenSize);
  }, [screenSize]);


  return (
    <article className="section-4 flex-container flex-column" >
      <section className="section-4-info txt-center">
        <h2 className="pop-font txt-white">Hot Pizza Meals</h2>
        <p className="section-description">
          Pizza Time holds the market of the pizza industry and continuously
          offers more than pizza. Check out our hottest menu options with
          cheese, meat, chicken and veggies!
        </p>
      </section>
      <section className="meals-grid flex-container flex-column" >
        {pizzaMenuPreview.map((pizza, id) => (
          <motion.div
            key={id}
            className="meal-item flex-container"
            initial={{ opacity: 0, translateX: -300 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            exit={{ opacity: 0, translateX: -300 }}
            transition={{ duration: 3 }}
          >
            <img
              alt={pizza.name}
              src={`${pizza.img375}`}
              width={375}
              height={250}
            />

            <section className="meal-item-details flex-container flex-column">
              <h3 className="txt-white">{pizza.name}</h3>
              <p>{pizza.description}</p>
              <section className="meal-item-order flex-container flex-row txt-center">
                <p>
                  <span>{pizza.currency}</span>
                  {pizza.price}
                </p>
              </section>
            </section>
          </motion.div>
        ))}
      </section>
      <Link
        onClick={ResetLocation}
        to="/menu"
        className="active-button-style txt-white"
      >
        More pizza
      </Link>
    </article>

  )
}

export default PizzaMenuPreview;