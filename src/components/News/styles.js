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

    li {
      list-style-type: none;
      display: flex;
      align-items: center;

      color: #fff;

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
    }
    
    form {
      display: flex;
      margin-top: 50px;

      input {
        border-bottom: 1px solid #fff;
        background: transparent;
        color: #fff;
        margin-right: 20px; 

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

        &:hover {
          cursor: pointer;
        }
      }
    }
  }
`;