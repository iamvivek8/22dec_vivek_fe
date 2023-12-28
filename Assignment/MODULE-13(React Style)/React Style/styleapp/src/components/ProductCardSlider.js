// components/ProductCardSlider.js
import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

const ProductCardWrapper = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  max-width: 300px;
  text-align: center;
`;

const ProductCardSliderWrapper = styled.div`
  padding: 20px;
`;

const ProductCardSlider = () => {
  const products = [
    { id: 1, name: 'Product 1', price: '$19.99', image: 'product1.jpg' },
    { id: 2, name: 'Product 2', price: '$29.99', image: 'product2.jpg' },
    { id: 3, name: 'Product 3', price: '$39.99', image: 'product3.jpg' },
    { id: 4, name: 'Product 4', price: '$49.99', image: 'product4.jpg' },
    { id: 5, name: 'Product 5', price: '$59.99', image: 'product5.jpg' },
    { id: 6, name: 'Product 6', price: '$69.99', image: 'product6.jpg' },
  ];

  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <ProductCardSliderWrapper>
      <Slider {...sliderSettings}>
        {products.map((product) => (
          <ProductCard key={product.id}>
            <img src={product.image} alt={product.name} style={{ maxWidth: '100%', height: 'auto' }} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button>Add to Cart</button>
          </ProductCard>
        ))}
      </Slider>
    </ProductCardSliderWrapper>
  );
};

export default ProductCardSlider;
