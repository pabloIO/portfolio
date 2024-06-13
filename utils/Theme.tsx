import React, { type ReactNode, useContext } from "react";

import { ThemeContext, useThemeContext } from "@/context/ThemeContext";

type ThemeProps = {
  children: ReactNode
}
export default function Theme ({ children }: ThemeProps) {
  const { theme } = useThemeContext();

  return (
    <>
      <div className={theme === "dark" ? "dark" : ""}>{children}</div>
    </>
  );
};

