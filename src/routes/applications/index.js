import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import surveyList from "./survey";
import surveyDetail from "./survey-detail";
import chat from "./chat";

const Applications = ({ match }) => (
  <div className="dashboard-wrapper">
    <Switch>
      <Route
        path={`${match.url}/survey/:surveyid`}
        component={surveyDetail}
        isExact
      />
      <Route path={`${match.url}/survey`} component={surveyList} isExact />
      <Route path={`${match.url}/chat`} component={chat} />
      <Redirect to="/error" />
    </Switch>
  </div>
);

export default Applications;
