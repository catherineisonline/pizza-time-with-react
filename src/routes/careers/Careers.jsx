import "./careers.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import ResetLocation from "../../helpers/ResetLocation";
import careers from "../../data/careers";

const Careers = () => {
  useEffect(() => {
    document.title = "Careers | Pizza Time";
  }, []);
  return (
    <main className="careers">
      <h2>Careers</h2>
      <h3>
        If you think you can add value with your expertise, passion, and hard
        work, you might be the ONE!
      </h3>
      <ul className="careers__inner">
        {careers.map((career) => (
          <li
            key={career.id}
            className="careers__listings">
            <div>
              <h4>{career.title}</h4>
              <p>{career.description}</p>
              <hr aria-hidden="true" />
            </div>
            <Link
              to="/contact"
              aria-label={`Apply for ${career.title}`}
              onClick={ResetLocation}>
              Apply
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Careers;
