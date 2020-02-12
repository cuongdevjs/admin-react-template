import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Icon } from 'antd';
import { FormattedMessage } from 'react-intl';

import { NavLink } from 'react-router-dom';
import messages from '../messages';
import { MenuWrapper } from './Menu.css';

const ListMenu = props => (
  <MenuWrapper>
    <Menu
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      theme="light"
      inlineCollapsed={props.isCollapseMenu}
    >
      <Menu.Item key="1">
        <NavLink to="/home/dashboard" activeClassName="menu-active">
          <Icon type="pie-chart" />
          <span>
            <FormattedMessage {...messages.menuTongQuan} />
          </span>
        </NavLink>
      </Menu.Item>
      <Menu.Item key="2">
        <NavLink to="/home/assets" activeClassName="menu-active">
          <Icon type="desktop" />
          <span>
            <FormattedMessage {...messages.menuTaiNguyen} />
          </span>
        </NavLink>
      </Menu.Item>
      <Menu.Item key="3">
        <NavLink to="/home/locations" activeClassName="menu-active">
          <Icon type="desktop" />
          <span>
            <FormattedMessage {...messages.menuDiaDiem} />
          </span>
        </NavLink>
      </Menu.Item>
      <Menu.Item key="4">
        <NavLink to="/home/types" activeClassName="menu-active">
          <Icon type="desktop" />
          <span>
            <FormattedMessage {...messages.menuLoaiHinh} />
          </span>
        </NavLink>
      </Menu.Item>
      <Menu.Item key="5">
        <NavLink to="/home/users" activeClassName="menu-active">
          <Icon type="desktop" />
          <span>
            <FormattedMessage {...messages.menuNguoiDung} />
          </span>
        </NavLink>
      </Menu.Item>
    </Menu>
  </MenuWrapper>
);

ListMenu.propTypes = {
  isCollapseMenu: PropTypes.bool.isRequired,
};

export default ListMenu;
