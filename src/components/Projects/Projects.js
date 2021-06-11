import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import BlogCard from "./BlogsCards";
import Particle from "../Particle";

import notaria5 from "../../Assets/Projects/notaria5cortes.ga.png";
import unacar from "../../Assets/Projects/unacar.jpg";
import jomax from "../../Assets/Projects/jomax.png";
import vcstudio from "../../Assets/Projects/vcstudio.png";
import v1 from "../../Assets/Projects/v1.webp";
import v2 from "../../Assets/Projects/thumbnail.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mis trabajos más <strong className="purple">recientes </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={unacar}
              isBlog={false}
              title="Sistema de Gestión de Proyectos Académicos - UNACAR"
              description="Este proyecto fue realizado como parte de mi servicio social en la UNACAR, es una aplicación completa, permite a los profesores registrar los proyectos que estén llevando a cabo."
              link="https://unacar.herokuapp.com/"
            />
          </Col>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vcstudio}
              isBlog={false}
              title="VC Studio Sitio Web"
              description="Un sitio web que estaba realizando para una amiga, al final no se terminó usando y quedó inconcluso."
              link="https://vcstudio.ga"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jomax}
              isBlog={false}
              title="Jomax Sitio Web"
              description="Sitio Web realizado para Jomax Multi-Servicios, una página hecha con bootstrap."
              link="https://jomaxservicios.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={notaria5}
              isBlog={false}
              title="Notaria 5 Sitio Web"
              description="Un sitio web sencillo con descripción de los servicios ofrecidos."
              link="https://notaria5cortes.ga"
            />
          </Col>

          

        </Row>
        <h1 className="project-heading">
          Mis recientes <strong className="purple">videos </strong> en YouTube
        </h1>
        <p style={{ color: "white" }}>A veces me grabo 🤪</p>
        <Row style={{ justifyContent: "center" }}>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={v1}
              link="https://www.youtube.com/watch?v=mGjta-BXgqM"
              title="Instalación de YouTube Vanced"
              
            />
          </Col>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={v2}
              link="https://www.youtube.com/watch?v=h2SJLTvcbrM"
              title="Cambiar a 10 digitos todos tus contactos"
              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
