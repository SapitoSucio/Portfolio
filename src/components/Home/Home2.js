import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              DEJA ME<span className="purple"> PRESENTO </span>
            </h1>
            <p className="home-about-body">
              Apasionado por la tecnología, gadgetsy las computadoras desde pequeño, estudié Ing. en Sistemas Computacionales y ahora disque sé programar 😎 
              
              <br />
              <br />Me muevo bien en lenguajes como
              <i>
                <b className="purple"> C#, Java y Python. </b>
              </i>
              <br />
              <br />
              Mi campo de interés es constuir nuevas&nbsp;
              <i>
                <b className="purple">Tecnologías y Productos Web </b>
              </i>
              &nbsp; y
              <i>
                <b className="purple"> Aplicaciones Móviles usando Flutter </b>
              </i>
              <br />
              <br />
              He desarollado proyectos usando tecnologías como
              <i>
                <b className="purple"> Flask</b>
              </i>
              &nbsp;,
              <i>
                <b className="purple"> Node.js</b>
              </i>

            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>ENCUÉNTRAME</h1>
            <p>
              ¿Quieres desarollar algún proyecto? <span className="purple">contactame </span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/sapitosucio/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/sapitosucio/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
