import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import profile from "../../Assets/profile.jpeg";
import Tilt from "react-parallax-tilt";
import "./homestyle.css";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
//import { FaSquareUpwork } from "react-icons/fa6";
import { SiFreelancer } from "react-icons/si";
import About from "../About/About";
import { CgMail } from "react-icons/cg";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              About <span className="purple"> Me </span>
            </h1>
            <p className="home-about-body">
              Versatile Software Developer skilled in React, Blazor, JavaScript,
              .NET Core, and Minimal APIs. Proficient in Windows Application
              Development and MySQL, Express JS. Experienced in Linux and
              Windows troubleshooting, with expertise in React.js and Node.js.
              Ready to contribute a diverse skill set to innovative projects .
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> C#, Javascript and C++. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">
                  Web Technologies and Software Development{" "}
                </b>{" "}
                and also in areas related to{" "}
                <b className="purple">CyberSecurity.</b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={profile}
                className="img-fluid profilepic"
                alt="avatar"
              />
            </Tilt>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/akasharya044"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/mr_cybro?s=21"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/akash044"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/heyim_akash"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.upwork.com/freelancers/~019fa52516f7718a1d"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <SiFreelancer />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <a
          className="btn-12"
          href="https://www.upwork.com/freelancers/~019fa52516f7718a1d"
        >
          <span>HIRE</span>
        </a>

        <a className="btn-12" href="mailto:imakash585@gmail.com">
          
          <span>MAIL</span>
        </a>
      </Container>
    </Container>
  );
}
export default Home2;
