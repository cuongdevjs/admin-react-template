import styled, { css } from 'styled-components';

const LocaleItem = styled('li')`
  padding-left: 10px;
  border-width: 0 0 0 1px;
  cursor: pointer;
  ${props =>
    !props.active &&
    css`
      color: rgb(56, 88, 152);
      &:hover {
        text-decoration: underline;
      }
    `}
`;

const LocaleWrapper = styled.ul`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
`;

export { LocaleWrapper, LocaleItem };
