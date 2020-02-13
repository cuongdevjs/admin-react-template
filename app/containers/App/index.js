/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Layout from 'containers/Layout/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Login from 'containers/Login/Loadable';
import history from 'utils/history';

import 'antd/dist/antd.css';
import 'sanitize.css/sanitize.css';
import './index.css';
import 'utils/request';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import GlobalStyle from '../../global-styles';

import { getItem } from '../../utils/localStorage';
import {
  makeSelectActionError,
  makeSelectActionLoading,
  makeSelectActionSuccess,
} from '../Login/selectors';
import { loginRequest } from '../Login/actions';

import { AppWrapper } from './index.css.js';
import saga from './saga';
import reducer from './reducer';
import { getInfoUser, changeIsLogged } from './actions';
import { createStructuredSelector } from 'reselect';
import { makeSelectIsLogged } from './selectors';

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

function App(props) {
  useInjectSaga({ key: 'app', saga });
  useInjectReducer({ key: 'app', reducer });

  React.useEffect(() => {
    const token = getItem('danang-admin-token');
    token
      ? !props.isLogged
        ? props.changeIsLogged(true)
        : props.getInfoUser()
      : history.push('/login');
  }, [props.isLogged]);

  const routeOnlyUser = comp => {
    const token = getItem('danang-admin-token');
    return token ? comp : redirect('/login');
    return comp;
  };

  const routeOnlyGuest = comp => {
    const token = getItem('danang-admin-token');
    return !token ? comp : redirect('/');
    return comp;
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

App.propTypes = {
  isLogged: PropTypes.bool,
  getInfoUser: PropTypes.func,
  changeIsLogged: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  isLogged: makeSelectIsLogged(),
});

function mapDispatchToProps(dispatch) {
  return {
    getInfoUser: () => dispatch(getInfoUser()),
    changeIsLogged: status => dispatch(changeIsLogged(status)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
