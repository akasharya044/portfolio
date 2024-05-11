import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Akash Kumar </span>
            from <span className="purple"> Bihar, India.</span>
            <br />I am currently employed as a software developer at{" "}
            <span className="purple">Rikarena Consultancy Pvt.Ltd</span>
            <br />I have completed BCA at{" "}
            <span className="purple">
              St.Xavier's College of Management & Technology Patna,<br></br>
            </span>
            Currently pursing MCA from{" "}
            <span className="purple">Lovely Professional University.</span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Online Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Anime
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Akash</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
