import styled from 'styled-components';

export const Container = styled.section`
  margin: 30px 0;

  .product-table {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr 1fr;
      gap: 10px 15px;
    }

    .card {
    margin: 0 5px;

    &:hover {
      cursor: pointer;
      .overlay {
        display: block;
        @media screen and (max-width: 768px) { 
          display: none;
        }
      }
    }

    .overlay {
      display: none;
      width: 290px;
      height: 55%;
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

      @media screen and (max-width: 768px) {
        width: 15%;
      }
    }

    img {
      width: 100%;
    }

    p{
      text-align: center;
      color: #666;
      padding: 5px 0;
    }

    &:after {
      @media screen and (max-width: 768px) {
        content: "Comprar";
        background: #FFA200;
        color: #fff;
        position: relative;
        display: block;
        text-align: center;
        width: 50%;
        margin: 5px auto;
        padding: 5px 0;
        
      }
    }
    }
  }
`;