import React, { useState } from "react";
import Button from "../atoms/Button";
import InputGroup from "../molecules/InputGroup";
import Typography from "../atoms/Typography";

interface LoginCardProps {
  className?: string;
  onLogin: (email: string, password: string) => void;
}

const LoginCard = ({ className, onLogin }: LoginCardProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div
      className={`bg-white w-2/4 flex flex-col items-center gap-4 ${className}`}
    >
      <Typography variant="h1" color="primary" className="mt-5">
        Iniciar sesión
      </Typography>

      <section className="flex flex-col gap-5">
        <InputGroup
          label="Mail"
          id="mail"
          color="#027fb9"
          textColor="#fff"
          borderColor="#ccc"
          type="email"
          onChange={e => setEmail(e.target.value)}
        />

        <InputGroup
          label="Password"
          id="password"
          color="#027fb9"
          textColor="#fff"
          borderColor="#ccc"
          type="password"
          onChange={e => setPassword(e.target.value)}
        />
      </section>

      <Button
        text="Ingresar"
        textColor="#fff"
        onClick={async () => {
          onLogin(email, password);
        }}
        className="min-w-[15vw] mt-10 hover:bg-blue-700"
      />
    </div>
  );
};

export default LoginCard;
