import styled from 'styled-components';

const LogoWrapper = styled.div`
  position: relative;
  padding: 16px 24px;
  overflow: hidden;
  background: rgb(255, 255, 255);
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoImg = styled.img`
  display: inline-block;
  height: 32px;
  vertical-align: middle;
`;

const LogoText = styled.h3`
  margin-left: 4px;
`;

export { LogoWrapper, LogoImg, LogoText };
