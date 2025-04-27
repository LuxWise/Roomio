import React from "react";
import Box from "../atoms/Box";
import Label from "../atoms/Label";

interface HistoryTableProps {
  title: string;
  className?: string;
  children?: React.ReactNode;
}

const HistoryTable = ({ title, className, children }: HistoryTableProps) => {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <Label text={title} size="extraLarge" className="mx-5 font-semibold" />
      <Box
        color="#fff"
        className="grid grid-cols-8 grid-rows-4  h-full"
        boxShadow="shadowBox"
      >
        {children}
      </Box>
    </div>
  );
};

export default HistoryTable;
