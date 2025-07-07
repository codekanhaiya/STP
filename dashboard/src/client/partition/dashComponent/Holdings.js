// import React, { useState, useEffect } from "react";
// import axios from "axios";
import { VerticalGraph } from "./show/VerticalGraph";
import styled from "styled-components";

import { allHoldings } from "../common/data/data";

const Holdings = () => {
  // const [allHoldings, setAllHoldings] = useState([]);

  // useEffect(() => {
  //   axios.get("http://localhost:3002/allHoldings").then((res) => {
  //     setAllHoldings(res.data);
  //   });
  // }, []);

  // Aggregated summary
  const totalInvestment = allHoldings.reduce(
    (acc, item) => acc + item.avg * item.qty,
    0
  );
  const currentValue = allHoldings.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );
  const profitLoss = currentValue - totalInvestment;
  const profitPercent = ((profitLoss / totalInvestment) * 100).toFixed(2);

  const labels = allHoldings.map((stock) => stock.name);
  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: "rgba(54, 162, 235, 0.5)",
      },
    ],
  };

  const sortedHoldings = [...allHoldings].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <Wrapper>
      <Title>Holdings ({allHoldings.length})</Title>

      <TableWrapper>
        <StyledTable>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>
          <tbody>
            {sortedHoldings.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const isProfit = curValue - stock.avg * stock.qty >= 0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.day.startsWith("-") ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{curValue.toFixed(2)}</td>
                  <td className={profClass}>
                    {(curValue - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={profClass}>{stock.net}</td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </StyledTable>
      </TableWrapper>

      <Summary>
        <Card>
          <h5>
            ₹{totalInvestment.toFixed(2).split(".")[0]}
            <span>.{totalInvestment.toFixed(2).split(".")[1]}</span>
          </h5>
          <p>Total investment</p>
        </Card>
        <Card>
          <h5>
            ₹{currentValue.toFixed(2).split(".")[0]}
            <span>.{currentValue.toFixed(2).split(".")[1]}</span>
          </h5>
          <p>Current value</p>
        </Card>
        <Card>
          <h5 className={profitLoss >= 0 ? "profit" : "loss"}>
            ₹{profitLoss.toFixed(2)} ({profitPercent}%)
          </h5>
          <p>P&L</p>
        </Card>
      </Summary>

      <GraphContainer>
        <VerticalGraph data={data} />
      </GraphContainer>
    </Wrapper>
  );
};

export default Holdings;

// Styled Components
const Wrapper = styled.div`
  width: 100%;
  padding: 1rem 0;
`;

const Title = styled.h3`
  font-size: 1.3rem;
  font-weight: 500;
  color: #444;
  margin-bottom: 1rem;
`;

const TableWrapper = styled.div`
  overflow-x: auto;
  margin-bottom: 2rem;

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 4px;
  }
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.85rem;
  min-width: 700px;

  th,
  td {
    text-align: right;
    padding: 0.75rem;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    white-space: nowrap;
  }

  th:first-child,
  td:first-child {
    text-align: left;
  }

  .profit {
    color: #4caf50;
  }

  .loss {
    color: #f44336;
  }
`;

const Summary = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  gap: 1rem;
  flex-wrap: wrap;
`;

const Card = styled.div`
  flex: 1;
  min-width: 180px;

  h5 {
    font-size: 1.6rem;
    font-weight: 500;
    color: #444;
    display: flex;
    align-items: baseline;
  }

  h5 span {
    font-size: 1rem;
    font-weight: 300;
    margin-left: 2px;
  }

  p {
    font-size: 0.9rem;
    color: #999;
    margin-top: 0.3rem;
  }

  .profit {
    color: #4caf50;
  }

  .loss {
    color: #f44336;
  }
`;

const GraphContainer = styled.div`
  margin-top: 3rem;

  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`;
