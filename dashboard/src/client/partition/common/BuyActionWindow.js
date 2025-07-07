import React, { useState, useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import { Close } from "@mui/icons-material";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const { closeBuyWindow } = useContext(GeneralContext);

  const handleBuyClick = async () => {
    if (stockQuantity <= 0 || stockPrice <= 0) {
      alert("Quantity and price must be greater than 0");
      return;
    }

    try {
      await axios.post("http://localhost:3002/newOrder", {
        name: uid,
        qty: stockQuantity,
        price: stockPrice,
        mode: "BUY",
      });
      closeBuyWindow();
    } catch (error) {
      alert("Error placing order. Please try again.");
      console.error(error);
    }
  };

  return (
    <Modal>
      <Header>
        <h3>Buy {uid}</h3>
        <Close className="close-icon" onClick={closeBuyWindow} />
      </Header>

      <Body>
        <FormGroup>
          <label>Quantity</label>
          <input
            type="number"
            value={stockQuantity}
            onChange={(e) => setStockQuantity(Number(e.target.value))}
            min="1"
          />
        </FormGroup>

        <FormGroup>
          <label>Price</label>
          <input
            type="number"
            value={stockPrice}
            onChange={(e) => setStockPrice(Number(e.target.value))}
            step="0.05"
            min="0"
          />
        </FormGroup>

        <Margin>
          Estimated margin: ₹{(stockQuantity * stockPrice).toFixed(2)}
        </Margin>

        <ActionButtons>
          <button className="buy" onClick={handleBuyClick}>
            Confirm Buy
          </button>
          <button className="cancel" onClick={closeBuyWindow}>
            Cancel
          </button>
        </ActionButtons>
      </Body>
    </Modal>
  );
};

export default BuyActionWindow;

// Styled Component
const Modal = styled.div`
  background: #ffffff;
  width: 400px;
  max-width: 90vw;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0px 12px 30px rgba(0, 0, 0, 0.2);
  animation: fadeIn 0.25s ease-in-out;
  position: relative;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.96);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    margin: 0;
    font-size: 1.2rem;
    color: #333;
  }

  .close-icon {
    cursor: pointer;
    color: #888;
    &:hover {
      color: #111;
    }
  }
`;

const Body = styled.div`
  margin-top: 1rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  label {
    font-size: 0.85rem;
    margin-bottom: 0.4rem;
    color: #555;
  }

  input {
    padding: 0.6rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 1rem;
    outline: none;

    &:focus {
      border-color: #4caf50;
    }
  }
`;

const Margin = styled.p`
  font-size: 0.9rem;
  color: #444;
  margin-top: -0.5rem;
  margin-bottom: 1.5rem;
`;

const ActionButtons = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  button {
    flex: 1;
    padding: 0.6rem;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    cursor: pointer;
    transition: 0.2s ease;
  }

  .buy {
    background: #4caf50;
    color: white;
  }

  .cancel {
    background: #f44336;
    color: white;
  }

  .buy:hover {
    background: #43a047;
  }

  .cancel:hover {
    background: #e53935;
  }
`;
