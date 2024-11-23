import "./Facilities.css";

const Facilities = () => {
  return (
    <section className="facilities">
      <h1>Our Facilities</h1>
      <p>Immerse yourself in a world of exceptional amenities and services.</p>
      <div className="row">
        <div className="facilities-col">
          <img src="/images/iiitvlibrary.jpg" alt="" />
          <h3>Library (DIU Campus)</h3>
          <p>       
          The library at IIIT Vadodara provides a vast collection of books, journals, and digital resources, supporting academic growth and research for students and faculty.
          </p>
        </div>
        <div className="facilities-col">
          <img src="/images/iiitvsports1.jpeg" alt="" />
          <h3>Sports Activities</h3>
          <p>
          IIIT Vadodara offers a wide range of sports activities, encouraging students to engage in physical fitness, teamwork, and healthy competition.
          </p>
        </div>
        <div className="facilities-col">
          <img src="/images/iiitvmess1.jpeg" alt="" />
          <h3>Mess Facilities (DIU Campus)</h3>
          <p>           
          The mess facilities at IIIT Vadodara provide nutritious and diverse meal options, ensuring a comfortable dining experience for students and staff.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
