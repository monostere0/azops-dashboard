import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ProjectEntity from "../entities/ProjectEntity";
import RepositoryEntity from "../entities/RepositoryEntity";
import CodeIcon from "@material-ui/icons/Code";
import PullRequests from "./PullRequests";
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
  title: {
    paddingLeft: "10px",
  },
  icon: {
    marginLeft: "10px",
  },
}));

function Repositories({ project }: { project: ProjectEntity }) {
  const classes = useStyles();
  const [repositories, setRepositories] = useState<RepositoryEntity[]>([]);

  useEffect(() => {
    async function fetchRepositories() {
      setRepositories(await project.getRepositories());
    }

    fetchRepositories();
  }, []);

  return (
    <List className={classes.root}>
      {repositories.map((repo: RepositoryEntity) => (
        <>
          <ListItem>
            <CodeIcon className={classes.icon} />
            <ListItemText className={classes.title}>{repo.name}</ListItemText>
          </ListItem>
          <Divider />
          <PullRequests repository={repo} />
        </>
      ))}
    </List>
  );
}

export default Repositories;
