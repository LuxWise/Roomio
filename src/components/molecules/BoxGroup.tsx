import React from "react";
import Typography from "../atoms/Typography";
import Box from "../atoms/Box";

interface BoxGroupProps {
  text: string;
  subtext?: string;
  className?: string;
  color?: string;
  onClick?: () => void;
}

const BoxGroup = ({
  text,
  subtext,
  className,
  color,
  onClick,
}: BoxGroupProps) => {
  return (
    <Box className={`${className}`} onClick={onClick} color={color}>
      <div className="flex flex-col items-center">
        <Typography variant="h1" color="white">
          {text}
        </Typography>

        {subtext && (
          <Typography variant="h4" color="white">
            {subtext}
          </Typography>
        )}
      </div>
    </Box>
  );
};

export default BoxGroup;
