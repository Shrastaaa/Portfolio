import React, { useRef, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import About from "./../About/About";
import Projects from "./../Projects/Projects";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Type from "./Type";
import { useLocation } from "react-router-dom";

function Home() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const homeRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#about") {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (location.hash === "#projects") {
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (location.hash === "#home") {
      homeRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <section ref={homeRef}>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={5} style={{ paddingBottom: 0 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "750px" }}
              />
            </Col>
            <Col md={7} className="home-header">
              <h6 style={{ paddingBottom: 15 }} className="heading">
                Hi There!
              </h6>
              <h3 className="heading-name">
                I'M
                <strong className="main-name"> SHRASTA NIRAULA</strong>
              </h3>
              <div style={{ paddingLeft: 45, textAlign: "left" }}>
                <Type />
              </div>
              <div style={{ paddingLeft: 45, textAlign: "left" }} className="fork-btn">
                <Button
                  href="https://github.com/soumyajit4419/Portfolio"
                  target="_blank"
                  className="fork-btn-inner"
                >
                  Contact me
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <section ref={aboutRef} className="about-home-section">
        <About />
      </section>
      <section ref={projectsRef} className="projects-home-section">
        <Projects />
      </section>
    </section>
  );
}

export default Home;
