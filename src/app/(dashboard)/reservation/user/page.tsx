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

const RequestAdminPage = () => {
  const [selectedUser, setSelectedUser] = useState<Option | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<Option | null>(null);

  const handleUserChange = (option: Option | null) => {
    setSelectedUser(option);
    console.log("Selected user:", option);
  };

  const handleSubjectChange = (option: Option | null) => {
    setSelectedSubject(option);
    console.log("Selected subject:", option);
  };

  return (
    <UserDetails>
      <Typography
        variant="max"
        className="col-start-2 col-end-10 row-start-4 row-end-5"
      >
        Make a reservation
      </Typography>

      <InputGroup
        label="Reservation holder name"
        id="user"
        className="col-start-2 col-end-5 row-start-6 row-end-7"
      />

      <SelectMenu
        label="Payment method"
        className="col-start-2 col-end-5 row-start-8 row-end-9"
        placeholder="Select option..."
        onChange={handleSubjectChange}
        value={selectedSubject}
      />

      <PreviewRequest
        title="Preview Reservation"
        className="col-start-6 col-end-12 row-start-5 row-end-11"
      />

      <Button
        text="Pay reservation"
        className="col-start-8 col-end-10 row-start-12 row-end-13"
        variant="white"
        shadow="shadowButton"
        onClick={async () => {
          console.log("Send Request", { selectedUser, selectedSubject });
        }}
      />
    </UserDetails>
  );
};

export default RequestAdminPage;
