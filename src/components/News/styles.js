import styled from 'styled-components';

export const Container = styled.section`
  background: #8158C5;
  padding: 10px 0;

  .perks {
    display: flex;
    justify-content: space-around;
    width: 90%;
    margin: 0 auto;
    border-bottom: 1px solid #FFA200;
    padding-bottom: 10px;

    @media screen and (max-width: 767px) {
      flex-direction: column;
      align-items: center;
      padding: 10px 0;
    }

    li {
      list-style-type: none;
      display: flex;
      align-items: center;
      color: #fff;

      @media screen and (max-width: 767px) {
        padding: 10px 0;
      }

      img {
        margin-right: 10px;
      }
    }
  }

  .newsletter-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 0;

    color: #fff;

    p {
      line-height: 50px;

      @media screen and (max-width: 767px) {
        line-height: 30px;
        text-align: center;
        font-size: 12px;
      }
    }
    
    form {
      display: flex;
      margin-top: 50px;
      
      @media screen and (max-width: 767px) {
        margin-top: 25px;
        width: 90%;
        flex-direction: column;
      }

      input {
        border-bottom: 1px solid #fff;
        background: transparent;
        color: #fff;
        margin-right: 20px; 

        @media screen and (max-width: 767px) { 
          margin-bottom: 20px;
        }

        &::placeholder {
          color: #fff;
        }

        &:focus {
          outline: none;
        }
      }

      button {
        background: #FFA200;
        color: #fff;
        padding: 10px 20px;

        @media screen and (max-width: 767px) {
          width: 95%;
        }

        &:hover {
          cursor: pointer;
        }
      }
    }
  }
`;