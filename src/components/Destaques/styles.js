import styled from 'styled-components';

export const Container = styled.section`
  margin: 30px 0;

  .product-table {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    .card {
    margin: 0 5px;

    &:hover {
      cursor: pointer;
      .overlay {
        display: block;
      }
    }

    .overlay {
      display: none;
      width: 250px;
      height: 40%;
      background: rgba(129,88,197,.5);
      position: absolute;
      z-index: 1;

      span {
        background: #FFA200;
        color: #fff;
        position: relative;
        top: 50%;
        margin-left: 23%;
        padding: 10px 20px
      }
    }

    .flag {
      background: #8158C5;
      width: 6%;
      color: #fff;
      text-align: center;
      padding: 5px;
      position: absolute;
    }

    img {
      width: 100%;
    }

    p {
        text-align: center;
        color: #666;
        padding: 5px 0;
      }
    }
  }
`;