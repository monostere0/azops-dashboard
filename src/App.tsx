import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import userSettings from "./services/UserSettings";
import azureRepository from "./repositories/azureRepository";

import Header from "./components/Header";
import Projects from "./components/Projects";
import UserPreferences from "./components/UserPreferences";
import ProjectEntity from "./entities/ProjectEntity";

const ORG_NAME = "nn-apps";
const PROJ_NAME = "Pulsar";
const PAT = "t5yn33rgcs3q5ads32pqtvgk45j4con7vctwptfilpwyjid25kza";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();
  const [projects, setProjects] = useState<ProjectEntity[]>([]);

  useEffect(() => {
    initApp();
    fetchData();
  }, []);

  function initApp() {
    userSettings.orgName = ORG_NAME;
    userSettings.projNames = [PROJ_NAME];
    userSettings.userToken = PAT;
  }

  async function fetchData() {
    const projects = azureRepository.getProjects();
    const repos = await projects[0].getRepositories();
    const prs = await repos[0].getPullRequests();

    setProjects(projects);

    console.log("repos", repos);
    console.log("prs", prs);
  }

  return (
    <div className={classes.root}>
      <Header />
      <UserPreferences />
      <Projects projects={projects} />
    </div>
  );
}

export default App;
