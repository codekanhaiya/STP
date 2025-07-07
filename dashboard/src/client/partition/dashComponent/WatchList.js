import React, { useState, useContext } from "react";
import styled from "styled-components";
import GeneralContext from "../common/GeneralContext";

import {
  BarChartOutlined,
  KeyboardDoubleArrowDown,
  KeyboardDoubleArrowUp,
  MoreHoriz,
} from "@mui/icons-material";
import { Tooltip, Grow } from "@mui/material";

import { watchlist } from "../common/data/data";
import { DoughnutChart } from "./show/DoughnoutChart";

const labels = watchlist.map((stock) => stock.name);

const WatchList = () => {
  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: watchlist.map((stock) => stock.price),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Container>
      <SearchBar>
        <input
          type="text"
          placeholder="Search;  eg.: infy, bse, nifty fut weekly, gold mcx"
        />
        <span className="count">{watchlist.length} / 50</span>
      </SearchBar>

      <List>
        {watchlist.map((stock, index) => (
          <WatchListItem stock={stock} key={index} />
        ))}
      </List>

      <DoughnutChart data={data} />
    </Container>
  );
};

export default WatchList;

const WatchListItem = ({ stock }) => {
  const [showActions, setShowActions] = useState(false);

  return (
    <ListItem
      onMouseEnter={() => setShowActions(true)}
      onMouseLeave={() => setShowActions(false)}
    >
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="info">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardDoubleArrowDown className="down" />
          ) : (
            <KeyboardDoubleArrowUp className="up" />
          )}
          <span className="price">₹{stock.price}</span>
        </div>
      </div>

      {showActions && <WatchListActions uid={stock.name} />}
    </ListItem>
  );
};

const WatchListActions = ({ uid }) => {
  const { openBuyWindow } = useContext(GeneralContext);

  return (
    <ActionRow>
      <Tooltip title="Buy (B)" placement="top" arrow TransitionComponent={Grow}>
        <button className="buy" onClick={() => openBuyWindow(uid)}>
          Buy
        </button>
      </Tooltip>
      <Tooltip
        title="Sell (S)"
        placement="top"
        arrow
        TransitionComponent={Grow}
      >
        <button className="sell">Sell</button>
      </Tooltip>
      <Tooltip
        title="Analytics (A)"
        placement="top"
        arrow
        TransitionComponent={Grow}
      >
        <button className="icon-btn">
          <BarChartOutlined />
        </button>
      </Tooltip>
      <Tooltip
        title="More (M)"
        placement="top"
        arrow
        TransitionComponent={Grow}
      >
        <button className="icon-btn">
          <MoreHoriz />
        </button>
      </Tooltip>
    </ActionRow>
  );
};

// Styled Component
const Container = styled.div`
  padding: 1rem;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  input {
    flex: 1;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    border: 1px solid #ccc;
    font-size: 0.9rem;
  }

  .count {
    margin-left: 1rem;
    font-size: 0.85rem;
    color: #888;
  }
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  background-color: #fafafa;
  margin-bottom: 0.5rem;
  border-radius: 8px;
  padding: 0.6rem 1rem;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    background-color: #f0f0f0;
  }

  .item {
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      font-weight: 600;
      font-size: 1rem;
    }

    .up {
      color: #4caf50;
    }

    .down {
      color: #f44336;
    }

    .info {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      .percent {
        font-size: 0.85rem;
      }

      .price {
        font-weight: 500;
        font-size: 0.95rem;
      }
    }
  }
`;

const ActionRow = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.6rem;

  button {
    padding: 0.4rem 0.8rem;
    border: none;
    border-radius: 6px;
    font-size: 0.85rem;
    cursor: pointer;
    transition: background 0.3s ease;
  }

  .buy {
    background-color: #4caf50;
    color: #fff;
  }

  .sell {
    background-color: #f44336;
    color: #fff;
  }

  .icon-btn {
    background-color: #ddd;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.4rem;
  }
`;
