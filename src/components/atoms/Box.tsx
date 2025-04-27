"use client";
import React, { ReactNode } from "react";

interface BoxProps {
  children: ReactNode;
  className?: string;
  color?: string;
  style?: React.CSSProperties;
  boxShadow?: "small" | "medium" | "large" | "extraLarge" | "shadowBox";
  onClick?: () => void;
}

const BoxShadow: Record<
  "small" | "medium" | "large" | "extraLarge" | "shadowBox",
  string
> = {
  small: "shadow-sm",
  medium: "shadow-md",
  large: "shadow-lg",
  extraLarge: "shadow-xl",
  shadowBox: "shadow-box",
};

const Box: React.FC<BoxProps> = ({
  children,
  className = "",
  color = "#027FB9",
  style,
  boxShadow = "small",
  onClick,
}) => {
  const commonProps = {
    className: `flex justify-center items-center p-4 rounded-xl ${BoxShadow[boxShadow]} ${className}`,
    style: { backgroundColor: color, ...style },
  };

  if (onClick) {
    return (
      <button type="button" onClick={onClick} {...commonProps}>
        {children}
      </button>
    );
  }

  return <div {...commonProps}>{children}</div>;
};

export default Box;
