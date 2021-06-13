import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  document.title = "David Sélem García | Portfolio";
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hola! <span className="wave">👋🏻</span>
              </h1>

              <h1 className="heading-name">
                Soy
                <strong className="main-name"> DAVID SÉLEM GARCÍA</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left",  }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingTop: 100,paddingBottom: 50 }}>
              <img src={homeLogo} alt="home pic" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2/>
    </section>
  );
}

export default Home;
