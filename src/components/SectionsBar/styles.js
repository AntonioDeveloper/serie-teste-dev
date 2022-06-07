import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: #FFA200;
  display: flex;
  justify-content: center;
  padding: 10px 0;
  position: relative;
  top: -3px;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
  
  a {
    display: inline-block;
    margin: 0 5px;

    img {
      width: 250px;
    }
  }


`;