import React, { createContext } from "react";

type ContainerProps = {
  children: React.ReactNode; //👈 children prop type
  consoleLocation: ({ child }: { child: string }) => void;
};

export const ConsoleContext = createContext<any>(null);

export const ConsoleProvider = ({ children, consoleLocation }: ContainerProps) => {
  return (
    <ConsoleContext.Provider
      value={{
        consoleLocation,
      }}
    >
      {children}
    </ConsoleContext.Provider>
  );
};
