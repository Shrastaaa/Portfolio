import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
// import { ParallaxProvider, } from 'react-scroll-parallax';
import HorizontalContainer from './Horizontol.js'

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple"> Works </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Serophero"
              description="Developed an app to verify local news and events, incorporating in-app chat, payment functionalities, and a community blacklist system. Added a suggestion box with profane detection using NLTK. Technologies: Flutter, Django REST, Postgres, React, Firebase, AI."
              ghLink="https://github.com/shrastaniraula/new_serophero.git"
            // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Data Cleaning Project"
              description="Analyzed sales data for ABC Company, focusing on data cleaning, preprocessing, and trend identification. Utilized Pandas, Numpy, Seaborn, and Matplotlib in Jupyter Notebook to derive actionable insights on sales performance and customer behavior."
              ghLink="https://github.com/shrastaniraula/DataCleaning.git"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Pandora"
              description="Created a chatbot to answer questions about mental health using NLTK. This project focused on providing accessible mental health information."
              ghLink="\https://github.com/shrastaniraula/Pandora.git"
              demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>
        </Row>

      </Container>

    </Container>
  );
}

export default Projects;
