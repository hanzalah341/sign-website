"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface LightsContextType {
  lightsOn: boolean;
  setLightsOn: (value: boolean | ((prev: boolean) => boolean)) => void;
  toggleLights: () => void;
}

const LightsContext = createContext<LightsContextType | undefined>(undefined);

export function LightsProvider({ children }: { children: React.ReactNode }) {
  const [lightsOn, setLightsOn] = useState<boolean>(true);

  useEffect(() => {
    if (typeof document !== "undefined") {
      if (lightsOn) {
        document.body.classList.remove("lights-off");
      } else {
        document.body.classList.add("lights-off");
      }
    }
  }, [lightsOn]);

  const toggleLights = () => {
    setLightsOn((prev) => !prev);
  };

  return (
    <LightsContext.Provider value={{ lightsOn, setLightsOn, toggleLights }}>
      {children}
    </LightsContext.Provider>
  );
}

export function useLights() {
  const context = useContext(LightsContext);
  if (!context) {
    throw new Error("useLights must be used within a LightsProvider");
  }
  return context;
}
