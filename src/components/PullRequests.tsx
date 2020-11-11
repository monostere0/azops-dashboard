import React from "react";
import TimeAgo from "react-timeago";
import { makeStyles } from "@material-ui/core/styles";
import PullRequestEntity from "../entities/PullRequestEntity";
import {
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: "0px",
  },
  row: {
    backgroundColor: "#7ddb96",
  },
  rowFailed: {
    backgroundColor: "#db7d7d",
  },
  title: {
    paddingLeft: "10px",
  },
  icon: {
    marginLeft: "10px",
  },
}));

function PullRequests({ pullRequests }: { pullRequests: PullRequestEntity[] }) {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {pullRequests.map((pr: PullRequestEntity) => (
        <>
          <ListItem className={classes.row}>
            <ListItemAvatar>
              <Avatar
                alt={pr.createdBy.displayName}
                src={pr.createdBy.imageUrl}
              />
            </ListItemAvatar>
            <ListItemText>{pr.title}</ListItemText>
            <ListItemText>{pr.createdBy.displayName}</ListItemText>
            <ListItemText>
              <TimeAgo date={pr.creationDate} />
            </ListItemText>
            <ListItemText>{pr.sourceRefName}</ListItemText>
          </ListItem>
          <Divider />
        </>
      ))}
    </List>
  );
}

export default PullRequests;
