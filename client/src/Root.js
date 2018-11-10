import React from "react";
import { Route, Switch } from "react-router-dom";

// Components
import Layout from "./components/Layout";
import Index from "./pages/Index";
import App from "./components/App";

const Root = () => (
  <Layout>
    <Switch>
      <Route path="/" component={Index} />
    </Switch>
  </Layout>
);

export default Root;
