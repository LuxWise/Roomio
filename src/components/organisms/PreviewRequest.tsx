import React from "react";
import Label from "../atoms/Label";
import Box from "../atoms/Box";
interface PreviewRequestProps {
  title: string;
  className?: string;
  size?: "small" | "medium" | "large";
}

const PreviewRequest = ({ title, className, size }: PreviewRequestProps) => {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <Label text={title} size={size} className="mx-3 font-semibold" />
      <Box
        color="#fff"
        className="grid grid-cols-8 grid-rows-4  h-full"
        boxShadow="shadowBox"
      >
        <div className="col-start-1 col-end-4 row-start-1 row-end-2"></div>
      </Box>
    </div>
  );
};

export default PreviewRequest;
