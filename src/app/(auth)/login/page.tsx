"use client";

import Logo from "@/components/atoms/Logo";
import LoginCard from "@/components/organisms/LoginCard";
import { useAuth } from "@/hooks/useAuth";
import "@/styles/background.css";

function Login() {
  const { login } = useAuth();

  const handleLogin = (email: string, password: string) => {
    login(email, password);
  };

  return (
    <section className="background_login grid_frame">
      <Logo
        width={300}
        height={300}
        className="col-start-11 col-end-13 row-span-3"
      />
      <LoginCard
        className="col-start-5 col-end-13 row-start-6 row-end-12"
        onLogin={handleLogin}
      />
    </section>
  );
}

export default Login;
