import React from "react";
import Slider from "react-slick";
import bannerDesk from '../../assets/banner.png';
import bannerMob from '../../assets/banner-mobile.jpg';
import bannerTab from '../../assets/banner-tablet.jpg';
import { Container } from './styles';

export function SimpleSlider() {

  console.log(window.screen.width);

  var settings = {
    arrow: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <Container>
      <Slider {...settings}>
        <div>
          {
            window.screen.width <= 400 ? <img src={bannerMob} alt="banner-mob" />
              : window.screen.width > 400 && window.screen.width <= 768 ?
                <img src={bannerTab} alt="banner-tab" />
                : <img src={bannerDesk} alt="banner-desk" />
          }

        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </Container>
  );
}