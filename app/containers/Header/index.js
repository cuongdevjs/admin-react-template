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
import { useInjectReducer } from 'utils/injectReducer';
// component
import Hamburger from 'components/Hamburger/Loadable';
import IconAwesome from 'components/Icon/Loadable';
import Avatar from 'components/Avatar/Loadable';
import PopoverNotification from './components/PopoverNotification';
import PopoverUser from './components/PopoverUser';
// state & action
import { makeSelectUser } from '../App/selectors';
import { changeCollapseMenu } from '../Layout/actions';
import { logoutRequest } from '../Login/actions';
// css
import { HeaderWrapper, HeaderUser } from './index.css';
// config
import reducer from './reducer';

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
        <PopoverUser logout={() => props.logout()}>
          <Avatar
            className="user"
            text={props.infoUser ? props.infoUser.name : '---'}
          />
        </PopoverUser>
      </HeaderUser>
    </HeaderWrapper>
  );
}

Header.propTypes = {
  infoUser: PropTypes.object,
  isCollapseMenu: PropTypes.bool,
  changeCollapseMenu: PropTypes.func,
  logout: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  infoUser: makeSelectUser(),
});

function mapDispatchToProps(dispatch) {
  return {
    changeCollapseMenu: isCollapse => dispatch(changeCollapseMenu(isCollapse)),
    logout: () => dispatch(logoutRequest()),
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
