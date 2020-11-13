import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import azureRepository from "./repositories/azureRepository";

import userSettings from "./services/UserSettings";

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
  const [configMode, setConfigMode] = useState<boolean>(false);
  let [renderIndex, setRenderIndex] = useState<number>(0);

  useEffect(() => {
    let updateInterval: any = 0;

    function updateProjects() {
      const projects = azureRepository.getProjects();
      setProjects(projects);
    }

    window.addEventListener("app.reload", () => {
      setRenderIndex(++renderIndex);
    });

    if (userSettings.isEmpty) {
      setConfigMode(true);
    } else {
      updateProjects();
      updateInterval = setInterval(
        updateProjects,
        userSettings.updateIntervalDuration
      );
    }

    return () => {
      clearInterval(updateInterval);
    };
  }, [renderIndex]);

  return configMode ? (
    <UserPreferences isOpen />
  ) : (
    <div key={renderIndex} className={classes.root}>
      <Header />
      <UserPreferences isOpen={false} />
      <Projects projects={projects} />
    </div>
  );
}

export default App;
