import React from "react";
import linkedin from "../../images/linkedin.svg";
import github from "../../images/github.svg";
import myphoto from "../../images/myphoto.jpg";
import Header from "../Header/Header";

function About(props) {
  const openLinkedInProfile = () => {
    window.open("https://www.linkedin.com/in/stephany-acosta/", "_blank");
  };

  const openGithubProfile = () => {
    window.open("https://github.com/snag2003", "_blank");
  };

  return (
    <>
      <Header onLogout={props.handleLogout} />
      <div className="about">
        <div className="about__pic-container">
          <img className="about__pic" src={myphoto} alt="foto del creador" />
        </div>
        <div className="about__text">
          <p className="about__text__intro">Hola Soy</p>
          <h1 className="about__name">Stephany Acosta</h1>
          <p className="about__role">Full Stack Developer</p>
          <div id="about__socials-container">
            <img
              src={linkedin}
              alt="My LinkedIn profile"
              className="icon"
              onClick={openLinkedInProfile}
            />
            <img
              src={github}
              alt="My Github profile"
              className="icon"
              onClick={openGithubProfile}
            />
          </div>
        </div>

        <div className="about__details-containers">
          <div className="about__details-container">
            <h3>Experiencia</h3>
            <ul className="about__details-experience">
              <li className="about__details-experience-element">HTML</li>
              <li className="about__details-experience-element">CSS</li>
              <li className="about__details-experience-element">JavaScript</li>
              <li className="about__details-experience-element">React</li>
              <li className="about__details-experience-element">DOM</li>
              <li className="about__details-experience-element">POO</li>
              <li className="about__details-experience-element">Github</li>
              <li className="about__details-experience-element">
                Google Cloud Server
              </li>
              <li className="about__details-experience-element">Domain</li>
              <li className="about__details-experience-element">API</li>
              <li className="about__details-experience-element">Figma</li>
            </ul>
          </div>
          <div className="about__details-container">
            <h3>Educación</h3>
            <p>Bachelor of Science in Computer Science [En Progreso]</p>
            <p>Bootcamp in Full Stack Web Developer [En Progreso]</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
