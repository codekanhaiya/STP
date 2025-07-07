import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";

import Apps from "./dashComponent/Apps";
import Funds from "./dashComponent/Funds";
import Holdings from "./dashComponent/Holdings";
import Orders from "./dashComponent/Orders";
import Positions from "./dashComponent/Positions";
import Summary from "./dashComponent/Summary";
import WatchList from "./dashComponent/WatchList";
import { GeneralContextProvider } from "./common/GeneralContext";

const Dashboard = () => {
  return (
    <DashboardWrapper>
      <GeneralContextProvider>
        <Sidebar>
          <WatchList />
        </Sidebar>
        <ContentArea>
          <Routes>
            <Route path="/" element={<Summary />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/holdings" element={<Holdings />} />
            <Route path="/positions" element={<Positions />} />
            <Route path="/funds" element={<Funds />} />
            <Route path="/apps" element={<Apps />} />
          </Routes>
        </ContentArea>
      </GeneralContextProvider>
    </DashboardWrapper>
  );
};

export default Dashboard;

// Styled Components
const DashboardWrapper = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh - 60px); /* Assuming TopBar is 60px */
  background-color: #f0f2f5;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

const Sidebar = styled.aside`
  width: 30%;
  min-width: 260px;
  max-width: 350px;
  border-right: 1px solid #e0e0e0;
  background-color: #ffffff;
  overflow-y: auto;
  padding: 1rem 0.5rem;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
    border-right: none;
    border-bottom: 1px solid #ddd;
  }
`;

const ContentArea = styled.main`
  flex: 1;
  padding: 2rem;
  overflow-y: auto;
  background-color: #f9f9fb;
  border-radius: 0 8px 8px 0;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.03);

  @media (max-width: 768px) {
    padding: 1rem;
    border-radius: 0;
  }
`;
