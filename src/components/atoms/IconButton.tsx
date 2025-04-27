import React from "react";
import { LucideProps } from "lucide-react";

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLDivElement> {
  Icon: React.ComponentType<LucideProps>;
  color?: string;
  size?: number;
}

const IconButton: React.FC<IconButtonProps> = ({
  Icon,
  color = "#024F72",
  size = 24,
}) => {
  return <Icon color={color} size={size} />;
};

export default IconButton;
