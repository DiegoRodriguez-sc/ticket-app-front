import React from "react";
import SocketProvider from "./context/SocketContext";
import UiProvider from "./context/UiContext";
import AppRouter from "./routes/AppRouter";

const TicketApp = () => {
  return (
    <SocketProvider>
      <UiProvider>
        <AppRouter />;
      </UiProvider>
    </SocketProvider>
  );
};

export default TicketApp;
