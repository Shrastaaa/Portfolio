import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiPython,
  DiGit,
  DiJava,
  DiDart,


} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiPostgresql,
  SiHtml5,

} from "react-icons/si";
import {
  TbBrandDjango, TbBrandCSharp,
  TbBrandFlutter,
} from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      <Col xs={4} md={1} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiHtml5 />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <DiDart />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <TbBrandDjango />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <TbBrandFlutter />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <TbBrandCSharp />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiFirebase />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiRedis />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <DiJava />
      </Col>
    </Row>
  );
}

export default Techstack;
