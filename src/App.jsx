import { GlobalStyle } from './styles/geral';
import { Header } from './components/Header/Header';
import { Menu } from './components/Menu/Menu';
import { SimpleSlider } from './components/SimpleSlider/SimpleSlider';
import { SectionsBar } from './components/SectionsBar/SectionsBar';
import { NewProducts } from './components/NewProducts/NewProducts';
import { GatosCaes } from './components/GatosCaes/GatosCaes';
import { Destaques } from './components/Destaques/Destaques';
import { News } from './components/News/News';
import { Footer } from './components/Footer/Footer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { api } from './services/api';
import { useState, useEffect } from 'react';

export function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get('/products').then((response) => {
      setProducts(response.data);
    })

  }, []);
  return (
    <main>
      <Header />
      <Menu />
      <SimpleSlider />
      <SectionsBar />
      <NewProducts products={products} />
      <GatosCaes />
      <Destaques products={products} />
      <News />
      <Footer />
      <GlobalStyle />
    </main>
  );
}

