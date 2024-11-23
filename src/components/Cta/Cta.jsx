import { Link } from "react-router-dom";

import "./Cta.css";

const Cta = () => {
  return (
    <section className="cta">
      <h1>
      Enroll in our on-campus programs and gain access to world-class <br />education and resources at IIIT Vadodara.
      </h1>
      <Link to="/contact" className="hero-btn">
        CONTACT US
      </Link>
    </section>
  );
};

export default Cta;
