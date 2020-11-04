import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  row: {
    backgroundColor: "#7ddb96",
  },
  rowFailed: {
    backgroundColor: "#db7d7d",
  },
}));

function BuildsList() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem>
        <ListItemText>Project name</ListItemText>
      </ListItem>
      <Divider />

      <ListItem className={classes.row}>
        <ListItemAvatar>
          <Avatar alt="test" />
        </ListItemAvatar>
        <ListItemText>Test</ListItemText>
        <ListItemText>Test</ListItemText>
        <ListItemText>Test</ListItemText>
        <ListItemText>Test</ListItemText>
      </ListItem>
      <Divider />

      <ListItem className={classes.rowFailed}>
        <ListItemAvatar>
          <Avatar alt="test" />
        </ListItemAvatar>
        <ListItemText>Test</ListItemText>
        <ListItemText>Test</ListItemText>
        <ListItemText>Test</ListItemText>
        <ListItemText>Test</ListItemText>
      </ListItem>
      <Divider />
    </List>
  );
}

export default BuildsList;
