import './projects.css';
import heroBG from '../assets/ZYV-LOGO.png';
import { useState } from 'react';

const posters = [
    { title: 'Haring Manggi', image: '/src/assets/poster/POSTER1.png' },
    { title: 'Hellmerry', image: '/src/assets/poster/HELLMERRY.png' },
    { title: 'Ako Si Mon', image: '/src/assets/poster/AKOSIMON.png' },
    { title: 'Arnel Bico Sports Poster', image: '/src/assets/poster/arnelbico.png' },
    { title: 'Sta.Rita SK', image: '/src/assets/poster/STARITASK.png' },
    { title: 'Club22', image: '/src/assets/poster/CLUB22.png' },
    { title: '2200 Superclub', image: '/src/assets/poster/2200.png' },
    { title: 'Empire x 2200 As One', image: '/src/assets/poster/EMPIRE.png' },
    { title: 'Arirang Wave', image: '/src/assets/poster/ARIRANGWAVE.png' },
    { title: 'Barcelona Sports & Bar', image: '/src/assets/poster/BARCELONA.png' },
];


const logoDesigns = [
    { title: 'Le Astrid', image: '/src/assets/logo/jana.png' },
    { title: 'GrooveTech Logo', image: '/src/assets/logo/GROOVETECH.jpg' },
    { title: 'BRGY. Sta. Rita Fiesta 2025', image: '/src/assets/logo/fiestalogo.png' },
    { title: 'Optitock Logo(Capstone)', image: '/src/assets/logo/capstonelogo.png' },
    { title: 'Arirang Wave Logo', image: '/src/assets/logo/SIGNAGE1.png' },
    { title: 'Club22 Logo', image: '/src/assets/logo/CLUB22LOGO.png' },
];

const typoDesigns = [
    { title: 'A Snitch', image: '/src/assets/typo/snitch.png' },
    { title: '2200', image: '/src/assets/typo/2200-typo.png' },
    { title: 'Olongapo Artist Showdown', image: '/src/assets/typo/club22-typo.png' },
    { title: 'Food Menu', image: '/src/assets/typo/FOOD-MENU.png' },
    { title: 'Maintenance Manual Cover', image: '/src/assets/typo/MAINTENANCE.png' },
    { title: 'Acadmark Manual Cover', image: '/src/assets/typo/ACADMARK.png' },
];

const uiuxDesigns = [
    { title: 'Streetwear Shop Landing Page', image: '/src/assets/uiux/Frame 2.png' },
    { title: 'Streetwear Shop Landing Page Ver2', image: '/src/assets/uiux/landingpage.png' },
    { title: 'Acadmark Login Page', image: '/src/assets/uiux/Loginpage.png' },
    { title: 'Acadnark Dashboard', image: '/src/assets/uiux/Dashboard.png' },
    { title: 'Maintenance Login Page', image: '/src/assets/uiux/maintelogin.png' },
    { title: 'Maintenance Dashbboard', image: '/src/assets/uiux/mainte-dashboard.png' },
];

const vectorDesigns = [
    { title: 'Zyv', image: '/src/assets/vector/vector (1).png' },
    { title: 'Ace', image: '/src/assets/vector/vector (1).jpg' },
    { title: 'Arjohn', image: '/src/assets/vector/vector (2).jpg' },
    { title: 'Gelido', image: '/src/assets/vector/vector (2).png' },
    { title: 'Earl', image: '/src/assets/vector/vector (3).jpg' },
    { title: 'Nilo', image: '/src/assets/vector/vector (4).jpg' },
];

const videoEdits = [
    { title: 'Gordon College Activity Promotion', video: '/src/assets/video/POG.mp4' },
    { title: 'Ultima Versa Teaser', video: '/src/assets/video/twoway-teaser.mp4' },
];

const isMobile = window.innerWidth <= 768;
const itemsPerPage = isMobile ? 1 : 5;


function Projects() {
    const [posterIndex, setPosterIndex] = useState(0);
    const posterMaxIndex = Math.max(0, posters.length - itemsPerPage);

    // UI/UX section state
    const [logoIndex, setlogoIndex] = useState(0);
    const logoMaxIndex = Math.max(0, logoDesigns.length - itemsPerPage);

    const [typoIndex, settypoIndex] = useState(0);
    const typoMaxIndex = Math.max(0, typoDesigns.length - itemsPerPage);

    const [uiuxIndex, setuiuxIndex] = useState(0);
    const uiuxMaxIndex = Math.max(0, uiuxDesigns.length - itemsPerPage);

    const [vectorIndex, setvectorIndex] = useState(0);
    const vectorMaxIndex = Math.max(0, vectorDesigns.length - itemsPerPage);



    return (
        <>
            {/* Hero Section */}
            <div className="projects-hero">
                <img
                    src={heroBG}
                    alt="Projects Background"
                    className="projects-background"
                />
                <div className="projects-overlay"></div>
                <div className="projects-content">
                    <h1>My Projects</h1>
                    <h3>
                        Explore my latest work and creative solutions. Each project
                        represents a unique challenge and demonstrates my skills in design.
                    </h3>
                </div>
            </div>

            {/* Carousel Section Only */}
            <section className="poster-scroll-section">
                <h2 className="poster-title">Poster Design</h2>
                <p className="regular-body-text">
                    Posters that turn moments into visuals and events into experiences.
                </p>

                <div className="carousel-wrapper">
                    <button
                        className="carousel-btn left"
                        onClick={() => setPosterIndex((prev) => (prev > 0 ? prev - 1 : prev))}
                        disabled={posterIndex === 0}
                    >
                        &#8249;
                    </button>

                    <div className="carousel-track-wrapper">
                        <div
                            className="carousel-track"
                            style={{
                                transform: `translateX(-${(100 / posters.length) * posterIndex}%)`,
                                width: `${(100 / itemsPerPage) * posters.length}%`,
                                transition: 'transform 0.5s ease-in-out',
                            }}
                        >
                            {posters.map((poster, index) => (
                                <div className="carousel-card" key={index}>
                                    <img src={poster.image} alt={poster.title} />
                                    <p className="large-body-text">{poster.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        className="carousel-btn right"
                        onClick={() =>
                            setPosterIndex((prev) => (prev < posterMaxIndex ? prev + 1 : prev))
                        }
                        disabled={posterIndex >= posterMaxIndex}
                    >
                        &#8250;
                    </button>
                </div>
            </section>

            {/* === logo DESIGN SECTION === */}
            <section className="poster-scroll-section">
                <h2 className="poster-title">Logo Design</h2>
                <p className="regular-body-text">
                    Designing marks that tell stories and build brand recognition.
                </p>

                <div className="carousel-wrapper">
                    <button
                        className="carousel-btn left"
                        onClick={() => setlogoIndex((prev) => (prev > 0 ? prev - 1 : prev))}
                        disabled={logoIndex === 0}
                    >
                        &#8249;
                    </button>

                    <div className="carousel-track-wrapper">
                        <div
                            className="carousel-track"
                            style={{
                                transform: `translateX(-${(100 / logoDesigns.length) * logoIndex}%)`,
                                width: `${(100 / itemsPerPage) * logoDesigns.length}%`,
                                transition: 'transform 0.5s ease-in-out',
                            }}
                        >
                            {logoDesigns.map((item, index) => (
                                <div className="carousel-card" key={index}>
                                    <img src={item.image} alt={item.title} />
                                    <p className="large-body-text">{item.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        className="carousel-btn right"
                        onClick={() =>
                            setlogoIndex((prev) => (prev < logoMaxIndex ? prev + 1 : prev))
                        }
                        disabled={logoIndex >= logoMaxIndex}
                    >
                        &#8250;
                    </button>
                </div>
            </section>


            {/* === typoDESIGN SECTION === */}
            <section className="poster-scroll-section">
                <h2 className="poster-title">Typography Design</h2>
                <p className="regular-body-text">
                    Using letterforms to add voice, rhythm, and personality to visuals.
                </p>

                <div className="carousel-wrapper">
                    <button
                        className="carousel-btn left"
                        onClick={() => settypoIndex((prev) => (prev > 0 ? prev - 1 : prev))}
                        disabled={typoIndex === 0}
                    >
                        &#8249;
                    </button>

                    <div className="carousel-track-wrapper">
                        <div
                            className="carousel-track"
                            style={{
                                transform: `translateX(-${(100 / typoDesigns.length) * typoIndex}%)`,
                                width: `${(100 / itemsPerPage) * typoDesigns.length}%`,
                                transition: 'transform 0.5s ease-in-out',
                            }}
                        >
                            {typoDesigns.map((item, index) => (
                                <div className="carousel-card" key={index}>
                                    <img src={item.image} alt={item.title} />
                                    <p className="large-body-text">{item.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        className="carousel-btn right"
                        onClick={() =>
                            settypoIndex((prev) => (prev < typoMaxIndex ? prev + 1 : prev))
                        }
                        disabled={typoIndex >= typoMaxIndex}
                    >
                        &#8250;
                    </button>
                </div>
            </section>

            {/* === ui/ux DESIGN SECTION === */}
            <section className="poster-scroll-section">
                <h2 className="poster-title">UI/UX Design</h2>
                <p className="regular-body-text">
                    Interfaces built for clarity, ease, and human connection.
                </p>

                <div className="carousel-wrapper">
                    <button
                        className="carousel-btn left"
                        onClick={() => setuiuxIndex((prev) => (prev > 0 ? prev - 1 : prev))}
                        disabled={uiuxIndex === 0}
                    >
                        &#8249;
                    </button>

                    <div className="carousel-track-wrapper">
                        <div
                            className="carousel-track"
                            style={{
                                transform: `translateX(-${(100 / uiuxDesigns.length) * uiuxIndex}%)`,
                                width: `${(100 / itemsPerPage) * uiuxDesigns.length}%`,
                                transition: 'transform 0.5s ease-in-out',
                            }}
                        >
                            {uiuxDesigns.map((item, index) => (
                                <div className="carousel-card" key={index}>
                                    <img src={item.image} alt={item.title} />
                                    <p className="large-body-text">{item.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        className="carousel-btn right"
                        onClick={() =>
                            setuiuxIndex((prev) => (prev < uiuxMaxIndex ? prev + 1 : prev))
                        }
                        disabled={uiuxIndex >= uiuxMaxIndex}
                    >
                        &#8250;
                    </button>
                </div>
            </section>

            {/* === Vector DESIGN SECTION === */}
            <section className="poster-scroll-section">
                <h2 className="poster-title">Vector Design</h2>
                <p className="regular-body-text">
                    Clean, scalable illustrations crafted with precision and style.
                </p>

                <div className="carousel-wrapper">
                    <button
                        className="carousel-btn left"
                        onClick={() => setvectorIndex((prev) => (prev > 0 ? prev - 1 : prev))}
                        disabled={vectorIndex === 0}
                    >
                        &#8249;
                    </button>

                    <div className="carousel-track-wrapper">
                        <div
                            className="carousel-track"
                            style={{
                                transform: `translateX(-${(100 / vectorDesigns.length) * vectorIndex}%)`,
                                width: `${(100 / itemsPerPage) * vectorDesigns.length}%`,
                                transition: 'transform 0.5s ease-in-out',
                            }}
                        >
                            {vectorDesigns.map((item, index) => (
                                <div className="carousel-card" key={index}>
                                    <img src={item.image} alt={item.title} />
                                    <p className="large-body-text">{item.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        className="carousel-btn right"
                        onClick={() =>
                            setvectorIndex((prev) => (prev < vectorMaxIndex ? prev + 1 : prev))
                        }
                        disabled={vectorIndex >= vectorMaxIndex}
                    >
                        &#8250;
                    </button>
                </div>
            </section>

            {/* === video DESIGN SECTION === */}
            <section className="poster-scroll-section">
                <h2 className="poster-title">Video Editing</h2>
                <p className="regular-body-text">
                    Capturing moments and telling stories through motion.
                </p>

                <div className="video-section-wrapper">
                    {videoEdits.map((item, index) => (
                        <div className="video-card" key={index}>
                            <video controls>
                                <source src={item.video} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <p className="large-body-text">{item.title}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* === exteension  SECTION === */}
            <section className="more-designs-section">
                <p className="large-body-text">
                    For more designs, you can visit my other designs here</p>
                <a href="https://www.behance.net/vrexperez" target="_blank" rel="noopener noreferrer" className="behance-link">
                    <i className="fab fa-behance behance-icon"></i>
                </a>
            </section>

            <section className="more-videos-section">
                <p className="large-body-text">
                    For more Videos, Click here to see more videos:
                </p>
                <a
                    href="https://drive.google.com/drive/folders/1Kcf_RIkpsvEWjzSd9lG9LD8JPpdP_YtV?usp=sharing"  // Replace with your actual link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="drive-link"
                >
                    <i className="fab fa-google-drive drive-icon"></i>
                </a>
            </section>



        </>
    );
}

export default Projects;
