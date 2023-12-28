// components/Header.js
import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background-color: #333;
  color: white;
  padding: 10px;
  text-align: center;
`;

const Header = () => {
  return <HeaderWrapper>My Shopping Site</HeaderWrapper>;
};

export default Header;
