import styled from 'styled-components';

export const Container = styled.section`
  width: 1024px;
  display: flex;
  justify-content: space-between;
  margin: 10px 0;

  a {
    width: 49%;
    img {
      width: 100%;
      &:hover {
      cursor: pointer;
    }
    }
  }
`;
