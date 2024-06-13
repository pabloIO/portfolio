import { useState, createContext, type ReactNode, useContext } from "react";


export type PortfolioContextType = {
  dark: boolean;
  showModal: boolean;
  setDark: (dark: boolean) => void;
  setShowModal: (modal: boolean) => void;
};

export const PortfolioContext = createContext<PortfolioContextType | null>(null);

export function usePortfolioContext() {
  const ctx = useContext(PortfolioContext);

  if (ctx === null){
      throw new Error("PortfolioContext is null -- that should not happen");
  }
  
  return ctx;
}

interface PortfolioProviderProps {
  children: ReactNode;
}

export default function PortfolioProvider ({ children }: PortfolioProviderProps) {
  const [dark, setDark] = useState(true);
  const [showModal, setShowModal] = useState(false);

  return (
    <PortfolioContext.Provider
      value={{ dark, showModal, setDark, setShowModal }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};
