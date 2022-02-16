import React from "react";
import "./StylizedButton.css";

const STYLES = [
  "btn--primary--solid",
  "btn--primary--outline"
];

const SIZES = ["btn--small", "btn--medium", "btn--large"];

export const StylizedButton = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      onClick={onClick}
      type={type}
    >
      <span>
      {children}
      </span>
    </button>
  );
};

export default StylizedButton;