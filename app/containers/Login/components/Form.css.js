import styled from 'styled-components';

const FormWrapper = styled.div`
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.05), 0px 0px 12px rgba(0, 0, 0, 0.025);
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: white;
  .ant-form {
    width: 70%;
  }
`;

export { FormWrapper };
