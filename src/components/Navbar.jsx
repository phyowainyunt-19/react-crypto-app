import React from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import icon from "../images/cryptocurrency.png";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/">Cryptospace</Link>
        </Typography.Title>
        {/* <Button className="menu-control-container">
        </Button> */}
      </div>
      {/* Menu */}
      {/*
       * Ant Design Version 4.2.0 warning
       * Use 'items'
       */}
      <Menu
        theme="dark"
        items={[
          {
            label: <Link to="/">Home</Link>,
            icon: <HomeOutlined />,
          },
          {
            label: <Link to="/crypto">Cryptocurrencies</Link>,
            icon: <FundOutlined />,
          },
          {
            label: <Link to="/exchanges">Exchanges</Link>,
            icon: <MoneyCollectOutlined />,
          },
          {
            label: <Link to="/news">News</Link>,
            icon: <BulbOutlined />,
          },
        ]}
      ></Menu>
    </div>
  );
};

export default Navbar;
