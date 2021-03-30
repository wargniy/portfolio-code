import React, { useEffect, useState } from "react";
import classNames from "classnames";

const isMobile = () => {
  const ua = navigator.userAgent;
  return /Android|Mobi/i.test(ua);
};
const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (typeof navigator !== "undefined" && isMobile()) return null;
    addEventListeners();
    return () => {
      removeEventListener();
    };
  }, []);

  const addEventListeners = () => {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mousedown", onMouseDown);
  };

  const removeEventListener = () => {
    document.removeEventListener("mousemouve", onMouseMove);
    document.removeEventListener("mouseenter", onMouseEnter);
    document.removeEventListener("mouseleave", onMouseLeave);
    document.removeEventListener("mouseup", onMouseUp);
    document.removeEventListener("mousedown", onMouseDown);
  };

  const onMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };
  const onMouseEnter = () => {
    setHidden(false);
  };
  const onMouseLeave = () => {
    setHidden(true);
  };
  const onMouseUp = () => {
    setClicked(false);
  };
  const onMouseDown = () => {
    setClicked(true);
  };

  const cursorClasses = classNames("cursor", {
    "cursor-clicked": clicked,
    "cursor-hidden": hidden,
  });
  return (
    <div
      className={cursorClasses}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    ></div>
  );
};

export default Cursor;
