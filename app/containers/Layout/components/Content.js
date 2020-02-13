import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Dashboard from 'containers/Dashboard/Loadable';
import AssetsPage from 'containers/AssetsPage/Loadable';

const Content = () => (
  <Switch>
    <Redirect exact from="/home" to="/home/dashboard" />
    <Route path="/home/dashboard" component={Dashboard} />
    <Route path="/home/assets" component={AssetsPage} />
    <Route path="" component={NotFoundPage} />
  </Switch>
);

Content.propTypes = {};

export default Content;
