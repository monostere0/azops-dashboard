import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import RepositoryEntity from "../entities/RepositoryEntity";
import CodeIcon from "@material-ui/icons/Code";
import PullRequests from "./PullRequests";
import { ListItem, Divider, ListItemText } from "@material-ui/core";
import PullRequestEntity from "../entities/PullRequestEntity";

import userSettings from "../services/UserSettings";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    paddingLeft: "10px",
  },
  icon: {
    marginLeft: "10px",
  },
}));

function Repositories({ repository }: { repository: RepositoryEntity }) {
  const classes = useStyles();
  const [pullRequests, setPullRequests] = useState<PullRequestEntity[]>([]);

  useEffect(() => {
    async function fetchPullRequests() {
      setPullRequests(await repository.getPullRequests());
    }

    fetchPullRequests();
  }, [repository]);

  return Boolean(userSettings.showEmptyRepos || pullRequests.length > 0) ? (
    <>
      <ListItem>
        <CodeIcon className={classes.icon} />
        <ListItemText className={classes.title}>{repository.name}</ListItemText>
      </ListItem>
      <Divider />
      <PullRequests pullRequests={pullRequests} />
    </>
  ) : null;
}

export default Repositories;
