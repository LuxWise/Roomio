"use client";
import { JSX } from "@emotion/react/jsx-runtime";
import React, { useState } from "react";
import {
  BarLoader,
  BeatLoader,
  PropagateLoader,
  PulseLoader,
  SyncLoader,
} from "react-spinners";

type ButtonLoader = "Bar" | "Beat" | "Propagate" | "Pulse" | "Sync";

type ButtonVariant =
  | "white"
  | "black"
  | "primary"
  | "secondary"
  | "danger"
  | "success"
  | "warning";

type ButtonSize = "small" | "medium" | "large";

interface ButtonProps {
  text: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  color?: string;
  textColor?: string;
  shadow?: "small" | "medium" | "large" | "extraLarge" | "shadowButton";
  loader?: ButtonLoader;
  onClick: () => Promise<void>;
  className?: string;
}

const variantLoaders: Record<ButtonLoader, JSX.Element> = {
  Bar: <BarLoader color="#fff" />,
  Beat: <BeatLoader color="#fff" />,
  Propagate: <PropagateLoader color="#fff" />,
  Pulse: <PulseLoader color="#fff" />,
  Sync: <SyncLoader color="#fff" />,
};

const variantStyles: Record<ButtonVariant, string> = {
  white: "bg-white text-black hover:bg-gray-100",
  black: "bg-black text-white hover:bg-gray-900",
  primary: "bg-[#027fb9] text-white hover:bg-sky-500",
  secondary: "bg-gray-600 text-white hover:bg-gray-700",
  danger: "bg-red-600 text-white hover:bg-red-700",
  success: "bg-green-600 text-white hover:bg-green-700",
  warning: "bg-yellow-600 text-black hover:bg-yellow-700",
};

const sizeStyles: Record<ButtonSize, string> = {
  small: "px-3 py-1 text-sm",
  medium: "px-4 py-2 text-base",
  large: "px-6 py-3 text-lg",
};

const BoxShadows: Record<
  "small" | "medium" | "large" | "extraLarge" | "shadowButton",
  string
> = {
  small: "shadow-sm",
  medium: "shadow-md",
  large: "shadow-lg",
  extraLarge: "shadow-xl",
  shadowButton: "shadow-button",
};

const Button: React.FC<ButtonProps> = ({
  text,
  variant = "primary",
  size = "medium",
  color,
  textColor,
  shadow = "small",
  loader = "Bar",
  onClick,
  className = "",
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    try {
      await onClick();
    } finally {
      setIsLoading(false);
    }
  };

  const baseStyle =
    "rounded-2xl font-semibold focus:outline-none transition duration-200 cursor-pointer";
  const variantStyle = color ? "" : variantStyles[variant];
  const sizeStyle = sizeStyles[size];
  const BoxShadow = BoxShadows[shadow];
  const variantLoader = variantLoaders[loader];

  return (
    <button
      className={`flex items-center justify-center min-h-10 ${baseStyle} ${variantStyle} ${BoxShadow} ${sizeStyle} ${className}`}
      onClick={handleClick}
      style={color ? { backgroundColor: color, color: textColor } : {}}
      aria-label={text}
      disabled={isLoading}
    >
      {isLoading ? variantLoader : text}
    </button>
  );
};

export default Button;
