import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout, Typography, Space } from "antd";

import {
  Navbar,
  HomePage,
  // Exchanges,
  Cryptocurrencies,
  CryptoDetails,
  News,
} from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="*" element={<HomePage />} />

              <Route exact path="/" element={<HomePage />} />

              {/* <Route exact path="/exchanges" element={<Exchanges />} /> */}

              <Route exact path="/crypto" element={<Cryptocurrencies />} />

              <Route exact path="/crypto/:coinId" element={<CryptoDetails />} />

              <Route exact path="/news" element={<News />} />
            </Routes>
          </div>
        </Layout>
        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            Cryptospace <br />
            All right reserved.
          </Typography.Title>
          <Space>
            <a
              href="https://github.com/phyowainyunt-19"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default App;
