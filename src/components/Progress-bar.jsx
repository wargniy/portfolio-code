import useIsInViewport from "use-is-in-viewport";

const ProgressBar = (props) => {
  const { title, bgColor, color, completed } = props;
  const [isInViewport, targetRef] = useIsInViewport();

  const containerStyles = {
    height: 15,
    width: "100%",
    backgroundColor: bgColor,
    borderRadius: 50,
    margin: 0,
  };

  const fillerStyles = {
    height: "100%",
    width: 0,
    backgroundColor: color,
    borderRadius: "inherit",
    textAlign: "right",
  };

  const fillerStylesAnimated = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: color,
    borderRadius: "inherit",
    textAlign: "right",
    transition: "width 1s ease-in-out",
  };

  return (
    <div className="mb-4">
      <p className="font skills">{title}</p>
      <div style={containerStyles}>
        <div
          ref={targetRef}
          style={isInViewport ? fillerStylesAnimated : fillerStyles}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
