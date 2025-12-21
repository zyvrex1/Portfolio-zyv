// src/components/Hero.jsx
import { useNavigate, useLocation } from 'react-router-dom';
import "./home.css";

const projects = [
    { title: "Posters", label: "Club promotions, artist features, and event publicity designs.", img: "POSTERMOCKUP.png", },
    { title: "Logo", label: "Brand marks, identity concepts, and business logo designs", img: "LOGOS.png", },
    { title: "Vectors", label: "Custom vector illustrations and scalable graphic assets", img: "vector/vector3.PNG", },
    { title: "Web Designs", label: "Website layouts, landing pages, and user interface concepts", img: "uiux/landingpage.png", },
    { title: "Social Media", label: "Social media graphics, promotional posts, and digital content.", img: "ZUGBAMOCKUP.png", },
    { title: "Print Designs", label: "Professional print materials including menus, documentation, certificates, and apparel graphics", img: "MENUS.png", },

];

const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
    }
};

const services = [
    {
        title: "Poster Design",
        description: "Club and event posters, artist promotions, and social media–ready layouts that grab attention."
    },
    {
        title: "Logo & Brand Identity",
        description: "Custom logos, brand marks, and visual identity systems that reflect your brand’s personality."
    },
    {
        title: "Web Design (UI/UX)",
        description: "Landing pages and website interfaces designed with user experience, layout, and flow in mind."
    },
    {
        title: "Social Media & Digital Content",
        description: "Content-ready graphics, promo materials, and post designs tailored for platforms like Instagram and Facebook."
    },
    {
        title: "Print & Merchandise Design",
        description: "Menus, system manuals, invitations, certificates, and custom t-shirt designs for print and merch."
    },
    {
        title: "Video Editing",
        description: "Short-form and promo video edits with clean transitions, sound sync, and motion graphics for events and social media."
    },
];

function Hero() {


    const navigate = useNavigate();
    return (
        <>
            {/* Section 1 - Hero */}
            <section className="section-one" id="home">
                <div className="hero-container">
                    <div className="hero-content">
                        <h4>
                            Blending bold design with smart social strategy to create content that connects, converts, and elevates your brand
                        </h4>
                        {/* <div className="hero-section-button">
                            <button className="hero-button" onClick={() => navigate('/projects')}>
                                View My Work
                            </button>
                            <button className="hero-button-second" onClick={scrollToContact}>
                                Get in Touch
                            </button>
                        </div> */}
                    </div>
                </div>
            </section>

            {/* Section 2 - About  */}
            <section className="section-two" id="about">
                <div className="about-header">
                    <h4 className="line-title">ABOUT ME</h4>
                </div>

                <div className="about-container">
                    <div className="about-content-wrapper">
                        <div className="about-image">
                            <img src="sablaypic.jpg" alt="Zyvrex John Perez" />
                        </div>
                        <div className="about-text">
                            <p className="regular-body-text">
                                I’m a 22-year-old Social Media Marketing Specialist and Freelance Graphic Designer with a strong background
                                in digital design, content creation, and multimedia. I currently have 4 months of hands-on experience as a
                                Social Media Specialist, managing daily content, audience engagement, and performance analytics, along with
                                1 year and 10 months of freelance experience specializing in club flyers and event promotions.
                            </p>

                            <p className="regular-body-text">
                                My creative journey started in Senior High School (Grade 11) through vector editing and animation, where I
                                first worked with tools like Adobe Photoshop, Illustrator, and Adobe Animate. I later expanded into video
                                editing using CapCut.
                            </p>

                            <p className="regular-body-text">
                                I recently graduated this year as a Cum Laude awardee and was honored as the “BSIT Best Student Digital Artist
                                of the Year.” I’m passionate about creative storytelling, visual branding, and digital marketing.
                            </p>
                        </div>
                    </div>

                    <div className="about-resume-btn">
                        <a href="Perez-Resume.pdf" download className="download-btn">
                            <i className="fas fa-download"></i> Download Resume
                        </a>
                    </div>
                    <div className="about-tools-wrapper">

                        <h3 className="tools-title">TOOLS I USED</h3>

                        <div className="about-tools">

                            <div className="tool-item">
                                <img src="/PS.png" alt="Photoshop" />
                                <p class="small-body-text">Photoshop</p>
                            </div>

                            <div className="tool-item">
                                <img src="/ILLU.png" alt="Illustrator" />
                                <p class="small-body-text">Illustrator</p>
                            </div>

                            <div className="tool-item">
                                <img src="/CANVA.png" alt="Canva" />
                                <p class="small-body-text">Canva</p>
                            </div>

                            <div className="tool-item">
                                <img src="/CAPCUT.png" alt="CapCut" />
                                <p class="small-body-text">CapCut</p>
                            </div>

                            <div className="tool-item">
                                <img src="/FIGMA.png" alt="Figma" />
                                <p class="small-body-text">Figma</p>
                            </div>

                            <div className="tool-item">
                                <img src="/PREMIERE.png" alt="Premiere Pro" />
                                <p class="small-body-text">Premiere Pro</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3 - Skills and Service */}
            <section className="section-three" id="service">
                <div className="service-header">
                    <h4 className="line-title">SERVICES</h4>
                </div>
                <div className="services-offered">
                    {services.map((service, index) => (
                        <div className="service-card" key={index}>
                            <h3>{service.title}</h3>
                            <p className="regular-body-text">{service.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Section 4 - Featured Projects */}
            <section className="section-four" id="projects">
                <div className="projects-header">
                    <h4 className="line-title-center">PROJECTS</h4>
                </div>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div className="project-card" key={index}>
                            <img src={project.img} alt={project.title} />
                            <div className="project-details">
                                <h2>{project.title}</h2>
                                <h4 className="regular-body-text">{project.label}</h4>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="tool-item">
                    <p className="large-body-text">Click here to view all design</p>
                    <a
                        href="https://www.behance.net/vrexperez"target="_blank"rel="noopener noreferrer"className="tool-link">
                        <img src="/BEHANCE.jpg" alt="Illustrator" />
                    </a>
                </div>
            </section>

            {/* Section 5 - Contact */}
            <section className="section-five" id="contact">
                <div className="contact-wrapper">
                    <div className="contact-header">
                        <h2>Get in Touch</h2>
                        <p className="regular-body-text">
                            Interested in working together? Let’s talk about your project.
                        </p>
                    </div>

                    <form
                        className="contact-form"
                        action="https://formspree.io/f/mldlnadw"
                        method="POST"
                    >
                        <label>
                            <span className="small-body-text">Name</span>
                            <input type="text" name="name" placeholder="Your Name" required />
                        </label>

                        <label>
                            <span className="small-body-text">Email</span>
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email Address"
                                required
                            />
                        </label>

                        <label>
                            <span className="small-body-text">Subject</span>
                            <input
                                type="text"
                                name="subject"
                                placeholder="Project Inquiry"
                                required
                            />
                        </label>

                        <label>
                            <span className="small-body-text">Message</span>
                            <textarea
                                name="message"
                                placeholder="Tell me about your project"
                                required
                            ></textarea>
                        </label>

                        <button type="submit" className="send-message-btn">
                            Send Message
                        </button>
                    </form>

                    <div className="contact-info-grid">
                        <div className="info-item">
                            <p className="small-body-text">Email</p>
                            <p className="large-body-text"> zyvrexperez03@gmail.com</p>
                        </div>

                        <div className="info-item">
                            <p className="small-body-text">Phone</p>
                            <p className="large-body-text">+63-981-545-0430</p>
                        </div>

                        <div className="info-item">
                            <p className="small-body-text">Location</p>
                            <p className="large-body-text">
                                #1409 Tulio St. Sta. Rita, Olongapo City, Zambales, 2200
                            </p>
                        </div>

                        <div className="info-item">
                            <p className="small-body-text">Social</p>
                            <div className="contact-socials">
                                <a
                                    href="https://www.instagram.com/behindthezn/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a
                                    href="https://web.facebook.com/behindthezn"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="fa-brands fa-facebook-f"></i>
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/zyvrex-john-perez-670127198/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="fa-brands fa-linkedin-in"></i>
                                </a>
                                <a
                                    href="https://www.behance.net/vrexperez"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="fa-brands fa-behance"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default Hero;
