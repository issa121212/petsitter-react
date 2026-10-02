import React from "react";
import styles from "./Button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "text" | "contained" | "outlined";
  children: React.ReactNode;
}

const Button = ({ variant = "contained", children, className = "", ...props }: ButtonProps) => {
  return (
    <button data-variant={variant} className={`${styles.button} ${className}`.trim()} {...props}>
      {children}
    </button>
  );
};

export default Button;