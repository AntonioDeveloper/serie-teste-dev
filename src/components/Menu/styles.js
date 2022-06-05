import styled from 'styled-components';

export const Container = styled.nav`
width: 1024px;
height: 50px;
background: #8158C5;
display: flex;
align-items: center;
position: fixed;
z-index: 1;

img {
  display: inline-block;
  &:hover {
    cursor: pointer;
  }
}

ul {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;

  li {
    display: inline-block;
    margin: 0 10px;
    padding: 15px 15px;
    
    &:hover {
        background: #FFA200;
        cursor: pointer;
      }

    a {
      color: #fff;
      text-decoration: none;
    }
  }
}
`;