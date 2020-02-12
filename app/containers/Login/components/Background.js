import React from 'react';
import PropTypes from 'prop-types';
import { BackgroundWrapper } from './Background.css';

function Background(props) {
  return <BackgroundWrapper>{props.children}</BackgroundWrapper>;
}

Background.propTypes = {
  children: PropTypes.node,
};

export default Background;
