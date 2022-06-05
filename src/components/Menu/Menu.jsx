import imgMenu from '../../assets/burger.png';
import { Container } from './styles';

export function Menu() {
  return (
    <Container>
      <ul>
        <img src={imgMenu} alt="menu" />
        <li>
          <a href="#">Categoria</a>
        </li>
        <li>
          <a href="#">Categoria</a>
        </li>
        <li>
          <a href="#">Categoria</a>
        </li>
        <li>
          <a href="#">Categoria</a>
        </li>
        <li>
          <a href="#">Categoria</a>
        </li>
        <li>
          <a href="#">Categoria</a>
        </li>
      </ul>
    </Container>
  )
}