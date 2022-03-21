import React, { createContext } from "react";
import { useSocket } from "../hooks/useSocket";

export const Socketcontext = createContext();

const SocketProvider = ({ children }) => {
  const { socket, online } = useSocket();
  return (
    <Socketcontext.Provider value={{ socket, online }}>
      {children}
    </Socketcontext.Provider>
  );
};

export default SocketProvider;
