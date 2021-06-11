import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hola, mi nombre es <span className="purple">David Sélem García</span>, recibido en Ingeniería en Sistemas Computacionales por parte de la <span className="purple"> Universidad Autónoma del Carmen</span>
            <br />Comencé estudiando programación en lenguajes como Java, C#, Python, pero me terminé orientando un poco más por la programación web. 😳
            <br />
            <br />
            De momento estoy aprendiendo sobre <span className="purple">Flutter</span> para el adentrarme al desarrollo movil.
            <br />
            <br />
            
          </p>
          {/* <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
