"use client";

import React, { useState } from "react";
import Typography from "@/components/atoms/Typography";
import InputGroup from "@/components/molecules/InputGroup";
import TextAreaGroup from "@/components/molecules/TextAreaGroup";
import UserDetails from "@/layout/UserDetails/UserDetails";
import "@/styles/background.css";
import PreviewRequest from "@/components/organisms/PreviewRequest";
import Button from "@/components/atoms/Button";
import SelectMenu from "@/components/molecules/SelectMenu";

interface Option {
  id: string | number;
  label: string;
  value: string | number;
}

const RequestPage = () => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const handleOptionChange = (option: Option | null) => {
    setSelectedOption(option);
    console.log("Selected option:", option);
  };

  return (
    <UserDetails>
      <Typography
        variant="max"
        className="col-start-2 col-end-10 row-start-4 row-end-5"
      >
        Create Request
      </Typography>

      <SelectMenu
        label="Select Type"
        className="col-start-2 col-end-5 row-start-6 row-end-7"
        placeholder="Search request types..."
        onChange={handleOptionChange}
        value={selectedOption}
      />

      <InputGroup
        label="Title"
        id="title"
        className="col-start-2 col-end-5 row-start-8 row-end-9"
      />

      <TextAreaGroup
        label="Description"
        id="description"
        className="col-start-2 col-end-5 row-start-10 row-end-12"
      />

      <PreviewRequest
        title="Preview Request"
        className="col-start-6 col-end-12 row-start-5 row-end-11"
      />

      <Button
        text="Create Request"
        className="col-start-8 col-end-10 row-start-12 row-end-13"
        variant="white"
        shadow="shadowButton"
        onClick={async () => {
          console.log("Create Request", { selectedOption });
        }}
      />
    </UserDetails>
  );
};

export default RequestPage;
