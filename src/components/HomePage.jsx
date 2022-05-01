import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";

const { Title } = Typography;
const HomePage = () => {
  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row>
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" value={12150} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Exchanges" value={373} />
        </Col>
        <Col span={12} style={{ marginTop: 32 }}>
          <Statistic title="Total Market Cap" value={`$2.2T`} />
        </Col>
        <Col span={12} style={{ marginTop: 32 }}>
          <Statistic title="Total 24h Volume" value={`$135.5B`} />
        </Col>
        <Col span={12} style={{ marginTop: 32 }}>
          <Statistic title="Total Cryptocurrencies" value={12150} />
        </Col>
        <Col span={12} style={{ marginTop: 32 }}>
          <Statistic title="Total Markets" value={`79.8k `} />
        </Col>
      </Row>
    </>
  );
};

export default HomePage;
