import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import azureRepository from "./repositories/azureRepository";

import Header from "./components/Header";
import Projects from "./components/Projects";
import UserPreferences from "./components/UserPreferences";
import ProjectEntity from "./entities/ProjectEntity";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();
  const [projects, setProjects] = useState<ProjectEntity[]>([]);

  useEffect(() => {
    const projects = azureRepository.getProjects();
    setProjects(projects);
  }, []);

  return (
    <div className={classes.root}>
      <Header />
      <UserPreferences />
      <Projects projects={projects} />
    </div>
  );
}

export default App;
