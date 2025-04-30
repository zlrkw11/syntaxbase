import React from "react";

interface ButtonProps {
  color: string;
  text: string;
}

interface ContainerProps extends ButtonProps {
  height: number;
  width?: number;
}

const Container: React.FC<ContainerProps> = ({ color, height, text }) => {
  return (
    <div style={{ backgroundColor: color, height: `${height}px` }}>{text}</div>
  );
};

export default Container;
