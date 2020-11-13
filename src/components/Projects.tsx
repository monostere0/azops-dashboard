import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ProjectEntity from "../entities/ProjectEntity";
import FolderIcon from "@material-ui/icons/Folder";

import Repositories from "./Repositories";

import { List, ListItem, Divider, ListItemText } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    paddingLeft: "10px",
  },
  header: {
    backgroundColor: "#333",
    color: "#fff",
    fontWeight: "bold",
  },
  headerRow: {
    flex: 1,
  },
}));

function Projects({ projects }: { projects: ProjectEntity[] }) {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem className={classes.header}>
        <ListItemText style={{ flex: 0.1 }}></ListItemText>
        <ListItemText className={classes.headerRow}>Title</ListItemText>
        <ListItemText className={classes.headerRow}>Author</ListItemText>
        <ListItemText className={classes.headerRow}>Creation Date</ListItemText>
        <ListItemText className={classes.headerRow}>Branch name</ListItemText>
      </ListItem>
      {projects.map((project: ProjectEntity) => (
        <React.Fragment key={project.name}>
          <ListItem>
            <FolderIcon />
            <ListItemText className={classes.title}>
              {project.name}
            </ListItemText>
          </ListItem>
          <Divider />
          <Repositories project={project} />
        </React.Fragment>
      ))}
    </List>
  );
}

export default Projects;
