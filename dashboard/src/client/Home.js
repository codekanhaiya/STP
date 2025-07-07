import React from "react";
import styled from "styled-components";

import Dashboard from "./partition/Dashboard";
import TopBar from "./partition/TopBar";

const Home = () => {
  return (
    <Container>
      <TopBar />
      <MainSection>
        <Dashboard />
      </MainSection>
    </Container>
  );
};

export default Home;

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  background: #ffffff;
`;

const MainSection = styled.main`
  flex: 1;
  display: flex;
  overflow: hidden;
  background-color: #f5f7fa;

  @media (max-width: 768px) {
    flex-direction: column;
    overflow: auto;
  }
`;
