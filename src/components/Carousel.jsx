import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

const ControlledCarousel = ({ images }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {(images || []).map((elem, idx) => (
        <Carousel.Item key={idx}>
          <img className="d-block w-100" src={elem.url} alt={elem.alt} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ControlledCarousel;
