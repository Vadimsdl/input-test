import { FC, ReactNode } from "react";
import "./style.css";

interface IProps {
  children: ReactNode;
  onClick?: () => void;
  full?: boolean;
  variant?: "success" | "danger";
  className?: string;
}

const Button: FC<IProps> = ({
  children,
  onClick,
  full = false,
  variant = "success",
  className = "",
}) => (
  <button
    onClick={onClick}
    className={`app_button ${variant} ${full ? "full" : ""} ${className}`}
  >
    {children}
  </button>
);

export default Button;
