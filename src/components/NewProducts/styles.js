import styled from 'styled-components';

export const Container = styled.div`
  h1 {
    text-align: center;
    padding: 10px 0;
    color: #666;
  }

  .slick-slide {
    img {
      width: 100%;
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
      width: 250px;
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
    }
    p {
      text-align: center;
      color: #666;
      padding: 5px 0;
    }
  }
`;