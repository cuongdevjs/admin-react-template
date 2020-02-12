/**
 *
 * Avatar
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Avatar as AvatarAnt } from 'antd';
import { TextWrapper, AvatarWrapper } from './index.css';

function Avatar(props) {
  return (
    <AvatarWrapper className={props.className} onClick={() => props.onClick}>
      <img
        src={
          props.avt
            ? props.avt
            : 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png'
        }
        alt="avt"
      />
      <TextWrapper>{props.text}</TextWrapper>
    </AvatarWrapper>
  );
}

Avatar.propTypes = {
  avt: PropTypes.string,
  text: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default memo(Avatar);
