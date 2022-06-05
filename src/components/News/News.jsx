import imgCoracao from '../../assets/coracao.png';
import { Container } from './styles';

export function News() {
  return (
    <Container>
      <ul className="perks">
        <li>
          <img src={imgCoracao} alt="coraçãozinho" />
          <span>entrega gratuita a partir de R$ 99</span>
        </li>
        <li>
          <img src={imgCoracao} alt="coraçãozinho" />
          <span>parcelamento sem juros</span>
        </li>
        <li>
          <img src={imgCoracao} alt="coraçãozinho" />
          <span>cadastre-se e ganhe desconto</span>
        </li>
      </ul>
      <div className="newsletter-form">
        <h3>assine nossa newsletter</h3>
        <p>Cadastre-se para receber nossas novidades e descontos exclusivos!</p>
        <form>
          <input type="text" name="nome" id="nome" placeholder="Nome" />
          <input type="text" name="email" id="email" placeholder="E-mail" />
          <button type="submit">enviar</button>
        </form>
      </div>
    </Container>
  );
}