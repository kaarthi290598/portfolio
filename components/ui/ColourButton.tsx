"use client";
import React from "react";
import { cn } from "@/lib/utils";

type colourButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  color: "blue2" | "orange" | "blue" | "black";
  className?: string;
  disabled?: boolean;
};

const ColourButton = ({
  color,
  children,
  onClick,
  className,
  disabled,
}: colourButtonProps) => {
  const borderColor = {
    orange: "shadow-[5px_5px_0px_0px_rgba(243,144,51)]",
    blue: "shadow-[5px_5px_0px_0px_rgba(10,142,182)]",
    black: "shadow-[5px_5px_0px_0px_rgba(0,0,0)]",
    blue2: "shadow-[5px_5px_0px_0px_rgba(18,72,137)]",
  };

  const shadowColor = {
    orange: "border-[rgba(243,144,51)]",
    blue: "border-[rgba(10,142,182)]",
    blue2: "border-[rgba(18,72,137)]",
    black: "border-[rgba(0,0,0)]",
  };

  const shadowColorclass = shadowColor[color];
  const borderColorclass = borderColor[color];

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={cn(
        `px-8 py-0.5 rounded-lg border-2 ${shadowColorclass} dark:border-white  uppercase bg-white text-neutral-700 transition duration-200 text-sm ${borderColorclass} hover:scale-110 hover:rotate-3 z-30 ${className}`
      )}
    >
      {children}
    </button>
  );
};

export default ColourButton;
