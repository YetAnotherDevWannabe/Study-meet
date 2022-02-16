import React from "react";
import {Button, Text} from "react-native";
// import "./StylizedButton.css";

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
    <Button
      // className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      onPress={() => {}}
      title={children}
    >
      <Text>
        {children}
      </Text>
    </Button>
  );
};

export default StylizedButton;