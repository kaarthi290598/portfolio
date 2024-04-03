import React from "react";

const Icon = ({ children }: { children: React.ReactNode }) => {
  return <span className="text-purple-700 h-4 w-4"> {children} </span>;
};

export default Icon;
