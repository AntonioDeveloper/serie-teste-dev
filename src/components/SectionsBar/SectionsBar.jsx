import imgRacoes from '../../assets/racoes.png';
import imgBrinq from '../../assets/brinquedos.png';
import imgAcess from '../../assets/acessorios.png';
import { Container } from './styles';

export function SectionsBar() {
  return (
    <Container>
      <a href="#">
        <img src={imgRacoes} alt="racoes" />
      </a>
      <a href="#">
        <img src={imgBrinq} alt="brinquedos" />
      </a>
      <a href="#">
        <img src={imgAcess} alt="acessórios" />
      </a>
    </Container>
  )
}