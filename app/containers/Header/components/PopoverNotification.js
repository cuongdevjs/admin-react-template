import React from 'react';
import PropTypes from 'prop-types';
import { Popover } from 'antd';
import Icon from '../../../components/Icon';
import { ListWrapper, ListItem } from './Popover.css';

const FormNotification = () => (
  <ListWrapper>
    <ListItem>
      <Icon className="fad fa-bell" />
      Nguyen Manh Cuong
    </ListItem>
    <ListItem>
      <Icon className="fad fa-bell" />
      Nguyen Manh Cuong
    </ListItem>
  </ListWrapper>
);

const PopoverNotification = props => (
  <Popover
    placement="top"
    title={props.title}
    content={<FormNotification />}
    trigger="click"
  >
    <div className="inline-flex">{props.children}</div>
  </Popover>
);

PopoverNotification.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

export default PopoverNotification;
