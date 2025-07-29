import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about-wrapper">
      <div className="about-container">
        {/* Profile Card */}
        <div className="profile-card">
          <div className="intro">
            <img src="/src/assets/sablaypic.jpg" alt="Profile" className="profile-image" />
            <h2>Zyvrex John R Perez</h2>
            <p className="large-body-text">Graphic Designer</p>

             <a href="/src/assets/RESUME_PEREZ.pdf" download className="download-btn">
        <i className="fas fa-download"></i> Download Resume
      </a>
          </div>

          <div className="contact-info">
            <p className="regular-body-text">
              <i className="fas fa-envelope icon"></i> zyvrexperez03@gmail.com
            </p>
            <p className="regular-body-text">
              <i className="fas fa-phone icon"></i> +63-981-545-0430
            </p>
          </div>

          <div className="social-icons">
            <a href="https://web.facebook.com/zyvrexperez1103"><i className="fab fa-facebook"></i></a>
            <a href="https://www.linkedin.com/in/zyvrex-john-perez-670127198/"><i className="fab fa-linkedin"></i></a>
            <a href="https://www.instagram.com/zyvrexperez1103/"><i className="fab fa-instagram"></i></a>
            <a href="https://www.behance.net/vrexperez"><i className="fab fa-behance"></i></a>
          </div>
        </div>

        {/* About Me and Skills */}
        <div className="details-card">
          <h2>📖 About Me</h2>
          <p className="regular-body-text">
            I'm a graphic designer with 1 year of experience creating visually compelling designs across multiple platforms.
            I specialize in creating posters, logos, UI/UX designs, tickets, banners, and tarpaulins that communicate clear messages while maintaining aesthetic appeal.
          </p>
          <p className="regular-body-text">
            My approach combines strong typography skills, thoughtful layout design, and color theory to create designs that are both functional and visually striking.
            I also have experience with video editing, allowing me to deliver comprehensive visual solutions for diverse client needs.
          </p>
          <p className="regular-body-text">
            I believe in the power of design to turn ideas into meaningful experiences that connect with people and deliver real results.
            When I'm not designing, I’m usually online exploring new design trends, techniques, and inspiration to constantly grow and sharpen my creative skills.
          </p>

          {/* Skills Section */}
          <div className="skills">
            <h2>💻 Design Skills</h2>
            <div className="skills-section">
              <div>
                <h3>Design Software</h3>
                <span className="tag purple">Adobe Photoshop</span>
                <span className="tag purple">Adobe Illustrator</span>
                <span className="tag purple">Figma</span>
                <span className="tag purple">Canva</span>
                <span className="tag purple">Adobe Premiere Pro</span>
                <span className="tag purple">Capcut</span>
              </div>
              <div>
                <h3>Design Focus</h3>
                <span className="tag blue">Poster Design</span>
                <span className="tag blue">Logo</span>
                <span className="tag blue">UI/UX</span>
                <span className="tag blue">Tarpaulin</span>
                <span className="tag blue">Banner</span>
                <span className="tag blue">Ticket</span>
              </div>
              <div>
                <h3>Other Core Skills</h3>
                <span className="tag green">Video Editing</span>
                <span className="tag green">Colour Theory</span>
                <span className="tag green">Typography</span>
                <span className="tag green">Layout Design</span>
                <span className="tag green">Front-End Developer</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Work Experience, Education, Certifications */}
      <div className="info-grid">
        {/* Work Experience */}
        <div className="info-section">
          <h2><i className="fas fa-briefcase icon-heading"></i> Work Experience</h2>

          <div className="timeline-item">
            <h3>Multimedia/Graphic Designer</h3>
            <p className="large-body-text">Geveria Enterprise</p>
            <p className="regular-body-text">2022</p>
            <p className="small-body-text">Design and produce visual content such as teaser videos,
              product and promotional posters, t-shirt graphics, and ID layouts to
              support branding and marketing efforts</p>
          </div>

          <div className="timeline-item">
            <h3>Graphic Designer</h3>
            <p className="large-body-text">2200 SuperClub</p>
            <p className="regular-body-text">2024 – 2025</p>
            <p className="small-body-text">Create visual concepts for clients across various industries. Design posters, logos, banners, and UI/UX elements. Collaborate with marketing team to develop cohesive brand identities.</p>
          </div>

          <div className="timeline-item">
            <h3>Graphic Designer</h3>
            <p className="large-body-text">2200 SuperClub | Arirang Wave SuperClub | Barcelona Sports & Bar | M-Empire SuperClub | Club22 SuperClub</p>
            <p className="regular-body-text">2025</p>
            <p className="small-body-text">I create Poster, Logo, Tarpaulin and Ticket for this various club in the same year</p>
          </div>
        </div>

        {/* Education + Certifications */}
        <div className="info-section">
          <h2><i className="fas fa-graduation-cap icon-heading"></i> Education</h2>

          <div className="timeline-item">
            <h3>Mabayuan Senior High School</h3>
            <p className="large-body-text">Information and Communication Technology (ICT)</p>
            <p className="regular-body-text">2019 - 2021</p>
            <p className="small-body-text">Our track focuses in Animation (Grade11) and Technical
              Drafting (Grade 12) also there, I also graduated with High Honor</p>
          </div>

          <div className="timeline-item">
            <h3>Gordon College</h3>
            <p className="large-body-text">Bachelor of Science in Information Technology (BSIT)</p>
            <p className="regular-body-text">2021 - 2025</p>
            <p className="small-body-text"> Graduated Cum Laude and recognized as Best Digital Artist of the
              Year, specializing in UI/UX design. Handling strong creative
              and technical skills through various academic and design projects.</p>
          </div>

          {/* Certifications */}
          <h2><i className="fas fa-certificate icon-heading"></i> Certifications</h2>
          <ul className="cert-list">
            <li><span className="dot green"></span> <strong>BSIT Best Digital Artist of the Year</strong><br />Gordon College • 2025</li>
            <li><span className="dot green"></span> <strong>Cum Laude</strong><br />Gordon College • 2025</li>
            <li><span className="dot green"></span> <strong>CCS Week 2025 Shortfilm Overall Champion (Director)</strong><br />Gordon Collegenstitute • 2025</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
