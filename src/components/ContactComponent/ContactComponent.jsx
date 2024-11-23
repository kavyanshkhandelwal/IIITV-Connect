import "./ContactComponent.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faHome, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const ContactComponent = () => {
  return (
    <>
      <section className="contact-us">
        <div className="row">
          <div className="contact-col">
            <div>
              <FontAwesomeIcon icon={faHome} className="icon" />
              <span>
                <h5>C/O Block No. 9 Government Engineering College Sector-28</h5>
                <p>Gandhinagar, Gujarat - 382028, India</p>
              </span>
            </div>

            <div>
              <FontAwesomeIcon icon={faPhone} className="icon" />
              <span>
                <h5>+91-7929750281<br></br>
                 +91-8849303883</h5>
              </span>
            </div>

            <div>
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
              <span>
                <h5>administration@iiitvadodara.ac.in</h5>
                <p>Email us Your query</p>
              </span>
            </div>
          </div>

          <div className="contact-col">
            <form action="">
              <input type="text" placeholder="Enter your name" required />
              <input type="email" placeholder="Enter email address" required />
              <input type="text" placeholder="Enter your subject" required />
              <textarea rows="8" placeholder="Message" required></textarea>
              <button type="submit" className="hero-btn red-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactComponent;
