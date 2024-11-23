import { Link } from "react-router-dom";

import "./AboutUsBox.css";

const AboutUsBox = () => {
  return (
    <section className="about-us">
      <div className="row">
        <div className="about-col">
          <h1>Shaping Futures with Excellence in Education</h1>
          <p>          
          The Indian Institute of Information Technology Vadodara<b>(IIIT V)</b>, established in 2013 under the <b>Ministry of Education (MoE)</b> through a Public-Private Partnership, is an Institute of National Importance dedicated to advancing IT knowledge and skills. Its founding partners include the <b>Government of India, Government of Gujarat, Gujarat Energy Research and Management Institute, Gujarat State Fertilizers and Chemicals Ltd.</b>, and <b>Tata Consultancy Services.</b> Currently based at Government Engineering College, Gandhinagar, it will soon move to its permanent <b>62.5-acre</b> campus in Dumad, Vadodara.
          </p>
          <Link to="#" className="hero-btn red-btn">
            EXPLORE NOW
          </Link>
        </div>
        <div className="about-col">
          <img src="images/aboutiiitv.jpg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default AboutUsBox;
