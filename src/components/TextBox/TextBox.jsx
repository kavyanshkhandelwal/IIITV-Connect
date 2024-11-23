import { Link } from "react-router-dom";

import "./TextBox.css";

const TextBox = () => {
  return (
    <div className="text-box">
      <h2>Indian Institute of Information Technology Vadodara</h2>
      <br />
      <h3>भारतीय सूचना प्रोद्योगिकी संस्थान वडोदरा</h3>
      <br />
      <Link to="/" className="hero-btn">
        Visit us To Know More
      </Link>
    </div>
  );
};

export default TextBox;
