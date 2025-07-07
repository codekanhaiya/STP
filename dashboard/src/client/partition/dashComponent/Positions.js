// import React, { useEffect, useState } from "react";
// import axios from "axios";
import styled from "styled-components";

import { allPositions } from "../common/data/data";

const Positions = () => {
  // const [allPositions, setPositions] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3002/allPositions")
  //     .then((res) => setPositions(res.data))
  //     .catch((err) => console.error(err));
  // }, []);

  return (
    <Wrapper>
      <Title>Positions ({allPositions.length})</Title>

      <Table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>
        </thead>
        <tbody>
          {allPositions.map((stock, index) => {
            const curValue = stock.price * stock.qty;
            const plValue = curValue - stock.avg * stock.qty;
            const isProfit = plValue >= 0;
            const profClass = isProfit ? "profit" : "loss";
            const dayClass = stock.day.startsWith("-") ? "loss" : "profit";

            return (
              <tr key={index}>
                <td>{stock.product}</td>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td className={profClass}>{plValue.toFixed(2)}</td>
                <td className={dayClass}>{stock.day}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Wrapper>
  );
};

export default Positions;

// Styled Component
const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;
  padding: 1rem 0;
`;

const Title = styled.h3`
  font-size: 1.3rem;
  font-weight: 500;
  color: #444;
  margin-bottom: 1rem;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.85rem;

  th,
  td {
    text-align: right;
    padding: 0.75rem;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
  }

  th:first-child,
  td:first-child {
    text-align: left;
  }

  .profit {
    color: #4caf50;
    font-weight: 500;
  }

  .loss {
    color: #f44336;
    font-weight: 500;
  }
`;
