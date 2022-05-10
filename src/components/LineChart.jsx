import React from "react";
import { Line } from "react-chartjs-2";
import { Col, Row, Typography } from "antd";

/**
 ** You will face the error ` "category" is not a registered scale ` unless you add the following imports.
 */

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

const { Title } = Typography;

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  // console.log({ coinHistory });

  const coinPrice = [];
  const coinTimeStamp = [];

  //* For the price and timestamp of coinHistory
  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory?.data?.history[i]?.price);
    coinTimeStamp.push(
      new Date(
        coinHistory?.data?.history[i]?.timestamp * 1000
      ).toLocaleDateString()
    );
    // console.log(coinTimeStamp);
  }

  //* For LineChart Data
  const data = {
    labels: coinTimeStamp,
    datasets: [
      {
        label: "Price in USD",
        data: coinPrice,
        fill: false,
        backgroundColor: "#0071bd",
        borderColor: "#0071bd",
      },
    ],
  };

  //* For LineChat Options
  const options = { scales: { y: { ticks: { beginAtZero: true } } } };

  return (
    <>
      <Row className="chart-header">
        <Title level={3} className="chart-title">
          {coinName} Price Chart
        </Title>
        <Col className="price-container">
          <Title level={5} className="price-change">
            {coinHistory?.data?.change}%
          </Title>
          <Title level={5} className="current-price">
            Current {coinName} price: ${currentPrice}
          </Title>
        </Col>
      </Row>
      <Line data={data} options={options} />
    </>
  );
};

export default LineChart;
