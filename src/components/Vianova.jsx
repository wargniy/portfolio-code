import React from "react";
import { Row, Col, Container, Badge } from "react-bootstrap";
import ControlledCarousel from "./Carousel";
import useIsInViewport from 'use-is-in-viewport'

const Vianova = ({ data }) => {
  const [isInViewport, targetRef] = useIsInViewport();
  const [isInViewportOne, targetRefOne] = useIsInViewport();
  return (
    <Container id="projects" className="my-9">
      <Row ref={targetRef} className={isInViewport ? "my-5 visible" : "my-5 hidden"}>
        <Col md={{ span: 5 }}>
          <h2  className="font project-title vianova">
            {data.vianova.title.title}
          </h2>
          <br />
          <h3 className="font project-subtitle">
            {data.vianova.title.subtitle}
          </h3>
        </Col>
        <Col md={{ span: 6, offset: 1 }}>
          <div
            className="context"
            dangerouslySetInnerHTML={{ __html: data.vianova.context }}
          />
          <br />
          <p className="features-title color-vianova font">
            {data.vianova.features.title}
          </p>
          <ul className="context li features">
            {data.vianova.features.feature.map((elem, idx) => (
              <li key={idx}>{elem}</li>
            ))}
          </ul>
          <Col>
            {data.vianova.features.tag.map((elem, idx) => (
              <Badge key={idx} className="mx-1 my-1 badge-vianova">{elem}</Badge>
            ))}
          </Col>
        </Col>
      </Row>
      <Row  ref={targetRefOne} className={isInViewportOne ? "visible" : "hidden"}>
        <Col className="my-5">
          <ControlledCarousel images={data.vianova.carousel} />
        </Col>
      </Row>
    </Container>
  );
};

export default Vianova;
