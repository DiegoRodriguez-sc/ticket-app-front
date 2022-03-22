import React, { createContext } from "react";
import { useSocket } from "../hooks/useSocket";

export const SocketContext = createContext();

const SocketProvider = ({ children }) => {
  const { socket, online } = useSocket("https://ticket-app-socket.herokuapp.com/");
  return (
    <SocketContext.Provider value={{ socket, online }}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketProvider;
