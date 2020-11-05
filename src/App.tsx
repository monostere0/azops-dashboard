import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import userSettings from "./services/UserSettingsService";
import azureRepository from "./repositories/azureRepository";

import Header from "./components/Header";
import BuildsList from "./components/BuildsList";

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
    const [pulsarProject] = azureRepository.getProjects();
    const { value: pipelines } = await pulsarProject.getPipelines();
    const run = await pulsarProject.getRuns(pipelines[3].id);
    const repos = await pulsarProject.getRepositories();
    const prs = await pulsarProject.getPullRequests();
    console.log(prs);
  }

  return (
    <div className={classes.root}>
      <Header />
      <BuildsList />
    </div>
  );
}

export default App;
