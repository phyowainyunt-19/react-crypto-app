import React, { useState, useEffect } from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  // MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import icon from "../images/cryptocurrency.png";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(null);

  //* Handle Screen Size
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //* Watch Screen Size Changes
  useEffect(() => {
    if (screenSize < 768) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/">Cryptospace</Link>
        </Typography.Title>
        {/* Menu Button */}
        <Button
          className="menu-control-container"
          onClick={() => setActiveMenu(!activeMenu)}
        >
          <MenuOutlined />
        </Button>
      </div>
      {/* Menu */}
      {/*
       * Ant Design Version 4.2.0 warning
       * Use 'items'
       */}
      {activeMenu && (
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
            // {
            //   label: <Link to="/exchanges">Exchanges</Link>,
            //   icon: <MoneyCollectOutlined />,
            // },
            {
              label: <Link to="/news">News</Link>,
              icon: <BulbOutlined />,
            },
          ]}
        />
      )}
    </div>
  );
};

export default Navbar;
