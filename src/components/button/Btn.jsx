import { Button } from "@material-tailwind/react";
import React from "react";

const Btn = ({
  color,
  label,
  disabled,
  className,
  type,
  onClick,
  size,
  children,
  accept,
}) => {
  return (
    <Button
      type={type}
      color={color}
      size={size}
      disabled={disabled}
      onClick={onClick}
      className={`${className} capitalize bg-[#00a6e5] text-lg`}
    >
      {label || children}
    </Button>
  );
};

export default Btn;
