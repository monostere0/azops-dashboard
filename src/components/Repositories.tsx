import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ProjectEntity from "../entities/ProjectEntity";
import RepositoryEntity from "../entities/RepositoryEntity";
import Repository from "./Repository";
import { List } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
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

function Repositories({ project }: { project: ProjectEntity }) {
  const classes = useStyles();
  const [repositories, setRepositories] = useState<RepositoryEntity[]>([]);

  useEffect(() => {
    async function fetchRepositories() {
      setRepositories(await project.getRepositories());
    }

    fetchRepositories();
  }, [project]);

  return (
    <List className={classes.root}>
      {repositories.map((repo: RepositoryEntity) => (
        <Repository repository={repo} />
      ))}
    </List>
  );
}

export default Repositories;
