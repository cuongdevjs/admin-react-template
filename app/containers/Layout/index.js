/**
 *
 * Layout
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectReducer } from 'utils/injectReducer';
import reducer from './reducer';
import { makeSelectCollapseMenu } from './selectors';
import Header from '../Header';
import { LayoutWrapper, Sidebar, Main } from './index.css';
import ListMenu from './components/Menu';
import Logo from './components/Logo';
import Content from './components/Content';

export function Layout(props) {
  useInjectReducer({ key: 'layout', reducer });

  return (
    <LayoutWrapper isCollapseMenu={props.isCollapseMenu}>
      <Helmet>
        <title>Layout</title>
        <meta name="description" content="Description of Layout" />
      </Helmet>
      <Sidebar isCollapseMenu={props.isCollapseMenu}>
        <Logo>{!props.isCollapseMenu ? 'Logo Da Nang' : ''}</Logo>
        <ListMenu isCollapseMenu={props.isCollapseMenu} />
      </Sidebar>
      <Header isCollapseMenu={props.isCollapseMenu} />
      <Main>
        <Content />
      </Main>
    </LayoutWrapper>
  );
}

Layout.propTypes = {
  isCollapseMenu: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  isCollapseMenu: makeSelectCollapseMenu(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Layout);
