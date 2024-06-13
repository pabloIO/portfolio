import React, { useContext } from "react";

import { ThemeContext } from "@/context/ThemeContext";

const Theme = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div className={theme === "dark" ? "dark" : ""}>{children}</div>
    </>
  );
};

export default Theme;
