import { React } from "react";
import Slider from "react-slick";
import { Container } from './styles';

export function NewProducts({ products }) {
  var settings = {
    arrow: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
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
      <h1>Novidades</h1>
      <Slider {...settings}>
        {products.map((prod) => {
          return (
            <div className="card" key={prod.id}>
              <div className="overlay">
                <span>compra rápida</span>
              </div>
              {prod.flag !== "" ? <div className="flag">{prod.flag}</div> : <div></div>}
              <img src={prod.image} alt={prod.name} />
              <p>{prod.name}</p>
              <p>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(prod.price)}</p>
            </div>
          )
        })}
      </Slider>
    </Container>
  );
}