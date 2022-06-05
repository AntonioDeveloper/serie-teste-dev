import imgGatos from '../../assets/para-gatos.png';
import imgCaes from '../../assets/para-caes.png';
import { Container } from './style';

export function GatosCaes() {
  return (
    <Container>
      <a href="#">
        <img src={imgGatos} alt="Para Gatos" />
      </a>
      <a href="#">
        <img src={imgCaes} alt="Para Cães" />
      </a>
    </Container>
  )
}