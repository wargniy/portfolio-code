import React from "react";
import { Row, Col, Container, Badge } from "react-bootstrap";
import ControlledCarousel from "./Carousel";
import useIsInViewport from "use-is-in-viewport";

const Bam = ({ data }) => {
  const [isInViewport, targetRef] = useIsInViewport();
  const [isInViewportOne, targetRefOne] = useIsInViewport();
  const [isInViewportTwo, targetRefTwo] = useIsInViewport();
  return (
    <Container className="my-9">
      <Row ref={targetRef} className={isInViewport ? "visible" : "hidden"}>
        <Col md={{ span: 12 }} className="mb-5">
          <h2 className="font project-title bam">{data.bam.title.title}</h2>
          <br />
          <h3 className="font project-subtitle">{data.bam.title.subtitle}</h3>
        </Col>
      </Row>
      <Row
        ref={targetRefOne}
        className={isInViewportOne ? "visible" : "hidden"}
      >
        <Col md={{ span: 4 }}>
          <div
            className="context"
            dangerouslySetInnerHTML={{ __html: data.bam.context }}
          />
        </Col>
        <Col md={{ span: 6, offset: 1 }}>
          <p className="features-title color-bam font">
            {data.bam.features.title}
          </p>
          <ul className="context li features">
            {data.bam.features.feature.map((elem, idx) => (
              <li key={idx}>{elem}</li>
            ))}
          </ul>
          <Col>
            {data.bam.features.tag.map((elem, idx) => (
              <Badge key={idx} className="mx-1 my-1 badge-bam">
                {elem}
              </Badge>
            ))}
          </Col>
        </Col>
      </Row>
      <Row
        ref={targetRefTwo}
        className={isInViewportTwo ? "visible" : "hidden"}
      >
        <Col className="my-5">
          <ControlledCarousel images={data.bam.carousel} />
        </Col>
      </Row>
    </Container>
  );
};

export default Bam;
