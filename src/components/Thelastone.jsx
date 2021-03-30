import React from "react";
import { Row, Col, Container, Badge, ResponsiveEmbed } from "react-bootstrap";
import YouTube from "react-youtube";
import useIsInViewport from "use-is-in-viewport";

const Thelastone = ({ data }) => {
  const [isInViewport, targetRef] = useIsInViewport();
  const [isInViewportOne, targetRefOne] = useIsInViewport();
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: -1
    },
  };

  return (
    <Container className="my-9">
      <Row ref={targetRef} className={isInViewport ? "mb-5 visible" : "mb-5 hidden"}>
        <Col md={{ span: 5 }} className="mb-5">
          <h2 className="font project-title thelastone">
            {data.thelastone.title.title}
          </h2>
          <br />
          <h3 className="font project-subtitle mb-5">
            {data.thelastone.title.subtitle}
          </h3>
          <div
            className="context"
            dangerouslySetInnerHTML={{ __html: data.thelastone.context }}
          />
          {data.thelastone.tag.map((elem, idx) => (
            <Badge className="mx-1 my-1 badge-thelastone" key={idx}>
              {elem}
            </Badge>
          ))}
        </Col>
        <Col md={{ span: 6, offset: 1 }} className="mt-n4">
          <div ref={targetRefOne} className={isInViewportOne ? "video-box-animation":"video-box"}>
            <ResponsiveEmbed aspectRatio="4by3">
              <YouTube videoId="sYfcO_xJzuE" opts={opts} />
            </ResponsiveEmbed>
          </div>
        </Col>
      </Row>
      <Row ref={targetRefOne} className={isInViewportOne ? "visible" : "hidden"}>
        {data.thelastone.card.map((elem, idx) => (
          <Col key={idx} className="my-5" md={{ span: 4 }} xs={12}>
            <ResponsiveEmbed aspectRatio="16by9">
              <img src={elem.url} alt={elem.alt} />
            </ResponsiveEmbed>
            <div className="card my-3 p-3">
              <h3 className="font card-title mx-auto">{elem.title}</h3>
              <p className="context text-center">{elem.description}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Thelastone;
