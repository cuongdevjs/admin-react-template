import styled from 'styled-components';

const AvatarWrapper = styled.div`
  display: inline-flex;
  flex: 0 0 auto;
  justify-content: flex-left;
  align-items: center;
  img {
    display: block;
    object-fit: cover;
    width: 24px;
    height: 24px;
    line-height: 24px;
    border-radius: 50%;
  }
  cursor: pointer;
`;

const TextWrapper = styled.span`
  margin-left: 6px;
  font-size: 14px;
`;

export { TextWrapper, AvatarWrapper };
