import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProgressBar from "./Progress-bar";
import useIsInViewport from "use-is-in-viewport";

export const Skills = ({ data }) => {
  const [isInViewport, targetRef] = useIsInViewport();
  return (
    <Container id="skills" className="my-5 mb-10">
      <Row ref={targetRef} className={isInViewport ? "visible" : "hidden"}>
        <Col xs={12} className="mb-5">
          <h2 className="font project-title skill visible">SKILLS</h2>
        </Col>
        <Col xs={12} md={3}>
          {data.language.map((elem, idx) => {
            return (
              <ProgressBar
                key={idx}
                title={elem.title}
                bgColor={elem.bgcolor}
                color={elem.color}
                completed={elem.completed}
              />
            );
          })}
        </Col>
        <Col xs={12} md={3}>
          {data.framework.map((elem, idx) => {
            return (
              <ProgressBar
                key={idx}
                title={elem.title}
                bgColor={elem.bgcolor}
                color={elem.color}
                completed={elem.completed}
              />
            );
          })}
        </Col>
        <Col xs={12} md={3}>
          {data.back.map((elem, idx) => {
            return (
              <ProgressBar
                key={idx}
                title={elem.title}
                bgColor={elem.bgcolor}
                color={elem.color}
                completed={elem.completed}
              />
            );
          })}
        </Col>
        <Col xs={12} md={3}>
          {data.other.map((elem, idx) => {
            return (
              <ProgressBar
                key={idx}
                title={elem.title}
                bgColor={elem.bgcolor}
                color={elem.color}
                completed={elem.completed}
              />
            );
          })}
        </Col>
      </Row>
    </Container>
  );
};
