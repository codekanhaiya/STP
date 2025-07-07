import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Orders = () => {
  return (
    <OrdersWrapper>
      <EmptyOrders>
        <IconPlaceholder>📄</IconPlaceholder>
        <Message>You haven't placed any orders today</Message>
        <StyledLink to="/">Get Started</StyledLink>
      </EmptyOrders>
    </OrdersWrapper>
  );
};

export default Orders;

// Styled Components
const OrdersWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
    min-height: auto;
  }
`;

const EmptyOrders = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
  width: 100%;
  background: #fff;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);

  @media (max-width: 480px) {
    padding: 1.5rem 1rem;
  }
`;

const IconPlaceholder = styled.div`
  font-size: 4rem;
  margin-bottom: 1rem;
  opacity: 0.3;

  @media (max-width: 480px) {
    font-size: 3rem;
  }
`;

const Message = styled.p`
  color: #777;
  font-size: 1.1rem;
  margin-bottom: 1rem;
  font-weight: 300;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const StyledLink = styled(Link)`
  background-color: #4184f3;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 6px;
  font-size: 0.95rem;
  font-weight: 500;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #6c9cf7;
  }

  @media (max-width: 480px) {
    padding: 8px 16px;
    font-size: 0.9rem;
  }
`;
