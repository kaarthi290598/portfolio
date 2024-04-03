import React from "react";
import { cn } from "@/lib/utils";

type colourButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  color: "orange" | "blue" | "black";
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
    orange:
      "shadow-[1px_1px_rgba(243,144,51),2px_2px_rgba(243,144,51),3px_3px_rgba(243,144,51),4px_4px_rgba(243,144,51),5px_5px_0px_0px_rgba(243,144,51)]",
    blue: "shadow-[1px_1px_rgba(10,142,182),2px_2px_rgba(10,142,182),3px_3px_rgba(10,142,182),4px_4px_rgba(10,142,182),5px_5px_0px_0px_rgba(10,142,182)]",
    black:
      "shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)]",
    gray: "shadow-[1px_1px_rgba(128,128,128),2px_2px_rgba(128,128,128),3px_3px_rgba(128,128,128),4px_4px_rgba(128,128,128),5px_5px_0px_0px_rgba(128,128,128)]",
  };

  const shadowColor = {
    orange: "border-[rgba(243,144,51)]",
    blue: "border-[rgba(10,142,182)]",
    black: "border-[rgba(0,0,0)]",
  };

  const shadowColorclass = shadowColor[color];
  const borderColorclass = borderColor[color];

  return (
    <button
      disabled={disabled}
      className={cn(
        `px-8 py-0.5 rounded-lg border-2 ${shadowColorclass} dark:border-white  uppercase bg-white text-neutarl-700 transition duration-200 text-sm ${borderColorclass} hover:scale-110 hover:rotate-3 z-30  ${className}`
      )}
    >
      {children}
    </button>
  );
};

export default ColourButton;
