import '../styles/Home.css';
import profilePhoto from '../assets/chedlyphoto.jpg';

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="model-container">
          <div className="profile-image">
            <img src={profilePhoto} alt="Chedly Klaa" />
          </div>
        </div>
        <div className="hero-section">
          <div className="hero-content">
            <h1>KLAA MOHAMED CHEDLY</h1>
            <h2>Software Engineer</h2>
            <p className="hero-description">Building digital experiences with code</p>
            <div className="social-links">
              <a href="https://github.com/chedlyklaa" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i> GitHub
              </a>
              <a href="https://www.linkedin.com/in/chedly-klaa/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
              <a href="mailto:chedlyklaa11@gmail.com">
                <i className="fas fa-envelope"></i> Email
              </a>
            </div>
            <button className="cta-button">Explore My Work</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;