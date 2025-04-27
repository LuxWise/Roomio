import React from "react";
import Typography from "../atoms/Typography";
import IconButton from "../atoms/IconButton";
import { LucideIcon } from "lucide-react";

interface TitlesGroupProps {
  icon: LucideIcon;
  text: string;
  onClick?: () => void;
  color?: string;
  className?: string;
}

const TitlesGroup: React.FC<TitlesGroupProps> = ({
  icon: Icon,
  text,
  onClick,
  color,
  className,
  ...props
}) => {
  return (
    <button
      className={`flex items-center gap-2 cursor-pointer text-sm font-medium p-2 rounded-md hover:bg-sky-200 hover:shadow-3xl transition ${className}`}
      onClick={onClick}
      onKeyDown={(e: React.KeyboardEvent<HTMLButtonElement>) => {
        if (e.key === "Enter" && onClick) {
          onClick();
        }
      }}
      style={{ color }}
      aria-label={text}
      {...props}
    >
      <IconButton Icon={Icon} />
      <Typography className="select-none" variant="p">
        {text}
      </Typography>
    </button>
  );
};

export default TitlesGroup;
