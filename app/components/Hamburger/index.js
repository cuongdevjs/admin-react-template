/**
 *
 * Hamburger
 *
 */
import React, { memo } from 'react';
import Logo from 'images/icons8-menu.svg';
import PropTypes from 'prop-types';
import { HamburgerWrapper } from './index.css';

function Hamburger(props) {
  return <HamburgerWrapper src={Logo} alt="Logo" onClick={props.onClick} />;
}

Hamburger.propTypes = {
  onClick: PropTypes.func,
};

export default memo(Hamburger);
