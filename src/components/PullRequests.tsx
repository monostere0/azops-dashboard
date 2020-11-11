import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import PullRequestEntity from "../entities/PullRequestEntity";
import RepositoryEntity from "../entities/RepositoryEntity";
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

function PullRequests({ repository }: { repository: RepositoryEntity }) {
  const classes = useStyles();
  const [pullRequests, setPullRequests] = useState<PullRequestEntity[]>([]);

  useEffect(() => {
    async function fetchPullRequests() {
      setPullRequests(await repository.getPullRequests());
    }

    fetchPullRequests();
  }, []);

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
            <ListItemText>Test</ListItemText>
            <ListItemText>Test</ListItemText>
          </ListItem>
          <Divider />
        </>
      ))}
    </List>
  );
}

export default PullRequests;
