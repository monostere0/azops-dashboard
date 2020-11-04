import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import * as az from "./services/AzureDevops";

import Header from "./components/Header";
import BuildsList from "./components/BuildsList";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const resp = await az.fetchAzData(
      "_apis/pipelines?api-version=6.1-preview.1"
    );

    console.log("resp", resp);
  }

  return (
    <div className={classes.root}>
      <Header />
      <BuildsList />
    </div>
  );
}

export default App;
