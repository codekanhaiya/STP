import React from "react";
import styled from "styled-components";

const Summary = () => {
  return (
    <Wrapper>
      <Section>
        <Header>
          <h6>Hi, User!</h6>
          <Divider />
        </Header>

        <Subsection>
          <Title>Equity</Title>
          <DataRow>
            <Column>
              <Value>₹3.74k</Value>
              <Label>Margin available</Label>
            </Column>
            <Divider $vertical />
            <Column>
              <TextRow>
                Margins used: <span>₹0.00</span>
              </TextRow>
              <TextRow>
                Opening balance: <span>₹3.74k</span>
              </TextRow>
            </Column>
          </DataRow>
        </Subsection>

        <Divider />
      </Section>

      <Section>
        <Subsection>
          <Title>Holdings (13)</Title>
          <DataRow>
            <Column>
              <Value className="profit">
                ₹1.55k <small>+5.20%</small>
              </Value>
              <Label>P&L</Label>
            </Column>
            <Divider $vertical />
            <Column>
              <TextRow>
                Current Value: <span>₹31.43k</span>
              </TextRow>
              <TextRow>
                Investment: <span>₹29.88k</span>
              </TextRow>
            </Column>
          </DataRow>
        </Subsection>

        <Divider />
      </Section>
    </Wrapper>
  );
};

export default Summary;

// Styled Components

const Wrapper = styled.div`
  padding: 1rem 1.5rem;
  font-family: "Segoe UI", sans-serif;
  font-size: 0.95rem;

  @media (max-width: 600px) {
    padding: 1rem;
  }
`;

const Section = styled.div`
  margin-bottom: 2rem;
`;

const Header = styled.div`
  h6 {
    font-size: 1.2rem;
    color: #333;
    margin-bottom: 0.5rem;
  }
`;

const Divider = styled.div`
  ${({ $vertical }) =>
    $vertical
      ? `
    width: 1px;
    height: 100%;
    background-color: #eee;
    margin: 0 1rem;

    @media (max-width: 768px) {
      display: none;
    }
  `
      : `
    width: 100%;
    height: 1px;
    background-color: #eee;
    margin: 1.5rem 0;
  `}
`;

const Title = styled.p`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #444;
`;

const Subsection = styled.div`
  display: flex;
  flex-direction: column;
`;

const DataRow = styled.div`
  display: flex;
  gap: 1rem;
  align-items: stretch;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Column = styled.div`
  flex: 1;
  min-width: 220px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Value = styled.h3`
  font-size: 1.8rem;
  margin: 0;
  color: #222;

  &.profit {
    color: #4caf50;
  }

  &.loss {
    color: #f44336;
  }

  small {
    font-size: 0.9rem;
    margin-left: 0.4rem;
  }
`;

const Label = styled.p`
  margin-top: 0.4rem;
  font-size: 0.9rem;
  color: #888;
`;

const TextRow = styled.p`
  margin: 0.4rem 0;
  color: #666;
  font-size: 0.92rem;

  span {
    font-weight: 500;
    color: #222;
  }
`;
