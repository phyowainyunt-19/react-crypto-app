import React, { useState, useEffect } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Input, Row, Col } from "antd";
import { DollarOutlined } from "@ant-design/icons";

import { useGetCryptosQuery } from "../services/cryptoApi";

const Cryptocurrencies = ({ simplified }) => {
  // count for top 10 cryptos
  const count = simplified ? 10 : 100;
  const { data: cryptoList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);
  const [searchTerms, setSearchTerms] = useState("");
  /*
   * searchTerms and onChange သုံးကတည်းက useEffect hook သုံးရမယ်ဆိုတာမမေ့ပါနဲ့
   */

  useEffect(() => {
    const filteredData = cryptoList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerms.toLowerCase())
    );
    setCryptos(filteredData);
  }, [cryptoList, searchTerms]);

  if (isFetching) return "Loading...";

  return (
    <>
      {!simplified && (
        <div className="search-crypto">
          <Input
            size="large"
            prefix={<DollarOutlined style={{ marginRight: ".6rem" }} />}
            placeholder="Search Cryptocurrencies"
            style={{ marginBottom: "1rem" }}
            onChange={(e) => setSearchTerms(e.target.value)}
          />
        </div>
      )}
      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((currency) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card">
            <Link to={`/crypto/${currency.id}`}>
              <Card
                title={`${currency.rank}. ${currency.name}`}
                extra={<img className="crypto-image" src={currency.iconUrl} />}
                hoverable
              >
                <p>Price: {millify(currency.price)}</p> <br />
                <p>Market Cap: {millify(currency.marketCap)}</p> <br />
                <p>Daily Change: {millify(currency.change)}</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Cryptocurrencies;
