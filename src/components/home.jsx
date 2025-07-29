// src/components/Hero.jsx
import { useNavigate, useLocation } from 'react-router-dom';
import "./home.css";

const projects = [
    { title: "Club22 Logo", label: "Logo", img: "/assets/logo/CLUB22LOGO.png", },
    { title: "Ace", label: "Vector Art", img: "/src/assets/vector/vector (1).jpg", },
    { title: "Hellmerry", label: "Poster", img: "/src/assets/poster/HELLMERRY.png", },
    { title: "Ako Si Mon", label: "Poster", img: "/src/assets/poster/AKOSIMON.png", },
    { title: "2200 Soiree Sabadope", label: "Poster", img: "/src/assets/poster/2200.png", },
    { title: "Arnel Bico Sports Poster", label: "Poster", img: "/src/assets/poster/arnelbico.png", },
    { title: "StreetWear Landing Page", label: "UI/UX", img: "/src/assets/uiux/landingpage.png", },
    { title: "Acadmark Login Page", label: "UI/UX", img: "/src/assets/uiux/loginpage.png", },
    { title: "Maintenance Manual Cover", label: "Typography", img: "/src/assets/typo/MAINTENANCE.png", },
    { title: "Club22 Promo Tarpaulin", label: "Typography", img: "/src/assets/typo/club22-typo.png", },

];

const scrollToContact = () => {
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
};

function Hero() {

    
    const navigate = useNavigate();
    return (
        <>
            {/* Section 1 - Hero */}
            <section className="section-one" id="home">
                <div className="hero-container">
                    <div className="hero-content">
                        <h1>
                            Creative<br />
                            <span style={{ color: '#6B7280' }}>Graphic Designer</span>
                        </h1>
                        <h3>
                            Turning concepts into eye-catching graphics that vibe with your audience and elevate your brand.
                        </h3>
                        <div className="hero-section-button">
                            {/* Buttons with onClick to scroll or link */}
                            <button className="hero-button" onClick={() => navigate('/projects')}>
                                View My Work
                            </button>
                           <button className="hero-button-second" onClick={scrollToContact}>
  Get in Touch
</button>
                        </div>
                    </div>

                    <div className="hero-image">
                        <img src="/src/assets/ZYV.png" alt="Designer Illustration" />
                    </div>
                </div>
            </section>

            {/* Section 2 - Featured Projects */}
            <section className="section-two" id="projects">
                <h2>Featured Projects</h2>
                <p className="regular-body-text">
                    A highlight reel of my favorite creative drops — from posters to prototypes and everything in between.
                </p>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div className="project-card" key={index}>
                            <img src={project.img} alt={project.title} />
                            <div className="project-details">
                                <h4>{project.title}</h4>
                                <p className="regular-body-text">{project.label}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="see-more">
                    <button className="see-more-btn" onClick={() => navigate('/projects')}>See More Project</button>
                </div>
            </section>

            {/* Section 3 - About Me */}
            <section className="section-three" id="about">
                <div className="about-container">

                    <div className="about-image">
                        <img src="/src/assets/sablaypic.jpg" alt="Designer Illustration" />
                    </div>
                    <div className="about-content">
                        <div className="about-header">
                            <h2>About Me</h2>
                        </div>
                        <div className="about-subtitle">
                            <p className="regular-body-text">
                                I’m Zyvrex John Perez — a graphic designer with 2 years of experience turning
                                ideas into visuals that actually hit, helping brands and businesses stand out across
                                different industries.
                            </p>
                            <p className="regular-body-text">
                                I mix strategy with creativity — making sure every design not only looks good but
                                also hits the mark and gets the message across.
                            </p>
                            <p className="regular-body-text">
                                I believe in the power of design to turn ideas into meaningful experiences that
                                connect with people and deliver real results. When I'm not designing, I’m usually
                                online exploring new design trends, techniques, and inspiration to constantly grow
                                and sharpen my creative skills.
                            </p>
                        </div>
                        <div className="about-grid">
                            <div>
                                <h3>Education</h3>
                                <p className="regular-body-text"><strong>BS Information Technology</strong><br />
                                    Gordon College<br />
                                    Cum Laude<br />
                                    Best BSIT Digital Artist of the Year</p>
                            </div>
                            <div>
                                <h3>Experience</h3>
                                <p className="regular-body-text"><strong>Graphic Designer</strong><br />
                                    2200 SuperClub<br />
                                    2024 - 2025</p>
                            </div>
                        </div>

                        <div className="about-buttons">
                            <button className="btn-outline"  onClick={() => navigate('/about')}>See More</button>
<button className="btn-solid" onClick={scrollToContact}>
  Let’s Work Together
</button>                        </div>
                    </div>


                </div>
            </section>

            {/* Section 4 - Skills and Service */}
            <section className="section-four" id="service">
                <div className="skill-header">
                    <h2>Skills & Service</h2>
                    <p className="regular-body-text">My diverse skill set and specialized services to help bring your creative vision to life.</p>
                </div>

                <div className="skills-container">
                    <div className="skills-column">
                        <h3>Design</h3>
                        <ul>
                            <li>Posters</li>
                            <li>Logo</li>
                            <li>UI/UX</li>
                            <li>Tarpaulin</li>
                            <li>Banner</li>
                            <li>Ticket</li>
                        </ul>
                    </div>
                    <div className="skills-column">
                        <h3>Software</h3>
                        <ul>
                            <li>Adobe Photoshop</li>
                            <li>Adobe Illustrator</li>
                            <li>Canva</li>
                            <li>Figma</li>
                            <li>Adobe Premier Pro</li>
                            <li>Capcut</li>
                        </ul>
                    </div>
                    <div className="skills-column">
                        <h3>Additionals</h3>
                        <ul>
                            <li>Video Editing</li>
                            <li>Colour Theory</li>
                            <li>Typography</li>
                            <li>Layout Design</li>
                            <li>Front-End Development</li>
                        </ul>
                    </div>
                </div>

                <div className="service-header">
                    <h2>Service Offered</h2>
                </div>
                <div className="services-offered">
                    <div className="service-card">
                        <h3>Brand Identity</h3>
                        <p className="regular-body-text">Creating cohesive logos and visual systems that reflect your brand’s personality and connect with your audience.</p>
                    </div>
                    <div className="service-card">
                        <h3>UI/UX Design</h3>
                        <p className="regular-body-text">Designing user-friendly interfaces and web layouts using Figma and Photoshop — focused on functionality and flow.</p>
                    </div>
                    <div className="service-card">
                        <h3>Visual Design (Print & Digital)</h3>
                        <p className="regular-body-text">Designing impactful visuals for both print and digital platforms — including posters, banners, tarpaulins, manuals, social media graphics, and promotional content.</p>
                    </div>
                    <div className="service-card">
                        <h3>Video Editing</h3>
                        <p className="regular-body-text">Editing short-form and promo videos with clean transitions, sound sync, and motion — perfect for social media, clubs, and events.</p>
                    </div>
                </div>
            </section>

            {/* Section 5 - Contact */}
            <section className="section-five" id="contact">
                <div className="contact-header">
                    <h2>Get in Touch</h2>
                    <p className="regular-body-text">Interested in working together? Let's discuss your project and bring your vision to life.</p>
                </div>
                <div className="contact-container">
                    {/* Contact Form */}

                    <div className="contact-form">
                        <form action="https://formspree.io/f/mldlnadw" method="POST">
                            <span className="small-body-text">Name</span>
                            <input type="text" name="name" placeholder="Your Name" required />

                            <span className="small-body-text">Email</span>
                            <input type="email" name="email" placeholder="Your Email Address" required />

                            <span className="small-body-text">Subject</span>
                            <input type="text" name="subject" placeholder="Project Inquiry" required />

                            <span className="small-body-text">Message</span>
                            <textarea name="message" placeholder="Tell me about your project" required></textarea>

                            <button type="submit" className="send-message-btn">Send Message</button>
                        </form>

                    </div>

                    {/* Contact Information */}
                    <div className="contact-info">
                        <h3>Contact Information</h3>
                        <div className="contact-detail">
                            <span class="material-symbols-outlined">
                                mail
                            </span>
                            <div className="info">
                                <p className="small-body-text">Email:</p>
                                <a href="mailto:zyvrexperez03@gmail.com" className="small-body-text">zyvrexperez03@gmail.com</a>
                            </div>

                        </div>
                        <div className="contact-detail">
                            <span class="material-symbols-outlined">
                                call
                            </span>
                            <div className="info">
                                <p className="small-body-text">Phone:</p>
                                <a href="tel:+639815450430" className="small-body-text">+63-981-545-0430</a>
                            </div>

                        </div>
                        <div className="contact-detail">
                            <span class="material-symbols-outlined">
                                location_on
                            </span>
                            <div className="info">
                                <p className="small-body-text">Location:</p>
                                <p className="small-body-text">#1409 Tulio St. Sta. Rita, Olongapo City, Zambales, 2200</p>
                            </div>

                        </div>

                        {/* Social Links */}
                        <div className="social-header">
                            <p className="small-body-text">Connect with me</p>
                        </div>
                        <div className="social-links">
                            <a href="https://www.instagram.com/zyvrexperez1103/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
                            <a href="https://web.facebook.com/zyvrexperez1103" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-facebook-f"></i></a>
                            <a href="https://www.linkedin.com/in/zyvrex-john-perez-670127198/" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin-in"></i></a>
                            <a href="https://www.behance.net/vrexperez" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-behance"></i></a>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Hero;
