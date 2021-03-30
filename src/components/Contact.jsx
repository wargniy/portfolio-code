import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import useIsInViewport from "use-is-in-viewport";

export const Contact = ({ data }) => {
  const [isInViewport, targetRef] = useIsInViewport();

  return (
    <Container id="contact" className="my-9 py-6">
      <Row ref={targetRef} className={isInViewport ? "visible" : "hidden"}>
        <Col xs={12} md={12} className="my-6">
          <h2 className="font project-title skill visible">CONTACT</h2>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={4} className="px-5">
          <div className="box-contact d-flex justify-content-center align-items-center flex-column">
            <div className="mb-2">
              <img
                alt="mail logo"
                src="/assets/images/icons/mail.svg"
                width="32"
                height="32"
                className="icon"
              />
            </div>
            <p className="text-justify-center font project-subtitle">
              <a href="mailto:y.wargnier@mail.com">{data.mail}</a>
            </p>
          </div>
        </Col>
        <Col xs={12} md={4} className="px-5">
          <div className="box-contact d-flex justify-content-center align-items-center flex-column">
            <div className="mb-2">
              <img
                alt="linkedin logo"
                src="/assets/images/icons/linkedin.svg"
                width="32"
                height="32"
                className="icon"
              />
            </div>
            <p className="text-justify-center font project-subtitle">
              <a href={data.linkedin}>yoann-wargnier</a>
            </p>
          </div>
        </Col>
        <Col xs={12} md={4} className="px-5">
          <div className="box-contact d-flex justify-content-center align-items-center flex-column">
            <div className="mb-2">
              <img
                alt="github logo"
                src="/assets/images/icons/github.svg"
                width="32"
                height="32"
                className="icon"
              />
            </div>
            <p className="text-justify-center font project-subtitle">
              <a href={data.github}>wargniy</a>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
