import React, { useContext, useEffect } from "react";
import { AlertsContext } from "./contexts/AlertsContext";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const AlertComponent = ({ data }) => {
  const { id, alertTitle, alertText, link, timeLimit, alertType } = data;

  const { alertsDispatch } = useContext(AlertsContext);

  const handleRemoveAlert = (e) => {
    e.preventDefault();
    alertsDispatch({ type: "REMOVE", payload: { id: id } });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      alertsDispatch({ type: "REMOVE", payload: { id: id } });
    }, timeLimit*1000);

    return () => clearTimeout(timer);
  }, []);

  const AlertCard = () => {
    return (
      <Alert
        severity={alertType}
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={handleRemoveAlert}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
      >
        {/* Only display alertTitle in AlertCard if value exists */}
        {alertTitle && <AlertTitle>{alertTitle}</AlertTitle>}
        {alertText}
      </Alert>
    );
  };

  const AlertCardWithLink = () => {
    return (
      <a href={`//${link}`}>
        <AlertCard />
      </a>
    );
  };

  return <>{link ? <AlertCardWithLink /> : <AlertCard />}</>;
};

export default AlertComponent;
