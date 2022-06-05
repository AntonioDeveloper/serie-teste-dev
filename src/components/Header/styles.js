import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 80px;
  padding-top: 10px; 
  padding-bottom: 10px; 

  display: flex;
  align-items: center;
  justify-content: space-between;

  .searchbox {
    display: flex;
    align-items: center;
    border: 1px solid #ccc;
    padding: 5px;

    input {
      &:focus {
        outline: none;
      }
    }

    button {
      background: transparent;
    }
  }

  .login {
    margin-right: 10px;
  }
`;