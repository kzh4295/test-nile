// Button.tsx

import React from "react";
import classNames from "classnames/bind";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

type ButtonProps = {
  variant?: "filled" | "outlined";
  color?: string;
  icon?: React.ReactNode;
  label: string;
  size?: "xs" | "sm" | "md" | "lg";
  onClick?: () => void;
};

const Button = ({ variant = "filled", color, icon, label, size = "md", onClick }: ButtonProps) => {
  const buttonStyle = {
    width: size === "xs" ? "80px" : size === "sm" ? "100px" : size === "lg" ? "200px" : "150px",
    height: size === "xs" ? "29px" : "49px",
    fontSize: size === "xs" ? "12px" : size === "sm" ? "14px" : size === "lg" ? "20px" : "16px",
    backgroundColor: variant === "filled" ? color : "transparent",
    color: variant === "outlined" ? color : "#fff",
    border: variant === "outlined" ? `2px solid ${color}` : "none"
  };

  const buttonClass = cx("button");

  return (
    <button className={buttonClass} style={buttonStyle} onClick={onClick}>
      {icon && <span className={cx("icon", "start")}>{icon}</span>}
      {label}
    </button>
  );
};

export default Button;
