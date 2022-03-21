import React from "react";
import UiProvider from "./context/UiContext";
import AppRouter from "./routes/AppRouter";

const TicketApp = () => {
  return (
    <UiProvider>
      <AppRouter />;
    </UiProvider>
  );
};

export default TicketApp;
