import React from "react";

interface InputProps {
  color?: string;
  textColor?: string;
  border?: boolean;
  borderColor?: string;
  placeholder?: string;
  type: "text" | "email" | "password";
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const typeInput: Record<"text" | "email" | "password", string> = {
  text: "text",
  email: "email",
  password: "password",
};

const Input: React.FC<
  InputProps & React.InputHTMLAttributes<HTMLInputElement>
> = ({
  color = "#027fb9",
  textColor = "#FFFFFF",
  border,
  borderColor = "#000000",
  placeholder,
  type = "text",
  className,
  onChange,
  ...props
}) => {
  return (
    <div
      className={`flex min-w-64 max-h-8 items-center gap-2 rounded-md ${className}`}
      style={{
        border: border ? `1px solid ${borderColor}` : "none",
      }}
    >
      <input
        {...props}
        className="w-full h-full outline-none rounded-lg px-4 py-3 "
        style={{ backgroundColor: color, color: textColor }}
        placeholder={placeholder}
        type={typeInput[type]}
        onChange={onChange}
        aria-label={placeholder}
      />
    </div>
  );
};

export default Input;
