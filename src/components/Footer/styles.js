import styled from 'styled-components';

export const Container = styled.footer`
  padding: 20px 10px;

  .columns {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-items: center;
    text-align: center;

    @media screen and (max-width: 767px) {
      display: flex;
      flex-direction: column;
    }

    .infos {
      img {
        width: 200px;
      }

      ul {
        list-style-type: none;
        display: flex;
        justify-content: center;
        margin-top: 20px;

        li {
          display: inline-block;
          margin: 10px 20px;

          a {
            text-decoration: none;

            .fi.fi-brands-facebook {
              font-size: 28px;
              color: #666;

              &:hover {
                cursor: pointer;
                &:before {
                  color: #FFA200;
                }
              }
            }

            .fi.fi-brands-instagram,
            .fi.fi-brands-twitter {
              background: #666;
              color: #fff;
              padding: 6px 6px;
              border-radius: 50px;
              display: flex;

              &:hover {
                background: #FFA200;
                cursor: pointer;
              }
            }
          }
        }
      }

      p {
        color: #666;
        font-size: 12px;
        line-height: 14px;
      }

      @media screen and (max-width: 767px) {
        order: 2
      }
    }

    .institutional { 
        display: flex;
        align-items: center;
        text-align: left;

        @media screen and (max-width: 767px) {
          justify-content: center;
          margin-bottom: 20px;
        }

      .links {
        list-style-type: none;

        li {
          @media screen and (max-width: 767px) {
            text-align: center;
          }
          a {
            text-decoration: none;
            color: #666;
            line-height: 25px;

            @media screen and (max-width: 767px) {
              line-height: 35px;
            }
          }
        }
      }
    }

    .contact {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;

      @media screen and (max-width: 767px) {
        margin-bottom: 20px;
      }
      
      p {
        color: #666;
        line-height: 25px;

        @media screen and (max-width: 767px) {
          line-height: 35px;
        }
      }

      a {
        color: #666;
      }
    }

    .payment {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;

      @media screen and (max-width: 767px) {
        margin-bottom: 20px;
      }

      p{
        color: #666;
        line-height: 25px;

        @media screen and (max-width: 767px) {
          line-height: 35px;
        }
      }
    }
  }

  .developer {
      width: 100%;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;

      @media screen and (max-width: 767px) {
        margin-top: 20px;
      }
      
      span {
        margin-right: 30px;
        font-size: 12px;
      }
    }

    .rollup,
    .whatsapp {
      width: 51px;
      height: 51px;
    }

    .rollup {
      position: fixed;
      display: none;
      z-index: 1;
      bottom: 20%;
      right: 10%;
      display: block;
    }

    .whatsapp {
      position: fixed;
      z-index: 1;
      bottom: 10%;
      right: 10%;
    }

    .hidden {
      display: none;
    }
`;