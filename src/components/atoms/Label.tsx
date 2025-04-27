import React from "react";

interface LabelProps {
  text: string;
  htmlFor?: string;
  color?: string;
  size?: "small" | "medium" | "large" | "extraLarge";
  className?: string;
}

const sizeStyles: Record<"small" | "medium" | "large" | "extraLarge", string> =
  {
    small: "text-sm",
    medium: "text-base",
    large: "text-lg",
    extraLarge: "text-xl",
  };

const Label: React.FC<LabelProps> = ({
  text,
  htmlFor,
  color = "#024f72",
  size = "medium",
  className = "",
}) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`block ${sizeStyles[size]} ${className}`}
      style={{ color }}
    >
      {text}
    </label>
  );
};

export default Label;
