/**
 *
 * Header
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { push } from 'connected-react-router';

import { useInjectReducer } from 'utils/injectReducer';
import { changeCollapseMenu } from 'containers/Layout/actions';
import { HeaderWrapper, HeaderUser } from './index.css';
import reducer from './reducer';
import Hamburger from '../../components/Hamburger';
import IconAwesome from '../../components/Icon';
import Avatar from '../../components/Avatar';
import PopoverNotification from './components/PopoverNotification';
import PopoverUser from './components/PopoverUser';

function Header(props) {
  useInjectReducer({ key: 'header', reducer });

  return (
    <HeaderWrapper isCollapseMenu={props.isCollapseMenu}>
      <Hamburger
        onClick={() => props.changeCollapseMenu(!props.isCollapseMenu)}
      />
      <HeaderUser>
        <PopoverNotification>
          <IconAwesome className="fad fa-bell" />
        </PopoverNotification>
        <PopoverUser
          logout={() => {
            props.logout();
          }}
        >
          <Avatar className="user" text="Nguyen Manh Cuong" />
        </PopoverUser>
      </HeaderUser>
    </HeaderWrapper>
  );
}

Header.propTypes = {
  isCollapseMenu: PropTypes.bool,
  changeCollapseMenu: PropTypes.func,
  logout: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({});

function mapDispatchToProps(dispatch) {
  return {
    changeCollapseMenu: isCollapse => dispatch(changeCollapseMenu(isCollapse)),
    logout: () => dispatch(push('/login')),
  };
}
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Header);
