import Input from "../atoms/Input";

interface InputFieldProps {
  title?: string;
  titleColor?: string;
  color?: string;
  textColor?: string;
  border?: boolean;
  borderColor?: string;
  placeholder?: string;
  onChange?: () => void;
}

const InputField = ({
  title,
  titleColor = "#027fb9",
  color,
  textColor,
  border,
  borderColor,
  placeholder,
}: InputFieldProps) => {
  return (
    <div>
      <h1
        className="text-sm font-semibold mx-4"
        style={{
          color: titleColor,
        }}
      >
        {title}
      </h1>
      <Input
        placeholder={placeholder}
        color={color}
        textColor={textColor}
        border={border}
        borderColor={borderColor}
      />
    </div>
  );
};

export default InputField;
