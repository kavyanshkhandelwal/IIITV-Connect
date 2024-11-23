import "./BlogContent.css";

const BlogContent = () => {
  return (
    <section className="blog-content">
      <div className="row">
        <div className="blog-left">
          <img src="/images/IIIT-Vadodara_img1.jpg" alt="" />
          <h2>E-Learning Resources</h2>
          <p>
          At IIIT Vadodara, we are committed to providing students and faculty with access to diverse e-learning resources that support academic excellence and research. These resources are curated to enhance learning experiences and provide valuable tools for innovation and skill development.
          </p>
          <br />
          <p>   
          Our institute offers access to platforms like Moodle for course management and NPTEL Videos for in-depth lectures by expert faculty from leading institutions. These resources are designed to complement classroom learning and foster independent exploration of advanced topics.            
          </p>
          <br />
          <p>
          For technical and research pursuits, tools like MATLAB Online, the IIITV Library Catalogue (OPAC), and Shodhganga provide access to software, literature, and academic theses. These platforms enable students to deepen their technical expertise and contribute to scholarly work.
          </p>
          <br />
          <p>
          To broaden learning horizons, IIIT Vadodara also connects students to the National Digital Library of India, World eBook Library, Open Access Journals, and FOSSEE for free and open-source software education. Resources like IRINS and Paramshavak further support research and computational needs, ensuring a comprehensive learning ecosystem.
          </p>

          <div className="comment-box">
            <h3>Leave a comment</h3>
            <form className="comment-form">
              <input type="text" placeholder="Enter Name" />
              <input type="email" placeholder="Enter Email" />
              <textarea rows="5" placeholder="Your comment"></textarea>
              <button type="submit" className="hero-btn red-btn">
                POST COMMENT
              </button>
            </form>
          </div>
        </div>

        <div className="blog-right">
          <h3></h3>
          <div>
            <span>Moodle</span>
          </div>
          <div>
            <span>NPTEL Videos</span>
          </div>
          <div>
            <span>Matlab Online</span>
          </div>
          <div>
            <span>IIITV Library Catalogue(OPAC)</span>
          </div>
          <div>
            <span>Shodhganga : a reservoir of Indian theses</span>
          </div>
          <div>
            <span>National Digital Library of India</span>
          </div>
          <div>
            <span>World eBook Library</span>
          </div>
          <div>
            <span>Open Access Journals</span>
          </div>
          <div>
            <span>Free/Libre and Open Source Software for Education(FOSSEE)</span>
          </div>
          <div>
            <span>Indian Research Information Network System(IRINS)</span>
          </div>
          <div>
            <span>Paramshavak</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogContent;
