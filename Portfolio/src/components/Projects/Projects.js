import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import custapp from "../../Assets/Projects/CustOS.png";
import custdash from "../../Assets/Projects/custos admin.png";
import ciplagent from "../../Assets/Projects/cipl.png"
import ams from "../../Assets/Projects/AMS.png"
import tindog from "../../Assets/Projects/tindog.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={custapp}
              isBlog={false}
              title="CustOs"
              description="A powerful windows application for corporate & Govt Body to monitor there system, Application Sends Crucial data in some interval record each changes track system location, track system offline & online status. Create Tickets, Comes With Great ChatBot and More On."
              ghLink="https://github.com/akasharya044/custosagent.git"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={custdash}
              isBlog={false}
              title="CustOs Dashboard"
              description="Admin Dashboard For CustOs Agent to monitor each system, Generate report for following like hardware, software background activity , execute commands broadcast messages and more on."
              ghLink="https://github.com/akasharya044/custosdashboard.git"
              //demoLink="http://65.2.100.52:1052"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ams}
              isBlog={false}
              title="Attendance Management System"
              description="An ERP for School& College to Maintain the record of attendance , result , exam scheduled , embedded with 3 admin panels for Teacher , admin , and student, and one more super admin who has right to create admin or add any other user, made on React js , node js."
              ghLink="https://github.com/akasharya044/AMS.git"
              demoLink="https://ams-ebon.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ciplagent}
              isBlog={false}
              title="ONGC Agent"
              description="A ticket system application made for ONGC (oil&Natural gas company) for generating tickets for their employees across in INDIA more than 15000 employee use this to generate ticket and increase the IT support"
              ghLink="https://github.com/akasharya044/ONGCAPP.git"
              //demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tindog}
              isBlog={false}
              title="Tindog"
              description="My First Ever webpage to Show my love toward Dog, a beautiful webpage for dog like a tinder that's why it called tindog"
              ghLink="https://github.com/akasharya044/Tindog.git"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
