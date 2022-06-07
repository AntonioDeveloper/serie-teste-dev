import styled from 'styled-components';

export const Container = styled.section`
  width: 1024px;
  display: flex;
  justify-content: space-between;
  margin: 10px 0;

  @media screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }

  a {
    width: 49%;

    @media screen and (max-width: 768px) {
      width: 100%;     
    }
      img {
        width: 100%;
        &:hover {
        cursor: pointer;
      }
    }
  }
`;

// @media screen and (max-width: 520px) {

// }

// @media screen and (min-width: 521px) and (max-width: 768px) {

// }

// @media screen and (min-width: 768px) and (max-width: 1024px) {

// }

// @media screen and (min-width: 1024px) {

// }