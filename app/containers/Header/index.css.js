import styled from 'styled-components';

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  padding: 0 24px;
  width: ${props =>
    !props.isCollapseMenu ? 'calc(100% - 256px)' : 'calc(100% - 80px)'};
  z-index: 9;
  right: 0px;
  background: rgb(255, 255, 255);
  height: 64px;
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 2px 0 8px 0 rgba(29, 35, 41, 0.05);
`;

const HeaderUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: auto;
  .user {
    margin-left: 24px;
  }
`;

export { HeaderWrapper, HeaderUser };
