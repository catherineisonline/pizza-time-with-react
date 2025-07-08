import "./contact-info.css";
import { useEffect, useRef, useState, lazy, Suspense } from "react";
import { motion } from "framer-motion";

const Maps = lazy(() => import("./Maps"));

const ContactLanding = () => {
  const ref = useRef(null);
  const [hideMap, setHideMap] = useState(true);

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHideMap(false);
            observer.unobserve(element);
          }
        });
      },
      {
        threshold: 0,
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);
  return (
    <motion.section
      aria-labelledby="contact-title"
      className="homepage__contact flex-container flex-column"
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}>
      {!hideMap && (
        <Suspense fallback={<div id="#map">Loading location...</div>}>
          <Maps />
        </Suspense>
      )}
      <address className="contact__info">
        <h2 id="contact-title">Contact Us</h2>
        <p>
          Have a question, suggestion, or just want to say hello? We'd love to
          hear from you!
        </p>
        <div>
          <h3>Customer Support:</h3>
          <p>
            Our dedicated customer support team is ready to assist you with any
            inquiries you may have.
          </p>
          <ul>
            <li>
              - Email: {""}
              <a
                href="mailto:support@pizzatime.com"
                target="_blank"
                rel="noopener noreferrer">
                support@pizzatime.com
              </a>
            </li>
            <li>
              - <a href="tel:0000001234567">Phone: 000 (000) 123 4567</a>
            </li>
            <li>
              - Hours: Monday - Friday, <time dateTime="08:00">8:00am</time> -{" "}
              <time dateTime="21:00">9:00pm</time>(EST)
            </li>
          </ul>
        </div>
        <div>
          <h3>General Inquiries:</h3>
          <p>
            If you have general questions about our company, partnerships, or
            anything else, feel free to get in touch.
          </p>
          <ul>
            <li>
              - Email: {""}
              <a
                href="mailto:info@pizzatime.com"
                target="_blank"
                rel="noopener noreferrer">
                info@pizzatime.com
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Feedback and Suggestions:</h3>
          <p>
            We value your feedback and are always striving to improve. If you
            have any suggestions, comments, or ideas on how we can enhance our
            offerings, please let us know.
          </p>
          <ul>
            <li>
              - Email: {""}
              <a
                href="mailto:feedback@pizzatime.com"
                target="_blank"
                rel="noopener noreferrer">
                feedback@pizzatime.com
              </a>
            </li>
          </ul>
        </div>
      </address>
    </motion.section>
  );
};

export default ContactLanding;
