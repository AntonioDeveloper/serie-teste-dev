import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 80px;
  padding-top: 10px; 
  padding-bottom: 10px; 
  
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 520px) {
    width: 100%;
    height: 150px;
    justify-content: space-around;
  }

  @media screen and (min-width: 521px) and (max-width: 768px) {
    justify-content: space-around;
    height: 170px;
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    padding: 0 10px;
  }

  img {
    @media screen and (max-width: 768px) {
      width: 50%;
    }
  }

  .searchbox {
    display: flex;
    align-items: center;
    border: 1px solid #ccc;
    padding: 5px;

    @media screen and (max-width: 520px) {
      position: absolute;
      top: 120px;
      width: 90%;
    }

    @media screen and (min-width: 521px) and (max-width: 768px) {
      position: absolute;
      top: 150px;
      width: 90%;
    }

      input {
        @media screen and (max-width: 768px) {
          width: 100%;
        }
        &:focus {
        outline: none;
      }
    }

      button {
      background: transparent;
    }
  }

  .icons {
    @media screen and (min-width: 769px) and (max-width: 1024px) {
      margin-right: 10px;
    }
  }
  .login,
  .cart {
    @media screen and (max-width: 768px) {
      margin-right: 10px;

      img {
        width: 18px;
        height: 20px;
      }
    }
    margin-right: 10px;
  }
`;

