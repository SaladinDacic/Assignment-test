import React, { createContext } from "react";

type ContainerProps = {
  children: React.ReactNode; //👈 children prop type
  parentConsole: string;
};

export const ConsoleContext = createContext<any>(null);

export const ConsoleProvider = ({ children, parentConsole }: ContainerProps) => {
  return (
    <ConsoleContext.Provider
      value={{
        parentConsole,
      }}
    >
      {children}
    </ConsoleContext.Provider>
  );
};
