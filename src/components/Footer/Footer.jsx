import { useState, useEffect } from 'react';
import { Container } from './styles';
import imgLogoPet from '../../assets/logo.png';
import imgLogoSerie from '../../assets/serie-logo.png';
import imgCards from '../../assets/cards.png';
import imgArrow from '../../assets/roll-up-arrow.png';
import imgWa from '../../assets/whatsapp.png';

export function Footer() {

  const [visible, setVisible] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    console.log(scrollPosition);
    setScrollPosition(window.scrollY);

    const heightLimit = window.screen.height * 0.8;

    if (scrollPosition > heightLimit) {
      setVisible(true);
    } else if (scrollPosition < window.screen.height * 0.1) {
      setVisible(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition]);

  return (
    <Container>
      <div className="columns">
        <div className="infos">
          <img src={imgLogoPet} alt="Pet Store" />
          <ul className="social">
            <li>
              <a href="#">
                <i className="fi fi-brands-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fi fi-brands-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fi fi-brands-twitter"></i>
              </a>
            </li>
          </ul>
          <p>&copy; 2019 - CNPJ 00.000.000/0000-00</p>
          <p>Rua Tal de Tal, 123 - Cidade, Estado</p>
        </div>
        <div className="institutional">
          <ul className="links">
            <li>
              <a href="#">Quem Somos</a>
            </li>
            <li>
              <a href="#">Como Comprar</a>
            </li>
            <li>
              <a href="#">Trocas e Devoluções</a>
            </li>
            <li>
              <a href="#">Frete e Entregas</a>
            </li>
          </ul>
        </div>
        <div className="contact">
          <p>Contato <br /> (99) 9999-9999</p>
          <a href="mailto: petstore@petstore.com">Enviar e-mail</a>
        </div>
        <div className="payment">
          <p>Pagamento</p>
          <img src={imgCards} alt="Formas de pagamento" />
        </div>
      </div>
      <div className="developer">
        <span>Tecnologia e desenvolvimento</span>
        <a href="https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjoqKSxiZn4AhUMPJEKHcmSC58YABABGgJjZQ&ae=2&ohost=www.google.com&cid=CAESbOD2I-nT8LOMse40TgM49IGcJx4U2kcoEesnwVlc_BYpU8li-6W-cnmNHilFadhDAWWWnKMKCn_aorXy47QBPqGho3EXqvGJQwLuXY1DK-DIQF-Ulwz9LyZ2RXUcZ62PWNalY-ndMQqg1VVahQ&sig=AOD64_2tucd2wsmLt0ZraGjlvd641ht6uA&q&adurl&ved=2ahUKEwirgp6xiZn4AhUOAbkGHYqRDOMQ0Qx6BAgDEAE" target="_blank">
          <img src={imgLogoSerie} alt="Serie" />
        </a>
      </div>
      <div className={`rollup ${visible ? "" : "hidden"}`}>
        <a href="#top" >
          <img src={imgArrow} alt="Ir para o topo" />
        </a>
      </div>
      <div className="whatsapp">
        <img src={imgWa} alt="Whatsapp" />
      </div>
    </Container>
  )
}