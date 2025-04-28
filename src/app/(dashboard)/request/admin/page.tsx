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
        Manage Reservation
      </Typography>

<InputGroup
  label="User"
  id="user"
  className="col-start-2 col-end-5 row-start-6 row-end-7" 
/>

<SelectMenu
  label="Select Subject"
  className="col-start-2 col-end-5 row-start-8 row-end-9" 
  placeholder="Select a subject..."
  onChange={handleSubjectChange}
  value={selectedSubject}
/>

      <PreviewRequest
        title="Preview Request"
        className="col-start-6 col-end-12 row-start-5 row-end-11"
      />

      <Button
        text="Send Request"
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

