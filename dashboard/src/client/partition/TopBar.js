import React from "react";
import styled from "styled-components";
import Menu from "./topComponent/Menu";
import { allHoldings } from "./common/data/data";

const TopBar = () => {
  const sorted = [...allHoldings].sort(
    (a, b) => b.price * b.qty - a.price * a.qty
  );
  const maxHolding = sorted[0];
  const minHolding = sorted[sorted.length - 1];

  return (
    <TopBarContainer>
      <Left>
        <Logo src="/logo.png" alt="Logo" />
        <Indices>
          <Index>
            <Label>{maxHolding.name}</Label>
            <Value className="up">
              ₹{(maxHolding.price * maxHolding.qty).toFixed(2)}
            </Value>
          </Index>
          <Index>
            <Label>{minHolding.name}</Label>
            <Value className="down">
              ₹{(minHolding.price * minHolding.qty).toFixed(2)}
            </Value>
          </Index>
        </Indices>
      </Left>
      <Right>
        <Menu />
      </Right>
    </TopBarContainer>
  );
};

export default TopBar;

// Styled Component
const TopBarContainer = styled.div`
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
  height: 60px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 1rem;
  }
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 1rem;
    justify-content: center;
  }
`;

const Logo = styled.img`
  width: 40px;
  height: 40px;
  object-fit: contain;
`;

const Indices = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const Index = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.p`
  font-size: 0.9rem;
  font-weight: 500;
  color: #444;
  margin: 0;
`;

const Value = styled.p`
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
  color: #4caf50;

  &.down {
    color: #f44336;
  }
`;
