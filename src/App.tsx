import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import userSettings from "./services/UserSettingsService";
import azureRepository from "./repositories/azureRepository";

import Header from "./components/Header";
import BuildsList from "./components/BuildsList";
import UserPreferences from "./components/UserPreferences";

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
    const repos = await pulsarProject.getRepositories();

    const prs = await repos[0].getPullRequests();

    console.log("repos", repos);
    console.log("prs", prs);
  }

  return (
    <div className={classes.root}>
      <Header />
      <UserPreferences />
      <BuildsList />
    </div>
  );
}

export default App;
