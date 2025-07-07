import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


const Funds = () => {
  return (
    <Wrapper>
      <Header>
        <span>Instant, zero-cost fund transfers with UPI</span>
        <ButtonGroup>
          <StyledLink className="green" to="#">Add Funds</StyledLink>
          <StyledLink className="blue" to="#">Withdraw</StyledLink>
        </ButtonGroup>
      </Header>

      <Grid>
        <LeftPanel>
          <SectionTitle>Equity</SectionTitle>
          <Table>
            <Row>
              <Label>Available margin</Label>
              <Value className="highlight">₹4,043.10</Value>
            </Row>
            <Row>
              <Label>Used margin</Label>
              <Value>₹3,757.30</Value>
            </Row>
            <Row>
              <Label>Available cash</Label>
              <Value>₹4,043.10</Value>
            </Row>
            <Divider />
            <Row><Label>Opening Balance</Label><Value>₹4,043.10</Value></Row>
            <Row><Label>Closing Balance</Label><Value>₹3,736.40</Value></Row>
            <Row><Label>Payin</Label><Value>₹4,064.00</Value></Row>
            <Row><Label>SPAN</Label><Value>₹0.00</Value></Row>
            <Row><Label>Delivery margin</Label><Value>₹0.00</Value></Row>
            <Row><Label>Exposure</Label><Value>₹0.00</Value></Row>
            <Row><Label>Options premium</Label><Value>₹0.00</Value></Row>
            <Divider />
            <Row><Label>Collateral (Liquid funds)</Label><Value>₹0.00</Value></Row>
            <Row><Label>Collateral (Equity)</Label><Value>₹0.00</Value></Row>
            <Row><Label>Total Collateral</Label><Value>₹0.00</Value></Row>
          </Table>
        </LeftPanel>

        <RightPanel>
          <EmptyMsg>You don’t have a commodity account</EmptyMsg>
          <OpenBtn to="#">Open Account</OpenBtn>
        </RightPanel>
      </Grid>
    </Wrapper>
  );
};

export default Funds;

// Styled Components
const Wrapper = styled.div`
  width: 100%;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  font-size: 0.9rem;
  color: #666;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 0.6rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 8px 16px;
  font-size: 0.85rem;
  border-radius: 4px;
  color: #fff;
  transition: background 0.3s;

  &.green {
    background-color: #4caf50;
    &:hover {
      background-color: #45a049;
    }
  }

  &.blue {
    background-color: #4184f3;
    &:hover {
      background-color: #689df5;
    }
  }
`;

const Grid = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
`;

const LeftPanel = styled.div`
  flex: 1 1 60%;
`;

const RightPanel = styled.div`
  flex: 1 1 35%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fafafa;
  padding: 2rem;
  border-radius: 8px;
`;

const SectionTitle = styled.h3`
  font-weight: 500;
  margin-bottom: 1rem;
  color: #333;
`;

const Table = styled.div`
  background: #fff;
  padding: 1.2rem;
  border-radius: 8px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.05);
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.6rem 0;
  border-bottom: 1px solid #f1f1f1;
`;

const Label = styled.p`
  font-size: 0.9rem;
  color: #666;
`;

const Value = styled.p`
  font-size: 0.95rem;
  font-weight: 500;
  color: #444;

  &.highlight {
    color: #4184f3;
  }
`;

const Divider = styled.hr`
  margin: 1rem 0;
  border: none;
  height: 1px;
  background-color: #eee;
`;

const EmptyMsg = styled.p`
  font-size: 0.9rem;
  color: #888;
  margin-bottom: 1rem;
  text-align: center;
`;

const OpenBtn = styled(Link)`
  text-decoration: none;
  padding: 10px 20px;
  background: #4184f3;
  color: white;
  font-size: 0.85rem;
  border-radius: 4px;

  &:hover {
    background: #5a9eff;
  }
`;
