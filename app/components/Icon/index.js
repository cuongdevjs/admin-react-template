/**
 *
 * Icon
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { IconWrapper } from './index.css';

function Icon(props) {
  return (
    <IconWrapper className={props.className} onClick={() => props.onClick} />
  );
}

Icon.propTypes = {
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default memo(Icon);
