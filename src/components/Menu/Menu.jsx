import { Container } from './styles';
import { useState } from 'react';

export function Menu() {

  const [checked, setChecked] = useState(false);

  const [visible, setVisible] = useState(false);

  const toggleMenuMob = () => {
    const winWidth = window.screen.width;
    const element = document.querySelector("nav ul");

    if (winWidth < 920 && element) {
      if (checked === true) {
        element.classList.remove("not-visible");
        element.classList.add("is-visible");
      } else {
        element.classList.remove("is-visible");
        element.classList.add("not-visible");

      }
    }
  }

  const toggleMenuLink = () => {
    const x = document.querySelector('.nav-link');
    const y = document.querySelector(".dropdown");

    setVisible(!visible);
    visible === true ? y.classList.add('not-visible') : y.classList.remove('not-visible');


  }

  toggleMenuMob()

  console.log(visible)
  return (
    <Container>
      <ul>
        <li className="nav-link">
          <a href="#">Categoria</a>
        </li>
        <li className="nav-link">
          <a href="#">Categoria</a>
        </li>
        <li className="nav-link">
          <a href="#">Categoria <i class="fi fi-rr-caret-down"></i></a>
          <div className="dropdown" >
            <li className="second-level">
              <a href="#">Link 1</a>
            </li>
            <li className="second-level">
              <a href="#">Link 2</a>
              <div className="dropdown-second">
                <li className="third-level">
                  <a href="#">Link 1</a>
                </li>
                <li className="third-level">
                  <a href="#">Link 2</a>
                </li>
                <li className="third-level">
                  <a href="#">Link 3</a>
                </li>
                <li className="third-level">
                  <a href="#">Link 4</a>
                </li>
              </div>
            </li>
            <li className="second-level">
              <a href="#">Link 3</a>
            </li>
            <li className="second-level">
              <a href="#">Link 4</a>
            </li>
          </div>
        </li>
        <li className="nav-link">
          <a href="#">Categoria <i class="fi fi-rr-caret-down" ></i></a>
        </li>
        <li className="nav-link">
          <a href="#">Categoria</a>
        </li>
        <li className="nav-link">
          <a href="#">Categoria</a>
        </li>
      </ul>
      <input type="checkbox" name="" id="check" checked={checked} onChange={(e) => setChecked(e.target.checked)} />
      <div className="hamburguer-menu-container">
        <div className="hamburguer-menu">
          <div></div>
        </div>
      </div>
    </Container>
  )
}

{/* <ul>
        <img src={imgMenu} alt="menu" />
        <li>
          <a href="#">Categoria</a>
          <div className="second-level">
            <a href="#">Sub</a>
            <ul className="submenu">
              <li>
                <div className="third-level">
                  <a href="#">Sub</a>
                  <a href="#">Sub</a>
                  <a href="#">Sub</a>
                </div>
              </li>
            </ul>
            <a href="#">Sub</a>
            <a href="#">Sub</a>
          </div>
        </li>
        <li>
          <a href="#">Categoria</a>
          <div className="second-level">
            <a href="#">Sub</a>
            <a href="#">Sub</a>
            <a href="#">Sub</a>
          </div>
        </li>
        <li>
          <a href="#">Categoria</a>
          <div className="second-level">
            <a href="#">Sub</a>
            <a href="#">Sub</a>
            <a href="#">Sub</a>
          </div>
        </li>
        <li>
          <a href="#">Categoria</a>
          <div className="second-level">
            <a href="#">Sub</a>
            <a href="#">Sub</a>
            <a href="#">Sub</a>
          </div>
        </li>
        <li>
          <a href="#">Categoria</a>
          <div className="second-level">
            <a href="#">Sub</a>
            <a href="#">Sub</a>
            <a href="#">Sub</a>
          </div>
        </li>
        <li>
          <a href="#">Categoria</a>
          <div className="second-level">
            <a href="#">Sub</a>
            <a href="#">Sub</a>
            <a href="#">Sub</a>
          </div>
        </li>
      </ul> */}