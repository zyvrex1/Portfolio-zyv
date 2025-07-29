import "./footer.css";
import { useNavigate } from 'react-router-dom';

function Footer() {

  const navigate = useNavigate();

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h2>ZYV</h2>
          <p className="small-body-text">Creating impactful designs since 2022</p>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h3>Navigation</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/about">About</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Services</h3>
            <ul>
              <li>Brand Identity</li>
              <li>Visual Design (Print & Digital)</li>
              <li>UI/UX Design</li>
              <li>Video Editing</li>
            </ul>
          </div>
        </div>
      </div>

      <hr className="footer-divider" />

      <div className="footer-bottom">
        <p className="small-body-text">© 2025 ZYV. All rights reserved.</p>
        <p className="small-body-text"> Designed and developed with passion</p>
      </div>
    </footer>
  );
};
export default Footer;
