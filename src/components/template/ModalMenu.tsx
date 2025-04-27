"use client";
import React from "react";
import UserImage from "@/public/jpeg/user.jpg";
import Image from "next/image";
import Typography from "../atoms/Typography";
import Button from "../atoms/Button";
import { useAuth } from "@/hooks/useAuth";
interface ModalMenuProps {
  onClick?: () => void;
}

const ModalMenu = ({ onClick }: ModalMenuProps) => {
  const { logout } = useAuth();

  return (
    <section className="absolute flex z-100 w-full h-full ">
      <button
        className="w-9/12 h-full bg-[#035D87] opacity-50"
        onClick={onClick}
      />
      <section className="flex flex-col items-center justify-between pt-32 pb-16 w-3/12 h-full bg-white">
        <div className="flex flex-col items-center gap-5">
          <Image
            src={UserImage}
            alt="User"
            className="max-w-56 max-h-56 object-cover rounded-full"
          />
          <Typography variant="h2" className="text-black">
            David Torres
          </Typography>
        </div>
        <Button
          text="logout"
          variant="primary"
          className="w-1/2"
          onClick={async () => logout()}
        ></Button>
      </section>
    </section>
  );
};

export default ModalMenu;
