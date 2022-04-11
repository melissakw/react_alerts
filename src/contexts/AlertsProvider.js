import React, { createContext } from "react";
import { useAlertReducer } from "../hooks/useAlertReducer";

export const AlertsContext = createContext();

export const AlertsProvider = ({ children }) => {
  const [alerts, alertsDispatch] = useAlertReducer();

  return (
    <AlertsContext.Provider value={{ alerts, alertsDispatch }}>
      {children}
    </AlertsContext.Provider>
  );
};
