import React from "react";
import Label from "../atoms/Label";
import TextArea from "../atoms/TextArea";

interface InputGroupProps {
  label: string;
  size?: "small" | "medium" | "large";
  id: string;
  className?: string;
}

const TextAreaGroup: React.FC<InputGroupProps> = ({
  label,
  size = "medium",
  id,
  className,
}) => {
  return (
    <div className={`flex flex-col min-w-[25vw] gap-2 ${className}`}>
      <Label
        text={label}
        htmlFor={id}
        size={size}
        className="mx-3 font-semibold"
      />
      <TextArea
        placeholder="Escribe tu mensaje..."
        textColor="#000000"
        color="#acd1e2"
        rows={5}
      />
    </div>
  );
};

export default TextAreaGroup;
