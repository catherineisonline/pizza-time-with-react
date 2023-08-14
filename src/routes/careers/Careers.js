import { Link } from "react-router-dom";
import ResetLocation from "../../helpers/ResetLocation";
import careers from "../../data/careers";

const Careers = () => {
    return (
        <main className="careers">
            <h2>Careers</h2>
            <h3>If you think you can add value with your expertise, passion, and hard work, you might be the ONE!</h3>
            <section className="careers-section">
                {careers.map((career) =>
                    <section key={career.id} className="careers-listing">
                        <section className="single-listing">
                            <h4>{career.title}</h4>
                            <p>{career.description}</p>
                            <hr />
                        </section>
                        <Link to="/contact" onClick={ResetLocation}>Apply</Link>
                    </section>
                )}
            </section>
        </main>
    )
}

export default Careers;