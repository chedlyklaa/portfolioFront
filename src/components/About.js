const About = () => {
  return (
    <div className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>I'm a Software Engineering student at Higher Institute of Art and Multimedia Manouba, with a strong background in computer science and multimedia. Currently working as a Software Developer at Saydalid, I bring expertise in both front-end and back-end development.</p>
          
          <div className="education">
            <h3>Education</h3>
            <ul>
              <li>Software Engineering - Higher Institute of Art and Multimedia Manouba (2023 - Present)</li>
              <li>Bachelor's in Computer Science and MultiMedia - ISAMM (2020 - 2023)</li>
            </ul>
          </div>

          <div className="skills">
            <h3>Technical Skills</h3>
            <div className="skills-grid">
              <div className="skill-category">
                <h4>Languages</h4>
                <ul>
                  <li>JavaScript</li>
                  <li>Python3</li>
                  <li>Java</li>
                  <li>C++/C/C#</li>
                  <li>HTML/CSS</li>
                  <li>SQL</li>
                </ul>
              </div>
              <div className="skill-category">
                <h4>Frameworks & Tools</h4>
                <ul>
                  <li>React</li>
                  <li>Node.js</li>
                  <li>Angular</li>
                  <li>Spring Boot</li>
                  <li>MongoDB</li>
                  <li>MySQL</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="languages">
            <h3>Languages</h3>
            <ul>
              <li>Arabic - Native</li>
              <li>English - B2</li>
              <li>French - Intermediate</li>
              <li>German - Beginner</li>
            </ul>
          </div>

          <div className="achievements">
            <h3>Extra-Professional</h3>
            <ul>
              <li>President at ISAMM Microsoft Club (2021-2022)</li>
              <li>Athlete-Rower in Tunisian para-rowing team</li>
              <li>Participated in World Championship Bulgaria 2018 and African Championship 2021</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;