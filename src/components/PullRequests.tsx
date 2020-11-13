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

const useStyles = makeStyles<any, string>((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: "0px",
  },
  succeeded: {
    backgroundColor: "#7ddb96",
  },
  failed: {
    backgroundColor: "#db7d7d",
  },
  none: {
    backgroundColor: "#ccc",
  },
  title: {
    paddingLeft: "10px",
  },
  icon: {
    marginLeft: "10px",
  },
  row: {
    flex: 1,
  },
}));

function PullRequests({ pullRequests }: { pullRequests: PullRequestEntity[] }) {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {pullRequests.map((pr: PullRequestEntity) => (
        <React.Fragment key={pr.pullRequestId}>
          <ListItem className={classes[pr.build?.result || "none"]}>
            <ListItemAvatar>
              <Avatar
                alt={pr.createdBy.displayName}
                src={pr.createdBy.imageUrl}
              />
            </ListItemAvatar>
            <ListItemText className={classes.row}>{pr.title}</ListItemText>
            <ListItemText className={classes.row}>
              {pr.createdBy.displayName}
            </ListItemText>
            <ListItemText className={classes.row}>
              <TimeAgo date={pr.creationDate} />
            </ListItemText>
            <ListItemText className={classes.row}>
              {pr.sourceRefName}
            </ListItemText>
          </ListItem>
          <Divider />
        </React.Fragment>
      ))}
    </List>
  );
}

export default PullRequests;
