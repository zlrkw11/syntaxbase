import React from "react";

interface ButtonProps {
  id: number;
  title: string;
  disabled: boolean;
}

const Button1 = ({ id, title, disabled }: ButtonProps) => {
  return <button disabled={disabled}>{`${id}:${title}`}</button>;
};
