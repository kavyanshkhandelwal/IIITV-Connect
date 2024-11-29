// import { Link } from "react-router-dom";

// import "./Cta.css";

// const Cta = () => {
//   return (
//     <section className="cta">
//       <h1>
//       Enroll in our on-campus programs and gain access to world-class <br />education and resources at IIIT Vadodara.
//       </h1>
//       <Link to="/contact" className="hero-btn">
//         CONTACT US
//       </Link>
//     </section>
//   );
// };

// export default Cta;





import { Link } from "react-router-dom";
import "./Cta.css";

const Cta = () => {
  return (
    <section className="cta">
      <video className="cta-video" autoPlay muted loop>
        <source src="/images/ctaVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="cta-content">
        <h1>
          Enroll in our on-campus programs and gain access to world-class
          <br />
          education and resources at IIIT Vadodara.
        </h1>
        <Link to="/contact" className="hero-btn">
          CONTACT US
        </Link>
      </div>
    </section>
  );
};

export default Cta;

