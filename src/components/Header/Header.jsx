import imgLogo from '../../assets/logo.png';
import imgUser from '../../assets/user.png';
import imgCart from '../../assets/cart.png';
import imgLens from '../../assets/maglens.png';
import { Container } from './styles';

export function Header() {
  return (
    <Container>
      <div className="searchbox">
        <input type="text" name="searchbar" id="searchbar" placeholder="Pesquisa..." />
        <button type="submit" >
          <img src={imgLens} alt="lupa" />
        </button>
      </div>
      <img src={imgLogo} alt="Pet Store" />
      <div className="icons">
        <a href="#" className="login">
          <img src={imgUser} alt="user icon" />
        </a>
        <a href="#" className="cart">
          <img src={imgCart} alt="cart icon" />
        </a>
      </div>
    </Container>
  )
}