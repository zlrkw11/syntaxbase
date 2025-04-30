import React from "react";

type Props = {
  color?: string;
  children: React.ReactNode;
  onClick: () => void;
};

const Button: React.FC<Props> = ({ children, color = "tomato", onClick }) => {
  return (
    <button style={{ backgroundColor: color }} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
