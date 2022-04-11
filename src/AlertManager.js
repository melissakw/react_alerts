import React, { useContext } from "react";
import { AlertsContext } from "./contexts/AlertsContext";
import AlertComponent from "./AlertComponent";
import "./styles/AlertComponent.css";

export const AlertManager = () => {
  const { alerts } = useContext(AlertsContext);

  return (
    <div className="alertsCard">
      {alerts.map((alert) => {
        return <AlertComponent key={alert.id} data={alert} />;
      })}
    </div>
  );
};
