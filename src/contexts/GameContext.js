import React, { createContext } from "react";

export const GameContext = createContext()

export const GameProvider = ({ children }) => {
  return <GameContext.Provider value="foooozzz">{children}</GameContext.Provider>
}
