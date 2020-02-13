/**
 *
 * Login
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

// import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { formatFormAntToObject } from 'utils/mixins';
import { LoginWrapper } from './index.css';
import {
  makeSelectActionLoading,
  makeSelectActionSuccess,
  makeSelectActionError,
} from './selectors';
import reducer from './reducer';
import { loginRequest } from './actions';
// import saga from './saga';
import Background from './components/Background';
import FormContainer from './components/Form';
import LocaleToggle from '../LocaleToggle';

export function Login(props) {
  useInjectReducer({ key: 'login', reducer });
  // useInjectSaga({ key: 'login', saga });

  const formRef = React.useRef();
  const [formLogin, setFormLogin] = React.useState({
    email: { value: 'bantimdo' },
    password: { value: '123456' },
  });

  return (
    <LoginWrapper>
      <Helmet>
        <title>Login</title>
        <meta name="description" content="Description of Login" />
      </Helmet>
      <Background>
        <LocaleToggle />
      </Background>
      <FormContainer
        ref={formRef}
        {...formLogin}
        handleSubmit={() =>
          props.loginRequest(formLogin.email.value, formLogin.password.value)
        }
        onChange={fieldChange => setFormLogin({ ...formLogin, ...fieldChange })}
      />
    </LoginWrapper>
  );
}

Login.propTypes = {
  isLoading: PropTypes.bool,
  isSuccess: PropTypes.bool,
  isError: PropTypes.bool,
  loginRequest: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  isLoading: makeSelectActionLoading(),
  isSuccess: makeSelectActionSuccess(),
  isError: makeSelectActionError(),
});

function mapDispatchToProps(dispatch) {
  return {
    loginRequest: (username, password) =>
      dispatch(loginRequest(username, password)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Login);
