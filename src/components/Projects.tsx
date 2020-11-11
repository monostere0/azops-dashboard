import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ProjectEntity from "../entities/ProjectEntity";
import FolderIcon from "@material-ui/icons/Folder";

import Repositories from "./Repositories";

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
  title: {
    paddingLeft: "10px",
  },
}));

function Projects({ projects }: { projects: ProjectEntity[] }) {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {projects.map((project: ProjectEntity) => (
        <>
          <ListItem>
            <FolderIcon />
            <ListItemText className={classes.title}>
              {project.name}
            </ListItemText>
          </ListItem>
          <Divider />
          <Repositories project={project} />
        </>
      ))}
    </List>
  );
}

export default Projects;
