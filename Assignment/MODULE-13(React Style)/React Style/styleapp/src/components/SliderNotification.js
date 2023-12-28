// components/SliderNotification.js
import React from 'react';
import styled from 'styled-components';

const SliderNotificationWrapper = styled.div`
  background-color: #007bff;
  color: white;
  padding: 10px;
  text-align: center;
`;

const SliderNotification = () => {
  return <SliderNotificationWrapper>Special Offer: Free Shipping on Orders Over $50!</SliderNotificationWrapper>;
};

export default SliderNotification;
