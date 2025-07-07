import React from "react";
import styled from "styled-components";

const Apps = () => {
  return (
    <Wrapper>
      <h2>Connected Apps</h2>
      <InfoCard>
        <h4>Smallcase</h4>
        <p>Invest in expert-curated portfolios based on themes and ideas.</p>
        <ConnectBtn>Connect</ConnectBtn>
      </InfoCard>
      <InfoCard>
        <h4>Sensibull</h4>
        <p>Options trading simplified with tools, strategies, and education.</p>
        <ConnectBtn>Connect</ConnectBtn>
      </InfoCard>
    </Wrapper>
  );
};

export default Apps;

// Styled Components
const Wrapper = styled.div`
  padding: 1rem;
`;

const InfoCard = styled.div`
  background: #fff;
  padding: 1rem 1.5rem;
  margin-bottom: 1.2rem;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);

  h4 {
    margin-bottom: 0.4rem;
    font-weight: 500;
    color: #333;
  }

  p {
    font-size: 0.85rem;
    color: #777;
    margin-bottom: 1rem;
  }
`;

const ConnectBtn = styled.button`
  background: #4184f3;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #669dfc;
  }
`;
