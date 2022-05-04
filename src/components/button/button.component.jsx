import React from "react";
import { Button as B } from "./button.styles";

export const Button = ({ onClick, children }) => {
  return <B onClick={onClick}>{children}</B>;
};

export default Button;
