import React, { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Checkbox,
  FormControlLabel,
} from "@material-ui/core";
import userSettingsService from "../services/UserSettings";

export default function UserPreferences({
  isOpen = false,
}: {
  isOpen: boolean;
}) {
  const [isDialogOpen, setDialogOpen] = useState<boolean>(isOpen);

  function handleDialogEvent() {
    setDialogOpen(true);
  }

  function handleCheckboxChange(event: Record<any, any>) {
    userSettingsService.showEmptyRepos = event.target.checked;
  }

  useEffect(() => {
    // @ts-ignore
    window.addEventListener("settings.dialog", handleDialogEvent, false);

    return () => {
      // @ts-ignore
      window.removeEventListener("settings.dialog", handleDialogEvent);
    };
  });

  const handleClose = () => {
    setDialogOpen(false);
    setTimeout(() => {
      window.dispatchEvent(new Event("app.reload"));
    }, 10);
  };

  return (
    <Dialog onEscapeKeyDown={() => handleClose()} open={isDialogOpen}>
      <DialogTitle id="simple-dialog-title">User configuration</DialogTitle>
      <DialogContent>
        <DialogContentText>
          The builds watcher uses these settings to know to which projects to
          connect. The settings are saved automatically when the text field
          loses focus.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="orgName"
          label="Organisation name"
          onBlur={(event) => (userSettingsService.orgName = event.target.value)}
          defaultValue={userSettingsService.orgName}
          fullWidth
        />
        <TextField
          margin="dense"
          id="projNames"
          onBlur={(event) =>
            (userSettingsService.projNames = event.target.value
              .split(",")
              .map((x) => x.trim()))
          }
          defaultValue={userSettingsService.projNames}
          label="Project names (separated by comma)"
          fullWidth
        />
        <TextField
          margin="dense"
          id="userToken"
          onBlur={(event) =>
            (userSettingsService.userToken = event.target.value)
          }
          defaultValue={userSettingsService.userToken}
          label="Azure devops token"
          type="password"
          fullWidth
        />
        <TextField
          margin="dense"
          id="updateIntervalDuration"
          onBlur={(event) =>
            (userSettingsService.updateIntervalDuration = Number(
              event.target.value
            ))
          }
          defaultValue={userSettingsService.updateIntervalDuration}
          label="Board update interval duration (miliseconds)"
          type="number"
          fullWidth
        />
        <FormControlLabel
          control={
            <Checkbox
              defaultChecked={userSettingsService.showEmptyRepos}
              onChange={handleCheckboxChange}
              name="checkedB"
              color="primary"
            />
          }
          label="Show repositories without opened PRs?"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
