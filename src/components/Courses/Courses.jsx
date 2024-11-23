import "./Courses.css";

const Courses = () => {
  return (
    <section className="course">
      <h1>Courses We Offer</h1>
      <p>
        Explore our diverse range of courses designed to enhance your learning
        experience.
      </p>
      <div className="row">
        <div className="course-col">
          <h3>BTech</h3>
          <img src="images/iiitvcourse1.jpg" alt="" />
          <p>
          The <strong>B.Tech</strong> in <strong>Computer Science and Engineering (CSE)</strong> and in <strong>Information Technology (IT)</strong> provide strong foundations in computer science, engineering, and technology. <strong>CSE</strong> covers computer science, electronics, and engineering, with early computing courses and later broader engineering topics, including IT workshops and interdisciplinary courses.<br></br> <strong>IT</strong> focuses on computer networks, data communication, cloud computing, and information systems, combining software and hardware aspects. Both programs bridge academia and industry, equipping students with the skills for successful careers in the rapidly evolving tech field.
          </p>
        </div>
        <div className="course-col">
          <h3>MTech</h3>
          <img src="images/iiitvcourse3.jpg" alt="" />
          <p>
          The <strong>M.Tech</strong> in <strong>Computer Science & Engineering</strong> program is designed to provide advanced coursework along with a minor and major project, allowing students to specialize in key areas of computer science. For those interested in a research-oriented career, the program offers the option to substitute the projects with a year-long thesis.
          The first semester focuses on building a solid foundation in computer science, introducing students to the learning philosophy and pedagogical approach at IIIT, Vadodara. In the following semesters, students can choose to specialize in one or more areas of computer science, including <strong>Artificial Intelligence</strong> and <strong>Data Science</strong>, with a strong emphasis on practical application and cutting-edge research in these fields.
          </p>
        </div>
        <div className="course-col">
          <h3>PhD</h3>
          <img src="images/iiitvcourse2.jpg" alt="" />
          <p>
          IIIT Vadodara offers a <strong>PhD</strong> programme <strong>(full-time/part-time)</strong> at both campuses <strong>(Gandhinagar & ICD)</strong> for students/professionals who wish to conduct, manage or interpret research in academic, industry or government settings. This degree certifies credible completion of an approved program of advanced study in addition to a research thesis of high quality based on original research. Program comprises one/two semesters of intensive course work (optional for part-time), followed by a minimum of two-four years of research. Students are expected to demonstrate excellence in the research area via quality publications/completion of projects. 
          </p>
        </div>
      </div>
    </section>
  );
};

export default Courses;
