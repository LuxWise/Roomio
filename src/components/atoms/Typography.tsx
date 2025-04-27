"use client";
import React, { ElementType } from "react";

type TypographyVariant =
  | "max"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "p"
  | "span"
  | "small";
type TypographyColor =
  | "white"
  | "black"
  | "primary"
  | "secondary"
  | "danger"
  | "success"
  | "warning";

interface TypographyProps {
  variant?: TypographyVariant;
  color?: TypographyColor;
  className?: string;
  children: React.ReactNode;
}

const variantStyles: Record<TypographyVariant, string> = {
  max: "text-4xl font-bold",
  h1: "text-3xl font-bold",
  h2: "text-2xl font-semibold",
  h3: "text-xl font-medium",
  h4: "text-lg font-medium",
  p: "text-base",
  span: "text-sm",
  small: "text-xs text-gray-500",
};

const colorStyles: Record<TypographyColor, string> = {
  white: "text-white",
  black: "text-black",
  primary: "text-[#024f72]",
  secondary: "text-gray-600",
  danger: "text-red-600",
  success: "text-green-600",
  warning: "text-yellow-600",
};

// Map TypographyVariant to valid HTML elements
const variantToElement: Record<TypographyVariant, ElementType> = {
  max: "div",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  p: "p",
  span: "span",
  small: "small",
};

const Typography: React.FC<TypographyProps> = ({
  variant = "p",
  color,
  className = "",
  children,
}) => {
  const Component: ElementType = variantToElement[variant];
  const baseStyle = variantStyles[variant];
  const colorStyle = color ? colorStyles[color] : "";

  return (
    <Component className={`${baseStyle} ${colorStyle} ${className}`}>
      {children}
    </Component>
  );
};

export default Typography;
