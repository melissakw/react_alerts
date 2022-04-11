import React, { useState, useContext, useEffect } from "react";
import { AlertsContext } from "./contexts/AlertsProvider";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

const AlertExample = () => {
  const [alertTitle, setAlertTitle] = useState("");
  const [alertText, setAlertText] = useState("");
  const [link, setLink] = useState("");
  const [timeLimit, setTimeLimit] = useState(10000); //default to 10 seconds
  const [alertType, setAlertType] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [isValidated, setIsValidated] = useState(false);

  const { _, alertsDispatch } = useContext(AlertsContext);

  const handleAlertTitleChange = (e) => {
    setAlertTitle(e.target.value);
    console.log("handleAlertTitleChange: ", alertTitle);
  };

  const handleAlertTextChange = (e) => {
    setAlertText(e.target.value);
    console.log("handleAlertTextChange", alertText);
  };

  const handleLinkChange = (e) => {
    setLink(e.target.value);
    console.log("handleLinkChange", link);
  };

  const handleTimeLimitChange = (e) => {
    setTimeLimit(e.target.value);
    console.log("handleTimeLimitChange", timeLimit);
  };

  const handleAlertTypeChange = (e) => {
    setAlertType(e.target.value);
    console.log("handleAlertTypeChange", alertType);
  };

  const resetForm = () => {
    setAlertTitle("");
    setAlertText("");
    setLink("");
    setTimeLimit(10000);
    setAlertType("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    alertsDispatch({
      type: "ADD",
      payload: {
        alertTitle: alertTitle,
        alertText: alertText,
        link: link,
        timeLimit: timeLimit,
        alertType: alertType,
      },
    });
    resetForm();
    setIsLoading(false);
  };

  useEffect(() => {
    // Design assumption: alertTitle and link are optional
    setIsValidated(alertText && timeLimit && alertType);
  }, [alertText, timeLimit, alertType]);

  return (
    <form onSubmit={handleSubmit}>
      <Grid
        container
        alignItems="center"
        justify="center"
        direction="column"
        margin={5}
        spacing={1}
      >
        <Grid item xs={8}>
          <TextField
            id="alert-title"
            name="alertTitle"
            label="Title"
            type="text"
            placeholder="Alert title"
            value={alertTitle}
            onChange={handleAlertTitleChange}
          />
        </Grid>
        <Grid item xs={8}>
          <TextField
            id="alert-text"
            name="alertText"
            label="Text"
            type="text"
            placeholder="Description of the alert"
            value={alertText}
            onChange={handleAlertTextChange}
          />
        </Grid>
        <Grid item xs={8}>
          <TextField
            id="link"
            name="link"
            label="Link"
            type="text"
            placeholder="link.com"
            value={link}
            onChange={handleLinkChange}
          />
        </Grid>
        <Grid item xs={8}>
          <TextField
            id="time-limit"
            name="timeLimit"
            label="Time Limit (ms)"
            type="number"
            value={timeLimit}
            onChange={handleTimeLimitChange}
          />
        </Grid>
        <Grid item>
          <Box sx={{ minWidth: 223 }}>
            <FormControl fullWidth>
              <InputLabel id="alert-type-label">Alert Type</InputLabel>
              <Select
                labelId="alert-type-label"
                id="alert-type"
                label="Alert Type"
                value={alertType}
                onChange={handleAlertTypeChange}
              >
                <MenuItem key="success" value="success">
                  Success
                </MenuItem>
                <MenuItem key="info" value="info">
                  Info
                </MenuItem>
                <MenuItem key="warning" value="warning">
                  Warning
                </MenuItem>
                <MenuItem key="error" value="error">
                  Error
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Grid>
        <Grid item xs={8}>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            disabled={isLoading || !isValidated}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default AlertExample;
