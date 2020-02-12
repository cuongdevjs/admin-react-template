/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route, Redirect } from 'react-router-dom';

import Layout from 'containers/Layout/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Login from 'containers/Login/Loadable';
import history from 'utils/history';
import GlobalStyle from '../../global-styles';

import 'antd/dist/antd.css';
import 'sanitize.css/sanitize.css';
import { getItem } from '../../utils/localStorage';
import './index.css';

const AppWrapper = styled.div`
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0;
  flex-direction: column;
  height: 100vh;
  font-size: 14px;
`;

function redirect(location) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      history.push(location);
    }

    render() {
      return null;
    }
  };
}

function App() {
  React.useEffect(() => {
    const token = getItem('danang-admin-token');
    if (token) history.push('/login');
  }, []);

  const routeOnlyUser = comp => {
    const token = getItem('danang-admin-token');
    return !token ? comp : redirect('/login');
  };

  const routeOnlyGuest = comp => {
    const token = getItem('danang-admin-token');
    return !token ? comp : redirect('/');
  };

  return (
    <AppWrapper>
      <Helmet titleTemplate="%s" defaultTitle="Da nang Admin Application">
        <meta name="description" content="Da nang Admin Application" />
      </Helmet>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route path="/home" component={routeOnlyUser(Layout)} />
        <Route path="/login" component={routeOnlyGuest(Login)} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </AppWrapper>
  );
}

export default App;
