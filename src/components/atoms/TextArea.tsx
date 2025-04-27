import React from "react";

interface TextAreaProps {
  color?: string;
  textColor?: string;
  border?: boolean;
  borderColor?: string;
  placeholder?: string;
  className?: string;
  rows?: number;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea: React.FC<
  TextAreaProps & React.TextareaHTMLAttributes<HTMLTextAreaElement>
> = ({
  color = "#027fb9",
  textColor = "#FFFFFF",
  border,
  borderColor = "#000000",
  placeholder,
  className,
  rows = 4,
  onChange,
  ...props
}) => {
  return (
    <div
      className={`flex min-w-64 items-center gap-2 rounded-md ${className}`}
      style={{
        border: border ? `1px solid ${borderColor}` : "none",
      }}
    >
      <textarea
        {...props}
        className="w-full outline-none rounded-lg px-4 py-3 resize-none"
        style={{ backgroundColor: color, color: textColor }}
        placeholder={placeholder}
        rows={rows}
        onChange={onChange}
        aria-label={placeholder}
      />
    </div>
  );
};

export default TextArea;
