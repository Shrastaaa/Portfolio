import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      {/* <Particle /> */}
      <Container>
        <Row style={{ justifyContent: "center" }}>
          <Col
            md={9}
            style={{
              marginTop: "0px",
              justifyContent: "center",
              paddingTop: "0px",
              paddingBottom: "20px",
              display: "flex"
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "0px" }}>
              About <strong className="purple">Me</strong>
            </h1>
          </Col>

        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col xs={4} md={12} className="about-card-box">
            {/* <Aboutcard /> */}
            <p style={{ padding: "8px" }}>
              Hi Everyone, I am <span className="purple">Shrasta Niraula </span>
              from <span className="purple"> Biratnagar, Nepal. </span>
              Having completed my Bachelors in Computer Science, I am currently working towards honing my skills in AI and Data Science. I enjoy learning about new algorithms and tinkering my way into them. I also enjoy backend development especially from Django and mobile development through Flutter.
              <br />
              Apart from coding, I mostly spend my time reading books, writing, doodling and watching mind ravelling movies.
            </p>


            <p style={{ color: "rgb(155 126 172)" }}>
              "You'll never know what lies in the other side unless you decide to cross the bridge!"{" "}
            </p>
            <footer className="blockquote-footer">Shrasta</footer>

          </Col>
        </Row>
        <Techstack />
        {/* <Github /> */}
      </Container>
    </Container>
  );
}

export default About;
