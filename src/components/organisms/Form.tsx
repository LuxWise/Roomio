import React from "react";
import InputField from "../molecules/InputField";
import Button from "../atoms/Button";

const FormLogin = () => {
  return (
    <div>
      <InputField title="Email" />
      <InputField title="Password" />
      <Button text="Submit" onClick={() => {}} />
    </div>
  );
};

export default FormLogin;
