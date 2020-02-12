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

import history from 'utils/history';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { LoginWrapper } from './index.css';
import {
  makeSelectResult,
  makeSelectActionLoads,
  makeSelectActionLoaded,
  makeSelectActionError,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import Background from './components/Background';
import FormContainer from './components/Form';
import LocaleToggle from '../LocaleToggle';
import { fakeAsyncLoads } from './actions';

export function Login(props) {
  useInjectReducer({ key: 'login', reducer });
  useInjectSaga({ key: 'login', saga });

  const formRef = React.useRef();
  const [formLogin, setFormLogin] = React.useState({
    email: { value: 'nguyenmanhcuong.stf@gmail.com' },
    password: { value: '122423536' },
  });

  return (
    <LoginWrapper>
      <Helmet>
        <title>Login</title>
        <meta name="description" content="Description of Login" />
      </Helmet>
      {props.loading}
      {props.success}
      {props.error}
      {JSON.stringify(props.result)}
      <Background>
        <LocaleToggle />
      </Background>
      <FormContainer
        ref={formRef}
        {...formLogin}
        handleSubmit={() => {
          props.submitFakeAsyncAction();
          // history.push('/home');
        }}
        onChange={fieldChange => setFormLogin({ ...formLogin, ...fieldChange })}
      />
    </LoginWrapper>
  );
}

Login.propTypes = {
  result: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool,
  success: PropTypes.bool,
  error: PropTypes.bool,
  submitFakeAsyncAction: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  result: makeSelectResult(),
  loading: makeSelectActionLoads(),
  success: makeSelectActionLoaded(),
  error: makeSelectActionError(),
});

function mapDispatchToProps(dispatch) {
  return {
    submitFakeAsyncAction: () => dispatch(fakeAsyncLoads()),
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
