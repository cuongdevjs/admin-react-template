import styled from 'styled-components';

const LayoutWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-left: ${props => (!props.isCollapseMenu ? '256px' : '80px')};
`;

const Sidebar = styled.aside`
  width: ${props => (!props.isCollapseMenu ? '256px' : '80px')};
  height: 100%;
  overflow: auto;
  background-color: rgb(255, 255, 255);
  box-shadow: 2px 0 8px 0 rgba(29, 35, 41, 0.05);
  position: fixed;
  top: 0;
  left: 0;
  transition: 0.3s ease;
  z-index: 10;
`;

const Main = styled.section`
  width: 100%;
  height: calc(100% - 64px);
  margin-top: 64px;
  padding: 12px 24px;
`;

export { LayoutWrapper, Sidebar, Main };
