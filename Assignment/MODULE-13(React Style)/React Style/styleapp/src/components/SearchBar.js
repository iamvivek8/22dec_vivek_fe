// components/SearchBar.js
import React from 'react';
import styled from 'styled-components';

const SearchBarWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

const SearchBarInput = styled.input`
  width: 300px;
  padding: 10px;
`;

const SearchBar = () => {
  return (
    <SearchBarWrapper>
      <SearchBarInput type="text" placeholder="Search for products..." />
    </SearchBarWrapper>
  );
};

export default SearchBar;
