import React from "react";
import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Settings } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className={classes.title} variant="h6">
          AzBuilds Watcher
        </Typography>
        <IconButton
          edge="start"
          color="inherit"
          onClick={() => window.dispatchEvent(new Event("settings.dialog"))}
        >
          <Settings />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
