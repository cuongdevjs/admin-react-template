import React from 'react';
import PropTypes from 'prop-types';
import { Popover } from 'antd';
import { FormattedMessage } from 'react-intl';
import Icon from '../../../components/Icon';
import LocaleToggle from '../../LocaleToggle';
import { ListWrapper, ListItem } from './Popover.css';
import messages from '../messages';

const FormNotification = props => (
  <ListWrapper>
    <ListItem>
      <LocaleToggle />
    </ListItem>
    <ListItem onClick={props.config}>
      <Icon className="fad fa-cog" />
      <FormattedMessage {...messages.settingTextConfig} />
    </ListItem>
    <ListItem onClick={props.logout}>
      <Icon className="fad fa-sign-out-alt" />
      <FormattedMessage {...messages.settingTextLogout} />
    </ListItem>
  </ListWrapper>
);

FormNotification.propTypes = {
  logout: PropTypes.func,
  config: PropTypes.func,
};

const PopoverUser = props => (
  <Popover
    placement="top"
    title={props.title}
    content={<FormNotification logout={props.logout} config={props.config} />}
    trigger="click"
  >
    <div className="inline-flex">{props.children}</div>
  </Popover>
);

PopoverUser.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  logout: PropTypes.func,
  config: PropTypes.func,
};

export default PopoverUser;
