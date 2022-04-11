import React from "react";
import { AlertsProvider } from "./contexts/AlertsProvider";
import AlertExample from "./AlertExample";
import { AlertManager } from "./AlertManager";

const App = () => {
  return (
    <AlertsProvider>
      <AlertExample />
      <AlertManager />
    </AlertsProvider>
  );
};

export default App;
