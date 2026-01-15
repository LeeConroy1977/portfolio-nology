import React, { createContext, useContext, useEffect, useState } from "react";

const WindowSizeContext = createContext(undefined);

export const WindowSizeProvider = ({ children }) => {
  const getWidth = () => ({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
  });

  const [width, setWidth] = useState(getWidth);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => {
      setWidth(getWidth());
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <WindowSizeContext.Provider value={width}>
      {children}
    </WindowSizeContext.Provider>
  );
};

export const useWindowSize = () => {
  const context = useContext(WindowSizeContext);

  if (!context) {
    throw new Error("useWindowSize must be used within a WindowSizeProvider");
  }

  return context;
};
