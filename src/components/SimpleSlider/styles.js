import styled from 'styled-components';

export const Container = styled.div`
  .slick-prev {
    left: 12%;
    z-index: 1;

    &:before {
      background-image: url('https://i.postimg.cc/Y9Dc4mNn/arrow-left.png');
      background-size: 37px 74px;
      display: inline-block;
      width: 37px;
      height: 74px;
      content: "";
    }
  }

  .slick-next {
    right: 12%;

    &:before {
      background-image: url('https://i.postimg.cc/T1KznYCR/arrow-right.png');
      background-size: 37px 74px;
      display: inline-block;
      width: 37px;
      height: 74px;
      content: "";
    }
  }

  div {
    img {
      width: 100%;
    }
  }
`;