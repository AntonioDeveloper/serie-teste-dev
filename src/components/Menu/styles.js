import styled from 'styled-components';

export const Container = styled.nav`
  position: fixed;
  background: #8158C5;
  max-width: 1024px;
  width: 100%;
  height: 50px;
  z-index: 1;
  
  .is-visible {
    display: flex;
  }
  
  @media screen and (max-width: 768px) {
    z-index: 1001;
    position: relative;
  }
  
  ul {
    display: flex;
    justify-content: center;
    list-style-type: none;
    align-items: center;
    height: 50px;

    @media screen and (max-width: 768px) {
      position: fixed;
      height: calc(100vh - 150px);
      top: 170px;
      left: 0;
      width: 100%;
      height: 100%;
      background: #8158C5;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      margin-top: 50px;
      display: none;
    }

    .nav-link {
      margin: 0 20px;
      width: 10%;
      text-align: center;

      @media screen and (max-width: 768px) {
        flex: initial;
        width: 100%;
        line-height: 40px;
        padding-left: 10px;
      }

      &:hover {
        background: #FFA200;
        padding: 14px 0;
        height: 20px;
        cursor: pointer;

        .dropdown {
          display: block;

          @media screen and (max-width: 768px) {
            width: 100%;
            top: -6px;
          }
        }
      }
      
      a {
        color: #fff;
        text-decoration: none;
        
        @media screen and (max-width: 768px) {
          padding-left: 10px;
        }
      }

      .dropdown {
        position: relative;
        left: 0;
        top: 15px;
        background: #fff;
        display: none;
        /* overflow-x: auto; */
        width: 210px;

        .second-level {
          border-bottom: 1px solid #666;
          max-height: 35px;

          &:hover {
              background: #ccc;
              color: #fff;
              width: 100%;

              .dropdown-second {
                display: block;
              }
            }

          a {
            color: #666;
            line-height: 35px;
          }
        }
      }

      .dropdown-second {
        position: relative;
        left: 211px;
        top: -35px;
        background: #fff;
        display: none;
        overflow-x: auto;
        width: 210px;

        .third-level {
          border-bottom: 1px solid #666;
          max-height: 35px;

          &:hover {
              background: #ccc;
              color: #fff;
              width: 100%;
            }

          a {
            color: #666;
            line-height: 35px;
          }
        }
      }
    }
  }

  .hamburger-menu-container {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    

    @media screen and (max-width:768px) {
      display: flex;
    }
  }

  .hamburguer-menu {
    width: 2.5rem;
    height: 2.5rem;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    left: 1rem;
    position: absolute;
    
    @media screen and (min-width: 1025px) {
      display:none;
    }
  }

  .hamburguer-menu {
    div {
      width: 1.6rem;
      height: 3px;
      border-radius: 3px;
      background-color: orange;
      position: relative;
      z-index: 1001;
      transition: .5s;
    }
  }

  .hamburguer-menu div:before,  
  .hamburguer-menu div:after {
    content: '';
    position: absolute;
    width: inherit;
    height: inherit;
    background-color: orange;
    border-radius: 3px;
    transition: .5s;
  }

  .hamburguer-menu {
    div {
      &:before {
        transform: translateY(-7px);
      }
    }
  }

  .hamburguer-menu {
    div {
      &:after {
        transform: translateY(7px);
      }
    }
  }

  #check {
    position: absolute;
    top: 42%;
    left: 1rem;
    transform: translateY(-50%);
    width: 2.5rem;
    height: 2.5rem;
    z-index: 9000;
    cursor: pointer;
    opacity: 0;

    @media screen and (max-width:768px) {
      display: block;
    }
  }

  #check:checked ~ .hamburger-menu-container
  .hamburguer-menu div{
    background-color: transparent;
     
  }

  #check:checked ~ .hamburger-menu-container
  .hamburguer-menu div:before{
    transform: translateY(0) rotate(-45deg);
  }

  #check:checked ~ .hamburger-menu-container
  .hamburguer-menu div:after{
    transform: translateY(0) rotate(45deg);
  }

`;

// max-width: 1024px;
//   width: 100%;
//   height: 50px;
//   background: #8158C5;
//   display: flex;
//   align-items: center;
//   position: fixed;
//   z-index: 1;

//   @media screen and (max-width: 768px) {
//     width: 100%;
//   }

//   img {
//     display: inline-block;
//     &:hover {
//       cursor: pointer;
//     }
//   }

//   ul {
//     display: flex;
//     width: 100%;
//     justify-content: center;
//     align-items: center;

//     li {
//       display: inline-block;
//       margin: 0 10px;
//       padding: 15px 15px;
//       position: relative;

//       .second-level {
//         float: left;
//         overflow: hidden;
//         display: none;
//         position: absolute;
//         left: 0;
//         background-color: #fff;
//         width: 200%;
//         z-index: 1;
//         top: 50px;

//         a {
//           color: #666;
//           line-height: 40px;
//           padding-left: 5px;

//           &:hover {
//             color: #fff;
//             background: #666;
//           }
//         }


//       }

//       .submenu {
//         float: left;
//         overflow: hidden;
//         display: none;
//         position: absolute;
//         left: 0;
//         background-color: #fff;
//         width: 200%;
//         z-index: 1;
//         top: 50px;

//         a {
//           color: #666;
//           line-height: 40px;
//           padding-left: 5px;

//           &:hover {
//             color: #fff;
//             background: #666;
//           }
//         }
//       }

//       &:hover {
//           background: #FFA200;
//           cursor: pointer;
//           .second-level {
//             display: flex;
//             flex-direction: column;
//           }
//         }

//       a {
//         color: #fff;
//         text-decoration: none;
//       }
//     }

//     .submenu {
//       li {
//         .third-level {
//         float: left;
//         overflow: hidden;
//         display: none;
//         position: absolute;
//         left: 0;
//         background-color: #fff;
//         width: 200%;
//         z-index: 1;
//         top: 50px;

//         a {
//           color: #666;
//           line-height: 40px;
//           padding-left: 5px;

//           &:hover {
//             color: #fff;
//             background: #666;
//           }
//         }
//       }
//     }
//   }