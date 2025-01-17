import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Nyaine Chan Myint </span>
            from <span className="purple"> Yangon, Myanmar.</span>
            <br />I am a System Administrator at Myanmar APN Co.,Ltd and who learning to become DevOps Engineer.
            <br />
            <br />
            Apart from my job, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Football
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Hard Work always pays off!"{" "}
          </p>
          //<footer className="blockquote-footer">He</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
