import "./Testimonials.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h1>What Our Student Says</h1>
      <p>
        Discover what our students have to say about their transformative
        experiences.
      </p>
      <div className="row">
        <div className="testimonial-col">
          <img src="/images/student2-transformed.jpeg" alt="" />
          <div>
            <p>
            "IIIT Vadodara laid the foundation for my entrepreneurial journey. The supportive faculty and a curriculum emphasizing practical knowledge gave me the skills to build my educational platform, <strong><em>Next Toppers</em></strong>. The vibrant student community and opportunities to collaborate made learning an enriching experience. I’m proud to call myself an alumnus of this institution that fosters innovation and excellence."
            </p>
            <h3>Shobhit Nirwan</h3>
            <div className="stars">
              {[...Array(4)].map((_, i) => (
                <FontAwesomeIcon
                  key={i}
                  icon={faStar}
                  className="filled-star"
                />
              ))}
              <FontAwesomeIcon icon={faStar} className="empty-star" />
            </div>
          </div>
        </div>

        <div className="testimonial-col">
          <img src="/images/student3.jpeg" alt="" />
          <div>
            <p>
            "As a pre-final year student, I’ve been fortunate to explore my passion for AI and robotics through the well-rounded programs offered here. The supportive peer network, hands-on labs, and workshops have allowed me to grow both technically and personally. IIIT Vadodara has given me a platform to dream big and work hard towards achieving my goals."
            </p>
            <h3>Tushant Akar</h3>
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <FontAwesomeIcon
                  key={i}
                  icon={faStar}
                  className="filled-star"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
