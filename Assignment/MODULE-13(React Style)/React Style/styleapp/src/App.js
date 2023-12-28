// App.js
import React from 'react';
import Header from './components/Header';
import SliderNotification from './components/SliderNotification';
import SearchBar from './components/SearchBar';
import ProductCardSlider from './components/ProductCardSlider';
import Footer from './components/Footer';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    background-color: #f5f5f5;
  }
`;

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <SliderNotification />
      <SearchBar />
      <ProductCardSlider />
      <Footer />
    </div>
  );
}

export default App;
