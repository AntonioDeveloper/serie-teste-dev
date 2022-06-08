import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 40px;
  h1 {
    text-align: center;
    padding: 10px 0;
    color: #666;
  }

  .slick-slide {
    img {
      width: 100%;

      @media screen and (max-width: 768px) {
        width: auto;
        margin: 0 auto;
      }
    }
  }

  .slick-slide.slick-active {
    
    &:hover {
      cursor: pointer;
      .overlay {
        display: block;
      }
    }
  }

  .card {
    margin: 0 5px;
    .overlay {
      display: none;
      width: 290px;
      height: 80%;
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
        width: 2%;
      }
    }
    p {
      text-align: center;
      color: #666;
      padding: 5px 0;

      @media screen and (max-width: 768px) {
        font-size: 14px;
      }
    }

    &:after {
      @media screen and (max-width: 768px) {
        content: "Comprar";
        background: #FFA200;
        color: #fff;
        position: relative;
        display: block;
        text-align: center;
        width: 30%;
        margin: 0 auto;
        padding: 10px 0;
      }
    }
  }
`;