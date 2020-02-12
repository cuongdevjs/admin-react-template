import styled from 'styled-components';

const MenuWrapper = styled.div`
  .ant-menu-inline .ant-menu-item {
    padding: 0 !important;
    height: auto;
    &:not(:last-child) {
      padding: 0;
      margin: 0px;
    }
  }

  .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
    background-color: inherit;
  }

  .ant-menu-item-selected {
    color: inherit;
    > a {
      color: rgba(0, 0, 0, 0.65);
    }
    &::after {
      opacity: 0 !important;
    }
  }

  .ant-menu-item > a {
    padding: 4px 0;
    padding-left: 24px;
    display: flex;
    align-items: center;
  }

  a.menu-active {
    background-color: rgb(230, 247, 255);
    color: rgb(24, 144, 255);
    border-right: 3px solid rgb(24, 144, 255);
    transition: transform 0.15s cubic-bezier(0.215, 0.61, 0.355, 1),
      opacity 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);
  }
`;

const MenuItem = styled.div``;

export { MenuWrapper, MenuItem };
