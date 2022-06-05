import React from "react";
import { Layout, Typography } from "antd";
import "./navbar.styles.css";
const { Header } = Layout;
const { Title } = Typography;
function Navbar() {
  return (
    <Header>
      <div className="logo" />
      <Title
        style={{
          color: "#fff",
          textAlign: "center",
          margin: 0,
          padding: 0,
          lineHeight: 1.7,
        }}
      >
        Cars Booking
      </Title>
    </Header>
  );
}

export default Navbar;
