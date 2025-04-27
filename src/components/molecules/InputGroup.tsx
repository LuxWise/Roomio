import React from "react";
import Label from "../atoms/Label";
import Input from "../atoms/Input";

interface InputGroupProps {
  label: string;
  size?: "small" | "medium" | "large";
  id: string;
  placeholder?: string;
  color?: string;
  textColor?: string;
  border?: boolean;
  borderColor?: string;
  type?: "text" | "email" | "password";
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputGroup: React.FC<InputGroupProps> = ({
  label,
  size = "medium",
  id,
  placeholder,
  color,
  textColor,
  border,
  borderColor,
  type = "text",
  className,
  onChange,
}) => {
  return (
    <div className={`flex flex-col min-w-[25vw] gap-2 ${className}`}>
      <Label
        text={label}
        htmlFor={id}
        size={size}
        className="mx-3 font-semibold"
      />
      <Input
        placeholder={placeholder}
        color={color}
        textColor={textColor}
        border={border}
        borderColor={borderColor}
        onChange={onChange}
        type={type}
      />
    </div>
  );
};

export default InputGroup;
