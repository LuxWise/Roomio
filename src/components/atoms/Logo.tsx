"use client";
import React from "react";
import Image from "next/image";
import LogoImg from "../../../public/png/Inmopro.png";

interface LogoProps {
  src?: string; // Permite cambiar el logo si es necesario
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({
  src = LogoImg.src,
  alt = "Logo",
  width = 100,
  height = 100,
  className = "",
}) => {
  return (
    <div className={`flex items-center ${className}`}>
      <Image src={src} alt={alt} width={width} height={height} />
    </div>
  );
};

export default Logo;
