import "./Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <section className="footer">
      <h4>ABOUT IIIT VADODARA</h4>
      <p>
      Indian Institute of Information Technology Vadodara (<strong>IIIT V</strong>) is established by the <strong>Ministry of Education (MoE) , Government of India under Public Private Partnership (PPP)</strong> as Institute of National Importance with a view to develop new knowledge in information technology and to provide manpower of global standards for the information technology industry and to provide for certain other matters connected with such institutions or incidental thereto. The partners in this project are <strong>Government of India, Government of Gujarat, Gujarat Energy Research and Management Institute, Gujarat State Fertilizers and Chemicals Ltd and Tata Consultancy Services</strong>. The Institute was established in the year 2013. At present, IIIT V is operating from its temporary premises at <strong>Government Engineering College (Gandhinagar)</strong> till the time its new campus is made operational at Vadodara, Gujarat. The Government of Gujarat has lent support to the Institute by providing 62.5 acres of land at Dumad, Vadodara and a Academic Block at GEC, Gandhinagar
      </p>

      <div className="icons">
        <a href="https://www.facebook.com/iiitvadodara.ac.in" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebookF} className="fab" />
        </a>
        <a href="https://x.com/i/flow/login?redirect_after_login=%2FIIITVadodarasm" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} className="fab" />
        </a>
        <a href="https://in.linkedin.com/school/iiitvadodara/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedinIn} className="fab" />
        </a>
        <a href="https://www.youtube.com/@iiitvadodara6387" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faYoutube} className="fab" />
        </a>
      </div>
    </section>
  );
};

export default Footer;
