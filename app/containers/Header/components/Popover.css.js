import styled from 'styled-components';

const ListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgb(232, 232, 232);
  padding: 10px 15px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background-color: rgb(230, 247, 255);
  }
  i {
    margin-right: 5px;
  }
`;

export { ListWrapper, ListItem };
